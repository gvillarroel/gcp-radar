---
title: "REST Resource: projects.locations.jobs.taskGroups.tasks \_|\_ Batch \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs.taskGroups.tasks
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/batch/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs.taskGroups.tasks
  title: "REST Resource: projects.locations.jobs.taskGroups.tasks \_|\_ Batch \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Batch
Reference
Send feedback
REST Resource: projects.locations.jobs.taskGroups.tasks
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Task
JSON representation
TaskStatus
JSON representation
Methods
Resource: Task
A Cloud Batch task.
JSON representation
{
"name" : string ,
"status" : {
object ( TaskStatus )
}
}
Fields
name
string
Task name. The name is generated from the parent TaskGroup name and 'id' field. For example: "projects/123456/locations/us-west1/jobs/job01/taskGroups/group01/tasks/task01".
status
object ( TaskStatus )
Task Status.
TaskStatus
Status of a task.
JSON representation
{
"state" : enum ( State ) ,
"statusEvents" : [
{
object ( StatusEvent )
}
]
}
Fields
state
enum ( State )
Task state.
statusEvents[]
object ( StatusEvent )
Detailed info about why the state is reached.
Methods
get
Return a single Task.
list
List Tasks associated with a job.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]
