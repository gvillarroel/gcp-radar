---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.837Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ALTER TABLE and ALTER VIEW statements"
feature_slug: "bigquery-alter-table-and-alter-view-statements"
latest_feature_date: "2019-12-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "ALTER TABLE SET OPTIONS"
  - "BigQuery DDL alter table"
  - "ALTER VIEW SET OPTIONS"
  - "BigQuery DDL alter view"
  - "DDL ALTER TABLE"
  - "DDL ALTER VIEW"
  - "ALTER TABLE"
  - "ALTER VIEW"
---

# BigQuery ALTER TABLE and ALTER VIEW statements

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports ALTER TABLE and ALTER VIEW DDL statements for setting options on tables and views.

## Extended Definition

BigQuery now supports ALTER TABLE and ALTER VIEW DDL statements for setting options on tables and views.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following example removes the default value from the column mycolumn : ALTER TABLE mydataset . mytable ALTER COLUMN mycolumn DROP DEFAULT ; ALTER VIEW SET OPTIONS statement Sets the options on a view .
- Examples The following example sets a new description on a table column called price : ALTER TABLE mydataset . mytable ALTER COLUMN price SET OPTIONS ( description = 'Price per unit' ); The following example sets a new description on a view column called total : ALTER VIEW mydataset . myview ALTER COLUMN total SET OPTIONS ( description = 'Total sales of the product' ); ALTER COLUMN DROP NOT NULL statement Removes a NOT NULL constraint from a column in a table in BigQuery.
- Examples The following example removes a replica that is located in the us-east4 region from the cross region dataset dataset: ALTER SCHEMA [ IF EXISTS ] cross region dataset DROP REPLICA us-east4 ALTER TABLE SET OPTIONS statement Sets the options on a table.
- The behavior is equivalent to running ALTER TABLE SET OPTIONS after the table is copied.

