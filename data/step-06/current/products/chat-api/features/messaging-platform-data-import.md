---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.224Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Messaging platform data import"
feature_slug: "messaging-platform-data-import"
latest_feature_date: "2024-01-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/delete"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1"
keywords:
  - "messaging"
  - "platform"
  - "import"
  - "chat"
  - "can"
  - "messages"
  - "attachments"
  - "reactions"
---

# Messaging platform data import

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

The Chat API can import messages, attachments, reactions, memberships, and space entities from other messaging platforms into spaces in import mode; The Chat API can import messages, attachments, reactions, memberships, and space entities from other messaging platforms into spaces in import mode.

## Extended Definition

The Chat API can import messages, attachments, reactions, memberships, and space entities from other messaging platforms into spaces in import mode; The Chat API can import messages, attachments, reactions, memberships, and space entities from other messaging platforms into spaces in import mode.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/delete](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/delete)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)

## Supporting Pages

### "Method: spaces.messages.reactions.delete \_|\_ Google Chat \_|\_ Google\

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/delete](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/delete)
- Source ID: `site-docs-root-2`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Requires user authentication with one of the following authorization scopes : https://www.googleapis.com/auth/chat.messages.reactions https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.import (import mode spaces only) HTTP request DELETE https://chat.googleapis.com/v1/{name=spaces/ /messages/ /reactions/ } The URL uses gRPC Transcoding syntax.
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/chat.import https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.messages.reactions For more information, see the Authorization guide .
- Authorization is necessary, using one of the specified OAuth scopes for chat import, messages, or message reactions.
- Home Google Workspace Google Chat Reference Send feedback Method: spaces.messages.reactions.delete Stay organized with collections Save and categorize content based on your preferences.

### "Method: spaces.messages.reactions.create \_|\_ Google Chat \_|\_ Google\

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create)
- Source ID: `site-docs-root-2`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Requires user authentication with one of the following authorization scopes : https://www.googleapis.com/auth/chat.messages.reactions.create https://www.googleapis.com/auth/chat.messages.reactions https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.import (import mode spaces only) HTTP request POST https://chat.googleapis.com/v1/{parent=spaces/ /messages/ }/reactions The URL uses gRPC Transcoding syntax.
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/chat.import https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.messages.reactions https://www.googleapis.com/auth/chat.messages.reactions.create For more information, see the Authorization guide .
- Home Google Workspace Google Chat Reference Send feedback Method: spaces.messages.reactions.create Stay organized with collections Save and categorize content based on your preferences.
- The API endpoint uses a POST request to https://chat.googleapis.com/v1/{parent=spaces/ /messages/ }/reactions with path and request body parameters to specify the message and reaction.

### Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Index ChatService (interface) AccessoryWidget (message) ActionResponse (message) ActionResponse.ResponseType (enum) ActionResponse.SelectionItems (message) ActionResponse.UpdatedWidget (message) ActionStatus (message) Annotation (message) AnnotationType (enum) AppCommandMetadata (message) AppCommandMetadata.AppCommandType (enum) AttachedGif (message) Attachment (message) Attachment.Source (enum) AttachmentDataRef (message) CalendarEventLinkData (message) CardWithId (message) ChatSpaceLinkData (message) CompleteImportSpaceRequest (message) CompleteImportSpaceResponse (message) ContextualAddOnMarkup (message) ContextualAddOnMarkup.Card (message) ContextualAddOnMarkup.Card.CardAction (message) ContextualAddOnMarkup.Card.CardHeader (message) ContextualAddOnMarkup.Card.CardHeader.ImageStyle (enum) ContextualAddOnMarkup.Card.Section (message) CreateCustomEmojiRequest (message) CreateMembershipRequest (message) CreateMessageRequest (message) CreateMessageRequest.MessageReplyOption (enum) CreateReactionRequest (message) CreateSectionRequest (message) CreateSpaceRequest (message) CustomEmoji (message) CustomEmoji.CustomEmojiPayload (message) CustomEmojiMetadata (message) DeleteCustomEmojiRequest (message) DeleteMembershipRequest (message) DeleteMessageRequest (message) DeleteReactionRequest (message) DeleteSectionRequest (message) DeleteSpaceRequest (message) DeletionMetadata (message) DeletionMetadata.DeletionType (enum) Dialog (message) DialogAction (message) DriveDataRef (message) DriveLinkData (message) Emoji (message) EmojiReactionSummary (message) FindDirectMessageRequest (message) FindGroupChatsRequest (message) FindGroupChatsResponse (message) ForwardedMetadata (message) GetAttachmentRequest (message) GetCustomEmojiRequest (message) GetMembershipRequest (message) GetMessageRequest (message) GetSpaceEventRequest (message) GetSpaceNotificationSettingRequest (message) GetSpaceReadStateRequest (message) GetSpaceRequest (message) GetThreadReadStateRequest (message) Group (message) HistoryState (enum) ListCustomEmojisRequest (message) ListCustomEmojisResponse (message) ListMembershipsRequest (message) ListMembershipsResponse (message) ListMessagesRequest (message) ListMessagesResponse (message) ListReactionsRequest (message) ListReactionsResponse (message) ListSectionItemsRequest (message) ListSectionItemsResponse (message) ListSectionsRequest (message) ListSectionsResponse (message) ListSpaceEventsRequest (message) ListSpaceEventsResponse (message) ListSpacesRequest (message) ListSpacesResponse (message) MatchedUrl (message) MeetSpaceLinkData (message) MeetSpaceLinkData.HuddleStatus (enum) MeetSpaceLinkData.Type (enum) Membership (message) Membership.MembershipRole (enum) Membership.MembershipState (enum) MembershipBatchCreatedEventData (message) MembershipBatchDeletedEventData (message) MembershipBatchUpdatedEventData (message) MembershipCreatedEventData (message) MembershipDeletedEventData (message) MembershipUpdatedEventData (message) Message (message) MessageBatchCreatedEventData (message) MessageBatchDeletedEventData (message) MessageBatchUpdatedEventData (message) MessageCreatedEventData (message) MessageDeletedEventData (message) MessageUpdatedEventData (message) MoveSectionItemRequest (message) MoveSectionItemResponse (message) PositionSectionRequest (message) PositionSectionRequest.Position (enum) PositionSectionResponse (message) QuotedMessageMetadata (message) QuotedMessageMetadata.QuoteType (enum) QuotedMessageSnapshot (message) Reaction (message) ReactionBatchCreatedEventData (message) ReactionBatchDeletedEventData (message) ReactionCreatedEventData (message) ReactionDeletedEventData (message) ReplaceMessageCardsRequest (message) ReplaceMessageCardsResponse (message) RichLinkMetadata (message) RichLinkMetadata.RichLinkType (enum) SearchSpacesRequest (message) SearchSpacesResponse (message) Section (message) Section.SectionType (enum) SectionItem (message) SetUpSpaceRequest (message) SlashCommand (message) SlashCommandMetadata (message) SlashCommandMetadata.Type (enum) Space (message) Space.AccessSettings (message) Space.AccessSettings.AccessState (enum) Space.MembershipCount (message) Space.PermissionSetting (message) Space.PermissionSettings (message) Space.PredefinedPermissionSettings (enum) Space.SpaceDetails (message) Space.SpaceThreadingState (enum) Space.SpaceType (enum) Space.Type (enum) SpaceBatchUpdatedEventData (message) SpaceEvent (message) SpaceNotificationSetting (message) SpaceNotificationSetting.MuteSetting (enum) SpaceNotificationSetting.NotificationSetting (enum) SpaceReadState (message) SpaceUpdatedEventData (message) SpaceView (enum) Thread (message) ThreadReadState (message) UpdateMembershipRequest (message) UpdateMessageRequest (message) UpdateSectionRequest (message) UpdateSpaceNotificationSettingRequest (message) UpdateSpaceReadStateRequest (message) UpdateSpaceRequest (message) User (message) User.Type (enum) UserMentionMetadata (message) UserMentionMetadata.Type (enum) WidgetMarkup (message) WidgetMarkup.Button (message) WidgetMarkup.FormAction (message) WidgetMarkup.FormAction.ActionParameter (message) WidgetMarkup.Icon (enum) WidgetMarkup.Image (message) WidgetMarkup.ImageButton (message) WidgetMarkup.KeyValue (message) WidgetMarkup.OnClick (message) WidgetMarkup.OpenLink (message) WidgetMarkup.TextButton (message) WidgetMarkup.TextParagraph (message) ChatService Enables developers to build Chat apps and integrations on Google Chat Platform.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],["The Google Chat API provides a ChatService interface to build apps and integrations, managing spaces, memberships, messages, reactions, attachments, custom emojis, annotations, widgets, and more.
- Requires user authentication with one of the following authorization scopes : https://www.googleapis.com/auth/chat.messages.reactions.create https://www.googleapis.com/auth/chat.messages.reactions https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.import (import mode spaces only) Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/chat.import https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.messages.reactions https://www.googleapis.com/auth/chat.messages.reactions.create For more information, see the Authorization guide .
- Requires user authentication with one of the following authorization scopes : https://www.googleapis.com/auth/chat.messages.reactions https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.import (import mode spaces only) Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/chat.import https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.messages.reactions For more information, see the Authorization guide .

