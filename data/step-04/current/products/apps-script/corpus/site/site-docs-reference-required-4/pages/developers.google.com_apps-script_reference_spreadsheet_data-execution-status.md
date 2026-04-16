---
title: "Class DataExecutionStatus \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/data-execution-status
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/data-execution-status
  title: "Class DataExecutionStatus \_|\_ Apps Script \_|\_ Google for Developers"
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
Class DataExecutionStatus
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The DataExecutionStatus object provides information about the status of a data execution.
It includes methods to retrieve the error code, error message, execution state, last execution time, and last refreshed time.
You can also check if the data from the last successful execution was truncated using the isTruncated() method.
DataExecutionStatus
The data execution status.
Methods
Method Return type Brief description
get Error Code() Data Execution Error Code Gets the error code of the data execution.
get Error Message() String Gets the error message of the data execution.
get Execution State() Data Execution State Gets the state of the data execution.
get Last Execution Time() Date|null Gets the time the last data execution completed regardless of the execution state.
get Last Refreshed Time() Date|null Gets the time the data last successfully refreshed.
is Truncated() Boolean Returns true if the data from last successful execution is truncated, or false
otherwise.
Detailed documentation
getErrorCode()
Gets the error code of the data execution.
Return
DataExecutionErrorCode — The error code.
getErrorMessage()
Gets the error message of the data execution. The message may be empty.
Return
String — The error message.
getExecutionState()
Gets the state of the data execution.
Return
DataExecutionState — The execution state.
getLastExecutionTime()
Gets the time the last data execution completed regardless of the execution state.
Return
Date|null — The last execution time, or null if there has never been a data execution.
getLastRefreshedTime()
Gets the time the data last successfully refreshed.
Return
Date|null — The last successfully refreshed time, or null if there is never a successful
data execution.
isTruncated()
Returns true if the data from last successful execution is truncated, or false
otherwise.
Return
Boolean — True if the data from execution is truncated, or false otherwise.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["The `DataExecutionStatus` provides information about data execution. It allows retrieving the error code and message, alongside the execution state. It also details the last execution time and the last successful refresh time. Additionally, it indicates whether the data from the last successful execution was truncated. The class provide methods for accessing those information like `getErrorCode()`, `getErrorMessage()`, `getExecutionState()`, `getLastExecutionTime()`, `getLastRefreshedTime()` and `isTruncated()`.\n"]]
