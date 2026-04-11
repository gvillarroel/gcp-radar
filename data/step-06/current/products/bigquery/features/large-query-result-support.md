---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.953Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Large query result support"
feature_slug: "large-query-result-support"
latest_feature_date: "2013-06-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "allowLargeResults"
  - "destinationTable"
  - "temporary destination table"
  - "large result sets"
  - "result destination"
  - "query job configuration"
  - "large query results"
  - "large results"
---

# Large query result support

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added support for returning large query results.

## Extended Definition

BigQuery added support for returning large query results.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### "Package com.google.cloud.bigquery (2.62.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery)
- Source ID: `site-java-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Query job configurations have JobConfiguration.Type#QUERY type. com. google. cloud. bigquery.
- Job Configuration Base class for a BigQuery job configuration. com. google. cloud. bigquery.
- Query Job Configuration Google BigQuery Query Job configuration.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDestinationTable () { // Queries the U.S. given names dataset for the state of Texas // and saves results to permanent table. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Create destination table reference const dataset = bigquery . dataset ( datasetId ); const destinationTable = dataset . table ( tableId ); const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , destination : destinationTable , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); console . log ( Query results loaded to table ${ destinationTable . id } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); // Identify the destination table TableId destinationTable = TableId . of ( destinationDataset , destinationTableId ); // Build the query job QueryJobConfiguration queryConfig = QueryJobConfiguration . newBuilder ( query ). setDestinationTable ( destinationTable ). build (); // Execute the query. bigquery . query ( queryConfig ); // The results are now saved in the destination table.
- String query = "SELECT corpus FROM bigquery-public-data.samples.shakespeare GROUP BY corpus;" ; String destinationTable = "MY TABLE" ; String destinationDataset = "MY DATASET" ; saveQueryToTable ( destinationDataset , destinationTable , query ); } public static void saveQueryToTable ( String destinationDataset , String destinationTableId , String query ) { try { // Initialize client that will be used to send requests.
- Waiting on bqjob r123abc456 000001234567 1 ... (2s) Current status: DONE +---------+--------+ name number +---------+--------+ Robert 10021 John 9636 Robert 9297 ... +---------+--------+ API To save query results to a permanent table, call the jobs.insert method, configure a query job, and include a value for the destinationTable property.

