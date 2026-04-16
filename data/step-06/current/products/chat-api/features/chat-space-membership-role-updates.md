---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.213Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Chat space membership role updates"
feature_slug: "chat-space-membership-role-updates"
latest_feature_date: "2024-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/patch"
keywords:
  - "chat"
  - "space"
  - "membership"
  - "role"
  - "updates"
  - "can"
  - "update"
  - "human"
---

# Chat space membership role updates

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

The Chat API can update a human user's membership role in a space between regular member and space manager; The Chat API can update a human user's membership role in a space between regular member and space manager.

## Extended Definition

The Chat API can update a human user's membership role in a space between regular member and space manager; The Chat API can update a human user's membership role in a space between regular member and space manager.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/patch](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/patch)

## Supporting Pages

### REST Resource: spaces \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns all spaces with spaceType == GROUP CHAT , whose human memberships contain exactly the calling user, and the users specified in FindGroupChatsRequest.users . get Returns details about a space. list Lists spaces the caller is a member of. patch Updates a space. search Returns a list of spaces in a Google Workspace organization based on an administrator's search. setup Creates a space and adds specified users to it.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],["Spaces in Google Chat represent conversations, defined by properties like spaceType (e.g., SPACE, DIRECT MESSAGE), displayName, and threaded status.
- Resource: Space JSON representation Type SpaceType SpaceThreadingState SpaceDetails JSON representation HistoryState MembershipCount JSON representation AccessSettings JSON representation AccessState PredefinedPermissionSettings PermissionSettings JSON representation PermissionSetting JSON representation Methods Resource: Space A space in Google Chat.
- Count of human users that have directly joined the space, not counting users joined by having membership in a joined group. joinedGroupCount integer Output only.

### Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Index ChatService (interface) AccessoryWidget (message) ActionResponse (message) ActionResponse.ResponseType (enum) ActionResponse.SelectionItems (message) ActionResponse.UpdatedWidget (message) ActionStatus (message) Annotation (message) AnnotationType (enum) AppCommandMetadata (message) AppCommandMetadata.AppCommandType (enum) AttachedGif (message) Attachment (message) Attachment.Source (enum) AttachmentDataRef (message) CalendarEventLinkData (message) CardWithId (message) ChatSpaceLinkData (message) CompleteImportSpaceRequest (message) CompleteImportSpaceResponse (message) ContextualAddOnMarkup (message) ContextualAddOnMarkup.Card (message) ContextualAddOnMarkup.Card.CardAction (message) ContextualAddOnMarkup.Card.CardHeader (message) ContextualAddOnMarkup.Card.CardHeader.ImageStyle (enum) ContextualAddOnMarkup.Card.Section (message) CreateCustomEmojiRequest (message) CreateMembershipRequest (message) CreateMessageRequest (message) CreateMessageRequest.MessageReplyOption (enum) CreateReactionRequest (message) CreateSectionRequest (message) CreateSpaceRequest (message) CustomEmoji (message) CustomEmoji.CustomEmojiPayload (message) CustomEmojiMetadata (message) DeleteCustomEmojiRequest (message) DeleteMembershipRequest (message) DeleteMessageRequest (message) DeleteReactionRequest (message) DeleteSectionRequest (message) DeleteSpaceRequest (message) DeletionMetadata (message) DeletionMetadata.DeletionType (enum) Dialog (message) DialogAction (message) DriveDataRef (message) DriveLinkData (message) Emoji (message) EmojiReactionSummary (message) FindDirectMessageRequest (message) FindGroupChatsRequest (message) FindGroupChatsResponse (message) ForwardedMetadata (message) GetAttachmentRequest (message) GetCustomEmojiRequest (message) GetMembershipRequest (message) GetMessageRequest (message) GetSpaceEventRequest (message) GetSpaceNotificationSettingRequest (message) GetSpaceReadStateRequest (message) GetSpaceRequest (message) GetThreadReadStateRequest (message) Group (message) HistoryState (enum) ListCustomEmojisRequest (message) ListCustomEmojisResponse (message) ListMembershipsRequest (message) ListMembershipsResponse (message) ListMessagesRequest (message) ListMessagesResponse (message) ListReactionsRequest (message) ListReactionsResponse (message) ListSectionItemsRequest (message) ListSectionItemsResponse (message) ListSectionsRequest (message) ListSectionsResponse (message) ListSpaceEventsRequest (message) ListSpaceEventsResponse (message) ListSpacesRequest (message) ListSpacesResponse (message) MatchedUrl (message) MeetSpaceLinkData (message) MeetSpaceLinkData.HuddleStatus (enum) MeetSpaceLinkData.Type (enum) Membership (message) Membership.MembershipRole (enum) Membership.MembershipState (enum) MembershipBatchCreatedEventData (message) MembershipBatchDeletedEventData (message) MembershipBatchUpdatedEventData (message) MembershipCreatedEventData (message) MembershipDeletedEventData (message) MembershipUpdatedEventData (message) Message (message) MessageBatchCreatedEventData (message) MessageBatchDeletedEventData (message) MessageBatchUpdatedEventData (message) MessageCreatedEventData (message) MessageDeletedEventData (message) MessageUpdatedEventData (message) MoveSectionItemRequest (message) MoveSectionItemResponse (message) PositionSectionRequest (message) PositionSectionRequest.Position (enum) PositionSectionResponse (message) QuotedMessageMetadata (message) QuotedMessageMetadata.QuoteType (enum) QuotedMessageSnapshot (message) Reaction (message) ReactionBatchCreatedEventData (message) ReactionBatchDeletedEventData (message) ReactionCreatedEventData (message) ReactionDeletedEventData (message) ReplaceMessageCardsRequest (message) ReplaceMessageCardsResponse (message) RichLinkMetadata (message) RichLinkMetadata.RichLinkType (enum) SearchSpacesRequest (message) SearchSpacesResponse (message) Section (message) Section.SectionType (enum) SectionItem (message) SetUpSpaceRequest (message) SlashCommand (message) SlashCommandMetadata (message) SlashCommandMetadata.Type (enum) Space (message) Space.AccessSettings (message) Space.AccessSettings.AccessState (enum) Space.MembershipCount (message) Space.PermissionSetting (message) Space.PermissionSettings (message) Space.PredefinedPermissionSettings (enum) Space.SpaceDetails (message) Space.SpaceThreadingState (enum) Space.SpaceType (enum) Space.Type (enum) SpaceBatchUpdatedEventData (message) SpaceEvent (message) SpaceNotificationSetting (message) SpaceNotificationSetting.MuteSetting (enum) SpaceNotificationSetting.NotificationSetting (enum) SpaceReadState (message) SpaceUpdatedEventData (message) SpaceView (enum) Thread (message) ThreadReadState (message) UpdateMembershipRequest (message) UpdateMessageRequest (message) UpdateSectionRequest (message) UpdateSpaceNotificationSettingRequest (message) UpdateSpaceReadStateRequest (message) UpdateSpaceRequest (message) User (message) User.Type (enum) UserMentionMetadata (message) UserMentionMetadata.Type (enum) WidgetMarkup (message) WidgetMarkup.Button (message) WidgetMarkup.FormAction (message) WidgetMarkup.FormAction.ActionParameter (message) WidgetMarkup.Icon (enum) WidgetMarkup.Image (message) WidgetMarkup.ImageButton (message) WidgetMarkup.KeyValue (message) WidgetMarkup.OnClick (message) WidgetMarkup.OpenLink (message) WidgetMarkup.TextButton (message) WidgetMarkup.TextParagraph (message) ChatService Enables developers to build Chat apps and integrations on Google Chat Platform.
- Supported event types for messages : New message: google.workspace.chat.message.v1.created Updated message: google.workspace.chat.message.v1.updated Deleted message: google.workspace.chat.message.v1.deleted Multiple new messages: google.workspace.chat.message.v1.batchCreated Multiple updated messages: google.workspace.chat.message.v1.batchUpdated Multiple deleted messages: google.workspace.chat.message.v1.batchDeleted Supported event types for memberships : New membership: google.workspace.chat.membership.v1.created Updated membership: google.workspace.chat.membership.v1.updated Deleted membership: google.workspace.chat.membership.v1.deleted Multiple new memberships: google.workspace.chat.membership.v1.batchCreated Multiple updated memberships: google.workspace.chat.membership.v1.batchUpdated Multiple deleted memberships: google.workspace.chat.membership.v1.batchDeleted Supported event types for reactions : New reaction: google.workspace.chat.reaction.v1.created Deleted reaction: google.workspace.chat.reaction.v1.deleted Multiple new reactions: google.workspace.chat.reaction.v1.batchCreated Multiple deleted reactions: google.workspace.chat.reaction.v1.batchDeleted Supported event types about the space : Updated space: google.workspace.chat.space.v1.updated Multiple space updates: google.workspace.chat.space.v1.batchUpdated Union field payload . payload can be only one of the following: message created event data MessageCreatedEventData Event payload for a new message.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],["The Google Chat API provides a ChatService interface to build apps and integrations, managing spaces, memberships, messages, reactions, attachments, custom emojis, annotations, widgets, and more.
- When deleting a human membership, requires the chat.memberships scope with user authentication or the chat.memberships.app scope with app authentication and the spaces/{space}/members/{member} format.

### Method: spaces.members.patch \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/patch](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/patch)
- Source ID: `site-docs-root-2`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag This method updates a Google Chat membership, allowing you to modify aspects like user roles within a space.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-25 UTC."],[],["This documentation details updating a membership via a PATCH HTTP request to https://chat.googleapis.com/v1/{membership.name=spaces/ /members/ }.
- Supports the following types of authentication : App authentication with administrator approval and the authorization scope: https://www.googleapis.com/auth/chat.app.memberships (only in spaces the app created) User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, useAdminAccess is true , and the following authorization scope is used: https://www.googleapis.com/auth/chat.admin.memberships HTTP request PATCH https://chat.googleapis.com/v1/{membership.name=spaces/ /members/ } The URL uses gRPC Transcoding syntax.
- Key actions include setting the membership.name path parameter and using the updateMask query parameter to specify fields for updating, such as role.

