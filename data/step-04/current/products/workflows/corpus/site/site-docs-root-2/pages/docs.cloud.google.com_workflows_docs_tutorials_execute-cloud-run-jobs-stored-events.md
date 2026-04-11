---
title: "Execute a Cloud Run job that processes event data saved in Cloud Storage \_\
  |\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/tutorials/execute-cloud-run-jobs-stored-events
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/tutorials/execute-cloud-run-jobs-stored-events
  title: "Execute a Cloud Run job that processes event data saved in Cloud Storage\
    \ \_|\_ Workflows \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Workflows
Guides
Send feedback
Execute a Cloud Run job that processes event data saved in Cloud Storage
Stay organized with collections
Save and categorize content based on your preferences.
You can use Workflows to execute a
Cloud Run job as part of a workflow
that performs more complex data processing or that orchestrates a system of
existing jobs.
This tutorial demonstrates how to use Workflows to execute a
Cloud Run job that processes event data stored in a
Cloud Storage bucket. Storing the event payload in a Cloud Storage
bucket allows you to encrypt the data using
customer-managed encryption keys
which is not possible if you are
passing the event data as environment variables
to the Cloud Run job.
The following diagram provides a high-level overview:
Objectives
In this tutorial you will:
Create a Cloud Run job that processes event data stored in
a Cloud Storage bucket.
Deploy a workflow that does the following:
Receives an event as an argument.
Writes the event payload data to the Cloud Storage bucket.
Uses the Cloud Run Admin API connector
to execute the Cloud Run job.
Create a Pub/Sub topic so that you can publish a message to it.
This tutorial uses a Pub/Sub event as an example of how to route
events using Workflows, saving the event to
Cloud Storage so that a Cloud Run job can process
the event data.
Create an Eventarc trigger that executes the workflow when a
message is written to the Pub/Sub topic.
Trigger the workflow by writing a message to the Pub/Sub
topic.
Costs
In this document, you use the following billable components of Google Cloud:
Artifact Registry
Cloud Build
Cloud Run
Cloud Storage
Eventarc
Workflows
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Before you begin
Security constraints defined by your organization might prevent you from completing the
following steps. For troubleshooting information, see
Develop applications in a constrained Google Cloud environment .
Before you begin this tutorial, you must enable specific APIs and create a
user-managed service account. You must grant the service account the roles and
permissions necessary so that you can route events using an
Eventarc trigger and execute a workflow.
Note that if you are using Cloud Shell to try out this tutorial, you might
need to grant additional roles to the Compute Engine default service
account. For details, in this document, see the
Create a Cloud Run job section.
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
Enable the Artifact Registry, Cloud Build, Cloud Run, Cloud Storage, Compute Engine, Eventarc, and Workflows APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a service account:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant
roles .
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select your project.
In the Service account name field, enter a name. The Google Cloud console fills
in the Service account ID field based on this name.
In the Service account description field, enter a description. For example,
Service account for quickstart .
Click Create and continue .
Grant the following roles to the service account:
Cloud Run Admin, Eventarc Event Receiver, Logs Writer, Storage Object Creator, Workflows Invoker .
To grant a role, find the Select a role list, then select the role.
To grant additional roles, click add Add another
role and add each additional role.
Note : The Role field affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Click Continue .
Click Done to finish creating the service account.
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
Enable the Artifact Registry, Cloud Build, Cloud Run, Cloud Storage, Compute Engine, Eventarc, and Workflows APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a service account:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant
roles .
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select your project.
In the Service account name field, enter a name. The Google Cloud console fills
in the Service account ID field based on this name.
In the Service account description field, enter a description. For example,
Service account for quickstart .
Click Create and continue .
Grant the following roles to the service account:
Cloud Run Admin, Eventarc Event Receiver, Logs Writer, Storage Object Creator, Workflows Invoker .
To grant a role, find the Select a role list, then select the role.
To grant additional roles, click add Add another
role and add each additional role.
Note : The Role field affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Click Continue .
Click Done to finish creating the service account.
If you enabled the Cloud Pub/Sub service agent on or
before April 8, 2021, to support authenticated Pub/Sub push
requests, grant the
Service
Account Token Creator role ( roles/iam.serviceAccountTokenCreator )
to the service agent. Otherwise, this role is granted by default:
In the Google Cloud console, go to the
IAM page.
Go to IAM
Select the Include Google-provided role grants
checkbox.
In the Name column, find the
Cloud Pub/Sub Service Account
and then click edit Edit
principal in the corresponding row.
Click either add Add role
or
add Add another role .
In the Select a role list, filter for
Service Account Token Creator , and then select the role.
Click Save .
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Cloud Shell supports the command-line steps in this tutorial.
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
Enable the Artifact Registry, Cloud Build, Cloud Run, Cloud Storage, Compute Engine, Eventarc, and Workflows APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable artifactregistry.googleapis.com cloudbuild.googleapis.com compute.googleapis.com run.googleapis.com storage.googleapis.com eventarc.googleapis.com workflows.googleapis.com
Set up authentication:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant roles .
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for the service account.
Grant roles to the service account. Run the following command once for each of the
following IAM roles: roles/eventarc.eventReceiver, roles/logging.logWriter, roles/run.admin, roles/storage.objectCreator, roles/workflows.invoker :
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" --role = ROLE
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
ROLE : the role to grant
Note : The --role flag affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
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
Enable the Artifact Registry, Cloud Build, Cloud Run, Cloud Storage, Compute Engine, Eventarc, and Workflows APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable artifactregistry.googleapis.com cloudbuild.googleapis.com compute.googleapis.com run.googleapis.com storage.googleapis.com eventarc.googleapis.com workflows.googleapis.com
Set up authentication:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant roles .
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for the service account.
Grant roles to the service account. Run the following command once for each of the
following IAM roles: roles/eventarc.eventReceiver, roles/logging.logWriter, roles/run.admin, roles/storage.objectCreator, roles/workflows.invoker :
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" --role = ROLE
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
ROLE : the role to grant
Note : The --role flag affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
If you enabled the Cloud Pub/Sub service agent on or before April
8, 2021, to support authenticated Pub/Sub push requests, grant
the Service
Account Token Creator role ( roles/iam.serviceAccountTokenCreator )
to the service agent. Otherwise, this role is granted by default:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount:service- PROJECT_NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com \
--role = roles/iam.serviceAccountTokenCreator
Replace PROJECT_NUMBER with your Google Cloud
project number. You can find your project number on the
Welcome
page of the Google Cloud console or by running the following command:
gcloud projects describe PROJECT_ID --format = 'value(projectNumber)'
Create a Cloud Run job
This tutorial uses sample code that you can find on GitHub. The deployment
script builds a container image to create a Cloud Run job named
message-payload-job .
The script also creates a Cloud Storage bucket and generates a
universally unique identifier (UUID) for its name using uuidgen , a utility
that is often already installed on Linux, macOS, and Windows.
The Cloud Run job reads any event data stored in the
Cloud Storage bucket and then prints the event data.
Note: If you receive a "bucket already exists" message, make sure that ownership
of the bucket and its permissions are configured as expected before proceeding
any further.
If you are running the deployment script in Cloud Shell, and if the
Compute Engine default service account
doesn't have the Editor role, grant the following roles on the project to the
Compute Engine default service account. (Otherwise, you can skip this
step and proceed with cloning the sample app repository in the next step.)
Note: The
iam.automaticIamGrantsForDefaultServiceAccounts
organization policy constraint prevents the Editor role from being
automatically granted to default service accounts. If you created your
organization after May 3, 2024, this constraint is enforced
by default.
Grant the
Artifact Registry Writer role
( roles/artifactregistry.writer ):
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--role = roles/artifactregistry.writer
Replace PROJECT_NUMBER with your Google Cloud
project number. You can find your project number on the
Welcome
page of the Google Cloud console or by running the following command:
gcloud projects describe PROJECT_ID --format = 'value(projectNumber)'
Grant the
Storage Object User role
( roles/storage.objectUser ):
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--role = roles/storage.objectUser
Grant the
Logging Logs Writer role
( roles/logging.logWriter ):
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--role = roles/logging.logWriter
Get the sample code by cloning the sample app repository to your local
machine:
git clone https://github.com/GoogleCloudPlatform/workflows-demos.git
Alternatively, you can
download the sample as a ZIP file .
Change to the directory that contains the sample code:
cd workflows-demos/cloud-run-jobs-payload-gcs/message-payload-job
Create the Cloud Run job by running the deployment script:
./deploy-job.sh
The output should be similar to the following:
STATUS: SUCCESS
Creating input bucket message-payload- UNIQUE_ID
...
Creating Cloud Run job [ message-payload-job ] in project [ PROJECT_ID ] region [ us-central1 ]
Creating job...
Done.
Job [ message-payload-job ] has successfully been created.
Note the UUID generated for your Cloud Storage bucket name. You
will need this identifier when deploying your workflow.
Deploy a workflow that executes the Cloud Run job
Define and deploy a workflow that executes the Cloud Run job
you just created. A workflow definition is made up of a series of steps
described using the Workflows syntax .
The workflow receives an event, saves the event data to a Cloud Storage
bucket, and then executes a Cloud Run job to process the event
data.
Console
In the Google Cloud console, go to the
Workflows page:
Go to Workflows
Click
add
Create .
Enter a name for the new workflow, such as message-payload-workflow .
Choose an appropriate region; for example, us-central1 .
In the Service account field, select the service account you
created earlier.
The service account serves as the workflow's identity. You should have
already granted the following roles to the service account:
Cloud Run Admin : to execute Cloud Run jobs
Logs Writer : to write log entries
Storage Object Creator : to create objects in Cloud Storage
Click Next .
In the workflow editor, enter the following definition for your
workflow:
main :
params : [ event ]
steps :
- init :
assign :
- project_id : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
- event_bucket : message-payload- UNIQUE_ID
- event_file : ${event.id + ".data.json"}
- job_name : message-payload-job
- job_location : us-central1
- log_event :
call : sys.log
args :
data : ${event}
- write_payload_to_gcs :
call : http.post
args :
url : ${"https://storage.googleapis.com/upload/storage/v1/b/" + event_bucket + "/o"}
auth :
type : OAuth2
query :
name : ${event_file}
body :
${event.data}
- run_job_to_process_payload :
call : googleapis.run.v1.namespaces.jobs.run
args :
name : ${"namespaces/" + project_id + "/jobs/" + job_name}
location : ${job_location}
body :
overrides :
containerOverrides :
env :
- name : INPUT_BUCKET
value : ${event_bucket}
- name : INPUT_FILE
value : ${event_file}
result : job_execution
- finish :
return : ${job_execution}
Replace UNIQUE_ID with the UUID generated for
your Cloud Storage bucket name and that you noted previously.
Click Deploy .
gcloud
Create a source code file for your workflow:
touch message-payload-workflow.yaml
Copy the following workflow definition to message-payload-workflow.yaml :
main :
params : [ event ]
steps :
- init :
assign :
- project_id : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
- event_bucket : message-payload- UNIQUE_ID
- event_file : ${event.id + ".data.json"}
- job_name : message-payload-job
- job_location : us-central1
- log_event :
call : sys.log
args :
data : ${event}
- write_payload_to_gcs :
call : http.post
args :
url : ${"https://storage.googleapis.com/upload/storage/v1/b/" + event_bucket + "/o"}
auth :
type : OAuth2
query :
name : ${event_file}
body :
${event.data}
- run_job_to_process_payload :
call : googleapis.run.v1.namespaces.jobs.run
args :
name : ${"namespaces/" + project_id + "/jobs/" + job_name}
location : ${job_location}
body :
overrides :
containerOverrides :
env :
- name : INPUT_BUCKET
value : ${event_bucket}
- name : INPUT_FILE
value : ${event_file}
result : job_execution
- finish :
return : ${job_execution}
Replace UNIQUE_ID with the UUID generated for
your Cloud Storage bucket name and that you noted previously.
Deploy the workflow by entering the following command:
gcloud workflows deploy message-payload-workflow \
--location = us-central1 \
--source = message-payload-workflow.yaml \
--service-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Replace the following:
SERVICE_ACCOUNT_NAME : the name of
the service account you created earlier
PROJECT_ID : the ID of your
Google Cloud project
The service account serves as the workflow's identity. You should have
already granted the following roles to the service account:
roles/logging.logWriter : to write log entries
roles/run.admin : to execute Cloud Run jobs
roles/storage.objectCreator : to create objects in Cloud Storage
The workflow does the following:
init step—Accepts an event as an argument and sets necessary variables.
log_event step—Creates a log entry in Cloud Logging using the function,
sys.log .
write_payload_to_gcs step—Makes an HTTP POST request and writes the event
payload data to a Cloud Storage bucket file.
run_job_to_process_payload step—Uses the Cloud Run Admin API connector
method,
googleapis.run.v1.namespaces.jobs.run ,
to execute the job. The Cloud Storage bucket and data filename are
passed as override variables from the workflow to the job.
finish step—Returns information about the job execution as the result of
the workflow.
Create a Pub/Sub topic
Create a Pub/Sub topic so that you can publish a message to it.
A Pub/Sub event is used to demonstrate how to route an event
using Workflows and save the event to Cloud Storage
so that a Cloud Run job can process the event data.
Console
In the Google Cloud console, go to the Topics page.
Go to Topics
Click add
Create topic .
In the Topic ID field, enter an ID for the topic, such as
message-payload-topic .
Retain the option Add a default subscription .
Don't select the other options.
Click Create .
gcloud
To create a topic with the ID message-payload-topic , run the
gcloud pubsub topics create
command:
gcloud pubsub topics create message-payload-topic
Create an Eventarc trigger to route events to the workflow
To automatically execute the workflow and in turn the Cloud Run
job, create an Eventarc trigger that responds to
Pub/Sub events, and that routes the events to the workflow.
Whenever a message is written to the Pub/Sub topic, the event
triggers an execution of the workflow.
Console
In the Google Cloud console, go to the
Workflows page:
Go to Workflows
Click the name of your workflow, such as message-payload-workflow .
On the Workflow details page, click
edit
Edit .
On the Edit workflow page, in the Triggers section,
click Add new trigger > Eventarc .
The Eventarc trigger pane opens.
In the Trigger name field, enter a name for the trigger, such as
message-payload-trigger .
From the Event provider list, select Cloud Pub/Sub .
From the Event list, select
google.cloud.pubsub.topic.v1.messagePublished .
From the Select a Cloud Pub/Sub topic list, select the
Pub/Sub topic you previously created.
In the Service account field, select the service account you
created earlier.
The service account serves as the trigger's identity. You should have
already granted the following roles to the service account:
Eventarc Event Receiver : to receive events
Workflows Invoker : to execute workflows
Click Save trigger .
The Eventarc trigger now appears in the Triggers
section on the Edit workflow page.
Click Next .
Click Deploy .
gcloud
Create an Eventarc trigger by running the following command:
gcloud eventarc triggers create message-payload-trigger \
--location = us-central1 \
--destination-workflow = message-payload-workflow \
--destination-workflow-location = us-central1 \
--event-filters = "type=google.cloud.pubsub.topic.v1.messagePublished" \
--transport-topic = projects/ PROJECT_ID /topics/message-payload-topic \
--service-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Replace the following:
PROJECT_ID : the ID of your Google Cloud project
SERVICE_ACCOUNT_NAME : the name of the service
account you created earlier.
The service account serves as the trigger's identity. You should have
already granted the following roles to the service account:
roles/eventarc.eventReceiver : to receive events
roles/workflows.invoker : to execute workflows
Trigger the workflow
Test the end-to-end system by publishing a message to the Pub/Sub
topic and generating an event. For more information, see
triggering a workflow with events or Pub/Sub messages .
Publish a message to the Pub/Sub topic to generate an event:
gcloud pubsub topics publish message-payload-topic --message="Hello World"
The event is routed to the workflow which logs the event message, saves the
event data to the Cloud Storage bucket, and executes the
Cloud Run job to process the data saved in
Cloud Storage. This can take a few minutes.
Confirm that the Cloud Run job ran as expected by viewing
the job executions:
gcloud run jobs executions list --job = message-payload-job
You should see a new job execution in the output.
You can confirm that the results are as expected by viewing the event data in
the Cloud Storage bucket object.
Retrieve your bucket name:
gcloud storage ls
The output is similar to the following:
gs://message-payload- UNIQUE_ID /
List the objects in your bucket:
gcloud storage ls gs://message-payload- UNIQUE_ID /** --recursive
The output should be similar to the following:
gs://message-payload- UNIQUE_ID / OBJECT_ID .data.json
Note the OBJECT_ID to use in the next step.
Download the object in your bucket as a file:
gcloud storage cp gs://message-payload- UNIQUE_ID / OBJECT_ID .data.json message-event.txt
Replace OBJECT_ID with the ID returned in the
previous step.
In a text editor, open the message-event.txt file. The event body written to
the file should be similar to the following:
{
"message" : {
"data" : "SGVsbG8gV29ybGQ=" ,
"messageId" : "8254002311197919" ,
"publishTime" : "2023-09-20T16:54:29.312Z"
} ,
"subscription" : "projects/MY_PROJECT/subscriptions/eventarc-us-central1-message-payload-trigger-sub-741"
}
Note that if you decode the data value of SGVsbG8gV29ybGQ= from its
Base64 format, "Hello World" is returned.
Clean up
If you created a new project for this tutorial, delete the project .
If you used an existing project and wish to keep it without the changes added
in this tutorial, delete resources created for the tutorial .
Delete the project
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
Delete the resources you created in this tutorial:
Delete the Pub/Sub topic .
Delete the Eventarc trigger .
Delete the Workflows workflow .
Delete the Cloud Run job .
Delete the Cloud Storage bucket .
What's next
Learn more about Cloud Run jobs .
Learn more about Workflows connectors .
Learn more about Workflows .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
