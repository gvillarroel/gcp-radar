---
title: "Cloud Trace API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/reference/v2/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/reference/v2/rest
  title: "Cloud Trace API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Trace
Reference
Send feedback
Cloud Trace API
Stay organized with collections
Save and categorize content based on your preferences.
Sends application trace data to Cloud Trace for viewing. Trace data is collected for all App Engine applications by default. Trace data from other applications can be provided using this API. This library is used to interact with the Cloud Trace API directly. If you are looking to instrument your application for Cloud Trace, we recommend using OpenTelemetry.
REST Resource: v2beta1.projects.traceSinks
REST Resource: v2.projects.traces
REST Resource: v2.projects.traces.spans
Service: cloudtrace.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://cloudtrace.googleapis.com/$discovery/rest?version=v2
https://cloudtrace.googleapis.com/$discovery/rest?version=v2beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudtrace.googleapis.com
REST Resource: v2beta1.projects.traceSinks
Methods
create
POST /v2beta1/{parent=projects/*}/traceSinks
Creates a sink that exports trace spans to a destination.
delete
DELETE /v2beta1/{name=projects/*/traceSinks/*}
Deletes a sink.
get
GET /v2beta1/{name=projects/*/traceSinks/*}
Get a trace sink by name under the parent resource (GCP project).
list
GET /v2beta1/{parent=projects/*}/traceSinks
List all sinks for the parent resource (GCP project).
patch
PATCH /v2beta1/{name=projects/*/traceSinks/*}
Updates a sink.
REST Resource: v2.projects.traces
Methods
batchWrite
POST /v2/{name=projects/*}/traces:batchWrite
Batch writes new spans to new or existing traces.
REST Resource: v2.projects.traces.spans
Methods
createSpan
POST /v2/{name=projects/*/traces/*/spans/*}
Creates a new span.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-23 UTC."],[],[]]
