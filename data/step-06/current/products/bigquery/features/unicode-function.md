---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.766Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "UNICODE function"
feature_slug: "unicode-function"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/graph-iso-standards"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "unicode"
  - "bigquery"
  - "standard"
  - "sql"
  - "supports"
  - "character"
  - "code"
---

# UNICODE function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Standard SQL supports the UNICODE character code function.

## Extended Definition

BigQuery Standard SQL supports the UNICODE character code function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/graph-iso-standards](https://docs.cloud.google.com/bigquery/docs/graph-iso-standards)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### BigQuery Graph and ISO standards \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/graph-iso-standards](https://docs.cloud.google.com/bigquery/docs/graph-iso-standards)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The claimed version of The Unicode® Standard shall not be less than 13.0.0." BigQuery Graph GQL shares the exact lexical structure with GoogleSQL.
- BigQuery Graph is based on two ISO standards: ISO/IEC 9075-16:2023 - Information technology — Database languages SQL Property Graph Queries (SQL/PGQ) , Edition 1, 2023 ISO/IEC 39075:2024 - Information technology — Database languages — GQL , Edition 1, 2024 The following tables describe the high-level relationship between SQL/PGQ, GQL, and how BigQuery Graph supports these standards.
- Lexical structure "A claim of conformance to a specific version of TheUnicode® Standard and the synchronous versions of Unicode Technical Standard #10, Unicode Standard Annex #15, and Unicode Standard Annex #31.
- BigQuery Graph and ISO standards The document describes how BigQuery Graph supports the ISO international standard query language for graph databases.

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Parameterized string type Parameterized Type Description STRING(L) String with a maximum of L Unicode characters allowed in the string, where L is a positive INT64 value.
- All functions and operators that act on string values operate on Unicode characters rather than bytes.
- If a string with more than L Unicode characters is assigned, throws an OUT OF RANGE error.
- Each Unicode character has a numeric value called a code point assigned to it.

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- SELECT b 'apple' , TRIM ( b 'apple' , b 'na \ xab' ) AS example -- Note that the result of TRIM is of type BYTES, displayed as a base64-encoded string. / ----------------------+------------------+ item example +----------------------+------------------+ YXBwbGU= cHBsZQ== +----------------------+------------------ / UNICODE UNICODE ( value ) Description Returns the Unicode code point for the first character in value .
- Return type INT64 Examples SELECT UNICODE ( 'âbcd' ) as A , UNICODE ( 'â' ) as B , UNICODE ( '' ) as C , UNICODE ( NULL ) as D ; / -------+-------+-------+-------+ A B C D +-------+-------+-------+-------+ 226 226 0 NULL +-------+-------+-------+------- / UPPER UPPER ( value ) Description For STRING arguments, returns the original string with all alphabetic characters in uppercase.
- Return type INT64 Examples SELECT 'абвгд' AS characters , CHARACTER LENGTH ( 'абвгд' ) AS char length example / ------------+---------------------+ characters char length example +------------+---------------------+ абвгд 5 +------------+--------------------- / CHR CHR ( value ) Description Takes a Unicode code point and returns the character that matches the code point.
- SELECT TRIM ( 'xzxapplexxy' , 'xyz' ) as example / ---------+ example +---------+ apple +--------- / In the following example, examine how TRIM interprets characters as Unicode code-points.

