---
title: "CmEnrollment \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/CmEnrollment
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/CmEnrollment
  title: "CmEnrollment \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
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
CmEnrollment
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
AuditConfig
JSON representation
CmEligibleDestination
JSON representation
The settings for Compliance Manager at a specific resource scope.
JSON representation
{
"name" : string ,
"enrolled" : boolean ,
"auditConfig" : {
object ( AuditConfig )
}
}
Fields
name
string
Identifier. The name of the Compliance Manager enrollment.
Supported formats are the following:
organizations/{organization_id}/locations/{location}/cmEnrollment
folders/{folder_id}/locations/{location}/cmEnrollment
projects/{projectId}/locations/{location}/cmEnrollment
enrolled
boolean
Optional. Whether the resource is enrolled in Compliance Manager. This setting is inherited by all descendants.
auditConfig
object ( AuditConfig )
Optional. The audit configuration for Compliance Manager. If set at a scope, this configuration overrides any inherited audit configuration.
AuditConfig
The audit configuration for Compliance Manager.
JSON representation
{
"destinations" : [
{
object ( CmEligibleDestination )
}
]
}
Fields
destinations[]
object ( CmEligibleDestination )
Required. The list of destinations that can be selected for uploading audit reports to.
CmEligibleDestination
The destination details where audit reports are uploaded.
JSON representation
{
// Union field cm_eligible_destinations can be only one of the following:
"gcsBucket" : string
// End of list of possible types for union field cm_eligible_destinations .
}
Fields
Union field cm_eligible_destinations . Set of options for the report destination location. cm_eligible_destinations can be only one of the following:
gcsBucket
string
The Cloud Storage bucket where audit reports and evidence can be uploaded. The format is gs://{bucket_name} .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-07 UTC."],[],[]]
