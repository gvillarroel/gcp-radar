---
title: "Class AnalyzeIamPolicyLongrunningRequest (4.2.0) \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeIamPolicyLongrunningRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeIamPolicyLongrunningRequest
  title: "Class AnalyzeIamPolicyLongrunningRequest (4.2.0) \_|\_ Python client libraries\
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
Class AnalyzeIamPolicyLongrunningRequest (4.2.0)
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
AnalyzeIamPolicyLongrunningRequest (
mapping = None , * , ignore_unknown_fields = False , ** kwargs
)
A request message for
AssetService.AnalyzeIamPolicyLongrunning .
Attributes
Name
Description
analysis_query
google.cloud.asset_v1.types.IamPolicyAnalysisQuery
Required. The request query.
saved_analysis_query
str
Optional. The name of a saved query, which must be in the
format of:
- projects/project_number/savedQueries/saved_query_id
- folders/folder_number/savedQueries/saved_query_id
- organizations/organization_number/savedQueries/saved_query_id
If both analysis_query and saved_analysis_query are
provided, they will be merged together with the
saved_analysis_query as base and the analysis_query
as overrides. For more details of the merge behavior, refer
to the
MergeFrom __
doc.
Note that you cannot override primitive fields with default
value, such as 0 or empty string, etc., because we use
proto3, which doesn't support field presence yet.
output_config
google.cloud.asset_v1.types.IamPolicyAnalysisOutputConfig
Required. Output configuration indicating
where the results will be output to.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
