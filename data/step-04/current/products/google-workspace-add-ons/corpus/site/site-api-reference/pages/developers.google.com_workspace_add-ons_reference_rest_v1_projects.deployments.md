---
title: "REST Resource: projects.deployments \_|\_ Google Workspace add-ons \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments
  title: "REST Resource: projects.deployments \_|\_ Google Workspace add-ons \_|\_\
    \ Google for Developers"
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
REST Resource: projects.deployments
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Workspace Add-ons use deployments to manage and run their functionality, including a core run function and HTTP request options.
Add-on deployments can be authenticated using system or user ID tokens, or no authentication at all, depending on the authorizationHeader setting.
Developers can manage deployments through methods like create, delete, get, install, and uninstall to control the add-on's lifecycle.
The HttpOptions field allows customization of HTTP requests made by the add-on, including setting the authorizationHeader .
Developers can choose from various deployment methods to create, update, remove, and check the status of their add-ons.
Resource: Deployment
JSON representation
AddOns
JSON representation
CommonAddOnManifest
JSON representation
LayoutProperties
JSON representation
AddOnWidgetSet
JSON representation
WidgetType
HomepageExtensionPoint
JSON representation
UniversalActionExtensionPoint
JSON representation
GmailAddOnManifest
JSON representation
ContextualTrigger
JSON representation
UnconditionalTrigger
UniversalAction
JSON representation
ComposeTrigger
JSON representation
MenuItemExtensionPoint
JSON representation
DraftAccess
DriveAddOnManifest
JSON representation
DriveExtensionPoint
JSON representation
CalendarAddOnManifest
JSON representation
ConferenceSolution
JSON representation
CalendarExtensionPoint
JSON representation
EventAccess
DocsAddOnManifest
JSON representation
DocsExtensionPoint
JSON representation
LinkPreviewExtensionPoint
JSON representation
UriPattern
JSON representation
CreateActionExtensionPoint
JSON representation
MeetAddOnManifest
JSON representation
Web
JSON representation
State
DisplayFlow
SheetsAddOnManifest
JSON representation
SheetsExtensionPoint
JSON representation
SlidesAddOnManifest
JSON representation
SlidesExtensionPoint
JSON representation
HttpOptions
JSON representation
HttpAuthorizationHeader
GranularOauthPermissionSupport
Methods
Resource: Deployment
A Google Workspace add-on deployment
JSON representation
{
"name" : string ,
"oauthScopes" : [
string
] ,
"addOns" : {
object ( AddOns )
} ,
"etag" : string
}
Fields
name
string
The deployment resource name. Example: projects/123/deployments/my_deployment .
oauthScopes[]
string
The list of Google OAuth scopes for which to request consent from the end user before executing an add-on endpoint.
addOns
object ( AddOns )
The Google Workspace add-on configuration.
etag
string
This value is computed by the server based on the version of the deployment in storage, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
AddOns
A Google Workspace add-on configuration.
JSON representation
{
"common" : {
object ( CommonAddOnManifest )
} ,
"gmail" : {
object ( GmailAddOnManifest )
} ,
"drive" : {
object ( DriveAddOnManifest )
} ,
"calendar" : {
object ( CalendarAddOnManifest )
} ,
"docs" : {
object ( DocsAddOnManifest )
} ,
"meet" : {
object ( MeetAddOnManifest )
} ,
"sheets" : {
object ( SheetsAddOnManifest )
} ,
"slides" : {
object ( SlidesAddOnManifest )
} ,
"httpOptions" : {
object ( HttpOptions )
}
}
Fields
common
object ( CommonAddOnManifest )
Configuration that is common across all Google Workspace add-ons.
gmail
object ( GmailAddOnManifest )
Gmail add-on configuration.
drive
object ( DriveAddOnManifest )
Drive add-on configuration.
calendar
object ( CalendarAddOnManifest )
Calendar add-on configuration.
docs
object ( DocsAddOnManifest )
Docs add-on configuration.
meet
object ( MeetAddOnManifest )
Meet add-on configuration.
sheets
object ( SheetsAddOnManifest )
Sheets add-on configuration.
slides
object ( SlidesAddOnManifest )
Slides add-on configuration.
httpOptions
object ( HttpOptions )
Options for sending requests to add-on HTTP endpoints
CommonAddOnManifest
Add-on configuration that is shared across all add-on host applications.
JSON representation
{
"name" : string ,
"logoUrl" : string ,
"layoutProperties" : {
object ( LayoutProperties )
} ,
"addOnWidgetSet" : {
object ( AddOnWidgetSet )
} ,
"useLocaleFromApp" : boolean ,
"homepageTrigger" : {
object ( HomepageExtensionPoint )
} ,
"universalActions" : [
{
object ( UniversalActionExtensionPoint )
}
] ,
"openLinkUrlPrefixes" : array
}
Fields
name
string
Required. The display name of the add-on.
logoUrl
string
Required. The URL for the logo image shown in the add-on toolbar.
layoutProperties
object ( LayoutProperties )
Common layout properties for the add-on cards.
addOnWidgetSet
object ( AddOnWidgetSet )
The widgets used in the add-on. If this field is not specified, the default set is used.
useLocaleFromApp
boolean
Whether to pass locale information from host app.
homepageTrigger
object ( HomepageExtensionPoint )
Defines an endpoint that will be executed in any context, in any host. Any cards generated by this function will always be available to the user, but might be eclipsed by contextual content when this add-on declares more targeted triggers.
universalActions[]
object ( UniversalActionExtensionPoint )
Defines a list of extension points in the universal action menu which serves as a settings menu for the add-on. The extension point can be a link URL to open or an endpoint to execute as a form submission.
openLinkUrlPrefixes
array ( ListValue format)
An OpenLink action can only use a URL with an HTTPS , MAILTO or TEL scheme. For HTTPS links, the URL must also match one of the prefixes specified in the allowlist. If the prefix omits the scheme, HTTPS is assumed. HTTP links are automatically rewritten to HTTPS links.
LayoutProperties
Card layout properties shared across all add-on host applications.
JSON representation
{
"primaryColor" : string ,
"secondaryColor" : string ,
"useNewMaterialDesign" : boolean
}
Fields
primaryColor
string
The primary color of the add-on. It sets the color of the toolbar. If no primary color is set, the default value provided by the framework is used.
secondaryColor
string
The secondary color of the add-on. It sets the color of buttons. If the primary color is set but no secondary color is set, the secondary color is the same as the primary color. If neither primary color nor secondary color is set, the default value provided by the framework is used.
useNewMaterialDesign (deprecated)
boolean
This item is deprecated!
Enables material design for cards.
AddOnWidgetSet
The widget subset used by an add-on.
JSON representation
{
"usedWidgets" : [
enum ( WidgetType )
]
}
Fields
usedWidgets[]
enum ( WidgetType )
The list of widgets used in an add-on.
WidgetType
The widget type. WIDGET_TYPE_UNSPECIFIED is the basic widget set.
Enums
WIDGET_TYPE_UNSPECIFIED
The default widget set.
DATE_PICKER
The date picker.
STYLED_BUTTONS
Styled buttons include filled buttons and deactivated buttons.
PERSISTENT_FORMS
Persistent forms allow persisting form values during actions.
FIXED_FOOTER
Fixed footer in a card.
UPDATE_SUBJECT_AND_RECIPIENTS
Update the subject and recipients of a draft.
GRID_WIDGET
The grid widget.
ADDON_COMPOSE_UI_ACTION
A Gmail add-on action that applies to the add-on compose UI.
HomepageExtensionPoint
Common format for declaring an add-on's homepage view.
JSON representation
{
"runFunction" : string ,
"enabled" : boolean
}
Fields
runFunction
string
Required. The endpoint to execute when this extension point is activated.
enabled
boolean
Optional. If set to false , deactivates the homepage view in this context.
Defaults to true if unset.
If an add-on's custom homepage view is disabled, a generic overview card is provided for users instead.
UniversalActionExtensionPoint
Format for declaring a universal action menu item extension point.
JSON representation
{
"label" : string ,
"openLink" : string ,
"runFunction" : string
}
Fields
label
string
Required. User-visible text that describes the action taken by activating this extension point, for example, "Add a new contact."
Union field action_type . Required. The action type supported on a universal action menu item. It can either be a link to open or an endpoint to execute. action_type can be only one of the following:
openLink
string
URL to be opened by the UniversalAction.
runFunction
string
Endpoint to be run by the UniversalAction.
GmailAddOnManifest
Properties customizing the appearance and execution of a Gmail add-on.
JSON representation
{
"homepageTrigger" : {
object ( HomepageExtensionPoint )
} ,
"contextualTriggers" : [
{
object ( ContextualTrigger )
}
] ,
"universalActions" : [
{
object ( UniversalAction )
}
] ,
"composeTrigger" : {
object ( ComposeTrigger )
} ,
"authorizationCheckFunction" : string
}
Fields
homepageTrigger
object ( HomepageExtensionPoint )
Defines an endpoint that will be executed in contexts that don't match a declared contextual trigger. Any cards generated by this function will always be available to the user, but may be eclipsed by contextual content when this add-on declares more targeted triggers.
If present, this overrides the configuration from addons.common.homepageTrigger .
contextualTriggers[]
object ( ContextualTrigger )
Defines the set of conditions that trigger the add-on.
universalActions[]
object ( UniversalAction )
Defines a set of universal actions for the add-on. The user triggers universal actions from the add-on toolbar menu.
composeTrigger
object ( ComposeTrigger )
Defines the compose time trigger for a compose time add-on. This is the trigger that causes an add-on to take action when the user is composing an email. All compose time add-ons must have the gmail.addons.current.action.compose scope even though it might not edit the draft.
authorizationCheckFunction
string
The name of an endpoint that verifies that the add-on has all the required third-party authorizations, by probing the third-party APIs. If the probe fails, the function should throw an exception to initiate the authorization flow. This function is called before each invocation of the add-on in order to ensure a smooth user experience.
ContextualTrigger
Defines a trigger that fires when the open email meets a specific criteria. When the trigger fires, it executes a specific endpoint, usually in order to create new cards and update the UI.
JSON representation
{
"onTriggerFunction" : string ,
"unconditional" : {
object ( UnconditionalTrigger )
}
}
Fields
onTriggerFunction
string
Required. The name of the endpoint to call when a message matches the trigger.
Union field trigger . The type of trigger determines the conditions Gmail uses to show the add-on. trigger can be only one of the following:
unconditional
object ( UnconditionalTrigger )
Unconditional triggers are executed when any mail message is opened.
UnconditionalTrigger
This type has no fields.
A trigger that fires when any email message is opened.
UniversalAction
An action that is always available in the add-on toolbar menu regardless of message context.
JSON representation
{
"text" : string ,
"openLink" : string ,
"runFunction" : string
}
Fields
text
string
Required. User-visible text describing the action, for example, "Add a new contact."
Union field action_type . The type of the action determines the behavior of Gmail when the user invokes the action. action_type can be only one of the following:
openLink
string
A link that is opened by Gmail when the user triggers the action.
runFunction
string
An endpoint that is called when the user triggers the action. See the universal actions guide for details.
ComposeTrigger
A trigger that activates when user is composing an email.
JSON representation
{
"actions" : [
{
object ( MenuItemExtensionPoint )
}
] ,
"draftAccess" : enum ( DraftAccess )
}
Fields
actions[]
object ( MenuItemExtensionPoint )
Defines the set of actions for a compose time add-on. These are actions that users can trigger on a compose time add-on.
draftAccess
enum ( DraftAccess )
Defines the level of data access when a compose time add-on is triggered.
MenuItemExtensionPoint
Common format for declaring a menu item or button that appears within a host app.
JSON representation
{
"runFunction" : string ,
"label" : string ,
"logoUrl" : string
}
Fields
runFunction
string
Required. The endpoint to execute when this extension point is activated.
label
string
Required. User-visible text that describes the action taken by activating this extension point. For example, "Insert invoice."
logoUrl
string
The URL for the logo image shown in the add-on toolbar.
If not set, defaults to the add-on's primary logo URL.
DraftAccess
An enum that defines the level of data access the compose trigger requires.
Enums
UNSPECIFIED
Default value when nothing is set for draftaccess.
NONE
The compose trigger can't access any data of the draft when a compose add-on is triggered.
METADATA
Gives the compose trigger the permission to access the metadata of the draft when a compose add-on is triggered. This includes the audience list, such as the To and Cc list of a draft message.
DriveAddOnManifest
Properties customizing the appearance and execution of a Drive add-on.
JSON representation
{
"homepageTrigger" : {
object ( HomepageExtensionPoint )
} ,
"onItemsSelectedTrigger" : {
object ( DriveExtensionPoint )
}
}
Fields
homepageTrigger
object ( HomepageExtensionPoint )
If present, this overrides the configuration from addons.common.homepageTrigger .
onItemsSelectedTrigger
object ( DriveExtensionPoint )
Corresponds to behavior that executes when items are selected in the relevant Drive view, such as the My Drive Doclist.
DriveExtensionPoint
Common format for declaring a Drive add-on's triggers.
JSON representation
{
"runFunction" : string
}
Fields
runFunction
string
Required. The endpoint to execute when the extension point is activated.
CalendarAddOnManifest
Properties customizing the appearance and execution of a Calendar add-on.
JSON representation
{
"homepageTrigger" : {
object ( HomepageExtensionPoint )
} ,
"conferenceSolution" : [
{
object ( ConferenceSolution )
}
] ,
"createSettingsUrlFunction" : string ,
"eventOpenTrigger" : {
object ( CalendarExtensionPoint )
} ,
"eventUpdateTrigger" : {
object ( CalendarExtensionPoint )
} ,
"calendarNotificationTrigger" : {
object ( CalendarExtensionPoint )
} ,
"eventAttachmentTrigger" : {
object ( MenuItemExtensionPoint )
} ,
"currentEventAccess" : enum ( EventAccess )
}
Fields
homepageTrigger
object ( HomepageExtensionPoint )
Optional. Defines an endpoint that is executed in contexts that don't match a declared contextual trigger. Any cards generated by this function will always be available to the user, but might be eclipsed by contextual content when this add-on declares more targeted triggers.
If present, this overrides the configuration from addons.common.homepageTrigger .
conferenceSolution[]
object ( ConferenceSolution )
Optional. Defines conference solutions provided by this add-on.
createSettingsUrlFunction
string
An endpoint to execute that creates a URL to the add-on's settings page.
eventOpenTrigger
object ( CalendarExtensionPoint )
An endpoint that triggers when an event is opened to be viewed or edited.
eventUpdateTrigger
object ( CalendarExtensionPoint )
An endpoint that triggers when the open event is updated.
calendarNotificationTrigger
object ( CalendarExtensionPoint )
Optional. Triggers when an event is created or updated for a calendar that the user is subscribed to. Applies only to triggers created by HTTP
endpoints using CalendarSubscriptionActionMarkup . Not applicable to Apps Script add-ons and Apps Script installable
triggers .
eventAttachmentTrigger
object ( MenuItemExtensionPoint )
A configuration for a contextual trigger that fires when the user clicks on the add-on attachment provider in the Calendar dropdown menu.
currentEventAccess
enum ( EventAccess )
Defines the level of data access when an event add-on is triggered.
ConferenceSolution
Defines conference-related values.
JSON representation
{
"onCreateFunction" : string ,
"id" : string ,
"name" : string ,
"logoUrl" : string
}
Fields
onCreateFunction
string
Required. The endpoint to call when conference data should be created.
id
string
Required. IDs should be uniquely assigned across conference solutions within one add-on, otherwise the wrong conference solution might be used when the add-on is triggered. While you can change the display name of an add-on, the ID shouldn’t be changed.
name
string
Required. The display name of the conference solution.
logoUrl
string
Required. The URL for the logo image of the conference solution.
CalendarExtensionPoint
Common format for declaring a calendar add-on's triggers.
JSON representation
{
"runFunction" : string
}
Fields
runFunction
string
Required. The endpoint to execute when this extension point is activated.
EventAccess
An enum that defines the level of data access event triggers require.
Enums
UNSPECIFIED
Default value when nothing is set for eventAccess.
METADATA
Gives event triggers the permission to access the metadata of events, such as event ID and calendar ID.
READ
Gives event triggers access to all provided event fields including the metadata, attendees, and conference data.
WRITE
Gives event triggers access to the metadata of events and the ability to perform all actions, including adding attendees and setting conference data.
READ_WRITE
Gives event triggers access to all provided event fields including the metadata, attendees, and conference data and the ability to perform all actions.
DocsAddOnManifest
Properties customizing the appearance and execution of a Google Docs add-on.
JSON representation
{
"homepageTrigger" : {
object ( HomepageExtensionPoint )
} ,
"onFileScopeGrantedTrigger" : {
object ( DocsExtensionPoint )
} ,
"linkPreviewTriggers" : [
{
object ( LinkPreviewExtensionPoint )
}
] ,
"createActionTriggers" : [
{
object ( CreateActionExtensionPoint )
}
]
}
Fields
homepageTrigger
object ( HomepageExtensionPoint )
If present, this overrides the configuration from addons.common.homepageTrigger .
onFileScopeGrantedTrigger
object ( DocsExtensionPoint )
Endpoint to execute when file scope authorization is granted for this document/user pair.
linkPreviewTriggers[]
object ( LinkPreviewExtensionPoint )
A list of extension points for previewing links in a Google Docs document. For details, see Preview links with smart chips .
createActionTriggers[]
object ( CreateActionExtensionPoint )
A list of extension points for creating third-party resources from within Google Workspace applications. For more information, see Create third-party resources from the @ menu .
DocsExtensionPoint
Common format for declaring a Docs add-on's triggers.
JSON representation
{
"runFunction" : string
}
Fields
runFunction
string
Required. The endpoint to execute when this extension point is activated.
LinkPreviewExtensionPoint
The configuration for a trigger that fires when a user types or pastes a link from a third-party or non-Google service into a Google Docs, Sheets, or Slides file.
JSON representation
{
"labelText" : string ,
"localizedLabelText" : {
string : string ,
...
} ,
"patterns" : [
{
object ( UriPattern )
}
] ,
"runFunction" : string ,
"logoUrl" : string
}
Fields
labelText
string
Required. The text for an example smart chip that prompts users to preview the link, such as Example: Support case . This text is static and displays before users execute the add-on.
localizedLabelText
map (key: string, value: string)
Optional. A map of labeltext to localize into other languages. Format the language in ISO 639 and the country/region in ISO 3166 , separated by a hyphen - . For example, en-US .
If a user's locale is present in the map's keys, the user sees the localized version of the labeltext .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
patterns[]
object ( UriPattern )
Required. An array of URL patterns that trigger the add-on to preview links.
runFunction
string
Required. Endpoint to execute when a link preview is triggered.
logoUrl
string
Optional. The icon that displays in the smart chip and preview card. If omitted, the add-on uses its toolbar icon, logourl .
UriPattern
The configuration for each URL pattern that triggers a link preview.
JSON representation
{
"hostPattern" : string ,
"pathPrefix" : string
}
Fields
hostPattern
string
Required for each URL pattern to preview. The domain of the URL pattern. The add-on previews links that contain this domain in the URL. To preview links for a specific subdomain, like subdomain.example.com , include the subdomain. To preview links for the entire domain, specify a wildcard character with an asterisk ( * ) as the subdomain.
For example, *.example.com matches subdomain.example.com and another.subdomain.example.com .
pathPrefix
string
Optional. The path that appends the domain of the hostpattern .
For example, if the URL host pattern is support.example.com , to match URLs for cases hosted at support.example.com/cases/ , enter cases .
To match all URLs in the host pattern domain, leave pathprefix empty.
CreateActionExtensionPoint
The configuration for a trigger that fires when a user invokes the resource creation workflow in a Google Workspace application. For more information, see Create third-party resources from the @ menu .
JSON representation
{
"id" : string ,
"labelText" : string ,
"localizedLabelText" : {
string : string ,
...
} ,
"runFunction" : string ,
"logoUrl" : string
}
Fields
id
string
Required. The unique ID to differentiate this extension point. The ID can have up to 64 characters and should be in the format of [a-zA-Z0-9-]+ .
labelText
string
Required. The text that displays alongside an icon for the resource creation entry point, such as Create support case . This text is static and displays before users execute the add-on.
localizedLabelText
map (key: string, value: string)
Optional. A map of labeltext to localize into other languages. Format the language in ISO 639 and the country/region in ISO 3166 , separated by a hyphen - . For example, en-US .
If a user's locale is present in the map's keys, the user sees the localized version of the labeltext .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
runFunction
string
Required. Endpoint to execute when a resource creation workflow is triggered to create a link.
logoUrl
string
Optional. The icon that displays for the resource creation entry point. If omitted, the menu uses your add-on's toolbar icon, logourl .
MeetAddOnManifest
Meet add-on manifest.
JSON representation
{
"homepageTrigger" : {
object ( HomepageExtensionPoint )
} ,
"web" : {
object ( Web )
} ,
"supportsCollaboration" : boolean ,
"termsUri" : string
}
Fields
homepageTrigger
object ( HomepageExtensionPoint )
If present, this overrides the configuration from addons.common.homepageTrigger .
web
object ( Web )
Details for addons that enhance the Meet web client.
supportsCollaboration
boolean
Whether the addon supports collaboration or inviting others into the addon experience.
termsUri
string
A link to the terms of service for the add-on, if any should be shown.
Web
Details for addons that enhance the Meet web client.
JSON representation
{
"sidePanelUri" : string ,
"sidePanelUrl" : string ,
"mainStageUri" : string ,
"supportsScreenSharing" : boolean ,
"supportsCollaboration" : boolean ,
"supportsPopOut" : boolean ,
"hostOrigins" : [
string
] ,
"addOnOrigins" : [
string
] ,
"openState" : enum ( State ) ,
"supportsCollaborationHostControls" : boolean ,
"logoUrl" : string ,
"darkModeLogoUrl" : string ,
"displayFlow" : enum ( DisplayFlow )
}
Fields
sidePanelUri (deprecated)
string
This item is deprecated!
The URI for the side panel iframe.
sidePanelUrl
string
The URL for the side panel iframe.
mainStageUri (deprecated)
string
This item is deprecated!
The URI for the "main stage" iframe.
supportsScreenSharing
boolean
Whether the addon supports screen sharing the main stage.
supportsCollaboration (deprecated)
boolean
This item is deprecated!
Whether the addon supports collaboration or inviting others into the addon experience. This field is deprecated now, please use the top level field in MeetAddOnManifest.
supportsPopOut
boolean
Whether the addon supports popping out to a browser PiP experience.
hostOrigins[] (deprecated)
string
This item is deprecated!
Deprecated, legacy name. Origins that should be added to the frame-src property of the iframe containing the third party site. Use addonorigins instead.
addOnOrigins[]
string
Origins that should be added to the frame-src property of the iframe containing the third party site.
openState
enum ( State )
The initial state when the addon is opened.
supportsCollaborationHostControls
boolean
Whether the collaboration add-on supports host controls.
logoUrl
string
The URL of the logo to be displayed for the addon. If not specified, the logo defaults to the logo in the common section of the manifest.
darkModeLogoUrl
string
A dark mode version of the logourl.
displayFlow (deprecated)
enum ( DisplayFlow )
This item is deprecated!
The display flow the add-on will follow when launched.
State
Enum for specifying initial addon opening state.
Enums
STATE_UNSPECIFIED
Initial state has not been specified with the addon.
SIDE_PANEL_ONLY
The addon opens with only the side panel active.
MAIN_STAGE_ONLY
The addon opens with only the main stage active.
SIDE_PANEL_AND_MAIN_STAGE
The addon opens with both the side panel and the main stage active.
DisplayFlow
Enum for specifying the display flow the add-on will follow when launched
Enums
DISPLAY_FLOW_UNSPECIFIED
Display flow has not been specified.
FOCUS
Add-on should launch in the "focus" display flow.
AUGMENT
Add-on should launch in the "augment" display flow.
SheetsAddOnManifest
Properties customizing the appearance and execution of a Google Sheets add-on.
JSON representation
{
"homepageTrigger" : {
object ( HomepageExtensionPoint )
} ,
"onFileScopeGrantedTrigger" : {
object ( SheetsExtensionPoint )
} ,
"linkPreviewTriggers" : [
{
object ( LinkPreviewExtensionPoint )
}
]
}
Fields
homepageTrigger
object ( HomepageExtensionPoint )
If present, this overrides the configuration from addons.common.homepageTrigger .
onFileScopeGrantedTrigger
object ( SheetsExtensionPoint )
Endpoint to execute when file scope authorization is granted for this document/user pair.
linkPreviewTriggers[]
object ( LinkPreviewExtensionPoint )
A list of extension points for previewing links in a Google Sheets document. For details, see Preview links with smart chips .
SheetsExtensionPoint
Common format for declaring a Sheets add-on's triggers.
JSON representation
{
"runFunction" : string
}
Fields
runFunction
string
Required. The endpoint to execute when this extension point is activated.
SlidesAddOnManifest
Properties customizing the appearance and execution of a Google Slides add-on.
JSON representation
{
"homepageTrigger" : {
object ( HomepageExtensionPoint )
} ,
"onFileScopeGrantedTrigger" : {
object ( SlidesExtensionPoint )
} ,
"linkPreviewTriggers" : [
{
object ( LinkPreviewExtensionPoint )
}
]
}
Fields
homepageTrigger
object ( HomepageExtensionPoint )
If present, this overrides the configuration from addons.common.homepageTrigger .
onFileScopeGrantedTrigger
object ( SlidesExtensionPoint )
Endpoint to execute when file scope authorization is granted for this document/user pair.
linkPreviewTriggers[]
object ( LinkPreviewExtensionPoint )
A list of extension points for previewing links in a Google Slides document. For details, see Preview links with smart chips .
SlidesExtensionPoint
Common format for declaring a Slides add-on's triggers.
JSON representation
{
"runFunction" : string
}
Fields
runFunction
string
Required. The endpoint to execute when this extension point is activated.
HttpOptions
Options for sending requests to add-on HTTP endpoints.
JSON representation
{
"authorizationHeader" : enum ( HttpAuthorizationHeader ) ,
"granularOauthPermissionSupport" : enum ( GranularOauthPermissionSupport )
}
Fields
authorizationHeader
enum ( HttpAuthorizationHeader )
Configuration for the token sent in the HTTP Authorization header.
granularOauthPermissionSupport
enum ( GranularOauthPermissionSupport )
Whether the add-on has enabled Granular OAuth Consent.
HttpAuthorizationHeader
Authorization header sent in add-on HTTP requests.
Enums
HTTP_AUTHORIZATION_HEADER_UNSPECIFIED
Default value, equivalent to SYSTEM_ID_TOKEN .
SYSTEM_ID_TOKEN
Send an ID token for the project-specific Google Workspace add-on's system service account (default).
USER_ID_TOKEN
Send an ID token for the end user.
NONE
Do not send an Authentication header.
GranularOauthPermissionSupport
Whether the add-on has enabled Granular OAuth Consent.
Enums
GRANULAR_OAUTH_PERMISSION_SUPPORT_UNSPECIFIED
Default value, should not be used.
OPT_IN
The add-on is opted in to Granular OAuth Consent.
OPT_OUT
The add-on is opted out of Granular OAuth Consent.
Methods
create
Creates a deployment with the specified name and configuration.
delete
Deletes the deployment with the given name.
get
Gets the deployment with the specified name.
getInstallStatus
Gets the install status of a test deployment.
install
Installs a deployment to your account for testing.
list
Lists all deployments in a particular project.
replaceDeployment
Creates or replaces a deployment with the specified name.
uninstall
Uninstalls a test deployment from the user’s account.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],["Deployments define Google Workspace add-ons, specifying `name`, `oauthScopes`, `addOns`, and `etag`. `AddOns` configures the add-on across services like Gmail, Drive, and Calendar, with a shared `CommonAddOnManifest` for properties like `name`, `logoUrl`, and `layoutProperties`. Add-ons can use `WidgetType` like date pickers and buttons. `HomepageExtensionPoint` and `UniversalActionExtensionPoint` allow custom views and actions. Gmail add-ons have `ContextualTriggers`, `ComposeTriggers` and `UniversalActions`. Deployments are managed via methods like `create`, `delete`, `list`, `install`, `uninstall`, and `getInstallStatus`.\n"]]
