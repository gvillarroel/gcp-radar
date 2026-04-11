---
title: "REST Resource: customEmojis \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis
  title: "REST Resource: customEmojis \_|\_ Google Chat \_|\_ Google for Developers"
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
REST Resource: customEmojis
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This documentation outlines the CustomEmoji resource, representing a custom emoji within Google Chat, including its properties and JSON representation.
It describes the CustomEmojiPayload , detailing the data required for creating a custom emoji, specifically focusing on image content and filename.
Developers can utilize the provided methods to create, delete, retrieve, or list custom emojis using the Google Chat API.
These functionalities are currently part of the Google Workspace Developer Preview Program, granting early access for testing and development purposes.
Resource: CustomEmoji
JSON representation
CustomEmojiPayload
JSON representation
Methods
Resource: CustomEmoji
Represents a custom emoji .
JSON representation
{
"name" : string ,
"uid" : string ,
"emojiName" : string ,
"temporaryImageUri" : string ,
"payload" : {
object ( CustomEmojiPayload )
}
}
Fields
name
string
Identifier. The resource name of the custom emoji, assigned by the server.
Format: customEmojis/{customEmoji}
uid
string
Output only. Unique key for the custom emoji resource.
emojiName
string
Optional. Immutable. User-provided name for the custom emoji, which is unique within the organization.
Required when the custom emoji is created, output only otherwise.
Emoji names must start and end with colons, must be lowercase and can only contain alphanumeric characters, hyphens, and underscores. Hyphens and underscores should be used to separate words and cannot be used consecutively.
Example: :valid-emoji-name:
temporaryImageUri
string
Output only. A temporary image URL for the custom emoji, valid for at least 10 minutes. Note that this is not populated in the response when the custom emoji is created.
payload
object ( CustomEmojiPayload )
Optional. Input only. Payload data. Required when the custom emoji is created.
CustomEmojiPayload
Payload data for the custom emoji.
JSON representation
{
"fileContent" : string ,
"filename" : string
}
Fields
fileContent
string ( bytes format)
Required. Input only. The image used for the custom emoji.
The payload must be under 256 KB and the dimension of the image must be square and between 64 and 500 pixels. The restrictions are subject to change.
filename
string
Required. Input only. The image file name.
Supported file extensions: .png , .jpg , .gif .
Methods
create
Creates a custom emoji.
delete
Deletes a custom emoji.
get
Returns details about a custom emoji.
list
Lists custom emojis visible to the authenticated user.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-29 UTC."],[],["Custom emojis, part of the Google Workspace Developer Preview, are defined by a name, unique identifier (`uid`), and user-provided `emojiName` that must be enclosed in colons. A `temporaryImageUri` is provided. The `payload` contains the image's `fileContent` (under 256 KB) and `filename` (.png, .jpg, .gif). Key actions include: creating custom emojis, deleting them, retrieving details, and listing all visible custom emojis. All these actions are performed through the corresponding methods.\n"]]
