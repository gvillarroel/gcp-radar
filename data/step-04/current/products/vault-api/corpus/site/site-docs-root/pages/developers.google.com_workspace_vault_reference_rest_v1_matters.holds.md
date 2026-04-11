---
title: "REST Resource: matters.holds \_|\_ Google Vault \_|\_ Google for Developers"
url: https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/vault/guides
source_metadata:
  url: https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds
  title: "REST Resource: matters.holds \_|\_ Google Vault \_|\_ Google for Developers"
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
REST Resource: matters.holds
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Hold
JSON representation
HeldOrgUnit
JSON representation
CorpusQuery
JSON representation
HeldDriveQuery
JSON representation
HeldMailQuery
JSON representation
HeldGroupsQuery
JSON representation
HeldHangoutsChatQuery
JSON representation
HeldVoiceQuery
JSON representation
HeldCalendarQuery
Methods
Resource: Hold
A hold. A hold prevents the specified Google Workspace service from purging data for specific accounts or all members of an organizational unit.
To work with Vault resources, the account must have the required Vault privileges and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the View All Matters privilege.
JSON representation
{
"holdId" : string ,
"name" : string ,
"updateTime" : string ,
"accounts" : [
{
object ( HeldAccount )
}
] ,
"orgUnit" : {
object ( HeldOrgUnit )
} ,
"corpus" : enum ( CorpusType ) ,
"query" : {
object ( CorpusQuery )
}
}
Fields
holdId
string
The unique immutable ID of the hold. Assigned during creation.
name
string
The name of the hold.
updateTime
string ( Timestamp format)
The last time this hold was modified.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
accounts[]
object ( HeldAccount )
If set, the hold applies to the specified accounts and orgUnit must be empty.
orgUnit
object ( HeldOrgUnit )
If set, the hold applies to all members of the organizational unit and accounts must be empty. This property is mutable. For Groups holds, set accounts .
corpus
enum ( CorpusType )
The service to be searched.
query
object ( CorpusQuery )
Service-specific options. If set, CorpusQuery must match CorpusType .
HeldOrgUnit
The organizational unit covered by a hold. This structure is immutable.
JSON representation
{
"orgUnitId" : string ,
"holdTime" : string
}
Fields
orgUnitId
string
The organizational unit's immutable ID as provided by the Admin SDK .
holdTime
string ( Timestamp format)
When the organizational unit was put on hold. This property is immutable.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
CorpusQuery
Service-specific options for holds.
JSON representation
{
"driveQuery" : {
object ( HeldDriveQuery )
} ,
"mailQuery" : {
object ( HeldMailQuery )
} ,
"groupsQuery" : {
object ( HeldGroupsQuery )
} ,
"hangoutsChatQuery" : {
object ( HeldHangoutsChatQuery )
} ,
"voiceQuery" : {
object ( HeldVoiceQuery )
} ,
"calendarQuery" : {
object ( HeldCalendarQuery )
}
}
Fields
Union field corpus_query . If set, this must match the service type. corpus_query can be only one of the following:
driveQuery
object ( HeldDriveQuery )
Service-specific options for Drive holds. If set, CorpusType must be DRIVE .
mailQuery
object ( HeldMailQuery )
Service-specific options for Gmail holds. If set, CorpusType must be MAIL .
groupsQuery
object ( HeldGroupsQuery )
Service-specific options for Groups holds. If set, CorpusType must be GROUPS .
hangoutsChatQuery
object ( HeldHangoutsChatQuery )
Service-specific options for Chat holds. If set, CorpusType must be HANGOUTS_CHAT .
voiceQuery
object ( HeldVoiceQuery )
Service-specific options for Voice holds. If set, CorpusType must be VOICE .
calendarQuery
object ( HeldCalendarQuery )
Service-specific options for Calendar holds. If set, CorpusType must be CALENDAR .
HeldDriveQuery
Options for Drive holds.
JSON representation
{
"includeTeamDriveFiles" : boolean ,
"includeSharedDriveFiles" : boolean
}
Fields
includeTeamDriveFiles (deprecated)
boolean
This field was deprecated on June 10, 2019. Please use includeSharedDrives instead. Support for this field will end on June 1, 2020.
To include files in Team Drives in the hold, set to true .
includeSharedDriveFiles
boolean
To include files in shared drives in the hold, set to true .
HeldMailQuery
Query options for Gmail holds.
JSON representation
{
"terms" : string ,
"startTime" : string ,
"endTime" : string
}
Fields
terms
string
The search operators used to refine the messages covered by the hold.
startTime
string ( Timestamp format)
The start time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
The end time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
HeldGroupsQuery
Query options for group holds.
JSON representation
{
"terms" : string ,
"startTime" : string ,
"endTime" : string
}
Fields
terms
string
The search operators used to refine the messages covered by the hold.
startTime
string ( Timestamp format)
The start time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
The end time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
HeldHangoutsChatQuery
Options for Chat holds.
JSON representation
{
"includeRooms" : boolean
}
Fields
includeRooms
boolean
To include messages in Chat spaces the user was a member of, set to true .
HeldVoiceQuery
Options for Voice holds.
JSON representation
{
"coveredData" : [
enum ( VoiceCoveredData )
]
}
Fields
coveredData[]
enum ( VoiceCoveredData )
A list of data types covered by the hold. Should be non-empty. Order does not matter and duplicates are ignored.
HeldCalendarQuery
This type has no fields.
Options for Calendar holds.
Methods
addHeldAccounts
Adds accounts to a hold.
create
Creates a hold in the specified matter.
delete
Removes the specified hold and releases the accounts or organizational unit covered by the hold.
get
Gets the specified hold.
list
Lists the holds in a matter.
removeHeldAccounts
Removes the specified accounts from a hold.
update
Updates the scope (organizational unit or accounts) and query parameters of a hold.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],[]]
