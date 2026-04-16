---
title: "Function: time.parse \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/stdlib/time/parse
knowledge_key: corpus
source_id: site-api-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/stdlib/time/parse
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/stdlib/time/parse
  title: "Function: time.parse \_|\_ Workflows \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Reference
Send feedback
Function: time.parse
Stay organized with collections
Save and categorize content based on your preferences.
Parses the given RFC 3339-compatible string into a timestamp.
Arguments
Arguments
value
string
A string formatted according to the subset of ISO 8601 defined by RFC 3339 section 5.6 , with up to a microsecond precision.
Returns
The timestamp corresponding to the string, as a floating point number in
seconds since epoch.
Raised exceptions
Exceptions
TypeError
If time is not a string.
ValueError
If time is not compatible with RFC 3339 section 5.6 .
Examples
# Parse given RFC 3339-compatible string into a timestamp
# For example, returns `1715169660`
- returnStep :
return : ${time.parse("2024-05-08T12:01:00.000000Z")}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
