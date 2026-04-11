---
title: "Class DeleteWorkstationConfigRequest (0.8.0) \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.types.DeleteWorkstationConfigRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/workstations/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.types.DeleteWorkstationConfigRequest
  title: "Class DeleteWorkstationConfigRequest (0.8.0) \_|\_ Python client libraries\
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
Class DeleteWorkstationConfigRequest (0.8.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.8.0 (latest)
0.7.0
0.6.0
0.5.13
0.4.1
0.3.0
0.2.1
0.1.1
DeleteWorkstationConfigRequest (
mapping = None , * , ignore_unknown_fields = False , ** kwargs
)
Message for deleting a workstation configuration.
Attributes
Name
Description
name
str
Required. Name of the workstation
configuration to delete.
validate_only
bool
Optional. If set, validate the request and
preview the review, but do not actually apply
it.
etag
str
Optional. If set, the request is rejected if
the latest version of the workstation
configuration on the server does not have this
ETag.
force
bool
Optional. If set, any workstations in the
workstation configuration are also deleted.
Otherwise, the request works only if the
workstation configuration has no workstations.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
