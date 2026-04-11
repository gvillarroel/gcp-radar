---
title: "Package types (1.19.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.types
  title: "Package types (1.19.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Package types (1.19.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.19.0 (latest)
1.18.0
1.17.0
1.16.2
1.15.0
1.14.1
1.13.5
1.12.0
1.11.3
1.10.0
1.9.1
1.8.0
1.7.3
1.6.2
1.5.1
1.4.0
1.3.4
1.2.0
1.1.0
1.0.0
0.24.2
0.23.0
0.22.1
API documentation for trace_v1.types package.
Classes
GetTraceRequest
The request message for the GetTrace method.
ListTracesRequest
The request message for the ListTraces method. All fields are
required unless specified.
ListTracesResponse
The response message for the ListTraces method.
PatchTracesRequest
The request message for the PatchTraces method.
Trace
A trace describes how long it takes for an application to
perform an operation. It consists of a set of spans, each of
which represent a single timed event within the operation.
TraceSpan
A span represents a single timed event within a trace. Spans
can be nested and form a trace tree. Often, a trace contains a
root span that describes the end-to-end latency of an operation
and, optionally, one or more subspans for its suboperations.
Spans do not need to be contiguous. There may be gaps between
spans in a trace.
Traces
List of new or updated traces.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
