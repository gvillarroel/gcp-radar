---
title: "APPEND function \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/reference/data-mapping-reference/append-function-reference
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/reference/data-mapping-reference/append-function-reference
  title: "APPEND function \_|\_ Application Integration \_|\_ Google Cloud Documentation"
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
APPEND function
APPEND function
Function Name
Description
Usage
Input parameter
Return value
APPEND
Appends the specified value to an array.
APPEND(value)
Value to append. The data type of the value to append should match the data type of
the array. For example, for a Boolean array you can append only
True or False .
Array with the appended value.
Supported data type
The APPEND function supports the following data types:
Boolean array
Double array
Integer array
String array
Example 1: Append a value to an integer array
Sample data : $var1$ = {3,6,8,1}
Usage : $var1$.APPEND(7)
Append the value 7 to var1.
Output : {3,6,8,1,7}
Example 2: Append a value to a Boolean array.
Sample data : $var1$ = {True,False,True}
Usage : $var1$.APPEND(True)
Append the value True to var1.
Output : {True,False,True,True}
Example 3: Append a value to a string array
Sample data : $var1$ = {"Hello","Apigee"}
Usage : $var1$.APPEND("Integrations")
Append the word Integrations to var1.
Output : {"Hello","Apigee","Integrations"}
Recommendation
Learn how to add and configure a Data Mapping task
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
