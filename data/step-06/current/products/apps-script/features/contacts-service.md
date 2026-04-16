---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.515Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Contacts service"
feature_slug: "contacts-service"
latest_feature_date: "2022-12-16"
deprecation_date: "January 2025"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/tables"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget"
keywords:
  - "contacts"
  - "provides"
  - "apps"
  - "script"
  - "access"
  - "deprecated"
  - "january"
  - "2025"
---

# Contacts service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Contacts service provides Apps Script access to Google Contacts data; deprecated on January 2025.

## Extended Definition

The Contacts service provides Apps Script access to Google Contacts data; deprecated on January 2025.

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
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following documentation: getEventType() for events getEventType() for event series EventType enum October 02, 2024 Announcement Apps Script has rescheduled the shutdown date of the Contacts service to January 31, 2025.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.
- January 08, 2025 Feature Generally Available : Granular OAuth permissions are now supported for users executing scripts in the Apps Script IDE.

### Apps Script Sunset Schedule \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/tables](https://developers.google.com/apps-script/advanced/tables)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Apps Script features are marked as deprecated before they are shut down, allowing time for migration to supported alternatives.
- Once a sunset date for an Apps Script feature is announced, the feature is considered deprecated, but is available for use until the sunset date.
- The table above lists deprecated Apps Script features, their deprecation and sunset dates, and the expected behavior after sunset.
- Rhino Runtime February 20, 2025 January 31, 2026 As of February 20, 2025, the Rhino runtime is deprecated.

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

