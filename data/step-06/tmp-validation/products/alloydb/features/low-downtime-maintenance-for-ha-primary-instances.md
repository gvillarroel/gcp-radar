---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.173Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Low-downtime maintenance for HA primary instances"
feature_slug: "low-downtime-maintenance-for-ha-primary-instances"
latest_feature_date: "2023-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/maintenance"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/high-availability"
keywords:
  - "downtime"
  - "highly"
  - "maintenance"
  - "operations"
  - "primary"
  - "instances"
---

# Low-downtime maintenance for HA primary instances

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Maintenance operations on highly available AlloyDB primary instances now typically complete with less than one second of downtime.

## Extended Definition

Maintenance operations on highly available AlloyDB primary instances now typically complete with less than one second of downtime.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/maintenance](https://docs.cloud.google.com/alloydb/docs/maintenance)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/high-availability](https://docs.cloud.google.com/alloydb/docs/high-availability)

## Supporting Pages

### Maintenance overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/maintenance](https://docs.cloud.google.com/alloydb/docs/maintenance)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- AlloyDB's non-disruptive maintenance operations limit the downtime to <1 second for primary instances, and zero seconds for read pools.
- However, for clusters with multiple read pools, the downtime might continue past the one-hour window because the maintenance can start at any time in that window—for example, at the last minute—and then take up to an hour.
- The maintenance window duration depends upon the complexity of the cluster—that is, the number of read pool instances that require updates—and the nature of the update.
- While the downtime that an individual instance requires can be brief, the entire maintenance process usually completes within an hour.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- During this process, primary instances typically experience less than a second of downtime, while read pools remain continuously available.
- The following diagram illustrates the AlloyDB resource hierarchy, featuring a cluster scaled with a primary instance and multiple load-balanced read pool instances: Cluster: a top-level resource that acts as a logical container for your databases, logs, and other metadata within a region.
- AlloyDB pricing varies based on your configuration settings and depends on the following factors: Instance resources: the machine type (number of vCPUs and amount of RAM) selected for your primary and read pool instances.
- Clusters operating in non-production environments that don't require HA can optionally use basic, single-zone primary instances instead.

### "AlloyDB high availability overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/high-availability](https://docs.cloud.google.com/alloydb/docs/high-availability)
- Source ID: `site-docs-reference-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Requirements For AlloyDB to allow failover, the configuration must meet these requirements: The primary instance must be in a normal operating state (not stopped or undergoing maintenance).
- Primary and secondary instances An AlloyDB primary instance configured with high availability includes an active node and a standby node, which are located in different zones.
- While zonal instances may experience extended downtime during failure events, with HA, your data remains available to client applications.
- Read pools Read pool instances with two or more nodes are highly available.

