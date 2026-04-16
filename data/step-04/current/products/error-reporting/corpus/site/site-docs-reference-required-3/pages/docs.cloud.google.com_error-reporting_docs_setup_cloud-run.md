---
title: "Setting up on Cloud Run \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/docs/setup/cloud-run
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/docs/setup/kubernetes-engine
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/docs/setup/cloud-run
  title: "Setting up on Cloud Run \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
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
Setting up on Cloud Run
Stay organized with collections
Save and categorize content based on your preferences.
Error Reporting is automatically enabled for Cloud Run
applications. For most programming languages,
exceptions written to stderr , stdout , or
other logs that include a stack trace in
Error Reporting-supported languages
are written to Cloud Logging and are automatically detected by
Error Reporting.
If exceptions aren't detected, then we recommend that you use the
Error Reporting client library
for your language. For more information, see
Instrument apps by using client libraries .
For details on manually reporting error events, go to
Formatting errors in Cloud Logging .
Viewing errors
To view exception logs in Cloud Run, go to the Metrics tab of
the service detail page . It includes a
table showing the top errors for Cloud Run that
Error Reporting has detected and aggregated.
For instructions on viewing error and exception data for your application in
the Google Cloud console, go to
Viewing errors .
Note : If you see the message "Set up Error Reporting" on the Error Reporting page,
then your Google Cloud project has no error groups to display.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
