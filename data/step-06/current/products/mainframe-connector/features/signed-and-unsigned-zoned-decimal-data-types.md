---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.239Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Signed and unsigned zoned decimal data types"
feature_slug: "signed-and-unsigned-zoned-decimal-data-types"
latest_feature_date: "2024-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/data-types"
  - "https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration"
  - "https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference"
keywords:
  - "signed"
  - "and"
  - "unsigned"
  - "zoned"
  - "decimal"
  - "types"
  - "are"
  - "supported"
---

# Signed and unsigned zoned decimal data types

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

Signed and unsigned zoned decimal data types are supported up to precision 38 and scale 38.

## Extended Definition

Signed and unsigned zoned decimal data types are supported up to precision 38 and scale 38.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/data-types](https://docs.cloud.google.com/mainframe-connector/docs/data-types)
- [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)
- [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)

## Supporting Pages

### "qsam and vsam commands reference \_|\_ Mainframe Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- Source ID: `site-docs-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Picture symbols Picture attributes Logical type S, 9, V COMP-3 Long (signed 64-bit integer), BigInteger, Decimal64, BigDecimal Example 01 REC 02 DEC PIC S9(2)V9(8) COMP-3 Zoned decimal field (DISPLAY) Zoned decimal fields are fully supported.
- Picture symbols Picture attributes Logical type S, 9 COMP, COMPUTATIONAL Long (signed 64-bit integer) Example 01 REC 02 INT PIC S9(8) COMP Hexadecimal floating point fields (COMP-1, COMP-2) Hexadecimal floating point (HFP) fields are fully supported.
- Logical type BigQuery data type Comments BigDecimal NUMERIC BigInteger NUMERIC Bytes BYTES Date DATE Decimal64 NUMERIC Double FLOAT64 List ARRAY Nested lists and lists of maps are not supported.
- Mainframe Connector supports the following types of lists: Fixed lists Dynamic lists Packed dynamic lists Fixed lists Fixed lists are used when the exact number of items (item count) that will be a part of the list is known in advance, and this number always remains the same.

### Mainframe Connector data types \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/data-types](https://docs.cloud.google.com/mainframe-connector/docs/data-types)
- Source ID: `site-docs-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ZONED EMPTY VALUES ARE NULL FAIL ON INVALID DATA precision Decimal64 NUMERIC Decode as NULL , if all the bytes are: Either spaces, high, or low, and, Not FAIL ON INVALID DATA or, FAIL ON INVALID DATA and, EMPTY VALUES ARE NULL .
- ZONED EMPTY VALUES ARE NULL FAIL ON INVALID DATA 18 Decimal BIGNUMERIC Decode as NULL , if all the bytes are: Either spaces, high, or low, and, Not FAIL ON INVALID DATA or, FAIL ON INVALID DATA and, EMPTY VALUES ARE NULL .
- COBOL usage type Supported flags Condition Optimized Row Columnar (ORC)​​ type Type Decoding behavior ( gsutil cp ) Encoding behavior ( bq export ) COMP1 , COMP2 Double FLOAT64 Encodes the String , Double , and Float data types.
- PACKED DECIMAL EMPTY VALUES ARE NULL FAIL ON INVALID DATA Decimal64 NUMERIC Decode as NULL , if all the bytes are: Either spaces, high, or low, and Not FAIL ON INVALID DATA or, FAIL ON INVALID DATA and, EMPTY VALUES ARE NULL .

### Transcoder configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "filler" : object ( Filler ) , "null if" : object ( NullIf ) , "format date" : object ( FormatDate ) , "chain" : object ( ModifierChain ) , "zoned decimal" : object ( ZonedDecimal ) , "binary" : object ( Binary ) , "packed decimal" : object ( PackedDecimal ) , "null if invalid" : object ( NullIfInvalid ) , "bytes" : object ( Bytes ) , "varlen" : object ( VarLen ) , "string" : object ( String ) , "null if empty" : object ( NullIfEmpty ) , "format timestamp" : object ( FormatTimestamp ) , "hfp" : object ( HFP ) , "decode as null" : object ( DecodeAsNull ) , "encode null as" : object ( EncodeNullAs ) } Fields filler object ( Filler ) Excludes the field from processing and output. null if object ( NullIf ) Conditionally sets the field to null based on the value of another field. format date object ( FormatDate ) Formats a string field as a date. chain object ( ModifierChain ) Chains multiple modifiers to be applied sequentially. zoned decimal object ( ZonedDecimal ) Overrides default configuration for zoned decimal fields. binary object ( Binary ) Overrides default configuration for binary numeric fields. packed decimal object ( PackedDecimal ) Overrides default configuration for packed decimal fields. null if invalid object ( NullIfInvalid ) Sets the field to null if a transcoding error occurs, preventing record spillover. bytes object ( Bytes ) Treats the field as a raw sequence of bytes, ignoring prior type information. varlen object ( VarLen ) Set the record as a variable length field. string object ( String ) Overrides default configuration for string fields. null if empty object ( NullIfEmpty ) Sets the field to null if its content is considered empty. format timestamp object ( FormatTimestamp ) Formats a string field as a timestamp. hfp object ( HFP ) Interprets the field as a Hexadecimal Floating-Point (HFP) number. decode as null object ( DecodeAsNull ) Defines how null values must be decoded. encode null as object ( EncodeNullAs ) Defines how null values must be encoded.
- ZonedDecimal Sets various options related to the encoding and decoding of zoned decimals.
- JSON representation { "alpha numeric display" : object ( FieldModifier ) , "numeric display" : object ( FieldModifier ) , "binary" : object ( FieldModifier ) , "packed decimal" : object ( FieldModifier ) , "national" : object ( FieldModifier ) , "utf8" : object ( FieldModifier ) , "dbcs" : object ( FieldModifier ) , "hexadecimal floating point" : object ( FieldModifier ) } Fields alpha numeric display object ( FieldModifier ) Specify defaults for alphanumeric (PIC X) fields. numeric display object ( FieldModifier ) Specify defaults for numeric display (zoned decimal) fields. binary object ( FieldModifier ) Specify defaults for binary number (COMP) fields. packed decimal object ( FieldModifier ) Specify defaults for packed decimal (COMP-3) fields. national object ( FieldModifier ) Specify defaults for national (PIC N) fields. utf8 object ( FieldModifier ) Specify defaults for UTF-8 (PIC U) fields. dbcs object ( FieldModifier ) Default for dbcs (DISPLAY-1) fields. hexadecimal floating point object ( FieldModifier ) Default for hexadecimal floating point (COMP-1, COMP-2) fields.
- The values for null and not-null are expressed as HEX . { "field suffixes": [ { "suffix": "NID", "modifier": { "bytes": {} } }, { "suffix": "NID", "is inverse": true, "modifier": { "null if": { "null value": "FF", "target field": "$self" } } } ] } This allows for all fields with the suffix NID to effectively be a bytes null indicator using the same copybook from the earlier example.

### Copybook parser reference \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- The following PICTURE fields are supported: Pic A, Pic, B, Pic G (DBCS), Pic N (national or DBCS), Pic U (UTF8), Pic X, and zoned decimal (max precision 38, max scale 38) IBM Hexadecimal floating point (HFP) is supported.
- If you use these constructs in your copybook, Mainframe Connector shows an error. dataAlignedClause dataBlankWhenZeroClause dataCommonOwnLocalClause dataIntegerStringClause dataJustifiedClause dataOccursClause dataReceivedByClause dataRecordAreaClause dataRenamesClause dataSignClause dataSynchronizedClause dataThreadLocalClause dataTypeClause dataTypeDefClause dataUsingClause Data types COBOL data types like COMP-1 and COMP-2 are supported.
- Unsupported fields and constructs The following sections describe fields and constructs are not supported by the COBOL constructs Data types COBOL constructs COBOL constructs even though these constructs are not supported.
- Supported data types and restrictions The following are the data types supported by the Native copybook parser and the restrictions for its use: Level 66 (ALIAS) or 77 (STANDALONE) are not supported.

