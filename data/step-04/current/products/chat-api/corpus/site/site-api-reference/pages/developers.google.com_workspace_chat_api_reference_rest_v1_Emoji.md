---
title: "Emoji \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/Emoji
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/Emoji
  title: "Emoji \_|\_ Google Chat \_|\_ Google for Developers"
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
Emoji
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
ReactionEmoji resource represents an emoji used as a reaction to a message.
Emoji content can be represented either by a unicode string for basic emojis or a CustomEmoji object for custom emojis.
The content field is required and determines the type of emoji being used.
JSON representation
An emoji that is used as a reaction to a message.
JSON representation
{
"unicode" : string ,
"customEmoji" : {
object ( CustomEmoji )
}
}
Fields
Union field content . Required. The content of the emoji. content can be only one of the following:
unicode
string
Optional. A basic emoji represented by a unicode string.
customEmoji
object ( CustomEmoji )
A custom emoji.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],["The core content defines a message reaction emoji, which can be represented in JSON. The `content` field is mandatory and can be either a `unicode` string for basic emojis or a `customEmoji` object for custom emojis. `unicode` is optional and represents a standard emoji, while `customEmoji` is output-only and links to a separate definition of custom emojis. Only one of the content type is accepted.\n"]]
