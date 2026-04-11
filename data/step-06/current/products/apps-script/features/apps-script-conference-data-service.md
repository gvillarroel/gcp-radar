---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.681Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script Conference Data service"
feature_slug: "apps-script-conference-data-service"
latest_feature_date: "2020-01-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/support"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-directory"
keywords:
  - "conference"
  - "help"
  - "script"
  - "added"
  - "apps"
  - "was"
  - "the"
  - "to"
---

# Apps Script Conference Data service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Conference Data service was added to help Calendar G Suite add-ons stay synchronized with third-party conferencing applications.

## Extended Definition

The Conference Data service was added to help Calendar G Suite add-ons stay synchronized with third-party conferencing applications.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/support](https://developers.google.com/apps-script/support)
- [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- The following new data source type has been added: LOOKER The following new classes have been added: LookerDataSourceSpec LookerDataSourceSpecBuilder The following new methods have been added to existing classes: DataSourceSpec.asLooker() DataSourceSpecBuilder.asLooker() August 15, 2024 Feature Generally Available : You can now create and organize tabs in Google Docs documents using Apps Script's Document service.
- Feature Generally Available : To complement the release of the granular consent flow in Apps Script IDE executions, the following methods have been added to the ScriptApp and AuthorizationInfo classes to let Apps Script developers programmatically interact with the scopes granted for a script.
- November 03, 2022 Feature Apps Script added a new method to the Utilities class . parseDate(date, timeZone, format ) parses a provided string date according to the specification described in the Java Standard Edition SimpleDateFormat class .

### How to get help \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/support](https://developers.google.com/apps-script/support)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reddit (Unofficial) You can also find help in community-run subreddits: r/GoogleAppsScript r/googleworkspacedevs Stack Overflow We also use the popular programming Q&A website Stack Overflow to field technical questions.
- Home Google Workspace Apps Script Support Send feedback How to get help Stay organized with collections Save and categorize content based on your preferences.
- You can also check the Service status dashboard to see if there are known outages in Apps Script services, and whether reported outages have been resolved.
- Stack Overflow contains questions on a variety of topics, and developers use the tag [google-apps-script] to mark questions relevant to this service.

### Admin SDK Directory Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The Admin SDK Directory service in Apps Script allows administrators of Google Workspace domains to manage devices, groups, users, and other entities.
- Like all advanced services in Apps Script, the Admin SDK Directory service uses the same objects, methods, and parameters as the public API.
- The Admin SDK Directory service lets you use the Admin SDK's Directory API in Google Apps Script.
- Members . insert ( member , groupEmail ); console . log ( "User %s added as a member of group %s." , userEmail , groupEmail , ); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

