---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.247Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Query text heatmap"
feature_slug: "query-text-heatmap"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro"
keywords:
  - "query"
  - "text"
  - "heatmap"
  - "execution"
  - "graph"
  - "shows"
  - "which"
  - "sql"
---

# Query text heatmap

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The query text heatmap in the query execution graph shows which SQL text contributes most to slot-consuming stages and links that text to plan details.

## Extended Definition

The query text heatmap in the query execution graph shows which SQL text contributes most to slot-consuming stages and links that text to plan details.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)

## Supporting Pages

### Geography functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)
- Source ID: `site-docs-reference-required-7`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- WITH example AS ( SELECT ST GEOGFROMTEXT ( 'POINT(0 1)' ) AS geography UNION ALL SELECT ST GEOGFROMTEXT ( 'MULTILINESTRING((2 2, 3 4), (5 6, 7 7))' ) UNION ALL SELECT ST GEOGFROMTEXT ( 'GEOMETRYCOLLECTION(MULTIPOINT(-1 2, 0 12), LINESTRING(-2 4, 0 6))' ) UNION ALL SELECT ST GEOGFROMTEXT ( 'GEOMETRYCOLLECTION EMPTY' )) SELECT geography AS WKT , ST GEOMETRYTYPE ( geography ) AS geometry type name FROM example ; / -------------------------------------------------------------------+-----------------------+ WKT geometry type name +-------------------------------------------------------------------+-----------------------+ POINT(0 1) ST Point MULTILINESTRING((2 2, 3 4), (5 6, 7 7)) ST MultiLineString GEOMETRYCOLLECTION(MULTIPOINT(-1 2, 0 12), LINESTRING(-2 4, 0 6)) ST GeometryCollection GEOMETRYCOLLECTION EMPTY ST GeometryCollection +-------------------------------------------------------------------+----------------------- / ST HAUSDORFFDISTANCE ST HAUSDORFFDISTANCE ( geography 1 , geography 2 [ , directed = > { TRUE FALSE } ] ) Description Gets the discrete Hausdorff distance , which is the greatest of all the distances from a discrete point in one geography to the closest discrete point in another geography.
- Example The following query returns the second half of the linestring: WITH data AS ( SELECT ST GEOGFROMTEXT ( 'LINESTRING(20 70, 70 60, 10 70, 70 70)' ) AS geo1 ) SELECT ST LINESUBSTRING ( geo1 , 0.5 , 1 ) AS segment FROM data ; / -------------------------------------------------------------+ segment +-------------------------------------------------------------+ LINESTRING(49.4760661523471 67.2419539103851, 10 70, 70 70) +------------------------------------------------------------- / The following query returns a linestring that only contains one point: WITH data AS ( SELECT ST GEOGFROMTEXT ( 'LINESTRING(20 70, 70 60, 10 70, 70 70)' ) AS geo1 ) SELECT ST LINESUBSTRING ( geo1 , 0.5 , 0.5 ) AS segment FROM data ; / ------------------------------------------+ segment +------------------------------------------+ POINT(49.4760661523471 67.2419539103851) +------------------------------------------ / ST MAKELINE ST MAKELINE ( geography 1 , geography 2 ) ST MAKELINE ( array of geography ) Description Creates a GEOGRAPHY with a single linestring by concatenating the point or line vertices of each of the input GEOGRAPHY s in the order they are given.
- Return type ARRAY<INT64> Example WITH data AS ( SELECT 1 AS id , ST GEOGPOINT ( - 122 , 47 ) AS geo UNION ALL SELECT 2 AS id , ST GEOGFROMTEXT ( 'POINT EMPTY' ) AS geo UNION ALL SELECT 3 AS id , ST GEOGFROMTEXT ( 'LINESTRING(-122.12 47.67, -122.19 47.69)' ) AS geo ) SELECT id , S2 COVERINGCELLIDS ( geo , min level = > 12 ) cells FROM data ; / ----+--------------------------------------------------------------------------------------+ id cells +----+--------------------------------------------------------------------------------------+ 1 [6093613931972369317] 2 [] 3 [6093384954555662336, 6093390709811838976, 6093390735581642752, 6093390740145045504, 6093390791416217600, 6093390812891054080, 6093390817187069952, 6093496378892222464] +----+-------------------------------------------------------------------------------------- / ST ANGLE ST ANGLE ( point geography 1 , point geography 2 , point geography 3 ) Description Takes three point GEOGRAPHY values, which represent two intersecting lines.
- WITH example AS ( SELECT ST GEOGFROMTEXT ( 'POINT(0 0)' ) AS geography UNION ALL SELECT ST GEOGFROMTEXT ( 'MULTIPOINT(0 0, 1 1)' ) AS geography UNION ALL SELECT ST GEOGFROMTEXT ( 'GEOMETRYCOLLECTION(POINT(0 0), LINESTRING(1 2, 2 1))' )) SELECT geography AS original geography , ST DUMP ( geography ) AS dumped geographies FROM example / -------------------------------------+------------------------------------+ original geographies dumped geographies +-------------------------------------+------------------------------------+ POINT(0 0) [POINT(0 0)] MULTIPOINT(0 0, 1 1) [POINT(0 0), POINT(1 1)] GEOMETRYCOLLECTION(POINT(0 0), [POINT(0 0), LINESTRING(1 2, 2 1)] LINESTRING(1 2, 2 1)) +-------------------------------------+------------------------------------ / The following example shows how ST DUMP with the dimension argument only returns simple geographies of the given dimension.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- FROM clause FROM from clause [, ...] from clause : from item [ { pivot operator unpivot operator match recognize clause } ] [ tablesample operator ] from item : { table name [ as alias ] [ FOR SYSTEM TIME AS OF timestamp expression ] { join operation ( join operation ) } ( query expr ) [ as alias ] field path unnest operator cte name [ as alias ] graph table operator [ as alias ] } as alias : [ AS ] alias The FROM clause indicates the table or tables from which to retrieve rows, and specifies how to join those rows together to produce a single stream of rows for processing in the rest of the query. pivot operator See PIVOT operator . unpivot operator See UNPIVOT operator . tablesample operator See TABLESAMPLE operator . match recognize clause See MATCH RECOGNIZE clause . graph table operator See GRAPH TABLE operator . table name The name (optionally qualified) of an existing table.
- Examples The following example shows how to use the USING clause with one column name in the column name list: WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT FROM A INNER JOIN B USING ( x ); / Table A Table B Result +------+ +---+ +---+ x x = x +------+ +---+ +---+ 1 2 2 2 9 9 9 9 9 NULL 5 +---+ +------+ +---+ / The following example shows how to use the USING clause with multiple column names in the column name list: WITH A AS ( SELECT 1 as x , 15 as y UNION ALL SELECT 2 , 10 UNION ALL SELECT 9 , 16 UNION ALL SELECT NULL , 12 ), B AS ( SELECT 2 as x , 10 as y UNION ALL SELECT 9 , 17 UNION ALL SELECT 9 , 16 UNION ALL SELECT 5 , 15 ) SELECT FROM A INNER JOIN B USING ( x , y ); / Table A Table B Result +-----------+ +---------+ +---------+ x y x y = x y +-----------+ +---------+ +---------+ 1 15 2 10 2 10 2 10 9 17 9 16 9 16 9 16 +---------+ NULL 12 5 15 +-----------+ +---------+ / The following examples show additional ways in which to use the USING clause with one column name in the column name list: WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A INNER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 2 2 2 2 9 9 9 9 9 9 9 9 9 NULL 5 +--------------------+ +------+ +---+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A LEFT OUTER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 1 1 NULL 2 9 2 2 2 9 9 9 9 9 NULL 5 9 9 9 +------+ +---+ NULL NULL NULL +--------------------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 2 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A RIGHT OUTER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 2 2 2 2 9 2 2 2 2 9 9 NULL 9 NULL 5 9 NULL 9 +------+ +---+ 5 NULL 5 +--------------------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 2 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A FULL OUTER JOIN B USING ( x ); / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 1 1 NULL 2 9 2 2 2 2 9 2 2 2 NULL 5 NULL NULL NULL +------+ +---+ 9 NULL 9 9 NULL 9 5 NULL 5 +--------------------+ / The following example shows how to use the USING clause with only some column names in the column name list.
- The following examples illustrate the use of parentheses with set operations: -- Same set operations, no parentheses. query1 UNION ALL query2 UNION ALL query3 ; -- Different set operations, parentheses needed. query1 UNION ALL ( query2 UNION DISTINCT query3 ); -- Invalid query1 UNION ALL query2 UNION DISTINCT query3 ; -- Same set operations, no parentheses. query1 EXCEPT DISTINCT query2 EXCEPT DISTINCT query3 ; -- Equivalent query with optional parentheses, returns same results. ( query1 EXCEPT DISTINCT query2 ) EXCEPT DISTINCT query3 ; -- Different execution order with a subquery, parentheses needed. query1 EXCEPT DISTINCT ( query2 EXCEPT DISTINCT query3 ); Set operator behavior with duplicate rows Consider a given row R that appears exactly m times in the first input query and n times in the second input query, where m >= 0 and n >= 0 : For UNION ALL , row R appears exactly m + n times in the result.
- Conceptual example: -- Before PIVOT is used to rotate sales and quarter into Q1, Q2, Q3, Q4 columns: / ---------+-------+---------+------+ product sales quarter year +---------+-------+---------+------ Kale 51 Q1 2020 Kale 23 Q2 2020 Kale 45 Q3 2020 Kale 3 Q4 2020 Kale 70 Q1 2021 Kale 85 Q2 2021 Apple 77 Q1 2020 Apple 0 Q2 2020 Apple 1 Q1 2021 +---------+-------+---------+------ / -- After PIVOT is used to rotate sales and quarter into Q1, Q2, Q3, Q4 columns: / ---------+------+----+------+------+------+ product year Q1 Q2 Q3 Q4 +---------+------+----+------+------+------+ Apple 2020 77 0 NULL NULL Apple 2021 1 NULL NULL NULL Kale 2020 51 23 45 3 Kale 2021 70 85 NULL NULL +---------+------+----+------+------+------ / Definitions Top-level definitions: from item : The table, subquery, or table-valued function (TVF) on which to perform a pivot operation.

### Introduction to data masking \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)
- Source ID: `site-docs-reference-5`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table shows the default masking value for each data type: Data type Default masking value STRING "" BYTES b'' INTEGER 0 FLOAT 0.0 NUMERIC 0 BOOLEAN FALSE TIMESTAMP 1970-01-01 00:00:00 UTC DATE 1970-01-01 TIME 00:00:00 DATETIME 1970-01-01T00:00:00 GEOGRAPHY POINT(0 0) BIGNUMERIC 0 ARRAY [] STRUCT NOT APPLICABLE Policy tags can't be applied to columns that use the STRUCT data type, but they can be associated with the leaf fields of such columns.
- If another user who is only a member of the ftes@example.com role runs a query that includes the annotated column, the query returns column data that has been hashed using the SHA-256 algorithm, because the user is granted the BigQuery Masked Reader role by the Confidential policy tag, which is the parent of the Financial policy tag.
- When this happens, BigQuery chooses which data masking rule to apply based on the following hierarchy: Custom masking routine Random Hash Hash (SHA-256) Email mask Last four characters First four characters Date year mask Default masking value Nullify For example, user A is a member of both the employees and the accounting groups.
- All employees who need regular access to BigQuery data are members of this group, which is assigned all the necessary permissions to read from tables as well as the BigQuery Masked Reader role.

