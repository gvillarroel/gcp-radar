---
title: "Dataflow API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/reference/rest
  title: "Dataflow API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Reference
Send feedback
Dataflow API
Stay organized with collections
Save and categorize content based on your preferences.
Manages Google Cloud Dataflow projects on Google Cloud Platform.
REST Resource: v1b3.projects.jobs
REST Resource: v1b3.projects.jobs.messages
REST Resource: v1b3.projects.locations.flexTemplates
REST Resource: v1b3.projects.locations.jobs
REST Resource: v1b3.projects.locations.jobs.messages
REST Resource: v1b3.projects.locations.jobs.stages
REST Resource: v1b3.projects.locations.templates
REST Resource: v1b3.projects.templates
Service: dataflow.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://dataflow.googleapis.com/$discovery/rest?version=v1b3
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://dataflow.googleapis.com
REST Resource: v1b3.projects.jobs
Methods
aggregated
GET /v1b3/projects/{projectId}/jobs:aggregated
List the jobs of a project across all regions.
create
POST /v1b3/projects/{projectId}/jobs
Creates a Dataflow job.
get
GET /v1b3/projects/{projectId}/jobs/{jobId}
Gets the state of the specified Cloud Dataflow job.
getMetrics
GET /v1b3/projects/{projectId}/jobs/{jobId}/metrics
Request the job status.
list
GET /v1b3/projects/{projectId}/jobs
List the jobs of a project.
snapshot
POST /v1b3/projects/{projectId}/jobs/{jobId}:snapshot
Snapshot the state of a streaming job.
update
PUT /v1b3/projects/{projectId}/jobs/{jobId}
Updates the state of an existing Cloud Dataflow job.
REST Resource: v1b3.projects.jobs.messages
Methods
list
GET /v1b3/projects/{projectId}/jobs/{jobId}/messages
Request the job status.
REST Resource: v1b3.projects.locations.flexTemplates
Methods
launch
POST /v1b3/projects/{projectId}/locations/{location}/flexTemplates:launch
Launch a job with a FlexTemplate.
REST Resource: v1b3.projects.locations.jobs
Methods
create
POST /v1b3/projects/{projectId}/locations/{location}/jobs
Creates a Dataflow job.
get
GET /v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}
Gets the state of the specified Cloud Dataflow job.
getExecutionDetails
GET /v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/executionDetails
Request detailed information about the execution status of the job.
getMetrics
GET /v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/metrics
Request the job status.
list
GET /v1b3/projects/{projectId}/locations/{location}/jobs
List the jobs of a project.
snapshot
POST /v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}:snapshot
Snapshot the state of a streaming job.
update
PUT /v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}
Updates the state of an existing Cloud Dataflow job.
REST Resource: v1b3.projects.locations.jobs.messages
Methods
list
GET /v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/messages
Request the job status.
REST Resource: v1b3.projects.locations.jobs.stages
Methods
getExecutionDetails
GET /v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/stages/{stageId}/executionDetails
Request detailed information about the execution status of a stage of the job.
REST Resource: v1b3.projects.locations.templates
Methods
create
POST /v1b3/projects/{projectId}/locations/{location}/templates
Creates a Cloud Dataflow job from a template.
get
GET /v1b3/projects/{projectId}/locations/{location}/templates:get
Get the template associated with a template.
launch
POST /v1b3/projects/{projectId}/locations/{location}/templates:launch
Launches a template.
REST Resource: v1b3.projects.templates
Methods
create
POST /v1b3/projects/{projectId}/templates
Creates a Cloud Dataflow job from a template.
get
GET /v1b3/projects/{projectId}/templates:get
Get the template associated with a template.
launch
POST /v1b3/projects/{projectId}/templates:launch
Launches a template.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-10 UTC."],[],[]]
