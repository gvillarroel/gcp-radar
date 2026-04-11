---
title: "Method: projects.locations.jobs.patch \_|\_ Cloud Scheduler \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/scheduler/docs/reference/rest/v1/projects.locations.jobs/patch
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/scheduler/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/scheduler/docs/reference/rest/v1/projects.locations.jobs/patch
  title: "Method: projects.locations.jobs.patch \_|\_ Cloud Scheduler \_|\_ Google\
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
Method: projects.locations.jobs.patch
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Updates a job.
If successful, the updated Job is returned. If the job does not exist, NOT_FOUND is returned.
If jobs.patch does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the jobs.patch request until a successful response is received.
HTTP request
PATCH https://cloudscheduler.googleapis.com/v1/{job.name=projects/*/locations/*/jobs/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
job.name
string
Optionally caller-specified in jobs.create , after which it becomes output only.
The job name. For example: projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID .
PROJECT_ID can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see Identifying projects
LOCATION_ID is the canonical ID for the job's location. The list of available locations can be obtained by calling locations.list . For more information, see Cloud Scheduler locations .
JOB_ID can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500 characters.
Query parameters
Parameters
updateMask
string ( FieldMask format)
A mask used to specify which fields of the job are being updated.
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
Request body
The request body contains an instance of Job .
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
