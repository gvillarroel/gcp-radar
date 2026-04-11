---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.849Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery INSERT and MERGE without column names"
feature_slug: "bigquery-insert-and-merge-without-column-names"
latest_feature_date: "2019-06-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/data-manipulation-language"
keywords:
  - "columnless INSERT"
  - "columnless MERGE"
  - "omit column list"
  - "INSERT without column list"
  - "column names optional"
  - "INSERT INTO with SELECT"
  - "MERGE without column list"
  - "INSERT statement"
---

# BigQuery INSERT and MERGE without column names

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now allows omitting column names in INSERT and MERGE statements.

## Extended Definition

BigQuery now allows omitting column names in INSERT and MERGE statements.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)

## Supporting Pages

### "Data manipulation language (DML) statements in GoogleSQL \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- INSERT [ INTO ] target name [ ( column 1 [ , ..., column n ] ) ] input input ::= VALUES ( expr 1 [ , ..., expr n ] ) [ , ..., ( expr k 1 [ , ..., expr k n ] ) ] SELECT QUERY expr ::= value expression DEFAULT INSERT statements must comply with the following rules: Column names are optional if the target table is not an ingestion-time partitioned table .
- Value type compatibility Values added with an INSERT statement must be compatible with the target column's type.
- INSERT statement Use the INSERT statement when you want to add new rows to a table.

### "Transform data with data manipulation language (DML) \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Inventory ( product , quantity ) VALUES ( 'whole milk' , 10 ), ( 'almond milk' , 20 ), ( 'coffee beans' , 30 ), ( 'sugar' , 0 ), ( 'matcha' , 20 ), ( 'oat milk' , 30 ), ( 'chai' , 5 ) /+-------------------+----------+ product quantity +-------------------+----------+ almond milk 20 chai 5 coffee beans 30 matcha 20 oat milk 30 sugar 0 whole milk 10 +-------------------+----------+/ For more information about INSERT statements, see INSERT statement .
- INSERT DML concurrency During any 24-hour period, the first 1500 INSERT statements run immediately after they are submitted.
- If you must run DML INSERT statements more frequently, consider streaming data to your table using the Storage Write API .
- After this limit is reached, the concurrency of INSERT statements that write to a table is limited to 10.

