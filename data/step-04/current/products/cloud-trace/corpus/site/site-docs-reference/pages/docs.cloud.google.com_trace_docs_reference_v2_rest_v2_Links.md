---
title: "Links \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/reference/v2/rest/v2/Links
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/reference/v2/rest/v2/Links
  title: "Links \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
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
Links
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Link
JSON representation
Type
A collection of links, which are references from this span to a span in the same or different trace.
JSON representation
{
"link" : [
{
object ( Link )
}
] ,
"droppedLinksCount" : integer
}
Fields
link[]
object ( Link )
A collection of links.
droppedLinksCount
integer
The number of dropped links after the maximum size was enforced. If this value is 0, then no links were dropped.
Link
A pointer from the current span to another span in the same trace or in a different trace. For example, this can be used in batching operations, where a single batch handler processes multiple requests from different traces or when the handler receives a request from a different project.
JSON representation
{
"traceId" : string ,
"spanId" : string ,
"type" : enum ( Type ) ,
"attributes" : {
object ( Attributes )
}
}
Fields
traceId
string
The [TRACE_ID] for a trace within a project.
spanId
string
The [SPAN_ID] for a span within a trace.
type
enum ( Type )
The relationship of the current span relative to the linked span.
attributes
object ( Attributes )
A set of attributes on the link. Up to 32 attributes can be specified per link.
Type
The relationship of the current span relative to the linked span: child, parent, or unspecified.
Enums
TYPE_UNSPECIFIED
The relationship of the two spans is unknown.
CHILD_LINKED_SPAN
The linked span is a child of the current span.
PARENT_LINKED_SPAN
The linked span is a parent of the current span.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-23 UTC."],[],[]]
