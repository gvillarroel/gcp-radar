---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.580Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Chat space permission settings APIs for app authentication"
feature_slug: "chat-space-permission-settings-apis-for-app-authentication"
latest_feature_date: "2025-07-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/authenticate-authorize-granular-oauth-permissions"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1"
  - "https://developers.google.com/workspace/chat/create-spaces"
keywords:
  - "permission"
  - "authentication"
  - "settings"
  - "apis"
  - "space"
  - "app"
  - "chat"
  - "for"
---

# Chat space permission settings APIs for app authentication

Product: Chat API
Coverage: LOW

## Step 02 Summary

Chat apps can create, update, and retrieve space permission settings via Chat API using app authentication scopes for spaces.

## Extended Definition

Chat apps can create, update, and retrieve space permission settings via Chat API using app authentication scopes for spaces.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/authenticate-authorize-granular-oauth-permissions](https://developers.google.com/workspace/chat/authenticate-authorize-granular-oauth-permissions)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- [https://developers.google.com/workspace/chat/create-spaces](https://developers.google.com/workspace/chat/create-spaces)

## Supporting Pages

### "Manage granular OAuth permissions for Google Chat apps \_|\_ Google for\

- URL: [https://developers.google.com/workspace/chat/authenticate-authorize-granular-oauth-permissions](https://developers.google.com/workspace/chat/authenticate-authorize-granular-oauth-permissions)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JsonObject requestingGoogleScopes = new JsonObject (); JsonArray scopes = new JsonArray (); scopes . add ( "https://www.googleapis.com/auth/chat.messages" ); requestingGoogleScopes . add ( "scopes" , scopes ); JsonObject response = new JsonObject (); response . add ( "requesting google scopes" , requestingGoogleScopes ); return response . toString (); } To request all scopes associated with the add-on, set all scopes to true : Node.js res . send ({ 'requesting google scopes' : { 'all scopes' : true } }); Python from flask import jsonify return jsonify ({ 'requesting google scopes' : { 'all scopes' : True } }) Java import com.google.gson.JsonObject ; JsonObject requestingGoogleScopes = new JsonObject (); requestingGoogleScopes . addProperty ( "all scopes" , true ); JsonObject response = new JsonObject (); response . add ( "requesting google scopes" , requestingGoogleScopes ); return response . toString (); For detailed instructions, see Manage granular permissions for HTTP Google Workspace add-ons .
- Checks for required permissions and if missing asks for them. @param {Object} event the event object from Chat @return {Object} JSON response / function onMessage ( event ) { // Check if the script has the necessary permissions. // In this example, the script checks for the "calendar.events" scope. var requiredScopes = [ 'https://www.googleapis.com/auth/calendar.events' ]; var authInfo = ScriptApp . getAuthorizationInfo ( ScriptApp .
- Home Google Workspace Google Chat Guides Send feedback Manage granular OAuth permissions for Google Chat apps Stay organized with collections Save and categorize content based on your preferences.
- Handling granular OAuth permissions depends on how you build your Chat app: Apps Script Google Workspace add-ons that extend Chat Standalone Apps Script Chat apps HTTP Google Workspace add-ons that extend Chat Standalone HTTP Chat apps Apps Script If you build your Chat app using Apps Script , Apps Script handles granular OAuth permissions automatically.

### Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- Source ID: `site-docs-reference`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supports the following types of authentication : App authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.app.spaces with administrator approval User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.spaces.readonly https://www.googleapis.com/auth/chat.spaces User authentication grants administrator privileges when an administrator account authenticates, use admin access is true , and one of the following authorization scopes is used: https://www.googleapis.com/auth/chat.admin.spaces.readonly https://www.googleapis.com/auth/chat.admin.spaces App authentication has the following limitations: space.access settings is only populated when using the chat.app.spaces scope. space.predefind permission settings and space.permission settings are only populated when using the chat.app.spaces scope, and only for spaces the app created.
- Supports the following types of authentication : App authentication with administrator approval and one of the following authorization scopes: https://www.googleapis.com/auth/chat.app.spaces User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.spaces https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, use admin access is true , and the following authorization scopes is used: https://www.googleapis.com/auth/chat.admin.spaces App authentication has the following limitations: To update either space.predefined permission settings or space.permission settings , the app must be the space creator.
- Index ChatService (interface) AccessoryWidget (message) ActionResponse (message) ActionResponse.ResponseType (enum) ActionResponse.SelectionItems (message) ActionResponse.UpdatedWidget (message) ActionStatus (message) Annotation (message) AnnotationType (enum) AppCommandMetadata (message) AppCommandMetadata.AppCommandType (enum) AttachedGif (message) Attachment (message) Attachment.Source (enum) AttachmentDataRef (message) CalendarEventLinkData (message) CardWithId (message) ChatSpaceLinkData (message) CompleteImportSpaceRequest (message) CompleteImportSpaceResponse (message) ContextualAddOnMarkup (message) ContextualAddOnMarkup.Card (message) ContextualAddOnMarkup.Card.CardAction (message) ContextualAddOnMarkup.Card.CardHeader (message) ContextualAddOnMarkup.Card.CardHeader.ImageStyle (enum) ContextualAddOnMarkup.Card.Section (message) CreateCustomEmojiRequest (message) CreateMembershipRequest (message) CreateMessageRequest (message) CreateMessageRequest.MessageReplyOption (enum) CreateReactionRequest (message) CreateSectionRequest (message) CreateSpaceRequest (message) CustomEmoji (message) CustomEmoji.CustomEmojiPayload (message) CustomEmojiMetadata (message) DeleteCustomEmojiRequest (message) DeleteMembershipRequest (message) DeleteMessageRequest (message) DeleteReactionRequest (message) DeleteSectionRequest (message) DeleteSpaceRequest (message) DeletionMetadata (message) DeletionMetadata.DeletionType (enum) Dialog (message) DialogAction (message) DriveDataRef (message) DriveLinkData (message) Emoji (message) EmojiReactionSummary (message) FindDirectMessageRequest (message) FindGroupChatsRequest (message) FindGroupChatsResponse (message) ForwardedMetadata (message) GetAttachmentRequest (message) GetCustomEmojiRequest (message) GetMembershipRequest (message) GetMessageRequest (message) GetSpaceEventRequest (message) GetSpaceNotificationSettingRequest (message) GetSpaceReadStateRequest (message) GetSpaceRequest (message) GetThreadReadStateRequest (message) Group (message) HistoryState (enum) ListCustomEmojisRequest (message) ListCustomEmojisResponse (message) ListMembershipsRequest (message) ListMembershipsResponse (message) ListMessagesRequest (message) ListMessagesResponse (message) ListReactionsRequest (message) ListReactionsResponse (message) ListSectionItemsRequest (message) ListSectionItemsResponse (message) ListSectionsRequest (message) ListSectionsResponse (message) ListSpaceEventsRequest (message) ListSpaceEventsResponse (message) ListSpacesRequest (message) ListSpacesResponse (message) MatchedUrl (message) MeetSpaceLinkData (message) MeetSpaceLinkData.HuddleStatus (enum) MeetSpaceLinkData.Type (enum) Membership (message) Membership.MembershipRole (enum) Membership.MembershipState (enum) MembershipBatchCreatedEventData (message) MembershipBatchDeletedEventData (message) MembershipBatchUpdatedEventData (message) MembershipCreatedEventData (message) MembershipDeletedEventData (message) MembershipUpdatedEventData (message) Message (message) MessageBatchCreatedEventData (message) MessageBatchDeletedEventData (message) MessageBatchUpdatedEventData (message) MessageCreatedEventData (message) MessageDeletedEventData (message) MessageUpdatedEventData (message) MoveSectionItemRequest (message) MoveSectionItemResponse (message) PositionSectionRequest (message) PositionSectionRequest.Position (enum) PositionSectionResponse (message) QuotedMessageMetadata (message) QuotedMessageMetadata.QuoteType (enum) QuotedMessageSnapshot (message) Reaction (message) ReactionBatchCreatedEventData (message) ReactionBatchDeletedEventData (message) ReactionCreatedEventData (message) ReactionDeletedEventData (message) ReplaceMessageCardsRequest (message) ReplaceMessageCardsResponse (message) RichLinkMetadata (message) RichLinkMetadata.RichLinkType (enum) SearchSpacesRequest (message) SearchSpacesResponse (message) Section (message) Section.SectionType (enum) SectionItem (message) SetUpSpaceRequest (message) SlashCommand (message) SlashCommandMetadata (message) SlashCommandMetadata.Type (enum) Space (message) Space.AccessSettings (message) Space.AccessSettings.AccessState (enum) Space.MembershipCount (message) Space.PermissionSetting (message) Space.PermissionSettings (message) Space.PredefinedPermissionSettings (enum) Space.SpaceDetails (message) Space.SpaceThreadingState (enum) Space.SpaceType (enum) Space.Type (enum) SpaceBatchUpdatedEventData (message) SpaceEvent (message) SpaceNotificationSetting (message) SpaceNotificationSetting.MuteSetting (enum) SpaceNotificationSetting.NotificationSetting (enum) SpaceReadState (message) SpaceUpdatedEventData (message) SpaceView (enum) Thread (message) ThreadReadState (message) UpdateMembershipRequest (message) UpdateMessageRequest (message) UpdateSectionRequest (message) UpdateSpaceNotificationSettingRequest (message) UpdateSpaceReadStateRequest (message) UpdateSpaceRequest (message) User (message) User.Type (enum) UserMentionMetadata (message) UserMentionMetadata.Type (enum) WidgetMarkup (message) WidgetMarkup.Button (message) WidgetMarkup.FormAction (message) WidgetMarkup.FormAction.ActionParameter (message) WidgetMarkup.Icon (enum) WidgetMarkup.Image (message) WidgetMarkup.ImageButton (message) WidgetMarkup.KeyValue (message) WidgetMarkup.OnClick (message) WidgetMarkup.OpenLink (message) WidgetMarkup.TextButton (message) WidgetMarkup.TextParagraph (message) ChatService Enables developers to build Chat apps and integrations on Google Chat Platform.
- Supports the following types of authentication : App authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.app.memberships (requires administrator approval ) User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, use admin access is true , and one of the following authorization scopes is used: https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.admin.memberships Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/chat.admin.memberships https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.import https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.memberships.readonly For more information, see the Authorization guide .

### Create a named space in Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/create-spaces](https://developers.google.com/workspace/chat/create-spaces)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Here's how to create a named space: Node.js chat/client-libraries/cloud/create-space-user-cred.js View on GitHub import { createClientWithUserCredentials } from './authentication-utils.js' ; const USER AUTH OAUTH SCOPES = [ 'https://www.googleapis.com/auth/chat.spaces.create' , ]; // This sample shows how to create a named space with user credential async function main () { // Create a client const chatClient = await createClientWithUserCredentials ( USER AUTH OAUTH SCOPES , ); // Initialize request argument(s) const request = { space : { spaceType : 'SPACE' , // Replace DISPLAY NAME here. displayName : 'DISPLAY NAME' , }, }; // Make the request const response = await chatClient . createSpace ( request ); // Handle the response console . log ( response ); } await main (); Python chat/client-libraries/cloud/create space user cred.py View on GitHub from authentication utils import create client with user credentials from google.apps import chat v1 as google chat SCOPES = [ "https://www.googleapis.com/auth/chat.spaces.create" ] def create space with user cred (): Create a client client = create client with user credentials ( SCOPES ) Initialize request argument(s) request = google chat .
- SPACE ) // Replace DISPLAY NAME here. . setDisplayName ( "DISPLAY NAME" )); Space response = chatServiceClient . createSpace ( request . build ()); System . out . println ( JsonFormat . printer (). print ( response )); } } } Apps Script chat/advanced-service/Main.gs View on GitHub / This sample shows how to create space with user credential It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.spaces.create' referenced in the manifest file (appsscript.json). / function createSpaceUserCred () { // Initialize request argument(s) const space = { spaceType : "SPACE" , // TODO(developer): Replace DISPLAY NAME here displayName : "DISPLAY NAME" , }; // Make the request const response = Chat .
- SCOPES = [ "https://www.googleapis.com/auth/chat.app.spaces.create" ] def main (): ''' Authenticates with Chat API using app authentication, then creates a Chat space. ''' Specify service account details. creds = ( service account .
- To allow only space managers to remove the Chat app, set permissionSettings.manageApps to managersAllowed .

