---
title: "Quickstart: Trigger Workflows using Pub/Sub messages (Google Cloud CLI) \_\
  |\_ Eventarc Standard \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/eventarc/standard/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub
  title: "Quickstart: Trigger Workflows using Pub/Sub messages (Google Cloud CLI)\
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
Trigger Workflows using Pub/Sub messages (gcloud CLI)
Standard
This quickstart shows you how to execute a workflow using an
Eventarc trigger that receives
events using Pub/Sub. The trigger executes the workflow by passing
events delivered through Pub/Sub as
runtime arguments
to a destination workflow.
In this quickstart, you will:
Use Workflows to create and deploy a workflow that decodes
and returns Pub/Sub messages.
Create an Eventarc trigger that connects a Pub/Sub topic to
a Workflows event receiver.
Publish a message to the Pub/Sub topic to generate an event.
This event is passed as a runtime argument to the destination workflow.
View the Pub/Sub message as a result of the
workflow execution.
Before you begin
Make sure that you have access to this feature by requesting to have your
project added
to private previews for Google Cloud Workflows.
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
Enable the Compute Engine, Eventarc,
Pub/Sub, and Workflows APIs.
gcloud services enable \
compute.googleapis.com \
eventarc.googleapis.com \
pubsub.googleapis.com \
workflows.googleapis.com \
workflowexecutions.googleapis.com
Set the configuration variables used in this tutorial:
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
Pub/Sub Publisher ( roles/pubsub.publisher )
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
Workflows
Invoker role ( roles/workflows.invoker ) on the
project to the Compute Engine default service account so that
the account has permission to trigger your workflow execution.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--role = roles/workflows.invoker
If you enabled the Cloud Pub/Sub service agent on or before April
8, 2021, to support authenticated Pub/Sub push requests, grant
the Service
Account Token Creator role ( roles/iam.serviceAccountTokenCreator )
to the service agent. Otherwise, this role is granted by default:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount:service- PROJECT_NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com \
--role = roles/iam.serviceAccountTokenCreator
Create and deploy a workflow
Create and deploy a workflow that gets executed when a message published to
a Pub/Sub topic triggers a workflow with an HTTP request.
Open a terminal or Cloud Shell .
In your home directory, create a new file called myFirstWorkflow.yaml
or myFirstWorkflow.json .
Copy and paste the following into the new file and save it:
YAML
main :
params : [ event ]
steps :
- decode_pubsub_message :
assign :
- base64 : ${base64.decode(event.data.message.data)}
- message : ${text.decode(base64)}
- return_pubsub_message :
return : ${message}
JSON
{
"main" : {
"params" : [
"event"
],
"steps" : [
{
"decode_pubsub_message" : {
"assign" : [
{
"base64" : "${base64.decode(event.data.message.data)}"
},
{
"message" : "${text.decode(base64)}"
}
]
}
},
{
"return_pubsub_message" : {
"return" : "${message}"
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
When a message is published to the Pub/Sub topic, the event
triggers the workflow.
Create a trigger to listen for Pub/Sub messages:
New Pub/Sub topic
gcloud eventarc triggers create events-pubsub-trigger \
--destination-workflow=${MY_WORKFLOW} \
--destination-workflow-location=${WORKFLOW_LOCATION} \
--event-filters="type=google.cloud.pubsub.topic.v1.messagePublished" \
--service-account=" PROJECT_NUMBER -compute@developer.gserviceaccount.com"
This creates a new Pub/Sub topic and a trigger for it
called events-pubsub-trigger .
Existing Pub/Sub topic
gcloud eve ntar c tr iggers crea te eve nts - pubsub - tr igger \
-- des t i nat io n - work fl ow=$ { MY_WORKFLOW } \
-- des t i nat io n - work fl ow - loca t io n =$ { WORKFLOW_LOCATION } \
--e ve nt - f il ters = "type=google.cloud.pubsub.topic.v1.messagePublished" \
-- service - accou nt = " PROJECT_NUMBER -compute@developer.gserviceaccount.com" \
-- trans por t - t opic= TOPIC_ID
Replace TOPIC_ID with the ID of the existing
Pub/Sub topic.
This creates a trigger called events-pubsub-trigger for an existing
Pub/Sub topic.
Note: By default, Pub/Sub subscriptions created
for Eventarc persist regardless of activity and don't expire.
To change the inactivity duration, see
Subscription properties .
Note that when creating an Eventarc trigger for the first
time in a Google Cloud project, there might be a delay in provisioning
the Eventarc service agent. This issue can usually be resolved
by attempting to create the trigger again. For more information, see
Permission denied errors .
Confirm that the trigger was successfully created:
gcloud eventarc triggers describe events-pubsub-trigger --location = ${ TRIGGER_LOCATION }
The output should be similar to the following listing the time of creation
and trigger location:
createTime: '2021-10-14T15:15:43.872360951Z'
[...]
name: projects/ PROJECT_ID /locations/us-central1/triggers/events-pubsub-trigger
Generate and view an event
Publish a message to the Pub/Sub topic to generate an event and
trigger the workflow. The generated event is passed as a
runtime argument to the
workflow which returns the Pub/Sub message as a result of
the workflow execution. Make sure that the size of the events
you pass to the workflow does not exceed 512 KB.
If you created a trigger for a new Pub/Sub topic, find and
set the Pub/Sub topic created, as an environment
variable:
export TOPIC_ID = $( basename $( gcloud eventarc triggers describe events-pubsub-trigger --format = 'value(transport.pubsub.topic)' ))
To trigger the workflow, send a message to the Pub/Sub topic:
gcloud pubsub topics publish $TOPIC_ID --message "Hello there"
The generated event is passed as a runtime argument to the workflow
which returns a "Hello there" message.
To verify that a workflows execution was triggered, list the last five
executions:
gcloud workflows executions list ${ MY_WORKFLOW } --limit = 5
The output should be similar to the following, listing a NAME and STATE equal
to SUCCEEDED for each workflow execution:
NAME: projects/606789101455/locations/us-central1/workflows/myFirstWorkflow/executions/8c02b8f1-8836-4a6d-99d9-fc321eb9668f
STATE: SUCCEEDED
START_TIME: 2021-09-13T19:15:10.275677049Z
END_TIME: 2021-09-13T19:15:10.963136883Z
NAME: projects/606789101455/locations/us-central1/workflows/myFirstWorkflow/executions/ a6319d9d-36a6-4117-904e-3d1118bdc90a
STATE: SUCCEEDED
START_TIME: 2021-09-13T17:28:51.492864252Z
END_TIME: 2021-09-13T17:28:52.227212414Z
Note that in the NAME field in the preceding example,
a6319d9d-36a6-4117-904e-3d1118bdc90a is the ID of the workflow execution.
Copy your execution ID to use in the next step.
To view the execution status, run the following command:
gcloud workflows executions describe WORKFLOW_EXECUTION_ID --workflow = ${ MY_WORKFLOW }
Replace WORKFLOW_EXECUTION_ID with the ID of the
workflow execution that corresponds to the publishing time of the
Pub/Sub topic. The output is similar to the following:
argument: [...]
endTime: '2021-09-13T17:28:47.301012152Z'
name: projects/1234567/locations/us-central1/workflows/myFirstWorkflow/executions/f72bc6d4-5ea0-4dfb-bb14-2dae82303120
result: 'Hello there'
startTime: '2021-09-13T17:28:51.492864252Z'
state: SUCCEEDED
Verify that the publish_time at which the Pub/Sub message
was published and the startTime of the workflow execution correspond to
each other.
Congratulations, you have successfully generated an event using a
Pub/Sub topic that has triggered a Workflows
event receiver using Eventarc.
Clean up
Delete the workflow you created:
gcloud workflows delete ${ MY_WORKFLOW }
When asked if you want to continue, enter y .
Delete the trigger you created:
gcloud eventarc triggers delete events-pubsub-trigger
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
Create a trigger to route Pub/Sub events to Workflows
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
