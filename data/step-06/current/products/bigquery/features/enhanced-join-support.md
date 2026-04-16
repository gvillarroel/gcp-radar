---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.928Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Enhanced JOIN support"
feature_slug: "enhanced-join-support"
latest_feature_date: "2014-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "enhanced"
  - "join"
  - "adds"
  - "cross"
  - "multiple"
  - "operations"
  - "bigquery"
  - "queries"
---

# Enhanced JOIN support

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Enhanced JOIN support adds CROSS JOIN and multiple JOIN operations to BigQuery queries.

## Extended Definition

Enhanced JOIN support adds CROSS JOIN and multiple JOIN operations to BigQuery queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- This is a legacy behavior that evolved because historically BigQuery did not support CROSS JOIN and BigQuery users regularly needed to write UNION ALL queries.
- JOIN types BigQuery supports INNER , [FULL RIGHT LEFT] OUTER and CROSS JOIN operations.
- BigQuery queries can execute directly over tables, over subqueries, over joined tables, and over tables modified by special-purpose operators described below.
- EACH modifier The EACH modifier is a hint that tells BigQuery to execute the JOIN using multiple partitions.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- It's also okay for recursive entries to depend on non-recursive entries and vice-versa: WITH RECURSIVE T0 AS ( SELECT 1 AS n ), T1 AS (( SELECT FROM T0 ) UNION ALL ( SELECT n + 1 FROM T1 WHERE n < 4 )), T2 AS (( SELECT 1 AS n ) UNION ALL ( SELECT n + 1 FROM T2 WHERE n < 4 )), T3 AS ( SELECT FROM T1 INNER JOIN T2 USING ( n )) SELECT FROM T3 ORDER BY n / ---+ n +---+ 1 2 3 4 +--- / Aggregate functions can be invoked in subqueries, as long as they aren't aggregating on the table being defined: WITH RECURSIVE T0 AS ( SELECT FROM UNNEST ( [ 60 , 20 , 30 ] )), T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT n + ( SELECT COUNT ( ) FROM T0 ) FROM T1 WHERE n < 4 )) SELECT FROM T1 ORDER BY n / ---+ n +---+ 1 4 +--- / INNER JOIN can be used inside subqueries: WITH RECURSIVE T0 AS ( SELECT 1 AS n ), T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT n + 1 FROM T1 INNER JOIN T0 USING ( n ))) SELECT FROM T1 ORDER BY n / ---+ n +---+ 1 2 +--- / CROSS JOIN can be used inside subqueries: WITH RECURSIVE T0 AS ( SELECT 2 AS p ), T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT T1 . n + T0 . p FROM T1 CROSS JOIN T0 WHERE T1 . n < 4 )) SELECT FROM T1 CROSS JOIN T0 ORDER BY n / ---+---+ n p +---+---+ 1 2 3 2 5 2 +---+--- / Recursive CTEs can be used inside CREATE TABLE AS SELECT statements.
- WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT COALESCE ( A . x , B . x ) FROM A FULL OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT x FROM A FULL OUTER JOIN B USING ( x ); / Table A Table B Result ON Result USING +------+ +---+ +------+ +------+ x x = x x +------+ +---+ +------+ +------+ 1 2 1 1 2 3 2 2 3 4 3 3 NULL 5 NULL NULL +------+ +---+ 4 4 5 5 +------+ +------+ / Join operations in a sequence The FROM clause can contain multiple JOIN operations in a sequence.
- Examples SELECT FROM UNNEST ( ARRAY<INT64> [ 1 , 2 , 3 , 3 , 4 ] ) AS number INTERSECT DISTINCT SELECT FROM UNNEST ( ARRAY<INT64> [ 2 , 3 , 3 , 5 ] ) AS number ; / --------+ number +--------+ 2 3 +-------- / The following example shows multiple chained operations: SELECT FROM UNNEST ( ARRAY<INT64> [ 1 , 2 , 3 , 3 , 4 ] ) AS number INTERSECT DISTINCT SELECT FROM UNNEST ( ARRAY<INT64> [ 2 , 3 , 3 , 5 ] ) AS number INTERSECT DISTINCT SELECT FROM UNNEST ( ARRAY<INT64> [ 3 , 3 , 4 , 5 ] ) AS number ; / --------+ number +--------+ 3 +-------- / The following example shows input queries that specify multiple columns.
- Examples The following example shows how to use the USING clause with one column name in the column name list: WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT FROM A INNER JOIN B USING ( x ); / Table A Table B Result +------+ +---+ +---+ x x = x +------+ +---+ +---+ 1 2 2 2 9 9 9 9 9 NULL 5 +---+ +------+ +---+ / The following example shows how to use the USING clause with multiple column names in the column name list: WITH A AS ( SELECT 1 as x , 15 as y UNION ALL SELECT 2 , 10 UNION ALL SELECT 9 , 16 UNION ALL SELECT NULL , 12 ), B AS ( SELECT 2 as x , 10 as y UNION ALL SELECT 9 , 17 UNION ALL SELECT 9 , 16 UNION ALL SELECT 5 , 15 ) SELECT FROM A INNER JOIN B USING ( x , y ); / Table A Table B Result +-----------+ +---------+ +---------+ x y x y = x y +-----------+ +---------+ +---------+ 1 15 2 10 2 10 2 10 9 17 9 16 9 16 9 16 +---------+ NULL 12 5 15 +-----------+ +---------+ / The following examples show additional ways in which to use the USING clause with one column name in the column name list: WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A INNER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 2 2 2 2 9 9 9 9 9 9 9 9 9 NULL 5 +--------------------+ +------+ +---+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A LEFT OUTER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 1 1 NULL 2 9 2 2 2 9 9 9 9 9 NULL 5 9 9 9 +------+ +---+ NULL NULL NULL +--------------------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 2 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A RIGHT OUTER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 2 2 2 2 9 2 2 2 2 9 9 NULL 9 NULL 5 9 NULL 9 +------+ +---+ 5 NULL 5 +--------------------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 2 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A FULL OUTER JOIN B USING ( x ); / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 1 1 NULL 2 9 2 2 2 2 9 2 2 2 NULL 5 NULL NULL NULL +------+ +---+ 9 NULL 9 9 NULL 9 5 NULL 5 +--------------------+ / The following example shows how to use the USING clause with only some column names in the column name list.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- You can reuse persistent functions across multiple queries. function path : The path where the function must be created and the name of the function. project name : For persistent functions, the name of the project where you are creating the function.
- You can reuse persistent functions across multiple queries. function path : The path where the function must be created and the name of the function. project name : For persistent functions, the name of the project where you are creating the function.
- You can reuse persistent UDFs across multiple queries, whereas you can only use temporary UDFs in a single query, script, session, or procedure. project name : For persistent functions, the name of the project where you are creating the function.
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .

