---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.640Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script Google Analytics Reporting API advanced service"
feature_slug: "apps-script-google-analytics-reporting-api-advanced-service"
latest_feature_date: "2025-06-04"
deprecation_date: "2025-06-04"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/analyticsadmin"
  - "https://developers.google.com/apps-script/advanced/analyticsdata"
  - "https://developers.google.com/apps-script/advanced/calendar"
keywords:
  - "reporting"
  - "analytics"
  - "advanced"
  - "script"
  - "api"
  - "apps"
  - "for"
  - "the"
---

# Apps Script Google Analytics Reporting API advanced service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Apps Script Advanced Service for Google Analytics Reporting API is deprecated and replaced by the Google Analytics Data API Advanced Service; deprecated on 2025-06-04.

## Extended Definition

The Apps Script Advanced Service for Google Analytics Reporting API is deprecated and replaced by the Google Analytics Data API Advanced Service; deprecated on 2025-06-04.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/analyticsadmin](https://developers.google.com/apps-script/advanced/analyticsadmin)
- [https://developers.google.com/apps-script/advanced/analyticsdata](https://developers.google.com/apps-script/advanced/analyticsdata)
- [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)

## Supporting Pages

### Analytics Admin Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/analyticsadmin](https://developers.google.com/apps-script/advanced/analyticsadmin)
- Source ID: `site-docs-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Like all advanced services in Apps Script, the AnalyticsAdmin service uses the same objects, methods, and parameters as the public API.
- Page Summary outlined flag The Analytics Admin service in Apps Script allows programmatic access to Google Analytics 4 configuration data via the Google Analytics Admin API v1.
- The Analytics Admin service lets you use the Google Analytics Admin API v1 in Google Apps Script.
- Sample code demonstrates how to list Google Analytics accounts accessible by a user using the accounts.list() method. programmatically within Google Apps Script using the Analytics Admin service.

### Analytics Data Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/analyticsdata](https://developers.google.com/apps-script/advanced/analyticsdata)
- Source ID: `site-docs-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Like all advanced services in Apps Script, the AnalyticsData service uses the same objects, methods, and parameters as the public API.
- Page Summary outlined flag The Analytics Data service allows Google Analytics users to programmatically access Google Analytics 4 (GA4) report data through the Google Analytics Data API v1 in Apps Script.
- The Analytics Data service lets you use the Google Analytics Data API v1 in Google Apps Script.
- Apps Script using the Analytics Data API v1.

### Advanced Calendar Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Events . insert ( event , calendarId ); console . log ( Event ID: ${ event . id } ); } catch ( err ) { console . log ( "Failed with error %s" , err . message ); } } / Helper function to get a new Date object relative to the current date. @param {number} daysOffset The number of days in the future for the new date. @param {number} hour The hour of the day for the new date, in the time zone of the script. @return {Date} The new date. / function getRelativeDate ( daysOffset , hour ) { const date = new Date (); date . setDate ( date . getDate () + daysOffset ); date . setHours ( hour ); date . setMinutes ( 0 ); date . setSeconds ( 0 ); date . setMilliseconds ( 0 ); return date ; } Listing calendars The following example demonstrates how to retrieve details about the calendars shown in the user's calendar list. advanced/calendar.gs View on GitHub / Lists the calendars shown in the user's calendar list. @see https://developers.google.com/calendar/api/v3/reference/calendarList/list / function listCalendars () { let calendars ; let pageToken ; do { calendars = Calendar .
- Creating events The following example demonstrates how to create an event in the user's default calendar. advanced/calendar.gs View on GitHub / Creates an event in the user's default calendar. @see https://developers.google.com/calendar/api/v3/reference/events/insert / function createEvent () { const calendarId = "primary" ; const start = getRelativeDate ( 1 , 12 ); const end = getRelativeDate ( 1 , 13 ); // event details for creating event. let event = { summary : "Lunch Meeting" , location : "The Deli" , description : "To discuss our plans for the presentation next week." , start : { dateTime : start . toISOString (), }, end : { dateTime : end . toISOString (), }, attendees : [ { email : "gduser1@workspacesample.dev" }, { email : "gduser2@workspacesample.dev" }, ], // Red background.
- Page Summary outlined flag The advanced Calendar service in Apps Script allows access to the public Google Calendar API, offering more features than the built-in service, such as setting event background colors.
- Like all advanced services in Apps Script, the advanced Calendar service uses the same objects, methods, and parameters as the public API.

