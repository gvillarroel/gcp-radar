---
title: "Quickstart: Trigger Workflows using Cloud Audit Logs (Google Cloud CLI) \_\
  |\_ Eventarc Standard \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/eventarc/standard/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal
  title: "Quickstart: Trigger Workflows using Cloud Audit Logs (Google Cloud CLI)\
    \ \_|\_ Eventarc Standard \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Eventarc
Standard
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Trigger Workflows using Cloud Audit Logs (gcloud CLI)
Standard
This quickstart shows you how to execute a workflow using an Eventarc
trigger that receives Cloud Audit Logs events from BigQuery.
BigQuery hosts
public datasets that you can access and
integrate into your applications. The trigger executes the workflow by listening
for a BigQuery job that queries a public dataset. It then passes
the events as runtime arguments to the destination workflow.
You can complete this quickstart using the Google Cloud CLI.
Use Workflows to create and deploy a workflow that extracts and
returns data from an event.
Create an Eventarc trigger that connects a
BigQuery job to a Workflows event receiver.
Generate an event by running a BigQuery job using the
bq command-line tool. This event is passed as a runtime argument to the destination
workflow.
View the event data in the workflow execution output.
Before you begin
Security constraints defined by your organization might prevent you from completing the
following steps. For troubleshooting information, see
Develop applications in a constrained Google Cloud environment .
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
Update gcloud components:
gcloud components update
Sign in using your account:
gcloud auth login
Enable the Compute Engine, Eventarc,
Pub/Sub, and Workflows APIs.
gcloud services enable \
compute.googleapis.com \
eventarc.googleapis.com \
pubsub.googleapis.com \
workflows.googleapis.com \
workflowexecutions.googleapis.com
Set the configuration variables used in this quickstart:
export WORKFLOW_LOCATION = us-central1
export TRIGGER_LOCATION = us-central1
export PROJECT_ID = PROJECT_ID
gcloud config set project ${ PROJECT_ID }
gcloud config set workflows/location ${ WORKFLOW_LOCATION }
gcloud config set eventarc/location ${ TRIGGER_LOCATION }
If you are the project creator, you are granted the
basic Owner role
( roles/owner ). By default, this Identity and Access Management (IAM) role
includes the permissions necessary for full access to most Google Cloud
resources and you can skip this step.
If you are not the project creator, required permissions must be granted on
the project to the appropriate principal . For example, a principal can be
a Google Account (for end users) or a service account (for applications and
compute workloads). For more information, see the
Roles and permissions page
for your event destination.
Required permissions
To get the permissions that
you need to complete this quickstart,
ask your administrator to grant you the
following IAM roles on your project:
Eventarc Admin ( roles/eventarc.admin )
Logs View Accessor ( roles/logging.viewAccessor )
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
Service Account Admin ( roles/iam.serviceAccountAdmin )
Service Account User ( roles/iam.serviceAccountUser )
Service Usage Admin ( roles/serviceusage.serviceUsageAdmin )
Workflows Admin ( roles/workflows.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Make note of the Compute Engine
default service account as you will you attach it to an Eventarc trigger to represent
the identity of the trigger for testing purposes. This service account is automatically created
after enabling or using a Google Cloud service that uses Compute Engine, and with the
following email format:
PROJECT_NUMBER -compute@developer.gserviceaccount.com
Replace PROJECT_NUMBER with your Google Cloud
project number. You can find your project number on the
Welcome
page of the Google Cloud console or by running the following command:
gcloud projects describe PROJECT_ID --format = 'value(projectNumber)'
For production environments, we strongly recommend
creating a new service account
and granting it one or more IAM roles that contain the
minimum permissions required
and follow the principle of least privilege .
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
Grant the
Eventarc
Event Receiver role ( roles/eventarc.eventReceiver ) on the
project to the Compute Engine default service account so that
the Eventarc trigger can receive events from event providers.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--role = roles/eventarc.eventReceiver
Grant the
Workflows
Invoker role ( roles/workflows.invoker ) on the
project to the Compute Engine default service account so that
the account has permission to trigger your workflow execution.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--role = roles/workflows.invoker
Grant the
Logging
Logs Writer role ( roles/logging.logWriter ) on the
project to the Compute Engine default service account so that
the workflow can send logs to Cloud Logging.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--role = roles/logging.logWriter
If you enabled the Cloud Pub/Sub service agent on or before April
8, 2021, to support authenticated Pub/Sub push requests, grant
the Service
Account Token Creator role ( roles/iam.serviceAccountTokenCreator )
to the service agent. Otherwise, this role is granted by default:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount:service- PROJECT_NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com \
--role = roles/iam.serviceAccountTokenCreator
Create and deploy a workflow
Create and deploy a workflow that is executed when a BigQuery
job completion triggers the workflow with an HTTP request.
Open a terminal or
Cloud Shell .
In your home directory, create a new file called
myFirstWorkflow.yaml or myFirstWorkflow.json .
Copy and paste the following into the new file and save it:
YAML
main :
params : [ event ]
steps :
- log_event :
call : sys.log
args :
text : ${event}
severity : INFO
- extract_data :
assign :
- data : ${event.data.protoPayload}
- return_data :
return :
data : ${data}
JSON
{
"main" : {
"params" : [
"event"
],
"steps" : [
{
"log_event" : {
"call" : "sys.log" ,
"args" : {
"text" : "${event}" ,
"severity" : "INFO"
}
}
},
{
"extract_data" : {
"assign" : [
{
"data" : "${event.data.protoPayload}"
}
]
}
},
{
"return_data" : {
"return" : {
"data" : "${data}"
}
}
}
]
}
}
Deploy the workflow:
export MY_WORKFLOW = myFirstWorkflow
gcloud workflows deploy ${ MY_WORKFLOW } --source = myFirstWorkflow .yaml
Replace .yaml with .json if you copied
the JSON version of the example workflow.
Create an Eventarc trigger
To create an Eventarc trigger that routes events from
BigQuery to a Workflows destination, run the
gcloud eventarc triggers create
command.
Create a trigger that filters BigQuery events:
gcloud eventarc triggers create events-cal-trigger \
--destination-workflow = ${ MY_WORKFLOW } \
--destination-workflow-location = ${ WORKFLOW_LOCATION } \
--event-filters = "type=google.cloud.audit.log.v1.written" \
--event-filters = "serviceName=bigquery.googleapis.com" \
--event-filters = "methodName=google.cloud.bigquery.v2.JobService.InsertJob" \
--service-account = " PROJECT_NUMBER -compute@developer.gserviceaccount.com"
This creates a trigger called events-cal-trigger .
Note that when creating an Eventarc trigger for the first
time in a Google Cloud project, there might be a delay in provisioning
the Eventarc service agent. This issue can usually be resolved
by attempting to create the trigger again. For more information, see
Permission denied errors .
To confirm events-cal-trigger was successfully created, run:
gcloud eventarc triggers describe events-cal-trigger --location = ${ TRIGGER_LOCATION }
The output lists the trigger creation time and location and should be
similar to the following:
createTime: '2021-10-14T15:15:43.872360951Z'
[...]
name: projects/ PROJECT_ID /locations/us-central1/triggers/events-cal-trigger
Note: Although your trigger is created immediately, it can take up to two
minutes for a trigger to be fully functional.
Generate and view an event
Run a BigQuery job using the
bq command-line tool to generate
events and trigger the workflow.
To trigger the workflow, run a BigQuery job that accesses a
public dataset and retrieves information from it:
bq query --nouse_legacy_sql \
'SELECT
COUNT(*)
FROM
`bigquery-public-data`.samples.shakespeare'
The generated events are passed as
runtime arguments to
the workflow which returns the payload data as a result of the workflow
execution.
To verify that the workflow was triggered, list its last two executions:
gcloud workflows executions list ${ MY_WORKFLOW } --limit = 2
Two workflow executions are triggered by the BigQuery job. (One
event signals the job change; the other, the job insertion itself.) The output
lists a NAME and a STATE equal to SUCCEEDED for each of the executions,
and should be similar to the following:
NAME: projects/218898424763/locations/us-central1/workflows/myFirstWorkflow/executions/ a073ad6a-c76b-4437-8d39-2ab3ade289d2
STATE: SUCCEEDED
START_TIME: 2024-02-06T14:16:14.390549813Z
END_TIME: 2024-02-06T14:16:14.870102511Z
NAME: projects/218898424763/locations/us-central1/workflows/myFirstWorkflow/executions/35d7c730-7ba5-4055-afee-c04ed706b179
STATE: SUCCEEDED
START_TIME: 2024-02-06T14:16:14.389882601Z
END_TIME: 2024-02-06T14:16:14.829942525Z
Note that in the output, a073ad6a-c76b-4437-8d39-2ab3ade289d2
from the NAME field is the ID of the workflow execution. Copy
your execution ID to use in the next step.
To view the execution status, run the following command:
gcloud workflows executions describe WORKFLOW_EXECUTION_ID --workflow = ${ MY_WORKFLOW }
Replace WORKFLOW_EXECUTION_ID with the ID of the
workflow execution that corresponds to the time at which the
BigQuery job completed.
The output should be similar to the following:
argument: [...]
duration: 0.277917625s
endTime: '2024-02-06T14:16:14.870102511Z'
name: projects/218898424763/locations/us-central1/workflows/myFirstWorkflow/executions/a073ad6a-c76b-4437-8d39-2ab3ade289d2
result: '{"data": [...]}'
startTime: '2024-02-06T14:16:14.390549813Z'
state: SUCCEEDED
Verify that the startTime at which the BigQuery job
completed and the START_TIME of the workflow execution correspond to each
other.
You've successfully generated a BigQuery event that has
triggered a Workflows event receiver using Eventarc.
Clean up
Delete the workflow you created:
gcloud workflows delete ${ MY_WORKFLOW }
When asked if you want to continue, enter y .
Delete the trigger you created:
gcloud eventarc triggers delete events-cal-trigger
Alternatively, you can delete your Google Cloud project to avoid incurring
charges. Deleting your Google Cloud project stops billing for all the
resources used within that project.
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
Control the order of execution in a workflow
Determine events filters for Cloud Audit Logs
Route Cloud Audit Logs events to Workflows
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
