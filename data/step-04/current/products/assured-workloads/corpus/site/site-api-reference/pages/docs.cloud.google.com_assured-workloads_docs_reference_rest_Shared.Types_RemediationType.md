---
title: "RemediationType \_|\_ Assured Workloads \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/RemediationType
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/RemediationType
  title: "RemediationType \_|\_ Assured Workloads \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The names for some Assured Workloads control packages have changed. For information about the name change, see Control package renaming notice .
Home
Documentation
Security
Assured Workloads
Reference
Send feedback
RemediationType
Stay organized with collections
Save and categorize content based on your preferences.
Classifying remediation into various types based on the kind of violation. For example, violations caused due to changes in boolean org policy requires different remediation instructions compared to violation caused due to changes in allowed values of list org policy.
Enums
REMEDIATION_TYPE_UNSPECIFIED
Unspecified remediation type
REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION
Remediation type for boolean org policy
REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION
Remediation type for list org policy which have allowed values in the monitoring rule
REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION
Remediation type for list org policy which have denied values in the monitoring rule
REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION
Remediation type for gcp.restrictCmekCryptoKeyProjects
REMEDIATION_RESOURCE_VIOLATION
Remediation type for resource violation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
