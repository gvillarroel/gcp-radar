---
title: "Package types (0.20.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/batch/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.types
  title: "Package types (0.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Package types (0.20.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
0.20.0 (latest)
0.19.0
0.18.0
0.17.37
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.1
0.7.0
0.6.0
0.5.0
0.4.1
0.3.2
0.2.0
0.1.2
API documentation for batch_v1.types package.
Classes
AllocationPolicy
A Job's resource allocation policy describes when, where, and
how compute resources should be allocated for the Job.
CancelJobRequest
CancelJob Request.
CancelJobResponse
Response to the CancelJob request.
ComputeResource
Compute resource requirements.
ComputeResource defines the amount of resources required for each
task. Make sure your tasks have enough resources to successfully
run. If you also define the types of resources for a job to use with
the
InstancePolicyOrTemplate <https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicyortemplate> __
field, make sure both fields are compatible with each other.
CreateJobRequest
CreateJob Request.
DeleteJobRequest
DeleteJob Request.
Environment
An Environment describes a collection of environment
variables to set when executing Tasks.
GCS
Represents a Google Cloud Storage volume.
GetJobRequest
GetJob Request.
GetTaskRequest
Request for a single Task by name.
Job
The Cloud Batch Job description.
JobNotification
Notification configurations.
JobStatus
Job status.
LifecyclePolicy
LifecyclePolicy describes how to deal with task failures
based on different conditions.
ListJobsRequest
ListJob Request.
ListJobsResponse
ListJob Response.
ListTasksRequest
ListTasks Request.
ListTasksResponse
ListTasks Response.
LogsPolicy
LogsPolicy describes if and how a job's logs are preserved. Logs
include information that is automatically written by the Batch
service agent and any information that you configured the job's
runnables to write to the stdout or stderr streams.
NFS
Represents an NFS volume.
OperationMetadata
Represents the metadata of the long-running operation.
Runnable
Runnable describes instructions for executing a specific
script or container as part of a Task.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ServiceAccount
Carries information about a Google Cloud service account.
StatusEvent
Status event.
Task
A Cloud Batch task.
TaskExecution
This Task Execution field includes detail information for
task execution procedures, based on StatusEvent types.
TaskGroup
A TaskGroup defines one or more Tasks that all share the same
TaskSpec.
TaskSpec
Spec of a task
TaskStatus
Status of a task.
Volume
Volume describes a volume and parameters for it to be mounted
to a VM.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
