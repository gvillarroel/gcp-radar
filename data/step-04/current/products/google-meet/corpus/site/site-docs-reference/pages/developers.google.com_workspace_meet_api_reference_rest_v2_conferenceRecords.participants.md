---
title: "REST Resource: conferenceRecords.participants \_|\_ Google Meet \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/meet/api/reference/rest/v2
source_metadata:
  url: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants
  title: "REST Resource: conferenceRecords.participants \_|\_ Google Meet \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Meet
Reference
Send feedback
REST Resource: conferenceRecords.participants
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Participant
JSON representation
SignedinUser
JSON representation
AnonymousUser
JSON representation
PhoneUser
JSON representation
Methods
Resource: Participant
User who attended or is attending a conference.
JSON representation
{
"name" : string ,
"earliestStartTime" : string ,
"latestEndTime" : string ,
"signedinUser" : {
object ( SignedinUser )
} ,
"anonymousUser" : {
object ( AnonymousUser )
} ,
"phoneUser" : {
object ( PhoneUser )
}
}
Fields
name
string
Output only. Resource name of the participant. Format: conferenceRecords/{conferenceRecord}/participants/{participant}
earliestStartTime
string ( Timestamp format)
Output only. Time when the participant first joined the meeting.
latestEndTime
string ( Timestamp format)
Output only. Time when the participant left the meeting for the last time. This can be null if it's an active meeting.
Union field user .
user can be only one of the following:
signedinUser
object ( SignedinUser )
Signed-in user.
anonymousUser
object ( AnonymousUser )
Anonymous user.
phoneUser
object ( PhoneUser )
User calling from their phone.
SignedinUser
A signed-in user can be: a) An individual joining from a personal computer, mobile device, or through companion mode. b) A robot account used by conference room devices.
JSON representation
{
"user" : string ,
"displayName" : string
}
Fields
user
string
Output only. Unique ID for the user. Interoperable with Admin SDK API and People API. Format: users/{user}
displayName
string
Output only. For a personal device, it's the user's first name and last name. For a robot account, it's the administrator-specified device name. For example, "Altostrat Room".
AnonymousUser
User who joins anonymously (meaning not signed into a Google Account).
JSON representation
{
"displayName" : string
}
Fields
displayName
string
Output only. User provided name when they join a conference anonymously.
PhoneUser
User dialing in from a phone where the user's identity is unknown because they haven't signed in with a Google Account.
JSON representation
{
"displayName" : string
}
Fields
displayName
string
Output only. Partially redacted user's phone number when calling.
Methods
get
Gets a participant by participant ID.
list
Lists the participants in a conference record.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
