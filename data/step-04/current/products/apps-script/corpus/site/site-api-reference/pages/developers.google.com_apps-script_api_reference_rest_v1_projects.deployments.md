---
title: "REST Resource: projects.deployments \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments
  title: "REST Resource: projects.deployments \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
REST Resource: projects.deployments
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A Deployment resource represents a single script deployment and includes its ID, configuration, update time, and entry points.
DeploymentConfig defines how a deployment is configured, including the script ID, version number, manifest file name, and description.
An EntryPoint defines how a deployment is accessed externally and can be a web app, execution API, or add-on.
Different EntryPoint types like WebAppEntryPoint, ExecutionApiEntryPoint, and AddOnEntryPoint have specific configurations for access and execution.
The provided content also outlines methods for managing deployments, including creation, deletion, retrieval, listing, and updating.
Resource: Deployment
JSON representation
DeploymentConfig
JSON representation
EntryPoint
JSON representation
EntryPointType
WebAppEntryPoint
JSON representation
WebAppConfig
JSON representation
Access
ExecuteAs
ExecutionApiEntryPoint
JSON representation
ExecutionApiConfig
JSON representation
AddOnEntryPoint
JSON representation
AddOnType
Methods
Resource: Deployment
Representation of a single script deployment.
JSON representation
{
"deploymentId" : string ,
"deploymentConfig" : {
object ( DeploymentConfig )
} ,
"updateTime" : string ,
"entryPoints" : [
{
object ( EntryPoint )
}
]
}
Fields
deploymentId
string
The deployment ID for this deployment.
deploymentConfig
object ( DeploymentConfig )
The deployment configuration.
updateTime
string ( Timestamp format)
Last modified date time stamp.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
entryPoints[]
object ( EntryPoint )
The deployment's entry points.
DeploymentConfig
Metadata the defines how a deployment is configured.
JSON representation
{
"scriptId" : string ,
"versionNumber" : integer ,
"manifestFileName" : string ,
"description" : string
}
Fields
scriptId
string
The script project's Drive ID.
versionNumber
integer
The version number on which this deployment is based.
manifestFileName
string
The manifest file name for this deployment.
description
string
The description for this deployment.
EntryPoint
A configuration that defines how a deployment is accessed externally.
JSON representation
{
"entryPointType" : enum ( EntryPointType ) ,
// Union field properties can be only one of the following:
"webApp" : {
object ( WebAppEntryPoint )
} ,
"executionApi" : {
object ( ExecutionApiEntryPoint )
} ,
"addOn" : {
object ( AddOnEntryPoint )
}
// End of list of possible types for union field properties .
}
Fields
entryPointType
enum ( EntryPointType )
The type of the entry point.
Union field properties . Entry point properties per entry point type. properties can be only one of the following:
webApp
object ( WebAppEntryPoint )
An entry point specification for web apps.
executionApi
object ( ExecutionApiEntryPoint )
An entry point specification for Apps Script API execution calls.
addOn
object ( AddOnEntryPoint )
Add-on properties.
EntryPointType
Types of entry points.
Enums
ENTRY_POINT_TYPE_UNSPECIFIED
An unspecified entry point.
WEB_APP
A web application entry point.
EXECUTION_API
An API executable entry point.
ADD_ON
An Add-On entry point.
WebAppEntryPoint
A web application entry point.
JSON representation
{
"url" : string ,
"entryPointConfig" : {
object ( WebAppConfig )
}
}
Fields
url
string
The URL for the web application.
entryPointConfig
object ( WebAppConfig )
The entry point's configuration.
WebAppConfig
Web app entry point configuration.
JSON representation
{
"access" : enum ( Access ) ,
"executeAs" : enum ( ExecuteAs )
}
Fields
access
enum ( Access )
Who has permission to run the web app.
executeAs
enum ( ExecuteAs )
Who to execute the web app as.
Access
Access configuration.
Enums
UNKNOWN_ACCESS
Default value, should not be used.
MYSELF
Only the user who deployed the web app or executable can access it. Note that this is not necessarily the owner of the script project.
DOMAIN
Only users in the same domain as the user who deployed the web app or executable can access it.
ANYONE
Any logged in user can access the web app or executable.
ANYONE_ANONYMOUS
Any user, logged in or not, can access the web app or executable.
ExecuteAs
A configuration that specifies the user under whose authority the web app should run as.
Enums
UNKNOWN_EXECUTE_AS
Default value, should not be used.
USER_ACCESSING
The script runs as the user accessing the web app.
USER_DEPLOYING
The script runs as the user who deployed the web app. Note that this is not necessarily the owner of the script project.
ExecutionApiEntryPoint
An API executable entry point.
JSON representation
{
"entryPointConfig" : {
object ( ExecutionApiConfig )
}
}
Fields
entryPointConfig
object ( ExecutionApiConfig )
The entry point's configuration.
ExecutionApiConfig
API executable entry point configuration.
JSON representation
{
"access" : enum ( Access )
}
Fields
access
enum ( Access )
Who has permission to run the API executable.
AddOnEntryPoint
An add-on entry point.
JSON representation
{
"addOnType" : enum ( AddOnType ) ,
"title" : string ,
"description" : string ,
"helpUrl" : string ,
"reportIssueUrl" : string ,
"postInstallTipUrl" : string
}
Fields
addOnType
enum ( AddOnType )
The add-on's required list of supported container types.
title
string
The add-on's required title.
description
string
The add-on's optional description.
helpUrl
string
The add-on's optional help URL.
reportIssueUrl
string
The add-on's optional report issue URL.
postInstallTipUrl
string
The add-on's required post install tip URL.
AddOnType
AddType defines which category of add-ons a host application handles. Each add-on type has a section of the script manifest that is used when deploying or executing an add-on of the given type.
Enums
UNKNOWN_ADDON_TYPE
Default value, unknown add-on type.
GMAIL
Add-on type for Gmail.
DATA_STUDIO
Add-on type for Data Studio.
Methods
create
Creates a deployment of an Apps Script project.
delete
Deletes a deployment of an Apps Script project.
get
Gets a deployment of an Apps Script project.
list
Lists the deployments of an Apps Script project.
update
Updates a deployment of an Apps Script project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
