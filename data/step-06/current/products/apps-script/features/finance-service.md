---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.600Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Finance service"
feature_slug: "finance-service"
latest_feature_date: "2014-10-23"
deprecation_date: "2014-10-23"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/tables"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget"
keywords:
  - "finance"
  - "provided"
  - "apps"
  - "script"
  - "access"
  - "deprecated"
  - "2014"
  - "10"
---

# Finance service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Finance service provided Apps Script access to Google Finance data; The Finance service provided Apps Script access to Google Finance data; deprecated on 2014-10-23.

## Extended Definition

The Finance service provided Apps Script access to Google Finance data; The Finance service provided Apps Script access to Google Finance data; deprecated on 2014-10-23.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/tables](https://developers.google.com/apps-script/advanced/tables)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget](https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- Feature Added the following Session methods, which allow scripts to determine the user's locale and time zone: getActiveUserLocale() getActiveUserTimeZone() January 21, 2014 Feature The new SpreadsheetApp method Spreadsheet.getUi() allows scripts to access the spreadsheet's user-interface environment in order to add features like menus, dialogs, and sidebars.

### Apps Script Sunset Schedule \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/tables](https://developers.google.com/apps-script/advanced/tables)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Apps Script features are marked as deprecated before they are shut down, allowing time for migration to supported alternatives.
- Once a sunset date for an Apps Script feature is announced, the feature is considered deprecated, but is available for use until the sunset date.
- The table above lists deprecated Apps Script features, their deprecation and sunset dates, and the expected behavior after sunset.
- Feature Deprecated Sunset Behavior after sunset date setAuthentication(clientId, signingKey) March 03, 2026 June 01, 2026 This method is unavailable and existing scripts fail when using this method.

### Class AccessoryWidget \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget](https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget)
- Source ID: `site-docs-reference-3`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Class AccessoryWidget Stay organized with collections Save and categorize content based on your preferences.
- PHONE ) . setOnClickAction ( CardService . newAction () . setFunctionName ( "phone" ))) . addButton ( CardService . newTextButton () . setText ( "Robot" ) . setIconUrl ( "https://developers.google.com/chat/images/quickstart-app-avatar.png" ) . setOnClickAction ( CardService . newAction () . setFunctionName ( "robot" ))); const accessoryWidget = AddOnsResponseService . newAccessoryWidget () . addWidget ( widget ); Methods Method Return type Brief description add Widget(widget) Accessory Widget Sets the widget for this action.
- Accessory widgets are interactive widgets that appear at the bottom of a message.
- Parameters Name Type Description widget Widget The widget to set.

