---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.240Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "bq export with remote service"
feature_slug: "bq-export-with-remote-service"
latest_feature_date: "2024-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/remote-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding"
keywords:
  - "bq"
  - "export"
  - "with"
  - "remote"
  - "the"
  - "command"
  - "supports"
  - "mainframe"
---

# bq export with remote service

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The bq export command supports Mainframe Connector Remote Service.

## Extended Definition

The bq export command supports Mainframe Connector Remote Service.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/remote-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/remote-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)

## Supporting Pages

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you execute the gsutil cp or bq export commands with the --remote flag to perform remote transcoding , Mainframe Connector uses the local value set for the BQSH FEATURE CUSTOM CHARSET environment variable.
- Performance tuning configuration for the bq export command Mainframe Connector supports the following performance tuning configuration for the bq export command: exporter thread count : (Optional) Set the number of worker threads.
- Product Command Description Supports remote transcoding BigQuery commands bq export Use this command to create a binary file.
- You can use this customized character set with the gsutil cp or bq export commands by setting the --encoding= charset flag.

### "Transcode mainframe data remotely on Google Cloud \_|\_ Mainframe Connector\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/remote-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/remote-transcoding)
- Source ID: `site-docs-root`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example JCL //STEP04 EXEC BQSH //OUTFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.FILENAME //QUERY DD DSN=<HLQ>.QUERY.FILENAME,DISP=SHR //STDIN DD PROJECT= PROJECT NAME DATASET ID= DATASET ID DESTINATION TABLE= DESTINATION TABLE BUCKET= BUCKET bq export --project id=$PROJECT \ --dataset id=$DATASET ID \ --destination table=$DESTINATION TABLE \ --location="US" \ --bucket=$BUCKET \ --remoteHost <mainframe-connector-url>.a.run.app \ --remotePort 443 / Replace the following: PROJECT NAME : The name of the project in which you want to execute the query.
- For the complete list of environment variables supported by Mainframe Connector, see Environment variables . //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.FILENAME //STDIN DD gsutil cp --replace gs://mybucket/tablename.orc --remote \ --remoteHost <mainframe-connector-url>.a.run.app \ --remotePort 443 / If you want to log the commands executed during this process, you can enable load statistics . (Optional) Create and submit a BigQuery query job that executes a SQL read from the QUERY DD file .
- Example JCL //STEP03 EXEC BQSH //QUERY DD DSN=<HLQ>.QUERY.FILENAME,DISP=SHR //STDIN DD PROJECT= PROJECT NAME LOCATION= LOCATION bq query --project id=$PROJECT \ --location=$LOCATION \ --remoteHost <mainframe-connector-url>.a.run.app \ --remotePort 443/ / Additionally, you must set the environment variable BQ QUERY REMOTE EXECUTION=true .
- What's next Move locally transcoded mainframe data to Google Cloud Transcode mainframe data remotely on Google Cloud Transcode mainframe data moved to Google Cloud using a virtual tape library Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The bq export command uses the following flags and arguments: --project id = ID Specify the project to use to execute this command. --allow large results (Optional) Use large destination table sizes for legacy SQL queries. --batch (Optional) Run the query in batch mode. --bucket = BUCKET (Optional) Specify a location within Cloud Storage to write the command's output.
- To run the query in remote mode, set the BQ QUERY REMOTE EXECUTION environment variable. --replace (Optional) Overwrite the destination table with the query results. --report row limit = LIMIT (Optional) Specify the maximum rows to print in the audit report.
- If you don't provide a value, Mainframe Connector reads from DD COPYBOOK . --dataset id = ID (Optional) Specify the default dataset to use with the command.
- To run Mainframe Connector in remote mode, set the --bucket flag. --run mode = MODE (Optional) Select the export implementation.

### "Move data transcoded locally on the mainframe to Google Cloud \_|\_ Mainframe\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your input dataset is a Queued Sequential Access Method (QSAM) file with fixed or variable record length, use the following command: //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //STDIN DD BUCKET= BUCKET NAME qsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename / If your input dataset is a Virtual Storage Access Method (VSAM) file with fixed or variable record length, use the following command: //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //STDIN DD BUCKET= BUCKET NAME vsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename / Replace BUCKET NAME with the name of the Cloud Storage bucket to which you want to copy mainframe data.
- Example JCL //STEP04 EXEC BQSH //OUTFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.FILENAME //QUERY DD DSN=<HLQ>.QUERY.FILENAME,DISP=SHR //STDIN DD PROJECT= PROJECT NAME DATASET ID= DATASET ID DESTINATION TABLE= DESTINATION TABLE bq export --project id=$PROJECT \ --dataset id=$DATASET ID \ --destination table=$DESTINATION TABLE \ --location="US" \ --remoteHost <mainframe-connector-url>.a.run.app \ --remotePort 443 / Replace the following: PROJECT NAME : The name of the project in which you want to execute the query.
- The input dataset must be a Queued Sequential Access Method (QSAM) file with fixed or variable record length. //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.FILENAME //STDIN DD BUCKET= BUCKET NAME gsutil cp --replace gs://$BUCKET/tablename.orc / Replace BUCKET NAME with the name of the Cloud Storage bucket to which you want to copy mainframe data.
- You can modify the default behavior of the Mainframe Connector transcoding process by providing a transcoder configuration file using the --transcode-configuration argument. //STEP04 EXEC BQSH //OUTFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //QUERY DD DSN=<HLQ>.QUERY.FILENAME,DISP=SHR //STDIN DD PROJECT=PROJECT NAME qsam encode \ dd:QUERY dd:OUTFILE --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG --input-format=BIGQUERY \ --input-parameter project id= PROJECT NAME \ --input-parameter location= LOCATION / / Replace the following: PROJECT NAME : the name of the project in which you want to execute the query.

