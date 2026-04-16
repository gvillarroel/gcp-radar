---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.315Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Query optimizer statistics package selection"
feature_slug: "query-optimizer-statistics-package-selection"
latest_feature_date: "2021-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat"
  - "https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions"
keywords:
  - "selection"
  - "package"
  - "optimizer"
  - "statistics"
  - "supports"
  - "query"
---

# Query optimizer statistics package selection

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports specifying the statistics package used by the query optimizer to improve predictability of query plans.

## Extended Definition

Spanner now supports specifying the statistics package used by the query optimizer to improve predictability of query plans.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- [https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions](https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions)

## Supporting Pages

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SET OPTIMIZER STATISTICS PACKAGE = 'auto 20240124 06 47 29UTC' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; -- Execute the same query with the default optimizer statistics package.
- SPANNER STATISTICS ; -- Set the optimizer statistics package and execute a query.
- Example: Optimizer statistics package (Click to expand) The following example shows how to execute queries using a specific optimizer statistics package with the Spanner JDBC driver. -- Show the available optimizer statistics packages in this database.
- SET OPTIMIZER STATISTICS PACKAGE = '' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; RETURN COMMIT STATS A property of type BOOL indicating whether statistics should be returned for transactions on this connection.

### "JDBC session management commands (PostgreSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- OPTIMIZER STATISTICS PACKAGE = 'auto 20240124 06 47 29UTC' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; -- Execute the same query with the default optimizer statistics package.
- SPANNER STATISTICS ; -- Set the optimizer statistics package and execute a query.
- Example: Optimizer statistics package (Click to expand) The following example shows how to execute queries using a specific optimizer statistics package with the Spanner JDBC driver. -- Show the available optimizer statistics packages in this database.
- OPTIMIZER STATISTICS PACKAGE = '' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; SPANNER.RETURN COMMIT STATS A property of type BOOL indicating whether statistics should be returned for transactions on this connection.

### List query optimizer versions \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions](https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- SUPPORTED OPTIMIZER VERSIONS An example result: VERSION RELEASE DATE IS DEFAULT 1 2019-06-18 false 2 2020-03-01 false 3 2021-08-01 true What's next To learn more about the query optimizer, see Query optimizer overview .
- Home Documentation Databases Spanner Guides Send feedback List query optimizer versions Stay organized with collections Save and categorize content based on your preferences.
- Spanner provides a built-in SPANNER SYS.SUPPORTED OPTIMIZER VERSIONS table to keep track of query optimizer versions.
- To learn more about how the query optimizer has evolved, see Query optimizer versions .

