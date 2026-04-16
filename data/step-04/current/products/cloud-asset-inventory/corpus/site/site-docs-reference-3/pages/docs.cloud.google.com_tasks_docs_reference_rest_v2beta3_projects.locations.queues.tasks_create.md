---
title: "Method: projects.locations.queues.tasks.create \_|\_ Cloud Tasks \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/tasks/docs/reference/rest/v2beta3/projects.locations.queues.tasks/create
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/tasks/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/tasks/docs/reference/rest/v2beta3/projects.locations.queues.tasks/create
  title: "Method: projects.locations.queues.tasks.create \_|\_ Cloud Tasks \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Tasks
Reference
Send feedback
Method: projects.locations.queues.tasks.create
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
Try it!
Creates a task and adds it to a queue.
Tasks cannot be updated after creation; there is no UpdateTask command.
The maximum task size is 100KB.
HTTP request
POST https://cloudtasks.googleapis.com/v2beta3/{parent=projects/*/locations/*/queues/*}/tasks
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The queue name. For example: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID
The queue must already exist.
Authorization requires the following IAM permission on the specified resource parent :
cloudtasks.tasks.create
Request body
The request body contains data with the following structure:
JSON representation
{
"task" : {
object ( Task )
} ,
"responseView" : enum ( View )
}
Fields
task
object ( Task )
Required. The task to add.
Task names have the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID . The user can optionally specify a task name . If a name is not specified then the system will generate a random unique task id, which will be set in the task returned in the response .
If scheduleTime is not set or is in the past then Cloud Tasks will set it to the current time.
Task De-duplication:
Explicitly specifying a task ID enables task de-duplication. If a task's ID is identical to that of an existing task or a task that was deleted or executed recently then the call will fail with google.rpc.Code.ALREADY_EXISTS . The IDs of deleted tasks are not immediately available for reuse. It can take up to 24 hours (or 9 days if the task's queue was created using a queue.yaml or queue.xml) for the task ID to be released and made available again.
Because there is an extra lookup cost to identify duplicate task names, these tasks.create calls have significantly increased latency. Using hashed strings for the task id or for the prefix of the task id is recommended. Choosing task ids that are sequential or have sequential prefixes, for example using a timestamp, causes an increase in latency and error rates in all task commands. The infrastructure relies on an approximately uniform distribution of task ids to store and serve tasks efficiently.
responseView
enum ( View )
The responseView specifies which subset of the Task will be returned.
By default responseView is BASIC ; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains.
Authorization for FULL requires cloudtasks.tasks.fullView Google IAM permission on the Task resource.
Response body
If successful, the response body contains a newly created instance of Task .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/cloud-tasks
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-21 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-21 UTC."],[],[]]
