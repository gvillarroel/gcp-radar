---
title: "Module pagers (2.16.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.business_glossary_service.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dataplex/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.business_glossary_service.pagers
  title: "Module pagers (2.16.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module pagers (2.16.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.16.0 (latest)
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.2
2.9.0
2.8.0
2.7.1
2.6.0
2.5.0
2.4.0
2.3.1
2.2.2
2.1.0
2.0.1
1.13.0
1.12.3
1.11.0
1.10.0
1.9.0
1.8.1
1.7.0
1.6.2
1.5.1
1.4.3
1.3.0
1.2.0
1.1.3
1.0.1
0.2.1
0.1.0
API documentation for dataplex_v1.services.business_glossary_service.pagers module.
Classes
ListGlossariesAsyncPager
ListGlossariesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . dataplex_v1 . types . business_glossary . ListGlossariesResponse
],
],
request : google . cloud . dataplex_v1 . types . business_glossary . ListGlossariesRequest ,
response : google . cloud . dataplex_v1 . types . business_glossary . ListGlossariesResponse ,
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
A pager for iterating through list_glossaries requests.
This class thinly wraps an initial
ListGlossariesResponse object, and
provides an __aiter__ method to iterate through its
glossaries field.
If there are more pages, the __aiter__ method will make additional
ListGlossaries requests and continue to iterate
through the glossaries field on the
corresponding responses.
All the usual ListGlossariesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListGlossariesPager
ListGlossariesPager (
method : typing . Callable [
[ ... ], google . cloud . dataplex_v1 . types . business_glossary . ListGlossariesResponse
],
request : google . cloud . dataplex_v1 . types . business_glossary . ListGlossariesRequest ,
response : google . cloud . dataplex_v1 . types . business_glossary . ListGlossariesResponse ,
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
A pager for iterating through list_glossaries requests.
This class thinly wraps an initial
ListGlossariesResponse object, and
provides an __iter__ method to iterate through its
glossaries field.
If there are more pages, the __iter__ method will make additional
ListGlossaries requests and continue to iterate
through the glossaries field on the
corresponding responses.
All the usual ListGlossariesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListGlossaryCategoriesAsyncPager
ListGlossaryCategoriesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . dataplex_v1 . types . business_glossary . ListGlossaryCategoriesResponse
],
],
request : google . cloud . dataplex_v1 . types . business_glossary . ListGlossaryCategoriesRequest ,
response : google . cloud . dataplex_v1 . types . business_glossary . ListGlossaryCategoriesResponse ,
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
A pager for iterating through list_glossary_categories requests.
This class thinly wraps an initial
ListGlossaryCategoriesResponse object, and
provides an __aiter__ method to iterate through its
categories field.
If there are more pages, the __aiter__ method will make additional
ListGlossaryCategories requests and continue to iterate
through the categories field on the
corresponding responses.
All the usual ListGlossaryCategoriesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListGlossaryCategoriesPager
ListGlossaryCategoriesPager (
method : typing . Callable [
[ ... ],
google . cloud . dataplex_v1 . types . business_glossary . ListGlossaryCategoriesResponse ,
],
request : google . cloud . dataplex_v1 . types . business_glossary . ListGlossaryCategoriesRequest ,
response : google . cloud . dataplex_v1 . types . business_glossary . ListGlossaryCategoriesResponse ,
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
A pager for iterating through list_glossary_categories requests.
This class thinly wraps an initial
ListGlossaryCategoriesResponse object, and
provides an __iter__ method to iterate through its
categories field.
If there are more pages, the __iter__ method will make additional
ListGlossaryCategories requests and continue to iterate
through the categories field on the
corresponding responses.
All the usual ListGlossaryCategoriesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListGlossaryTermsAsyncPager
ListGlossaryTermsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . dataplex_v1 . types . business_glossary . ListGlossaryTermsResponse
],
],
request : google . cloud . dataplex_v1 . types . business_glossary . ListGlossaryTermsRequest ,
response : google . cloud . dataplex_v1 . types . business_glossary . ListGlossaryTermsResponse ,
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
A pager for iterating through list_glossary_terms requests.
This class thinly wraps an initial
ListGlossaryTermsResponse object, and
provides an __aiter__ method to iterate through its
terms field.
If there are more pages, the __aiter__ method will make additional
ListGlossaryTerms requests and continue to iterate
through the terms field on the
corresponding responses.
All the usual ListGlossaryTermsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListGlossaryTermsPager
ListGlossaryTermsPager (
method : typing . Callable [
[ ... ],
google . cloud . dataplex_v1 . types . business_glossary . ListGlossaryTermsResponse ,
],
request : google . cloud . dataplex_v1 . types . business_glossary . ListGlossaryTermsRequest ,
response : google . cloud . dataplex_v1 . types . business_glossary . ListGlossaryTermsResponse ,
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
A pager for iterating through list_glossary_terms requests.
This class thinly wraps an initial
ListGlossaryTermsResponse object, and
provides an __iter__ method to iterate through its
terms field.
If there are more pages, the __iter__ method will make additional
ListGlossaryTerms requests and continue to iterate
through the terms field on the
corresponding responses.
All the usual ListGlossaryTermsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
