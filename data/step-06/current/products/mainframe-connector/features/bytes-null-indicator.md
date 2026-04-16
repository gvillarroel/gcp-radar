---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.231Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Bytes null indicator"
feature_slug: "bytes-null-indicator"
latest_feature_date: "2024-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration"
  - "https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/data-types"
keywords:
  - "bytes"
  - "null"
  - "indicator"
  - "the"
  - "is"
  - "supported"
---

# Bytes null indicator

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The bytes null indicator is supported.

## Extended Definition

The bytes null indicator is supported.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)
- [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/data-types](https://docs.cloud.google.com/mainframe-connector/docs/data-types)

## Supporting Pages

### Transcoder configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- The values for null and not-null are expressed as HEX . { "field suffixes": [ { "suffix": "NID", "modifier": { "bytes": {} } }, { "suffix": "NID", "is inverse": true, "modifier": { "null if": { "null value": "FF", "target field": "$self" } } } ] } This allows for all fields with the suffix NID to effectively be a bytes null indicator using the same copybook from the earlier example.
- JSON representation { "filler" : object ( Filler ) , "null if" : object ( NullIf ) , "format date" : object ( FormatDate ) , "chain" : object ( ModifierChain ) , "zoned decimal" : object ( ZonedDecimal ) , "binary" : object ( Binary ) , "packed decimal" : object ( PackedDecimal ) , "null if invalid" : object ( NullIfInvalid ) , "bytes" : object ( Bytes ) , "varlen" : object ( VarLen ) , "string" : object ( String ) , "null if empty" : object ( NullIfEmpty ) , "format timestamp" : object ( FormatTimestamp ) , "hfp" : object ( HFP ) , "decode as null" : object ( DecodeAsNull ) , "encode null as" : object ( EncodeNullAs ) } Fields filler object ( Filler ) Excludes the field from processing and output. null if object ( NullIf ) Conditionally sets the field to null based on the value of another field. format date object ( FormatDate ) Formats a string field as a date. chain object ( ModifierChain ) Chains multiple modifiers to be applied sequentially. zoned decimal object ( ZonedDecimal ) Overrides default configuration for zoned decimal fields. binary object ( Binary ) Overrides default configuration for binary numeric fields. packed decimal object ( PackedDecimal ) Overrides default configuration for packed decimal fields. null if invalid object ( NullIfInvalid ) Sets the field to null if a transcoding error occurs, preventing record spillover. bytes object ( Bytes ) Treats the field as a raw sequence of bytes, ignoring prior type information. varlen object ( VarLen ) Set the record as a variable length field. string object ( String ) Overrides default configuration for string fields. null if empty object ( NullIfEmpty ) Sets the field to null if its content is considered empty. format timestamp object ( FormatTimestamp ) Formats a string field as a timestamp. hfp object ( HFP ) Interprets the field as a Hexadecimal Floating-Point (HFP) number. decode as null object ( DecodeAsNull ) Defines how null values must be decoded. encode null as object ( EncodeNullAs ) Defines how null values must be encoded.
- To create a null-indicator field, you can use a FieldSuffix with a null if field modifier, and set is inverse to true as shown in the following examples: Example : Null-indicator To create a null-indicator field, we can use the null if field modifier like so. { "field suffixes": [ { "suffix": "NID", "is inverse": true, "modifier": { "null if": { "null value": "?", "target field": "$self" } } } ] } This allows for all fields with the suffix NID to effectively be null indicators as shown in the following copybook snippet: 01 REC.
- Example : Binary null-indicator To create a binary null-indicator field, we can use the binary and null if field modifiers like so. { "field suffixes": [ { "suffix": "NID", "modifier": { "binary": {} } }, { "suffix": "NID", "is inverse": true, "modifier": { "null if": { "null value": "15", "target field": "$self" } } } ] } This allows for all fields with the suffix NID to effectively be binary null indicators using the same copybook from the earlier example.

### Copybook parser reference \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- The following list describes the parameters you can use with these environment variables: command : The value must be null-indicator . –null-value : The value null indicator signals that the referenced field is null.
- The value of –not-null-value must be either a string or decimal number. –keep : (Optional) When specified, the null-indicator field is kept as a column in the Optimized Row Columnar (ORC) file format.
- The value of --null-value must be either a string or decimal number. –not-null-value : (Optional) When specified, the value null indicator signals that the referenced field is not null.
- If the null-indicator doesn't have a referenced field, Mainframe Connector displays an error message and stops processing the files.

### "qsam and vsam commands reference \_|\_ Mainframe Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- This will also prevent them from getting parsed due to null indicators having lazy evaluations.
- You can use the following example to implement a tagged union: { "field override": [ { "field": "VARIANT-1", "modifier": { "null if": { "target field": "TYPE", "non null value": "VAR1" } } }, { "field": "VARIANT-2", "modifier": { "null if": { "target field": "TYPE", "non null value": "VAR2" } } } ], "transformations": [ { "field": "DATA", "transformation": { "exclude": {}} } ] } Logical Types To transcode data to and from multiple formats, Mainframe Connector converts all data to an intermediate representation (IR) that is based on logical types.
- Logical type ORC type BigDecimal decimal BigInteger decimal Bytes binary blob Date date Decimal64 decimal64 Double float64 List list Long 64-bit integer (bigint) Record struct String UTF-8 encoded string Timestamp timestamp (without local timezone) BigQuery type mapping The following table provides the mapping between Mainframe Connector logical types to BigQuery data types.
- Logical type BigQuery data type Comments BigDecimal NUMERIC BigInteger NUMERIC Bytes BYTES Date DATE Decimal64 NUMERIC Double FLOAT64 List ARRAY Nested lists and lists of maps are not supported.

### Mainframe Connector data types \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/data-types](https://docs.cloud.google.com/mainframe-connector/docs/data-types)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Bytes STRING See DISPLAY ( ) See DISPLAY ( ) NATIONAL NULL INDICATOR EMPTY STRING AS NULL TRIM STRING SUFFIX See DISPLAY ( ) Bytes STRING See DISPLAY ( ) See DISPLAY ( ) UTF8 NULL INDICATOR EMPTY STRING AS NULL TRIM STRING SUFFIX See DISPLAY ( ) Bytes STRING See DISPLAY ( ) See DISPLAY ( ) DISPLAY (GROUP) VARIABLE LENGTH ENABLED VARIABLE LENGTH LEN SUFFIX VARIABLE LENGTH DATA SUFFIX If VARIABLE LENGTH ENABLED is set, the field is of variable length, and marked by a group structure of two or three fields, depending on an extra NULL INDICATOR field: The first field either ends with -LEN or with the value set by VARIABLE LENGTH LEN SUFFIX .
- ZONED EMPTY VALUES ARE NULL FAIL ON INVALID DATA precision Decimal64 NUMERIC Decode as NULL , if all the bytes are: Either spaces, high, or low, and, Not FAIL ON INVALID DATA or, FAIL ON INVALID DATA and, EMPTY VALUES ARE NULL .
- ZONED EMPTY VALUES ARE NULL FAIL ON INVALID DATA precision Long INT64 Decode as NULL , if all the bytes are: Either spaces, high, or low, and Not FAIL ON INVALID DATA or, FAIL ON INVALID DATA and, EMPTY VALUES ARE NULL .
- DISPLAY-1 NULL INDICATOR EMPTY STRING AS NULL TRIM STRING SUFFIX If the field name ends with DBCS or -DBCS then use shift-out, shift-in encoding.

