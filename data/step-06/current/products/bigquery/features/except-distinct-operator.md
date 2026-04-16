---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.867Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "EXCEPT DISTINCT operator"
feature_slug: "except-distinct-operator"
latest_feature_date: "2017-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "except"
  - "distinct"
  - "operator"
  - "bigquery"
  - "standard"
  - "sql"
  - "supports"
  - "set"
---

# EXCEPT DISTINCT operator

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery standard SQL supports the EXCEPT DISTINCT set operator.

## Extended Definition

BigQuery standard SQL supports the EXCEPT DISTINCT set operator.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- JOIN operator BigQuery supports multiple JOIN operators in each FROM clause.
- Example: legacySQL SELECT state , / If 'is male' is True, return 'Male', / / otherwise return 'Female' / IF ( is male , 'Male' , 'Female' ) AS sex , / The count value is aliased as 'cnt' / / and used in the HAVING clause below. / COUNT ( ) AS cnt FROM [ bigquery - public - data : samples . natality ] WHERE state != '' GROUP BY state , sex HAVING cnt > 3000000 ORDER BY cnt DESC Returns: +-------+--------+---------+ state sex cnt +-------+--------+---------+ CA Male 7060826 CA Female 6733288 TX Male 5107542 TX Female 4879247 NY Male 4442246 NY Female 4227891 IL Male 3089555 +-------+--------+---------+ Arithmetic operators Arithmetic operators take numeric arguments and return a numeric result.
- Example: legacySQL SELECT cigarette use , / Finds average and standard deviation / AVG ( weight pounds ) baby weight , STDDEV ( weight pounds ) baby weight stdev , AVG ( mother age ) mother age FROM [ bigquery - public - data : samples . natality ] WHERE year = 2003 AND state = 'OH' / Group the result values by those / / who smoked and those who didn't. / GROUP BY cigarette use ; Filter query results using an aggregated value In order to filter query results using an aggregated value (for example, filtering by the value of a SUM ), use the HAVING function.
- This method will only work if the dataset is in your current default project. legacySQL SELECT samples . shakespeare . word FROM samples . shakespeare ; This example prefixes the column name with a table alias. legacySQL SELECT t . word FROM [ bigquery - public - data : samples . shakespeare ] AS t ; Integer-range partitioned tables Legacy SQL supports using table decorators to address a specific partition in an integer-range partitioned table.

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- SELECT FROM UNNEST([a,b]) x GROUP BY x returning 2 rows. a IS DISTINCT FROM b is equivalent to NOT (a = b) , except for the following cases: This operator never returns NULL so NULL values are considered to be distinct from non- NULL values, not other NULL values.
- GoogleSQL for BigQuery supports operators.
- Even though the number of code points is different, the two strings are considered equal when the collation units are considered the same. '\u0041\u030A' is 'Å' (two code points) '\u0061\u030A' is 'å' (two code points) '\u00C5' is 'Å' (one code point) In the following examples, the difference between '\u0061\u030A' and '\u00C5' is tertiary. -- Returns FALSE ' \ u0061 \ u030A' LIKE '% \ u00C5%' ; -- Returns TRUE COLLATE ( ' \ u0061 \ u030A' , 'und:ci' ) LIKE '% \ u00C5%' ; -- Returns TRUE COLLATE ( ' \ u0061 \ u030A' , 'und:ci' ) = COLLATE ( ' \ u00C5' , 'und:ci' ); In the following example, '\u0083' is a NO BREAK HERE character and is ignored. -- Returns FALSE ' \ u0083' LIKE '' ; -- Returns TRUE COLLATE ( ' \ u0083' , 'und:ci' ) LIKE '' ; Quantified LIKE operator The quantified LIKE operator supports the following syntax: search value [ NOT ] LIKE quantifier patterns quantifier : { ANY SOME ALL } patterns : { ( expression [ , ... ] ) UNNEST ( array expression ) } Description Checks search value for matches against several patterns.
- Examples The examples in this section reference a table called entry table : / -------+ entry +-------+ a b c NULL +------- / SELECT 'a' FROM entry table WHERE entry = 'a' -- a => 'a' = 'a' => TRUE -- b => 'b' = 'a' => FALSE -- NULL => NULL = 'a' => NULL / -------+ entry +-------+ a +------- / SELECT entry FROM entry table WHERE NOT ( entry = 'a' ) -- a => NOT('a' = 'a') => NOT(TRUE) => FALSE -- b => NOT('b' = 'a') => NOT(FALSE) => TRUE -- NULL => NOT(NULL = 'a') => NOT(NULL) => NULL / -------+ entry +-------+ b c +------- / SELECT entry FROM entry table WHERE entry IS NULL -- a => 'a' IS NULL => FALSE -- b => 'b' IS NULL => FALSE -- NULL => NULL IS NULL => TRUE / -------+ entry +-------+ NULL +------- / Graph logical operators GoogleSQL supports the following logical operators in element pattern label expressions : Name Syntax Description NOT !X Returns TRUE if X isn't included, otherwise, returns FALSE .

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- SELECT item , purchases , category , LAST VALUE ( item ) OVER ( item window ) AS most popular FROM Produce WINDOW item window AS ( PARTITION BY category ORDER BY purchases ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( d ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS ( b ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ), d AS ( c ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( c ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS b Set operators query expr [ { INNER [ { FULL LEFT } [ OUTER ] ] } ] { UNION { ALL DISTINCT } INTERSECT DISTINCT EXCEPT DISTINCT } [ { BY NAME [ ON ( column list ) ] [ STRICT ] CORRESPONDING [ BY ( column list ) ] } ] query expr Set operators combine or filter results from two or more input queries into a single result set.
- The following examples illustrate the use of parentheses with set operations: -- Same set operations, no parentheses. query1 UNION ALL query2 UNION ALL query3 ; -- Different set operations, parentheses needed. query1 UNION ALL ( query2 UNION DISTINCT query3 ); -- Invalid query1 UNION ALL query2 UNION DISTINCT query3 ; -- Same set operations, no parentheses. query1 EXCEPT DISTINCT query2 EXCEPT DISTINCT query3 ; -- Equivalent query with optional parentheses, returns same results. ( query1 EXCEPT DISTINCT query2 ) EXCEPT DISTINCT query3 ; -- Different execution order with a subquery, parentheses needed. query1 EXCEPT DISTINCT ( query2 EXCEPT DISTINCT query3 ); Set operator behavior with duplicate rows Consider a given row R that appears exactly m times in the first input query and n times in the second input query, where m >= 0 and n >= 0 : For UNION ALL , row R appears exactly m + n times in the result.
- WITH NumbersTable AS ( SELECT 1 AS one digit , 10 AS two digit UNION ALL SELECT 2 , 20 UNION ALL SELECT 3 , 30 ) SELECT one digit , two digit FROM NumbersTable EXCEPT DISTINCT STRICT CORRESPONDING SELECT 10 AS two digit , 1 AS one digit ; / -----------+-----------+ one digit two digit +-----------+-----------+ 2 20 3 30 +-----------+----------- / For more syntax examples with the BY NAME modifier, see the UNION set operator.
- Angle brackets <> Literal angle brackets SQL syntax query statement : query expr query expr : [ WITH [ RECURSIVE ] { non recursive cte recursive cte }[, ...] ] { select ( query expr ) set operation } [ ORDER BY expression [{ ASC DESC }] [, ...] ] [ LIMIT count [ OFFSET skip rows ] ] select : SELECT [ WITH differential privacy clause ] [ { ALL DISTINCT } ] [ AS { STRUCT VALUE } ] select list [ FROM from clause [, ...] ] [ WHERE bool expression ] [ GROUP BY group by specification ] [ HAVING bool expression ] [ QUALIFY bool expression ] [ WINDOW window clause ] SELECT statement SELECT [ WITH differential privacy clause ] [ { ALL DISTINCT } ] [ AS { STRUCT VALUE } ] select list select list : { select all select expression } [, ...] select all : [ expression . ] [ EXCEPT ( column name [, ...] ) ] [ REPLACE ( expression AS column name [, ...] ) ] select expression : expression [ [ AS ] alias ] The SELECT list defines the columns that the query will return.

