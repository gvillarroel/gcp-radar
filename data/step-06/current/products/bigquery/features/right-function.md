---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.764Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "RIGHT function"
feature_slug: "right-function"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions"
keywords:
  - "right"
  - "bigquery"
  - "standard"
  - "sql"
  - "supports"
  - "string"
---

# RIGHT function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Standard SQL supports the RIGHT string function.

## Extended Definition

BigQuery Standard SQL supports the RIGHT string function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- GoogleSQL for BigQuery supports string functions.
- Return type STRING or BYTES Examples SELECT 'apple' AS example , RIGHT ( 'apple' , 3 ) AS right example / ---------+---------------+ example right example +---------+---------------+ apple ple +---------+--------------- / SELECT b 'apple' AS example , RIGHT ( b 'apple' , 3 ) AS right example -- Note that the result of RIGHT is of type BYTES, displayed as a base64-encoded string. / ----------+---------------+ example right example +----------+---------------+ YXBwbGU= cGxl +----------+--------------- / RPAD RPAD ( original value , return length [ , pattern ] ) Description Returns a STRING or BYTES value that consists of original value appended with pattern .
- Return type STRING or BYTES Examples SELECT REVERSE ( 'abc' ) AS results / ---------+ results +---------+ cba +--------- / SELECT FORMAT ( '%T' , REVERSE ( b '1a3' )) AS results / ---------+ results +---------+ b"3a1" +--------- / RIGHT RIGHT ( value , length ) Description Returns a STRING or BYTES value that consists of the specified number of rightmost characters or bytes from value .
- Home Documentation Data analytics BigQuery Reference Send feedback String functions Stay organized with collections Save and categorize content based on your preferences.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery supports writing IPv4 and IPv6 addresses in packed strings, as 4- or 16-byte binary data in network byte order.
- JOIN types BigQuery supports INNER , [FULL RIGHT LEFT] OUTER and CROSS JOIN operations.
- Uses the 'LEFT()' string function to return only the first 7 characters of the formatted timestamp. / LEFT ( FORMAT UTC USEC ( UTC USEC TO MONTH ( timestamp 1000000 )), 7 ) AS month , SUM ( LENGTH ( comment )) as total chars used FROM [ bigquery - public - data : samples . wikipedia ] WHERE ( contributor username != '' AND contributor username IS NOT NULL ) AND timestamp > 1133395200 AND timestamp < 1157068800 GROUP BY contributor username , month ORDER BY total chars used DESC ; Returns (truncated): +--------------------------------+---------+-----------------------+ contributor username month total chars used +--------------------------------+---------+-----------------------+ Kingbotk 2006-08 18015066 SmackBot 2006-03 7838365 SmackBot 2006-05 5148863 Tawkerbot2 2006-05 4434348 Cydebot 2006-06 3380577 etc ...
- Example: legacySQL SELECT / Replace white spaces in the title with underscores. / REGEXP REPLACE ( title , r '\s+' , ' ' ) AS regexp title , revisions FROM ( SELECT title , COUNT ( revision id ) as revisions FROM [ bigquery - public - data : samples . wikipedia ] WHERE wp namespace = 0 / Match titles that start with 'G', end with 'e', and contain at least two 'o's. / AND REGEXP MATCH ( title , r '^G. o. o. e$' ) GROUP BY title ORDER BY revisions DESC LIMIT 100 ); Using regular expressions on integer or float data While BigQuery's regular expression functions only work for string data, it's possible to use the STRING() function to cast integer or float data into string format.

### JSON functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- Source ID: `site-docs-reference-required-8`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- SQL input: 1.0 JSON output: 1 SQL input: 9007199254740993 JSON output: 9007199254740993 SQL input: "+inf" JSON output: "Infinity" SQL input: "-inf" JSON output: "-Infinity" SQL input: "NaN" JSON output: "NaN" STRING string Encoded as a string, escaped according to the JSON standard.
- You can review the GoogleSQL data types that this function supports and their JSON encodings here . stringify wide numbers : A named argument that's either TRUE or FALSE (default).
- GoogleSQL for BigQuery supports the following functions, which can retrieve and transform JSON data.
- String values are escaped according to the JSON standard.

