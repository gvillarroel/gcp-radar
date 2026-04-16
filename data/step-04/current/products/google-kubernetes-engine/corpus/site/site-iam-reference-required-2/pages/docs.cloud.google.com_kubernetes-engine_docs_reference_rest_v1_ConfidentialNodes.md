---
title: "ConfidentialNodes \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes
knowledge_key: corpus
source_id: site-iam-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes
  title: "ConfidentialNodes \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Reference
Send feedback
ConfidentialNodes
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
ConfidentialInstanceType
ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs.
JSON representation
{
"enabled" : boolean ,
"confidentialInstanceType" : enum ( ConfidentialInstanceType )
}
Fields
enabled
boolean
Whether Confidential Nodes feature is enabled.
confidentialInstanceType
enum ( ConfidentialInstanceType )
Defines the type of technology used by the confidential node.
ConfidentialInstanceType
The type of technology used by the confidential node.
Enums
CONFIDENTIAL_INSTANCE_TYPE_UNSPECIFIED
No type specified. Do not use this value.
SEV
AMD Secure Encrypted Virtualization.
SEV_SNP
AMD Secure Encrypted Virtualization - Secure Nested Paging.
TDX
Intel Trust Domain eXtension.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-21 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-21 UTC."],[],[]]
