---
title: "Class CreateQuotaPreferenceRequest (0.6.0) \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.types.CreateQuotaPreferenceRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.types.CreateQuotaPreferenceRequest
  title: "Class CreateQuotaPreferenceRequest (0.6.0) \_|\_ Python client libraries\
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
Class CreateQuotaPreferenceRequest (0.6.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.6.0 (latest)
0.5.0
0.4.0
0.3.0
0.2.0
0.1.18
CreateQuotaPreferenceRequest (
mapping = None , * , ignore_unknown_fields = False , ** kwargs
)
Message for creating a QuotaPreference
Attributes
Name
Description
parent
str
Required. Value for parent.
Example: projects/123/locations/global
quota_preference_id
str
Optional. Id of the requesting object, must
be unique under its parent. If client does not
set this field, the service will generate one.
quota_preference
google.cloud.cloudquotas_v1.types.QuotaPreference
Required. The resource being created
ignore_safety_checks
MutableSequence[ google.cloud.cloudquotas_v1.types.QuotaSafetyCheck ]
The list of quota safety checks to be
ignored.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
