---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.714Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script ScriptApp Service.enable method"
feature_slug: "apps-script-scriptapp-service-enable-method"
latest_feature_date: "2015-08-10"
deprecation_date: "2015-08-10"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/calendar"
  - "https://developers.google.com/apps-script/guides/services/advanced"
keywords:
  - "global"
  - "enable"
  - "scriptapp"
  - "method"
  - "script"
  - "apps"
  - "was"
  - "the"
---

# Apps Script ScriptApp Service.enable method

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The ScriptApp global method Service.enable() was deprecated as it is no longer needed under the updated Apps Script authorization model; deprecated on 2015-08-10.

## Extended Definition

The ScriptApp global method Service.enable() was deprecated as it is no longer needed under the updated Apps Script authorization model; deprecated on 2015-08-10.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- August 10, 2015 Deprecated Deprecated the method Service.enable() in the ScriptApp global object.
- In addition, the following ChartTypes have been added: TIMELINE BUBBLE CANDLESTICK GAUGE GEO RADAR ORG SPARKLINE STEPPED AREA TREEMAP WATERFALL March 26, 2018 Feature The Spreadsheet service has been extended with the following new methods: SpreadsheetApp.setActiveSheet(sheet, restoreSelection) Spreadsheet.setActiveSheet(sheet, restoreSelection) Deprecated The deprecated enable(restriction) method of the ScriptApp.Service class has been sunset.
- Feature Generally Available : To complement the release of the granular consent flow in Apps Script IDE executions, the following methods have been added to the ScriptApp and AuthorizationInfo classes to let Apps Script developers programmatically interact with the scopes granted for a script.
- This method is no longer useful because Apps Script's authorization model has changed since the time the method was introduced.

### Advanced Calendar Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Like all advanced services in Apps Script, the advanced Calendar service uses the same objects, methods, and parameters as the public API.
- The conditional update is accomplished by setting the 'If-Match' header to the etag of the new event when it was created. / function conditionalUpdate () { const calendarId = "primary" ; const start = getRelativeDate ( 1 , 12 ); const end = getRelativeDate ( 1 , 13 ); let event = { summary : "Lunch Meeting" , location : "The Deli" , description : "To discuss our plans for the presentation next week." , start : { dateTime : start . toISOString (), }, end : { dateTime : end . toISOString (), }, attendees : [ { email : "gduser1@workspacesample.dev" }, { email : "gduser2@workspacesample.dev" }, ], // Red background.
- The script creates a new event, waits 30 seconds, then updates the event only if no event details have changed since the event was created. advanced/calendar.gs View on GitHub / Creates an event in the user's default calendar, waits 30 seconds, then attempts to update the event's location, on the condition that the event has not been changed since it was created.
- Page Summary outlined flag The advanced Calendar service in Apps Script allows access to the public Google Calendar API, offering more features than the built-in service, such as setting event background colors.

### Advanced Google services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Events . insert ( event , 'primary' , optionalArgs ); UrlFetch (HTTP): const event = { summary : 'Lunch' , location : 'Deli' , start : { dateTime : '2026-01-01T12:00:00-05:00' }, end : { dateTime : '2026-01-01T13:00:00-05:00' } }; const url = 'https://www.googleapis.com/calendar/v3/calendars/primary/events?sendUpdates=all' ; const options = { method : 'post' , contentType : 'application/json' , headers : { Authorization : Bearer ${ ScriptApp . getOAuthToken () } }, payload : JSON . stringify ( event ) }; UrlFetchApp . fetch ( url , options ); For the UrlFetchApp method, manually specify the required OAuth scopes in the script's manifest file .
- How method signatures are determined Advanced services generally use the same objects, method names, and parameters as the corresponding public APIs, although method signatures are translated for use in Apps Script.
- Enable advanced services To use an advanced Google service, follow these instructions: Step 1: Enable the advanced service Enable an advanced service using the Apps Script editor or by editing the manifest.
- Step 2: Enable the Google Cloud API (Standard Google Cloud project projects only) If using a default Google Cloud project (created automatically by Apps Script), skip this step.

