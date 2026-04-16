---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.545Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Liquid type compatibility errors in Looker IDE"
feature_slug: "liquid-type-compatibility-errors-in-looker-ide"
latest_feature_date: "2023-05-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
  - "https://docs.cloud.google.com/looker/docs/bar-options"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-jobs"
keywords:
  - "liquid"
  - "type"
  - "compatibility"
  - "errors"
  - "looker"
  - "ide"
  - "now"
  - "shows"
---

# Liquid type compatibility errors in Looker IDE

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Looker IDE now shows an error when incompatible types are compared in Liquid statements.

## Extended Definition

The Looker IDE now shows an error when incompatible types are compared in Liquid statements.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- [https://docs.cloud.google.com/looker/docs/bar-options](https://docs.cloud.google.com/looker/docs/bar-options)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)

## Supporting Pages

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-reference-required-6`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- TIMESTAMP data types are represented as timestamp-micros logical type (it annotates an Avro LONG type) by default in both Extract jobs and Export Data SQL. (Caution: you can add use avro logical types=False to Export Data Options to disable the logical type so it uses string type instead on timestamp column, but in Extract Jobs, it always uses the Avro logical type.) DATE data types are represented as date logical type (it annotates an Avro INT types) by default in Export Data SQL, but are represented as string type by default in Extract jobs. (Note: you can add use avro logical types=False to Export Data Options to disable the logical type, or use the flag --use avro logical types=True to enable the logical type in Extract jobs.) TIME data types are represented as timestamp-micro logical type (it annotates an Avro LONG types) by default in Export Data SQL, but are represented as string type by default in Extract jobs. (Note: you can add use avro logical types=False to Export Data Options to disable the logical type, or use the flag --use avro logical types=True to enable the logical type in Extract jobs.) DATETIME data types are represented as Avro STRING types (a string type with custom named logical type datetime ) by default in Export Data SQL, but are represented as string type by default in Extract jobs. (Note: you can add use avro logical types=False to Export Data Options to disable the logical type, or use the flag --use avro logical types=True to enable logical type in Extract jobs.) RANGE types aren't supported in Avro export.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); const bigquery = new BigQuery (); const storage = new Storage (); async function extractTableCompressed () { // Exports my dataset:my table to gcs://my-bucket/my-file as a compressed file. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const bucketName = "my-bucket"; // const filename = "file.csv"; // Location must match that of the source table. const options = { location : 'US' , gzip : true , }; // Export data from the table into a Google Cloud Storage file const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . extract ( storage . bucket ( bucketName ). file ( filename ), options ); console . log ( Job ${ job . id } created. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); const bigquery = new BigQuery (); const storage = new Storage (); async function extractTableToGCS () { // Exports my dataset:my table to gcs://my-bucket/my-file as raw CSV. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const bucketName = "my-bucket"; // const filename = "file.csv"; // Location must match that of the source table. const options = { location : 'US' , }; // Export data from the table into a Google Cloud Storage file const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . extract ( storage . bucket ( bucketName ). file ( filename ), options ); console . log ( Job ${ job . id } created. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- String projectName = "MY PROJECT NAME" ; String datasetName = "MY DATASET NAME" ; String tableName = "MY TABLE NAME" ; String bucketName = "MY-BUCKET-NAME" ; String destinationUri = "gs://" + bucketName + "/path/to/file" ; // For more information on export formats available see: // https://cloud.google.com/bigquery/docs/exporting-data#export formats and compression types String compressed = "gzip" ; // For more information on Job see: // https://googleapis.dev/java/google-cloud-clients/latest/index.html?com/google/cloud/bigquery/package-summary.html String dataFormat = "CSV" ; extractTableCompressed ( projectName , datasetName , tableName , destinationUri , dataFormat , compressed ); } public static void extractTableCompressed ( String projectName , String datasetName , String tableName , String destinationUri , String dataFormat , String compressed ) { try { // Initialize client that will be used to send requests.

### JOBS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)
- Source ID: `site-docs-reference-required-6`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- JOBS j , UNNEST ( query info . performance insights . stage performance standalone insights ) i WHERE ( j . statement type != "SCRIPT" OR j . statement type IS NULL ) AND i IS NOT NULL AND i . slot contention The output shows different performance insights about jobs, including slot contention: +------------+-------------------------+-------------------------------------------------+----------------------------------------------------------------------------+ job id creation time performance insights.avg previous execution ms performance insightsstage performance standalone insights.slot contention +------------+-------------------------+-------------------------------------------------+----------------------------------------------------------------------------+ bquxjob 1 2025-08-08 00:00:00 UTC null true bquxjob 2 2025-08-08 00:00:00 UTC 42689 true bquxjob 3 2025-08-08 00:00:00 UTC 42896 true +------------+-------------------------+-------------------------------------------------+----------------------------------------------------------------------------+ Get jobs with the same query hash The following query returns the job IDs with the same query hash as a specific job: SELECT j . job id , j . creation time , j . query FROM region- REGION NAME .
- JOBS WHERE state != "DONE" AND creation time TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 30 MINUTE ) ORDER BY creation time ASC ; The result is similar to the following: +-----------+----------+---------+--------------------------------+--------------------------------+------------------+ job id job type state creation time start time user email +-----------+----------+---------+--------------------------------+--------------------------------+------------------+ bquxjob 1 QUERY RUNNING 2023-05-03 05:07:22.818000 UTC 2023-05-03 05:07:22.905000 UTC abc@example.com bquxjob 2 QUERY PENDING 2023-05-01 02:05:47.925000 UTC 2023-05-01 02:05:47.998000 UTC xyz@example.com bquxjob 3 QUERY PENDING 2023-05-01 02:05:47.925000 UTC 2023-05-01 02:05:47.998000 UTC abc@example.com +-----------+----------+---------+--------------------------------+--------------------------------+------------------+ Queries using optional job creation mode The following example shows a list of queries that were executed in optional job creation mode for which BigQuery did not create jobs.
- JOBS BY PROJECT WHERE error result . reason != "Null" ORDER BY creation time DESC LIMIT 3 ; The results should look similar to the following: +------------+--------------------------+------------------+-------------------------------------+ job id creation time user email error result +------------+--------------------------+------------------+-------------------------------------+ bquxjob 1 2020-10-10 00:00:00 UTC abc@example.com Column 'col1' has mismatched type... bquxjob 2 2020-10-11 00:00:00 UTC xyz@example.com Column 'col1' has mismatched type... bquxjob 3 2020-10-11 00:00:00 UTC bob@example.com Column 'col1' has mismatched type... +------------+--------------------------+------------------+-------------------------------------+ Query the list of long running jobs The following example shows the list of long running jobs that are in the RUNNING or PENDING state for more than 30 minutes: SELECT job id , job type , state , creation time , start time , user email FROM region- REGION NAME .
- The results should look like the following: +-----------+----------------+-------------+-----------+--------------------------+--------------------+---------------------+---------------+-------+----------------------+ job id statement type priority cache hit job creation reason code total bytes billed total bytes processed total slot ms state error result message +-----------+----------------+-------------+-----------+--------------------------+--------------------+---------------------+---------------+-------+----------------------+ bquxjob 1 SELECT INTERACTIVE false null 161480704 161164718 3106 DONE null +-----------+----------------+-------------+-----------+--------------------------+--------------------+---------------------+---------------+-------+----------------------+ The following example shows a list of queries that were executed in optional job creation mode for which BigQuery did create jobs.

### Bar chart options \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/bar-options](https://docs.cloud.google.com/looker/docs/bar-options)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- When Show Full Field Name is turned off, generally only the field name shows; however, measures of type count display only the view name instead.
- For information about Looker Studio visualizations, see Types of charts in Looker Studio .
- Benefits of specifying axes Using this functionality, any chart can: Combine arbitrary series in any number of axes Split pivoted series across various axes by measure Render top and bottom axes in rotated charts Render charts with various measure types so long as they are not combined (such as linear and log) Render log charts with values between 0 and 1 Each y-axis has its own set of configuration options and displays one or more data series on a scale relative to that y-axis.
- See the Examples section of the Chart Config Editor article for examples of some common use cases, including the following examples: Changing the background color and axis text color Conditional formatting of values within a series Customizing tooltip color Adding vertical reference bands and captions Adding chart annotations Series menu options The series menu controls how your chart shows each data series .

