---
title: "Package google.apps.card.v1 \_|\_ Google Workspace add-ons \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1
  title: "Package google.apps.card.v1 \_|\_ Google Workspace add-ons \_|\_ Google\
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
Package google.apps.card.v1
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Workspace add-ons and Google Chat apps utilize cards built with interactive UI elements called widgets.
Widgets include text, images, buttons, selection inputs, and more, offering diverse functionalities.
Cards can be customized with headers, footers, sections, and actions for navigation and user interaction.
Developers can define actions triggered by user interactions, data updates, and navigation within the add-on.
Some features like carousels, nested widgets, and specific input validations are in developer preview and subject to change.
Index
Action (message)
Action.ActionParameter (message)
Action.Interaction (enum)
Action.LoadIndicator (enum)
AuthorizationError (message)
BasicAuthorizationAction (message)
BorderStyle (message)
BorderStyle.BorderType (enum)
Button (message)
Button.Type (enum)
ButtonList (message)
Card (message)
Card.CardAction (message)
Card.CardFixedFooter (message)
Card.CardHeader (message)
Card.DisplayStyle (enum)
Card.DividerStyle (enum)
Card.NestedWidget (message)
Card.Section (message)
Card.Visibility (enum)
Carousel (message)
Carousel.CarouselCard (message)
Chip (message)
ChipList (message)
ChipList.Layout (enum)
CollapseControl (message)
Columns (message)
Columns.Column (message)
Columns.Column.HorizontalSizeStyle (enum)
Columns.Column.VerticalAlignment (enum)
Columns.Column.Widgets (message)
Condition (message)
Condition.ExpressionDataCondition (message)
Condition.ExpressionDataCondition.ConditionType (enum)
DataActions (message)
DataSourceConfig (message)
DateTimePicker (message)
DateTimePicker.DateTimePickerType (enum)
DecoratedText (message)
DecoratedText.SwitchControl (message)
DecoratedText.SwitchControl.ControlType (enum)
Divider (message)
EndNavigation (message)
EndNavigation.Action (enum)
EventAction (message)
EventAction.CommonWidgetAction (message)
EventAction.CommonWidgetAction.UpdateVisibilityAction (message)
ExpressionData (message)
GetAutocompletionResponse (message)
Grid (message)
Grid.GridItem (message)
Grid.GridItem.GridItemLayout (enum)
Icon (message)
Image (message)
ImageComponent (message)
ImageCropStyle (message)
ImageCropStyle.ImageCropType (enum)
Link (message)
LinkPreview (message)
MaterialIcon (message)
ModifyCard (message)
ModifyCard.UpdateWidget (message)
ModifyCard.UpdateWidget.SelectionInputWidgetSuggestions (message)
Navigation (message)
Notification (message)
OnClick (message)
OpenLink (message)
OpenLink.OnClose (enum)
OpenLink.OpenAs (enum)
OverflowMenu (message)
OverflowMenu.OverflowMenuItem (message)
RenderActions (message)
RenderActions.Action (message)
RequestingGoogleScopes (message)
SelectionInput (message)
SelectionInput.PlatformDataSource (message)
SelectionInput.PlatformDataSource.CommonDataSource (enum)
SelectionInput.SelectionItem (message)
SelectionInput.SelectionType (enum)
SubmitFormResponse (message)
Suggestions (message)
Suggestions.SuggestionItem (message)
TextInput (message)
TextInput.Type (enum)
TextParagraph (message)
TextParagraph.TextSyntax (enum)
Trigger (message)
Validation (message)
Validation.InputType (enum)
Widget (message)
Widget.HorizontalAlignment (enum)
Widget.ImageType (enum)
Widget.VerticalAlignment (enum)
Action
An action that describes the behavior when the form is submitted. For example, you can invoke an Apps Script script to handle the form. If the action is triggered, the form values are sent to the server.
Available for Google Chat apps and Google Workspace add-ons.
Fields
function
string
A custom function to invoke when the containing element is clicked or otherwise activated.
For example usage, see Read form data .
parameters[]
ActionParameter
List of action parameters.
loadIndicator
LoadIndicator
Specifies the loading indicator that the action displays while making the call to the action.
persistValues
bool
Indicates whether form values persist after the action. The default value is false .
If true , form values remain after the action is triggered. To let the user make changes while the action is being processed, set LoadIndicator to NONE . For card messages in Chat apps, you must also set the action's ResponseType to UPDATE_MESSAGE and use the same card_id from the card that contained the action.
If false , the form values are cleared when the action is triggered. To prevent the user from making changes while the action is being processed, set LoadIndicator to SPINNER .
interaction
Interaction
Optional. Required when opening a dialog .
What to do in response to an interaction with a user, such as a user clicking a button in a card message.
If unspecified, the app responds by executing an action —like opening a link or running a function—as normal.
By specifying an interaction , the app can respond in special interactive ways. For example, by setting interaction to OPEN_DIALOG , the app can open a dialog . When specified, a loading indicator isn't shown. If specified for an add-on, the entire card is stripped and nothing is shown in the client.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
requiredWidgets[]
string
Optional. Fill this list with the names of widgets that this Action needs for a valid submission.
If the widgets listed here don't have a value when this Action is invoked, the form submission is aborted.
Available for Google Chat apps and Google Workspace add-ons.
allWidgetsAreRequired
bool
Optional. If this is true, then all widgets are considered required by this action.
Available for Google Chat apps and Google Workspace add-ons.
ActionParameter
List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze one day, or snooze next week. You might use action method = snooze() , passing the snooze type and snooze time in the list of string parameters.
To learn more, see CommonEventObject .
Available for Google Chat apps and Google Workspace add-ons.
Fields
key
string
The name of the parameter for the action script.
value
string
The value of the parameter.
Interaction
Optional. Required when opening a dialog .
What to do in response to an interaction with a user, such as a user clicking a button in a card message.
If unspecified, the app responds by executing an action —like opening a link or running a function—as normal.
By specifying an interaction , the app can respond in special interactive ways. For example, by setting interaction to OPEN_DIALOG , the app can open a dialog .
When specified, a loading indicator isn't shown. If specified for an add-on, the entire card is stripped and nothing is shown in the client.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
Enums
INTERACTION_UNSPECIFIED
Default value. The action executes as normal.
OPEN_DIALOG
Opens a dialog , a windowed, card-based interface that Chat apps use to interact with users.
Only supported by Chat apps in response to button-clicks on card messages. If specified for an add-on, the entire card is stripped and nothing is shown in the client.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
LoadIndicator
Specifies the loading indicator that the action displays while making the call to the action.
Available for Google Chat apps and Google Workspace add-ons.
Enums
SPINNER
Displays a spinner to indicate that content is loading.
NONE
Nothing is displayed.
AuthorizationError
Add-ons that access 3P services or requires more oAuth scopes from Google will need to show the end user an authorization card when the login credentials (e.g. OAuth tokens) are not available. Add-ons should return the AuthorizationError object to render the authorization card.
Fields
Union field rendering .
rendering can be only one of the following:
basicAuthorizationPrompt
BasicAuthorizationAction
Let the platform construct the basic authorization card. The developer only needs to provide the authorization URL. The basic action can be used by add-ons that do NOT intend to be published publicly.
customAuthorizationPrompt
RenderActions
Render instructions for a customized authorization card. A custom authorization prompt will be enforced during the Google Workspace Marketplace review process. End users should see a customized authorization card, making it clear the end user is authorizing access to external 3P services.
requestingGoogleScopes
RequestingGoogleScopes
When unbundled oAuth consent is enabled, the HTTP add-on might need to request more Google oAuth scopes. The add-on should return this object to render the authorization card. See Manage granular
permissions .
BasicAuthorizationAction
Action that will let the platform construct a basic authorization card for end users.
Fields
authorizationUrl
string
If add-on is using OAuth2 to connect to the 3P service, this will be the OAuth2 authorization url.
resource
string
The text displayed to the end user when a protected resource is missing authorization. Example values would be: "Salesforce account" or "Salesforce data".
BorderStyle
The style options for the border of a card or widget, including the border type and color.
Available for Google Chat apps and Google Workspace add-ons.
Fields
type
BorderType
The border type.
strokeColor
Color
The colors to use when the type is BORDER_TYPE_STROKE .
To set the stroke color, specify a value for the red , green , and blue fields. The value must be a float number between 0 and 1 based on the RGB color value, where 0 (0/255) represents the absence of color and 1 (255/255) represents the maximum intensity of the color.
For example, the following sets the color to red at its maximum intensity:
"color": {
"red": 1,
"green": 0,
"blue": 0,
}
The alpha field is unavailable for stroke color. If specified, this field is ignored.
cornerRadius
int32
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
Button
A text, icon, or text and icon button that users can click. For an example in Google Chat apps, see Add a button .
To make an image a clickable button, specify an Image (not an ImageComponent ) and set an onClick action.
Available for Google Chat apps and Google Workspace add-ons.
Fields
text
string
The text displayed inside the button.
icon
Icon
An icon displayed inside the button. If both icon and text are set, then the icon appears before the text.
color
Color
Optional. The color of the button. If set, the button type is set to FILLED and the color of text and icon fields are set to a contrasting color for readability. For example, if the button color is set to blue, any text or icons in the button are set to white.
To set the button color, specify a value for the red , green , and blue fields. The value must be a float number between 0 and 1 based on the RGB color value, where 0 (0/255) represents the absence of color and 1 (255/255) represents the maximum intensity of the color.
For example, the following sets the color to red at its maximum intensity:
"color": {
"red": 1,
"green": 0,
"blue": 0,
}
The alpha field is unavailable for button color. If specified, this field is ignored.
onClick
OnClick
Required. The action to perform when a user clicks the button, such as opening a hyperlink or running a custom function.
disabled
bool
If true , the button is displayed in an inactive state and doesn't respond to user actions.
altText
string
The alternative text that's used for accessibility.
Set descriptive text that lets users know what the button does. For example, if a button opens a hyperlink, you might write: "Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/workspace/chat" .
type
Type
Optional. The type of a button. If unset, button type defaults to OUTLINED . If the color field is set, the button type is forced to FILLED and any value set for this field is ignored.
Type
Optional. The type of a button. If color field is set, the type is forced to FILLED .
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
ButtonList
A list of buttons layed out horizontally. For an example in Google Chat apps, see Add a button .
Available for Google Chat apps and Google Workspace add-ons.
Fields
buttons[]
Button
An array of buttons.
Card
A card interface displayed in a Google Chat message or Google Workspace add-on.
Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step.
Design and preview cards with the Card Builder.
Open the Card Builder
To learn how to build cards, see the following documentation:
For Google Chat apps, see Design the components of a card or dialog .
For Google Workspace add-ons, see Card-based interfaces .
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
Fields
header
CardHeader
The header of the card. A header usually contains a leading image and a title. Headers always appear at the top of a card.
sections[]
Section
Contains a collection of widgets. Each section has its own, optional header. Sections are visually separated by a line divider. For an example in Google Chat apps, see Define a section of a card .
sectionDividerStyle
DividerStyle
The divider style between the header, sections and footer.
cardActions[]
CardAction
The card's actions. Actions are added to the card's toolbar menu.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
For example, the following JSON constructs a card action menu with Settings and Send Feedback options:
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
CardFixedFooter
The fixed footer shown at the bottom of this card.
Setting fixedFooter without specifying a primaryButton or a secondaryButton causes an error. For Chat apps, you can use fixed footers in dialogs , but not card messages .
Available for Google Chat apps and Google Workspace add-ons.
displayStyle
DisplayStyle
In Google Workspace add-ons, sets the display properties of the peekCardHeader .
Available for Google Workspace add-ons and unavailable for Google Chat apps.
peekCardHeader
CardHeader
When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
expressionData[]
ExpressionData
The expression data for the card.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
CardAction
A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
Fields
actionLabel
string
The label that displays as the action menu item.
onClick
OnClick
The onClick action for this action item.
CardFixedFooter
A persistent (sticky) footer that that appears at the bottom of the card.
Setting fixedFooter without specifying a primaryButton or a secondaryButton causes an error.
For Chat apps, you can use fixed footers in dialogs , but not card messages . For an example in Google Chat apps, see Add a persistent footer .
Available for Google Chat apps and Google Workspace add-ons.
Fields
primaryButton
Button
The primary button of the fixed footer. The button must be a text button with text and color set.
secondaryButton
Button
The secondary button of the fixed footer. The button must be a text button with text and color set. If secondaryButton is set, you must also set primaryButton .
CardHeader
Represents a card header. For an example in Google Chat apps, see Add a header .
Available for Google Chat apps and Google Workspace add-ons.
Fields
title
string
Required. The title of the card header. The header has a fixed height: if both a title and subtitle are specified, each takes up one line. If only the title is specified, it takes up both lines.
subtitle
string
The subtitle of the card header. If specified, appears on its own line below the title .
imageType
ImageType
The shape used to crop the image.
Available for Google Chat apps and Google Workspace add-ons.
imageUrl
string
The HTTPS URL of the image in the card header.
imageAltText
string
The alternative text of this image that's used for accessibility.
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
NestedWidget
A list of widgets that can be displayed in a containing layout, such as a CarouselCard . Available for Google Chat apps and unavailable for Google Workspace add-ons.
Fields
Union field data .
data can be only one of the following:
textParagraph
TextParagraph
A text paragraph widget.
buttonList
ButtonList
A button list widget.
image
Image
An image widget.
Section
A section contains a collection of widgets that are rendered vertically in the order that they're specified.
Available for Google Chat apps and Google Workspace add-ons.
Fields
header
string
Text that appears at the top of a section. Supports simple HTML formatted text. For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace add-ons .
widgets[]
Widget
All the widgets in the section. Must contain at least one widget.
collapsible
bool
Indicates whether this section is collapsible.
Collapsible sections hide some or all widgets, but users can expand the section to reveal the hidden widgets by clicking Show more . Users can hide the widgets again by clicking Show less .
To determine which widgets are hidden, specify uncollapsibleWidgetsCount .
uncollapsibleWidgetsCount
int32
The number of uncollapsible widgets which remain visible even when a section is collapsed.
For example, when a section contains five widgets and the uncollapsibleWidgetsCount is set to 2 , the first two widgets are always shown and the last three are collapsed by default. The uncollapsibleWidgetsCount is taken into account only when collapsible is true .
id
string
A unique ID assigned to the section that's used to identify the section to be mutated. The ID has a character limit of 64 characters and should be in the format of [a-zA-Z0-9-]+ .
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
collapseControl
CollapseControl
Optional. Define the expand and collapse button of the section. This button will be shown only if the section is collapsible. If this field isn't set, the default button is used.
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
Fields
carouselCards[]
CarouselCard
A list of cards included in the carousel.
CarouselCard
A card that can be displayed as a carousel item. Available for Google Chat apps and unavailable for Google Workspace add-ons.
Fields
widgets[]
NestedWidget
A list of widgets displayed in the carousel card. The widgets are displayed in the order that they are specified.
footerWidgets[]
NestedWidget
A list of widgets displayed at the bottom of the carousel card. The widgets are displayed in the order that they are specified.
Chip
A text, icon, or text and icon chip that users can click.
Available for Google Chat apps and Google Workspace add-ons.
Fields
icon
Icon
The icon image. If both icon and text are set, then the icon appears before the text.
label
string
The text displayed inside the chip.
onClick
OnClick
Optional. The action to perform when a user clicks the chip, such as opening a hyperlink or running a custom function.
enabled (deprecated)
bool
This item is deprecated!
Whether the chip is in an active state and responds to user actions. Defaults to true . Deprecated. Use disabled instead.
disabled
bool
Whether the chip is in an inactive state and ignores user actions. Defaults to false .
altText
string
The alternative text that's used for accessibility.
Set descriptive text that lets users know what the chip does. For example, if a chip opens a hyperlink, write: "Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/workspace/chat" .
ChipList
A list of chips layed out horizontally, which can either scroll horizontally or wrap to the next line.
Available for Google Chat apps and Google Workspace add-ons.
Fields
layout
Layout
Specified chip list layout.
chips[]
Chip
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
CollapseControl
Represent an expand and collapse control.
Available for Google Chat apps and Google Workspace add-ons.
Fields
horizontalAlignment
HorizontalAlignment
The horizontal alignment of the expand and collapse button.
expandButton
Button
Optional. Define a customizable button to expand the section. Both expandButton and collapseButton field must be set. Only one field set will not take into effect. If this field isn't set, the default button is used.
collapseButton
Button
Optional. Define a customizable button to collapse the section. Both expandButton and collapseButton field must be set. Only one field set will not take into effect. If this field isn't set, the default button is used.
Columns
The Columns widget displays up to 2 columns in a card or dialog. You can add widgets to each column; the widgets appear in the order that they are specified. For an example in Google Chat apps, see Display cards and dialogs in columns .
The height of each column is determined by the taller column. For example, if the first column is taller than the second column, both columns have the height of the first column. Because each column can contain a different number of widgets, you can't define rows or align widgets between the columns.
Columns are displayed side-by-side. You can customize the width of each column using the HorizontalSizeStyle field. If the user's screen width is too narrow, the second column wraps below the first:
On web, the second column wraps if the screen width is less than or equal to 480 pixels.
On iOS devices, the second column wraps if the screen width is less than or equal to 300 pt.
On Android devices, the second column wraps if the screen width is less than or equal to 320 dp.
To include more than two columns, or to use rows, use the Grid widget.
Available for Google Chat apps and Google Workspace add-ons. The add-on UIs that support columns include:
The dialog displayed when users open the add-on from an email draft.
The dialog displayed when users open the add-on from the Add attachment menu in a Google Calendar event.
Fields
columnItems[]
Column
An array of columns. You can include up to 2 columns in a card or dialog.
Column
A column.
Google Workspace add-ons and Chat apps
Fields
horizontalSizeStyle
HorizontalSizeStyle
Specifies how a column fills the width of the card.
horizontalAlignment
HorizontalAlignment
Specifies whether widgets align to the left, right, or center of a column.
verticalAlignment
VerticalAlignment
Specifies whether widgets align to the top, bottom, or center of a column.
widgets[]
Widgets
An array of widgets included in a column. Widgets appear in the order that they are specified.
HorizontalSizeStyle
Specifies how a column fills the width of the card. The width of each column depends on both the HorizontalSizeStyle and the width of the widgets within the column.
Google Workspace add-ons and Chat apps
Enums
HORIZONTAL_SIZE_STYLE_UNSPECIFIED
Don't use. Unspecified.
FILL_AVAILABLE_SPACE
Default value. Column fills the available space, up to 70% of the card's width. If both columns are set to FILL_AVAILABLE_SPACE , each column fills 50% of the space.
FILL_MINIMUM_SPACE
Column fills the least amount of space possible and no more than 30% of the card's width.
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
Fields
Union field data .
data can be only one of the following:
textParagraph
TextParagraph
TextParagraph widget.
image
Image
Image widget.
decoratedText
DecoratedText
DecoratedText widget.
buttonList
ButtonList
ButtonList widget.
textInput
TextInput
TextInput widget.
selectionInput
SelectionInput
SelectionInput widget.
dateTimePicker
DateTimePicker
DateTimePicker widget.
chipList
ChipList
ChipList widget.
Condition
Represents a condition that can be used to trigger an action.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
Fields
actionRuleId
string
The unique identifier of the ActionRule.
Union field condition . The condition. condition can be only one of the following:
expressionDataCondition
ExpressionDataCondition
The condition that is determined by the expression data.
ExpressionDataCondition
Represents a condition that is evaluated using CEL.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
Fields
conditionType
ConditionType
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
DataActions
An add-on action that updates Google Workspace data.
Fields
hostAppDataAction
HostAppDataActionMarkup
Defines how to update Google Workspace data.
DataSourceConfig
A configuration object that helps configure the data sources for a widget.
Available for Google Chat apps and Google Workspace add-ons that extend Google Workspace Studio.
Fields
Union field data_source . The data source. data_source can be only one of the following:
remoteDataSource
Action
The data is from a remote data provider.
platformDataSource
PlatformDataSource
The data is from a Google Workspace application.
minCharactersTrigger
int32
The minimum number of characters the user must enter before this data provider is triggered (i.e., before it starts returning results).
DateTimePicker
Lets users input a date, a time, or both a date and a time. Supports form submission validation. When Action.all_widgets_are_required is set to true or this widget is specified in Action.required_widgets , the submission action is blocked unless a value is selected. For an example in Google Chat apps, see Let a user pick a date and time .
Users can input text or use the picker to select dates and times. If users input an invalid date or time, the picker shows an error that prompts users to input the information correctly.
Available for Google Chat apps and Google Workspace add-ons.
Fields
name
string
The name by which the DateTimePicker is identified in a form input event.
For details about working with form inputs, see Receive form data .
label
string
The text that prompts users to input a date, a time, or a date and time. For example, if users are scheduling an appointment, use a label such as Appointment date or Appointment date and time .
type
DateTimePickerType
Whether the widget supports inputting a date, a time, or the date and time.
valueMsEpoch
int64
The default value displayed in the widget, in milliseconds since Unix epoch time .
Specify the value based on the type of picker ( DateTimePickerType ):
DATE_AND_TIME : a calendar date and time in UTC. For example, to represent January 1, 2023 at 12:00 PM UTC, use 1672574400000 .
DATE_ONLY : a calendar date at 00:00:00 UTC. For example, to represent January 1, 2023, use 1672531200000 .
TIME_ONLY : a time in UTC. For example, to represent 12:00 PM, use 43200000 (or 12 * 60 * 60 * 1000 ).
timezoneOffsetDate
int32
The number representing the time zone offset from UTC, in minutes. If set, the value_ms_epoch is displayed in the specified time zone. If unset, the value defaults to the user's time zone setting.
onChangeAction
Action
Triggered when the user clicks Save or Clear from the DateTimePicker interface.
Union field data_source . The data source specified to represent a date and time. data_source can be only one of the following:
hostAppDataSource
HostAppDataSourceMarkup
A data source that's unique to a Google Workspace host application, such as Gmail emails, Google Calendar events, or Google Chat messages.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
DateTimePickerType
The format for the date and time in the DateTimePicker widget. Determines whether users can input a date, a time, or both a date and time.
Available for Google Chat apps and Google Workspace add-ons.
Enums
DATE_AND_TIME
Users input a date and time.
DATE_ONLY
Users input a date.
TIME_ONLY
Users input a time.
DecoratedText
A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget, or a button after the text. For an example in Google Chat apps, see Display text with decorative text .
Available for Google Chat apps and Google Workspace add-ons.
Fields
icon (deprecated)
Icon
This item is deprecated!
Deprecated in favor of startIcon .
startIcon
Icon
The icon displayed in front of the text.
startIconVerticalAlignment
VerticalAlignment
Optional. Vertical alignment of the start icon. If not set, the icon will be vertically centered.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
topLabel
string
The text that appears above text . Always truncates.
topLabelText
TextParagraph
TextParagraph equivalent of top_label . Always truncates. Allows for more complex formatting than top_label .
Available for Google Chat apps and unavailable for Google Workspace add-ons.
text
string
Required. The primary text.
Supports simple formatting. For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace add-ons .
contentText
TextParagraph
TextParagraph equivalent of text . Allows for more complex formatting than text .
Available for Google Chat apps and unavailable for Google Workspace add-ons.
wrapText
bool
The wrap text setting. If true , the text wraps and displays on multiple lines. Otherwise, the text is truncated.
Only applies to text , not topLabel and bottomLabel .
bottomLabel
string
The text that appears below text . Always wraps.
bottomLabelText
TextParagraph
TextParagraph equivalent of bottom_label . Always wraps. Allows for more complex formatting than bottom_label .
Available for Google Chat apps and unavailable for Google Workspace add-ons.
onClick
OnClick
This action is triggered when users click topLabel or bottomLabel .
Union field control . A button, switch, checkbox, or image that appears to the right-hand side of text in the decoratedText widget. control can be only one of the following:
button
Button
A button that a user can click to trigger an action.
switchControl
SwitchControl
A switch widget that a user can click to change its state and trigger an action.
endIcon
Icon
An icon displayed after the text.
Supports built-in and custom icons.
SwitchControl
Either a toggle-style switch or a checkbox inside a decoratedText widget.
Available for Google Chat apps and Google Workspace add-ons.
Only supported in the decoratedText widget.
Fields
name
string
The name by which the switch widget is identified in a form input event.
For details about working with form inputs, see Receive form data .
value
string
The value entered by a user, returned as part of a form input event.
For details about working with form inputs, see Receive form data .
selected
bool
When true , the switch is selected.
onChangeAction
Action
The action to perform when the switch state is changed, such as what function to run.
controlType
ControlType
How the switch appears in the user interface.
Available for Google Chat apps and Google Workspace add-ons.
ControlType
How the switch appears in the user interface.
Available for Google Chat apps and Google Workspace add-ons.
Enums
SWITCH
A toggle-style switch.
CHECKBOX
Deprecated in favor of CHECK_BOX .
CHECK_BOX
A checkbox.
Divider
This type has no fields.
Displays a divider between widgets as a horizontal line. For an example in Google Chat apps, see Add a horizontal divider between widgets .
Available for Google Chat apps and Google Workspace add-ons.
For example, the following JSON creates a divider:
"divider": {}
EndNavigation
For add-ons in Google Chat , closes a dialog .
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
Fields
action
Action
For add-ons in Google Chat , the action that closes a dialog .
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features. Available for Google Workspace add-ons and unavailable for Google Chat apps.
Action
For add-ons in Google Chat , actions for closing a dialog .
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
Enums
ACTION_UNSPECIFIED
Action unspecified.
CLOSE_DIALOG
Closes a dialog.
CLOSE_DIALOG_AND_EXECUTE
Closes a dialog and refreshes the card that opened the dialog.
EventAction
Represents an actionthat can be performed on an ui element.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
Fields
actionRuleId
string
The unique identifier of the ActionRule.
postEventTriggers[]
Trigger
The list of triggers that will be triggered after the EventAction is executed.
Union field action . The action to perform. action can be only one of the following:
commonWidgetAction
CommonWidgetAction
Common widget action.
CommonWidgetAction
Represents an action that is not specific to a widget.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
Fields
Union field action . The action to perform. action can be only one of the following:
updateVisibilityAction
UpdateVisibilityAction
The action to update the visibility of a widget.
UpdateVisibilityAction
Represents an action that updates the visibility of a widget.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
Fields
visibility
Visibility
The new visibility.
ExpressionData
Represents the data that is used to evaluate an expression.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
Fields
id
string
The unique identifier of the ExpressionData.
expression
string
The uncompiled expression.
conditions[]
Condition
The list of conditions that are determined by the expression evaluation result.
eventActions[]
EventAction
The list of actions that the ExpressionData can be used.
GetAutocompletionResponse
A response to getting autocomplete container, which includes elements necessary for showing auto complete items for text field.
Available for Google Workspace add-ons and unavailable for Google Chat apps. For example:
{
"autoComplete": {
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
Fields
autoComplete
Suggestions
schema
string
This is a no-op schema field that might be present in the markup for syntax checking.
Grid
Displays a grid with a collection of items. Items can only include text or images. For responsive columns, or to include more than text or images, use Columns . For an example in Google Chat apps, see Display a Grid with a collection of items .
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
Fields
title
string
The text that displays in the grid header.
items[]
GridItem
The items to display in the grid.
borderStyle
BorderStyle
The border style to apply to each grid item.
columnCount
int32
The number of columns to display in the grid. A default value is used if this field isn't specified, and that default value is different depending on where the grid is shown (dialog versus companion).
onClick
OnClick
This callback is reused by each individual grid item, but with the item's identifier and index in the items list added to the callback's parameters.
GridItem
Represents an item in a grid layout. Items can contain text, an image, or both text and an image.
Available for Google Chat apps and Google Workspace add-ons.
Fields
id
string
A user-specified identifier for this grid item. This identifier is returned in the parent grid's onClick callback parameters.
image
ImageComponent
The image that displays in the grid item.
title
string
The grid item's title.
subtitle
string
The grid item's subtitle.
layout
GridItemLayout
The layout to use for the grid item.
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
Icon
An icon displayed in a widget on a card. For an example in Google Chat apps, see Add an icon .
Supports built-in and custom icons.
Available for Google Chat apps and Google Workspace add-ons.
Fields
altText
string
Optional. A description of the icon used for accessibility. If unspecified, the default value Button is provided. As a best practice, you should set a helpful description for what the icon displays, and if applicable, what it does. For example, A user's account portrait , or Opens a new browser tab and navigates to the Google Chat developer
documentation at https://developers.google.com/workspace/chat .
If the icon is set in a Button , the altText appears as helper text when the user hovers over the button. However, if the button also sets text , the icon's altText is ignored.
imageType
ImageType
The crop style applied to the image. In some cases, applying a CIRCLE crop causes the image to be drawn larger than a built-in icon.
Union field icons . The icon displayed in the widget on the card. icons can be only one of the following:
knownIcon
string
Display one of the built-in icons provided by Google Workspace.
For example, to display an airplane icon, specify AIRPLANE . For a bus, specify BUS .
For a full list of supported icons, see built-in icons .
iconUrl
string
Display a custom icon hosted at an HTTPS URL.
For example:
"iconUrl":
"https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png"
Supported file types include .png and .jpg .
materialIcon
MaterialIcon
Display one of the Google Material Icons .
For example, to display a checkbox icon , use
"materialIcon": {
"name": "check_box"
}
Available for Google Chat apps and unavailable for Google Workspace add-ons.
Image
An image that is specified by a URL and can have an onClick action. For an example, see Add an image .
Available for Google Chat apps and Google Workspace add-ons.
Fields
imageUrl
string
The HTTPS URL that hosts the image.
For example:
https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png
onClick
OnClick
When a user clicks the image, the click triggers this action.
altText
string
The alternative text of this image that's used for accessibility.
ImageComponent
Represents an image.
Available for Google Chat apps and Google Workspace add-ons.
Fields
imageUri
string
The image URL.
altText
string
The accessibility label for the image.
cropStyle
ImageCropStyle
The crop style to apply to the image.
borderStyle
BorderStyle
The border style to apply to the image.
ImageCropStyle
Represents the crop style applied to an image.
Available for Google Chat apps and Google Workspace add-ons.
For example, here's how to apply a 16:9 aspect ratio:
cropStyle {
"type": "RECTANGLE_CUSTOM",
"aspectRatio": 16/9
}
Fields
type
ImageCropType
The crop type.
aspectRatio
double
The aspect ratio to use if the crop type is RECTANGLE_CUSTOM .
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
Applies a rectangular crop with a custom aspect ratio. Set the custom aspect ratio with aspectRatio .
RECTANGLE_4_3
Applies a rectangular crop with a 4:3 aspect ratio.
Link
The link object for the third-party resource that's returned to the add-on. For more information, see Create third-party resources from the @ menu .
Available for Google Workspace add-ons and unavailable for Google Chat apps.
Fields
url
string
URL of the link to return to the add-on.
title
string
Title of the link to return to the add-on.
LinkPreview
Card action that previews a third-party link by displaying a card and smart chip. To learn more, see Preview links with smart chips .
Available for Google Workspace add-ons and unavailable for Google Chat apps.
For example, the following JSON returns a unique title for the link preview and its smart chip, and a preview card with a header and text description:
{
"action": {
"linkPreview": {
"title": "Smart chip title",
"linkPreviewTitle": "Link preview title",
"previewCard": {
"header": {
"title": "Preview card header",
},
"sections": [
{
"widgets": [
{
"textParagraph": {
"text": "Description of the link."
}
}
]
}
]
}
}
}
}
The example returns the following link preview:
Fields
previewCard
Card
A card that displays information about a link from a third-party service.
title
string
The title that displays in the smart chip for the link preview. If unset, the smart chip displays the header of the previewCard .
linkPreviewTitle
string
The title that displays in the link preview. If unset, the link preview displays the header of the previewCard .
MaterialIcon
A Google Material Icon , which includes over 2500+ options.
For example, to display a checkbox icon with customized weight and grade, write the following:
{
"name": "check_box",
"fill": true,
"weight": 300,
"grade": -25
}
Available for Google Chat apps and unavailable for Google Workspace add-ons.
Fields
name
string
The icon name defined in the Google Material Icon , for example, check_box . Any invalid names are abandoned and replaced with empty string and results in the icon failing to render.
fill
bool
Whether the icon renders as filled. Default value is false.
To preview different icon settings, go to Google Font Icons and adjust the settings under Customize .
weight
int32
The stroke weight of the icon. Choose from {100, 200, 300, 400, 500, 600, 700}. If absent, default value is 400. If any other value is specified, the default value is used.
To preview different icon settings, go to Google Font Icons and adjust the settings under Customize .
grade
int32
Weight and grade affect a symbol’s thickness. Adjustments to grade are more granular than adjustments to weight and have a small impact on the size of the symbol. Choose from {-25, 0, 200}. If absent, default value is 0. If any other value is specified, the default value is used.
To preview different icon settings, go to Google Font Icons and adjust the settings under Customize .
ModifyCard
For add-ons in Google Chat , updates a card based on a user interaction. The array must only contain a single object.
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
Fields
Union field operation . The operation to perform. operation can be only one of the following:
updateWidget
UpdateWidget
For add-ons in Google Chat , updates a widget in a card or dialog.
UpdateWidget
For add-ons in Google Chat , updates a widget in a card or dialog. It is used for providing auto-complete suggestions when user types in an input box. See Suggest multiselect items for more details.
Fields
Union field updated_widget . The updates to a widget. updated_widget can be only one of the following:
selectionInputWidgetSuggestions
SelectionInputWidgetSuggestions
For selectionInput widgets, an array of suggested items in a multiselect menu. When a multiselect menu uses an external data source to populate its items, the widget can dynamically populate suggestions based on what they type into the menu. For more information, see Collect information from Google Chat users .
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
SelectionInputWidgetSuggestions
For a selectionInput widget that uses a multiselect menu, returns selection items from an external dynamic data source.
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
Fields
suggestions[]
SelectionItem
An array of selectable items that appear to a user after they type into a multiselect menu.
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
Navigation
Updates or navigates between cards in a card stack.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
For example:
1) Return a new card (Navigate forward).
navigations : {
pushCard : CARD
}
2) Update the card on top of the stack (in place update).
navigations : {
popCard : true,
}, {
pushCard : CARD
}
3) Go back one step without updating.
navigations : {
popCard : true,
}
4) Go back multiple steps and update that card.
navigations : {
popCard : true,
}, ... {
pushCard : CARD
}
5) Go back multiple steps to a defined CARD_NAME .
navigations : {
popToCardName : CARD_NAME,
}, {
pushCard : CARD
}
6) Go back to the root and update that card.
navigations : {
popToRoot : true
}, {
pushCard : CARD
}
7) Pop to the specified card and pop that one as well.
navigations : {
popToCardName : CARD_NAME
}, {
popCard : true,
}
8) Replace the top card with a new card.
navigations : {
updateCard : CARD
}
Fields
Union field navigate_action .
navigate_action can be only one of the following:
popToRoot
bool
Pops all cards off except the root card.
pop
bool
Pops one card off.
popToCard
string
Pops all cards above the specified card with given card name.
pushCard
Card
Pushes a card onto the card stack.
For dialogs in Google Chat , opens or updates a dialog.
updateCard
Card
Updates the top card with a new card and preserves filled form fields values. For a non-equivalent field, the value is dropped.
For dialogs in Google Chat , opens or updates a dialog.
endNavigation
EndNavigation
For add-ons in Google Chat , closes a dialog .
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
Notification
An action that displays a notification in the host Google Workspace application when a user interacts with a card.
For add-ons in Google Chat , displays a notification when users submit and close a dialog .
Available for Google Workspace add-ons and unavailable for Google Chat apps.
Fields
text
string
Plain text to display for the notification, without HTML tags.
OnClick
Represents how to respond when users click an interactive element on a card, such as a button.
Available for Google Chat apps and Google Workspace add-ons.
Fields
Union field data .
data can be only one of the following:
action
Action
If specified, an action is triggered by this onClick .
openLink
OpenLink
If specified, this onClick triggers an open link action.
openDynamicLinkAction
Action
An add-on triggers this action when the action needs to open a link. This differs from the open_link above in that this needs to talk to server to get the link. Thus some preparation work is required for web client to do before the open link action response comes back.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
card
Card
A new card is pushed to the card stack after clicking if specified.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
overflowMenu
OverflowMenu
If specified, this onClick opens an overflow menu.
OpenLink
Represents an onClick event that opens a hyperlink.
Available for Google Chat apps and Google Workspace add-ons.
Fields
url
string
The URL to open. HTTP URLs are converted to HTTPS.
openAs
OpenAs
How to open a link.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
onClose
OnClose
Whether the client forgets about a link after opening it, or observes it until the window closes.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
OnClose
What the client does when a link opened by an OnClick action is closed.
Implementation depends on client platform capabilities. For example, a web browser might open a link in a pop-up window with an OnClose handler.
If both OnOpen and OnClose handlers are set, and the client platform can't support both values, OnClose takes precedence.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
Enums
NOTHING
Default value. The card doesn't reload; nothing happens.
RELOAD
Reloads the card after the child window closes.
If used in conjunction with OpenAs.OVERLAY , the child window acts as a modal dialog and the parent card is blocked until the child window closes.
OpenAs
When an OnClick action opens a link, then the client can either open it as a full-size window (if that's the frame used by the client), or an overlay (such as a pop-up). The implementation depends on the client platform capabilities, and the value selected might be ignored if the client doesn't support it. FULL_SIZE is supported by all clients.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
Enums
FULL_SIZE
The link opens as a full-size window (if that's the frame used by the client).
OVERLAY
The link opens as an overlay, such as a pop-up.
OverflowMenu
A widget that presents a pop-up menu with one or more actions that users can invoke. For example, showing non-primary actions in a card. You can use this widget when actions don't fit in the available space. To use, specify this widget in the OnClick action of widgets that support it. For example, in a Button .
Available for Google Chat apps and Google Workspace add-ons.
Fields
items[]
OverflowMenuItem
Required. The list of menu options.
OverflowMenuItem
An option that users can invoke in an overflow menu.
Available for Google Chat apps and Google Workspace add-ons.
Fields
startIcon
Icon
The icon displayed in front of the text.
text
string
Required. The text that identifies or describes the item to users.
onClick
OnClick
Required. The action invoked when a menu option is selected. This OnClick cannot contain an OverflowMenu , any specified OverflowMenu is dropped and the menu item disabled.
disabled
bool
Whether the menu option is disabled. Defaults to false.
RenderActions
A set of render instructions that tells a host application how to render a card or perform an action in response to a user interaction.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
Fields
action
Action
The action that add-ons can use to update the UI.
Add-ons in Google Chat .
hostAppAction
HostAppActionMarkup
Actions handled by individual host apps.
schema
string
This is a no-op schema field that might be present in the markup for syntax checking.
Action
The actions that add-ons can use in cards or the host application.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
Fields
navigations[]
Navigation
Pushes, pops, or updates a card.
Add-ons in Google Chat .
link
OpenLink
Opens the target link in a new tab or pop-up window.
notification
Notification
Displays a notification in the host Google Workspace application when a user interacts with a card.
For add-ons in Google Chat , displays a notification when users submit and close a dialog .
linkPreview
LinkPreview
Available in Google Docs, Google Sheets, and Google Slides. Previews links with smart chips and card. For details, see Preview links with smart chips .
links[]
Link
Available in Google Docs. Returns a link from a third-party resource and converts it to a smart chip in the host application. Formatted as an array of objects with one item.
For more information, see Create third-party resources from the @ menu .
modifyOperations[]
ModifyCard
For add-ons in Google Chat , updates a card based on a user interaction. The array must only contain a single object.
RequestingGoogleScopes
When unbundled oAuth consent is enabled, the HTTP add-on might need to request more Google oAuth scopes. The add-on should return this object to render the authorization card. See Manage granular
permissions .
Fields
scopes[]
string
The scopes that the add-on is requesting.
allScopes
bool
If true, the add-on is requesting all scopes from the manifest. The scopes field should be empty in this case.
SelectionInput
A widget that creates one or more UI items that users can select. Supports form submission validation for dropdown and multiselect menus only. When Action.all_widgets_are_required is set to true or this widget is specified in Action.required_widgets , the submission action is blocked unless a value is selected. For example, a dropdown menu or checkboxes. You can use this widget to collect data that can be predicted or enumerated. For an example in Google Chat apps, see Add selectable UI elements .
Chat apps can process the value of items that users select or input. For details about working with form inputs, see Receive form data .
To collect undefined or abstract data from users, use the TextInput widget.
Available for Google Chat apps and Google Workspace add-ons.
Fields
name
string
Required. The name that identifies the selection input in a form input event.
For details about working with form inputs, see Receive form data .
label
string
The text that appears above the selection input field in the user interface.
Specify text that helps the user enter the information your app needs. For example, if users are selecting the urgency of a work ticket from a drop-down menu, the label might be "Urgency" or "Select urgency".
type
SelectionType
The type of items that are displayed to users in a SelectionInput widget. Selection types support different types of interactions. For example, users can select one or more checkboxes, but they can only select one value from a dropdown menu.
items[]
SelectionItem
An array of selectable items. For example, an array of radio buttons or checkboxes. Supports up to 100 items.
onChangeAction
Action
If specified, the form is submitted when the selection changes. If not specified, you must specify a separate button that submits the form.
For details about working with form inputs, see Receive form data .
multiSelectMinQueryLength
int32
For multiselect menus, the number of text characters that a user inputs before the menu returns suggested selection items.
If unset, the multiselect menu uses the following default values:
If the menu uses a static array of SelectionInput items, defaults to 0 characters and immediately populates items from the array.
If the menu uses a dynamic data source ( multi_select_data_source ), defaults to 3 characters before querying the data source to return suggested items.
dataSourceConfigs[]
DataSourceConfig
Optional. The data source configs for the selection control. This field provides more fine-grained control over the data source.
If specified, the multi_select_max_selected_items field, multi_select_min_query_length field, external_data_source field and platform_data_source field are ignored.
Available for Google Workspace add-ons that extend Google Workspace Studio.
Available for the Dropdown
widget in Google Chat apps. For the Dropdown widget in Google Chat apps, only one DataSourceConfig is supported. If multiple DataSourceConfig s are set, only the first one is used.
multiSelectMaxSelectedItems
int32
For multiselect menus, the maximum number of items that a user can select. Minimum value is 1 item. If unspecified, defaults to 3 items.
hintText
string
Optional. Text that appears below the selection input field meant to assist users by prompting them to enter a certain value. This text is always visible.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
Union field multi_select_data_source . For a multiselect menu, a data source that dynamically populates selection items.
Available for Google Chat apps and unavailable for Google Workspace add-ons. multi_select_data_source can be only one of the following:
externalDataSource
Action
An external data source, such as a relational database.
platformDataSource
PlatformDataSource
A data source from Google Workspace.
PlatformDataSource
For a SelectionInput widget that uses a multiselect menu, a data source from Google Workspace. Used to populate items in a multiselect menu.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
Fields
Union field data_source . The data source. data_source can be only one of the following:
commonDataSource
CommonDataSource
A data source shared by all Google Workspace applications, such as users in a Google Workspace organization.
hostAppDataSource
HostAppDataSourceMarkup
A data source that's unique to a Google Workspace host application, such spaces in Google Chat.
This field supports the Google API Client Libraries but isn't available in the Cloud Client Libraries. To learn more, see Install the client libraries .
CommonDataSource
A data source shared by all Google Workspace applications .
Available for Google Chat apps and unavailable for Google Workspace add-ons.
Enums
UNKNOWN
Default value. Don't use.
USER
Google Workspace users. The user can only view and select users from their Google Workspace organization.
SelectionItem
An item that users can select in a selection input, such as a checkbox or switch. Supports up to 100 items.
Available for Google Chat apps and Google Workspace add-ons.
Fields
text
string
The text that identifies or describes the item to users.
value
string
The value associated with this item. The client should use this as a form input value.
For details about working with form inputs, see Receive form data .
selected
bool
Whether the item is selected by default. If the selection input only accepts one value (such as for radio buttons or a dropdown menu), only set this field for one item.
bottomText
string
For multiselect menus, a text description or label that's displayed below the item's text field.
Union field startIcon . For multiselect menus, the URL for the icon displayed next to the item's text field. Supports PNG and JPEG files. Must be an HTTPS URL. For example, https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png . startIcon can be only one of the following:
startIconUri
string
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
For examples of how to implement dropdown menus for Chat apps, see Add a dropdown menu and Dynamically populate drop-down menus .
Available for Google Chat apps and Google Workspace add-ons.
MULTI_SELECT
A menu with a text box. Users can type and select one or more items. For Google Workspace add-ons, you must populate items using a static array of SelectionItem objects.
For Google Chat apps, you can also populate items using a dynamic data source and autosuggest items as users type in the menu. For example, users can start typing the name of a Google Chat space and the widget autosuggests the space. To dynamically populate items for a multiselect menu, use one of the following types of data sources:
Google Workspace data: Items are populated using data from Google Workspace, such as Google Workspace users or Google Chat spaces.
External data: Items are populated from an external data source outside of Google Workspace.
For examples of how to implement multiselect menus for Chat apps, see Add a multiselect menu .
Available for Google Chat apps and Google Workspace add-ons.
SubmitFormResponse
A response to a form submit other than getting an autocomplete container, which contains the actions the card should perform and/or the add-on host app should perform, and whether the card's state has changed.
Available for Google Workspace add-ons and unavailable for Google Chat apps. For example:
{
"renderActions": {
"action": {
"notification": {
"text": "Email address is added: salam.heba@example.com"
}
},
"hostAppAction": {
"gmailAction": {
"openCreatedDraftAction": {
"draftId": "msg-a:r-79766936926021702",
"threadServerPermId": "thread-f:15700999851086004"
}
}
}
}
}
Fields
renderActions
RenderActions
A set of render instructions that tells the card to perform an action and/or tells the add-on host app to perform an app-specific action.
stateChanged
bool
Whether the state of the cards has changed and data in existing cards is stale.
schema
string
This is a no-op schema field that may be present in the markup for syntax checking.
Suggestions
Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed.
For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing Jav , the list of suggestions filters to show Java and JavaScript .
Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter javascript and others java script . Suggesting JavaScript can standardize how users interact with your app.
When specified, TextInput.type is always SINGLE_LINE , even if it's set to MULTIPLE_LINE .
Available for Google Chat apps and Google Workspace add-ons.
Fields
items[]
SuggestionItem
A list of suggestions used for autocomplete recommendations in text input fields.
SuggestionItem
One suggested value that users can enter in a text input field.
Available for Google Chat apps and Google Workspace add-ons.
Fields
Union field content .
content can be only one of the following:
text
string
The value of a suggested input to a text input field. This is equivalent to what users enter themselves.
TextInput
A field in which users can enter text. Supports suggestions and on-change actions. Supports form submission validation. When Action.all_widgets_are_required is set to true or this widget is specified in Action.required_widgets , the submission action is blocked unless a value is entered. For an example in Google Chat apps, see Add a field in which a user can enter text .
Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see Receive form data .
When you need to collect undefined or abstract data from users, use a text input. To collect defined or enumerated data from users, use the SelectionInput widget.
Available for Google Chat apps and Google Workspace add-ons.
Fields
name
string
The name by which the text input is identified in a form input event.
For details about working with form inputs, see Receive form data .
label
string
The text that appears above the text input field in the user interface.
Specify text that helps the user enter the information your app needs. For example, if you are asking someone's name, but specifically need their surname, write surname instead of name .
Required if hintText is unspecified. Otherwise, optional.
hintText
string
Text that appears below the text input field meant to assist users by prompting them to enter a certain value. This text is always visible.
Required if label is unspecified. Otherwise, optional.
value
string
The value entered by a user, returned as part of a form input event.
For details about working with form inputs, see Receive form data .
type
Type
How a text input field appears in the user interface. For example, whether the field is single or multi-line.
onChangeAction
Action
What to do when a change occurs in the text input field. For example, a user adding to the field or deleting text.
Examples of actions to take include running a custom function or opening a dialog in Google Chat.
initialSuggestions
Suggestions
Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed.
For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing Jav , the list of suggestions filters to show just Java and JavaScript .
Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter javascript and others java script . Suggesting JavaScript can standardize how users interact with your app.
When specified, TextInput.type is always SINGLE_LINE , even if it's set to MULTIPLE_LINE .
Available for Google Chat apps and Google Workspace add-ons.
autoCompleteAction
Action
Optional. Specify what action to take when the text input field provides suggestions to users who interact with it.
If unspecified, the suggestions are set by initialSuggestions and are processed by the client.
If specified, the app takes the action specified here, such as running a custom function.
Available for Google Workspace add-ons and unavailable for Google Chat apps.
validation
Validation
Specify the input format validation necessary for this text field.
Available for Google Chat apps and Google Workspace add-ons.
placeholderText
string
Text that appears in the text input field when the field is empty. Use this text to prompt users to enter a value. For example, Enter a
number from 0 to 100 .
Available for Google Chat apps and unavailable for Google Workspace add-ons.
Union field data_source .
data_source can be only one of the following:
hostAppDataSource
HostAppDataSourceMarkup
A data source that's unique to a Google Workspace host application, such as Gmail emails, Google Calendar events, or Google Chat messages.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
Type
How a text input field appears in the user interface. For example, whether it's a single line input field, or a multi-line input. If initialSuggestions is specified, type is always SINGLE_LINE , even if it's set to MULTIPLE_LINE .
Available for Google Chat apps and Google Workspace add-ons.
Enums
SINGLE_LINE
The text input field has a fixed height of one line.
MULTIPLE_LINE
The text input field has a fixed height of multiple lines.
TextParagraph
A paragraph of text that supports formatting. For an example in Google Chat apps, see Add a paragraph of formatted text . For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace add-ons .
Available for Google Chat apps and Google Workspace add-ons.
Fields
text
string
The text that's shown in the widget.
maxLines
int32
The maximum number of lines of text that are displayed in the widget. If the text exceeds the specified maximum number of lines, the excess content is concealed behind a show more button. If the text is equal or shorter than the specified maximum number of lines, a show more button isn't displayed.
The default value is 0, in which case all context is displayed. Negative values are ignored.
textSyntax
TextSyntax
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
Trigger
Represents a trigger.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
Fields
actionRuleId
string
The unique identifier of the ActionRule.
Validation
Represents the necessary data for validating the widget it's attached to.
Available for Google Chat apps and Google Workspace add-ons.
Fields
characterLimit
int32
Specify the character limit for text input widgets. Note that this is only used for text input and is ignored for other widgets.
Available for Google Chat apps and Google Workspace add-ons.
inputType
InputType
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
Widget
Each card is made up of widgets.
A widget is a composite object that can represent one of text, images, buttons, and other object types.
Fields
horizontalAlignment
HorizontalAlignment
Specifies whether widgets align to the left, right, or center of a column.
id
string
A unique ID assigned to the widget that's used to identify the widget to be mutated. The ID has a character limit of 64 characters and should be in the format of [a-zA-Z0-9-]+ .
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
visibility
Visibility
Specifies whether the widget is visible or hidden. The default value is VISIBLE .
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
eventActions[]
EventAction
Specifies the event actions that can be performed on the widget.
Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps.
Union field data . A widget can only have one of the following items. You can use multiple widget fields to display more items. data can be only one of the following:
textParagraph
TextParagraph
Displays a text paragraph. Supports simple HTML formatted text. For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace add-ons .
For example, the following JSON creates a bolded text:
"textParagraph": {
"text": " <b>bold text</b>"
}
image
Image
Displays an image.
For example, the following JSON creates an image with alternative text:
"image": {
"imageUrl":
"https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png",
"altText": "Chat app avatar"
}
decoratedText
DecoratedText
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
ButtonList
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
TextInput
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
SelectionInput
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
DateTimePicker
Displays a widget that lets users input a date, time, or date and time.
For example, the following JSON creates a date time picker to schedule an appointment:
"dateTimePicker": {
"name": "appointment_time",
"label": "Book your appointment at:",
"type": "DATE_AND_TIME",
"valueMsEpoch": 796435200000
}
divider
Divider
Displays a horizontal line divider between widgets.
For example, the following JSON creates a divider:
"divider": {
}
grid
Grid
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
Columns
Displays up to 2 columns.
To include more than 2 columns, or to use rows, use the Grid widget.
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
Carousel
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
ChipList
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
ImageType
The shape used to crop the image.
Available for Google Chat apps and Google Workspace add-ons.
Enums
SQUARE
Default value. Applies a square mask to the image. For example, a 4x3 image becomes 3x3.
CIRCLE
Applies a circular mask to the image. For example, a 4x3 image becomes a circle with a diameter of 3.
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],["This content outlines UI components for Google Chat apps and Workspace add-ons, structured within cards. Key actions involve defining `Action` behaviors upon form submission, including custom function calls, parameter passing, loading indicators, and interactivity. `Button` elements trigger actions on click. `SelectionInput` creates choices via dropdowns, checkboxes, or other selection methods. `DateTimePicker` allows date/time selection. Layouts are managed via `Columns`, `Grid`, `Carousel` and `ChipList`. Other actions include link opening, card updates, and navigation. `TextInput` enables user input, and `Validation` ensures data integrity.\n"]]
