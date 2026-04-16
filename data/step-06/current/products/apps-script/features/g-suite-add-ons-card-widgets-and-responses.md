---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.531Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "G Suite Add-ons card widgets and responses"
feature_slug: "g-suite-add-ons-card-widgets-and-responses"
latest_feature_date: "2020-01-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/add-ons/overview"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder"
keywords:
  - "suite"
  - "add"
  - "ons"
  - "card"
  - "widgets"
  - "responses"
  - "apps"
  - "script"
---

# G Suite Add-ons card widgets and responses

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script Card Service adds new widgets and event response types for building G Suite Add-on interfaces.

## Extended Definition

Apps Script Card Service adds new widgets and event response types for building G Suite Add-on interfaces.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/add-ons/overview](https://developers.google.com/apps-script/add-ons/overview)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- For more information refer to the following: Columns for Apps Script Columns for other runtimes February 20, 2024 Feature (Developer Preview) : Google Chat apps now support Google Apps Script's Card Service.
- March 15, 2024 Change The default property for the TextButtonStyle enum in the Apps Script Card Service has been renamed from TEXT to OUTLINED to align with the Google Material 3 design system .

### Add-ons overview \_|\_ Google Workspace add-ons \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/add-ons/overview](https://developers.google.com/apps-script/add-ons/overview)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Try a quickstart To see how building an add-on works, try a quickstart: Node.js Google Workspace add-on quickstart Apps Script Google Workspace add-on quickstart Apps Script Editor add-on quickstart Want to see Google Workspace add-ons in action?
- Quickstart guides are available for developers to learn how to build Google Workspace add-ons using Node.js or Apps Script.
- Quickstarts are available for Node.js and Apps Script to build these add-ons.\n"]]

### "Class CalendarEventActionResponseBuilder \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder)
- Source ID: `site-docs-reference-3`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Class CalendarEventActionResponseBuilder Stay organized with collections Save and categorize content based on your preferences.
- Methods Method Return type Brief description add Attachments(attachments) Calendar Event Action Response Builder Specifies that the response should add the attachments to the Calendar event when the associated UI action is taken. add Attendees(emails) Calendar Event Action Response Builder Specifies that the response should add the indicated attendees to the Calendar event when the associated UI action is taken. build() Calendar Event Action Response Builds the current Calendar event action response and validates it. set Conference Data(conferenceData) Calendar Event Action Response Builder Specifies that the response should set the indicated conference data to the Calendar event when the associated UI action is taken.
- Parameters Name Type Description conference Data Conference Data Conference data to set to the event, created by an add on.
- Parameters Name Type Description emails String[] An array of email addresses to add to the event.

