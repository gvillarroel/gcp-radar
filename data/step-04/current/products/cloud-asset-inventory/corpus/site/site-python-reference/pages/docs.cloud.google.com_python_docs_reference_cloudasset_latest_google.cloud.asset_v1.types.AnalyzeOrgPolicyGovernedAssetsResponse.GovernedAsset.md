---
title: "Class GovernedAsset (4.2.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeOrgPolicyGovernedAssetsResponse.GovernedAsset
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeOrgPolicyGovernedAssetsResponse.GovernedAsset
  title: "Class GovernedAsset (4.2.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class GovernedAsset (4.2.0)
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
GovernedAsset ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Represents a Google Cloud asset(resource or IAM policy) governed by
the organization policies of the
AnalyzeOrgPolicyGovernedAssetsRequest.constraint .
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
governed_resource
google.cloud.asset_v1.types.AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource
A Google Cloud resource governed by the organization
policies of the
AnalyzeOrgPolicyGovernedAssetsRequest.constraint .
This field is a member of oneof _ governed_asset .
governed_iam_policy
google.cloud.asset_v1.types.AnalyzeOrgPolicyGovernedAssetsResponse.GovernedIamPolicy
An IAM policy governed by the organization policies of the
AnalyzeOrgPolicyGovernedAssetsRequest.constraint .
This field is a member of oneof _ governed_asset .
consolidated_policy
google.cloud.asset_v1.types.AnalyzerOrgPolicy
The consolidated policy for the analyzed asset. The
consolidated policy is computed by merging and evaluating
AnalyzeOrgPolicyGovernedAssetsResponse.GovernedAsset.policy_bundle .
The evaluation will respect the organization policy
`hierarchy
rules
policy_bundle
MutableSequence[ google.cloud.asset_v1.types.AnalyzerOrgPolicy ]
The ordered list of all organization policies from the
consolidated_policy.attached_resource
to the scope specified in the request.
If the constraint is defined with default policy, it will
also appear in the list.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
