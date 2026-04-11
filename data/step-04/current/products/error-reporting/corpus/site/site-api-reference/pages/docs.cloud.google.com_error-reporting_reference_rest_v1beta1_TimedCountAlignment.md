---
title: "TimedCountAlignment \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/TimedCountAlignment
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/TimedCountAlignment
  title: "TimedCountAlignment \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Cloud Observability
Error Reporting
Reference
Send feedback
TimedCountAlignment
Stay organized with collections
Save and categorize content based on your preferences.
Specifies how the time periods of error group counts are aligned.
Enums
ERROR_COUNT_ALIGNMENT_UNSPECIFIED
No alignment specified.
ALIGNMENT_EQUAL_ROUNDED
The time periods shall be consecutive, have width equal to the requested duration, and be aligned at the alignmentTime provided in the request.
The alignmentTime does not have to be inside the query period but even if it is outside, only time periods are returned which overlap with the query period.
A rounded alignment will typically result in a different size of the first or the last time period.
ALIGNMENT_EQUAL_AT_END
The time periods shall be consecutive, have width equal to the requested duration, and be aligned at the end of the requested time period. This can result in a different size of the first time period.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-14 UTC."],[],[]]
