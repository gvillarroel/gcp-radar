---
title: "Package google.type \_|\_ Google Maps Aerial View API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/aerial-view/reference/rpc/google.type
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/aerial-view/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/aerial-view/reference/rpc/google.type
  title: "Package google.type \_|\_ Google Maps Aerial View API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Aerial View API
Reference
Send feedback
Package google.type
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
google.type.Date represents a calendar date, supporting full dates, month/day, year only, or year/month combinations.
It uses the Gregorian Calendar and can represent dates with or without specific year, month, and day values.
google.type.Date has three integer fields: year , month , and day , with specific value ranges and constraints for valid date representation.
Related types include google.type.TimeOfDay , google.type.DateTime , and google.protobuf.Timestamp for different time and date representations.
Index
Date (message)
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
Fields
year
int32
Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
month
int32
Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
day
int32
Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
