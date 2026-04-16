---
title: "Quickstart: build and create a Node.js job in Cloud Run \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs
knowledge_key: corpus
source_id: site-docs-reference-required-11
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-langchain-service
source_metadata:
  url: https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs
  title: "Quickstart: build and create a Node.js job in Cloud Run \_|\_ Google Cloud\
    \ Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Build and create a Node.js job in Cloud Run
Learn how to create a simple Cloud Run job, then deploy from source,
which automatically packages your code into a container image, uploads the
container image to Artifact Registry, and then deploys to Cloud Run. You can
use other languages in addition to the ones shown.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
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
If you're using an existing project for this guide,
verify that you have the
permissions required to complete this guide . If you created a new project,
then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
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
If you're using an existing project for this guide,
verify that you have the
permissions required to complete this guide . If you created a new project,
then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Run Admin API and Cloud Build APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable run.googleapis.com cloudbuild.googleapis.com
After the Cloud Run Admin API is enabled, the Compute Engine default service account is
automatically created.
Review Cloud Run pricing or estimate costs
with the pricing calculator .
Required roles
To get the permissions that
you need to complete this quickstart,
ask your administrator to grant you the
following IAM roles:
Cloud Run Admin ( roles/run.admin )
on the project
Cloud Run Source Developer ( roles/run.sourceDeveloper )
on the project
Service Account User ( roles/iam.serviceAccountUser )
on the service identity
Logs Viewer ( roles/logging.viewer )
on the project
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Grant the Cloud Build service account access to your project
Cloud Build automatically uses the Compute Engine default
service account as the default
Cloud Build service account to build your source code and
Cloud Run resource, unless you override this behavior.
For Cloud Build to build your sources, grant the Cloud Build service
account the Cloud Run
Builder
( roles/run.builder ) role on your project:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: SERVICE_ACCOUNT_EMAIL_ADDRESS \
--role = roles/run.builder
Replace PROJECT_ID with your Google Cloud
project ID and SERVICE_ACCOUNT_EMAIL_ADDRESS with the
email address of the Cloud Build service account. If you're using the
Compute Engine default service account as the Cloud Build service account, then
use the following format for the service account email address:
PROJECT_NUMBER -compute@developer.gserviceaccount.com
Replace PROJECT_NUMBER with your Google Cloud
project number.
For detailed instructions on how to find your project ID, and project number,
see Creating
and managing projects .
Granting the Cloud Run builder role takes a couple of minutes to propagate .
Writing the sample job
To write a job in Node.js:
Create a new directory named jobs and change directory
into it:
mkdir jobs
cd jobs
Create a package.json file with the following contents:
{
"name" : "jobs" ,
"version" : "1.0.0" ,
"description" : "Node.js sample for Cloud Run jobs" ,
"main" : "index.js" ,
"scripts" : {
"start" : "node index.js"
},
"engines" : {
"node" : ">=16.0.0"
},
"author" : "Google LLC" ,
"license" : "Apache-2.0"
}
In the same directory, create a index.js file for the actual job code. Copy
the following sample lines into it:
// Retrieve Job-defined env vars
const { CLOUD_RUN_TASK_INDEX = 0 , CLOUD_RUN_TASK_ATTEMPT = 0 } = process . env ;
// Retrieve User-defined env vars
const { SLEEP_MS , FAIL_RATE } = process . env ;
// Define main script
const main = async () = > {
console . log (
`Starting Task # ${ CLOUD_RUN_TASK_INDEX } , Attempt # ${ CLOUD_RUN_TASK_ATTEMPT } ...`
);
// Simulate work
if ( SLEEP_MS ) {
await sleep ( SLEEP_MS );
}
// Simulate errors
if ( FAIL_RATE ) {
try {
randomFailure ( FAIL_RATE );
} catch ( err ) {
err . message = `Task # ${ CLOUD_RUN_TASK_INDEX } , Attempt # ${ CLOUD_RUN_TASK_ATTEMPT } failed.\n\n ${ err . message } ` ;
throw err ;
}
}
console . log ( `Completed Task # ${ CLOUD_RUN_TASK_INDEX } .` );
};
// Wait for a specific amount of time
const sleep = ms = > {
return new Promise ( resolve = > setTimeout ( resolve , ms ));
};
// Throw an error based on fail rate
const randomFailure = rate = > {
rate = parseFloat ( rate );
if ( ! rate || rate < 0 || rate > 1 ) {
console . warn (
`Invalid FAIL_RATE env var value: ${ rate } . Must be a float between 0 and 1 inclusive.`
);
return ;
}
const randomFailure = Math . random ();
if ( randomFailure < rate ) {
throw new Error ( 'Task failed.' );
}
};
// Start script
main (). catch ( err = > {
console . error ( err );
process . exit ( 1 ); // Retry Job Task by exiting the process
});
Cloud Run jobs allows users to specify the number of tasks the job is
to execute. This sample code shows how to use the built-in CLOUD_RUN_TASK_INDEX
environment variable. Each task represents one running copy of the container.
Note that tasks are usually executed in parallel. Using multiple tasks is useful
if each task can independently process a subset of your data.
Each task is aware of its index, stored in the CLOUD_RUN_TASK_INDEX
environment variable. The built-in CLOUD_RUN_TASK_COUNT environment variable
contains the number of tasks supplied at job execution time via the --tasks
parameter.
The code shown also shows how to retry tasks, using the built-in
CLOUD_RUN_TASK_ATTEMPT environment variable, which contains the number of
times this task has been retried, starting at 0 for the first attempt and
incrementing by 1 for every successive retry, up to --max-retries .
The code also lets you generate failures as a way to test retries
and to generate error logs so you can see what those look like.
Create a Procfile with the following contents:
# Define the application ' s entrypoint to override default , `npm start`
# https : //github.com/GoogleCloudPlatform/buildpacks/issues/160
web : node index . js
Your code is complete and ready to be packaged in a container.
Build jobs container, send it to Artifact Registry and deploy to Cloud Run
This quickstart uses deploy from source, which builds the container, uploads it
to Artifact Registry, and deploys the job to Cloud Run:
gcloud run jobs deploy job-quickstart \
--source . \
--tasks 50 \
--set-env-vars SLEEP_MS = 10000 \
--set-env-vars FAIL_RATE = 0 .1 \
--max-retries 5 \
--region REGION \
--project = PROJECT_ID
where PROJECT_ID is your project ID and REGION is your
region, for example, europe-west1 . Note that you can
change the various parameters to whatever values you want to use for your
testing purposes. SLEEP_MS simulates work and FAIL_RATE causes X % of tasks
to fail so you can experiment with parallelism and retrying failing tasks.
Execute a job in Cloud Run
To execute the job you just created:
gcloud run jobs execute job-quickstart --region REGION
Replace REGION with the region you used when you created and deployed
the job, for example europe-west1 .
Success: You created and executed a job using the Node.js runtime in Cloud Run.
Clean up
To avoid additional charges to your Google Cloud account, delete all the resources
you deployed with this quickstart.
Delete your repository
Cloud Run only charges for the time your job executes.
However, you might still be charged for storing the container image in
Artifact Registry . To delete Artifact Registry repositories,
follow the steps in Delete
repositories in the Artifact Registry
documentation.
Delete your job
Cloud Run jobs only incur cost when a job task is executing.
To delete your Cloud Run job, follow one of these steps:
Console
To delete a job:
In the Google Cloud console, go to Cloud Run:
Go to Cloud Run
Locate the job you want to delete in the jobs list, and click
its checkbox to select it.
Click Delete . This terminates all the job executions in progress and
all running container instances.
gcloud
To delete a job, run the following command:
gcloud run jobs delete JOB_NAME
Replace JOB_NAME with the name of the job.
Delete your test project
Deleting your Google Cloud project stops billing for all resources in that
project. To release all Google Cloud resources in your project, follow these steps:
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
What's next
For more information on building a container from code source and pushing to
a repository, see:
Developing Cloud Run services
Building Containers
Test a Cloud Run service locally
Deploying from source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
