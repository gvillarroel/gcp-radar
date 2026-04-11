---
title: "Transcoder API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/transcoder/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/transcoder/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/transcoder/docs/reference/rest
  title: "Transcoder API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Transcoder API
Reference
Send feedback
Transcoder API
Stay organized with collections
Save and categorize content based on your preferences.
This API converts video files into formats suitable for consumer distribution. For more information, see the Transcoder API overview .
REST Resource: v1.projects.locations.jobTemplates
REST Resource: v1.projects.locations.jobs
Service: transcoder.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://transcoder.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://transcoder.googleapis.com
REST Resource: v1.projects.locations.jobTemplates
Methods
create
POST /v1/{parent=projects/*/locations/*}/jobTemplates
Creates a job template in the specified region.
delete
DELETE /v1/{name=projects/*/locations/*/jobTemplates/*}
Deletes a job template.
get
GET /v1/{name=projects/*/locations/*/jobTemplates/*}
Returns the job template data.
list
GET /v1/{parent=projects/*/locations/*}/jobTemplates
Lists job templates in the specified region.
REST Resource: v1.projects.locations.jobs
Methods
create
POST /v1/{parent=projects/*/locations/*}/jobs
Creates a job in the specified region.
delete
DELETE /v1/{name=projects/*/locations/*/jobs/*}
Deletes a job.
get
GET /v1/{name=projects/*/locations/*/jobs/*}
Returns the job data.
list
GET /v1/{parent=projects/*/locations/*}/jobs
Lists jobs in the specified region.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-13 UTC."],[],[]]
