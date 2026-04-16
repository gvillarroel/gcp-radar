---
title: "Class DataSourceParameter \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-parameter
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-parameter
  title: "Class DataSourceParameter \_|\_ Apps Script \_|\_ Google for Developers"
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
Class DataSourceParameter
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
DataSourceParameter allows you to access existing data source parameters, but should only be used with data connected to a database.
You can use getName() to retrieve the parameter name.
You can use getSourceCell() to get the source cell the parameter is valued based on, or null if the type is not CELL.
You can use getType() to get the parameter type.
DataSourceParameter
Access existing data source parameters.
Only use this class with data that's connected to a database.
Methods
Method Return type Brief description
get Name() String Gets the parameter name.
get Source Cell() String|null Gets the source cell the parameter is valued based on, or null if the parameter type is
not Data Source Parameter Type.CELL .
get Type() Data Source Parameter Type Gets the parameter type.
Detailed documentation
getName()
Gets the parameter name.
Return
String — The parameter name.
getSourceCell()
Gets the source cell the parameter is valued based on, or null if the parameter type is
not DataSourceParameterType.CELL .
Return
String|null — The source cell, as specified in A1 notation.
getType()
Gets the parameter type.
Return
DataSourceParameterType — The parameter type.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
