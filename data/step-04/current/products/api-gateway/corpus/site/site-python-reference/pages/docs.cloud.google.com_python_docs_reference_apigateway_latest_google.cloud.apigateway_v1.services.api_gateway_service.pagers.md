---
title: "Module pagers (1.14.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/apigateway/latest/google.cloud.apigateway_v1.services.api_gateway_service.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/apigateway/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/apigateway/latest/google.cloud.apigateway_v1.services.api_gateway_service.pagers
  title: "Module pagers (1.14.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module pagers (1.14.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.14.0 (latest)
1.13.0
1.12.2
1.11.0
1.10.1
1.9.5
1.8.0
1.7.3
1.6.1
1.5.1
1.4.0
1.3.3
1.2.2
1.1.1
1.0.4
0.2.0
0.1.0
API documentation for apigateway_v1.services.api_gateway_service.pagers module.
Classes
ListApiConfigsAsyncPager
ListApiConfigsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . apigateway_v1 . types . apigateway . ListApiConfigsResponse
],
],
request : google . cloud . apigateway_v1 . types . apigateway . ListApiConfigsRequest ,
response : google . cloud . apigateway_v1 . types . apigateway . ListApiConfigsResponse ,
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
A pager for iterating through list_api_configs requests.
This class thinly wraps an initial
ListApiConfigsResponse object, and
provides an __aiter__ method to iterate through its
api_configs field.
If there are more pages, the __aiter__ method will make additional
ListApiConfigs requests and continue to iterate
through the api_configs field on the
corresponding responses.
All the usual ListApiConfigsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListApiConfigsPager
ListApiConfigsPager (
method : typing . Callable [
[ ... ], google . cloud . apigateway_v1 . types . apigateway . ListApiConfigsResponse
],
request : google . cloud . apigateway_v1 . types . apigateway . ListApiConfigsRequest ,
response : google . cloud . apigateway_v1 . types . apigateway . ListApiConfigsResponse ,
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
A pager for iterating through list_api_configs requests.
This class thinly wraps an initial
ListApiConfigsResponse object, and
provides an __iter__ method to iterate through its
api_configs field.
If there are more pages, the __iter__ method will make additional
ListApiConfigs requests and continue to iterate
through the api_configs field on the
corresponding responses.
All the usual ListApiConfigsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListApisAsyncPager
ListApisAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [ google . cloud . apigateway_v1 . types . apigateway . ListApisResponse ],
],
request : google . cloud . apigateway_v1 . types . apigateway . ListApisRequest ,
response : google . cloud . apigateway_v1 . types . apigateway . ListApisResponse ,
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
A pager for iterating through list_apis requests.
This class thinly wraps an initial
ListApisResponse object, and
provides an __aiter__ method to iterate through its
apis field.
If there are more pages, the __aiter__ method will make additional
ListApis requests and continue to iterate
through the apis field on the
corresponding responses.
All the usual ListApisResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListApisPager
ListApisPager (
method : typing . Callable [
[ ... ], google . cloud . apigateway_v1 . types . apigateway . ListApisResponse
],
request : google . cloud . apigateway_v1 . types . apigateway . ListApisRequest ,
response : google . cloud . apigateway_v1 . types . apigateway . ListApisResponse ,
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
A pager for iterating through list_apis requests.
This class thinly wraps an initial
ListApisResponse object, and
provides an __iter__ method to iterate through its
apis field.
If there are more pages, the __iter__ method will make additional
ListApis requests and continue to iterate
through the apis field on the
corresponding responses.
All the usual ListApisResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListGatewaysAsyncPager
ListGatewaysAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . apigateway_v1 . types . apigateway . ListGatewaysResponse
],
],
request : google . cloud . apigateway_v1 . types . apigateway . ListGatewaysRequest ,
response : google . cloud . apigateway_v1 . types . apigateway . ListGatewaysResponse ,
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
A pager for iterating through list_gateways requests.
This class thinly wraps an initial
ListGatewaysResponse object, and
provides an __aiter__ method to iterate through its
gateways field.
If there are more pages, the __aiter__ method will make additional
ListGateways requests and continue to iterate
through the gateways field on the
corresponding responses.
All the usual ListGatewaysResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListGatewaysPager
ListGatewaysPager (
method : typing . Callable [
[ ... ], google . cloud . apigateway_v1 . types . apigateway . ListGatewaysResponse
],
request : google . cloud . apigateway_v1 . types . apigateway . ListGatewaysRequest ,
response : google . cloud . apigateway_v1 . types . apigateway . ListGatewaysResponse ,
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
A pager for iterating through list_gateways requests.
This class thinly wraps an initial
ListGatewaysResponse object, and
provides an __iter__ method to iterate through its
gateways field.
If there are more pages, the __iter__ method will make additional
ListGateways requests and continue to iterate
through the gateways field on the
corresponding responses.
All the usual ListGatewaysResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
