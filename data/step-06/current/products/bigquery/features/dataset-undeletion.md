---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.491Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Dataset undeletion"
feature_slug: "dataset-undeletion"
latest_feature_date: "2024-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/access-historical-data"
  - "https://docs.cloud.google.com/bigquery/docs/managing-datasets"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "dataset"
  - "undeletion"
  - "bigquery"
  - "can"
  - "recover"
  - "deleted"
  - "within"
  - "time"
---

# Dataset undeletion

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery can recover a deleted dataset within the time travel window to its deleted state.

## Extended Definition

BigQuery can recover a deleted dataset within the time travel window to its deleted state.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data)
- [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Access historical data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For this example, we choose the current time as we're about to delete the table immediately afterwards. / const snapshotEpoch = Date . now (); // Delete the table await bigquery . dataset ( datasetId ) . table ( tableId ) . delete (); console . log ( Table ${ tableId } deleted. ); // Construct the restore-from table ID using a snapshot decorator. const snapshotTableId = ${ tableId } @ ${ snapshotEpoch } ; // Construct and run a copy job. await bigquery . dataset ( datasetId ) . table ( snapshotTableId ) . copy ( bigquery . dataset ( datasetId ). table ( recoveredTableId )); console . log ( Copied data from deleted table ${ tableId } to ${ recoveredTableId } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "time" "cloud.google.com/go/bigquery" ) // deleteAndUndeleteTable demonstrates how to recover a deleted table by copying it from a point in time // that predates the deletion event. func deleteAndUndeleteTable ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- Access historical data BigQuery lets you query and restore data stored in BigQuery that has been changed or deleted within your time travel window.
- TableId . of ( datasetName , recoverTableName ), TableId . of ( datasetName , snapshotTableId )) . build (); Job job = bigquery . create ( JobInfo . of ( configuration )); job = job . waitFor (); if ( job . isDone () && job . getStatus (). getError () == null ) { System . out . println ( "Undelete table recovered successfully." ); } else { System . out . println ( "BigQuery was unable to copy the table due to an error: \n" + job . getStatus (). getError ()); return ; } } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Table not found. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .

### Manage datasets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- Source ID: `site-docs-reference-required-11`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. require "google/cloud/bigquery" def delete dataset and contents dataset id = "my dataset with tables" bigquery = Google :: Cloud :: Bigquery . new Use the force parameter to delete a dataset and its contents dataset = bigquery . dataset dataset id dataset . delete force : true puts "Dataset #{ dataset id } and contents deleted." end Restore tables from deleted datasets You can restore tables from a deleted dataset that are within the dataset's time travel window .
- Copy the originaldataset.table1 table at the time 1418864998000 into the new dataset: bq cp originaldataset.table1@1418864998000 mydataset.mytable To find the names of the nonempty tables that were in the deleted dataset, query the dataset's INFORMATION SCHEMA.TABLE STORAGE view within the time travel window.
- Then create a transfer configuration to copy the dataset. // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function deleteDataset () { // Deletes a dataset named "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // Create a reference to the existing dataset const dataset = bigquery . dataset ( datasetId ); // Delete the dataset and its contents await dataset . delete ({ force : true }); console . log ( Dataset ${ dataset . id } deleted. ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); DatasetId datasetId = DatasetId . of ( projectId , datasetName ); boolean success = bigquery . delete ( datasetId , DatasetDeleteOption . delete Contents ()); if ( success ) { System . out . println ( "Dataset deleted successfully" ); } else { System . out . println ( "Dataset was not found" ); } } catch ( BigQueryException e ) { System . out . println ( "Dataset was not deleted. \n" + e . toString ()); } } } The following code sample deletes a dataset and all of its contents: / Copyright 2020 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.
- The table option list specifies the: Table expiration time: January 1, 2025 at 00:00:00 UTC Partition expiration time: 1 day Description: A table that expires in 2025 Label: org unit = development Creating a new table from an existing table The following example creates a table named top words in mydataset from a query: CREATE TABLE mydataset . top words OPTIONS ( description = "Top ten words per Shakespeare corpus" ) AS SELECT corpus , ARRAY AGG ( STRUCT ( word , word count ) ORDER BY word count DESC LIMIT 10 ) AS top words FROM bigquery - public - data . samples . shakespeare GROUP BY corpus ; If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Examples Setting the expiration timestamp and description on a table The following example sets the expiration timestamp on a table to seven days from the execution time of the ALTER TABLE statement, and sets the description as well: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "Table that expires seven days from now" ) Setting the require partition filter attribute on a partitioned table The following example sets the timePartitioning.requirePartitionFilter attribute on a partitioned table : ALTER TABLE mydataset . mypartitionedtable SET OPTIONS ( require partition filter = true ) Queries that reference this table must use a filter on the partitioning column, or else BigQuery returns an error.

