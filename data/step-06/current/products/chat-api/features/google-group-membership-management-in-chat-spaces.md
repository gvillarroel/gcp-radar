---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.620Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Google Group membership management in Chat spaces"
feature_slug: "google-group-membership-management-in-chat-spaces"
latest_feature_date: "2024-06-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/create-members"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces"
keywords:
  - "groups"
  - "management"
  - "group"
  - "membership"
  - "spaces"
  - "chat"
  - "can"
  - "in"
---

# Google Group membership management in Chat spaces

Product: Chat API
Coverage: LOW

## Step 02 Summary

Google Groups can be added to or removed from Chat spaces using spaces.members and space setup APIs.

## Extended Definition

Google Groups can be added to or removed from Chat spaces using spaces.members and space setup APIs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/create-members](https://developers.google.com/workspace/chat/create-members)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)

## Supporting Pages

### "Invite or add a user, Google Group, or Google Chat app to a space \_|\_\

- URL: [https://developers.google.com/workspace/chat/create-members](https://developers.google.com/workspace/chat/create-members)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Google Groups can only be added to named spaces, not direct messages or group chats, using user authentication with the chat.memberships scope.
- The following example adds a group to a named space with user authentication: Node.js chat/client-libraries/cloud/create-membership-user-cred-for-group.js View on GitHub import { createClientWithUserCredentials } from './authentication-utils.js' ; const USER AUTH OAUTH SCOPES = [ 'https://www.googleapis.com/auth/chat.memberships' , ]; // This sample shows how to create membership with user credential for a group async function main () { // Create a client const chatClient = await createClientWithUserCredentials ( USER AUTH OAUTH SCOPES , ); // Initialize request argument(s) const request = { // Replace SPACE NAME here. parent : 'spaces/SPACE NAME' , membership : { groupMember : { // Replace GROUP NAME here name : 'groups/GROUP NAME' , }, }, }; // Make the request const response = await chatClient . createMembership ( request ); // Handle the response console . log ( response ); } await main (); Python chat/client-libraries/cloud/create membership user cred for group.py View on GitHub from authentication utils import create client with user credentials from google.apps import chat v1 as google chat SCOPES = [ "https://www.googleapis.com/auth/chat.memberships" ] This sample shows how to create membership with user credential for a group def create membership with user cred for group (): Create a client client = create client with user credentials ( SCOPES ) Initialize request argument(s) request = google chat .
- CreateMembershipRequest ( Replace SPACE NAME here parent = "spaces/SPACE NAME" , membership = { "groupMember" : { Replace GROUP NAME here "name" : "groups/GROUP NAME" } } ) Make the request response = client . create membership ( request ) Handle the response print ( response ) create membership with user cred for group () Java chat/client-libraries/cloud/src/main/java/com/google/workspace/api/chat/samples/CreateMembershipUserCredForGroup.java View on GitHub import com.google.chat.v1.ChatServiceClient ; import com.google.chat.v1.CreateMembershipRequest ; import com.google.chat.v1.Membership ; import com.google.chat.v1.SpaceName ; import com.google.chat.v1.Group ; // This sample shows how to create membership with user credential for a group. public class CreateMembershipUserCredForGroup { private static final String SCOPE = "https://www.googleapis.com/auth/chat.memberships" ; public static void main ( String [] args ) throws Exception { try ( ChatServiceClient chatServiceClient = AuthenticationUtils . createClientWithUserCredentials ( ImmutableList . of ( SCOPE ))) { CreateMembershipRequest .
- Builder request = CreateMembershipRequest . newBuilder () // replace SPACE NAME here . setParent ( "spaces/SPACE NAME" ) . setMembership ( Membership . newBuilder () . setGroupMember ( Group . newBuilder () // replace GROUP NAME here . setName ( "groups/GROUP NAME" ))); Membership response = chatServiceClient . createMembership ( request . build ()); System . out . println ( JsonFormat . printer (). print ( response )); } } } Apps Script chat/advanced-service/Main.gs View on GitHub / This sample shows how to create membership with user credential for a group It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.memberships' referenced in the manifest file (appsscript.json). / function createMembershipUserCredForGroup () { // Initialize request argument(s) // TODO(developer): Replace SPACE NAME here. const parent = "spaces/SPACE NAME" ; const membership = { groupMember : { // TODO(developer): Replace GROUP NAME here name : "groups/GROUP NAME" , }, }; // Make the request const response = Chat .

### Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Index ChatService (interface) AccessoryWidget (message) ActionResponse (message) ActionResponse.ResponseType (enum) ActionResponse.SelectionItems (message) ActionResponse.UpdatedWidget (message) ActionStatus (message) Annotation (message) AnnotationType (enum) AppCommandMetadata (message) AppCommandMetadata.AppCommandType (enum) AttachedGif (message) Attachment (message) Attachment.Source (enum) AttachmentDataRef (message) CalendarEventLinkData (message) CardWithId (message) ChatSpaceLinkData (message) CompleteImportSpaceRequest (message) CompleteImportSpaceResponse (message) ContextualAddOnMarkup (message) ContextualAddOnMarkup.Card (message) ContextualAddOnMarkup.Card.CardAction (message) ContextualAddOnMarkup.Card.CardHeader (message) ContextualAddOnMarkup.Card.CardHeader.ImageStyle (enum) ContextualAddOnMarkup.Card.Section (message) CreateCustomEmojiRequest (message) CreateMembershipRequest (message) CreateMessageRequest (message) CreateMessageRequest.MessageReplyOption (enum) CreateReactionRequest (message) CreateSectionRequest (message) CreateSpaceRequest (message) CustomEmoji (message) CustomEmoji.CustomEmojiPayload (message) CustomEmojiMetadata (message) DeleteCustomEmojiRequest (message) DeleteMembershipRequest (message) DeleteMessageRequest (message) DeleteReactionRequest (message) DeleteSectionRequest (message) DeleteSpaceRequest (message) DeletionMetadata (message) DeletionMetadata.DeletionType (enum) Dialog (message) DialogAction (message) DriveDataRef (message) DriveLinkData (message) Emoji (message) EmojiReactionSummary (message) FindDirectMessageRequest (message) FindGroupChatsRequest (message) FindGroupChatsResponse (message) ForwardedMetadata (message) GetAttachmentRequest (message) GetCustomEmojiRequest (message) GetMembershipRequest (message) GetMessageRequest (message) GetSpaceEventRequest (message) GetSpaceNotificationSettingRequest (message) GetSpaceReadStateRequest (message) GetSpaceRequest (message) GetThreadReadStateRequest (message) Group (message) HistoryState (enum) ListCustomEmojisRequest (message) ListCustomEmojisResponse (message) ListMembershipsRequest (message) ListMembershipsResponse (message) ListMessagesRequest (message) ListMessagesResponse (message) ListReactionsRequest (message) ListReactionsResponse (message) ListSectionItemsRequest (message) ListSectionItemsResponse (message) ListSectionsRequest (message) ListSectionsResponse (message) ListSpaceEventsRequest (message) ListSpaceEventsResponse (message) ListSpacesRequest (message) ListSpacesResponse (message) MatchedUrl (message) MeetSpaceLinkData (message) MeetSpaceLinkData.HuddleStatus (enum) MeetSpaceLinkData.Type (enum) Membership (message) Membership.MembershipRole (enum) Membership.MembershipState (enum) MembershipBatchCreatedEventData (message) MembershipBatchDeletedEventData (message) MembershipBatchUpdatedEventData (message) MembershipCreatedEventData (message) MembershipDeletedEventData (message) MembershipUpdatedEventData (message) Message (message) MessageBatchCreatedEventData (message) MessageBatchDeletedEventData (message) MessageBatchUpdatedEventData (message) MessageCreatedEventData (message) MessageDeletedEventData (message) MessageUpdatedEventData (message) MoveSectionItemRequest (message) MoveSectionItemResponse (message) PositionSectionRequest (message) PositionSectionRequest.Position (enum) PositionSectionResponse (message) QuotedMessageMetadata (message) QuotedMessageMetadata.QuoteType (enum) QuotedMessageSnapshot (message) Reaction (message) ReactionBatchCreatedEventData (message) ReactionBatchDeletedEventData (message) ReactionCreatedEventData (message) ReactionDeletedEventData (message) ReplaceMessageCardsRequest (message) ReplaceMessageCardsResponse (message) RichLinkMetadata (message) RichLinkMetadata.RichLinkType (enum) SearchSpacesRequest (message) SearchSpacesResponse (message) Section (message) Section.SectionType (enum) SectionItem (message) SetUpSpaceRequest (message) SlashCommand (message) SlashCommandMetadata (message) SlashCommandMetadata.Type (enum) Space (message) Space.AccessSettings (message) Space.AccessSettings.AccessState (enum) Space.MembershipCount (message) Space.PermissionSetting (message) Space.PermissionSettings (message) Space.PredefinedPermissionSettings (enum) Space.SpaceDetails (message) Space.SpaceThreadingState (enum) Space.SpaceType (enum) Space.Type (enum) SpaceBatchUpdatedEventData (message) SpaceEvent (message) SpaceNotificationSetting (message) SpaceNotificationSetting.MuteSetting (enum) SpaceNotificationSetting.NotificationSetting (enum) SpaceReadState (message) SpaceUpdatedEventData (message) SpaceView (enum) Thread (message) ThreadReadState (message) UpdateMembershipRequest (message) UpdateMessageRequest (message) UpdateSectionRequest (message) UpdateSpaceNotificationSettingRequest (message) UpdateSpaceReadStateRequest (message) UpdateSpaceRequest (message) User (message) User.Type (enum) UserMentionMetadata (message) UserMentionMetadata.Type (enum) WidgetMarkup (message) WidgetMarkup.Button (message) WidgetMarkup.FormAction (message) WidgetMarkup.FormAction.ActionParameter (message) WidgetMarkup.Icon (enum) WidgetMarkup.Image (message) WidgetMarkup.ImageButton (message) WidgetMarkup.KeyValue (message) WidgetMarkup.OnClick (message) WidgetMarkup.OpenLink (message) WidgetMarkup.TextButton (message) WidgetMarkup.TextParagraph (message) ChatService Enables developers to build Chat apps and integrations on Google Chat Platform.
- Supports the following types of authentication : App authentication with administrator approval and the authorization scope: https://www.googleapis.com/auth/chat.app.memberships User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.memberships.app (to remove the calling app from the space) https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, use admin access is true , and the following authorization scope is used: https://www.googleapis.com/auth/chat.admin.memberships App authentication is not supported for the following use cases: Removing a Google Group from a space.
- For example, you can use Cloud Identity Groups lookup API to retrieve the ID 123456789 for group email group@example.com , then you can add the group to the space by setting the membership.group member.name to groups/123456789 .
- Returns all spaces with spaceType == GROUP CHAT , whose human memberships contain exactly the calling user, and the users specified in FindGroupChatsRequest.users .

### REST Resource: spaces \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns all spaces with spaceType == GROUP CHAT , whose human memberships contain exactly the calling user, and the users specified in FindGroupChatsRequest.users . get Returns details about a space. list Lists spaces the caller is a member of. patch Updates a space. search Returns a list of spaces in a Google Workspace organization based on an administrator's search. setup Creates a space and adds specified users to it.
- Page Summary outlined flag Google Chat Spaces are categorized as SPACE, GROUP CHAT, or DIRECT MESSAGE and contain properties like name, display name, threading state, and permission settings.
- PRIVATE Only users or Google Groups that have been individually added or invited by other users or Google Workspace administrators can discover and access the space.
- Users or Google Groups that have been individually added or invited to the space can also discover and access the space.

