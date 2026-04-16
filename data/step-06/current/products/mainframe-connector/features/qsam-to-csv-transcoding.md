---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.228Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "QSAM to CSV transcoding"
feature_slug: "qsam-to-csv-transcoding"
latest_feature_date: "2025-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
keywords:
  - "qsam"
  - "to"
  - "csv"
  - "transcoding"
  - "can"
  - "be"
  - "transcoded"
  - "and"
---

# QSAM to CSV transcoding

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

QSAM data can be transcoded to CSV and back.

## Extended Definition

QSAM data can be transcoded to CSV and back.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)

## Supporting Pages

### "qsam and vsam commands reference \_|\_ Mainframe Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- Source ID: `site-docs-reference`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Decode mainframe data to Google Cloud Encode Google Cloud data to the mainframe This page provides an overview of the transcoding process using the qsam decode , qsam encode , and vsam decode commands, the physical and logical types of mainframe data, and the Optimized Row Columnar (ORC) and BigQuery type mappings.
- The qsam and vsam commands perform the following transcoding operations: The qsam decode command decodes QSAM flat files to Google Cloud compatible formats.
- You can use the following example to implement a tagged union: { "field override": [ { "field": "VARIANT-1", "modifier": { "null if": { "target field": "TYPE", "non null value": "VAR1" } } }, { "field": "VARIANT-2", "modifier": { "null if": { "target field": "TYPE", "non null value": "VAR2" } } } ], "transformations": [ { "field": "DATA", "transformation": { "exclude": {}} } ] } Logical Types To transcode data to and from multiple formats, Mainframe Connector converts all data to an intermediate representation (IR) that is based on logical types.
- Mainframe Connector supports the following types of lists: Fixed lists Dynamic lists Packed dynamic lists Fixed lists Fixed lists are used when the exact number of items (item count) that will be a part of the list is known in advance, and this number always remains the same.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The default value is 60s. --project = PROJECT Specify the project ID. --region = REGION Specify the region in which the resource can be found. --tail-logs (Optional) If you run the command in the synchronous mode by specifying the --tail logs flag, Mainframe Connector displays the progress logs on the screen.
- Can represent both the source and destination location, depending on usage. --batchSize = SIZE (Optional) Specify the blocks to be used per batch.
- The value can range between 0.0 (fail if there are any transcoding errors) and 1.0 (do not fail if there are transcoding errors).
- The value can range between 0.0 (fail if there are any transcoding errors) and 1.0 (do not fail if there are transcoding errors).

### "Move data transcoded locally on the mainframe to Google Cloud \_|\_ Mainframe\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- Source ID: `site-docs-root`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following sections describe in detail how you can move data transcoded locally on the mainframe to Google Cloud using qsam or vsam commands and the gsutil cp command .
- You can modify the default behavior of the Mainframe Connector transcoding process by providing a transcoder configuration file using the --transcode-configuration argument. //STEP04 EXEC BQSH //OUTFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //QUERY DD DSN=<HLQ>.QUERY.FILENAME,DISP=SHR //STDIN DD PROJECT=PROJECT NAME qsam encode \ dd:QUERY dd:OUTFILE --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG --input-format=BIGQUERY \ --input-parameter project id= PROJECT NAME \ --input-parameter location= LOCATION / / Replace the following: PROJECT NAME : the name of the project in which you want to execute the query.
- Move data transcoded locally on the mainframe to Google Cloud To transcode data locally on a mainframe and then move it to BigQuery, you must perform the following tasks: Read and transcode a dataset on a mainframe, and upload it to Cloud Storage in the ORC format (for other formats supported only by the qsam or vsam commands, see TranscodeFormat ).
- Transcoding is done during the qsam decode , vsam decode , or gsutil cp operations (based on the command you choose), where a mainframe extended binary coded decimal interchange code (EBCDIC) dataset is converted to the ORC format in UTF-8 during the copy to a Cloud Storage bucket.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- Query file SELECT FROM bigquery-public-data.samples.wikipedia WHERE title = @mytitle AND num characters > @min chars; Execution example bq query \ --project id=mainframe-connector-dev \ --location="US" \ --parameters=mytitle::Hippocrates,min chars:INT64:42600 Perform a dry run of the gsutil cp command The gsutil cp command decodes a QSAM file using a COBOL copybook, and generates an ORC file on Cloud Storage.
- You can also perform the following tasks with the gsutil cp command: Perform a dry run of the gsutil cp command Copy a file from Cloud Storage to your Mainframe Fine tune performance of the gsutil cp command Use customized character sets with the gsutil cp .
- Performance tuning configuration for the bq export command Mainframe Connector supports the following performance tuning configuration for the bq export command: exporter thread count : (Optional) Set the number of worker threads.
- If you execute the gsutil cp or bq export commands with the --remote flag to perform remote transcoding , Mainframe Connector uses the local value set for the BQSH FEATURE CUSTOM CHARSET environment variable.

