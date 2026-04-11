---
title: "List query optimizer versions \_|\_ Spanner \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/spanner/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions
  title: "List query optimizer versions \_|\_ Spanner \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Spanner
Guides
Send feedback
List query optimizer versions
Stay organized with collections
Save and categorize content based on your preferences.
Spanner provides a built-in SPANNER_SYS.SUPPORTED_OPTIMIZER_VERSIONS
table to keep track of query optimizer versions. You can retrieve this data
using SQL queries.
SPANNER_SYS.SUPPORTED_OPTIMIZER_VERSIONS table schema
Column name
Type
Description
VERSION
INT64
The optimizer version.
RELEASE_DATE
DATE
The release date of the optimizer version.
IS_DEFAULT
BOOL
Whether the version is the default version.
List all supported optimizer versions
SELECT * FROM SPANNER_SYS . SUPPORTED_OPTIMIZER_VERSIONS
An example result:
VERSION
RELEASE_DATE
IS_DEFAULT
1
2019-06-18
false
2
2020-03-01
false
3
2021-08-01
true
What's next
To learn more about the query optimizer, see Query optimizer overview .
To learn more about how the query optimizer has evolved, see Query optimizer
versions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
