---
title: "Date range control \_|\_ Community Connectors \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/connector/date-range
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://developers.google.com/looker-studio/connector/reference
source_metadata:
  url: https://developers.google.com/looker-studio/connector/date-range
  title: "Date range control \_|\_ Community Connectors \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Date range control
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
When fetching data requiring a date range, leverage Looker Studio's date range features by setting dateRangeRequired to true in your connector's getConfig response.
This enables Looker Studio to include start and end dates with every getData request, allowing you to filter data from external sources.
The default date range is the last 28 days excluding today, but users can apply custom ranges, and semantic type detection uses a two-day offset.
If you are working with a data source that requires a date range when fetching
data, you can take advantage of the [Looker Studio date range features].
To enable the date range control feature for your Community Connector, set
dateRangeRequired to true in your
getConfig response. Then,
Looker Studio will include a start and end date with every
getData request made to your
connector.
getData behavior when dateRangeRequired is true
When dateRangeRequired is set to true in your getConfig response, each
getData request will contain a
dateRange object with startDate and endDate parameters. The date
parameters will be in YYYY-MM-DD format. You can use these values in data
fetch requests to third-party services.
By default, the date range provided will be the last 28 days, excluding
today.
If a user applies a date range filter for a report then the date range
provided will reflect the user selection.
When Looker Studio is attempting to detect
semantic types ,
sampleExtraction is set to
true in getData requests. For these requests, the date provided for the
start and the end date is two days earlier than today.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
