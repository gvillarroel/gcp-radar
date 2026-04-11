---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.571Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Chat space membership role model update with assistant manager role"
feature_slug: "chat-space-membership-role-model-update-with-assistant-manager-role"
latest_feature_date: "2025-10-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1"
  - "https://developers.google.com/workspace/chat/admin-overview"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces"
keywords:
  - "assistant"
  - "model"
  - "role"
  - "membership"
  - "update"
  - "space"
  - "with"
  - "chat"
---

# Chat space membership role model update with assistant manager role

Product: Chat API
Coverage: LOW

## Step 02 Summary

Chat spaces now introduce ROLE_ASSISTANT_MANAGER in the membership role model and map manager/owner role naming in the UI while keeping API enum semantics consistent.

## Extended Definition

Chat spaces now introduce ROLE_ASSISTANT_MANAGER in the membership role model and map manager/owner role naming in the UI while keeping API enum semantics consistent.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- [https://developers.google.com/workspace/chat/admin-overview](https://developers.google.com/workspace/chat/admin-overview)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)

## Supporting Pages

### Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Index ChatService (interface) AccessoryWidget (message) ActionResponse (message) ActionResponse.ResponseType (enum) ActionResponse.SelectionItems (message) ActionResponse.UpdatedWidget (message) ActionStatus (message) Annotation (message) AnnotationType (enum) AppCommandMetadata (message) AppCommandMetadata.AppCommandType (enum) AttachedGif (message) Attachment (message) Attachment.Source (enum) AttachmentDataRef (message) CalendarEventLinkData (message) CardWithId (message) ChatSpaceLinkData (message) CompleteImportSpaceRequest (message) CompleteImportSpaceResponse (message) ContextualAddOnMarkup (message) ContextualAddOnMarkup.Card (message) ContextualAddOnMarkup.Card.CardAction (message) ContextualAddOnMarkup.Card.CardHeader (message) ContextualAddOnMarkup.Card.CardHeader.ImageStyle (enum) ContextualAddOnMarkup.Card.Section (message) CreateCustomEmojiRequest (message) CreateMembershipRequest (message) CreateMessageRequest (message) CreateMessageRequest.MessageReplyOption (enum) CreateReactionRequest (message) CreateSectionRequest (message) CreateSpaceRequest (message) CustomEmoji (message) CustomEmoji.CustomEmojiPayload (message) CustomEmojiMetadata (message) DeleteCustomEmojiRequest (message) DeleteMembershipRequest (message) DeleteMessageRequest (message) DeleteReactionRequest (message) DeleteSectionRequest (message) DeleteSpaceRequest (message) DeletionMetadata (message) DeletionMetadata.DeletionType (enum) Dialog (message) DialogAction (message) DriveDataRef (message) DriveLinkData (message) Emoji (message) EmojiReactionSummary (message) FindDirectMessageRequest (message) FindGroupChatsRequest (message) FindGroupChatsResponse (message) ForwardedMetadata (message) GetAttachmentRequest (message) GetCustomEmojiRequest (message) GetMembershipRequest (message) GetMessageRequest (message) GetSpaceEventRequest (message) GetSpaceNotificationSettingRequest (message) GetSpaceReadStateRequest (message) GetSpaceRequest (message) GetThreadReadStateRequest (message) Group (message) HistoryState (enum) ListCustomEmojisRequest (message) ListCustomEmojisResponse (message) ListMembershipsRequest (message) ListMembershipsResponse (message) ListMessagesRequest (message) ListMessagesResponse (message) ListReactionsRequest (message) ListReactionsResponse (message) ListSectionItemsRequest (message) ListSectionItemsResponse (message) ListSectionsRequest (message) ListSectionsResponse (message) ListSpaceEventsRequest (message) ListSpaceEventsResponse (message) ListSpacesRequest (message) ListSpacesResponse (message) MatchedUrl (message) MeetSpaceLinkData (message) MeetSpaceLinkData.HuddleStatus (enum) MeetSpaceLinkData.Type (enum) Membership (message) Membership.MembershipRole (enum) Membership.MembershipState (enum) MembershipBatchCreatedEventData (message) MembershipBatchDeletedEventData (message) MembershipBatchUpdatedEventData (message) MembershipCreatedEventData (message) MembershipDeletedEventData (message) MembershipUpdatedEventData (message) Message (message) MessageBatchCreatedEventData (message) MessageBatchDeletedEventData (message) MessageBatchUpdatedEventData (message) MessageCreatedEventData (message) MessageDeletedEventData (message) MessageUpdatedEventData (message) MoveSectionItemRequest (message) MoveSectionItemResponse (message) PositionSectionRequest (message) PositionSectionRequest.Position (enum) PositionSectionResponse (message) QuotedMessageMetadata (message) QuotedMessageMetadata.QuoteType (enum) QuotedMessageSnapshot (message) Reaction (message) ReactionBatchCreatedEventData (message) ReactionBatchDeletedEventData (message) ReactionCreatedEventData (message) ReactionDeletedEventData (message) ReplaceMessageCardsRequest (message) ReplaceMessageCardsResponse (message) RichLinkMetadata (message) RichLinkMetadata.RichLinkType (enum) SearchSpacesRequest (message) SearchSpacesResponse (message) Section (message) Section.SectionType (enum) SectionItem (message) SetUpSpaceRequest (message) SlashCommand (message) SlashCommandMetadata (message) SlashCommandMetadata.Type (enum) Space (message) Space.AccessSettings (message) Space.AccessSettings.AccessState (enum) Space.MembershipCount (message) Space.PermissionSetting (message) Space.PermissionSettings (message) Space.PredefinedPermissionSettings (enum) Space.SpaceDetails (message) Space.SpaceThreadingState (enum) Space.SpaceType (enum) Space.Type (enum) SpaceBatchUpdatedEventData (message) SpaceEvent (message) SpaceNotificationSetting (message) SpaceNotificationSetting.MuteSetting (enum) SpaceNotificationSetting.NotificationSetting (enum) SpaceReadState (message) SpaceUpdatedEventData (message) SpaceView (enum) Thread (message) ThreadReadState (message) UpdateMembershipRequest (message) UpdateMessageRequest (message) UpdateSectionRequest (message) UpdateSpaceNotificationSettingRequest (message) UpdateSpaceReadStateRequest (message) UpdateSpaceRequest (message) User (message) User.Type (enum) UserMentionMetadata (message) UserMentionMetadata.Type (enum) WidgetMarkup (message) WidgetMarkup.Button (message) WidgetMarkup.FormAction (message) WidgetMarkup.FormAction.ActionParameter (message) WidgetMarkup.Icon (enum) WidgetMarkup.Image (message) WidgetMarkup.ImageButton (message) WidgetMarkup.KeyValue (message) WidgetMarkup.OnClick (message) WidgetMarkup.OpenLink (message) WidgetMarkup.TextButton (message) WidgetMarkup.TextParagraph (message) ChatService Enables developers to build Chat apps and integrations on Google Chat Platform.
- Supported event types for messages : New message: google.workspace.chat.message.v1.created Updated message: google.workspace.chat.message.v1.updated Deleted message: google.workspace.chat.message.v1.deleted Multiple new messages: google.workspace.chat.message.v1.batchCreated Multiple updated messages: google.workspace.chat.message.v1.batchUpdated Multiple deleted messages: google.workspace.chat.message.v1.batchDeleted Supported event types for memberships : New membership: google.workspace.chat.membership.v1.created Updated membership: google.workspace.chat.membership.v1.updated Deleted membership: google.workspace.chat.membership.v1.deleted Multiple new memberships: google.workspace.chat.membership.v1.batchCreated Multiple updated memberships: google.workspace.chat.membership.v1.batchUpdated Multiple deleted memberships: google.workspace.chat.membership.v1.batchDeleted Supported event types for reactions : New reaction: google.workspace.chat.reaction.v1.created Deleted reaction: google.workspace.chat.reaction.v1.deleted Multiple new reactions: google.workspace.chat.reaction.v1.batchCreated Multiple deleted reactions: google.workspace.chat.reaction.v1.batchDeleted Supported event types about the space : Updated space: google.workspace.chat.space.v1.updated Multiple space updates: google.workspace.chat.space.v1.batchUpdated Union field payload . payload can be only one of the following: message created event data MessageCreatedEventData Event payload for a new message.
- Supports the following types of authentication : App authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.app.memberships (requires administrator approval ) User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, use admin access is true , and one of the following authorization scopes is used: https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.admin.memberships Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/chat.admin.memberships https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.import https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.memberships.readonly For more information, see the Authorization guide .
- Supports the following types of authentication with an authorization scope appropriate for reading the requested data: App authentication with administrator approval with one of the following authorization scopes: https://www.googleapis.com/auth/chat.app.spaces https://www.googleapis.com/auth/chat.app.spaces.readonly https://www.googleapis.com/auth/chat.app.messages.readonly https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.app.memberships.readonly User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.spaces.readonly https://www.googleapis.com/auth/chat.spaces https://www.googleapis.com/auth/chat.messages.readonly https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.messages.reactions.readonly https://www.googleapis.com/auth/chat.messages.reactions https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships To get an event, the authenticated caller must be a member of the space.

### "Manage Google Chat spaces as a Google Workspace administrator \_|\_ Google\

- URL: [https://developers.google.com/workspace/chat/admin-overview](https://developers.google.com/workspace/chat/admin-overview)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As a Google Workspace administrator, you can perform a number of management tasks with the Chat API, such as the following: Search spaces based on specified criteria List members of a space Add members to and remove members from a space Get details about a member and a space Update or delete a space Update a user's membership How to authenticate and authorize as a Google Workspace administrator When using the Chat API for management tasks, administrators can authenticate and authorize requests by invoking administrator privileges or configuring domain-wide delegation of authority for an application's service account.
- The following Chat API methods enable administrator privileges with useAdminAccess=true . spaces.delete spaces.get spaces.patch spaces.search spaces.members.create spaces.members.delete spaces.members.get spaces.members.list spaces.members.patch Manage users' space memberships The following scenarios are ways that you, as a Google Workspace administrator, can manage the space membership of users in your organization with the Chat API.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["Google Workspace administrators can use the Chat API to manage spaces and automate tasks.
- Related topics Authenticate and authorize using administrator privileges Search and manage Google Chat spaces with the Google Chat API as a Google Workspace administrator spaces.search method Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### REST Resource: spaces \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)
- Source ID: `site-api-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Returns all spaces with spaceType == GROUP CHAT , whose human memberships contain exactly the calling user, and the users specified in FindGroupChatsRequest.users . get Returns details about a space. list Lists spaces the caller is a member of. patch Updates a space. search Returns a list of spaces in a Google Workspace organization based on an administrator's search. setup Creates a space and adds specified users to it.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],["Spaces in Google Chat represent conversations, defined by properties like spaceType (e.g., SPACE, DIRECT MESSAGE), displayName, and threaded status.
- Methods completeImport Completes the import process for the specified space and makes it visible to users. create Creates a space. delete Deletes a named space. findDirectMessage Returns the existing direct message with the specified user. findGroupChats Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
- Resource: Space JSON representation Type SpaceType SpaceThreadingState SpaceDetails JSON representation HistoryState MembershipCount JSON representation AccessSettings JSON representation AccessState PredefinedPermissionSettings PermissionSettings JSON representation PermissionSetting JSON representation Methods Resource: Space A space in Google Chat.

