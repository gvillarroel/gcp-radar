---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.788Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ALTER COLUMN DROP NOT NULL constraint"
feature_slug: "bigquery-alter-column-drop-not-null-constraint"
latest_feature_date: "2021-04-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "make column nullable"
  - "NOT NULL constraint"
  - "ALTER COLUMN DROP NOT NULL"
  - "remove not-null"
  - "DROP NOT NULL"
  - "ALTER TABLE ALTER COLUMN"
  - "ALTER COLUMN"
---

# BigQuery ALTER COLUMN DROP NOT NULL constraint

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports ALTER COLUMN to drop a NOT NULL constraint.

## Extended Definition

BigQuery now supports ALTER COLUMN to drop a NOT NULL constraint.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following example sets a new description on a table column called price : ALTER TABLE mydataset . mytable ALTER COLUMN price SET OPTIONS ( description = 'Price per unit' ); The following example sets a new description on a view column called total : ALTER VIEW mydataset . myview ALTER COLUMN total SET OPTIONS ( description = 'Total sales of the product' ); ALTER COLUMN DROP NOT NULL statement Removes a NOT NULL constraint from a column in a table in BigQuery.
- Examples The following example removes the NOT NULL constraint from a column called mycolumn : ALTER TABLE mydataset . mytable ALTER COLUMN mycolumn DROP NOT NULL ALTER COLUMN SET DATA TYPE statement Changes the data type of a column in a table in BigQuery to a less restrictive data type.
- Example: data policies = ["{'name':'myproject.region-us.data policy name1'}", "{'name':'myproject.region-us.data policy name2'}"] The ALTER TABLE ALTER COLUMN statement supports the = and += operators to add data policies to a specific column.
- Example: data policies = ["{'name':'myproject.region-us.data policy name1'}", "{'name':'myproject.region-us.data policy name2'}"] The ALTER TABLE ALTER COLUMN statement supports the = and += operators to add data policies to a specific column.

