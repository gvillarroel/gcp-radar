---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.230Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "bq load max_polling_interval_ms"
feature_slug: "bq-load-max-polling-interval-ms"
latest_feature_date: "2025-02-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/reference"
keywords:
  - "bq"
  - "load"
  - "max"
  - "polling"
  - "interval"
  - "ms"
  - "the"
  - "command"
---

# bq load max_polling_interval_ms

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The bq load command can wait up to a configurable max_polling_interval_ms for BigQuery jobs.

## Extended Definition

The bq load command can wait up to a configurable max_polling_interval_ms for BigQuery jobs.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/reference](https://docs.cloud.google.com/mainframe-connector/docs/reference)

## Supporting Pages

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The default value is 0. --max polling interval ms = MILLISECONDS (Optional) The maximum wait time for a BigQuery job. --null marker = MARKER (Optional) Specify a custom string that represents a NULL value in CSV data. --projection fields = FIELDS (Optional) If you set --source format to DATASTORE BACKUP then this flag indicates the entity properties to load from a datastore export.
- If not specified will use job default. --update-env-vars = ENVVARS (Optional) List of key-value pairs to set as environment variables overrides for an execution of a job. --wait (Optional) Specify this flag if you want the command to wait until the execution has completed running before exiting. cloud run job log Display cloud run logs Synopsis cloud run job log [-h] [--tail] [--log-filter= FILTER ] [--polling-interval= POLLINGINTERVAL ] --project= PROJECT --region= REGION [--timeout= TIMEOUT ] EXECUTION-ID Flags and arguments The cloud run job log command uses the following flags and arguments: EXECUTION-ID The name of the Cloud Run job execution id. --help or -h (Optional) Display this help message. --log-filter = FILTER (Optional) Filter expression that specifies the log entries to return. --polling-interval = POLLINGINTERVAL (Optional) Sets the polling interval for displaying logs when --tail logs is enabled.
- The bq query command uses the following flags and arguments: --project id = ID Specify the project to use to execute this command. --allow large results (Optional) Use large destination table sizes for legacy SQL queries. --append table (Optional) Append the loaded data to the existing data in the destination table. --batch (Optional) Run the query in batch mode. --clustering fields = FIELDS (Optional) Specify a comma-separated list of up to four column names that specify the fields to use for table clustering.
- Synopsis bq load [options] tablespec path Flags and arguments The bq load command uses the following flags and arguments: path Specify a comma-separated list of source file URIs.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- To copy a file from Cloud Storage to a Mainframe dataset, specify the DSN and space requirements of the file you want to download to the Mainframe in JCL, as shown in the following example: //OUTFILE DD DSN=MAINFRAME.DSN.FILE,DISP=(,CATLG), // RECFM=FB,DSORG=PS, // SPACE=(10,(2,1),RLSE), // AVGREC=M, // UNIT=SYSDA //SYSPRINT DD SYSOUT= //SYSDUMP DD SYSOUT= //STDIN DD Specify the gsutil cp command in the following format.
- Query file SELECT FROM bigquery-public-data.samples.wikipedia WHERE title = @mytitle AND num characters > @min chars; Execution example bq query \ --project id=mainframe-connector-dev \ --location="US" \ --parameters=mytitle::Hippocrates,min chars:INT64:42600 Perform a dry run of the gsutil cp command The gsutil cp command decodes a QSAM file using a COBOL copybook, and generates an ORC file on Cloud Storage.
- The bq mk command provides the following configuration options to support this feature: --schema from copybook : Specifies the copybook to use to create the table. --dry run : (Optional) When enabled, the command only prints the generated CREATE TABLE SQL command without executing it.
- If the --encoding flag refers to a customized character set that doesn't correspond to the value you set for BQSH FEATURE CUSTOM CHARSET (or if you've not set BQSH FEATURE CUSTOM CHARSET at all), the command exits with an error message.

### "Move data transcoded locally on the mainframe to Google Cloud \_|\_ Mainframe\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- If your input dataset is a Queued Sequential Access Method (QSAM) file with fixed or variable record length, use the following command: //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //STDIN DD BUCKET= BUCKET NAME qsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename / If your input dataset is a Virtual Storage Access Method (VSAM) file with fixed or variable record length, use the following command: //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //STDIN DD BUCKET= BUCKET NAME vsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename / Replace BUCKET NAME with the name of the Cloud Storage bucket to which you want to copy mainframe data.
- Move data transcoded locally on the mainframe to Google Cloud To transcode data locally on a mainframe and then move it to BigQuery, you must perform the following tasks: Read and transcode a dataset on a mainframe, and upload it to Cloud Storage in the ORC format (for other formats supported only by the qsam or vsam commands, see TranscodeFormat ).
- Example JCL //STEP02 EXEC BQSH //STDIN DD BUCKET= BUCKET NAME PROJECT= PROJECT NAME bq load --project id=$PROJECT \ myproject:MY DATASET.MY TABLE \ gs://$BUCKET/tablename.orc/ / Replace the following: BUCKET NAME : the name of the Cloud Storage bucket which contains the ORC files that you want to load to BigQuery.
- Example JCL //STEP02 EXEC BQSH //STDIN DD BUCKET= BUCKET NAME PROJECT= PROJECT NAME bq load --project id=$PROJECT \ myproject:MY DATASET.MY TABLE \ gs://$BUCKET/tablename.orc/ / Replace the following: BUCKET NAME : the name of the Cloud Storage bucket which contains the ORC files that you want to load to BigQuery.

### Mainframe Connector reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/reference](https://docs.cloud.google.com/mainframe-connector/docs/reference)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CREATE TABLE [PROJECT ID].[DATASET NAME].[TABLE NAME] ( timestamp TIMESTAMP, job id STRING, job name STRING, job date DATE, job time TIME, job step name STRING, job type STRING, source STRING, destination STRING, job json STRING, rows read INT64, rows written INT64, rows affected INT64, rows inserted INT64, rows deleted INT64, rows updated INT64, rows unmodified INT64, rows before merge INT64, rows loaded INT64, bq job id STRING, bq job project STRING, bq job location STRING, statement type STRING, query STRING, execution ms INT64, queued ms INT64, bytes processed INT64, slot ms INT64, slot utilization rate FLOAT64, slot ms to total bytes ratio FLOAT64, shuffle bytes FLOAT64, shuffle bytes to total bytes ratio FLOAT64, shuffle spill bytes FLOAT64, shuffle spill bytes to shuffle bytes ratio FLOAT64, shuffle spill bytes to total bytes ratio FLOAT64, shuffle spill gb FLOAT64, bq stage count INT64, bq step count INT64, bq sub step count INT64, bq stage summary STRING) PARTITION BY job date CLUSTER BY job name, job id, job step name OPTIONS ( partition expiration days=1000, description="Log table for mainframe jobs", require partition filter=true) Replace the following: PROJECT NAME : the name of the project in which you want to execute the command.
- To enable the load statistics feature, create a table using the following command and add the flag --stats table TABLE NAME to the cp command, where TABLE NAME is the name of the SQL table.
- Enable load statistics The load statistics feature logs every command that you execute using Mainframe Connector in a SQL table.
- Dataset names You can use the following dataset definition (DD) files in your BQSH JCL procedure.

