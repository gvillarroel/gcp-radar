---
title: "QueryTimeRange \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/QueryTimeRange
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/QueryTimeRange
  title: "QueryTimeRange \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
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
QueryTimeRange
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Period
A time range for which error group data shall be displayed. Query time ranges end at 'now'. When longer time ranges are selected, the resolution of the data decreases. The description of each time range below indicates the suggested minimum timed count duration for that range.
Requests might be rejected or the resulting timed count durations might be adjusted for lower durations.
JSON representation
{
"period" : enum ( Period )
}
Fields
period
enum ( Period )
Restricts the query to the specified time range.
Period
The supported time ranges.
Enums
PERIOD_UNSPECIFIED
Do not use.
PERIOD_1_HOUR
Retrieve data for the last hour. Recommended minimum timed count duration: 1 min.
PERIOD_6_HOURS
Retrieve data for the last 6 hours. Recommended minimum timed count duration: 10 min.
PERIOD_1_DAY
Retrieve data for the last day. Recommended minimum timed count duration: 1 hour.
PERIOD_1_WEEK
Retrieve data for the last week. Recommended minimum timed count duration: 6 hours.
PERIOD_30_DAYS
Retrieve data for the last 30 days. Recommended minimum timed count duration: 1 day.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-14 UTC."],[],[]]
