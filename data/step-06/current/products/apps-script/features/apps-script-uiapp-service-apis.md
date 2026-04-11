---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.683Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script UiApp service APIs"
feature_slug: "apps-script-uiapp-service-apis"
latest_feature_date: "2019-10-23"
deprecation_date: "2019-10-23"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
  - "https://developers.google.com/apps-script/advanced/chat"
keywords:
  - "integration"
  - "related"
  - "classes"
  - "charts"
  - "uiapp"
  - "script"
  - "apis"
  - "apps"
---

# Apps Script UiApp service APIs

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

UiApp-related charts integration classes and methods were removed as part of the UiApp service shutdown; deprecated on 2019-10-23.

## Extended Definition

UiApp-related charts integration classes and methods were removed as part of the UiApp service shutdown; deprecated on 2019-10-23.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- The following is a full list of the removed classes and methods: Charts service CategoryFilterBuilder Control DashboardPanel DashboardPanelBuilder Chart.getId() Chart.getType() Charts.newCategoryFilter() Charts.newDashboardPanel() Charts.newNumberRangeFilter() Charts.newStringFilter() NumberRangeFilterBuilder.build() NumberRangeFilterBuilder.setDataTable(tableBuilder) NumberRangeFilterBuilder.setDataTable(table) NumberRangeFilterBuilder.setFilterColumnIndex(columnIndex) NumberRangeFilterBuilder.setFilterColumnLabel(columnLabel) NumberRangeFilterBuilder.setLabel(label) NumberRangeFilterBuilder.setLabelSeparator(labelSeparator) NumberRangeFilterBuilder.setLabelStacking(orientation) StringFilterBuilder.build() StringFilterBuilder.setDataTable(tableBuilder) StringFilterBuilder.setDataTable(table) StringFilterBuilder.setFilterColumnIndex(columnIndex) StringFilterBuilder.setFilterColumnLabel(columnLabel) StringFilterBuilder.setLabel(label) StringFilterBuilder.setLabelSeparator(labelSeparator) StringFilterBuilder.setLabelStacking(orientation) Spreadsheet service EmbeddedChart.getId() EmbeddedChart.getType() EmbeddedChart.setId(id) Change The Slides service class RgbColor and the enumeration ColorType have been moved from the Slides service to the Base script service.
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- The following new data source type has been added: LOOKER The following new classes have been added: LookerDataSourceSpec LookerDataSourceSpecBuilder The following new methods have been added to existing classes: DataSourceSpec.asLooker() DataSourceSpecBuilder.asLooker() August 15, 2024 Feature Generally Available : You can now create and organize tabs in Google Docs documents using Apps Script's Document service.

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- View on GitHub Create and configure in a new spreadsheet To make a complete copy of the sample Sheets spreadsheet including its container-bound Apps Script project, click the following button: Copy Google Sheets speadsheet In the newly created spreadsheet, go to Extensions > Apps Script .
- In the Apps Script project, go to Project Settings , click Edit script properties , then click Add script property to add the following script properties: LOCATION with the location of the Google Cloud project created in previous steps such as us-central1 .
- Coding level : Advanced Duration : 30 minutes Project type : Custom function Overview A fact-check custom function for Google Sheets to be used as a bound Google Apps Script project powered by a Vertex AI agent and Gemini model.
- Home Google Workspace Apps Script Samples Send feedback Fact-check statements with an ADK AI agent and Gemini model Stay organized with collections Save and categorize content based on your preferences.

### Advanced Chat Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Add the chat.messages.create authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.messages.create" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Posts a new message to the specified space on behalf of the user. @param {string} spaceName The resource name of the space. / function postMessageWithUserCredentials ( spaceName ) { try { const message = { text : "Hello world!" }; Chat .
- Add the chat.memberships.readonly authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.memberships.readonly" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Lists all the members of a Chat space. @param {string} spaceName The resource name of the space. / function listMemberships ( spaceName ) { let response ; let pageToken = null ; try { do { response = Chat .
- Add the chat.spaces.readonly authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.spaces.readonly" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Gets information about a Chat space. @param {string} spaceName The resource name of the space. / function getSpace ( spaceName ) { try { const space = Chat .
- Add the chat.spaces.create authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.spaces.create" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Creates a new Chat space. / function createSpace () { try { const space = { displayName : "New Space" , spaceType : "SPACE" }; Chat .

