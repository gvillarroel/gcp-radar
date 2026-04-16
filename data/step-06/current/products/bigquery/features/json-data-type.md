---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.652Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "JSON data type"
feature_slug: "json-data-type"
latest_feature_date: "2022-10-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/display-video-transformation"
  - "https://docs.cloud.google.com/bigquery/docs/access-historical-data"
keywords:
  - "json"
  - "type"
  - "bigquery"
  - "supports"
  - "native"
  - "column"
  - "standard"
  - "sql"
---

# JSON data type

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports JSON as a native column type; BigQuery standard SQL supports a native JSON data type for storing JSON data.

## Extended Definition

BigQuery supports JSON as a native column type; BigQuery standard SQL supports a native JSON data type for storing JSON data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/data-types](https://docs.cloud.google.com/bigquery/docs/data-types)
- [https://docs.cloud.google.com/bigquery/docs/display-video-transformation](https://docs.cloud.google.com/bigquery/docs/display-video-transformation)
- [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data)

## Supporting Pages

### "Display & Video 360 data transformation \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/display-video-transformation](https://docs.cloud.google.com/bigquery/docs/display-video-transformation)
- Source ID: `site-api-reference`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Display & Video 360 resource BigQuery table BigQuery view Data Transfer files Impression p Impression displayvideo id Impression displayvideo id Click p Click displayvideo id Click displayvideo id Activity p Activity displayvideo id Activity displayvideo id DV360 API Resource (v3) Partner p Partner displayvideo id Partner displayvideo id Advertiser p Advertiser displayvideo id Advertiser displayvideo id LineItem p LineItem displayvideo id LineItem displayvideo id LineItemTargeting p LineItemTargeting displayvideo id LineItemTargeting displayvideo id Campaign p Campaign displayvideo id Campaign displayvideo id CampaignTargeting p CampaignTargeting displayvideo id CampaignTargeting displayvideo id InsertionOrder p InsertionOrder displayvideo id InsertionOrder displayvideo id InsertionOrderTargeting p InsertionOrderTargeting displayvideo id InsertionOrderTargeting displayvideo id AdGroup p AdGroup displayvideo id AdGroup displayvideo id AdGroupTargeting p AdGroupTargeting displayvideo id AdGroupTargeting displayvideo id AdGroupAd p AdGroupAd displayvideo id AdGroupAd displayvideo id Creative p Creative displayvideo id Creative displayvideo id Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Display & Video 360 data transformation When your Display & Video 360 data are transferred to BigQuery, they are transformed into the following BigQuery tables and views.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- When you view the tables and views in BigQuery, the value for displayvideo id is your Display & Video 360 partner or advertiser ID.

### Access historical data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data)
- Source ID: `site-docs-reference-2`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For this example, we choose the current time as we're about to delete the table immediately afterwards. / const snapshotEpoch = Date . now (); // Delete the table await bigquery . dataset ( datasetId ) . table ( tableId ) . delete (); console . log ( Table ${ tableId } deleted. ); // Construct the restore-from table ID using a snapshot decorator. const snapshotTableId = ${ tableId } @ ${ snapshotEpoch } ; // Construct and run a copy job. await bigquery . dataset ( datasetId ) . table ( snapshotTableId ) . copy ( bigquery . dataset ( datasetId ). table ( recoveredTableId )); console . log ( Copied data from deleted table ${ tableId } to ${ recoveredTableId } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- TableId . of ( datasetName , recoverTableName ), TableId . of ( datasetName , snapshotTableId )) . build (); Job job = bigquery . create ( JobInfo . of ( configuration )); job = job . waitFor (); if ( job . isDone () && job . getStatus (). getError () == null ) { System . out . println ( "Undelete table recovered successfully." ); } else { System . out . println ( "BigQuery was unable to copy the table due to an error: \n" + job . getStatus (). getError ()); return ; } } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Table not found. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function undeleteTable () { // Undeletes "my table to undelete" from "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table to undelete"; // const recoveredTableId = "my recovered table"; / TODO(developer): Choose an appropriate snapshot point as epoch milliseconds.
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "time" "cloud.google.com/go/bigquery" ) // deleteAndUndeleteTable demonstrates how to recover a deleted table by copying it from a point in time // that predates the deletion event. func deleteAndUndeleteTable ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .

### Legacy SQL data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/data-types](https://docs.cloud.google.com/bigquery/docs/data-types)
- Source ID: `site-api-reference`
- Final score: 45
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are using the BigQuery API to load an integer outside the range of [-2 53 +1, 2 53 -1] (in most cases, this means larger than 9,007,199,254,740,991), into an integer (INT64) column, you must pass it as a string to avoid data corruption.
- To compute values using civil time data types, consider GoogleSQL , which supports all SQL operations on the DATE , DATETIME , and TIME data types.
- BYTES data read from a BigQuery table are base64-encoded, unless you export to Avro format, in which case the Avro bytes data type applies.
- Legacy SQL data types This document details the data types supported by BigQuery's legacy SQL query syntax.

