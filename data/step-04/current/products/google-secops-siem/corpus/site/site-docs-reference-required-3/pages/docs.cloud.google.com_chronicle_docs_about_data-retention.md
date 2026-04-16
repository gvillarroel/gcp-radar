---
title: "Data retention in your Google SecOps account \_|\_ Google Security Operations\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/about/data-retention
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/about/data-retention
  title: "Data retention in your Google SecOps account \_|\_ Google Security Operations\
    \ \_|\_ Google Cloud Documentation"
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
Data retention in your Google SecOps account
Supported in:
Google secops
SIEM
By default, Google retains 12 months of your data in your Google Security Operations
account. You can extend the retention period for up to five years as part of your Purchase Order.
The retention period applies to all of the data in your Google SecOps
instance. For example, you can't modify the data retention policy for a specific
log type.
Important: You cannot delete log data manually in Google SecOps.
Google uses an automated system to remove historical data based on the following:
Raw logs : Retention is determined by the ingestion timestamp (when the log arrived in the system).
UDM events : Retention is determined by the UDM event time (the timestamp within the normalized data structure).
Note: It may be possible to see extended events at the margins of the retention
period. For example, if a detection includes component events marginally older
than the retention period.
View your data retention start date in Google SecOps
The Data Retention page is a read-only section within the SIEM settings that
shows the date when data retention began for your account.
To view your data retention start date, follow these steps:
In the navigation bar, select SIEM Settings > Data Retention .
The Data Retention page displays the retention start date in yyyy-mm-dd format.
To learn about where data in the Google SecOps account is stored,
see SecOps service locations .
For more information, see Google SecOps pricing .
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
