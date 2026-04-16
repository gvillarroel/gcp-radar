---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.236Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Standalone mode"
feature_slug: "standalone-mode"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/configurations"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
keywords:
  - "standalone"
  - "mode"
  - "mainframe"
  - "connector"
  - "supports"
  - "for"
  - "both"
  - "import"
---

# Standalone mode

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

Mainframe Connector supports standalone mode for both data import and export flows.

## Extended Definition

Mainframe Connector supports standalone mode for both data import and export flows.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/configurations](https://docs.cloud.google.com/mainframe-connector/docs/configurations)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)

## Supporting Pages

### Run Mainframe Connector in standalone mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- Source ID: `site-docs-root-2`
- Final score: 314
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Transcode data using Mainframe Connector in standalone mode on Cloud Run Mainframe Connector provides two ways in which you can run Mainframe Connector as a standalone job on Google Cloud: Using qsam commands (release 5.16.0 and later) Using the gsutil cp command Advantages of qsam commands The qsam commands provide the following advantages: Support for compound data types, including the OCCURS clause (lists), REDEFINES clause, and nested records.
- Run Mainframe Connector in standalone mode using qsam commands To transcode your data using Mainframe Connector in standalone mode using qsam commands, use the following steps: Create a YAML file with commands to do the following: Read your dataset Transcode it to a supported format Upload it to Cloud Storage The input dataset must be a QSAM file with fixed or variable record length.
- Run Mainframe Connector in standalone mode using the gsutil cp command To transcode your data using Mainframe Connector in standalone mode using the gsutil cp command, use the following steps: Create a YAML file with commands to do the following: Read your dataset Transcode it to ORC Upload it to Cloud Storage The input dataset must be a QSAM file with fixed or variable record length.
- Home Documentation Migration Mainframe Connector Guides Send feedback Run Mainframe Connector in standalone mode Stay organized with collections Save and categorize content based on your preferences.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- To run Mainframe Connector in remote mode, set the --remote flag. --replace (Optional) Delete the destination recursively before uploading. --stats table = TABLE (Optional) Specify the table to insert statistics into. --tfDSN = DSN (Optional) Specify the transformations from a DSN , DATASET.MEMBER , or PDS(MBR) . --tfGCS = GCS (Optional) Specify the transformations file from Cloud Storage. --timeOutMinutes = MINUTES (Optional) Specify the timeout in minutes for a remote grpc call.
- The default value is 60s. --project = PROJECT Specify the project ID. --region = REGION Specify the region in which the resource can be found. --tail-logs (Optional) If you run the command in the synchronous mode by specifying the --tail logs flag, Mainframe Connector displays the progress logs on the screen.
- For Cloud Storage or Unix files, if the RECFM is set to V , Mainframe Connector reads and writes the files in the LLzz format as follows: The first two bytes represent the data size + 4 bytes.
- If you don't provide a value, Mainframe Connector reads from DD INFILE . --keepAliveTimeInSeconds = SECONDS (Optional) Specify the keep alive timeout in seconds for an HTTP channel.

### "Choose your data migration journey \_|\_ Mainframe Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/configurations](https://docs.cloud.google.com/mainframe-connector/docs/configurations)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run Mainframe Connector in standalone mode Mainframe Connector version 5.13.0 and later supports running Mainframe Connector as a standalone job on Google Cloud.
- For more information, see Run Mainframe Connector in standalone mode .
- This option helps you avoid installing Mainframe Connector locally on your mainframe, and makes it easier for you to integrate your Mainframe queued sequential access method (QSAM) file parsing to existing extract, transform, and load (ETL) workflows.
- In this configuration, Mainframe Connector helps you manage a complete extract, transform, and load (ETL) pipeline entirely from IBM z/OS , as shown in the following figure.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Mainframe Connector supports the following subset of the UCM format: <code set name> "<name>" <uconv class> "SBCS" <subchar> \x1A #Example CHARMAP # <U0000> \x00 0 #For the third column, only 0 is supported. <U0001> \x01 0 #etc END CHARMAP If you want to use a customized character set, define a configuration file in the UCM format.
- Execution example gsutil cp gs://sample-bucket/MAINFRAME.DSN.FILE MAINFRAME.DSN.FILE \ --lrecl=16 --blksize=0 --recfm=fb Performance tuning configuration for the gsutil cp command Mainframe Connector supports the following performance tuning configuration for the gsutil cp command.
- Performance tuning configuration for the bq export command Mainframe Connector supports the following performance tuning configuration for the bq export command: exporter thread count : (Optional) Set the number of worker threads.
- The same applies when you run Mainframe Connector in standalone mode .

