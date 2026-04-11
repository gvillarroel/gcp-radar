---
title: "Traces and spans \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/traces-and-spans
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/traces-and-spans
  title: "Traces and spans \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Trace
Guides
Send feedback
Traces and spans
Stay organized with collections
Save and categorize content based on your preferences.
This document provides an introduction to traces and spans.
A trace represents a single end-to-end operation. Traces are composed of
spans , which are records for a single function or operation.
Trace data model
A trace has the following properties:
Trace ID : The unique identifier of the end-to-end operation.
The trace ID must be
propagated as context as part of the end-to-end operation.
A collection of spans that share the same value for the trace ID.
Cloud Trace uses the trace ID to identify which spans in its repository
are associated with the same trace.
Span data model
A span corresponds to an operation which took place over some finite but
non-zero time period. The following lists some essential properties stored
by each span:
Trace ID : The identifier of the end-to-end operation in which this
particular overall operation took place.
Span ID : The unique identifier for the span. If the same operation is
invoked in the fulfillment of a single overall operation multiple times,
then a trace might contain multiple spans with the same name. However,
each span has a distinct span ID.
Parent span ID : Identifies the operation which invoked this span. The
"root" span has the parent span ID set to null .
Name : The name of the operation that was performed.
Start time : The start time of the operation.
End time : The end time of the operation.
Spans might also contain attributes , which store additional information about
an operation by using key-value pairs. Cloud Trace recommends that you use
OpenTelemetry Semantic Conventions where possible.
Resources
OpenTelemetry resources:
OpenTelemetry
OpenTelemetry Trace overview
OpenTelemetry Traces
OpenTelemetry trace.proto
What's next
Learn about context and context propagation .
Learn about sampling .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
