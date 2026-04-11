---
title: "REST Resource: apps \_|\_ Google Drive \_|\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/reference/rest/v2/apps
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/reference/rest/v3
source_metadata:
  url: https://developers.google.com/workspace/drive/api/reference/rest/v2/apps
  title: "REST Resource: apps \_|\_ Google Drive \_|\_ Google for Developers"
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
REST Resource: apps
Stay organized with collections
Save and categorize content based on your preferences.
Resource: App
JSON representation
Methods
Resource: App
The apps resource provides a list of the apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details.
Some resource methods (such as apps.get ) require an appId . Use the apps.list method to retrieve the ID for an installed application.
JSON representation
{
"primaryMimeTypes" : [
string
] ,
"secondaryMimeTypes" : [
string
] ,
"primaryFileExtensions" : [
string
] ,
"secondaryFileExtensions" : [
string
] ,
"icons" : [
{
"size" : integer ,
"category" : string ,
"iconUrl" : string
}
] ,
"name" : string ,
"objectType" : string ,
"supportsCreate" : boolean ,
"productUrl" : string ,
"id" : string ,
"supportsImport" : boolean ,
"installed" : boolean ,
"authorized" : boolean ,
"useByDefault" : boolean ,
"kind" : string ,
"shortDescription" : string ,
"longDescription" : string ,
"supportsMultiOpen" : boolean ,
"productId" : string ,
"openUrlTemplate" : string ,
"createUrl" : string ,
"createInFolderTemplate" : string ,
"supportsOfflineCreate" : boolean ,
"hasDriveWideScope" : boolean
}
Fields
primaryMimeTypes[]
string
The list of primary mime types.
secondaryMimeTypes[]
string
The list of secondary mime types.
primaryFileExtensions[]
string
The list of primary file extensions.
secondaryFileExtensions[]
string
The list of secondary file extensions.
icons[]
object
The various icons for the app.
icons[].size
integer
Size of the icon. Represented as the maximum of the width and height.
icons[].category
string
Category of the icon. Allowed values are:
application - icon for the application
document - icon for a file associated with the app
documentShared - icon for a shared file associated with the app
icons[].iconUrl
string
URL for the icon.
name
string
The name of the app.
objectType
string
The type of object this app creates (e.g. Chart). If empty, the app name should be used instead.
supportsCreate
boolean
Whether this app supports creating new objects.
productUrl
string
A link to the product listing for this app.
id
string
The ID of the app.
supportsImport
boolean
Whether this app supports importing from Docs Editors.
installed
boolean
Whether the app is installed.
authorized
boolean
Whether the app is authorized to access data on the user's Drive.
useByDefault
boolean
Whether the app is selected as the default handler for the types it supports.
kind
string
This is always drive#app .
shortDescription
string
A short description of the app.
longDescription
string
A long description of the app.
supportsMultiOpen
boolean
Whether this app supports opening more than one file.
productId
string
The ID of the product listing for this app.
openUrlTemplate
string
The template url for opening files with this app. The template will contain {ids} and/or {exportIds} to be replaced by the actual file ids. See Open Files for the full documentation.
createUrl
string
The url to create a new file with this app.
createInFolderTemplate
string
The template url to create a new file with this app in a given folder. The template will contain {folderId} to be replaced by the folder to create the new file in.
supportsOfflineCreate
boolean
Whether this app supports creating new files when offline.
hasDriveWideScope
boolean
Whether the app has drive-wide scope. An app with drive-wide scope can access all files in the user's drive.
Methods
get
Gets a specific app.
list
Lists a user's installed apps.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-23 UTC."],[],[]]
