---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.796Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Drive Service"
feature_slug: "drive-service"
latest_feature_date: "2013-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/triggers/installable"
  - "https://developers.google.com/apps-script/overview"
keywords:
  - "introduces"
  - "creating"
  - "drive"
  - "script"
  - "apps"
  - "for"
  - "and"
  - "the"
---

# Drive Service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Introduces the Apps Script Drive Service for creating and modifying files and folders in Google Drive.

## Extended Definition

Introduces the Apps Script Drive Service for creating and modifying files and folders in Google Drive.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- [https://developers.google.com/apps-script/overview](https://developers.google.com/apps-script/overview)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- July 22, 2013 Feature Added DriveApp and FormApp to the services tracked on the Apps Script Dashboard .
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- October 08, 2013 Feature Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + Form.hasProgressBar() + Form.setProgressBar(enabled) + Form.getCustomClosedFormMessage() + Form.setCustomClosedFormMessage(message) + Form.addVideoItem() September 23, 2013 Feature Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.

### Installable Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Time-driven triggers let scripts execute at a particular time or on a recurring interval, as frequently as every minute or as infrequently as once per month. (An add-on can use a time-driven trigger once per hour at most.) The time might be slightly randomized—for example, if you create a recurring 9 AM trigger, Apps Script chooses a time between 9 AM and 10 AM, then keeps that timing consistent from day to day so that 24 hours elapse before the trigger fires again.
- If you have previously stored the ID of a trigger, delete it by passing the ID as an argument to the following function. triggers/triggers.gs View on GitHub / Deletes a trigger. @param {string} triggerId The Trigger ID. @see https://developers.google.com/apps-script/guides/triggers/installable / function deleteTrigger ( triggerId ) { // Loop over all triggers. const allTriggers = ScriptApp . getProjectTriggers (); for ( let index = 0 ; index < allTriggers . length ; index ++ ) { // If the current trigger is the correct one, delete it. if ( allTriggers [ index ]. getUniqueId () === triggerId ) { ScriptApp . deleteTrigger ( allTriggers [ index ]); break ; } } } Before creating a trigger, verify that the associated function has all the necessary OAuth permissions .
- The following example shows how to create two time-driven triggers—one that fires every 6 hours, and one that fires every Monday at 9 a.m. (in the time zone that your script is set to). triggers/triggers.gs View on GitHub / Creates two time-driven triggers. @see https://developers.google.com/apps-script/guides/triggers/installable#time-driven triggers / function createTimeDrivenTriggers () { // Trigger every 6 hours.
- For both simple and installable triggers, Apps Script passes the triggered function an event object that contains information about the context in which the event occurred.

### Google Apps Script overview \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/overview](https://developers.google.com/apps-script/overview)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Google Apps Script is a rapid application development platform for creating business applications that integrate with Google Workspace, using modern JavaScript and built-in libraries for popular Google applications.
- Apps Script is versatile and can be used to add custom features to Google Docs, Sheets, and Forms, build web apps, interact with other Google services, and create add-ons.
- If you're new to JavaScript, Codecademy offers a number of JavaScript courses . (These courses weren't developed by and aren't associated with Google.) What can Apps Script do?
- You write code in modern JavaScript and have access to built-in libraries for Google Workspace applications like Gmail, Google Calendar, Google Drive, and more.

