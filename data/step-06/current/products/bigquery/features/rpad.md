---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.899Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "RPAD"
feature_slug: "rpad"
latest_feature_date: "2017-02-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "rpad"
  - "bigquery"
  - "standard"
  - "sql"
  - "provides"
  - "lpad"
  - "repeat"
  - "string"
---

# RPAD

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Standard SQL provides the LPAD, RPAD, and REPEAT string functions.

## Extended Definition

BigQuery Standard SQL provides the LPAD, RPAD, and REPEAT string functions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### "Querying nested and repeated fields in legacy SQL \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/legacy-nested-repeated](https://docs.cloud.google.com/bigquery/docs/legacy-nested-repeated)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you try to run a legacy SQL query like the following: SELECT fullName, age FROM [dataset.tableId] WHERE (citiesLived.yearsLived > 1995 ) AND (children.age > 3) BigQuery returns an error similar to: Cannot query the cross product of repeated fields children.age and citiesLived.yearsLived To query across more than one repeated field, you need to flatten one of the fields: SELECT fullName, age, gender, citiesLived.place FROM (FLATTEN([dataset.tableId], children)) WHERE (citiesLived.yearsLived > 1995) AND (children.age > 3) GROUP BY fullName, age, gender, citiesLived.place Which returns: +------------+-----+--------+-------------------+ fullName age gender citiesLived place +------------+-----+--------+-------------------+ John Doe 22 Male Stockholm Mike Jones 35 Male Los Angeles Mike Jones 35 Male Washington DC Mike Jones 35 Male Portland Mike Jones 35 Male Austin +------------+-----+--------+-------------------+ WITHIN Clause The WITHIN keyword specifically works with aggregate functions to aggregate across children and repeated fields within records and nested fields.
- For example, let's take a look at a sample schema for person data: Last modified Schema Total Rows Total Bytes Expiration ----------------- ----------------------------------- ------------ ------------- ------------ 27 Sep 10:01:06 - kind: string 4 794 - fullName: string (required) - age: integer - gender: string +- phoneNumber: record - areaCode: integer - number: integer +- children: record (repeated) - name: string - gender: string - age: integer +- citiesLived: record (repeated) - place: string +- yearsLived: integer (repeated) Notice that there are several repeated and nested fields.
- Using scoped aggregation over nested and repeated fields is one of BigQuery's most powerful features, which can often eliminate expensive joins in queries.
- Although BigQuery can automatically flatten nested fields, you may need to explicitly call FLATTEN when dealing with more than one repeated field.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- RPAD(' str1 ', numeric expr , ' str2 ') Pads str1 on the right with str2 , repeating str2 until the result string is exactly numeric expr characters.
- RPAD() Inserts characters to the right side of a string.
- RPAD() Inserts characters to the right side of a string.
- Example: RPAD('1', 7, '?') returns 1?????? .

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- This function returns an error if: return length is negative pattern is empty Return type STRING or BYTES Examples SELECT FORMAT ( '%T' , RPAD ( 'c' , 5 )) AS results / ---------+ results +---------+ "c " +--------- / SELECT RPAD ( 'b' , 5 , 'a' ) AS results / ---------+ results +---------+ baaaa +--------- / SELECT RPAD ( 'abc' , 10 , 'ghd' ) AS results / ------------+ results +------------+ abcghdghdg +------------ / SELECT RPAD ( 'abc' , 2 , 'd' ) AS results / ---------+ results +---------+ ab +--------- / SELECT FORMAT ( '%T' , RPAD ( b 'abc' , 10 , b 'ghd' )) AS results / ---------------+ results +---------------+ b"abcghdghdg" +--------------- / RTRIM RTRIM ( value1 [ , value2 ] ) Description Identical to TRIM , but only removes trailing characters.
- Return type STRING or BYTES Examples SELECT 'apple' AS example , RIGHT ( 'apple' , 3 ) AS right example / ---------+---------------+ example right example +---------+---------------+ apple ple +---------+--------------- / SELECT b 'apple' AS example , RIGHT ( b 'apple' , 3 ) AS right example -- Note that the result of RIGHT is of type BYTES, displayed as a base64-encoded string. / ----------+---------------+ example right example +----------+---------------+ YXBwbGU= cGxl +----------+--------------- / RPAD RPAD ( original value , return length [ , pattern ] ) Description Returns a STRING or BYTES value that consists of original value appended with pattern .
- RPAD Appends a STRING or BYTES value with a pattern.
- For example, RPAD('hello world', 7); returns 'hello w' .

