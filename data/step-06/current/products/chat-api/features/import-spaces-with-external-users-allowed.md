---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.202Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Import spaces with external users allowed"
feature_slug: "import-spaces-with-external-users-allowed"
latest_feature_date: "2024-07-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1"
  - "https://developers.google.com/workspace/chat/quickstart/webhooks"
keywords:
  - "import"
  - "spaces"
  - "external"
  - "users"
  - "allowed"
  - "imported"
  - "chat"
  - "can"
---

# Import spaces with external users allowed

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Imported Chat spaces can be configured to allow external users to join.

## Extended Definition

Imported Chat spaces can be configured to allow external users to join.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- [https://developers.google.com/workspace/chat/quickstart/webhooks](https://developers.google.com/workspace/chat/quickstart/webhooks)

## Supporting Pages

### REST Resource: spaces \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- While spaces are being imported, they aren't visible to users until the import is complete.
- JSON representation { "name" : string , "type" : enum ( Type ) , "spaceType" : enum ( SpaceType ) , "singleUserBotDm" : boolean , "threaded" : boolean , "displayName" : string , "externalUserAllowed" : boolean , "spaceThreadingState" : enum ( SpaceThreadingState ) , "spaceDetails" : { object ( SpaceDetails ) } , "spaceHistoryState" : enum ( HistoryState ) , "importMode" : boolean , "createTime" : string , "lastActiveTime" : string , "adminInstalled" : boolean , "membershipCount" : { object ( MembershipCount ) } , "accessSettings" : { object ( AccessSettings ) } , "spaceUri" : string , "importModeExpireTime" : string , "customer" : string , "predefinedPermissionSettings" : enum ( PredefinedPermissionSettings ) , "permissionSettings" : { object ( PermissionSettings ) } } Fields name string Identifier.
- Returns all spaces with spaceType == GROUP CHAT , whose human memberships contain exactly the calling user, and the users specified in FindGroupChatsRequest.users . get Returns details about a space. list Lists spaces the caller is a member of. patch Updates a space. search Returns a list of spaces in a Google Workspace organization based on an administrator's search. setup Creates a space and adds specified users to it.
- Methods completeImport Completes the import process for the specified space and makes it visible to users. create Creates a space. delete Deletes a named space. findDirectMessage Returns the existing direct message with the specified user. findGroupChats Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.

### Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Supports the following types of authentication : App authentication with administrator approval and the authorization scope: https://www.googleapis.com/auth/chat.app.memberships User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.memberships.app (to add the calling app to the space) https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, use admin access is true , and the following authorization scope is used: https://www.googleapis.com/auth/chat.admin.memberships App authentication is not supported for the following use cases: Inviting users external to the Workspace organization that owns the space.
- While spaces are being imported, they aren't visible to users until the import is complete.
- Index ChatService (interface) AccessoryWidget (message) ActionResponse (message) ActionResponse.ResponseType (enum) ActionResponse.SelectionItems (message) ActionResponse.UpdatedWidget (message) ActionStatus (message) Annotation (message) AnnotationType (enum) AppCommandMetadata (message) AppCommandMetadata.AppCommandType (enum) AttachedGif (message) Attachment (message) Attachment.Source (enum) AttachmentDataRef (message) CalendarEventLinkData (message) CardWithId (message) ChatSpaceLinkData (message) CompleteImportSpaceRequest (message) CompleteImportSpaceResponse (message) ContextualAddOnMarkup (message) ContextualAddOnMarkup.Card (message) ContextualAddOnMarkup.Card.CardAction (message) ContextualAddOnMarkup.Card.CardHeader (message) ContextualAddOnMarkup.Card.CardHeader.ImageStyle (enum) ContextualAddOnMarkup.Card.Section (message) CreateCustomEmojiRequest (message) CreateMembershipRequest (message) CreateMessageRequest (message) CreateMessageRequest.MessageReplyOption (enum) CreateReactionRequest (message) CreateSectionRequest (message) CreateSpaceRequest (message) CustomEmoji (message) CustomEmoji.CustomEmojiPayload (message) CustomEmojiMetadata (message) DeleteCustomEmojiRequest (message) DeleteMembershipRequest (message) DeleteMessageRequest (message) DeleteReactionRequest (message) DeleteSectionRequest (message) DeleteSpaceRequest (message) DeletionMetadata (message) DeletionMetadata.DeletionType (enum) Dialog (message) DialogAction (message) DriveDataRef (message) DriveLinkData (message) Emoji (message) EmojiReactionSummary (message) FindDirectMessageRequest (message) FindGroupChatsRequest (message) FindGroupChatsResponse (message) ForwardedMetadata (message) GetAttachmentRequest (message) GetCustomEmojiRequest (message) GetMembershipRequest (message) GetMessageRequest (message) GetSpaceEventRequest (message) GetSpaceNotificationSettingRequest (message) GetSpaceReadStateRequest (message) GetSpaceRequest (message) GetThreadReadStateRequest (message) Group (message) HistoryState (enum) ListCustomEmojisRequest (message) ListCustomEmojisResponse (message) ListMembershipsRequest (message) ListMembershipsResponse (message) ListMessagesRequest (message) ListMessagesResponse (message) ListReactionsRequest (message) ListReactionsResponse (message) ListSectionItemsRequest (message) ListSectionItemsResponse (message) ListSectionsRequest (message) ListSectionsResponse (message) ListSpaceEventsRequest (message) ListSpaceEventsResponse (message) ListSpacesRequest (message) ListSpacesResponse (message) MatchedUrl (message) MeetSpaceLinkData (message) MeetSpaceLinkData.HuddleStatus (enum) MeetSpaceLinkData.Type (enum) Membership (message) Membership.MembershipRole (enum) Membership.MembershipState (enum) MembershipBatchCreatedEventData (message) MembershipBatchDeletedEventData (message) MembershipBatchUpdatedEventData (message) MembershipCreatedEventData (message) MembershipDeletedEventData (message) MembershipUpdatedEventData (message) Message (message) MessageBatchCreatedEventData (message) MessageBatchDeletedEventData (message) MessageBatchUpdatedEventData (message) MessageCreatedEventData (message) MessageDeletedEventData (message) MessageUpdatedEventData (message) MoveSectionItemRequest (message) MoveSectionItemResponse (message) PositionSectionRequest (message) PositionSectionRequest.Position (enum) PositionSectionResponse (message) QuotedMessageMetadata (message) QuotedMessageMetadata.QuoteType (enum) QuotedMessageSnapshot (message) Reaction (message) ReactionBatchCreatedEventData (message) ReactionBatchDeletedEventData (message) ReactionCreatedEventData (message) ReactionDeletedEventData (message) ReplaceMessageCardsRequest (message) ReplaceMessageCardsResponse (message) RichLinkMetadata (message) RichLinkMetadata.RichLinkType (enum) SearchSpacesRequest (message) SearchSpacesResponse (message) Section (message) Section.SectionType (enum) SectionItem (message) SetUpSpaceRequest (message) SlashCommand (message) SlashCommandMetadata (message) SlashCommandMetadata.Type (enum) Space (message) Space.AccessSettings (message) Space.AccessSettings.AccessState (enum) Space.MembershipCount (message) Space.PermissionSetting (message) Space.PermissionSettings (message) Space.PredefinedPermissionSettings (enum) Space.SpaceDetails (message) Space.SpaceThreadingState (enum) Space.SpaceType (enum) Space.Type (enum) SpaceBatchUpdatedEventData (message) SpaceEvent (message) SpaceNotificationSetting (message) SpaceNotificationSetting.MuteSetting (enum) SpaceNotificationSetting.NotificationSetting (enum) SpaceReadState (message) SpaceUpdatedEventData (message) SpaceView (enum) Thread (message) ThreadReadState (message) UpdateMembershipRequest (message) UpdateMessageRequest (message) UpdateSectionRequest (message) UpdateSpaceNotificationSettingRequest (message) UpdateSpaceReadStateRequest (message) UpdateSpaceRequest (message) User (message) User.Type (enum) UserMentionMetadata (message) UserMentionMetadata.Type (enum) WidgetMarkup (message) WidgetMarkup.Button (message) WidgetMarkup.FormAction (message) WidgetMarkup.FormAction.ActionParameter (message) WidgetMarkup.Icon (enum) WidgetMarkup.Image (message) WidgetMarkup.ImageButton (message) WidgetMarkup.KeyValue (message) WidgetMarkup.OnClick (message) WidgetMarkup.OpenLink (message) WidgetMarkup.TextButton (message) WidgetMarkup.TextParagraph (message) ChatService Enables developers to build Chat apps and integrations on Google Chat Platform.
- Supports the following types of authentication : App authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.app.memberships (requires administrator approval ) User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, use admin access is true , and one of the following authorization scopes is used: https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.admin.memberships Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/chat.admin.memberships https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.import https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.memberships.readonly For more information, see the Authorization guide .

### Build a Google Chat app as a webhook \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/quickstart/webhooks](https://developers.google.com/workspace/chat/quickstart/webhooks)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To reply to a thread, specify that thread's threadKey value. "thread" : { "threadKey" : "THREAD KEY VALUE" }, } message headers = { "Content-Type" : "application/json; charset=UTF-8" } http obj = Http () response = http obj . request ( uri = url , method = "POST" , headers = message headers , body = dumps ( app message ), ) print ( response ) if name == " main " : main () Java solutions/webhook-chat-app/src/main/java/com/google/chat/webhook/AppThread.java View on GitHub import com.google.gson.Gson ; import java.net.http.HttpClient ; import java.net.http.HttpRequest ; import java.net.http.HttpResponse ; import java.util.Map ; import java.net.URI ; public class App { private static final String URL = "https://chat.googleapis.com/v1/spaces/SPACE ID/messages?key=KEY&token=TOKEN&messageReplyOption=REPLY MESSAGE FALLBACK TO NEW THREAD" ; private static final Gson gson = new Gson (); private static final HttpClient client = HttpClient . newHttpClient (); public static void main ( String [] args ) throws Exception { String message = gson . toJson ( Map . of ( "text" , "Hello from Java!" , "thread" , Map . of ( "threadKey" , "THREAD KEY VALUE" ) )); HttpRequest request = HttpRequest . newBuilder ( URI . create ( URL )) . header ( "accept" , "application/json; charset=UTF-8" ) .
- The following code sample starts or replies to a message thread: Node.js solutions/webhook-chat-app/thread-reply.js View on GitHub / Sends asynchronous message to Google Chat @return {Object} response / async function webhook () { const url = "https://chat.googleapis.com/v1/spaces/SPACE ID/messages?key=KEY&token=TOKEN&messageReplyOption=REPLY MESSAGE FALLBACK TO NEW THREAD" const res = await fetch ( url , { method : "POST" , headers : { "Content-Type" : "application/json; charset=UTF-8" }, body : JSON . stringify ({ text : "Hello from a Node script!" , thread : { threadKey : "THREAD KEY VALUE" } }) }); return await res . json (); } webhook (). then ( res = > console . log ( res )); Python solutions/webhook-chat-app/thread-reply.py View on GitHub from json import dumps from httplib2 import Http Copy the webhook URL from the Chat space where the webhook is registered.
- In App.java , paste the following code: solutions/webhook-chat-app/src/main/java/com/google/chat/webhook/App.java View on GitHub import com.google.gson.Gson ; import java.net.http.HttpClient ; import java.net.http.HttpRequest ; import java.net.http.HttpResponse ; import java.util.Map ; import java.net.URI ; public class App { private static final String URL = "https://chat.googleapis.com/v1/spaces/SPACE ID/messages?key=KEY&token=TOKEN" ; private static final Gson gson = new Gson (); private static final HttpClient client = HttpClient . newHttpClient (); public static void main ( String [] args ) throws Exception { String message = gson . toJson ( Map . of ( "text" , "Hello from Java!" )); HttpRequest request = HttpRequest . newBuilder ( URI . create ( URL )) . header ( "accept" , "application/json; charset=UTF-8" ) .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["Webhooks enable one-way, asynchronous messaging from external apps to Google Chat spaces.

