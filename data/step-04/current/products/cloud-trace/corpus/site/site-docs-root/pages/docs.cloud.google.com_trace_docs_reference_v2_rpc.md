---
title: "Cloud Trace API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/reference/v2/rpc
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/reference/v2/rpc
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
Service: cloudtrace.googleapis.com
The Service name cloudtrace.googleapis.com is needed to create RPC client stubs.
google.devtools.cloudtrace.v1.TraceService
Methods
GetTrace
Gets a single trace by its ID.
ListTraces
Returns a list of traces that match the specified filter conditions.
PatchTraces
Sends trace spans to Cloud Trace.
google.devtools.cloudtrace.v2.TraceService
Methods
BatchWriteSpans
Batch writes new spans to new or existing traces.
CreateSpan
Creates a new span.
google.devtools.cloudtrace.v2beta1.TracingConfigService
Methods
CreateTraceSink
Creates a sink that exports trace spans to a destination.
DeleteTraceSink
Deletes a sink.
GetTraceSink
Get a trace sink by name under the parent resource (GCP project).
ListTraceSinks
List all sinks for the parent resource (GCP project).
UpdateTraceSink
Updates a sink.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-23 UTC."],[],[]]
