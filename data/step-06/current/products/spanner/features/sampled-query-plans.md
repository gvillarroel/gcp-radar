---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.278Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Sampled query plans"
feature_slug: "sampled-query-plans"
latest_feature_date: "2023-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
  - "https://docs.cloud.google.com/spanner/docs/query-execution-operators"
  - "https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview"
keywords:
  - "sampled"
  - "enabling"
  - "plans"
  - "offers"
  - "preview"
  - "query"
---

# Sampled query plans

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now offers sampled query plans in Preview, enabling users to view historical query plan samples and compare query performance over time.

## Extended Definition

Spanner now offers sampled query plans in Preview, enabling users to view historical query plan samples and compare query performance over time.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- [https://docs.cloud.google.com/spanner/docs/query-execution-operators](https://docs.cloud.google.com/spanner/docs/query-execution-operators)
- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)

## Supporting Pages

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Learn more about Query Execution Plans .
- The Google Cloud console displays the Singers table's Spanner Studio page with a new query tab that contains the INSERT statement that you edit to insert a row in the Singers table and view the result of that insertion: GoogleSQL -- Add new values in the VALUES clause in order of the column list. -- Each value must be type compatible with its associated column.
- Home Documentation Databases Spanner Guides Send feedback Create and query a database in the Google Cloud console Stay organized with collections Save and categorize content based on your preferences.
- The Singers table now has two rows: GoogleSQL PostgreSQL Run a query in the Google Cloud console On the database Overview page, click Spanner Studio in the navigation menu.

### Query execution operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-execution-operators](https://docs.cloud.google.com/spanner/docs/query-execution-operators)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- This page describes the operators used in Spanner query execution plans .
- The following table shows some common mappings: SQL Query execution operator Table reference Table Scan, Index Scan WHERE Filter Scan , Filter GROUP BY Aggregate Scalar function (such as ISNULL ) Compute Aggregate function (such as SUM ) Aggregate JOIN Any join operator; see Joins Subquery Scalar or Array subquery LIMIT Limit , Sort Limit ORDER BY Sort, Sort Limit Query execution operators This section lists all query execution operators that can make up a query execution plan in Spanner.
- Name Summary Distributed union Conceptually divides one or more tables into multiple splits, remotely evaluates a subquery independently on each split, and then unions all results.
- Home Documentation Databases Spanner Reference Send feedback Query execution operators Stay organized with collections Save and categorize content based on your preferences.

### Autoscaler tool overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

