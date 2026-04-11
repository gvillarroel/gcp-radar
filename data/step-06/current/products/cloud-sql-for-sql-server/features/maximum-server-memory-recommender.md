---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.602Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Maximum server memory recommender"
feature_slug: "maximum-server-memory-recommender"
latest_feature_date: "2025-05-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/best-practices"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "maximum"
  - "server"
  - "memory"
  - "recommender"
  - "the"
  - "helps"
  - "optimize"
  - "sql"
---

# Maximum server memory recommender

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

The maximum server memory recommender helps optimize SQL Server memory allocation by recommending appropriate max server memory settings.

## Extended Definition

The maximum server memory recommender helps optimize SQL Server memory allocation by recommending appropriate max server memory settings.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/best-practices](https://docs.cloud.google.com/sql/docs/sqlserver/best-practices)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- Based on your application workloads and resource utilization, the recommender helps you optimize performance by identifying SQL Server instances that might see performance improvements when upgraded to Cloud SQL Enterprise Plus edition.
- May 28, 2025 Feature Cloud SQL for SQL Server now offers the maximum server memory recommender.
- April 28, 2022 Feature The following Cloud SQL recommenders that help you optimize your database costs are now generally available: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
- September 28, 2021 Feature Cloud SQL supports the preview version of two recommenders that help you optimize your database costs: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.

### "General best practices \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/best-practices](https://docs.cloud.google.com/sql/docs/sqlserver/best-practices)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table has recommended values and percentages of total RAM for some popular virtual machine (VM) tiers: Instance tier (MB) max server memory (mb) % (Total) 3840 1440 37 4096 1632 39 5792 2912 50 8192 4704 57 11584 7248 62 16384 10848 66 23168 16800 72 32768 25200 76 46336 37072 80 65568 53888 82 92704 77648 83 131136 111248 84 185440 158784 85 262272 226000 86 370880 321056 86 524544 455488 86 741792 645600 87 To monitor the memory usage for your instance, use the following metrics : database/memory/usage database/sqlserver/memory/buffer cache hit ratio database/sqlserver/memory/memory grants pending database/sqlserver/memory/page life expectancy For more information, see Monitor Cloud SQL instances .
- The value is automatically calculated by the SQL Server engine at startup. max server memory (mb) This flag limits the amount of memory that Cloud SQL can allocate for its internal pools.
- USE DATABASE NAME DBCC CHECKDB WITH EXTENDED LOGICAL CHECKS, DATA PURITY,NO INFOMSGS, ALL ERRORMSGS Run DBCC CHECKDB with PHYSICAL ONLY : USE DATABASE NAME DBCC CHECKDB WITH PHYSICAL ONLY, NO INFOMSGS, ALL ERRORMSGS Optimize performance To keep your data safe and your applications running smoothly with In-Memory OLTP tables, consider applying the following best practices: Best practice More information Adhere to Microsoft Best Practices for memory-optimized tables Regular Backups : make sure you have scheduled regular backups for your databases.
- Database collation Whether you're installing a new instance of SQL Server, restoring a database backup, or connecting a server to client databases, it's important to understand the locale requirements, sorting order, and case and accent sensitivity of the data that you're working with.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Based on your application workloads and resource utilization, the recommender helps you optimize performance by identifying SQL Server instances that might see performance improvements when upgraded to Cloud SQL Enterprise Plus edition.
- May 28, 2025 Cloud SQL for SQL Server Feature Cloud SQL for SQL Server now offers the maximum server memory recommender.
- Cloud SQL for SQL Server Feature The following Cloud SQL recommenders that help you optimize your database costs are now generally available: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
- Cloud SQL for SQL Server Feature Cloud SQL supports the preview version of two recommenders that help you optimize your database costs: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.

