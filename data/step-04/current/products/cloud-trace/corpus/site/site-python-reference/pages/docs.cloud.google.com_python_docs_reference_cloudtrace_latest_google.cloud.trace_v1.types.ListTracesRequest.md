---
title: "Class ListTracesRequest (1.19.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.types.ListTracesRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.types.ListTracesRequest
  title: "Class ListTracesRequest (1.19.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class ListTracesRequest (1.19.0)
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
ListTracesRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The request message for the ListTraces method. All fields are
required unless specified.
Attributes
Name
Description
project_id
str
Required. ID of the Cloud project where the
trace data is stored.
view
google.cloud.trace_v1.types.ListTracesRequest.ViewType
Optional. Type of data returned for traces in the list.
Default is MINIMAL .
page_size
int
Optional. Maximum number of traces to return.
If not specified or <= 0,="" the="" implementation="" selects="" a="" reasonable="" value.="" the="" implementation="" may="" return="" fewer="" traces="" than="" the="" requested="" page="" size.="">
page_token
str
Token identifying the page of results to return. If
provided, use the value of the next_page_token field
from a previous request.
start_time
google.protobuf.timestamp_pb2.Timestamp
Start of the time interval (inclusive) during
which the trace data was collected from the
application.
end_time
google.protobuf.timestamp_pb2.Timestamp
End of the time interval (inclusive) during
which the trace data was collected from the
application.
filter
str
Optional. A filter against labels for the request.
By default, searches use prefix matching. To specify exact
match, prepend a plus symbol ( + ) to the search term.
Multiple terms are ANDed. Syntax:
- root:NAME_PREFIX or NAME_PREFIX : Return traces
where any root span starts with NAME_PREFIX .
- +root:NAME or +NAME : Return traces where any root
span's name is exactly NAME .
- span:NAME_PREFIX : Return traces where any span starts
with NAME_PREFIX .
- +span:NAME : Return traces where any span's name is
exactly NAME .
- latency:DURATION : Return traces whose overall latency
is greater or equal to than DURATION . Accepted units
are nanoseconds ( ns ), milliseconds ( ms ), and
seconds ( s ). Default is ms . For example,
latency:24ms returns traces whose overall latency is
greater than or equal to 24 milliseconds.
- label:LABEL_KEY : Return all traces containing the
specified label key (exact match, case-sensitive)
regardless of the key:value pair's value (including empty
values).
- LABEL_KEY:VALUE_PREFIX : Return all traces containing
the specified label key (exact match, case-sensitive)
whose value starts with VALUE_PREFIX . Both a key and a
value must be specified.
- +LABEL_KEY:VALUE : Return all traces containing a
key:value pair exactly matching the specified text. Both a
key and a value must be specified.
- method:VALUE : Equivalent to /http/method:VALUE .
- url:VALUE : Equivalent to /http/url:VALUE .
order_by
str
Optional. Field used to sort the returned traces. Can be one
of the following:
- trace_id
- name ( name field of root span in the trace)
- duration (difference between end_time and
start_time fields of the root span)
- start ( start_time field of the root span)
Descending order can be specified by appending desc to
the sort field (for example, name desc ).
Only one sort field is permitted.
Classes
ViewType
ViewType ( value )
Type of data returned for traces in the list.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
