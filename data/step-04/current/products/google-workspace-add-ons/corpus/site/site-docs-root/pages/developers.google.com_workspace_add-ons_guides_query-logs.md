---
title: "Query error logs for Google Workspace add-ons \_|\_ Google for Developers"
url: https://developers.google.com/workspace/add-ons/guides/query-logs
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/overview
source_metadata:
  url: https://developers.google.com/workspace/add-ons/guides/query-logs
  title: "Query error logs for Google Workspace add-ons \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Add-ons
Send feedback
Query error logs for Google Workspace add-ons
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Workspace add-ons log errors to Cloud Logs Explorer, providing detailed error messages for troubleshooting.
To view these logs, enable the Cloud Logging API, publish your add-on, and then query the logs using the provided instructions and query.
You can control error logging behavior through the exceptionLogging setting in your add-on's manifest file.
Remember that only errors are logged, messages are in English, and Cloud Logging usage may incur costs.
When a published Google Workspace add-on returns an error, the
add-on interface returns a generic message of
"Something went wrong when executing the add-on." However, these errors are
logged to Cloud Logs Explorer .
Note: For Apps Script, if your
add-on is deployed as a test, then
errors are reported in both the Cloud Logs Explorer and in the
add-on interface.
For example, an add-on test deployment might display an
error message like this in its interface: TypeError:
card.INVALIDFUNCTIONNAME
is not a function [line: 33, function: getContextualAddOn, file:
GetContextualAddOn] .
Although error messages like this are helpful, additional information is
available in the Logs Explorer. As a best practice, query the error logs for
more information. For further information about testing
add-on deployments, refer to
Test and debug Google Workspace add-ons .
This guide describes how to query add-on error logs in
Cloud Logs Explorer, so you can:
Learn if users encounter errors.
See how often errors occur, and which are most frequent.
Read descriptive error messages that help you fix them.
Prerequisites
Before querying add-on error logs:
Enable the "Cloud Logging API" in the add-on's
Google Cloud project. To enable an API, refer to
Create a Cloud project and enable the API .
Publish the add-on on Google Workspace Marketplace.
To publish an add-on on the
Marketplace, refer to
Publish an app .
Query add-on error logs
To get logs for an add-on:
Open the Google Cloud console .
Next to "Google Cloud Platform," click the Down arrow arrow_drop_down and select the
add-on project.
In the top-left corner, click Menu menu
> Logging . The Logs Explorer opens.
For add-on error logs, in the query builder, enter
the following query:
severity > = ERROR
protoPayload . serviceName = "gsuiteaddons.googleapis.com"
To see recent errors, click Run query . Or, to see errors as they
occur, click Stream logs . Add-ons error logs appear in the
"Query results" pane.
For further information about Cloud Logs Explorer and writing queries, refer to
the following:
Use the Logs Explorer
Build queries
Enable or disable error logging
By default, error logging is enabled. When error logging is enabled, the
manifest file
has the following:
"exceptionLogging": "STACKDRIVER",
To disable error logging, replace
"exceptionLogging": "STACKDRIVER", with the following line in the
manifest file:
// Disable error logging
"exceptionLogging" : "NONE"
To re-enable error logging, replace "exceptionLogging": "NONE" with
"exceptionLogging": "STACKDRIVER", .
Considerations
As you work with add-on error logs in Cloud Logs
Explorer, take note of these considerations:
Add-ons only log errors in Logs Explorer. Other log types are
not recorded.
Error messages are always written in English.
Cloud Logging incurs a cost. For further information about Cloud Logging
pricing, refer to Google Cloud Observability pricing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],["Published Google Workspace add-on errors are logged in Cloud Logs Explorer, offering detailed insights beyond the generic interface message. To access these logs, enable the \"Cloud Logging API\" and publish the add-on. Query logs in the Logs Explorer using `severity\u003e=ERROR` and `protoPayload.serviceName=\"gsuiteaddons.googleapis.com\"`. Error logging is enabled by default, controlled via the `exceptionLogging` key in the manifest file. Only errors are logged, messages are always in English, and Cloud Logging incurs costs.\n"]]
