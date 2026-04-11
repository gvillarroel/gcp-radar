---
title: "Class QuantityBasedExpiry (0.7.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.Backup.QuantityBasedExpiry
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/alloydb/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.Backup.QuantityBasedExpiry
  title: "Class QuantityBasedExpiry (0.7.0) \_|\_ Python client libraries \_|\_ Google\
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
Class QuantityBasedExpiry (0.7.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
0.7.0 (latest)
0.6.0
0.5.0
0.4.9
0.3.16
0.2.1
0.1.1
QuantityBasedExpiry ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A backup's position in a quantity-based retention queue, of backups
with the same source cluster and type, with length, retention,
specified by the backup's retention policy. Once the position is
greater than the retention, the backup is eligible to be garbage
collected.
Example: 5 backups from the same source cluster and type with a
quantity-based retention of 3 and denoted by backup_id (position,
retention).
Safe: backup_5 (1, 3), backup_4, (2, 3), backup_3 (3, 3). Awaiting
garbage collection: backup_2 (4, 3), backup_1 (5, 3)
Attributes
Name
Description
retention_count
int
Output only. The backup's position among its
backups with the same source cluster and type,
by descending chronological order create
time(i.e. newest first).
total_retention_count
int
Output only. The length of the quantity-based
queue, specified by the backup's retention
policy.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
