---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.224Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "QSAM encode ORC input support"
feature_slug: "qsam-encode-orc-input-support"
latest_feature_date: "2025-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding"
keywords:
  - "qsam"
  - "encode"
  - "orc"
  - "input"
  - "the"
  - "command"
  - "accepts"
  - "as"
---

# QSAM encode ORC input support

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The QSAM encode command accepts ORC as an input format.

## Extended Definition

The QSAM encode command accepts ORC as an input format.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)

## Supporting Pages

### "qsam and vsam commands reference \_|\_ Mainframe Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- Source ID: `site-docs-reference`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- Decode mainframe data to Google Cloud Encode Google Cloud data to the mainframe This page provides an overview of the transcoding process using the qsam decode , qsam encode , and vsam decode commands, the physical and logical types of mainframe data, and the Optimized Row Columnar (ORC) and BigQuery type mappings.
- The qsam encode command encodes Google Cloud data to the mainframe.
- Logical type ORC type BigDecimal decimal BigInteger decimal Bytes binary blob Date date Decimal64 decimal64 Double float64 List list Long 64-bit integer (bigint) Record struct String UTF-8 encoded string Timestamp timestamp (without local timezone) BigQuery type mapping The following table provides the mapping between Mainframe Connector logical types to BigQuery data types.
- Home Documentation Migration Mainframe Connector Reference Send feedback qsam and vsam commands reference Stay organized with collections Save and categorize content based on your preferences.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- Note: We recommend that you use the qsam decode and qsam encode commands to perform this task.
- Note: We recommend that you use the qsam decode and qsam encode commands to perform this task.
- Note: We recommend that you use the qsam decode and qsam encode commands to perform this task.
- The command accepts a COPYBOOK DD as input.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- INPUT OUTPUT Flags and arguments The qsam encode command uses the following flags and arguments: INPUT : DataPath Specify the data path of the input file you want to encode into a QSAM file.
- OUTPUT : DataPath Specify data path of the QSAM file you want to encode to. --copybook = COPYBOOK : DataPath Specify the data path of the file containing the copybook. --help or -h (Optional) Display this help message. --input-format = FORMAT : TranscodeInputFormat Specify the format of the input. --input-parameter = KEY=VALUE (Optional) Specify parameters to configure the input.
- The value is a DataPath pointing to JSON configuration file . project-id : Cloud Storage project ID in case of ORC. --input-stream-count = COUNT (Optional) Specify the number of input streams.
- INPUT OUTPUT Flags and arguments The qsam decode command uses the following flags and arguments: INPUT : DataPath Specify the data path of the QSAM file you want to decode.

### "Move data transcoded locally on the mainframe to Google Cloud \_|\_ Mainframe\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/local-transcoding)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- If your input dataset is a Queued Sequential Access Method (QSAM) file with fixed or variable record length, use the following command: //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //STDIN DD BUCKET= BUCKET NAME qsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename / If your input dataset is a Virtual Storage Access Method (VSAM) file with fixed or variable record length, use the following command: //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.CPY //CONFIG DD DISP=SHR,DSN=<HLQ>.CONFIG.SETTINGS //STDIN DD BUCKET= BUCKET NAME vsam decode --copybook dd:COPYBOOK --transcode-configuration dd:CONFIG dd:INFILE gs://$BUCKET/tablename / Replace BUCKET NAME with the name of the Cloud Storage bucket to which you want to copy mainframe data.
- The input dataset must be a Queued Sequential Access Method (QSAM) file with fixed or variable record length. //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.FILENAME //STDIN DD BUCKET= BUCKET NAME gsutil cp --replace gs://$BUCKET/tablename.orc / Replace BUCKET NAME with the name of the Cloud Storage bucket to which you want to copy mainframe data.
- Move data transcoded locally on the mainframe to Google Cloud To transcode data locally on a mainframe and then move it to BigQuery, you must perform the following tasks: Read and transcode a dataset on a mainframe, and upload it to Cloud Storage in the ORC format (for other formats supported only by the qsam or vsam commands, see TranscodeFormat ).
- Transcoding is done during the qsam decode , vsam decode , or gsutil cp operations (based on the command you choose), where a mainframe extended binary coded decimal interchange code (EBCDIC) dataset is converted to the ORC format in UTF-8 during the copy to a Cloud Storage bucket.

