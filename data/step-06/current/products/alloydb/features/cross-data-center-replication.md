---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.499Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Cross-data center replication"
feature_slug: "cross-data-center-replication"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots"
keywords:
  - "cross"
  - "center"
  - "replication"
  - "alloydb"
  - "omni"
  - "supports"
  - "automated"
  - "disaster"
---

# Cross-data center replication

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni supports cross-data center replication for automated disaster recovery setup.

## Extended Definition

AlloyDB Omni supports cross-data center replication for automated disaster recovery setup.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)

## Supporting Pages

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Scaling Postgres AI Workloads with AlloyDB Omni on Silk Platform AlloyDB Omni and Silk Partner Advantage page Direct link Business intelligence and advanced analytics BoostKpi Solution BoostKPI Category Business intelligence and advanced analytics Description Use BoostKPI to identify and receive alerts about granular anomalies in your business data stored in BigQuery, as well as the root causes of these anomalies.
- Partner references Configuring AlloyDB Omni Cloud SQL for PostgreSQL and AlloyDB for PostgreSQL Integration Partner Advantage page Direct link Hitachi Solution Hitachi Virtual Storage Platform One Block 20 Category Application ISV Description Hitachi Virtual Storage Platform One Block 20 offers three models with the same capacity, featuring 72 NVMe flash drives and support for Fibre Channel, iSCSI, and NVMe TCP connectivity.
- Partner references Configuring AlloyDB Accounts in SnapLogic AlloyDB Inserts using SnapLogic AlloyDB Select using SnapLogic Partner Advantage page Direct link Striim Solution Striim cloud Category Data integration and migration Description Striim Cloud enables zero downtime data migration and real time replication to Google BigQuery, Spanner, Cloud SQL, AlloyDB, Pub/Sub, and Google Cloud Storage.
- Partner references Migrate databases to AlloyDB using Striim Oracle to AlloyDB demo Free yourself from legacy databases Partner Advantage page Direct link SuperMetrics Solution Supermetrics for AlloyDB Category Data integration and migration Description Supermetrics is the leading marketing data engine for effortless cross-channel data crunching and reporting.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- As a further method of disaster recovery, you can achieve cross-region replication by creating secondary clusters in separate Google Cloud regions.
- You can focus on your data and let AlloyDB handle the following operations: Backups: protect your data with on-demand and automated scheduled backups, and a continuous recovery system that enables point-in-time recovery.
- Data backup and disaster recovery AlloyDB features a continuous backup and recovery system that lets you create a new cluster based on any point in time within an adjustable retention period.
- Database administration AlloyDB manages the underlying infrastructure of your database, such as automated backups, security patches, and resource allocation.

### "Optimize database performance by comparing performance snapshots \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- For read pool instances experiencing high replication lag, consider adjusting the following: max standby streaming delay : tune this to balance query cancellation frequency versus replication lag. alloydb.promote cancel to terminate : ensure this is on to forcefully terminate backends that are unresponsive to cancellation and blocking recovery. google storage.log replay throttle read transactions : use this to prioritize replication catch-up over read query latency when lag exceeds thresholds.
- Automatic and manual snapshots AlloyDB supports the following snapshots: Automatic snapshots: By default, AlloyDB automatically captures snapshots once a day and stores the snapshots for 7 days.
- AlloyDB supports two types of snapshots: Snapshots of system metrics: these snapshots capture key system metrics such as vCPU usage, memory usage, and disk I/O.
- Note: AlloyDB doesn't take an automated snapshot when CPU utilization exceeds 70%.

