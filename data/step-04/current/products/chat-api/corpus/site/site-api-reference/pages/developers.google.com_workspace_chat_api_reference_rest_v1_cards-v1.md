---
title: "Cards v1 \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1
  title: "Cards v1 \_|\_ Google Chat \_|\_ Google for Developers"
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
Cards v1
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Cards v1 is deprecated; use Cards v2 instead for creating interactive UI elements within Google Chat.
Cards are UI elements that can contain widgets like text, images, and buttons, arranged within sections and headers.
Widgets display content and actions, including text paragraphs, images, key-value pairs, and buttons with associated functionalities.
Cards support interactive elements like buttons that can trigger actions such as opening links or invoking Apps Script functions.
Developers can leverage formatted text and image styles to enhance the visual presentation of information within cards.
Deprecated: Use Cards v2 instead.
Card
A card is a UI element that can contain UI widgets such as text and images.
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
"cardActions" : [
{
object ( CardAction )
}
] ,
"name" : string
}
Fields
header
object ( CardHeader )
The header of the card. A header usually contains a title and an image.
sections[]
object ( Section )
Sections are separated by a line divider.
cardActions[]
object ( CardAction )
The actions of this card.
name
string
Name of the card.
CardHeader
JSON representation
{
"title" : string ,
"subtitle" : string ,
"imageStyle" : enum ( ImageStyle ) ,
"imageUrl" : string
}
Fields
title
string
The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each takes up one line. If only the title is specified, it takes up both lines.
subtitle
string
The subtitle of the card header.
imageStyle
enum ( ImageStyle )
The image's type (for example, square border or circular border).
imageUrl
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
JSON representation
{
"header" : string ,
"widgets" : [
{
object ( WidgetMarkup )
}
]
}
Fields
header
string
The header of the section. Formatted text is supported. For more information about formatting text, see
Formatting text in Google Chat apps
and
Formatting text in Google Workspace Add-ons .
widgets[]
object ( WidgetMarkup )
A section must contain at least one widget.
WidgetMarkup
A widget is a UI element that presents text and images.
JSON representation
{
"buttons" : [
{
object ( Button )
}
] ,
"textParagraph" : {
object ( TextParagraph )
} ,
"image" : {
object ( Image )
} ,
"keyValue" : {
object ( KeyValue )
}
}
Fields
buttons[]
object ( Button )
A list of buttons. Buttons is also
oneof data
and only one of these fields should be set.
Union field
data . A
WidgetMarkup
can only have one of the following items. You can use multiple
WidgetMarkup
fields to display more items.
data
can be only one of the following:
textParagraph
object ( TextParagraph )
Display a text paragraph in this widget.
image
object ( Image )
Display an image in this widget.
keyValue
object ( KeyValue )
Display a key value item in this widget.
TextParagraph
A paragraph of text. Formatted text supported. For more information about formatting text, see
Formatting text in Google Chat apps
and
Formatting text in Google Workspace Add-ons .
JSON representation
{
"text" : string
}
Fields
text
string
Image
An image that's specified by a URL and can have an
onclick
action.
JSON representation
{
"imageUrl" : string ,
"onClick" : {
object ( OnClick )
} ,
"aspectRatio" : number
}
Fields
imageUrl
string
The URL of the image.
onClick
object ( OnClick )
The
onclick
action.
aspectRatio
number
The aspect ratio of this image (width and height). This field lets you reserve the right height for the image while waiting for it to load. It's not meant to override the built-in aspect ratio of the image. If unset, the server fills it by prefetching the image.
OnClick
An
onclick
action (for example, open a link).
JSON representation
{
"action" : {
object ( FormAction )
} ,
"openLink" : {
object ( OpenLink )
}
}
Fields
Union field
data .
data
can be only one of the following:
action
object ( FormAction )
A form action is triggered by this
onclick
action if specified.
openLink
object ( OpenLink )
This
onclick
action triggers an open link action if specified.
FormAction
A form action describes the behavior when the form is submitted. For example, you can invoke Apps Script to handle the form.
JSON representation
{
"actionMethodName" : string ,
"parameters" : [
{
object ( ActionParameter )
}
]
}
Fields
actionMethodName
string
The method name is used to identify which part of the form triggered the form submission. This information is echoed back to the Chat app as part of the card click event. You can use the same method name for several elements that trigger a common behavior.
parameters[]
object ( ActionParameter )
List of action parameters.
ActionParameter
List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze one day, snooze next week. You might use
action method = snooze() , passing the snooze type and snooze time in the list of string parameters.
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
OpenLink
A link that opens a new window.
JSON representation
{
"url" : string
}
Fields
url
string
The URL to open.
KeyValue
A UI element contains a key (label) and a value (content). This element can also contain some actions such as
onclick
button.
JSON representation
{
"topLabel" : string ,
"content" : string ,
"contentMultiline" : boolean ,
"bottomLabel" : string ,
"onClick" : {
object ( OnClick )
} ,
"icon" : enum ( Icon ) ,
"iconUrl" : string
"button" : {
object ( Button )
}
}
Fields
topLabel
string
The text of the top label. Formatted text supported. For more information about formatting text, see
Formatting text in Google Chat apps
and
Formatting text in Google Workspace Add-ons .
content
string
The text of the content. Formatted text supported and always required. For more information about formatting text, see
Formatting text in Google Chat apps
and
Formatting text in Google Workspace Add-ons .
contentMultiline
boolean
If the content should be multiline.
bottomLabel
string
The text of the bottom label. Formatted text supported. For more information about formatting text, see
Formatting text in Google Chat apps
and
Formatting text in Google Workspace Add-ons .
onClick
object ( OnClick )
The
onclick
action. Only the top label, bottom label, and content region are clickable.
Union field
icons . At least one of icons,
top_label
and
bottom_label
must be defined.
icons
can be only one of the following:
icon
enum ( Icon )
An enum value that's replaced by the Chat API with the corresponding icon image.
iconUrl
string
The icon specified by a URL.
Union field
control . A control widget. You can set either
button
or
switch_widget , but not both.
control
can be only one of the following:
button
object ( Button )
A button that can be clicked to trigger an action.
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
Button
A button. Can be a text button or an image button.
JSON representation
{
"textButton" : {
object ( TextButton )
} ,
"imageButton" : {
object ( ImageButton )
}
}
Fields
Union field
type .
type
can be only one of the following:
textButton
object ( TextButton )
A button with text and
onclick
action.
imageButton
object ( ImageButton )
A button with image and
onclick
action.
TextButton
A button with text and
onclick
action.
JSON representation
{
"text" : string ,
"onClick" : {
object ( OnClick )
}
}
Fields
text
string
The text of the button.
onClick
object ( OnClick )
The
onclick
action of the button.
ImageButton
An image button with an
onclick
action.
JSON representation
{
"onClick" : {
object ( OnClick )
} ,
"name" : string ,
"icon" : enum ( Icon ) ,
"iconUrl" : string
}
Fields
onClick
object ( OnClick )
The
onclick
action.
name
string
The name of this
imageButton
that's used for accessibility. Default value is provided if this name isn't specified.
Union field
icons . The icon can be specified by an
Icon
enum
or a URL.
icons
can be only one of the following:
icon
enum ( Icon )
The icon specified by an
enum
that indices to an icon provided by Chat API.
iconUrl
string
The icon specified by a URL.
CardAction
A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser.
Not supported by Google Chat apps.
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
The label used to be displayed in the action menu item.
onClick
object ( OnClick )
The onclick action for this action item.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],["This document outlines the structure and components of cards, which are UI elements containing widgets like text and images. Cards have a header, sections, card actions, and a name. Sections contain widgets rendered vertically, including buttons, text paragraphs, images, and key-value pairs. Buttons can be text or image-based, triggering actions when clicked. Actions can open links or trigger form submissions, while card actions define broader actions related to the card. The use of the information contained is deprecated, and the `Cards v2` should be used instead.\n"]]
