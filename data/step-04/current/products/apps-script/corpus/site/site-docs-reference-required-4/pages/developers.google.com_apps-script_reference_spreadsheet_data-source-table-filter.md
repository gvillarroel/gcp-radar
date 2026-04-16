---
title: "Class DataSourceTableFilter \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-table-filter
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-table-filter
  title: "Class DataSourceTableFilter \_|\_ Apps Script \_|\_ Google for Developers"
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
Class DataSourceTableFilter
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Access and modify existing data source table filters using the DataSourceTableFilter class.
This class is exclusively for use with data connected to a database.
Methods allow you to get the associated data source column and table, retrieve or set the filter criteria, and remove the filter.
DataSourceTableFilter
Access and modify an existing data source table filter. To create a new data source table filter,
use DataSourceTable.addFilter(columnName, filterCriteria) .
Only use this class with data that's connected to a database.
Methods
Method Return type Brief description
get Data Source Column() Data Source Column Returns the data source column this filter applies to.
get Data Source Table() Data Source Table Returns the Data Source Table that this filter belongs to.
get Filter Criteria() Filter Criteria Returns the filter criteria for this filter.
remove() void Removes this filter from the data source object.
set Filter Criteria(filterCriteria) Data Source Table Filter Sets the filter criteria for this filter.
Detailed documentation
getDataSourceColumn()
Returns the data source column this filter applies to.
Return
DataSourceColumn — The data source column.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getDataSourceTable()
Returns the DataSourceTable that this filter belongs to.
Return
DataSourceTable — The data source table, to which this filter belongs.
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
DataSourceTableFilter — The filter for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
