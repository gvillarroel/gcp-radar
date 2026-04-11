---
title: "Module pagers (0.20.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/batch/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.pagers
  title: "Module pagers (0.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module pagers (0.20.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
0.20.0 (latest)
0.19.0
0.18.0
0.17.37
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.1
0.7.0
0.6.0
0.5.0
0.4.1
0.3.2
0.2.0
0.1.2
API documentation for batch_v1.services.batch_service.pagers module.
Classes
ListJobsAsyncPager
ListJobsAsyncPager (
method : typing . Callable [
[ ... ], typing . Awaitable [ google . cloud . batch_v1 . types . batch . ListJobsResponse ]
],
request : google . cloud . batch_v1 . types . batch . ListJobsRequest ,
response : google . cloud . batch_v1 . types . batch . ListJobsResponse ,
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
A pager for iterating through list_jobs requests.
This class thinly wraps an initial
ListJobsResponse object, and
provides an __aiter__ method to iterate through its
jobs field.
If there are more pages, the __aiter__ method will make additional
ListJobs requests and continue to iterate
through the jobs field on the
corresponding responses.
All the usual ListJobsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListJobsPager
ListJobsPager (
method : typing . Callable [[ ... ], google . cloud . batch_v1 . types . batch . ListJobsResponse ],
request : google . cloud . batch_v1 . types . batch . ListJobsRequest ,
response : google . cloud . batch_v1 . types . batch . ListJobsResponse ,
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
A pager for iterating through list_jobs requests.
This class thinly wraps an initial
ListJobsResponse object, and
provides an __iter__ method to iterate through its
jobs field.
If there are more pages, the __iter__ method will make additional
ListJobs requests and continue to iterate
through the jobs field on the
corresponding responses.
All the usual ListJobsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListTasksAsyncPager
ListTasksAsyncPager (
method : typing . Callable [
[ ... ], typing . Awaitable [ google . cloud . batch_v1 . types . batch . ListTasksResponse ]
],
request : google . cloud . batch_v1 . types . batch . ListTasksRequest ,
response : google . cloud . batch_v1 . types . batch . ListTasksResponse ,
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
A pager for iterating through list_tasks requests.
This class thinly wraps an initial
ListTasksResponse object, and
provides an __aiter__ method to iterate through its
tasks field.
If there are more pages, the __aiter__ method will make additional
ListTasks requests and continue to iterate
through the tasks field on the
corresponding responses.
All the usual ListTasksResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListTasksPager
ListTasksPager (
method : typing . Callable [[ ... ], google . cloud . batch_v1 . types . batch . ListTasksResponse ],
request : google . cloud . batch_v1 . types . batch . ListTasksRequest ,
response : google . cloud . batch_v1 . types . batch . ListTasksResponse ,
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
A pager for iterating through list_tasks requests.
This class thinly wraps an initial
ListTasksResponse object, and
provides an __iter__ method to iterate through its
tasks field.
If there are more pages, the __iter__ method will make additional
ListTasks requests and continue to iterate
through the tasks field on the
corresponding responses.
All the usual ListTasksResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
