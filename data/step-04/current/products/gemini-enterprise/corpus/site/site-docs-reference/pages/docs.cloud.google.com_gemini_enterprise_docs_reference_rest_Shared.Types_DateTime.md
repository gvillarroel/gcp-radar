---
title: "DateTime \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/DateTime
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/DateTime
  title: "DateTime \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise. For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .
Home
Documentation
AI and ML
Gemini Enterprise
Reference
Send feedback
DateTime
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
TimeZone
JSON representation
Represents civil time (or occasionally physical time).
This type can represent a civil time in one of a few possible ways:
When utcOffset is set and timeZone is unset: a civil time on a calendar day with a particular offset from UTC.
When timeZone is set and utcOffset is unset: a civil time on a calendar day in a particular time zone.
When neither timeZone nor utcOffset is set: a civil time on a calendar day in local time.
The date is relative to the Proleptic Gregorian Calendar.
If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively.
This type may also be used to represent a physical time if all the date and time fields are set and either case of the time_offset oneof is set. Consider using timestamp message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field.
This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.
JSON representation
{
"year" : integer ,
"month" : integer ,
"day" : integer ,
"hours" : integer ,
"minutes" : integer ,
"seconds" : integer ,
"nanos" : integer ,
// Union field time_offset can be only one of the following:
"utcOffset" : string ,
"timeZone" : {
object ( TimeZone )
}
// End of list of possible types for union field time_offset .
}
Fields
year
integer
Optional. year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
month
integer
Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
day
integer
Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
hours
integer
Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
minutes
integer
Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
seconds
integer
Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
nanos
integer
Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
Union field time_offset . Optional. Specifies either the UTC offset or the time zone of the DateTime. Choose carefully between them, considering that time zone data may change in the future (for example, a country modifies their DST start/end dates, and future DateTimes in the affected range had already been stored). If omitted, the DateTime is considered to be in local time. time_offset can be only one of the following:
utcOffset
string ( Duration format)
UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
timeZone
object ( TimeZone )
time zone.
TimeZone
Represents a time zone from the IANA time Zone Database .
JSON representation
{
"id" : string ,
"version" : string
}
Fields
id
string
IANA time Zone Database time zone. For example "America/New_York".
version
string
Optional. IANA time Zone Database version number. For example "2019a".
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-08 UTC."],[],[]]
