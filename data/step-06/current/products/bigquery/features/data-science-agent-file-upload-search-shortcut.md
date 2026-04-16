---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.300Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Data Science Agent file upload search shortcut"
feature_slug: "data-science-agent-file-upload-search-shortcut"
latest_feature_date: "2025-09-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/access-historical-data"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata-links"
keywords:
  - "science"
  - "agent"
  - "file"
  - "upload"
  - "search"
  - "shortcut"
  - "bigquery"
  - "supports"
---

# Data Science Agent file upload search shortcut

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The Data Science Agent in BigQuery supports + syntax to search files for upload.

## Extended Definition

The Data Science Agent in BigQuery supports + syntax to search files for upload.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata](https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata-links](https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata-links)

## Supporting Pages

### Access historical data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data)
- Source ID: `site-docs-reference-2`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For this example, we choose the current time as we're about to delete the table immediately afterwards. / const snapshotEpoch = Date . now (); // Delete the table await bigquery . dataset ( datasetId ) . table ( tableId ) . delete (); console . log ( Table ${ tableId } deleted. ); // Construct the restore-from table ID using a snapshot decorator. const snapshotTableId = ${ tableId } @ ${ snapshotEpoch } ; // Construct and run a copy job. await bigquery . dataset ( datasetId ) . table ( snapshotTableId ) . copy ( bigquery . dataset ( datasetId ). table ( recoveredTableId )); console . log ( Copied data from deleted table ${ tableId } to ${ recoveredTableId } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- TableId . of ( datasetName , recoverTableName ), TableId . of ( datasetName , snapshotTableId )) . build (); Job job = bigquery . create ( JobInfo . of ( configuration )); job = job . waitFor (); if ( job . isDone () && job . getStatus (). getError () == null ) { System . out . println ( "Undelete table recovered successfully." ); } else { System . out . println ( "BigQuery was unable to copy the table due to an error: \n" + job . getStatus (). getError ()); return ; } } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Table not found. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function undeleteTable () { // Undeletes "my table to undelete" from "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table to undelete"; // const recoveredTableId = "my recovered table"; / TODO(developer): Choose an appropriate snapshot point as epoch milliseconds.
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "time" "cloud.google.com/go/bigquery" ) // deleteAndUndeleteTable demonstrates how to recover a deleted table by copying it from a point in time // that predates the deletion event. func deleteAndUndeleteTable ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .

### SCHEMATA view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata](https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata)
- Source ID: `site-docs-reference-3`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each of the following predefined IAM roles includes the permissions that you need in order to get the SCHEMATA view: roles/bigquery.admin roles/bigquery.dataEditor roles/bigquery.dataOwner roles/bigquery.dataViewer For more information about BigQuery permissions, see Access control with IAM .
- Before you begin To query the SCHEMATA view for dataset metadata, you need the bigquery.datasets.get Identity and Access Management (IAM) permission at the project level.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.

### SCHEMATA_LINKS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata-links](https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata-links)
- Source ID: `site-docs-reference-3`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each of the following predefined IAM roles includes the permissions that you need in order to query the INFORMATION SCHEMA.SCHEMATA LINKS view: roles/bigquery.admin roles/bigquery.dataEditor roles/bigquery.dataOwner roles/bigquery.dataViewer For more information about BigQuery permissions, see Access control with IAM .
- Required permission To query the INFORMATION SCHEMA.SCHEMATA LINKS view, you need the bigquery.datasets.get Identity and Access Management (IAM) permission at the project level.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- SCHEMATA LINKS view The INFORMATION SCHEMA.SCHEMATA LINKS view contains one row for each linked dataset that is shared using BigQuery sharing.

