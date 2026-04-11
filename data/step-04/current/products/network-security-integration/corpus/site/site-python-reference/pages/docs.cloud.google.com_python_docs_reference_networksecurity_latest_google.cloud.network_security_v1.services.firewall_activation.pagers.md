---
title: "Module pagers (0.13.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/networksecurity/latest/google.cloud.network_security_v1.services.firewall_activation.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/networksecurity/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/networksecurity/latest/google.cloud.network_security_v1.services.firewall_activation.pagers
  title: "Module pagers (0.13.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module pagers (0.13.0)
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
API documentation for network_security_v1.services.firewall_activation.pagers module.
Classes
ListFirewallEndpointAssociationsAsyncPager
ListFirewallEndpointAssociationsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . network_security_v1 . types . firewall_activation . ListFirewallEndpointAssociationsResponse
],
],
request : google . cloud . network_security_v1 . types . firewall_activation . ListFirewallEndpointAssociationsRequest ,
response : google . cloud . network_security_v1 . types . firewall_activation . ListFirewallEndpointAssociationsResponse ,
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
A pager for iterating through list_firewall_endpoint_associations requests.
This class thinly wraps an initial
ListFirewallEndpointAssociationsResponse object, and
provides an __aiter__ method to iterate through its
firewall_endpoint_associations field.
If there are more pages, the __aiter__ method will make additional
ListFirewallEndpointAssociations requests and continue to iterate
through the firewall_endpoint_associations field on the
corresponding responses.
All the usual ListFirewallEndpointAssociationsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListFirewallEndpointAssociationsPager
ListFirewallEndpointAssociationsPager (
method : typing . Callable [
[ ... ],
google . cloud . network_security_v1 . types . firewall_activation . ListFirewallEndpointAssociationsResponse ,
],
request : google . cloud . network_security_v1 . types . firewall_activation . ListFirewallEndpointAssociationsRequest ,
response : google . cloud . network_security_v1 . types . firewall_activation . ListFirewallEndpointAssociationsResponse ,
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
A pager for iterating through list_firewall_endpoint_associations requests.
This class thinly wraps an initial
ListFirewallEndpointAssociationsResponse object, and
provides an __iter__ method to iterate through its
firewall_endpoint_associations field.
If there are more pages, the __iter__ method will make additional
ListFirewallEndpointAssociations requests and continue to iterate
through the firewall_endpoint_associations field on the
corresponding responses.
All the usual ListFirewallEndpointAssociationsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListFirewallEndpointsAsyncPager
ListFirewallEndpointsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . network_security_v1 . types . firewall_activation . ListFirewallEndpointsResponse
],
],
request : google . cloud . network_security_v1 . types . firewall_activation . ListFirewallEndpointsRequest ,
response : google . cloud . network_security_v1 . types . firewall_activation . ListFirewallEndpointsResponse ,
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
A pager for iterating through list_firewall_endpoints requests.
This class thinly wraps an initial
ListFirewallEndpointsResponse object, and
provides an __aiter__ method to iterate through its
firewall_endpoints field.
If there are more pages, the __aiter__ method will make additional
ListFirewallEndpoints requests and continue to iterate
through the firewall_endpoints field on the
corresponding responses.
All the usual ListFirewallEndpointsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListFirewallEndpointsPager
ListFirewallEndpointsPager (
method : typing . Callable [
[ ... ],
google . cloud . network_security_v1 . types . firewall_activation . ListFirewallEndpointsResponse ,
],
request : google . cloud . network_security_v1 . types . firewall_activation . ListFirewallEndpointsRequest ,
response : google . cloud . network_security_v1 . types . firewall_activation . ListFirewallEndpointsResponse ,
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
A pager for iterating through list_firewall_endpoints requests.
This class thinly wraps an initial
ListFirewallEndpointsResponse object, and
provides an __iter__ method to iterate through its
firewall_endpoints field.
If there are more pages, the __iter__ method will make additional
ListFirewallEndpoints requests and continue to iterate
through the firewall_endpoints field on the
corresponding responses.
All the usual ListFirewallEndpointsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
