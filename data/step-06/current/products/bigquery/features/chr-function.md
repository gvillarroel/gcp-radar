---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.755Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CHR function"
feature_slug: "chr-function"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/graph-iso-standards"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
keywords:
  - "chr"
  - "bigquery"
  - "standard"
  - "sql"
  - "supports"
  - "string"
---

# CHR function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Standard SQL supports the CHR string function.

## Extended Definition

BigQuery Standard SQL supports the CHR string function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/graph-iso-standards](https://docs.cloud.google.com/bigquery/docs/graph-iso-standards)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)

## Supporting Pages

### BigQuery Graph and ISO standards \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/graph-iso-standards](https://docs.cloud.google.com/bigquery/docs/graph-iso-standards)
- Source ID: `site-api-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery Graph is based on two ISO standards: ISO/IEC 9075-16:2023 - Information technology — Database languages SQL Property Graph Queries (SQL/PGQ) , Edition 1, 2023 ISO/IEC 39075:2024 - Information technology — Database languages — GQL , Edition 1, 2024 The following tables describe the high-level relationship between SQL/PGQ, GQL, and how BigQuery Graph supports these standards.
- BigQuery Graph and ISO standards The document describes how BigQuery Graph supports the ISO international standard query language for graph databases.
- BigQuery Graph supports additional features in the ISO standards.
- Standard SQL/PGQ GQL BigQuery Graph Query Graph pattern matching capabilities Shares the core Graph Pattern Matching Language (GPML) functionalities with GQL.

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- GoogleSQL for BigQuery supports string functions.
- Home Documentation Data analytics BigQuery Reference Send feedback String functions Stay organized with collections Save and categorize content based on your preferences.
- Return type INT64 Examples SELECT 'banana' AS value , 'an' AS subvalue , 1 AS position , 1 AS occurrence , INSTR ( 'banana' , 'an' , 1 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an 1 1 2 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , 1 AS position , 2 AS occurrence , INSTR ( 'banana' , 'an' , 1 , 2 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an 1 2 4 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , 1 AS position , 3 AS occurrence , INSTR ( 'banana' , 'an' , 1 , 3 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an 1 3 0 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , 3 AS position , 1 AS occurrence , INSTR ( 'banana' , 'an' , 3 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an 3 1 4 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , - 1 AS position , 1 AS occurrence , INSTR ( 'banana' , 'an' , - 1 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an -1 1 4 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , - 3 AS position , 1 AS occurrence , INSTR ( 'banana' , 'an' , - 3 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an -3 1 4 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'ann' AS subvalue , 1 AS position , 1 AS occurrence , INSTR ( 'banana' , 'ann' , 1 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana ann 1 1 0 +--------------+--------------+----------+------------+------- / SELECT 'helloooo' AS value , 'oo' AS subvalue , 1 AS position , 1 AS occurrence , INSTR ( 'helloooo' , 'oo' , 1 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ helloooo oo 1 1 5 +--------------+--------------+----------+------------+------- / SELECT 'helloooo' AS value , 'oo' AS subvalue , 1 AS position , 2 AS occurrence , INSTR ( 'helloooo' , 'oo' , 1 , 2 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ helloooo oo 1 2 6 +--------------+--------------+----------+------------+------- / LEFT LEFT ( value , length ) Description Returns a STRING or BYTES value that consists of the specified number of leftmost characters or bytes from value .
- Due to regular expression operator precedence, it's good practice to use parentheses around everything between ^ and $ . googlesql SELECT 'a@foo.com' AS email , REGEXP CONTAINS ( 'a@foo.com' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( 'a@foo.com' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ a@foo.com true true +----------------+---------------------+--------------------- / SELECT 'a@foo.computer' AS email , REGEXP CONTAINS ( 'a@foo.computer' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( 'a@foo.computer' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ a@foo.computer false true +----------------+---------------------+--------------------- / SELECT 'b@bar.org' AS email , REGEXP CONTAINS ( 'b@bar.org' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( 'b@bar.org' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ b@bar.org true true +----------------+---------------------+--------------------- / SELECT '!b@bar.org' AS email , REGEXP CONTAINS ( '!b@bar.org' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( '!b@bar.org' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ !b@bar.org false true +----------------+---------------------+--------------------- / SELECT 'c@buz.net' AS email , REGEXP CONTAINS ( 'c@buz.net' , r '^([ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org)$' ) AS valid email address , REGEXP CONTAINS ( 'c@buz.net' , r '^[ \ w.+-]+@foo \ .com [ \ w.+-]+@bar \ .org$' ) AS without parentheses ; / ----------------+---------------------+---------------------+ email valid email address without parentheses +----------------+---------------------+---------------------+ c@buz.net false false +----------------+---------------------+--------------------- / REGEXP EXTRACT REGEXP EXTRACT ( value , regexp [ , position [ , occurrence ]] ) Description Returns the substring in value that matches the re2 regular expression , regexp .

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery supports writing IPv4 and IPv6 addresses in packed strings, as 4- or 16-byte binary data in network byte order.
- Uses the 'LEFT()' string function to return only the first 7 characters of the formatted timestamp. / LEFT ( FORMAT UTC USEC ( UTC USEC TO MONTH ( timestamp 1000000 )), 7 ) AS month , SUM ( LENGTH ( comment )) as total chars used FROM [ bigquery - public - data : samples . wikipedia ] WHERE ( contributor username != '' AND contributor username IS NOT NULL ) AND timestamp > 1133395200 AND timestamp < 1157068800 GROUP BY contributor username , month ORDER BY total chars used DESC ; Returns (truncated): +--------------------------------+---------+-----------------------+ contributor username month total chars used +--------------------------------+---------+-----------------------+ Kingbotk 2006-08 18015066 SmackBot 2006-03 7838365 SmackBot 2006-05 5148863 Tawkerbot2 2006-05 4434348 Cydebot 2006-06 3380577 etc ...
- Example: legacySQL SELECT / Replace white spaces in the title with underscores. / REGEXP REPLACE ( title , r '\s+' , ' ' ) AS regexp title , revisions FROM ( SELECT title , COUNT ( revision id ) as revisions FROM [ bigquery - public - data : samples . wikipedia ] WHERE wp namespace = 0 / Match titles that start with 'G', end with 'e', and contain at least two 'o's. / AND REGEXP MATCH ( title , r '^G. o. o. e$' ) GROUP BY title ORDER BY revisions DESC LIMIT 100 ); Using regular expressions on integer or float data While BigQuery's regular expression functions only work for string data, it's possible to use the STRING() function to cast integer or float data into string format.
- Example: legacySQL SELECT cigarette use , / Finds average and standard deviation / AVG ( weight pounds ) baby weight , STDDEV ( weight pounds ) baby weight stdev , AVG ( mother age ) mother age FROM [ bigquery - public - data : samples . natality ] WHERE year = 2003 AND state = 'OH' / Group the result values by those / / who smoked and those who didn't. / GROUP BY cigarette use ; Filter query results using an aggregated value In order to filter query results using an aggregated value (for example, filtering by the value of a SUM ), use the HAVING function.

