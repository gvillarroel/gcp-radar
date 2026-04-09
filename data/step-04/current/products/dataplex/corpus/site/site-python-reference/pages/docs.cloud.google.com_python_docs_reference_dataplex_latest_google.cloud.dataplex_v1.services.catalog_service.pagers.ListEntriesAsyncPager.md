---
title: "Class ListEntriesAsyncPager (2.16.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.catalog_service.pagers.ListEntriesAsyncPager
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dataplex/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.catalog_service.pagers.ListEntriesAsyncPager
  title: "Class ListEntriesAsyncPager (2.16.0) \_|\_ Python client libraries \_|\_\
    \ Google Cloud Documentation"
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
Class ListEntriesAsyncPager (2.16.0)
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
ListEntriesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [ google . cloud . dataplex_v1 . types . catalog . ListEntriesResponse ],
],
request : google . cloud . dataplex_v1 . types . catalog . ListEntriesRequest ,
response : google . cloud . dataplex_v1 . types . catalog . ListEntriesResponse ,
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
A pager for iterating through list_entries requests.
This class thinly wraps an initial
ListEntriesResponse object, and
provides an __aiter__ method to iterate through its
entries field.
If there are more pages, the __aiter__ method will make additional
ListEntries requests and continue to iterate
through the entries field on the
corresponding responses.
All the usual ListEntriesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Methods
ListEntriesAsyncPager
ListEntriesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [ google . cloud . dataplex_v1 . types . catalog . ListEntriesResponse ],
],
request : google . cloud . dataplex_v1 . types . catalog . ListEntriesRequest ,
response : google . cloud . dataplex_v1 . types . catalog . ListEntriesResponse ,
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
google.cloud.dataplex_v1.types.ListEntriesRequest
The initial request object.
response
google.cloud.dataplex_v1.types.ListEntriesResponse
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
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
