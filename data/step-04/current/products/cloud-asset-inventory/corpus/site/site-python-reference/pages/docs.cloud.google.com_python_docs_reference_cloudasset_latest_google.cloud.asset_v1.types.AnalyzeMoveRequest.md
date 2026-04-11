---
title: "Class AnalyzeMoveRequest (4.2.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeMoveRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeMoveRequest
  title: "Class AnalyzeMoveRequest (4.2.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class AnalyzeMoveRequest (4.2.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
4.2.0 (latest)
4.1.0
4.0.0
3.30.1
3.29.2
3.28.0
3.27.1
3.26.4
3.25.1
3.24.3
3.23.0
3.22.0
3.21.0
3.20.1
3.19.1
3.18.1
3.17.1
3.16.0
3.15.0
3.14.2
3.13.1
3.12.0
3.11.0
3.10.0
3.9.1
3.8.1
3.7.1
3.6.1
3.5.0
3.4.0
3.3.0
3.2.1
3.1.0
2.2.2
2.1.0
2.0.0
1.3.2
1.2.0
1.1.0
1.0.0
0.10.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.1
0.3.0
AnalyzeMoveRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The request message for performing resource move analysis.
Attributes
Name
Description
resource
str
Required. Name of the resource to perform the
analysis against. Only Google Cloud projects are
supported as of today. Hence, this can only be a
project ID (such as "projects/my-project-id") or
a project number (such as "projects/12345").
destination_parent
str
Required. Name of the Google Cloud folder or
organization to reparent the target resource.
The analysis will be performed against
hypothetically moving the resource to this
specified destination parent. This can only be a
folder number (such as "folders/123") or an
organization number (such as
"organizations/123").
view
google.cloud.asset_v1.types.AnalyzeMoveRequest.AnalysisView
Analysis view indicating what information
should be included in the analysis response. If
unspecified, the default view is FULL.
Classes
AnalysisView
AnalysisView ( value )
View enum for supporting partial analysis responses.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
