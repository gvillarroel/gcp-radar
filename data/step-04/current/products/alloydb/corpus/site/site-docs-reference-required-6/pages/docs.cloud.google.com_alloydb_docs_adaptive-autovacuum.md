---
title: "Configure adaptive autovacuum \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/adaptive-autovacuum
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/adaptive-autovacuum
  title: "Configure adaptive autovacuum \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Configure adaptive autovacuum
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of AlloyDB for PostgreSQL adaptive autovacuum and describes
how to configure it.
Vacuuming is an important PostgreSQL database maintenance operation. It is used to
reclaim storage space occupied by updated or deleted rows to avoid table or index
bloat. It is also used for freezing transaction IDs to prevent transaction ID wraparound and for updating the table statistics.
For more information about vacuuming, see Routine vacuuming .
To automate the process of vacuuming and collectively updating the table statistics,
AlloyDB supports adaptive autovacuum. Adaptive autovacuum enables
automatic adjustment of vacuum workload when your workload changes, removes dead
tuples, and updates table statistics.
Autovacuum ensures a reliable and consistent application transactional performance
and maintains high availability of the system by preventing transaction ID wraparound.
By default, AlloyDB enables adaptive autovacuum. You can disable
or modify adaptive autovacuum on AlloyDB by using database flags .
Benefits
Adaptive autovacuum offers the following benefits:
Automatic adjustment of resources. AlloyDB automatically adjusts
resources such as CPU, I/O, number of vacuum processes, and memory for the vacuum
process based on the real time status of the workload and available resources
without affecting the system performance.
Prevention of transaction ID wraparound. AlloyDB monitors the
vacuum progress and transaction ID consumption speed. When necessary,
AlloyDB throttles its transaction ID consumption by
vacuuming every table in the database, preventing transaction ID wraparound.
Periodic vacuum for tables. AlloyDB triggers autovacuum
based on the number of dead tuples and the pages that need to be
scanned. It removes dead tuples in a timely manner to avoid table or index bloat.
Automatic detection of blockers. AlloyDB automatically detects
blockers such as long running transactions, orphan prepared transactions, orphan
replication slots, and shows warning messages similar to the following in the
postgres log:
Found a backend process PROCESS_ID with a long running transaction whose transaction
id age AGE is larger than or equal to the transaction age threshold AGE_THRESHOLD.
Configure adaptive autovacuum
By default, adaptive autovacuum is enabled on AlloyDB. You can
disable adaptive autovacuum by setting an instance's enable_google_adaptive_autovacuum
database flag to off .
For more information about setting database flags, see Configure an instance's database
flags .
AlloyDB supports several standard PostgreSQL database flags related
to vacuum and autovacuum, for example, vacuum_cost_delay and autovacuum_vacuum_cost_delay .
You do not need to set values in any of these flags for adaptive autovacuum to work
because adaptive autovacuum adapts and optimizes its behavior to your real workloads.
If you set values in these flags, then adaptive autovacuum adjusts its behavior
to take your preferences into account.
To see the complete list of supported PostgreSQL database flags related to vacuum
and autovacuum, see vacuum flags
and autovacuum flags .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
