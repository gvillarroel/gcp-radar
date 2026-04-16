---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.503Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Google Workspace Events advanced service"
feature_slug: "google-workspace-events-advanced-service"
latest_feature_date: "2024-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/events"
  - "https://developers.google.com/apps-script/advanced/calendar"
  - "https://developers.google.com/apps-script/releases"
keywords:
  - "workspace"
  - "events"
  - "advanced"
  - "lets"
  - "apps"
  - "script"
  - "subscribe"
---

# Google Workspace Events advanced service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Google Workspace Events advanced service lets Apps Script subscribe to Google Workspace events.

## Extended Definition

The Google Workspace Events advanced service lets Apps Script subscribe to Google Workspace events.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/events](https://developers.google.com/apps-script/advanced/events)
- [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)

## Supporting Pages

### "Advanced Google Workspace Events Service \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/advanced/events](https://developers.google.com/apps-script/advanced/events)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Advanced Google Workspace Events service allows Apps Script to use the Google Workspace Events API to subscribe to resource changes like creations, updates, or deletions.
- The Advanced Google Workspace Events service lets you use the Google Workspace Events API in Google Apps Script.
- To get information about an operation, add the following function to the Apps Script project's code: advanced/events.gs View on GitHub / Gets details about an operation returned by one of the methods on the subscription resource of the Google Workspace Events API.
- Create a subscription To create a subscription to a Google Workspace resource, add the following function to the Apps Script project's code: advanced/events.gs View on GitHub / Creates a subscription to receive events about a Google Workspace resource.

### Advanced Calendar Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Creating events The following example demonstrates how to create an event in the user's default calendar. advanced/calendar.gs View on GitHub / Creates an event in the user's default calendar. @see https://developers.google.com/calendar/api/v3/reference/events/insert / function createEvent () { const calendarId = "primary" ; const start = getRelativeDate ( 1 , 12 ); const end = getRelativeDate ( 1 , 13 ); // event details for creating event. let event = { summary : "Lunch Meeting" , location : "The Deli" , description : "To discuss our plans for the presentation next week." , start : { dateTime : start . toISOString (), }, end : { dateTime : end . toISOString (), }, attendees : [ { email : "gduser1@workspacesample.dev" }, { email : "gduser2@workspacesample.dev" }, ], // Red background.
- Home Google Workspace Apps Script Reference Send feedback Advanced Calendar Service Stay organized with collections Save and categorize content based on your preferences.
- The advanced Calendar service lets you use the public Google Calendar API in Google Apps Script.
- Events . insert ( event , calendarId ); console . log ( Event ID: ${ event . id } ); } catch ( err ) { console . log ( "Failed with error %s" , err . message ); } } / Helper function to get a new Date object relative to the current date. @param {number} daysOffset The number of days in the future for the new date. @param {number} hour The hour of the day for the new date, in the time zone of the script. @return {Date} The new date. / function getRelativeDate ( daysOffset , hour ) { const date = new Date (); date . setDate ( date . getDate () + daysOffset ); date . setHours ( hour ); date . setMinutes ( 0 ); date . setSeconds ( 0 ); date . setMilliseconds ( 0 ); return date ; } Listing calendars The following example demonstrates how to retrieve details about the calendars shown in the user's calendar list. advanced/calendar.gs View on GitHub / Lists the calendars shown in the user's calendar list. @see https://developers.google.com/calendar/api/v3/reference/calendarList/list / function listCalendars () { let calendars ; let pageToken ; do { calendars = Calendar .

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- For more information refer to the following: Columns for Apps Script Columns for HTTP runtimes May 02, 2024 Feature To subscribe to events using Apps Script, you can now use the Advanced Google Workspace Events service.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides: Authenticate as an app Authenticate as a user Try it - Respond to Incidents September 26, 2023 Change The email address that sends notifications about errors in triggers has been updated from apps-scripts-notifications@google.com to noreply-apps-scripts-notifications@google.com .
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.

