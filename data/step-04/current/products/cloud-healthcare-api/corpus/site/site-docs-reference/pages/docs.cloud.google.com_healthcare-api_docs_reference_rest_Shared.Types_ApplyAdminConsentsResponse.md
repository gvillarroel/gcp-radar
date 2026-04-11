---
title: "ApplyAdminConsentsResponse \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/healthcare-api/docs/reference/rest/Shared.Types/ApplyAdminConsentsResponse
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/healthcare-api/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/healthcare-api/docs/reference/rest/Shared.Types/ApplyAdminConsentsResponse
  title: "ApplyAdminConsentsResponse \_|\_ Cloud Healthcare API \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Cloud Healthcare API
Reference
Send feedback
ApplyAdminConsentsResponse
Stay organized with collections
Save and categorize content based on your preferences.
Response when all admin Consent resources in scope were processed and all affected resources were reindexed successfully. This structure will be included in the response when the operation finishes successfully.
JSON representation
{
"consentApplySuccess" : string ,
"affectedResources" : string ,
"failedResources" : string
}
Fields
consentApplySuccess
string ( int64 format)
If validateOnly=false in ApplyAdminConsentsRequest , this counter contains the number of Consent resources that were successfully applied. Otherwise, it is the number of Consent resources that are supported.
affectedResources
string ( int64 format)
The number of resources (including the Consent resources) that may have consent access change.
failedResources
string ( int64 format)
The number of resources (including the Consent resources) that [ApplyAdminConsents][] failed to re-index.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
