---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.807Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery LEFT function"
feature_slug: "bigquery-left-function"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "extract leading characters"
  - "substring left"
  - "LEFT(string_expression)"
  - "LEFT function"
  - "LEFT()"
  - "LEFT"
---

# BigQuery LEFT function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery standard SQL added support for the LEFT function and marked it generally available.

## Extended Definition

BigQuery standard SQL added support for the LEFT function and marked it generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Page 3: The manual covers assembly, initial setup, and programming the clock. +-------------------------------------------+ Run the following to generate multiple responses from a Gemini model based on the analysis of an array of ObjectRef values: SQL WITH input chunked objrefs AS ( SELECT row id , offset , chunk ref FROM ( SELECT ROW NUMBER () OVER () AS row id , FROM cymbal pets.map manual to chunks ) AS indexed table LEFT JOIN UNNEST ( indexed table . chunks ) AS chunk ref WITH OFFSET ), get access urls AS ( SELECT row id , offset , chunk ref , OBJ .
- Go to BigQuery In the left pane, click explore Explorer : If you don't see the left pane, click last page Expand left pane to open the pane.
- Go to BigQuery In the left pane, click explore Explorer : In the Explorer pane, click add Add data .

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Here we present the full grammar of SELECT statements in a compact form with links back to the individual sections. query : SELECT { field path . expression } [ [ AS ] alias ] [ , ... ] [ FROM from body [ WHERE bool expression ] [ OMIT RECORD IF bool expression ] [ GROUP [ EACH ] BY [ ROLLUP ] { field name or alias } [ , ... ] ] [ HAVING bool expression ] [ ORDER BY field name or alias [ { DESC ASC } ] [, ... ] ] [ LIMIT n ] ]; from body : { from item [, ...] # Warning : Comma means UNION ALL here from item [ join type ] JOIN [ EACH ] from item [ ON join predicate ] ( FLATTEN ( { table name ( query ) } , field name or alias )) table wildcard function } from item : { table name ( query ) } [ [ AS ] alias ] join type : { INNER [ FULL ] [ OUTER ] RIGHT [ OUTER ] LEFT [ OUTER ] CROSS } join predicate : field from one side of the join = field from the other side of the join [ AND ...] expression : { literal value field name or alias function call } bool expression : { expression which results in a boolean value bool expression AND bool expression bool expression OR bool expression NOT bool expression } Notation: Square brackets "[ ]" indicate optional clauses.
- Uses the 'LEFT()' string function to return only the first 7 characters of the formatted timestamp. / LEFT ( FORMAT UTC USEC ( UTC USEC TO MONTH ( timestamp 1000000 )), 7 ) AS month , SUM ( LENGTH ( comment )) as total chars used FROM [ bigquery - public - data : samples . wikipedia ] WHERE ( contributor username != '' AND contributor username IS NOT NULL ) AND timestamp > 1133395200 AND timestamp < 1157068800 GROUP BY contributor username , month ORDER BY total chars used DESC ; Returns (truncated): +--------------------------------+---------+-----------------------+ contributor username month total chars used +--------------------------------+---------+-----------------------+ Kingbotk 2006-08 18015066 SmackBot 2006-03 7838365 SmackBot 2006-05 5148863 Tawkerbot2 2006-05 4434348 Cydebot 2006-06 3380577 etc ...
- Example 1: legacySQL SELECT TOP ( word , 10 ) as word , COUNT ( ) as cnt FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" ; Example 2: legacySQL SELECT word , left ( word , 3 ) FROM ( SELECT TOP ( word , 10 ) AS word , COUNT ( ) FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" ); Compare TOP() to GROUP BY...ORDER BY...LIMIT The query returns, in order, the top 10 most frequently used words containing "th", and the number of documents the words was used in.
- Syntax Operator Description Example & Bitwise AND SELECT (1 + 3) & 1 Returns: 0 Bitwise OR SELECT 24 12 Returns: 28 ^ Bitwise XOR SELECT 1 ^ 0 Returns: 1 << Bitwise shift left SELECT 1 << (2 + 2) Returns: 16 > Bitwise shift right SELECT (6 + 2) >> 2 Returns: 2 Bitwise NOT SELECT 2 Returns: -3 BIT COUNT( <numeric expr> ) Returns the number of bits that are set in <numeric expr> .

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Return type INT64 Examples SELECT 'banana' AS value , 'an' AS subvalue , 1 AS position , 1 AS occurrence , INSTR ( 'banana' , 'an' , 1 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an 1 1 2 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , 1 AS position , 2 AS occurrence , INSTR ( 'banana' , 'an' , 1 , 2 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an 1 2 4 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , 1 AS position , 3 AS occurrence , INSTR ( 'banana' , 'an' , 1 , 3 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an 1 3 0 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , 3 AS position , 1 AS occurrence , INSTR ( 'banana' , 'an' , 3 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an 3 1 4 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , - 1 AS position , 1 AS occurrence , INSTR ( 'banana' , 'an' , - 1 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an -1 1 4 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'an' AS subvalue , - 3 AS position , 1 AS occurrence , INSTR ( 'banana' , 'an' , - 3 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana an -3 1 4 +--------------+--------------+----------+------------+------- / SELECT 'banana' AS value , 'ann' AS subvalue , 1 AS position , 1 AS occurrence , INSTR ( 'banana' , 'ann' , 1 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ banana ann 1 1 0 +--------------+--------------+----------+------------+------- / SELECT 'helloooo' AS value , 'oo' AS subvalue , 1 AS position , 1 AS occurrence , INSTR ( 'helloooo' , 'oo' , 1 , 1 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ helloooo oo 1 1 5 +--------------+--------------+----------+------------+------- / SELECT 'helloooo' AS value , 'oo' AS subvalue , 1 AS position , 2 AS occurrence , INSTR ( 'helloooo' , 'oo' , 1 , 2 ) AS instr ; / --------------+--------------+----------+------------+-------+ value subvalue position occurrence instr +--------------+--------------+----------+------------+-------+ helloooo oo 1 2 6 +--------------+--------------+----------+------------+------- / LEFT LEFT ( value , length ) Description Returns a STRING or BYTES value that consists of the specified number of leftmost characters or bytes from value .
- Return type STRING Examples Description Statement Result Simple integer FORMAT('%d', 10) 10 Integer with left blank padding FORMAT(' %10d ', 11) 11 Integer with left zero padding FORMAT('+%010d+', 12) +0000000012+ Integer with commas FORMAT("%'d", 123456789) 123,456,789 STRING FORMAT('-%s-', 'abcd efg') -abcd efg- FLOAT64 FORMAT('%f %E', 1.1, 2.2) 1.100000 2.200000E+00 DATE FORMAT('%t', date '2015-09-01') 2015-09-01 TIMESTAMP FORMAT('%t', timestamp '2015-09-01 12:34:56 America/Los Angeles') 2015‑09‑01 19:34:56+00 The FORMAT() function doesn't provide fully customizable formatting for all types and values, nor formatting that's sensitive to locale.
- Return type STRING or BYTES Examples SELECT LEFT ( 'banana' , 3 ) AS results / ---------+ results +--------+ ban +--------- / SELECT LEFT ( b ' \ xab \ xcd \ xef \ xaa \ xbb' , 3 ) AS results -- Note that the result of LEFT is of type BYTES, displayed as a base64-encoded string. / ---------+ results +---------+ q83v +--------- / LENGTH LENGTH ( value ) Description Returns the length of the STRING or BYTES value.
- Flags Flags Description - Left-justify within the given field width; Right justification is the default (see width sub-specifier) + Forces to precede the result with a plus or minus sign ( + or - ) even for positive numbers.

