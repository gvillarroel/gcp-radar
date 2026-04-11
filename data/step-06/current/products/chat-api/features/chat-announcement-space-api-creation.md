---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.602Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Chat announcement space API creation"
feature_slug: "chat-announcement-space-api-creation"
latest_feature_date: "2024-10-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces"
keywords:
  - "generally"
  - "provides"
  - "announcement"
  - "available"
  - "creation"
  - "space"
  - "chat"
  - "api"
---

# Chat announcement space API creation

Product: Chat API
Coverage: LOW

## Step 02 Summary

Provides generally available support in Chat API for creating announcement spaces.

## Extended Definition

Provides generally available support in Chat API for creating announcement spaces.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)

## Supporting Pages

### Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],["The Google Chat API provides a ChatService interface to build apps and integrations, managing spaces, memberships, messages, reactions, attachments, custom emojis, annotations, widgets, and more.
- Supports the following types of authentication : App authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.app.memberships (requires administrator approval ) User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, use admin access is true , and one of the following authorization scopes is used: https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.admin.memberships Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/chat.admin.memberships https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.import https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.memberships.readonly For more information, see the Authorization guide .
- Supports the following types of authentication with an authorization scope appropriate for reading the requested data: App authentication with administrator approval with one of the following authorization scopes: https://www.googleapis.com/auth/chat.app.spaces https://www.googleapis.com/auth/chat.app.spaces.readonly https://www.googleapis.com/auth/chat.app.messages.readonly https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.app.memberships.readonly User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.spaces.readonly https://www.googleapis.com/auth/chat.spaces https://www.googleapis.com/auth/chat.messages.readonly https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.messages.reactions.readonly https://www.googleapis.com/auth/chat.messages.reactions https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships To get an event, the authenticated caller must be a member of the space.
- Supports the following types of authentication with an authorization scope appropriate for reading the requested data: App authentication with administrator approval with one of the following authorization scopes: https://www.googleapis.com/auth/chat.app.spaces https://www.googleapis.com/auth/chat.app.spaces.readonly https://www.googleapis.com/auth/chat.app.messages.readonly https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.app.memberships.readonly User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.spaces.readonly https://www.googleapis.com/auth/chat.spaces https://www.googleapis.com/auth/chat.messages.readonly https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.messages.reactions.readonly https://www.googleapis.com/auth/chat.messages.reactions https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships To list events, the authenticated caller must be a member of the space.

### REST Resource: spaces.messages \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Methods create Creates a message in a Google Chat space. delete Deletes a message. get Returns details about a message. list Lists messages in a space that the caller is a member of, including messages from blocked members and spaces. patch Updates a message. replaceCards Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
- Resource: Message JSON representation Card JSON representation CardHeader JSON representation ImageStyle Section JSON representation WidgetMarkup JSON representation TextParagraph JSON representation Image JSON representation OnClick JSON representation FormAction JSON representation ActionParameter JSON representation OpenLink JSON representation KeyValue JSON representation Icon Button JSON representation TextButton JSON representation ImageButton JSON representation CardAction JSON representation CardWithId JSON representation Card JSON representation CardHeader JSON representation ImageType Section JSON representation Widget JSON representation TextParagraph JSON representation TextSyntax Image JSON representation OnClick JSON representation Action JSON representation ActionParameter JSON representation LoadIndicator Interaction OpenLink JSON representation OpenAs OnClose OverflowMenu JSON representation OverflowMenuItem JSON representation Icon JSON representation MaterialIcon JSON representation DecoratedText JSON representation VerticalAlignment Button JSON representation Color JSON representation Type SwitchControl JSON representation ControlType ButtonList JSON representation TextInput JSON representation Type Suggestions JSON representation SuggestionItem JSON representation Validation JSON representation InputType HostAppDataSourceMarkup JSON representation ChatClientDataSourceMarkup JSON representation SpaceDataSource JSON representation WorkflowDataSourceMarkup JSON representation Type SelectionInput JSON representation SelectionType SelectionItem JSON representation PlatformDataSource JSON representation CommonDataSource DataSourceConfig JSON representation DateTimePicker JSON representation DateTimePickerType Divider Grid JSON representation GridItem JSON representation ImageComponent JSON representation ImageCropStyle JSON representation ImageCropType BorderStyle JSON representation BorderType GridItemLayout Columns JSON representation Column JSON representation HorizontalSizeStyle HorizontalAlignment VerticalAlignment Widgets JSON representation ChipList JSON representation Layout Chip JSON representation Carousel JSON representation CarouselCard JSON representation NestedWidget JSON representation Visibility EventAction JSON representation Trigger JSON representation CommonWidgetAction JSON representation UpdateVisibilityAction JSON representation CollapseControl JSON representation DividerStyle CardAction JSON representation CardFixedFooter JSON representation DisplayStyle ExpressionData JSON representation Condition JSON representation ExpressionDataCondition JSON representation ConditionType Annotation JSON representation AnnotationType UserMentionMetadata JSON representation Type SlashCommandMetadata JSON representation Type RichLinkMetadata JSON representation RichLinkType DriveLinkData JSON representation ChatSpaceLinkData JSON representation MeetSpaceLinkData JSON representation Type HuddleStatus CalendarEventLinkData JSON representation CustomEmojiMetadata JSON representation Thread JSON representation ActionResponse JSON representation ResponseType DialogAction JSON representation Dialog JSON representation ActionStatus JSON representation Code UpdatedWidget JSON representation SelectionItems JSON representation SlashCommand JSON representation MatchedUrl JSON representation EmojiReactionSummary JSON representation DeletionMetadata JSON representation DeletionType QuotedMessageMetadata JSON representation QuoteType QuotedMessageSnapshot JSON representation ForwardedMetadata JSON representation AttachedGif JSON representation AccessoryWidget JSON representation Methods Resource: Message A message in a Google Chat space.
- JSON representation { "uri" : string , "richLinkType" : enum ( RichLinkType ) , "driveLinkData" : { object ( DriveLinkData ) } , "chatSpaceLinkData" : { object ( ChatSpaceLinkData ) } , "meetSpaceLinkData" : { object ( MeetSpaceLinkData ) } , "calendarEventLinkData" : { object ( CalendarEventLinkData ) } } Fields uri string The URI of this link. richLinkType enum ( RichLinkType ) The rich link type.
- Data for the linked resource. data can be only one of the following: driveLinkData object ( DriveLinkData ) Data for a drive link. chatSpaceLinkData object ( ChatSpaceLinkData ) Data for a chat space link. meetSpaceLinkData object ( MeetSpaceLinkData ) Data for a Meet space link. calendarEventLinkData object ( CalendarEventLinkData ) Data for a Calendar event link.

### REST Resource: spaces \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)
- Source ID: `site-api-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Methods completeImport Completes the import process for the specified space and makes it visible to users. create Creates a space. delete Deletes a named space. findDirectMessage Returns the existing direct message with the specified user. findGroupChats Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
- The Google Chat Spaces API allows for creating, deleting, updating, and retrieving spaces, as well as managing their members, permissions, and settings.
- Available API methods include create , delete , get , list , patch , and more to interact with and manage spaces programmatically.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],["Spaces in Google Chat represent conversations, defined by properties like spaceType (e.g., SPACE, DIRECT MESSAGE), displayName, and threaded status.

