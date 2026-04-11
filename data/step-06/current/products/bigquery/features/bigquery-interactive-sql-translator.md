---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.363Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery interactive SQL translator"
feature_slug: "bigquery-interactive-sql-translator"
latest_feature_date: "2025-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/migration-intro"
keywords:
  - "SQL dialect converter"
  - "BigQuery SQL converter"
  - "IBM DB2 SQL translation"
  - "Greenplum SQL translation"
  - "SQL dialect translator"
  - "SQLite to GoogleSQL"
  - "interactive SQL translator"
  - "interactive translator"
---

# BigQuery interactive SQL translator

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery includes an interactive SQL translator to convert external SQL dialects into GoogleSQL; The BigQuery interactive SQL translator converts SQL dialects such as IBM DB2, Greenplum, and SQLite to GoogleSQL.

## Extended Definition

The interactive SQL translator in BigQuery (as described in BigQuery Migration Service documentation) is used to translate individual SQL queries interactively during migration work, as a counterpart to bulk migration with a batch SQL translator. In other words, it provides a query-by-query translation workflow for migrating SQL to the target language used in BigQuery.

## Evidence Summary

The cited page confirms the interactive translator is a BigQuery migration option for translating individual queries, contrasted with the batch translator for bulk SQL script migration.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)

## Supporting Pages

### Introduction to BigQuery Migration Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- You can use the batch SQL translator to migrate your SQL scripts in bulk, or the interactive SQL translator to translate individual queries.
- For more information on using the interactive SQL translator, see Interactive SQL translator .

