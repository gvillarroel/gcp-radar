---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.232Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "gsutil cp configurable null termination"
feature_slug: "gsutil-cp-configurable-null-termination"
latest_feature_date: "2024-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode"
keywords:
  - "gsutil"
  - "cp"
  - "configurable"
  - "null"
  - "termination"
  - "the"
  - "command"
  - "can"
---

# gsutil cp configurable null termination

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The gsutil cp command can configure null termination.

## Extended Definition

The gsutil cp command can configure null termination.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)

## Supporting Pages

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Synopsis gsutil cp [options] gcsUri [dest] Flags and arguments You can use this command for the following different purposes: Copy and transcode a file from a Mainframe or a linux environment to Cloud Storage.
- The gsutil cp command uses the following flags and arguments: dest (Optional) The local path or data source name (DSN).
- Synopsis cloud run job cancel [-h] --project= PROJECT --region= REGION EXECUTION Flags and arguments The cloud run job cancel command uses the following flags and arguments: EXECUTION Specify the name of the Cloud Run job execution id. --help or -h (Optional) Display this help message. --project = PROJECT Specify the project ID. --region = REGION Specify the region in which the resource can be found. cloud run job execute Execute a specific job.
- Flags and arguments The gsutil rm command uses the following flags and arguments: URL Specify the Cloud Storage location in the format gs://bucket/prefix . --help or -h (Optional) Display this help message. -R or -r (Optional) Recursively delete the contents of directories or objects that match the path expression.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- You can also perform the following tasks with the gsutil cp command: Perform a dry run of the gsutil cp command Copy a file from Cloud Storage to your Mainframe Fine tune performance of the gsutil cp command Use customized character sets with the gsutil cp .
- You can perform a dry run of the gsutil cp command using the dry run flag and test the following steps: Parse a COBOL copybook or data file and check whether it is compatible with Mainframe Connector.
- Copy a file from Cloud Storage to your Mainframe You can use the gsutil cp command to copy a file from Cloud Storage to a Mainframe dataset.
- You can use this customized character set with the gsutil cp or bq export commands by setting the --encoding= charset flag.

### "Move data transcoded locally on the mainframe to Google Cloud \_|\_ Mainframe\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- The following sections describe in detail how you can move data transcoded locally on the mainframe to Google Cloud using qsam or vsam commands and the gsutil cp command .
- Using qsam commands (release 5.16.0 and later) Using the vsam decode command (release 5.18.0 and later) Using the gsutil cp command Advantages of qsam and vsam commands The qsam and vsam commands provide the following advantages: Support for compound data types, including the OCCURS clause (lists), REDEFINES clause, and nested records.
- Transcoding is done during the qsam decode , vsam decode , or gsutil cp operations (based on the command you choose), where a mainframe extended binary coded decimal interchange code (EBCDIC) dataset is converted to the ORC format in UTF-8 during the copy to a Cloud Storage bucket.
- Transcode locally using gsutil cp command To transcode your mainframe data locally on your mainframe using the gsutil cp command, use the following steps: Create a job to read the dataset on your mainframe and transcode it to the ORC format, as shown in the following command.

### Run Mainframe Connector in standalone mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- Source ID: `site-docs-root-2`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Transcode data using Mainframe Connector in standalone mode on Cloud Run Mainframe Connector provides two ways in which you can run Mainframe Connector as a standalone job on Google Cloud: Using qsam commands (release 5.16.0 and later) Using the gsutil cp command Advantages of qsam commands The qsam commands provide the following advantages: Support for compound data types, including the OCCURS clause (lists), REDEFINES clause, and nested records.
- In the following sample, read the data from the INFILE dataset , and the record layout from the COPYBOOK DD . environmentVariables: - name: "INFILE" value: " INFILE " - name: "INFILE DSN" value: " INFILE DSN " - name: "GCSDSNURI" value: " INFILE DSN FILEPATH " - name: "COPYBOOK" value: " COPYBOOK FILEPATH " - name: "LOG PROJECT" value: " LOG PROJECT " - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: gsutil cp gs://outputbucket/output --parallelism 8 --maxChunkSize "512Mib" --parser type=copybook Replace the following: INFILE : The name of the input file.
- The following is an example YAML file: environmentVariables: - name: "INFILE" value: "input.dat" - name: "INFILE DSN" value: "input.dat" - name: "GCSDSNURI" value: "gs://inputbucket/inputfolder" - name: "COPYBOOK" value: "gs://inputbucket/copybook.cpy" - name: "LOG PROJECT" value: "the log project" - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: gsutil cp gs://outputbucket/output --parallelism 8 --maxChunkSize "512Mib" --parser type=copybook Note Variables with the suffix FILLER are ignored during the import process.
- Run Mainframe Connector in standalone mode using the gsutil cp command To transcode your data using Mainframe Connector in standalone mode using the gsutil cp command, use the following steps: Create a YAML file with commands to do the following: Read your dataset Transcode it to ORC Upload it to Cloud Storage The input dataset must be a QSAM file with fixed or variable record length.

