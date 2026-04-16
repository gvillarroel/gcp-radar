---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.518Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Script time zone setting in new IDE"
feature_slug: "script-time-zone-setting-in-new-ide"
latest_feature_date: "2022-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/v8-runtime"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/collaborating"
keywords:
  - "script"
  - "time"
  - "zone"
  - "setting"
  - "ide"
  - "apps"
  - "lets"
  - "developers"
---

# Script time zone setting in new IDE

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The new Apps Script IDE lets developers set the time zone for a script project.

## Extended Definition

The new Apps Script IDE lets developers set the time zone for a script project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/collaborating](https://developers.google.com/apps-script/guides/collaborating)

## Supporting Pages

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As with template literals, this syntax lets you avoid string concatenations and simplify string definitions. // Rhino runtime var multiline = "This string is sort of \n " + "like a multi-line string, \n " + "but it's not really one." ; // V8 runtime const multiline = This on the other hand , actually is a multi - line string , thanks to JavaScript ES6 ; V8 runtime limitations The Apps Script V8 runtime isn't a standard Node.js or browser environment.
- Apps Script now supports the V8 runtime, which powers Chrome and Node.js, enabling developers to use modern JavaScript syntax and features not available with the older Rhino runtime.
- You can enable the V8 runtime for your Apps Script project through project settings or by editing the appsscript.json manifest file.
- Apps Script developers can't use more modern JavaScript syntax and features in scripts using the Rhino runtime.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- November 03, 2022 Feature Apps Script added a new method to the Utilities class . parseDate(date, timeZone, format ) parses a provided string date according to the specification described in the Java Standard Edition SimpleDateFormat class .
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- Feature Added the following Session methods, which allow scripts to determine the user's locale and time zone: getActiveUserLocale() getActiveUserTimeZone() January 21, 2014 Feature The new SpreadsheetApp method Spreadsheet.getUi() allows scripts to access the spreadsheet's user-interface environment in order to add features like menus, dialogs, and sidebars.

### Collaborate with other developers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/collaborating](https://developers.google.com/apps-script/guides/collaborating)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Guides Send feedback Collaborate with other developers Stay organized with collections Save and categorize content based on your preferences.
- Collaboration requires all developers to have editor access to the Apps Script project file and its container if it's a bound script.
- Page Summary outlined flag Apps Script provides features to help developers collaborate on scripts, add-ons, and web apps.
- This lets everyone on your team see and make changes to the Apps Script code.

