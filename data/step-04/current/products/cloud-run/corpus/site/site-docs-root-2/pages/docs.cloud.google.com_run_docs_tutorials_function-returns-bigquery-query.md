---
title: "Create a Cloud Run function that uses BigQuery to submit a query and return\
  \ results. \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run
source_metadata:
  url: https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query
  title: "Create a Cloud Run function that uses BigQuery to submit a query and return\
    \ results. \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Guides
Send feedback
Create a Cloud Run function that uses BigQuery to submit a query and return results.
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows you how to write an HTTP Cloud Run function
that submits a query to BigQuery.
Objectives
In this tutorial, you will:
Prepare the application that submits a query to BigQuery .
Deploy the function with a HTTP trigger .
Test the function .
Costs
In this document, you use the following billable components of Google Cloud:
Artifact Registry
Cloud Build
Cloud Run
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Artifact Registry, Cloud Run Admin API, and Cloud Build APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Set up your Cloud Run development environment
in your Google Cloud project.
If you are under a domain restriction organization policy restricting unauthenticated invocations for your project, you will need to access your deployed service as described under Testing private services .
Required roles
To get the permissions that
you need to deploy Cloud Run services from source,
ask your administrator to grant you the
following IAM roles:
Cloud Run Source Developer ( roles/run.sourceDeveloper )
on your project
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer )
on the Cloud Run service
Service Account User ( roles/iam.serviceAccountUser )
on the service identity
BigQuery Job User ( roles/bigquery.jobUser )
on the service identity
For a list of IAM roles and permissions that are associated with
Cloud Run, see
Cloud Run IAM roles
and Cloud Run IAM permissions .
If your Cloud Run service interfaces with
Google Cloud APIs, such as Cloud Client Libraries, see the
service identity configuration guide .
For more information about granting roles, see
deployment permissions
and manage access .
Roles for the Cloud Build service account
You or your administrator must grant the Cloud Build service account the
following IAM role.
Click to view required roles for the Cloud Build service account
Cloud Build automatically uses the
Compute Engine default service
account as the default Cloud Build service account to build your source code and
Cloud Run resource, unless you override this behavior. For
Cloud Build to build your sources, ask your administrator to grant
Cloud Run Builder
( roles/run.builder ) to the Compute Engine default
service account on your project:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--role = roles/run.builder
Replace PROJECT_NUMBER with your Google Cloud
project number, and PROJECT_ID with your Google Cloud
project ID. For detailed instructions on how to find your project ID, and project number,
see Creating
and managing projects .
Granting the Cloud Run builder role to the Compute Engine default service account
takes a couple of minutes to propagate .
Note:
The
iam.automaticIamGrantsForDefaultServiceAccounts organization policy constraint
prevents the Editor role from being automatically granted to default service accounts. If you
created your organization after May 3, 2024, this constraint is enforced by
default.
We strongly recommend that you enforce this constraint to disable the automatic role grant. If you
disable the automatic role grant, you must decide which roles to grant to the default service
accounts, and then grant these roles
yourself.
If the default service account already has the Editor role, we recommend that you replace the
Editor role with less permissive roles.To safely modify the service account's roles, use Policy Simulator to see the impact of
the change, and then grant and revoke the
appropriate roles .
Prepare the application
Clone the sample application repository to your local machine:
git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git
Alternatively, download the sample as a zip file
and extract it.
Change to the directory that contains the sample code:
cd nodejs-docs-samples/functions/v2/helloBigQuery
Take a look at the sample code. The sample submits a query for words that
occur at least 400 times in the specified dataset, and returns the result.
// Import the Google Cloud client library
const { BigQuery } = require ( ' @google-cloud/bigquery ' );
const bigquery = new BigQuery ();
const functions = require ( '@google-cloud/functions-framework' );
/**
* HTTP Cloud Function that returns BigQuery query results
*
* @param {Object} req Cloud Function request context.
* @param {Object} res Cloud Function response context.
*/
functions . http ( 'helloBigQuery' , async ( req , res ) = > {
// Define the SQL query
// Queries the public Shakespeare dataset using named query parameter
const sqlQuery = `
SELECT word, word_count
FROM \`bigquery-public-data.samples.shakespeare\`
WHERE corpus = @corpus
AND word_count >= @min_word_count
ORDER BY word_count DESC` ;
const options = {
query : sqlQuery ,
// Location must match that of the dataset(s) referenced in the query.
location : 'US' ,
params : { corpus : 'romeoandjuliet' , min_word_count : 400 },
};
// Execute the query
try {
const [ rows ] = await bigquery . query ( options );
// Send the results
res . status ( 200 ). send ( rows );
} catch ( err ) {
console . error ( err );
res . status ( 500 ). send ( `Error querying BigQuery: ${ err } ` );
}
});
Deploy the function
To deploy the function with an HTTP trigger:
Run the following command in the directory that contains the sample code:
gcloud run deploy FUNCTION \
--source . \
--function FUNCTION_ENTRYPOINT \
--base-image BASE_IMAGE \
--region REGION \
--allow-unauthenticated
Replace:
FUNCTION with the name of the function you are
deploying, for example my-bigquery-function . You can omit this parameter
entirely, but you will be prompted for the name if you omit it.
FUNCTION_ENTRYPOINT with the entry point to your function in
your source code. This is the code Cloud Run executes when your
function runs. The value of this flag must be a function name or
fully-qualified class name that exists in your source code. The entry point
you must specify for the sample function is helloBigQuery .
BASE_IMAGE with the base image environment for your
function, for example, nodejs24 . For details about base
images and the packages included in each image, see
Runtimes base images .
REGION with the Google Cloud
region where you want to deploy
your function. For example, europe-west1 .
Optional:
If you are creating a public HTTP function, for example a webhook,
specify the --allow-unauthenticated flag. This flag assigns the
Cloud Run IAM Invoker role to the special identifier
allUser . You can
use IAM to edit this setting
later after you create the service.
Test the function
When the function finishes deploying, copy the uri property.
Visit this URI in your browser.
You should see a list of the words that
match the query criteria, and how many times each word appears in the
target dataset.
Success: You created an HTTP Cloud Run function that submits a
query to BigQuery.
Clean up
To avoid additional charges to your Google Cloud account, delete all the resources
you deployed with this tutorial.
Delete the project
If you created a new project for this tutorial, delete the project.
If you used an existing project and need to keep it without the changes you added
in this tutorial, delete resources that you created for the tutorial .
The easiest way to eliminate billing is to delete the project that you
created for the tutorial.
To delete the project:
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Delete tutorial resources
Delete the Cloud Run service you deployed in this tutorial.
Cloud Run services don't incur costs until they receive requests.
To delete your Cloud Run service, run the following command:
gcloud run services delete SERVICE-NAME
Replace SERVICE-NAME with the name of your service.
You can also delete Cloud Run services from the
Google Cloud console .
Remove the gcloud default region configuration you added during tutorial
setup:
gcloud config unset run / region
Remove the project configuration:
gcloud config unset project
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
