---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.231Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "gsutil cp maxChunkSize"
feature_slug: "gsutil-cp-maxchunksize"
latest_feature_date: "2025-02-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode"
  - "https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding"
keywords:
  - "gsutil"
  - "cp"
  - "maxchunksize"
  - "the"
  - "command"
  - "can"
  - "use"
  - "chunk"
---

# gsutil cp maxChunkSize

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The gsutil cp command can use chunk sizes below 64 MiB with maxChunkSize.

## Extended Definition

The gsutil cp command can use chunk sizes below 64 MiB with maxChunkSize.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)

## Supporting Pages

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also perform the following tasks with the gsutil cp command: Perform a dry run of the gsutil cp command Copy a file from Cloud Storage to your Mainframe Fine tune performance of the gsutil cp command Use customized character sets with the gsutil cp .
- Copy a file from Cloud Storage to your Mainframe You can use the gsutil cp command to copy a file from Cloud Storage to a Mainframe dataset.
- You can use this customized character set with the gsutil cp or bq export commands by setting the --encoding= charset flag.
- Execution example gsutil cp \ --replace \ --parser type=copybook \ --parallelism=8 \ --maxChunkSize=256MiB \ gs://$BUCKET/test.orc In this example, we've considered a large file and so have used 8 threads at which line rate is reached.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- Synopsis gsutil cp [options] gcsUri [dest] Flags and arguments You can use this command for the following different purposes: Copy and transcode a file from a Mainframe or a linux environment to Cloud Storage.
- The gsutil cp command uses the following flags and arguments: dest (Optional) The local path or data source name (DSN).
- Synopsis cloud run job cancel [-h] --project= PROJECT --region= REGION EXECUTION Flags and arguments The cloud run job cancel command uses the following flags and arguments: EXECUTION Specify the name of the Cloud Run job execution id. --help or -h (Optional) Display this help message. --project = PROJECT Specify the project ID. --region = REGION Specify the region in which the resource can be found. cloud run job execute Execute a specific job.
- Flags and arguments The gsutil rm command uses the following flags and arguments: URL Specify the Cloud Storage location in the format gs://bucket/prefix . --help or -h (Optional) Display this help message. -R or -r (Optional) Recursively delete the contents of directories or objects that match the path expression.

### Run Mainframe Connector in standalone mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- Source ID: `site-docs-root-2`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- In the following sample, read the data from the INFILE dataset , and the record layout from the COPYBOOK DD . environmentVariables: - name: "INFILE" value: " INFILE " - name: "INFILE DSN" value: " INFILE DSN " - name: "GCSDSNURI" value: " INFILE DSN FILEPATH " - name: "COPYBOOK" value: " COPYBOOK FILEPATH " - name: "LOG PROJECT" value: " LOG PROJECT " - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: gsutil cp gs://outputbucket/output --parallelism 8 --maxChunkSize "512Mib" --parser type=copybook Replace the following: INFILE : The name of the input file.
- The following is an example YAML file: environmentVariables: - name: "INFILE" value: "input.dat" - name: "INFILE DSN" value: "input.dat" - name: "GCSDSNURI" value: "gs://inputbucket/inputfolder" - name: "COPYBOOK" value: "gs://inputbucket/copybook.cpy" - name: "LOG PROJECT" value: "the log project" - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: gsutil cp gs://outputbucket/output --parallelism 8 --maxChunkSize "512Mib" --parser type=copybook Note Variables with the suffix FILLER are ignored during the import process.
- Transcode data using Mainframe Connector in standalone mode on Cloud Run Mainframe Connector provides two ways in which you can run Mainframe Connector as a standalone job on Google Cloud: Using qsam commands (release 5.16.0 and later) Using the gsutil cp command Advantages of qsam commands The qsam commands provide the following advantages: Support for compound data types, including the OCCURS clause (lists), REDEFINES clause, and nested records.
- The following is an example YAML file: environmentVariables: - name: "INFILE" value: "gs://my bucket/my/input.dat" - name: "OUTFILE" value: "gs://my bucket/my/output.orc" - name: "COPYBOOK" value: "gs://my bucket/my/copybook.cpy" - name: "TRANSCODE CONFIGURATION" value: "gs://my bucket/my/transcode-configuration-file.json" - name: "LOG PROJECT" value: "the log project" - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: qsam decode $INFILE $OUTFILE --copybook $COPYBOOK --transcode-configuration ${TRANSCODE CONFIGURATION} --output-format orc --parallelism 8 --chunk-size "512Mib" Note Variables with the suffix FILLER are ignored during the import process.

### "Move data transcoded locally on the mainframe to Google Cloud \_|\_ Mainframe\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Using qsam commands (release 5.16.0 and later) Using the vsam decode command (release 5.18.0 and later) Using the gsutil cp command Advantages of qsam and vsam commands The qsam and vsam commands provide the following advantages: Support for compound data types, including the OCCURS clause (lists), REDEFINES clause, and nested records.
- Transcode locally using gsutil cp command To transcode your mainframe data locally on your mainframe using the gsutil cp command, use the following steps: Create a job to read the dataset on your mainframe and transcode it to the ORC format, as shown in the following command.
- The following sections describe in detail how you can move data transcoded locally on the mainframe to Google Cloud using qsam or vsam commands and the gsutil cp command .
- If your input dataset is a Queued Sequential Access Method (QSAM) file with fixed or variable record length, use the following command: //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //STDIN DD BUCKET= BUCKET NAME qsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename / If your input dataset is a Virtual Storage Access Method (VSAM) file with fixed or variable record length, use the following command: //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //STDIN DD BUCKET= BUCKET NAME vsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename / Replace BUCKET NAME with the name of the Cloud Storage bucket to which you want to copy mainframe data.

