---
title: "Class ListGoogleApiSourcesAsyncPager (1.20.0) \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.pagers.ListGoogleApiSourcesAsyncPager
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/eventarc/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.pagers.ListGoogleApiSourcesAsyncPager
  title: "Class ListGoogleApiSourcesAsyncPager (1.20.0) \_|\_ Python client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Class ListGoogleApiSourcesAsyncPager (1.20.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.20.0 (latest)
1.19.0
1.18.0
1.17.0
1.16.0
1.15.3
1.14.0
1.13.2
1.12.0
1.11.5
1.10.0
1.9.2
1.8.1
1.7.0
1.6.3
1.5.1
1.4.2
1.3.0
1.2.1
1.1.0
1.0.2
0.2.4
0.1.0
ListGoogleApiSourcesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . eventarc_v1 . types . eventarc . ListGoogleApiSourcesResponse
],
],
request : google . cloud . eventarc_v1 . types . eventarc . ListGoogleApiSourcesRequest ,
response : google . cloud . eventarc_v1 . types . eventarc . ListGoogleApiSourcesResponse ,
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
A pager for iterating through list_google_api_sources requests.
This class thinly wraps an initial
ListGoogleApiSourcesResponse object, and
provides an __aiter__ method to iterate through its
google_api_sources field.
If there are more pages, the __aiter__ method will make additional
ListGoogleApiSources requests and continue to iterate
through the google_api_sources field on the
corresponding responses.
All the usual ListGoogleApiSourcesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Methods
ListGoogleApiSourcesAsyncPager
ListGoogleApiSourcesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . eventarc_v1 . types . eventarc . ListGoogleApiSourcesResponse
],
],
request : google . cloud . eventarc_v1 . types . eventarc . ListGoogleApiSourcesRequest ,
response : google . cloud . eventarc_v1 . types . eventarc . ListGoogleApiSourcesResponse ,
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
Instantiates the pager.
Parameters
Name
Description
method
Callable
The method that was originally called, and which instantiated this pager.
request
google.cloud.eventarc_v1.types.ListGoogleApiSourcesRequest
The initial request object.
response
google.cloud.eventarc_v1.types.ListGoogleApiSourcesResponse
The initial response object.
retry
google.api_core.retry.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
