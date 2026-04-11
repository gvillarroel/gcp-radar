---
title: "Class ListExecutionsPager (0.16.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.executions.pagers.ListExecutionsPager
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/run/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.executions.pagers.ListExecutionsPager
  title: "Class ListExecutionsPager (0.16.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class ListExecutionsPager (0.16.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.16.0 (latest)
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.19
0.9.1
0.8.1
0.7.1
0.6.0
0.5.0
0.4.2
0.3.0
0.2.1
0.1.0
ListExecutionsPager (
method : typing . Callable [
[ ... ], google . cloud . run_v2 . types . execution . ListExecutionsResponse
],
request : google . cloud . run_v2 . types . execution . ListExecutionsRequest ,
response : google . cloud . run_v2 . types . execution . ListExecutionsResponse ,
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
A pager for iterating through list_executions requests.
This class thinly wraps an initial
ListExecutionsResponse object, and
provides an __iter__ method to iterate through its
executions field.
If there are more pages, the __iter__ method will make additional
ListExecutions requests and continue to iterate
through the executions field on the
corresponding responses.
All the usual ListExecutionsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Methods
ListExecutionsPager
ListExecutionsPager (
method : typing . Callable [
[ ... ], google . cloud . run_v2 . types . execution . ListExecutionsResponse
],
request : google . cloud . run_v2 . types . execution . ListExecutionsRequest ,
response : google . cloud . run_v2 . types . execution . ListExecutionsResponse ,
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
Instantiate the pager.
Parameters
Name
Description
method
Callable
The method that was originally called, and which instantiated this pager.
request
google.cloud.run_v2.types.ListExecutionsRequest
The initial request object.
response
google.cloud.run_v2.types.ListExecutionsResponse
The initial response object.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
