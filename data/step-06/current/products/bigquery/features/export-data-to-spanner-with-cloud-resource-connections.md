---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.199Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "EXPORT DATA to Spanner with Cloud resource connections"
feature_slug: "export-data-to-spanner-with-cloud-resource-connections"
latest_feature_date: "2026-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
keywords:
  - "export"
  - "spanner"
  - "resource"
  - "connections"
  - "bigquery"
  - "statements"
  - "can"
  - "use"
---

# EXPORT DATA to Spanner with Cloud resource connections

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery EXPORT DATA statements can use Cloud resource connections to reverse ETL data into Spanner.

## Extended Definition

BigQuery EXPORT DATA statements can use Cloud resource connections to reverse ETL data into Spanner.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.datasets.create The project where you create the federated dataset. bigquery.connections.use The project where you create the federated dataset. bigquery.connections.delegate The project where you create the federated dataset.
- Example: export function deserialize ( stateToDeserialize , initialSum ) Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.routines.create The dataset where you create the function.
- To create a stored procedure for Apache Spark, additional IAM permission are needed: Permission Resource bigquery.connections.delegate The connection which you use to create the stored procedure for Apache Spark .

### Introduction to continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- When exporting data to Bigtable, Spanner, or Pub/Sub locational endpoints you can only target Bigtable, Spanner, or Pub/Sub resources that fall within the same Google Cloud regional boundary as the BigQuery dataset that contains the table you are querying.
- Running EXPORT DATA statements to export data from BigQuery to Spanner tables.
- Continuous queries can process data that has been written to standard BigQuery tables by using one of the following methods: The BigQuery Storage Write API The tabledata.insertAll method Batch load The INSERT DML statement Mutating data manipulation language (DML) statements such as DELETE , UPDATE , and MERGE when exporting data to Pub/Sub .
- You can insert the output rows produced by a continuous query into a BigQuery table or export them to Pub/Sub, Bigtable, or Spanner.

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- The following Logs Explorer filter returns information about your extract jobs: resource.type="bigquery resource" protoPayload.methodName="jobservice.insert" (protoPayload.serviceData.jobInsertRequest.resource.jobConfiguration.query.query= "EXPORT" OR protoPayload.serviceData.jobCompletedEvent.eventName="extract job completed" OR protoPayload.serviceData.jobCompletedEvent.job.jobConfiguration.query.query= "EXPORT") Exceeded extract bytes per day quota error BigQuery returns this error when the extraction exceeds the default 50 TiB daily limit in a project.
- Note: If you are exporting data to the Parquet format, it might be faster to use the BigQuery export to Parquet (via BigQuery Storage API) template rather than writing a custom solution. (Optional) Specify your location in the location property in the jobReference section of the job resource .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); const bigquery = new BigQuery (); const storage = new Storage (); async function extractTableCompressed () { // Exports my dataset:my table to gcs://my-bucket/my-file as a compressed file. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const bucketName = "my-bucket"; // const filename = "file.csv"; // Location must match that of the source table. const options = { location : 'US' , gzip : true , }; // Export data from the table into a Google Cloud Storage file const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . extract ( storage . bucket ( bucketName ). file ( filename ), options ); console . log ( Job ${ job . id } created. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); const bigquery = new BigQuery (); const storage = new Storage (); async function extractTableToGCS () { // Exports my dataset:my table to gcs://my-bucket/my-file as raw CSV. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const bucketName = "my-bucket"; // const filename = "file.csv"; // Location must match that of the source table. const options = { location : 'US' , }; // Export data from the table into a Google Cloud Storage file const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . extract ( storage . bucket ( bucketName ). file ( filename ), options ); console . log ( Job ${ job . id } created. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .

