---
title: "Class ListContextsPager (2.47.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.pagers.ListContextsPager
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dialogflow/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.contexts.pagers.ListContextsPager
  title: "Class ListContextsPager (2.47.0) \_|\_ Python client libraries \_|\_ Google\
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
Class ListContextsPager (2.47.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.47.0 (latest)
2.46.0
2.45.0
2.44.0
2.43.0
2.42.0
2.41.2
2.40.0
2.39.1
2.38.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.30.2
2.29.0
2.28.3
2.27.0
2.26.0
2.25.0
2.24.1
2.23.3
2.22.0
2.21.0
2.20.0
2.19.1
2.18.0
2.17.0
2.16.1
2.15.2
2.14.1
2.13.0
2.12.0
2.11.0
2.10.0
2.9.1
2.8.1
2.7.1
2.6.0
2.5.0
2.4.0
2.3.0
2.2.0
2.1.2
2.0.0
1.1.3
1.0.0
0.8.0
0.7.2
ListContextsPager (
method : typing . Callable [
[ ... ], google . cloud . dialogflow_v2 . types . context . ListContextsResponse
],
request : google . cloud . dialogflow_v2 . types . context . ListContextsRequest ,
response : google . cloud . dialogflow_v2 . types . context . ListContextsResponse ,
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
A pager for iterating through list_contexts requests.
This class thinly wraps an initial
ListContextsResponse object, and
provides an __iter__ method to iterate through its
contexts field.
If there are more pages, the __iter__ method will make additional
ListContexts requests and continue to iterate
through the contexts field on the
corresponding responses.
All the usual ListContextsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Methods
ListContextsPager
ListContextsPager (
method : typing . Callable [
[ ... ], google . cloud . dialogflow_v2 . types . context . ListContextsResponse
],
request : google . cloud . dialogflow_v2 . types . context . ListContextsRequest ,
response : google . cloud . dialogflow_v2 . types . context . ListContextsResponse ,
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
google.cloud.dialogflow_v2.types.ListContextsRequest
The initial request object.
response
google.cloud.dialogflow_v2.types.ListContextsResponse
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
