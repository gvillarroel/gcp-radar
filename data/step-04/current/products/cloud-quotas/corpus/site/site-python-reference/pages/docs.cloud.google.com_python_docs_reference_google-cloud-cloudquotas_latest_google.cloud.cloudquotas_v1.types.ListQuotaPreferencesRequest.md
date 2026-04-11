---
title: "Class ListQuotaPreferencesRequest (0.6.0) \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.types.ListQuotaPreferencesRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.types.ListQuotaPreferencesRequest
  title: "Class ListQuotaPreferencesRequest (0.6.0) \_|\_ Python client libraries\
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
Class ListQuotaPreferencesRequest (0.6.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.6.0 (latest)
0.5.0
0.4.0
0.3.0
0.2.0
0.1.18
ListQuotaPreferencesRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Message for requesting list of QuotaPreferences
Attributes
Name
Description
parent
str
Required. Parent value of QuotaPreference resources. Listing
across different resource containers (such as 'projects/-')
is not allowed.
When the value starts with 'folders' or 'organizations', it
lists the QuotaPreferences for org quotas in the container.
It does not list the QuotaPreferences in the descendant
projects of the container.
Example parents: projects/123/locations/global
page_size
int
Optional. Requested page size. Server may
return fewer items than requested. If
unspecified, server will pick an appropriate
default.
page_token
str
Optional. A token identifying a page of
results the server should return.
filter
str
Optional. Filter result QuotaPreferences by their state,
type, create/update time range.
Example filters:
reconciling=true AND request_type=CLOUD_CONSOLE ,
reconciling=true OR creation_time>2022-12-03T10:30:00
order_by
str
Optional. How to order of the results. By default, the
results are ordered by create time.
Example orders: quota_id , service, create_time
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
