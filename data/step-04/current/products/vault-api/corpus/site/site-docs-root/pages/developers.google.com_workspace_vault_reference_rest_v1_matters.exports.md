---
title: "REST Resource: matters.exports \_|\_ Google Vault \_|\_ Google for Developers"
url: https://developers.google.com/workspace/vault/reference/rest/v1/matters.exports
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/vault/guides
source_metadata:
  url: https://developers.google.com/workspace/vault/reference/rest/v1/matters.exports
  title: "REST Resource: matters.exports \_|\_ Google Vault \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Vault
Reference
Send feedback
REST Resource: matters.exports
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Export
JSON representation
UserInfo
JSON representation
ExportOptions
JSON representation
MailExportOptions
JSON representation
ExportFormat
GroupsExportOptions
JSON representation
DriveExportOptions
JSON representation
HangoutsChatExportOptions
JSON representation
VoiceExportOptions
JSON representation
CalendarExportOptions
JSON representation
GeminiExportOptions
JSON representation
ExportRegion
ExportStatus
ExportStats
JSON representation
CloudStorageSink
JSON representation
CloudStorageFile
JSON representation
Methods
Resource: Export
An export.
To work with Vault resources, the account must have the required Vault privileges and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the View All Matters privilege.
JSON representation
{
"id" : string ,
"matterId" : string ,
"parentExportId" : string ,
"name" : string ,
"requester" : {
object ( UserInfo )
} ,
"query" : {
object ( Query )
} ,
"exportOptions" : {
object ( ExportOptions )
} ,
"createTime" : string ,
"status" : enum ( ExportStatus ) ,
"stats" : {
object ( ExportStats )
} ,
"cloudStorageSink" : {
object ( CloudStorageSink )
}
}
Fields
id
string
Output only. The generated export ID.
matterId
string
Output only. The matter ID.
parentExportId
string
Output only. Identifies the parent export that spawned this child export. This is only set on child exports.
name
string
The export name. Don't use special characters (~!$'(),;@:/?) in the name, they can prevent you from downloading exports.
requester
object ( UserInfo )
Output only. The requester of the export.
query
object ( Query )
The query parameters used to create the export.
exportOptions
object ( ExportOptions )
Additional export options.
createTime
string ( Timestamp format)
Output only. The time when the export was created.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
status
enum ( ExportStatus )
Output only. The status of the export.
stats
object ( ExportStats )
Output only. Details about the export progress and size.
Union field export_sink . Export sink type. export_sink can be only one of the following:
cloudStorageSink
object ( CloudStorageSink )
Output only. The sink for export files in Cloud Storage.
UserInfo
User's information.
JSON representation
{
"email" : string ,
"displayName" : string
}
Fields
email
string
The email address of the user.
displayName
string
The displayed name of the user.
ExportOptions
Additional options for exports
JSON representation
{
"region" : enum ( ExportRegion ) ,
"mailOptions" : {
object ( MailExportOptions )
} ,
"groupsOptions" : {
object ( GroupsExportOptions )
} ,
"driveOptions" : {
object ( DriveExportOptions )
} ,
"hangoutsChatOptions" : {
object ( HangoutsChatExportOptions )
} ,
"voiceOptions" : {
object ( VoiceExportOptions )
} ,
"calendarOptions" : {
object ( CalendarExportOptions )
} ,
"geminiOptions" : {
object ( GeminiExportOptions )
}
}
Fields
region
enum ( ExportRegion )
The requested data region for the export.
Union field corpus_export_options . Service-specific options for exports. corpus_export_options can be only one of the following:
mailOptions
object ( MailExportOptions )
Options for Gmail exports.
groupsOptions
object ( GroupsExportOptions )
Options for Groups exports.
driveOptions
object ( DriveExportOptions )
Options for Drive exports.
hangoutsChatOptions
object ( HangoutsChatExportOptions )
Options for Chat exports.
voiceOptions
object ( VoiceExportOptions )
Options for Voice exports.
calendarOptions
object ( CalendarExportOptions )
Option available for Calendar export.
geminiOptions
object ( GeminiExportOptions )
Option available for Gemini export.
MailExportOptions
Options for Gmail exports.
JSON representation
{
"exportFormat" : enum ( ExportFormat ) ,
"showConfidentialModeContent" : boolean ,
"useNewExport" : boolean ,
"exportLinkedDriveFiles" : boolean
}
Fields
exportFormat
enum ( ExportFormat )
The file format for exported messages.
showConfidentialModeContent
boolean
To export confidential mode content, set to true .
useNewExport
boolean
To use the new export system, set to true .
exportLinkedDriveFiles
boolean
Optional. To enable exporting linked Drive files, set to true .
ExportFormat
Export format for messages
Enums
EXPORT_FORMAT_UNSPECIFIED
No export format specified.
MBOX
Export as MBOX. Only available for Gmail, Groups, Hangouts and Voice.
PST
Export as PST. Only available for Gmail, Groups, Hangouts, Voice and Calendar.
ICS
Export as ICS. Only available for Calendar.
XML
Export as XML. Only available for Gemini.
GroupsExportOptions
Options for Groups exports.
JSON representation
{
"exportFormat" : enum ( ExportFormat )
}
Fields
exportFormat
enum ( ExportFormat )
The file format for exported messages.
DriveExportOptions
Options for Drive exports.
JSON representation
{
"includeAccessInfo" : boolean
}
Fields
includeAccessInfo
boolean
To include access level information for users with indirect access to files, set to true .
HangoutsChatExportOptions
Options for Chat exports.
JSON representation
{
"exportFormat" : enum ( ExportFormat )
}
Fields
exportFormat
enum ( ExportFormat )
The file format for exported messages.
VoiceExportOptions
The options for Voice exports.
JSON representation
{
"exportFormat" : enum ( ExportFormat )
}
Fields
exportFormat
enum ( ExportFormat )
The file format for exported text messages.
CalendarExportOptions
The options for Calendar exports.
JSON representation
{
"exportFormat" : enum ( ExportFormat )
}
Fields
exportFormat
enum ( ExportFormat )
The file format for exported text messages.
GeminiExportOptions
The options for Gemini exports.
JSON representation
{
"exportFormat" : enum ( ExportFormat )
}
Fields
exportFormat
enum ( ExportFormat )
The file format for exported messages.
ExportRegion
The data region for the export.
Enums
EXPORT_REGION_UNSPECIFIED
The region is unspecified. Defaults to ANY.
ANY
Any region.
US
United States region.
EUROPE
Europe region.
ExportStatus
The status of the export.
Enums
EXPORT_STATUS_UNSPECIFIED
The status is unspecified.
COMPLETED
The export completed.
FAILED
The export failed.
IN_PROGRESS
The export is in progress.
ExportStats
Progress information for an export.
JSON representation
{
"exportedArtifactCount" : string ,
"totalArtifactCount" : string ,
"sizeInBytes" : string
}
Fields
exportedArtifactCount
string ( int64 format)
The number of messages or files already processed for export.
totalArtifactCount
string ( int64 format)
The number of messages or files to be exported.
sizeInBytes
string ( int64 format)
The size of export in bytes.
CloudStorageSink
Export sink for Cloud Storage files.
JSON representation
{
"files" : [
{
object ( CloudStorageFile )
}
]
}
Fields
files[]
object ( CloudStorageFile )
Output only. The exported files in Cloud Storage.
CloudStorageFile
The export file in Cloud Storage
JSON representation
{
"bucketName" : string ,
"objectName" : string ,
"size" : string ,
"md5Hash" : string
}
Fields
bucketName
string
The name of the Cloud Storage bucket for the export file. You can use this value in the Cloud Storage JSON API or XML API , but not to list the bucket contents. Instead, you can get individual export files by object name.
objectName
string
The name of the Cloud Storage object for the export file. You can use this value in the Cloud Storage JSON API or XML API .
size
string ( int64 format)
The export file size.
md5Hash
string
The md5 hash of the file.
Methods
create
Creates an export.
delete
Deletes an export.
get
Gets an export.
list
Lists details about the exports in the specified matter.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],[]]
