---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.802Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Same-zone fast clone"
feature_slug: "same-zone-fast-clone"
latest_feature_date: "2026-01-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/clone-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "same"
  - "zone"
  - "fast"
  - "clone"
  - "this"
  - "enables"
  - "operations"
  - "for"
---

# Same-zone fast clone

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature enables fast clone operations for Cloud SQL for MySQL instances within the same zone.

## Extended Definition

This feature enables fast clone operations for Cloud SQL for MySQL instances within the same zone.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### Clone instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- When fast clone is used Cloud SQL automatically uses fast clone when the following conditions are met: Same-zone operations: the clone operation must be initiated within the same zone as the source instance.
- If you don't specify values for either the --preferred-zone or --preferred-secondary-zone parameters, then the cloned instance has the same primary and secondary zones as the source instance.
- If you don't specify values for either the preferredZone or preferredSecondaryZone parameters, then the cloned instance has the same primary and secondary zones as the source instance.
- If you don't specify values for either the preferredZone or preferredSecondaryZone parameters, then the cloned instance has the same primary and secondary zones as the source instance.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- January 15, 2026 Feature Cloud SQL for MySQL now supports fast clone operations within the same zone ( GA ).
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.
- With this release, an instance without a user-specified maintenance window is maintained outside of the typical business hours for the time zone that the instance is deployed in.
- September 03, 2024 Feature When you clone your zonal instance, you can now specify a preferred zone for the instance.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- January 15, 2026 Cloud SQL for MySQL Feature Cloud SQL for MySQL now supports fast clone operations within the same zone ( GA ).
- Cloud SQL for PostgreSQL Feature Cloud SQL for PostgreSQL now supports fast clone operations within the same zone ( GA ).
- The functions include (and are not limited to) the following: cdc.fn cdc get all changes <capture instance> Sys.fn cdc get max lsn To turn on this feature for a database, run this command: exec msdb .[ dbo ].[ gcloudsql cdc enable db ] 'demo' To turn off this feature for a database, run this command: exec msdb.[dbo].[gcloudsql cdc disable db] 'demo' Feature Cloud SQL for SQL Server enables you to perform common operations on a tempdb database .
- Use this flag when you're deciding whether to run a VACUUM . autovacuum vacuum insert threshold : specify the minimum number of inserted records or rows (tuples) that you need to run a VACUUM in any database table. effective io concurrency : set the number of concurrent disk I/O operations that can run simultaneously. hash mem multiplier : compute the maximum amount of memory that hash-based operations can use. logical decoding work mem : specify the maximum amount of memory that logical decoding can use before some of the decoded changes are written to a local disk. maintenance io concurrency : set the number of concurrent disk I/O operations that can run simultaneously for maintenance work that's done for client sessions. vacuum failsafe age : specify the maximum age (in transactions) that a database table's pg class.relfrozenxid field can attain before a VACUUM takes extraordinary measures to avoid a system-wide wraparound failure for transaction IDs. vacuum multixact failsafe age : specify the maximum age (in multiple transactions) that a database table's pg class.relminmxid field can attain before a VACUUM takes extraordinary measures to avoid a system-wide wraparound failure for multiple transaction IDs.

