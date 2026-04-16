---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.267Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner query optimizer version 6"
feature_slug: "spanner-query-optimizer-version-6"
latest_feature_date: "2023-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat"
keywords:
  - "optimizer"
  - "version"
  - "while"
  - "generally"
  - "available"
  - "made"
  - "query"
---

# Spanner query optimizer version 6

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner made query optimizer version 6 generally available, while version 5 remains the default optimizer in production.

## Extended Definition

Cloud Spanner made query optimizer version 6 generally available, while version 5 remains the default optimizer in production.

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
- Final score: 189
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
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Example: Optimizer version (Click to expand) The following example shows how to execute queries using a specific optimizer version with the Spanner JDBC driver. -- Set the optimizer version to 5 and execute a query.
- SET OPTIMIZER VERSION = '5' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; -- Execute the same query with the latest optimizer version.
- Example: Optimizer statistics package (Click to expand) The following example shows how to execute queries using a specific optimizer statistics package with the Spanner JDBC driver. -- Show the available optimizer statistics packages in this database.
- SET OPTIMIZER VERSION = '' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; OPTIMIZER STATISTICS PACKAGE A property of type STRING indicating the current optimizer statistics package that is used by this connection.

### "JDBC session management commands (PostgreSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Example: Optimizer version (Click to expand) The following example shows how to execute queries using a specific optimizer version with the Spanner JDBC driver. -- Set the optimizer version to 5 and execute a query.
- OPTIMIZER VERSION = '5' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; -- Execute the same query with the latest optimizer version.
- Example: Optimizer statistics package (Click to expand) The following example shows how to execute queries using a specific optimizer statistics package with the Spanner JDBC driver. -- Show the available optimizer statistics packages in this database.
- OPTIMIZER VERSION = '' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; SPANNER.OPTIMIZER STATISTICS PACKAGE A property of type STRING indicating the current optimizer statistics package that is used by this connection.

