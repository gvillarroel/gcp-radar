---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.965Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery JOIN statement support"
feature_slug: "bigquery-join-statement-support"
latest_feature_date: "2011-10-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/analysis-rules"
keywords:
  - "ANSI JOIN"
  - "INNER JOIN"
  - "LEFT JOIN"
  - "SQL JOIN support"
  - "JOIN statement"
  - "JOIN syntax"
  - "JOIN clause"
  - "table join"
---

# BigQuery JOIN statement support

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added support for SQL JOIN statements in queries.

## Extended Definition

BigQuery added support for SQL JOIN statements in queries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- For example: SELECT A . name , item , ARRAY LENGTH ( A . items ) item count for name FROM UNNEST ( [ STRUCT ( 'first' AS name , [ 1 , 2 , 3 , 4 ] AS items ), STRUCT ( 'second' AS name , [] AS items ) ] ) AS A LEFT JOIN A . items AS item ; / --------+------+---------------------+ name item item count for name +--------+------+---------------------+ first 1 4 first 2 4 first 3 4 first 4 4 second NULL 0 +--------+------+--------------------- / In the case of a correlated INNER JOIN or CROSS JOIN , when the input on the right side is empty for some row from the left side, the final row is dropped from the results.
- The UNNEST operation with any correlated array path must be on the right side of a CROSS JOIN , LEFT JOIN , or INNER JOIN operation. as alias : If specified, defines the explicit name of the value table column containing the array element values.
- Examples The following example shows how to use the USING clause with one column name in the column name list: WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT FROM A INNER JOIN B USING ( x ); / Table A Table B Result +------+ +---+ +---+ x x = x +------+ +---+ +---+ 1 2 2 2 9 9 9 9 9 NULL 5 +---+ +------+ +---+ / The following example shows how to use the USING clause with multiple column names in the column name list: WITH A AS ( SELECT 1 as x , 15 as y UNION ALL SELECT 2 , 10 UNION ALL SELECT 9 , 16 UNION ALL SELECT NULL , 12 ), B AS ( SELECT 2 as x , 10 as y UNION ALL SELECT 9 , 17 UNION ALL SELECT 9 , 16 UNION ALL SELECT 5 , 15 ) SELECT FROM A INNER JOIN B USING ( x , y ); / Table A Table B Result +-----------+ +---------+ +---------+ x y x y = x y +-----------+ +---------+ +---------+ 1 15 2 10 2 10 2 10 9 17 9 16 9 16 9 16 +---------+ NULL 12 5 15 +-----------+ +---------+ / The following examples show additional ways in which to use the USING clause with one column name in the column name list: WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A INNER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 2 2 2 2 9 9 9 9 9 9 9 9 9 NULL 5 +--------------------+ +------+ +---+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A LEFT OUTER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 1 1 NULL 2 9 2 2 2 9 9 9 9 9 NULL 5 9 9 9 +------+ +---+ NULL NULL NULL +--------------------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 2 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A RIGHT OUTER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 2 2 2 2 9 2 2 2 2 9 9 NULL 9 NULL 5 9 NULL 9 +------+ +---+ 5 NULL 5 +--------------------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 2 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A FULL OUTER JOIN B USING ( x ); / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 1 1 NULL 2 9 2 2 2 2 9 2 2 2 NULL 5 NULL NULL NULL +------+ +---+ 9 NULL 9 9 NULL 9 5 NULL 5 +--------------------+ / The following example shows how to use the USING clause with only some column names in the column name list.
- WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT A . x FROM A INNER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT x FROM A INNER JOIN B USING ( x ); / Table A Table B Result ON Result USING +------+ +---+ +---+ +---+ x x = x x +------+ +---+ +---+ +---+ 1 2 2 2 2 3 3 3 3 4 +---+ +---+ NULL 5 +------+ +---+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT A . x FROM A LEFT OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT x FROM A LEFT OUTER JOIN B USING ( x ); / Table A Table B Result ON Result USING +------+ +---+ +------+ +------+ x x = x x +------+ +---+ +------+ +------+ 1 2 1 1 2 3 2 2 3 4 3 3 NULL 5 NULL NULL +------+ +---+ +------+ +------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT A . x FROM A FULL OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT x FROM A FULL OUTER JOIN B USING ( x ); / Table A Table B Result ON Result USING +------+ +---+ +------+ +------+ x x = x x +------+ +---+ +------+ +------+ 1 2 1 1 2 3 2 2 3 4 3 3 NULL 5 NULL NULL +------+ +---+ NULL 4 NULL 5 +------+ +------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT B . x FROM A FULL OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT x FROM A FULL OUTER JOIN B USING ( x ); / Table A Table B Result ON Result USING +------+ +---+ +------+ +------+ x x = x x +------+ +---+ +------+ +------+ 1 2 2 1 2 3 3 2 3 4 NULL 3 NULL 5 NULL NULL +------+ +---+ 4 4 5 5 +------+ +------+ / In the following example, observe what is returned when COALESCE is used with the ON clause.

### "Restrict data access using analysis rules \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- StudentTable USING ( test score ); / ------------+-----------+---------+------------- test score last name test id last name 1 +------------+-----------+---------+-------------+ 490 Ivanov U25 Ivanov 500 Wang U25 Wang 510 Hansen P91 Hansen 550 Silva U25 Silva 580 Devi U25 Devi ------------+-----------+---------+------------- / Block an inner join operation without entire overlap You can block a join operation if it doesn't include an overlap with all required columns.
- This can be one of the following values: JOIN ALL : All columns in join allowed columns must be inner joined upon for this view to be queried.
- This can be one of the following values: JOIN ALL : All columns in join allowed columns must be inner joined upon for this view to be queried.
- This can be one of the following values: JOIN ALL : All columns in join allowed columns must be inner joined upon for this view to be queried.

