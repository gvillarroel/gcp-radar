---
title: "REST Resource: projects.traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/reference/v1/rest/v1/projects.traces
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/reference/v1/rest/v1/projects.traces
  title: "REST Resource: projects.traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
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
REST Resource: projects.traces
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Trace
JSON representation
TraceSpan
JSON representation
SpanKind
Methods
Resource: Trace
A trace describes how long it takes for an application to perform an operation. It consists of a set of spans, each of which represent a single timed event within the operation.
JSON representation
{
"projectId" : string ,
"traceId" : string ,
"spans" : [
{
object ( TraceSpan )
}
]
}
Fields
projectId
string
Project ID of the Cloud project where the trace data is stored.
traceId
string
Globally unique identifier for the trace. This identifier is a 128-bit numeric value formatted as a 32-byte hex string. For example, 382d4f4c6b7bb2f4a972559d9085001d . The numeric value should not be zero.
spans[]
object ( TraceSpan )
Collection of spans in the trace.
TraceSpan
A span represents a single timed event within a trace. Spans can be nested and form a trace tree. Often, a trace contains a root span that describes the end-to-end latency of an operation and, optionally, one or more subspans for its suboperations. Spans do not need to be contiguous. There may be gaps between spans in a trace.
JSON representation
{
"spanId" : string ,
"kind" : enum ( SpanKind ) ,
"name" : string ,
"startTime" : string ,
"endTime" : string ,
"parentSpanId" : string ,
"labels" : {
string : string ,
...
}
}
Fields
spanId
string ( uint64 format)
Identifier for the span. Must be a 64-bit integer other than 0 and unique within a trace. For example, 2205310701640571284 .
kind
enum ( SpanKind )
Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using RPC_CLIENT and RPC_SERVER to identify queueing latency associated with the span.
name
string
Name of the span. Must be less than 128 bytes. The span name is sanitized and displayed in the Trace tool in the Google Cloud Platform Console. The name may be a method name or some other per-call site name. For the same executable and the same call point, a best practice is to use a consistent name, which makes it easier to correlate cross-trace spans.
startTime
string ( Timestamp format)
Start time of the span in seconds and nanoseconds from the UNIX epoch.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
End time of the span in seconds and nanoseconds from the UNIX epoch.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
parentSpanId
string ( uint64 format)
Optional. ID of the parent span, if any.
labels
map (key: string, value: string)
Collection of labels associated with the span. Label keys must be less than 128 bytes. Label values must be less than 16 KiB. Some keys might have predefined meaning, and you can also create your own.
For more information, see Cloud Trace labels .
SpanKind
Type of span. Can be used to specify additional relationships between spans in addition to a parent/child relationship.
Enums
SPAN_KIND_UNSPECIFIED
Unspecified.
RPC_SERVER
Indicates that the span covers server-side handling of an RPC or other remote network request.
RPC_CLIENT
Indicates that the span covers the client-side wrapper around an RPC or other remote request.
Methods
get
Gets a single trace by its ID.
list
Returns a list of traces that match the specified filter conditions.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-23 UTC."],[],[]]
