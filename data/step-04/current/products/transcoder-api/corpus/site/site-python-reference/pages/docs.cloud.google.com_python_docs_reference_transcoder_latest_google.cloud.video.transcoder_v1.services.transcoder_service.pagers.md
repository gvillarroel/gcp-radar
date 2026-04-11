---
title: "Module pagers (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/transcoder/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.pagers
  title: "Module pagers (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module pagers (1.20.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.20.0 (latest)
1.19.0
1.18.0
1.17.0
1.16.0
1.15.2
1.14.0
1.13.1
1.12.5
1.11.0
1.10.1
1.9.1
1.8.2
1.7.0
1.6.1
1.5.0
1.4.3
1.3.2
1.2.1
1.1.0
1.0.1
0.5.1
0.4.1
0.3.1
0.2.1
0.1.0
API documentation for video.transcoder_v1.services.transcoder_service.pagers module.
Classes
ListJobTemplatesAsyncPager
ListJobTemplatesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . video . transcoder_v1 . types . services . ListJobTemplatesResponse
],
],
request : google . cloud . video . transcoder_v1 . types . services . ListJobTemplatesRequest ,
response : google . cloud . video . transcoder_v1 . types . services . ListJobTemplatesResponse ,
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
A pager for iterating through list_job_templates requests.
This class thinly wraps an initial
ListJobTemplatesResponse object, and
provides an __aiter__ method to iterate through its
job_templates field.
If there are more pages, the __aiter__ method will make additional
ListJobTemplates requests and continue to iterate
through the job_templates field on the
corresponding responses.
All the usual ListJobTemplatesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListJobTemplatesPager
ListJobTemplatesPager (
method : typing . Callable [
[ ... ], google . cloud . video . transcoder_v1 . types . services . ListJobTemplatesResponse
],
request : google . cloud . video . transcoder_v1 . types . services . ListJobTemplatesRequest ,
response : google . cloud . video . transcoder_v1 . types . services . ListJobTemplatesResponse ,
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
A pager for iterating through list_job_templates requests.
This class thinly wraps an initial
ListJobTemplatesResponse object, and
provides an __iter__ method to iterate through its
job_templates field.
If there are more pages, the __iter__ method will make additional
ListJobTemplates requests and continue to iterate
through the job_templates field on the
corresponding responses.
All the usual ListJobTemplatesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListJobsAsyncPager
ListJobsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . video . transcoder_v1 . types . services . ListJobsResponse
],
],
request : google . cloud . video . transcoder_v1 . types . services . ListJobsRequest ,
response : google . cloud . video . transcoder_v1 . types . services . ListJobsResponse ,
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
method : typing . Callable [
[ ... ], google . cloud . video . transcoder_v1 . types . services . ListJobsResponse
],
request : google . cloud . video . transcoder_v1 . types . services . ListJobsRequest ,
response : google . cloud . video . transcoder_v1 . types . services . ListJobsResponse ,
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
