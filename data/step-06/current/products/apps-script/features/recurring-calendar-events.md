---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.677Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Recurring calendar events"
feature_slug: "recurring-calendar-events"
latest_feature_date: "2010-10-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/triggers/events"
  - "https://developers.google.com/apps-script/guides/content"
keywords:
  - "recurring"
  - "calendar"
  - "events"
  - "apps"
  - "script"
  - "supports"
  - "creating"
  - "accessing"
---

# Recurring calendar events

Product: Apps Script
Coverage: LOW

## Step 02 Summary

Apps Script supports creating, accessing, modifying, and deleting recurring calendar event series.

## Extended Definition

Apps Script supports creating, accessing, modifying, and deleting recurring calendar event series.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- [https://developers.google.com/apps-script/guides/content](https://developers.google.com/apps-script/guides/content)

## Supporting Pages

### Content Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/content](https://developers.google.com/apps-script/guides/content)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The start and end parameters specify a time range in the standard Unix epoch. curl -L URL OF YOUR SCRIPT?start=1325437200&end=1325439000 The service returns JSON that reports if the calendar is open in that range. { "available" : true } Serve JSONP in web pages With a slight change, your JSON service can become JSONP to be called from JavaScript in a browser. function doGet ( request ) { var events = CalendarApp . getEvents ( new Date ( Number ( request . parameters . start ) 1000 ), new Date ( Number ( request . parameters . end ) 1000 )); var result = { available : events . length == 0 }; return ContentService . createTextOutput ( request . parameters . prefix + '(' + JSON . stringify ( result ) + ')' ) . setMimeType ( ContentService .
- The following script implements a service that checks if a calendar slot is open at a specific time. function doGet ( request ) { var events = CalendarApp . getEvents ( new Date ( Number ( request . parameters . start ) 1000 ), new Date ( Number ( request . parameters . end ) 1000 )); var result = { available : events . length == 0 }; return ContentService . createTextOutput ( JSON . stringify ( result )) . setMimeType ( ContentService .
- Page Summary outlined flag Apps Script's Content service allows scripts to act as "services" by responding to GET and POST requests with raw textual content of various MIME types instead of a user interface.
- Home Google Workspace Apps Script Guides Send feedback Content Service Stay organized with collections Save and categorize content based on your preferences.

### Event Objects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- Source ID: `site-docs-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- When the Apps Script EventUpdated trigger fires indicating a calendar event change, perform an incremental sync for the affected calendar using the stored nextSyncToken .
- Time-driven events Time-driven triggers (also called clock triggers) let scripts execute at a particular time or on a recurring interval.
- To synchronize with Calendar in Apps Script, perform the following steps: Enable the Calendar advanced service for the script project.
- Presentation user A User object, representing the active user, if available ( depending on a complex set of security restrictions ). amin@example.com Google Forms events The Forms-specific triggers let scripts respond when a user edits a form or submits a response.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- December 07, 2023 Fixed To fix a bug that prevented events of eventType != 'default' from importing, we updated the code sample in Populate a team vacation calendar , the popular Apps Script + Calendar API solution.
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- For more information, see the following documentation: getEventType() for events getEventType() for event series EventType enum October 02, 2024 Announcement Apps Script has rescheduled the shutdown date of the Contacts service to January 31, 2025.
- For more information refer to the following: Columns for Apps Script Columns for HTTP runtimes May 02, 2024 Feature To subscribe to events using Apps Script, you can now use the Advanced Google Workspace Events service.

