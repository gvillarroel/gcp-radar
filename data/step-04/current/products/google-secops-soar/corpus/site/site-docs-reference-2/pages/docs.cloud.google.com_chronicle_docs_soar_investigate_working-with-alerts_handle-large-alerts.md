---
title: "Handle large alerts \_|\_ Google Security Operations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/handle-large-alerts
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/soar/release-notes
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/handle-large-alerts
  title: "Handle large alerts \_|\_ Google Security Operations \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Handle large alerts
Supported in:
Google secops
SOAR
Most security alerts ingested through connectors or webhooks don't impact performance.
The system efficiently ingests alerts up to 28 MB. Alerts exceeding this
threshold trigger an automatic, phased mitigation process to prevent system
overload and ensure processing efficiency.
The platform executes each phase sequentially, only initiating the next if the
previous one fails to resolve the size issue. Trimmed alerts display a system notification.
Phased approach for handling large alerts
The following is a breakdown of how to handle large alerts in a phased approach to
prevent system overload and ensure efficient processing:
Trim longest values : Detect and shorten the longest string values within every event field.
Trim field count : Reduce the total number of fields in the alert to a maximum of 100 fields.
Trim event count : Reduce the total number of events in the alert to a maximum of 50 events.
Database parameters control these default trim values. For information about
these values, see Service limits .
To update parameter values, contact Google Support .
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
