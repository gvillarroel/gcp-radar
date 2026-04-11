---
title: "Class CloudLoggingFilter (3.15.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers.CloudLoggingFilter
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/logging/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers.CloudLoggingFilter
  title: "Class CloudLoggingFilter (3.15.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class CloudLoggingFilter (3.15.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.15.0 (latest)
3.13.0
3.12.1
3.11.3
3.10.0
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.1
3.2.5
3.1.2
3.0.0
2.7.2
2.6.0
2.5.0
2.4.0
2.3.1
2.2.0
2.1.1
2.0.2
1.15.3
1.14.0
1.13.0
1.12.1
CloudLoggingFilter ( project = None , default_labels = None )
Python standard logging Filter class to add Cloud Logging
information to each LogRecord.
When attached to a LogHandler, each incoming log will be modified
to include new Cloud Logging relevant data. This data can be manually
overwritten using the extras argument when writing logs.
Methods
CloudLoggingFilter
CloudLoggingFilter ( project = None , default_labels = None )
Initialize a filter.
Initialize with the name of the logger which, together with its
children, will have its events allowed through the filter. If no
name is specified, allow every event.
filter
filter ( record )
Add new Cloud Logging data to each LogRecord as it comes in
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
