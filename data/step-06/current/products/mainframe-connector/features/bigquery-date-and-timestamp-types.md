---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.238Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "BigQuery DATE and TIMESTAMP types"
feature_slug: "bigquery-date-and-timestamp-types"
latest_feature_date: "2024-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/data-types"
  - "https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration"
keywords:
  - "date"
  - "and"
  - "timestamp"
  - "types"
  - "the"
  - "connector"
  - "supports"
  - "with"
---

# BigQuery DATE and TIMESTAMP types

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The connector supports BigQuery DATE and TIMESTAMP types with configurable field suffix and format patterns.

## Extended Definition

The connector supports BigQuery DATE and TIMESTAMP types with configurable field suffix and format patterns.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/data-types](https://docs.cloud.google.com/mainframe-connector/docs/data-types)
- [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)

## Supporting Pages

### "qsam and vsam commands reference \_|\_ Mainframe Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- Source ID: `site-docs-reference`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Logical type ORC type BigDecimal decimal BigInteger decimal Bytes binary blob Date date Decimal64 decimal64 Double float64 List list Long 64-bit integer (bigint) Record struct String UTF-8 encoded string Timestamp timestamp (without local timezone) BigQuery type mapping The following table provides the mapping between Mainframe Connector logical types to BigQuery data types.
- Mainframe Connector supports the following types of lists: Fixed lists Dynamic lists Packed dynamic lists Fixed lists Fixed lists are used when the exact number of items (item count) that will be a part of the list is known in advance, and this number always remains the same.
- You can use the following example to implement a tagged union: { "field override": [ { "field": "VARIANT-1", "modifier": { "null if": { "target field": "TYPE", "non null value": "VAR1" } } }, { "field": "VARIANT-2", "modifier": { "null if": { "target field": "TYPE", "non null value": "VAR2" } } } ], "transformations": [ { "field": "DATA", "transformation": { "exclude": {}} } ] } Logical Types To transcode data to and from multiple formats, Mainframe Connector converts all data to an intermediate representation (IR) that is based on logical types.
- Mainframe Connector also supports transcoding Virtual Storage Access Method (VSAM) files to Google Cloud compatible formats using the vsam decode command.

### Mainframe Connector data types \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/data-types](https://docs.cloud.google.com/mainframe-connector/docs/data-types)
- Source ID: `site-docs-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Encodes the String , LocalDate , BigDecimal , and Timestamp data types.
- DISPLAY FAIL ON INVALID DATA TIMESTAMP field which uses the TIMESTAMP CONVERTER command Timestamp TIMESTAMP If an invalid date and FAIL ON INVALID DATA is set, an error is displayed and the record is ignored.
- Home Documentation Migration Mainframe Connector Reference Send feedback Mainframe Connector data types Stay organized with collections Save and categorize content based on your preferences.
- The following tables lists all the data types that Mainframe Connector supports.

### Copybook parser reference \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- Source ID: `site-docs-reference`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To do so, you must define environment variables that begin with the word SUFFIX in the following format: SUFFIX SUFFIX STRING ="command --format FORMAT --timezone TIMEZONE " The following list describes the format in more detail: SUFFIX SUFFIX STRING : The environment variable that you can use to define date and timestamp data.
- Support for date and timestamp fields Mainframe Connector supports moving date and timestamp data in and out of BigQuery.
- If you define two environment variables as SUFFIX TIMESTAMP="timestamp-converter --format yyyy-MM-dd SUFFIX TIMESTAMP=timestamp-converter --format 'yyyy-MM-dd HH.mm.ss.SSSSSS' --timezone America/New York" and SUFFIX TS=$SUFFIX TIMESTAMP , a field with one of the following suffixes: -TIMESTAMP , TIMESTAMP , -TS , or TS will be a TIMESTAMP type field in BigQuery, and its pattern will be yyyy-MM-dd HH:mm:ss.SSSSSS with timezone America/New York .
- If you use these constructs in your copybook, Mainframe Connector shows an error. dataAlignedClause dataBlankWhenZeroClause dataCommonOwnLocalClause dataIntegerStringClause dataJustifiedClause dataOccursClause dataReceivedByClause dataRecordAreaClause dataRenamesClause dataSignClause dataSynchronizedClause dataThreadLocalClause dataTypeClause dataTypeDefClause dataUsingClause Data types COBOL data types like COMP-1 and COMP-2 are supported.

### Transcoder configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)
- Source ID: `site-docs-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "filler" : object ( Filler ) , "null if" : object ( NullIf ) , "format date" : object ( FormatDate ) , "chain" : object ( ModifierChain ) , "zoned decimal" : object ( ZonedDecimal ) , "binary" : object ( Binary ) , "packed decimal" : object ( PackedDecimal ) , "null if invalid" : object ( NullIfInvalid ) , "bytes" : object ( Bytes ) , "varlen" : object ( VarLen ) , "string" : object ( String ) , "null if empty" : object ( NullIfEmpty ) , "format timestamp" : object ( FormatTimestamp ) , "hfp" : object ( HFP ) , "decode as null" : object ( DecodeAsNull ) , "encode null as" : object ( EncodeNullAs ) } Fields filler object ( Filler ) Excludes the field from processing and output. null if object ( NullIf ) Conditionally sets the field to null based on the value of another field. format date object ( FormatDate ) Formats a string field as a date. chain object ( ModifierChain ) Chains multiple modifiers to be applied sequentially. zoned decimal object ( ZonedDecimal ) Overrides default configuration for zoned decimal fields. binary object ( Binary ) Overrides default configuration for binary numeric fields. packed decimal object ( PackedDecimal ) Overrides default configuration for packed decimal fields. null if invalid object ( NullIfInvalid ) Sets the field to null if a transcoding error occurs, preventing record spillover. bytes object ( Bytes ) Treats the field as a raw sequence of bytes, ignoring prior type information. varlen object ( VarLen ) Set the record as a variable length field. string object ( String ) Overrides default configuration for string fields. null if empty object ( NullIfEmpty ) Sets the field to null if its content is considered empty. format timestamp object ( FormatTimestamp ) Formats a string field as a timestamp. hfp object ( HFP ) Interprets the field as a Hexadecimal Floating-Point (HFP) number. decode as null object ( DecodeAsNull ) Defines how null values must be decoded. encode null as object ( EncodeNullAs ) Defines how null values must be encoded.
- Examples: "new field name" (replaces the field with a fixed name) "new $1" (uses the first capture group from find ) "${1} new" (alternative syntax for capture groups) "prefix $1 suffix" (uses a capture group and adds prefixes/suffixes) Split JSON representation { "field" : string , "primary key" : string , "foreign key" : string } Fields field string Specify the field you want to split. primary key string Specify the field name that will be used as a primary key. foreign key string Specify the name for the field that will be added to the new schema where the primary-key value will be stored.
- To create a null-indicator field, you can use a FieldSuffix with a null if field modifier, and set is inverse to true as shown in the following examples: Example : Null-indicator To create a null-indicator field, we can use the null if field modifier like so. { "field suffixes": [ { "suffix": "NID", "is inverse": true, "modifier": { "null if": { "null value": "?", "target field": "$self" } } } ] } This allows for all fields with the suffix NID to effectively be null indicators as shown in the following copybook snippet: 01 REC.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

