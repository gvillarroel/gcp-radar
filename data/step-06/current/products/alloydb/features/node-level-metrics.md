---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.463Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Node-level metrics"
feature_slug: "node-level-metrics"
latest_feature_date: "2026-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots"
  - "https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview"
keywords:
  - "node"
  - "level"
  - "metrics"
  - "let"
  - "you"
  - "monitor"
  - "alloydb"
  - "read"
---

# Node-level metrics

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Node-level metrics let you monitor AlloyDB read pool nodes in Google Cloud console and Metrics Explorer for detailed troubleshooting.

## Extended Definition

Node-level metrics let you monitor AlloyDB read pool nodes in Google Cloud console and Metrics Explorer for detailed troubleshooting.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)

## Supporting Pages

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Connect Anomalo to AlloyDB for complete data quality monitoring Integrating Anomalo with AlloyDB Partner Advantage page Direct link DataDog Solution DataDog Category Data observability Description Datadog is a monitoring and analytics tool for information technology (IT) and DevOps teams that can be used to determine performance metrics and event monitoring for infrastructure and cloud services.
- Partner references Connecting ThoughtSpot with AlloyDB Adding a Google AlloyDB connection, Partner Advantage page Direct link Data governance, modeling, and security Collibra Solution Collibra Category Data governance Description Collibra data intelligence cloud combines data silos on a complete and scalable cloud-services platform, design easy-to-use intuitive workflows for data creators and innovators, use an open and flexible architecture to connect data applications, trust in data that's secure and compliant with enterprise-level standards.
- Partner references AlloyDB Configuration in Skyvia Skyvia AlloyDB Connector Partner Advantage page Direct link Data Quality and Observability Anomalo Solution Anomalo Data Quality Category Data Quality Description Anomalo addresses the data quality problem by monitoring enterprise data and automatically detecting and root-causing data issues, allowing teams to resolve any issues with their data before making decisions, running operations, or powering models.
- For advanced database users, DBeaver suggests a powerful SQL editor, plenty of administration features, abilities of data and schema migration, monitoring database connection sessions, and a lot more Partner references Database driver AlloyDB for PostgreSQL Powering AlloyDB with DBeaver Partner Advantage page Direct link Hex Solution Hex Category Advanced Analytics Description Hex is a platform for collaborative analytics and data science.

### "Optimize database performance by comparing performance snapshots \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- Source ID: `site-docs-reference-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- The output looks similar to the following: postgres=# select from perfsnap.g$snapshots; snap id snap time instance id node id snap description snap type is baseline ---------+-------------------------------+--------------+---------------------------------+-------------------+-----------+------------- 1 2023-11-13 22:13:43.159237+00 perf-primary sab3-perf-primary-cab835ef-4cm8 Manual snapshot Manual f 2 2023-11-13 22:53:40.49565+00 perf-primary sab3-perf-primary-cab835ef-4cm8 Automatic snapshot Automatic f 3 2023-11-13 22:56:42.57094+00 perf-replica sab3-perf-replica-b9250422-tz4n Automatic snapshot Automatic f 4 2023-11-13 22:56:42.59476+00 perf-replica sab3-perf-replica-b9250422-63q3 Automatic snapshot Automatic f 5 2023-11-13 23:11:55.23157+00 perf-replica sab3-perf-replica-b9250422-tz4n Manual snapshot Manual f (5 rows) Note: To support basic metrics tracking, AlloyDB automatically takes a snapshot once a day.
- Example report The following is an abridged example of a generated performance snapshot report: Example performance snapshot report $ psql -d postgres -U alloydbsuperuser postgres=> select perfsnap.report(22, 23); report -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- PGSNAP DB Report for: Snapshot details -------------------------------------- Host i841-sr-primary-2a34f46e-06bc Release 14.12 Startup Time 2024-10-08 03:23:15+00 Snap Id Snap Time ------------ ---------- ------------------------ Begin Snap: 22 24.10.2024 04:33:56 (UTC) Automatic snapshot End Snap: 23 25.10.2024 04:38:56 (UTC) Automatic snapshot Elapsed: 1 day 00:04:59.979321 Database Cache sizes Shared Buffers: 31 GB Block Size: 8192 Effective Cache Size: 25 GB WAL Buffers: 16384 Host CPU %User %Nice %System %Idle %WIO %IRQ %SIRQ %Steal %Guest ------- ------- ------- ------- ------- ------- ------- ------- ------- 1.07 0.22 0.91 97.40 0.09 0.00 0.31 0.00 0.00 Host Memory Total Memory: 63 GB Available Memory: 11 GB Free Memory: 726 MB Buffers Memory: 3706 MB Load profile (in bytes) Per Second Per Transaction ------------ --------------- Redo size: 63083.64 4489.93 Logical reads: 1961.21 139.59 ...
- For read pool instances experiencing high replication lag, consider adjusting the following: max standby streaming delay : tune this to balance query cancellation frequency versus replication lag. alloydb.promote cancel to terminate : ensure this is on to forcefully terminate backends that are unresponsive to cancellation and blocking recovery. google storage.log replay throttle read transactions : use this to prioritize replication catch-up over read query latency when lag exceeds thresholds.
- ReadIO = blk read time + temp blk read time accumulated during the two snapshots Buffer Hits = shared blks hit + local blks hit accumulated during the two snapshots Buffer Reads = shared blks read + local blks read accumulated during the two snapshots These fields are tracked by AlloyDB by default since track io timing is set.

### "Advanced query insights features overview \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Based on the previous seven days of Query Insights data, you can monitor query performance at the application level and trace the source of problematic queries across the application stack by action, controller, framework, route, application, and database driver.
- In addition, standard query insights metrics are available in system metrics in Cloud Monitoring to keep the functionalities of the standard query insights intact.
- Storing data for primary instances consumes about 180 GB and might increase based on the number of read pool nodes present in the cluster.
- Limitations The metrics exposed by advanced query insights features aren't available using a Cloud Monitoring API.

