---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.669Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Groups service"
feature_slug: "groups-service"
latest_feature_date: "2011-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/groups"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration"
keywords:
  - "groups"
  - "apps"
  - "script"
  - "includes"
  - "working"
---

# Groups service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script includes a service for working with Google Groups.

## Extended Definition

Apps Script includes a service for working with Google Groups.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/groups](https://developers.google.com/apps-script/advanced/groups)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration](https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration)

## Supporting Pages

### "Advanced Cloud Identity Groups Service \_|\_ Apps Script \_|\_ Google for\

- URL: [https://developers.google.com/apps-script/advanced/groups](https://developers.google.com/apps-script/advanced/groups)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Advanced Cloud Identity Groups Service Stay organized with collections Save and categorize content based on your preferences.
- Sample code is provided for creating groups, searching for groups, and managing group memberships. access the CIG API in Apps Script.
- Page Summary outlined flag The advanced Cloud Identity Groups (CIG) service in Apps Script allows interaction with the CIG API.
- The advanced Cloud Identity Groups (CIG) service lets you use the CIG API in Google Apps Script.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- This API includes and extends the original Apps Script API.
- This change includes published Apps Script web apps.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.

### Admin SDK Groups Migration Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration](https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Admin SDK Groups Migration service in Apps Script allows administrators to migrate emails from public folders and distribution lists to Google Groups discussion archives.
- Home Google Workspace Apps Script Reference Send feedback Admin SDK Groups Migration Service Stay organized with collections Save and categorize content based on your preferences.
- Like all advanced services in Apps Script, the Admin SDK Groups Migration service uses the same objects, methods, and parameters as the public API.
- The Admin SDK Groups Migration service lets you use the Admin SDK's Groups Migration API in Google Apps Script.

