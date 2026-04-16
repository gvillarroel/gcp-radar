---
title: "Class DataSourceSheetFilter \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet-filter
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet-filter
  title: "Class DataSourceSheetFilter \_|\_ Apps Script \_|\_ Google for Developers"
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
Class DataSourceSheetFilter
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Access and modify existing data source sheet filters; to create new filters, use DataSourceSheet.addFilter() .
This class should only be used with data connected to a database.
Methods are available to get the applied data source column, the parent data source sheet, and the filter criteria.
You can remove or set the filter criteria for the filter.
DataSourceSheetFilter
Access and modify an existing data source sheet filter. To create a new data source sheet filter,
use DataSourceSheet.addFilter(columnName, filterCriteria) .
Only use this class with data that's connected to a database.
Methods
Method Return type Brief description
get Data Source Column() Data Source Column Returns the data source column this filter applies to.
get Data Source Sheet() Data Source Sheet Returns the Data Source Sheet that this filter belongs to.
get Filter Criteria() Filter Criteria Returns the filter criteria for this filter.
remove() void Removes this filter from the data source object.
set Filter Criteria(filterCriteria) Data Source Sheet Filter Sets the filter criteria for this filter.
Detailed documentation
getDataSourceColumn()
Returns the data source column this filter applies to.
Return
DataSourceColumn — The data source column.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getDataSourceSheet()
Returns the DataSourceSheet that this filter belongs to.
Return
DataSourceSheet — The data source sheet, to which this filter belongs.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getFilterCriteria()
Returns the filter criteria for this filter.
Return
FilterCriteria — The filter criteria for this filter.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
remove()
Removes this filter from the data source object.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setFilterCriteria(filterCriteria)
Sets the filter criteria for this filter.
Parameters
Name Type Description
filter Criteria Filter Criteria The filter criteria to set.
Return
DataSourceSheetFilter — The filter for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["`DataSourceSheetFilter` allows interaction with existing filters on database-connected data. Key actions include: retrieving the associated data source column, sheet, and filter criteria using `getDataSourceColumn()`, `getDataSourceSheet()`, and `getFilterCriteria()`, respectively. Filters can be removed with `remove()` or modified using `setFilterCriteria()`. Creating new filters requires `DataSourceSheet.addFilter`. All methods necessitate specific authorization scopes related to spreadsheets.\n"]]
