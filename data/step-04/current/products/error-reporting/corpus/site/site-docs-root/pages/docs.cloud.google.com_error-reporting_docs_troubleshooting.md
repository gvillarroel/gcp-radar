---
title: "Troubleshoot \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/docs/troubleshooting
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/docs
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/docs/troubleshooting
  title: "Troubleshoot \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Error Reporting
Guides
Send feedback
Troubleshoot
Stay organized with collections
Save and categorize content based on your preferences.
This document describes common troubleshooting scenarios for
Error Reporting.
Error events sent to the Error Reporting API aren't shown
You send error events to your Google Cloud project by using the
Error Reporting API. However, those events aren't shown on the
Error Reporting page.
To resolve this issue, do the following:
Make sure that the Error Reporting API is enabled.
Enable the Error Reporting API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Open the Cloud Shell and use the Google Cloud CLI to verify that you can
send error events to your project:
Run the following command:
gcloud beta error-reporting events report --service Manual --service-version test1 \
--message "java.lang.TestError: msg
at com.example.TestClass.test(TestClass.java:51)
at com.example.AnotherClass(AnotherClass.java:25)"
Go to the Error Reporting page and
verify that the page displays an error titled TestError: msg .
Go to Error Reporting
Go to the Logs Explorer page and search your log entries for
TestError . The log entry is created automatically.
Go to Logs Explorer
Verify that your application is sending the error event to the
report endpoint, and that the application is formatting
the request body as a ReportedErrorEvent object.
You should also verify that log entries are being created.
When you use the Error Reporting API, log entries with properly
formatted error messages are automatically generated and written to
Cloud Logging . These log entries are written to a log
whose logName is formatted as follows:
projects/ PROJECT_ID /clouderrorreporting.googleapis.com%2Freported_errors
Error events are shown but the Error Reporting API is disabled
You disabled the Error Reporting API. However, the Error Reporting page
of the Google Cloud console is showing error events.
This is expected behavior. Error events are created in response to
Error Reporting API calls made to the report endpoint.
However, error events are also inferred when Error Reporting can
analyze your log data.
Error events aren't inferred from log data
You expect Error Reporting to scan your log data and infer
error events. However, the Error Reporting page doesn't show any
error events even though log entries record error data.
To resolve this situation, do the following:
Verify that Error Reporting can analyze your log entries.
Error Reporting is a global service built on
Cloud Logging and can analyze log entries when all of the following are true:
Assured workloads are disabled. For more information, see Overview of Assured Workloads .
Customer-managed encryption keys (CMEK)
are disabled on all log buckets that store the log entry. Error Reporting can't
store log entries in log buckets that have CMEK enabled. For information about how to
determine the CMEK configuration for a log bucket, see
Verify key enablement .
The log bucket satisfies one of the following:
The log bucket is stored in the same project where the log entries originated.
The log entries were routed to a project, and then that project stored those log entries
in a log bucket that it owns.
To see a list of sinks you have configured, run the following command:
gcloud logging sinks list
The command returns an output similar to the following:
NAME DESTINATION FILTER
_Default logging.googleapis.com/projects/my-team-project/locations/global/buckets/_Default NOT LOG_ID("cloudaudit.googleapis.com/activity") AND NOT LOG_ID("externalaudit.googleapis.com/activity") AND NOT LOG_ID("cloudaudit.googleapis.com/system_event") AND NOT LOG_ID("externalaudit.googleapis.com/system_event") AND NOT LOG_ID("cloudaudit.googleapis.com/access_transparency") AND NOT LOG_ID("externalaudit.googleapis.com/access_transparency")
_Required logging.googleapis.com/projects/my-team-project/locations/global/buckets/_Required LOG_ID("cloudaudit.googleapis.com/activity") OR LOG_ID("externalaudit.googleapis.com/activity") OR LOG_ID("cloudaudit.googleapis.com/system_event") OR LOG_ID("externalaudit.googleapis.com/system_event") OR LOG_ID("cloudaudit.googleapis.com/access_transparency") OR LOG_ID("externalaudit.googleapis.com/access_transparency")
logs-from-samples logging.googleapis.com/projects/my-team-project/locations/global/buckets/sample-bucket (empty filter)
regional_logs logging.googleapis.com/projects/my-team-project/locations/europe-west1/buckets/bucket_for_regional_logs (empty filter)
test-logs logging.googleapis.com/projects/team-b-project/locations/global/buckets/test-bucket (empty filter)
In this example, the source Google Cloud project of the log entries is
my-team-project . As a result:
Error Reporting can analyze the log entries routed by the
_Default ,
_Required , and logs-from-samples sinks because the log bucket is
stored by the same project that routes the log entries.
Error Reporting can't analyze the log entries stored in the log
bucket named test-logs because the sink in my-team-project routes the
log entries to a log bucket in a different project.
Use the Google Cloud CLI to verify that you can write log entries that
generate an error event.
Run the following command:
gcloud logging write --payload-type = json test-errors-log \
'{"serviceContext":
{"service": "manual-testing"},
"message": "Test Error\n at /test.js:42:42",
"context": {"httpRequest":
{"url": "/test","method": "GET","responseStatusCode": 500}}}'
Go to the Logs Explorer page and search your log entries for
Test Error .
Go to Logs Explorer
This log entry is generated by the gcloud CLI. If the
log entry isn't linked with an error group, wait for about
a minute and refresh the page. Error events are detected after
a log entry is ingested.
Go to the Error Reporting page and verify that the page displays
an error titled Test Error .
Go to Error Reporting
Go to the Logs Explorer page and verify that your application is writing
log entries that have the
expected format .
Go to Logs Explorer
Locate a log entry that contains exception data sent from your application
and verify the format. If the format isn't correct, then update your
application.
A log entry contains a stack trace but no error event is created
You generate a log entry whose message field contains a stack trace.
However, the Error Reporting page doesn't list a corresponding error event.
To resolve this failure, try the following:
Make sure that the jsonPayload doesn't include a stack_trace or exception
field. When those fields are present, the message field isn't evaluated.
Make sure that the structure of the stack trace is in
one of the supported programming language formats .
The stack trace isn't captured by Error Reporting
when an unsupported format is used.
For more information, see
Format a log entry to report error events .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
