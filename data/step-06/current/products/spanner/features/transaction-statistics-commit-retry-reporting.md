---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.321Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Transaction statistics commit retry reporting"
feature_slug: "transaction-statistics-commit-retry-reporting"
latest_feature_date: "2021-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/commit-statistics"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat"
keywords:
  - "reporting"
  - "retry"
  - "include"
  - "commit"
  - "transaction"
  - "statistics"
---

# Transaction statistics commit retry reporting

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner transaction statistics now include commit retry information to help diagnose performance issues caused by transaction aborts.

## Extended Definition

Spanner transaction statistics now include commit retry information to help diagnose performance issues caused by transaction aborts.

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
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create ( options , logger ); var connectionStringBuilder = new SpannerConnectionStringBuilder { ConnectionString = $"Data Source=projects/{projectId}/instances/{instanceId}/databases/{databaseId}" , // Set LogCommitStats to true to enable logging commit statistics for all transactions on the connection. // LogCommitStats can also be enabled/disabled for individual Spanner transactions.
- Home Documentation Databases Spanner Guides Send feedback Retrieve commit statistics for a transaction Stay organized with collections Save and categorize content based on your preferences.
- The following code enables commit statistics logging for all transactions by setting the LogCommitStats property on SpannerConnectionStringBuilder to true.
- To help you better understand, optimize, and diagnose transaction issues, Spanner gives you access to transaction commit statistics.

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- BEGIN ; INSERT INTO T ( id , col a , col b ) VALUES ( 4 , 400 , 4 ); INSERT INTO T ( id , col a , col b ) VALUES ( 5 , 500 , 5 ); COMMIT ; RETRY ABORTS INTERNALLY A boolean indicating whether the connection automatically retries aborted transactions.
- SET OPTIMIZER STATISTICS PACKAGE = '' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; RETURN COMMIT STATS A property of type BOOL indicating whether statistics should be returned for transactions on this connection.
- BEGIN ; INSERT INTO T ( id , col a , col b ) VALUES ( 1 , 100 , 1 ), ( 2 , 200 , 2 ), ( 3 , 300 , 3 ); COMMIT ; -- View the commit response with the transaction statistics for the last -- transaction that was committed.
- Example: Commit statistics (Click to expand) The following example shows how to view commit statistics for a transaction with the Spanner JDBC driver. -- Enable the returning of commit stats.

### "JDBC session management commands (PostgreSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- BEGIN ; INSERT INTO T ( id , col a , col b ) VALUES ( 4 , 400 , 4 ); INSERT INTO T ( id , col a , col b ) VALUES ( 5 , 500 , 5 ); COMMIT ; SPANNER.RETRY ABORTS INTERNALLY A boolean indicating whether the connection automatically retries aborted transactions.
- OPTIMIZER STATISTICS PACKAGE = '' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; SPANNER.RETURN COMMIT STATS A property of type BOOL indicating whether statistics should be returned for transactions on this connection.
- BEGIN ; INSERT INTO T ( id , col a , col b ) VALUES ( 1 , 100 , 1 ), ( 2 , 200 , 2 ), ( 3 , 300 , 3 ); COMMIT ; -- View the commit response with the transaction statistics for the last -- transaction that was committed.
- Example: Commit statistics (Click to expand) The following example shows how to view commit statistics for a transaction with the Spanner JDBC driver. -- Enable the returning of commit stats.

