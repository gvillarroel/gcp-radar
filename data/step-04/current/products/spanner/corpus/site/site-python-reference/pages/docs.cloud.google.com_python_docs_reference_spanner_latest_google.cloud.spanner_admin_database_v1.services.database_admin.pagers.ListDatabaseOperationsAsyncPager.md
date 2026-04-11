---
title: "Class ListDatabaseOperationsAsyncPager (3.63.0) \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabaseOperationsAsyncPager
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/spanner/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.pagers.ListDatabaseOperationsAsyncPager
  title: "Class ListDatabaseOperationsAsyncPager (3.63.0) \_|\_ Python client libraries\
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
Class ListDatabaseOperationsAsyncPager (3.63.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
3.63.0 (latest)
3.62.0
3.61.0
3.60.0
3.59.0
3.58.0
3.57.0
3.56.0
3.55.0
3.54.0
3.53.0
3.52.0
3.51.0
3.50.1
3.46.0
3.45.0
3.44.0
3.43.0
3.42.0
3.41.0
3.40.1
3.39.0
3.38.0
3.37.0
3.36.0
3.35.1
3.34.0
3.33.0
3.32.0
3.31.0
3.30.0
3.29.0
3.28.0
3.27.1
3.26.0
3.25.0
3.24.0
3.23.0
3.22.2
3.21.0
3.20.0
3.19.0
3.18.0
3.17.0
3.16.0
3.15.1
3.14.1
3.13.0
3.12.1
3.11.1
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
3.0.0
2.1.1
2.0.0
1.19.3
1.18.0
1.17.1
1.16.0
1.15.1
1.14.0
1.13.0
1.12.0
1.11.0
1.10.0
ListDatabaseOperationsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . spanner_admin_database_v1 . types . spanner_database_admin . ListDatabaseOperationsResponse
],
],
request : google . cloud . spanner_admin_database_v1 . types . spanner_database_admin . ListDatabaseOperationsRequest ,
response : google . cloud . spanner_admin_database_v1 . types . spanner_database_admin . ListDatabaseOperationsResponse ,
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
A pager for iterating through list_database_operations requests.
This class thinly wraps an initial
ListDatabaseOperationsResponse object, and
provides an __aiter__ method to iterate through its
operations field.
If there are more pages, the __aiter__ method will make additional
ListDatabaseOperations requests and continue to iterate
through the operations field on the
corresponding responses.
All the usual ListDatabaseOperationsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Methods
ListDatabaseOperationsAsyncPager
ListDatabaseOperationsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . spanner_admin_database_v1 . types . spanner_database_admin . ListDatabaseOperationsResponse
],
],
request : google . cloud . spanner_admin_database_v1 . types . spanner_database_admin . ListDatabaseOperationsRequest ,
response : google . cloud . spanner_admin_database_v1 . types . spanner_database_admin . ListDatabaseOperationsResponse ,
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
google.cloud.spanner_admin_database_v1.types.ListDatabaseOperationsRequest
The initial request object.
response
google.cloud.spanner_admin_database_v1.types.ListDatabaseOperationsResponse
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
