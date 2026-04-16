---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.764Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "SOUNDEX function"
feature_slug: "soundex-function"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/graph-iso-standards"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
keywords:
  - "soundex"
  - "bigquery"
  - "standard"
  - "sql"
  - "supports"
  - "phonetic"
  - "matching"
---

# SOUNDEX function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Standard SQL supports the SOUNDEX phonetic matching function.

## Extended Definition

BigQuery Standard SQL supports the SOUNDEX phonetic matching function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/graph-iso-standards](https://docs.cloud.google.com/bigquery/docs/graph-iso-standards)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)

## Supporting Pages

### BigQuery Graph and ISO standards \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/graph-iso-standards](https://docs.cloud.google.com/bigquery/docs/graph-iso-standards)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery Graph is based on two ISO standards: ISO/IEC 9075-16:2023 - Information technology — Database languages SQL Property Graph Queries (SQL/PGQ) , Edition 1, 2023 ISO/IEC 39075:2024 - Information technology — Database languages — GQL , Edition 1, 2024 The following tables describe the high-level relationship between SQL/PGQ, GQL, and how BigQuery Graph supports these standards.
- Standard SQL/PGQ GQL BigQuery Graph Query Graph pattern matching capabilities Shares the core Graph Pattern Matching Language (GPML) functionalities with GQL.
- BigQuery Graph and ISO standards The document describes how BigQuery Graph supports the ISO international standard query language for graph databases.
- BigQuery Graph supports additional features in the ISO standards.

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- SOUNDEX produces a phonetic representation of a string.
- GoogleSQL for BigQuery supports string functions.
- Return type STRING Examples SELECT 'Ashcraft' AS value , SOUNDEX ( 'Ashcraft' ) AS soundex / ----------------------+---------+ value soundex +----------------------+---------+ Ashcraft A261 +----------------------+--------- / SPLIT SPLIT ( value [ , delimiter ] ) Description Splits a STRING or BYTES value, using a delimiter.
- NORMALIZE AND CASEFOLD supports four optional normalization modes: Value Name Description NFC Normalization Form Canonical Composition Decomposes and recomposes characters by canonical equivalence.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Example: legacySQL SELECT cigarette use , / Finds average and standard deviation / AVG ( weight pounds ) baby weight , STDDEV ( weight pounds ) baby weight stdev , AVG ( mother age ) mother age FROM [ bigquery - public - data : samples . natality ] WHERE year = 2003 AND state = 'OH' / Group the result values by those / / who smoked and those who didn't. / GROUP BY cigarette use ; Filter query results using an aggregated value In order to filter query results using an aggregated value (for example, filtering by the value of a SUM ), use the HAVING function.
- This method will only work if the dataset is in your current default project. legacySQL SELECT samples . shakespeare . word FROM samples . shakespeare ; This example prefixes the column name with a table alias. legacySQL SELECT t . word FROM [ bigquery - public - data : samples . shakespeare ] AS t ; Integer-range partitioned tables Legacy SQL supports using table decorators to address a specific partition in an integer-range partitioned table.
- Semi-join and Anti-join In addition to supporting JOIN in the FROM clause, BigQuery also supports two types of joins in the WHERE clause: semi-join and anti-semi-join.
- BigQuery supports writing IPv4 and IPv6 addresses in packed strings, as 4- or 16-byte binary data in network byte order.

