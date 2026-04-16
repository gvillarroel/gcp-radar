---
title: "APPEND_ALL function \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/reference/data-mapping-reference/append-all-function-reference
knowledge_key: corpus
source_id: site-docs-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/reference/data-mapping-reference/append-all-function-reference
  title: "APPEND_ALL function \_|\_ Application Integration \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Integration
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
APPEND_ALL function
APPEND_ALL function
Function Name
Description
Usage
Input parameter
Return value
APPEND_ALL
Appends all the specified values to an array.
APPEND_ALL(value1, value2, ...)
Values to append. The data type of the value to append should match the data
type of the array. For example, for a String array you can append only
string values.
Array with the appended values.
Supported data types
The APPEND_ALL function supports the following data types:
Boolean array
Double array
Integer array
String array
Example 1: Append values to an integer array
Sample data : $var1$ = {3,6,8,1}
Usage : $var1$.APPEND_ALL(7,9,15)
Append values 7, 9, and 15 to var1.
Output : {3,6,8,1,7,9,15}
Example 2: Append values to a Boolean array
Sample data : $var1$ = {True,False,True}
Usage : $var1$.APPEND_ALL(False,True)
Append the values False and True to var1.
Output : {True,False,True,False,True}
Example 3: Append values to a String array
Sample data : $var1$ = {"Hello","Apigee"}
Usage : $var1$.APPEND_ALL("Integrations","Test")
Append the words Integrations and Test to var1.
Output : {"Hello","Apigee","Integrations","Test"}
Recommendation
Learn how to add and configure a Data Mapping task
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
