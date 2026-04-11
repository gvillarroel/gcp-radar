---
title: "BigQuery data retention \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/bigquery-data-retention
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts
source_metadata:
  url: https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/bigquery-data-retention
  title: "BigQuery data retention \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Manufacturing Data Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
BigQuery data retention
This guide describes how to configure data retention on BigQuery
tables.
Depending on the Manufacturing Data Engine (MDE) operations log level a lot of data
may be stored in the operations-log
BigQuery table. Since MDE is using partitioned
tables you can manage retention as described in the Managing partitioned tables guide.
Update the partition expiration example
You can use the ALTER TABLE SET OPTIONS statement to update the expiration as
the following example shows:
ALTER TABLE mde_system . operations - log
SET OPTIONS (
-- Sets partition expiration to 30 days
partition_expiration_days = 30 );
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
