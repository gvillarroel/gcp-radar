---
title: "DataProfileConfigSnapshot \_|\_ Sensitive Data Protection \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/DataProfileConfigSnapshot
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/DataProfileConfigSnapshot
  title: "DataProfileConfigSnapshot \_|\_ Sensitive Data Protection \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Reference
Send feedback
DataProfileConfigSnapshot
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
DataProfileJobConfig
JSON representation
DataProfileLocation
JSON representation
Snapshot of the configurations used to generate the profile.
JSON representation
{
"inspectConfig" : {
object ( InspectConfig )
} ,
"dataProfileJob" : {
object ( DataProfileJobConfig )
} ,
"discoveryConfig" : {
object ( DiscoveryConfig )
} ,
"inspectTemplateName" : string ,
"inspectTemplateModifiedTime" : string
}
Fields
inspectConfig
object ( InspectConfig )
A copy of the inspection config used to generate this profile. This is a copy of the inspectTemplate specified in DataProfileJobConfig .
dataProfileJob (deprecated)
object ( DataProfileJobConfig )
This item is deprecated!
A copy of the configuration used to generate this profile. This is deprecated, and the DiscoveryConfig field is preferred moving forward. DataProfileJobConfig will still be written here for Discovery in BigQuery for backwards compatibility, but will not be updated with new fields, while DiscoveryConfig will.
discoveryConfig
object ( DiscoveryConfig )
A copy of the configuration used to generate this profile.
inspectTemplateName
string
Name of the inspection template used to generate this profile
inspectTemplateModifiedTime
string ( Timestamp format)
Timestamp when the template was modified
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
DataProfileJobConfig
Configuration for setting up a job to scan resources for profile generation. Only one data profile configuration may exist per organization, folder, or project.
The generated data profiles are retained according to the data retention policy .
JSON representation
{
"location" : {
object ( DataProfileLocation )
} ,
"projectId" : string ,
"otherCloudStartingLocation" : {
object ( OtherCloudDiscoveryStartingLocation )
} ,
"inspectTemplates" : [
string
] ,
"dataProfileActions" : [
{
object ( DataProfileAction )
}
]
}
Fields
location
object ( DataProfileLocation )
The data to scan.
projectId
string
The project that will run the scan. The DLP service account that exists within this project must have access to all resources that are profiled, and the DLP API must be enabled.
otherCloudStartingLocation
object ( OtherCloudDiscoveryStartingLocation )
Must be set only when scanning other clouds.
inspectTemplates[]
string
Detection logic for profile generation.
Not all template features are used by profiles. FindingLimits, includeQuote and excludeInfoTypes have no impact on data profiling.
Multiple templates may be provided if there is data in multiple regions. At most one template must be specified per-region (including "global"). Each region is scanned using the applicable template. If no region-specific template is specified, but a "global" template is specified, it will be copied to that region and used instead. If no global or region-specific template is provided for a region with data, that region's data will not be scanned.
For more information, see https://cloud.google.com/sensitive-data-protection/docs/data-profiles#data-residency .
dataProfileActions[]
object ( DataProfileAction )
Actions to execute at the completion of the job.
DataProfileLocation
The data that will be profiled.
JSON representation
{
// Union field location can be only one of the following:
"organizationId" : string ,
"folderId" : string
// End of list of possible types for union field location .
}
Fields
Union field location . The location to be scanned. location can be only one of the following:
organizationId
string ( int64 format)
The ID of an organization to scan.
folderId
string ( int64 format)
The ID of the folder within an organization to scan.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-09 UTC."],[],[]]
