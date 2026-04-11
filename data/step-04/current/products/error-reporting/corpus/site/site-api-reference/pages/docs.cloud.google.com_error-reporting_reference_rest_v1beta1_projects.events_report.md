---
title: "Method: projects.events.report \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/projects.events/report
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/projects.events/report
  title: "Method: projects.events.report \_|\_ Error Reporting \_|\_ Google Cloud\
    \ Documentation"
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
Method: projects.events.report
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
ReportedErrorEvent
JSON representation
Try it!
Report an individual error event and record the event to a log.
This endpoint accepts either an OAuth token, or an API key for authentication. To use an API key, append it to the URL as the value of a key parameter. For example:
POST
https://clouderrorreporting.googleapis.com/v1beta1/{projectName}/events:report?key=123ABC456
Note: Error Reporting is a service built on Cloud Logging and can analyze log entries when all of the following are true:
Customer-managed encryption keys (CMEK) are disabled on the log bucket.
The log bucket satisfies one of the following:
The log bucket is stored in the same project where the logs originated.
The logs were routed to a project, and then that project stored those logs in a log bucket that it owns.
HTTP request
POST https://clouderrorreporting.googleapis.com/v1beta1/{projectName=projects/*}/events:report
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
projectName
string
Required. The resource name of the Google Cloud Platform project. Written as projects/{projectId} , where {projectId} is the Google Cloud Platform project ID .
Example: // projects/my-project-123 .
Request body
The request body contains an instance of ReportedErrorEvent .
Response body
If successful, the response body is empty.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/stackdriver-integration
For more information, see the Authentication Overview .
ReportedErrorEvent
An error event which is reported to the Error Reporting system.
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
Optional. Time when the event occurred. If not provided, the time when the event was received by the Error Reporting system is used. If provided, the time must not exceed the logs retention period in the past, or be more than 24 hours in the future. If an invalid time is provided, then an error is returned.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
serviceContext
object ( ServiceContext )
Required. The service context in which this error has occurred.
message
string
Required. The error message. If no context.reportLocation is provided, the message must contain a header (typically consisting of the exception type name and an error message) and an exception stack trace in one of the supported programming languages and formats. Supported languages are Java, Python, JavaScript, Ruby, C#, PHP, and Go. Supported stack trace formats are:
Java : Must be the return value of Throwable.printStackTrace() .
Python : Must be the return value of traceback.format_exc() .
JavaScript : Must be the value of error.stack as returned by V8.
Ruby : Must contain frames returned by Exception.backtrace .
C# : Must be the return value of Exception.ToString() .
PHP : Must be prefixed with "PHP (Notice|Parse error|Fatal
error|Warning): " and contain the result of (string)$exception .
Go : Must be the return value of debug.Stack() .
context
object ( ErrorContext )
Optional. A description of the context in which the error occurred.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-12 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-12 UTC."],[],[]]
