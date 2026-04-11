---
title: "Module pagers (3.13.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/vision/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/vision/latest/google.cloud.vision_v1.services.product_search.pagers
  title: "Module pagers (3.13.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module pagers (3.13.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.13.0 (latest)
3.12.1
3.11.0
3.10.2
3.9.0
3.8.1
3.7.4
3.6.0
3.5.0
3.4.5
3.3.1
3.2.0
3.1.4
3.0.0
2.8.0
2.7.3
2.6.3
2.5.0
2.4.4
2.3.2
2.2.0
2.1.0
2.0.0
1.0.2
0.42.0
0.41.0
0.40.0
0.39.0
0.38.1
API documentation for vision_v1.services.product_search.pagers module.
Classes
ListProductSetsAsyncPager
ListProductSetsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vision_v1 . types . product_search_service . ListProductSetsResponse
],
],
request : google . cloud . vision_v1 . types . product_search_service . ListProductSetsRequest ,
response : google . cloud . vision_v1 . types . product_search_service . ListProductSetsResponse ,
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
A pager for iterating through list_product_sets requests.
This class thinly wraps an initial
ListProductSetsResponse object, and
provides an __aiter__ method to iterate through its
product_sets field.
If there are more pages, the __aiter__ method will make additional
ListProductSets requests and continue to iterate
through the product_sets field on the
corresponding responses.
All the usual ListProductSetsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListProductSetsPager
ListProductSetsPager (
method : typing . Callable [
[ ... ],
google . cloud . vision_v1 . types . product_search_service . ListProductSetsResponse ,
],
request : google . cloud . vision_v1 . types . product_search_service . ListProductSetsRequest ,
response : google . cloud . vision_v1 . types . product_search_service . ListProductSetsResponse ,
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
A pager for iterating through list_product_sets requests.
This class thinly wraps an initial
ListProductSetsResponse object, and
provides an __iter__ method to iterate through its
product_sets field.
If there are more pages, the __iter__ method will make additional
ListProductSets requests and continue to iterate
through the product_sets field on the
corresponding responses.
All the usual ListProductSetsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListProductsAsyncPager
ListProductsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vision_v1 . types . product_search_service . ListProductsResponse
],
],
request : google . cloud . vision_v1 . types . product_search_service . ListProductsRequest ,
response : google . cloud . vision_v1 . types . product_search_service . ListProductsResponse ,
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
A pager for iterating through list_products requests.
This class thinly wraps an initial
ListProductsResponse object, and
provides an __aiter__ method to iterate through its
products field.
If there are more pages, the __aiter__ method will make additional
ListProducts requests and continue to iterate
through the products field on the
corresponding responses.
All the usual ListProductsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListProductsInProductSetAsyncPager
ListProductsInProductSetAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vision_v1 . types . product_search_service . ListProductsInProductSetResponse
],
],
request : google . cloud . vision_v1 . types . product_search_service . ListProductsInProductSetRequest ,
response : google . cloud . vision_v1 . types . product_search_service . ListProductsInProductSetResponse ,
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
A pager for iterating through list_products_in_product_set requests.
This class thinly wraps an initial
ListProductsInProductSetResponse object, and
provides an __aiter__ method to iterate through its
products field.
If there are more pages, the __aiter__ method will make additional
ListProductsInProductSet requests and continue to iterate
through the products field on the
corresponding responses.
All the usual ListProductsInProductSetResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListProductsInProductSetPager
ListProductsInProductSetPager (
method : typing . Callable [
[ ... ],
google . cloud . vision_v1 . types . product_search_service . ListProductsInProductSetResponse ,
],
request : google . cloud . vision_v1 . types . product_search_service . ListProductsInProductSetRequest ,
response : google . cloud . vision_v1 . types . product_search_service . ListProductsInProductSetResponse ,
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
A pager for iterating through list_products_in_product_set requests.
This class thinly wraps an initial
ListProductsInProductSetResponse object, and
provides an __iter__ method to iterate through its
products field.
If there are more pages, the __iter__ method will make additional
ListProductsInProductSet requests and continue to iterate
through the products field on the
corresponding responses.
All the usual ListProductsInProductSetResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListProductsPager
ListProductsPager (
method : typing . Callable [
[ ... ], google . cloud . vision_v1 . types . product_search_service . ListProductsResponse
],
request : google . cloud . vision_v1 . types . product_search_service . ListProductsRequest ,
response : google . cloud . vision_v1 . types . product_search_service . ListProductsResponse ,
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
A pager for iterating through list_products requests.
This class thinly wraps an initial
ListProductsResponse object, and
provides an __iter__ method to iterate through its
products field.
If there are more pages, the __iter__ method will make additional
ListProducts requests and continue to iterate
through the products field on the
corresponding responses.
All the usual ListProductsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListReferenceImagesAsyncPager
ListReferenceImagesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vision_v1 . types . product_search_service . ListReferenceImagesResponse
],
],
request : google . cloud . vision_v1 . types . product_search_service . ListReferenceImagesRequest ,
response : google . cloud . vision_v1 . types . product_search_service . ListReferenceImagesResponse ,
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
A pager for iterating through list_reference_images requests.
This class thinly wraps an initial
ListReferenceImagesResponse object, and
provides an __aiter__ method to iterate through its
reference_images field.
If there are more pages, the __aiter__ method will make additional
ListReferenceImages requests and continue to iterate
through the reference_images field on the
corresponding responses.
All the usual ListReferenceImagesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListReferenceImagesPager
ListReferenceImagesPager (
method : typing . Callable [
[ ... ],
google . cloud . vision_v1 . types . product_search_service . ListReferenceImagesResponse ,
],
request : google . cloud . vision_v1 . types . product_search_service . ListReferenceImagesRequest ,
response : google . cloud . vision_v1 . types . product_search_service . ListReferenceImagesResponse ,
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
A pager for iterating through list_reference_images requests.
This class thinly wraps an initial
ListReferenceImagesResponse object, and
provides an __iter__ method to iterate through its
reference_images field.
If there are more pages, the __iter__ method will make additional
ListReferenceImages requests and continue to iterate
through the reference_images field on the
corresponding responses.
All the usual ListReferenceImagesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
