---
title: "Class TraceSpan (1.19.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.types.TraceSpan
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.types.TraceSpan
  title: "Class TraceSpan (1.19.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class TraceSpan (1.19.0)
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
TraceSpan ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A span represents a single timed event within a trace. Spans
can be nested and form a trace tree. Often, a trace contains a
root span that describes the end-to-end latency of an operation
and, optionally, one or more subspans for its suboperations.
Spans do not need to be contiguous. There may be gaps between
spans in a trace.
Attributes
Name
Description
span_id
int
Identifier for the span. Must be a 64-bit integer other than
0 and unique within a trace. For example,
2205310701640571284 .
kind
google.cloud.trace_v1.types.TraceSpan.SpanKind
Distinguishes between spans generated in a particular
context. For example, two spans with the same name may be
distinguished using RPC_CLIENT and RPC_SERVER to
identify queueing latency associated with the span.
name
str
Name of the span. Must be less than 128
bytes. The span name is sanitized and displayed
in the Stackdriver Trace tool in the Google
Cloud Platform Console.
The name may be a method name or some other
per-call site name. For the same executable and
the same call point, a best practice is to use a
consistent name, which makes it easier to
correlate cross-trace spans.
start_time
google.protobuf.timestamp_pb2.Timestamp
Start time of the span in nanoseconds from
the UNIX epoch.
end_time
google.protobuf.timestamp_pb2.Timestamp
End time of the span in nanoseconds from the
UNIX epoch.
parent_span_id
int
Optional. ID of the parent span, if any.
labels
MutableMapping[str, str]
Collection of labels associated with the span. Label keys
must be less than 128 bytes. Label values must be less than
16 kilobytes (10MB for /stacktrace values).
Some predefined label keys exist, or you may create your
own. When creating your own, we recommend the following
formats:
- /category/product/key for agents of well-known
products (e.g. /db/mongodb/read_size ).
- short_host/path/key for domain-specific keys (e.g.
foo.com/myproduct/bar )
Predefined labels include:
- /agent
- /component
- /error/message
- /error/name
- /http/client_city
- /http/client_country
- /http/client_protocol
- /http/client_region
- /http/host
- /http/method
- /http/path
- /http/redirected_url
- /http/request/size
- /http/response/size
- /http/route
- /http/status_code
- /http/url
- /http/user_agent
- /pid
- /stacktrace
- /tid
Classes
LabelsEntry
LabelsEntry ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The abstract base class for a message.
Parameters
Name
Description
kwargs
dict
Keys and values corresponding to the fields of the message.
mapping
Union[dict, .Message ]
A dictionary or message to be used to determine the values for this message.
ignore_unknown_fields
Optional(bool)
If True, do not raise errors for unknown fields. Only applied if mapping is a mapping type or there are keyword parameters.
SpanKind
SpanKind ( value )
Type of span. Can be used to specify additional relationships
between spans in addition to a parent/child relationship.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
