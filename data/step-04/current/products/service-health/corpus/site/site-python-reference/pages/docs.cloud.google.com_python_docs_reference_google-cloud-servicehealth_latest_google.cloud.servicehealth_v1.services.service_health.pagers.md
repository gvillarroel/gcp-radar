---
title: "Module pagers (0.4.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-servicehealth/latest/google.cloud.servicehealth_v1.services.service_health.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-servicehealth/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-servicehealth/latest/google.cloud.servicehealth_v1.services.service_health.pagers
  title: "Module pagers (0.4.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Module pagers (0.4.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.4.0 (latest)
0.3.0
0.2.0
0.1.11
API documentation for servicehealth_v1.services.service_health.pagers module.
Classes
ListEventsAsyncPager
ListEventsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . servicehealth_v1 . types . event_resources . ListEventsResponse
],
],
request : google . cloud . servicehealth_v1 . types . event_resources . ListEventsRequest ,
response : google . cloud . servicehealth_v1 . types . event_resources . ListEventsResponse ,
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
A pager for iterating through list_events requests.
This class thinly wraps an initial
ListEventsResponse object, and
provides an __aiter__ method to iterate through its
events field.
If there are more pages, the __aiter__ method will make additional
ListEvents requests and continue to iterate
through the events field on the
corresponding responses.
All the usual ListEventsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListEventsPager
ListEventsPager (
method : typing . Callable [
[ ... ], google . cloud . servicehealth_v1 . types . event_resources . ListEventsResponse
],
request : google . cloud . servicehealth_v1 . types . event_resources . ListEventsRequest ,
response : google . cloud . servicehealth_v1 . types . event_resources . ListEventsResponse ,
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
A pager for iterating through list_events requests.
This class thinly wraps an initial
ListEventsResponse object, and
provides an __iter__ method to iterate through its
events field.
If there are more pages, the __iter__ method will make additional
ListEvents requests and continue to iterate
through the events field on the
corresponding responses.
All the usual ListEventsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListOrganizationEventsAsyncPager
ListOrganizationEventsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . servicehealth_v1 . types . event_resources . ListOrganizationEventsResponse
],
],
request : google . cloud . servicehealth_v1 . types . event_resources . ListOrganizationEventsRequest ,
response : google . cloud . servicehealth_v1 . types . event_resources . ListOrganizationEventsResponse ,
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
A pager for iterating through list_organization_events requests.
This class thinly wraps an initial
ListOrganizationEventsResponse object, and
provides an __aiter__ method to iterate through its
organization_events field.
If there are more pages, the __aiter__ method will make additional
ListOrganizationEvents requests and continue to iterate
through the organization_events field on the
corresponding responses.
All the usual ListOrganizationEventsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListOrganizationEventsPager
ListOrganizationEventsPager (
method : typing . Callable [
[ ... ],
google . cloud . servicehealth_v1 . types . event_resources . ListOrganizationEventsResponse ,
],
request : google . cloud . servicehealth_v1 . types . event_resources . ListOrganizationEventsRequest ,
response : google . cloud . servicehealth_v1 . types . event_resources . ListOrganizationEventsResponse ,
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
A pager for iterating through list_organization_events requests.
This class thinly wraps an initial
ListOrganizationEventsResponse object, and
provides an __iter__ method to iterate through its
organization_events field.
If there are more pages, the __iter__ method will make additional
ListOrganizationEvents requests and continue to iterate
through the organization_events field on the
corresponding responses.
All the usual ListOrganizationEventsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListOrganizationImpactsAsyncPager
ListOrganizationImpactsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . servicehealth_v1 . types . event_resources . ListOrganizationImpactsResponse
],
],
request : google . cloud . servicehealth_v1 . types . event_resources . ListOrganizationImpactsRequest ,
response : google . cloud . servicehealth_v1 . types . event_resources . ListOrganizationImpactsResponse ,
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
A pager for iterating through list_organization_impacts requests.
This class thinly wraps an initial
ListOrganizationImpactsResponse object, and
provides an __aiter__ method to iterate through its
organization_impacts field.
If there are more pages, the __aiter__ method will make additional
ListOrganizationImpacts requests and continue to iterate
through the organization_impacts field on the
corresponding responses.
All the usual ListOrganizationImpactsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListOrganizationImpactsPager
ListOrganizationImpactsPager (
method : typing . Callable [
[ ... ],
google . cloud . servicehealth_v1 . types . event_resources . ListOrganizationImpactsResponse ,
],
request : google . cloud . servicehealth_v1 . types . event_resources . ListOrganizationImpactsRequest ,
response : google . cloud . servicehealth_v1 . types . event_resources . ListOrganizationImpactsResponse ,
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
A pager for iterating through list_organization_impacts requests.
This class thinly wraps an initial
ListOrganizationImpactsResponse object, and
provides an __iter__ method to iterate through its
organization_impacts field.
If there are more pages, the __iter__ method will make additional
ListOrganizationImpacts requests and continue to iterate
through the organization_impacts field on the
corresponding responses.
All the usual ListOrganizationImpactsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
