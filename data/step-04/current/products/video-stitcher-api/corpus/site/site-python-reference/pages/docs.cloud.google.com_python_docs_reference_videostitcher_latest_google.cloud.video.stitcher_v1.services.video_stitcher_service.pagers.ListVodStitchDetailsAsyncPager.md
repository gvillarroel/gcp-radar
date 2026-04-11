---
title: "Class ListVodStitchDetailsAsyncPager (0.11.0) \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/videostitcher/latest/google.cloud.video.stitcher_v1.services.video_stitcher_service.pagers.ListVodStitchDetailsAsyncPager
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/videostitcher/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/videostitcher/latest/google.cloud.video.stitcher_v1.services.video_stitcher_service.pagers.ListVodStitchDetailsAsyncPager
  title: "Class ListVodStitchDetailsAsyncPager (0.11.0) \_|\_ Python client libraries\
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
Class ListVodStitchDetailsAsyncPager (0.11.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.11.0 (latest)
0.10.0
0.9.0
0.8.0
0.7.18
0.6.1
0.5.1
0.4.0
0.3.2
0.2.1
0.1.2
ListVodStitchDetailsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodStitchDetailsResponse
],
],
request : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodStitchDetailsRequest ,
response : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodStitchDetailsResponse ,
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
A pager for iterating through list_vod_stitch_details requests.
This class thinly wraps an initial
ListVodStitchDetailsResponse object, and
provides an __aiter__ method to iterate through its
vod_stitch_details field.
If there are more pages, the __aiter__ method will make additional
ListVodStitchDetails requests and continue to iterate
through the vod_stitch_details field on the
corresponding responses.
All the usual ListVodStitchDetailsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Methods
ListVodStitchDetailsAsyncPager
ListVodStitchDetailsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodStitchDetailsResponse
],
],
request : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodStitchDetailsRequest ,
response : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodStitchDetailsResponse ,
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
google.cloud.video.stitcher_v1.types.ListVodStitchDetailsRequest
The initial request object.
response
google.cloud.video.stitcher_v1.types.ListVodStitchDetailsResponse
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
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
