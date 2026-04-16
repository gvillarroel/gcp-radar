---
title: "REST Resource: about \_|\_ Google Drive \_|\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/reference/rest/v2/about
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/reference/rest/v3
source_metadata:
  url: https://developers.google.com/workspace/drive/api/reference/rest/v2/about
  title: "REST Resource: about \_|\_ Google Drive \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Drive
Reference
Send feedback
REST Resource: about
Stay organized with collections
Save and categorize content based on your preferences.
Resource: About
JSON representation
JSON representation
Methods
Resource: About
An item with user information and settings.
JSON representation
{
"importFormats" : [
{
"source" : string ,
"targets" : [
string
]
}
] ,
"exportFormats" : [
{
"source" : string ,
"targets" : [
string
]
}
] ,
"additionalRoleInfo" : [
{
"type" : string ,
"roleSets" : [
{
"additionalRoles" : [
string
] ,
"primaryRole" : string
}
]
}
] ,
"features" : [
{
"featureName" : string ,
"featureRate" : number
}
] ,
"maxUploadSizes" : [
{
"type" : string ,
"size" : string
}
] ,
"folderColorPalette" : [
string
] ,
"driveThemes" : [
{
"id" : string ,
"backgroundImageLink" : string ,
"colorRgb" : string
}
] ,
"quotaBytesByService" : [
{
"serviceName" : string ,
"bytesUsed" : string
}
] ,
"teamDriveThemes" : [
{
"id" : string ,
"backgroundImageLink" : string ,
"colorRgb" : string
}
] ,
"name" : string ,
"quotaBytesTotal" : string ,
"quotaBytesUsed" : string ,
"quotaBytesUsedInTrash" : string ,
"largestChangeId" : string ,
"remainingChangeIds" : string ,
"rootFolderId" : string ,
"domainSharingPolicy" : string ,
"kind" : string ,
"permissionId" : string ,
"isCurrentAppInstalled" : boolean ,
"quotaBytesUsedAggregate" : string ,
"user" : {
object ( User )
} ,
"etag" : string ,
"languageCode" : string ,
"selfLink" : string ,
"quotaType" : string ,
"canCreateDrives" : boolean ,
"canCreateTeamDrives" : boolean
}
Fields
importFormats[]
object
The allowable import formats.
importFormats[].source
string
The imported file's content type to convert from.
importFormats[].targets[]
string
The possible content types to convert to.
exportFormats[]
object
The allowable export formats.
exportFormats[].source
string
The content type to convert from.
exportFormats[].targets[]
string
The possible content types to convert to.
additionalRoleInfo[]
object
Information about supported additional roles per file type. The most specific type takes precedence.
additionalRoleInfo[].type
string
The content type that this additional role info applies to.
additionalRoleInfo[].roleSets[]
object
The supported additional roles per primary role.
additionalRoleInfo[].roleSets[].primaryRole
string
A primary permission role.
additionalRoleInfo[].roleSets[].additionalRoles[]
string
The supported additional roles with the primary role.
features[]
object
List of additional features enabled on this account.
features[].featureName
string
The name of the feature.
features[].featureRate
number
The request limit rate for this feature, in queries per second.
maxUploadSizes[]
object
List of max upload sizes for each file type. The most specific type takes precedence.
maxUploadSizes[].type
string
The file type.
maxUploadSizes[].size
string ( int64 format)
The max upload size for this type.
folderColorPalette[]
string
The palette of allowable folder colors as RGB hex strings.
driveThemes[]
object
A list of themes that are supported for shared drives.
driveThemes[].id
string
The ID of the theme.
driveThemes[].backgroundImageLink
string
A link to this theme's background image.
driveThemes[].colorRgb
string
The color of this theme as an RGB hex string.
quotaBytesByService[]
object
The amount of storage quota used by different Google services.
quotaBytesByService[].serviceName
string
The service's name, e.g. DRIVE, GMAIL, or PHOTOS.
quotaBytesByService[].bytesUsed
string ( int64 format)
The storage quota bytes used by the service.
teamDriveThemes[] (deprecated)
object
This item is deprecated!
Deprecated: Use driveThemes instead.
teamDriveThemes[] (deprecated) .id (deprecated)
string
Deprecated: Use driveThemes/id instead.
teamDriveThemes[] (deprecated) .backgroundImageLink (deprecated)
string
Deprecated: Use driveThemes/backgroundImageLink instead.
teamDriveThemes[] (deprecated) .colorRgb (deprecated)
string
Deprecated: Use driveThemes/colorRgb instead.
name
string
The name of the current user.
quotaBytesTotal
string ( int64 format)
The total number of quota bytes. This is only relevant when quotaType is LIMITED.
quotaBytesUsed
string ( int64 format)
The number of quota bytes used by Google Drive.
quotaBytesUsedInTrash
string ( int64 format)
The number of quota bytes used by trashed items.
largestChangeId
string ( int64 format)
The largest change id.
remainingChangeIds
string ( int64 format)
The number of remaining change ids, limited to no more than 2500.
rootFolderId
string
The id of the root folder.
domainSharingPolicy (deprecated)
string
This item is deprecated!
Deprecated: Does not granularly represent allowlisted domains or Trust Rules.
The domain sharing policy for the current user. Possible values are:
allowed
allowedWithWarning
incomingOnly
disallowed
Note that if the user is enrolled in Trust Rules, disallowed will always be returned. If sharing is restricted to allowlisted domains, either incomingOnly or allowedWithWarning will be returned, depending on whether receiving files from outside the allowlisted domains is permitted.
kind
string
This is always drive#about .
permissionId
string
The current user's ID as visible in the permissions collection.
isCurrentAppInstalled
boolean
A boolean indicating whether the authenticated app is installed by the authenticated user.
quotaBytesUsedAggregate
string ( int64 format)
The number of quota bytes used by all Google apps (Drive, Picasa, etc.).
user
object ( User )
The authenticated user.
etag
string
The ETag of the item.
languageCode
string
The user's language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format ( http://www.unicode.org/reports/tr35/) .
selfLink
string
A link back to this item.
quotaType
string
The type of the user's storage quota. Possible values are:
LIMITED
UNLIMITED
canCreateDrives
boolean
Whether the user can create shared drives.
canCreateTeamDrives (deprecated)
boolean
This item is deprecated!
Deprecated: Use canCreateDrives instead.
Methods
get
Gets the information about the current user along with Drive API settings
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-19 UTC."],[],[]]
