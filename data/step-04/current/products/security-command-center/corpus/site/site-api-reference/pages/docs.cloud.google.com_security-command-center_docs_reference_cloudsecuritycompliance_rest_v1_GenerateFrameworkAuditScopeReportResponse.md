---
title: "GenerateFrameworkAuditScopeReportResponse \_|\_ Security Command Center \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/GenerateFrameworkAuditScopeReportResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/GenerateFrameworkAuditScopeReportResponse
  title: "GenerateFrameworkAuditScopeReportResponse \_|\_ Security Command Center\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Reference
Send feedback
GenerateFrameworkAuditScopeReportResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The response message for [GenerateFrameworkAuditScopeReport][].
JSON representation
{
"name" : string ,
"complianceFramework" : string ,
// Union field audit_report can be only one of the following:
"scopeReportContents" : string
// End of list of possible types for union field audit_report .
}
Fields
name
string
Identifier. The name of the audit report, in the format that was given in the request.
complianceFramework
string
Required. The compliance framework that the audit scope report is generated for.
Union field audit_report . The set of options that the audit scope report is exported in. audit_report can be only one of the following:
scopeReportContents
string ( bytes format)
The audit scope report content in byte format.
A base64-encoded string.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-07 UTC."],[],[]]
