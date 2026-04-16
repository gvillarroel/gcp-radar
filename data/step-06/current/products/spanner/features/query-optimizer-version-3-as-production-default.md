---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.315Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Query Optimizer version 3 as production default"
feature_slug: "query-optimizer-version-3-as-production-default"
latest_feature_date: "2021-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat"
keywords:
  - "environments"
  - "production"
  - "optimizer"
  - "version"
  - "default"
  - "query"
---

# Query Optimizer version 3 as production default

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner set Query Optimizer version 3 as the default optimizer version for production environments.

## Extended Definition

Spanner set Query Optimizer version 3 as the default optimizer version for production environments.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions](https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)

## Supporting Pages

### List query optimizer versions \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions](https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SUPPORTED OPTIMIZER VERSIONS An example result: VERSION RELEASE DATE IS DEFAULT 1 2019-06-18 false 2 2020-03-01 false 3 2021-08-01 true What's next To learn more about the query optimizer, see Query optimizer overview .
- Home Documentation Databases Spanner Guides Send feedback List query optimizer versions Stay organized with collections Save and categorize content based on your preferences.
- Spanner provides a built-in SPANNER SYS.SUPPORTED OPTIMIZER VERSIONS table to keep track of query optimizer versions.
- To learn more about how the query optimizer has evolved, see Query optimizer versions .

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Example: Optimizer version (Click to expand) The following example shows how to execute queries using a specific optimizer version with the Spanner JDBC driver. -- Set the optimizer version to 5 and execute a query.
- SET OPTIMIZER STATISTICS PACKAGE = 'auto 20240124 06 47 29UTC' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; -- Execute the same query with the default optimizer statistics package.
- SET OPTIMIZER VERSION = 'LATEST' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; -- Revert back to using the default optimizer version that has been set for the -- database.
- SET OPTIMIZER VERSION = '5' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; -- Execute the same query with the latest optimizer version.

### "JDBC session management commands (PostgreSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Example: Optimizer version (Click to expand) The following example shows how to execute queries using a specific optimizer version with the Spanner JDBC driver. -- Set the optimizer version to 5 and execute a query.
- OPTIMIZER STATISTICS PACKAGE = 'auto 20240124 06 47 29UTC' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; -- Execute the same query with the default optimizer statistics package.
- OPTIMIZER VERSION = 'LATEST' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; -- Revert back to using the default optimizer version that has been set for the -- database.
- OPTIMIZER VERSION = '5' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; -- Execute the same query with the latest optimizer version.

