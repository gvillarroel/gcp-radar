---
title: "Generate text by using a Gemini model and the AI.GENERATE_TEXT function \_\
  |\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini
knowledge_key: corpus
source_id: site-docs-reference-4
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/admin-intro
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini
  title: "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\
    \ \_|\_ BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Generate text by using a Gemini model and the AI.GENERATE_TEXT function
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows you how to create a
remote model
that's based on the
gemini-2.5-flash model ,
and how to use that model with the
AI.GENERATE_TEXT function
to extract keywords and perform sentiment analysis.
Costs
In this document, you use the following billable components of Google Cloud:
BigQuery ML . You incur costs for the data that you
process in BigQuery.
Vertex AI . You incur costs for calls to the
Vertex AI service that's represented by the remote model.
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
Console
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
Enable the BigQuery, BigQuery Connection, and Vertex AI APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
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
Enable the BigQuery, BigQuery Connection, and Vertex AI APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Make sure that you have the following role or roles on the project:
BigQuery Admin ,
Project IAM Admin
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
gcloud
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the BigQuery, BigQuery Connection, and Vertex AI APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable bigquery.googleapis.com bigqueryconnection.googleapis.com aiplatform.googleapis.com
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the BigQuery, BigQuery Connection, and Vertex AI APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable bigquery.googleapis.com bigqueryconnection.googleapis.com aiplatform.googleapis.com
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/bigquery.admin,
roles/resourcemanager.projectIamAdmin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Create a dataset
Create a BigQuery dataset to store your ML model.
Console
In the Google Cloud console, go to the BigQuery page.
Go to the BigQuery page
In the Explorer pane, click your project name.
Click more_vert View actions > Create dataset
On the Create dataset page, do the following:
For Dataset ID , enter bqml_tutorial .
For Location type , select Multi-region , and then select
US .
Leave the remaining default settings as they are, and click
Create dataset .
bq
To create a new dataset, use the
bq mk --dataset command .
Create a dataset named bqml_tutorial with the data location set to US .
bq mk --dataset \
--location=US \
--description "BigQuery ML tutorial dataset." \
bqml_tutorial
Confirm that the dataset was created:
bq ls
API
Call the datasets.insert
method with a defined dataset resource .
{
"datasetReference" : {
"datasetId" : "bqml_tutorial"
}
}
Create a connection
Create a
Cloud resource connection in
the US multiregion, where you created the dataset. Then get the connection's
service account.
Select one of the following options:
Console
Go to the BigQuery page.
Go to BigQuery
In the left pane, click explore
Explorer :
If you don't see the left pane, click last_page
Expand left pane to open the pane.
In the Explorer pane, expand your project name, and then click
Connections .
On the Connections page, click Create connection .
For Connection type , choose Vertex AI remote models, remote
functions, BigLake and Spanner (Cloud Resource) .
In the Connection ID field, enter a name for your connection.
For Location type , select a location for your connection. The
connection should be colocated with your other resources such as
datasets.
Click Create connection .
Click Go to connection .
In the Connection info pane, copy the service account ID for use in
a later step.
SQL
Use the CREATE CONNECTION statement :
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, enter the following statement:
CREATE CONNECTION [ IF NOT EXISTS ] ` CONNECTION_NAME `
OPTIONS (
connection_type = "CLOUD_RESOURCE" ,
friendly_name = " FRIENDLY_NAME " ,
description = " DESCRIPTION "
);
Replace the following:
CONNECTION_NAME : the name of the connection in
either the
PROJECT_ID . LOCATION . CONNECTION_ID ,
LOCATION . CONNECTION_ID , or
CONNECTION_ID format. If the project or location
are omitted, then they are inferred from the project and location where
the statement is run.
FRIENDLY_NAME (optional): a descriptive name for
the connection.
DESCRIPTION (optional): a description of the
connection.
Click play_circle Run .
For more information about how to run queries, see Run an interactive query .
bq
In a command-line environment, create a connection:
bq mk --connection --location = REGION --project_id = PROJECT_ID \
--connection_type = CLOUD_RESOURCE CONNECTION_ID
The --project_id parameter overrides the default project.
Replace the following:
REGION : your
connection region
PROJECT_ID : your Google Cloud project ID
CONNECTION_ID : an ID for your
connection
When you create a connection resource, BigQuery creates a
unique system service account and associates it with the connection.
Troubleshooting : If you get the following connection error,
update the Google Cloud SDK :
Flags parsing error: flag --connection_type=CLOUD_RESOURCE: value should be one of...
Retrieve and copy the service account ID for use in a later
step:
bq show --connection PROJECT_ID . REGION . CONNECTION_ID
The output is similar to the following:
name properties
1234. REGION . CONNECTION_ID {"serviceAccountId": "connection-1234-9u56h9@gcp-sa-bigquery-condel.iam.gserviceaccount.com"}
Python
Before trying this sample, follow the Python setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Python API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import google.api_core.exceptions
from google.cloud import bigquery_connection_v1
client = bigquery_connection_v1 . ConnectionServiceClient ()
def create_connection (
project_id : str ,
location : str ,
connection_id : str ,
):
"""Creates a BigQuery connection to a Cloud Resource.
Cloud Resource connection creates a service account which can then be
granted access to other Google Cloud resources for federated queries.
Args:
project_id: The Google Cloud project ID.
location: The location of the connection (for example, "us-central1").
connection_id: The ID of the connection to create.
"""
parent = client . common_location_path ( project_id , location )
connection = bigquery_connection_v1 . Connection (
friendly_name = "Example Connection" ,
description = "A sample connection for a Cloud Resource." ,
cloud_resource = bigquery_connection_v1 . CloudResourceProperties (),
)
try :
created_connection = client . create_connection (
parent = parent , connection_id = connection_id , connection = connection
)
print ( f "Successfully created connection: { created_connection . name } " )
print ( f "Friendly name: { created_connection . friendly_name } " )
print (
f "Service Account: { created_connection . cloud_resource . service_account_id } "
)
except google . api_core . exceptions . AlreadyExists :
print ( f "Connection with ID ' { connection_id } ' already exists." )
print ( "Please use a different connection ID." )
except Exception as e :
print ( f "An unexpected error occurred while creating the connection: { e } " )
Node.js
Before trying this sample, follow the Node.js setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Node.js API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
const { ConnectionServiceClient } =
require ( ' @google-cloud/bigquery-connection ' ). v1 ;
const { status } = require ( '@grpc/grpc-js' );
const client = new ConnectionServiceClient ();
/**
* Creates a new BigQuery connection to a Cloud Resource.
*
* A Cloud Resource connection creates a service account that can be granted access
* to other Google Cloud resources.
*
* @param {string} projectId The Google Cloud project ID. for example, 'example-project-id'
* @param {string} location The location of the project to create the connection in. for example, 'us-central1'
* @param {string} connectionId The ID of the connection to create. for example, 'example-connection-id'
*/
async function createConnection ( projectId , location , connectionId ) {
const parent = client . locationPath ( projectId , location );
const connection = {
friendlyName : 'Example Connection' ,
description : 'A sample connection for a Cloud Resource' ,
// The service account for this cloudResource will be created by the API.
// Its ID will be available in the response.
cloudResource : {},
};
const request = {
parent ,
connectionId ,
connection ,
};
try {
const [ response ] = await client . createConnection ( request );
console . log ( `Successfully created connection: ${ response . name } ` );
console . log ( `Friendly name: ${ response . friendlyName } ` );
console . log ( `Service Account: ${ response . cloudResource . serviceAccountId } ` );
} catch ( err ) {
if ( err . code === status . ALREADY_EXISTS ) {
console . log ( `Connection ' ${ connectionId } ' already exists.` );
} else {
console . error ( `Error creating connection: ${ err . message } ` );
}
}
}
Terraform
Use the
google_bigquery_connection
resource.
Note: To create BigQuery objects using Terraform, you must
enable the Cloud Resource Manager API .
To authenticate to BigQuery, set up Application Default
Credentials. For more information, see
Set up authentication for client libraries .
The following example creates a Cloud resource connection named
my_cloud_resource_connection in the US region:
# This queries the provider for project information.
data "google_project" "default" {}
# This creates a cloud resource connection in the US region named my_cloud_resource_connection.
# Note: The cloud resource nested object has only one output field - serviceAccountId.
resource "google_bigquery_connection" "default" {
connection_id = "my_cloud_resource_connection"
project = data.google_project.default.project_id
location = "US"
cloud_resource {}
}
To apply your Terraform configuration in a Google Cloud project, complete the steps in the
following sections.
Prepare Cloud Shell
Launch Cloud Shell .
Set the default Google Cloud project
where you want to apply your Terraform configurations.
You only need to run this command once per project, and you can run it in any directory.
export GOOGLE_CLOUD_PROJECT= PROJECT_ID
Environment variables are overridden if you set explicit values in the Terraform
configuration file.
Prepare the directory
Each Terraform configuration file must have its own directory (also
called a root module ).
In Cloud Shell , create a directory and a new
file within that directory. The filename must have the
.tf extension—for example main.tf . In this
tutorial, the file is referred to as main.tf .
mkdir DIRECTORY && cd DIRECTORY && touch main.tf
If you are following a tutorial, you can copy the sample code in each section or step.
Copy the sample code into the newly created main.tf .
Optionally, copy the code from GitHub. This is recommended
when the Terraform snippet is part of an end-to-end solution.
Review and modify the sample parameters to apply to your environment.
Save your changes.
Initialize Terraform. You only need to do this once per directory.
terraform init
Optionally, to use the latest Google provider version, include the -upgrade
option:
terraform init -upgrade
Apply the changes
Review the configuration and verify that the resources that Terraform is going to create or
update match your expectations:
terraform plan
Make corrections to the configuration as necessary.
Apply the Terraform configuration by running the following command and entering yes
at the prompt:
terraform apply
Wait until Terraform displays the "Apply complete!" message.
Open your Google Cloud project to view
the results. In the Google Cloud console, navigate to your resources in the UI to make sure
that Terraform has created or updated them.
Note: Terraform samples typically assume that the required APIs are
enabled in your Google Cloud project.
Grant permissions to the connection's service account
Grant the connection's service account the Vertex AI User role. You must grant this role in the same project you created or selected in the
Before you begin section. Granting the role in a different project results in the error bqcx-1234567890-xxxx@gcp-sa-bigquery-condel.iam.gserviceaccount.com does not have the permission to access resource .
To grant the role, follow these steps:
Go to the IAM & Admin page.
Go to IAM & Admin
Click person_add Grant Access .
In the New principals field, enter the service account ID that you
copied earlier.
In the Select a role field, choose Vertex AI , and then
select Vertex AI User role .
Click Save .
Create the remote model
Use the
CREATE MODEL
statement to create a remote model that represents a hosted
Vertex AI model:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, run the following statement:
CREATE OR REPLACE MODEL `bqml_tutorial.gemini_model`
REMOTE WITH CONNECTION ` LOCATION . CONNECTION_ID `
OPTIONS ( ENDPOINT = 'gemini-2.5-flash' );
Replace the following:
LOCATION : the connection location
CONNECTION_ID : the ID of your
BigQuery connection
When you view the connection details
in the Google Cloud console, this is the value in the last section of
the fully qualified connection ID that is shown in
Connection ID , for example
projects/myproject/locations/connection_location/connections/ myconnection
The query takes several seconds to complete, after which the model
gemini_model appears in the bqml_tutorial dataset. There are no query results.
Perform keyword extraction
Perform keyword extraction on IMDB movie reviews by
using the remote model and the AI.GENERATE_TEXT function:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, enter the following statement to perform keyword
extraction on five movie reviews:
SELECT
title , result , review
FROM
AI . GENERATE_TEXT (
MODEL `bqml_tutorial.gemini_model` ,
(
SELECT
CONCAT (
" "" Extract a list of only 3 key words from this review.
List only the key words, nothing else. Review: "" " ,
review ) AS prompt ,
*
FROM
`bigquery-public-data.imdb.reviews`
LIMIT 5
),
STRUCT (
0.2 AS temperature ,
100 AS max_output_tokens ));
The output is similar to the following:
+--------------+------------------+----------------------------------------+
| title | result | review |
+--------------+------------------+----------------------------------------+
| The Guardian | * Costner | Once again Mr. Costner has dragged out |
| | * Kutcher | a movie for far longer than necessary. |
| | * Rescue | Aside from the terrific sea rescue... |
| | | |
| Trespass | * Generic | This is an example of why the majority |
| | * Waste | of action films are the same. Generic |
| | * Cinematography | and boring, there's really nothing... |
| ... | ... | ... |
+--------------+------------------+----------------------------------------+
Perform sentiment analysis
Perform sentiment analysis on IMDB movie reviews by
using the remote model and the AI.GENERATE_TEXT function:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, run the following statement to perform sentiment
analysis on movie reviews:
SELECT
title , result , review
FROM
AI . GENERATE_TEXT (
MODEL `bqml_tutorial.gemini_model` ,
(
SELECT
CONCAT (
" "" Perform sentiment analysis on the following text and
return one the following categories: positive, negative: "" " ,
review ) AS prompt ,
*
FROM
`bigquery-public-data.imdb.reviews`
LIMIT 5
),
STRUCT (
0.2 AS temperature ,
100 AS max_output_tokens ));
The output is similar to the following:
+----------+----------+------------------------------------------------+
| title | result | review |
+----------+----------+------------------------------------------------+
| Quitting | Positive | This movie is amazing because the fact that... |
| Trespass | Negative | This is an example of why the majority of ... |
| ... | ... | ... |
+----------+----------+------------------------------------------------+
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete the project
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
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
Delete individual resources
If you want to reuse the project, then delete the resources that you created
for the tutorial.
Console
Go to the BigQuery page.
Go to BigQuery
Delete the bqml_tutorial dataset. Deleting the dataset also deletes
the remote model.
In the Explorer pane, expand your project and click Datasets
In the Datasets list, click the dataset.
In the details pane, click delete
Delete .
In the Delete dataset dialog, click Delete .
Delete the connection.
In the Explorer pane, expand your project and click Connections .
In the Datasets list, click the connection.
In the details pane, click delete
Delete .
In the Delete connection dialog, enter delete to confirm deletion.
Click Delete .
gcloud
Delete the bqml_tutorial dataset and the remote model.
bq rm --dataset --recursive bqml_tutorial
Delete the connection.
bq rm --connection PROJECT_ID . REGION . CONNECTION_ID
Replace the following:
PROJECT_ID : your Google Cloud project ID
REGION : the connection region
CONNECTION_ID : the connection ID
What's next
Choose a text generation function
Tune a model using your data
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
