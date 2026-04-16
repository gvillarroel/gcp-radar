---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.223Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "QSAM decode split transformation"
feature_slug: "qsam-decode-split-transformation"
latest_feature_date: "2025-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration"
keywords:
  - "qsam"
  - "decode"
  - "split"
  - "transformation"
  - "the"
  - "command"
  - "can"
  - "datasets"
---

# QSAM decode split transformation

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The QSAM decode command can split datasets into multiple tables during transformation.

## Extended Definition

The QSAM decode command can split datasets into multiple tables during transformation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)

## Supporting Pages

### "qsam and vsam commands reference \_|\_ Mainframe Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- Decode mainframe data to Google Cloud Encode Google Cloud data to the mainframe This page provides an overview of the transcoding process using the qsam decode , qsam encode , and vsam decode commands, the physical and logical types of mainframe data, and the Optimized Row Columnar (ORC) and BigQuery type mappings.
- The qsam and vsam commands perform the following transcoding operations: The qsam decode command decodes QSAM flat files to Google Cloud compatible formats.
- You can use the following example to implement a tagged union: { "field override": [ { "field": "VARIANT-1", "modifier": { "null if": { "target field": "TYPE", "non null value": "VAR1" } } }, { "field": "VARIANT-2", "modifier": { "null if": { "target field": "TYPE", "non null value": "VAR2" } } } ], "transformations": [ { "field": "DATA", "transformation": { "exclude": {}} } ] } Logical Types To transcode data to and from multiple formats, Mainframe Connector converts all data to an intermediate representation (IR) that is based on logical types.
- Mainframe Connector transcodes Queued Sequential Access Method (QSAM) flat files to Google Cloud compatible formats, and the other way around using the qsam commands.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- INPUT OUTPUT Flags and arguments The qsam decode command uses the following flags and arguments: INPUT : DataPath Specify the data path of the QSAM file you want to decode.
- This command decodes records from a QSAM file to the format you specify using the --output-format argument.
- Synopsis cloud run job cancel [-h] --project= PROJECT --region= REGION EXECUTION Flags and arguments The cloud run job cancel command uses the following flags and arguments: EXECUTION Specify the name of the Cloud Run job execution id. --help or -h (Optional) Display this help message. --project = PROJECT Specify the project ID. --region = REGION Specify the region in which the resource can be found. cloud run job execute Execute a specific job.
- Synopsis systemreport [-h] [--available-security-providers] [--supported-ciphers] Flags and arguments The systemreport command uses the following flags and arguments: --available-security-providers (Optional) Print supported security providers. --help or -h (Optional) Display this help message. --supported-ciphers (Optional) Print supported ciphers. vsam decode Decode VSAM data.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Query file SELECT FROM bigquery-public-data.samples.wikipedia WHERE title = @mytitle AND num characters > @min chars; Execution example bq query \ --project id=mainframe-connector-dev \ --location="US" \ --parameters=mytitle::Hippocrates,min chars:INT64:42600 Perform a dry run of the gsutil cp command The gsutil cp command decodes a QSAM file using a COBOL copybook, and generates an ORC file on Cloud Storage.
- No qsam and vsam commands qsam decode Use this command to transcode QSAM file records to the format you want using the --output-format argument.
- Note: We recommend that you use the qsam decode and qsam encode commands to perform this task.
- Note: We recommend that you use the qsam decode and qsam encode commands to perform this task.

### Transcoder configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- The qsam encode and qsam decode commands use the transcoder configuration file to perform data transcoding.
- Transformation View transformations are used to modify the relationship between the table and the QSAM file.
- JSON representation { "filler" : object ( Filler ) , "null if" : object ( NullIf ) , "format date" : object ( FormatDate ) , "chain" : object ( ModifierChain ) , "zoned decimal" : object ( ZonedDecimal ) , "binary" : object ( Binary ) , "packed decimal" : object ( PackedDecimal ) , "null if invalid" : object ( NullIfInvalid ) , "bytes" : object ( Bytes ) , "varlen" : object ( VarLen ) , "string" : object ( String ) , "null if empty" : object ( NullIfEmpty ) , "format timestamp" : object ( FormatTimestamp ) , "hfp" : object ( HFP ) , "decode as null" : object ( DecodeAsNull ) , "encode null as" : object ( EncodeNullAs ) } Fields filler object ( Filler ) Excludes the field from processing and output. null if object ( NullIf ) Conditionally sets the field to null based on the value of another field. format date object ( FormatDate ) Formats a string field as a date. chain object ( ModifierChain ) Chains multiple modifiers to be applied sequentially. zoned decimal object ( ZonedDecimal ) Overrides default configuration for zoned decimal fields. binary object ( Binary ) Overrides default configuration for binary numeric fields. packed decimal object ( PackedDecimal ) Overrides default configuration for packed decimal fields. null if invalid object ( NullIfInvalid ) Sets the field to null if a transcoding error occurs, preventing record spillover. bytes object ( Bytes ) Treats the field as a raw sequence of bytes, ignoring prior type information. varlen object ( VarLen ) Set the record as a variable length field. string object ( String ) Overrides default configuration for string fields. null if empty object ( NullIfEmpty ) Sets the field to null if its content is considered empty. format timestamp object ( FormatTimestamp ) Formats a string field as a timestamp. hfp object ( HFP ) Interprets the field as a Hexadecimal Floating-Point (HFP) number. decode as null object ( DecodeAsNull ) Defines how null values must be decoded. encode null as object ( EncodeNullAs ) Defines how null values must be encoded.
- JSON representation { "defaults" : object ( DefaultsSection ) , "field suffixes" : object ( FieldSuffix ) , "field overrides" : object ( FieldOverride ) , "transformations" : object ( Transformation ) , "schema validation mode" : enum ( SchemaValidationMode ) , "header records to skip" : long , "record filter condition" : string } Fields defaults object ( DefaultsSection ) Specify default field modifiers for Cobol archetypes. field suffixes object ( FieldSuffix ) Specify field suffixes. field overrides object ( FieldOverride ) Specify field overrides. transformations object ( Transformation ) Specify field transformations. schema validation mode enum ( SchemaValidationMode ) Specify the schema validation mode. header records to skip long Specify the number of first records to skip. record filter condition string Specify a filter condition for records.

