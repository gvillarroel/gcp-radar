---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.514Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Read-only HA standby replicas"
feature_slug: "read-only-ha-standby-replicas"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
keywords:
  - "read"
  - "only"
  - "ha"
  - "standby"
  - "replicas"
  - "alloydb"
  - "omni"
  - "replica"
---

# Read-only HA standby replicas

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

An AlloyDB Omni HA standby replica can be used as a read-only instance.

## Extended Definition

An AlloyDB Omni HA standby replica can be used as a read-only instance.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)

## Supporting Pages

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Scaling Postgres AI Workloads with AlloyDB Omni on Silk Platform AlloyDB Omni and Silk Partner Advantage page Direct link Business intelligence and advanced analytics BoostKpi Solution BoostKPI Category Business intelligence and advanced analytics Description Use BoostKPI to identify and receive alerts about granular anomalies in your business data stored in BigQuery, as well as the root causes of these anomalies.
- Partner references Configuring AlloyDB Omni Cloud SQL for PostgreSQL and AlloyDB for PostgreSQL Integration Partner Advantage page Direct link Hitachi Solution Hitachi Virtual Storage Platform One Block 20 Category Application ISV Description Hitachi Virtual Storage Platform One Block 20 offers three models with the same capacity, featuring 72 NVMe flash drives and support for Fibre Channel, iSCSI, and NVMe TCP connectivity.
- Partner references Configuring AlloyDB Accounts in SnapLogic AlloyDB Inserts using SnapLogic AlloyDB Select using SnapLogic Partner Advantage page Direct link Striim Solution Striim cloud Category Data integration and migration Description Striim Cloud enables zero downtime data migration and real time replication to Google BigQuery, Spanner, Cloud SQL, AlloyDB, Pub/Sub, and Google Cloud Storage.
- Partner references Connecting to AlloyDB from Trifacta Cloud Portal Partner Advantage page Direct link PolyScale Solution Global Database Cache as a service Category Data caching and proxy Description PolyScale.ai is an intelligent, serverless database caching engine which allows low-latency reads from databases globally, without any coding.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- The following diagram illustrates the AlloyDB resource hierarchy, featuring a cluster scaled with a primary instance and multiple load-balanced read pool instances: Cluster: a top-level resource that acts as a logical container for your databases, logs, and other metadata within a region.
- AlloyDB pricing varies based on your configuration settings and depends on the following factors: Instance resources: the machine type (number of vCPUs and amount of RAM) selected for your primary and read pool instances.
- Whenever needed, you can promote a secondary cluster into a fully featured AlloyDB cluster with primary and read pool instances.
- A self-hosted alternative: AlloyDB Omni As an alternative to running AlloyDB within Google Cloud, Google offers AlloyDB Omni.

### "Optimize database performance by comparing performance snapshots \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- For read pool instances experiencing high replication lag, consider adjusting the following: max standby streaming delay : tune this to balance query cancellation frequency versus replication lag. alloydb.promote cancel to terminate : ensure this is on to forcefully terminate backends that are unresponsive to cancellation and blocking recovery. google storage.log replay throttle read transactions : use this to prioritize replication catch-up over read query latency when lag exceeds thresholds.
- Example report The following is an abridged example of a generated performance snapshot report: Example performance snapshot report $ psql -d postgres -U alloydbsuperuser postgres=> select perfsnap.report(22, 23); report -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- PGSNAP DB Report for: Snapshot details -------------------------------------- Host i841-sr-primary-2a34f46e-06bc Release 14.12 Startup Time 2024-10-08 03:23:15+00 Snap Id Snap Time ------------ ---------- ------------------------ Begin Snap: 22 24.10.2024 04:33:56 (UTC) Automatic snapshot End Snap: 23 25.10.2024 04:38:56 (UTC) Automatic snapshot Elapsed: 1 day 00:04:59.979321 Database Cache sizes Shared Buffers: 31 GB Block Size: 8192 Effective Cache Size: 25 GB WAL Buffers: 16384 Host CPU %User %Nice %System %Idle %WIO %IRQ %SIRQ %Steal %Guest ------- ------- ------- ------- ------- ------- ------- ------- ------- 1.07 0.22 0.91 97.40 0.09 0.00 0.31 0.00 0.00 Host Memory Total Memory: 63 GB Available Memory: 11 GB Free Memory: 726 MB Buffers Memory: 3706 MB Load profile (in bytes) Per Second Per Transaction ------------ --------------- Redo size: 63083.64 4489.93 Logical reads: 1961.21 139.59 ...
- The output looks similar to the following: postgres=# select from perfsnap.g$snapshots; snap id snap time instance id node id snap description snap type is baseline ---------+-------------------------------+--------------+---------------------------------+-------------------+-----------+------------- 1 2023-11-13 22:13:43.159237+00 perf-primary sab3-perf-primary-cab835ef-4cm8 Manual snapshot Manual f 2 2023-11-13 22:53:40.49565+00 perf-primary sab3-perf-primary-cab835ef-4cm8 Automatic snapshot Automatic f 3 2023-11-13 22:56:42.57094+00 perf-replica sab3-perf-replica-b9250422-tz4n Automatic snapshot Automatic f 4 2023-11-13 22:56:42.59476+00 perf-replica sab3-perf-replica-b9250422-63q3 Automatic snapshot Automatic f 5 2023-11-13 23:11:55.23157+00 perf-replica sab3-perf-replica-b9250422-tz4n Manual snapshot Manual f (5 rows) Note: To support basic metrics tracking, AlloyDB automatically takes a snapshot once a day.
- ReadIO = blk read time + temp blk read time accumulated during the two snapshots Buffer Hits = shared blks hit + local blks hit accumulated during the two snapshots Buffer Reads = shared blks read + local blks read accumulated during the two snapshots These fields are tracked by AlloyDB by default since track io timing is set.

