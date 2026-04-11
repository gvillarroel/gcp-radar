---
title: "EQUALS function \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/reference/data-mapping-reference/equals-function-reference
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/reference/data-mapping-reference/equals-function-reference
  title: "EQUALS function \_|\_ Application Integration \_|\_ Google Cloud Documentation"
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
EQUALS function
EQUALS function
Function Name
Description
Usage
Input parameter
Return value
EQUALS
Compares the specified value with the existing value.
EQUALS(value)
Value to compare.
A boolean. Returns TRUE if the specified value matches the existing value
and FALSE otherwise.
Supported data type
The EQUALS function supports the following data types:
Boolean
Double
Integer
String
Example 1: Compare two strings
Sample data : $var1$ = "Apigee Integrations"
Usage : $var1$.EQUALS("Apigee Integrations")
Check if var1 equals "Apigee Integrations".
Output : TRUE
Example 2: Compare two integers
Sample data : $var1$ = 34
Usage : $var1$.EQUALS(23)
Check if var1 equals 23.
Output : FALSE
Recommendation
Learn how to add and configure a Data Mapping task
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
