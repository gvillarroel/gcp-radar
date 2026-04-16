---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.238Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "IBM HFP data types"
feature_slug: "ibm-hfp-data-types"
latest_feature_date: "2024-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration"
  - "https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode"
keywords:
  - "ibm"
  - "hfp"
  - "types"
  - "single"
  - "and"
  - "double"
  - "hexadecimal"
  - "floating"
---

# IBM HFP data types

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

Single and double IBM hexadecimal floating-point data types are supported.

## Extended Definition

Single and double IBM hexadecimal floating-point data types are supported.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)
- [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)

## Supporting Pages

### "qsam and vsam commands reference \_|\_ Mainframe Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Picture symbols Picture attributes Logical type COMP-1, COMP-2 Double (64-bit signed floating point) Example 01 REC 03 HFP-SINGLE COMP-1.
- Mainframe Connector uses both single and double precision formats for HFP fields.
- Picture symbols Picture attributes Logical type S, 9 COMP, COMPUTATIONAL Long (signed 64-bit integer) Example 01 REC 02 INT PIC S9(8) COMP Hexadecimal floating point fields (COMP-1, COMP-2) Hexadecimal floating point (HFP) fields are fully supported.
- Double Represents a double precision floating point number as described in IEEE Standard for Floating-Point Arithmetic (IEEE 754).

### Transcoder configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "filler" : object ( Filler ) , "null if" : object ( NullIf ) , "format date" : object ( FormatDate ) , "chain" : object ( ModifierChain ) , "zoned decimal" : object ( ZonedDecimal ) , "binary" : object ( Binary ) , "packed decimal" : object ( PackedDecimal ) , "null if invalid" : object ( NullIfInvalid ) , "bytes" : object ( Bytes ) , "varlen" : object ( VarLen ) , "string" : object ( String ) , "null if empty" : object ( NullIfEmpty ) , "format timestamp" : object ( FormatTimestamp ) , "hfp" : object ( HFP ) , "decode as null" : object ( DecodeAsNull ) , "encode null as" : object ( EncodeNullAs ) } Fields filler object ( Filler ) Excludes the field from processing and output. null if object ( NullIf ) Conditionally sets the field to null based on the value of another field. format date object ( FormatDate ) Formats a string field as a date. chain object ( ModifierChain ) Chains multiple modifiers to be applied sequentially. zoned decimal object ( ZonedDecimal ) Overrides default configuration for zoned decimal fields. binary object ( Binary ) Overrides default configuration for binary numeric fields. packed decimal object ( PackedDecimal ) Overrides default configuration for packed decimal fields. null if invalid object ( NullIfInvalid ) Sets the field to null if a transcoding error occurs, preventing record spillover. bytes object ( Bytes ) Treats the field as a raw sequence of bytes, ignoring prior type information. varlen object ( VarLen ) Set the record as a variable length field. string object ( String ) Overrides default configuration for string fields. null if empty object ( NullIfEmpty ) Sets the field to null if its content is considered empty. format timestamp object ( FormatTimestamp ) Formats a string field as a timestamp. hfp object ( HFP ) Interprets the field as a Hexadecimal Floating-Point (HFP) number. decode as null object ( DecodeAsNull ) Defines how null values must be decoded. encode null as object ( EncodeNullAs ) Defines how null values must be encoded.
- HFP Set this field as Hexadecimal Floating-Point.
- JSON representation { "alpha numeric display" : object ( FieldModifier ) , "numeric display" : object ( FieldModifier ) , "binary" : object ( FieldModifier ) , "packed decimal" : object ( FieldModifier ) , "national" : object ( FieldModifier ) , "utf8" : object ( FieldModifier ) , "dbcs" : object ( FieldModifier ) , "hexadecimal floating point" : object ( FieldModifier ) } Fields alpha numeric display object ( FieldModifier ) Specify defaults for alphanumeric (PIC X) fields. numeric display object ( FieldModifier ) Specify defaults for numeric display (zoned decimal) fields. binary object ( FieldModifier ) Specify defaults for binary number (COMP) fields. packed decimal object ( FieldModifier ) Specify defaults for packed decimal (COMP-3) fields. national object ( FieldModifier ) Specify defaults for national (PIC N) fields. utf8 object ( FieldModifier ) Specify defaults for UTF-8 (PIC U) fields. dbcs object ( FieldModifier ) Default for dbcs (DISPLAY-1) fields. hexadecimal floating point object ( FieldModifier ) Default for hexadecimal floating point (COMP-1, COMP-2) fields.
- After the initial decoding of the field to its string form, if the field's content matches any of these values, it will be treated as null. hex bytes string A list of hexadecimal representations of a single byte.

### Copybook parser reference \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- The following PICTURE fields are supported: Pic A, Pic, B, Pic G (DBCS), Pic N (national or DBCS), Pic U (UTF8), Pic X, and zoned decimal (max precision 38, max scale 38) IBM Hexadecimal floating point (HFP) is supported.
- Support for DBCS fields Ensure the following when using DBCS fields: When you use PIC G or Pic N DBCS fields, you must provide one of the following valid multi-byte character set (MBCS) encodings in the encoding option or in the ENCODING environment variable when using the gsutil cp or bq export commands: x-IBM930 x-IBM933 x-IBM935 x-IBM937 x-IBM939 x-IBM942 x-IBM942C x-IBM943 x-IBM943C x-IBM949 x-IBM949C x-IBM950 x-IBM964 x-IBM970 x-IBM1364 When a copybook field only contains DBCS bytes, but these bytes are not surrounded by shift-out (0x0E) and shift-in (0x0F), you must add the suffix DBCS to the field name to ensure that these bytes are decoded as DBCS bytes.
- If you use these constructs in your copybook, Mainframe Connector shows an error. dataAlignedClause dataBlankWhenZeroClause dataCommonOwnLocalClause dataIntegerStringClause dataJustifiedClause dataOccursClause dataReceivedByClause dataRecordAreaClause dataRenamesClause dataSignClause dataSynchronizedClause dataThreadLocalClause dataTypeClause dataTypeDefClause dataUsingClause Data types COBOL data types like COMP-1 and COMP-2 are supported.
- For example, if your data corresponding to the copybook field 03 FLD01 PIC N USAGE DISPLAY-1 contains bytes 0x43 and 0xC5 in encoding x-IBM930 that are not surrounded by 0x0E and 0x0F , you must rename the copybook field name to 03 FLD01-DBCS PIC N USAGE DISPLAY-1 in order to correctly decode the DBCS data.

### Run Mainframe Connector in standalone mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- Source ID: `site-docs-root-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example YAML file: environmentVariables: - name: "QUERY" value: "gs://my bucket/my/input.sql" - name: "OUTFILE" value: "gs://my bucket/my/output.orc" - name: "COPYBOOK" value: "gs://my bucket/my/copybook.cpy" - name: "TRANSCODE CONFIGURATION" value: "gs://my bucket/my/transcode-configuration-file.json" - name: "PROJECT ID" value: "my-project" - name: "LOCATION" value: "US" - name: "LOG PROJECT" value: "my-log-project" - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: qsam encode \ $QUERY $OUTFILE --copybook ${COPYBOOK PATH} --transcode-configuration ${TRANSCODE CONFIGURATION PATH} --input-format=BIGQUERY \ --input-parameter project id=${PROJECT ID} \ --input-parameter location=${LOCATION} Use bq export command environmentVariables: - name: "COPYBOOK" value: " COPYBOOK FILEPATH " - name: "LOG PROJECT" value: " LOG PROJECT " - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: bq export --project id=" PROJECT NAME " --location=" LOCATION " --sql="select from project.dataset.table" --bucket=" BUCKET " Replace the following: COPYBOOK FILEPATH : The path to the copybook DD.
- Mainframe Connector provides two ways in which you can export BigQuery table: Using qsam commands (release 5.16.0 and later) Using the bq export command Use qsam commands environmentVariables: - name: "QUERY" value: " QUERY PATH " - name: "OUTFILE" value: " OUTFILE " - name: "COPYBOOK" value: " COPYBOOK PATH " - name: "TRANSCODE CONFIGURATION" value: " TRANSCODE CONFIGURATION PATH " - name: "PROJECT ID" value: " PROJECT ID " - name: "LOCATION" value: " LOCATION " - name: "LOG PROJECT" value: " LOG PROJECT " - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: qsam encode \ $QUERY $OUTFILE --copybook ${COPYBOOK PATH} --transcode-configuration ${TRANSCODE CONFIGURATION PATH} --input-format=BIGQUERY \ --input-parameter project id=${PROJECT ID} \ --input-parameter location=${LOCATION} Replace the following: QUERY PATH : The SQL query to execute.
- The following is an example YAML file: environmentVariables: - name: "INFILE" value: "gs://my bucket/my/input.dat" - name: "OUTFILE" value: "gs://my bucket/my/output.orc" - name: "COPYBOOK" value: "gs://my bucket/my/copybook.cpy" - name: "TRANSCODE CONFIGURATION" value: "gs://my bucket/my/transcode-configuration-file.json" - name: "LOG PROJECT" value: "the log project" - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: qsam decode $INFILE $OUTFILE --copybook $COPYBOOK --transcode-configuration ${TRANSCODE CONFIGURATION} --output-format orc --parallelism 8 --chunk-size "512Mib" Note Variables with the suffix FILLER are ignored during the import process.
- In the following sample, we use the Cloud Storage DataPath for INFILE , OUTFILE , COPYBOOK , and TRANSCODE CONFIGURATION . environmentVariables: - name: "INFILE" value: " INFILE " - name: "OUTFILE" value: " OUTFILE " - name: "COPYBOOK" value: " COPYBOOK " - name: "TRANSCODE CONFIGURATION" value: " TRANSCODE CONFIGURATION " - name: "LOG PROJECT" value: " LOG PROJECT " - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: qsam decode $INFILE $OUTFILE --copybook $COPYBOOK --transcode-configuration ${TRANSCODE CONFIGURATION} --output-format orc --parallelism 8 --chunk-size "512Mib" Replace the following: INFILE : The name of the input file.

