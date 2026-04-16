---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.831Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery web UI export to Google Drive"
feature_slug: "bigquery-web-ui-export-to-google-drive"
latest_feature_date: "2019-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "bigquery"
  - "web"
  - "ui"
  - "export"
  - "drive"
  - "supports"
  - "saving"
  - "query"
---

# BigQuery web UI export to Google Drive

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery web UI supports saving query results to Google Drive.

## Extended Definition

The BigQuery web UI supports saving query results to Google Drive.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Export formats and compression types BigQuery supports the following data formats and compression types for exported data.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); const bigquery = new BigQuery (); const storage = new Storage (); async function extractTableCompressed () { // Exports my dataset:my table to gcs://my-bucket/my-file as a compressed file. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const bucketName = "my-bucket"; // const filename = "file.csv"; // Location must match that of the source table. const options = { location : 'US' , gzip : true , }; // Export data from the table into a Google Cloud Storage file const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . extract ( storage . bucket ( bucketName ). file ( filename ), options ); console . log ( Job ${ job . id } created. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); const bigquery = new BigQuery (); const storage = new Storage (); async function extractTableToGCS () { // Exports my dataset:my table to gcs://my-bucket/my-file as raw CSV. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const bucketName = "my-bucket"; // const filename = "file.csv"; // Location must match that of the source table. const options = { location : 'US' , }; // Export data from the table into a Google Cloud Storage file const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . extract ( storage . bucket ( bucketName ). file ( filename ), options ); console . log ( Job ${ job . id } created. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- String projectName = "MY PROJECT NAME" ; String datasetName = "MY DATASET NAME" ; String tableName = "MY TABLE NAME" ; String bucketName = "MY-BUCKET-NAME" ; String destinationUri = "gs://" + bucketName + "/path/to/file" ; // For more information on export formats available see: // https://cloud.google.com/bigquery/docs/exporting-data#export formats and compression types String compressed = "gzip" ; // For more information on Job see: // https://googleapis.dev/java/google-cloud-clients/latest/index.html?com/google/cloud/bigquery/package-summary.html String dataFormat = "CSV" ; extractTableCompressed ( projectName , datasetName , tableName , destinationUri , dataFormat , compressed ); } public static void extractTableCompressed ( String projectName , String datasetName , String tableName , String destinationUri , String dataFormat , String compressed ) { try { // Initialize client that will be used to send requests.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Partner references BigQuery Export Integration BigQuery Import Integration BigQuery Version 2 Export Partner Advantage page Direct link Union.ai Solution Union AI orchestrator Category BI, ML, & Advanced Analytics Description The Union platform empowers AI development teams to rapidly ship high-quality code to production by offering optimized performance, unparalleled resource efficiency, and a delightful workflow authoring experience.
- Partner references SnapLogic with BigQuery SnapLogic and Google BigQuery - Bulk loading for high-speed Google analytics Automate Data-driven Insights with SnapLogic and Google BigQuery Partner Advantage page Direct link SqlDBM Solution SqlDBM Category ETL & Data Integration Description SqlDBM is a cloud-native database design and modeling tool that enables teams to develop, document, and manage database schemas collaboratively.
- Partner references Configure BigQuery Destination Integration with BigQuery Data export to BigQuery Partner Advantage page Direct link Email Meter Solution Email Meter Category BI, ML, & Advanced Analytics Description Email Meter is an email analytics platform that gives companies detailed insight into their team's email performance, so they can improve efficiency and the health of customer relationships.
- Partner references Zing Data + BigQuery Configure Google BigQuery with Zing Data Partner Advantage page Direct link Connectors & Developer Tools CData Solution Google BigQuery ODBC Driver Category Connectors & Developer Tools Description The Google BigQuery ODBC Driver is a powerful tool that lets you connect with live BigQuery data directly from any applications that support ODBC connectivity.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- If you create a Spanner connection and want to use Data Boost , include the "useParallelism":true and "useDataBoost":true pairs. --connection credential= CONNECTION CREDENTIAL The credentials of the connection in JSON format. username and password must be specified. --project id= PROJECT ID Specifies the ID of the project that the connection belongs to. --location= LOCATION Specifies the location that the connection will be stored. --display name= DISPLAY NAME Specifies an optional friendly name for the connection. --description= DESCRIPTION Specifies an optional description of the connection. --iam role id= ROLE ID For BigQuery Omni on AWS, specifies an IAM role that allows access to the resource.
- For information about using the bq mk command with the BigQuery Data Transfer Service, see the following: Set up an Amazon S3 transfer Set up a Campaign Manager transfer Set up a Cloud Storage transfer Set up a Google Ad Manager transfer Set up a Google Ads transfer Set up a Google Merchant Center transfer (beta) Set up a Google Play transfer Set up a Search Ads 360 transfer (beta) Set up a YouTube Channel transfer Set up a YouTube Content Owner transfer Migrate data from Amazon Redshift Migrate data from Teradata bq mk --transfer run Creates a data transfer run at the specified time or time range using the specified data transfer configuration.
- For example, this command specifies false for the boolean flag --use legacy sql by placing no at the front of the flag: bq query --nouse legacy sql \ 'SELECT COUNT( ) FROM bigquery-public-data.samples.shakespeare' Alternatively, to specify false as the flag's argument, you can enter the following: bq query --use legacy sql = false \ 'SELECT COUNT( ) FROM bigquery-public-data.samples.shakespeare' Run commands in a script You can run the bq command-line tool in a script, as you would run a Google Cloud CLI command .
- If the configuration setting is not specified, the default value is true ; the query uses legacy SQL. --vertex ai model id= VERTEX AI MODEL ID When specified, updates the model ID for a BigQuery ML model that is registered in the Vertex AI Model Registry. --view= QUERY When specified, updates the SQL query for a view. --view udf resource= FILE Updates the Cloud Storage URI or the path to a local code file that is loaded and evaluated immediately as a user-defined function resource in a view's SQL query.

