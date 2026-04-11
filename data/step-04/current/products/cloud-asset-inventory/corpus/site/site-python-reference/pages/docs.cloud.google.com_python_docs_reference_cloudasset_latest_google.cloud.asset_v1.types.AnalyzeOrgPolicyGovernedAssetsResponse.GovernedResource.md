---
title: "Class GovernedResource (4.2.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.types.AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource
  title: "Class GovernedResource (4.2.0) \_|\_ Python client libraries \_|\_ Google\
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
Class GovernedResource (4.2.0)
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
GovernedResource ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The Google Cloud resources governed by the organization policies of
the
AnalyzeOrgPolicyGovernedAssetsRequest.constraint .
Attributes
Name
Description
full_resource_name
str
The [full resource name]
(https://cloud.google.com/asset-inventory/docs/resource-name-format)
of the Google Cloud resource.
parent
str
The [full resource name]
(https://cloud.google.com/asset-inventory/docs/resource-name-format)
of the parent of
AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full_resource_name .
project
str
The project that this resource belongs to, in the format of
projects/{PROJECT_NUMBER}. This field is available when the
resource belongs to a project.
folders
MutableSequence[str]
The folder(s) that this resource belongs to, in the format
of folders/{FOLDER_NUMBER}. This field is available when the
resource belongs (directly or cascadingly) to one or more
folders.
organization
str
The organization that this resource belongs to, in the
format of organizations/{ORGANIZATION_NUMBER}. This field is
available when the resource belongs (directly or
cascadingly) to an organization.
asset_type
str
The asset type of the
AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full_resource_name
Example: cloudresourcemanager.googleapis.com/Project See
`Cloud Asset Inventory Supported Asset
Types
effective_tags
MutableSequence[ google.cloud.asset_v1.types.EffectiveTagDetails ]
The effective tags on this resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
