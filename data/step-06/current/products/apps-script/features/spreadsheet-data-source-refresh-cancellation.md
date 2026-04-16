---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.504Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Spreadsheet data source refresh cancellation"
feature_slug: "spreadsheet-data-source-refresh-cancellation"
latest_feature_date: "2024-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/reference/spreadsheet/data-source-chart"
  - "https://developers.google.com/apps-script/reference/spreadsheet/data-source-refresh-schedule"
  - "https://developers.google.com/apps-script/reference/spreadsheet/data-source-refresh-schedule-frequency"
keywords:
  - "spreadsheet"
  - "source"
  - "refresh"
  - "cancellation"
  - "lets"
  - "scripts"
  - "stop"
  - "running"
---

# Spreadsheet data source refresh cancellation

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Spreadsheet data source refresh cancellation lets scripts stop running refresh operations for linked data source objects.

## Extended Definition

Spreadsheet data source refresh cancellation lets scripts stop running refresh operations for linked data source objects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/reference/spreadsheet/data-source-chart](https://developers.google.com/apps-script/reference/spreadsheet/data-source-chart)
- [https://developers.google.com/apps-script/reference/spreadsheet/data-source-refresh-schedule](https://developers.google.com/apps-script/reference/spreadsheet/data-source-refresh-schedule)
- [https://developers.google.com/apps-script/reference/spreadsheet/data-source-refresh-schedule-frequency](https://developers.google.com/apps-script/reference/spreadsheet/data-source-refresh-schedule-frequency)

## Supporting Pages

### "Class DataSourceRefreshScheduleFrequency \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/reference/spreadsheet/data-source-refresh-schedule-frequency](https://developers.google.com/apps-script/reference/spreadsheet/data-source-refresh-schedule-frequency)
- Source ID: `site-docs-reference-required-4`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authorization Scripts that use this method require authorization with one or more of the following scopes : https://www.googleapis.com/auth/spreadsheets.currentonly https://www.googleapis.com/auth/spreadsheets getDaysOfTheWeek() Gets the days of the week on which to refresh the data source.
- Authorization Scripts that use this method require authorization with one or more of the following scopes : https://www.googleapis.com/auth/spreadsheets.currentonly https://www.googleapis.com/auth/spreadsheets getStartHour() Gets the start hour (as a number 0-23) of the time interval during which the refresh schedule runs.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["This content describes the DataSourceRefreshScheduleFrequency class for managing data refresh schedules connected to databases.
- Methods Method Return type Brief description get Days Of The Month() Integer[] Gets the days of the month as numbers (1-28) on which to refresh the data source. get Days Of The Week() Weekday[] Gets the days of the week on which to refresh the data source. get Frequency Type() Frequency Type Gets the frequency type. get Start Hour() Integer Gets the start hour (as a number 0-23) of the time interval during which the refresh schedule runs.

### Class DataSourceRefreshSchedule \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/spreadsheet/data-source-refresh-schedule](https://developers.google.com/apps-script/reference/spreadsheet/data-source-refresh-schedule)
- Source ID: `site-docs-reference-required-4`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authorization Scripts that use this method require authorization with one or more of the following scopes : https://www.googleapis.com/auth/spreadsheets.currentonly https://www.googleapis.com/auth/spreadsheets getTimeIntervalOfNextRun() Gets the time window of the next run of this refresh schedule.
- Authorization Scripts that use this method require authorization with one or more of the following scopes : https://www.googleapis.com/auth/spreadsheets.currentonly https://www.googleapis.com/auth/spreadsheets isEnabled() Determines whether this refresh schedule is enabled.
- Authorization Scripts that use this method require authorization with one or more of the following scopes : https://www.googleapis.com/auth/spreadsheets.currentonly https://www.googleapis.com/auth/spreadsheets getScope() Gets the scope of this refresh schedule.
- To get all refresh schedules, see Spreadsheet.getDataSourceRefreshSchedules() .

### Class DataSourceChart \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/spreadsheet/data-source-chart](https://developers.google.com/apps-script/reference/spreadsheet/data-source-chart)
- Source ID: `site-docs-reference-required-4`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods Method Return type Brief description cancel Data Refresh() Data Source Chart Cancels the data refresh associated with this object if it's currently running. force Refresh Data() Data Source Chart Refreshes the data of this object regardless of the current state. get Data Source() Data Source Gets the data source the object is linked to. get Status() Data Execution Status Gets the data execution status of the object. refresh Data() Data Source Chart Refreshes the data of the object. wait For Completion(timeoutInSeconds) Data Execution Status Waits until the current execution completes, timing out after the provided number of seconds.
- This example shows how to cancel a formula refresh. const spreadsheet = SpreadsheetApp . getActive (); const formula = spreadsheet . getDataSourceFormulas ()[ 0 ]; // Cancel the ongoing refresh on the formula. formula . cancelDataRefresh (); Throws an exception if the data source type is not enabled.
- Authorization Scripts that use this method require authorization with one or more of the following scopes : https://www.googleapis.com/auth/spreadsheets.currentonly https://www.googleapis.com/auth/spreadsheets forceRefreshData() Refreshes the data of this object regardless of the current state.
- Authorization Scripts that use this method require authorization with one or more of the following scopes : https://www.googleapis.com/auth/spreadsheets.currentonly https://www.googleapis.com/auth/spreadsheets getDataSource() Gets the data source the object is linked to.

