---
title: "Class DataSourceRefreshSchedule \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-refresh-schedule
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-refresh-schedule
  title: "Class DataSourceRefreshSchedule \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
Class DataSourceRefreshSchedule
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Use DataSourceRefreshSchedule to access and modify existing refresh schedules.
This class should only be used with data that is connected to a database.
Methods are available to get the refresh schedule frequency, scope, time interval of the next run, and whether the schedule is enabled.
All methods require specific authorization scopes to be used.
DataSourceRefreshSchedule
Access and modify an existing refresh schedule. To get all refresh schedules, see Spreadsheet.getDataSourceRefreshSchedules() .
Only use this class with data that's connected to a database.
Methods
Method Return type Brief description
get Frequency() Data Source Refresh Schedule Frequency Gets the refresh schedule frequency, which specifies how often and when to refresh.
get Scope() Data Source Refresh Scope Gets the scope of this refresh schedule.
get Time Interval Of Next Run() Time Interval Gets the time window of the next run of this refresh schedule.
is Enabled() Boolean Determines whether this refresh schedule is enabled.
Detailed documentation
getFrequency()
Gets the refresh schedule frequency, which specifies how often and when to refresh.
Return
DataSourceRefreshScheduleFrequency — The refresh schedule frequency.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getScope()
Gets the scope of this refresh schedule.
Return
DataSourceRefreshScope — The refresh scope.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getTimeIntervalOfNextRun()
Gets the time window of the next run of this refresh schedule. Only applies if this refresh
schedule is enabled.
Return
TimeInterval — The time window of the next run.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
isEnabled()
Determines whether this refresh schedule is enabled.
Return
Boolean — Whether this refresh schedule is enabled.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
