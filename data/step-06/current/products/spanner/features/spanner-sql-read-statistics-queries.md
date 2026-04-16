---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.335Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner SQL read statistics queries"
feature_slug: "spanner-sql-read-statistics-queries"
latest_feature_date: "2020-07-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/commit-statistics"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat"
keywords:
  - "retrieve"
  - "statistics"
  - "running"
  - "queries"
  - "read"
  - "added"
---

# Spanner SQL read statistics queries

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Added support for running SQL queries to retrieve database read statistics over one-minute, 10-minute, and one-hour windows.

## Extended Definition

Added support for running SQL queries to retrieve database read statistics over one-minute, 10-minute, and one-hour windows.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)

## Supporting Pages

### "Retrieve commit statistics for a transaction \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The MutationCount is then retrieved from this response and displayed. using Google.Cloud.Spanner.Data ; using Google.Cloud.Spanner.V1 ; using Google.Cloud.Spanner.V1.Internal.Logging ; using System ; using System.Collections.Generic ; using System.Diagnostics ; using System.Threading.Tasks ; public class LogCommitStatsAsyncSample { public async Task<long> LogCommitStatsAsync ( string projectId , string instanceId , string databaseId ) { // Commit statistics are logged at level Info by the default logger. // This sample uses a custom logger to access the commit statistics. // See https://googleapis.github.io/google-cloud-dotnet/docs/Google.Cloud.Spanner.Data/logging.html // for more information on how to use loggers. var logger = new CommitStatsSampleLogger (); var options = new SessionPoolOptions (); var poolManager = SessionPoolManager .
- The mutation count is then retrieved from this response and displayed. def log commit stats ( instance id , database id ): """Inserts sample data using DML and displays the commit statistics.""" By default, commit statistics are logged via stdout at level Info.
- Home Documentation Databases Spanner Guides Send feedback Retrieve commit statistics for a transaction Stay organized with collections Save and categorize content based on your preferences.
- Retrieve commit statistics The following sample shows how to get commit statistics using the Spanner client libraries.

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- SHOW VARIABLE READ ONLY STALENESS SET READ ONLY STALENESS = staleness type staleness type : { 'STRONG' 'MIN READ TIMESTAMP timestamp ' 'READ TIMESTAMP timestamp ' 'MAX STALENESS <INT64>{ s ms us ns }' 'EXACT STALENESS <INT64>{ s ms us ns }' } The read-only staleness value applies to all subsequent read-only transactions and for all queries in AUTOCOMMIT mode.
- SELECT FirstName , LastName FROM Singers ORDER BY LastName ; -- Read-only staleness can also be applied to read-only transactions. -- MAX STALENESS is only allowed for queries in autocommit mode. -- Change the staleness to EXACT STALENESS and start a read-only transaction.
- Example: Optimizer statistics package (Click to expand) The following example shows how to execute queries using a specific optimizer statistics package with the Spanner JDBC driver. -- Show the available optimizer statistics packages in this database.
- Example: Read-only staleness (Click to expand) The following example shows how to execute queries using a custom staleness value with the Spanner JDBC driver. -- Set the read-only staleness to MAX STALENESS 10 seconds.

### "JDBC session management commands (PostgreSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- SHOW [VARIABLE] SPANNER.READ ONLY STALENESS SET SPANNER.READ ONLY STALENESS {TO =} staleness type staleness type : { 'STRONG' 'MIN READ TIMESTAMP timestamp ' 'READ TIMESTAMP timestamp ' 'MAX STALENESS <int8>{ s ms us ns }' 'EXACT STALENESS <int8>{ s ms us ns }' } The read-only staleness value applies to all subsequent read-only transactions and for all queries in AUTOCOMMIT mode.
- SELECT FirstName , LastName FROM Singers ORDER BY LastName ; -- Read-only staleness can also be applied to read-only transactions. -- MAX STALENESS is only allowed for queries in autocommit mode. -- Change the staleness to EXACT STALENESS and start a read-only transaction.
- Example: Optimizer statistics package (Click to expand) The following example shows how to execute queries using a specific optimizer statistics package with the Spanner JDBC driver. -- Show the available optimizer statistics packages in this database.
- Example: Read-only staleness (Click to expand) The following example shows how to execute queries using a custom staleness value with the Spanner JDBC driver. -- Set the read-only staleness to MAX STALENESS 10 seconds.

