---
title: "PartnerPermissions \_|\_ Assured Workloads \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/PartnerPermissions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/PartnerPermissions
  title: "PartnerPermissions \_|\_ Assured Workloads \_|\_ Google Cloud Documentation"
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
PartnerPermissions
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Permissions granted to the AW Partner SA account for the customer workload
JSON representation
{
"dataLogsViewer" : boolean ,
"serviceAccessApprover" : boolean ,
"assuredWorkloadsMonitoring" : boolean ,
"accessTransparencyLogsSupportCaseViewer" : boolean
}
Fields
dataLogsViewer
boolean
Optional. Allow the partner to view inspectability logs and monitoring violations.
serviceAccessApprover
boolean
Optional. Allow partner to view access approval logs.
assuredWorkloadsMonitoring
boolean
Optional. Allow partner to view violation alerts.
accessTransparencyLogsSupportCaseViewer
boolean
Optional. Allow partner to view support case details for an AXT log
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
