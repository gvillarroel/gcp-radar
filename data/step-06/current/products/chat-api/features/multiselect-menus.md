---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.254Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Multiselect menus"
feature_slug: "multiselect-menus"
latest_feature_date: "2023-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages"
keywords:
  - "multiselect"
  - "menus"
  - "cards"
  - "dialogs"
  - "selecting"
  - "workspace"
  - "users"
  - "spaces"
---

# Multiselect menus

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Cards and dialogs support multiselect menus for selecting Google Workspace users, spaces, or external data items; Cards and dialogs support multiselect menus for selecting Google Workspace users, spaces, or external data items.

## Extended Definition

Cards and dialogs support multiselect menus for selecting Google Workspace users, spaces, or external data items; Cards and dialogs support multiselect menus for selecting Google Workspace users, spaces, or external data items.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)

## Supporting Pages

### Cards v2 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- Source ID: `site-api-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To dynamically populate items for a multiselect menu, use one of the following types of data sources: Google Workspace data: Items are populated using data from Google Workspace, such as Google Workspace users or Google Chat spaces.
- The data source. data source can be only one of the following: commonDataSource enum ( CommonDataSource ) A data source shared by all Google Workspace applications, such as users in a Google Workspace organization. hostAppDataSource object ( HostAppDataSourceMarkup ) A data source that's unique to a Google Workspace host application, such spaces in Google Chat.
- To dynamically populate items for a dropdown menu, use one of the following types of data sources: Google Workspace data: Items are populated using data from Google Workspace, such as Google Workspace users or Google Chat spaces.
- This limit applies to both card messages and dialogs in Google Chat apps, and to cards in Google Workspace add-ons.

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To dynamically populate items for a multiselect menu, use one of the following types of data sources: Google Workspace data: Items are populated using data from Google Workspace, such as Google Workspace users or Google Chat spaces.
- Cards in Google Chat and Workspace add-ons can utilize data sources, like users or spaces, using PlatformDataSource and CommonDataSource components within selection inputs.
- The data source. data source can be only one of the following: common data source CommonDataSource A data source shared by all Google Workspace applications, such as users in a Google Workspace organization. host app data source HostAppDataSourceMarkup A data source that's unique to a Google Workspace host application, such spaces in Google Chat.
- To dynamically populate items for a dropdown menu, use one of the following types of data sources: Google Workspace data: Items are populated using data from Google Workspace, such as Google Workspace users or Google Chat spaces.

### REST Resource: spaces.messages \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- Source ID: `site-docs-root-2`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Methods create Creates a message in a Google Chat space. delete Deletes a message. get Returns details about a message. list Lists messages in a space that the caller is a member of, including messages from blocked members and spaces. patch Updates a message. replaceCards Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
- Home Google Workspace Google Chat Reference Send feedback REST Resource: spaces.messages Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag Google Chat messages are the fundamental units of communication within spaces, containing rich content like text, cards, and attachments.
- JSON representation { "name" : string , "sender" : { object ( User ) } , "createTime" : string , "lastUpdateTime" : string , "deleteTime" : string , "text" : string , "formattedText" : string , "cards" : [ { object ( Card ) } ] , "cardsV2" : [ { object ( CardWithId ) } ] , "annotations" : [ { object ( Annotation ) } ] , "thread" : { object ( Thread ) } , "space" : { object ( Space ) } , "fallbackText" : string , "actionResponse" : { object ( ActionResponse ) } , "argumentText" : string , "slashCommand" : { object ( SlashCommand ) } , "attachment" : [ { object ( Attachment ) } ] , "matchedUrl" : { object ( MatchedUrl ) } , "threadReply" : boolean , "clientAssignedMessageId" : string , "emojiReactionSummaries" : [ { object ( EmojiReactionSummary ) } ] , "privateMessageViewer" : { object ( User ) } , "deletionMetadata" : { object ( DeletionMetadata ) } , "quotedMessageMetadata" : { object ( QuotedMessageMetadata ) } , "attachedGifs" : [ { object ( AttachedGif ) } ] , "accessoryWidgets" : [ { object ( AccessoryWidget ) } ] } Fields name string Identifier.

