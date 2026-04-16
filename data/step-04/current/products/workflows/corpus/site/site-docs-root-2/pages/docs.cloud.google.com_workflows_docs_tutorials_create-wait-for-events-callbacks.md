---
title: "Wait for events using callbacks and Eventarc triggers \_|\_ Workflows \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/tutorials/create-wait-for-events-callbacks
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/tutorials/create-wait-for-events-callbacks
  title: "Wait for events using callbacks and Eventarc triggers \_|\_ Workflows \_\
    |\_ Google Cloud Documentation"
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
Wait for events using callbacks and Eventarc triggers
Stay organized with collections
Save and categorize content based on your preferences.
Your workflow might need to wait for an external process. You can use
HTTP callbacks to wait for
another service to make a request to a callback endpoint; that request resumes
the execution of the workflow. You can also
wait using polling .
Instead of using polling, this tutorial demonstrates how you can wait for events
or Pub/Sub messages using HTTP callbacks and Eventarc
triggers. Although you can
trigger a workflow with events or Pub/Sub messages ,
you might want to halt that execution to wait for another event before
continuing. For example, an event triggers a workflow to initiate a process, but
the workflow needs to wait for another event that signals that the process is
complete. You can implement this by having one workflow call back another
workflow.
Objectives
In this tutorial, the following occurs:
A primary workflow that needs to wait on events is deployed and executed.
As it must wait for the events to occur, it stores its callback details in a
Firestore database so that the secondary workflow can retrieve the
details. The primary workflow then waits for the HTTP calls.
A secondary workflow is triggered by the events and retrieves the
callback details from the Firestore database when the events
are generated. The secondary workflow then calls back the primary workflow which
resumes its execution.
This is an overview of the entire process:
Primary workflow:
A callback-event-sample workflow creates callback endpoints for two event
sources: a Pub/Sub topic and a Cloud Storage bucket.
This workflow store both callback endpoints in a Firestore
document.
This workflow halts its execution and waits for HTTP requests to arrive at
the callback endpoints.
Events:
Events occur: a message is published to a Pub/Sub topic
and a file is uploaded to a Cloud Storage bucket.
Secondary workflow:
Eventarc route the events to the
callback-event-listener workflow and triggers its execution.
This workflow retrieves the appropriate callback endpoint URLs from the
Firestore document.
This workflow executes the callbacks to the appropriate endpoints in the
sample workflow.
Primary workflow:
The callback-event-sample workflow receives the events at the
callback endpoints and resumes its execution.
This workflow deletes the callback URLs from the Firestore
document and completes its execution.
Costs
In this document, you use the following billable components of Google Cloud:
Eventarc
Firestore
Pub/Sub
Cloud Storage
Workflows
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Before you begin
You can run the following commands in the Google Cloud console, or by using the
Google Cloud CLI in either your terminal or Cloud Shell.
Security constraints defined by your organization might prevent you from completing the
following steps. For troubleshooting information, see
Develop applications in a constrained Google Cloud environment .
Console
In the Google Cloud console, on the project selector page, select or
create a Google Cloud project .
Note: If you don't plan to keep the resources that you create in this
procedure, create a project instead of selecting an existing project. After
you finish these steps, you can delete the project, removing all resources
associated with the project.
Go to project selector
Make sure that billing is enabled for your Google Cloud project. Learn how to
check if billing is enabled on a project .
Enable the App Engine, Eventarc, Firestore,
Pub/Sub, and Workflows APIs.
Enable the APIs
Create a service account for your workflow to use for authentication with
other Google Cloud services and grant it the appropriate roles:
In the Google Cloud console, go to the Service Accounts
page.
Go to Service Accounts
To go to the Create service account page, select your project.
In the Service account name field, enter a name. The Google Cloud console
fills in the Service account ID field based on this name.
In the Service account description field, enter a description. For
example, Service account for tutorial .
Click Create and continue .
In the Select a role list, filter for the following roles to grant
to the user-managed service account you created in the previous step:
Cloud Datastore User : to access Firestore in Datastore mode (Datastore)
data.
Eventarc Event Receiver : to receive events from event providers.
Logs Writer : to write logs.
Workflows Invoker : to execute workflows and manage the
executions.
For additional roles, click add
Add another role and add each additional role.
Note: The Role field affects which resources your service account
can access in your project. You can revoke these roles or grant
additional roles later. In production environments, do not grant the
Owner, Editor, or Viewer roles. Instead, grant a
predefined role or
custom role that meets your
needs.
Click Continue .
To finish creating the account, click Done .
To create an Eventarc trigger that routes events from
Cloud Storage, grant the Pub/Sub Publisher role
to the Cloud Storage service agent.
Typically, this is
service- PROJECT_NUMBER @gs-project-accounts.iam.gserviceaccount.com .
You can
retrieve the email address for the Cloud Storage service agent .
In the Google Cloud console, go to the IAM page.
Go to IAM
In the row for the Cloud Storage service agent, click
edit Edit principal . (If the
service agent is not listed, proceed to the next step.)
The Edit access pane opens.
Click add Add another role and
then search for the Pub/Sub Publisher role.
Select the role.
Click Save .
If the service agent is not listed, click
person_add Grant access .
The Grant access pane opens.
In the New principals field, enter the email address for the
service agent.
In the Select a role list, search for the Pub/Sub Publisher
role.
Select the role.
Click Save .
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Make sure that billing is enabled for your Google Cloud project.
Learn how to
check if billing is enabled on a project .
Enable the App Engine, Eventarc,
Firestore, Pub/Sub, and Workflows
APIs.
gcloud services enable \
appengine.googleapis.com \
eventarc.googleapis.com \
firestore.googleapis.com \
pubsub.googleapis.com \
workflows.googleapis.com
Create a service account for your workflow to use for authentication with
other Google Cloud services and grant it the appropriate roles.
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for
the service account.
Grant roles to the user-managed service account you created in the
previous step. Run the following command once for each of the following
IAM roles:
roles/datastore.user : to access Firestore in Datastore mode (Datastore)
data.
roles/eventarc.eventReceiver : to receive events from event
providers.
roles/logging.logWriter : to write logs.
roles/workflows.invoker : to execute workflows and manage the
executions.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com \
--role = ROLE
Replace the following:
PROJECT_ID : the
project ID
where you created the service account
ROLE : the role to grant
Note: The --role flag affects which resources your service account
can access in your project. You can revoke these roles or grant
additional roles later. In production environments, do not grant the
Owner, Editor, or Viewer roles. Instead, grant a
predefined role or
custom role that meets your
needs.
To create an Eventarc trigger that routes events from
Cloud Storage, grant the Pub/Sub Publisher role
to the
Cloud Storage service agent .
Typically, this is
service- PROJECT_NUMBER @gs-project-accounts.iam.gserviceaccount.com .
Use
gcloud storage service-agent
to first retrieve the Cloud Storage service agent.
SERVICE_ACCOUNT_STORAGE = " $( gcloud storage service-agent --project = PROJECT_ID ) "
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: $SERVICE_ACCOUNT_STORAGE \
--role = roles/pubsub.publisher
Create a Firestore database
Firestore stores your data in documents that contain fields
mapping to values. These documents are stored in collections, which are
containers for your documents that you can use to organize your data and build
queries.
Learn more about Firestore .
Note that each Google Cloud project is limited to one Firestore
database. Complete the following steps if you need to create a new database.
Console
In the Google Cloud console, go to the Firestore
Get started page.
Go to Get started
Click Select Native Mode .
For guidance on selecting a database mode and for a feature-by-feature
comparison, see
choosing between Native Mode and Datastore Mode .
In the Select a location list, select nam5 (United States) .
The location applies to both the Firestore database and
the App Engine application in your Google Cloud project.
Once you create your database, you cannot change the location.
Click Create database .
gcloud
To create a Firestore database, you must first create an
App Engine application and then run the
gcloud firestore databases create
command:
gcloud app create --region = us-central
gcloud firestore databases create --region = us-central
You can ignore the us-central is not a valid Firestore location warning.
App Engine and Firestore support the same locations,
but the App Engine us-central (Iowa) region maps to
the Firestore nam5 (United States)
multi-region.
Create a Pub/Sub topic
This tutorial uses Pub/Sub as an event source. Create a
Pub/Sub topic so that you can publish a message to it.
Learn more about creating and managing topics .
Console
In the Google Cloud console, go to the Pub/Sub
Topics page.
Go to Topics
Click add_box
Create topic .
In the Topic ID field, enter topic-callback .
Accept the other defaults.
Click Create topic .
gcloud
To create a topic, run the
gcloud pubsub topics create
command:
gcloud pubsub topics create topic-callback
Create a Cloud Storage bucket
This tutorial uses Cloud Storage as an event source. Create a
Cloud Storage bucket so that you can upload a file to it.
Learn more about creating storage buckets .
Console
In the Google Cloud console, go to the Cloud Storage
Buckets page.
Go to Cloud Storage
Click add_box
Create .
For the Name of your bucket, enter
PROJECT_ID -bucket-callback .
The project ID
is used in the callback-event-sample workflow to identify the bucket.
Click Continue .
For Location type , select Region , and then select
us-central1 (Iowa) .
Accept the other defaults.
Click Create .
gcloud
To create a bucket, run the
gcloud storage buckets create
command:
gcloud storage buckets create gs:// PROJECT_ID -bucket-callback \
--location = us-central1
The project ID
is used in the callback-event-sample workflow to identify the bucket.
After the event sources are created, you can deploy the event receiver workflow.
Deploy a workflow that listens for events
The callback-event-listener workflow is triggered when a message is published
to a Pub/Sub topic or when a file is uploaded to a Cloud Storage
bucket. The workflow receives the event, retrieves the appropriate callback
details from the Firestore database, and then sends an HTTP
request to the callback endpoint.
Console
In the Google Cloud console, go to the Workflows
page:
Go to Workflows
Click add
Create .
Enter a name for the new workflow: callback-event-listener .
In the Region list, select us-central1 .
Select the Service account that you previously created.
Click Next .
In the workflow editor, enter the following definition for your workflow:
main :
params : [ event ]
steps :
- log_event :
call : sys.log
args :
text : ${event}
severity : INFO
- init :
assign :
- database_root : ${"projects/" + sys.get_env("GOOGLE_CLOUD_PROJECT_ID") + "/databases/(default)/documents/callbacks/"}
- event_source_tokens : ${text.split(event.source, "/")}
- event_source_len : ${len(event_source_tokens)}
- event_source : ${event_source_tokens[event_source_len - 1]}
- doc_name : ${database_root + event_source}
- get_document_for_event_source :
try :
call : googleapis.firestore.v1.projects.databases.documents.get
args :
name : ${doc_name}
result : document
except :
as : e
steps :
- known_errors :
switch :
- condition : ${e.code == 404}
return : ${"No callbacks for event source " + event_source}
- unhandled_exception :
raise : ${e}
- process_callback_urls :
steps :
- check_fields_exist :
switch :
- condition : ${not("fields" in document)}
return : ${"No callbacks for event source " + event_source}
- condition : true
next : processFields
- processFields :
for :
value : key
in : ${keys(document.fields)}
steps :
- extract_callback_url :
assign :
- callback_url : ${document.fields[key]["stringValue"]}
- log_callback_url :
call : sys.log
args :
text : ${"Calling back url " + callback_url}
severity : INFO
- http_post :
call : http.post
args :
url : ${callback_url}
auth :
type : OAuth2
body :
event : ${event}
Click Deploy .
gcloud
Create a source code file for your workflow:
touch callback-event-listener.yaml
In a text editor, copy the following workflow to your source code file:
main :
params : [ event ]
steps :
- log_event :
call : sys.log
args :
text : ${event}
severity : INFO
- init :
assign :
- database_root : ${"projects/" + sys.get_env("GOOGLE_CLOUD_PROJECT_ID") + "/databases/(default)/documents/callbacks/"}
- event_source_tokens : ${text.split(event.source, "/")}
- event_source_len : ${len(event_source_tokens)}
- event_source : ${event_source_tokens[event_source_len - 1]}
- doc_name : ${database_root + event_source}
- get_document_for_event_source :
try :
call : googleapis.firestore.v1.projects.databases.documents.get
args :
name : ${doc_name}
result : document
except :
as : e
steps :
- known_errors :
switch :
- condition : ${e.code == 404}
return : ${"No callbacks for event source " + event_source}
- unhandled_exception :
raise : ${e}
- process_callback_urls :
steps :
- check_fields_exist :
switch :
- condition : ${not("fields" in document)}
return : ${"No callbacks for event source " + event_source}
- condition : true
next : processFields
- processFields :
for :
value : key
in : ${keys(document.fields)}
steps :
- extract_callback_url :
assign :
- callback_url : ${document.fields[key]["stringValue"]}
- log_callback_url :
call : sys.log
args :
text : ${"Calling back url " + callback_url}
severity : INFO
- http_post :
call : http.post
args :
url : ${callback_url}
auth :
type : OAuth2
body :
event : ${event}
Deploy the workflow by entering the following command:
gcloud workflows deploy callback-event-listener \
--source = callback-event-listener.yaml \
--location = us-central1 \
--service-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Replace SERVICE_ACCOUNT_NAME with the name of
the service account that you previously created.
Deploy a workflow that waits for events
The callback-event-sample workflow stores its callback details in a
Firestore database, halts its execution, and then waits for
specific events to occur.
Console
In the Google Cloud console, go to the Workflows
page:
Go to Workflows
Click add
Create .
Enter a name for the new workflow: callback-event-sample .
In the Region list, select us-central1 .
Select the Service account that you previously created.
Click Next .
In the workflow editor, enter the following definition for your workflow:
main :
steps :
- init :
assign :
- pubsub_topic : topic-callback
- storage_bucket : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID") + "-bucket-callback"}
- await_pubsub_message :
call : await_callback_event
args :
event_source : ${pubsub_topic}
result : pubsub_event
- await_storage_bucket :
call : await_callback_event
args :
event_source : ${storage_bucket}
result : storage_event
- return_events :
return :
pubsub_event : ${pubsub_event}
storage_event : ${storage_event}
await_callback_event :
params : [ event_source ]
steps :
- init :
assign :
- database_root : ${"projects/" + sys.get_env("GOOGLE_CLOUD_PROJECT_ID") + "/databases/(default)/documents/callbacks/"}
- doc_name : ${database_root + event_source}
- execution_id : ${sys.get_env("GOOGLE_CLOUD_WORKFLOW_EXECUTION_ID")}
- firestore_key : ${"exec_" + text.split(execution_id, "-")[0]}
- create_callback :
call : events.create_callback_endpoint
args :
http_callback_method : POST
result : callback_details
- save_callback_url :
call : googleapis.firestore.v1.projects.databases.documents.patch
args :
name : ${doc_name}
updateMask :
fieldPaths : [ "${firestore_key}" ]
body :
fields :
${firestore_key} :
stringValue : ${callback_details.url}
- log_and_await_callback :
try :
steps :
- log_await_start :
call : sys.log
args :
severity : INFO
data : ${"Started waiting 1hr for an event from source " + event_source}
- await_callback :
call : events.await_callback
args :
callback : ${callback_details}
timeout : 3600
result : callback_request
- log_await_stop :
call : sys.log
args :
severity : INFO
data : ${"Stopped waiting for an event from source " + event_source}
except :
as : e
steps :
- log_error :
call : sys.log
args :
severity : "ERROR"
text : ${"Received error " + e.message}
- delete_callback_url :
call : googleapis.firestore.v1.projects.databases.documents.patch
args :
name : ${doc_name}
updateMask :
fieldPaths : [ "${firestore_key}" ]
- check_null_event :
switch :
- condition : ${callback_request == null}
return : null
- log_await_result :
call : sys.log
args :
severity : INFO
data : ${callback_request.http_request.body.event}
- return_event :
return : ${callback_request.http_request.body.event}
Click Deploy .
gcloud
Create a source code file for your workflow:
touch callback-event-sample.yaml
In a text editor, copy the following workflow to your source code file:
main :
steps :
- init :
assign :
- pubsub_topic : topic-callback
- storage_bucket : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID") + "-bucket-callback"}
- await_pubsub_message :
call : await_callback_event
args :
event_source : ${pubsub_topic}
result : pubsub_event
- await_storage_bucket :
call : await_callback_event
args :
event_source : ${storage_bucket}
result : storage_event
- return_events :
return :
pubsub_event : ${pubsub_event}
storage_event : ${storage_event}
await_callback_event :
params : [ event_source ]
steps :
- init :
assign :
- database_root : ${"projects/" + sys.get_env("GOOGLE_CLOUD_PROJECT_ID") + "/databases/(default)/documents/callbacks/"}
- doc_name : ${database_root + event_source}
- execution_id : ${sys.get_env("GOOGLE_CLOUD_WORKFLOW_EXECUTION_ID")}
- firestore_key : ${"exec_" + text.split(execution_id, "-")[0]}
- create_callback :
call : events.create_callback_endpoint
args :
http_callback_method : POST
result : callback_details
- save_callback_url :
call : googleapis.firestore.v1.projects.databases.documents.patch
args :
name : ${doc_name}
updateMask :
fieldPaths : [ "${firestore_key}" ]
body :
fields :
${firestore_key} :
stringValue : ${callback_details.url}
- log_and_await_callback :
try :
steps :
- log_await_start :
call : sys.log
args :
severity : INFO
data : ${"Started waiting 1hr for an event from source " + event_source}
- await_callback :
call : events.await_callback
args :
callback : ${callback_details}
timeout : 3600
result : callback_request
- log_await_stop :
call : sys.log
args :
severity : INFO
data : ${"Stopped waiting for an event from source " + event_source}
except :
as : e
steps :
- log_error :
call : sys.log
args :
severity : "ERROR"
text : ${"Received error " + e.message}
- delete_callback_url :
call : googleapis.firestore.v1.projects.databases.documents.patch
args :
name : ${doc_name}
updateMask :
fieldPaths : [ "${firestore_key}" ]
- check_null_event :
switch :
- condition : ${callback_request == null}
return : null
- log_await_result :
call : sys.log
args :
severity : INFO
data : ${callback_request.http_request.body.event}
- return_event :
return : ${callback_request.http_request.body.event}
Deploy the workflow by entering the following command:
gcloud workflows deploy callback-event-sample \
--source = callback-event-sample.yaml \
--location = us-central1 \
--service-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Replace SERVICE_ACCOUNT_NAME with the name of
the service account that you previously created.
Create an Eventarc trigger to route Pub/Sub events
An Eventarc trigger allows you to route events by specifying
filters for the trigger, including the event source, and the target workflow.
Create an Eventarc trigger to execute the
callback-event-listener workflow as the result of publishing a message to a
Pub/Sub topic.
Learn more about triggering a workflow .
Console
In the Google Cloud console, go to the Eventarc page.
Go to Eventarc
Click add_box Create trigger .
Type a Trigger name .
For example, trigger-pubsub-events-listener .
In the Event provider list, select Cloud Pub/Sub .
In the Event list, under Custom , select google.cloud.pubsub.topic.v1.messagePublished .
In the Select a Cloud Pub/Sub topic list, select the topic that you
previously created.
In the Region list, select us-central1 (Iowa) .
If prompted, grant the iam.serviceAccountTokenCreator role to
the Pub/Sub service account.
Select the Service account that you previously created.
In the Event destination list, select Workflows .
In the Select a workflow list, select the callback-event-listener
workflow.
Click Create .
gcloud
To create a trigger, run the
gcloud eventarc triggers create
command:
gcloud eventarc triggers create trigger-pubsub-events-listener \
--location = us-central1 \
--destination-workflow = callback-event-listener \
--destination-workflow-location = us-central1 \
--event-filters = "type=google.cloud.pubsub.topic.v1.messagePublished" \
--transport-topic = topic-callback \
--service-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Events are transformed and passed to the workflow execution as runtime arguments.
Note that it can take up to 2 minutes for the new trigger to become active.
Create an Eventarc trigger to route Cloud Storage events
An Eventarc trigger allows you to route events by specifying
filters for the trigger, including the event source, and the target workflow.
Create an Eventarc trigger to execute the
callback-event-listener workflow as the result of uploading a file to a
Cloud Storage bucket.
Learn more about triggering a workflow .
Console
In the Google Cloud console, go to the Eventarc
page.
Go to Eventarc
Click add_box Create trigger .
Type a Trigger name .
For example, trigger-storage-events-listener .
In the Event provider list, select Cloud Storage .
In the Event list, under Direct , select
google.cloud.storage.object.v1.finalized .
In the Bucket list, browse for the bucket that you previously created
and select it.
In the Region list, based on your Cloud Storage bucket,
accept the default of us-central1 (Iowa) .
If prompted, grant the iam.serviceAccountTokenCreator role to
the Pub/Sub service account.
Select the Service account that you previously created.
In the Event destination list, select Workflows .
In the Select a workflow list, select the callback-event-listener
workflow.
Click Create .
gcloud
To create a trigger, run the
gcloud eventarc triggers create
command:
gcloud eventarc triggers create trigger-storage-events-listener \
--location = us-central1 \
--destination-workflow = callback-event-listener \
--destination-workflow-location = us-central1 \
--event-filters = "type=google.cloud.storage.object.v1.finalized" \
--event-filters = "bucket= PROJECT_ID -bucket-callback" \
--service-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Events are transformed and passed to the workflow execution as runtime arguments.
Note that it can take up to 2 minutes for the new trigger to become active.
Execute the primary workflow
Executing a workflow runs the current workflow definition associated with the
workflow. Execute the callback-event-sample workflow. This is the primary
workflow and it waits for specific events to occurs, only resuming its execution
when the secondary workflow makes the appropriate callback requests.
Console
In the Google Cloud console, go to the Workflows
page.
Go to Workflows
On the Workflows page, click the
callback-event-sample workflow to go to its details page.
On the Workflow Details page, click
play_arrow Execute .
Click Execute again.
The workflow execution starts. While the execution runs, you should see
an Execution state of Running and a log entry similar to the
following: Started waiting 1hr for an event from source topic-callback .
gcloud
To execute a workflow, run the
gcloud workflows run command:
gcloud workflows run callback-event-sample \
--location = us-central1
The workflow execution starts. While the execution runs, you should see
an execution state similar to the following:
Waiting for execution [a848a164-268a-449c-b2fe-396f32f2ed66] to complete...working...
Generate events and check the execution status
You can confirm that the results are as expected by generating events, viewing
log entries, and checking the workflow execution status.
Publish a message
Publish a message to the Pub/Sub topic that you previously
created.
Console
In the Google Cloud console, go to the Pub/Sub
Topics page.
Go to Topics
Click topic-callback .
Click the Messages tab.
Click Publish message .
In the Message body field, enter Hello World .
Click Publish .
gcloud
To publish a message, use the
gcloud pubsub topics publish
command:
gcloud pubsub topics publish topic-callback \
--message = "Hello World"
Upload an object
Upload a file to the Cloud Storage bucket that you previously created.
Console
In the Google Cloud console, go to the Cloud Storage Buckets page.
Go to Buckets
Click the name of the bucket that you previously created.
In the Objects tab, do either of the following:
Drag and drop the desired file from your desktop or file manager
to the main pane in the Google Cloud console.
Click Upload files , select the file that you want to upload, and
then click Open .
gcloud
To upload a file, run the gcloud storage cp
command:
gcloud storage cp OBJECT_LOCATION gs:// PROJECT_ID -bucket-callback/
Replace OBJECT_LOCATION with the local path to your
object. For example, random.txt .
View log entries and execution status
Confirm that the callback-event-sample workflow completed successfully.
Console
In the Google Cloud console, go to the Workflows
page.
Go to Workflows
On the Workflows page, click the
callback-event-sample workflow to go to its details page.
On the Workflow Details page, to retrieve the details for a
particular execution, click the appropriate execution ID.
The Execution state should be Succeeded and, in the Output pane,
you should see the received Pub/Sub and
Cloud Storage events.
gcloud
Filter the log entries and return the output in JSON format:
gcloud logging read "resource.type=workflows.googleapis.com/Workflow AND textPayload:calling OR textPayload:waiting" \
--format = json
Look for log entries similar to:
"textPayload": "Stopped waiting for an event from source..."
"textPayload": "Calling back url https://workflowexecutions.googleapis.com/v1/projects/..."
"textPayload": "Started waiting 1hr for an event from source..."
Check the status of the last execution attempt:
gcloud workflows executions wait-last
The result should be similar to the following:
Using cached execution name: projects/1085953646031/locations/us-central1/workflows/callback-event-sample/executions/79929e4e-82c1-4da1-b068-f828034c01b7
Waiting for execution [79929e4e-82c1-4da1-b068-f828034c01b7] to complete...done.
[...]
state: SUCCEEDED
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
Delete resources created in this tutorial
Delete data from Firestore .
Delete a Pub/Sub topic .
Delete a Cloud Storage bucket .
Delete an Eventarc trigger .
Delete a workflow .
What's next
Try the Create a human-in-the-loop workflow using callbacks tutorial.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
