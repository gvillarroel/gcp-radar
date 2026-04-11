---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.804Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery INFORMATION_SCHEMA COLUMNS view"
feature_slug: "bigquery-information-schema-columns-view"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma"
keywords:
  - "INFORMATION_SCHEMA.COLUMNS"
  - "dataset schema metadata"
  - "table columns metadata"
  - "COLUMNS view metadata"
  - "column metadata"
  - "COLUMNS view"
  - "COLUMNS"
---

# BigQuery INFORMATION_SCHEMA COLUMNS view

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The BigQuery INFORMATION_SCHEMA COLUMNS view became generally available.

## Extended Definition

The BigQuery INFORMATION_SCHEMA COLUMNS view became generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- The INFORMATION SCHEMA.COLUMNS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table also referred to as the datasetId . table name STRING The name of the table or view also referred to as the tableId . column name STRING The name of the column. ordinal position INT64 The 1-indexed offset of the column within the table; if it's a pseudo column such as PARTITIONTIME or PARTITIONDATE, the value is NULL . is nullable STRING YES or NO depending on whether the column's mode allows NULL values. data type STRING The column's GoogleSQL data type . is generated STRING The value is ALWAYS if the column is an automatically generated embedding column ; otherwise, the value is NEVER . generation expression STRING The value is the generation expression used to define the column if the column is an automatically generated embedding column; otherwise the value is NULL . is stored STRING The value is YES if the column is an automatically generated embedding column; otherwise, the value is NULL . is hidden STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is updatable STRING The value is always NULL . is system defined STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is partitioning column STRING YES or NO depending on whether the column is a partitioning column . clustering ordinal position INT64 The 1-indexed offset of the column within the table's clustering columns; the value is NULL if the table is not a clustered table. collation name STRING The name of the collation specification if it exists; otherwise, NULL .
- TABLE OPTIONS WHERE option name = 'description' AND option value LIKE '%test%' ; The result is similar to the following: +----------------+---------------+------------+-------------+-------------+--------------+ table catalog table schema table name option name option type option value +----------------+---------------+------------+-------------+-------------+--------------+ myproject mydataset mytable1 description STRING "test data" myproject mydataset mytable2 description STRING "test data" +----------------+---------------+------------+-------------+-------------+--------------+ COLUMNS view When you query the INFORMATION SCHEMA.COLUMNS view, the query results contain one row for each column (field) in a table.
- Examples The following example retrieves metadata from the INFORMATION SCHEMA.COLUMNS view for the population by zip 2010 table in the census bureau usa dataset.
- Use the INFORMATION SCHEMA.COLUMNS and INFORMATION SCHEMA.COLUMN FIELD PATHS views to retrieve metadata about the columns (fields) in a table.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- November 03, 2025 Libraries Go 1.72.0 (2025-10-28) Features bigquery/reservation: Add new BACKGROUND CHANGE DATA CAPTURE , BACKGROUND COLUMN METADATA INDEX , and BACKGROUND SEARCH INDEX REFRESH reservation assignment types ( 182df61 ) bigquery/reservation: Add new reservation IAM policy get/set/test methods ( 182df61 ) bigquery/reservation: Add support for creation and modification of new reservation groups ( 182df61 ) bigquery: Expose continuous query in config ( #13130 ) ( 2f0942b ) Bug Fixes bigquery/v2: Upgrade gRPC service registration func ( 8fffca2 ) bigquery: Upgrade gRPC service registration func ( 8fffca2 ) October 31, 2025 Feature We have increased the row capacity for pivot tables backed by BigQuery in Connected Sheets from 100,000 to 200,000 rows.
- February 03, 2025 Libraries Java 2.47.0 (2025-01-29) Features bigquery: Support resource tags for datasets in java client ( #3647 ) ( 01e0b74 ) Bug Fixes bigquery: Remove ReadAPI bypass in executeSelect() ( #3624 ) ( fadd992 ) Close bq read client ( #3644 ) ( 8833c97 ) Dependencies Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250112-2.0.0 ( #3651 ) ( fd06100 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.42.0 ( #3653 ) ( 1a14342 ) Update github/codeql-action action to v2.28.1 ( #3637 ) ( 858e517 ) Feature You can now use the BY NAME and CORRESPONDING modifiers with set operations to match columns by name instead of by position.
- Libraries Python 3.31.0 (2025-03-20) Features Add query text and total bytes processed to RowIterator ( #2140 ) ( 2d5f932 ) Add support for Python 3.13 ( 0842aa1 ) Bug Fixes Adding property setter for table constraints, #1990 ( #2092 ) ( f8572dd ) Allow protobuf 6.x ( 0842aa1 ) Avoid "Unable to determine type" warning with JSON columns in to dataframe ( #1876 ) ( 968020d ) Remove setup.cfg configuration for creating universal wheels ( #2146 ) ( d7f7685 ) Dependencies Remove Python 3.7 and 3.8 as supported runtimes ( #2133 ) ( fb7de39 ) Feature BigQuery now supports subqueries in row level access policies .
- January 06, 2026 Feature The CREATE EXTERNAL TABLE and LOAD DATA statements now support the following options: time zone : specify a time zone to use when loading data date format , datetime format , time format , and timestamp format : define how date and time values are formatted in your source files null markers : define the strings that represent NULL values in CSV files. source column match : specify how loaded columns are matched to the schema.

### "Generate text by using a Gemma open model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- 2 AS temperature , 100 AS max output tokens )); The output is similar to the following, with non-generated columns omitted for clarity: +----------------------------------------------+-------------------------+-----------------------------+-----+ result status prompt ... +----------------------------------------------+-------------------------+-----------------------------+-----+ Here are some key words from the Extract the key words from movie review: Romance: the movie review below: "romantic tryst," "elope" Comedy: Linda Arvidson (as Jennie) "Contrived Comedy" Burglary: and Harry Solter (as Frank) "burglar," "rob," "booty" Chase: are enjoying a romantic "chases," "escape" Director: "D.W. tryst, when in walks her...
- 2 AS temperature , 128 AS max output tokens )); The output is similar to the following, with non-generated columns omitted for clarity: +-----------------------------+-------------------------+-----------------------------+-----+ result status prompt ... +-----------------------------+-------------------------+-----------------------------+-----+ NEGATIVE Analyze the sentiment of movie review and classify it as either POSITIVE or NEGATIVE.
- Movie Review: Opulent sets and sumptuous costumes well photographed by Theodor Sparkuhl, and... +-----------------------------+-------------------------+-----------------------------+-----+ The results include the same columns documented for Perform keyword extraction .
- Moronic, sadistic,... +----------------------------------------------+-------------------------+-----------------------------+-----+ The results include the following columns: result : the generated text. status : the API response status for the corresponding row.

