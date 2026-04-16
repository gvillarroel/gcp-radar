---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.224Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "VSAM decode command"
feature_slug: "vsam-decode-command"
latest_feature_date: "2025-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
keywords:
  - "vsam"
  - "decode"
  - "command"
  - "the"
  - "decodes"
  - "virtual"
  - "storage"
  - "access"
---

# VSAM decode command

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The vsam decode command decodes Virtual Storage Access Method files.

## Extended Definition

The vsam decode command decodes Virtual Storage Access Method files.

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
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mainframe Connector also supports transcoding Virtual Storage Access Method (VSAM) files to Google Cloud compatible formats using the vsam decode command.
- The qsam and vsam commands perform the following transcoding operations: The qsam decode command decodes QSAM flat files to Google Cloud compatible formats.
- The vsam decode command decodes VSAM files to Google Cloud compatible formats.
- Decode mainframe data to Google Cloud Encode Google Cloud data to the mainframe This page provides an overview of the transcoding process using the qsam decode , qsam encode , and vsam decode commands, the physical and logical types of mainframe data, and the Optimized Row Columnar (ORC) and BigQuery type mappings.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- This command decodes records from a VSAM file to the format you specify using the --output-format argument.
- Synopsis systemreport [-h] [--available-security-providers] [--supported-ciphers] Flags and arguments The systemreport command uses the following flags and arguments: --available-security-providers (Optional) Print supported security providers. --help or -h (Optional) Display this help message. --supported-ciphers (Optional) Print supported ciphers. vsam decode Decode VSAM data.
- INPUT OUTPUT Flags and arguments The vsam decode command uses the following flags and arguments: INPUT : DataPath Specify the data path of the VSAM file you want to decode.
- This command decodes records from a QSAM file to the format you specify using the --output-format argument.

### "Move data transcoded locally on the mainframe to Google Cloud \_|\_ Mainframe\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- If your input dataset is a Queued Sequential Access Method (QSAM) file with fixed or variable record length, use the following command: //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //STDIN DD BUCKET= BUCKET NAME qsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename / If your input dataset is a Virtual Storage Access Method (VSAM) file with fixed or variable record length, use the following command: //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //STDIN DD BUCKET= BUCKET NAME vsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename / Replace BUCKET NAME with the name of the Cloud Storage bucket to which you want to copy mainframe data.
- Transcoding is done during the qsam decode , vsam decode , or gsutil cp operations (based on the command you choose), where a mainframe extended binary coded decimal interchange code (EBCDIC) dataset is converted to the ORC format in UTF-8 during the copy to a Cloud Storage bucket.
- Move data transcoded locally on the mainframe to Google Cloud To transcode data locally on a mainframe and then move it to BigQuery, you must perform the following tasks: Read and transcode a dataset on a mainframe, and upload it to Cloud Storage in the ORC format (for other formats supported only by the qsam or vsam commands, see TranscodeFormat ).
- Using qsam commands (release 5.16.0 and later) Using the vsam decode command (release 5.18.0 and later) Using the gsutil cp command Advantages of qsam and vsam commands The qsam and vsam commands provide the following advantages: Support for compound data types, including the OCCURS clause (lists), REDEFINES clause, and nested records.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- No vsam decode Use this command to transcode Virtual Storage Access Method (VSAM) file records to the format you want using the --output-format argument.
- Query file SELECT FROM bigquery-public-data.samples.wikipedia WHERE title = @mytitle AND num characters > @min chars; Execution example bq query \ --project id=mainframe-connector-dev \ --location="US" \ --parameters=mytitle::Hippocrates,min chars:INT64:42600 Perform a dry run of the gsutil cp command The gsutil cp command decodes a QSAM file using a COBOL copybook, and generates an ORC file on Cloud Storage.
- No qsam and vsam commands qsam decode Use this command to transcode QSAM file records to the format you want using the --output-format argument.
- To copy a file from Cloud Storage to a Mainframe dataset, specify the DSN and space requirements of the file you want to download to the Mainframe in JCL, as shown in the following example: //OUTFILE DD DSN=MAINFRAME.DSN.FILE,DISP=(,CATLG), // RECFM=FB,DSORG=PS, // SPACE=(10,(2,1),RLSE), // AVGREC=M, // UNIT=SYSDA //SYSPRINT DD SYSOUT= //SYSDUMP DD SYSOUT= //STDIN DD Specify the gsutil cp command in the following format.

