---
title: "ExecutionResponse \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionResponse
  title: "ExecutionResponse \_|\_ Apps Script \_|\_ Google for Developers"
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
ExecutionResponse
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
ExecutionResponse represents the return value of a function executed using the Apps Script API.
Upon successful script function return, the response body's response field holds the ExecutionResponse object.
The result field within ExecutionResponse contains the script function's return value in a specific Value format.
Only primitive types like string, number, array, object, or boolean can be returned by functions called using the Apps Script API.
JSON representation
An object that provides the return value of a function executed using the Apps Script API. If the script function returns successfully, the response body's response field contains this ExecutionResponse object.
JSON representation
{
"result" : value
}
Fields
result
value ( Value format)
The return value of the script function. The type matches the object type returned in Apps Script. Functions called using the Apps Script API cannot return Apps Script-specific objects (such as a Document or a Calendar ); they can only return primitive types such as a string , number , array , object , or boolean .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
