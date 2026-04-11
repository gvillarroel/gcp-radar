---
title: "TargetResourceDetails \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/TargetResourceDetails
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/TargetResourceDetails
  title: "TargetResourceDetails \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
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
TargetResourceDetails
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The details for a target resource.
JSON representation
{
"frameworkDeployment" : string ,
"targetResourceDisplayName" : string ,
"targetResource" : string ,
"createTime" : string ,
"updateTime" : string ,
"majorRevisionId" : string ,
"minorRevisionId" : string
}
Fields
frameworkDeployment
string
The framework deployment name for the target resource.
For example, organizations/{organization_id}/locations/{location}/frameworkDeployments/{frameworkDeploymentId}
targetResourceDisplayName
string
The display name of the target resource. For example, google.com , staging-project , or development-folder .
targetResource
string
The target resource. For example, organizations/1234567890 , projects/1234567890 , or folders/1234567890 .
createTime
string ( Timestamp format)
The create time of the target resource.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
The update time of the target resource.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
majorRevisionId
string ( int64 format)
The major revision ID of the framework for the target resource.
minorRevisionId
string ( int64 format)
The minor revision ID of the framework for the target resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-07 UTC."],[],[]]
