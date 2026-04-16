---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.930Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Table wildcard functions"
feature_slug: "table-wildcard-functions"
latest_feature_date: "2014-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions"
keywords:
  - "table"
  - "wildcard"
  - "functions"
  - "let"
  - "bigquery"
  - "query"
  - "selected"
  - "set"
---

# Table wildcard functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Table wildcard functions let BigQuery query a selected set of tables efficiently.

## Extended Definition

Table wildcard functions let BigQuery query a selected set of tables efficiently.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)

## Supporting Pages

### "Query multiple tables using a wildcard table \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)
- Source ID: `site-docs-reference`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following query is valid because it uses backticks: #standardSQL / Valid SQL query / SELECT max FROM bigquery-public-data.noaa gsod.gsod WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX = '1929' ORDER BY max DESC The following query is NOT valid because it isn't properly quoted with backticks: #standardSQL / Syntax error: Expected end of statement but got "-" at [4:11] / SELECT max FROM missing backticks bigquery - public - data . noaa gsod . gsod WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX = '1929' ORDER BY max DESC Quotation marks don't work: #standardSQL / Syntax error: Unexpected string literal: 'bigquery-public-data.noaa gsod.gsod ' at [4:3] / SELECT max FROM quotes are not backticks 'bigquery-public-data.noaa gsod.gsod ' WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX = '1929' ORDER BY max DESC Query tables using wildcard tables Wildcard tables enable you to query several tables concisely.
- For example, the following query does not limit the tables scanned for the wildcard table bigquery-public-data.noaa gsod.gsod19 because the filter uses the dynamic value of the table id column: #standardSQL Scans all tables that match the prefix gsod19 SELECT ROUND (( max - 32 ) 5 / 9 , 1 ) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX = ( SELECT SUBSTR ( MAX ( table name ), LENGTH ( 'gsod19' ) + 1 ) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' ) As another example, the following query limits the scan based on the first filter condition, TABLE SUFFIX BETWEEN '40' and '60' , because it is a constant expression.
- For example, to find the maximum temperature reported in the years between 1929 and 1935 inclusive, use the table wildcard to represent the last two digits of the year: standardSQL SELECT max, ROUND((max-32) 5/9,1) celsius, mo, da, year FROM bigquery-public-data.noaa gsod.gsod19 WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX BETWEEN '29' and '35' ORDER BY max DESC Scanning a range of ingestion-time partitioned tables using PARTITIONTIME To scan a range of ingestion-time partitioned tables, use the PARTITIONTIME pseudocolumn with the TABLE SUFFIX pseudocolumn.
- Tables omitted for brevity SELECT FROM bigquery-public-data.noaa gsod.gsod1940 ) WHERE max != 9999.9 # code for missing data ORDER BY max DESC The same query using a wildcard table is much more concise: #standardSQL SELECT max , ROUND (( max - 32 ) 5 / 9 , 1 ) celsius , mo , da , year FROM bigquery-public-data.noaa gsod.gsod19 WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX BETWEEN '29' AND '40' ORDER BY max DESC Wildcard tables support built-in BigQuery storage only.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Table wildcard functions The term table wildcard function refers to a special type of function unique to BigQuery.
- Example This example performs a scoped COUNT aggregation and then filters and sorts the records by the aggregated value. legacySQL SELECT repository . url , COUNT ( payload . pages . page name ) WITHIN RECORD AS page count FROM [ bigquery - public - data : samples . github nested ] HAVING page count > 80 ORDER BY page count DESC ; FROM clause FROM [project name:]datasetId.tableId [ [ AS ] alias ] ( subquery ) [ [ AS ] alias ] JOIN clause FLATTEN clause table wildcard function The FROM clause specifies the source data to be queried.
- 1515 ) AS distance , AVG ( mean temp ) AS temp , AVG ( lat / 1000 ) lat , AVG ( long / 1000 ) long FROM [ weather geo . table ] WHERE month = 1 GROUP BY distance ) WHERE distance < 100 ORDER BY distance ASC LIMIT 100 ; Regular expression functions BigQuery provides regular expression support using the re2 library; see that documentation for its regular expression syntax .
- Some examples of escaping: 'this is a space: \x20' 'this string has \'single quote\' inside it' 'first line \n second line' "double quotes are also ok" '\070' -> ERROR : octal escaping is not supported Table wildcard functions Table wildcard functions are a convenient way to query data from a specific set of tables.

### JSON functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- Source ID: `site-docs-reference-required-8`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Reference Send feedback JSON functions Stay organized with collections Save and categorize content based on your preferences.
- GoogleSQL for BigQuery supports the following functions, which can retrieve and transform JSON data.
- Return type json string expr : ARRAY<JSON-formatted STRING> json expr : ARRAY<JSON> Examples This extracts items in JSON to an array of JSON values: SELECT JSON QUERY ARRAY ( JSON '{"fruits": ["apples", "oranges", "grapes"]}' , '$.fruits' ) AS json array ; / ---------------------------------+ json array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / This extracts the items in a JSON-formatted string to a string array: SELECT JSON QUERY ARRAY ( '[1, 2, 3]' ) AS string array ; / --------------+ string array +--------------+ [1, 2, 3] +-------------- / This extracts a string array and converts it to an integer array: SELECT ARRAY ( SELECT CAST ( integer element AS INT64 ) FROM UNNEST ( JSON QUERY ARRAY ( '[1, 2, 3]' , '$' ) ) AS integer element ) AS integer array ; / ---------------+ integer array +---------------+ [1, 2, 3] +--------------- / This extracts string values in a JSON-formatted string to an array: -- Doesn't strip the double quotes SELECT JSON QUERY ARRAY ( '["apples", "oranges", "grapes"]' , '$' ) AS string array ; / ---------------------------------+ string array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / -- Strips the double quotes SELECT ARRAY ( SELECT JSON VALUE ( string element , '$' ) FROM UNNEST ( JSON QUERY ARRAY ( '["apples", "oranges", "grapes"]' , '$' )) AS string element ) AS string array ; / ---------------------------+ string array +---------------------------+ [apples, oranges, grapes] +--------------------------- / This extracts only the items in the fruit property to an array: SELECT JSON QUERY ARRAY ( '{"fruit": [{"apples": 5, "oranges": 10}, {"apples": 2, "oranges": 4}], "vegetables": [{"lettuce": 7, "kale": 8}]}' , '$.fruit' ) AS string array ; / -------------------------------------------------------+ string array +-------------------------------------------------------+ [{"apples":5,"oranges":10}, {"apples":2,"oranges":4}] +------------------------------------------------------- / These are equivalent: SELECT JSON QUERY ARRAY ( '{"fruits": ["apples", "oranges", "grapes"]}' , '$.fruits' ) AS string array ; SELECT JSON QUERY ARRAY ( '{"fruits": ["apples", "oranges", "grapes"]}' , '$."fruits"' ) AS string array ; -- The queries above produce the following result: / ---------------------------------+ string array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / In cases where a JSON key uses invalid JSONPath characters, you can escape those characters using double quotes: " " .
- WITH t AS ( SELECT '{"name": null}' AS json string , JSON '{"name": null}' AS json ) SELECT JSON QUERY ( json string , "$.name" ) AS name string , JSON QUERY ( json string , "$.name" ) IS NULL AS name string is null , JSON QUERY ( json , "$.name" ) AS name json , JSON QUERY ( json , "$.name" ) IS NULL AS name json is null FROM t ; / -------------+---------------------+-----------+-------------------+ name string name string is null name json name json is null +-------------+---------------------+-----------+-------------------+ NULL true null false +-------------+---------------------+-----------+------------------- / JSON encodings You can encode a SQL value as a JSON value with the following functions: TO JSON STRING TO JSON JSON SET (uses TO JSON encoding) JSON ARRAY (uses TO JSON encoding) JSON ARRAY APPEND (uses TO JSON encoding) JSON ARRAY INSERT (uses TO JSON encoding) JSON OBJECT (uses TO JSON encoding) The following SQL to JSON encodings are supported: From SQL To JSON Examples NULL null SQL input: NULL JSON output: null BOOL boolean SQL input: TRUE JSON output: true SQL input: FALSE JSON output: false INT64 (TO JSON STRING only) number or string Encoded as a number when the value is in the range of [-2 53 , 2 53 ], which is the range of integers that can be represented losslessly as IEEE 754 double-precision floating point numbers.

