---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.639Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Lineage tab"
feature_slug: "lineage-tab"
latest_feature_date: "2022-12-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "lineage"
  - "tab"
  - "table"
  - "properties"
  - "shows"
  - "how"
  - "moves"
  - "transforms"
---

# Lineage tab

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The Lineage tab in table properties shows how data moves and transforms through BigQuery.

## Extended Definition

The Lineage tab in table properties shows how data moves and transforms through BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- View table properties print ( "Got table ' {} . {} . {} '." . format ( table . project , table . dataset id , table . table id ) ) print ( "Table schema: {} " . format ( table . schema )) print ( "Table description: {} " . format ( table . description )) print ( "Table has {} rows" . format ( table . num rows )) Get table information using INFORMATION SCHEMA INFORMATION SCHEMA is a series of views that provide access to metadata about datasets, routines, tables, views, jobs, reservations, and streaming data.
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "io" "cloud.google.com/go/bigquery" "google.golang.org/api/iterator" ) // queryWithDestination demonstrates saving the results of a query to a specific table by setting the destination // via the API properties. func queryWithDestination ( w io .
- TABLE STORAGE ; The result is similar to the following: +---------------------+ total logical bytes +---------------------+ 971329178274633 +---------------------+ Example 2: The following example shows different storage bytes in GiB at the dataset(s) level for current project.
- TABLE STORAGE WHERE table type = 'BASE TABLE' GROUP BY table schema ORDER BY dataset name Example 3: The following example shows you how to forecast the price difference per dataset between logical and physical billing models for the next 30 days.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows a typical approach in Bash, which is to use double quotes to denote the string literals in the query, and then enclose the query itself in single quotes: 'SELECT FROM mydataset.mytable WHERE column1 = "value";' If you are copying the query from another location, you must also remove any comments in the query.
- Specify 0 to remove the existing expiration. --description= DESCRIPTION Updates the description of a dataset, table, table snapshot, model, or view. --destination reservation id= RESERVATION ID When used with the --reservation assignment flag, moves an existing reservation assignment to the specified reservation.
- For more information about using the bq update command, see the following: Updating dataset properties Managing tables Updating views Updating labels Working with transfers Updating table snapshot metadata bq version Use the bq version command to display the version number of your bq command-line tool.
- If specified with partitioning, then the table is first partitioned, and then each partition is clustered using the supplied columns. --connection property= KEY = VALUE A key-value pair that lets you specify connection-level properties to customize query behavior.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following example sets a new description on a table column called price : ALTER TABLE mydataset . mytable ALTER COLUMN price SET OPTIONS ( description = 'Price per unit' ); The following example sets a new description on a view column called total : ALTER VIEW mydataset . myview ALTER COLUMN total SET OPTIONS ( description = 'Total sales of the product' ); ALTER COLUMN DROP NOT NULL statement Removes a NOT NULL constraint from a column in a table in BigQuery.
- Examples The following example removes the NOT NULL constraint from a column called mycolumn : ALTER TABLE mydataset . mytable ALTER COLUMN mycolumn DROP NOT NULL ALTER COLUMN SET DATA TYPE statement Changes the data type of a column in a table in BigQuery to a less restrictive data type.
- Examples The following example sets the default value of the column mycolumn to the current time: ALTER TABLE mydataset . mytable ALTER COLUMN mycolumn SET DEFAULT CURRENT TIME (); ALTER COLUMN DROP DEFAULT statement Removes the default value assigned to a column.
- Examples The following example removes a replica that is located in the us-east4 region from the cross region dataset dataset: ALTER SCHEMA [ IF EXISTS ] cross region dataset DROP REPLICA us-east4 ALTER TABLE SET OPTIONS statement Sets the options on a table.

