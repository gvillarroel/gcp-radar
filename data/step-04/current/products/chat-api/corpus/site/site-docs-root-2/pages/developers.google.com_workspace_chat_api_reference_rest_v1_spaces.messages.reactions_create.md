---
title: "Method: spaces.messages.reactions.create \_|\_ Google Chat \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create
  title: "Method: spaces.messages.reactions.create \_|\_ Google Chat \_|\_ Google\
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
Method: spaces.messages.reactions.create
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Creates a reaction and adds it to a Google Chat message using unicode emojis.
Requires user authentication and authorization with specific scopes for accessing and modifying chat messages.
The API endpoint uses a POST request to https://chat.googleapis.com/v1/{parent=spaces/*/messages/*}/reactions with path and request body parameters to specify the message and reaction.
A successful response returns the newly created reaction object.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Try it!
Creates a reaction and adds it to a message. For an example, see Add a reaction to a message .
Requires user authentication with one of the following authorization scopes :
https://www.googleapis.com/auth/chat.messages.reactions.create
https://www.googleapis.com/auth/chat.messages.reactions
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.import (import mode spaces only)
HTTP request
POST https://chat.googleapis.com/v1/{parent=spaces/*/messages/*}/reactions
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The message where the reaction is created.
Format: spaces/{space}/messages/{message}
Request body
The request body contains an instance of Reaction .
Response body
If successful, the response body contains a newly created instance of Reaction .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.import
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.messages.reactions
https://www.googleapis.com/auth/chat.messages.reactions.create
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-07 UTC."],[],["This document details the process of creating a reaction to a message using an HTTP POST request. The URL structure requires a parent path parameter specifying the message. The request body should contain a \"Reaction\" instance, and the successful response returns a new \"Reaction\" instance. User authentication and one of four OAuth scopes are required for authorization. Only Unicode emojis can be used as reactions. The process utilizes gRPC Transcoding.\n"]]
