---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.810Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Google Sheets external table sheet and range selection"
feature_slug: "google-sheets-external-table-sheet-and-range-selection"
latest_feature_date: "2019-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/connected-sheets"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "sheets"
  - "external"
  - "table"
  - "sheet"
  - "range"
  - "selection"
  - "bigquery"
  - "tables"
---

# Google Sheets external table sheet and range selection

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery external tables linked to Google Sheets can target a specific sheet or cell range.

## Extended Definition

BigQuery external tables linked to Google Sheets can target a specific sheet or cell range.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/connected-sheets](https://docs.cloud.google.com/bigquery/docs/connected-sheets)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- TABLES WHERE table name = 'population by zip 2010' ; The result is similar to the following: +------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ table name ddl +------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ population by zip 2010 CREATE TABLE bigquery-public-data.census bureau usa.population by zip 2010 ( geo id STRING OPTIONS(description="Geo code"), zipcode STRING NOT NULL OPTIONS(description="Five digit ZIP Code Tabulation Area Census Code"), population INT64 OPTIONS(description="The total count of the population for this segment."), minimum age INT64 OPTIONS(description="The minimum age in the age range.
- Supported values for CREATE EXTERNAL TABLE include: AVRO , CLOUD BIGTABLE , CSV , DATASTORE BACKUP , DELTA LAKE ( preview ), GOOGLE SHEETS , NEWLINE DELIMITED JSON (or JSON ), ORC , PARQUET .
- Applies to: CSV, JSON, and Google Sheets data. max staleness INTERVAL Applicable for BigLake tables and object tables .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDestinationTable () { // Queries the U.S. given names dataset for the state of Texas // and saves results to permanent table. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Create destination table reference const dataset = bigquery . dataset ( datasetId ); const destinationTable = dataset . table ( tableId ); const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , destination : destinationTable , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); console . log ( Query results loaded to table ${ destinationTable . id } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .

### Using Connected Sheets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/connected-sheets](https://docs.cloud.google.com/bigquery/docs/connected-sheets)
- Source ID: `site-docs-reference-5`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open tables in Connected Sheets To open a table in Connected Sheets, follow these steps: In the Google Cloud console, go to the BigQuery page.
- With Connected Sheets, you can preview your BigQuery data and use it in pivot tables, formulas, and charts built from the entire set of data.
- When you use Connected Sheets to create a chart, pivot table, formula, or other computed cell from your data, Connected Sheets runs a query in BigQuery on your behalf.
- Click Overview > Tables , and next to your table name, click more vert View actions , and then select Open in > Connected Sheets .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Example: replication interval seconds=900 Required permissions This statement requires the following IAM permissions : bigquery.tables.create bigquery.tables.get bigquery.tables.getData bigquery.tables.replicateData bigquery.jobs.create Example The following example creates a materialized view replica named mv replica in bq dataset : CREATE MATERIALIZED VIEW myproject . bq dataset . mv replica OPTIONS ( replication interval seconds = 600 ) AS REPLICA OF myproject.s3 dataset.my s3 mv CREATE EXTERNAL SCHEMA statement Creates a new federated dataset.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.tables.delete The external table to delete. bigquery.tables.get The external table to delete.
- Supported values for CREATE EXTERNAL TABLE include: AVRO , CLOUD BIGTABLE , CSV , DATASTORE BACKUP , DELTA LAKE ( preview ), GOOGLE SHEETS , NEWLINE DELIMITED JSON (or JSON ), ORC , PARQUET .
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.tables.create The dataset where you create the external table.

