---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.532Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "MAXDOP database flag"
feature_slug: "maxdop-database-flag"
latest_feature_date: "2025-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/flags"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/best-practices"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/quotas"
keywords:
  - "maxdop"
  - "database"
  - "flag"
  - "limits"
  - "maximum"
  - "number"
  - "threads"
  - "used"
---

# MAXDOP database flag

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

The MAXDOP database flag limits the maximum number of threads used to run a single query in a parallel plan.

## Extended Definition

The MAXDOP database flag limits the maximum number of threads used to run a single query in a parallel plan.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags)
- [https://docs.cloud.google.com/sql/docs/sqlserver/best-practices](https://docs.cloud.google.com/sql/docs/sqlserver/best-practices)
- [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas)

## Supporting Pages

### "Configure database flags \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using the max degree of parallelism (MAXDOP) flag, you can control the number of threads at three levels: Instance level, using database flags Database scope, using TSQL Query level, using query hints Note that if the instance is resized, then the flag value remains unchanged. max server memory (mb) The max server memory (mb) flag limits the amount of memory that Cloud SQL can allocate for its internal pools.
- This flag lets you limit the maximum number of threads used when running a single query in a parallel plan.
- To check the numa node configuration, use a code snippet similar to the following: SELECT socket count,cores per socket,numa node count FROM sys.dm os sys info While you can use MAXDOP to limit the maximum number of processors you want to allow for parallel plan execution, you can also use the cost threshold for parallelism feature to indicate the minimum cost you want to set for a single processor before expanding parallel operations to another processor.
- For help determining the best MAXDOP and cost threshold for parallelism values for your servers, see the following resources: Server configuration: max degree of parallelism Best practices: Database settings to modify Changing the default value helps address the following potential issues: If the max degree of parallelism (MAXDOP) flag is set to 0 , then instances or client applications that require SharePoint downloads fail.

### "General best practices \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/best-practices](https://docs.cloud.google.com/sql/docs/sqlserver/best-practices)
- Source ID: `site-docs-reference-required-4`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The value is ignored when maxdop is set to 1 . max degree of parallelism (MAXDOP) To reduce database waits due to parallelism, adjust this value based on specific recommendations about the number of logical processors available.
- Trace flag settings Trace flags in SQL Server are used to set certain characteristics, alter the behavior of SQL Server databases, or debug issues in SQL Server.
- If your instance is already at the maximum number of CPUs, you must shard your database to multiple instances.
- You can also use the total usage metric to observe the percentage of available memory that your Cloud SQL instance is using, including memory used by the database container and memory allocated by the operating system cache.

### Quotas and limits \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configurable limits Instances per project The maximum number of instances you can have in a single project depends on the network architecture of those instances: New SQL network architecture: You can have up to 1000 instances per project.
- Value Limit Maximum number of saved queries per project (including saved queries for other Google Cloud products) 10,000 Maximum size for each query 1 MiB Cloud SQL storage limits Dedicated core: Up to 64 TB.
- Maximum concurrent connections The actual number of user connections allowed depends on the version of SQL Server that you are using, and also the limits of your application or applications and hardware.
- SqlBackupRunsService.Get SqlDatabasesService.Get SqlInstancesService.Get SqlOperationsService.Get SqlSslCertsService.Get SqlUsersService.Get 500 List sqladmin.googleapis.com/list The number of requests that are made per minute per user per region to use the APIs in this category.

