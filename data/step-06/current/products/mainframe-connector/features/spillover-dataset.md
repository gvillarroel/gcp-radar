---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.230Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Spillover dataset"
feature_slug: "spillover-dataset"
latest_feature_date: "2025-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/spillover-dataset"
  - "https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode"
keywords:
  - "spillover"
  - "dataset"
  - "the"
  - "transcoding"
  - "framework"
  - "can"
  - "create"
  - "for"
---

# Spillover dataset

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The transcoding framework can create a spillover dataset for auditing or debugging errors.

## Extended Definition

The transcoding framework can create a spillover dataset for auditing or debugging errors.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/spillover-dataset](https://docs.cloud.google.com/mainframe-connector/docs/spillover-dataset)
- [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)

## Supporting Pages

### "Transcoding spillover dataset \_|\_ Mainframe Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/spillover-dataset](https://docs.cloud.google.com/mainframe-connector/docs/spillover-dataset)
- Source ID: `site-docs-reference`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The spillover dataset output format can be any of the following: Optimized Row Columnar (ORC) file Queued Sequential Access Method (QSAM) file You can use this information to audit or debug your transcoding process.
- Spillover dataset created by qsam decode As part of the decoding process the qsam decode command creates a spillover dataset with the following schema.
- Spillover dataset created by qsam encode As part of the encoding process the qsam encode command creates a spillover dataset with the following schema.
- Starting with the 5.16.0 release, Mainframe Connector creates a table that logs all the errors that it encountered during the transcoding process using the qsam decode and qsam encode commands.

### "Move data transcoded locally on the mainframe to Google Cloud \_|\_ Mainframe\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Support for the creation of a spillover dataset , which is a table of transcoding errors that can be used for error inspection.
- You can modify the default behavior of the Mainframe Connector transcoding process by providing a transcoder configuration file using the --transcode-configuration argument. //STEP04 EXEC BQSH //OUTFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //QUERY DD DSN=<HLQ>.QUERY.FILENAME,DISP=SHR //STDIN DD PROJECT=PROJECT NAME qsam encode \ dd:QUERY dd:OUTFILE --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG --input-format=BIGQUERY \ --input-parameter project id= PROJECT NAME \ --input-parameter location= LOCATION / / Replace the following: PROJECT NAME : the name of the project in which you want to execute the query.
- Transcoding is done during the qsam decode , vsam decode , or gsutil cp operations (based on the command you choose), where a mainframe extended binary coded decimal interchange code (EBCDIC) dataset is converted to the ORC format in UTF-8 during the copy to a Cloud Storage bucket.
- Transcode locally using gsutil cp command To transcode your mainframe data locally on your mainframe using the gsutil cp command, use the following steps: Create a job to read the dataset on your mainframe and transcode it to the ORC format, as shown in the following command.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- The default value is 1. --spillover = SPILLOVER : DataPath (Optional) Specify a data path for the spillover dataset.
- The supported format is [PROJECT]:[DATASET].[TABLE] --project id = ID Specify the project to use to execute this command. --allow jagged rows (Optional) Allow missing trailing optional columns in CSV data. --allow quoted newlines (Optional) Allow quoted newlines within CSV data. --append table (Optional) Append the loaded data to the existing data in the destination table. --autodetect (Optional) Enable automatic schema detection for CSV and JSON data. --clustering fields = FIELDS (Optional) If specified, a comma-separated list of columns is used to cluster the destination table in a query.
- To run Mainframe Connector in remote mode, set the --remote flag. --replace (Optional) Delete the destination recursively before uploading. --stats table = TABLE (Optional) Specify the table to insert statistics into. --tfDSN = DSN (Optional) Specify the transformations from a DSN , DATASET.MEMBER , or PDS(MBR) . --tfGCS = GCS (Optional) Specify the transformations file from Cloud Storage. --timeOutMinutes = MINUTES (Optional) Specify the timeout in minutes for a remote grpc call.
- If provided, an execution will be created with the input values. --async (Optional) Specify this flag if you want to return immediately, without waiting for the operation in progress to complete. --dump-execution-id = EXECUTION-ID : DataPath (Optional) Specify the file to write the execution ID to. --help or -h (Optional) Display this help message. --polling-interval = POLLINGINTERVAL (Optional) Sets the polling interval for displaying logs when --tail logs is enabled.

### Run Mainframe Connector in standalone mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Support for the creation of a spillover dataset , which is a table of transcoding errors that can be used for error inspection.
- Run Mainframe Connector in standalone mode using qsam commands To transcode your data using Mainframe Connector in standalone mode using qsam commands, use the following steps: Create a YAML file with commands to do the following: Read your dataset Transcode it to a supported format Upload it to Cloud Storage The input dataset must be a QSAM file with fixed or variable record length.
- You can use the following sample YAML file to read your dataset, transcode it to the ORC format, and upload it to Cloud Storage.
- You can use the following sample YAML file to read your dataset, transcode it to the ORC format, and upload it to Cloud Storage.

