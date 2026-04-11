---
title: "Module pagers (0.11.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/videostitcher/latest/google.cloud.video.stitcher_v1.services.video_stitcher_service.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/videostitcher/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/videostitcher/latest/google.cloud.video.stitcher_v1.services.video_stitcher_service.pagers
  title: "Module pagers (0.11.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module pagers (0.11.0)
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
API documentation for video.stitcher_v1.services.video_stitcher_service.pagers module.
Classes
ListCdnKeysAsyncPager
ListCdnKeysAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListCdnKeysResponse
],
],
request : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListCdnKeysRequest ,
response : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListCdnKeysResponse ,
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
A pager for iterating through list_cdn_keys requests.
This class thinly wraps an initial
ListCdnKeysResponse object, and
provides an __aiter__ method to iterate through its
cdn_keys field.
If there are more pages, the __aiter__ method will make additional
ListCdnKeys requests and continue to iterate
through the cdn_keys field on the
corresponding responses.
All the usual ListCdnKeysResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListCdnKeysPager
ListCdnKeysPager (
method : typing . Callable [
[ ... ],
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListCdnKeysResponse ,
],
request : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListCdnKeysRequest ,
response : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListCdnKeysResponse ,
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
A pager for iterating through list_cdn_keys requests.
This class thinly wraps an initial
ListCdnKeysResponse object, and
provides an __iter__ method to iterate through its
cdn_keys field.
If there are more pages, the __iter__ method will make additional
ListCdnKeys requests and continue to iterate
through the cdn_keys field on the
corresponding responses.
All the usual ListCdnKeysResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListLiveAdTagDetailsAsyncPager
ListLiveAdTagDetailsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListLiveAdTagDetailsResponse
],
],
request : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListLiveAdTagDetailsRequest ,
response : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListLiveAdTagDetailsResponse ,
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
A pager for iterating through list_live_ad_tag_details requests.
This class thinly wraps an initial
ListLiveAdTagDetailsResponse object, and
provides an __aiter__ method to iterate through its
live_ad_tag_details field.
If there are more pages, the __aiter__ method will make additional
ListLiveAdTagDetails requests and continue to iterate
through the live_ad_tag_details field on the
corresponding responses.
All the usual ListLiveAdTagDetailsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListLiveAdTagDetailsPager
ListLiveAdTagDetailsPager (
method : typing . Callable [
[ ... ],
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListLiveAdTagDetailsResponse ,
],
request : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListLiveAdTagDetailsRequest ,
response : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListLiveAdTagDetailsResponse ,
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
A pager for iterating through list_live_ad_tag_details requests.
This class thinly wraps an initial
ListLiveAdTagDetailsResponse object, and
provides an __iter__ method to iterate through its
live_ad_tag_details field.
If there are more pages, the __iter__ method will make additional
ListLiveAdTagDetails requests and continue to iterate
through the live_ad_tag_details field on the
corresponding responses.
All the usual ListLiveAdTagDetailsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListLiveConfigsAsyncPager
ListLiveConfigsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListLiveConfigsResponse
],
],
request : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListLiveConfigsRequest ,
response : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListLiveConfigsResponse ,
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
A pager for iterating through list_live_configs requests.
This class thinly wraps an initial
ListLiveConfigsResponse object, and
provides an __aiter__ method to iterate through its
live_configs field.
If there are more pages, the __aiter__ method will make additional
ListLiveConfigs requests and continue to iterate
through the live_configs field on the
corresponding responses.
All the usual ListLiveConfigsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListLiveConfigsPager
ListLiveConfigsPager (
method : typing . Callable [
[ ... ],
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListLiveConfigsResponse ,
],
request : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListLiveConfigsRequest ,
response : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListLiveConfigsResponse ,
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
A pager for iterating through list_live_configs requests.
This class thinly wraps an initial
ListLiveConfigsResponse object, and
provides an __iter__ method to iterate through its
live_configs field.
If there are more pages, the __iter__ method will make additional
ListLiveConfigs requests and continue to iterate
through the live_configs field on the
corresponding responses.
All the usual ListLiveConfigsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListSlatesAsyncPager
ListSlatesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListSlatesResponse
],
],
request : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListSlatesRequest ,
response : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListSlatesResponse ,
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
A pager for iterating through list_slates requests.
This class thinly wraps an initial
ListSlatesResponse object, and
provides an __aiter__ method to iterate through its
slates field.
If there are more pages, the __aiter__ method will make additional
ListSlates requests and continue to iterate
through the slates field on the
corresponding responses.
All the usual ListSlatesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListSlatesPager
ListSlatesPager (
method : typing . Callable [
[ ... ],
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListSlatesResponse ,
],
request : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListSlatesRequest ,
response : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListSlatesResponse ,
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
A pager for iterating through list_slates requests.
This class thinly wraps an initial
ListSlatesResponse object, and
provides an __iter__ method to iterate through its
slates field.
If there are more pages, the __iter__ method will make additional
ListSlates requests and continue to iterate
through the slates field on the
corresponding responses.
All the usual ListSlatesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListVodAdTagDetailsAsyncPager
ListVodAdTagDetailsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodAdTagDetailsResponse
],
],
request : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodAdTagDetailsRequest ,
response : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodAdTagDetailsResponse ,
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
A pager for iterating through list_vod_ad_tag_details requests.
This class thinly wraps an initial
ListVodAdTagDetailsResponse object, and
provides an __aiter__ method to iterate through its
vod_ad_tag_details field.
If there are more pages, the __aiter__ method will make additional
ListVodAdTagDetails requests and continue to iterate
through the vod_ad_tag_details field on the
corresponding responses.
All the usual ListVodAdTagDetailsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListVodAdTagDetailsPager
ListVodAdTagDetailsPager (
method : typing . Callable [
[ ... ],
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodAdTagDetailsResponse ,
],
request : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodAdTagDetailsRequest ,
response : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodAdTagDetailsResponse ,
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
A pager for iterating through list_vod_ad_tag_details requests.
This class thinly wraps an initial
ListVodAdTagDetailsResponse object, and
provides an __iter__ method to iterate through its
vod_ad_tag_details field.
If there are more pages, the __iter__ method will make additional
ListVodAdTagDetails requests and continue to iterate
through the vod_ad_tag_details field on the
corresponding responses.
All the usual ListVodAdTagDetailsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListVodConfigsAsyncPager
ListVodConfigsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodConfigsResponse
],
],
request : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodConfigsRequest ,
response : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodConfigsResponse ,
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
A pager for iterating through list_vod_configs requests.
This class thinly wraps an initial
ListVodConfigsResponse object, and
provides an __aiter__ method to iterate through its
vod_configs field.
If there are more pages, the __aiter__ method will make additional
ListVodConfigs requests and continue to iterate
through the vod_configs field on the
corresponding responses.
All the usual ListVodConfigsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListVodConfigsPager
ListVodConfigsPager (
method : typing . Callable [
[ ... ],
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodConfigsResponse ,
],
request : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodConfigsRequest ,
response : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodConfigsResponse ,
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
A pager for iterating through list_vod_configs requests.
This class thinly wraps an initial
ListVodConfigsResponse object, and
provides an __iter__ method to iterate through its
vod_configs field.
If there are more pages, the __iter__ method will make additional
ListVodConfigs requests and continue to iterate
through the vod_configs field on the
corresponding responses.
All the usual ListVodConfigsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
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
ListVodStitchDetailsPager
ListVodStitchDetailsPager (
method : typing . Callable [
[ ... ],
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodStitchDetailsResponse ,
],
request : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodStitchDetailsRequest ,
response : google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodStitchDetailsResponse ,
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
A pager for iterating through list_vod_stitch_details requests.
This class thinly wraps an initial
ListVodStitchDetailsResponse object, and
provides an __iter__ method to iterate through its
vod_stitch_details field.
If there are more pages, the __iter__ method will make additional
ListVodStitchDetails requests and continue to iterate
through the vod_stitch_details field on the
corresponding responses.
All the usual ListVodStitchDetailsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
