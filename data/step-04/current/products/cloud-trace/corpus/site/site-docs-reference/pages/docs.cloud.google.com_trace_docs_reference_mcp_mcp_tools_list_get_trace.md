---
title: "MCP Tools Reference: cloudtrace.googleapis.com \_|\_ Cloud Trace \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/get_trace
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/get_trace
  title: "MCP Tools Reference: cloudtrace.googleapis.com \_|\_ Cloud Trace \_|\_ Google\
    \ Cloud Documentation"
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
MCP Tools Reference: cloudtrace.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
Tool: get_trace
Use this as the primary tool to retrieve a single distributed trace from Google Cloud Trace. Traces provide a detailed view of the path of a request as it travels through your application's services. This is essential for understanding latency issues and debugging complex, multi-service workflows. This is often used as a follow on to list_traces to get full details on a specific trace.
The following sample demonstrate how to use curl to invoke the get_trace MCP tool.
Curl Request
curl --location 'https://cloudtrace.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "get_trace",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
The request message for the GetTrace method.
GetTraceRequest
JSON representation
{
"projectId" : string ,
"traceId" : string
}
Fields
projectId
string
Required. ID of the Cloud project where the trace data is stored.
traceId
string
Required. ID of the trace to return.
Output Schema
A trace describes how long it takes for an application to perform an operation. It consists of a set of spans, each of which represent a single timed event within the operation.
Trace
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
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
End time of the span in seconds and nanoseconds from the UNIX epoch.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
parentSpanId
string ( uint64 format)
Optional. ID of the parent span, if any.
labels
map (key: string, value: string)
Collection of labels associated with the span. Label keys must be less than 128 bytes. Label values must be less than 16 KiB. Some keys might have predefined meaning, and you can also create your own.
For more information, see Cloud Trace labels .
Timestamp
JSON representation
{
"seconds" : string ,
"nanos" : integer
}
Fields
seconds
string ( int64 format)
Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be between -62135596800 and 253402300799 inclusive (which corresponds to 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z).
nanos
integer
Non-negative fractions of a second at nanosecond resolution. This field is the nanosecond portion of the duration, not an alternative to seconds. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be between 0 and 999,999,999 inclusive.
LabelsEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
