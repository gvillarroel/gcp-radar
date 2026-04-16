---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.109Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AI-assisted troubleshooting"
feature_slug: "ai-assisted-troubleshooting"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration"
  - "https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots"
keywords:
  - "resolve"
  - "assisted"
  - "troubleshooting"
  - "complex"
  - "database"
  - "helps"
---

# AI-assisted troubleshooting

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AI-assisted troubleshooting helps resolve complex AlloyDB database performance issues such as slow queries and high load.

## Extended Definition

AI-assisted troubleshooting helps resolve complex AlloyDB database performance issues such as slow queries and high load.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)

## Supporting Pages

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Vaultree and AlloyDB: the world's first Fully Homomorphic and Searchable Cloud Encryption Solution Vaultree launches support for Google's AlloyDB Partner Advantage page Direct link Data integration, optimization, and migration Airbyte Solution Airbyte Cloud Category Data integration and migration Description Airbyte is an open-source data integration engine that helps you consolidate your data in your data warehouses, lakes, and databases.
- Partner references Collibra JDBC driver for AlloyDB Collibra catalogue connector for AlloyDB Partner Advantage page Direct link Liquibase Solution Liquibase Secure Category CI/CD automation with security and governance Description Liquibase helps forward-thinking companies harness the power of Database DevOps to accelerate, secure, and manage their organization.
- Partner references Connecting Hasura to an AlloyDB Database Faster reads with AlloyDB and Hasura GraphQL API Partner Advantage page Direct link Hightouch Solution Hightouch Reverse ETL Category Reverse ETL Description Hightouch is a reverse ETL SaaS platform that helps sync customer data from your warehouse to any SaaS tool.
- Our solutions not only increase database speed and agility in simple and highly complex environments but can also deliver transformational results by generating new insights that increase productivity and enhance overall governance and compliance.

### "Manage your AlloyDB resources using Knowledge Catalog \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- Source ID: `site-iam-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- For example, to view all AlloyDB databases: system=AlloyDB AND type=Database To view all AlloyDB tables, enter the following query: system=AlloyDB AND type=Table You can also use parentheses and the logical operators AND and OR for complex expressions.
- It helps you find resources using everyday language, eliminating the need for complex syntax.
- It helps you find resources using everyday language, eliminating the need for complex syntax.
- Knowledge Catalog automatically retrieves the following metadata from AlloyDB clusters, instances, databases, tables, columns, and views: Name Location (Region) Labels (for clusters and instances) Dataplex Integration Enabled (for clusters) Database Version Machine CPU Count (for instances) Availability Type (for instances) Charset (for databases) Collation (for databases) Owner Description (for table, views, columns, and foreign keys) Type (for clusters, instances, and machines) Columns Data Type Mode Primary Key Foreign Keys Referenced Table Column Mappings Creation Time Last modification Time Note: Knowledge Catalog refers to resources in AlloyDB and in other Google Cloud services as assets .

### "Optimize database performance by comparing performance snapshots \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- Source ID: `site-docs-reference-2`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Response Time Profile (in s) CPU time: 5399 ( 0.39%) Wait time: 1386906 ( 99.61%) Total time: 1392306 Backend Processes Wait Class Breakdown (in s) IO 119.300 ( 98.91%) LWLock 1.305 ( 1.08%) IPC .010 ( 0.01%) Lock .000 ( 0.00%) Backend Processes Wait Information Event Class Waits Time (us) Avg (us) -------------------------------------- ------------- ------------- -------------- ------------- CPU 1995948632 WALInsert LWLock 1 6656 6656 Vacuum Information Num Analyze operations: 1976 Num Vacuum operations: 3435 Per Database Information Name Commits Rollbacks BlkRds Blkhits TempFiles TempBytes ------------------------- ------------- ------------- ------------- ------------- ------------- ------------- bench 27939 0 0 7823038 0 0 bytes postgres 39792 0 7 11089243 0 0 bytes Per Database DML & DQL Information Name Tuples returned Tuples fetched Tuples inserted Tuples updated Tuples deleted Index splits Index Only heap fetches HOT updates ------------------------- ---------------- ---------------- ---------------- ---------------- ---------------- ---------------- ------------------------- ---------------- bench 16119481 4843262 0 0 0 0 16 0 postgres 25415473 6327188 0 10 0 0 0 8 Per Database Conflict Information Name Lock Timeout Old Snapshot Buffer Pins Deadlock ------------------------- ------------- ------------- ------------- ------------- bench 0 0 0 0 postgres 0 0 0 0 Per Database Vacuum Information Name Frozen XID % Consumed Aggregate Vacuum Gap ------------------------- ------------- ------------- -------------------- bench 179460916 9.00% 20539084 postgres 179339239 9.00% 20660761 Per Database Sizing Information Conn.
- Example report The following is an abridged example of a generated performance snapshot report: Example performance snapshot report $ psql -d postgres -U alloydbsuperuser postgres=> select perfsnap.report(22, 23); report -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- PGSNAP DB Report for: Snapshot details -------------------------------------- Host i841-sr-primary-2a34f46e-06bc Release 14.12 Startup Time 2024-10-08 03:23:15+00 Snap Id Snap Time ------------ ---------- ------------------------ Begin Snap: 22 24.10.2024 04:33:56 (UTC) Automatic snapshot End Snap: 23 25.10.2024 04:38:56 (UTC) Automatic snapshot Elapsed: 1 day 00:04:59.979321 Database Cache sizes Shared Buffers: 31 GB Block Size: 8192 Effective Cache Size: 25 GB WAL Buffers: 16384 Host CPU %User %Nice %System %Idle %WIO %IRQ %SIRQ %Steal %Guest ------- ------- ------- ------- ------- ------- ------- ------- ------- 1.07 0.22 0.91 97.40 0.09 0.00 0.31 0.00 0.00 Host Memory Total Memory: 63 GB Available Memory: 11 GB Free Memory: 726 MB Buffers Memory: 3706 MB Load profile (in bytes) Per Second Per Transaction ------------ --------------- Redo size: 63083.64 4489.93 Logical reads: 1961.21 139.59 ...
- To create a snapshot that also contains SQL execution statistics, follow these steps: Create the pg stat statements extension in the postgres database. postgres=# CREATE EXTENSION pg stat statements; Now, when you take a snapshot, it automatically includes the SQL statistics from pg stat statements . postgres=# select perfsnap.snap(); snap ------ 2 (1 row) Note: The output of perfsnap.snap() is the same as when creating a snapshot of only system metrics.
- Name Collation Limit Tablespace DB Size Growth -------------------- ------------- ------- -------------------- ---------- ---------- bench C.UTF-8 -1 pg default 80 GB 0 bytes postgres C.UTF-8 -1 pg default 135 MB 0 bytes Backend Wait Event Histogram Event Class Waits For information about report fields and performance optimization recommendations, see Database performance optimization recommendations .

