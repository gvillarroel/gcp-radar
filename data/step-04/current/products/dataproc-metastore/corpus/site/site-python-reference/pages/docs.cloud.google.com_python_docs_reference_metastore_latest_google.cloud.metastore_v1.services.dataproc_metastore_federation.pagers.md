---
title: "Module pagers (1.22.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/metastore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.pagers
  title: "Module pagers (1.22.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module pagers (1.22.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.22.0 (latest)
1.21.0
1.20.0
1.19.0
1.18.3
1.17.0
1.16.1
1.15.5
1.14.0
1.13.0
1.12.0
1.11.0
1.10.1
1.9.1
1.8.0
1.7.0
1.6.3
1.5.1
1.4.1
1.3.1
1.2.0
1.1.2
1.0.0
0.3.3
0.2.2
0.1.0
API documentation for metastore_v1.services.dataproc_metastore_federation.pagers module.
Classes
ListFederationsAsyncPager
ListFederationsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . metastore_v1 . types . metastore_federation . ListFederationsResponse
],
],
request : google . cloud . metastore_v1 . types . metastore_federation . ListFederationsRequest ,
response : google . cloud . metastore_v1 . types . metastore_federation . ListFederationsResponse ,
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
A pager for iterating through list_federations requests.
This class thinly wraps an initial
ListFederationsResponse object, and
provides an __aiter__ method to iterate through its
federations field.
If there are more pages, the __aiter__ method will make additional
ListFederations requests and continue to iterate
through the federations field on the
corresponding responses.
All the usual ListFederationsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListFederationsPager
ListFederationsPager (
method : typing . Callable [
[ ... ],
google . cloud . metastore_v1 . types . metastore_federation . ListFederationsResponse ,
],
request : google . cloud . metastore_v1 . types . metastore_federation . ListFederationsRequest ,
response : google . cloud . metastore_v1 . types . metastore_federation . ListFederationsResponse ,
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
A pager for iterating through list_federations requests.
This class thinly wraps an initial
ListFederationsResponse object, and
provides an __iter__ method to iterate through its
federations field.
If there are more pages, the __iter__ method will make additional
ListFederations requests and continue to iterate
through the federations field on the
corresponding responses.
All the usual ListFederationsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
