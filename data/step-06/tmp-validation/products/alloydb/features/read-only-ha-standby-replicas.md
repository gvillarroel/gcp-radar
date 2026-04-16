---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.155Z"
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
  - "replicas"
  - "only"
  - "replica"
  - "standby"
  - "read"
  - "omni"
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
- Read pool instance : provides read-only access to scale your workloads.
- A basic instance has only one node, with no standby node.
- The following diagram illustrates the AlloyDB resource hierarchy, featuring a cluster scaled with a primary instance and multiple load-balanced read pool instances: Cluster: a top-level resource that acts as a logical container for your databases, logs, and other metadata within a region.
- AlloyDB pricing varies based on your configuration settings and depends on the following factors: Instance resources: the machine type (number of vCPUs and amount of RAM) selected for your primary and read pool instances.

### "Optimize database performance by comparing performance snapshots \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- For read pool instances experiencing high replication lag, consider adjusting the following: max standby streaming delay : tune this to balance query cancellation frequency versus replication lag. alloydb.promote cancel to terminate : ensure this is on to forcefully terminate backends that are unresponsive to cancellation and blocking recovery. google storage.log replay throttle read transactions : use this to prioritize replication catch-up over read query latency when lag exceeds thresholds.
- If Buffer Pins conflicts are high on a read pool instance, consider reducing the max standby streaming delay value to allow replay to proceed, or move long-running queries to a different read pool to avoid holding pins for extended durations.
- When used on a read pool node, the report helps identify if replication lag is caused by system resource constraints, such as CPU or memory, or specific query conflicts, such as buffer pins.
- Tip: Replication lag might delay updates to perfsnap.g$snapshots on the read pool.

