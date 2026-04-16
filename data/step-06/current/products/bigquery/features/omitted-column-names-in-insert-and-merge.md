---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.804Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Omitted column names in INSERT and MERGE"
feature_slug: "omitted-column-names-in-insert-and-merge"
latest_feature_date: "2019-11-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "omitted"
  - "column"
  - "names"
  - "insert"
  - "merge"
  - "bigquery"
  - "supports"
  - "omitting"
---

# Omitted column names in INSERT and MERGE

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports omitting column names in INSERT and MERGE statements; BigQuery supports omitting column names in INSERT and MERGE statements.

## Extended Definition

BigQuery supports omitting column names in INSERT and MERGE statements; BigQuery supports omitting column names in INSERT and MERGE statements.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Synopsis bq insert [ FLAGS ] TABLE FILE Examples bq insert --ignore unknown values --template suffix = insert myDataset.myTable /tmp/myData.json echo '{"a":1, "b":2}' bq insert myDataset.myTable Flags and arguments The bq insert command uses the following flags and arguments: --ignore unknown values={true false} or -i={true false} When set to true , BigQuery ignores any key-value pairs that don't match the table's schema, and inserts the row with the data that does match the schema.
- If --autodetect is false , and no schema is specified by using the --schema flag, and the destination table exists, then the schema of the destination table is used. --clustering fields= COLUMNS A comma-separated list of up to four column names that specifies the fields to use for table clustering . --column name character map= SCOPE Defines the scope and handling of characters in column names, with the option of enabling flexible column names .
- The default value is 100 . --selected fields= COLUMN NAMES or -c= COLUMN NAMES A comma-separated list that specifies a subset of fields (including nested and repeated fields) to return when showing table data.
- Each tag must have the namespaced key name and value short name . --clustering fields= COLUMNS A comma-separated list of up to four column names that specifies the fields to use for table clustering .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- When both the column list and the AS query statement clause are present, BigQuery ignores the names in the AS query statement clause and matches the columns with the column list by position.
- When the AS query statement clause is present and the column list is absent, BigQuery determines the column names and types from the AS query statement clause.
- Next, it inserts a new row into TargetTable , passing the value of target date as one of the column names.

### "Data manipulation language (DML) statements in GoogleSQL \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Omitting column names In the not matched by target clause , when the column names of target table are omitted, all columns in the target table are included in ascending order based on their ordinal positions.
- Omitting column names When the column names are omitted, all columns in the target table are included in ascending order based on their ordinal positions.
- MERGE [ INTO ] target name [[ AS ] alias ] USING source name [[ AS ] alias ] ON merge condition { when clause } + when clause ::= matched clause not matched by target clause not matched by source clause matched clause ::= WHEN MATCHED [ AND search condition ] THEN { merge update clause merge delete clause } not matched by target clause ::= WHEN NOT MATCHED [ BY TARGET ] [ AND search condition ] THEN merge insert clause not matched by source clause ::= WHEN NOT MATCHED BY SOURCE [ AND search condition ] THEN { merge update clause merge delete clause } merge condition ::= bool expression search condition ::= bool expression merge update clause ::= UPDATE SET update item [ , update item ] update item ::= column name = expression merge delete clause ::= DELETE merge insert clause ::= INSERT [ ( column 1 [ , ..., column n ] ) ] input input ::= VALUES ( expr 1 [ , ..., expr n ] ) ROW expr ::= expression DEFAULT Where: target name target name is the name of the table you’re changing. source name source name is a table name or subquery. merge condition A MERGE statement performs a JOIN between the target and the source.
- DetailedInventory WHERE product = 'microwave' )) +----------------------+----------+--------------------+----------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+----------+----------------+ countertop microwave 20 NULL [] NULL dishwasher 30 false [] NULL dryer 30 false [] NULL front load washer 20 false [] NULL microwave 20 false [] NULL oven 5 false [] NULL refrigerator 10 false [] NULL top load washer 10 false [] NULL +----------------------+----------+--------------------+----------+----------------+ INSERT without column names INSERT dataset .

