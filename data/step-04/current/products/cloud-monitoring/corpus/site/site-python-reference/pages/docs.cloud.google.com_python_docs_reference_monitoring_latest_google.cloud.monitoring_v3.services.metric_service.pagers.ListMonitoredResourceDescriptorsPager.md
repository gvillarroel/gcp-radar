---
title: "Class ListMonitoredResourceDescriptorsPager (2.30.0) \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsPager
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/monitoring/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsPager
  title: "Class ListMonitoredResourceDescriptorsPager (2.30.0) \_|\_ Python client\
    \ libraries \_|\_ Google Cloud Documentation"
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
Class ListMonitoredResourceDescriptorsPager (2.30.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.30.0 (latest)
2.29.1
2.28.0
2.27.2
2.26.0
2.25.0
2.24.0
2.23.1
2.22.2
2.21.0
2.20.0
2.19.4
2.18.0
2.17.0
2.16.0
2.15.1
2.14.2
2.13.0
2.12.0
2.11.3
2.10.1
2.9.2
2.8.0
2.7.0
2.6.0
2.5.2
2.4.2
2.3.0
2.2.1
2.1.0
2.0.1
1.1.2
1.0.0
0.36.2
0.35.0
0.34.0
0.33.0
0.32.0
ListMonitoredResourceDescriptorsPager (
method : typing . Callable [
[ ... ],
google . cloud . monitoring_v3 . types . metric_service . ListMonitoredResourceDescriptorsResponse ,
],
request : google . cloud . monitoring_v3 . types . metric_service . ListMonitoredResourceDescriptorsRequest ,
response : google . cloud . monitoring_v3 . types . metric_service . ListMonitoredResourceDescriptorsResponse ,
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
A pager for iterating through list_monitored_resource_descriptors requests.
This class thinly wraps an initial
ListMonitoredResourceDescriptorsResponse object, and
provides an __iter__ method to iterate through its
resource_descriptors field.
If there are more pages, the __iter__ method will make additional
ListMonitoredResourceDescriptors requests and continue to iterate
through the resource_descriptors field on the
corresponding responses.
All the usual ListMonitoredResourceDescriptorsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Methods
ListMonitoredResourceDescriptorsPager
ListMonitoredResourceDescriptorsPager (
method : typing . Callable [
[ ... ],
google . cloud . monitoring_v3 . types . metric_service . ListMonitoredResourceDescriptorsResponse ,
],
request : google . cloud . monitoring_v3 . types . metric_service . ListMonitoredResourceDescriptorsRequest ,
response : google . cloud . monitoring_v3 . types . metric_service . ListMonitoredResourceDescriptorsResponse ,
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
google.cloud.monitoring_v3.types.ListMonitoredResourceDescriptorsRequest
The initial request object.
response
google.cloud.monitoring_v3.types.ListMonitoredResourceDescriptorsResponse
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
