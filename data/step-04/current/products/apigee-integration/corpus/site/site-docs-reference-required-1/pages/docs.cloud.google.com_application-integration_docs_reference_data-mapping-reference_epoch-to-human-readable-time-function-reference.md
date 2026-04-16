---
title: "EPOCH_TO_HUMAN_READABLE_TIME function \_|\_ Application Integration \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/reference/data-mapping-reference/epoch-to-human-readable-time-function-reference
knowledge_key: corpus
source_id: site-docs-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/reference/data-mapping-reference/epoch-to-human-readable-time-function-reference
  title: "EPOCH_TO_HUMAN_READABLE_TIME function \_|\_ Application Integration \_|\_\
    \ Google Cloud Documentation"
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
EPOCH_TO_HUMAN_READABLE_TIME function
EPOCH_TO_HUMAN_READABLE_TIME function
Function Name
Description
Usage
Input parameter
Return value
EPOCH_TO_HUMAN_READABLE_TIME
Converts Unix epoch time (in milliseconds) to human-readable time format.
EPOCH_TO_HUMAN_READABLE_TIME (value, value)
This function takes the following arguments:
First argument (string): Timestamp format pattern such as hh:mm:ss .
Second argument (string): Target timezone.
Valid values include UTC , UTC with offset, GMT , and other time zone names.
Only the values UTC and GMT can be specified in the short form. For any other time zone, you must specify the full time zone name. For example, if you want to specify the "Australia/Melbourne" time zone, you must specify Australia/Melbourne as the value and not AEDT .
For a full list of timezone names, see List of tz database time zones .
Converted timestamp in human-readable format.
Supported data type
The EPOCH_TO_HUMAN_READABLE_TIME function supports the following data type:
Integer
Example: Convert an Unix epoch time (in milliseconds) to human-readable format.
Sample data: $var1$ = 1667494335011
Usage 1: $var1$.EPOCH_TO_HUMAN_READABLE_TIME("EEE, d MMM yyyy HH:mm:ss z","UTC")
Convert var1 to a human-readable timestamp of format EEE, d MMM yyyy HH:mm:ss z in UTC timezone.
Output: Thu, 3 Nov 2022 16:52:15 UTC
Usage 2: $var1$.EPOCH_TO_HUMAN_READABLE_TIME("EEE, yy-MM-dd HH:mm:ss,SSS","GMT")
Convert var1 to a human-readable timestamp of format EEE, yy-MM-dd HH:mm:ss,SSS in GMT timezone.
Output: Thu, 22-11-03 16:52:15,011
Usage 3: $var1$.EPOCH_TO_HUMAN_READABLE_TIME("EEE, yy-MM-dd HH:mm:ss,SSS ZZZZ","America/Los_Angeles")
Convert var1 to a human-readable timestamp of format EEE, yy-MM-dd HH:mm:ss,SSS ZZZZ in America/Los_Angeles timezone.
Output: Thu, 22-11-03 09:52:15,011 GMT-07:00
Recommendation
Learn how to add and configure a Data Mapping task
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
