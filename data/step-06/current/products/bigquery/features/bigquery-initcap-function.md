---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.807Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery INITCAP function"
feature_slug: "bigquery-initcap-function"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "INITCAP(string_expression)"
  - "capitalize words"
  - "INITCAP function"
  - "INITCAP()"
  - "INITCAP"
  - "standard SQL function"
---

# BigQuery INITCAP function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery standard SQL added support for the INITCAP function and marked it generally available.

## Extended Definition

BigQuery standard SQL added support for the INITCAP function and marked it generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Hello World-Everyone! +-------------------------------+------------------------------- / SELECT 'Apples1oranges2pears' as value , '12' AS delimiters , INITCAP ( 'Apples1oranges2pears' , '12' ) AS initcap value / ----------------------+------------+----------------------+ value delimiters initcap value +----------------------+------------+----------------------+ Apples1oranges2pears 12 Apples1Oranges2Pears +----------------------+------------+---------------------- / INSTR INSTR ( value , subvalue [ , position [ , occurrence ]] ) Description Returns the lowest 1-based position of subvalue in value . value and subvalue must be the same type, either STRING or BYTES .
- Return type BYTES Example WITH Input AS ( SELECT '00010203aaeeefff' AS hex str UNION ALL SELECT '0AF' UNION ALL SELECT '666f6f626172' ) SELECT hex str , FROM HEX ( hex str ) AS bytes str FROM Input ; -- Note that the result of FROM HEX is of type BYTES, displayed as a base64-encoded string. / ------------------+--------------+ hex str bytes str +------------------+--------------+ 0AF AK8= 00010203aaeeefff AAECA6ru7/8= 666f6f626172 Zm9vYmFy +------------------+-------------- / INITCAP INITCAP ( value [ , delimiters ] ) Description Takes a STRING and returns it with the first character in each word in uppercase and all other characters in lowercase.
- Return type STRING Examples SELECT 'Hello World-everyone!' AS value , INITCAP ( 'Hello World-everyone!' ) AS initcap value / -------------------------------+-------------------------------+ value initcap value +-------------------------------+-------------------------------+ Hello World-everyone!
- INITCAP Formats a STRING as proper case, which means that the first character in each word is uppercase and all other characters are lowercase.

