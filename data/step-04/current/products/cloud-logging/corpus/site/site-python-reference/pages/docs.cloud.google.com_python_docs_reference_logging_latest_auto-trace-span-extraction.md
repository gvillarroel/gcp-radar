---
title: "Automatic Trace/Span ID Extraction \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/logging/latest/auto-trace-span-extraction
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/logging/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/logging/latest/auto-trace-span-extraction
  title: "Automatic Trace/Span ID Extraction \_|\_ Python client libraries \_|\_ Google\
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
Automatic Trace/Span ID Extraction
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
NOTE : All LogEntry fields populated manually will override those populated via methods referred to in this
section.
The Google Cloud Logging library can automatically populate LogEntry fields
trace, span_id, and trace_sampled via OpenTelemetry integration, or extracting header information from an HTTP request.
OpenTelemetry Integration
If you have the OpenTelemetry SDK package installed and are logging from within an active OpenTelemetry span, that log entry will automatically
have the trace, span_id, and trace_sampled fields populated from that span. More information about OpenTelemetry can be found
here .
HTTP headers
Another possible method of automatic trace / span_id is via extraction from HTTP headers.
This is prioritized after OpenTelemetry and requires a supported Python web framework .
Trace information is automatically populated from either the W3C Traceparent
or X-Cloud-Trace-Context headers.
Populating trace information this way also automatically populates the http_request field in the LogEntry as well.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
