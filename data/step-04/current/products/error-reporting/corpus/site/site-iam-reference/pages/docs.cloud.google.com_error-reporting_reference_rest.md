---
title: "Error Reporting API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/reference/rest
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/reference
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/reference/rest
  title: "Error Reporting API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Cloud Observability
Error Reporting
Reference
Send feedback
Error Reporting API
Stay organized with collections
Save and categorize content based on your preferences.
Groups and counts similar errors from cloud services and applications, reports new errors, and provides access to error groups and their associated errors.
REST Resource: v1beta1.projects
REST Resource: v1beta1.projects.events
REST Resource: v1beta1.projects.groupStats
REST Resource: v1beta1.projects.groups
REST Resource: v1beta1.projects.locations
REST Resource: v1beta1.projects.locations.events
REST Resource: v1beta1.projects.locations.groupStats
REST Resource: v1beta1.projects.locations.groups
Service: clouderrorreporting.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://clouderrorreporting.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://clouderrorreporting.googleapis.com
REST Resource: v1beta1.projects
Methods
deleteEvents
DELETE /v1beta1/{projectName=projects/*}/events
Deletes all error events of a given project.
REST Resource: v1beta1.projects.events
Methods
list
GET /v1beta1/{projectName=projects/*}/events
Lists the specified events.
report
POST /v1beta1/{projectName=projects/*}/events:report
Report an individual error event and record the event to a log.
REST Resource: v1beta1.projects.groupStats
Methods
list
GET /v1beta1/{projectName=projects/*}/groupStats
Lists the specified groups.
REST Resource: v1beta1.projects.groups
Methods
get
GET /v1beta1/{groupName=projects/*/groups/*}
Get the specified group.
update
PUT /v1beta1/{group.name=projects/*/groups/*}
Replace the data for the specified group.
REST Resource: v1beta1.projects.locations
Methods
deleteEvents
DELETE /v1beta1/{projectName=projects/*/locations/*}/events
Deletes all error events of a given project.
REST Resource: v1beta1.projects.locations.events
Methods
list
GET /v1beta1/{projectName=projects/*/locations/*}/events
Lists the specified events.
REST Resource: v1beta1.projects.locations.groupStats
Methods
list
GET /v1beta1/{projectName=projects/*/locations/*}/groupStats
Lists the specified groups.
REST Resource: v1beta1.projects.locations.groups
Methods
get
GET /v1beta1/{groupName=projects/*/locations/*/groups/*}
Get the specified group.
update
PUT /v1beta1/{group.name=projects/*/locations/*/groups/*}
Replace the data for the specified group.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-14 UTC."],[],[]]
