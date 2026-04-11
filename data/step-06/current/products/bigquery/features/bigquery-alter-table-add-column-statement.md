---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.801Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ALTER TABLE ADD COLUMN statement"
feature_slug: "bigquery-alter-table-add-column-statement"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "column addition"
  - "ALTER TABLE ... ADD COLUMN"
  - "ALTER TABLE ADD COLUMN"
  - "ADD COLUMN clause"
  - "table schema update"
  - "ALTER TABLE statement"
  - "ADD COLUMN"
---

# BigQuery ALTER TABLE ADD COLUMN statement

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports the ALTER TABLE ADD COLUMN statement.

## Extended Definition

BigQuery now supports the ALTER TABLE ADD COLUMN statement.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Clearing the expiration timestamp on a table The following example clears the expiration timestamp on a table so that it will not expire: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = NULL ) ALTER TABLE ADD COLUMN statement Adds one or more new columns to an existing table schema.
- Examples Setting the expiration timestamp and description on a table The following example sets the expiration timestamp on a table to seven days from the execution time of the ALTER TABLE statement, and sets the description as well: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "Table that expires seven days from now" ) Setting the require partition filter attribute on a partitioned table The following example sets the timePartitioning.requirePartitionFilter attribute on a partitioned table : ALTER TABLE mydataset . mypartitionedtable SET OPTIONS ( require partition filter = true ) Queries that reference this table must use a filter on the partitioning column, or else BigQuery returns an error.
- ALTER TABLE mydataset . mytable ADD COLUMN name STRING +--------------------------------+ mydataset.mytable number INT64 word STRING COLLATE 'und:ci' name STRING COLLATE +--------------------------------+ ALTER COLUMN SET OPTIONS statement Sets options, such as the column description, on a column in a table or view in BigQuery.
- ALTER TABLE mydataset . mytable ADD COLUMN A STRUCT < B GEOGRAPHY , C ARRAY < INT64 > , D INT64 NOT NULL , E TIMESTAMP OPTIONS ( description = "creation time" ) The query fails if the table already has a column named A , even if that column does not contain any of the nested columns that are specified.

