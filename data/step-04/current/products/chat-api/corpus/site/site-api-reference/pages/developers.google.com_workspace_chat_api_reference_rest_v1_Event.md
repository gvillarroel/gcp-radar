---
title: "Event \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/Event
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/Event
  title: "Event \_|\_ Google Chat \_|\_ Google for Developers"
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
Event
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A Google Chat app interaction event represents data about a user's interaction with a Chat app, including space events and user interactions.
The Event object contains details such as event type, timestamp, user, space, and any associated form actions or dialog interactions.
CommonEventObject provides information about the user's client, including locale, platform, timezone, and data submitted by users in cards or dialogs.
User inputs are captured via different types like StringInputs , DateTimeInput , DateInput , and TimeInput , depending on the widget used.
Timezone information is provided through the TimeZone object, containing the timezone ID and offset from UTC.
JSON representation
CommonEventObject
JSON representation
TimeZone
JSON representation
Inputs
JSON representation
StringInputs
JSON representation
DateTimeInput
JSON representation
DateInput
JSON representation
TimeInput
JSON representation
AppCommandMetadata
JSON representation
A Google Chat app interaction event that represents and contains data about a user's interaction with a Chat app. To configure your Chat app to receive interaction events, see Receive and respond to user interactions .
In addition to receiving events from user interactions, Chat apps can receive events about changes to spaces, such as when a new member is added to a space. To learn about space events, see Work with events from Google Chat .
Note: This event is only used for Chat interaction events . If your Chat app is built as a Google Workspace add-on , see Chat event objects in the add-ons documentation.
JSON representation
{
"type" : enum ( EventType ) ,
"eventTime" : string ,
"token" : string ,
"threadKey" : string ,
"message" : {
object ( Message )
} ,
"user" : {
object ( User )
} ,
"thread" : {
object ( Thread )
} ,
"space" : {
object ( Space )
} ,
"action" : {
object ( FormAction )
} ,
"configCompleteRedirectUrl" : string ,
"isDialogEvent" : boolean ,
"dialogEventType" : enum ( DialogEventType ) ,
"common" : {
object ( CommonEventObject )
} ,
"appCommandMetadata" : {
object ( AppCommandMetadata )
}
}
Fields
type
enum ( EventType )
The type of user interaction with the Chat app, such as MESSAGE or ADDED_TO_SPACE .
eventTime
string ( Timestamp format)
The timestamp indicating when the interaction event occurred.
token
string
A secret value that legacy Chat apps can use to verify if a request is from Google. Google randomly generates the token, and its value remains static. You can obtain, revoke, or regenerate the token from the Chat API configuration page in the Google Cloud Console.
Modern Chat apps don't use this field. It is absent from API responses and the Chat API configuration page .
threadKey
string
The Chat app-defined key for the thread related to the interaction event. See spaces.messages.thread.threadKey for more information.
message
object ( Message )
For ADDED_TO_SPACE , CARD_CLICKED , and MESSAGE interaction events, the message that triggered the interaction event, if applicable.
user
object ( User )
The user that interacted with the Chat app.
thread
object ( Thread )
The thread in which the user interacted with the Chat app. This could be in a new thread created by a newly sent message. This field is populated if the interaction event is associated with a specific message or thread.
space
object ( Space )
The space in which the user interacted with the Chat app.
action
object ( FormAction )
For CARD_CLICKED interaction events, the form action data associated when a user clicks a card or dialog. To learn more, see Read form data input by users on cards .
configCompleteRedirectUrl
string
This URL is populated for MESSAGE , ADDED_TO_SPACE , and APP_COMMAND interaction events. After completing an authorization or configuration flow outside of Google Chat, users must be redirected to this URL to signal to Google Chat that the authorization or configuration flow was successful. For more information, see Connect a Chat app with other services and tools .
isDialogEvent
boolean
For CARD_CLICKED and MESSAGE interaction events, whether the user is interacting with or about to interact with a dialog .
dialogEventType
enum ( DialogEventType )
The type of dialog interaction event received.
common
object ( CommonEventObject )
Represents information about the user's client, such as locale, host app, and platform. For Chat apps, CommonEventObject includes information submitted by users interacting with dialogs , like data entered on a card.
appCommandMetadata
object ( AppCommandMetadata )
Metadata about a Chat app command.
CommonEventObject
The common event object is the portion of the overall event object that carries general, host-independent information to the add-on from the user's client. This information includes details such as the user's locale, host app, and platform.
In addition to homepage and contextual triggers, add-ons construct and pass event objects to action callback functions when the user interacts with widgets. Your add-on's callback function can query the common event object to determine the contents of open widgets in the user's client. For example, your add-on can locate the text a user has entered into a TextInput widget in the eventObject.commentEventObject.formInputs object.
For Chat apps, the name of the function that the user invoked when interacting with a widget.
JSON representation
{
"userLocale" : string ,
"hostApp" : enum ( HostApp ) ,
"platform" : enum ( Platform ) ,
"timeZone" : {
object ( TimeZone )
} ,
"formInputs" : {
string : {
object ( Inputs )
} ,
...
} ,
"parameters" : {
string : string ,
...
} ,
"invokedFunction" : string
}
Fields
userLocale
string
Disabled by default. The user's language and country/region identifier in the format of ISO 639 language code- ISO 3166 country/region code. For example, en-US .
To turn on this field, you must set addOns.common.useLocaleFromApp to true in your add-on's manifest. Your add-on's scope list must also include https://www.googleapis.com/auth/script.locale . See Accessing user locale and timezone for more details.
hostApp
enum ( HostApp )
Indicates the host app the add-on is active in when the event object is generated. Possible values include the following:
GMAIL
CALENDAR
DRIVE
DOCS
SHEETS
SLIDES
CHAT
platform
enum ( Platform )
The platform enum which indicates the platform where the event originates ( WEB , IOS , or ANDROID ). Not supported by Chat apps.
timeZone
object ( TimeZone )
Disabled by default. The timezone ID and offset from Coordinated Universal Time (UTC). To turn on this field, you must set addOns.common.useLocaleFromApp to true in your add-on's manifest. Your add-on's scope list must also include https://www.googleapis.com/auth/script.locale . See Accessing user locale and timezone for more details.
Only supported for the event types CARD_CLICKED and SUBMIT_DIALOG .
formInputs
map (key: string, value: object ( Inputs ))
A map containing the current values of the widgets in the displayed card. The map keys are the string IDs assigned with each widget.
The structure of the map value object is dependent on the widget type:
Note : The following examples are formatted for Apps Script's V8 runtime. If you're using Rhino runtime, you must add [""] after the value. For example, instead of e.commonEventObject.formInputs.employeeName.stringInputs.value[0] , format the event object as e.commonEventObject.formInputs.employeeName[""].stringInputs.value[0] . To learn more about runtimes in Apps Script, see the V8 Runtime Overview .
Single-valued widgets (for example, a text box): a list of strings (only one element).
Example : for a text input widget with employeeName as its ID, access the text input value with: e.commonEventObject.formInputs.employeeName.stringInputs.value[0] .
Multi-valued widgets (for example, checkbox groups): a list of strings.
Example : for a multi-value widget with participants as its ID, access the value array with: e.commonEventObject.formInputs.participants.stringInputs.value .
A date-time picker : a DateTimeInput
object .
Example : For a picker with an ID of myDTPicker , access the DateTimeInput object using e.commonEventObject.formInputs.myDTPicker.dateTimeInput .
A date-only picker : a DateInput
object .
Example : For a picker with an ID of myDatePicker , access the DateInput object using e.commonEventObject.formInputs.myDatePicker.dateInput .
A time-only picker : a TimeInput
object .
Example : For a picker with an ID of myTimePicker , access the TimeInput object using e.commonEventObject.formInputs.myTimePicker.timeInput .
parameters
map (key: string, value: string)
Any additional parameters you supply to an action using actionParameters or Action.setParameters() .
Developer Preview: For add-ons that extend Google Chat , to suggest items based on what the users type in multiselect menus, use the value of the "autocomplete_widget_query" key ( event.commonEventObject.parameters["autocomplete_widget_query"] ). You can use this value to query a database and suggest selectable items to users as they type. For details, see Collect and process information from Google Chat users .
invokedFunction
string
Name of the function to invoke.
This field doesn't populate for Google Workspace Add-ons that extend Google Chat. Instead, to receive function data like identifiers, add-ons that extend Chat should use the parameters field. See Build interactive interfaces for Chat apps .
TimeZone
The timezone ID and offset from Coordinated Universal Time (UTC). Only supported for the event types CARD_CLICKED and SUBMIT_DIALOG .
JSON representation
{
"id" : string ,
"offset" : integer
}
Fields
id
string
The IANA TZ time zone database code, such as "America/Toronto".
offset
integer
The user timezone offset, in milliseconds, from Coordinated Universal Time (UTC).
Inputs
Types of data that users can input on cards or dialogs . The input type depends on the type of values that the widget accepts.
JSON representation
{
"stringInputs" : {
object ( StringInputs )
} ,
"dateTimeInput" : {
object ( DateTimeInput )
} ,
"dateInput" : {
object ( DateInput )
} ,
"timeInput" : {
object ( TimeInput )
}
}
Fields
Union field inputs .
inputs can be only one of the following:
stringInputs
object ( StringInputs )
A list of strings that represent the values that the user inputs in a widget.
If the widget only accepts one value, such as a TextInput widget, the list contains one string object. If the widget accepts multiple values, such as a SelectionInput widget of checkboxes, the list contains a string object for each value that the user inputs or selects.
dateTimeInput
object ( DateTimeInput )
Date and time input values from a DateTimePicker widget that accepts both a date and time.
dateInput
object ( DateInput )
Date input values from a DateTimePicker widget that only accepts date values.
timeInput
object ( TimeInput )
Time input values from a DateTimePicker widget that only accepts time values.
StringInputs
Input parameter for regular widgets. For single-valued widgets, it is a single value list. For multi-valued widgets, such as checkbox, all the values are presented.
JSON representation
{
"value" : [
string
]
}
Fields
value[]
string
An list of strings entered by the user.
DateTimeInput
Date and time input values.
JSON representation
{
"msSinceEpoch" : string ,
"hasDate" : boolean ,
"hasTime" : boolean
}
Fields
msSinceEpoch
string ( int64 format)
Time since epoch time, in milliseconds.
hasDate
boolean
Whether the datetime input includes a calendar date.
hasTime
boolean
Whether the datetime input includes a timestamp.
DateInput
Date input values.
JSON representation
{
"msSinceEpoch" : string
}
Fields
msSinceEpoch
string ( int64 format)
Time since epoch time, in milliseconds.
TimeInput
Time input values.
JSON representation
{
"hours" : integer ,
"minutes" : integer
}
Fields
hours
integer
The hour on a 24-hour clock.
minutes
integer
The number of minutes past the hour. Valid values are 0 to 59.
AppCommandMetadata
Metadata about a Chat app command .
JSON representation
{
"appCommandId" : integer ,
"appCommandType" : enum ( AppCommandType )
}
Fields
appCommandId
integer
The ID for the command specified in the Chat API configuration.
appCommandType
enum ( AppCommandType )
The type of Chat app command.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],["This document outlines how Google Chat apps receive and process user interactions and space events. Key actions include receiving interaction events with details like `type`, `eventTime`, `user`, and `space`. The `CommonEventObject` captures user client information, and `formInputs` detail user input from cards or dialogs. Input types include `StringInputs`, `DateTimeInput`, `DateInput`, and `TimeInput`. Apps can also receive space events and use `AppCommandMetadata` to manage app commands, like slash commands.\n"]]
