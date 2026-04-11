---
title: "TargetResourceConfig \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/TargetResourceConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/TargetResourceConfig
  title: "TargetResourceConfig \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
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
TargetResourceConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
TargetResourceCreationConfig
JSON representation
FolderCreationConfig
JSON representation
ProjectCreationConfig
JSON representation
The name of the target resource or the configuration that's required to create a new target resource.
JSON representation
{
// Union field resource_config can be only one of the following:
"existingTargetResource" : string ,
"targetResourceCreationConfig" : {
object ( TargetResourceCreationConfig )
}
// End of list of possible types for union field resource_config .
}
Fields
Union field resource_config . The resource configuration for the target resource. resource_config can be only one of the following:
existingTargetResource
string
Optional. The resource hierarchy node, in one of the following formats:
organizations/{organizationID}
folders/{folderID}
projects/{projectID}
targetResourceCreationConfig
object ( TargetResourceCreationConfig )
Optional. The details that are required to create a resource and use that resource as the target resource for deployment.
TargetResourceCreationConfig
The configuration that's required to create a target resource.
JSON representation
{
// Union field resource_creation_config can be only one of the following:
"folderCreationConfig" : {
object ( FolderCreationConfig )
} ,
"projectCreationConfig" : {
object ( ProjectCreationConfig )
}
// End of list of possible types for union field resource_creation_config .
}
Fields
Union field resource_creation_config . The configuration that's required to create the target resource. resource_creation_config can be only one of the following:
folderCreationConfig
object ( FolderCreationConfig )
Optional. The configuration that's required to create a folder.
projectCreationConfig
object ( ProjectCreationConfig )
Optional. The configuration that's required to create a project.
FolderCreationConfig
The configuration that's required to create a folder to be used as the target resource for a deployment.
JSON representation
{
"parent" : string ,
"folderDisplayName" : string
}
Fields
parent
string
Required. The parent of the folder, in the format organizations/{organizationID} or folders/{folderID} .
folderDisplayName
string
Required. The display name of the folder.
ProjectCreationConfig
The configuration that's required to create a project to be used as the target resource of a deployment.
JSON representation
{
"parent" : string ,
"projectDisplayName" : string ,
"billingAccountId" : string
}
Fields
parent
string
Required. The parent of the project, in the format organizations/{organizationID} or folders/{folderID} .
projectDisplayName
string
Required. The display name of the project.
billingAccountId
string
Required. The billing account ID for the project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-15 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-15 UTC."],[],[]]
