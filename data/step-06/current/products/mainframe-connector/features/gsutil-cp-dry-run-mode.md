---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.233Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "gsutil cp dry-run mode"
feature_slug: "gsutil-cp-dry-run-mode"
latest_feature_date: "2024-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding"
keywords:
  - "gsutil"
  - "cp"
  - "dry"
  - "run"
  - "mode"
  - "the"
  - "command"
  - "supports"
---

# gsutil cp dry-run mode

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The gsutil cp command supports dry-run mode when importing data to BigQuery.

## Extended Definition

The gsutil cp command supports dry-run mode when importing data to BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)

## Supporting Pages

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Query file SELECT FROM bigquery-public-data.samples.wikipedia WHERE title = @mytitle AND num characters > @min chars; Execution example bq query \ --project id=mainframe-connector-dev \ --location="US" \ --parameters=mytitle::Hippocrates,min chars:INT64:42600 Perform a dry run of the gsutil cp command The gsutil cp command decodes a QSAM file using a COBOL copybook, and generates an ORC file on Cloud Storage.
- You can also perform the following tasks with the gsutil cp command: Perform a dry run of the gsutil cp command Copy a file from Cloud Storage to your Mainframe Fine tune performance of the gsutil cp command Use customized character sets with the gsutil cp .
- You can perform a dry run of the gsutil cp command using the dry run flag and test the following steps: Parse a COBOL copybook or data file and check whether it is compatible with Mainframe Connector.
- Use the following command to perform a dry run: gsutil cp \ --dry run \ gs://result-dir If all steps are executed successfully, the command exits with return code 0.

### Run Mainframe Connector in standalone mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- Source ID: `site-docs-root-2`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Transcode data using Mainframe Connector in standalone mode on Cloud Run Mainframe Connector provides two ways in which you can run Mainframe Connector as a standalone job on Google Cloud: Using qsam commands (release 5.16.0 and later) Using the gsutil cp command Advantages of qsam commands The qsam commands provide the following advantages: Support for compound data types, including the OCCURS clause (lists), REDEFINES clause, and nested records.
- Run Mainframe Connector in standalone mode using the gsutil cp command To transcode your data using Mainframe Connector in standalone mode using the gsutil cp command, use the following steps: Create a YAML file with commands to do the following: Read your dataset Transcode it to ORC Upload it to Cloud Storage The input dataset must be a QSAM file with fixed or variable record length.
- The following is an example YAML file: environmentVariables: - name: "COPYBOOK" value: "gs://inputbucket/copybook.cpy" - name: "LOG PROJECT" value: "my-log-project" - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: bq export --project id="my-project" --run mode="gcsoutput" --location=US --sql="select from project.dataset.table" --bucket="gs://outputbucket/data.dat" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- In the following sample, read the data from the INFILE dataset , and the record layout from the COPYBOOK DD . environmentVariables: - name: "INFILE" value: " INFILE " - name: "INFILE DSN" value: " INFILE DSN " - name: "GCSDSNURI" value: " INFILE DSN FILEPATH " - name: "COPYBOOK" value: " COPYBOOK FILEPATH " - name: "LOG PROJECT" value: " LOG PROJECT " - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: gsutil cp gs://outputbucket/output --parallelism 8 --maxChunkSize "512Mib" --parser type=copybook Replace the following: INFILE : The name of the input file.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- The bq query command uses the following flags and arguments: --project id = ID Specify the project to use to execute this command. --allow large results (Optional) Use large destination table sizes for legacy SQL queries. --append table (Optional) Append the loaded data to the existing data in the destination table. --batch (Optional) Run the query in batch mode. --clustering fields = FIELDS (Optional) Specify a comma-separated list of up to four column names that specify the fields to use for table clustering.
- The bq export command uses the following flags and arguments: --project id = ID Specify the project to use to execute this command. --allow large results (Optional) Use large destination table sizes for legacy SQL queries. --batch (Optional) Run the query in batch mode. --bucket = BUCKET (Optional) Specify a location within Cloud Storage to write the command's output.
- The default value is true. --stats table = TABLE (Optional) Specify the table to insert statistics into. --sync = {true false} (Optional) Run the command in synchronous mode. --synchronous mode = {true false} (Optional) An alternative to --sync . --timeOutMinutes = MINUTES (Optional) Specify the timeout in minutes for a BigQuery job response.
- The default value is 60s. --project = PROJECT Specify the project ID. --region = REGION Specify the region in which the resource can be found. --tail-logs (Optional) If you run the command in the synchronous mode by specifying the --tail logs flag, Mainframe Connector displays the progress logs on the screen.

### "Move data transcoded locally on the mainframe to Google Cloud \_|\_ Mainframe\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Using qsam commands (release 5.16.0 and later) Using the vsam decode command (release 5.18.0 and later) Using the gsutil cp command Advantages of qsam and vsam commands The qsam and vsam commands provide the following advantages: Support for compound data types, including the OCCURS clause (lists), REDEFINES clause, and nested records.
- Transcoding is done during the qsam decode , vsam decode , or gsutil cp operations (based on the command you choose), where a mainframe extended binary coded decimal interchange code (EBCDIC) dataset is converted to the ORC format in UTF-8 during the copy to a Cloud Storage bucket.
- Transcode locally using gsutil cp command To transcode your mainframe data locally on your mainframe using the gsutil cp command, use the following steps: Create a job to read the dataset on your mainframe and transcode it to the ORC format, as shown in the following command.
- The following sections describe in detail how you can move data transcoded locally on the mainframe to Google Cloud using qsam or vsam commands and the gsutil cp command .

