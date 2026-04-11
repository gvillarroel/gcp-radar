---
title: "Module pagers (1.19.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.pagers
  title: "Module pagers (1.19.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module pagers (1.19.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.19.0 (latest)
1.18.0
1.17.0
1.16.2
1.15.0
1.14.1
1.13.5
1.12.0
1.11.3
1.10.1
1.9.1
1.8.0
1.7.5
1.6.1
1.5.1
1.4.1
1.3.5
1.2.0
1.1.1
1.0.0
0.2.2
0.1.0
API documentation for accessapproval_v1.services.access_approval.pagers module.
Classes
ListApprovalRequestsAsyncPager
ListApprovalRequestsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . accessapproval_v1 . types . accessapproval . ListApprovalRequestsResponse
],
],
request : google . cloud . accessapproval_v1 . types . accessapproval . ListApprovalRequestsMessage ,
response : google . cloud . accessapproval_v1 . types . accessapproval . ListApprovalRequestsResponse ,
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
A pager for iterating through list_approval_requests requests.
This class thinly wraps an initial
ListApprovalRequestsResponse object, and
provides an __aiter__ method to iterate through its
approval_requests field.
If there are more pages, the __aiter__ method will make additional
ListApprovalRequests requests and continue to iterate
through the approval_requests field on the
corresponding responses.
All the usual ListApprovalRequestsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListApprovalRequestsPager
ListApprovalRequestsPager (
method : typing . Callable [
[ ... ],
google . cloud . accessapproval_v1 . types . accessapproval . ListApprovalRequestsResponse ,
],
request : google . cloud . accessapproval_v1 . types . accessapproval . ListApprovalRequestsMessage ,
response : google . cloud . accessapproval_v1 . types . accessapproval . ListApprovalRequestsResponse ,
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
A pager for iterating through list_approval_requests requests.
This class thinly wraps an initial
ListApprovalRequestsResponse object, and
provides an __iter__ method to iterate through its
approval_requests field.
If there are more pages, the __iter__ method will make additional
ListApprovalRequests requests and continue to iterate
through the approval_requests field on the
corresponding responses.
All the usual ListApprovalRequestsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
