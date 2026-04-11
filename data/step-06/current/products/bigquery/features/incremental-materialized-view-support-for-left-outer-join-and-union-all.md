---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.576Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Incremental materialized view support for LEFT OUTER JOIN and UNION ALL"
feature_slug: "incremental-materialized-view-support-for-left-outer-join-and-union-all"
latest_feature_date: "2024-03-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "IMV LEFT OUTER JOIN"
  - "incremental MV refresh"
  - "incremental MV join support"
  - "IMV UNION ALL"
  - "IMV query operators"
  - "incremental MV"
  - "LEFT OUTER JOIN"
  - "incremental materialized view"
---

# Incremental materialized view support for LEFT OUTER JOIN and UNION ALL

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Incremental materialized views now support the LEFT OUTER JOIN and UNION ALL query operators.

## Extended Definition

The provided source only shows that BigQuery Standard SQL supports `UNION ALL` as a set operation and `LEFT OUTER JOIN` as a join operator in query syntax examples. It does not explicitly state that these operators are newly supported in incremental materialized view definitions or refresh processing, so that specific feature claim is only partially evidenced.

## Evidence Summary

The cited page demonstrates BigQuery SQL syntax/examples for `UNION ALL` and `LEFT OUTER JOIN`, but it does not explicitly document incremental materialized view support for those operators.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following example shows how to use the USING clause with one column name in the column name list: WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT FROM A INNER JOIN B USING ( x ); / Table A Table B Result +------+ +---+ +---+ x x = x +------+ +---+ +---+ 1 2 2 2 9 9 9 9 9 NULL 5 +---+ +------+ +---+ / The following example shows how to use the USING clause with multiple column names in the column name list: WITH A AS ( SELECT 1 as x , 15 as y UNION ALL SELECT 2 , 10 UNION ALL SELECT 9 , 16 UNION ALL SELECT NULL , 12 ), B AS ( SELECT 2 as x , 10 as y UNION ALL SELECT 9 , 17 UNION ALL SELECT 9 , 16 UNION ALL SELECT 5 , 15 ) SELECT FROM A INNER JOIN B USING ( x , y ); / Table A Table B Result +-----------+ +---------+ +---------+ x y x y = x y +-----------+ +---------+ +---------+ 1 15 2 10 2 10 2 10 9 17 9 16 9 16 9 16 +---------+ NULL 12 5 15 +-----------+ +---------+ / The following examples show additional ways in which to use the USING clause with one column name in the column name list: WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A INNER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 2 2 2 2 9 9 9 9 9 9 9 9 9 NULL 5 +--------------------+ +------+ +---+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A LEFT OUTER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 1 1 NULL 2 9 2 2 2 9 9 9 9 9 NULL 5 9 9 9 +------+ +---+ NULL NULL NULL +--------------------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 2 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A RIGHT OUTER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 2 2 2 2 9 2 2 2 2 9 9 NULL 9 NULL 5 9 NULL 9 +------+ +---+ 5 NULL 5 +--------------------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 2 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A FULL OUTER JOIN B USING ( x ); / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 1 1 NULL 2 9 2 2 2 2 9 2 2 2 NULL 5 NULL NULL NULL +------+ +---+ 9 NULL 9 9 NULL 9 5 NULL 5 +--------------------+ / The following example shows how to use the USING clause with only some column names in the column name list.
- WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT A . x FROM A INNER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT x FROM A INNER JOIN B USING ( x ); / Table A Table B Result ON Result USING +------+ +---+ +---+ +---+ x x = x x +------+ +---+ +---+ +---+ 1 2 2 2 2 3 3 3 3 4 +---+ +---+ NULL 5 +------+ +---+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT A . x FROM A LEFT OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT x FROM A LEFT OUTER JOIN B USING ( x ); / Table A Table B Result ON Result USING +------+ +---+ +------+ +------+ x x = x x +------+ +---+ +------+ +------+ 1 2 1 1 2 3 2 2 3 4 3 3 NULL 5 NULL NULL +------+ +---+ +------+ +------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT A . x FROM A FULL OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT x FROM A FULL OUTER JOIN B USING ( x ); / Table A Table B Result ON Result USING +------+ +---+ +------+ +------+ x x = x x +------+ +---+ +------+ +------+ 1 2 1 1 2 3 2 2 3 4 3 3 NULL 5 NULL NULL +------+ +---+ NULL 4 NULL 5 +------+ +------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT B . x FROM A FULL OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT x FROM A FULL OUTER JOIN B USING ( x ); / Table A Table B Result ON Result USING +------+ +---+ +------+ +------+ x x = x x +------+ +---+ +------+ +------+ 1 2 2 1 2 3 3 2 3 4 NULL 3 NULL 5 NULL NULL +------+ +---+ 4 4 5 5 +------+ +------+ / In the following example, observe what is returned when COALESCE is used with the ON clause.
- Examples The following examples show how to use the ON clause: WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 ) SELECT FROM A INNER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 ) SELECT A . x , B . x FROM A INNER JOIN B ON A . x = B . x ; / Table A Table B Result (A.x, B.x) +---+ +---+ +-------+ x x = x x +---+ +---+ +-------+ 1 2 2 2 2 3 3 3 3 4 +-------+ +---+ +---+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT FROM A LEFT OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT A . x , B . x FROM A LEFT OUTER JOIN B ON A . x = B . x ; / Table A Table B Result +------+ +---+ +-------------+ x x = x x +------+ +---+ +-------------+ 1 2 1 NULL 2 3 2 2 3 4 3 3 NULL 5 NULL NULL +------+ +---+ +-------------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT FROM A FULL OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT A . x , B . x FROM A FULL OUTER JOIN B ON A . x = B . x ; / Table A Table B Result +------+ +---+ +-------------+ x x = x x +------+ +---+ +-------------+ 1 2 1 NULL 2 3 2 2 3 4 3 3 NULL 5 NULL NULL +------+ +---+ NULL 4 NULL 5 +-------------+ / USING clause USING ( column name list ) column name list : column name [ , ... ] Description When you are joining two tables, USING performs an equality comparison operation on the columns named in column name list .
- WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 ) SELECT FROM A INNER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 ) SELECT FROM A INNER JOIN B USING ( x ); / Table A Table B Result ON Result USING +---+ +---+ +-------+ +---+ x x = x x x +---+ +---+ +-------+ +---+ 1 2 2 2 2 2 3 3 3 3 3 4 +-------+ +---+ +---+ +---+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT FROM A LEFT OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT FROM A LEFT OUTER JOIN B USING ( x ); / Table A Table B Result ON Result USING +------+ +---+ +-------------+ +------+ x x = x x x +------+ +---+ +-------------+ +------+ 1 2 1 NULL 1 2 3 2 2 2 3 4 3 3 3 NULL 5 NULL NULL NULL +------+ +---+ +-------------+ +------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 ) SELECT FROM A FULL OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 ) SELECT FROM A FULL OUTER JOIN B USING ( x ); / Table A Table B Result ON Result USING +---+ +---+ +-------------+ +---+ x x = x x x +---+ +---+ +-------------+ +---+ 1 2 1 NULL 1 2 3 2 2 2 3 4 3 3 3 +---+ +---+ NULL 4 4 +-------------+ +---+ / Although ON and USING aren't equivalent, they can return the same results in some situations if you specify the columns you want to return.

