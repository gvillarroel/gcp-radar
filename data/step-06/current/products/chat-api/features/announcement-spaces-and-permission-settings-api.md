---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.196Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Announcement spaces and permission settings API"
feature_slug: "announcement-spaces-and-permission-settings-api"
latest_feature_date: "2024-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1"
  - "https://developers.google.com/workspace/chat/create-spaces"
keywords:
  - "announcement"
  - "spaces"
  - "permission"
  - "settings"
  - "chat"
  - "can"
  - "create"
  - "read"
---

# Announcement spaces and permission settings API

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

The Chat API can create announcement spaces and read or update a space's permission settings; The Chat API can create announcement spaces and read or update a space's permission settings.

## Extended Definition

The Chat API can create announcement spaces and read or update a space's permission settings; The Chat API can create announcement spaces and read or update a space's permission settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- [https://developers.google.com/workspace/chat/create-spaces](https://developers.google.com/workspace/chat/create-spaces)

## Supporting Pages

### REST Resource: spaces \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)
- Source ID: `site-api-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Google Chat Spaces are categorized as SPACE, GROUP CHAT, or DIRECT MESSAGE and contain properties like name, display name, threading state, and permission settings.
- Setting predefined permission settings supports: App authentication with administrator approval with the chat.app.spaces or chat.app.spaces.create scopes.
- Reading and updating permission settings supports: App authentication with administrator approval with the chat.app.spaces scope.
- JSON representation { "name" : string , "type" : enum ( Type ) , "spaceType" : enum ( SpaceType ) , "singleUserBotDm" : boolean , "threaded" : boolean , "displayName" : string , "externalUserAllowed" : boolean , "spaceThreadingState" : enum ( SpaceThreadingState ) , "spaceDetails" : { object ( SpaceDetails ) } , "spaceHistoryState" : enum ( HistoryState ) , "importMode" : boolean , "createTime" : string , "lastActiveTime" : string , "adminInstalled" : boolean , "membershipCount" : { object ( MembershipCount ) } , "accessSettings" : { object ( AccessSettings ) } , "spaceUri" : string , "importModeExpireTime" : string , "customer" : string , "predefinedPermissionSettings" : enum ( PredefinedPermissionSettings ) , "permissionSettings" : { object ( PermissionSettings ) } } Fields name string Identifier.

### Create a named space in Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/create-spaces](https://developers.google.com/workspace/chat/create-spaces)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here's how to create a named space: Node.js chat/client-libraries/cloud/create-space-user-cred.js View on GitHub import { createClientWithUserCredentials } from './authentication-utils.js' ; const USER AUTH OAUTH SCOPES = [ 'https://www.googleapis.com/auth/chat.spaces.create' , ]; // This sample shows how to create a named space with user credential async function main () { // Create a client const chatClient = await createClientWithUserCredentials ( USER AUTH OAUTH SCOPES , ); // Initialize request argument(s) const request = { space : { spaceType : 'SPACE' , // Replace DISPLAY NAME here. displayName : 'DISPLAY NAME' , }, }; // Make the request const response = await chatClient . createSpace ( request ); // Handle the response console . log ( response ); } await main (); Python chat/client-libraries/cloud/create space user cred.py View on GitHub from authentication utils import create client with user credentials from google.apps import chat v1 as google chat SCOPES = [ "https://www.googleapis.com/auth/chat.spaces.create" ] def create space with user cred (): Create a client client = create client with user credentials ( SCOPES ) Initialize request argument(s) request = google chat .
- CreateSpaceRequest ( space = { "space type" : 'SPACE' , Replace DISPLAY NAME here. "display name" : 'DISPLAY NAME' } ) Make the request response = client . create space ( request ) Handle the response print ( response ) create space with user cred () Java chat/client-libraries/cloud/src/main/java/com/google/workspace/api/chat/samples/CreateSpaceUserCred.java View on GitHub import com.google.chat.v1.ChatServiceClient ; import com.google.chat.v1.CreateSpaceRequest ; import com.google.chat.v1.Space ; // This sample shows how to create space with user credential. public class CreateSpaceUserCred { private static final String SCOPE = "https://www.googleapis.com/auth/chat.spaces.create" ; public static void main ( String [] args ) throws Exception { try ( ChatServiceClient chatServiceClient = AuthenticationUtils . createClientWithUserCredentials ( ImmutableList . of ( SCOPE ))) { CreateSpaceRequest .
- Credentials . from service account file ( 'credentials.json' ) . with scopes ( SCOPES ) ) Build a service endpoint for Chat API. chat = build ( 'chat' , 'v1' , credentials = creds ) Use the service endpoint to call Chat API. result = chat . spaces () . create ( Details about the space to create. body = { To create a named space, set spaceType to SPACE. 'spaceType' : 'SPACE' , The user-visible name of the space. 'displayName' : 'API-made' , The customer ID of the Workspace domain. 'customer' : ' CUSTOMER ' } ) . execute () Prints details about the created space. print ( result ) if name == ' main ' : main () In the code, replace the following: CUSTOMER : the customer ID of the domain of the space in the format customer/{customer} where {customer} is the ID from the Admin SDK customer resource .
- SPACE ) // Replace DISPLAY NAME here. . setDisplayName ( "DISPLAY NAME" )); Space response = chatServiceClient . createSpace ( request . build ()); System . out . println ( JsonFormat . printer (). print ( response )); } } } Apps Script chat/advanced-service/Main.gs View on GitHub / This sample shows how to create space with user credential It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.spaces.create' referenced in the manifest file (appsscript.json). / function createSpaceUserCred () { // Initialize request argument(s) const space = { spaceType : "SPACE" , // TODO(developer): Replace DISPLAY NAME here displayName : "DISPLAY NAME" , }; // Make the request const response = Chat .

### Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Index ChatService (interface) AccessoryWidget (message) ActionResponse (message) ActionResponse.ResponseType (enum) ActionResponse.SelectionItems (message) ActionResponse.UpdatedWidget (message) ActionStatus (message) Annotation (message) AnnotationType (enum) AppCommandMetadata (message) AppCommandMetadata.AppCommandType (enum) AttachedGif (message) Attachment (message) Attachment.Source (enum) AttachmentDataRef (message) CalendarEventLinkData (message) CardWithId (message) ChatSpaceLinkData (message) CompleteImportSpaceRequest (message) CompleteImportSpaceResponse (message) ContextualAddOnMarkup (message) ContextualAddOnMarkup.Card (message) ContextualAddOnMarkup.Card.CardAction (message) ContextualAddOnMarkup.Card.CardHeader (message) ContextualAddOnMarkup.Card.CardHeader.ImageStyle (enum) ContextualAddOnMarkup.Card.Section (message) CreateCustomEmojiRequest (message) CreateMembershipRequest (message) CreateMessageRequest (message) CreateMessageRequest.MessageReplyOption (enum) CreateReactionRequest (message) CreateSectionRequest (message) CreateSpaceRequest (message) CustomEmoji (message) CustomEmoji.CustomEmojiPayload (message) CustomEmojiMetadata (message) DeleteCustomEmojiRequest (message) DeleteMembershipRequest (message) DeleteMessageRequest (message) DeleteReactionRequest (message) DeleteSectionRequest (message) DeleteSpaceRequest (message) DeletionMetadata (message) DeletionMetadata.DeletionType (enum) Dialog (message) DialogAction (message) DriveDataRef (message) DriveLinkData (message) Emoji (message) EmojiReactionSummary (message) FindDirectMessageRequest (message) FindGroupChatsRequest (message) FindGroupChatsResponse (message) ForwardedMetadata (message) GetAttachmentRequest (message) GetCustomEmojiRequest (message) GetMembershipRequest (message) GetMessageRequest (message) GetSpaceEventRequest (message) GetSpaceNotificationSettingRequest (message) GetSpaceReadStateRequest (message) GetSpaceRequest (message) GetThreadReadStateRequest (message) Group (message) HistoryState (enum) ListCustomEmojisRequest (message) ListCustomEmojisResponse (message) ListMembershipsRequest (message) ListMembershipsResponse (message) ListMessagesRequest (message) ListMessagesResponse (message) ListReactionsRequest (message) ListReactionsResponse (message) ListSectionItemsRequest (message) ListSectionItemsResponse (message) ListSectionsRequest (message) ListSectionsResponse (message) ListSpaceEventsRequest (message) ListSpaceEventsResponse (message) ListSpacesRequest (message) ListSpacesResponse (message) MatchedUrl (message) MeetSpaceLinkData (message) MeetSpaceLinkData.HuddleStatus (enum) MeetSpaceLinkData.Type (enum) Membership (message) Membership.MembershipRole (enum) Membership.MembershipState (enum) MembershipBatchCreatedEventData (message) MembershipBatchDeletedEventData (message) MembershipBatchUpdatedEventData (message) MembershipCreatedEventData (message) MembershipDeletedEventData (message) MembershipUpdatedEventData (message) Message (message) MessageBatchCreatedEventData (message) MessageBatchDeletedEventData (message) MessageBatchUpdatedEventData (message) MessageCreatedEventData (message) MessageDeletedEventData (message) MessageUpdatedEventData (message) MoveSectionItemRequest (message) MoveSectionItemResponse (message) PositionSectionRequest (message) PositionSectionRequest.Position (enum) PositionSectionResponse (message) QuotedMessageMetadata (message) QuotedMessageMetadata.QuoteType (enum) QuotedMessageSnapshot (message) Reaction (message) ReactionBatchCreatedEventData (message) ReactionBatchDeletedEventData (message) ReactionCreatedEventData (message) ReactionDeletedEventData (message) ReplaceMessageCardsRequest (message) ReplaceMessageCardsResponse (message) RichLinkMetadata (message) RichLinkMetadata.RichLinkType (enum) SearchSpacesRequest (message) SearchSpacesResponse (message) Section (message) Section.SectionType (enum) SectionItem (message) SetUpSpaceRequest (message) SlashCommand (message) SlashCommandMetadata (message) SlashCommandMetadata.Type (enum) Space (message) Space.AccessSettings (message) Space.AccessSettings.AccessState (enum) Space.MembershipCount (message) Space.PermissionSetting (message) Space.PermissionSettings (message) Space.PredefinedPermissionSettings (enum) Space.SpaceDetails (message) Space.SpaceThreadingState (enum) Space.SpaceType (enum) Space.Type (enum) SpaceBatchUpdatedEventData (message) SpaceEvent (message) SpaceNotificationSetting (message) SpaceNotificationSetting.MuteSetting (enum) SpaceNotificationSetting.NotificationSetting (enum) SpaceReadState (message) SpaceUpdatedEventData (message) SpaceView (enum) Thread (message) ThreadReadState (message) UpdateMembershipRequest (message) UpdateMessageRequest (message) UpdateSectionRequest (message) UpdateSpaceNotificationSettingRequest (message) UpdateSpaceReadStateRequest (message) UpdateSpaceRequest (message) User (message) User.Type (enum) UserMentionMetadata (message) UserMentionMetadata.Type (enum) WidgetMarkup (message) WidgetMarkup.Button (message) WidgetMarkup.FormAction (message) WidgetMarkup.FormAction.ActionParameter (message) WidgetMarkup.Icon (enum) WidgetMarkup.Image (message) WidgetMarkup.ImageButton (message) WidgetMarkup.KeyValue (message) WidgetMarkup.OnClick (message) WidgetMarkup.OpenLink (message) WidgetMarkup.TextButton (message) WidgetMarkup.TextParagraph (message) ChatService Enables developers to build Chat apps and integrations on Google Chat Platform.
- Supports the following types of authentication : App authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.app.spaces with administrator approval User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.spaces.readonly https://www.googleapis.com/auth/chat.spaces User authentication grants administrator privileges when an administrator account authenticates, use admin access is true , and one of the following authorization scopes is used: https://www.googleapis.com/auth/chat.admin.spaces.readonly https://www.googleapis.com/auth/chat.admin.spaces App authentication has the following limitations: space.access settings is only populated when using the chat.app.spaces scope. space.predefind permission settings and space.permission settings are only populated when using the chat.app.spaces scope, and only for spaces the app created.
- Setting predefined permission settings supports: App authentication with administrator approval with the chat.app.spaces or chat.app.spaces.create scopes.
- Reading and updating permission settings supports: App authentication with administrator approval with the chat.app.spaces scope.

