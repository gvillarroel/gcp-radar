---
title: "Class AggregatedListPager (1.41.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.pagers.AggregatedListPager
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/compute/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.pagers.AggregatedListPager
  title: "Class AggregatedListPager (1.41.0) \_|\_ Python client libraries \_|\_ Google\
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
Class AggregatedListPager (1.41.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.41.0 (latest)
1.40.0
1.39.0
1.38.0
1.37.0
1.36.0
1.35.0
1.34.0
1.33.0
1.32.0
1.31.0
1.30.0
1.29.0
1.28.0
1.27.0
1.26.0
1.25.0
1.24.0
1.23.0
1.22.0
1.21.0
1.20.1
1.19.2
1.18.0
1.17.0
1.16.1
1.15.0
1.14.1
1.13.0
1.12.1
1.11.0
1.10.1
1.9.0
1.8.0
1.7.0
1.6.1
1.5.2
1.4.0
1.3.2
1.2.0
1.1.0
1.0.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.2
0.3.0
0.2.1
0.1.0
AggregatedListPager (
method : typing . Callable [
[ ... ], google . cloud . compute_v1 . types . compute . DiskAggregatedList
],
request : google . cloud . compute_v1 . types . compute . AggregatedListDisksRequest ,
response : google . cloud . compute_v1 . types . compute . DiskAggregatedList ,
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
A pager for iterating through aggregated_list requests.
This class thinly wraps an initial
DiskAggregatedList object, and
provides an __iter__ method to iterate through its
items field.
If there are more pages, the __iter__ method will make additional
AggregatedList requests and continue to iterate
through the items field on the
corresponding responses.
All the usual DiskAggregatedList
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Methods
AggregatedListPager
AggregatedListPager (
method : typing . Callable [
[ ... ], google . cloud . compute_v1 . types . compute . DiskAggregatedList
],
request : google . cloud . compute_v1 . types . compute . AggregatedListDisksRequest ,
response : google . cloud . compute_v1 . types . compute . DiskAggregatedList ,
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
google.cloud.compute_v1.types.AggregatedListDisksRequest
The initial request object.
response
google.cloud.compute_v1.types.DiskAggregatedList
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
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
