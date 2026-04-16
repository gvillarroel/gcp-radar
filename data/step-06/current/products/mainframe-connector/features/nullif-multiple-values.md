---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.227Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "NullIf multiple values"
feature_slug: "nullif-multiple-values"
latest_feature_date: "2025-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference"
keywords:
  - "nullif"
  - "multiple"
  - "values"
  - "the"
  - "field"
  - "modifier"
  - "can"
  - "accept"
---

# NullIf multiple values

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The NullIf field modifier can accept multiple values.

## Extended Definition

The NullIf field modifier can accept multiple values.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)

## Supporting Pages

### Transcoder configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "filler" : object ( Filler ) , "null if" : object ( NullIf ) , "format date" : object ( FormatDate ) , "chain" : object ( ModifierChain ) , "zoned decimal" : object ( ZonedDecimal ) , "binary" : object ( Binary ) , "packed decimal" : object ( PackedDecimal ) , "null if invalid" : object ( NullIfInvalid ) , "bytes" : object ( Bytes ) , "varlen" : object ( VarLen ) , "string" : object ( String ) , "null if empty" : object ( NullIfEmpty ) , "format timestamp" : object ( FormatTimestamp ) , "hfp" : object ( HFP ) , "decode as null" : object ( DecodeAsNull ) , "encode null as" : object ( EncodeNullAs ) } Fields filler object ( Filler ) Excludes the field from processing and output. null if object ( NullIf ) Conditionally sets the field to null based on the value of another field. format date object ( FormatDate ) Formats a string field as a date. chain object ( ModifierChain ) Chains multiple modifiers to be applied sequentially. zoned decimal object ( ZonedDecimal ) Overrides default configuration for zoned decimal fields. binary object ( Binary ) Overrides default configuration for binary numeric fields. packed decimal object ( PackedDecimal ) Overrides default configuration for packed decimal fields. null if invalid object ( NullIfInvalid ) Sets the field to null if a transcoding error occurs, preventing record spillover. bytes object ( Bytes ) Treats the field as a raw sequence of bytes, ignoring prior type information. varlen object ( VarLen ) Set the record as a variable length field. string object ( String ) Overrides default configuration for string fields. null if empty object ( NullIfEmpty ) Sets the field to null if its content is considered empty. format timestamp object ( FormatTimestamp ) Formats a string field as a timestamp. hfp object ( HFP ) Interprets the field as a Hexadecimal Floating-Point (HFP) number. decode as null object ( DecodeAsNull ) Defines how null values must be decoded. encode null as object ( EncodeNullAs ) Defines how null values must be encoded.
- To create a null-indicator field, you can use a FieldSuffix with a null if field modifier, and set is inverse to true as shown in the following examples: Example : Null-indicator To create a null-indicator field, we can use the null if field modifier like so. { "field suffixes": [ { "suffix": "NID", "is inverse": true, "modifier": { "null if": { "null value": "?", "target field": "$self" } } } ] } This allows for all fields with the suffix NID to effectively be null indicators as shown in the following copybook snippet: 01 REC.
- Example : Binary null-indicator To create a binary null-indicator field, we can use the binary and null if field modifiers like so. { "field suffixes": [ { "suffix": "NID", "modifier": { "binary": {} } }, { "suffix": "NID", "is inverse": true, "modifier": { "null if": { "null value": "15", "target field": "$self" } } } ] } This allows for all fields with the suffix NID to effectively be binary null indicators using the same copybook from the earlier example.
- The values for null and not-null are expressed as HEX . { "field suffixes": [ { "suffix": "NID", "modifier": { "bytes": {} } }, { "suffix": "NID", "is inverse": true, "modifier": { "null if": { "null value": "FF", "target field": "$self" } } } ] } This allows for all fields with the suffix NID to effectively be a bytes null indicator using the same copybook from the earlier example.

### Mainframe Connector API commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-reference)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example of how to you can use a parameterized bq query query: Query file SELECT FROM bigquery-public-data.samples.wikipedia WHERE title = @xtitle The following is an example with multiple parameters.
- Parse the maxChunkSize argument The maxChunkSize flag accepts values in the form of an amount and a unit of measurement, for example 5 MiB.
- If you want to use multiple character sets, you can provide the paths to multiple characters sets separated by the semi-colon delimiter.
- You can provide the value in the following formats: Java format: b/k/m/g/t, for byte, kibibyte, mebibyte, gibibyte, and tebibyte respectively International format: KiB/MiB/GiB/TiB, for kibibyte, mebibyte, gibibyte, and tebibyte respectively Metric format: b/kb/mb/gb/tb, for kilobyte, megabyte, gigabyte, and terabyte respectively Data size parsing is case insensitive.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Use one of the following values: ALLOW FIELD ADDITION : Allow new fields to be added ALLOW FIELD RELAXATION : Allow relaxing REQUIRED fields to NULLABLE Repeat this flag to specify multiple schema update options. --skip leading rows = NUMBER (Optional) Specify the number of rows to skip at the beginning of the source file.
- You can use one of the following values: CSV , NEWLINE DELIMITED JSON , AVRO , DATASTORE BACKUP (use this value for Filestore), PARQUET , ORC .
- You can also use this flag with Firestore exports. --quote = QUOTE (Optional) Specify a quote character to surround fields in the CSV data.
- You can specify multiple substitutions by repeating the option: --substitution key1=value1 --substitution key2=value2 .

### Copybook parser reference \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- The following list describes the parameters you can use with these environment variables: command : The value must be null-indicator . –null-value : The value null indicator signals that the referenced field is null.
- If multiple formats can match a given input, the first format that matches is used for loading to BigQuery.
- Support for DBCS fields Ensure the following when using DBCS fields: When you use PIC G or Pic N DBCS fields, you must provide one of the following valid multi-byte character set (MBCS) encodings in the encoding option or in the ENCODING environment variable when using the gsutil cp or bq export commands: x-IBM930 x-IBM933 x-IBM935 x-IBM937 x-IBM939 x-IBM942 x-IBM942C x-IBM943 x-IBM943C x-IBM949 x-IBM949C x-IBM950 x-IBM964 x-IBM970 x-IBM1364 When a copybook field only contains DBCS bytes, but these bytes are not surrounded by shift-out (0x0E) and shift-in (0x0F), you must add the suffix DBCS to the field name to ensure that these bytes are decoded as DBCS bytes.
- If you define two environment variables as SUFFIX TIMESTAMP="timestamp-converter --format yyyy-MM-dd SUFFIX TIMESTAMP=timestamp-converter --format 'yyyy-MM-dd HH.mm.ss.SSSSSS' --timezone America/New York" and SUFFIX TS=$SUFFIX TIMESTAMP , a field with one of the following suffixes: -TIMESTAMP , TIMESTAMP , -TS , or TS will be a TIMESTAMP type field in BigQuery, and its pattern will be yyyy-MM-dd HH:mm:ss.SSSSSS with timezone America/New York .

