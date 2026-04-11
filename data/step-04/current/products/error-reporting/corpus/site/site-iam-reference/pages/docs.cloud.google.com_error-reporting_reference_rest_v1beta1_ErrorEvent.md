---
title: "ErrorEvent \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ErrorEvent
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/reference
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ErrorEvent
  title: "ErrorEvent \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
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
ErrorEvent
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
An error event which is returned by the Error Reporting system.
JSON representation
{
"eventTime" : string ,
"serviceContext" : {
object ( ServiceContext )
} ,
"message" : string ,
"context" : {
object ( ErrorContext )
}
}
Fields
eventTime
string ( Timestamp format)
Time when the event occurred as provided in the error report. If the report did not contain a timestamp, the time the error was received by the Error Reporting system is used.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
serviceContext
object ( ServiceContext )
The ServiceContext for which this error was reported.
message
string
The stack trace that was reported or logged by the service.
context
object ( ErrorContext )
Data about the context in which the error occurred.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-12 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-12 UTC."],[],[]]
