---
title: "Class ListDnsThreatDetectorsAsyncPager (0.13.0) \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/networksecurity/latest/google.cloud.network_security_v1.services.dns_threat_detector_service.pagers.ListDnsThreatDetectorsAsyncPager
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/networksecurity/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/networksecurity/latest/google.cloud.network_security_v1.services.dns_threat_detector_service.pagers.ListDnsThreatDetectorsAsyncPager
  title: "Class ListDnsThreatDetectorsAsyncPager (0.13.0) \_|\_ Python client libraries\
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
Class ListDnsThreatDetectorsAsyncPager (0.13.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.13.0 (latest)
0.12.0
0.11.0
0.10.0
0.9.21
0.8.0
0.7.2
0.6.1
0.5.0
0.4.2
0.3.2
0.2.0
0.1.5
ListDnsThreatDetectorsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . network_security_v1 . types . dns_threat_detector . ListDnsThreatDetectorsResponse
],
],
request : google . cloud . network_security_v1 . types . dns_threat_detector . ListDnsThreatDetectorsRequest ,
response : google . cloud . network_security_v1 . types . dns_threat_detector . ListDnsThreatDetectorsResponse ,
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
A pager for iterating through list_dns_threat_detectors requests.
This class thinly wraps an initial
ListDnsThreatDetectorsResponse object, and
provides an __aiter__ method to iterate through its
dns_threat_detectors field.
If there are more pages, the __aiter__ method will make additional
ListDnsThreatDetectors requests and continue to iterate
through the dns_threat_detectors field on the
corresponding responses.
All the usual ListDnsThreatDetectorsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Methods
ListDnsThreatDetectorsAsyncPager
ListDnsThreatDetectorsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . network_security_v1 . types . dns_threat_detector . ListDnsThreatDetectorsResponse
],
],
request : google . cloud . network_security_v1 . types . dns_threat_detector . ListDnsThreatDetectorsRequest ,
response : google . cloud . network_security_v1 . types . dns_threat_detector . ListDnsThreatDetectorsResponse ,
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
google.cloud.network_security_v1.types.ListDnsThreatDetectorsRequest
The initial request object.
response
google.cloud.network_security_v1.types.ListDnsThreatDetectorsResponse
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
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
