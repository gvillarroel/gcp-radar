---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.236Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Null indicator fields"
feature_slug: "null-indicator-fields"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/environment-variables"
  - "https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference"
  - "https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration"
keywords:
  - "null"
  - "indicator"
  - "fields"
  - "are"
  - "supported"
---

# Null indicator fields

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

Null indicator fields are supported.

## Extended Definition

Null indicator fields are supported.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/environment-variables](https://docs.cloud.google.com/mainframe-connector/docs/environment-variables)
- [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)

## Supporting Pages

### Mainframe Connector environment variables \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/environment-variables](https://docs.cloud.google.com/mainframe-connector/docs/environment-variables)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the following format to set the null indicator: SUFFIX NULL INDICATOR NAME ="command --null-value NULL VALUE --not-null-value NOT NULL VALUE " Use the following format to set the date and timestamp: SUFFIX SUFFIX NAME ="command --format FORMAT --timezone TIMEZONE " For more information, see Support for date and timestamp fields and Support for null indicator fields . (5.11.0 and onwards) Sets the values for the date and timestamp data types.
- BQSH FEATURE TERMINATE STRINGS ON NULL True 5.14.0 If not set, or if true, the DISPLAY , NATIONAL , DBCS , and UTF8 fields interpret null bytes as an end-of-string indicator and ignore the remaining bytes.
- This includes values that contain only nulls, spaces, or high bytes. (5.12.1 and onwards) Lets you enforce stricter error handling, as follows: Raise an error when parsing date and timestamp types that contain spaces (or are invalid dates or timestamps).
- BQSH FEATURE EMPTY VALUES ARE NULL True 5.13.0 Specifies that values containing only nulls (0x00), spaces (0x40), or high bytes (0xFF) should be decoded as null, and not throw an error for packed decimal and zoned decimal types.

### Copybook parser reference \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Null indicators are supported.
- To use null indicators, you must define environment variables that begin with the word SUFFIX in the following format: SUFFIX NULL INDICATOR NAME ="command --null-value NULL VALUE --not-null-value NOT NULL VALUE " NULL INDICATOR NAME corresponds to the suffixes -NULL INDICATOR NAME or NULL INDICATOR NAME that are interpreted as a null indicator when used as a suffix of a field name in a copybook.
- Unsupported fields and constructs The following sections describe fields and constructs are not supported by the COBOL constructs Data types COBOL constructs COBOL constructs even though these constructs are not supported.
- The following PICTURE fields are supported: Pic A, Pic, B, Pic G (DBCS), Pic N (national or DBCS), Pic U (UTF8), Pic X, and zoned decimal (max precision 38, max scale 38) IBM Hexadecimal floating point (HFP) is supported.

### "qsam and vsam commands reference \_|\_ Mainframe Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Picture symbols Picture attributes Logical type S, 9 COMP, COMPUTATIONAL Long (signed 64-bit integer) Example 01 REC 02 INT PIC S9(8) COMP Hexadecimal floating point fields (COMP-1, COMP-2) Hexadecimal floating point (HFP) fields are fully supported.
- Picture symbols Picture attributes Logical type S, 9, V COMP-3 Long (signed 64-bit integer), BigInteger, Decimal64, BigDecimal Example 01 REC 02 DEC PIC S9(2)V9(8) COMP-3 Zoned decimal field (DISPLAY) Zoned decimal fields are fully supported.
- Packed decimal fields (COMP-3) Packed decimal fields are fully supported.
- Picture symbols Picture attributes Logical type A, B, G, N, U, X, 9 DISPLAY, DISPLAY-1, NATIONAL, UTF-8 String Example 01 REC 02 STR PIC X(10) 02 NATIONAL PIC N(10) 02 UTF8 PIC U(1) USAGE UTF-8 Encoding format Alphanumeric fields are encoded as follows: X fields default to EBCDIC encoding National (N) fields default to Unicode Transformation Format 16-bit (UTF-16 BE) encoding UTF8 fields default to Unicode Transformation Format-8 (UTF-8) encoding Mainframe Connector supports most single byte character set (SBCS), double byte character set (DBCS) encodings.

### Transcoder configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration](https://docs.cloud.google.com/mainframe-connector/docs/transcoder-configuration)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- The values for null and not-null are expressed as HEX . { "field suffixes": [ { "suffix": "NID", "modifier": { "bytes": {} } }, { "suffix": "NID", "is inverse": true, "modifier": { "null if": { "null value": "FF", "target field": "$self" } } } ] } This allows for all fields with the suffix NID to effectively be a bytes null indicator using the same copybook from the earlier example.
- To create a null-indicator field, you can use a FieldSuffix with a null if field modifier, and set is inverse to true as shown in the following examples: Example : Null-indicator To create a null-indicator field, we can use the null if field modifier like so. { "field suffixes": [ { "suffix": "NID", "is inverse": true, "modifier": { "null if": { "null value": "?", "target field": "$self" } } } ] } This allows for all fields with the suffix NID to effectively be null indicators as shown in the following copybook snippet: 01 REC.
- Example : Binary null-indicator To create a binary null-indicator field, we can use the binary and null if field modifiers like so. { "field suffixes": [ { "suffix": "NID", "modifier": { "binary": {} } }, { "suffix": "NID", "is inverse": true, "modifier": { "null if": { "null value": "15", "target field": "$self" } } } ] } This allows for all fields with the suffix NID to effectively be binary null indicators using the same copybook from the earlier example.
- For example, null indicator or length fields can be omitted from the table.

