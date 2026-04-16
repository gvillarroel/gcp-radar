---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.225Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Copy text command"
feature_slug: "copy-text-command"
latest_feature_date: "2025-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference"
keywords:
  - "copy"
  - "text"
  - "command"
  - "the"
  - "copies"
  - "files"
  - "between"
  - "mainframe"
---

# Copy text command

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The copy text command copies text files between mainframe and Google Cloud in both directions.

## Extended Definition

The copy text command copies text files between mainframe and Google Cloud in both directions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)

## Supporting Pages

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Synopsis copy text [-h] [--buffer-size= BUFFERSIZE ] INPUT OUTPUT Flags and arguments The copy text command uses the following flags and arguments: INPUT : DataPath Specify the data path of the input file you want to copy.
- Synopsis gsutil cp [options] gcsUri [dest] Flags and arguments You can use this command for the following different purposes: Copy and transcode a file from a Mainframe or a linux environment to Cloud Storage.
- The default value is 2. --project id = ID (Optional) Specify the project to use to execute this command. --recfm = REFCM (Optional) Specify the recfm of the file that you want to copy to the Mainframe.
- If you don't provide a value, Mainframe Connector reads from DD COPYBOOK . --dataset id = ID (Optional) Specify the default dataset to use with the command.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To copy a file from Cloud Storage to a Mainframe dataset, specify the DSN and space requirements of the file you want to download to the Mainframe in JCL, as shown in the following example: //OUTFILE DD DSN=MAINFRAME.DSN.FILE,DISP=(,CATLG), // RECFM=FB,DSORG=PS, // SPACE=(10,(2,1),RLSE), // AVGREC=M, // UNIT=SYSDA //SYSPRINT DD SYSOUT= //SYSDUMP DD SYSOUT= //STDIN DD Specify the gsutil cp command in the following format.
- Query file SELECT FROM bigquery-public-data.samples.wikipedia WHERE title = @mytitle AND num characters > @min chars; Execution example bq query \ --project id=mainframe-connector-dev \ --location="US" \ --parameters=mytitle::Hippocrates,min chars:INT64:42600 Perform a dry run of the gsutil cp command The gsutil cp command decodes a QSAM file using a COBOL copybook, and generates an ORC file on Cloud Storage.
- You can also perform the following tasks with the gsutil cp command: Perform a dry run of the gsutil cp command Copy a file from Cloud Storage to your Mainframe Fine tune performance of the gsutil cp command Use customized character sets with the gsutil cp .
- You can perform a dry run of the gsutil cp command using the dry run flag and test the following steps: Parse a COBOL copybook or data file and check whether it is compatible with Mainframe Connector.

### "qsam and vsam commands reference \_|\_ Mainframe Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Mainframe Connector transcodes Queued Sequential Access Method (QSAM) flat files to Google Cloud compatible formats, and the other way around using the qsam commands.
- Mainframe Connector also supports transcoding Virtual Storage Access Method (VSAM) files to Google Cloud compatible formats using the vsam decode command.
- Logical type ORC type BigDecimal decimal BigInteger decimal Bytes binary blob Date date Decimal64 decimal64 Double float64 List list Long 64-bit integer (bigint) Record struct String UTF-8 encoded string Timestamp timestamp (without local timezone) BigQuery type mapping The following table provides the mapping between Mainframe Connector logical types to BigQuery data types.
- Decode mainframe data to Google Cloud Encode Google Cloud data to the mainframe This page provides an overview of the transcoding process using the qsam decode , qsam encode , and vsam decode commands, the physical and logical types of mainframe data, and the Optimized Row Columnar (ORC) and BigQuery type mappings.

### Copybook parser reference \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- Source ID: `site-docs-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Support for DBCS fields Ensure the following when using DBCS fields: When you use PIC G or Pic N DBCS fields, you must provide one of the following valid multi-byte character set (MBCS) encodings in the encoding option or in the ENCODING environment variable when using the gsutil cp or bq export commands: x-IBM930 x-IBM933 x-IBM935 x-IBM937 x-IBM939 x-IBM942 x-IBM942C x-IBM943 x-IBM943C x-IBM949 x-IBM949C x-IBM950 x-IBM964 x-IBM970 x-IBM1364 When a copybook field only contains DBCS bytes, but these bytes are not surrounded by shift-out (0x0E) and shift-in (0x0F), you must add the suffix DBCS to the field name to ensure that these bytes are decoded as DBCS bytes.
- If you use these constructs in your copybook, Mainframe Connector shows an error. dataAlignedClause dataBlankWhenZeroClause dataCommonOwnLocalClause dataIntegerStringClause dataJustifiedClause dataOccursClause dataReceivedByClause dataRecordAreaClause dataRenamesClause dataSignClause dataSynchronizedClause dataThreadLocalClause dataTypeClause dataTypeDefClause dataUsingClause Data types COBOL data types like COMP-1 and COMP-2 are supported.
- To use null indicators, you must define environment variables that begin with the word SUFFIX in the following format: SUFFIX NULL INDICATOR NAME ="command --null-value NULL VALUE --not-null-value NOT NULL VALUE " NULL INDICATOR NAME corresponds to the suffixes -NULL INDICATOR NAME or NULL INDICATOR NAME that are interpreted as a null indicator when used as a suffix of a field name in a copybook.
- Support for variable-length character strings The Native copybook parser supports the following struct fields: 10 var 15 var-LEN PIC 9(4) USAGE COMP 15 var-TEXT PIC X(n) The first field in the struct field is the length of the second field, the string field.

