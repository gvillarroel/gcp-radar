---
title: "Class AnalyzeIamPolicyResponse (4.2.0) \_|\_ Python client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeIamPolicyResponse
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeIamPolicyResponse
  title: "Class AnalyzeIamPolicyResponse (4.2.0) \_|\_ Python client libraries \_\
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
Class AnalyzeIamPolicyResponse (4.2.0)
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
AnalyzeIamPolicyResponse ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A response message for
AssetService.AnalyzeIamPolicy .
Attributes
Name
Description
main_analysis
google.cloud.asset_v1.types.AnalyzeIamPolicyResponse.IamPolicyAnalysis
The main analysis that matches the original
request.
service_account_impersonation_analysis
MutableSequence[ google.cloud.asset_v1.types.AnalyzeIamPolicyResponse.IamPolicyAnalysis ]
The service account impersonation analysis if
IamPolicyAnalysisQuery.Options.analyze_service_account_impersonation
is enabled.
fully_explored
bool
Represents whether all entries in the
main_analysis
and
service_account_impersonation_analysis
have been fully explored to answer the query in the request.
Classes
IamPolicyAnalysis
IamPolicyAnalysis ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
An analysis message to group the query and results.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
