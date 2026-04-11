---
title: "Module pagers (1.26.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/tpu/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers
  title: "Module pagers (1.26.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module pagers (1.26.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.26.0 (latest)
1.25.0
1.24.0
1.23.2
1.22.0
1.21.0
1.20.0
1.19.1
1.18.5
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.2
1.10.1
1.9.0
1.8.0
1.7.2
1.6.0
1.5.2
1.4.1
1.3.4
1.2.1
1.1.0
1.0.2
0.2.2
0.1.0
API documentation for tpu_v1.services.tpu.pagers module.
Classes
ListAcceleratorTypesAsyncPager
ListAcceleratorTypesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . tpu_v1 . types . cloud_tpu . ListAcceleratorTypesResponse
],
],
request : google . cloud . tpu_v1 . types . cloud_tpu . ListAcceleratorTypesRequest ,
response : google . cloud . tpu_v1 . types . cloud_tpu . ListAcceleratorTypesResponse ,
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
A pager for iterating through list_accelerator_types requests.
This class thinly wraps an initial
ListAcceleratorTypesResponse object, and
provides an __aiter__ method to iterate through its
accelerator_types field.
If there are more pages, the __aiter__ method will make additional
ListAcceleratorTypes requests and continue to iterate
through the accelerator_types field on the
corresponding responses.
All the usual ListAcceleratorTypesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListAcceleratorTypesPager
ListAcceleratorTypesPager (
method : typing . Callable [
[ ... ], google . cloud . tpu_v1 . types . cloud_tpu . ListAcceleratorTypesResponse
],
request : google . cloud . tpu_v1 . types . cloud_tpu . ListAcceleratorTypesRequest ,
response : google . cloud . tpu_v1 . types . cloud_tpu . ListAcceleratorTypesResponse ,
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
A pager for iterating through list_accelerator_types requests.
This class thinly wraps an initial
ListAcceleratorTypesResponse object, and
provides an __iter__ method to iterate through its
accelerator_types field.
If there are more pages, the __iter__ method will make additional
ListAcceleratorTypes requests and continue to iterate
through the accelerator_types field on the
corresponding responses.
All the usual ListAcceleratorTypesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListNodesAsyncPager
ListNodesAsyncPager (
method : typing . Callable [
[ ... ], typing . Awaitable [ google . cloud . tpu_v1 . types . cloud_tpu . ListNodesResponse ]
],
request : google . cloud . tpu_v1 . types . cloud_tpu . ListNodesRequest ,
response : google . cloud . tpu_v1 . types . cloud_tpu . ListNodesResponse ,
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
A pager for iterating through list_nodes requests.
This class thinly wraps an initial
ListNodesResponse object, and
provides an __aiter__ method to iterate through its
nodes field.
If there are more pages, the __aiter__ method will make additional
ListNodes requests and continue to iterate
through the nodes field on the
corresponding responses.
All the usual ListNodesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListNodesPager
ListNodesPager (
method : typing . Callable [
[ ... ], google . cloud . tpu_v1 . types . cloud_tpu . ListNodesResponse
],
request : google . cloud . tpu_v1 . types . cloud_tpu . ListNodesRequest ,
response : google . cloud . tpu_v1 . types . cloud_tpu . ListNodesResponse ,
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
A pager for iterating through list_nodes requests.
This class thinly wraps an initial
ListNodesResponse object, and
provides an __iter__ method to iterate through its
nodes field.
If there are more pages, the __iter__ method will make additional
ListNodes requests and continue to iterate
through the nodes field on the
corresponding responses.
All the usual ListNodesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListTensorFlowVersionsAsyncPager
ListTensorFlowVersionsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . tpu_v1 . types . cloud_tpu . ListTensorFlowVersionsResponse
],
],
request : google . cloud . tpu_v1 . types . cloud_tpu . ListTensorFlowVersionsRequest ,
response : google . cloud . tpu_v1 . types . cloud_tpu . ListTensorFlowVersionsResponse ,
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
A pager for iterating through list_tensor_flow_versions requests.
This class thinly wraps an initial
ListTensorFlowVersionsResponse object, and
provides an __aiter__ method to iterate through its
tensorflow_versions field.
If there are more pages, the __aiter__ method will make additional
ListTensorFlowVersions requests and continue to iterate
through the tensorflow_versions field on the
corresponding responses.
All the usual ListTensorFlowVersionsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListTensorFlowVersionsPager
ListTensorFlowVersionsPager (
method : typing . Callable [
[ ... ], google . cloud . tpu_v1 . types . cloud_tpu . ListTensorFlowVersionsResponse
],
request : google . cloud . tpu_v1 . types . cloud_tpu . ListTensorFlowVersionsRequest ,
response : google . cloud . tpu_v1 . types . cloud_tpu . ListTensorFlowVersionsResponse ,
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
A pager for iterating through list_tensor_flow_versions requests.
This class thinly wraps an initial
ListTensorFlowVersionsResponse object, and
provides an __iter__ method to iterate through its
tensorflow_versions field.
If there are more pages, the __iter__ method will make additional
ListTensorFlowVersions requests and continue to iterate
through the tensorflow_versions field on the
corresponding responses.
All the usual ListTensorFlowVersionsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
