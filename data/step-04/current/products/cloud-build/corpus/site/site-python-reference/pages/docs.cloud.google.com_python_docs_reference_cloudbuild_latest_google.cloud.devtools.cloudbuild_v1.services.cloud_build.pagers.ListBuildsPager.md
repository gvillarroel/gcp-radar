---
title: "Class ListBuildsPager (3.35.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.pagers.ListBuildsPager
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.pagers.ListBuildsPager
  title: "Class ListBuildsPager (3.35.0) \_|\_ Python client libraries \_|\_ Google\
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
Class ListBuildsPager (3.35.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
3.35.0 (latest)
3.34.0
3.33.0
3.32.0
3.31.3
3.30.0
3.29.0
3.28.0
3.27.1
3.26.0
3.25.0
3.24.2
3.23.3
3.22.0
3.21.0
3.20.1
3.19.0
3.18.0
3.17.1
3.16.0
3.15.0
3.14.0
3.13.0
3.12.0
3.11.1
3.10.0
3.9.3
3.8.3
3.7.1
3.6.0
3.5.2
3.4.0
3.3.2
3.2.1
3.1.1
3.0.2
2.0.2
1.1.2
1.0.0
0.1.0
ListBuildsPager (
method : typing . Callable [
[ ... ], google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . ListBuildsResponse
],
request : google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . ListBuildsRequest ,
response : google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . ListBuildsResponse ,
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
A pager for iterating through list_builds requests.
This class thinly wraps an initial
ListBuildsResponse object, and
provides an __iter__ method to iterate through its
builds field.
If there are more pages, the __iter__ method will make additional
ListBuilds requests and continue to iterate
through the builds field on the
corresponding responses.
All the usual ListBuildsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Methods
ListBuildsPager
ListBuildsPager (
method : typing . Callable [
[ ... ], google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . ListBuildsResponse
],
request : google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . ListBuildsRequest ,
response : google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . ListBuildsResponse ,
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
google.cloud.devtools.cloudbuild_v1.types.ListBuildsRequest
The initial request object.
response
google.cloud.devtools.cloudbuild_v1.types.ListBuildsResponse
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
