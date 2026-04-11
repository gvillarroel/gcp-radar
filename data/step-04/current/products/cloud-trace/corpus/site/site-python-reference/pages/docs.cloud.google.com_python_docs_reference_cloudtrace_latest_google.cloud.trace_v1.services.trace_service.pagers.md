---
title: "Module pagers (1.19.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.pagers
  title: "Module pagers (1.19.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module pagers (1.19.0)
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
API documentation for trace_v1.services.trace_service.pagers module.
Classes
ListTracesAsyncPager
ListTracesAsyncPager (
method : typing . Callable [
[ ... ], typing . Awaitable [ google . cloud . trace_v1 . types . trace . ListTracesResponse ]
],
request : google . cloud . trace_v1 . types . trace . ListTracesRequest ,
response : google . cloud . trace_v1 . types . trace . ListTracesResponse ,
* ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
)
A pager for iterating through list_traces requests.
This class thinly wraps an initial
ListTracesResponse object, and
provides an __aiter__ method to iterate through its
traces field.
If there are more pages, the __aiter__ method will make additional
ListTraces requests and continue to iterate
through the traces field on the
corresponding responses.
All the usual ListTracesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListTracesPager
ListTracesPager (
method : typing . Callable [
[ ... ], google . cloud . trace_v1 . types . trace . ListTracesResponse
],
request : google . cloud . trace_v1 . types . trace . ListTracesRequest ,
response : google . cloud . trace_v1 . types . trace . ListTracesResponse ,
* ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
)
A pager for iterating through list_traces requests.
This class thinly wraps an initial
ListTracesResponse object, and
provides an __iter__ method to iterate through its
traces field.
If there are more pages, the __iter__ method will make additional
ListTraces requests and continue to iterate
through the traces field on the
corresponding responses.
All the usual ListTracesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
