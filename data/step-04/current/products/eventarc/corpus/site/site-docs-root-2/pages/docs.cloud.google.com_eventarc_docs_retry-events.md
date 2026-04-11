---
title: "Retry events \_|\_ Eventarc Standard \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/eventarc/docs/retry-events
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/eventarc/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/eventarc/docs/retry-events
  title: "Retry events \_|\_ Eventarc Standard \_|\_ Google Cloud Documentation"
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
Retry events
Stay organized with collections
Save and categorize content based on your preferences.
Standard
Eventarc Standard supports at-least-once event delivery. This means
that if a destination fails to acknowledge an event, Eventarc
will automatically attempt to redeliver it.
The retry characteristics of Eventarc Standard match that of its
transport layer, Cloud Pub/Sub, which handles processing failures by
using a subscription retry policy .
How retries work
When you create an Eventarc trigger, the Pub/Sub
transport topic and subscription are automatically created for you. (Events from
Pub/Sub sources can use an existing Pub/Sub topic.)
Any subscription ID automatically created by Eventarc will have a
format that begins with eventarc- REGION - .
By default, when a destination can't acknowledge a message, Pub/Sub
will send the message again with an exponential backoff delay . An exponential
backoff lets you add progressively longer delays between retry attempts. The
default delay starts at a minimum of 10 seconds and increases with each
subsequent failure, up to a maximum of 600 seconds. Eventarc sets
the default message retention duration to 24 hours.
For more information about how Pub/Sub handles retries, see
Handle message failures and
Retry requests .
Best practices for handling retries
If an event message can't be successfully delivered within the message
retention window, it's discarded unless a dead-letter topic is configured. A
dead-letter topic lets you store and analyze persistent failures. In this
document, see Dead letter topics .
Because of at-least-once delivery, your event handler might receive duplicate
events. It's a best practice to design your handlers to be idempotent. In this
document, see Idempotent event handlers .
Configure retries
You might want to customize the default retry behavior. All retry and retention
settings are configured through the Pub/Sub subscription retry
policy associated with your Eventarc trigger.
To modify the subscription retry policy, first identify the Pub/Sub
subscription associated with your Eventarc trigger. Then, update
the subscription itself.
For more information on subscription properties, see
Subscription properties . For
information on subscription limits, see
Pub/Sub resource limits .
Identify the subscription
To identify the Pub/Sub subscription associated with your
Eventarc trigger, do the following:
Console
In the Google Cloud console, go to the Eventarc
Triggers page.
Go to Triggers
From the list of triggers, click the trigger you want to know the details
about.
Click the topic name.
To display the subscription ID, click the Subscriptions tab.
gcloud
You can use the
gcloud eventarc triggers describe
command to retrieve the subscription ID.
gcloud eventarc triggers describe TRIGGER_NAME \
--location = LOCATION
Replace the following:
TRIGGER_NAME : the name of the trigger or a fully
qualified identifier.
LOCATION : the location of the
Eventarc trigger.
This command returns information about the trigger that is similar to the
following and that includes the subscription ID:
createTime: '2023-03-16T13:40:44.889670204Z'
destination:
cloudRun:
path: /
region: us-central1
service: hello
eventDataContentType: application/protobuf
eventFilters:
...
transport:
pubsub:
subscription: projects/ PROJECT_ID /subscriptions/ SUBSCRIPTION_ID
topic: projects/ PROJECT_ID /topics/ TOPIC_ID
Terraform
To describe a
google_eventarc_trigger
Terraform resource, you can use the state show command.
terraform state show google_eventarc_trigger.default
The state show command returns information about the trigger that includes
the subscription ID. For example:
# google_eventarc_trigger.default:
resource "google_eventarc_trigger" "default" {
conditions = {}
create_time = "2025-07-14T17:29:22.575033822Z"
effective_labels = {
"goog-terraform-provisioned" = "true"
}
...
transport {
pubsub {
subscription = "projects/ PROJECT_ID /subscriptions/ SUBSCRIPTION_ID "
topic = "projects/ PROJECT_ID /topics/ TOPIC_ID "
}
}
}
For more information about using Terraform, see the
Terraform on Google Cloud documentation .
REST
To describe a trigger in a given project and location, use the
projects.locations.triggers.get
method.
Before using any of the request data,
make the following replacements:
TRIGGER_NAME : the name of the
trigger you want to describe.
PROJECT_ID : your Google Cloud
project ID.
LOCATION : the
region in which the trigger is created—for
example, us-central1 .
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://eventarc.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /triggers/ TRIGGER_NAME "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://eventarc.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /triggers/ TRIGGER_NAME " | Select-Object -Expand Content
If successful, the response body contains an instance of
Trigger
similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /triggers/ TRIGGER_NAME ",
"uid": "d700773a-698b-47b2-a712-2ee10b690062",
"createTime": "2022-12-06T22:44:04.744001514Z",
"updateTime": "2022-12-06T22:44:09.116459550Z",
"eventFilters": [
{
"attribute": "type",
"value": "google.cloud.pubsub.topic.v1.messagePublished"
}
],
"serviceAccount": " SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com",
"destination": {
"workflow": "projects/ PROJECT_ID /locations/ LOCATION /workflows/ WORKFLOW_NAME "
},
"transport": {
"pubsub": {
"topic": "projects/ PROJECT_ID /topics/ TOPIC_ID ",
"subscription": "projects/ PROJECT_ID /subscriptions/ SUBSCRIPTION_ID "
}
}
}
Update the subscription
To update the Pub/Sub subscription retry policy associated with
your Eventarc trigger, do the following:
Console
In the Google Cloud console, go to the Eventarc
Triggers page.
Go to Triggers
From the list of triggers, click the trigger you want to know the details
about.
Click the topic name.
To display the subscription ID, click the Subscriptions tab.
Click the subscription ID and then click
edit
Edit .
In the Retry policy section, select Retry immediately .
Or, to retry after an exponential backoff delay, enter the following
values in seconds:
Minimum backoff : the minimum delay in seconds between consecutive
deliveries of a given message. Defaults to 10 seconds and should be
between 0 and 600.
Maximum backoff : the maximum delay in seconds between consecutive
deliveries of a given message. Defaults to 600 seconds and should be
between 0 and 600.
For more information, see
Retry policy .
Click Update .
gcloud
You can use the
gcloud pubsub subscriptions update
command to update the subscription retry policy.
gcloud pubsub subscriptions update SUBSCRIPTION_ID \
--min-retry-delay = MIN_RETRY_DELAY \
--max-retry-delay = MAX_RETRY_DELAY
Replace the following:
SUBSCRIPTION_ID : the ID of the subscription or a
fully qualified identifier.
Both of the following flags must be specified to retry after an
exponential backoff delay; otherwise, any omitted flag reverts to its
default value:
MIN_RETRY_DELAY : the minimum delay in seconds
between consecutive deliveries of a given message. Defaults to 10 seconds
and should be between 0 and 600.
MAX_RETRY_DELAY : the maximum delay in seconds
between consecutive deliveries of a given message. Defaults to 600 seconds
and should be between 0 and 600.
Optionally, you can use the --clear-retry-policy flag to clear the retry
policy and set the subscription to retry immediately.
Terraform
You can update a Pub/Sub subscription retry policy by
configuring the
google_pubsub_subscription
Terraform resource. Use the
import block
to import the existing subscription so that Terraform can track the resource
in your state file. You can then manage the imported resource like any other,
using
ignore_changes
to specify attributes that Terraform should ignore when updating the
resource.
For example:
import {
to = google_pubsub_subscription.default
id = " SUBSCRIPTION_ID "
}
resource "google_pubsub_subscription" "default" {
name = " SUBSCRIPTION_ID "
topic = " TOPIC_ID "
retry_policy {
minimum_backoff = " MIN_RETRY_DELAY s"
maximum_backoff = " MAX_RETRY_DELAY s"
}
lifecycle {
# Ignore push delivery configuration which is managed by Eventarc
ignore_changes = [ push_config ]
}
}
Replace the following:
SUBSCRIPTION_ID : the ID of the subscription.
TOPIC_ID : the ID of the topic.
MIN_RETRY_DELAY : the minimum delay in seconds
between consecutive deliveries of a given message. Defaults to 10 seconds
and should be between 0 and 600.
MAX_RETRY_DELAY : the maximum delay in seconds
between consecutive deliveries of a given message. Defaults to 600 seconds
and should be between 0 and 600.
REST
To update the retry policy for a subscription in a given project, use the
projects.subscriptions.patch
method.
Before using any of the request data,
make the following replacements:
MIN_RETRY_DELAY : the minimum
delay in seconds between consecutive deliveries of a given message. Defaults to 10 seconds and
should be between 0 and 600.
MAX_RETRY_DELAY : the maximum
delay in seconds between consecutive deliveries of a given message. Defaults to 600 seconds and
should be between 0 and 600.
PROJECT_ID : your Google Cloud
project ID.
SUBSCRIPTION_ID : the ID of the
Pub/Sub subscription that you are updating.
Request JSON body:
{
"subscription": {
"retryPolicy": {
"minimumBackoff": " MIN_RETRY_DELAY s",
"maximumBackoff": " MAX_RETRY_DELAY s"
}
},
"updateMask": "retry_policy.maximum_backoff,retry_policy.minimum_backoff"
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
cat > request.json MIN_RETRY_DELAY s",
"maximumBackoff": " MAX_RETRY_DELAY s"
}
},
"updateMask": "retry_policy.maximum_backoff,retry_policy.minimum_backoff"
}
EOF
Then execute the following command to send your REST request:
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://pubsub.googleapis.com/v1/projects/ PROJECT_ID /subscriptions/ SUBSCRIPTION_ID "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
@'
{
"subscription": {
"retryPolicy": {
"minimumBackoff": " MIN_RETRY_DELAY s",
"maximumBackoff": " MAX_RETRY_DELAY s"
}
},
"updateMask": "retry_policy.maximum_backoff,retry_policy.minimum_backoff"
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://pubsub.googleapis.com/v1/projects/ PROJECT_ID /subscriptions/ SUBSCRIPTION_ID " | Select-Object -Expand Content
If successful, the response body contains an instance of
Subscription
similar to the following:
{
"name": "projects/ PROJECT_ID /subscriptions/ SUBSCRIPTION_ID ",
"topic": "projects/ PROJECT_ID /topics/ TOPIC_ID ",
...
"retryPolicy": {
"minimumBackoff": " MIN_RETRY_DELAY s",
"maximumBackoff": " MAX_RETRY_DELAY s"
},
"state": "ACTIVE"
}
Other retry considerations
You should be aware of the following considerations when handling processing
failures or forwarding undelivered messages.
Push backoffs
If a push subscriber sends too many negative acknowledgments, Pub/Sub
might start delivering messages using a push backoff . When Pub/Sub
uses a push backoff, it stops delivering messages for a predetermined amount of
time. This time span can range between 100 milliseconds to 60 seconds. After the
time has elapsed, Pub/Sub starts delivering messages again. For
more information, see Push backoff .
Dead letter topics
If the destination doesn't receive the message, you can forward undelivered
messages to a dead-letter topic (also known as a dead-letter queue). A
dead-letter topic can store messages that the destination can't acknowledge. You
must set a dead-letter topic when you create or update a Pub/Sub
subscription, not when you create a Pub/Sub topic or when
Eventarc creates a Pub/Sub topic. For more
information, see
Configure a dead-letter topic .
Errors that don't warrant retries
When applications use Pub/Sub as the event source and the event
is not delivered, the event is automatically retried, except for errors that
don't warrant retries. Events to a Workflows destination from any
source won't be retried if the workflow doesn't execute. Note that
Workflows acknowledges events as soon as the workflow execution
starts . If the workflow execution starts but later fails, the executions are
not retried. To resolve such service issues, you should handle
errors and
retries within the workflow.
Duplicate events
Duplicate events might be delivered to event handlers. According to the
CloudEvents specification ,
the combination of source and id attributes is considered unique, and
therefore any events with the same combination are considered duplicates. You
should implement idempotent event handlers as a general best practice.
Idempotent event handlers
Event handlers that can be retried should be idempotent, using the following
general guidelines:
Many external APIs let you supply an idempotency key as a parameter. If you
are using such an API, you should use the event ID as the idempotency key.
Idempotency works well with at-least-once delivery, because it makes it safe
to retry. So a general best practice for writing reliable code is to combine
idempotency with retries.
Make sure that your code is internally idempotent. For example:
Make sure that mutations can happen more than once without changing the
outcome.
Query database state in a transaction before mutating the state.
Make sure that all side effects are themselves idempotent.
Impose a transactional check outside your service, independent of the code.
For example, persist state somewhere recording that a given event ID has
already been processed.
Deal with duplicate calls out-of-band. For example, have a separate clean up
process that cleans up after duplicate calls.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
