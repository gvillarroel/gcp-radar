---
title: "Class ListConnectionProfilesPager (1.18.0) \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.pagers.ListConnectionProfilesPager
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datastream/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.pagers.ListConnectionProfilesPager
  title: "Class ListConnectionProfilesPager (1.18.0) \_|\_ Python client libraries\
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
Class ListConnectionProfilesPager (1.18.0)
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
Methods
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
Instantiate the pager.
Parameters
Name
Description
method
Callable
The method that was originally called, and which instantiated this pager.
request
google.cloud.datastream_v1.types.ListConnectionProfilesRequest
The initial request object.
response
google.cloud.datastream_v1.types.ListConnectionProfilesResponse
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
