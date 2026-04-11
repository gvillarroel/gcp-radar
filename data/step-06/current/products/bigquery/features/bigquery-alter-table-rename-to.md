---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.786Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ALTER TABLE RENAME TO"
feature_slug: "bigquery-alter-table-rename-to"
latest_feature_date: "2021-05-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/data-manipulation-language"
  - "https://docs.cloud.google.com/bigquery/docs/adding-labels"
keywords:
  - "ALTER TABLE RENAME TO"
  - "rename table statement"
  - "table rename syntax"
  - "ALTER TABLE rename"
  - "table rename"
  - "RENAME TO"
  - "ALTER TABLE"
---

# BigQuery ALTER TABLE RENAME TO

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports renaming tables with the ALTER TABLE RENAME TO statement in SQL.

## Extended Definition

BigQuery now supports renaming tables with the ALTER TABLE RENAME TO statement in SQL.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- The ALTER TABLE RENAME TO statement recreates the table in the destination dataset with the creation timestamp of the original table.
- ALTER TABLE pk table ADD PRIMARY KEY ( x , y ) NOT ENFORCED ; ALTER TABLE RENAME TO statement Renames a clone, snapshot, or table.
- Examples Renaming a table The following example renames the table mydataset.mytable to mydataset.mynewtable : ALTER TABLE mydataset . mytable RENAME TO mynewtable ALTER TABLE RENAME COLUMN statement Caution: Renaming a column deletes all Data Catalog tags (deprecated) and Dataplex Universal Catalog aspects that are attached to it.
- Examples Renaming columns The following example renames columns from an existing table named mytable : Column A -> columnA Column B -> columnB ALTER TABLE mydataset . mytable RENAME COLUMN A TO columnA , RENAME COLUMN IF EXISTS B TO columnB If column A does not exist, then the statement fails.

### "Transform data with data manipulation language (DML) \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- To create a new table with fine-grained DML, use the CREATE TABLE statement : CREATE TABLE mydataset . mytable ( product STRING , inventory INT64 ) OPTIONS ( enable fine grained mutations = TRUE ); To alter an existing table with fine-grained DML, use the ALTER TABLE statement : ALTER TABLE mydataset . mytable SET OPTIONS ( enable fine grained mutations = TRUE ); To alter all existing tables in a dataset with fine-grained DML, use the ALTER TABLE statement : FOR record IN ( SELECT CONCAT ( table schema , '.' , table name ) AS table path FROM mydataset .
- TABLES ) DO EXECUTE IMMEDIATE "ALTER TABLE " record . table path " SET OPTIONS(enable fine grained mutations = TRUE)" ; END FOR ; After the enable fine grained mutations option is set to TRUE , mutating DML statements are run with fine-grained DML capabilities enabled and use existing DML statement syntax .
- ALTER TABLE mydataset . mytable SET OPTIONS ( enable fine grained mutations = FALSE ); When disabling fine-grained DML, it may take some time for all deleted data to be fully processed, see Deleted data considerations .
- Enable fine-grained DML To enable fine-grained DML, set the enable fine grained mutations table option to TRUE when you run a CREATE TABLE or ALTER TABLE DDL statement.

### Add labels to resources \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, enter the following statement: ALTER TABLE mydataset . mytable SET OPTIONS ( labels = [ ( 'department' , 'shipping' ), ( 'cost center' , 'logistics' ) ] ); Click play circle Run .
- Go to BigQuery In the query editor, enter the following statement: ALTER TABLE mydataset . mytable SET OPTIONS ( labels =[ ( "key1" , "" ), ( "key2" , "" ) ] ); Click play circle Run .
- SQL Use the ALTER TABLE SET OPTIONS DDL statement to set the labels on an existing table, or the ALTER VIEW SET OPTIONS DDL statement to set the labels on an existing view.
- SQL To add a label without a value, use the ALTER TABLE SET OPTIONS DDL statement : In the Google Cloud console, go to the BigQuery page.

