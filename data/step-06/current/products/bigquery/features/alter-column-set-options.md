---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.732Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ALTER COLUMN SET OPTIONS"
feature_slug: "alter-column-set-options"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/adding-labels"
keywords:
  - "alter"
  - "column"
  - "set"
  - "options"
  - "statement"
  - "lets"
  - "bigquery"
  - "modify"
---

# ALTER COLUMN SET OPTIONS

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The ALTER COLUMN SET OPTIONS statement lets BigQuery modify column options through SQL.

## Extended Definition

The ALTER COLUMN SET OPTIONS statement lets BigQuery modify column options through SQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Examples Setting the expiration timestamp and description on a table The following example sets the expiration timestamp on a table to seven days from the execution time of the ALTER TABLE statement, and sets the description as well: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "Table that expires seven days from now" ) Setting the require partition filter attribute on a partitioned table The following example sets the timePartitioning.requirePartitionFilter attribute on a partitioned table : ALTER TABLE mydataset . mypartitionedtable SET OPTIONS ( require partition filter = true ) Queries that reference this table must use a filter on the partitioning column, or else BigQuery returns an error.
- Examples The following example sets a new description on a table column called price : ALTER TABLE mydataset . mytable ALTER COLUMN price SET OPTIONS ( description = 'Price per unit' ); The following example sets a new description on a view column called total : ALTER VIEW mydataset . myview ALTER COLUMN total SET OPTIONS ( description = 'Total sales of the product' ); ALTER COLUMN DROP NOT NULL statement Removes a NOT NULL constraint from a column in a table in BigQuery.
- Column options for a view have the same syntax and requirements as for a table, but with a different list of NAME and VALUE fields: NAME VALUE Details description STRING Example: description="a unique id" Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.tables.get The table to alter. bigquery.tables.update The table to alter.
- ALTER TABLE mydataset . mytable ADD COLUMN name STRING +--------------------------------+ mydataset.mytable number INT64 word STRING COLLATE 'und:ci' name STRING COLLATE +--------------------------------+ ALTER COLUMN SET OPTIONS statement Sets options, such as the column description, on a column in a table or view in BigQuery.

### Mask column data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- Source ID: `site-docs-reference-5`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example uses the CREATE TABLE statement and sets data policies on a column: CREATE TABLE myproject . table1 ( name INT64 OPTIONS ( data policies = [ "{'name':'myproject.region-us.data policy name1'}" , "{'name':'myproject.region-us.data policy name2'}" ]) ); The following example uses the ALTER COLUMN SET OPTIONS to add a data policy to an existing column on a table: ALTER TABLE myproject . table1 ALTER COLUMN column name SET OPTIONS ( data policies += [ "{'name':'myproject.region-us.data policy name1'}" , "{'name':'myproject.region-us.data policy name2'}" ]); API To assign a data policy to a column, call the patch method on the table and update the table schema with the applicable data policies.
- Assign a data policy To assign a data policy directly on a column, do one of the following: SQL To attach a data policy to a column, use the CREATE TABLE , ALTER TABLE ADD COLUMN , or ALTER COLUMN SET OPTIONS DDL statements.
- Unassign a data policy To unassign a data policy directly on a column, do one of the following: SQL To detach a data policy to a column, use the ALTER COLUMN SET OPTIONS DDL statement.
- You can unassign the last remaining data policy on a column using the ALTER COLUMN SET OPTIONS DDL statement.

### Add labels to resources \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)
- Source ID: `site-docs-reference-2`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to BigQuery In the query editor, enter the following statement: ALTER TABLE mydataset . mytable SET OPTIONS ( labels = [ ( 'department' , 'shipping' ), ( 'cost center' , 'logistics' ) ] ); Click play circle Run .
- Go to BigQuery In the query editor, enter the following statement: ALTER TABLE mydataset . mytable SET OPTIONS ( labels =[ ( "key1" , "" ), ( "key2" , "" ) ] ); Click play circle Run .
- Go to BigQuery In the query editor, enter the following statement: ALTER RESERVATION myreservation SET OPTIONS ( labels = [ ( 'sensitivity' , 'high' ) ] ); Click play circle Run .
- Go to BigQuery In the query editor, enter the following statement: ALTER SCHEMA mydataset SET OPTIONS ( labels = [ ( 'sensitivity' , 'high' ) ] ); Click play circle Run .

