---
title: "AcknowledgeViolationRequest \_|\_ Assured Workloads \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/AcknowledgeViolationRequest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/AcknowledgeViolationRequest
  title: "AcknowledgeViolationRequest \_|\_ Assured Workloads \_|\_ Google Cloud Documentation"
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
AcknowledgeViolationRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Request for acknowledging the violation Next Id: 4
JSON representation
{
"name" : string ,
"comment" : string ,
"nonCompliantOrgPolicy" : string
}
Fields
name
string
Required. The resource name of the Violation to acknowledge. Format: organizations/{organization}/locations/{location}/workloads/{workload}/violations/{violation}
comment
string
Required. Business justification explaining the need for violation acknowledgement
nonCompliantOrgPolicy (deprecated)
string
This item is deprecated!
Optional. This field is deprecated and will be removed in future version of the API. Name of the OrgPolicy which was modified with non-compliant change and resulted in this violation. Format: projects/{project_number}/policies/{constraintName} folders/{folderId}/policies/{constraintName} organizations/{organization_id}/policies/{constraintName}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-27 UTC."],[],[]]
