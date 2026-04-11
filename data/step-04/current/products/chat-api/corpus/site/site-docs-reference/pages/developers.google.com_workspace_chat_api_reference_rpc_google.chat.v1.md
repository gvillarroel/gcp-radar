---
title: "Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1
  title: "Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Reference
Send feedback
Package google.chat.v1
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Google Chat API allows developers to build apps and integrations that interact with Google Chat spaces and messages.
Developers can use the API to create, update, and delete spaces, messages, memberships, and reactions.
Authentication is required and can be app-based or user-based, with varying authorization scopes.
The API offers functionalities like custom emojis, direct messaging, and media attachments.
Comprehensive documentation and examples are provided for developers to utilize the API effectively.
Index
ChatService (interface)
AccessoryWidget (message)
ActionResponse (message)
ActionResponse.ResponseType (enum)
ActionResponse.SelectionItems (message)
ActionResponse.UpdatedWidget (message)
ActionStatus (message)
Annotation (message)
AnnotationType (enum)
AppCommandMetadata (message)
AppCommandMetadata.AppCommandType (enum)
AttachedGif (message)
Attachment (message)
Attachment.Source (enum)
AttachmentDataRef (message)
CalendarEventLinkData (message)
CardWithId (message)
ChatSpaceLinkData (message)
CompleteImportSpaceRequest (message)
CompleteImportSpaceResponse (message)
ContextualAddOnMarkup (message)
ContextualAddOnMarkup.Card (message)
ContextualAddOnMarkup.Card.CardAction (message)
ContextualAddOnMarkup.Card.CardHeader (message)
ContextualAddOnMarkup.Card.CardHeader.ImageStyle (enum)
ContextualAddOnMarkup.Card.Section (message)
CreateCustomEmojiRequest (message)
CreateMembershipRequest (message)
CreateMessageRequest (message)
CreateMessageRequest.MessageReplyOption (enum)
CreateReactionRequest (message)
CreateSectionRequest (message)
CreateSpaceRequest (message)
CustomEmoji (message)
CustomEmoji.CustomEmojiPayload (message)
CustomEmojiMetadata (message)
DeleteCustomEmojiRequest (message)
DeleteMembershipRequest (message)
DeleteMessageRequest (message)
DeleteReactionRequest (message)
DeleteSectionRequest (message)
DeleteSpaceRequest (message)
DeletionMetadata (message)
DeletionMetadata.DeletionType (enum)
Dialog (message)
DialogAction (message)
DriveDataRef (message)
DriveLinkData (message)
Emoji (message)
EmojiReactionSummary (message)
FindDirectMessageRequest (message)
FindGroupChatsRequest (message)
FindGroupChatsResponse (message)
ForwardedMetadata (message)
GetAttachmentRequest (message)
GetCustomEmojiRequest (message)
GetMembershipRequest (message)
GetMessageRequest (message)
GetSpaceEventRequest (message)
GetSpaceNotificationSettingRequest (message)
GetSpaceReadStateRequest (message)
GetSpaceRequest (message)
GetThreadReadStateRequest (message)
Group (message)
HistoryState (enum)
ListCustomEmojisRequest (message)
ListCustomEmojisResponse (message)
ListMembershipsRequest (message)
ListMembershipsResponse (message)
ListMessagesRequest (message)
ListMessagesResponse (message)
ListReactionsRequest (message)
ListReactionsResponse (message)
ListSectionItemsRequest (message)
ListSectionItemsResponse (message)
ListSectionsRequest (message)
ListSectionsResponse (message)
ListSpaceEventsRequest (message)
ListSpaceEventsResponse (message)
ListSpacesRequest (message)
ListSpacesResponse (message)
MatchedUrl (message)
MeetSpaceLinkData (message)
MeetSpaceLinkData.HuddleStatus (enum)
MeetSpaceLinkData.Type (enum)
Membership (message)
Membership.MembershipRole (enum)
Membership.MembershipState (enum)
MembershipBatchCreatedEventData (message)
MembershipBatchDeletedEventData (message)
MembershipBatchUpdatedEventData (message)
MembershipCreatedEventData (message)
MembershipDeletedEventData (message)
MembershipUpdatedEventData (message)
Message (message)
MessageBatchCreatedEventData (message)
MessageBatchDeletedEventData (message)
MessageBatchUpdatedEventData (message)
MessageCreatedEventData (message)
MessageDeletedEventData (message)
MessageUpdatedEventData (message)
MoveSectionItemRequest (message)
MoveSectionItemResponse (message)
PositionSectionRequest (message)
PositionSectionRequest.Position (enum)
PositionSectionResponse (message)
QuotedMessageMetadata (message)
QuotedMessageMetadata.QuoteType (enum)
QuotedMessageSnapshot (message)
Reaction (message)
ReactionBatchCreatedEventData (message)
ReactionBatchDeletedEventData (message)
ReactionCreatedEventData (message)
ReactionDeletedEventData (message)
ReplaceMessageCardsRequest (message)
ReplaceMessageCardsResponse (message)
RichLinkMetadata (message)
RichLinkMetadata.RichLinkType (enum)
SearchSpacesRequest (message)
SearchSpacesResponse (message)
Section (message)
Section.SectionType (enum)
SectionItem (message)
SetUpSpaceRequest (message)
SlashCommand (message)
SlashCommandMetadata (message)
SlashCommandMetadata.Type (enum)
Space (message)
Space.AccessSettings (message)
Space.AccessSettings.AccessState (enum)
Space.MembershipCount (message)
Space.PermissionSetting (message)
Space.PermissionSettings (message)
Space.PredefinedPermissionSettings (enum)
Space.SpaceDetails (message)
Space.SpaceThreadingState (enum)
Space.SpaceType (enum)
Space.Type (enum)
SpaceBatchUpdatedEventData (message)
SpaceEvent (message)
SpaceNotificationSetting (message)
SpaceNotificationSetting.MuteSetting (enum)
SpaceNotificationSetting.NotificationSetting (enum)
SpaceReadState (message)
SpaceUpdatedEventData (message)
SpaceView (enum)
Thread (message)
ThreadReadState (message)
UpdateMembershipRequest (message)
UpdateMessageRequest (message)
UpdateSectionRequest (message)
UpdateSpaceNotificationSettingRequest (message)
UpdateSpaceReadStateRequest (message)
UpdateSpaceRequest (message)
User (message)
User.Type (enum)
UserMentionMetadata (message)
UserMentionMetadata.Type (enum)
WidgetMarkup (message)
WidgetMarkup.Button (message)
WidgetMarkup.FormAction (message)
WidgetMarkup.FormAction.ActionParameter (message)
WidgetMarkup.Icon (enum)
WidgetMarkup.Image (message)
WidgetMarkup.ImageButton (message)
WidgetMarkup.KeyValue (message)
WidgetMarkup.OnClick (message)
WidgetMarkup.OpenLink (message)
WidgetMarkup.TextButton (message)
WidgetMarkup.TextParagraph (message)
ChatService
Enables developers to build Chat apps and integrations on Google Chat Platform.
CompleteImportSpace
rpc CompleteImportSpace( CompleteImportSpaceRequest ) returns ( CompleteImportSpaceResponse )
Completes the import process for the specified space and makes it visible to users.
Requires user authentication and domain-wide delegation with the authorization scope :
https://www.googleapis.com/auth/chat.import
For more information, see Authorize Google Chat apps to import data .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/chat.import
For more information, see the Authorization guide .
CreateCustomEmoji
rpc CreateCustomEmoji( CreateCustomEmojiRequest ) returns ( CustomEmoji )
Creates a custom emoji.
Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see Learn about custom emojis in Google Chat and Manage custom emoji permissions .
Requires user authentication with the authorization scope :
https://www.googleapis.com/auth/chat.customemojis
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/chat.customemojis
For more information, see the Authorization guide .
CreateMembership
rpc CreateMembership( CreateMembershipRequest ) returns ( Membership )
Creates a membership for the calling Chat app, a user, or a Google Group. Creating memberships for other Chat apps isn't supported. When creating a membership, if the specified member has their auto-accept policy turned off, then they're invited, and must accept the space invitation before joining. Otherwise, creating a membership adds the member directly to the specified space.
Supports the following types of authentication :
App authentication with administrator approval and the authorization scope:
https://www.googleapis.com/auth/chat.app.memberships
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.memberships.app (to add the calling app to the space)
https://www.googleapis.com/auth/chat.import (import mode spaces only)
User authentication grants administrator privileges when an administrator account authenticates, use_admin_access is true , and the following authorization scope is used:
https://www.googleapis.com/auth/chat.admin.memberships
App authentication is not supported for the following use cases:
Inviting users external to the Workspace organization that owns the space.
Adding a Google Group to a space.
Adding a Chat app to a space.
For example usage, see:
Invite or add a user to a space .
Invite or add a Google Group to a space .
Add the Chat app to a space .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.app.memberships
https://www.googleapis.com/auth/chat.admin.memberships
https://www.googleapis.com/auth/chat.import
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.memberships.app
For more information, see the Authorization guide .
CreateMessage
rpc CreateMessage( CreateMessageRequest ) returns ( Message )
Creates a message in a Google Chat space. For an example, see Send a message .
Supports the following types of authentication :
App authentication with the authorization scope:
https://www.googleapis.com/auth/chat.bot
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.messages.create
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.import (import mode spaces only)
Chat attributes the message sender differently depending on the type of authentication that you use in your request.
The following image shows how Chat attributes a message when you use app authentication. Chat displays the Chat app as the message sender. The content of the message can contain text ( text ), cards ( cardsV2 ), and accessory widgets ( accessoryWidgets ).
The following image shows how Chat attributes a message when you use user authentication. Chat displays the user as the message sender and attributes the Chat app to the message by displaying its name. The content of message can only contain text ( text ).
The maximum message size, including the message contents, is 32,000 bytes.
For webhook requests, the response doesn't contain the full message. The response only populates the name and thread.name fields in addition to the information that was in the request.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.bot
https://www.googleapis.com/auth/chat.import
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.messages.create
For more information, see the Authorization guide .
CreateReaction
rpc CreateReaction( CreateReactionRequest ) returns ( Reaction )
Creates a reaction and adds it to a message. For an example, see Add a reaction to a message .
Requires user authentication with one of the following authorization scopes :
https://www.googleapis.com/auth/chat.messages.reactions.create
https://www.googleapis.com/auth/chat.messages.reactions
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.import (import mode spaces only)
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.import
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.messages.reactions
https://www.googleapis.com/auth/chat.messages.reactions.create
For more information, see the Authorization guide .
CreateSection
rpc CreateSection( CreateSectionRequest ) returns ( Section )
Creates a section in Google Chat. Sections help users group conversations and customize the list of spaces displayed in Chat navigation panel. Only sections of type CUSTOM_SECTION can be created. For details, see Create and organize sections in Google Chat .
Requires user authentication with the authorization scope :
https://www.googleapis.com/auth/chat.users.sections
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/chat.users.sections
For more information, see the Authorization guide .
CreateSpace
rpc CreateSpace( CreateSpaceRequest ) returns ( Space )
Creates a space. Can be used to create a named space, or a group chat in Import mode . For an example, see Create a space .
Supports the following types of authentication :
App authentication with administrator approval and one of the following authorization scopes:
https://www.googleapis.com/auth/chat.app.spaces.create
https://www.googleapis.com/auth/chat.app.spaces
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.spaces.create
https://www.googleapis.com/auth/chat.spaces
https://www.googleapis.com/auth/chat.import (import mode spaces only)
When authenticating as an app, the space.customer field must be set in the request.
When authenticating as an app, the Chat app is added as a member of the space. However, unlike human authentication, the Chat app is not added as a space manager. By default, the Chat app can be removed from the space by all space members. To allow only space managers to remove the app from a space, set space.permission_settings.manage_apps to managers_allowed .
Space membership upon creation depends on whether the space is created in Import mode :
Import mode: No members are created.
All other modes: The calling user is added as a member. This is:
The app itself when using app authentication.
The human user when using user authentication.
If you receive the error message ALREADY_EXISTS when creating a space, try a different displayName . An existing space within the Google Workspace organization might already use this display name.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.app.spaces.create
https://www.googleapis.com/auth/chat.app.spaces
https://www.googleapis.com/auth/chat.import
https://www.googleapis.com/auth/chat.spaces
https://www.googleapis.com/auth/chat.spaces.create
For more information, see the Authorization guide .
DeleteCustomEmoji
rpc DeleteCustomEmoji( DeleteCustomEmojiRequest ) returns ( Empty )
Deletes a custom emoji. By default, users can only delete custom emoji they created. Emoji managers assigned by the administrator can delete any custom emoji in the organization. See Learn about custom emojis in Google Chat .
Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see Learn about custom emojis in Google Chat and Manage custom emoji permissions .
Requires user authentication with the authorization scope :
https://www.googleapis.com/auth/chat.customemojis
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/chat.customemojis
For more information, see the Authorization guide .
DeleteMembership
rpc DeleteMembership( DeleteMembershipRequest ) returns ( Membership )
Deletes a membership. For an example, see Remove a user or a Google Chat app from a space .
Supports the following types of authentication :
App authentication with administrator approval and the authorization scope:
https://www.googleapis.com/auth/chat.app.memberships
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.memberships.app (to remove the calling app from the space)
https://www.googleapis.com/auth/chat.import (import mode spaces only)
User authentication grants administrator privileges when an administrator account authenticates, use_admin_access is true , and the following authorization scope is used:
https://www.googleapis.com/auth/chat.admin.memberships
App authentication is not supported for the following use cases:
Removing a Google Group from a space.
Removing a Chat app from a space.
To delete memberships for space managers, the requester must be a space manager. If you're using app authentication the Chat app must be the space creator.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.app.memberships
https://www.googleapis.com/auth/chat.admin.memberships
https://www.googleapis.com/auth/chat.import
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.memberships.app
For more information, see the Authorization guide .
DeleteMessage
rpc DeleteMessage( DeleteMessageRequest ) returns ( Empty )
Deletes a message. For an example, see Delete a message .
Supports the following types of authentication :
App authentication with the authorization scope:
https://www.googleapis.com/auth/chat.bot
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.import (import mode spaces only)
When using app authentication, requests can only delete messages created by the calling Chat app.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.bot
https://www.googleapis.com/auth/chat.import
https://www.googleapis.com/auth/chat.messages
For more information, see the Authorization guide .
DeleteReaction
rpc DeleteReaction( DeleteReactionRequest ) returns ( Empty )
Deletes a reaction to a message. For an example, see Delete a reaction .
Requires user authentication with one of the following authorization scopes :
https://www.googleapis.com/auth/chat.messages.reactions
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.import (import mode spaces only)
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.import
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.messages.reactions
For more information, see the Authorization guide .
DeleteSection
rpc DeleteSection( DeleteSectionRequest ) returns ( Empty )
Deletes a section of type CUSTOM_SECTION .
If the section contains items, such as spaces, the items are moved to Google Chat's default sections and are not deleted.
For details, see Create and organize sections in Google Chat .
Requires user authentication with the authorization scope :
https://www.googleapis.com/auth/chat.users.sections
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/chat.users.sections
For more information, see the Authorization guide .
DeleteSpace
rpc DeleteSpace( DeleteSpaceRequest ) returns ( Empty )
Deletes a named space. Always performs a cascading delete, which means that the space's child resources—like messages posted in the space and memberships in the space—are also deleted. For an example, see Delete a space .
Supports the following types of authentication :
App authentication with administrator approval and the authorization scope:
https://www.googleapis.com/auth/chat.app.delete (only in spaces the app created)
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.delete
https://www.googleapis.com/auth/chat.import (import mode spaces only)
User authentication grants administrator privileges when an administrator account authenticates, use_admin_access is true , and the following authorization scope is used:
https://www.googleapis.com/auth/chat.admin.delete
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.app.delete
https://www.googleapis.com/auth/chat.admin.delete
https://www.googleapis.com/auth/chat.import
https://www.googleapis.com/auth/chat.delete
For more information, see the Authorization guide .
FindDirectMessage
rpc FindDirectMessage( FindDirectMessageRequest ) returns ( Space )
Returns the existing direct message with the specified user. If no direct message space is found, returns a 404 NOT_FOUND error. For an example, see Find a direct message .
With app authentication , returns the direct message space between the specified user and the calling Chat app.
With user authentication , returns the direct message space between the specified user and the authenticated user.
Supports the following types of authentication :
App authentication with the authorization scope:
https://www.googleapis.com/auth/chat.bot
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.spaces.readonly
https://www.googleapis.com/auth/chat.spaces
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.spaces
https://www.googleapis.com/auth/chat.spaces.readonly
https://www.googleapis.com/auth/chat.bot
For more information, see the Authorization guide .
FindGroupChats
rpc FindGroupChats( FindGroupChatsRequest ) returns ( FindGroupChatsResponse )
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features. Returns all spaces with spaceType == GROUP_CHAT , whose human memberships contain exactly the calling user, and the users specified in FindGroupChatsRequest.users . Only members that have joined the conversation are supported. For an example, see Find group chats .
If the calling user blocks, or is blocked by, some users, and no spaces with the entire specified set of users are found, this method returns spaces that don't include the blocked or blocking users.
The specified set of users must contain only human (non-app) memberships. A request that contains non-human users doesn't return any spaces.
Requires user authentication with one of the following authorization scopes :
https://www.googleapis.com/auth/chat.memberships.readonly
https://www.googleapis.com/auth/chat.memberships
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.memberships.readonly
For more information, see the Authorization guide .
GetAttachment
rpc GetAttachment( GetAttachmentRequest ) returns ( Attachment )
Gets the metadata of a message attachment. The attachment data is fetched using the media API . For an example, see Get metadata about a message attachment .
Requires app authentication with the authorization scope :
https://www.googleapis.com/auth/chat.bot
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/chat.bot
For more information, see the Authorization guide .
GetCustomEmoji
rpc GetCustomEmoji( GetCustomEmojiRequest ) returns ( CustomEmoji )
Returns details about a custom emoji.
Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see Learn about custom emojis in Google Chat and Manage custom emoji permissions .
Requires user authentication with one of the following authorization scopes :
https://www.googleapis.com/auth/chat.customemojis.readonly
https://www.googleapis.com/auth/chat.customemojis
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.customemojis
https://www.googleapis.com/auth/chat.customemojis.readonly
For more information, see the Authorization guide .
GetMembership
rpc GetMembership( GetMembershipRequest ) returns ( Membership )
Returns details about a membership. For an example, see Get details about a user's or Google Chat app's membership .
Supports the following types of authentication :
App authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.bot
https://www.googleapis.com/auth/chat.app.memberships (requires administrator approval )
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.memberships.readonly
https://www.googleapis.com/auth/chat.memberships
User authentication grants administrator privileges when an administrator account authenticates, use_admin_access is true , and one of the following authorization scopes is used:
https://www.googleapis.com/auth/chat.admin.memberships.readonly
https://www.googleapis.com/auth/chat.admin.memberships
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.admin.memberships
https://www.googleapis.com/auth/chat.admin.memberships.readonly
https://www.googleapis.com/auth/chat.app.memberships
https://www.googleapis.com/auth/chat.bot
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.memberships.readonly
For more information, see the Authorization guide .
GetMessage
rpc GetMessage( GetMessageRequest ) returns ( Message )
Returns details about a message. For an example, see Get details about a message .
Supports the following types of authentication :
App authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.bot : When using this authorization scope, this method returns details about a message the Chat app has access to, like direct messages and slash commands that invoke the Chat app.
https://www.googleapis.com/auth/chat.app.messages.readonly with administrator approval . When using this authentication scope, this method returns details about a public message in a space.
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.messages.readonly
https://www.googleapis.com/auth/chat.messages
Note: Might return a message from a blocked member or space.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.bot
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.messages.readonly
https://www.googleapis.com/auth/chat.app.messages.readonly
For more information, see the Authorization guide .
GetSpace
rpc GetSpace( GetSpaceRequest ) returns ( Space )
Returns details about a space. For an example, see Get details about a space .
Supports the following types of authentication :
App authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.bot
https://www.googleapis.com/auth/chat.app.spaces with administrator approval
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.spaces.readonly
https://www.googleapis.com/auth/chat.spaces
User authentication grants administrator privileges when an administrator account authenticates, use_admin_access is true , and one of the following authorization scopes is used:
https://www.googleapis.com/auth/chat.admin.spaces.readonly
https://www.googleapis.com/auth/chat.admin.spaces
App authentication has the following limitations:
space.access_settings is only populated when using the chat.app.spaces scope.
space.predefind_permission_settings and space.permission_settings are only populated when using the chat.app.spaces scope, and only for spaces the app created.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.admin.spaces
https://www.googleapis.com/auth/chat.admin.spaces.readonly
https://www.googleapis.com/auth/chat.spaces
https://www.googleapis.com/auth/chat.spaces.readonly
https://www.googleapis.com/auth/chat.bot
https://www.googleapis.com/auth/chat.app.spaces
For more information, see the Authorization guide .
GetSpaceEvent
rpc GetSpaceEvent( GetSpaceEventRequest ) returns ( SpaceEvent )
Returns an event from a Google Chat space. The event payload contains the most recent version of the resource that changed. For example, if you request an event about a new message but the message was later updated, the server returns the updated Message resource in the event payload.
Note: The permissionSettings field is not returned in the Space object of the Space event data for this request.
Supports the following types of authentication with an authorization scope appropriate for reading the requested data:
App authentication with administrator approval with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.app.spaces
https://www.googleapis.com/auth/chat.app.spaces.readonly
https://www.googleapis.com/auth/chat.app.messages.readonly
https://www.googleapis.com/auth/chat.app.memberships
https://www.googleapis.com/auth/chat.app.memberships.readonly
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.spaces.readonly
https://www.googleapis.com/auth/chat.spaces
https://www.googleapis.com/auth/chat.messages.readonly
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.messages.reactions.readonly
https://www.googleapis.com/auth/chat.messages.reactions
https://www.googleapis.com/auth/chat.memberships.readonly
https://www.googleapis.com/auth/chat.memberships
To get an event, the authenticated caller must be a member of the space.
For an example, see Get details about an event from a Google Chat space .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.app.memberships
https://www.googleapis.com/auth/chat.app.memberships.readonly
https://www.googleapis.com/auth/chat.app.messages.readonly
https://www.googleapis.com/auth/chat.app.spaces
https://www.googleapis.com/auth/chat.app.spaces.readonly
https://www.googleapis.com/auth/chat.spaces
https://www.googleapis.com/auth/chat.spaces.readonly
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.messages.readonly
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.memberships.readonly
https://www.googleapis.com/auth/chat.messages.reactions
https://www.googleapis.com/auth/chat.messages.reactions.readonly
For more information, see the Authorization guide .
GetSpaceNotificationSetting
rpc GetSpaceNotificationSetting( GetSpaceNotificationSettingRequest ) returns ( SpaceNotificationSetting )
Gets the space notification setting. For an example, see Get the caller's space notification setting .
Requires user authentication with the authorization scope :
https://www.googleapis.com/auth/chat.users.spacesettings
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/chat.users.spacesettings
For more information, see the Authorization guide .
GetSpaceReadState
rpc GetSpaceReadState( GetSpaceReadStateRequest ) returns ( SpaceReadState )
Returns details about a user's read state within a space, used to identify read and unread messages. For an example, see Get details about a user's space read state .
Requires user authentication with one of the following authorization scopes :
https://www.googleapis.com/auth/chat.users.readstate.readonly
https://www.googleapis.com/auth/chat.users.readstate
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.users.readstate
https://www.googleapis.com/auth/chat.users.readstate.readonly
For more information, see the Authorization guide .
GetThreadReadState
rpc GetThreadReadState( GetThreadReadStateRequest ) returns ( ThreadReadState )
Returns details about a user's read state within a thread, used to identify read and unread messages. For an example, see Get details about a user's thread read state .
Requires user authentication with one of the following authorization scopes :
https://www.googleapis.com/auth/chat.users.readstate.readonly
https://www.googleapis.com/auth/chat.users.readstate
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.users.readstate
https://www.googleapis.com/auth/chat.users.readstate.readonly
For more information, see the Authorization guide .
ListCustomEmojis
rpc ListCustomEmojis( ListCustomEmojisRequest ) returns ( ListCustomEmojisResponse )
Lists custom emojis visible to the authenticated user.
Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see Learn about custom emojis in Google Chat and Manage custom emoji permissions .
Requires user authentication with one of the following authorization scopes :
https://www.googleapis.com/auth/chat.customemojis.readonly
https://www.googleapis.com/auth/chat.customemojis
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.customemojis
https://www.googleapis.com/auth/chat.customemojis.readonly
For more information, see the Authorization guide .
ListMemberships
rpc ListMemberships( ListMembershipsRequest ) returns ( ListMembershipsResponse )
Lists memberships in a space. For an example, see List users and Google Chat apps in a space . Listing memberships with app authentication lists memberships in spaces that the Chat app has access to, but excludes Chat app memberships, including its own. Listing memberships with User authentication lists memberships in spaces that the authenticated user has access to.
Supports the following types of authentication :
App authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.bot
https://www.googleapis.com/auth/chat.app.memberships (requires administrator approval )
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.memberships.readonly
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.import (import mode spaces only)
User authentication grants administrator privileges when an administrator account authenticates, use_admin_access is true , and one of the following authorization scopes is used:
https://www.googleapis.com/auth/chat.admin.memberships.readonly
https://www.googleapis.com/auth/chat.admin.memberships
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.admin.memberships
https://www.googleapis.com/auth/chat.admin.memberships.readonly
https://www.googleapis.com/auth/chat.app.memberships
https://www.googleapis.com/auth/chat.bot
https://www.googleapis.com/auth/chat.import
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.memberships.readonly
For more information, see the Authorization guide .
ListMessages
rpc ListMessages( ListMessagesRequest ) returns ( ListMessagesResponse )
Lists messages in a space that the caller is a member of, including messages from blocked members and spaces. System messages, like those announcing new space members, aren't included. If you list messages from a space with no messages, the response is an empty object. When using a REST/HTTP interface, the response contains an empty JSON object, {} . For an example, see List messages .
Supports the following types of authentication :
App authentication with administrator approval with the authorization scope:
https://www.googleapis.com/auth/chat.app.messages.readonly . When using this authentication scope, this method only returns public messages in a space. It doesn't include private messages.
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.messages.readonly
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.import (import mode spaces only)
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.import
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.messages.readonly
https://www.googleapis.com/auth/chat.app.messages.readonly
For more information, see the Authorization guide .
ListReactions
rpc ListReactions( ListReactionsRequest ) returns ( ListReactionsResponse )
Lists reactions to a message. For an example, see List reactions for a message .
Requires user authentication with one of the following authorization scopes :
https://www.googleapis.com/auth/chat.messages.reactions.readonly
https://www.googleapis.com/auth/chat.messages.reactions
https://www.googleapis.com/auth/chat.messages.readonly
https://www.googleapis.com/auth/chat.messages
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.messages.readonly
https://www.googleapis.com/auth/chat.messages.reactions
https://www.googleapis.com/auth/chat.messages.reactions.readonly
For more information, see the Authorization guide .
ListSectionItems
rpc ListSectionItems( ListSectionItemsRequest ) returns ( ListSectionItemsResponse )
Lists items in a section.
Only spaces can be section items. For details, see Create and organize sections in Google Chat .
Requires user authentication with the authorization scope :
https://www.googleapis.com/auth/chat.users.sections
https://www.googleapis.com/auth/chat.users.sections.readonly
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.users.sections
https://www.googleapis.com/auth/chat.users.sections.readonly
For more information, see the Authorization guide .
ListSections
rpc ListSections( ListSectionsRequest ) returns ( ListSectionsResponse )
Lists sections available to the Chat user. Sections help users group their conversations and customize the list of spaces displayed in Chat navigation panel. For details, see Create and organize sections in Google Chat .
Requires user authentication with the authorization scope :
https://www.googleapis.com/auth/chat.users.sections
https://www.googleapis.com/auth/chat.users.sections.readonly
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.users.sections
https://www.googleapis.com/auth/chat.users.sections.readonly
For more information, see the Authorization guide .
ListSpaceEvents
rpc ListSpaceEvents( ListSpaceEventsRequest ) returns ( ListSpaceEventsResponse )
Lists events from a Google Chat space. For each event, the payload contains the most recent version of the Chat resource. For example, if you list events about new space members, the server returns Membership resources that contain the latest membership details. If new members were removed during the requested period, the event payload contains an empty Membership resource.
Supports the following types of authentication with an authorization scope appropriate for reading the requested data:
App authentication with administrator approval with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.app.spaces
https://www.googleapis.com/auth/chat.app.spaces.readonly
https://www.googleapis.com/auth/chat.app.messages.readonly
https://www.googleapis.com/auth/chat.app.memberships
https://www.googleapis.com/auth/chat.app.memberships.readonly
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.spaces.readonly
https://www.googleapis.com/auth/chat.spaces
https://www.googleapis.com/auth/chat.messages.readonly
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.messages.reactions.readonly
https://www.googleapis.com/auth/chat.messages.reactions
https://www.googleapis.com/auth/chat.memberships.readonly
https://www.googleapis.com/auth/chat.memberships
To list events, the authenticated caller must be a member of the space.
For an example, see List events from a Google Chat space .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.app.memberships
https://www.googleapis.com/auth/chat.app.memberships.readonly
https://www.googleapis.com/auth/chat.app.messages.readonly
https://www.googleapis.com/auth/chat.app.spaces
https://www.googleapis.com/auth/chat.app.spaces.readonly
https://www.googleapis.com/auth/chat.spaces
https://www.googleapis.com/auth/chat.spaces.readonly
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.messages.readonly
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.memberships.readonly
https://www.googleapis.com/auth/chat.messages.reactions
https://www.googleapis.com/auth/chat.messages.reactions.readonly
For more information, see the Authorization guide .
ListSpaces
rpc ListSpaces( ListSpacesRequest ) returns ( ListSpacesResponse )
Lists spaces the caller is a member of. Group chats and DMs aren't listed until the first message is sent. For an example, see List spaces .
Supports the following types of authentication :
App authentication with the authorization scope:
https://www.googleapis.com/auth/chat.bot
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.spaces.readonly
https://www.googleapis.com/auth/chat.spaces
To list all named spaces by Google Workspace organization, use the spaces.search() method using Workspace administrator privileges instead.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.spaces
https://www.googleapis.com/auth/chat.spaces.readonly
https://www.googleapis.com/auth/chat.bot
For more information, see the Authorization guide .
MoveSectionItem
rpc MoveSectionItem( MoveSectionItemRequest ) returns ( MoveSectionItemResponse )
Moves an item from one section to another. For example, if a section contains spaces, this method can be used to move a space to a different section. For details, see Create and organize sections in Google Chat .
Requires user authentication with the authorization scope :
https://www.googleapis.com/auth/chat.users.sections
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/chat.users.sections
For more information, see the Authorization guide .
PositionSection
rpc PositionSection( PositionSectionRequest ) returns ( PositionSectionResponse )
Changes the sort order of a section. For details, see Create and organize sections in Google Chat .
Requires user authentication with the authorization scope :
https://www.googleapis.com/auth/chat.users.sections
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/chat.users.sections
For more information, see the Authorization guide .
ReplaceMessageCards
rpc ReplaceMessageCards( ReplaceMessageCardsRequest ) returns ( ReplaceMessageCardsResponse )
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features. Replaces the cards included in a message.
A Chat app can only replace cards on a human-created message if the message already contains cards, and the cards were created by the app.
If the app replaces the cards with an empty list, the cards are removed. After removing the cards, the app cannot add cards back to the message.
Requires app authentication with the authorization scope : - https://www.googleapis.com/auth/chat.bot
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/chat.bot
For more information, see the Authorization guide .
SearchSpaces
rpc SearchSpaces( SearchSpacesRequest ) returns ( SearchSpacesResponse )
Returns a list of spaces in a Google Workspace organization based on an administrator's search. In the request, set use_admin_access to true . For an example, see Search for and manage spaces .
Requires user authentication with administrator privileges and one of the following authorization scopes :
https://www.googleapis.com/auth/chat.admin.spaces.readonly
https://www.googleapis.com/auth/chat.admin.spaces
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.admin.spaces
https://www.googleapis.com/auth/chat.admin.spaces.readonly
For more information, see the Authorization guide .
SetUpSpace
rpc SetUpSpace( SetUpSpaceRequest ) returns ( Space )
Creates a space and adds specified users to it. The calling user is automatically added to the space, and shouldn't be specified as a membership in the request. For an example, see Set up a space with initial members .
To specify the human members to add, add memberships with the appropriate membership.member.name . To add a human user, use users/{user} , where {user} can be the email address for the user. For users in the same Workspace organization {user} can also be the id for the person from the People API, or the id for the user in the Directory API. For example, if the People API Person profile ID for user@example.com is 123456789 , you can add the user to the space by setting the membership.member.name to users/user@example.com or users/123456789 .
To specify the Google groups to add, add memberships with the appropriate membership.group_member.name . To add or invite a Google group, use groups/{group} , where {group} is the id for the group from the Cloud Identity Groups API. For example, you can use Cloud Identity Groups lookup API to retrieve the ID 123456789 for group email group@example.com , then you can add the group to the space by setting the membership.group_member.name to groups/123456789 . Group email is not supported, and Google groups can only be added as members in named spaces.
For a named space or group chat, if the caller blocks, or is blocked by some members, or doesn't have permission to add some members, then those members aren't added to the created space.
To create a direct message (DM) between the calling user and another human user, specify exactly one membership to represent the human user. If one user blocks the other, the request fails and the DM isn't created.
To create a DM between the calling user and the calling app, set Space.singleUserBotDm to true and don't specify any memberships. You can only use this method to set up a DM with the calling app. To add the calling app as a member of a space or an existing DM between two human users, see Invite or add a user or app to a space .
If a DM already exists between two users, even when one user blocks the other at the time a request is made, then the existing DM is returned.
Spaces with threaded replies aren't supported. If you receive the error message ALREADY_EXISTS when setting up a space, try a different displayName . An existing space within the Google Workspace organization might already use this display name.
Requires user authentication with one of the following authorization scopes :
https://www.googleapis.com/auth/chat.spaces.create
https://www.googleapis.com/auth/chat.spaces
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.spaces
https://www.googleapis.com/auth/chat.spaces.create
For more information, see the Authorization guide .
UpdateMembership
rpc UpdateMembership( UpdateMembershipRequest ) returns ( Membership )
Updates a membership. For an example, see Update a user's membership in a space .
Supports the following types of authentication :
App authentication with administrator approval and the authorization scope:
https://www.googleapis.com/auth/chat.app.memberships (only in spaces the app created)
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.import (import mode spaces only)
User authentication grants administrator privileges when an administrator account authenticates, use_admin_access is true , and the following authorization scope is used:
https://www.googleapis.com/auth/chat.admin.memberships
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.app.memberships
https://www.googleapis.com/auth/chat.admin.memberships
https://www.googleapis.com/auth/chat.import
https://www.googleapis.com/auth/chat.memberships
For more information, see the Authorization guide .
UpdateMessage
rpc UpdateMessage( UpdateMessageRequest ) returns ( Message )
Updates a message. There's a difference between the patch and update methods. The patch method uses a patch request while the update method uses a put request. We recommend using the patch method. For an example, see Update a message .
Supports the following types of authentication :
App authentication with the authorization scope:
https://www.googleapis.com/auth/chat.bot
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.import (import mode spaces only)
When using app authentication, requests can only update messages created by the calling Chat app.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.bot
https://www.googleapis.com/auth/chat.import
https://www.googleapis.com/auth/chat.messages
For more information, see the Authorization guide .
UpdateSection
rpc UpdateSection( UpdateSectionRequest ) returns ( Section )
Updates a section. Only sections of type CUSTOM_SECTION can be updated. For details, see Create and organize sections in Google Chat .
Requires user authentication with the authorization scope :
https://www.googleapis.com/auth/chat.users.sections
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/chat.users.sections
For more information, see the Authorization guide .
UpdateSpace
rpc UpdateSpace( UpdateSpaceRequest ) returns ( Space )
Updates a space. For an example, see Update a space .
If you're updating the displayName field and receive the error message ALREADY_EXISTS , try a different display name.. An existing space within the Google Workspace organization might already use this display name.
Supports the following types of authentication :
App authentication with administrator approval and one of the following authorization scopes:
https://www.googleapis.com/auth/chat.app.spaces
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.spaces
https://www.googleapis.com/auth/chat.import (import mode spaces only)
User authentication grants administrator privileges when an administrator account authenticates, use_admin_access is true , and the following authorization scopes is used:
https://www.googleapis.com/auth/chat.admin.spaces
App authentication has the following limitations:
To update either space.predefined_permission_settings or space.permission_settings , the app must be the space creator.
Updating the space.access_settings.audience is not supported for app authentication.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.app.spaces
https://www.googleapis.com/auth/chat.admin.spaces
https://www.googleapis.com/auth/chat.import
https://www.googleapis.com/auth/chat.spaces
For more information, see the Authorization guide .
UpdateSpaceNotificationSetting
rpc UpdateSpaceNotificationSetting( UpdateSpaceNotificationSettingRequest ) returns ( SpaceNotificationSetting )
Updates the space notification setting. For an example, see Update the caller's space notification setting .
Requires user authentication with the authorization scope :
https://www.googleapis.com/auth/chat.users.spacesettings
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/chat.users.spacesettings
For more information, see the Authorization guide .
UpdateSpaceReadState
rpc UpdateSpaceReadState( UpdateSpaceReadStateRequest ) returns ( SpaceReadState )
Updates a user's read state within a space, used to identify read and unread messages. For an example, see Update a user's space read state .
Requires user authentication with the authorization scope :
https://www.googleapis.com/auth/chat.users.readstate
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/chat.users.readstate
For more information, see the Authorization guide .
AccessoryWidget
One or more interactive widgets that appear at the bottom of a message. For details, see Add interactive widgets at the bottom of a message .
Fields
Union field action . The type of action. action can be only one of the following:
button_list
ButtonList
A list of buttons.
ActionResponse
Parameters that a Chat app can use to configure how its response is posted.
Fields
type
ResponseType
Input only. The type of Chat app response.
url
string
Input only. URL for users to authenticate or configure. (Only for REQUEST_CONFIG response types.)
dialog_action
DialogAction
Input only. A response to an interaction event related to a dialog . Must be accompanied by ResponseType.Dialog .
updated_widget
UpdatedWidget
Input only. The response of the updated widget.
ResponseType
The type of Chat app response.
Enums
TYPE_UNSPECIFIED
Default type that's handled as NEW_MESSAGE .
NEW_MESSAGE
Post as a new message in the topic.
UPDATE_MESSAGE
Update the Chat app's message. This is only permitted on a CARD_CLICKED event where the message sender type is BOT .
UPDATE_USER_MESSAGE_CARDS
Update the cards on a user's message. This is only permitted as a response to a MESSAGE event with a matched url, or a CARD_CLICKED event where the message sender type is HUMAN . Text is ignored.
REQUEST_CONFIG
Privately ask the user for additional authentication or configuration.
DIALOG
Presents a dialog .
UPDATE_WIDGET
Widget text autocomplete options query.
SelectionItems
List of widget autocomplete results.
Fields
items[]
SelectionItem
An array of the SelectionItem objects.
UpdatedWidget
For selectionInput widgets, returns autocomplete suggestions for a multiselect menu.
Fields
widget
string
The ID of the updated widget. The ID must match the one for the widget that triggered the update request.
Union field updated_widget . The widget updated in response to a user action. updated_widget can be only one of the following:
suggestions
SelectionItems
List of widget autocomplete results
ActionStatus
Represents the status for a request to either invoke or submit a dialog .
Fields
status_code
Code
The status code.
user_facing_message
string
The message to send users about the status of their request. If unset, a generic message based on the status_code is sent.
Annotation
Output only. Annotations can be associated with the plain-text body of the message or with chips that link to Google Workspace resources like Google Docs or Sheets with start_index and length of 0. To add basic formatting to a text message, see Format text messages .
Example plain-text message body:
Hello @FooBot how are you!"
The corresponding annotations metadata:
"annotations":[{
"type":"USER_MENTION",
"startIndex":6,
"length":7,
"userMention": {
"user": {
"name":"users/{user}",
"displayName":"FooBot",
"avatarUrl":"https://goo.gl/aeDtrS",
"type":"BOT"
},
"type":"MENTION"
}
}]
Fields
type
AnnotationType
The type of this annotation.
length
int32
Length of the substring in the plain-text message body this annotation corresponds to. If not present, indicates a length of 0.
start_index
int32
Start index (0-based, inclusive) in the plain-text message body this annotation corresponds to.
Union field metadata . Additional metadata about the annotation. metadata can be only one of the following:
user_mention
UserMentionMetadata
The metadata of user mention.
slash_command
SlashCommandMetadata
The metadata for a slash command.
rich_link_metadata
RichLinkMetadata
The metadata for a rich link.
custom_emoji_metadata
CustomEmojiMetadata
The metadata for a custom emoji.
AnnotationType
Type of the annotation.
Enums
ANNOTATION_TYPE_UNSPECIFIED
Default value for the enum. Don't use.
USER_MENTION
A user is mentioned.
SLASH_COMMAND
A slash command is invoked.
RICH_LINK
A rich link annotation.
CUSTOM_EMOJI
A custom emoji annotation.
AppCommandMetadata
Metadata about a Chat app command .
Fields
app_command_id
int32
The ID for the command specified in the Chat API configuration.
app_command_type
AppCommandType
The type of Chat app command.
AppCommandType
The type of Chat app command. For details, see Types of Chat app commands .
Enums
APP_COMMAND_TYPE_UNSPECIFIED
Default value. Unspecified.
SLASH_COMMAND
A slash command. The user sends the command in a Chat message.
QUICK_COMMAND
A quick command. The user selects the command from the Chat menu in the message reply area.
AttachedGif
A GIF image that's specified by a URL.
Fields
uri
string
Output only. The URL that hosts the GIF image.
Attachment
An attachment in Google Chat.
Fields
name
string
Identifier. Resource name of the attachment.
Format: spaces/{space}/messages/{message}/attachments/{attachment} .
content_name
string
Output only. The original file name for the content, not the full path.
content_type
string
Output only. The content type (MIME type) of the file.
thumbnail_uri
string
Output only. The thumbnail URL which should be used to preview the attachment to a human user. Chat apps shouldn't use this URL to download attachment content.
download_uri
string
Output only. The download URL which should be used to allow a human user to download the attachment. Chat apps shouldn't use this URL to download attachment content.
source
Source
Output only. The source of the attachment.
Union field data_ref . The data reference to the attachment. data_ref can be only one of the following:
attachment_data_ref
AttachmentDataRef
Optional. A reference to the attachment data. This field is used to create or update messages with attachments, or with the media API to download the attachment data.
drive_data_ref
DriveDataRef
Output only. A reference to the Google Drive attachment. This field is used with the Google Drive API.
Source
The source of the attachment.
Enums
SOURCE_UNSPECIFIED
Reserved.
DRIVE_FILE
The file is a Google Drive file.
UPLOADED_CONTENT
The file is uploaded to Chat.
AttachmentDataRef
A reference to the attachment data.
Fields
resource_name
string
Optional. The resource name of the attachment data. This field is used with the media API to download the attachment data.
attachment_upload_token
string
Optional. Opaque token containing a reference to an uploaded attachment. Treated by clients as an opaque string and used to create or update Chat messages with attachments.
CalendarEventLinkData
Data for Calendar event links.
Fields
calendar_id
string
The Calendar identifier of the linked Calendar.
event_id
string
The Event identifier of the linked Calendar event.
CardWithId
A card in a Google Chat message.
Chat apps can create cards with app authentication . As part of the Developer Preview Program , if your Chat app authenticates as a user , it can create card messages. If your Chat app is not part of Developer Preview Program, it can't create cards with user authentication.
To learn how to create a message that contains cards, see Send a message .
Design and preview cards with the Card Builder.
Open the Card Builder
Fields
card_id
string
Required if the message contains multiple cards. A unique identifier for a card in a message.
card
Card
A card. Maximum size is 32 KB.
ChatSpaceLinkData
Data for Chat space links.
Fields
space
string
The space of the linked Chat space resource.
Format: spaces/{space}
thread
string
The thread of the linked Chat space resource.
Format: spaces/{space}/threads/{thread}
message
string
The message of the linked Chat space resource.
Format: spaces/{space}/messages/{message}
CompleteImportSpaceRequest
Request message for completing the import process for a space.
Fields
name
string
Required. Resource name of the import mode space.
Format: spaces/{space}
CompleteImportSpaceResponse
Response message for completing the import process for a space.
Fields
space
Space
The import mode space.
ContextualAddOnMarkup
This type has no fields.
The markup for developers to specify the contents of a contextual AddOn.
Card
A card is a UI element that can contain UI widgets such as text and images.
Fields
header
CardHeader
The header of the card. A header usually contains a title and an image.
sections[]
Section
Sections are separated by a line divider.
card_actions[]
CardAction
The actions of this card.
name
string
Name of the card.
CardAction
A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser.
Not supported by Google Chat apps.
Fields
action_label
string
The label used to be displayed in the action menu item.
on_click
OnClick
The onclick action for this action item.
CardHeader
Fields
title
string
The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each takes up one line. If only the title is specified, it takes up both lines.
subtitle
string
The subtitle of the card header.
image_style
ImageStyle
The image's type (for example, square border or circular border).
image_url
string
The URL of the image in the card header.
ImageStyle
Enums
IMAGE_STYLE_UNSPECIFIED
IMAGE
Square border.
AVATAR
Circular border.
Section
A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there's currently no need for layout properties (for example, float).
Fields
header
string
The header of the section. Formatted text is supported. For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons .
widgets[]
WidgetMarkup
A section must contain at least one widget.
CreateCustomEmojiRequest
A request to create a custom emoji.
Fields
custom_emoji
CustomEmoji
Required. The custom emoji to create.
CreateMembershipRequest
Request message for creating a membership.
Fields
parent
string
Required. The resource name of the space for which to create the membership.
Format: spaces/{space}
membership
Membership
Required. The membership relation to create.
The memberType field must contain a user with the user.name and user.type fields populated. The server will assign a resource name and overwrite anything specified.
When a Chat app creates a membership relation for a human user, it must use certain authorization scopes and set specific values for certain fields:
When authenticating as a user , the chat.memberships authorization scope is required.
When authenticating as an app , the chat.app.memberships authorization scope is required.
Set user.type to HUMAN , and set user.name with format users/{user} , where {user} can be the email address for the user. For users in the same Workspace organization {user} can also be the id of the person from the People API, or the id for the user in the Directory API. For example, if the People API Person profile ID for user@example.com is 123456789 , you can add the user to the space by setting the membership.member.name to users/user@example.com or users/123456789 .
Inviting users external to the Workspace organization that owns the space requires user authentication .
When a Chat app creates a membership relation for itself, it must authenticate as a user and use the chat.memberships.app scope, set user.type to BOT , and set user.name to users/app .
use_admin_access
bool
Optional. When true , the method runs using the user's Google Workspace administrator privileges.
The calling user must be a Google Workspace administrator with the manage chat and spaces conversations privilege .
Requires the chat.admin.memberships OAuth 2.0 scope .
Creating app memberships or creating memberships for users outside the administrator's Google Workspace organization isn't supported using admin access.
CreateMessageRequest
Creates a message.
Fields
parent
string
Required. The resource name of the space in which to create a message.
Format: spaces/{space}
message
Message
Required. Message body.
thread_key (deprecated)
string
This item is deprecated!
Optional. Deprecated: Use thread.thread_key instead. ID for the thread. Supports up to 4000 characters. To start or add to a thread, create a message and specify a threadKey or the thread.name . For example usage, see Start or reply to a message thread .
request_id
string
Optional. A unique request ID for this message. Specifying an existing request ID returns the message created with that ID instead of creating a new message.
message_reply_option
MessageReplyOption
Optional. Specifies whether a message starts a thread or replies to one. Only supported in named spaces.
When responding to user interactions , this field is ignored. For interactions within a thread, the reply is created in the same thread. Otherwise, the reply is created as a new thread.
message_id
string
Optional. A custom ID for a message. Lets Chat apps get, update, or delete a message without needing to store the system-assigned ID in the message's resource name (represented in the message name field).
The value for this field must meet the following requirements:
Begins with client- . For example, client-custom-name is a valid custom ID, but custom-name is not.
Contains up to 63 characters and only lowercase letters, numbers, and hyphens.
Is unique within a space. A Chat app can't use the same custom ID for different messages.
For details, see Name a message .
MessageReplyOption
Specifies how to reply to a message. More states might be added in the future.
Enums
MESSAGE_REPLY_OPTION_UNSPECIFIED
Default. Starts a new thread. Using this option ignores any thread ID or thread_key that's included.
REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD
Creates the message as a reply to the thread specified by thread ID or thread_key . If it fails, the message starts a new thread instead.
REPLY_MESSAGE_OR_FAIL
Creates the message as a reply to the thread specified by thread ID or thread_key . If a new thread_key is used, a new thread is created. If the message creation fails, a NOT_FOUND error is returned instead.
CreateReactionRequest
Creates a reaction to a message.
Fields
parent
string
Required. The message where the reaction is created.
Format: spaces/{space}/messages/{message}
reaction
Reaction
Required. The reaction to create.
CreateSectionRequest
Request message for creating a section.
Fields
parent
string
Required. The parent resource name where the section is created.
Format: users/{user}
section
Section
Required. The section to create.
CreateSpaceRequest
A request to create a named space with no members.
Fields
space
Space
Required. The displayName and spaceType fields must be populated. Only SpaceType.SPACE and SpaceType.GROUP_CHAT are supported. SpaceType.GROUP_CHAT can only be used if importMode is set to true.
If you receive the error message ALREADY_EXISTS , try a different displayName . An existing space within the Google Workspace organization might already use this display name.
The space name is assigned on the server so anything specified in this field will be ignored.
request_id
string
Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error.
CustomEmoji
Represents a custom emoji .
Fields
name
string
Identifier. The resource name of the custom emoji, assigned by the server.
Format: customEmojis/{customEmoji}
uid
string
Output only. Unique key for the custom emoji resource.
emoji_name
string
Optional. Immutable. User-provided name for the custom emoji, which is unique within the organization.
Required when the custom emoji is created, output only otherwise.
Emoji names must start and end with colons, must be lowercase and can only contain alphanumeric characters, hyphens, and underscores. Hyphens and underscores should be used to separate words and cannot be used consecutively.
Example: :valid-emoji-name:
temporary_image_uri
string
Output only. A temporary image URL for the custom emoji, valid for at least 10 minutes. Note that this is not populated in the response when the custom emoji is created.
payload
CustomEmojiPayload
Optional. Input only. Payload data. Required when the custom emoji is created.
CustomEmojiPayload
Payload data for the custom emoji.
Fields
file_content
bytes
Required. Input only. The image used for the custom emoji.
The payload must be under 256 KB and the dimension of the image must be square and between 64 and 500 pixels. The restrictions are subject to change.
filename
string
Required. Input only. The image file name.
Supported file extensions: .png , .jpg , .gif .
CustomEmojiMetadata
Annotation metadata for custom emoji.
Fields
custom_emoji
CustomEmoji
The custom emoji.
DeleteCustomEmojiRequest
Request for deleting a custom emoji.
Fields
name
string
Required. Resource name of the custom emoji to delete.
Format: customEmojis/{customEmoji}
You can use the emoji name as an alias for {customEmoji} . For example, customEmojis/:example-emoji: where :example-emoji: is the emoji name for a custom emoji.
DeleteMembershipRequest
Request to delete a membership in a space.
Fields
name
string
Required. Resource name of the membership to delete. Chat apps can delete human users' or their own memberships. Chat apps can't delete other apps' memberships.
When deleting a human membership, requires the chat.memberships scope with user authentication or the chat.memberships.app scope with app authentication and the spaces/{space}/members/{member} format. You can use the email as an alias for {member} . For example, spaces/{space}/members/example@gmail.com where example@gmail.com is the email of the Google Chat user.
When deleting an app membership, requires the chat.memberships.app scope and spaces/{space}/members/app format.
Format: spaces/{space}/members/{member} or spaces/{space}/members/app .
use_admin_access
bool
Optional. When true , the method runs using the user's Google Workspace administrator privileges.
The calling user must be a Google Workspace administrator with the manage chat and spaces conversations privilege .
Requires the chat.admin.memberships OAuth 2.0 scope .
Deleting app memberships in a space isn't supported using admin access.
DeleteMessageRequest
Request to delete a message.
Fields
name
string
Required. Resource name of the message.
Format: spaces/{space}/messages/{message}
If you've set a custom ID for your message, you can use the value from the clientAssignedMessageId field for {message} . For details, see Name a message .
force
bool
Optional. When true , deleting a message also deletes its threaded replies. When false , if a message has threaded replies, deletion fails.
Only applies when authenticating as a user . Has no effect when authenticating as a Chat app .
DeleteReactionRequest
Deletes a reaction to a message.
Fields
name
string
Required. Name of the reaction to delete.
Format: spaces/{space}/messages/{message}/reactions/{reaction}
DeleteSectionRequest
Request message for deleting a section. Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
Fields
name
string
Required. The name of the section to delete.
Format: users/{user}/sections/{section}
DeleteSpaceRequest
Request for deleting a space.
Fields
name
string
Required. Resource name of the space to delete.
Format: spaces/{space}
use_admin_access
bool
Optional. When true , the method runs using the user's Google Workspace administrator privileges.
The calling user must be a Google Workspace administrator with the manage chat and spaces conversations privilege .
Requires the chat.admin.delete OAuth 2.0 scope .
DeletionMetadata
Information about a deleted message. A message is deleted when delete_time is set.
Fields
deletion_type
DeletionType
Indicates who deleted the message.
DeletionType
Who deleted the message and how it was deleted. More values may be added in the future. See Edit or delete a message in Google Chat for details on when messages can be deleted.
Enums
DELETION_TYPE_UNSPECIFIED
This value is unused.
CREATOR
User deleted their own message.
SPACE_OWNER
An owner or manager deleted the message.
ADMIN
A Google Workspace administrator deleted the message. Administrators can delete any message in the space, including messages sent by any space member or Chat app.
APP_MESSAGE_EXPIRY
A Chat app deleted its own message when it expired.
CREATOR_VIA_APP
A Chat app deleted the message on behalf of the creator (using user authentication).
SPACE_OWNER_VIA_APP
A Chat app deleted the message on behalf of a space manager (using user authentication).
SPACE_MEMBER
A member of the space deleted the message. Users can delete messages sent by apps.
Dialog
Wrapper around the card body of the dialog.
Fields
body
Card
Input only. Body of the dialog, which is rendered in a modal. Google Chat apps don't support the following card entities: DateTimePicker , OnChangeAction .
DialogAction
Contains a dialog and request status code.
Fields
action_status
ActionStatus
Input only. Status for a request to either invoke or submit a dialog . Displays a status and message to users, if necessary. For example, in case of an error or success.
Union field action . Action to perform. action can be only one of the following:
dialog
Dialog
Input only. Dialog for the request.
DriveDataRef
A reference to the data of a drive attachment.
Fields
drive_file_id
string
The ID for the drive file. Use with the Drive API.
DriveLinkData
Data for Google Drive links.
Fields
drive_data_ref
DriveDataRef
A DriveDataRef which references a Google Drive file.
mime_type
string
The mime type of the linked Google Drive resource.
Emoji
An emoji that is used as a reaction to a message.
Fields
Union field content . Required. The content of the emoji. content can be only one of the following:
unicode
string
Optional. A basic emoji represented by a unicode string.
custom_emoji
CustomEmoji
A custom emoji.
EmojiReactionSummary
The number of people who reacted to a message with a specific emoji.
Fields
emoji
Emoji
Output only. Emoji associated with the reactions.
reaction_count
int32
Output only. The total number of reactions using the associated emoji.
FindDirectMessageRequest
A request to get direct message space based on the user resource.
Fields
name
string
Required. Resource name of the user to find direct message with.
Format: users/{user} , where {user} is either the id for the person from the People API, or the id for the user in the Directory API. For example, if the People API profile ID is 123456789 , you can find a direct message with that person by using users/123456789 as the name . When authenticated as a user , you can use the email as an alias for {user} . For example, users/example@gmail.com where example@gmail.com is the email of the Google Chat user.
FindGroupChatsRequest
A request to get group chat spaces based on user resources. Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
Fields
users[]
string
Optional. Resource names of all human users in group chat with the calling user. Chat apps can't be included in the request.
The maximum number of users that can be specified in a single request is 49 .
Format: users/{user} , where {user} is either the id for the person from the People API, or the id for the user in the Directory API. For example, to find all group chats with the calling user and two other users, with People API profile IDs 123456789 and 987654321 , you can use users/123456789 and users/987654321 . You can also use the email as an alias for {user} . For example, users/example@gmail.com where example@gmail.com is the email of the Google Chat user.
page_size
int32
Optional. The maximum number of spaces to return. The service might return fewer than this value.
If unspecified, at most 100 spaces are returned.
The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000.
Negative values return an INVALID_ARGUMENT error.
page_token
string
Optional. A page token, received from a previous call to find group chats. Provide this parameter to retrieve the subsequent page.
When paginating, all other parameters provided should match the call that provided the token. Passing different values may lead to unexpected results.
space_view
SpaceView
Requested space view type. If unset, defaults to SPACE_VIEW_RESOURCE_NAME_ONLY . Requests that specify SPACE_VIEW_EXPANDED must include scopes that allow reading space data, for example, https://www.googleapis.com/auth/chat.spaces or https://www.googleapis.com/auth/chat.spaces.readonly .
FindGroupChatsResponse
A response containing group chat spaces with exactly the calling user and the requested users. Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
Fields
spaces[]
Space
List of spaces in the requested (or first) page.
next_page_token
string
A token that you can send as pageToken to retrieve the next page of results. If empty, there are no subsequent pages.
ForwardedMetadata
Metadata about the source space from which a message was forwarded.
Fields
space
string
Output only. The resource name of the source space. Format: spaces/{space}
space_display_name
string
Output only. The display name of the source space or DM at the time of forwarding. For SPACE , this is the space name. For DIRECT_MESSAGE , this is the other participant's name (e.g., "User A"). For GROUP_CHAT , this is a generated name based on members' first names, limited to 5 including the creator (e.g., "User A, User B").
GetAttachmentRequest
Request to get an attachment.
Fields
name
string
Required. Resource name of the attachment, in the form spaces/{space}/messages/{message}/attachments/{attachment} .
GetCustomEmojiRequest
A request to return a single custom emoji.
Fields
name
string
Required. Resource name of the custom emoji.
Format: customEmojis/{customEmoji}
You can use the emoji name as an alias for {customEmoji} . For example, customEmojis/:example-emoji: where :example-emoji: is the emoji name for a custom emoji.
GetMembershipRequest
Request to get a membership of a space.
Fields
name
string
Required. Resource name of the membership to retrieve.
To get the app's own membership by using user authentication , you can optionally use spaces/{space}/members/app .
Format: spaces/{space}/members/{member} or spaces/{space}/members/app
You can use the user's email as an alias for {member} . For example, spaces/{space}/members/example@gmail.com where example@gmail.com is the email of the Google Chat user.
use_admin_access
bool
Optional. When true , the method runs using the user's Google Workspace administrator privileges.
The calling user must be a Google Workspace administrator with the manage chat and spaces conversations privilege .
Requires the chat.admin.memberships or chat.admin.memberships.readonly OAuth 2.0 scopes .
Getting app memberships in a space isn't supported when using admin access.
GetMessageRequest
Request to get a message.
Fields
name
string
Required. Resource name of the message.
Format: spaces/{space}/messages/{message}
If you've set a custom ID for your message, you can use the value from the clientAssignedMessageId field for {message} . For details, see Name a message .
GetSpaceEventRequest
Request message for getting a space event.
Fields
name
string
Required. The resource name of the space event.
Format: spaces/{space}/spaceEvents/{spaceEvent}
GetSpaceNotificationSettingRequest
Request message to get space notification setting. Only supports getting notification setting for the calling user.
Fields
name
string
Required. Format: users/{user}/spaces/{space}/spaceNotificationSetting
users/me/spaces/{space}/spaceNotificationSetting , OR
users/user@example.com/spaces/{space}/spaceNotificationSetting , OR
users/123456789/spaces/{space}/spaceNotificationSetting . Note: Only the caller's user id or email is allowed in the path.
GetSpaceReadStateRequest
Request message for GetSpaceReadState API.
Fields
name
string
Required. Resource name of the space read state to retrieve.
Only supports getting read state for the calling user.
To refer to the calling user, set one of the following:
The me alias. For example, users/me/spaces/{space}/spaceReadState .
Their Workspace email address. For example, users/user@example.com/spaces/{space}/spaceReadState .
Their user id. For example, users/123456789/spaces/{space}/spaceReadState .
Format: users/{user}/spaces/{space}/spaceReadState
GetSpaceRequest
A request to return a single space.
Fields
name
string
Required. Resource name of the space, in the form spaces/{space} .
Format: spaces/{space}
use_admin_access
bool
Optional. When true , the method runs using the user's Google Workspace administrator privileges.
The calling user must be a Google Workspace administrator with the manage chat and spaces conversations privilege .
Requires the chat.admin.spaces or chat.admin.spaces.readonly OAuth 2.0 scopes .
GetThreadReadStateRequest
Request message for GetThreadReadStateRequest API.
Fields
name
string
Required. Resource name of the thread read state to retrieve.
Only supports getting read state for the calling user.
To refer to the calling user, set one of the following:
The me alias. For example, users/me/spaces/{space}/threads/{thread}/threadReadState .
Their Workspace email address. For example, users/user@example.com/spaces/{space}/threads/{thread}/threadReadState .
Their user id. For example, users/123456789/spaces/{space}/threads/{thread}/threadReadState .
Format: users/{user}/spaces/{space}/threads/{thread}/threadReadState
Group
A Google Group in Google Chat.
Fields
name
string
Resource name for a Google Group.
Represents a group in Cloud Identity Groups API.
Format: groups/{group}
HistoryState
The history state for messages and spaces. Specifies how long messages and conversation threads are kept after creation.
Enums
HISTORY_STATE_UNSPECIFIED
Default value. Do not use.
HISTORY_OFF
History off. Messages and threads are kept for 24 hours .
HISTORY_ON
History on. The organization's Vault retention rules specify for how long messages and threads are kept.
ListCustomEmojisRequest
A request to return a list of custom emojis.
Fields
page_size
int32
Optional. The maximum number of custom emojis returned. The service can return fewer custom emojis than this value. If unspecified, the default value is 25. The maximum value is 200; values above 200 are changed to 200.
page_token
string
Optional. (If resuming from a previous query.)
A page token received from a previous list custom emoji call. Provide this to retrieve the subsequent page.
When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results.
filter
string
Optional. A query filter.
Supports filtering by creator.
To filter by creator, you must specify a valid value. Currently only creator("users/me") and NOT creator("users/me") are accepted to filter custom emojis by whether they were created by the calling user or not.
For example, the following query returns custom emojis created by the caller:
creator("users/me")
Invalid queries are rejected with an INVALID_ARGUMENT error.
ListCustomEmojisResponse
A response to list custom emojis.
Fields
custom_emojis[]
CustomEmoji
Unordered list. List of custom emojis.
next_page_token
string
A token that you can send as pageToken to retrieve the next page of results. If empty, there are no subsequent pages.
ListMembershipsRequest
Request message for listing memberships.
Fields
parent
string
Required. The resource name of the space for which to fetch a membership list.
Format: spaces/{space}
page_size
int32
Optional. The maximum number of memberships to return. The service might return fewer than this value.
If unspecified, at most 100 memberships are returned.
The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000.
Negative values return an INVALID_ARGUMENT error.
page_token
string
Optional. A page token, received from a previous call to list memberships. Provide this parameter to retrieve the subsequent page.
When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.
filter
string
Optional. A query filter.
You can filter memberships by a member's role ( role ) and type ( member.type ).
To filter by role, set role to ROLE_MEMBER or ROLE_MANAGER .
To filter by type, set member.type to HUMAN or BOT . You can also filter for member.type using the != operator.
To filter by both role and type, use the AND operator. To filter by either role or type, use the OR operator.
Either member.type = "HUMAN" or member.type != "BOT" is required when use_admin_access is set to true. Other member type filters will be rejected.
For example, the following queries are valid:
role = "ROLE_MANAGER" OR role = "ROLE_MEMBER"
member.type = "HUMAN" AND role = "ROLE_MANAGER"
member.type != "BOT"
The following queries are invalid:
member.type = "HUMAN" AND member.type = "BOT"
role = "ROLE_MANAGER" AND role = "ROLE_MEMBER"
Invalid queries are rejected by the server with an INVALID_ARGUMENT error.
show_groups
bool
Optional. When true , also returns memberships associated with a Google Group , in addition to other types of memberships. If a filter is set, Google Group memberships that don't match the filter criteria aren't returned.
show_invited
bool
Optional. When true , also returns memberships associated with invited members, in addition to other types of memberships. If a filter is set, invited memberships that don't match the filter criteria aren't returned.
Currently requires user authentication .
use_admin_access
bool
Optional. When true , the method runs using the user's Google Workspace administrator privileges.
The calling user must be a Google Workspace administrator with the manage chat and spaces conversations privilege .
Requires either the chat.admin.memberships.readonly or chat.admin.memberships OAuth 2.0 scope .
Listing app memberships in a space isn't supported when using admin access.
ListMembershipsResponse
Response to list memberships of the space.
Fields
memberships[]
Membership
Unordered list. List of memberships in the requested (or first) page.
next_page_token
string
A token that you can send as pageToken to retrieve the next page of results. If empty, there are no subsequent pages.
ListMessagesRequest
Lists messages in the specified space, that the user is a member of.
Fields
parent
string
Required. The resource name of the space to list messages from.
Format: spaces/{space}
page_size
int32
Optional. The maximum number of messages returned. The service might return fewer messages than this value.
If unspecified, at most 25 are returned.
The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000.
Negative values return an INVALID_ARGUMENT error.
page_token
string
Optional. A page token received from a previous list messages call. Provide this parameter to retrieve the subsequent page.
When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.
filter
string
Optional. A query filter.
You can filter messages by date ( create_time ) and thread ( thread.name ).
To filter messages by the date they were created, specify the create_time with a timestamp in RFC-3339 format and double quotation marks. For example, "2023-04-21T11:30:00-04:00" . You can use the greater than operator > to list messages that were created after a timestamp, or the less than operator < to list messages that were created before a timestamp. To filter messages within a time interval, use the AND operator between two timestamps.
To filter by thread, specify the thread.name , formatted as spaces/{space}/threads/{thread} . You can only specify one thread.name per query.
To filter by both thread and date, use the AND operator in your query.
For example, the following queries are valid:
create_time > "2012-04-21T11:30:00-04:00"
create_time > "2012-04-21T11:30:00-04:00" AND
thread.name = spaces/AAAAAAAAAAA/threads/123
create_time > "2012-04-21T11:30:00+00:00" AND
create_time < "2013-01-01T00:00:00+00:00" AND
thread.name = spaces/AAAAAAAAAAA/threads/123
thread.name = spaces/AAAAAAAAAAA/threads/123
Invalid queries are rejected by the server with an INVALID_ARGUMENT error.
order_by
string
Optional. How the list of messages is ordered. Specify a value to order by an ordering operation. Valid ordering operation values are as follows:
ASC for ascending.
DESC for descending.
The default ordering is create_time ASC .
show_deleted
bool
Optional. Whether to include deleted messages. Deleted messages include deleted time and metadata about their deletion, but message content is unavailable.
ListMessagesResponse
Response message for listing messages.
Fields
messages[]
Message
List of messages.
next_page_token
string
You can send a token as pageToken to retrieve the next page of results. If empty, there are no subsequent pages.
ListReactionsRequest
Lists reactions to a message.
Fields
parent
string
Required. The message users reacted to.
Format: spaces/{space}/messages/{message}
page_size
int32
Optional. The maximum number of reactions returned. The service can return fewer reactions than this value. If unspecified, the default value is 25. The maximum value is 200; values above 200 are changed to 200.
page_token
string
Optional. (If resuming from a previous query.)
A page token received from a previous list reactions call. Provide this to retrieve the subsequent page.
When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results.
filter
string
Optional. A query filter.
You can filter reactions by emoji (either emoji.unicode or emoji.custom_emoji.uid ) and user ( user.name ).
To filter reactions for multiple emojis or users, join similar fields with the OR operator, such as emoji.unicode = "🙂" OR emoji.unicode =
"👍" and user.name = "users/AAAAAA" OR user.name = "users/BBBBBB" .
To filter reactions by emoji and user, use the AND operator, such as emoji.unicode = "🙂" AND user.name = "users/AAAAAA" .
If your query uses both AND and OR , group them with parentheses.
For example, the following queries are valid:
user.name = "users/{user}"
emoji.unicode = "🙂"
emoji.custom_emoji.uid = "{uid}"
emoji.unicode = "🙂" OR emoji.unicode = "👍"
emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}"
emoji.unicode = "🙂" AND user.name = "users/{user}"
(emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}")
AND user.name = "users/{user}"
The following queries are invalid:
emoji.unicode = "🙂" AND emoji.unicode = "👍"
emoji.unicode = "🙂" AND emoji.custom_emoji.uid = "{uid}"
emoji.unicode = "🙂" OR user.name = "users/{user}"
emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}" OR
user.name = "users/{user}"
emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}"
AND user.name = "users/{user}"
Invalid queries are rejected with an INVALID_ARGUMENT error.
ListReactionsResponse
Response to a list reactions request.
Fields
reactions[]
Reaction
List of reactions in the requested (or first) page.
next_page_token
string
Continuation token to retrieve the next page of results. It's empty for the last page of results.
ListSectionItemsRequest
Request message for listing section items.
Fields
parent
string
Required. The parent, which is the section resource name that owns this collection of section items. Only supports listing section items for the calling user.
When you're filtering by space, use the wildcard - to search across all sections. For example, users/{user}/sections/- .
Format: users/{user}/sections/{section}
page_size
int32
Optional. The maximum number of section items to return. The service may return fewer than this value.
If unspecified, at most 10 section items will be returned.
The maximum value is 100. If you use a value more than 100, it's automatically changed to 100.
Negative values return an INVALID_ARGUMENT error.
page_token
string
Optional. A page token, received from a previous list section items call. Provide this to retrieve the subsequent page.
When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.
filter
string
Optional. A query filter.
Currently only supports filtering by space.
For example, space = spaces/{space} .
Invalid queries are rejected with an INVALID_ARGUMENT error.
ListSectionItemsResponse
Response message for listing section items.
Fields
section_items[]
SectionItem
The section items from the specified section.
next_page_token
string
A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
ListSectionsRequest
Request message for listing sections.
Fields
parent
string
Required. The parent, which is the user resource name that owns this collection of sections. Only supports listing sections for the calling user. To refer to the calling user, set one of the following:
The me alias. For example, users/me .
Their Workspace email address. For example, users/user@example.com .
Their user id. For example, users/123456789 .
Format: users/{user}
page_size
int32
Optional. The maximum number of sections to return. The service may return fewer than this value.
If unspecified, at most 10 sections will be returned.
The maximum value is 100. If you use a value more than 100, it's automatically changed to 100.
Negative values return an INVALID_ARGUMENT error.
page_token
string
Optional. A page token, received from a previous list sections call. Provide this to retrieve the subsequent page.
When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.
ListSectionsResponse
Response message for listing sections.
Fields
sections[]
Section
The sections from the specified user.
next_page_token
string
A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
ListSpaceEventsRequest
Request message for listing space events.
Fields
parent
string
Required. Resource name of the Google Chat space where the events occurred.
Format: spaces/{space} .
page_size
int32
Optional. The maximum number of space events returned. The service might return fewer than this value.
Negative values return an INVALID_ARGUMENT error.
page_token
string
Optional. A page token, received from a previous list space events call. Provide this to retrieve the subsequent page.
When paginating, all other parameters provided to list space events must match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.
filter
string
Required. A query filter.
You must specify at least one event type ( event_type ) using the has : operator. To filter by multiple event types, use the OR operator. Omit batch event types in your filter. The request automatically returns any related batch events. For example, if you filter by new reactions ( google.workspace.chat.reaction.v1.created ), the server also returns batch new reactions events ( google.workspace.chat.reaction.v1.batchCreated ). For a list of supported event types, see the SpaceEvents reference documentation .
Optionally, you can also filter by start time ( start_time ) and end time ( end_time ):
start_time : Exclusive timestamp from which to start listing space events. You can list events that occurred up to 28 days ago. If unspecified, lists space events from the past 28 days.
end_time : Inclusive timestamp until which space events are listed. If unspecified, lists events up to the time of the request.
To specify a start or end time, use the equals = operator and format in RFC-3339 . To filter by both start_time and end_time , use the AND operator.
For example, the following queries are valid:
start_time="2023-08-23T19:20:33+00:00" AND
end_time="2023-08-23T19:21:54+00:00"
start_time="2023-08-23T19:20:33+00:00" AND
(event_types:"google.workspace.chat.space.v1.updated" OR
event_types:"google.workspace.chat.message.v1.created")
The following queries are invalid:
start_time="2023-08-23T19:20:33+00:00" OR
end_time="2023-08-23T19:21:54+00:00"
event_types:"google.workspace.chat.space.v1.updated" AND
event_types:"google.workspace.chat.message.v1.created"
Invalid queries are rejected by the server with an INVALID_ARGUMENT error.
ListSpaceEventsResponse
Response message for listing space events.
Fields
space_events[]
SpaceEvent
Results are returned in chronological order (oldest event first). Note: The permissionSettings field is not returned in the Space object for list requests.
next_page_token
string
Continuation token used to fetch more events. If this field is omitted, there are no subsequent pages.
ListSpacesRequest
A request to list the spaces the caller is a member of.
Fields
page_size
int32
Optional. The maximum number of spaces to return. The service might return fewer than this value.
If unspecified, at most 100 spaces are returned.
The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000.
Negative values return an INVALID_ARGUMENT error.
page_token
string
Optional. A page token, received from a previous list spaces call. Provide this parameter to retrieve the subsequent page.
When paginating, the filter value should match the call that provided the page token. Passing a different value may lead to unexpected results.
filter
string
Optional. A query filter.
You can filter spaces by the space type ( space_type ).
To filter by space type, you must specify valid enum value, such as SPACE or GROUP_CHAT (the space_type can't be SPACE_TYPE_UNSPECIFIED ). To query for multiple space types, use the OR operator.
For example, the following queries are valid:
space_type = "SPACE"
spaceType = "GROUP_CHAT" OR spaceType = "DIRECT_MESSAGE"
Invalid queries are rejected by the server with an INVALID_ARGUMENT error.
ListSpacesResponse
The response for a list spaces request.
Fields
spaces[]
Space
List of spaces in the requested (or first) page. Note: The permissionSettings field is not returned in the Space object for list requests.
next_page_token
string
You can send a token as pageToken to retrieve the next page of results. If empty, there are no subsequent pages.
MatchedUrl
A matched URL in a Chat message. Chat apps can preview matched URLs. For more information, see Preview links .
Fields
url
string
Output only. The URL that was matched.
MeetSpaceLinkData
Data for Meet space links.
Fields
meeting_code
string
Meeting code of the linked Meet space.
type
Type
Indicates the type of the Meet space.
huddle_status
HuddleStatus
Optional. Output only. If the Meet is a Huddle, indicates the status of the huddle. Otherwise, this is unset.
HuddleStatus
The status of the huddle
Enums
HUDDLE_STATUS_UNSPECIFIED
Default value for the enum. Don't use.
STARTED
The huddle has started.
ENDED
The huddle has ended. In this case the Meet space URI and identifiers will no longer be valid.
MISSED
The huddle has been missed. In this case the Meet space URI and identifiers will no longer be valid.
Type
The type of the Meet space.
Enums
TYPE_UNSPECIFIED
Default value for the enum. Don't use.
MEETING
The Meet space is a meeting.
HUDDLE
The Meet space is a huddle.
Membership
Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space.
Fields
name
string
Identifier. Resource name of the membership, assigned by the server.
Format: spaces/{space}/members/{member}
state
MembershipState
Output only. State of the membership.
role
MembershipRole
Optional. User's role within a Chat space, which determines their permitted actions in the space.
This field can only be used as input in UpdateMembership .
create_time
Timestamp
Optional. Immutable. The creation time of the membership, such as when a member joined or was invited to join a space. This field is output only, except when used to import historical memberships in import mode spaces.
delete_time
Timestamp
Optional. Immutable. The deletion time of the membership, such as when a member left or was removed from a space. This field is output only, except when used to import historical memberships in import mode spaces.
Union field memberType . Member associated with this membership. Other member types might be supported in the future. memberType can be only one of the following:
member
User
Optional. The Google Chat user or app the membership corresponds to. If your Chat app authenticates as a user , the output populates the user name and type .
group_member
Group
Optional. The Google Group the membership corresponds to.
Reading or mutating memberships for Google Groups requires user authentication .
MembershipRole
Represents a user's permitted actions in a Chat space. More enum values might be added in the future.
Enums
MEMBERSHIP_ROLE_UNSPECIFIED
Default value. For users : they aren't a member of the space, but can be invited. For Google Groups : they're always assigned this role (other enum values might be used in the future).
ROLE_MEMBER
A member of the space. In the Chat UI, this role is called Member.
The user has basic permissions, like sending messages to the space. Managers and owners can grant members additional permissions in a space, including:
Add or remove members.
Modify space details.
Turn history on or off.
Mention everyone in the space with @all .
Manage Chat apps and webhooks installed in the space.
In direct messages and unnamed group conversations, everyone has this role.
ROLE_MANAGER
A space owner. In the Chat UI, this role is called Owner.
The user has the complete set of space permissions to manage the space, including:
Change the role of other members in the space to member, manager, or owner.
Delete the space.
Only supported in SpaceType.SPACE (named spaces).
To learn more, see Learn more about your role as a space owner or manager .
ROLE_ASSISTANT_MANAGER
A space manager. In the Chat UI, this role is called Manager.
The user has all basic permissions of ROLE_MEMBER , and can be granted a subset of administrative permissions by an owner. By default, managers have all the permissions of an owner except for the ability to:
Delete the space.
Make another space member an owner.
Change an owner's role.
By default, managers permissions include but aren't limited to:
Make another member a manager.
Delete messages in the space.
Manage space permissions.
Receive notifications for requests to join the space if the manager has the "manage members" permission in the space settings.
Make a space discoverable.
Only supported in SpaceType.SPACE (named spaces).
To learn more, see Manage space settings .
MembershipState
Specifies the member's relationship with a space. Other membership states might be supported in the future.
Enums
MEMBERSHIP_STATE_UNSPECIFIED
Default value. Don't use.
JOINED
The user is added to the space, and can participate in the space.
INVITED
The user is invited to join the space, but hasn't joined it.
NOT_A_MEMBER
The user doesn't belong to the space and doesn't have a pending invitation to join the space.
MembershipBatchCreatedEventData
Event payload for multiple new memberships.
Event type: google.workspace.chat.membership.v1.batchCreated
Fields
memberships[]
MembershipCreatedEventData
A list of new memberships.
MembershipBatchDeletedEventData
Event payload for multiple deleted memberships.
Event type: google.workspace.chat.membership.v1.batchDeleted
Fields
memberships[]
MembershipDeletedEventData
A list of deleted memberships.
MembershipBatchUpdatedEventData
Event payload for multiple updated memberships.
Event type: google.workspace.chat.membership.v1.batchUpdated
Fields
memberships[]
MembershipUpdatedEventData
A list of updated memberships.
MembershipCreatedEventData
Event payload for a new membership.
Event type: google.workspace.chat.membership.v1.created .
Fields
membership
Membership
The new membership.
MembershipDeletedEventData
Event payload for a deleted membership.
Event type: google.workspace.chat.membership.v1.deleted
Fields
membership
Membership
The deleted membership. Only the name and state fields are populated.
MembershipUpdatedEventData
Event payload for an updated membership.
Event type: google.workspace.chat.membership.v1.updated
Fields
membership
Membership
The updated membership.
Message
A message in a Google Chat space.
Fields
name
string
Identifier. Resource name of the message.
Format: spaces/{space}/messages/{message}
Where {space} is the ID of the space where the message is posted and {message} is a system-assigned ID for the message. For example, spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB .
If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing {message} with the value from the clientAssignedMessageId field. For example, spaces/AAAAAAAAAAA/messages/client-custom-name . For details, see Name a message .
sender
User
Output only. The user who created the message. If your Chat app authenticates as a user , the output populates the user name and type .
create_time
Timestamp
Optional. Immutable. For spaces created in Chat, the time at which the message was created. This field is output only, except when used in import mode spaces.
For import mode spaces, set this field to the historical timestamp at which the message was created in the source in order to preserve the original creation time.
last_update_time
Timestamp
Output only. The time at which the message was last edited by a user. If the message has never been edited, this field is empty.
delete_time
Timestamp
Output only. The time at which the message was deleted in Google Chat. If the message is never deleted, this field is empty.
text
string
Optional. Plain-text body of the message. The first link to an image, video, or web page generates a preview chip . You can also @mention a Google Chat user , or everyone in the space.
To learn about creating text messages, see Send a message .
formatted_text
string
Output only. Contains the message text with markups added to communicate formatting. This field might not capture all formatting visible in the UI, but includes the following:
Markup syntax for bold, italic, strikethrough, monospace, monospace block, bulleted list, and block quote.
User mentions using the format <users/{user}> .
Custom hyperlinks using the format <{url}|{rendered_text}> where the first string is the URL and the second is the rendered text—for example, <http://example.com|custom text> .
Custom emoji using the format :{emoji_name}: —for example, :smile: . This doesn't apply to Unicode emoji, such as U+1F600 for a grinning face emoji.
Bullet list items using asterisks ( * )—for example, * item .
For more information, see View text formatting sent in a message
cards[] (deprecated)
Card
This item is deprecated!
Deprecated: Use cards_v2 instead.
Rich, formatted, and interactive cards that you can use to display UI elements such as: formatted texts, buttons, and clickable images. Cards are normally displayed below the plain-text body of the message. cards and cards_v2 can have a maximum size of 32 KB.
cards_v2[]
CardWithId
Optional. An array of cards .
Chat apps can create cards with app authentication . As part of the Developer Preview Program , if your Chat app authenticates as a user , it can create card messages. If your Chat app is not part of Developer Preview Program, it can't create cards with user authentication.
To learn how to create a message that contains cards, see Send a message .
Design and preview cards with the Card Builder.
Open the Card Builder
annotations[]
Annotation
Output only. Annotations can be associated with the plain-text body of the message or with chips that link to Google Workspace resources like Google Docs or Sheets with start_index and length of 0.
thread
Thread
The thread the message belongs to. For example usage, see Start or reply to a message thread .
space
Space
Output only. If your Chat app authenticates as a user , the output only populates the space name .
fallback_text
string
Optional. A plain-text description of the message's cards, used when the actual cards can't be displayed—for example, mobile notifications.
action_response
ActionResponse
Input only. Parameters that a Chat app can use to configure how its response is posted.
argument_text
string
Output only. Plain-text body of the message with all Chat app mentions stripped out.
slash_command
SlashCommand
Output only. Slash command information, if applicable.
attachment[]
Attachment
Optional. User-uploaded attachment.
matched_url
MatchedUrl
Output only. A URL in spaces.messages.text that matches a link preview pattern. For more information, see Preview links .
thread_reply
bool
Output only. When true , the message is a response in a reply thread. When false , the message is visible in the space's top-level conversation as either the first message of a thread or a message with no threaded replies.
If the space doesn't support reply in threads, this field is always false .
client_assigned_message_id
string
Optional. A custom ID for the message. You can use field to identify a message, or to get, delete, or update a message. To set a custom ID, specify the messageId field when you create the message. For details, see Name a message .
emoji_reaction_summaries[]
EmojiReactionSummary
Output only. The list of emoji reaction summaries on the message.
private_message_viewer
User
Optional. Immutable. Input for creating a message, otherwise output only. The user that can view the message. When set, the message is private and only visible to the specified user and the Chat app. To include this field in your request, you must call the Chat API using app authentication and omit the following:
Attachments
Accessory widgets
For details, see Send a message privately .
deletion_metadata
DeletionMetadata
Output only. Information about a deleted message. A message is deleted when delete_time is set.
quoted_message_metadata
QuotedMessageMetadata
Optional. Information about a message that another message quotes.
When you create a message, you can quote messages within the same thread, or quote a root message to create a new root message. However, you can't quote a message reply from a different thread.
When you update a message, you can't add or replace the quotedMessageMetadata field, but you can remove it.
For example usage, see Quote another message .
attached_gifs[]
AttachedGif
Output only. GIF images that are attached to the message.
accessory_widgets[]
AccessoryWidget
Optional. One or more interactive widgets that appear at the bottom of a message. You can add accessory widgets to messages that contain text, cards, or both text and cards. Not supported for messages that contain dialogs. For details, see Add interactive widgets at the bottom of a message .
Creating a message with accessory widgets requires app authentication .
MessageBatchCreatedEventData
Event payload for multiple new messages.
Event type: google.workspace.chat.message.v1.batchCreated
Fields
messages[]
MessageCreatedEventData
A list of new messages.
MessageBatchDeletedEventData
Event payload for multiple deleted messages.
Event type: google.workspace.chat.message.v1.batchDeleted
Fields
messages[]
MessageDeletedEventData
A list of deleted messages.
MessageBatchUpdatedEventData
Event payload for multiple updated messages.
Event type: google.workspace.chat.message.v1.batchUpdated
Fields
messages[]
MessageUpdatedEventData
A list of updated messages.
MessageCreatedEventData
Event payload for a new message.
Event type: google.workspace.chat.message.v1.created
Fields
message
Message
The new message.
MessageDeletedEventData
Event payload for a deleted message.
Event type: google.workspace.chat.message.v1.deleted
Fields
message
Message
The deleted message. Only the name , createTime , and deletionMetadata fields are populated.
MessageUpdatedEventData
Event payload for an updated message.
Event type: google.workspace.chat.message.v1.updated
Fields
message
Message
The updated message.
MoveSectionItemRequest
Request message for moving a section item across sections.
Fields
name
string
Required. The resource name of the section item to move.
Format: users/{user}/sections/{section}/items/{item}
target_section
string
Required. The resource name of the section to move the section item to.
Format: users/{user}/sections/{section}
MoveSectionItemResponse
Response message for moving a section item.
Fields
section_item
SectionItem
The updated section item.
PositionSectionRequest
Request message for positioning a section.
Fields
name
string
Required. The resource name of the section to position.
Format: users/{user}/sections/{section}
Union field position . Required. The new position of the section. position can be only one of the following:
sort_order
int32
Optional. The absolute position of the section in the list of sections. The position must be greater than 0. If the position is greater than the number of sections, the section will be appended to the end of the list. This operation inserts the section at the given position and shifts the original section at that position, and those below it, to the next position.
relative_position
Position
Optional. The relative position of the section in the list of sections.
Position
The position of the section.
Enums
POSITION_UNSPECIFIED
Unspecified position.
START
Start of the list of sections.
END
End of the list of sections.
PositionSectionResponse
Response message for positioning a section.
Fields
section
Section
The updated section.
QuotedMessageMetadata
Information about a message that another message quotes.
When you create a message, you can quote messages within the same thread, or quote a root message to create a new root message. However, you can't quote a message reply from a different thread.
When you update a message, you can't add or replace the quotedMessageMetadata field, but you can remove it.
For example usage, see Quote another message .
Fields
name
string
Required. Resource name of the message that is quoted.
Format: spaces/{space}/messages/{message}
last_update_time
Timestamp
Required. The timestamp when the quoted message was created or when the quoted message was last updated.
If the message was edited, use this field, last_update_time . If the message was never edited, use create_time .
If last_update_time doesn't match the latest version of the quoted message, the request fails.
quote_type
QuoteType
Optional. Specifies the quote type. If not set, defaults to REPLY in the message read/write path for backward compatibility.
quoted_message_snapshot
QuotedMessageSnapshot
Output only. A snapshot of the quoted message's content.
forwarded_metadata
ForwardedMetadata
Output only. Metadata about the source space of the quoted message. Populated only for FORWARD quote type.
QuoteType
The quote type of the quoted message.
Enums
QUOTE_TYPE_UNSPECIFIED
Reserved. This value is unused.
REPLY
If quote_type is REPLY , you can do the following:
If you're replying in a thread, you can quote another message in that thread.
If you're creating a root message, you can quote another root message in that space.
You can't quote a message reply from a different thread.
QuotedMessageSnapshot
Provides a snapshot of the content of the quoted message at the time of quoting or forwarding
Fields
sender
string
Output only. The quoted message's author name. Populated for both REPLY & FORWARD quote types.
text
string
Output only. Snapshot of the quoted message's text content.
formatted_text
string
Output only. Contains the quoted message text with markups added to support rich formatting like hyperlinks,custom emojis, markup, etc. Populated only for FORWARD quote type.
annotations[]
Annotation
Output only. Annotations parsed from the text body of the quoted message. Populated only for FORWARD quote type.
attachments[]
Attachment
Output only. Attachments that were part of the quoted message. These are copies of the quoted message's attachment metadata. Populated only for FORWARD quote type.
Reaction
A reaction to a message.
Fields
name
string
Identifier. The resource name of the reaction.
Format: spaces/{space}/messages/{message}/reactions/{reaction}
user
User
Output only. The user who created the reaction.
emoji
Emoji
Required. The emoji used in the reaction.
ReactionBatchCreatedEventData
Event payload for multiple new reactions.
Event type: google.workspace.chat.reaction.v1.batchCreated
Fields
reactions[]
ReactionCreatedEventData
A list of new reactions.
ReactionBatchDeletedEventData
Event payload for multiple deleted reactions.
Event type: google.workspace.chat.reaction.v1.batchDeleted
Fields
reactions[]
ReactionDeletedEventData
A list of deleted reactions.
ReactionCreatedEventData
Event payload for a new reaction.
Event type: google.workspace.chat.reaction.v1.created
Fields
reaction
Reaction
The new reaction.
ReactionDeletedEventData
Event payload for a deleted reaction.
Type: google.workspace.chat.reaction.v1.deleted
Fields
reaction
Reaction
The deleted reaction.
ReplaceMessageCardsRequest
Request message for ReplaceMessageCards API method.
Fields
name
string
Required. The resource name of the message.
Format: spaces/{space}/messages/{message}
cards_v2[]
CardWithId
Optional. An array of cards to be included in the message. These cards will replace the existing cards of the message. If empty, the original cards included in the message will be cleared.
ReplaceMessageCardsResponse
This type has no fields.
Response message for ReplaceMessageCards API.
RichLinkMetadata
A rich link to a resource. Rich links can be associated with the plain-text body of the message or represent chips that link to Google Workspace resources like Google Docs or Sheets with start_index and length of 0.
Fields
uri
string
The URI of this link.
rich_link_type
RichLinkType
The rich link type.
Union field data . Data for the linked resource. data can be only one of the following:
drive_link_data
DriveLinkData
Data for a drive link.
chat_space_link_data
ChatSpaceLinkData
Data for a chat space link.
meet_space_link_data
MeetSpaceLinkData
Data for a Meet space link.
calendar_event_link_data
CalendarEventLinkData
Data for a Calendar event link.
RichLinkType
The rich link type. More types might be added in the future.
Enums
RICH_LINK_TYPE_UNSPECIFIED
Default value for the enum. Don't use.
DRIVE_FILE
A Google Drive rich link type.
CHAT_SPACE
A Chat space rich link type. For example, a space smart chip.
GMAIL_MESSAGE
A Gmail message rich link type. Specifically, a Gmail chip from Share to Chat . The API only supports reading messages with GMAIL_MESSAGE rich links.
MEET_SPACE
A Meet message rich link type. For example, a Meet chip.
CALENDAR_EVENT
A Calendar message rich link type. For example, a Calendar chip.
SearchSpacesRequest
Request to search for a list of spaces based on a query.
Fields
use_admin_access
bool
When true , the method runs using the user's Google Workspace administrator privileges.
The calling user must be a Google Workspace administrator with the manage chat and spaces conversations privilege .
Requires either the chat.admin.spaces.readonly or chat.admin.spaces OAuth 2.0 scope .
This method currently only supports admin access, thus only true is accepted for this field.
page_size
int32
The maximum number of spaces to return. The service may return fewer than this value.
If unspecified, at most 100 spaces are returned.
The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000.
page_token
string
A token, received from the previous search spaces call. Provide this parameter to retrieve the subsequent page.
When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.
query
string
Required. A search query.
You can search by using the following parameters:
create_time
customer
display_name
external_user_allowed
last_active_time
space_history_state
space_type
create_time and last_active_time accept a timestamp in RFC-3339 format and the supported comparison operators are: = , < , > , <= , >= .
customer is required and is used to indicate which customer to fetch spaces from. customers/my_customer is the only supported value.
display_name only accepts the HAS ( : ) operator. The text to match is first tokenized into tokens and each token is prefix-matched case-insensitively and independently as a substring anywhere in the space's display_name . For example, Fun Eve matches Fun event or The
evening was fun , but not notFun event or even .
external_user_allowed accepts either true or false .
space_history_state only accepts values from the historyState field of a space resource.
space_type is required and the only valid value is SPACE .
Across different fields, only AND operators are supported. A valid example is space_type = "SPACE" AND display_name:"Hello" and an invalid example is space_type = "SPACE" OR display_name:"Hello" .
Among the same field, space_type doesn't support AND or OR operators. display_name , 'space_history_state', and 'external_user_allowed' only support OR operators. last_active_time and create_time support both AND and OR operators. AND can only be used to represent an interval, such as last_active_time
< "2022-01-01T00:00:00+00:00" AND last_active_time >
"2023-01-01T00:00:00+00:00" .
The following example queries are valid:
customer = "customers/my_customer" AND space_type = "SPACE"
customer = "customers/my_customer" AND space_type = "SPACE" AND
display_name:"Hello World"
customer = "customers/my_customer" AND space_type = "SPACE" AND
(last_active_time < "2020-01-01T00:00:00+00:00" OR last_active_time >
"2022-01-01T00:00:00+00:00")
customer = "customers/my_customer" AND space_type = "SPACE" AND
(display_name:"Hello World" OR display_name:"Fun event") AND
(last_active_time > "2020-01-01T00:00:00+00:00" AND last_active_time <
"2022-01-01T00:00:00+00:00")
customer = "customers/my_customer" AND space_type = "SPACE" AND
(create_time > "2019-01-01T00:00:00+00:00" AND create_time <
"2020-01-01T00:00:00+00:00") AND (external_user_allowed = "true") AND
(space_history_state = "HISTORY_ON" OR space_history_state = "HISTORY_OFF")
order_by
string
Optional. How the list of spaces is ordered.
Supported attributes to order by are:
membership_count.joined_direct_human_user_count — Denotes the count of human users that have directly joined a space.
last_active_time — Denotes the time when last eligible item is added to any topic of this space.
create_time — Denotes the time of the space creation.
Valid ordering operation values are:
ASC for ascending. Default value.
DESC for descending.
The supported syntax are:
membership_count.joined_direct_human_user_count DESC
membership_count.joined_direct_human_user_count ASC
last_active_time DESC
last_active_time ASC
create_time DESC
create_time ASC
SearchSpacesResponse
Response with a list of spaces corresponding to the search spaces request.
Fields
spaces[]
Space
A page of the requested spaces.
next_page_token
string
A token that can be used to retrieve the next page. If this field is empty, there are no subsequent pages.
total_size
int32
The total number of spaces that match the query, across all pages. If the result is over 10,000 spaces, this value is an estimate.
Section
Represents a section in Google Chat. Sections help users organize their spaces. There are two types of sections:
System Sections: These are predefined sections managed by Google Chat. Their resource names are fixed, and they cannot be created, deleted, or have their display_name modified. Examples include:
users/{user}/sections/default-direct-messages
users/{user}/sections/default-spaces
users/{user}/sections/default-apps
Custom Sections: These are sections created and managed by the user. Creating a custom section using CreateSection requires a display_name . Custom sections can be updated using UpdateSection and deleted using DeleteSection .
Fields
name
string
Identifier. Resource name of the section.
For system sections, the section ID is a constant string:
DEFAULT_DIRECT_MESSAGES: users/{user}/sections/default-direct-messages
DEFAULT_SPACES: users/{user}/sections/default-spaces
DEFAULT_APPS: users/{user}/sections/default-apps
Format: users/{user}/sections/{section}
display_name
string
Optional. The section's display name. Only populated for sections of type CUSTOM_SECTION . Supports up to 80 characters. Required when creating a CUSTOM_SECTION .
sort_order
int32
Output only. The order of the section in relation to other sections. Sections with a lower sort_order value appear before sections with a higher value.
type
SectionType
Required. The type of the section.
SectionType
Section types.
Enums
SECTION_TYPE_UNSPECIFIED
Unspecified section type.
CUSTOM_SECTION
Custom section.
DEFAULT_DIRECT_MESSAGES
Default section containing DIRECT_MESSAGE between two human users or GROUP_CHAT spaces that don't belong to any custom section.
DEFAULT_SPACES
Default spaces that don't belong to any custom section.
DEFAULT_APPS
Default section containing a user's installed apps.
SectionItem
A user's defined section item. This is used to represent section items, such as spaces, grouped under a section.
Fields
name
string
Identifier. The resource name of the section item.
Format: users/{user}/sections/{section}/items/{item}
Union field item . Required. The section item. item can be only one of the following:
space
string
Optional. The space resource name.
Format: spaces/{space}
SetUpSpaceRequest
Request to create a space and add specified users to it.
Fields
space
Space
Required. The Space.spaceType field is required.
To create a space, set Space.spaceType to SPACE and set Space.displayName . If you receive the error message ALREADY_EXISTS when setting up a space, try a different displayName . An existing space within the Google Workspace organization might already use this display name.
To create a group chat, set Space.spaceType to GROUP_CHAT . Don't set Space.displayName .
To create a 1:1 conversation between humans, set Space.spaceType to DIRECT_MESSAGE and set Space.singleUserBotDm to false . Don't set Space.displayName or Space.spaceDetails .
To create an 1:1 conversation between a human and the calling Chat app, set Space.spaceType to DIRECT_MESSAGE and Space.singleUserBotDm to true . Don't set Space.displayName or Space.spaceDetails .
If a DIRECT_MESSAGE space already exists, that space is returned instead of creating a new space.
request_id
string
Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error.
memberships[]
Membership
Optional. The Google Chat users or groups to invite to join the space. Omit the calling user, as they are added automatically.
The set currently allows up to 49 memberships (in addition to the caller).
For human membership, the Membership.member field must contain a user with name populated (format: users/{user} ) and type set to User.Type.HUMAN . You can only add human users when setting up a space (adding Chat apps is only supported for direct message setup with the calling app). You can also add members using the user's email as an alias for {user}. For example, the user.name can be users/example@gmail.com . To invite Gmail users or users from external Google Workspace domains, user's email must be used for {user} .
For Google group membership, the Membership.group_member field must contain a group with name populated (format groups/{group} ). You can only add Google groups when setting Space.spaceType to SPACE .
Optional when setting Space.spaceType to SPACE .
Required when setting Space.spaceType to GROUP_CHAT , along with at least two memberships.
Required when setting Space.spaceType to DIRECT_MESSAGE with a human user, along with exactly one membership.
Must be empty when creating a 1:1 conversation between a human and the calling Chat app (when setting Space.spaceType to DIRECT_MESSAGE and Space.singleUserBotDm to true ).
SlashCommand
Metadata about a slash command in Google Chat.
Fields
command_id
int64
The ID of the slash command.
SlashCommandMetadata
Annotation metadata for slash commands (/).
Fields
bot
User
The Chat app whose command was invoked.
type
Type
The type of slash command.
command_name
string
The name of the invoked slash command.
command_id
int64
The command ID of the invoked slash command.
triggers_dialog
bool
Indicates whether the slash command is for a dialog.
Type
Enums
TYPE_UNSPECIFIED
Default value for the enum. Don't use.
ADD
Add Chat app to space.
INVOKE
Invoke slash command in space.
Space
A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
Fields
name
string
Identifier. Resource name of the space.
Format: spaces/{space}
Where {space} represents the system-assigned ID for the space. You can obtain the space ID by calling the spaces.list() method or from the space URL. For example, if the space URL is https://mail.google.com/mail/u/0/#chat/space/AAAAAAAAA , the space ID is AAAAAAAAA .
type (deprecated)
Type
This item is deprecated!
Output only. Deprecated: Use space_type instead. The type of a space.
space_type
SpaceType
Optional. The type of space. Required when creating a space or updating the space type of a space. Output only for other usage.
single_user_bot_dm
bool
Optional. Whether the space is a DM between a Chat app and a single human.
threaded (deprecated)
bool
This item is deprecated!
Output only. Deprecated: Use spaceThreadingState instead. Whether messages are threaded in this space.
display_name
string
Optional. The space's display name. Required when creating a space with a spaceType of SPACE . If you receive the error message ALREADY_EXISTS when creating a space or updating the displayName , try a different displayName . An existing space within the Google Workspace organization might already use this display name.
For direct messages, this field might be empty.
Supports up to 128 characters.
external_user_allowed
bool
Optional. Immutable. Whether this space permits any Google Chat user as a member. Input when creating a space in a Google Workspace organization. Omit this field when creating spaces in the following conditions:
The authenticated user uses a consumer account (unmanaged user account). By default, a space created by a consumer account permits any Google Chat user.
For existing spaces, this field is output only.
space_threading_state
SpaceThreadingState
Output only. The threading state in the Chat space.
space_details
SpaceDetails
Optional. Details about the space including description and rules.
space_history_state
HistoryState
Optional. The message history state for messages and threads in this space.
import_mode
bool
Optional. Whether this space is created in Import Mode as part of a data migration into Google Workspace. While spaces are being imported, they aren't visible to users until the import is complete.
Creating a space in Import Mode requires user authentication .
create_time
Timestamp
Optional. Immutable. For spaces created in Chat, the time the space was created. This field is output only, except when used in import mode spaces.
For import mode spaces, set this field to the historical timestamp at which the space was created in the source in order to preserve the original creation time.
Only populated in the output when spaceType is GROUP_CHAT or SPACE .
last_active_time
Timestamp
Output only. Timestamp of the last message in the space.
admin_installed
bool
Output only. For direct message (DM) spaces with a Chat app, whether the space was created by a Google Workspace administrator. Administrators can install and set up a direct message with a Chat app on behalf of users in their organization.
To support admin install, your Chat app must feature direct messaging.
membership_count
MembershipCount
Output only. The count of joined memberships grouped by member type. Populated when the space_type is SPACE , DIRECT_MESSAGE or GROUP_CHAT .
access_settings
AccessSettings
Optional. Specifies the access setting of the space. Only populated when the space_type is SPACE .
space_uri
string
Output only. The URI for a user to access the space.
import_mode_expire_time
Timestamp
Output only. The time when the space will be automatically deleted by the system if it remains in import mode.
Each space created in import mode must exit this mode before this expire time using spaces.completeImport .
This field is only populated for spaces that were created with import mode.
customer
string
Optional. Immutable. The customer id of the domain of the space. Required only when creating a space with app authentication and SpaceType is SPACE , otherwise should not be set.
In the format customers/{customer} , where customer is the id from the Admin SDK customer resource . Private apps can also use the customers/my_customer alias to create the space in the same Google Workspace organization as the app.
This field isn't populated for direct messages (DMs) or when the space is created by non-Google Workspace users.
Union field space_permission_settings . Represents the permission settings of a space. Only populated when the space_type is SPACE . space_permission_settings can be only one of the following:
predefined_permission_settings
PredefinedPermissionSettings
Optional. Input only. Predefined space permission settings, input only when creating a space. If the field is not set, a collaboration space is created. After you create the space, settings are populated in the PermissionSettings field.
Setting predefined permission settings supports:
App authentication with administrator approval with the chat.app.spaces or chat.app.spaces.create scopes.
User authentication
permission_settings
PermissionSettings
Optional. Space permission settings for existing spaces. Input for updating exact space permission settings, where existing permission settings are replaced. Output lists current permission settings.
Reading and updating permission settings supports:
App authentication with administrator approval with the chat.app.spaces scope. Only populated and settable when the Chat app created the space.
User authentication
AccessSettings
Represents the access setting of the space.
Fields
access_state
AccessState
Output only. Indicates the access state of the space.
audience
string
Optional. The resource name of the target audience who can discover the space, join the space, and preview the messages in the space. If unset, only users or Google Groups who have been individually invited or added to the space can access it. For details, see Make a space discoverable to a target audience .
Format: audiences/{audience}
To use the default target audience for the Google Workspace organization, set to audiences/default .
Reading the target audience supports:
User authentication
App authentication with administrator approval with the chat.app.spaces scope.
This field is not populated when using the chat.bot scope with app authentication .
Setting the target audience requires user authentication .
AccessState
Represents the access state of the space.
Enums
ACCESS_STATE_UNSPECIFIED
Access state is unknown or not supported in this API.
PRIVATE
Only users or Google Groups that have been individually added or invited by other users or Google Workspace administrators can discover and access the space.
DISCOVERABLE
A space manager has granted a target audience access to the space. Users or Google Groups that have been individually added or invited to the space can also discover and access the space. To learn more, see Make a space discoverable to specific users .
Creating discoverable spaces requires user authentication .
MembershipCount
Represents the count of memberships of a space, grouped into categories.
Fields
joined_direct_human_user_count
int32
Output only. Count of human users that have directly joined the space, not counting users joined by having membership in a joined group.
joined_group_count
int32
Output only. Count of all groups that have directly joined the space.
PermissionSetting
Represents a space permission setting.
Fields
managers_allowed
bool
Optional. Whether space owners ( ROLE_MANAGER ) have this permission.
members_allowed
bool
Optional. Whether basic space members ( ROLE_MEMBER ) have this permission.
assistant_managers_allowed
bool
Optional. Whether space managers ROLE_ASSISTANT_MANAGER ) have this permission.
PermissionSettings
Permission settings that you can specify when updating an existing named space.
To set permission settings when creating a space, specify the PredefinedPermissionSettings field in your request.
Fields
manage_members_and_groups
PermissionSetting
Optional. Setting for managing members and groups in a space.
modify_space_details
PermissionSetting
Optional. Setting for updating space name, avatar, description and guidelines.
toggle_history
PermissionSetting
Optional. Setting for toggling space history on and off.
use_at_mention_all
PermissionSetting
Optional. Setting for using @all in a space.
manage_apps
PermissionSetting
Optional. Setting for managing apps in a space.
manage_webhooks
PermissionSetting
Optional. Setting for managing webhooks in a space.
post_messages
PermissionSetting
Output only. Setting for posting messages in a space.
reply_messages
PermissionSetting
Optional. Setting for replying to messages in a space.
PredefinedPermissionSettings
Predefined permission settings that you can only specify when creating a named space. More settings might be added in the future. For details about permission settings for named spaces, see Learn about spaces .
Enums
PREDEFINED_PERMISSION_SETTINGS_UNSPECIFIED
Unspecified. Don't use.
COLLABORATION_SPACE
Setting to make the space a collaboration space where all members can post messages.
ANNOUNCEMENT_SPACE
Setting to make the space an announcement space where only space managers can post messages.
SpaceDetails
Details about the space including description and rules.
Fields
description
string
Optional. A description of the space. For example, describe the space's discussion topic, functional purpose, or participants.
Supports up to 150 characters.
guidelines
string
Optional. The space's rules, expectations, and etiquette.
Supports up to 5,000 characters.
SpaceThreadingState
Specifies the type of threading state in the Chat space.
Enums
SPACE_THREADING_STATE_UNSPECIFIED
Reserved.
THREADED_MESSAGES
Named spaces that support message threads. When users respond to a message, they can reply in-thread, which keeps their response in the context of the original message.
GROUPED_MESSAGES
Named spaces where the conversation is organized by topic. Topics and their replies are grouped together.
UNTHREADED_MESSAGES
Direct messages (DMs) between two people and group conversations between 3 or more people.
SpaceType
The type of space. Required when creating or updating a space. Output only for other usage.
Enums
SPACE_TYPE_UNSPECIFIED
Reserved.
SPACE
A place where people send messages, share files, and collaborate. A SPACE can include Chat apps.
GROUP_CHAT
Group conversations between 3 or more people. A GROUP_CHAT can include Chat apps.
DIRECT_MESSAGE
1:1 messages between two humans or a human and a Chat app.
Type
Deprecated: Use SpaceType instead.
Enums
TYPE_UNSPECIFIED
Reserved.
ROOM
Conversations between two or more humans.
DM
1:1 Direct Message between a human and a Chat app, where all messages are flat. Note that this doesn't include direct messages between two humans.
SpaceBatchUpdatedEventData
Event payload for multiple updates to a space.
Event type: google.workspace.chat.space.v1.batchUpdated
Fields
spaces[]
SpaceUpdatedEventData
A list of updated spaces.
SpaceEvent
An event that represents a change or activity in a Google Chat space. To learn more, see Work with events from Google Chat .
Fields
name
string
Resource name of the space event.
Format: spaces/{space}/spaceEvents/{spaceEvent}
event_time
Timestamp
Time when the event occurred.
event_type
string
Type of space event. Each event type has a batch version, which represents multiple instances of the event type that occur in a short period of time. For spaceEvents.list() requests, omit batch event types in your query filter. By default, the server returns both event type and its batch version.
Supported event types for messages :
New message: google.workspace.chat.message.v1.created
Updated message: google.workspace.chat.message.v1.updated
Deleted message: google.workspace.chat.message.v1.deleted
Multiple new messages: google.workspace.chat.message.v1.batchCreated
Multiple updated messages: google.workspace.chat.message.v1.batchUpdated
Multiple deleted messages: google.workspace.chat.message.v1.batchDeleted
Supported event types for memberships :
New membership: google.workspace.chat.membership.v1.created
Updated membership: google.workspace.chat.membership.v1.updated
Deleted membership: google.workspace.chat.membership.v1.deleted
Multiple new memberships: google.workspace.chat.membership.v1.batchCreated
Multiple updated memberships: google.workspace.chat.membership.v1.batchUpdated
Multiple deleted memberships: google.workspace.chat.membership.v1.batchDeleted
Supported event types for reactions :
New reaction: google.workspace.chat.reaction.v1.created
Deleted reaction: google.workspace.chat.reaction.v1.deleted
Multiple new reactions: google.workspace.chat.reaction.v1.batchCreated
Multiple deleted reactions: google.workspace.chat.reaction.v1.batchDeleted
Supported event types about the space :
Updated space: google.workspace.chat.space.v1.updated
Multiple space updates: google.workspace.chat.space.v1.batchUpdated
Union field payload .
payload can be only one of the following:
message_created_event_data
MessageCreatedEventData
Event payload for a new message.
Event type: google.workspace.chat.message.v1.created
message_updated_event_data
MessageUpdatedEventData
Event payload for an updated message.
Event type: google.workspace.chat.message.v1.updated
message_deleted_event_data
MessageDeletedEventData
Event payload for a deleted message.
Event type: google.workspace.chat.message.v1.deleted
message_batch_created_event_data
MessageBatchCreatedEventData
Event payload for multiple new messages.
Event type: google.workspace.chat.message.v1.batchCreated
message_batch_updated_event_data
MessageBatchUpdatedEventData
Event payload for multiple updated messages.
Event type: google.workspace.chat.message.v1.batchUpdated
message_batch_deleted_event_data
MessageBatchDeletedEventData
Event payload for multiple deleted messages.
Event type: google.workspace.chat.message.v1.batchDeleted
space_updated_event_data
SpaceUpdatedEventData
Event payload for a space update.
Event type: google.workspace.chat.space.v1.updated
space_batch_updated_event_data
SpaceBatchUpdatedEventData
Event payload for multiple updates to a space.
Event type: google.workspace.chat.space.v1.batchUpdated
membership_created_event_data
MembershipCreatedEventData
Event payload for a new membership.
Event type: google.workspace.chat.membership.v1.created
membership_updated_event_data
MembershipUpdatedEventData
Event payload for an updated membership.
Event type: google.workspace.chat.membership.v1.updated
membership_deleted_event_data
MembershipDeletedEventData
Event payload for a deleted membership.
Event type: google.workspace.chat.membership.v1.deleted
membership_batch_created_event_data
MembershipBatchCreatedEventData
Event payload for multiple new memberships.
Event type: google.workspace.chat.membership.v1.batchCreated
membership_batch_updated_event_data
MembershipBatchUpdatedEventData
Event payload for multiple updated memberships.
Event type: google.workspace.chat.membership.v1.batchUpdated
membership_batch_deleted_event_data
MembershipBatchDeletedEventData
Event payload for multiple deleted memberships.
Event type: google.workspace.chat.membership.v1.batchDeleted
reaction_created_event_data
ReactionCreatedEventData
Event payload for a new reaction.
Event type: google.workspace.chat.reaction.v1.created
reaction_deleted_event_data
ReactionDeletedEventData
Event payload for a deleted reaction.
Event type: google.workspace.chat.reaction.v1.deleted
reaction_batch_created_event_data
ReactionBatchCreatedEventData
Event payload for multiple new reactions.
Event type: google.workspace.chat.reaction.v1.batchCreated
reaction_batch_deleted_event_data
ReactionBatchDeletedEventData
Event payload for multiple deleted reactions.
Event type: google.workspace.chat.reaction.v1.batchDeleted
SpaceNotificationSetting
The notification setting of a user in a space.
Fields
name
string
Identifier. The resource name of the space notification setting. Format: users/{user}/spaces/{space}/spaceNotificationSetting .
notification_setting
NotificationSetting
The notification setting.
mute_setting
MuteSetting
The space notification mute setting.
MuteSetting
The space notification mute setting types.
Enums
MUTE_SETTING_UNSPECIFIED
Reserved.
UNMUTED
The user will receive notifications for the space based on the notification setting.
MUTED
The user will not receive any notifications for the space, regardless of the notification setting.
NotificationSetting
The notification setting types. Other types might be supported in the future.
Enums
NOTIFICATION_SETTING_UNSPECIFIED
Reserved.
ALL
Notifications are triggered by @mentions, followed threads, first message of new threads. All new threads are automatically followed, unless manually unfollowed by the user.
MAIN_CONVERSATIONS
The notification is triggered by @mentions, followed threads, first message of new threads. Not available for 1:1 direct messages.
FOR_YOU
The notification is triggered by @mentions, followed threads. Not available for 1:1 direct messages.
OFF
Notification is off.
SpaceReadState
A user's read state within a space, used to identify read and unread messages.
Fields
name
string
Resource name of the space read state.
Format: users/{user}/spaces/{space}/spaceReadState
last_read_time
Timestamp
Optional. The time when the user's space read state was updated. Usually this corresponds with either the timestamp of the last read message, or a timestamp specified by the user to mark the last read position in a space.
SpaceUpdatedEventData
Event payload for an updated space.
Event type: google.workspace.chat.space.v1.updated
Fields
space
Space
The updated space.
SpaceView
A view that specifies which fields should be populated on the Space resource. To ensure compatibility with future releases, we recommend that your code account for additional values. Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
Enums
SPACE_VIEW_UNSPECIFIED
The default / unset value.
SPACE_VIEW_RESOURCE_NAME_ONLY
Populates only the Space resource name.
SPACE_VIEW_EXPANDED
Populates Space resource fields. Note: the permissionSettings field will not be populated. Requests that specify SPACE_VIEW_EXPANDED must include scopes that allow reading space data, for example, https://www.googleapis.com/auth/chat.spaces or https://www.googleapis.com/auth/chat.spaces.readonly .
Thread
A thread in a Google Chat space. For example usage, see Start or reply to a message thread .
If you specify a thread when creating a message, you can set the messageReplyOption field to determine what happens if no matching thread is found.
Fields
name
string
Identifier. Resource name of the thread.
Example: spaces/{space}/threads/{thread}
thread_key
string
Optional. Input for creating or updating a thread. Otherwise, output only. ID for the thread. Supports up to 4000 characters.
This ID is unique to the Chat app that sets it. For example, if multiple Chat apps create a message using the same thread key, the messages are posted in different threads. To reply in a thread created by a person or another Chat app, specify the thread name field instead.
ThreadReadState
A user's read state within a thread, used to identify read and unread messages.
Fields
name
string
Resource name of the thread read state.
Format: users/{user}/spaces/{space}/threads/{thread}/threadReadState
last_read_time
Timestamp
The time when the user's thread read state was updated. Usually this corresponds with the timestamp of the last read message in a thread.
UpdateMembershipRequest
Request message for updating a membership.
Fields
membership
Membership
Required. The membership to update. Only fields specified by update_mask are updated.
update_mask
FieldMask
Required. The field paths to update. Separate multiple values with commas or use * to update all field paths.
Currently supported field paths:
role
use_admin_access
bool
Optional. When true , the method runs using the user's Google Workspace administrator privileges.
The calling user must be a Google Workspace administrator with the manage chat and spaces conversations privilege .
Requires the chat.admin.memberships OAuth 2.0 scope .
UpdateMessageRequest
Request to update a message.
Fields
message
Message
Required. Message with fields updated.
update_mask
FieldMask
Required. The field paths to update. Separate multiple values with commas or use * to update all field paths.
Currently supported field paths:
text
attachment
cards (Requires app authentication .)
cards_v2 (Requires app authentication .)
accessory_widgets (Requires app authentication .)
quoted_message_metadata (Only allows removal of the quoted message.)
allow_missing
bool
Optional. If true and the message isn't found, a new message is created and updateMask is ignored. The specified message ID must be client-assigned or the request fails.
UpdateSectionRequest
Request message for updating a section.
Fields
section
Section
Required. The section to update.
update_mask
FieldMask
Required. The mask to specify which fields to update.
Currently supported field paths:
display_name
UpdateSpaceNotificationSettingRequest
Request to update the space notification settings. Only supports updating notification setting for the calling user.
Fields
space_notification_setting
SpaceNotificationSetting
Required. The resource name for the space notification settings must be populated in the form of users/{user}/spaces/{space}/spaceNotificationSetting . Only fields specified by update_mask are updated.
update_mask
FieldMask
Required. Supported field paths:
notification_setting
mute_setting
UpdateSpaceReadStateRequest
Request message for UpdateSpaceReadState API.
Fields
space_read_state
SpaceReadState
Required. The space read state and fields to update.
Only supports updating read state for the calling user.
To refer to the calling user, set one of the following:
The me alias. For example, users/me/spaces/{space}/spaceReadState .
Their Workspace email address. For example, users/user@example.com/spaces/{space}/spaceReadState .
Their user id. For example, users/123456789/spaces/{space}/spaceReadState .
Format: users/{user}/spaces/{space}/spaceReadState
update_mask
FieldMask
Required. The field paths to update. Currently supported field paths:
last_read_time
When the last_read_time is before the latest message create time, the space appears as unread in the UI.
To mark the space as read, set last_read_time to any value later (larger) than the latest message create time. The last_read_time is coerced to match the latest message create time. Note that the space read state only affects the read state of messages that are visible in the space's top-level conversation. Replies in threads are unaffected by this timestamp, and instead rely on the thread read state.
UpdateSpaceRequest
A request to update a single space.
Fields
space
Space
Required. Space with fields to be updated. Space.name must be populated in the form of spaces/{space} . Only fields specified by update_mask are updated.
update_mask
FieldMask
Required. The updated field paths, comma separated if there are multiple.
You can update the following fields for a space:
space_details : Updates the space's description and guidelines. You must pass both description and guidelines in the update request as SpaceDetails . If you only want to update one of the fields, pass the existing value for the other field.
display_name : Only supports updating the display name for spaces where spaceType field is SPACE . If you receive the error message ALREADY_EXISTS , try a different value. An existing space within the Google Workspace organization might already use this display name.
space_type : Only supports changing a GROUP_CHAT space type to SPACE . Include display_name together with space_type in the update mask and ensure that the specified space has a non-empty display name and the SPACE space type. Including the space_type mask and the SPACE type in the specified space when updating the display name is optional if the existing space already has the SPACE type. Trying to update the space type in other ways results in an invalid argument error. space_type is not supported with useAdminAccess .
space_history_state : Updates space history settings by turning history on or off for the space. Only supported if history settings are enabled for the Google Workspace organization. To update the space history state, you must omit all other field masks in your request. space_history_state is not supported with useAdminAccess .
access_settings.audience : Updates the access setting of who can discover the space, join the space, and preview the messages in named space where spaceType field is SPACE . If the existing space has a target audience, you can remove the audience and restrict space access by omitting a value for this field mask. To update access settings for a space, the authenticating user must be a space manager and omit all other field masks in your request. You can't update this field if the space is in import mode . To learn more, see Make a space discoverable to specific users . access_settings.audience is not supported with useAdminAccess .
permission_settings : Supports changing the permission settings of a space. When updating permission settings, you can only specify permissionSettings field masks; you cannot update other field masks at the same time. The supported field masks include:
permission_settings.manageMembersAndGroups
permission_settings.modifySpaceDetails
permission_settings.toggleHistory
permission_settings.useAtMentionAll
permission_settings.manageApps
permission_settings.manageWebhooks
permission_settings.replyMessages
use_admin_access
bool
Optional. When true , the method runs using the user's Google Workspace administrator privileges.
The calling user must be a Google Workspace administrator with the manage chat and spaces conversations privilege .
Requires the chat.admin.spaces OAuth 2.0 scope .
Some FieldMask values are not supported using admin access. For details, see the description of update_mask .
User
A user in Google Chat. When returned as an output from a request, if your Chat app authenticates as a user , the output for a User resource only populates the user's name and type .
Fields
name
string
Resource name for a Google Chat user .
Format: users/{user} . users/app can be used as an alias for the calling app bot user.
For human users , {user} is the same user identifier as:
the id for the Person in the People API. For example, users/123456789 in Chat API represents the same person as the 123456789 Person profile ID in People API.
the id for a user in the Admin SDK Directory API.
the user's email address can be used as an alias for {user} in API requests. For example, if the People API Person profile ID for user@example.com is 123456789 , you can use users/user@example.com as an alias to reference users/123456789 . Only the canonical resource name (for example users/123456789 ) will be returned from the API.
display_name
string
Output only. The user's display name.
domain_id
string
Unique identifier of the user's Google Workspace domain.
type
Type
User type.
is_anonymous
bool
Output only. When true , the user is deleted or their profile is not visible.
Type
Enums
TYPE_UNSPECIFIED
Default value for the enum. DO NOT USE.
HUMAN
Human user.
BOT
Chat app user.
UserMentionMetadata
Annotation metadata for user mentions (@).
Fields
user
User
The user mentioned.
type
Type
The type of user mention.
Type
Enums
TYPE_UNSPECIFIED
Default value for the enum. Don't use.
ADD
Add user to space.
MENTION
Mention user in space.
WidgetMarkup
A widget is a UI element that presents text and images.
Fields
buttons[]
Button
A list of buttons. Buttons is also oneof data and only one of these fields should be set.
Union field data . A WidgetMarkup can only have one of the following items. You can use multiple WidgetMarkup fields to display more items. data can be only one of the following:
text_paragraph
TextParagraph
Display a text paragraph in this widget.
image
Image
Display an image in this widget.
key_value
KeyValue
Display a key value item in this widget.
Button
A button. Can be a text button or an image button.
Fields
Union field type .
type can be only one of the following:
text_button
TextButton
A button with text and onclick action.
image_button
ImageButton
A button with image and onclick action.
FormAction
A form action describes the behavior when the form is submitted. For example, you can invoke Apps Script to handle the form.
Fields
action_method_name
string
The method name is used to identify which part of the form triggered the form submission. This information is echoed back to the Chat app as part of the card click event. You can use the same method name for several elements that trigger a common behavior.
parameters[]
ActionParameter
List of action parameters.
ActionParameter
List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze one day, snooze next week. You might use action method = snooze() , passing the snooze type and snooze time in the list of string parameters.
Fields
key
string
The name of the parameter for the action script.
value
string
The value of the parameter.
Icon
The set of supported icons.
Enums
ICON_UNSPECIFIED
AIRPLANE
BOOKMARK
BUS
CAR
CLOCK
CONFIRMATION_NUMBER_ICON
DOLLAR
DESCRIPTION
EMAIL
EVENT_PERFORMER
EVENT_SEAT
FLIGHT_ARRIVAL
FLIGHT_DEPARTURE
HOTEL
HOTEL_ROOM_TYPE
INVITE
MAP_PIN
MEMBERSHIP
MULTIPLE_PEOPLE
OFFER
PERSON
PHONE
RESTAURANT_ICON
SHOPPING_CART
STAR
STORE
TICKET
TRAIN
VIDEO_CAMERA
VIDEO_PLAY
Image
An image that's specified by a URL and can have an onclick action.
Fields
image_url
string
The URL of the image.
on_click
OnClick
The onclick action.
aspect_ratio
double
The aspect ratio of this image (width and height). This field lets you reserve the right height for the image while waiting for it to load. It's not meant to override the built-in aspect ratio of the image. If unset, the server fills it by prefetching the image.
ImageButton
An image button with an onclick action.
Fields
on_click
OnClick
The onclick action.
name
string
The name of this image_button that's used for accessibility. Default value is provided if this name isn't specified.
Union field icons . The icon can be specified by an Icon enum or a URL. icons can be only one of the following:
icon
Icon
The icon specified by an enum that indices to an icon provided by Chat API.
icon_url
string
The icon specified by a URL.
KeyValue
A UI element contains a key (label) and a value (content). This element can also contain some actions such as onclick button.
Fields
top_label
string
The text of the top label. Formatted text supported. For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons .
content
string
The text of the content. Formatted text supported and always required. For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons .
content_multiline
bool
If the content should be multiline.
bottom_label
string
The text of the bottom label. Formatted text supported. For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons .
on_click
OnClick
The onclick action. Only the top label, bottom label, and content region are clickable.
Union field icons . At least one of icons, top_label and bottom_label must be defined. icons can be only one of the following:
icon
Icon
An enum value that's replaced by the Chat API with the corresponding icon image.
icon_url
string
The icon specified by a URL.
Union field control . A control widget. You can set either button or switch_widget , but not both. control can be only one of the following:
button
Button
A button that can be clicked to trigger an action.
OnClick
An onclick action (for example, open a link).
Fields
Union field data .
data can be only one of the following:
action
FormAction
A form action is triggered by this onclick action if specified.
open_link
OpenLink
This onclick action triggers an open link action if specified.
OpenLink
A link that opens a new window.
Fields
url
string
The URL to open.
TextButton
A button with text and onclick action.
Fields
text
string
The text of the button.
on_click
OnClick
The onclick action of the button.
TextParagraph
A paragraph of text. Formatted text supported. For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons .
Fields
text
string
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],["The Google Chat API provides a `ChatService` interface to build apps and integrations, managing spaces, memberships, messages, reactions, attachments, custom emojis, annotations, widgets, and more. Key operations include CRUD for messages, memberships, spaces, and reactions. The API supports app and user authentication, and different OAuth scopes manage access. It allows for managing space settings, read states, and threads. The API uses various data types such as `Message`, `Space`, `Membership`, `Annotation`, and `WidgetMarkup`, with several enums to define behavior and state.\n"]]
