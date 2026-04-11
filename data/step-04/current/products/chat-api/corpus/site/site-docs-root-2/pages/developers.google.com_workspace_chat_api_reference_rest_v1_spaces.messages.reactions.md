---
title: "REST Resource: spaces.messages.reactions \_|\_ Google Chat \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions
  title: "REST Resource: spaces.messages.reactions \_|\_ Google Chat \_|\_ Google\
    \ for Developers"
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
REST Resource: spaces.messages.reactions
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A Reaction represents a response to a message, containing information about the user, the emoji used, and a unique identifier.
Reactions can be created, deleted, and listed using the provided API methods.
The user field is output-only and indicates who created the reaction, while the emoji field is required and specifies the emoji used.
Resource: Reaction
JSON representation
Methods
Resource: Reaction
A reaction to a message.
JSON representation
{
"name" : string ,
"user" : {
object ( User )
} ,
"emoji" : {
object ( Emoji )
}
}
Fields
name
string
Identifier. The resource name of the reaction.
Format: spaces/{space}/messages/{message}/reactions/{reaction}
user
object ( User )
Output only. The user who created the reaction.
emoji
object ( Emoji )
Required. The emoji used in the reaction.
Methods
create
Creates a reaction and adds it to a message.
delete
Deletes a reaction to a message.
list
Lists reactions to a message.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-11-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-11-14 UTC."],[],["Reactions to messages are identified by a string name and include the user who created them and the emoji used. JSON format represents reactions with these fields. Core actions include: creating a reaction, which adds it to a message; deleting a reaction; and listing all reactions associated with a specific message. The identifier of a reaction follows a specific string pattern, specifying the space, message, and reaction involved.\n"]]
