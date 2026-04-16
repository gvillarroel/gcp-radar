---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.240Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Variable length data type"
feature_slug: "variable-length-data-type"
latest_feature_date: "2024-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/data-types"
  - "https://docs.cloud.google.com/mainframe-connector/docs/environment-variables"
  - "https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference"
keywords:
  - "variable"
  - "length"
  - "type"
  - "is"
  - "supported"
---

# Variable length data type

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

Variable length data type is supported.

## Extended Definition

Variable length data type is supported.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/data-types](https://docs.cloud.google.com/mainframe-connector/docs/data-types)
- [https://docs.cloud.google.com/mainframe-connector/docs/environment-variables](https://docs.cloud.google.com/mainframe-connector/docs/environment-variables)
- [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)

## Supporting Pages

### Mainframe Connector data types \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/data-types](https://docs.cloud.google.com/mainframe-connector/docs/data-types)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Bytes STRING See DISPLAY ( ) See DISPLAY ( ) NATIONAL NULL INDICATOR EMPTY STRING AS NULL TRIM STRING SUFFIX See DISPLAY ( ) Bytes STRING See DISPLAY ( ) See DISPLAY ( ) UTF8 NULL INDICATOR EMPTY STRING AS NULL TRIM STRING SUFFIX See DISPLAY ( ) Bytes STRING See DISPLAY ( ) See DISPLAY ( ) DISPLAY (GROUP) VARIABLE LENGTH ENABLED VARIABLE LENGTH LEN SUFFIX VARIABLE LENGTH DATA SUFFIX If VARIABLE LENGTH ENABLED is set, the field is of variable length, and marked by a group structure of two or three fields, depending on an extra NULL INDICATOR field: The first field either ends with -LEN or with the value set by VARIABLE LENGTH LEN SUFFIX .
- COBOL usage type Supported flags Condition Optimized Row Columnar (ORC)​​ type Type Decoding behavior ( gsutil cp ) Encoding behavior ( bq export ) COMP1 , COMP2 Double FLOAT64 Encodes the String , Double , and Float data types.
- The second field either ends with -TEXT or with the value set by VARIABLE LENGTH DATA SUFFIX .
- The following tables lists all the data types that Mainframe Connector supports.

### Mainframe Connector environment variables \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/environment-variables](https://docs.cloud.google.com/mainframe-connector/docs/environment-variables)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can set this environment variable to any value in the following format: SUFFIX SUFFIX STRING="--bqtype TYPE --format FORMAT --timezone TIMEZONE" BQSH FEATURE CONVERT UNDERSCORE IN FIELDS NAME True 5.12.0 Replaces hyphens in the field names in the COPYBOOK to underscores in the corresponding field names in BigQuery.
- BQSH FEATURE VARIABLE LENGTH DATA SUFFIX -TEXT 5.11.0 Relevant if BQSH FEATURE VARIABLE LENGTH ENABLED is set.
- BQSH FEATURE VARIABLE LENGTH LEN SUFFIX -LEN 5.11.0 Relevant if BQSH FEATURE VARIABLE LENGTH ENABLED is set.
- This includes values that contain only nulls, spaces, or high bytes. (5.12.1 and onwards) Lets you enforce stricter error handling, as follows: Raise an error when parsing date and timestamp types that contain spaces (or are invalid dates or timestamps).

### "qsam and vsam commands reference \_|\_ Mainframe Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/qsam-vsam-transcoding)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Picture symbols Picture attributes Logical type S, 9, V COMP-3 Long (signed 64-bit integer), BigInteger, Decimal64, BigDecimal Example 01 REC 02 DEC PIC S9(2)V9(8) COMP-3 Zoned decimal field (DISPLAY) Zoned decimal fields are fully supported.
- Logical type BigQuery data type Comments BigDecimal NUMERIC BigInteger NUMERIC Bytes BYTES Date DATE Decimal64 NUMERIC Double FLOAT64 List ARRAY Nested lists and lists of maps are not supported.
- This means that you can't use variable length text fields and packed dynamic lists in redefined fields.
- The following table lists all the logical types supported by Mainframe Connector.

### Copybook parser reference \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference](https://docs.cloud.google.com/mainframe-connector/docs/copybook-reference)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Support for variable-length character strings The Native copybook parser supports the following struct fields: 10 var 15 var-LEN PIC 9(4) USAGE COMP 15 var-TEXT PIC X(n) The first field in the struct field is the length of the second field, the string field.
- Variable-length character strings are supported.
- If you define two environment variables as SUFFIX TIMESTAMP="timestamp-converter --format yyyy-MM-dd SUFFIX TIMESTAMP=timestamp-converter --format 'yyyy-MM-dd HH.mm.ss.SSSSSS' --timezone America/New York" and SUFFIX TS=$SUFFIX TIMESTAMP , a field with one of the following suffixes: -TIMESTAMP , TIMESTAMP , -TS , or TS will be a TIMESTAMP type field in BigQuery, and its pattern will be yyyy-MM-dd HH:mm:ss.SSSSSS with timezone America/New York .
- If you use these constructs in your copybook, Mainframe Connector shows an error. dataAlignedClause dataBlankWhenZeroClause dataCommonOwnLocalClause dataIntegerStringClause dataJustifiedClause dataOccursClause dataReceivedByClause dataRecordAreaClause dataRenamesClause dataSignClause dataSynchronizedClause dataThreadLocalClause dataTypeClause dataTypeDefClause dataUsingClause Data types COBOL data types like COMP-1 and COMP-2 are supported.

