---
title: "User \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/User
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/User
  title: "User \_|\_ Google Chat \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Reference
Send feedback
User
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The User resource represents a Google Chat user, which can be a human or a Chat app.
A user's resource name is formatted as users/{user} , with various identifiers like email or People API ID usable for {user} .
When a Chat app authenticates as a user, the API response for the User resource only includes the name and type fields.
The type field indicates whether the user is HUMAN or BOT , while isAnonymous signifies a deleted or invisible profile.
The displayName and domainId provide additional user information but might not be populated in all contexts.
JSON representation
Type
A user in Google Chat. When returned as an output from a request, if your Chat app authenticates as a user , the output for a User resource only populates the user's name and type .
JSON representation
{
"name" : string ,
"displayName" : string ,
"domainId" : string ,
"type" : enum ( Type ) ,
"isAnonymous" : boolean
}
Fields
name
string
Resource name for a Google Chat user .
Format: users/{user} . users/app can be used as an alias for the calling app bot user.
For human users , {user} is the same user identifier as:
the id for the Person in the People API. For example, users/123456789 in Chat API represents the same person as the 123456789 Person profile ID in People API.
the id for a user in the Admin SDK Directory API.
the user's email address can be used as an alias for {user} in API requests. For example, if the People API Person profile ID for user@example.com is 123456789 , you can use users/user@example.com as an alias to reference users/123456789 . Only the canonical resource name (for example users/123456789 ) will be returned from the API.
displayName
string
Output only. The user's display name.
domainId
string
Unique identifier of the user's Google Workspace domain.
type
enum ( Type )
User type.
isAnonymous
boolean
Output only. When true , the user is deleted or their profile is not visible.
Type
Enums
TYPE_UNSPECIFIED
Default value for the enum. DO NOT USE.
HUMAN
Human user.
BOT
Chat app user.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-02-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-02-27 UTC."],[],["The JSON representation defines a user with fields including `name` (resource identifier), `displayName` (user's name), `domainId` (Google Workspace domain), `type` (user or bot), and `isAnonymous` (deleted/hidden profile status). The `name` field uses aliases like email or People API ID. User types include `HUMAN` and `BOT`. Authenticated Chat app users only show `name` and `type` in request outputs. `type` is an enum with possible values like `HUMAN` and `BOT`.\n"]]
