---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.538Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Clusters page health overview"
feature_slug: "clusters-page-health-overview"
latest_feature_date: "2022-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/high-availability"
keywords:
  - "clusters"
  - "page"
  - "health"
  - "overview"
  - "alloydb"
  - "shows"
  - "summary"
  - "cards"
---

# Clusters page health overview

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The AlloyDB Clusters page shows summary cards and a resource table for monitoring database fleet health and performance.

## Extended Definition

The AlloyDB Clusters page shows summary cards and a resource table for monitoring database fleet health and performance.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances](https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/high-availability](https://docs.cloud.google.com/alloydb/docs/high-availability)

## Supporting Pages

### "Monitor the health of your clusters and instances \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances](https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances)
- Source ID: `site-docs-reference-2`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin To monitor AlloyDB health issues in the Google Cloud console, you must have the following (Identity and Access Management (IAM)) roles: AlloyDB Administrator ( roles/alloydb.admin ) alloydb.instances.list alloydb.clusters.get Monitoring Viewer ( roles/monitoring.viewer ) monitoring.timeSeries.list Note: This role is required to view insight charts in the Clusters page, but it isn't required to view Database Center health issues.
- Database Center Viewer ( roles/databasecenter.viewer ) or Database Center Administrator ( roles/databasecenter.admin ) databasecenter.databaseGroups.list databasecenter.fleetHealthStats.list Monitor AlloyDB cluster health The AlloyDB Clusters page in the Google Cloud includes a Health issues section, which displays the most critical cluster issues across your project.
- View and resolve issues for a specific instance You can view a summarized list of health issues on the Overview page for any AlloyDB primary or read pool instance.
- Critical and high priority issues are displayed in the Health issues section on the Clusters page in the AlloyDB console.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Quickstart: Create and connect to a database Perform a vector search Migration overview Connection overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback AlloyDB overview Stay organized with collections Save and categorize content based on your preferences.
- AlloyDB resource hierarchy AlloyDB organizes its resources into three levels: clusters, instances, and nodes.
- AlloyDB asynchronously streams data from a designated primary cluster to each of its secondary clusters.

### "AlloyDB high availability overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/high-availability](https://docs.cloud.google.com/alloydb/docs/high-availability)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback AlloyDB high availability overview Stay organized with collections Save and categorize content based on your preferences.
- This document provides an overview of the high availability (HA) configuration for AlloyDB for PostgreSQL instances.
- The AlloyDB health monitoring system periodically checks whether the active node is healthy.
- When processing writes, the AlloyDB database first writes WAL to its regional log persistor on the active node and then asynchronously transfers the logs to AlloyDB's regional log processing servers, which materialize the logs into data blocks for long-term storage.

