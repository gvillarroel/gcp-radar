---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.712Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script DashboardPanel.add(widget) method"
feature_slug: "apps-script-dashboardpanel-add-widget-method"
latest_feature_date: "2016-03-25"
deprecation_date: "2016-03-25"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/chat"
  - "https://developers.google.com/apps-script/guides/services/advanced"
keywords:
  - "dashboardpanel"
  - "deprecated"
  - "widget"
  - "method"
  - "script"
  - "apps"
  - "add"
  - "the"
---

# Apps Script DashboardPanel.add(widget) method

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Deprecated the DashboardPanel.add(widget) method in UiApp-related code paths; deprecated on 2016-03-25.

## Extended Definition

Deprecated the DashboardPanel.add(widget) method in UiApp-related code paths; deprecated on 2016-03-25.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)
- [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- March 25, 2016 Deprecated Deprecated the add(widget) method in the DashboardPanel class because it takes a UiApp.Widget argument, and UiApp was deprecated in 2014.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.

### Advanced Chat Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Add the chat.messages.create authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.messages.create" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Posts a new message to the specified space on behalf of the user. @param {string} spaceName The resource name of the space. / function postMessageWithUserCredentials ( spaceName ) { try { const message = { text : "Hello world!" }; Chat .
- Add the chat.memberships.readonly authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.memberships.readonly" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Lists all the members of a Chat space. @param {string} spaceName The resource name of the space. / function listMemberships ( spaceName ) { let response ; let pageToken = null ; try { do { response = Chat .
- Add the chat.spaces.readonly authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.spaces.readonly" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Gets information about a Chat space. @param {string} spaceName The resource name of the space. / function getSpace ( spaceName ) { try { const space = Chat .
- Add the chat.spaces.create authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.spaces.create" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Creates a new Chat space. / function createSpace () { try { const space = { displayName : "New Space" , spaceType : "SPACE" }; Chat .

### Advanced Google services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- How method signatures are determined Advanced services generally use the same objects, method names, and parameters as the corresponding public APIs, although method signatures are translated for use in Apps Script.
- The corresponding method signature in Apps Script has the following arguments: The request body (usually a resource), as a JavaScript object.
- In Apps Script, the method signature is determined by reordering these inputs: Body : The event resource (JavaScript object).
- Methods named delete in the Google API are named remove in Apps Script, since delete is a reserved word in JavaScript.

