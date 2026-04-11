---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.647Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Add-ons columns control support"
feature_slug: "add-ons-columns-control-support"
latest_feature_date: "2024-07-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/add-ons/overview"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/sheets/functions"
keywords:
  - "columns"
  - "generally"
  - "controls"
  - "control"
  - "are"
  - "ons"
  - "now"
  - "add"
---

# Add-ons columns control support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Columns controls are now generally available for Apps Script add-ons.

## Extended Definition

Columns controls are now generally available for Apps Script add-ons.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/add-ons/overview](https://developers.google.com/apps-script/add-ons/overview)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)

## Supporting Pages

### Add-ons overview \_|\_ Google Workspace add-ons \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/add-ons/overview](https://developers.google.com/apps-script/add-ons/overview)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Subscribe now Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Page Summary outlined flag Google Workspace add-ons are custom applications that enhance Google Workspace functionality by automating tasks, connecting to third-party services, and streamlining workflows.
- Google Workspace add-ons API Some features, like extending the Google Calendar conferencing drop-down and iOS capabilities, are not yet supported by the Google Workspace add-ons API.
- With add-ons, you can do the following: Create customized user interfaces that are directly integrated into Google Workspace applications.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- For more information refer to the following: SelectionInput for Apps Script SelectionInput for HTTP runtimes Feature ( Generally Available ): Columns are now generally available for Add-ons.
- October 10, 2017 Feature The Calendar service has been extended with the following new methods: CalendarApp.createAllDayEvent(title, startDate, endDate) CalendarApp.createAllDayEvent(title, startDate, endDate, options) CalendarApp.getEventById(iCalId) Calendar.createAllDayEvent(title, startDate, endDate) Calendar.createAllDayEvent(title, startDate, endDate, options) Calendar.getEventById(iCalId) CalendarEvent.setAllDayDates(startDate, endDate) The Groups service has been extended with the following new methods: Group.getGroups() Group.hasGroup(group) Group.hasGroup(email) The Spreadsheet service has been extended with the following new methods and classes: AutoFillSeries enumeration Range.autoFill(destination, series) Range.autoFillToNeighbor(series) Sheet.moveColumns(columnSpec, destinationIndex) Sheet.moveRows(rowSpec, destinationIndex) October 06, 2017 Change Add-ons now require OAuth Client Verification prior to beginning the publication process.
- For more information refer to the following: SelectionInput for Apps Script SelectionInput for other runtimes Feature ( Developer Preview ): Columns are now in Developer Preview for Add-ons.
- March 12, 2026 Feature Generally Available: The AddOnsResponseService and its associated classes in Apps Script are now generally available.

### Custom Functions in Google Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Function naming In addition to the standard conventions for naming JavaScript functions, be aware of the following: The name of a custom function must be distinct from the names of built-in functions like SUM() .
- That is, built-in spreadsheet functions that return a different result each time they calculate — such as NOW() or RAND() — are not allowed as arguments to a custom function.
- Guidelines for custom functions Before writing your own custom function, there are a few guidelines to know.
- Custom functions can be shared by copying the script to other spreadsheets or publishing them as add-ons.

