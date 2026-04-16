---
title: "Class DataSourceRefreshScheduleFrequency \_|\_ Apps Script \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-refresh-schedule-frequency
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-refresh-schedule-frequency
  title: "Class DataSourceRefreshScheduleFrequency \_|\_ Apps Script \_|\_ Google\
    \ for Developers"
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
Class DataSourceRefreshScheduleFrequency
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Access a refresh schedule's frequency which specifies how often and when to refresh data connected to a database.
Use DataSourceRefreshSchedule.getTimeIntervalOfNextRun() to see the next scheduled run time.
Update the frequency using DataSourceRefreshSchedule.setFrequency(newFrequency) .
Methods are available to get details like the days of the month or week, the frequency type, and the start hour of the refresh schedule.
DataSourceRefreshScheduleFrequency
Access a refresh schedule's frequency, which specifies how often and when to refresh.
Only use this class with data that's connected to a database.
To see the next time this refresh schedule is scheduled to run, use DataSourceRefreshSchedule.getTimeIntervalOfNextRun() .
To update, use DataSourceRefreshSchedule.setFrequency(newFrequency) .
Methods
Method Return type Brief description
get Days Of The Month() Integer[] Gets the days of the month as numbers (1-28) on which to refresh the data source.
get Days Of The Week() Weekday[] Gets the days of the week on which to refresh the data source.
get Frequency Type() Frequency Type Gets the frequency type.
get Start Hour() Integer Gets the start hour (as a number 0-23) of the time interval during which the refresh schedule
runs.
Detailed documentation
getDaysOfTheMonth()
Gets the days of the month as numbers (1-28) on which to refresh the data source. Only applies
if frequency type is monthly.
Return
Integer[] — The days of the month on which to refresh.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getDaysOfTheWeek()
Gets the days of the week on which to refresh the data source. Only applies if the frequency
type is weekly.
Return
Weekday[] — The days of the week on which to refresh.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getFrequencyType()
Gets the frequency type.
Return
FrequencyType — The frequency type.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getStartHour()
Gets the start hour (as a number 0-23) of the time interval during which the refresh schedule
runs. For example, if the start hour is 13 and the time interval's duration is 4 hours, then
the data source is refreshed between 1 p.m. and 5 p.m. The hour is in the timezone of the
spreadsheet.
Return
Integer — The start hour.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["This content describes the `DataSourceRefreshScheduleFrequency` class for managing data refresh schedules connected to databases. Key actions include accessing the refresh frequency, determining the next run time via `getTimeIntervalOfNextRun()`, and updating the schedule with `setFrequency()`. Information can be retrieved for monthly refreshes, with `getDaysOfTheMonth()`, or for weekly refreshes, with `getDaysOfTheWeek()`. `getFrequencyType()` retrieves the type, and `getStartHour()` the start time. The relevant authorization scopes are also specified.\n"]]
