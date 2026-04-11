---
title: "Class ListAuditReportsPager (0.1.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.pagers.ListAuditReportsPager
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.pagers.ListAuditReportsPager
  title: "Class ListAuditReportsPager (0.1.0) \_|\_ Python client libraries \_|\_\
    \ Google Cloud Documentation"
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
Class ListAuditReportsPager (0.1.0)
Stay organized with collections
Save and categorize content based on your preferences.
ListAuditReportsPager (
method : typing . Callable [
[ ... ], google . cloud . auditmanager_v1 . types . auditmanager . ListAuditReportsResponse
],
request : google . cloud . auditmanager_v1 . types . auditmanager . ListAuditReportsRequest ,
response : google . cloud . auditmanager_v1 . types . auditmanager . ListAuditReportsResponse ,
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
A pager for iterating through list_audit_reports requests.
This class thinly wraps an initial
ListAuditReportsResponse object, and
provides an __iter__ method to iterate through its
audit_reports field.
If there are more pages, the __iter__ method will make additional
ListAuditReports requests and continue to iterate
through the audit_reports field on the
corresponding responses.
All the usual ListAuditReportsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Methods
ListAuditReportsPager
ListAuditReportsPager (
method : typing . Callable [
[ ... ], google . cloud . auditmanager_v1 . types . auditmanager . ListAuditReportsResponse
],
request : google . cloud . auditmanager_v1 . types . auditmanager . ListAuditReportsRequest ,
response : google . cloud . auditmanager_v1 . types . auditmanager . ListAuditReportsResponse ,
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
google.cloud.auditmanager_v1.types.ListAuditReportsRequest
The initial request object.
response
google.cloud.auditmanager_v1.types.ListAuditReportsResponse
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
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]
