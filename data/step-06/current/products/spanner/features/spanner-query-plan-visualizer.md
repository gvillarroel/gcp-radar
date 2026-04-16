---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.322Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner query plan visualizer"
feature_slug: "spanner-query-plan-visualizer"
latest_feature_date: "2021-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
  - "https://docs.cloud.google.com/spanner/docs/query-execution-operators"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
keywords:
  - "inspect"
  - "tune"
  - "visualizer"
  - "plan"
  - "console"
  - "query"
  - "adds"
---

# Spanner query plan visualizer

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner adds a query plan visualizer in Cloud Console to inspect and tune query execution plans.

## Extended Definition

Spanner adds a query plan visualizer in Cloud Console to inspect and tune query execution plans.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- [https://docs.cloud.google.com/spanner/docs/query-execution-operators](https://docs.cloud.google.com/spanner/docs/query-execution-operators)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)

## Supporting Pages

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- The Google Cloud console displays the Singers table's Spanner Studio page with a new query tab that contains the INSERT statement that you edit to insert a row in the Singers table and view the result of that insertion: GoogleSQL -- Add new values in the VALUES clause in order of the column list. -- Each value must be type compatible with its associated column.
- Home Documentation Databases Spanner Guides Send feedback Create and query a database in the Google Cloud console Stay organized with collections Save and categorize content based on your preferences.
- The Singers table now has two rows: GoogleSQL PostgreSQL Run a query in the Google Cloud console On the database Overview page, click Spanner Studio in the navigation menu.
- Create a schema for your database Note: Spanner Studio (formerly labeled Query in the Google Cloud console) supports SQL, DML, and DDL operations in a single editor.

### Query execution operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-execution-operators](https://docs.cloud.google.com/spanner/docs/query-execution-operators)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For information about how to retrieve an execution plan for a specific query using the Google Cloud console, see Understanding how Spanner executes queries .
- The following table shows some common mappings: SQL Query execution operator Table reference Table Scan, Index Scan WHERE Filter Scan , Filter GROUP BY Aggregate Scalar function (such as ISNULL ) Compute Aggregate function (such as SUM ) Aggregate JOIN Any join operator; see Joins Subquery Scalar or Array subquery LIMIT Limit , Sort Limit ORDER BY Sort, Sort Limit Query execution operators This section lists all query execution operators that can make up a query execution plan in Spanner.
- This page describes the operators used in Spanner query execution plans .
- Name Summary Distributed union Conceptually divides one or more tables into multiple splits, remotely evaluates a subquery independently on each split, and then unions all results.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- You can review these plans in the Google Cloud console, and contact support if you need help understanding your query performance.
- If you are planning to repopulate a table with the same kind of data (for example, when running consecutive performance tests), you can instead run a DELETE query on the rows containing data you no longer need.
- Spanner offers query execution plans .
- The updated command for creating the table and index looks like this: CREATE TABLE Player ( PlayerID STRING ( 36 ) NOT NULL , IndexPartition INT64 NOT NULL Attribute INT64 NOT NULL ) PRIMARY KEY ( PlayerID ) CREATE INDEX idx attribute ON Player ( IndexPartition , Attribute ) The IndexPartition value needs to have a limited range for efficient querying, but it should also have range that is at least double the number of splits for efficient distribution.

