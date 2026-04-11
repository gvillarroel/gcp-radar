---
title: "Method: projects.locations.jobs.taskGroups.tasks.list \_|\_ Batch \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs.taskGroups.tasks/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/batch/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs.taskGroups.tasks/list
  title: "Method: projects.locations.jobs.taskGroups.tasks.list \_|\_ Batch \_|\_\
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
Method: projects.locations.jobs.taskGroups.tasks.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
List Tasks associated with a job.
HTTP request
GET https://batch.googleapis.com/v1/{parent=projects/*/locations/*/jobs/*/taskGroups/*}/tasks
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Name of a TaskGroup from which Tasks are being requested. Pattern: "projects/{project}/locations/{location}/jobs/{job}/taskGroups/{task_group}"
Query parameters
Parameters
filter
string
Task filter, null filter matches all Tasks. Filter string should be of the format State=TaskStatus.State e.g. State=RUNNING
pageSize
integer
Page size.
pageToken
string
Page token.
Request body
The request body must be empty.
Response body
tasks.list Response.
If successful, the response body contains data with the following structure:
JSON representation
{
"tasks" : [
{
object ( Task )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
tasks[]
object ( Task )
Tasks.
nextPageToken
string
Next page token.
unreachable[]
string
Locations that could not be reached.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]
