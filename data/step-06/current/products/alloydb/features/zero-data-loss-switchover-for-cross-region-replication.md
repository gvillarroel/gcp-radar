---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.503Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Zero-data-loss switchover for cross-region replication"
feature_slug: "zero-data-loss-switchover-for-cross-region-replication"
latest_feature_date: "2024-07-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
keywords:
  - "zero"
  - "loss"
  - "switchover"
  - "cross"
  - "region"
  - "replication"
  - "supports"
  - "disaster"
---

# Zero-data-loss switchover for cross-region replication

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Cross-region replication supports switchover with zero data loss for disaster recovery testing and workload migration.

## Extended Definition

Cross-region replication supports switchover with zero data loss for disaster recovery testing and workload migration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)

## Supporting Pages

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Continuous backup properties for this cluster. secondaryConfig object ( SecondaryConfig ) Cross Region replication config specific to SECONDARY cluster. primaryConfig object ( PrimaryConfig ) Output only.
- Cross Region replication config specific to PRIMARY cluster. satisfiesPzs boolean Output only.
- Methods create Creates a new Cluster in a given project and location. createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete Deletes a single Cluster. export Exports data from the cluster. get Gets details of a single Cluster. import Imports data to the cluster. list Lists Clusters in a given project and location. patch Updates the parameters of a single Cluster. promote Promotes a SECONDARY cluster. restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade Upgrades a single Cluster.
- This can be: Full time OR All zeros for 00:00:00 UTC MaintenanceSchedule MaintenanceSchedule stores the maintenance schedule generated from the MaintenanceUpdatePolicy, once a maintenance rollout is triggered, if MaintenanceWindow is set, and if there is no conflicting DenyPeriod.

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Configuring AlloyDB Accounts in SnapLogic AlloyDB Inserts using SnapLogic AlloyDB Select using SnapLogic Partner Advantage page Direct link Striim Solution Striim cloud Category Data integration and migration Description Striim Cloud enables zero downtime data migration and real time replication to Google BigQuery, Spanner, Cloud SQL, AlloyDB, Pub/Sub, and Google Cloud Storage.
- Partner references Migrate databases to AlloyDB using Striim Oracle to AlloyDB demo Free yourself from legacy databases Partner Advantage page Direct link SuperMetrics Solution Supermetrics for AlloyDB Category Data integration and migration Description Supermetrics is the leading marketing data engine for effortless cross-channel data crunching and reporting.
- Partner references erwin® Data Modeler by Quest® supports Google AlloyDB Defining AlloyDB Databases in erwin Partner Advantage page Direct link SqlDBM Solution SqlDBM Data Modeller Category Data modeling Description SqlDBM is a cloud-native SaaS data modeling solution built to keep up with the rapidly evolving cloud databases and data warehouse landscape.
- Partner references Google Cloud and Heimdall-data Heimdall DataAlloyDB support Partner Advantage page Direct link Arcion Labs Solution Arcion Cloud Category Data integration and migration Description Arcion is a cloud-native, zero-code data mobility platform that helps businesses deploy high-performance, real-time data pipelines.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- As a further method of disaster recovery, you can achieve cross-region replication by creating secondary clusters in separate Google Cloud regions.
- For more information, see About cross-region replication .
- The following diagram illustrates the AlloyDB resource hierarchy, featuring a cluster scaled with a primary instance and multiple load-balanced read pool instances: Cluster: a top-level resource that acts as a logical container for your databases, logs, and other metadata within a region.
- Data backup and disaster recovery AlloyDB features a continuous backup and recovery system that lets you create a new cluster based on any point in time within an adjustable retention period.

