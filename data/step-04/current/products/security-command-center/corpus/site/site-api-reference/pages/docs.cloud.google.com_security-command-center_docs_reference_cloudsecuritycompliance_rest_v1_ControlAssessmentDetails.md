---
title: "ControlAssessmentDetails \_|\_ Security Command Center \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/ControlAssessmentDetails
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/ControlAssessmentDetails
  title: "ControlAssessmentDetails \_|\_ Security Command Center \_|\_ Google Cloud\
    \ Documentation"
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
ControlAssessmentDetails
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The details for a control assessment.
JSON representation
{
"passingControls" : integer ,
"failingControls" : integer ,
"assessedPassingControls" : integer ,
"notAssessedControls" : integer
}
Fields
passingControls
integer
The number of controls that are passing or not assessed.
failingControls
integer
The number of controls that are failing.
assessedPassingControls
integer
The number of controls that were assessed and are passing.
notAssessedControls
integer
The number of controls that aren't assessed because they require manual review.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-07 UTC."],[],[]]
