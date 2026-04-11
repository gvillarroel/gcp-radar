---
title: "Cards v2 \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/cards
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/cards
  title: "Cards v2 \_|\_ Google Chat \_|\_ Google for Developers"
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
Cards v2
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Cards are UI elements in Google Chat and Workspace Add-ons used to present information and guide user actions through interactive components.
Developers can utilize various widgets like text paragraphs, images, buttons, and input fields to build rich and interactive cards.
Cards are structured using JSON, defining the layout, components, and actions associated with each element.
Resources like the Card Builder and design guidelines are available to aid in card development for both Google Chat and Workspace Add-ons.
Cards support a wide range of functionalities, including data input, dynamic content updates, and triggering server-side actions.
Card
A card interface displayed in a Google Chat message or Google Workspace add-on.
Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step.
Design and preview cards with the Card Builder.
Open the Card Builder
To learn how to build cards, see the following documentation:
For Google Chat apps, see
Design the components of a card or dialog .
For Google Workspace add-ons, see
Card-based interfaces .
Note: You can add up to 100 widgets per card. If a section's widgets push the total count above 100, that entire section and all following sections are ignored. This limit applies to both card messages and dialogs in Google Chat apps, and to cards in Google Workspace add-ons.
Example: Card message for a Google Chat app
To create the sample card message in Google Chat, use the following JSON:
{
"cardsV2": [
{
"cardId": "unique-card-id",
"card": {
"header": {
"title": "Sasha",
"subtitle": "Software Engineer",
"imageUrl":
"https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png",
"imageType": "CIRCLE",
"imageAltText": "Avatar for Sasha"
},
"sections": [
{
"header": "Contact Info",
"collapsible": true,
"uncollapsibleWidgetsCount": 1,
"widgets": [
{
"decoratedText": {
"startIcon": {
"knownIcon": "EMAIL"
},
"text": "sasha@example.com"
}
},
{
"decoratedText": {
"startIcon": {
"knownIcon": "PERSON"
},
"text": "<font color=\"#80e27e\">Online</font>"
}
},
{
"decoratedText": {
"startIcon": {
"knownIcon": "PHONE"
},
"text": "+1 (555) 555-1234"
}
},
{
"buttonList": {
"buttons": [
{
"text": "Share",
"onClick": {
"openLink": {
"url": "https://example.com/share"
}
}
},
{
"text": "Edit",
"onClick": {
"action": {
"function": "goToView",
"parameters": [
{
"key": "viewType",
"value": "EDIT"
}
]
}
}
}
]
}
}
]
}
]
}
}
]
}
JSON representation
{
"header" : {
object ( CardHeader )
} ,
"sections" : [
{
object ( Section )
}
] ,
"sectionDividerStyle" : enum ( DividerStyle ) ,
"cardActions" : [
{
object ( CardAction )
}
] ,
"name" : string ,
"fixedFooter" : {
object ( CardFixedFooter )
} ,
"displayStyle" : enum ( DisplayStyle ) ,
"peekCardHeader" : {
object ( CardHeader )
} ,
"expressionData" : [
{
object ( ExpressionData )
}
]
}
Fields
header
object ( CardHeader )
The header of the card. A header usually contains a leading image and a title. Headers always appear at the top of a card.
sections[]
object ( Section )
Contains a collection of widgets. Each section has its own, optional header. Sections are visually separated by a line divider. For an example in Google Chat apps, see
Define a section of a card .
sectionDividerStyle
enum ( DividerStyle )
The divider style between the header, sections and footer.
cardActions[]
object ( CardAction )
The card's actions. Actions are added to the card's toolbar menu.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
For example, the following JSON constructs a card action menu with
Settings
and
Send Feedback
options:
"cardActions": [
{
"actionLabel": "Settings",
"onClick": {
"action": {
"functionName": "goToView",
"parameters": [
{
"key": "viewType",
"value": "SETTING"
}
],
"loadIndicator": "LoadIndicator.SPINNER"
}
}
},
{
"actionLabel": "Send Feedback",
"onClick": {
"openLink": {
"url": "https://example.com/feedback"
}
}
}
]
name
string
Name of the card. Used as a card identifier in card navigation.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
fixedFooter
object ( CardFixedFooter )
The fixed footer shown at the bottom of this card.
Setting
fixedFooter
without specifying a
primaryButton
or a
secondaryButton
causes an error. For Chat apps, you can use fixed footers in
dialogs , but not
card messages .
Available for Google Chat apps and Google Workspace add-ons.
displayStyle
enum ( DisplayStyle )
In Google Workspace add-ons, sets the display properties of the
peekCardHeader .
Available for Google Workspace add-ons and unavailable for Google Chat apps.
peekCardHeader
object ( CardHeader )
When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
expressionData[]
object ( ExpressionData )
The expression data for the card.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
CardHeader
Represents a card header. For an example in Google Chat apps, see
Add a header .
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"title" : string ,
"subtitle" : string ,
"imageType" : enum ( ImageType ) ,
"imageUrl" : string ,
"imageAltText" : string
}
Fields
title
string
Required. The title of the card header. The header has a fixed height: if both a title and subtitle are specified, each takes up one line. If only the title is specified, it takes up both lines.
subtitle
string
The subtitle of the card header. If specified, appears on its own line below the
title .
imageType
enum ( ImageType )
The shape used to crop the image.
Available for Google Chat apps and Google Workspace add-ons.
imageUrl
string
The HTTPS URL of the image in the card header.
imageAltText
string
The alternative text of this image that's used for accessibility.
ImageType
The shape used to crop the image.
Available for Google Chat apps and Google Workspace add-ons.
Enums
SQUARE
Default value. Applies a square mask to the image. For example, a 4x3 image becomes 3x3.
CIRCLE
Applies a circular mask to the image. For example, a 4x3 image becomes a circle with a diameter of 3.
Section
A section contains a collection of widgets that are rendered vertically in the order that they're specified.
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"header" : string ,
"widgets" : [
{
object ( Widget )
}
] ,
"collapsible" : boolean ,
"uncollapsibleWidgetsCount" : integer ,
"id" : string ,
"collapseControl" : {
object ( CollapseControl )
}
}
Fields
header
string
Text that appears at the top of a section. Supports simple HTML formatted text. For more information about formatting text, see
Formatting text in Google Chat apps
and
Formatting text in Google Workspace add-ons .
widgets[]
object ( Widget )
All the widgets in the section. Must contain at least one widget.
collapsible
boolean
Indicates whether this section is collapsible.
Collapsible sections hide some or all widgets, but users can expand the section to reveal the hidden widgets by clicking
Show more . Users can hide the widgets again by clicking
Show less .
To determine which widgets are hidden, specify
uncollapsibleWidgetsCount .
uncollapsibleWidgetsCount
integer
The number of uncollapsible widgets which remain visible even when a section is collapsed.
For example, when a section contains five widgets and the
uncollapsibleWidgetsCount
is set to
2 , the first two widgets are always shown and the last three are collapsed by default. The
uncollapsibleWidgetsCount
is taken into account only when
collapsible
is
true .
id
string
A unique ID assigned to the section that's used to identify the section to be mutated. The ID has a character limit of 64 characters and should be in the format of
[a-zA-Z0-9-]+ .
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
collapseControl
object ( CollapseControl )
Optional. Define the expand and collapse button of the section. This button will be shown only if the section is collapsible. If this field isn't set, the default button is used.
Widget
Each card is made up of widgets.
A widget is a composite object that can represent one of text, images, buttons, and other object types.
JSON representation
{
"horizontalAlignment" : enum ( HorizontalAlignment ) ,
"id" : string ,
"visibility" : enum ( Visibility ) ,
"eventActions" : [
{
object ( EventAction )
}
] ,
"textParagraph" : {
object ( TextParagraph )
} ,
"image" : {
object ( Image )
} ,
"decoratedText" : {
object ( DecoratedText )
} ,
"buttonList" : {
object ( ButtonList )
} ,
"textInput" : {
object ( TextInput )
} ,
"selectionInput" : {
object ( SelectionInput )
} ,
"dateTimePicker" : {
object ( DateTimePicker )
} ,
"divider" : {
object ( Divider )
} ,
"grid" : {
object ( Grid )
} ,
"columns" : {
object ( Columns )
} ,
"carousel" : {
object ( Carousel )
} ,
"chipList" : {
object ( ChipList )
}
}
Fields
horizontalAlignment
enum ( HorizontalAlignment )
Specifies whether widgets align to the left, right, or center of a column.
id
string
A unique ID assigned to the widget that's used to identify the widget to be mutated. The ID has a character limit of 64 characters and should be in the format of
[a-zA-Z0-9-]+
and.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
visibility
enum ( Visibility )
Specifies whether the widget is visible or hidden. The default value is
VISIBLE .
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
eventActions[]
object ( EventAction )
Specifies the event actions that can be performed on the widget.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
Union field
data . A widget can only have one of the following items. You can use multiple widget fields to display more items.
data
can be only one of the following:
textParagraph
object ( TextParagraph )
Displays a text paragraph. Supports simple HTML formatted text. For more information about formatting text, see
Formatting text in Google Chat apps
and
Formatting text in Google Workspace add-ons .
For example, the following JSON creates a bolded text:
"textParagraph": {
"text": " <b>bold text</b>"
}
image
object ( Image )
Displays an image.
For example, the following JSON creates an image with alternative text:
"image": {
"imageUrl":
"https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png",
"altText": "Chat app avatar"
}
decoratedText
object ( DecoratedText )
Displays a decorated text item.
For example, the following JSON creates a decorated text widget showing email address:
"decoratedText": {
"icon": {
"knownIcon": "EMAIL"
},
"topLabel": "Email Address",
"text": "sasha@example.com",
"bottomLabel": "This is a new Email address!",
"switchControl": {
"name": "has_send_welcome_email_to_sasha",
"selected": false,
"controlType": "CHECKBOX"
}
}
buttonList
object ( ButtonList )
A list of buttons.
For example, the following JSON creates two buttons. The first is a blue text button and the second is an image button that opens a link:
"buttonList": {
"buttons": [
{
"text": "Edit",
"color": {
"red": 0,
"green": 0,
"blue": 1,
},
"disabled": true,
},
{
"icon": {
"knownIcon": "INVITE",
"altText": "check calendar"
},
"onClick": {
"openLink": {
"url": "https://example.com/calendar"
}
}
}
]
}
textInput
object ( TextInput )
Displays a text box that users can type into.
For example, the following JSON creates a text input for an email address:
"textInput": {
"name": "mailing_address",
"label": "Mailing Address"
}
As another example, the following JSON creates a text input for a programming language with static suggestions:
"textInput": {
"name": "preferred_programing_language",
"label": "Preferred Language",
"initialSuggestions": {
"items": [
{
"text": "C++"
},
{
"text": "Java"
},
{
"text": "JavaScript"
},
{
"text": "Python"
}
]
}
}
selectionInput
object ( SelectionInput )
Displays a selection control that lets users select items. Selection controls can be checkboxes, radio buttons, switches, or dropdown menus.
For example, the following JSON creates a dropdown menu that lets users choose a size:
"selectionInput": {
"name": "size",
"label": "Size"
"type": "DROPDOWN",
"items": [
{
"text": "S",
"value": "small",
"selected": false
},
{
"text": "M",
"value": "medium",
"selected": true
},
{
"text": "L",
"value": "large",
"selected": false
},
{
"text": "XL",
"value": "extra_large",
"selected": false
}
]
}
dateTimePicker
object ( DateTimePicker )
Displays a widget that lets users input a date, time, or date and time.
For example, the following JSON creates a date time picker to schedule an appointment:
"dateTimePicker": {
"name": "appointment_time",
"label": "Book your appointment at:",
"type": "DATE_AND_TIME",
"valueMsEpoch": 796435200000
}
divider
object ( Divider )
Displays a horizontal line divider between widgets.
For example, the following JSON creates a divider:
"divider": {
}
grid
object ( Grid )
Displays a grid with a collection of items.
A grid supports any number of columns and items. The number of rows is determined by the upper bounds of the number items divided by the number of columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows.
Available for Google Chat apps and Google Workspace add-ons.
For example, the following JSON creates a 2 column grid with a single item:
"grid": {
"title": "A fine collection of items",
"columnCount": 2,
"borderStyle": {
"type": "STROKE",
"cornerRadius": 4
},
"items": [
{
"image": {
"imageUri": "https://www.example.com/image.png",
"cropStyle": {
"type": "SQUARE"
},
"borderStyle": {
"type": "STROKE"
}
},
"title": "An item",
"textAlignment": "CENTER"
}
],
"onClick": {
"openLink": {
"url": "https://www.example.com"
}
}
}
columns
object ( Columns )
Displays up to 2 columns.
To include more than 2 columns, or to use rows, use the
Grid
widget.
For example, the following JSON creates 2 columns that each contain text paragraphs:
"columns": {
"columnItems": [
{
"horizontalSizeStyle": "FILL_AVAILABLE_SPACE",
"horizontalAlignment": "CENTER",
"verticalAlignment": "CENTER",
"widgets": [
{
"textParagraph": {
"text": "First column text paragraph"
}
}
]
},
{
"horizontalSizeStyle": "FILL_AVAILABLE_SPACE",
"horizontalAlignment": "CENTER",
"verticalAlignment": "CENTER",
"widgets": [
{
"textParagraph": {
"text": "Second column text paragraph"
}
}
]
}
]
}
carousel
object ( Carousel )
A carousel contains a collection of nested widgets. For example, this is a JSON representation of a carousel that contains two text paragraphs.
{
"widgets": [
{
"textParagraph": {
"text": "First text paragraph in the carousel."
}
},
{
"textParagraph": {
"text": "Second text paragraph in the carousel."
}
}
]
}
chipList
object ( ChipList )
A list of chips.
For example, the following JSON creates two chips. The first is a text chip and the second is an icon chip that opens a link:
"chipList": {
"chips": [
{
"text": "Edit",
"disabled": true,
},
{
"icon": {
"knownIcon": "INVITE",
"altText": "check calendar"
},
"onClick": {
"openLink": {
"url": "https://example.com/calendar"
}
}
}
]
}
TextParagraph
A paragraph of text that supports formatting. For an example in Google Chat apps, see
Add a paragraph of formatted text . For more information about formatting text, see
Formatting text in Google Chat apps
and
Formatting text in Google Workspace add-ons .
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"text" : string ,
"maxLines" : integer ,
"textSyntax" : enum ( TextSyntax )
}
Fields
text
string
The text that's shown in the widget.
maxLines
integer
The maximum number of lines of text that are displayed in the widget. If the text exceeds the specified maximum number of lines, the excess content is concealed behind a
show more
button. If the text is equal or shorter than the specified maximum number of lines, a
show more
button isn't displayed.
The default value is 0, in which case all context is displayed. Negative values are ignored.
textSyntax
enum ( TextSyntax )
The syntax of the text. If not set, the text is rendered as HTML.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
TextSyntax
Syntax to use for formatting text.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
Enums
TEXT_SYNTAX_UNSPECIFIED
The text is rendered as HTML if unspecified.
HTML
The text is rendered as HTML. This is the default value.
MARKDOWN
The text is rendered as Markdown.
Image
An image that is specified by a URL and can have an
onClick
action. For an example, see
Add an image .
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"imageUrl" : string ,
"onClick" : {
object ( OnClick )
} ,
"altText" : string
}
Fields
imageUrl
string
The HTTPS URL that hosts the image.
For example:
https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png
onClick
object ( OnClick )
When a user clicks the image, the click triggers this action.
altText
string
The alternative text of this image that's used for accessibility.
OnClick
Represents how to respond when users click an interactive element on a card, such as a button.
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"action" : {
object ( Action )
} ,
"openLink" : {
object ( OpenLink )
} ,
"openDynamicLinkAction" : {
object ( Action )
} ,
"card" : {
object ( Card )
} ,
"overflowMenu" : {
object ( OverflowMenu )
}
}
Fields
Union field
data .
data
can be only one of the following:
action
object ( Action )
If specified, an action is triggered by this
onClick .
openLink
object ( OpenLink )
If specified, this
onClick
triggers an open link action.
openDynamicLinkAction
object ( Action )
An add-on triggers this action when the action needs to open a link. This differs from the
openLink
above in that this needs to talk to server to get the link. Thus some preparation work is required for web client to do before the open link action response comes back.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
card
object ( Card )
A new card is pushed to the card stack after clicking if specified.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
overflowMenu
object ( OverflowMenu )
If specified, this
onClick
opens an overflow menu.
Action
An action that describes the behavior when the form is submitted. For example, you can invoke an Apps Script script to handle the form. If the action is triggered, the form values are sent to the server.
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"function" : string ,
"parameters" : [
{
object ( ActionParameter )
}
] ,
"loadIndicator" : enum ( LoadIndicator ) ,
"persistValues" : boolean ,
"interaction" : enum ( Interaction ) ,
"requiredWidgets" : [
string
] ,
"allWidgetsAreRequired" : boolean
}
Fields
function
string
A custom function to invoke when the containing element is clicked or otherwise activated.
For example usage, see
Read form data .
parameters[]
object ( ActionParameter )
List of action parameters.
loadIndicator
enum ( LoadIndicator )
Specifies the loading indicator that the action displays while making the call to the action.
persistValues
boolean
Indicates whether form values persist after the action. The default value is
false .
If
true , form values remain after the action is triggered. To let the user make changes while the action is being processed, set
LoadIndicator
to
NONE . For
card messages
in Chat apps, you must also set the action's
ResponseType
to
UPDATE_MESSAGE
and use the same
cardId
from the card that contained the action.
If
false , the form values are cleared when the action is triggered. To prevent the user from making changes while the action is being processed, set
LoadIndicator
to
SPINNER .
interaction
enum ( Interaction )
Optional. Required when opening a
dialog .
What to do in response to an interaction with a user, such as a user clicking a button in a card message.
If unspecified, the app responds by executing an
action
—like opening a link or running a function—as normal.
By specifying an
interaction , the app can respond in special interactive ways. For example, by setting
interaction
to
OPEN_DIALOG , the app can open a
dialog . When specified, a loading indicator isn't shown. If specified for an add-on, the entire card is stripped and nothing is shown in the client.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
requiredWidgets[]
string
Optional. Fill this list with the names of widgets that this Action needs for a valid submission.
If the widgets listed here don't have a value when this Action is invoked, the form submission is aborted.
Available for Google Chat apps and Google Workspace add-ons.
allWidgetsAreRequired
boolean
Optional. If this is true, then all widgets are considered required by this action.
Available for Google Chat apps and Google Workspace add-ons.
ActionParameter
List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze one day, or snooze next week. You might use
action method = snooze() , passing the snooze type and snooze time in the list of string parameters.
To learn more, see
CommonEventObject .
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
The name of the parameter for the action script.
value
string
The value of the parameter.
LoadIndicator
Specifies the loading indicator that the action displays while making the call to the action.
Available for Google Chat apps and Google Workspace add-ons.
Enums
SPINNER
Displays a spinner to indicate that content is loading.
NONE
Nothing is displayed.
Interaction
Optional. Required when opening a
dialog .
What to do in response to an interaction with a user, such as a user clicking a button in a card message.
If unspecified, the app responds by executing an
action
—like opening a link or running a function—as normal.
By specifying an
interaction , the app can respond in special interactive ways. For example, by setting
interaction
to
OPEN_DIALOG , the app can open a
dialog .
When specified, a loading indicator isn't shown. If specified for an add-on, the entire card is stripped and nothing is shown in the client.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
Enums
INTERACTION_UNSPECIFIED
Default value. The
action
executes as normal.
OPEN_DIALOG
Opens a
dialog , a windowed, card-based interface that Chat apps use to interact with users.
Only supported by Chat apps in response to button-clicks on card messages. If specified for an add-on, the entire card is stripped and nothing is shown in the client.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
OpenLink
Represents an
onClick
event that opens a hyperlink.
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"url" : string ,
"openAs" : enum ( OpenAs ) ,
"onClose" : enum ( OnClose )
}
Fields
url
string
The URL to open. HTTP URLs are converted to HTTPS.
openAs
enum ( OpenAs )
How to open a link.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
onClose
enum ( OnClose )
Whether the client forgets about a link after opening it, or observes it until the window closes.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
OpenAs
When an
OnClick
action opens a link, then the client can either open it as a full-size window (if that's the frame used by the client), or an overlay (such as a pop-up). The implementation depends on the client platform capabilities, and the value selected might be ignored if the client doesn't support it.
FULL_SIZE
is supported by all clients.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
Enums
FULL_SIZE
The link opens as a full-size window (if that's the frame used by the client).
OVERLAY
The link opens as an overlay, such as a pop-up.
OnClose
What the client does when a link opened by an
OnClick
action is closed.
Implementation depends on client platform capabilities. For example, a web browser might open a link in a pop-up window with an
OnClose
handler.
If both
OnOpen
and
OnClose
handlers are set, and the client platform can't support both values,
OnClose
takes precedence.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
Enums
NOTHING
Default value. The card doesn't reload; nothing happens.
RELOAD
Reloads the card after the child window closes.
If used in conjunction with
OpenAs.OVERLAY , the child window acts as a modal dialog and the parent card is blocked until the child window closes.
OverflowMenu
A widget that presents a pop-up menu with one or more actions that users can invoke. For example, showing non-primary actions in a card. You can use this widget when actions don't fit in the available space. To use, specify this widget in the
OnClick
action of widgets that support it. For example, in a
Button .
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"items" : [
{
object ( OverflowMenuItem )
}
]
}
Fields
items[]
object ( OverflowMenuItem )
Required. The list of menu options.
OverflowMenuItem
An option that users can invoke in an overflow menu.
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"startIcon" : {
object ( Icon )
} ,
"text" : string ,
"onClick" : {
object ( OnClick )
} ,
"disabled" : boolean
}
Fields
startIcon
object ( Icon )
The icon displayed in front of the text.
text
string
Required. The text that identifies or describes the item to users.
onClick
object ( OnClick )
Required. The action invoked when a menu option is selected. This
OnClick
cannot contain an
OverflowMenu , any specified
OverflowMenu
is dropped and the menu item disabled.
disabled
boolean
Whether the menu option is disabled. Defaults to false.
Icon
An icon displayed in a widget on a card. For an example in Google Chat apps, see
Add an icon .
Supports
built-in
and
custom
icons.
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"altText" : string ,
"imageType" : enum ( ImageType ) ,
"knownIcon" : string ,
"iconUrl" : string ,
"materialIcon" : {
object ( MaterialIcon )
}
}
Fields
altText
string
Optional. A description of the icon used for accessibility. If unspecified, the default value
Button
is provided. As a best practice, you should set a helpful description for what the icon displays, and if applicable, what it does. For example,
A user's account portrait , or
Opens a new browser tab and navigates to the Google Chat developer
documentation at https://developers.google.com/workspace/chat .
If the icon is set in a
Button , the
altText
appears as helper text when the user hovers over the button. However, if the button also sets
text , the icon's
altText
is ignored.
imageType
enum ( ImageType )
The crop style applied to the image. In some cases, applying a
CIRCLE
crop causes the image to be drawn larger than a built-in icon.
Union field
icons . The icon displayed in the widget on the card.
icons
can be only one of the following:
knownIcon
string
Display one of the built-in icons provided by Google Workspace.
For example, to display an airplane icon, specify
AIRPLANE . For a bus, specify
BUS .
For a full list of supported icons, see
built-in icons .
iconUrl
string
Display a custom icon hosted at an HTTPS URL.
For example:
"iconUrl":
"https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png"
Supported file types include
.png
and
.jpg .
materialIcon
object ( MaterialIcon )
Display one of the
Google Material Icons .
For example, to display a
checkbox icon , use
"materialIcon": {
"name": "check_box"
}
Available for Google Chat apps and unavailable for Google Workspace add-ons.
MaterialIcon
A
Google Material Icon , which includes over 2500+ options.
For example, to display a
checkbox icon
with customized weight and grade, write the following:
{
"name": "check_box",
"fill": true,
"weight": 300,
"grade": -25
}
Available for Google Chat apps and unavailable for Google Workspace add-ons.
JSON representation
{
"name" : string ,
"fill" : boolean ,
"weight" : integer ,
"grade" : integer
}
Fields
name
string
The icon name defined in the
Google Material Icon , for example,
check_box . Any invalid names are abandoned and replaced with empty string and results in the icon failing to render.
fill
boolean
Whether the icon renders as filled. Default value is false.
To preview different icon settings, go to
Google Font Icons
and adjust the settings under
Customize .
weight
integer
The stroke weight of the icon. Choose from {100, 200, 300, 400, 500, 600, 700}. If absent, default value is 400. If any other value is specified, the default value is used.
To preview different icon settings, go to
Google Font Icons
and adjust the settings under
Customize .
grade
integer
Weight and grade affect a symbol’s thickness. Adjustments to grade are more granular than adjustments to weight and have a small impact on the size of the symbol. Choose from {-25, 0, 200}. If absent, default value is 0. If any other value is specified, the default value is used.
To preview different icon settings, go to
Google Font Icons
and adjust the settings under
Customize .
DecoratedText
A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget, or a button after the text. For an example in Google Chat apps, see
Display text with decorative text .
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"icon" : {
object ( Icon )
} ,
"startIcon" : {
object ( Icon )
} ,
"startIconVerticalAlignment" : enum ( VerticalAlignment ) ,
"topLabel" : string ,
"topLabelText" : {
object ( TextParagraph )
} ,
"text" : string ,
"contentText" : {
object ( TextParagraph )
} ,
"wrapText" : boolean ,
"bottomLabel" : string ,
"bottomLabelText" : {
object ( TextParagraph )
} ,
"onClick" : {
object ( OnClick )
} ,
"button" : {
object ( Button )
} ,
"switchControl" : {
object ( SwitchControl )
} ,
"endIcon" : {
object ( Icon )
}
}
Fields
icon
(deprecated)
object ( Icon )
This item is deprecated!
Deprecated in favor of
startIcon .
startIcon
object ( Icon )
The icon displayed in front of the text.
startIconVerticalAlignment
enum ( VerticalAlignment )
Optional. Vertical alignment of the start icon. If not set, the icon will be vertically centered.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
topLabel
string
The text that appears above
text . Always truncates.
topLabelText
object ( TextParagraph )
TextParagraph
equivalent of
topLabel . Always truncates. Allows for more complex formatting than
topLabel .
Available for Google Chat apps and unavailable for Google Workspace add-ons.
text
string
Required. The primary text.
Supports simple formatting. For more information about formatting text, see
Formatting text in Google Chat apps
and
Formatting text in Google Workspace add-ons .
contentText
object ( TextParagraph )
TextParagraph
equivalent of
text . Allows for more complex formatting than
text .
Available for Google Chat apps and unavailable for Google Workspace add-ons.
wrapText
boolean
The wrap text setting. If
true , the text wraps and displays on multiple lines. Otherwise, the text is truncated.
Only applies to
text , not
topLabel
and
bottomLabel .
bottomLabel
string
The text that appears below
text . Always wraps.
bottomLabelText
object ( TextParagraph )
TextParagraph
equivalent of
bottomLabel . Always wraps. Allows for more complex formatting than
bottomLabel .
Available for Google Chat apps and unavailable for Google Workspace add-ons.
onClick
object ( OnClick )
This action is triggered when users click
topLabel
or
bottomLabel .
Union field
control . A button, switch, checkbox, or image that appears to the right-hand side of text in the
decoratedText
widget.
control
can be only one of the following:
button
object ( Button )
A button that a user can click to trigger an action.
switchControl
object ( SwitchControl )
A switch widget that a user can click to change its state and trigger an action.
endIcon
object ( Icon )
An icon displayed after the text.
Supports
built-in
and
custom
icons.
VerticalAlignment
Represents vertical alignment attribute.
Enums
VERTICAL_ALIGNMENT_UNSPECIFIED
Unspecified type. Do not use.
TOP
Alignment to the top position.
MIDDLE
Alignment to the middle position.
BOTTOM
Alignment to the bottom position.
Button
A text, icon, or text and icon button that users can click. For an example in Google Chat apps, see
Add a button .
To make an image a clickable button, specify an
Image
(not an
ImageComponent ) and set an
onClick
action.
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"text" : string ,
"icon" : {
object ( Icon )
} ,
"color" : {
object ( Color )
} ,
"onClick" : {
object ( OnClick )
} ,
"disabled" : boolean ,
"altText" : string ,
"type" : enum ( Type )
}
Fields
text
string
The text displayed inside the button.
icon
object ( Icon )
An icon displayed inside the button. If both
icon
and
text
are set, then the icon appears before the text.
color
object ( Color )
Optional. The color of the button. If set, the button
type
is set to
FILLED
and the color of
text
and
icon
fields are set to a contrasting color for readability. For example, if the button color is set to blue, any text or icons in the button are set to white.
To set the button color, specify a value for the
red ,
green , and
blue
fields. The value must be a float number between 0 and 1 based on the RGB color value, where
0
(0/255) represents the absence of color and
1
(255/255) represents the maximum intensity of the color.
For example, the following sets the color to red at its maximum intensity:
"color": {
"red": 1,
"green": 0,
"blue": 0,
}
The
alpha
field is unavailable for button color. If specified, this field is ignored.
onClick
object ( OnClick )
Required. The action to perform when a user clicks the button, such as opening a hyperlink or running a custom function.
disabled
boolean
If
true , the button is displayed in an inactive state and doesn't respond to user actions.
altText
string
The alternative text that's used for accessibility.
Set descriptive text that lets users know what the button does. For example, if a button opens a hyperlink, you might write: "Opens a new browser tab and navigates to the Google Chat developer documentation at
https://developers.google.com/workspace/chat" .
type
enum ( Type )
Optional. The type of a button. If unset, button type defaults to
OUTLINED . If the
color
field is set, the button type is forced to
FILLED
and any value set for this field is ignored.
Color
Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of
java.awt.Color
in Java; it can also be trivially provided to UIColor's
+colorWithRed:green:blue:alpha
method in iOS; and, with just a little work, it can be easily formatted into a CSS
rgba()
string in JavaScript.
This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space.
When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most
1e-5 .
Example (Java):
import com.google.type.Color;
// ...
public static java.awt.Color fromProto(Color protocolor) {
float alpha = protocolor.hasAlpha()
? protocolor.getAlpha().getValue()
: 1.0;
return new java.awt.Color(
protocolor.getRed(),
protocolor.getGreen(),
protocolor.getBlue(),
alpha);
}
public static Color toProto(java.awt.Color color) {
float red = (float) color.getRed();
float green = (float) color.getGreen();
float blue = (float) color.getBlue();
float denominator = 255.0;
Color.Builder resultBuilder =
Color
.newBuilder()
.setRed(red / denominator)
.setGreen(green / denominator)
.setBlue(blue / denominator);
int alpha = color.getAlpha();
if (alpha != 255) {
result.setAlpha(
FloatValue
.newBuilder()
.setValue(((float) alpha) / denominator)
.build());
}
return resultBuilder.build();
}
// ...
Example (iOS / Obj-C):
// ...
static UIColor* fromProto(Color* protocolor) {
float red = [protocolor red];
float green = [protocolor green];
float blue = [protocolor blue];
FloatValue* alpha_wrapper = [protocolor alpha];
float alpha = 1.0;
if (alpha_wrapper != nil) {
alpha = [alpha_wrapper value];
}
return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
}
static Color* toProto(UIColor* color) {
CGFloat red, green, blue, alpha;
if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
return nil;
}
Color* result = [[Color alloc] init];
[result setRed:red];
[result setGreen:green];
[result setBlue:blue];
if (alpha <= 0.9999) {
[result setAlpha:floatWrapperWithValue(alpha)];
}
[result autorelease];
return result;
}
// ...
Example (JavaScript):
// ...
var protoToCssColor = function(rgb_color) {
var redFrac = rgb_color.red || 0.0;
var greenFrac = rgb_color.green || 0.0;
var blueFrac = rgb_color.blue || 0.0;
var red = Math.floor(redFrac * 255);
var green = Math.floor(greenFrac * 255);
var blue = Math.floor(blueFrac * 255);
if (!('alpha' in rgb_color)) {
return rgbToCssColor(red, green, blue);
}
var alphaFrac = rgb_color.alpha.value || 0.0;
var rgbParams = [red, green, blue].join(',');
return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
};
var rgbToCssColor = function(red, green, blue) {
var rgbNumber = new Number((red << 16) | (green << 8) | blue);
var hexString = rgbNumber.toString(16);
var missingZeros = 6 - hexString.length;
var resultBuilder = ['#'];
for (var i = 0; i < missingZeros; i++) {
resultBuilder.push('0');
}
resultBuilder.push(hexString);
return resultBuilder.join('');
};
// ...
JSON representation
{
"red" : number ,
"green" : number ,
"blue" : number ,
"alpha" : number
}
Fields
red
number
The amount of red in the color as a value in the interval [0, 1].
green
number
The amount of green in the color as a value in the interval [0, 1].
blue
number
The amount of blue in the color as a value in the interval [0, 1].
alpha
number
The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation:
pixel color = alpha * (this color) + (1.0 - alpha) * (background color)
This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).
Type
Optional. The
type
of a button. If
color
field is set, the
type
is forced to
FILLED .
Available for Google Chat apps and unavailable for Google Workspace add-ons.
Enums
TYPE_UNSPECIFIED
Don't use. Unspecified.
OUTLINED
Outlined buttons are medium-emphasis buttons. They usually contain actions that are important, but aren’t the primary action in a Chat app or an add-on.
FILLED
A filled button has a container with a solid color. It has the most visual impact and is recommended for the important and primary action in a Chat app or an add-on.
FILLED_TONAL
A filled tonal button is an alternative middle ground between filled and outlined buttons. They’re useful in contexts where a lower-priority button requires slightly more emphasis than an outline button would give.
BORDERLESS
A button does not have an invisible container in its default state. It is often used for the lowest priority actions, especially when presenting multiple options.
SwitchControl
Either a toggle-style switch or a checkbox inside a
decoratedText
widget.
Available for Google Chat apps and Google Workspace add-ons.
Only supported in the
decoratedText
widget.
JSON representation
{
"name" : string ,
"value" : string ,
"selected" : boolean ,
"onChangeAction" : {
object ( Action )
} ,
"controlType" : enum ( ControlType )
}
Fields
name
string
The name by which the switch widget is identified in a form input event.
For details about working with form inputs, see
Receive form data .
value
string
The value entered by a user, returned as part of a form input event.
For details about working with form inputs, see
Receive form data .
selected
boolean
When
true , the switch is selected.
onChangeAction
object ( Action )
The action to perform when the switch state is changed, such as what function to run.
controlType
enum ( ControlType )
How the switch appears in the user interface.
Available for Google Chat apps and Google Workspace add-ons.
ControlType
How the switch appears in the user interface.
Available for Google Chat apps and Google Workspace add-ons.
Enums
SWITCH
A toggle-style switch.
CHECKBOX
Deprecated in favor of
CHECK_BOX .
CHECK_BOX
A checkbox.
ButtonList
A list of buttons layed out horizontally. For an example in Google Chat apps, see
Add a button .
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"buttons" : [
{
object ( Button )
}
]
}
Fields
buttons[]
object ( Button )
An array of buttons.
TextInput
A field in which users can enter text. Supports suggestions and on-change actions. Supports form submission validation. When
Action.all_widgets_are_required
is set to
true
or this widget is specified in
Action.required_widgets , the submission action is blocked unless a value is entered. For an example in Google Chat apps, see
Add a field in which a user can enter text .
Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see
Receive form data .
When you need to collect undefined or abstract data from users, use a text input. To collect defined or enumerated data from users, use the
SelectionInput
widget.
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"name" : string ,
"label" : string ,
"hintText" : string ,
"value" : string ,
"type" : enum ( Type ) ,
"onChangeAction" : {
object ( Action )
} ,
"initialSuggestions" : {
object ( Suggestions )
} ,
"autoCompleteAction" : {
object ( Action )
} ,
"validation" : {
object ( Validation )
} ,
"placeholderText" : string ,
"hostAppDataSource" : {
object ( HostAppDataSourceMarkup )
}
}
Fields
name
string
The name by which the text input is identified in a form input event.
For details about working with form inputs, see
Receive form data .
label
string
The text that appears above the text input field in the user interface.
Specify text that helps the user enter the information your app needs. For example, if you are asking someone's name, but specifically need their surname, write
surname
instead of
name .
Required if
hintText
is unspecified. Otherwise, optional.
hintText
string
Text that appears below the text input field meant to assist users by prompting them to enter a certain value. This text is always visible.
Required if
label
is unspecified. Otherwise, optional.
value
string
The value entered by a user, returned as part of a form input event.
For details about working with form inputs, see
Receive form data .
type
enum ( Type )
How a text input field appears in the user interface. For example, whether the field is single or multi-line.
onChangeAction
object ( Action )
What to do when a change occurs in the text input field. For example, a user adding to the field or deleting text.
Examples of actions to take include running a custom function or opening a
dialog
in Google Chat.
initialSuggestions
object ( Suggestions )
Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed.
For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing
Jav , the list of suggestions filters to show just
Java
and
JavaScript .
Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter
javascript
and others
java script . Suggesting
JavaScript
can standardize how users interact with your app.
When specified,
TextInput.type
is always
SINGLE_LINE , even if it's set to
MULTIPLE_LINE .
Available for Google Chat apps and Google Workspace add-ons.
autoCompleteAction
object ( Action )
Optional. Specify what action to take when the text input field provides suggestions to users who interact with it.
If unspecified, the suggestions are set by
initialSuggestions
and are processed by the client.
If specified, the app takes the action specified here, such as running a custom function.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
validation
object ( Validation )
Specify the input format validation necessary for this text field.
Available for Google Chat apps and Google Workspace add-ons.
placeholderText
string
Text that appears in the text input field when the field is empty. Use this text to prompt users to enter a value. For example,
Enter a
number from 0 to 100 .
Available for Google Chat apps and unavailable for Google Workspace add-ons.
Union field
data_source .
data_source
can be only one of the following:
hostAppDataSource
object ( HostAppDataSourceMarkup )
A data source that's unique to a Google Workspace host application, such as Gmail emails, Google Calendar events, or Google Chat messages.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
Type
How a text input field appears in the user interface. For example, whether it's a single line input field, or a multi-line input. If
initialSuggestions
is specified,
type
is always
SINGLE_LINE , even if it's set to
MULTIPLE_LINE .
Available for Google Chat apps and Google Workspace add-ons.
Enums
SINGLE_LINE
The text input field has a fixed height of one line.
MULTIPLE_LINE
The text input field has a fixed height of multiple lines.
RenderActions
A set of render instructions that tells a card to perform an action, or
tells the add-on host app or the Chat app to perform an app-specific action.
Available for Google Chat apps and Google Workspace add-ons.
Fields
action Action
Action
Fields
navigations[]
Navigation
Pushes, pops, or updates a card.
Add-ons in Google Chat .
Navigation
Add a new card to the stack (navigate forward). For Chat apps, only available for app home .
Available for Google Chat apps and Google Workspace add-ons.
navigations: {
pushCard: CARD
}
Replace the top card with a new card. For Chat apps, only available for app home .
Available for Google Chat apps and Google Workspace add-ons.
navigations: {
updateCard: CARD
}
Fields
Union field navigate_action .
navigate_action can be only one of the following:
pushCard
Card
Pushes a card onto the card stack.
For dialogs in Google Chat , opens or updates a dialog.
updateCard
Card
Updates the top card with a new card and preserves filled form fields values. For a non-equivalent field, the value is dropped.
For dialogs in Google Chat , opens or updates a dialog.
Suggestions
Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed.
For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing
Jav , the list of suggestions filters to show
Java
and
JavaScript .
Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter
javascript
and others
java script . Suggesting
JavaScript
can standardize how users interact with your app.
When specified,
TextInput.type
is always
SINGLE_LINE , even if it's set to
MULTIPLE_LINE .
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"items" : [
{
object ( SuggestionItem )
}
]
}
Fields
items[]
object ( SuggestionItem )
A list of suggestions used for autocomplete recommendations in text input fields.
SuggestionItem
One suggested value that users can enter in a text input field.
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"text" : string
}
Fields
Union field
content .
content
can be only one of the following:
text
string
The value of a suggested input to a text input field. This is equivalent to what users enter themselves.
Validation
Represents the necessary data for validating the widget it's attached to.
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"characterLimit" : integer ,
"inputType" : enum ( InputType )
}
Fields
characterLimit
integer
Specify the character limit for text input widgets. Note that this is only used for text input and is ignored for other widgets.
Available for Google Chat apps and Google Workspace add-ons.
inputType
enum ( InputType )
Specify the type of the input widgets.
Available for Google Chat apps and Google Workspace add-ons.
InputType
The type of the input widget.
Enums
INPUT_TYPE_UNSPECIFIED
Unspecified type. Do not use.
TEXT
Regular text that accepts all characters.
INTEGER
An integer value.
FLOAT
A float value.
EMAIL
An email address.
EMOJI_PICKER
A emoji selected from system-provided emoji picker.
HostAppDataSourceMarkup
A data source from a Google Workspace application. The data source populates available items for a widget.
JSON representation
{
"chatDataSource" : {
object ( ChatClientDataSourceMarkup )
} ,
"workflowDataSource" : {
object ( WorkflowDataSourceMarkup )
}
}
Fields
Union field
data_source . The Google Workspace application that populates available items for a widget.
data_source
can be only one of the following:
chatDataSource
object ( ChatClientDataSourceMarkup )
A data source from Google Chat.
workflowDataSource
object ( WorkflowDataSourceMarkup )
A data source from Google Workflow.
ChatClientDataSourceMarkup
For a
SelectionInput
widget that uses a multiselect menu, a data source from Google Chat. The data source populates selection items for the multiselect menu. For example, a user can select Google Chat spaces that they're a member of.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
JSON representation
{
"spaceDataSource" : {
object ( SpaceDataSource )
}
}
Fields
Union field
source . The Google Chat data source.
source
can be only one of the following:
spaceDataSource
object ( SpaceDataSource )
Google Chat spaces that the user is a member of.
SpaceDataSource
A data source that populates Google Chat spaces as selection items for a multiselect menu. Only populates spaces that the user is a member of.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
JSON representation
{
"defaultToCurrentSpace" : boolean
}
Fields
defaultToCurrentSpace
boolean
If set to
true , the multiselect menu selects the current Google Chat space as an item by default.
WorkflowDataSourceMarkup
* Only supported by Google Workspace Workflow, but not Google Chat apps or Google Workspace add-ons.
In a
TextInput
or
SelectionInput
widget with MULTI_SELECT type or a
DateTimePicker , provide data source from Google.
JSON representation
{
"includeVariables" : boolean ,
"type" : enum ( Type )
}
Fields
includeVariables
boolean
Whether to include variables from the previous step in the data source.
type
enum ( Type )
The type of data source.
Type
An enum that represents the type of the workflow data source.
Enums
UNKNOWN
Default value. Don't use.
USER
Google Workspace users. The user can only view and select users from their Google Workspace organization.
SPACE
Google Chat spaces that the user is a member of.
USER_WITH_FREE_FORM
Users can choose to view and select existing members from their Google Workspace organization or manually enter an email address or a valid domain.
SelectionInput
A widget that creates one or more UI items that users can select. Supports form submission validation for
dropdown
and
multiselect
menus only. When
Action.all_widgets_are_required
is set to
true
or this widget is specified in
Action.required_widgets , the submission action is blocked unless a value is selected. For example, a dropdown menu or checkboxes. You can use this widget to collect data that can be predicted or enumerated. For an example in Google Chat apps, see
Add selectable UI elements .
Chat apps can process the value of items that users select or input. For details about working with form inputs, see
Receive form data .
To collect undefined or abstract data from users, use the
TextInput
widget.
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"name" : string ,
"label" : string ,
"type" : enum ( SelectionType ) ,
"items" : [
{
object ( SelectionItem )
}
] ,
"onChangeAction" : {
object ( Action )
} ,
"multiSelectMinQueryLength" : integer ,
"dataSourceConfigs" : [
{
object ( DataSourceConfig )
}
] ,
"multiSelectMaxSelectedItems" : integer ,
"hintText" : string ,
"externalDataSource" : {
object ( Action )
} ,
"platformDataSource" : {
object ( PlatformDataSource )
}
}
Fields
name
string
Required. The name that identifies the selection input in a form input event.
For details about working with form inputs, see
Receive form data .
label
string
The text that appears above the selection input field in the user interface.
Specify text that helps the user enter the information your app needs. For example, if users are selecting the urgency of a work ticket from a drop-down menu, the label might be "Urgency" or "Select urgency".
type
enum ( SelectionType )
The type of items that are displayed to users in a
SelectionInput
widget. Selection types support different types of interactions. For example, users can select one or more checkboxes, but they can only select one value from a dropdown menu.
items[]
object ( SelectionItem )
An array of selectable items. For example, an array of radio buttons or checkboxes. Supports up to 100 items.
onChangeAction
object ( Action )
If specified, the form is submitted when the selection changes. If not specified, you must specify a separate button that submits the form.
For details about working with form inputs, see
Receive form data .
multiSelectMinQueryLength
integer
For multiselect menus, the number of text characters that a user inputs before the menu returns suggested selection items.
If unset, the multiselect menu uses the following default values:
If the menu uses a static array of
SelectionInput
items, defaults to 0 characters and immediately populates items from the array.
If the menu uses a dynamic data source (
multi_select_data_source ), defaults to 3 characters before querying the data source to return suggested items.
dataSourceConfigs[]
object ( DataSourceConfig )
Optional. The data source configs for the selection control. This field provides more fine-grained control over the data source.
If specified, the
multiSelectMaxSelectedItems
field,
multiSelectMinQueryLength
field,
externalDataSource
field and
platformDataSource
field are ignored.
Available for Google Workspace add-ons that extend Google Workspace Studio.
Available for the
Dropdown
widget
in Google Chat apps. For the
Dropdown
widget in Google Chat apps, only one
DataSourceConfig
is supported. If multiple
DataSourceConfig
s are set, only the first one is used.
multiSelectMaxSelectedItems
integer
For multiselect menus, the maximum number of items that a user can select. Minimum value is 1 item. If unspecified, defaults to 3 items.
hintText
string
Optional. Text that appears below the selection input field meant to assist users by prompting them to enter a certain value. This text is always visible.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
Union field
multi_select_data_source . For a multiselect menu, a data source that dynamically populates selection items.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
multi_select_data_source
can be only one of the following:
externalDataSource
object ( Action )
An external data source, such as a relational database.
platformDataSource
object ( PlatformDataSource )
A data source from Google Workspace.
SelectionType
The format for the items that users can select. Different options support different types of interactions. For example, users can select multiple checkboxes, but can only select one item from a dropdown menu.
Each selection input supports one type of selection. Mixing checkboxes and switches, for example, isn't supported.
Available for Google Chat apps and Google Workspace add-ons.
Enums
CHECK_BOX
A set of checkboxes. Users can select one or more checkboxes.
RADIO_BUTTON
A set of radio buttons. Users can select one radio button.
SWITCH
A set of switches. Users can turn on one or more switches.
DROPDOWN
A dropdown menu. Users can select one item from the menu.
For Google Chat apps, you can populate items using a dynamic data source and autosuggest items as users type in the menu. For example, users can start typing the name of a Google Chat space and the widget autosuggests the space. To dynamically populate items for a dropdown menu, use one of the following types of data sources:
Google Workspace data: Items are populated using data from Google Workspace, such as Google Workspace users or Google Chat spaces.
External data: Items are populated from an external data source outside of Google Workspace.
For examples of how to implement dropdown menus for Chat apps, see
Add a dropdown menu
and
Dynamically populate drop-down menus .
Available for Google Chat apps and Google Workspace add-ons.
MULTI_SELECT
A menu with a text box. Users can type and select one or more items. For Google Workspace add-ons, you must populate items using a static array of
SelectionItem
objects.
For Google Chat apps, you can also populate items using a dynamic data source and autosuggest items as users type in the menu. For example, users can start typing the name of a Google Chat space and the widget autosuggests the space. To dynamically populate items for a multiselect menu, use one of the following types of data sources:
Google Workspace data: Items are populated using data from Google Workspace, such as Google Workspace users or Google Chat spaces.
External data: Items are populated from an external data source outside of Google Workspace.
For examples of how to implement multiselect menus for Chat apps, see
Add a multiselect menu .
Available for Google Chat apps and Google Workspace add-ons.
SelectionItem
An item that users can select in a selection input, such as a checkbox or switch. Supports up to 100 items.
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"text" : string ,
"value" : string ,
"selected" : boolean ,
"bottomText" : string ,
"startIconUri" : string
}
Fields
text
string
The text that identifies or describes the item to users.
value
string
The value associated with this item. The client should use this as a form input value.
For details about working with form inputs, see
Receive form data .
selected
boolean
Whether the item is selected by default. If the selection input only accepts one value (such as for radio buttons or a dropdown menu), only set this field for one item.
bottomText
string
For multiselect menus, a text description or label that's displayed below the item's
text
field.
Union field
start_icon . For multiselect menus, the URL for the icon displayed next to the item's
text
field. Supports PNG and JPEG files. Must be an
HTTPS
URL. For example,
https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png .
start_icon
can be only one of the following:
startIconUri
string
PlatformDataSource
For a
SelectionInput
widget that uses a multiselect menu, a data source from Google Workspace. Used to populate items in a multiselect menu.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
JSON representation
{
"commonDataSource" : enum ( CommonDataSource ) ,
"hostAppDataSource" : {
object ( HostAppDataSourceMarkup )
}
}
Fields
Union field
data_source . The data source.
data_source
can be only one of the following:
commonDataSource
enum ( CommonDataSource )
A data source shared by all Google Workspace applications, such as users in a Google Workspace organization.
hostAppDataSource
object ( HostAppDataSourceMarkup )
A data source that's unique to a Google Workspace host application, such spaces in Google Chat.
This field supports the Google API Client Libraries but isn't available in the Cloud Client Libraries. To learn more, see
Install the client libraries .
CommonDataSource
A data source shared by all
Google Workspace applications .
Available for Google Chat apps and unavailable for Google Workspace add-ons.
Enums
UNKNOWN
Default value. Don't use.
USER
Google Workspace users. The user can only view and select users from their Google Workspace organization.
DataSourceConfig
A configuration object that helps configure the data sources for a widget.
Available for Google Chat apps and Google Workspace add-ons that extend Google Workspace Studio.
JSON representation
{
"remoteDataSource" : {
object ( Action )
} ,
"platformDataSource" : {
object ( PlatformDataSource )
}
"minCharactersTrigger" : integer
}
Fields
Union field
data_source . The data source.
data_source
can be only one of the following:
remoteDataSource
object ( Action )
The data is from a remote data provider.
platformDataSource
object ( PlatformDataSource )
The data is from a Google Workspace application.
minCharactersTrigger
integer
The minimum number of characters the user must enter before this data provider is triggered (i.e., before it starts returning results).
DateTimePicker
Lets users input a date, a time, or both a date and a time. Supports form submission validation. When
Action.all_widgets_are_required
is set to
true
or this widget is specified in
Action.required_widgets , the submission action is blocked unless a value is selected. For an example in Google Chat apps, see
Let a user pick a date and time .
Users can input text or use the picker to select dates and times. If users input an invalid date or time, the picker shows an error that prompts users to input the information correctly.
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"name" : string ,
"label" : string ,
"type" : enum ( DateTimePickerType ) ,
"valueMsEpoch" : string ,
"timezoneOffsetDate" : integer ,
"onChangeAction" : {
object ( Action )
} ,
"hostAppDataSource" : {
object ( HostAppDataSourceMarkup )
}
}
Fields
name
string
The name by which the
DateTimePicker
is identified in a form input event.
For details about working with form inputs, see
Receive form data .
label
string
The text that prompts users to input a date, a time, or a date and time. For example, if users are scheduling an appointment, use a label such as
Appointment date
or
Appointment date and time .
type
enum ( DateTimePickerType )
Whether the widget supports inputting a date, a time, or the date and time.
valueMsEpoch
string ( int64
format)
The default value displayed in the widget, in milliseconds since
Unix epoch time .
Specify the value based on the type of picker (
DateTimePickerType ):
DATE_AND_TIME
: a calendar date and time in UTC. For example, to represent January 1, 2023 at 12:00 PM UTC, use
1672574400000 .
DATE_ONLY
: a calendar date at 00:00:00 UTC. For example, to represent January 1, 2023, use
1672531200000 .
TIME_ONLY
: a time in UTC. For example, to represent 12:00 PM, use
43200000
(or
12 * 60 * 60 * 1000 ).
timezoneOffsetDate
integer
The number representing the time zone offset from UTC, in minutes. If set, the
valueMsEpoch
is displayed in the specified time zone. If unset, the value defaults to the user's time zone setting.
onChangeAction
object ( Action )
Triggered when the user clicks
Save
or
Clear
from the
DateTimePicker
interface.
Union field
data_source . The data source specified to represent a date and time.
data_source
can be only one of the following:
hostAppDataSource
object ( HostAppDataSourceMarkup )
A data source that's unique to a Google Workspace host application, such as Gmail emails, Google Calendar events, or Google Chat messages.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
DateTimePickerType
The format for the date and time in the
DateTimePicker
widget. Determines whether users can input a date, a time, or both a date and time.
Available for Google Chat apps and Google Workspace add-ons.
Enums
DATE_AND_TIME
Users input a date and time.
DATE_ONLY
Users input a date.
TIME_ONLY
Users input a time.
Divider
This type has no fields.
Displays a divider between widgets as a horizontal line. For an example in Google Chat apps, see
Add a horizontal divider between widgets .
Available for Google Chat apps and Google Workspace add-ons.
For example, the following JSON creates a divider:
"divider": {}
Grid
Displays a grid with a collection of items. Items can only include text or images. For responsive columns, or to include more than text or images, use
Columns . For an example in Google Chat apps, see
Display a Grid with a collection of items .
A grid supports any number of columns and items. The number of rows is determined by items divided by columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows.
Available for Google Chat apps and Google Workspace add-ons.
For example, the following JSON creates a 2 column grid with a single item:
"grid": {
"title": "A fine collection of items",
"columnCount": 2,
"borderStyle": {
"type": "STROKE",
"cornerRadius": 4
},
"items": [
{
"image": {
"imageUri": "https://www.example.com/image.png",
"cropStyle": {
"type": "SQUARE"
},
"borderStyle": {
"type": "STROKE"
}
},
"title": "An item",
"textAlignment": "CENTER"
}
],
"onClick": {
"openLink": {
"url": "https://www.example.com"
}
}
}
JSON representation
{
"title" : string ,
"items" : [
{
object ( GridItem )
}
] ,
"borderStyle" : {
object ( BorderStyle )
} ,
"columnCount" : integer ,
"onClick" : {
object ( OnClick )
}
}
Fields
title
string
The text that displays in the grid header.
items[]
object ( GridItem )
The items to display in the grid.
borderStyle
object ( BorderStyle )
The border style to apply to each grid item.
columnCount
integer
The number of columns to display in the grid. A default value is used if this field isn't specified, and that default value is different depending on where the grid is shown (dialog versus companion).
onClick
object ( OnClick )
This callback is reused by each individual grid item, but with the item's identifier and index in the items list added to the callback's parameters.
GridItem
Represents an item in a grid layout. Items can contain text, an image, or both text and an image.
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"id" : string ,
"image" : {
object ( ImageComponent )
} ,
"title" : string ,
"subtitle" : string ,
"layout" : enum ( GridItemLayout )
}
Fields
id
string
A user-specified identifier for this grid item. This identifier is returned in the parent grid's
onClick
callback parameters.
image
object ( ImageComponent )
The image that displays in the grid item.
title
string
The grid item's title.
subtitle
string
The grid item's subtitle.
layout
enum ( GridItemLayout )
The layout to use for the grid item.
ImageComponent
Represents an image.
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"imageUri" : string ,
"altText" : string ,
"cropStyle" : {
object ( ImageCropStyle )
} ,
"borderStyle" : {
object ( BorderStyle )
}
}
Fields
imageUri
string
The image URL.
altText
string
The accessibility label for the image.
cropStyle
object ( ImageCropStyle )
The crop style to apply to the image.
borderStyle
object ( BorderStyle )
The border style to apply to the image.
ImageCropStyle
Represents the crop style applied to an image.
Available for Google Chat apps and Google Workspace add-ons.
For example, here's how to apply a 16:9 aspect ratio:
cropStyle {
"type": "RECTANGLE_CUSTOM",
"aspectRatio": 16/9
}
JSON representation
{
"type" : enum ( ImageCropType ) ,
"aspectRatio" : number
}
Fields
type
enum ( ImageCropType )
The crop type.
aspectRatio
number
The aspect ratio to use if the crop type is
RECTANGLE_CUSTOM .
For example, here's how to apply a 16:9 aspect ratio:
cropStyle {
"type": "RECTANGLE_CUSTOM",
"aspectRatio": 16/9
}
ImageCropType
Represents the crop style applied to an image.
Available for Google Chat apps and Google Workspace add-ons.
Enums
IMAGE_CROP_TYPE_UNSPECIFIED
Don't use. Unspecified.
SQUARE
Default value. Applies a square crop.
CIRCLE
Applies a circular crop.
RECTANGLE_CUSTOM
Applies a rectangular crop with a custom aspect ratio. Set the custom aspect ratio with
aspectRatio .
RECTANGLE_4_3
Applies a rectangular crop with a 4:3 aspect ratio.
BorderStyle
The style options for the border of a card or widget, including the border type and color.
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"type" : enum ( BorderType ) ,
"strokeColor" : {
object ( Color )
} ,
"cornerRadius" : integer
}
Fields
type
enum ( BorderType )
The border type.
strokeColor
object ( Color )
The colors to use when the type is
BORDER_TYPE_STROKE .
To set the stroke color, specify a value for the
red ,
green , and
blue
fields. The value must be a float number between 0 and 1 based on the RGB color value, where
0
(0/255) represents the absence of color and
1
(255/255) represents the maximum intensity of the color.
For example, the following sets the color to red at its maximum intensity:
"color": {
"red": 1,
"green": 0,
"blue": 0,
}
The
alpha
field is unavailable for stroke color. If specified, this field is ignored.
cornerRadius
integer
The corner radius for the border.
BorderType
Represents the border types applied to widgets.
Available for Google Chat apps and Google Workspace add-ons.
Enums
BORDER_TYPE_UNSPECIFIED
Don't use. Unspecified.
NO_BORDER
No border.
STROKE
Default value. Outline.
GridItemLayout
Represents the various layout options available for a grid item.
Available for Google Chat apps and Google Workspace add-ons.
Enums
GRID_ITEM_LAYOUT_UNSPECIFIED
Don't use. Unspecified.
TEXT_BELOW
The title and subtitle are shown below the grid item's image.
TEXT_ABOVE
The title and subtitle are shown above the grid item's image.
Columns
The
Columns
widget displays up to 2 columns in a card or dialog. You can add widgets to each column; the widgets appear in the order that they are specified. For an example in Google Chat apps, see
Display cards and dialogs in columns .
The height of each column is determined by the taller column. For example, if the first column is taller than the second column, both columns have the height of the first column. Because each column can contain a different number of widgets, you can't define rows or align widgets between the columns.
Columns are displayed side-by-side. You can customize the width of each column using the
HorizontalSizeStyle
field. If the user's screen width is too narrow, the second column wraps below the first:
On web, the second column wraps if the screen width is less than or equal to 480 pixels.
On iOS devices, the second column wraps if the screen width is less than or equal to 300 pt.
On Android devices, the second column wraps if the screen width is less than or equal to 320 dp.
To include more than two columns, or to use rows, use the
Grid
widget.
Available for Google Chat apps and Google Workspace add-ons. The add-on UIs that support columns include:
The dialog displayed when users open the add-on from an email draft.
The dialog displayed when users open the add-on from the
Add attachment
menu in a Google Calendar event.
JSON representation
{
"columnItems" : [
{
object ( Column )
}
]
}
Fields
columnItems[]
object ( Column )
An array of columns. You can include up to 2 columns in a card or dialog.
Column
A column.
Google Workspace add-ons and Chat apps
JSON representation
{
"horizontalSizeStyle" : enum ( HorizontalSizeStyle ) ,
"horizontalAlignment" : enum ( HorizontalAlignment ) ,
"verticalAlignment" : enum ( VerticalAlignment ) ,
"widgets" : [
{
object ( Widgets )
}
]
}
Fields
horizontalSizeStyle
enum ( HorizontalSizeStyle )
Specifies how a column fills the width of the card.
horizontalAlignment
enum ( HorizontalAlignment )
Specifies whether widgets align to the left, right, or center of a column.
verticalAlignment
enum ( VerticalAlignment )
Specifies whether widgets align to the top, bottom, or center of a column.
widgets[]
object ( Widgets )
An array of widgets included in a column. Widgets appear in the order that they are specified.
HorizontalSizeStyle
Specifies how a column fills the width of the card. The width of each column depends on both the
HorizontalSizeStyle
and the width of the widgets within the column.
Google Workspace add-ons and Chat apps
Enums
HORIZONTAL_SIZE_STYLE_UNSPECIFIED
Don't use. Unspecified.
FILL_AVAILABLE_SPACE
Default value. Column fills the available space, up to 70% of the card's width. If both columns are set to
FILL_AVAILABLE_SPACE , each column fills 50% of the space.
FILL_MINIMUM_SPACE
Column fills the least amount of space possible and no more than 30% of the card's width.
HorizontalAlignment
Specifies whether widgets align to the left, right, or center of a column.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
Enums
HORIZONTAL_ALIGNMENT_UNSPECIFIED
Don't use. Unspecified.
START
Default value. Aligns widgets to the start position of the column. For left-to-right layouts, aligns to the left. For right-to-left layouts, aligns to the right.
CENTER
Aligns widgets to the center of the column.
END
Aligns widgets to the end position of the column. For left-to-right layouts, aligns widgets to the right. For right-to-left layouts, aligns widgets to the left.
VerticalAlignment
Specifies whether widgets align to the top, bottom, or center of a column.
Google Workspace add-ons and Chat apps
Enums
VERTICAL_ALIGNMENT_UNSPECIFIED
Don't use. Unspecified.
CENTER
Default value. Aligns widgets to the center of a column.
TOP
Aligns widgets to the top of a column.
BOTTOM
Aligns widgets to the bottom of a column.
Widgets
The supported widgets that you can include in a column.
Google Workspace add-ons and Chat apps
JSON representation
{
"textParagraph" : {
object ( TextParagraph )
} ,
"image" : {
object ( Image )
} ,
"decoratedText" : {
object ( DecoratedText )
} ,
"buttonList" : {
object ( ButtonList )
} ,
"textInput" : {
object ( TextInput )
} ,
"selectionInput" : {
object ( SelectionInput )
} ,
"dateTimePicker" : {
object ( DateTimePicker )
} ,
"chipList" : {
object ( ChipList )
}
}
Fields
Union field
data .
data
can be only one of the following:
textParagraph
object ( TextParagraph )
TextParagraph
widget.
image
object ( Image )
Image
widget.
decoratedText
object ( DecoratedText )
DecoratedText
widget.
buttonList
object ( ButtonList )
ButtonList
widget.
textInput
object ( TextInput )
TextInput
widget.
selectionInput
object ( SelectionInput )
SelectionInput
widget.
dateTimePicker
object ( DateTimePicker )
DateTimePicker
widget.
chipList
object ( ChipList )
ChipList
widget.
ChipList
A list of chips layed out horizontally, which can either scroll horizontally or wrap to the next line.
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"layout" : enum ( Layout ) ,
"chips" : [
{
object ( Chip )
}
]
}
Fields
layout
enum ( Layout )
Specified chip list layout.
chips[]
object ( Chip )
An array of chips.
Layout
The chip list layout.
Enums
LAYOUT_UNSPECIFIED
Don't use. Unspecified.
WRAPPED
Default value. The chip list wraps to the next line if there isn't enough horizontal space.
HORIZONTAL_SCROLLABLE
The chips scroll horizontally if they don't fit in the available space.
Chip
A text, icon, or text and icon chip that users can click.
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"icon" : {
object ( Icon )
} ,
"label" : string ,
"onClick" : {
object ( OnClick )
} ,
"enabled" : boolean ,
"disabled" : boolean ,
"altText" : string
}
Fields
icon
object ( Icon )
The icon image. If both
icon
and
text
are set, then the icon appears before the text.
label
string
The text displayed inside the chip.
onClick
object ( OnClick )
Optional. The action to perform when a user clicks the chip, such as opening a hyperlink or running a custom function.
enabled
(deprecated)
boolean
This item is deprecated!
Whether the chip is in an active state and responds to user actions. Defaults to
true . Deprecated. Use
disabled
instead.
disabled
boolean
Whether the chip is in an inactive state and ignores user actions. Defaults to
false .
altText
string
The alternative text that's used for accessibility.
Set descriptive text that lets users know what the chip does. For example, if a chip opens a hyperlink, write: "Opens a new browser tab and navigates to the Google Chat developer documentation at
https://developers.google.com/workspace/chat" .
Carousel
A carousel, also known as a slider, rotates and displays a list of widgets in a slideshow format, with buttons navigating to the previous or next widget.
For example, this is a JSON representation of a carousel that contains three text paragraph widgets.
{
"carouselCards": [
{
"widgets": [
{
"textParagraph": {
"text": "First text paragraph in carousel",
}
}
]
},
{
"widgets": [
{
"textParagraph": {
"text": "Second text paragraph in carousel",
}
}
]
},
{
"widgets": [
{
"textParagraph": {
"text": "Third text paragraph in carousel",
}
}
]
}
]
}
Available for Google Chat apps and unavailable for Google Workspace add-ons.
JSON representation
{
"carouselCards" : [
{
object ( CarouselCard )
}
]
}
Fields
carouselCards[]
object ( CarouselCard )
A list of cards included in the carousel.
CarouselCard
A card that can be displayed as a carousel item.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
JSON representation
{
"widgets" : [
{
object ( NestedWidget )
}
] ,
"footerWidgets" : [
{
object ( NestedWidget )
}
]
}
Fields
widgets[]
object ( NestedWidget )
A list of widgets displayed in the carousel card. The widgets are displayed in the order that they are specified.
footerWidgets[]
object ( NestedWidget )
A list of widgets displayed at the bottom of the carousel card. The widgets are displayed in the order that they are specified.
NestedWidget
A list of widgets that can be displayed in a containing layout, such as a
CarouselCard .
Available for Google Chat apps and unavailable for Google Workspace add-ons.
JSON representation
{
"textParagraph" : {
object ( TextParagraph )
} ,
"buttonList" : {
object ( ButtonList )
} ,
"image" : {
object ( Image )
}
}
Fields
Union field
data .
data
can be only one of the following:
textParagraph
object ( TextParagraph )
A text paragraph widget.
buttonList
object ( ButtonList )
A button list widget.
image
object ( Image )
An image widget.
Visibility
Specifies whether an UI element is visible or hidden.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
Enums
VISIBILITY_UNSPECIFIED
Unspecified visibility. Do not use.
VISIBLE
The UI element is visible.
HIDDEN
The UI element is hidden.
EventAction
Represents an actionthat can be performed on an ui element.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
JSON representation
{
"actionRuleId" : string ,
"postEventTriggers" : [
{
object ( Trigger )
}
] ,
"commonWidgetAction" : {
object ( CommonWidgetAction )
}
}
Fields
actionRuleId
string
The unique identifier of the ActionRule.
postEventTriggers[]
object ( Trigger )
The list of triggers that will be triggered after the EventAction is executed.
Union field
action . The action to perform.
action
can be only one of the following:
commonWidgetAction
object ( CommonWidgetAction )
Common widget action.
Trigger
Represents a trigger.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
JSON representation
{
"actionRuleId" : string
}
Fields
actionRuleId
string
The unique identifier of the ActionRule.
CommonWidgetAction
Represents an action that is not specific to a widget.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
JSON representation
{
"updateVisibilityAction" : {
object ( UpdateVisibilityAction )
}
}
Fields
Union field
action . The action to perform.
action
can be only one of the following:
updateVisibilityAction
object ( UpdateVisibilityAction )
The action to update the visibility of a widget.
UpdateVisibilityAction
Represents an action that updates the visibility of a widget.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
JSON representation
{
"visibility" : enum ( Visibility )
}
Fields
visibility
enum ( Visibility )
The new visibility.
CollapseControl
Represent an expand and collapse control.
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"horizontalAlignment" : enum ( HorizontalAlignment ) ,
"expandButton" : {
object ( Button )
} ,
"collapseButton" : {
object ( Button )
}
}
Fields
horizontalAlignment
enum ( HorizontalAlignment )
The horizontal alignment of the expand and collapse button.
expandButton
object ( Button )
Optional. Define a customizable button to expand the section. Both expandButton and collapseButton field must be set. Only one field set will not take into effect. If this field isn't set, the default button is used.
collapseButton
object ( Button )
Optional. Define a customizable button to collapse the section. Both expandButton and collapseButton field must be set. Only one field set will not take into effect. If this field isn't set, the default button is used.
DividerStyle
The divider style of a card. Currently only used for dividers betweens card sections.
Available for Google Chat apps and Google Workspace add-ons.
Enums
DIVIDER_STYLE_UNSPECIFIED
Don't use. Unspecified.
SOLID_DIVIDER
Default option. Render a solid divider.
NO_DIVIDER
If set, no divider is rendered. This style completely removes the divider from the layout. The result is equivalent to not adding a divider at all.
CardAction
A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
JSON representation
{
"actionLabel" : string ,
"onClick" : {
object ( OnClick )
}
}
Fields
actionLabel
string
The label that displays as the action menu item.
onClick
object ( OnClick )
The
onClick
action for this action item.
CardFixedFooter
A persistent (sticky) footer that that appears at the bottom of the card.
Setting
fixedFooter
without specifying a
primaryButton
or a
secondaryButton
causes an error.
For Chat apps, you can use fixed footers in
dialogs , but not
card messages . For an example in Google Chat apps, see
Add a persistent footer .
Available for Google Chat apps and Google Workspace add-ons.
JSON representation
{
"primaryButton" : {
object ( Button )
} ,
"secondaryButton" : {
object ( Button )
}
}
Fields
primaryButton
object ( Button )
The primary button of the fixed footer. The button must be a text button with text and color set.
secondaryButton
object ( Button )
The secondary button of the fixed footer. The button must be a text button with text and color set. If
secondaryButton
is set, you must also set
primaryButton .
DisplayStyle
In Google Workspace add-ons, determines how a card is displayed.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
Enums
DISPLAY_STYLE_UNSPECIFIED
Don't use. Unspecified.
PEEK
The header of the card appears at the bottom of the sidebar, partially covering the current top card of the stack. Clicking the header pops the card into the card stack. If the card has no header, a generated header is used instead.
REPLACE
Default value. The card is shown by replacing the view of the top card in the card stack.
ExpressionData
Represents the data that is used to evaluate an expression.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
JSON representation
{
"id" : string ,
"expression" : string ,
"conditions" : [
{
object ( Condition )
}
] ,
"eventActions" : [
{
object ( EventAction )
}
]
}
Fields
id
string
The unique identifier of the ExpressionData.
expression
string
The uncompiled expression.
conditions[]
object ( Condition )
The list of conditions that are determined by the expression evaluation result.
eventActions[]
object ( EventAction )
The list of actions that the ExpressionData can be used.
Condition
Represents a condition that can be used to trigger an action.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
JSON representation
{
"actionRuleId" : string ,
"expressionDataCondition" : {
object ( ExpressionDataCondition )
}
}
Fields
actionRuleId
string
The unique identifier of the ActionRule.
Union field
condition . The condition.
condition
can be only one of the following:
expressionDataCondition
object ( ExpressionDataCondition )
The condition that is determined by the expression data.
ExpressionDataCondition
Represents a condition that is evaluated using CEL.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
JSON representation
{
"conditionType" : enum ( ConditionType )
}
Fields
conditionType
enum ( ConditionType )
The type of the condition.
ConditionType
The type of the condition.
Enums
CONDITION_TYPE_UNSPECIFIED
Unspecified condition type.
EXPRESSION_EVALUATION_SUCCESS
The expression evaluation was successful.
EXPRESSION_EVALUATION_FAILURE
The expression evaluation was unsuccessful.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],["Cards in Google Chat and Workspace add-ons are interactive UI elements built with structured layouts, multimedia, and action triggers. They consist of a header, collapsible sections, and a fixed footer. You can use the card builder tool and create them with JSON format. Cards are limited to 100 widgets, which include text, images, buttons, input fields, and grids. Actions define user interaction, like opening links or submitting forms. Components include decorated text, grids, carousels, columns, and various input types. The action can also navigate to other cards, add a fixed footer or add a menu item to the toolbar.\n"]]
