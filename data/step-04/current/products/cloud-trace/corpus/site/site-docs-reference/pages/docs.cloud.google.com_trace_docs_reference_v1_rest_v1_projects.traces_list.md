---
title: "Method: projects.traces.list \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/reference/v1/rest/v1/projects.traces/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/reference/v1/rest/v1/projects.traces/list
  title: "Method: projects.traces.list \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
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
Method: projects.traces.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
ViewType
Try it!
Returns a list of traces that match the specified filter conditions.
HTTP request
GET https://cloudtrace.googleapis.com/v1/projects/{projectId}/traces
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
projectId
string
Required. ID of the Cloud project where the trace data is stored.
Authorization requires the following IAM permission on the specified resource projectId :
cloudtrace.traces.list
Query parameters
Parameters
view
enum ( ViewType )
Optional. Type of data returned for traces in the list. Default is MINIMAL .
pageSize
integer
Optional. Maximum number of traces to return. If not specified or <= 0, the implementation selects a reasonable value. The implementation may return fewer traces than the requested page size.
pageToken
string
Token identifying the page of results to return. If provided, use the value of the nextPageToken field from a previous request.
startTime
string ( Timestamp format)
Start of the time interval (inclusive) during which the trace data was collected from the application.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
End of the time interval (inclusive) during which the trace data was collected from the application.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
filter
string
Optional. A filter against properties of the trace. See filter syntax documentation for details.
orderBy
string
Optional. Field used to sort the returned traces. Can be one of the following:
traceId
name ( name field of root span in the trace)
duration (difference between endTime and startTime fields of the root span)
start ( startTime field of the root span)
Descending order can be specified by appending desc to the sort field (for example, name desc ).
Only one sort field is permitted.
Request body
The request body must be empty.
Response body
The response message for the traces.list method.
If successful, the response body contains data with the following structure:
JSON representation
{
"traces" : [
{
object ( Trace )
}
] ,
"nextPageToken" : string
}
Fields
traces[]
object ( Trace )
List of trace records as specified by the view parameter.
nextPageToken
string
If defined, indicates that there are more traces that match the request and that this value should be passed to the next request to continue retrieving additional traces.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/trace.readonly
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
ViewType
Type of data returned for traces in the list.
Enums
VIEW_TYPE_UNSPECIFIED
Default is MINIMAL if unspecified.
MINIMAL
Minimal view of the trace record that contains only the project and trace IDs.
ROOTSPAN
Root span view of the trace record that returns the root spans along with the minimal trace data.
COMPLETE
Complete view of the trace record that contains the actual trace data. This is equivalent to calling the REST get or RPC traces.get method using the ID of each listed trace.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-23 UTC."],[],[]]
