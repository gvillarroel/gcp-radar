---
title: "REST Resource: spaces.messages \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages
  title: "REST Resource: spaces.messages \_|\_ Google Chat \_|\_ Google for Developers"
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
REST Resource: spaces.messages
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Chat messages are the fundamental units of communication within spaces, containing rich content like text, cards, and attachments.
Messages can be enriched with annotations to highlight user mentions, links, or slash commands, enabling interactive experiences.
Messages can be organized into threads to facilitate focused conversations within a space.
Developers can leverage the Chat API's methods to programmatically create, update, and manage messages and their interactions.
Various widgets like buttons, images, and text paragraphs can be embedded within messages to create dynamic and engaging user interfaces.
Resource: Message
JSON representation
Card
JSON representation
CardHeader
JSON representation
ImageStyle
Section
JSON representation
WidgetMarkup
JSON representation
TextParagraph
JSON representation
Image
JSON representation
OnClick
JSON representation
FormAction
JSON representation
ActionParameter
JSON representation
OpenLink
JSON representation
KeyValue
JSON representation
Icon
Button
JSON representation
TextButton
JSON representation
ImageButton
JSON representation
CardAction
JSON representation
CardWithId
JSON representation
Card
JSON representation
CardHeader
JSON representation
ImageType
Section
JSON representation
Widget
JSON representation
TextParagraph
JSON representation
TextSyntax
Image
JSON representation
OnClick
JSON representation
Action
JSON representation
ActionParameter
JSON representation
LoadIndicator
Interaction
OpenLink
JSON representation
OpenAs
OnClose
OverflowMenu
JSON representation
OverflowMenuItem
JSON representation
Icon
JSON representation
MaterialIcon
JSON representation
DecoratedText
JSON representation
VerticalAlignment
Button
JSON representation
Color
JSON representation
Type
SwitchControl
JSON representation
ControlType
ButtonList
JSON representation
TextInput
JSON representation
Type
Suggestions
JSON representation
SuggestionItem
JSON representation
Validation
JSON representation
InputType
HostAppDataSourceMarkup
JSON representation
ChatClientDataSourceMarkup
JSON representation
SpaceDataSource
JSON representation
WorkflowDataSourceMarkup
JSON representation
Type
SelectionInput
JSON representation
SelectionType
SelectionItem
JSON representation
PlatformDataSource
JSON representation
CommonDataSource
DataSourceConfig
JSON representation
DateTimePicker
JSON representation
DateTimePickerType
Divider
Grid
JSON representation
GridItem
JSON representation
ImageComponent
JSON representation
ImageCropStyle
JSON representation
ImageCropType
BorderStyle
JSON representation
BorderType
GridItemLayout
Columns
JSON representation
Column
JSON representation
HorizontalSizeStyle
HorizontalAlignment
VerticalAlignment
Widgets
JSON representation
ChipList
JSON representation
Layout
Chip
JSON representation
Carousel
JSON representation
CarouselCard
JSON representation
NestedWidget
JSON representation
Visibility
EventAction
JSON representation
Trigger
JSON representation
CommonWidgetAction
JSON representation
UpdateVisibilityAction
JSON representation
CollapseControl
JSON representation
DividerStyle
CardAction
JSON representation
CardFixedFooter
JSON representation
DisplayStyle
ExpressionData
JSON representation
Condition
JSON representation
ExpressionDataCondition
JSON representation
ConditionType
Annotation
JSON representation
AnnotationType
UserMentionMetadata
JSON representation
Type
SlashCommandMetadata
JSON representation
Type
RichLinkMetadata
JSON representation
RichLinkType
DriveLinkData
JSON representation
ChatSpaceLinkData
JSON representation
MeetSpaceLinkData
JSON representation
Type
HuddleStatus
CalendarEventLinkData
JSON representation
CustomEmojiMetadata
JSON representation
Thread
JSON representation
ActionResponse
JSON representation
ResponseType
DialogAction
JSON representation
Dialog
JSON representation
ActionStatus
JSON representation
Code
UpdatedWidget
JSON representation
SelectionItems
JSON representation
SlashCommand
JSON representation
MatchedUrl
JSON representation
EmojiReactionSummary
JSON representation
DeletionMetadata
JSON representation
DeletionType
QuotedMessageMetadata
JSON representation
QuoteType
QuotedMessageSnapshot
JSON representation
ForwardedMetadata
JSON representation
AttachedGif
JSON representation
AccessoryWidget
JSON representation
Methods
Resource: Message
A message in a Google Chat space.
JSON representation
{
"name" : string ,
"sender" : {
object ( User )
} ,
"createTime" : string ,
"lastUpdateTime" : string ,
"deleteTime" : string ,
"text" : string ,
"formattedText" : string ,
"cards" : [
{
object ( Card )
}
] ,
"cardsV2" : [
{
object ( CardWithId )
}
] ,
"annotations" : [
{
object ( Annotation )
}
] ,
"thread" : {
object ( Thread )
} ,
"space" : {
object ( Space )
} ,
"fallbackText" : string ,
"actionResponse" : {
object ( ActionResponse )
} ,
"argumentText" : string ,
"slashCommand" : {
object ( SlashCommand )
} ,
"attachment" : [
{
object ( Attachment )
}
] ,
"matchedUrl" : {
object ( MatchedUrl )
} ,
"threadReply" : boolean ,
"clientAssignedMessageId" : string ,
"emojiReactionSummaries" : [
{
object ( EmojiReactionSummary )
}
] ,
"privateMessageViewer" : {
object ( User )
} ,
"deletionMetadata" : {
object ( DeletionMetadata )
} ,
"quotedMessageMetadata" : {
object ( QuotedMessageMetadata )
} ,
"attachedGifs" : [
{
object ( AttachedGif )
}
] ,
"accessoryWidgets" : [
{
object ( AccessoryWidget )
}
]
}
Fields
name
string
Identifier. Resource name of the message.
Format: spaces/{space}/messages/{message}
Where {space} is the ID of the space where the message is posted and {message} is a system-assigned ID for the message. For example, spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB .
If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing {message} with the value from the clientAssignedMessageId field. For example, spaces/AAAAAAAAAAA/messages/client-custom-name . For details, see Name a message .
sender
object ( User )
Output only. The user who created the message. If your Chat app authenticates as a user , the output populates the user name and type .
createTime
string ( Timestamp format)
Optional. Immutable. For spaces created in Chat, the time at which the message was created. This field is output only, except when used in import mode spaces.
For import mode spaces, set this field to the historical timestamp at which the message was created in the source in order to preserve the original creation time.
lastUpdateTime
string ( Timestamp format)
Output only. The time at which the message was last edited by a user. If the message has never been edited, this field is empty.
deleteTime
string ( Timestamp format)
Output only. The time at which the message was deleted in Google Chat. If the message is never deleted, this field is empty.
text
string
Optional. Plain-text body of the message. The first link to an image, video, or web page generates a preview chip . You can also @mention a Google Chat user , or everyone in the space.
To learn about creating text messages, see Send a message .
formattedText
string
Output only. Contains the message text with markups added to communicate formatting. This field might not capture all formatting visible in the UI, but includes the following:
Markup syntax for bold, italic, strikethrough, monospace, monospace block, bulleted list, and block quote.
User mentions using the format <users/{user}> .
Custom hyperlinks using the format <{url}|{rendered_text}> where the first string is the URL and the second is the rendered text—for example, <http://example.com|custom text> .
Custom emoji using the format :{emojiName}: —for example, :smile: . This doesn't apply to Unicode emoji, such as U+1F600 for a grinning face emoji.
Bullet list items using asterisks ( * )—for example, * item .
For more information, see View text formatting sent in a message
cards[] (deprecated)
object ( Card )
This item is deprecated!
Deprecated: Use cardsV2 instead.
Rich, formatted, and interactive cards that you can use to display UI elements such as: formatted texts, buttons, and clickable images. Cards are normally displayed below the plain-text body of the message. cards and cardsV2 can have a maximum size of 32 KB.
cardsV2[]
object ( CardWithId )
Optional. An array of cards .
Chat apps can create cards with app authentication . As part of the Developer Preview Program , if your Chat app authenticates as a user , it can create card messages. If your Chat app is not part of Developer Preview Program, it can't create cards with user authentication.
To learn how to create a message that contains cards, see Send a message .
Design and preview cards with the Card Builder.
Open the Card Builder
annotations[]
object ( Annotation )
Output only. Annotations can be associated with the plain-text body of the message or with chips that link to Google Workspace resources like Google Docs or Sheets with startIndex and length of 0.
thread
object ( Thread )
The thread the message belongs to. For example usage, see Start or reply to a message thread .
space
object ( Space )
Output only. If your Chat app authenticates as a user , the output only populates the space name .
fallbackText
string
Optional. A plain-text description of the message's cards, used when the actual cards can't be displayed—for example, mobile notifications.
actionResponse
object ( ActionResponse )
Input only. Parameters that a Chat app can use to configure how its response is posted.
argumentText
string
Output only. Plain-text body of the message with all Chat app mentions stripped out.
slashCommand
object ( SlashCommand )
Output only. Slash command information, if applicable.
attachment[]
object ( Attachment )
Optional. User-uploaded attachment.
matchedUrl
object ( MatchedUrl )
Output only. A URL in spaces.messages.text that matches a link preview pattern. For more information, see Preview links .
threadReply
boolean
Output only. When true , the message is a response in a reply thread. When false , the message is visible in the space's top-level conversation as either the first message of a thread or a message with no threaded replies.
If the space doesn't support reply in threads, this field is always false .
clientAssignedMessageId
string
Optional. A custom ID for the message. You can use field to identify a message, or to get, delete, or update a message. To set a custom ID, specify the messageId field when you create the message. For details, see Name a message .
emojiReactionSummaries[]
object ( EmojiReactionSummary )
Output only. The list of emoji reaction summaries on the message.
privateMessageViewer
object ( User )
Optional. Immutable. Input for creating a message, otherwise output only. The user that can view the message. When set, the message is private and only visible to the specified user and the Chat app. To include this field in your request, you must call the Chat API using app authentication and omit the following:
Attachments
Accessory widgets
For details, see Send a message privately .
deletionMetadata
object ( DeletionMetadata )
Output only. Information about a deleted message. A message is deleted when deleteTime is set.
quotedMessageMetadata
object ( QuotedMessageMetadata )
Optional. Information about a message that another message quotes.
When you create a message, you can quote messages within the same thread, or quote a root message to create a new root message. However, you can't quote a message reply from a different thread.
When you update a message, you can't add or replace the quotedMessageMetadata field, but you can remove it.
For example usage, see Quote another message .
attachedGifs[]
object ( AttachedGif )
Output only. GIF images that are attached to the message.
accessoryWidgets[]
object ( AccessoryWidget )
Optional. One or more interactive widgets that appear at the bottom of a message. You can add accessory widgets to messages that contain text, cards, or both text and cards. Not supported for messages that contain dialogs. For details, see Add interactive widgets at the bottom of a message .
Creating a message with accessory widgets requires app authentication .
CardWithId
A card in a Google Chat message.
Chat apps can create cards with app authentication . As part of the Developer Preview Program , if your Chat app authenticates as a user , it can create card messages. If your Chat app is not part of Developer Preview Program, it can't create cards with user authentication.
To learn how to create a message that contains cards, see Send a message .
Design and preview cards with the Card Builder.
Open the Card Builder
JSON representation
{
"cardId" : string ,
"card" : {
object ( Card )
}
}
Fields
cardId
string
Required if the message contains multiple cards. A unique identifier for a card in a message.
card
object ( Card )
A card. Maximum size is 32 KB.
Annotation
Output only. Annotations can be associated with the plain-text body of the message or with chips that link to Google Workspace resources like Google Docs or Sheets with startIndex and length of 0. To add basic formatting to a text message, see Format text messages .
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
JSON representation
{
"type" : enum ( AnnotationType ) ,
"length" : integer ,
"startIndex" : integer ,
"userMention" : {
object ( UserMentionMetadata )
} ,
"slashCommand" : {
object ( SlashCommandMetadata )
} ,
"richLinkMetadata" : {
object ( RichLinkMetadata )
} ,
"customEmojiMetadata" : {
object ( CustomEmojiMetadata )
}
}
Fields
type
enum ( AnnotationType )
The type of this annotation.
length
integer
Length of the substring in the plain-text message body this annotation corresponds to. If not present, indicates a length of 0.
startIndex
integer
Start index (0-based, inclusive) in the plain-text message body this annotation corresponds to.
Union field metadata . Additional metadata about the annotation. metadata can be only one of the following:
userMention
object ( UserMentionMetadata )
The metadata of user mention.
slashCommand
object ( SlashCommandMetadata )
The metadata for a slash command.
richLinkMetadata
object ( RichLinkMetadata )
The metadata for a rich link.
customEmojiMetadata
object ( CustomEmojiMetadata )
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
UserMentionMetadata
Annotation metadata for user mentions (@).
JSON representation
{
"user" : {
object ( User )
} ,
"type" : enum ( Type )
}
Fields
user
object ( User )
The user mentioned.
type
enum ( Type )
The type of user mention.
Type
Enums
TYPE_UNSPECIFIED
Default value for the enum. Don't use.
ADD
Add user to space.
MENTION
Mention user in space.
SlashCommandMetadata
Annotation metadata for slash commands (/).
JSON representation
{
"bot" : {
object ( User )
} ,
"type" : enum ( Type ) ,
"commandName" : string ,
"commandId" : string ,
"triggersDialog" : boolean
}
Fields
bot
object ( User )
The Chat app whose command was invoked.
type
enum ( Type )
The type of slash command.
commandName
string
The name of the invoked slash command.
commandId
string ( int64 format)
The command ID of the invoked slash command.
triggersDialog
boolean
Indicates whether the slash command is for a dialog.
Type
Enums
TYPE_UNSPECIFIED
Default value for the enum. Don't use.
ADD
Add Chat app to space.
INVOKE
Invoke slash command in space.
RichLinkMetadata
A rich link to a resource. Rich links can be associated with the plain-text body of the message or represent chips that link to Google Workspace resources like Google Docs or Sheets with startIndex and length of 0.
JSON representation
{
"uri" : string ,
"richLinkType" : enum ( RichLinkType ) ,
"driveLinkData" : {
object ( DriveLinkData )
} ,
"chatSpaceLinkData" : {
object ( ChatSpaceLinkData )
} ,
"meetSpaceLinkData" : {
object ( MeetSpaceLinkData )
} ,
"calendarEventLinkData" : {
object ( CalendarEventLinkData )
}
}
Fields
uri
string
The URI of this link.
richLinkType
enum ( RichLinkType )
The rich link type.
Union field data . Data for the linked resource. data can be only one of the following:
driveLinkData
object ( DriveLinkData )
Data for a drive link.
chatSpaceLinkData
object ( ChatSpaceLinkData )
Data for a chat space link.
meetSpaceLinkData
object ( MeetSpaceLinkData )
Data for a Meet space link.
calendarEventLinkData
object ( CalendarEventLinkData )
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
DriveLinkData
Data for Google Drive links.
JSON representation
{
"driveDataRef" : {
object ( DriveDataRef )
} ,
"mimeType" : string
}
Fields
driveDataRef
object ( DriveDataRef )
A DriveDataRef which references a Google Drive file.
mimeType
string
The mime type of the linked Google Drive resource.
ChatSpaceLinkData
Data for Chat space links.
JSON representation
{
"space" : string ,
"thread" : string ,
"message" : string
}
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
MeetSpaceLinkData
Data for Meet space links.
JSON representation
{
"meetingCode" : string ,
"type" : enum ( Type ) ,
"huddleStatus" : enum ( HuddleStatus )
}
Fields
meetingCode
string
Meeting code of the linked Meet space.
type
enum ( Type )
Indicates the type of the Meet space.
huddleStatus
enum ( HuddleStatus )
Optional. Output only. If the Meet is a Huddle, indicates the status of the huddle. Otherwise, this is unset.
Type
The type of the Meet space.
Enums
TYPE_UNSPECIFIED
Default value for the enum. Don't use.
MEETING
The Meet space is a meeting.
HUDDLE
The Meet space is a huddle.
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
CalendarEventLinkData
Data for Calendar event links.
JSON representation
{
"calendarId" : string ,
"eventId" : string
}
Fields
calendarId
string
The Calendar identifier of the linked Calendar.
eventId
string
The Event identifier of the linked Calendar event.
CustomEmojiMetadata
Annotation metadata for custom emoji.
JSON representation
{
"customEmoji" : {
object ( CustomEmoji )
}
}
Fields
customEmoji
object ( CustomEmoji )
The custom emoji.
Thread
A thread in a Google Chat space. For example usage, see Start or reply to a message thread .
If you specify a thread when creating a message, you can set the messageReplyOption field to determine what happens if no matching thread is found.
JSON representation
{
"name" : string ,
"threadKey" : string
}
Fields
name
string
Identifier. Resource name of the thread.
Example: spaces/{space}/threads/{thread}
threadKey
string
Optional. Input for creating or updating a thread. Otherwise, output only. ID for the thread. Supports up to 4000 characters.
This ID is unique to the Chat app that sets it. For example, if multiple Chat apps create a message using the same thread key, the messages are posted in different threads. To reply in a thread created by a person or another Chat app, specify the thread name field instead.
ActionResponse
Parameters that a Chat app can use to configure how its response is posted.
JSON representation
{
"type" : enum ( ResponseType ) ,
"url" : string ,
"dialogAction" : {
object ( DialogAction )
} ,
"updatedWidget" : {
object ( UpdatedWidget )
}
}
Fields
type
enum ( ResponseType )
Input only. The type of Chat app response.
url
string
Input only. URL for users to authenticate or configure. (Only for REQUEST_CONFIG response types.)
dialogAction
object ( DialogAction )
Input only. A response to an interaction event related to a dialog . Must be accompanied by ResponseType.Dialog .
updatedWidget
object ( UpdatedWidget )
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
DialogAction
Contains a dialog and request status code.
JSON representation
{
"actionStatus" : {
object ( ActionStatus )
} ,
"dialog" : {
object ( Dialog )
}
}
Fields
actionStatus
object ( ActionStatus )
Input only. Status for a request to either invoke or submit a dialog . Displays a status and message to users, if necessary. For example, in case of an error or success.
Union field action . Action to perform. action can be only one of the following:
dialog
object ( Dialog )
Input only. Dialog for the request.
Dialog
Wrapper around the card body of the dialog.
JSON representation
{
"body" : {
object ( Card )
}
}
Fields
body
object ( Card )
Input only. Body of the dialog, which is rendered in a modal. Google Chat apps don't support the following card entities: DateTimePicker , OnChangeAction .
ActionStatus
Represents the status for a request to either invoke or submit a dialog .
JSON representation
{
"statusCode" : enum ( Code ) ,
"userFacingMessage" : string
}
Fields
statusCode
enum ( Code )
The status code.
userFacingMessage
string
The message to send users about the status of their request. If unset, a generic message based on the statusCode is sent.
Code
The canonical error codes for gRPC APIs.
Sometimes multiple error codes may apply. Services should return the most specific error code that applies. For example, prefer OUT_OF_RANGE over FAILED_PRECONDITION if both codes apply. Similarly prefer NOT_FOUND or ALREADY_EXISTS over FAILED_PRECONDITION .
Enums
OK
Not an error; returned on success.
HTTP Mapping: 200 OK
CANCELLED
The operation was cancelled, typically by the caller.
HTTP Mapping: 499 Client Closed Request
UNKNOWN
Unknown error. For example, this error may be returned when a Status value received from another address space belongs to an error space that is not known in this address space. Also errors raised by APIs that do not return enough error information may be converted to this error.
HTTP Mapping: 500 Internal Server Error
INVALID_ARGUMENT
The client specified an invalid argument. Note that this differs from FAILED_PRECONDITION . INVALID_ARGUMENT indicates arguments that are problematic regardless of the state of the system (e.g., a malformed file name).
HTTP Mapping: 400 Bad Request
DEADLINE_EXCEEDED
The deadline expired before the operation could complete. For operations that change the state of the system, this error may be returned even if the operation has completed successfully. For example, a successful response from a server could have been delayed long enough for the deadline to expire.
HTTP Mapping: 504 Gateway Timeout
NOT_FOUND
Some requested entity (e.g., file or directory) was not found.
Note to server developers: if a request is denied for an entire class of users, such as gradual feature rollout or undocumented allowlist, NOT_FOUND may be used. If a request is denied for some users within a class of users, such as user-based access control, PERMISSION_DENIED must be used.
HTTP Mapping: 404 Not Found
ALREADY_EXISTS
The entity that a client attempted to create (e.g., file or directory) already exists.
HTTP Mapping: 409 Conflict
PERMISSION_DENIED
The caller does not have permission to execute the specified operation. PERMISSION_DENIED must not be used for rejections caused by exhausting some resource (use RESOURCE_EXHAUSTED instead for those errors). PERMISSION_DENIED must not be used if the caller can not be identified (use UNAUTHENTICATED instead for those errors). This error code does not imply the request is valid or the requested entity exists or satisfies other pre-conditions.
HTTP Mapping: 403 Forbidden
UNAUTHENTICATED
The request does not have valid authentication credentials for the operation.
HTTP Mapping: 401 Unauthorized
RESOURCE_EXHAUSTED
Some resource has been exhausted, perhaps a per-user quota, or perhaps the entire file system is out of space.
HTTP Mapping: 429 Too Many Requests
FAILED_PRECONDITION
The operation was rejected because the system is not in a state required for the operation's execution. For example, the directory to be deleted is non-empty, an rmdir operation is applied to a non-directory, etc.
Service implementors can use the following guidelines to decide between FAILED_PRECONDITION , ABORTED , and UNAVAILABLE : (a) Use UNAVAILABLE if the client can retry just the failing call. (b) Use ABORTED if the client should retry at a higher level. For example, when a client-specified test-and-set fails, indicating the client should restart a read-modify-write sequence. (c) Use FAILED_PRECONDITION if the client should not retry until the system state has been explicitly fixed. For example, if an "rmdir" fails because the directory is non-empty, FAILED_PRECONDITION should be returned since the client should not retry unless the files are deleted from the directory.
HTTP Mapping: 400 Bad Request
ABORTED
The operation was aborted, typically due to a concurrency issue such as a sequencer check failure or transaction abort.
See the guidelines above for deciding between FAILED_PRECONDITION , ABORTED , and UNAVAILABLE .
HTTP Mapping: 409 Conflict
OUT_OF_RANGE
The operation was attempted past the valid range. E.g., seeking or reading past end-of-file.
Unlike INVALID_ARGUMENT , this error indicates a problem that may be fixed if the system state changes. For example, a 32-bit file system will generate INVALID_ARGUMENT if asked to read at an offset that is not in the range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from an offset past the current file size.
There is a fair bit of overlap between FAILED_PRECONDITION and OUT_OF_RANGE . We recommend using OUT_OF_RANGE (the more specific error) when it applies so that callers who are iterating through a space can easily look for an OUT_OF_RANGE error to detect when they are done.
HTTP Mapping: 400 Bad Request
UNIMPLEMENTED
The operation is not implemented or is not supported/enabled in this service.
HTTP Mapping: 501 Not Implemented
INTERNAL
Internal errors. This means that some invariants expected by the underlying system have been broken. This error code is reserved for serious errors.
HTTP Mapping: 500 Internal Server Error
UNAVAILABLE
The service is currently unavailable. This is most likely a transient condition, which can be corrected by retrying with a backoff. Note that it is not always safe to retry non-idempotent operations.
See the guidelines above for deciding between FAILED_PRECONDITION , ABORTED , and UNAVAILABLE .
HTTP Mapping: 503 Service Unavailable
DATA_LOSS
Unrecoverable data loss or corruption.
HTTP Mapping: 500 Internal Server Error
UpdatedWidget
For selectionInput widgets, returns autocomplete suggestions for a multiselect menu.
JSON representation
{
"widget" : string ,
"suggestions" : {
object ( SelectionItems )
}
}
Fields
widget
string
The ID of the updated widget. The ID must match the one for the widget that triggered the update request.
Union field updated_widget . The widget updated in response to a user action. updated_widget can be only one of the following:
suggestions
object ( SelectionItems )
List of widget autocomplete results
SelectionItems
List of widget autocomplete results.
JSON representation
{
"items" : [
{
object ( SelectionItem )
}
]
}
Fields
items[]
object ( SelectionItem )
An array of the SelectionItem objects.
SlashCommand
Metadata about a slash command in Google Chat.
JSON representation
{
"commandId" : string
}
Fields
commandId
string ( int64 format)
The ID of the slash command.
MatchedUrl
A matched URL in a Chat message. Chat apps can preview matched URLs. For more information, see Preview links .
JSON representation
{
"url" : string
}
Fields
url
string
Output only. The URL that was matched.
EmojiReactionSummary
The number of people who reacted to a message with a specific emoji.
JSON representation
{
"emoji" : {
object ( Emoji )
} ,
"reactionCount" : integer
}
Fields
emoji
object ( Emoji )
Output only. Emoji associated with the reactions.
reactionCount
integer
Output only. The total number of reactions using the associated emoji.
DeletionMetadata
Information about a deleted message. A message is deleted when deleteTime is set.
JSON representation
{
"deletionType" : enum ( DeletionType )
}
Fields
deletionType
enum ( DeletionType )
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
QuotedMessageMetadata
Information about a message that another message quotes.
When you create a message, you can quote messages within the same thread, or quote a root message to create a new root message. However, you can't quote a message reply from a different thread.
When you update a message, you can't add or replace the quotedMessageMetadata field, but you can remove it.
For example usage, see Quote another message .
JSON representation
{
"name" : string ,
"lastUpdateTime" : string ,
"quoteType" : enum ( QuoteType ) ,
"quotedMessageSnapshot" : {
object ( QuotedMessageSnapshot )
} ,
"forwardedMetadata" : {
object ( ForwardedMetadata )
}
}
Fields
name
string
Required. Resource name of the message that is quoted.
Format: spaces/{space}/messages/{message}
lastUpdateTime
string ( Timestamp format)
Required. The timestamp when the quoted message was created or when the quoted message was last updated.
If the message was edited, use this field, lastUpdateTime . If the message was never edited, use createTime .
If lastUpdateTime doesn't match the latest version of the quoted message, the request fails.
quoteType
enum ( QuoteType )
Optional. Specifies the quote type. If not set, defaults to REPLY in the message read/write path for backward compatibility.
quotedMessageSnapshot
object ( QuotedMessageSnapshot )
Output only. A snapshot of the quoted message's content.
forwardedMetadata
object ( ForwardedMetadata )
Output only. Metadata about the source space of the quoted message. Populated only for FORWARD quote type.
QuoteType
The quote type of the quoted message.
Enums
QUOTE_TYPE_UNSPECIFIED
Reserved. This value is unused.
REPLY
If quoteType is REPLY , you can do the following:
If you're replying in a thread, you can quote another message in that thread.
If you're creating a root message, you can quote another root message in that space.
You can't quote a message reply from a different thread.
QuotedMessageSnapshot
Provides a snapshot of the content of the quoted message at the time of quoting or forwarding
JSON representation
{
"sender" : string ,
"text" : string ,
"formattedText" : string ,
"annotations" : [
{
object ( Annotation )
}
] ,
"attachments" : [
{
object ( Attachment )
}
]
}
Fields
sender
string
Output only. The quoted message's author name. Populated for both REPLY & FORWARD quote types.
text
string
Output only. Snapshot of the quoted message's text content.
formattedText
string
Output only. Contains the quoted message text with markups added to support rich formatting like hyperlinks,custom emojis, markup, etc. Populated only for FORWARD quote type.
annotations[]
object ( Annotation )
Output only. Annotations parsed from the text body of the quoted message. Populated only for FORWARD quote type.
attachments[]
object ( Attachment )
Output only. Attachments that were part of the quoted message. These are copies of the quoted message's attachment metadata. Populated only for FORWARD quote type.
ForwardedMetadata
Metadata about the source space from which a message was forwarded.
JSON representation
{
"space" : string ,
"spaceDisplayName" : string
}
Fields
space
string
Output only. The resource name of the source space. Format: spaces/{space}
spaceDisplayName
string
Output only. The display name of the source space or DM at the time of forwarding. For SPACE , this is the space name. For DIRECT_MESSAGE , this is the other participant's name (e.g., "User A"). For GROUP_CHAT , this is a generated name based on members' first names, limited to 5 including the creator (e.g., "User A, User B").
AttachedGif
A GIF image that's specified by a URL.
JSON representation
{
"uri" : string
}
Fields
uri
string
Output only. The URL that hosts the GIF image.
AccessoryWidget
One or more interactive widgets that appear at the bottom of a message. For details, see Add interactive widgets at the bottom of a message .
JSON representation
{
"buttonList" : {
object ( ButtonList )
}
}
Fields
Union field action . The type of action. action can be only one of the following:
buttonList
object ( ButtonList )
A list of buttons.
Methods
create
Creates a message in a Google Chat space.
delete
Deletes a message.
get
Returns details about a message.
list
Lists messages in a space that the caller is a member of, including messages from blocked members and spaces.
patch
Updates a message.
replaceCards
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features. Replaces the cards included in a message.
update
Updates a message.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-20 UTC."],[],["Google Chat messages, represented by the `Message` resource, contain various components like `text`, `cards`, and `annotations`. `Annotations` detail parts of the text, such as user mentions, slash commands, or rich links. Messages can have associated metadata, including creation/update/deletion times, sender, thread, space, attachments, reactions, and quoted messages. Chat apps utilize `ActionResponse` to interact, potentially updating messages or presenting dialogs. The different types of errors and its HTTP mapping are also documented. Methods provided are create, delete, get, list, patch, and update.\n"]]
