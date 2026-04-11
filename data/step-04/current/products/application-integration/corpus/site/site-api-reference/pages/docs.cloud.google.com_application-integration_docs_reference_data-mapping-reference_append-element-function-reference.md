---
title: "APPEND_ELEMENT function \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/reference/data-mapping-reference/append-element-function-reference
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/reference/data-mapping-reference/append-element-function-reference
  title: "APPEND_ELEMENT function \_|\_ Application Integration \_|\_ Google Cloud\
    \ Documentation"
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
APPEND_ELEMENT function
APPEND_ELEMENT function
Function Name
Description
Usage
Input parameter
Return value
APPEND_ELEMENT
Appends an element to a JSON array.
APPEND_ELEMENT(value)
Value to append.
JSON array with the appended element.
Supported data type
The APPEND_ELEMENT function supports the following data type:
JSON
Example: Append an element to a JSON array
Sample data : $var1$ = ["first", "second", "third", "fourth"]
Usage : $var1$.APPEND_ELEMENT("fifth")
Append element fifth to var1 .
Output : ["first", "second", "third", "fourth", "fifth"] .
Recommendation
Learn how to add and configure a Data Mapping task
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
