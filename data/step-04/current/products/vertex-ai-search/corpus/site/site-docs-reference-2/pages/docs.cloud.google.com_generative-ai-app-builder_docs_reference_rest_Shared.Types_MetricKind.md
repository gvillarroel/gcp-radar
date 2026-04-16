---
title: "MetricKind \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MetricKind
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MetricKind
  title: "MetricKind \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Search
Reference
Send feedback
MetricKind
Stay organized with collections
Save and categorize content based on your preferences.
The kind of measurement. It describes how the data is reported. For information on setting the start time and end time based on the MetricKind, see TimeInterval .
Enums
METRIC_KIND_UNSPECIFIED
Do not use this default value.
GAUGE
An instantaneous measurement of a value.
DELTA
The change in a value during a time interval.
CUMULATIVE
A value accumulated over a time interval. Cumulative measurements in a time series should have the same start time and increasing end times, until an event resets the cumulative value to zero and sets a new start time for the following points.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
