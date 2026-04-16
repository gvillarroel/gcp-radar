---
title: "Enum DataExecutionErrorCode \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/data-execution-error-code
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/data-execution-error-code
  title: "Enum DataExecutionErrorCode \_|\_ Apps Script \_|\_ Google for Developers"
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
Enum DataExecutionErrorCode
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
DataExecutionErrorCode is an enumeration of data execution error codes.
You call an enum by calling its parent class, name, and property, like SpreadsheetApp.DataExecutionErrorCode.TIME_OUT .
The available properties represent different types of data execution errors, such as timeout, too many rows/columns/cells, engine errors, invalid parameters, unsupported data types, duplicate column names, interruptions, and permission denied.
DataExecutionErrorCode
An enumeration of data execution error codes.
To call an enum, you call its parent class, name, and property. For example,
SpreadsheetApp.DataExecutionErrorCode.TIME_OUT .
Properties
Property Type Description
DATA_EXECUTION_ERROR_CODE_UNSUPPORTED Enum A data execution error code that is not supported in Apps Script.
NONE Enum The data execution has no error.
TIME_OUT Enum The data execution timed out. Please update the data source specification .
TOO_MANY_ROWS Enum The data execution returns more rows than the limit. Please update the data source specification .
TOO_MANY_COLUMNS Enum The data execution returns more columns than the limit. Please update the data source specification .
TOO_MANY_CELLS Enum The data execution returns more cells than the limit. Please update the data source specification .
ENGINE Enum Data execution engine error. Use Data Execution Status.getErrorMessage() for details.
PARAMETER_INVALID Enum Invalid data execution parameter. The source cell must exist and contain only a number or text.
Please update the data source specification .
UNSUPPORTED_DATA_TYPE Enum The data execution returns unsupported data type. Please update the data source specification .
For BigQuery, ARRAY or STRUCT type is not supported.
DUPLICATE_COLUMN_NAMES Enum The data execution returns duplicate column names. Please update the data source specification .
INTERRUPTED Enum The data execution is interrupted. Please refresh later.
OTHER Enum Other errors.
TOO_MANY_CHARS_PER_CELL Enum The data execution returns values that exceed the maximum characters allowed in a single cell.
Please update the data source specification .
DATA_NOT_FOUND Enum The database referenced by the data source is not found. Please update the data source specification .
PERMISSION_DENIED Enum The user does not have access to the database referenced by the data source. Please update the
data source specification or contact the owner of the billing
project to request access.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["`DataExecutionErrorCode` enumerates errors during data execution. Errors include `TIME_OUT`, `TOO_MANY_ROWS/COLUMNS/CELLS`, `ENGINE` failure, `PARAMETER_INVALID`, `UNSUPPORTED_DATA_TYPE`, `DUPLICATE_COLUMN_NAMES`, `INTERRUPTED`, `OTHER`, `TOO_MANY_CHARS_PER_CELL`, `DATA_NOT_FOUND`, `PERMISSION_DENIED`, `NONE`, and `DATA_EXECUTION_ERROR_CODE_UNSUPPORTED`. To use an error code, use `SpreadsheetApp.DataExecutionErrorCode.ERROR_NAME`. Several errors suggest updating the data source specification. The `ENGINE` error uses `DataExecutionStatus.getErrorMessage()` for details.\n"]]
