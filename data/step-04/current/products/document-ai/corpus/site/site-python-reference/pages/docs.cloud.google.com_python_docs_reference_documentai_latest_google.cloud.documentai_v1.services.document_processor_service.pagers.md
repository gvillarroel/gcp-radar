---
title: "Module pagers (3.14.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/documentai/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.pagers
  title: "Module pagers (3.14.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module pagers (3.14.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.14.0 (latest)
3.13.0
3.12.0
3.10.0
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.0
3.2.0
3.1.0
3.0.1
2.35.0
2.34.0
2.33.0
2.32.0
2.30.0
2.29.3
2.28.0
2.27.1
2.26.0
2.25.0
2.24.2
2.23.0
2.22.0
2.21.1
2.20.2
2.19.0
2.18.0
2.17.0
2.16.1
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.1
2.8.0
2.7.0
2.6.0
2.5.0
2.4.1
2.3.0
2.2.0
2.1.0
2.0.3
1.5.1
1.4.2
1.3.0
1.2.1
1.1.0
1.0.0
0.5.2
0.4.0
0.3.0
0.2.0
0.1.0
API documentation for documentai_v1.services.document_processor_service.pagers module.
Classes
ListEvaluationsAsyncPager
ListEvaluationsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . documentai_v1 . types . document_processor_service . ListEvaluationsResponse
],
],
request : google . cloud . documentai_v1 . types . document_processor_service . ListEvaluationsRequest ,
response : google . cloud . documentai_v1 . types . document_processor_service . ListEvaluationsResponse ,
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
A pager for iterating through list_evaluations requests.
This class thinly wraps an initial
ListEvaluationsResponse object, and
provides an __aiter__ method to iterate through its
evaluations field.
If there are more pages, the __aiter__ method will make additional
ListEvaluations requests and continue to iterate
through the evaluations field on the
corresponding responses.
All the usual ListEvaluationsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListEvaluationsPager
ListEvaluationsPager (
method : typing . Callable [
[ ... ],
google . cloud . documentai_v1 . types . document_processor_service . ListEvaluationsResponse ,
],
request : google . cloud . documentai_v1 . types . document_processor_service . ListEvaluationsRequest ,
response : google . cloud . documentai_v1 . types . document_processor_service . ListEvaluationsResponse ,
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
A pager for iterating through list_evaluations requests.
This class thinly wraps an initial
ListEvaluationsResponse object, and
provides an __iter__ method to iterate through its
evaluations field.
If there are more pages, the __iter__ method will make additional
ListEvaluations requests and continue to iterate
through the evaluations field on the
corresponding responses.
All the usual ListEvaluationsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListProcessorTypesAsyncPager
ListProcessorTypesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . documentai_v1 . types . document_processor_service . ListProcessorTypesResponse
],
],
request : google . cloud . documentai_v1 . types . document_processor_service . ListProcessorTypesRequest ,
response : google . cloud . documentai_v1 . types . document_processor_service . ListProcessorTypesResponse ,
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
A pager for iterating through list_processor_types requests.
This class thinly wraps an initial
ListProcessorTypesResponse object, and
provides an __aiter__ method to iterate through its
processor_types field.
If there are more pages, the __aiter__ method will make additional
ListProcessorTypes requests and continue to iterate
through the processor_types field on the
corresponding responses.
All the usual ListProcessorTypesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListProcessorTypesPager
ListProcessorTypesPager (
method : typing . Callable [
[ ... ],
google . cloud . documentai_v1 . types . document_processor_service . ListProcessorTypesResponse ,
],
request : google . cloud . documentai_v1 . types . document_processor_service . ListProcessorTypesRequest ,
response : google . cloud . documentai_v1 . types . document_processor_service . ListProcessorTypesResponse ,
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
A pager for iterating through list_processor_types requests.
This class thinly wraps an initial
ListProcessorTypesResponse object, and
provides an __iter__ method to iterate through its
processor_types field.
If there are more pages, the __iter__ method will make additional
ListProcessorTypes requests and continue to iterate
through the processor_types field on the
corresponding responses.
All the usual ListProcessorTypesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListProcessorVersionsAsyncPager
ListProcessorVersionsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . documentai_v1 . types . document_processor_service . ListProcessorVersionsResponse
],
],
request : google . cloud . documentai_v1 . types . document_processor_service . ListProcessorVersionsRequest ,
response : google . cloud . documentai_v1 . types . document_processor_service . ListProcessorVersionsResponse ,
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
A pager for iterating through list_processor_versions requests.
This class thinly wraps an initial
ListProcessorVersionsResponse object, and
provides an __aiter__ method to iterate through its
processor_versions field.
If there are more pages, the __aiter__ method will make additional
ListProcessorVersions requests and continue to iterate
through the processor_versions field on the
corresponding responses.
All the usual ListProcessorVersionsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListProcessorVersionsPager
ListProcessorVersionsPager (
method : typing . Callable [
[ ... ],
google . cloud . documentai_v1 . types . document_processor_service . ListProcessorVersionsResponse ,
],
request : google . cloud . documentai_v1 . types . document_processor_service . ListProcessorVersionsRequest ,
response : google . cloud . documentai_v1 . types . document_processor_service . ListProcessorVersionsResponse ,
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
A pager for iterating through list_processor_versions requests.
This class thinly wraps an initial
ListProcessorVersionsResponse object, and
provides an __iter__ method to iterate through its
processor_versions field.
If there are more pages, the __iter__ method will make additional
ListProcessorVersions requests and continue to iterate
through the processor_versions field on the
corresponding responses.
All the usual ListProcessorVersionsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListProcessorsAsyncPager
ListProcessorsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . documentai_v1 . types . document_processor_service . ListProcessorsResponse
],
],
request : google . cloud . documentai_v1 . types . document_processor_service . ListProcessorsRequest ,
response : google . cloud . documentai_v1 . types . document_processor_service . ListProcessorsResponse ,
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
A pager for iterating through list_processors requests.
This class thinly wraps an initial
ListProcessorsResponse object, and
provides an __aiter__ method to iterate through its
processors field.
If there are more pages, the __aiter__ method will make additional
ListProcessors requests and continue to iterate
through the processors field on the
corresponding responses.
All the usual ListProcessorsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListProcessorsPager
ListProcessorsPager (
method : typing . Callable [
[ ... ],
google . cloud . documentai_v1 . types . document_processor_service . ListProcessorsResponse ,
],
request : google . cloud . documentai_v1 . types . document_processor_service . ListProcessorsRequest ,
response : google . cloud . documentai_v1 . types . document_processor_service . ListProcessorsResponse ,
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
A pager for iterating through list_processors requests.
This class thinly wraps an initial
ListProcessorsResponse object, and
provides an __iter__ method to iterate through its
processors field.
If there are more pages, the __iter__ method will make additional
ListProcessors requests and continue to iterate
through the processors field on the
corresponding responses.
All the usual ListProcessorsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
