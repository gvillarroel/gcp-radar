---
title: "Package apps.extensions.markup \_|\_ Google Workspace add-ons \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/add-ons/reference/rpc/apps.extensions.markup
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/add-ons/reference/rpc/apps.extensions.markup
  title: "Package apps.extensions.markup \_|\_ Google Workspace add-ons \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Add-ons
Reference
Send feedback
Package apps.extensions.markup
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Workspace Add-ons utilize markup elements to define actions and data sources for interactions within various host applications like Gmail, Calendar, Drive, and Chat.
These markup elements enable add-ons to modify data, trigger application-specific actions, handle custom function results in Sheets, and manage user interface components.
Developers can use GmailClientActionMarkup to create and update drafts, CalendarClientActionMarkup to modify calendar events, and ChatClientDataSourceMarkup for selection inputs in Google Chat apps.
SheetsClientActionMarkup allows add-ons to define return values for custom functions, while HostAppDataActionMarkup , currently in Developer Preview, enables data updates within Google Workspace.
The structure and fields within each markup element provide a standardized way to define add-on behavior and data interactions, streamlining development across different Google Workspace applications.
Index
CalendarClientActionMarkup (message)
CalendarClientActionMarkup.AddAttachmentsActionMarkup (message)
CalendarClientActionMarkup.AddAttachmentsActionMarkup.AddonAttachment (message)
CalendarClientActionMarkup.CalendarSubscriptionActionMarkup (message)
CalendarClientActionMarkup.CalendarSubscriptionActionMarkup.Operation (enum)
CalendarClientActionMarkup.ConferenceDataMarkup (message)
CalendarClientActionMarkup.ConferenceDataMarkup.EntryPointMarkup (message)
CalendarClientActionMarkup.ConferenceDataMarkup.EntryPointMarkup.Feature (enum)
CalendarClientActionMarkup.ConferenceDataMarkup.EntryPointMarkup.Type (enum)
CalendarClientActionMarkup.ConferenceDataMarkup.Error (message)
CalendarClientActionMarkup.ConferenceDataMarkup.Error.Type (enum)
CalendarClientActionMarkup.ConferenceDataMarkup.Parameter (message)
CalendarClientActionMarkup.CreateConferenceDataActionMarkup (message)
CalendarClientActionMarkup.CreateConferenceSettingUrlActionMarkup (message)
CalendarClientActionMarkup.EditAttendeesActionMarkup (message)
CalendarClientActionMarkup.EditConferenceDataActionMarkup (message)
ChatClientDataSourceMarkup (message)
ChatClientDataSourceMarkup.SpaceDataSource (message)
ChatDataActionMarkup (message)
ChatDataActionMarkup.CreateMessageAction (message)
ChatDataActionMarkup.UpdateInlinePreviewAction (message)
ChatDataActionMarkup.UpdateMessageAction (message)
DriveClientActionMarkup (message)
DriveClientActionMarkup.RequestFileScope (message)
EditorClientActionMarkup (message)
EditorClientActionMarkup.RequestFileScopeForActiveDocument (message)
GmailClientActionMarkup (message)
GmailClientActionMarkup.AddonComposeUiActionMarkup (message)
GmailClientActionMarkup.AddonComposeUiActionMarkup.AddonComposeUiActionType (enum)
GmailClientActionMarkup.OpenCreatedDraftActionMarkup (message)
GmailClientActionMarkup.TaskActionMarkup (message)
GmailClientActionMarkup.UpdateDraftActionMarkup (message)
GmailClientActionMarkup.UpdateDraftActionMarkup.Recipient (message)
GmailClientActionMarkup.UpdateDraftActionMarkup.UpdateBccRecipients (message)
GmailClientActionMarkup.UpdateDraftActionMarkup.UpdateBody (message)
GmailClientActionMarkup.UpdateDraftActionMarkup.UpdateBody.ContentType (enum)
GmailClientActionMarkup.UpdateDraftActionMarkup.UpdateBody.EmailMimeType (enum)
GmailClientActionMarkup.UpdateDraftActionMarkup.UpdateBody.InsertContent (message)
GmailClientActionMarkup.UpdateDraftActionMarkup.UpdateBody.Type (enum)
GmailClientActionMarkup.UpdateDraftActionMarkup.UpdateCcRecipients (message)
GmailClientActionMarkup.UpdateDraftActionMarkup.UpdateSubject (message)
GmailClientActionMarkup.UpdateDraftActionMarkup.UpdateToRecipients (message)
HostAppActionMarkup (message)
HostAppDataActionMarkup (message)
HostAppDataSourceMarkup (message)
SheetsClientActionMarkup (message)
SheetsClientActionMarkup.CustomFunctionReturnValueMarkup (message)
CalendarClientActionMarkup
Fields
editAttendeesActionMarkup
EditAttendeesActionMarkup
An action that adds attendees to the Google Calendar event.
editConferenceDataActionMarkup
EditConferenceDataActionMarkup
An action that adds conference data to the Google Calendar event. Third-party conferencing add-ons can only be built in Apps Script .
addAttachmentsActionMarkup
AddAttachmentsActionMarkup
An action that adds attachments to the Google Calendar event.
createConferenceDataActionMarkup
CreateConferenceDataActionMarkup
An action that shows conference data when create a Google Calendar event.
createConferenceSettingUrlActionMarkup
CreateConferenceSettingUrlActionMarkup
An action that generates generate createconference setting url.
calendarSubscriptionActionMarkup
CalendarSubscriptionActionMarkup
An action that manages a calendar subscription. Supports subscription creation in HTTP endpoints add-ons only. Not applicable to Apps Script add-ons.
AddAttachmentsActionMarkup
Fields
addonAttachments[]
AddonAttachment
AddonAttachment
Fields
resourceUrl
string
title
string
Title of the attachment.
mimeType
string
MIME type of the content in resourceUrl.
iconUrl
string
Link to the resource's icon.
CalendarSubscriptionActionMarkup
Fields
operation
Operation
The operation to perform. Currently only CREATE is supported.
calendarId
string
The calendar id to subscribe to.
Operation
Enums
OPERATION_UNSPECIFIED
CREATE
ConferenceDataMarkup
Markup that defines conference data associated to a Google Calendar event. Third-party conferencing add-ons can only be built in Apps Script .
Fields
conferenceId
string
Unique identifier for this conference data. Maximum 512 characters long.
entryPoints[]
EntryPointMarkup
Entry points to the conference. Maximum 300 entry points are allowed.
parameters[]
Parameter
Additional add-on parameters. Maximum 300 parameters are allowed.
error
Error
If set, it means an error occurred during conference creation.
note
string
Additional notes (such as instructions from the administrator, legal notices) to display to the user. Can contain HTML. Max length 2048 characters.
conferenceSolutionId
string
An identifier of the conferencing solution. Must match a value from the deployment's calendar.conferenceSolution.id field.
EntryPointMarkup
A way to join the conference. Third-party conferencing add-ons can only be built in Apps Script .
Fields
type
Type
The type of the entry point. Required.
uri
string
A URI for joining the conference. Supports tel: and http(s): and should be at most 1300 characters long. Required.
label
string
The label of the entry point to display to the user. Maximum 512 characters long.
meetingCode
string
A meeting code for accessing the conference. Maximum 128 characters long.
accessCode
string
An access code for accessing the conference. Maximum 128 characters long.
passcode
string
A passcode for accessing the conference. Maximum 128 characters long.
password
string
A password for accessing the conference. Maximum 128 characters long.
pin
string
A PIN for accessing the conference. Maximum 128 characters long.
regionCode
string
The CLDR/ISO 3166 region code for the country associated with this entry point. Applicable only to Type.PHONE .
features[]
Feature
Features of the entry point, such as being toll or toll-free. One entry point can have multiple features.
Feature
Features of the entry point. Some features might apply only to specific entry points.
Enums
UNKNOWN_FEATURE
Unknown feature.
TOLL
Applies to PHONE entry point. A call to a toll number is charged to the calling party. A number can't be toll and toll-free at the same time.
TOLL_FREE
Applies to PHONE entry point. For the calling party, a call to a toll-free number is free of charge. A number can't be toll and toll-free at the same time.
Type
The type of the entry point. Third-party conferencing add-ons can only be built in Apps Script .
Enums
UNKNOWN
Unknown conference type.
VIDEO
A video conference.
PHONE
A phone conference.
MORE
Used to provide a link to further conference joining information.
SIP
A conference using Session Initiation Protocol
Error
Represents an error that occurred during conference creation. Third-party conferencing add-ons can only be built in Apps Script .
Fields
type
Type
The type of error. Required.
authenticationUrl
string
If the error type is AUTHENTICATION , the add-on can provide a URL allowing users to log in. Maximum 1300 characters long.
Type
Enums
UNKNOWN
Unknown error.
AUTHENTICATION
An authentication error.
TEMPORARY
A temporary error.
PERMANENT
A permanent error.
PERMISSION_DENIED
The user isn't allowed to perform some action in the third-party conferencing system.
CONFERENCE_SOLUTION_FORBIDDEN
The user isn't allowed to use the selected conference solution (but might be allowed to use other solutions offered by the add-on).
Parameter
Solution-specific parameters that are persisted with the event data and, if an update or delete is needed, are passed to the add-on. For example: [{key: 'sessionKey', value: '123'}, {key: 'meetingId', value: '456'}]
Fields
key
string
The key of the parameter. Maximum 50 characters long. Required.
value
string
The value of the parameter. Maximum 1024 characters long. Required.
CreateConferenceDataActionMarkup
Fields
createConferenceData
ConferenceDataMarkup
The conference data to add to a Google Calendar event when creating it.
CreateConferenceSettingUrlActionMarkup
Fields
settingsUrl
string
The uri for a settings page generated by the add-on.
EditAttendeesActionMarkup
Fields
addAttendeeEmails[]
string
A list of attendees to add to the Google Calendar event.
EditConferenceDataActionMarkup
Fields
Union field conference .
conference can be only one of the following:
conferenceData
ConferenceDataMarkup
The conference data to add to the Google Calendar event. Third-party conferencing add-ons can only be built in Apps Script .
ChatClientDataSourceMarkup
For a SelectionInput widget that uses a multiselect menu, a data source from Google Chat. The data source populates selection items for the multiselect menu. For example, a user can select Google Chat spaces that they're a member of.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
Fields
Union field source . The Google Chat data source. source can be only one of the following:
spaceDataSource
SpaceDataSource
Google Chat spaces that the user is a member of.
SpaceDataSource
A data source that populates Google Chat spaces as selection items for a multiselect menu. Only populates spaces that the user is a member of.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
Fields
defaultToCurrentSpace
bool
If set to true , the multiselect menu selects the current Google Chat space as an item by default.
ChatDataActionMarkup
Creates or updates a message in Google Chat. For details, see Build Google Chat interfaces .
Fields
Union field action . A Google Chat action . action can be only one of the following:
createMessageAction
CreateMessageAction
Sends a message as a Google Chat app.
updateMessageAction
UpdateMessageAction
Updates a Google Chat app's message.
updateInlinePreviewAction
UpdateInlinePreviewAction
To preview links , adds one or more cards to a Google Chat user's message.
CreateMessageAction
The Chat app sends a message. For details, see Send Google Chat messages .
Fields
message
Message
The Google Chat message.
UpdateInlinePreviewAction
The Chat app previews a link in a message by adding or updating one or more cards. For details, see Preview links in Google Chat messages .
Fields
cardsV2[]
CardWithId
An array of one or more cards.
UpdateMessageAction
The Chat app updates text or cards in a message. For details, see Send Google Chat messages .
Fields
message
Message
The updated message.
DriveClientActionMarkup
Fields
requestFileScope
RequestFileScope
RequestFileScope
Fields
itemId
string
EditorClientActionMarkup
Fields
Union field action .
action can be only one of the following:
requestFileScopeForActiveDocument
RequestFileScopeForActiveDocument
RequestFileScopeForActiveDocument
This type has no fields.
GmailClientActionMarkup
Fields
Union field type .
type can be only one of the following:
taskAction
TaskActionMarkup
updateDraftActionMarkup
UpdateDraftActionMarkup
openCreatedDraftActionMarkup
OpenCreatedDraftActionMarkup
addonComposeUiActionMarkup
AddonComposeUiActionMarkup
AddonComposeUiActionMarkup
Fields
type
AddonComposeUiActionType
AddonComposeUiActionType
Enums
UNSPECIFIED
Default. When unspecified, no action is taken.
DISMISS
Dismisses the add-on compose UI.
OpenCreatedDraftActionMarkup
Fields
draftId
string
The ID of the newly created draft in the form "r123".
draftStorageId
string
The server storage ID in hex format, for example,"15e9fa622ce1029d".
draftThreadServerPermId
string
The server permanent ID for the draft's thread. This field isn't set anywhere, and it's ignored when processing OpenCreatedDraftActionMarkup. Supply and use draftThreadStorageId instead.
draftThreadId
string
The ID of the thread containing the newly created draft, for example, "15e9fa622ce1029d".
TaskActionMarkup
Fields
reloadTasks
bool
UpdateDraftActionMarkup
Fields
updateBody
UpdateBody
A field that contains a series of update actions to perform on the draft body that the user is currently editing.
updateToRecipients
UpdateToRecipients
If set, replaces the existing To recipients of the draft the user is currently editing.
updateCcRecipients
UpdateCcRecipients
If set, replaces the existing Cc recipients of the draft the user is currently editing.
updateBccRecipients
UpdateBccRecipients
If set, replaces the existing Bcc recipients of the draft the user is currently editing.
updateSubject
UpdateSubject
If set, replaces the existing subject of the draft the user is currently editing.
Recipient
Fields
email
string
UpdateBccRecipients
Fields
bccRecipients[]
Recipient
UpdateBody
Fields
insertContents[]
InsertContent
A repeated field that contains a series of content to insert into the draft that the user is currently editing. The content can contain HTML content or plain text content.
type
Type
ContentType
Enums
UNSPECIFIED_CONTENT_TYPE
Default value when nothing is set for ContentType.
TEXT
Specifies that the content is in plain text.
MUTABLE_HTML
Specifies that the content is in HTML and is mutable (can be edited).
IMMUTABLE_HTML
Specifies that the content is in HTML and is immutable (cannot be edited).
EmailMimeType
EmailMimeType is deprecated. Please use ContentType.
Enums
UNSPECIFIED_EMAIL_MIME_TYPE
Default value when nothing is set for EmailMimeType.
PLAIN_TEXT
Specifies that the inserted content is in plain text.
HTML
Specifies that the inserted content is in HTML.
InsertContent
Fields
content
string
The content to be inserted.
mimeType (deprecated)
EmailMimeType
This item is deprecated!
contentType
ContentType
The type of inserted content.
Type
Enums
UNSPECIFIED_ACTION_TYPE
Default value when nothing is set for Type.
IN_PLACE_INSERT
Indicates this action is to perform an in-place insertion. By default the content is inserted at the current cursor position, if there is selected content, it replaces the selected content.
INSERT_AT_START
Indicates this action is to perform insert at the start of the message body.
INSERT_AT_END
Indicates this action is to perform insert at the end of the message body.
REPLACE
Indicates this action is to replace the message body.
UpdateCcRecipients
Fields
ccRecipients[]
Recipient
UpdateSubject
Fields
subject
string
UpdateToRecipients
Fields
toRecipients[]
Recipient
HostAppActionMarkup
Actions handled by individual host apps.
Fields
Union field action .
action can be only one of the following:
gmailAction
GmailClientActionMarkup
Actions handled by Gmail.
calendarAction
CalendarClientActionMarkup
Actions handled by Calendar.
driveAction
DriveClientActionMarkup
Actions handled by Drive.
editorAction
EditorClientActionMarkup
Actions handled by Docs, Sheets, or Slides.
sheetsAction
SheetsClientActionMarkup
Actions handled by Sheets.
HostAppDataActionMarkup
Defines how to update Google Workspace data.
Fields
Union field action . The add-on action for a given Google Workspace host application. action can be only one of the following:
chatDataAction
ChatDataActionMarkup
A Google Chat action that creates or updates text or cards in a message.
HostAppDataSourceMarkup
A data source from a Google Workspace application. The data source populates available items for a widget.
Fields
Union field data_source . The Google Workspace application that populates available items for a widget. data_source can be only one of the following:
chatDataSource
ChatClientDataSourceMarkup
A data source from Google Chat.
SheetsClientActionMarkup
Next ID: 5.
Fields
Union field action .
action can be only one of the following:
customFunctionReturnValueMarkup
CustomFunctionReturnValueMarkup
CustomFunctionReturnValueMarkup
The result of a user running a custom function.
Fields
Union field result . The result of the custom function execution. result can be only one of the following:
value
Value
The value that resulted from running the custom function.
errorMessage
string
The error message to show to the user if something went wrong.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-05 UTC."],[],["The document details markup structures for various Google Workspace add-on actions. Key actions include: managing calendar events (adding attendees, conference data, attachments); sending/updating Chat messages; managing Gmail drafts (updating body, recipients, subject, creating/opening drafts); requesting file scope in Drive/Editors; setting the return value of custom function in Google sheets. It also describes data sources for Chat apps, content type and insertion rules and error handling, enums and recipients definitions.\n"]]
