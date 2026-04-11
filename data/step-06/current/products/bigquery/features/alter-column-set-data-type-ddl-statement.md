---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.773Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ALTER COLUMN SET DATA TYPE DDL statement"
feature_slug: "alter-column-set-data-type-ddl-statement"
latest_feature_date: "2021-08-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/analysis-rules"
keywords:
  - "ALTER COLUMN SET DATA TYPE"
  - "column type change"
  - "ALTER COLUMN statement"
  - "SET DATA TYPE clause"
  - "DDL statement"
  - "SET DATA TYPE"
  - "ALTER COLUMN"
---

# ALTER COLUMN SET DATA TYPE DDL statement

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Adds the ALTER COLUMN SET DATA TYPE statement to BigQuery data definition language.

## Extended Definition

Adds the ALTER COLUMN SET DATA TYPE statement to BigQuery data definition language.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: The page is a broader DDL statement reference and may contain this in full, but the provided content does not explicitly document ALTER COLUMN SET DATA TYPE.

Evidence snippets:
- Examples The following example removes the NOT NULL constraint from a column called mycolumn : ALTER TABLE mydataset . mytable ALTER COLUMN mycolumn DROP NOT NULL ALTER COLUMN SET DATA TYPE statement Changes the data type of a column in a table in BigQuery to a less restrictive data type.
- Examples Changing the data type for a column The following example changes the data type of column c1 from an INT64 to NUMERIC : CREATE TABLE dataset . my table ( c1 INT64 ); ALTER TABLE dataset . my table ALTER COLUMN c1 SET DATA TYPE NUMERIC ; Changing the data type for a field The following example changes the data type of one of the fields in the s1 column: CREATE TABLE dataset . my table ( s1 STRUCT < a INT64 , b STRING > ); ALTER TABLE dataset . my table ALTER COLUMN s1 SET DATA TYPE STRUCT < a NUMERIC , b STRING > ; Changing precision The following example changes the precision of a parameterized data type column: CREATE TABLE dataset . my table ( pt NUMERIC ( 7 , 2 )); ALTER TABLE dataset . my table ALTER COLUMN pt SET DATA TYPE NUMERIC ( 8 , 2 ); ALTER COLUMN SET DEFAULT statement Sets the default value of a column.
- Syntax ALTER TABLE [ IF EXISTS ] table name ALTER COLUMN [ IF EXISTS ] column name SET DATA TYPE column schema Arguments (ALTER TABLE) IF EXISTS : If no table exists with that name, the statement has no effect. table name : The name of the table to alter.
- Example: data policies = ["{'name':'myproject.region-us.data policy name1'}", "{'name':'myproject.region-us.data policy name2'}"] The ALTER TABLE ALTER COLUMN statement supports the = and += operators to add data policies to a specific column.

### "Restrict data access using analysis rules \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- Source ID: `site-docs-root-2`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- You can enforce this rule on a view, using DDL statements or data clean rooms.
- You can enforce this rule on a view, using DDL statements or data clean rooms.
- You can enforce this rule on a view, using DDL statements or data clean rooms.
- You can enforce this rule on a view, using DDL statements or data clean rooms.

