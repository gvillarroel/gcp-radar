---
title: "Query \_|\_ Google Vault \_|\_ Google for Developers"
url: https://developers.google.com/workspace/vault/reference/rest/v1/Query
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/vault/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/vault/reference/rest/v1/Query
  title: "Query \_|\_ Google Vault \_|\_ Google for Developers"
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
Query
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
DataScope
SearchMethod
AccountInfo
JSON representation
OrgUnitInfo
JSON representation
SharedDriveInfo
JSON representation
HangoutsChatInfo
JSON representation
SitesUrlInfo
JSON representation
DriveDocumentInfo
JSON representation
DriveDocumentIds
JSON representation
TeamDriveInfo
JSON representation
MailOptions
JSON representation
ClientSideEncryptedOption
DriveOptions
JSON representation
SharedDrivesOption
HangoutsChatOptions
JSON representation
VoiceOptions
JSON representation
CalendarOptions
JSON representation
AttendeeResponse
GeminiOptions
The query definition used for search and export.
JSON representation
{
"corpus" : enum ( CorpusType ) ,
"dataScope" : enum ( DataScope ) ,
"searchMethod" : enum ( SearchMethod ) ,
"method" : enum ( SearchMethod ) ,
"terms" : string ,
"startTime" : string ,
"endTime" : string ,
"teamDriveInfo" : {
object ( TeamDriveInfo )
} ,
"timeZone" : string ,
"accountInfo" : {
object ( AccountInfo )
} ,
"orgUnitInfo" : {
object ( OrgUnitInfo )
} ,
"sharedDriveInfo" : {
object ( SharedDriveInfo )
} ,
"hangoutsChatInfo" : {
object ( HangoutsChatInfo )
} ,
"sitesUrlInfo" : {
object ( SitesUrlInfo )
} ,
"driveDocumentInfo" : {
object ( DriveDocumentInfo )
}
"mailOptions" : {
object ( MailOptions )
} ,
"driveOptions" : {
object ( DriveOptions )
} ,
"hangoutsChatOptions" : {
object ( HangoutsChatOptions )
} ,
"voiceOptions" : {
object ( VoiceOptions )
} ,
"calendarOptions" : {
object ( CalendarOptions )
} ,
"geminiOptions" : {
object ( GeminiOptions )
}
}
Fields
corpus
enum ( CorpusType )
The Google Workspace service to search.
dataScope
enum ( DataScope )
The data source to search.
searchMethod (deprecated)
enum ( SearchMethod )
This field was deprecated on June 10, 2019. Please use method instead. Support for this field will end on June 1, 2020.
The search method to use.
method
enum ( SearchMethod )
The entity to search. This field replaces searchMethod to support shared drives. When searchMethod is TEAM_DRIVE , the response of this field is SHARED_DRIVE .
terms
string
Service-specific search operators to filter search results.
startTime
string ( Timestamp format)
The start time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
The end time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
teamDriveInfo (deprecated)
object ( TeamDriveInfo )
This field was deprecated on June 10, 2019. Please use SharedDriveInfo instead. Support for this field will end on June 1, 2020.
Required when SearchMethod is TEAM_DRIVE .
timeZone
string
The time zone name. It should be an IANA TZ name, such as "America/Los_Angeles". For a list of time zone names, see Time Zone . For more information about how Vault uses time zones, see the Vault help center .
Union field search_method_field . When required, the details of the entities to search search_method_field can be only one of the following:
accountInfo
object ( AccountInfo )
Required when SearchMethod is ACCOUNT .
orgUnitInfo
object ( OrgUnitInfo )
Required when SearchMethod is ORG_UNIT .
sharedDriveInfo
object ( SharedDriveInfo )
Required when SearchMethod is SHARED_DRIVE .
hangoutsChatInfo
object ( HangoutsChatInfo )
Required when SearchMethod is ROOM . (read-only)
sitesUrlInfo
object ( SitesUrlInfo )
Required when SearchMethod is SITES_URL .
driveDocumentInfo
object ( DriveDocumentInfo )
Required when SearchMethod is DRIVE_DOCUMENT .
Union field corpus_options_field . Additional search options for specific services. corpus_options_field can be only one of the following:
mailOptions
object ( MailOptions )
Set Gmail search-specific options.
driveOptions
object ( DriveOptions )
Set Drive search-specific options.
hangoutsChatOptions
object ( HangoutsChatOptions )
Set Chat search-specific options. (read-only)
voiceOptions
object ( VoiceOptions )
Set Voice search-specific options.
calendarOptions
object ( CalendarOptions )
Set Calendar search-specific options.
geminiOptions
object ( GeminiOptions )
Set Gemini search-specific options.
DataScope
The source of data to search.
Enums
DATA_SCOPE_UNSPECIFIED
No data source specified.
ALL_DATA
All available data.
HELD_DATA
Only data on hold.
UNPROCESSED_DATA
Only data not yet processed by Vault. (Gmail and Groups only)
SearchMethod
The entity type for the search.
Enums
SEARCH_METHOD_UNSPECIFIED
A search method must be specified or else it is rejected.
ACCOUNT
Search the data of the accounts specified in AccountInfo .
ORG_UNIT
Search the data of all accounts in the organizational unit specified in OrgUnitInfo .
TEAM_DRIVE
Search the data in the Team Drive specified in teamDriveInfo .
This field was deprecated on June 10, 2019. Please use SHARED_DRIVE instead. Support for this field will end on June 1, 2020.
ENTIRE_ORG
Search the data of all accounts in the organization. Supported only for Gmail. When specified, you don't need to specify AccountInfo or OrgUnitInfo .
ROOM
Search messages in the Chat spaces specified in HangoutsChatInfo .
SITES_URL
Search for sites by the published site URLs specified in SitesUrlInfo .
SHARED_DRIVE
Search the files in the shared drives specified in SharedDriveInfo .
DRIVE_DOCUMENT
Retrieve the documents specified in DriveDocumentInfo.
AccountInfo
The accounts to search
JSON representation
{
"emails" : [
string
]
}
Fields
emails[]
string
A set of accounts to search.
OrgUnitInfo
The organizational unit to search
JSON representation
{
"orgUnitId" : string
}
Fields
orgUnitId
string
The name of the organizational unit to search, as provided by the Admin SDK Directory API .
SharedDriveInfo
The shared drives to search
JSON representation
{
"sharedDriveIds" : [
string
]
}
Fields
sharedDriveIds[]
string
A list of shared drive IDs, as provided by the Drive API .
HangoutsChatInfo
The Chat spaces to search
JSON representation
{
"roomId" : [
string
]
}
Fields
roomId[]
string
A list of Chat spaces IDs, as provided by the Chat API . There is a limit of exporting from 500 Chat spaces per request.
SitesUrlInfo
The published site URLs of new Google Sites to search
JSON representation
{
"urls" : [
string
]
}
Fields
urls[]
string
A list of published site URLs.
DriveDocumentInfo
The Drive documents to search.
JSON representation
{
"documentIds" : {
object ( DriveDocumentIds )
}
}
Fields
Union field identifier . The format to retrieve the Drive documents. identifier can be only one of the following:
documentIds
object ( DriveDocumentIds )
Specify Drive documents by document ID.
DriveDocumentIds
Specify Drive documents by document ID.
JSON representation
{
"ids" : [
string
]
}
Fields
ids[]
string
Required. A list of Drive document IDs.
TeamDriveInfo
This field was deprecated on June 10, 2019. Please use SharedDriveInfo instead. Support for this field will end on June 1, 2020.
Team Drives to search
JSON representation
{
"teamDriveIds" : [
string
]
}
Fields
teamDriveIds[] (deprecated)
string
This field was deprecated on June 10, 2019. Please use sharedDriveIds instead. Support for this field will end on June 1, 2020.
List of Team Drive IDs, as provided by the Drive API .
MailOptions
Additional options for Gmail search
JSON representation
{
"excludeDrafts" : boolean ,
"clientSideEncryptedOption" : enum ( ClientSideEncryptedOption )
}
Fields
excludeDrafts
boolean
Set to true to exclude drafts.
clientSideEncryptedOption
enum ( ClientSideEncryptedOption )
Specifies whether the results should include encrypted content, unencrypted content, or both. Defaults to including both.
ClientSideEncryptedOption
If your organization uses Google Workspace Client-side encryption , the encryption status of content
Enums
CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED
Encryption status unspecified. Results include both client-side encrypted and non-encrypted content.
CLIENT_SIDE_ENCRYPTED_OPTION_ANY
Include both client-side encrypted and unencrypted content in results.
CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED
Include client-side encrypted content only.
CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED
Include unencrypted content only.
DriveOptions
Additional options for Drive search.
JSON representation
{
"versionDate" : string ,
"includeTeamDrives" : boolean ,
"includeSharedDrives" : boolean ,
"clientSideEncryptedOption" : enum ( ClientSideEncryptedOption ) ,
"sharedDrivesOption" : enum ( SharedDrivesOption )
}
Fields
versionDate
string ( Timestamp format)
Search the current version of the Drive file, but export the contents of the last version saved before 12:00 AM UTC on the specified date. Enter the date in UTC.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
includeTeamDrives (deprecated)
boolean
This field was deprecated on June 10, 2019. Please use includeSharedDrives instead. Support for this field will end on June 1, 2020.
Set to true to include Team Drive.
includeSharedDrives (deprecated)
boolean
This field was deprecated on May 27, 2025. Please use sharedDrivesOption instead. Support for this field will end on May 27, 2026.
Set to true to include shared drives.
clientSideEncryptedOption
enum ( ClientSideEncryptedOption )
Set whether the results include only content encrypted with Google Workspace Client-side encryption content, only unencrypted content, or both. Defaults to both. Currently supported for Drive.
sharedDrivesOption
enum ( SharedDrivesOption )
Optional. Options to include or exclude documents in shared drives. We recommend using this field over includeSharedDrives. This field overrides includeSharedDrives and includeTeamDrives when set.
SharedDrivesOption
Option on the type of shared drive documents to include.
Enums
SHARED_DRIVES_OPTION_UNSPECIFIED
No shared drive option specified.
NOT_INCLUDED
If a resource is in a shared drive, it isn't included in the search.
INCLUDED_IF_ACCOUNT_IS_NOT_A_MEMBER
Shared drive resources are only included in instances where the account is a collaborator on a resource but they are not a member of the shared drive. This maps to the "Included only if documents shared directly (not due to shared drive membership)" option in the Vault UI. (Previously "includeSharedDrives" off)
INCLUDED
Resources in shared drives are included in the search. (Previously "includeSharedDrives" on)
HangoutsChatOptions
Additional options for Google Chat search
JSON representation
{
"includeRooms" : boolean
}
Fields
includeRooms
boolean
For searches by account or organizational unit, set to true to include rooms.
VoiceOptions
Additional options for Voice search
JSON representation
{
"coveredData" : [
enum ( VoiceCoveredData )
]
}
Fields
coveredData[]
enum ( VoiceCoveredData )
Datatypes to search
CalendarOptions
Additional options for Calendar search
JSON representation
{
"locationQuery" : [
string
] ,
"peopleQuery" : [
string
] ,
"minusWords" : [
string
] ,
"responseStatuses" : [
enum ( AttendeeResponse )
] ,
"versionDate" : string
}
Fields
locationQuery[]
string
Matches only those events whose location contains all of the words in the given set. If the string contains quoted phrases, this method only matches those events whose location contain the exact phrase. Entries in the set are considered in "and".
Word splitting example: ["New Zealand"] vs ["New","Zealand"] "New Zealand": matched by both "New and better Zealand": only matched by the later
peopleQuery[]
string
Matches only those events whose attendees contain all of the words in the given set. Entries in the set are considered in "and".
minusWords[]
string
Matches only those events that do not contain any of the words in the given set in title, description, location, or attendees. Entries in the set are considered in "or".
responseStatuses[]
enum ( AttendeeResponse )
Matches only events for which the custodian gave one of these responses. If the set is empty or contains ATTENDEE_RESPONSE_UNSPECIFIED there will be no filtering on responses.
versionDate
string ( Timestamp format)
Search the current version of the Calendar event, but export the contents of the last version saved before 12:00 AM UTC on the specified date. Enter the date in UTC.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
AttendeeResponse
User response to an invitation.
Enums
ATTENDEE_RESPONSE_UNSPECIFIED
Attendee response unspecified. If this is set no filtering on responses will be done, all other attendee responses that are part of the query options are ignored.
ATTENDEE_RESPONSE_NEEDS_ACTION
The participant has been invited but has not responded yet.
ATTENDEE_RESPONSE_ACCEPTED
The participant plans to attend.
ATTENDEE_RESPONSE_DECLINED
The participant does not plan to attend.
ATTENDEE_RESPONSE_TENTATIVE
The participant expects to possibly attend.
GeminiOptions
This type has no fields.
Additional options for Gemini search
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],[]]
