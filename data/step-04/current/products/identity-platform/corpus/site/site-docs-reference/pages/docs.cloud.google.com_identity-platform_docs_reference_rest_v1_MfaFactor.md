---
title: "MfaFactor \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/MfaFactor
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity-platform/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/MfaFactor
  title: "MfaFactor \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Identity Platform
Reference
Send feedback
MfaFactor
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
JSON representation
{
"displayName" : string ,
// Union field mfa_value can be only one of the following:
"phoneInfo" : string
// End of list of possible types for union field mfa_value .
}
Fields
displayName
string
Display name for this mfa option e.g. "corp cell phone".
Union field mfa_value .
mfa_value can be only one of the following:
phoneInfo
string
Phone number to receive OTP for MFA.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
