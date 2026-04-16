---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.409Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Details pane keyboard shortcuts"
feature_slug: "details-pane-keyboard-shortcuts"
latest_feature_date: "2024-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "details"
  - "pane"
  - "keyboard"
  - "shortcuts"
  - "bigquery"
  - "console"
  - "supports"
  - "controlling"
---

# Details pane keyboard shortcuts

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery cloud console supports keyboard shortcuts for controlling tab navigation in the details pane.

## Extended Definition

The BigQuery cloud console supports keyboard shortcuts for controlling tab navigation in the details pane.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### Explore BigQuery in the Google Cloud console \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- Source ID: `site-docs-reference-5`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Note: To see how to use keyboard shortcuts in Studio, click keyboard BigQuery Studio shortcuts in the BigQuery Studio toolbar: To explore the Studio page, follow these steps: In the Google Cloud console, go to the BigQuery Studio page.
- Go to Overview You can also open the BigQuery Overview page by entering the following URL in your browser: https://console.cloud.google.com/bigquery/overview Review the following sections of the Overview page: The Introduction section: gives you a quick video overview of BigQuery's capabilities.
- The Studio page has the following components: Explorer tab of the left pane : use the Explorer tab to work with tables, views, routines, and other BigQuery resources, and view your job history .
- Go to Studio Alternatively, enter the following URL in your browser: https://console.cloud.google.com/bigquery The Studio page opens in your most recently accessed project.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDestinationTable () { // Queries the U.S. given names dataset for the state of Texas // and saves results to permanent table. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Create destination table reference const dataset = bigquery . dataset ( datasetId ); const destinationTable = dataset . table ( tableId ); const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , destination : destinationTable , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); console . log ( Query results loaded to table ${ destinationTable . id } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTable () { // Creates a new table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const schema = 'Name:string, Age:integer, Weight:float, IsMagic:boolean'; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created. ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function getTable () { // Retrieves table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample / // const datasetId = "my dataset"; // const tableId = "my table"; // Retrieve table reference const dataset = bigquery . dataset ( datasetId ); const [ table ] = await dataset . table ( tableId ). get (); console . log ( 'Table:' ); console . log ( table . metadata . tableReference ); } getTable (); PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function listTables () { // Lists tables in 'my dataset'. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // List all tables in the dataset const [ tables ] = await bigquery . dataset ( datasetId ). getTables (); console . log ( 'Tables:' ); tables . forEach ( table = > console . log ( table . id )); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery supports the following data preview options: In the Google Cloud console, on the table details page, click the Preview tab to sample the data.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDryRun () { // Runs a dry query of the U.S. given names dataset for the state of Texas. const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , dryRun : true , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); // Print the status and statistics console . log ( 'Status:' ); console . log ( job . metadata . status ); console . log ( '\nJob Statistics:' ); console . log ( job . metadata . statistics ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- BigQuery supports storage billing using logical (uncompressed) or physical (compressed) bytes, or a combination of both.
- Estimate and control costs This page describes best practices for estimating and controlling costs in BigQuery.

