---
title: "Method: spaces.messages.reactions.delete \_|\_ Google Chat \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/delete
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/delete
  title: "Method: spaces.messages.reactions.delete \_|\_ Google Chat \_|\_ Google\
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
Method: spaces.messages.reactions.delete
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Deletes a reaction, specifically unicode emojis, from a message within Google Chat spaces.
Requires user authentication and utilizes a DELETE HTTP request with specific path parameters to target the reaction.
The request body should be empty, and a successful deletion results in an empty response body.
Authorization is necessary, using one of the specified OAuth scopes for chat import, messages, or message reactions.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Try it!
Deletes a reaction to a message. For an example, see Delete a reaction .
Requires user authentication with one of the following authorization scopes :
https://www.googleapis.com/auth/chat.messages.reactions
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.import (import mode spaces only)
HTTP request
DELETE https://chat.googleapis.com/v1/{name=spaces/*/messages/*/reactions/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. Name of the reaction to delete.
Format: spaces/{space}/messages/{message}/reactions/{reaction}
Request body
The request body must be empty.
Response body
If successful, the response body is an empty JSON object.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.import
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.messages.reactions
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-07 UTC."],[],["This document outlines the process for deleting a reaction to a message using the Google Chat API. The process involves sending a `DELETE` HTTP request to a specific URL, structured using gRPC Transcoding syntax. The URL includes a required `name` path parameter specifying the reaction to delete. The request body must be empty. A successful operation returns an empty JSON object. Authorization requires one of three listed OAuth scopes. The action only supports unicode emojis.\n"]]
