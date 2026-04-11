---
title: "StatusEvent \_|\_ Batch \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/batch/docs/reference/rest/v1/StatusEvent
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/batch/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/batch/docs/reference/rest/v1/StatusEvent
  title: "StatusEvent \_|\_ Batch \_|\_ Google Cloud Documentation"
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
StatusEvent
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
TaskExecution
JSON representation
Status event.
JSON representation
{
"type" : string ,
"description" : string ,
"eventTime" : string ,
"taskExecution" : {
object ( TaskExecution )
} ,
"taskState" : enum ( State )
}
Fields
type
string
Type of the event.
description
string
Description of the event.
eventTime
string ( Timestamp format)
The time this event occurred.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
taskExecution
object ( TaskExecution )
Task Execution. This field is only defined for task-level status events where the task fails.
taskState
enum ( State )
Task State. This field is only defined for task-level status events.
TaskExecution
This Task Execution field includes detail information for task execution procedures, based on StatusEvent types.
JSON representation
{
"exitCode" : integer
}
Fields
exitCode
integer
The exit code of a finished task.
If the task succeeded, the exit code will be 0. If the task failed but not due to the following reasons, the exit code will be 50000.
Otherwise, it can be from different sources: * Batch known failures: https://cloud.google.com/batch/docs/troubleshooting#reserved-exit-codes . * Batch runnable execution failures; you can rely on Batch logs to further diagnose: https://cloud.google.com/batch/docs/analyze-job-using-logs . If there are multiple runnables failures, Batch only exposes the first error.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]
