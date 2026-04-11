---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.774Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CREATE TABLE LIKE statement"
feature_slug: "create-table-like-statement"
latest_feature_date: "2021-08-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "table clone via LIKE"
  - "table schema template"
  - "CREATE TABLE LIKE statement"
  - "CREATE TABLE LIKE syntax"
  - "CREATE TABLE LIKE"
  - "DDL CREATE TABLE"
  - "LIKE clause"
---

# CREATE TABLE LIKE statement

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Adds support for the CREATE TABLE LIKE data definition statement in BigQuery.

## Extended Definition

Adds support for the CREATE TABLE LIKE data definition statement in BigQuery.

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
- When new data is available, append the data of the 1993 year to the destination table using the INSERT INTO SELECT statement: INSERT INTO myotherdataset . orders SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1993 ; Example 2 The following example inserts data into an ingestion-time partitioned table: CREATE TABLE mydataset . orders ( id String , numeric id INT64 ) PARTITION BY PARTITIONDATE ; After creating a partitioned table, you can insert data into the ingestion-time partitioned table: INSERT INTO mydataset . orders ( PARTITIONTIME , id , numeric id ) SELECT TIMESTAMP ( "2023-01-01" ), id , numeric id , FROM mydataset . ordersof23 WHERE numeric id > 4000000 ; CREATE TABLE LIKE statement Creates a new table with all of the same metadata of another table.
- The CREATE TABLE LIKE statement copies only the metadata of the source table.
- When both the LIKE and the AS query statement clause are present, the column list in the query statement must match the columns of the table referenced by the LIKE clause.
- This statement supports the following variants, which have the same limitations: CREATE TABLE LIKE : Create a table with the same schema as an existing table.

