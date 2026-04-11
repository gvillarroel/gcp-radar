---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.650Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Chat API formattedText field"
feature_slug: "chat-api-formattedtext-field"
latest_feature_date: "2023-09-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1"
  - "https://developers.google.com/workspace/chat/api/reference"
keywords:
  - "applications"
  - "so"
  - "formattedtext"
  - "field"
  - "exposes"
  - "chat"
  - "api"
  - "now"
---

# Chat API formattedText field

Product: Chat API
Coverage: LOW

## Step 02 Summary

Chat API now exposes a formattedText field so applications can view text formatting included in messages.

## Extended Definition

Chat API now exposes a formattedText field so applications can view text formatting included in messages.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- [https://developers.google.com/workspace/chat/api/reference](https://developers.google.com/workspace/chat/api/reference)

## Supporting Pages

### REST Resource: spaces.messages \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- To include this field in your request, you must call the Chat API using app authentication and omit the following: Attachments Accessory widgets For details, see Send a message privately . deletionMetadata object ( DeletionMetadata ) Output only.
- JSON representation { "name" : string , "sender" : { object ( User ) } , "createTime" : string , "lastUpdateTime" : string , "deleteTime" : string , "text" : string , "formattedText" : string , "cards" : [ { object ( Card ) } ] , "cardsV2" : [ { object ( CardWithId ) } ] , "annotations" : [ { object ( Annotation ) } ] , "thread" : { object ( Thread ) } , "space" : { object ( Space ) } , "fallbackText" : string , "actionResponse" : { object ( ActionResponse ) } , "argumentText" : string , "slashCommand" : { object ( SlashCommand ) } , "attachment" : [ { object ( Attachment ) } ] , "matchedUrl" : { object ( MatchedUrl ) } , "threadReply" : boolean , "clientAssignedMessageId" : string , "emojiReactionSummaries" : [ { object ( EmojiReactionSummary ) } ] , "privateMessageViewer" : { object ( User ) } , "deletionMetadata" : { object ( DeletionMetadata ) } , "quotedMessageMetadata" : { object ( QuotedMessageMetadata ) } , "attachedGifs" : [ { object ( AttachedGif ) } ] , "accessoryWidgets" : [ { object ( AccessoryWidget ) } ] } Fields name string Identifier.
- JSON representation { "bot" : { object ( User ) } , "type" : enum ( Type ) , "commandName" : string , "commandId" : string , "triggersDialog" : boolean } Fields bot object ( User ) The Chat app whose command was invoked. type enum ( Type ) The type of slash command. commandName string The name of the invoked slash command. commandId string ( int64 format) The command ID of the invoked slash command. triggersDialog boolean Indicates whether the slash command is for a dialog.
- JSON representation { "uri" : string , "richLinkType" : enum ( RichLinkType ) , "driveLinkData" : { object ( DriveLinkData ) } , "chatSpaceLinkData" : { object ( ChatSpaceLinkData ) } , "meetSpaceLinkData" : { object ( MeetSpaceLinkData ) } , "calendarEventLinkData" : { object ( CalendarEventLinkData ) } } Fields uri string The URI of this link. richLinkType enum ( RichLinkType ) The rich link type.

### Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- To include this field in your request, you must call the Chat API using app authentication and omit the following: Attachments Accessory widgets For details, see Send a message privately . deletion metadata DeletionMetadata Output only.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],["The Google Chat API provides a ChatService interface to build apps and integrations, managing spaces, memberships, messages, reactions, attachments, custom emojis, annotations, widgets, and more.
- Supports the following types of authentication : App authentication with administrator approval and one of the following authorization scopes: https://www.googleapis.com/auth/chat.app.spaces.create https://www.googleapis.com/auth/chat.app.spaces User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.spaces.create https://www.googleapis.com/auth/chat.spaces https://www.googleapis.com/auth/chat.import (import mode spaces only) When authenticating as an app, the space.customer field must be set in the request.
- For example, users/123456789 in Chat API represents the same person as the 123456789 Person profile ID in People API. the id for a user in the Admin SDK Directory API. the user's email address can be used as an alias for {user} in API requests.

### Google Chat API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference](https://developers.google.com/workspace/chat/api/reference)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Type, method, and field names Depending on whether you're using client libraries, gRPC, or REST, the type, method, and field names for the Google Chat API vary somewhat: Cloud Client Libraries are arranged by gRPC services and their methods.
- When calling the API, some request or response fields can require a basic understanding of protocol buffer well-known types .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["The Google Chat API offers gRPC and REST interfaces, with corresponding client libraries or the option to create custom ones.
- The Google Chat API is built upon protocol buffers, specifically proto3, which may require a basic understanding for certain request and response fields.

