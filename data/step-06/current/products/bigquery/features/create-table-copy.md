---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.724Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CREATE TABLE COPY"
feature_slug: "create-table-copy"
latest_feature_date: "2021-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table"
keywords:
  - "create"
  - "table"
  - "copy"
  - "creates"
  - "copying"
  - "existing"
---

# CREATE TABLE COPY

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

CREATE TABLE COPY creates a new table by copying an existing table.

## Extended Definition

CREATE TABLE COPY creates a new table by copying an existing table.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Take this step only if you want to grant access to the table to principals who don't have access to the dataset in which the table resides. resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting", pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" schema = <<EOF [ { "name": "ID", "type": "INT64", "mode": "NULLABLE", "description": "Item ID" }, { "name": "Item", "type": "STRING", "mode": "NULLABLE" } ] EOF } data "google iam policy" "default" { binding { role = "roles/bigquery.dataOwner" members = [ "user:raha@altostrat.com", ] } } resource "google bigquery table iam policy" "policy" { dataset id = google bigquery table.default.dataset id table id = google bigquery table.default.table id policy data = data.google iam policy.default.policy data } Create a table with a customer-managed encryption key The following example creates a table named mytable , and also uses the google kms crypto key and google kms key ring resources to specify a Cloud Key Management Service key for the table.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTable () { // Creates a new table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const schema = 'Name:string, Age:integer, Weight:float, IsMagic:boolean'; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created. ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- Create a table The following example creates a table named mytable : resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting", pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" schema = <<EOF [ { "name": "ID", "type": "INT64", "mode": "NULLABLE", "description": "Item ID" }, { "name": "Item", "type": "STRING", "mode": "NULLABLE" } ] EOF } Create a table and grant access to it The following example creates a table named mytable , then uses the google bigquery table iam policy resource to grant access to it.
- The following predefined IAM roles include bigquery.tables.get permissions: bigquery.metadataViewer bigquery.dataViewer bigquery.dataOwner bigquery.dataEditor bigquery.admin In addition, if a user has bigquery.datasets.create permissions, when that user creates a dataset, they are granted bigquery.dataOwner access to it. bigquery.dataOwner access gives the user the ability to retrieve table metadata.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- CREATE TABLE COPY : Create a table by copying schema and data from an existing table. column (column name column schema[, ...]) contains the table's schema information in a comma-separated list.
- The table option list specifies the: Table expiration time: January 1, 2025 at 00:00:00 UTC Partition expiration time: 1 day Description: A table that expires in 2025 Label: org unit = development Creating a new table from an existing table The following example creates a table named top words in mydataset from a query: CREATE TABLE mydataset . top words OPTIONS ( description = "Top ten words per Shakespeare corpus" ) AS SELECT corpus , ARRAY AGG ( STRUCT ( word , word count ) ORDER BY word count DESC LIMIT 10 ) AS top words FROM bigquery - public - data . samples . shakespeare GROUP BY corpus ; If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Examples Example 1 The following example creates a new table named newtable in mydataset with the same metadata as sourcetable : CREATE TABLE mydataset . newtable LIKE mydataset . sourcetable Example 2 The following example creates a new table named newtable in mydataset with the same metadata as sourcetable and the data from the SELECT statement: CREATE TABLE mydataset . newtable LIKE mydataset . sourcetable AS SELECT FROM mydataset . myothertable CREATE TABLE COPY statement Creates a table that has the same metadata and data as another table.
- If the source table is a table snapshot, then BigQuery creates a copy of the table snapshot.

### Copy a single-source table \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table)
- Source ID: `site-docs-reference-required-15`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // copyTable demonstrates copying a table from a source to a destination, and // allowing the copy to overwrite existing data by using truncation. func copyTable ( projectID , datasetID , srcID , dstID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // srcID := "sourcetable" // dstID := "destinationtable" ctx := context .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function copyTable () { // Copies src dataset:src table to dest dataset:dest table. / TODO(developer): Uncomment the following lines before running the sample / // const srcDatasetId = "my src dataset"; // const srcTableId = "my src table"; // const destDatasetId = "my dest dataset"; // const destTableId = "my dest table"; // Copy the table contents into another table const [ job ] = await bigquery . dataset ( srcDatasetId ) . table ( srcTableId ) . copy ( bigquery . dataset ( destDatasetId ). table ( destTableId )); console . log ( Job ${ job . id } completed. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId sourceTable = TableId . of ( sourceDatasetName , sourceTableId ); TableId destinationTable = TableId . of ( destinationDatasetName , destinationTableId ); // For more information on CopyJobConfiguration see: // https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/bigquery/JobConfiguration.html CopyJobConfiguration configuration = CopyJobConfiguration . newBuilder ( destinationTable , sourceTable ). build (); // For more information on Job see: // https://googleapis.dev/java/google-cloud-clients/latest/index.html?com/google/cloud/bigquery/package-summary.html Job job = bigquery . create ( JobInfo . of ( configuration )); // Blocks until this job completes its execution, either failing or succeeding.
- Job completedJob = job . waitFor (); if ( completedJob == null ) { System . out . println ( "Job not executed since it no longer exists." ); return ; } else if ( completedJob . getStatus (). getError () != null ) { System . out . println ( "BigQuery was unable to copy table due to an error: \n" + job . getStatus (). getError ()); return ; } System . out . println ( "Table copied successfully." ); } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Table copying job was interrupted. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .

