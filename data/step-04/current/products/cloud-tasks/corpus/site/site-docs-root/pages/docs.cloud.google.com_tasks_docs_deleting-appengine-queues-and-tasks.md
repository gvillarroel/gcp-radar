---
title: "Manage queues and tasks \_|\_ Cloud Tasks \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/tasks/docs
source_metadata:
  url: https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks
  title: "Manage queues and tasks \_|\_ Cloud Tasks \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Tasks
Guides
Send feedback
Manage queues and tasks
Stay organized with collections
Save and categorize content based on your preferences.
You can manage queues and tasks in the following ways:
In the Google Cloud console
By using the Google Cloud CLI in either your terminal or Cloud Shell
By sending a request to the Cloud Tasks API
Delete a task from a queue
You can delete a task if it is scheduled or dispatched. For example, you might
need to delete a task that can't be completed successfully, no matter how many
times it is retried. You can't delete a task if it has completed successfully or
if it has run out of retries after consistently failing.
Console
In the Google Cloud console, go to the Cloud Tasks
> Queues page.
Go to Queues
Click the name of the queue for the task that you want to delete.
Select the checkbox for the task that you want to delete.
Click
delete
Delete task .
At the prompt, click Delete .
gcloud
Delete a task using the
gcloud tasks delete command:
gcloud tasks delete TASK_NAME \
--queue = QUEUE_ID \
--location = LOCATION
Replace the following:
TASK_NAME : the name of the task that you want to
delete
QUEUE_ID : the name of the queue that the task
belongs to
LOCATION : the
region in which the queue is
deployed—for example, us-central1
REST
To delete a task, use the
projects.locations.queues.tasks.delete
method.
Before using any of the request data,
make the following replacements:
QUEUE_ID : the name of the queue that the
task belongs to
TASK_NAME : the name of the
task you want to delete
PROJECT_ID : your Google Cloud
project ID
LOCATION : the
region in which the queue exists—for example,
us-central1
The request body must be empty.
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
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /queues/ QUEUE_ID /tasks/ TASK_NAME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://cloudtasks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /queues/ QUEUE_ID /tasks/ TASK_NAME " | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
If successful, the response body is empty.
Purge all tasks from a queue
You can delete all tasks from a queue by purging them. All tasks created
before the purge call are permanently deleted. However, purge operations can
take up to one minute to take effect and tasks might be dispatched before the
purge takes effect.
Warning: Tasks created in close temporal proximity (not more than a few seconds)
to a purge call are also purged.
Console
In the Google Cloud console, go to the Cloud Tasks
> Queues page.
Go to Queues
Click the name of the queue for the tasks that you want to delete.
Click remove_circle_outline
Purge queue .
At the prompt, click Purge .
gcloud
Purge a queue using the
gcloud tasks queues purge
command:
gcloud tasks queues purge QUEUE_ID \
--location = LOCATION
Replace the following:
QUEUE_ID : the name of the queue that you want to
purge
LOCATION : the
region in which the queue is
deployed—for example, us-central1
REST
To purge a queue, use the
projects.locations.queues.purge
method.
Before using any of the request data,
make the following replacements:
QUEUE_ID : the name of the queue that you
want to purge
PROJECT_ID : your Google Cloud
project ID
LOCATION : the
region in which the queue is deployed—for example,
us-central1
The request body must be empty.
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /queues/ QUEUE_ID :purge"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https://cloudtasks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /queues/ QUEUE_ID :purge" | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
If successful, the response body contains an instance of
Queue :
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /queues/ QUEUE_ID ",
"rateLimits": {
"maxDispatchesPerSecond": 500,
"maxBurstSize": 100,
"maxConcurrentDispatches": 1000
},
"retryConfig": {
"maxAttempts": 100,
"minBackoff": "0.100s",
"maxBackoff": "3600s",
"maxDoublings": 16
},
"state": "RUNNING",
"purgeTime": "2025-03-28T13:06:30.110255Z"
}
Pause or resume queues
You can pause or resume a queue. Pausing a queue means that the execution and
delivery of tasks are stopped. You can still create tasks and push or append
them to the queue but the tasks won't be processed. Once the queue is resumed,
any backlogged tasks are processed in the order of their addition to the queue
backlog.
Console
In the Google Cloud console, go to the Cloud Tasks
> Queues page.
Go to Queues
Select the checkbox for the queue that you want to pause.
Click pause
Pause queue .
At the prompt, click Pause .
To resume the queue, click play_arrow
Resume queue .
gcloud
Pause a queue using the
gcloud tasks queues pause
command:
gcloud tasks queues pause QUEUE_ID \
--location = LOCATION
Replace the following:
QUEUE_ID : the name of the queue that you want
to pause
LOCATION : the
region in which the queue is
deployed—for example, us-central1
Resume a queue using the
gcloud tasks queues resume command:
gcloud tasks queues resume QUEUE_ID \
--location = LOCATION
REST
To pause a queue, use the
projects.locations.queues.pause
method.
Before using any of the request data,
make the following replacements:
QUEUE_ID : the name of the queue that you
want to pause
PROJECT_ID : your Google Cloud
project ID
LOCATION : the
region in which the queue is deployed—for example,
us-central1
The request body must be empty.
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /queues/ QUEUE_ID :pause"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https://cloudtasks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /queues/ QUEUE_ID :pause" | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
If successful, the response body contains an instance of
Queue :
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /queues/ QUEUE_ID ",
"rateLimits": {
"maxDispatchesPerSecond": 500,
"maxBurstSize": 100,
"maxConcurrentDispatches": 1000
},
"retryConfig": {
"maxAttempts": 100,
"minBackoff": "0.100s",
"maxBackoff": "3600s",
"maxDoublings": 16
},
"state": "PAUSED"
}
To resume a queue, use the
projects.locations.queues.resume
method.
Before using any of the request data,
make the following replacements:
QUEUE_ID : the name of the queue that you
want to resume
PROJECT_ID : your Google Cloud
project ID
LOCATION : the
region in which the queue is deployed—for example,
us-central1
The request body must be empty.
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /queues/ QUEUE_ID :resume"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https://cloudtasks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /queues/ QUEUE_ID :resume" | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
If successful, the response body contains an instance of
Queue :
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /queues/ QUEUE_ID ",
"rateLimits": {
"maxDispatchesPerSecond": 500,
"maxBurstSize": 100,
"maxConcurrentDispatches": 1000
},
"retryConfig": {
"maxAttempts": 100,
"minBackoff": "0.100s",
"maxBackoff": "3600s",
"maxDoublings": 16
},
"state": "RUNNING"
}
List queues
You can list queues. When listing queues, some
rate limit and
retry parameter details are returned.
Note that the following fields are equivalent:
Max rate (Console), MAX_RATE (gcloud),
maxDispatchesPerSecond (REST)
Max concurrent (Console), MAX_NUM_OF_TASKS (gcloud),
maxConcurrentDispatches (REST)
Console
In the Google Cloud console, go to the Cloud Tasks
> Queues page.
Go to Queues
All queues in your Google Cloud project are listed.
For more details, click the name of a queue, and then click the
Configuration tab.
Rate limit and retry parameter details are displayed.
gcloud
List queues using the
gcloud tasks queues list
command:
gcloud tasks queues list \
--location = LOCATION
Replace LOCATION with the
region in which the queue is
deployed—for example, us-central1 . If a location is not
specified, the location of your Google Cloud project's App Engine app is used
if it exists; otherwise, you must specify a location.
The output should be similar to the following:
QUEUE_NAME: my-queue
STATE: PAUSED
MAX_NUM_OF_TASKS: 1000
MAX_RATE ( /sec ) : 500 .0
MAX_ATTEMPTS: 100
...
REST
To list queues, use the
projects.locations.queues.list
method.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud
project ID.
LOCATION : the
region in which the queues are created—for
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /queues"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://cloudtasks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /queues" | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
If successful, the response body contains instances of
Queue
resources and the response should be similar to the following:
{
"queues": [
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /queues/ QUEUE_ID ",
"rateLimits": {
"maxDispatchesPerSecond": 500,
"maxBurstSize": 100,
"maxConcurrentDispatches": 1000
},
"retryConfig": {
"maxAttempts": 100,
"minBackoff": "0.100s",
"maxBackoff": "3600s",
"maxDoublings": 16
},
"state": "PAUSED",
"purgeTime": "2025-03-28T13:37:32.292552Z"
},
...
],
"nextPageToken": "CjQKCHppcHBlcjIAEgwI9-GExAYQ_oDc1AMaGioLeWlrZXMtYWdhaW4yC3VzLWNlbnRyYWwx"
}
Delete queues
You can delete a queue. Any tasks in the queue are deleted as well. If you
delete a queue you must wait 3 days before recreating it with the same name.
This waiting period prevents unexpected behaviour in tasks that are running at
the time of deletion or waiting to be run. It also avoids internal process
failures in the delete or recreate cycle.
Console
In the Google Cloud console, go to the Cloud Tasks
> Queues page.
Go to Queues
Select the checkbox for the queue that you want to delete.
Click
delete
Delete queue .
At the prompt, type the queue name, and then click Confirm .
gcloud
Delete a queue using the
gcloud tasks queues delete command:
gcloud tasks queues delete QUEUE_ID \
--location = LOCATION
Replace the following:
QUEUE_ID : the name of the queue that you want to
delete
LOCATION : the
region in which the queue is
deployed—for example, us-central1
REST
To delete a queue, use the
projects.locations.queues.delete
method.
Before using any of the request data,
make the following replacements:
QUEUE_ID : the name of the queue that you
want to delete
PROJECT_ID : your Google Cloud
project ID
LOCATION : the
region in which the queue is deployed—for example,
us-central1
The request body must be empty.
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
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /queues/ QUEUE_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://cloudtasks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /queues/ QUEUE_ID " | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
If successful, the response body is empty.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
