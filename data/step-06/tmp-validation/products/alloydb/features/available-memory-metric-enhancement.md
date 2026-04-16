---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.089Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Available memory metric enhancement"
feature_slug: "available-memory-metric-enhancement"
latest_feature_date: "2025-09-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots"
  - "https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox"
  - "https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization"
keywords:
  - "enhancement"
  - "usable"
  - "account"
  - "metric"
  - "makes"
  - "memory"
  - "available"
---

# Available memory metric enhancement

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The available memory metric enhancement makes the AlloyDB metric account for usable memory from the OS page cache for more accurate reporting.

## Extended Definition

The available memory metric enhancement makes the AlloyDB metric account for usable memory from the OS page cache for more accurate reporting.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- [https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization](https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization)

## Supporting Pages

### "Optimize database performance by comparing performance snapshots \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Example report The following is an abridged example of a generated performance snapshot report: Example performance snapshot report $ psql -d postgres -U alloydbsuperuser postgres=> select perfsnap.report(22, 23); report -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- PGSNAP DB Report for: Snapshot details -------------------------------------- Host i841-sr-primary-2a34f46e-06bc Release 14.12 Startup Time 2024-10-08 03:23:15+00 Snap Id Snap Time ------------ ---------- ------------------------ Begin Snap: 22 24.10.2024 04:33:56 (UTC) Automatic snapshot End Snap: 23 25.10.2024 04:38:56 (UTC) Automatic snapshot Elapsed: 1 day 00:04:59.979321 Database Cache sizes Shared Buffers: 31 GB Block Size: 8192 Effective Cache Size: 25 GB WAL Buffers: 16384 Host CPU %User %Nice %System %Idle %WIO %IRQ %SIRQ %Steal %Guest ------- ------- ------- ------- ------- ------- ------- ------- ------- 1.07 0.22 0.91 97.40 0.09 0.00 0.31 0.00 0.00 Host Memory Total Memory: 63 GB Available Memory: 11 GB Free Memory: 726 MB Buffers Memory: 3706 MB Load profile (in bytes) Per Second Per Transaction ------------ --------------- Redo size: 63083.64 4489.93 Logical reads: 1961.21 139.59 ...
- AlloyDB supports two types of snapshots: Snapshots of system metrics: these snapshots capture key system metrics such as vCPU usage, memory usage, and disk I/O.
- The system metrics captured in each snapshot include virtual CPU (vCPU) usage, memory usage, disk I/O, transaction count, and wait events.
- If the free memory is less than 15%, then we recommend that you scale up to the next available size.

### "Use AlloyDB for PostgreSQL with MCP, Gemini CLI, and other agents \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- Source ID: `site-docs-reference-2`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Category Tools Example natural language prompt Database operations database overview Give me an overview of the current database. list tables Show me all the tables in the current database. execute sql Show me the 10 most expensive products in the "Laptops" category. list active queries What queries are running on the database? get query plan Explain the query plan for a query that finds all customers who have not placed an order in the last 6 months. list available extensions What are the available extensions I can install? list installed extensions List all the extensions that are installed. list indexes List all indexes in the products table. list locks Show all active locks on the database. list schemas List all schemas in the database. list sequences Show all sequences in the current schema. list triggers List all triggers for the orders table. list views Show me all the views in the sales schema.
- Before you begin To connect to your AlloyDB instance and use the available tools, you must have one of the following Identity and Access Management (IAM) roles, or a custom role with equivalent permissions: Task Role name Required Identity and Access Management (IAM) role Use read-only tools to list and get AlloyDB resources AlloyDB Viewer roles/alloydb.viewer Connect to an instance and run queries Cloud AlloyDB Client roles/alloydb.client Service Usage Consumer roles/serviceusage.serviceUsageConsumer Perform administrative tasks (such as creating or managing clusters, instances, and users) AlloyDB Admin roles/alloydb.admin Use the observability extension Monitoring Viewer roles/monitoring.viewer Before you can connect to your AlloyDB instance, complete the following steps to set up your project and database.
- Database health and maintenance list autovacuum configurations Show me the current autovacuum configuration. list memory configurations What are the current memory configurations for the primary instance? list top bloated tables List the top five most bloated tables. list replication slots Display all active replication slots. replication stats Show the current replication statistics. list invalid indexes Check for any invalid indexes in the ecommerce database. long running transactions Are there any long-running transactions?
- Category Tools Example natural language prompt Observability get system metrics What are the system metrics, like CPU usage, for the last hour? get query metrics Show me the query performance metrics from the last 15 minutes.

### "AlloyDB query tuning and optimization \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization](https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization)
- Source ID: `site-api-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Specifically, you can use pg proctab to determine how much memory your idle connections are using, as shown: SELECT sa . pid , SUBSTR ( sa . query , 0 , 50 ) as query , pg size pretty ( ps . rss 1024 ) AS memory consumption FROM pg stat activity sa JOIN pg proctab () ps ON sa . pid = ps . pid WHERE sa . state = 'idle' ; pg systat The pg systat command-line tool can be executed remotely to retrieve statistics about databases, tables, indexes, tablespaces, vacuum, and standby instances.
- 802 rows = 9986 loops = 2 ) Sort Key : lastname , firstname Sort Method : quicksort Memory : 6751 kB Buffers : shared hit = 1773 Worker 0 : Sort Method : quicksort Memory : 7077 kB -> Parallel Seq Scan on person ( cost = 0 .
- All documented hints in the following tables are available in AlloyDB: pg hint plan hint Purpose ColumnarScan(table) , NoColumnarScan(table) Influences the planner to use columnar engine for the specified table.
- Here are the ways that work mem affects query performance: In-memory versus disk-based operations: When work mem is sufficient, PostgreSQL can perform operations entirely in memory, which is much faster.

