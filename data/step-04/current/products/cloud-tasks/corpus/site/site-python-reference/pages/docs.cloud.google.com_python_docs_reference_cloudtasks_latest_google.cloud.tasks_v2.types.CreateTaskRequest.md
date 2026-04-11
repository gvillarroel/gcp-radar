---
title: "Class CreateTaskRequest (2.22.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.types.CreateTaskRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.types.CreateTaskRequest
  title: "Class CreateTaskRequest (2.22.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class CreateTaskRequest (2.22.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.22.0 (latest)
2.21.0
2.20.0
2.19.3
2.18.0
2.17.1
2.16.5
2.15.1
2.14.2
2.13.2
2.12.1
2.11.0
2.10.4
2.9.1
2.8.1
2.7.2
2.6.0
2.5.3
2.4.0
2.3.0
2.2.0
2.1.0
2.0.0
1.5.2
1.4.0
1.3.0
1.2.1
CreateTaskRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request message for
CreateTask .
Attributes
Name
Description
parent
str
Required. The queue name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID
The queue must already exist.
task
google.cloud.tasks_v2.types.Task
Required. The task to add.
Task names have the following format:
projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID .
The user can optionally specify a task
name . If a name is not
specified then the system will generate a random unique task
id, which will be set in the task returned in the
response .
If schedule_time
is not set or is in the past then Cloud Tasks will set it to
the current time.
Task De-duplication:
Explicitly specifying a task ID enables task de-duplication.
If a task's ID is identical to that of an existing task or a
task that was deleted or executed recently then the call
will fail with
ALREADY_EXISTS][google.rpc.Code.ALREADY_EXISTS] . If the
task's queue was created using Cloud Tasks, then another
task with the same name can't be created for 1hour after
the original task was deleted or executed. If the task's
queue was created using queue.yaml or queue.xml, then
another task with the same name can't be created for 9days
after the original task was deleted or executed.
Because there is an extra lookup cost to identify duplicate
task names, these
CreateTask
calls have significantly increased latency. Using hashed
strings for the task id or for the prefix of the task id is
recommended. Choosing task ids that are sequential or have
sequential prefixes, for example using a timestamp, causes
an increase in latency and error rates in all task commands.
The infrastructure relies on an approximately uniform
distribution of task ids to store and serve tasks
efficiently.
response_view
google.cloud.tasks_v2.types.Task.View
The response_view specifies which subset of the
Task will be returned.
By default response_view is
BASIC ; not all
information is retrieved by default because some data, such
as payloads, might be desirable to return only when needed
because of its large size or because of the sensitivity of
data that it contains.
Authorization for
FULL requires
cloudtasks.tasks.fullView `Google
IAM
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
