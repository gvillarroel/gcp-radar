---
title: "Class ListFirewallPoliciesPager (1.29.0) \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.pagers.ListFirewallPoliciesPager
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.pagers.ListFirewallPoliciesPager
  title: "Class ListFirewallPoliciesPager (1.29.0) \_|\_ Python client libraries \_\
    |\_ Google Cloud Documentation"
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
Class ListFirewallPoliciesPager (1.29.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.29.0 (latest)
1.28.2
1.27.0
1.26.1
1.25.0
1.24.1
1.23.0
1.22.0
1.21.2
1.20.0
1.19.1
1.18.1
1.17.1
1.16.1
1.15.0
1.14.0
1.13.0
1.12.1
1.11.1
1.10.0
1.9.0
1.8.3
1.7.1
1.6.1
1.5.0
1.4.1
1.3.1
1.2.0
1.1.2
1.0.0
0.4.2
0.3.3
0.2.1
0.1.0
ListFirewallPoliciesPager (
method : typing . Callable [
[ ... ],
google . cloud . recaptchaenterprise_v1 . types . recaptchaenterprise . ListFirewallPoliciesResponse ,
],
request : google . cloud . recaptchaenterprise_v1 . types . recaptchaenterprise . ListFirewallPoliciesRequest ,
response : google . cloud . recaptchaenterprise_v1 . types . recaptchaenterprise . ListFirewallPoliciesResponse ,
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
A pager for iterating through list_firewall_policies requests.
This class thinly wraps an initial
ListFirewallPoliciesResponse object, and
provides an __iter__ method to iterate through its
firewall_policies field.
If there are more pages, the __iter__ method will make additional
ListFirewallPolicies requests and continue to iterate
through the firewall_policies field on the
corresponding responses.
All the usual ListFirewallPoliciesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Methods
ListFirewallPoliciesPager
ListFirewallPoliciesPager (
method : typing . Callable [
[ ... ],
google . cloud . recaptchaenterprise_v1 . types . recaptchaenterprise . ListFirewallPoliciesResponse ,
],
request : google . cloud . recaptchaenterprise_v1 . types . recaptchaenterprise . ListFirewallPoliciesRequest ,
response : google . cloud . recaptchaenterprise_v1 . types . recaptchaenterprise . ListFirewallPoliciesResponse ,
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
google.cloud.recaptchaenterprise_v1.types.ListFirewallPoliciesRequest
The initial request object.
response
google.cloud.recaptchaenterprise_v1.types.ListFirewallPoliciesResponse
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
