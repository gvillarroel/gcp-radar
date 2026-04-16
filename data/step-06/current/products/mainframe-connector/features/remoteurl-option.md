---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.238Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "remoteUrl option"
feature_slug: "remoteurl-option"
latest_feature_date: "2024-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode"
  - "https://docs.cloud.google.com/mainframe-connector/docs/remote-transcoding"
keywords:
  - "remoteurl"
  - "option"
  - "remote"
  - "mode"
  - "commands"
  - "can"
  - "use"
  - "instead"
---

# remoteUrl option

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

Remote mode commands can use remoteUrl instead of separate remoteHost and remotePort settings.

## Extended Definition

Remote mode commands can use remoteUrl instead of separate remoteHost and remotePort settings.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- [https://docs.cloud.google.com/mainframe-connector/docs/remote-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/remote-transcoding)

## Supporting Pages

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Note: For the commands that support remote execution, you can use the option remoteUrl instead of remoteHost and remotePort .
- If you execute the gsutil cp or bq export commands with the --remote flag to perform remote transcoding , Mainframe Connector uses the local value set for the BQSH FEATURE CUSTOM CHARSET environment variable.
- The following table lists the BigQuery, Cloud Storage, and other Google Cloud commands that you can use with Mainframe Connector.
- You can use the simple binary copy mode to copy a dataset from IBM z/OS to Cloud Storage unmodified as part of a data pipeline.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- You can use one of the following options: directstorage : the binary file is saved locally (default) gcsoutput : the binary file is saved in Cloud Storage --sql = SQL (Optional) Specify the BigQuery SQL query to execute. --stats table = TABLE (Optional) Specify the table to insert statistics into. --timeOutMinutes = MINUTES (Optional) Set the timeout in minutes for the remote grpc call.
- You can use --gcsOutUri instead. --compress (Optional) Compress output with gzip. --count or -n = RECORDS (Optional) Specify the number of records to copy.
- The default value is true. --use legacy sql (Optional) Use legacy SQL instead of standard SQL. cloud run job cancel Cancel a specific job execution.
- To run the query in remote mode, set the BQ QUERY REMOTE EXECUTION environment variable. --remoteUrl = URL (Optional) Specify the remote URL.

### Run Mainframe Connector in standalone mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- Source ID: `site-docs-root-2`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Mainframe Connector provides two ways in which you can export BigQuery table: Using qsam commands (release 5.16.0 and later) Using the bq export command Use qsam commands environmentVariables: - name: "QUERY" value: " QUERY PATH " - name: "OUTFILE" value: " OUTFILE " - name: "COPYBOOK" value: " COPYBOOK PATH " - name: "TRANSCODE CONFIGURATION" value: " TRANSCODE CONFIGURATION PATH " - name: "PROJECT ID" value: " PROJECT ID " - name: "LOCATION" value: " LOCATION " - name: "LOG PROJECT" value: " LOG PROJECT " - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: qsam encode \ $QUERY $OUTFILE --copybook ${COPYBOOK PATH} --transcode-configuration ${TRANSCODE CONFIGURATION PATH} --input-format=BIGQUERY \ --input-parameter project id=${PROJECT ID} \ --input-parameter location=${LOCATION} Replace the following: QUERY PATH : The SQL query to execute.
- Transcode data using Mainframe Connector in standalone mode on Cloud Run Mainframe Connector provides two ways in which you can run Mainframe Connector as a standalone job on Google Cloud: Using qsam commands (release 5.16.0 and later) Using the gsutil cp command Advantages of qsam commands The qsam commands provide the following advantages: Support for compound data types, including the OCCURS clause (lists), REDEFINES clause, and nested records.
- The following is an example YAML file: environmentVariables: - name: "COPYBOOK" value: "gs://inputbucket/copybook.cpy" - name: "LOG PROJECT" value: "my-log-project" - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: bq export --project id="my-project" --run mode="gcsoutput" --location=US --sql="select from project.dataset.table" --bucket="gs://outputbucket/data.dat" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Run Mainframe Connector in standalone mode using the gsutil cp command To transcode your data using Mainframe Connector in standalone mode using the gsutil cp command, use the following steps: Create a YAML file with commands to do the following: Read your dataset Transcode it to ORC Upload it to Cloud Storage The input dataset must be a QSAM file with fixed or variable record length.

### "Transcode mainframe data remotely on Google Cloud \_|\_ Mainframe Connector\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/remote-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/remote-transcoding)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- For the complete list of environment variables supported by Mainframe Connector, see Environment variables . //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.FILENAME //STDIN DD gsutil cp --replace gs://mybucket/tablename.orc --remote \ --remoteHost <mainframe-connector-url>.a.run.app \ --remotePort 443 / If you want to log the commands executed during this process, you can enable load statistics . (Optional) Create and submit a BigQuery query job that executes a SQL read from the QUERY DD file .
- To avoid this, you can use Cloud Run to move and transcode mainframe data remotely on Google Cloud to optimized row columnar (ORC) format and then move the data to Cloud Storage.
- The following figure describes how you can move your mainframe data to Google Cloud and transcode it remotely to ORC format using Cloud Run, and then move the content to BigQuery.
- Note Not all Google Cloud commands support remote transcoding.

