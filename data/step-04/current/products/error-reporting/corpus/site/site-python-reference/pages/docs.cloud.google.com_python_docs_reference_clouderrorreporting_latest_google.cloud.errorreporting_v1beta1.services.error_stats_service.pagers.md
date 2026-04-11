---
title: "Module pagers (1.15.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_stats_service.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_stats_service.pagers
  title: "Module pagers (1.15.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module pagers (1.15.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.15.0 (latest)
1.14.0
1.13.0
1.12.0
1.11.1
1.10.0
1.9.2
1.8.2
1.7.0
1.6.3
1.5.3
1.4.1
1.3.0
1.2.3
1.1.2
1.0.0
0.34.0
0.33.0
0.32.1
API documentation for errorreporting_v1beta1.services.error_stats_service.pagers module.
Classes
ListEventsAsyncPager
ListEventsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . errorreporting_v1beta1 . types . error_stats_service . ListEventsResponse
],
],
request : google . cloud . errorreporting_v1beta1 . types . error_stats_service . ListEventsRequest ,
response : google . cloud . errorreporting_v1beta1 . types . error_stats_service . ListEventsResponse ,
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
A pager for iterating through list_events requests.
This class thinly wraps an initial
ListEventsResponse object, and
provides an __aiter__ method to iterate through its
error_events field.
If there are more pages, the __aiter__ method will make additional
ListEvents requests and continue to iterate
through the error_events field on the
corresponding responses.
All the usual ListEventsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListEventsPager
ListEventsPager (
method : typing . Callable [
[ ... ],
google . cloud . errorreporting_v1beta1 . types . error_stats_service . ListEventsResponse ,
],
request : google . cloud . errorreporting_v1beta1 . types . error_stats_service . ListEventsRequest ,
response : google . cloud . errorreporting_v1beta1 . types . error_stats_service . ListEventsResponse ,
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
A pager for iterating through list_events requests.
This class thinly wraps an initial
ListEventsResponse object, and
provides an __iter__ method to iterate through its
error_events field.
If there are more pages, the __iter__ method will make additional
ListEvents requests and continue to iterate
through the error_events field on the
corresponding responses.
All the usual ListEventsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListGroupStatsAsyncPager
ListGroupStatsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . errorreporting_v1beta1 . types . error_stats_service . ListGroupStatsResponse
],
],
request : google . cloud . errorreporting_v1beta1 . types . error_stats_service . ListGroupStatsRequest ,
response : google . cloud . errorreporting_v1beta1 . types . error_stats_service . ListGroupStatsResponse ,
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
A pager for iterating through list_group_stats requests.
This class thinly wraps an initial
ListGroupStatsResponse object, and
provides an __aiter__ method to iterate through its
error_group_stats field.
If there are more pages, the __aiter__ method will make additional
ListGroupStats requests and continue to iterate
through the error_group_stats field on the
corresponding responses.
All the usual ListGroupStatsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListGroupStatsPager
ListGroupStatsPager (
method : typing . Callable [
[ ... ],
google . cloud . errorreporting_v1beta1 . types . error_stats_service . ListGroupStatsResponse ,
],
request : google . cloud . errorreporting_v1beta1 . types . error_stats_service . ListGroupStatsRequest ,
response : google . cloud . errorreporting_v1beta1 . types . error_stats_service . ListGroupStatsResponse ,
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
A pager for iterating through list_group_stats requests.
This class thinly wraps an initial
ListGroupStatsResponse object, and
provides an __iter__ method to iterate through its
error_group_stats field.
If there are more pages, the __iter__ method will make additional
ListGroupStats requests and continue to iterate
through the error_group_stats field on the
corresponding responses.
All the usual ListGroupStatsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
