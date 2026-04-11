---
title: "Module pagers (1.18.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datastream/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.pagers
  title: "Module pagers (1.18.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module pagers (1.18.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.18.0 (latest)
1.17.0
1.16.0
1.15.0
1.14.1
1.13.2
1.12.0
1.11.0
1.10.1
1.9.5
1.8.0
1.7.0
1.6.1
1.5.1
1.4.1
1.3.0
1.2.2
1.1.1
1.0.2
0.4.3
0.3.1
0.2.0
0.1.3
API documentation for datastream_v1.services.datastream.pagers module.
Classes
FetchStaticIpsAsyncPager
FetchStaticIpsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . datastream_v1 . types . datastream . FetchStaticIpsResponse
],
],
request : google . cloud . datastream_v1 . types . datastream . FetchStaticIpsRequest ,
response : google . cloud . datastream_v1 . types . datastream . FetchStaticIpsResponse ,
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
A pager for iterating through fetch_static_ips requests.
This class thinly wraps an initial
FetchStaticIpsResponse object, and
provides an __aiter__ method to iterate through its
static_ips field.
If there are more pages, the __aiter__ method will make additional
FetchStaticIps requests and continue to iterate
through the static_ips field on the
corresponding responses.
All the usual FetchStaticIpsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
FetchStaticIpsPager
FetchStaticIpsPager (
method : typing . Callable [
[ ... ], google . cloud . datastream_v1 . types . datastream . FetchStaticIpsResponse
],
request : google . cloud . datastream_v1 . types . datastream . FetchStaticIpsRequest ,
response : google . cloud . datastream_v1 . types . datastream . FetchStaticIpsResponse ,
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
A pager for iterating through fetch_static_ips requests.
This class thinly wraps an initial
FetchStaticIpsResponse object, and
provides an __iter__ method to iterate through its
static_ips field.
If there are more pages, the __iter__ method will make additional
FetchStaticIps requests and continue to iterate
through the static_ips field on the
corresponding responses.
All the usual FetchStaticIpsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListConnectionProfilesAsyncPager
ListConnectionProfilesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . datastream_v1 . types . datastream . ListConnectionProfilesResponse
],
],
request : google . cloud . datastream_v1 . types . datastream . ListConnectionProfilesRequest ,
response : google . cloud . datastream_v1 . types . datastream . ListConnectionProfilesResponse ,
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
A pager for iterating through list_connection_profiles requests.
This class thinly wraps an initial
ListConnectionProfilesResponse object, and
provides an __aiter__ method to iterate through its
connection_profiles field.
If there are more pages, the __aiter__ method will make additional
ListConnectionProfiles requests and continue to iterate
through the connection_profiles field on the
corresponding responses.
All the usual ListConnectionProfilesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListConnectionProfilesPager
ListConnectionProfilesPager (
method : typing . Callable [
[ ... ],
google . cloud . datastream_v1 . types . datastream . ListConnectionProfilesResponse ,
],
request : google . cloud . datastream_v1 . types . datastream . ListConnectionProfilesRequest ,
response : google . cloud . datastream_v1 . types . datastream . ListConnectionProfilesResponse ,
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
A pager for iterating through list_connection_profiles requests.
This class thinly wraps an initial
ListConnectionProfilesResponse object, and
provides an __iter__ method to iterate through its
connection_profiles field.
If there are more pages, the __iter__ method will make additional
ListConnectionProfiles requests and continue to iterate
through the connection_profiles field on the
corresponding responses.
All the usual ListConnectionProfilesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListPrivateConnectionsAsyncPager
ListPrivateConnectionsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . datastream_v1 . types . datastream . ListPrivateConnectionsResponse
],
],
request : google . cloud . datastream_v1 . types . datastream . ListPrivateConnectionsRequest ,
response : google . cloud . datastream_v1 . types . datastream . ListPrivateConnectionsResponse ,
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
A pager for iterating through list_private_connections requests.
This class thinly wraps an initial
ListPrivateConnectionsResponse object, and
provides an __aiter__ method to iterate through its
private_connections field.
If there are more pages, the __aiter__ method will make additional
ListPrivateConnections requests and continue to iterate
through the private_connections field on the
corresponding responses.
All the usual ListPrivateConnectionsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListPrivateConnectionsPager
ListPrivateConnectionsPager (
method : typing . Callable [
[ ... ],
google . cloud . datastream_v1 . types . datastream . ListPrivateConnectionsResponse ,
],
request : google . cloud . datastream_v1 . types . datastream . ListPrivateConnectionsRequest ,
response : google . cloud . datastream_v1 . types . datastream . ListPrivateConnectionsResponse ,
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
A pager for iterating through list_private_connections requests.
This class thinly wraps an initial
ListPrivateConnectionsResponse object, and
provides an __iter__ method to iterate through its
private_connections field.
If there are more pages, the __iter__ method will make additional
ListPrivateConnections requests and continue to iterate
through the private_connections field on the
corresponding responses.
All the usual ListPrivateConnectionsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListRoutesAsyncPager
ListRoutesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . datastream_v1 . types . datastream . ListRoutesResponse
],
],
request : google . cloud . datastream_v1 . types . datastream . ListRoutesRequest ,
response : google . cloud . datastream_v1 . types . datastream . ListRoutesResponse ,
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
A pager for iterating through list_routes requests.
This class thinly wraps an initial
ListRoutesResponse object, and
provides an __aiter__ method to iterate through its
routes field.
If there are more pages, the __aiter__ method will make additional
ListRoutes requests and continue to iterate
through the routes field on the
corresponding responses.
All the usual ListRoutesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListRoutesPager
ListRoutesPager (
method : typing . Callable [
[ ... ], google . cloud . datastream_v1 . types . datastream . ListRoutesResponse
],
request : google . cloud . datastream_v1 . types . datastream . ListRoutesRequest ,
response : google . cloud . datastream_v1 . types . datastream . ListRoutesResponse ,
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
A pager for iterating through list_routes requests.
This class thinly wraps an initial
ListRoutesResponse object, and
provides an __iter__ method to iterate through its
routes field.
If there are more pages, the __iter__ method will make additional
ListRoutes requests and continue to iterate
through the routes field on the
corresponding responses.
All the usual ListRoutesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListStreamObjectsAsyncPager
ListStreamObjectsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . datastream_v1 . types . datastream . ListStreamObjectsResponse
],
],
request : google . cloud . datastream_v1 . types . datastream . ListStreamObjectsRequest ,
response : google . cloud . datastream_v1 . types . datastream . ListStreamObjectsResponse ,
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
A pager for iterating through list_stream_objects requests.
This class thinly wraps an initial
ListStreamObjectsResponse object, and
provides an __aiter__ method to iterate through its
stream_objects field.
If there are more pages, the __aiter__ method will make additional
ListStreamObjects requests and continue to iterate
through the stream_objects field on the
corresponding responses.
All the usual ListStreamObjectsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListStreamObjectsPager
ListStreamObjectsPager (
method : typing . Callable [
[ ... ], google . cloud . datastream_v1 . types . datastream . ListStreamObjectsResponse
],
request : google . cloud . datastream_v1 . types . datastream . ListStreamObjectsRequest ,
response : google . cloud . datastream_v1 . types . datastream . ListStreamObjectsResponse ,
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
A pager for iterating through list_stream_objects requests.
This class thinly wraps an initial
ListStreamObjectsResponse object, and
provides an __iter__ method to iterate through its
stream_objects field.
If there are more pages, the __iter__ method will make additional
ListStreamObjects requests and continue to iterate
through the stream_objects field on the
corresponding responses.
All the usual ListStreamObjectsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListStreamsAsyncPager
ListStreamsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . datastream_v1 . types . datastream . ListStreamsResponse
],
],
request : google . cloud . datastream_v1 . types . datastream . ListStreamsRequest ,
response : google . cloud . datastream_v1 . types . datastream . ListStreamsResponse ,
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
A pager for iterating through list_streams requests.
This class thinly wraps an initial
ListStreamsResponse object, and
provides an __aiter__ method to iterate through its
streams field.
If there are more pages, the __aiter__ method will make additional
ListStreams requests and continue to iterate
through the streams field on the
corresponding responses.
All the usual ListStreamsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListStreamsPager
ListStreamsPager (
method : typing . Callable [
[ ... ], google . cloud . datastream_v1 . types . datastream . ListStreamsResponse
],
request : google . cloud . datastream_v1 . types . datastream . ListStreamsRequest ,
response : google . cloud . datastream_v1 . types . datastream . ListStreamsResponse ,
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
A pager for iterating through list_streams requests.
This class thinly wraps an initial
ListStreamsResponse object, and
provides an __iter__ method to iterate through its
streams field.
If there are more pages, the __iter__ method will make additional
ListStreams requests and continue to iterate
through the streams field on the
corresponding responses.
All the usual ListStreamsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
