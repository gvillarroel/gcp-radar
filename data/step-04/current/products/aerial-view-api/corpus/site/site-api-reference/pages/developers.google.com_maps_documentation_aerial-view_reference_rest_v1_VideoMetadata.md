---
title: "VideoMetadata \_|\_ Google Maps Aerial View API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/aerial-view/reference/rest/v1/VideoMetadata
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/aerial-view/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/aerial-view/reference/rest/v1/VideoMetadata
  title: "VideoMetadata \_|\_ Google Maps Aerial View API \_|\_ Google for Developers"
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
VideoMetadata
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
VideoMetadata objects contain information about a video, including its ID, capture date, duration, and rendering state.
The videoId is the recommended way to retrieve a specific video.
captureDate is provided at a month-level granularity and represents when the imagery for the video was captured.
Video durations are expressed in seconds with up to nine fractional digits.
Dates can represent a full or partial calendar date (year, month, and day), with 0 values indicating the absence of a specific component.
JSON representation
Date
JSON representation
Contains metadata about a video, such as its videoId and duration.
JSON representation
{
"videoId" : string ,
"captureDate" : {
object ( Date )
} ,
"duration" : string ,
"state" : enum ( State )
}
Fields
videoId
string
Output only. An ID for the video, and the recommended way to retrieve a video.
captureDate
object ( Date )
Output only. The date at which the imagery used in the video was captured. This will be at a month-level granularity.
duration
string ( Duration format)
Output only. The length of the video.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
state
enum ( State )
Output only. Current state of the render request.
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
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["This describes video metadata including a `videoId`, `captureDate`, `duration`, and `state`. The `videoId` is a unique identifier. The `captureDate`, represented as a `Date` object, indicates when the imagery was captured, with month-level precision. `duration` specifies the video's length in seconds. `state` shows the current rendering status. The `Date` object includes `year`, `month`, and `day` integers, allowing for varying date granularity.\n"]]
