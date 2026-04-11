---
title: "Method: projects.locations.jobs.pause \_|\_ Cloud Scheduler \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/scheduler/docs/reference/rest/v1/projects.locations.jobs/pause
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/scheduler/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/scheduler/docs/reference/rest/v1/projects.locations.jobs/pause
  title: "Method: projects.locations.jobs.pause \_|\_ Cloud Scheduler \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Scheduler
Reference
Send feedback
Method: projects.locations.jobs.pause
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Try it!
Pauses a job.
If a job is paused then the system will stop executing the job until it is re-enabled via jobs.resume . The state of the job is stored in state ; if paused it will be set to Job.State.PAUSED . A job must be in Job.State.ENABLED to be paused.
HTTP request
POST https://cloudscheduler.googleapis.com/v1/{name=projects/*/locations/*/jobs/*}:pause
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The job name. For example: projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID .
Authorization requires the following IAM permission on the specified resource name :
cloudscheduler.jobs.pause
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Job .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/cloud-scheduler
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-16 UTC."],[],[]]
