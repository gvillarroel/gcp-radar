---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.237Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "bq query audit logs"
feature_slug: "bq-query-audit-logs"
latest_feature_date: "2024-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/reference"
keywords:
  - "bq"
  - "query"
  - "audit"
  - "logs"
  - "the"
  - "command"
  - "can"
  - "write"
---

# bq query audit logs

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The bq query command can write audit logs.

## Extended Definition

The bq query command can write audit logs.

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
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- The bq export command uses the following flags and arguments: --project id = ID Specify the project to use to execute this command. --allow large results (Optional) Use large destination table sizes for legacy SQL queries. --batch (Optional) Run the query in batch mode. --bucket = BUCKET (Optional) Specify a location within Cloud Storage to write the command's output.
- To run the query in remote mode, set the BQ QUERY REMOTE EXECUTION environment variable. --replace (Optional) Overwrite the destination table with the query results. --report row limit = LIMIT (Optional) Specify the maximum rows to print in the audit report.
- You can also use the bq mk command to generate a BigQuery table directly from parsing COBOL copybooks using the --schema from copybook flag.
- Synopsis bq query [options] Flags and arguments You can run this command in the local and remote modes.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Create a BigQuery table from a copybook You can use the bq mk command to generate a BigQuery table directly from parsing COBOL copybooks.
- You can also use the bq mk command to generate a BigQuery table directly from parsing COBOL copybooks.
- Query file SELECT FROM bigquery-public-data.samples.wikipedia WHERE title = @mytitle AND num characters > @min chars; Execution example bq query \ --project id=mainframe-connector-dev \ --location="US" \ --parameters=mytitle::Hippocrates,min chars:INT64:42600 Perform a dry run of the gsutil cp command The gsutil cp command decodes a QSAM file using a COBOL copybook, and generates an ORC file on Cloud Storage.
- The following is an example of how to you can use a parameterized bq query query: Query file SELECT FROM bigquery-public-data.samples.wikipedia WHERE title = @xtitle The following is an example with multiple parameters.

### "Move data transcoded locally on the mainframe to Google Cloud \_|\_ Mainframe\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- You can modify the default behavior of the Mainframe Connector transcoding process by providing a transcoder configuration file using the --transcode-configuration argument. //STEP04 EXEC BQSH //OUTFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //QUERY DD DSN=<HLQ>.QUERY.FILENAME,DISP=SHR //STDIN DD PROJECT=PROJECT NAME qsam encode \ dd:QUERY dd:OUTFILE --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG --input-format=BIGQUERY \ --input-parameter project id= PROJECT NAME \ --input-parameter location= LOCATION / / Replace the following: PROJECT NAME : the name of the project in which you want to execute the query.
- If your input dataset is a Queued Sequential Access Method (QSAM) file with fixed or variable record length, use the following command: //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //STDIN DD BUCKET= BUCKET NAME qsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename / If your input dataset is a Virtual Storage Access Method (VSAM) file with fixed or variable record length, use the following command: //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //STDIN DD BUCKET= BUCKET NAME vsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename / Replace BUCKET NAME with the name of the Cloud Storage bucket to which you want to copy mainframe data.
- Example JCL //STEP04 EXEC BQSH //OUTFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.FILENAME //QUERY DD DSN=<HLQ>.QUERY.FILENAME,DISP=SHR //STDIN DD PROJECT= PROJECT NAME DATASET ID= DATASET ID DESTINATION TABLE= DESTINATION TABLE bq export --project id=$PROJECT \ --dataset id=$DATASET ID \ --destination table=$DESTINATION TABLE \ --location="US" \ --remoteHost <mainframe-connector-url>.a.run.app \ --remotePort 443 / Replace the following: PROJECT NAME : The name of the project in which you want to execute the query.
- Move data transcoded locally on the mainframe to Google Cloud To transcode data locally on a mainframe and then move it to BigQuery, you must perform the following tasks: Read and transcode a dataset on a mainframe, and upload it to Cloud Storage in the ORC format (for other formats supported only by the qsam or vsam commands, see TranscodeFormat ).

### Mainframe Connector reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/reference](https://docs.cloud.google.com/mainframe-connector/docs/reference)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CREATE TABLE [PROJECT ID].[DATASET NAME].[TABLE NAME] ( timestamp TIMESTAMP, job id STRING, job name STRING, job date DATE, job time TIME, job step name STRING, job type STRING, source STRING, destination STRING, job json STRING, rows read INT64, rows written INT64, rows affected INT64, rows inserted INT64, rows deleted INT64, rows updated INT64, rows unmodified INT64, rows before merge INT64, rows loaded INT64, bq job id STRING, bq job project STRING, bq job location STRING, statement type STRING, query STRING, execution ms INT64, queued ms INT64, bytes processed INT64, slot ms INT64, slot utilization rate FLOAT64, slot ms to total bytes ratio FLOAT64, shuffle bytes FLOAT64, shuffle bytes to total bytes ratio FLOAT64, shuffle spill bytes FLOAT64, shuffle spill bytes to shuffle bytes ratio FLOAT64, shuffle spill bytes to total bytes ratio FLOAT64, shuffle spill gb FLOAT64, bq stage count INT64, bq step count INT64, bq sub step count INT64, bq stage summary STRING) PARTITION BY job date CLUSTER BY job name, job id, job step name OPTIONS ( partition expiration days=1000, description="Log table for mainframe jobs", require partition filter=true) Replace the following: PROJECT NAME : the name of the project in which you want to execute the command.
- Enable load statistics The load statistics feature logs every command that you execute using Mainframe Connector in a SQL table.
- Dataset names You can use the following dataset definition (DD) files in your BQSH JCL procedure.
- To enable the load statistics feature, create a table using the following command and add the flag --stats table TABLE NAME to the cp command, where TABLE NAME is the name of the SQL table.

