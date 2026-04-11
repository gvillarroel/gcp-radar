---
title: "Class ListPipelinesAsyncPager (1.20.0) \_|\_ Python client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.pagers.ListPipelinesAsyncPager
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/eventarc/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.pagers.ListPipelinesAsyncPager
  title: "Class ListPipelinesAsyncPager (1.20.0) \_|\_ Python client libraries \_\
    |\_ Google Cloud Documentation"
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
Class ListPipelinesAsyncPager (1.20.0)
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
ListPipelinesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [ google . cloud . eventarc_v1 . types . eventarc . ListPipelinesResponse ],
],
request : google . cloud . eventarc_v1 . types . eventarc . ListPipelinesRequest ,
response : google . cloud . eventarc_v1 . types . eventarc . ListPipelinesResponse ,
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
A pager for iterating through list_pipelines requests.
This class thinly wraps an initial
ListPipelinesResponse object, and
provides an __aiter__ method to iterate through its
pipelines field.
If there are more pages, the __aiter__ method will make additional
ListPipelines requests and continue to iterate
through the pipelines field on the
corresponding responses.
All the usual ListPipelinesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Methods
ListPipelinesAsyncPager
ListPipelinesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [ google . cloud . eventarc_v1 . types . eventarc . ListPipelinesResponse ],
],
request : google . cloud . eventarc_v1 . types . eventarc . ListPipelinesRequest ,
response : google . cloud . eventarc_v1 . types . eventarc . ListPipelinesResponse ,
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
google.cloud.eventarc_v1.types.ListPipelinesRequest
The initial request object.
response
google.cloud.eventarc_v1.types.ListPipelinesResponse
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
