---
title: "Class ListJobsPager (2.19.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.pagers.ListJobsPager
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.pagers.ListJobsPager
  title: "Class ListJobsPager (2.19.0) \_|\_ Python client libraries \_|\_ Google\
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
Class ListJobsPager (2.19.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.19.0 (latest)
2.18.0
2.17.0
2.16.0
2.15.1
2.14.1
2.13.5
2.12.0
2.11.3
2.10.0
2.9.1
2.8.0
2.7.3
2.6.4
2.5.1
2.4.0
2.3.4
2.2.0
2.1.1
2.0.0
1.3.2
1.2.1
ListJobsPager (
method : typing . Callable [
[ ... ], google . cloud . scheduler_v1 . types . cloudscheduler . ListJobsResponse
],
request : google . cloud . scheduler_v1 . types . cloudscheduler . ListJobsRequest ,
response : google . cloud . scheduler_v1 . types . cloudscheduler . ListJobsResponse ,
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
Methods
ListJobsPager
ListJobsPager (
method : typing . Callable [
[ ... ], google . cloud . scheduler_v1 . types . cloudscheduler . ListJobsResponse
],
request : google . cloud . scheduler_v1 . types . cloudscheduler . ListJobsRequest ,
response : google . cloud . scheduler_v1 . types . cloudscheduler . ListJobsResponse ,
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
google.cloud.scheduler_v1.types.ListJobsRequest
The initial request object.
response
google.cloud.scheduler_v1.types.ListJobsResponse
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
