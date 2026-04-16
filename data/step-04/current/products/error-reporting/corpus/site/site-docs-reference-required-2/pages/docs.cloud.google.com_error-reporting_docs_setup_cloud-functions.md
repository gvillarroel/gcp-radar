---
title: "Setting up on Cloud Run functions \_|\_ Error Reporting \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/error-reporting/docs/setup/cloud-functions
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/docs/setup/compute-engine
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/docs/setup/cloud-functions
  title: "Setting up on Cloud Run functions \_|\_ Error Reporting \_|\_ Google Cloud\
    \ Documentation"
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
Setting up on Cloud Run functions
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Run functions grants the
Error Reporting Writer role ( roles/errorreporting.writer )
to your default service account automatically.
Your client libraries can be used without needing to explicitly provide
credentials.
Cloud Run functions is configured to use Error Reporting
automatically. Unhandled exceptions appear in Logging and
be processed by Error Reporting without needing to use a client
library.
Note: Error Reporting automatically creates an error event when
a log entry contains a stack trace and the severity
level of the log entry isn't set or is set to at least ERROR .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
