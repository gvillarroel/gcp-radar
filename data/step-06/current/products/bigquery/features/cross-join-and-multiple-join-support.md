---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.950Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CROSS JOIN and multiple JOIN support"
feature_slug: "cross-join-and-multiple-join-support"
latest_feature_date: "2014-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "ANSI JOIN"
  - "CROSS JOIN support"
  - "JOIN clauses"
  - "multiple JOIN"
  - "join syntax"
  - "CROSS JOIN"
  - "multi-join"
---

# CROSS JOIN and multiple JOIN support

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery improved JOIN capabilities by adding support for CROSS JOIN and multiple JOIN clauses.

## Extended Definition

BigQuery improved JOIN capabilities by adding support for CROSS JOIN and multiple JOIN clauses.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- The EACH modifier can't be used in CROSS JOIN clauses.
- Here we present the full grammar of SELECT statements in a compact form with links back to the individual sections. query : SELECT { field path . expression } [ [ AS ] alias ] [ , ... ] [ FROM from body [ WHERE bool expression ] [ OMIT RECORD IF bool expression ] [ GROUP [ EACH ] BY [ ROLLUP ] { field name or alias } [ , ... ] ] [ HAVING bool expression ] [ ORDER BY field name or alias [ { DESC ASC } ] [, ... ] ] [ LIMIT n ] ]; from body : { from item [, ...] # Warning : Comma means UNION ALL here from item [ join type ] JOIN [ EACH ] from item [ ON join predicate ] ( FLATTEN ( { table name ( query ) } , field name or alias )) table wildcard function } from item : { table name ( query ) } [ [ AS ] alias ] join type : { INNER [ FULL ] [ OUTER ] RIGHT [ OUTER ] LEFT [ OUTER ] CROSS } join predicate : field from one side of the join = field from the other side of the join [ AND ...] expression : { literal value field name or alias function call } bool expression : { expression which results in a boolean value bool expression AND bool expression bool expression OR bool expression NOT bool expression } Notation: Square brackets "[ ]" indicate optional clauses.
- CROSS JOIN can return a large amount of data and might result in a slow and inefficient query or in a query that exceeds the maximum allowed per-query resources.
- This is a legacy behavior that evolved because historically BigQuery did not support CROSS JOIN and BigQuery users regularly needed to write UNION ALL queries.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- It's also okay for recursive entries to depend on non-recursive entries and vice-versa: WITH RECURSIVE T0 AS ( SELECT 1 AS n ), T1 AS (( SELECT FROM T0 ) UNION ALL ( SELECT n + 1 FROM T1 WHERE n < 4 )), T2 AS (( SELECT 1 AS n ) UNION ALL ( SELECT n + 1 FROM T2 WHERE n < 4 )), T3 AS ( SELECT FROM T1 INNER JOIN T2 USING ( n )) SELECT FROM T3 ORDER BY n / ---+ n +---+ 1 2 3 4 +--- / Aggregate functions can be invoked in subqueries, as long as they aren't aggregating on the table being defined: WITH RECURSIVE T0 AS ( SELECT FROM UNNEST ( [ 60 , 20 , 30 ] )), T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT n + ( SELECT COUNT ( ) FROM T0 ) FROM T1 WHERE n < 4 )) SELECT FROM T1 ORDER BY n / ---+ n +---+ 1 4 +--- / INNER JOIN can be used inside subqueries: WITH RECURSIVE T0 AS ( SELECT 1 AS n ), T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT n + 1 FROM T1 INNER JOIN T0 USING ( n ))) SELECT FROM T1 ORDER BY n / ---+ n +---+ 1 2 +--- / CROSS JOIN can be used inside subqueries: WITH RECURSIVE T0 AS ( SELECT 2 AS p ), T1 AS (( SELECT 1 AS n ) UNION ALL ( SELECT T1 . n + T0 . p FROM T1 CROSS JOIN T0 WHERE T1 . n < 4 )) SELECT FROM T1 CROSS JOIN T0 ORDER BY n / ---+---+ n p +---+---+ 1 2 3 2 5 2 +---+--- / Recursive CTEs can be used inside CREATE TABLE AS SELECT statements.
- Provided there are no comma cross joins in the FROM clause, joins don't require parenthesis, though parenthesis can help readability: FROM A JOIN B JOIN C JOIN D USING ( w ) ON B . x = C . y ON A . z = B . x If your clause contains comma cross joins, you must use parentheses: FROM A , B JOIN C JOIN D ON C . x = D . y ON B . z = C . x // INVALID FROM A , B JOIN ( C JOIN D ON C . x = D . y ) ON B . z = C . x // VALID When comma cross joins are present in a query with a sequence of JOINs, they group from left to right like other JOIN types: FROM A JOIN B USING ( x ) JOIN C USING ( x ), D -- A JOIN B USING (x) = result 1 -- result 1 JOIN C USING (x) = result 2 -- result 2 CROSS JOIN D = return value There can't be a RIGHT JOIN or FULL JOIN after a comma cross join unless it's parenthesized: FROM A , B RIGHT JOIN C ON TRUE // INVALID FROM A , B FULL JOIN C ON TRUE // INVALID FROM A , B JOIN C ON TRUE // VALID FROM A , ( B RIGHT JOIN C ON TRUE ) // VALID FROM A , ( B FULL JOIN C ON TRUE ) // VALID Correlated join operation A join operation is correlated when the right from item contains a reference to at least one range variable or column name introduced by the left from item .
- WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT COALESCE ( A . x , B . x ) FROM A FULL OUTER JOIN B ON A . x = B . x ; WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 ) SELECT x FROM A FULL OUTER JOIN B USING ( x ); / Table A Table B Result ON Result USING +------+ +---+ +------+ +------+ x x = x x +------+ +---+ +------+ +------+ 1 2 1 1 2 3 2 2 3 4 3 3 NULL 5 NULL NULL +------+ +---+ 4 4 5 5 +------+ +------+ / Join operations in a sequence The FROM clause can contain multiple JOIN operations in a sequence.
- For example: FROM A JOIN B USING ( x ) JOIN C USING ( x ) -- A JOIN B USING (x) = result 1 -- result 1 JOIN C USING (x) = result 2 -- result 2 = return value You can also insert parentheses to group JOIN s: FROM ( ( A JOIN B USING ( x )) JOIN C USING ( x ) ) -- A JOIN B USING (x) = result 1 -- result 1 JOIN C USING (x) = result 2 -- result 2 = return value With parentheses, you can group JOIN s so that they are bound in a different order: FROM ( A JOIN ( B JOIN C USING ( x )) USING ( x ) ) -- B JOIN C USING (x) = result 1 -- A JOIN result 1 = result 2 -- result 2 = return value A FROM clause can have multiple joins.

