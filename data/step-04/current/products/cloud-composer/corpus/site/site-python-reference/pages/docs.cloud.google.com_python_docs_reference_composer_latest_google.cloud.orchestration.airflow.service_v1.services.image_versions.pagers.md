---
title: "Module pagers (1.19.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/composer/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.image_versions.pagers
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
Version latest keyboard_arrow_down
1.19.0 (latest)
1.18.0
1.17.5
1.16.1
1.15.1
1.14.0
1.13.1
1.12.2
1.11.1
1.10.0
1.9.1
1.8.0
1.7.1
1.6.1
1.5.0
1.4.4
1.3.2
1.2.1
1.1.0
1.0.0
0.1.3
API documentation for orchestration.airflow.service_v1.services.image_versions.pagers module.
Classes
ListImageVersionsAsyncPager
ListImageVersionsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . orchestration . airflow . service_v1 . types . image_versions . ListImageVersionsResponse
],
],
request : google . cloud . orchestration . airflow . service_v1 . types . image_versions . ListImageVersionsRequest ,
response : google . cloud . orchestration . airflow . service_v1 . types . image_versions . ListImageVersionsResponse ,
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
A pager for iterating through list_image_versions requests.
This class thinly wraps an initial
ListImageVersionsResponse object, and
provides an __aiter__ method to iterate through its
image_versions field.
If there are more pages, the __aiter__ method will make additional
ListImageVersions requests and continue to iterate
through the image_versions field on the
corresponding responses.
All the usual ListImageVersionsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListImageVersionsPager
ListImageVersionsPager (
method : typing . Callable [
[ ... ],
google . cloud . orchestration . airflow . service_v1 . types . image_versions . ListImageVersionsResponse ,
],
request : google . cloud . orchestration . airflow . service_v1 . types . image_versions . ListImageVersionsRequest ,
response : google . cloud . orchestration . airflow . service_v1 . types . image_versions . ListImageVersionsResponse ,
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
A pager for iterating through list_image_versions requests.
This class thinly wraps an initial
ListImageVersionsResponse object, and
provides an __iter__ method to iterate through its
image_versions field.
If there are more pages, the __iter__ method will make additional
ListImageVersions requests and continue to iterate
through the image_versions field on the
corresponding responses.
All the usual ListImageVersionsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]
