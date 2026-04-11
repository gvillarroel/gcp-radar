---
title: "DateRange \_|\_ DV360 API \_|\_ Google for Developers"
url: https://developers.google.com/display-video/api/reference/rest/v4/DateRange
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/display-video/api/reference/rest
source_metadata:
  url: https://developers.google.com/display-video/api/reference/rest/v4/DateRange
  title: "DateRange \_|\_ DV360 API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Display & Video 360 API and Structured Data Files Discord channel in the Google Advertising and Measurement Community server.
Home
Products
DV360 API
Display & Video 360 API
Reference
Send feedback
DateRange
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A date range is defined by a start date and an end date, both inclusive.
Both the start date and end date must have positive values for year, month, and day.
A Date object can represent a full date, a month and day, a year only, or a year and month.
A Date object includes integer fields for year, month, and day with specific value constraints.
JSON representation
Date
JSON representation
A date range.
JSON representation
{
"startDate" : {
object ( Date )
} ,
"endDate" : {
object ( Date )
}
}
Fields
startDate
object ( Date )
The lower bound of the date range, inclusive. Must specify a positive value for year , month , and day .
endDate
object ( Date )
The upper bound of the date range, inclusive. Must specify a positive value for year , month , and day .
Date
Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
A full date, with non-zero year, month, and day values.
A month and day, with a zero year (for example, an anniversary).
A year on its own, with a zero month and a zero day.
A year and month, with a zero day (for example, a credit card expiration date).
Related types:
google.type.TimeOfDay
google.type.DateTime
google.protobuf.Timestamp
JSON representation
{
"year" : integer ,
"month" : integer ,
"day" : integer
}
Fields
year
integer
Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
month
integer
Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
day
integer
Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-27 UTC."],[],["The Display & Video 360 API v4 uses JSON to represent date ranges and dates. A date range is defined by `startDate` and `endDate`, each being a `Date` object. A `Date` can represent a full date or partial calendar date. `Date` objects are comprised of `year`, `month`, and `day` fields; the year can be between 1 to 9999, month between 1-12 and day 1-31, or set to 0 for partial dates.\n"]]
