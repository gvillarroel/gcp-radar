---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.492Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB System insights"
feature_slug: "alloydb-system-insights"
latest_feature_date: "2024-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview"
  - "https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots"
keywords:
  - "alloydb"
  - "system"
  - "insights"
  - "provides"
  - "unified"
  - "customizable"
  - "database"
  - "monitoring"
---

# AlloyDB System insights

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB System insights provides a unified and customizable database monitoring dashboard with predefined and Google Cloud metrics.

## Extended Definition

AlloyDB System insights provides a unified and customizable database monitoring dashboard with predefined and Google Cloud metrics.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)

## Supporting Pages

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For advanced database users, DBeaver suggests a powerful SQL editor, plenty of administration features, abilities of data and schema migration, monitoring database connection sessions, and a lot more Partner references Database driver AlloyDB for PostgreSQL Powering AlloyDB with DBeaver Partner Advantage page Direct link Hex Solution Hex Category Advanced Analytics Description Hex is a platform for collaborative analytics and data science.
- Partner references Consolidate Your Data on AlloyDB With Integrate.io in Minutes Connect AlloyDB to Your Data Sources using Integrate.io ETL Integrate.io + AlloyDB demo Partner Advantage page Direct link Kingswaysoft Solution KingswaySoft Category Data integration and migration Description KingswaySoft is easy to use, and it offers codeless integration of Google's AlloyDB with any virtual application or database system.
- It's designed to accelerate mission-critical databases, like AlloyDB, by providing exceptionally high performance, enterprise data services, and cost efficiency, making cloud environments behave with the speed and reliability of on-premises systems.
- It provides UI simplicity and data engineering power to capture data from all your sources including SaaS applications, databases and streaming systems,derive transformations and materialize low-latency views of those transformations.

### "Advanced query insights features overview \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Advanced query insights features overview Stay organized with collections Save and categorize content based on your preferences.
- In addition, standard query insights metrics are available in system metrics in Cloud Monitoring to keep the functionalities of the standard query insights intact.
- To help you proactively identify and troubleshoot root causes of query performance issues, advanced query insights features let you do the following: Perform ad hoc analysis to diagnose difficult problems using near real-time query stats and correlation analysis across multiple dimensions like users, hosts, and databases.
- Based on the previous seven days of Query Insights data, you can monitor query performance at the application level and trace the source of problematic queries across the application stack by action, controller, framework, route, application, and database driver.

### "Optimize database performance by comparing performance snapshots \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- Source ID: `site-docs-reference-2`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Example report The following is an abridged example of a generated performance snapshot report: Example performance snapshot report $ psql -d postgres -U alloydbsuperuser postgres=> select perfsnap.report(22, 23); report -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- PGSNAP DB Report for: Snapshot details -------------------------------------- Host i841-sr-primary-2a34f46e-06bc Release 14.12 Startup Time 2024-10-08 03:23:15+00 Snap Id Snap Time ------------ ---------- ------------------------ Begin Snap: 22 24.10.2024 04:33:56 (UTC) Automatic snapshot End Snap: 23 25.10.2024 04:38:56 (UTC) Automatic snapshot Elapsed: 1 day 00:04:59.979321 Database Cache sizes Shared Buffers: 31 GB Block Size: 8192 Effective Cache Size: 25 GB WAL Buffers: 16384 Host CPU %User %Nice %System %Idle %WIO %IRQ %SIRQ %Steal %Guest ------- ------- ------- ------- ------- ------- ------- ------- ------- 1.07 0.22 0.91 97.40 0.09 0.00 0.31 0.00 0.00 Host Memory Total Memory: 63 GB Available Memory: 11 GB Free Memory: 726 MB Buffers Memory: 3706 MB Load profile (in bytes) Per Second Per Transaction ------------ --------------- Redo size: 63083.64 4489.93 Logical reads: 1961.21 139.59 ...
- To identify and mitigate AlloyDB for PostgreSQL database performance issues, you can compare snapshots of system metrics between two points in time by manually generating performance snapshot reports.
- This tool complements other AlloyDB observability features like systems insights , query insights , and the Metrics Explorer , which provide real-time metrics about your instance.
- To create a snapshot that also contains SQL execution statistics, follow these steps: Create the pg stat statements extension in the postgres database. postgres=# CREATE EXTENSION pg stat statements; Now, when you take a snapshot, it automatically includes the SQL statistics from pg stat statements . postgres=# select perfsnap.snap(); snap ------ 2 (1 row) Note: The output of perfsnap.snap() is the same as when creating a snapshot of only system metrics.

