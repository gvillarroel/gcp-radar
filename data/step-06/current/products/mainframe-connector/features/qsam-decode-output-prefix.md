---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.225Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "QSAM decode output prefix"
feature_slug: "qsam-decode-output-prefix"
latest_feature_date: "2025-07-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding"
keywords:
  - "qsam"
  - "decode"
  - "output"
  - "prefix"
  - "the"
  - "command"
  - "can"
  - "use"
---

# QSAM decode output prefix

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The QSAM decode command can use a configurable prefix for output and spillover files.

## Extended Definition

The QSAM decode command can use a configurable prefix for output and spillover files.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)

## Supporting Pages

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- INPUT OUTPUT Flags and arguments The qsam decode command uses the following flags and arguments: INPUT : DataPath Specify the data path of the QSAM file you want to decode.
- INPUT OUTPUT Flags and arguments The qsam encode command uses the following flags and arguments: INPUT : DataPath Specify the data path of the input file you want to encode into a QSAM file.
- INPUT OUTPUT Flags and arguments The vsam decode command uses the following flags and arguments: INPUT : DataPath Specify the data path of the VSAM file you want to decode.
- You can use --inDD or --inDsn instead. output (Optional) Specify the URI of the output using the format gs://[BUCKET]/[PREFIX] .

### "qsam and vsam commands reference \_|\_ Mainframe Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- Decode mainframe data to Google Cloud Encode Google Cloud data to the mainframe This page provides an overview of the transcoding process using the qsam decode , qsam encode , and vsam decode commands, the physical and logical types of mainframe data, and the Optimized Row Columnar (ORC) and BigQuery type mappings.
- The qsam and vsam commands perform the following transcoding operations: The qsam decode command decodes QSAM flat files to Google Cloud compatible formats.
- You can use the following example to implement a tagged union: { "field override": [ { "field": "VARIANT-1", "modifier": { "null if": { "target field": "TYPE", "non null value": "VAR1" } } }, { "field": "VARIANT-2", "modifier": { "null if": { "target field": "TYPE", "non null value": "VAR2" } } } ], "transformations": [ { "field": "DATA", "transformation": { "exclude": {}} } ] } Logical Types To transcode data to and from multiple formats, Mainframe Connector converts all data to an intermediate representation (IR) that is based on logical types.
- Layout of a redefined field You can use redefinitions in many ways, including the following most common ways: View the same data in two different ways: This is the most common way redefines are used.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- No qsam and vsam commands qsam decode Use this command to transcode QSAM file records to the format you want using the --output-format argument.
- No vsam decode Use this command to transcode Virtual Storage Access Method (VSAM) file records to the format you want using the --output-format argument.
- Note: We recommend that you use the qsam decode and qsam encode commands to perform this task.
- Note: We recommend that you use the qsam decode and qsam encode commands to perform this task.

### "Move data transcoded locally on the mainframe to Google Cloud \_|\_ Mainframe\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- If your input dataset is a Queued Sequential Access Method (QSAM) file with fixed or variable record length, use the following command: //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //STDIN DD BUCKET= BUCKET NAME qsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename / If your input dataset is a Virtual Storage Access Method (VSAM) file with fixed or variable record length, use the following command: //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //STDIN DD BUCKET= BUCKET NAME vsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename / Replace BUCKET NAME with the name of the Cloud Storage bucket to which you want to copy mainframe data.
- Using qsam commands (release 5.16.0 and later) Using the vsam decode command (release 5.18.0 and later) Using the gsutil cp command Advantages of qsam and vsam commands The qsam and vsam commands provide the following advantages: Support for compound data types, including the OCCURS clause (lists), REDEFINES clause, and nested records.
- Transcoding is done during the qsam decode , vsam decode , or gsutil cp operations (based on the command you choose), where a mainframe extended binary coded decimal interchange code (EBCDIC) dataset is converted to the ORC format in UTF-8 during the copy to a Cloud Storage bucket.
- To transcode your mainframe data locally on your mainframe using qsam or vsam commands, use the following steps: Create a job to read the dataset on your mainframe and transcode it to the ORC format, as shown in the following command.

