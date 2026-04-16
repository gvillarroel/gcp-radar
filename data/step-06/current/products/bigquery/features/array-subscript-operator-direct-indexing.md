---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.556Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Array subscript operator direct indexing"
feature_slug: "array-subscript-operator-direct-indexing"
latest_feature_date: "2023-09-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
  - "https://docs.cloud.google.com/bigquery/docs/arrays"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "array"
  - "subscript"
  - "operator"
  - "direct"
  - "indexing"
  - "bigquery"
  - "can"
  - "return"
---

# Array subscript operator direct indexing

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery array subscript operator can return an array element directly by index.

## Extended Definition

The BigQuery array subscript operator can return an array element directly by index.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples In this example, the EXISTS operator returns FALSE because there are no rows in Words where the direction is south : WITH Words AS ( SELECT 'Intend' as value , 'east' as direction UNION ALL SELECT 'Secure' , 'north' UNION ALL SELECT 'Clarity' , 'west' ) SELECT EXISTS ( SELECT value FROM Words WHERE direction = 'south' ) as result ; / --------+ result +--------+ FALSE +-------- / IN operator The IN operator supports the following syntax: search value [ NOT ] IN value set value set : { ( expression [ , ... ] ) ( subquery ) UNNEST ( array expression ) } Description Checks for an equal value in a set of values.
- Examples In following query, the array subscript operator is used to return values at specific position in item array .
- Even though the number of code points is different, the two strings are considered equal when the collation units are considered the same. '\u0041\u030A' is 'Å' (two code points) '\u0061\u030A' is 'å' (two code points) '\u00C5' is 'Å' (one code point) In the following examples, the difference between '\u0061\u030A' and '\u00C5' is tertiary. -- Returns FALSE ' \ u0061 \ u030A' LIKE '% \ u00C5%' ; -- Returns TRUE COLLATE ( ' \ u0061 \ u030A' , 'und:ci' ) LIKE '% \ u00C5%' ; -- Returns TRUE COLLATE ( ' \ u0061 \ u030A' , 'und:ci' ) = COLLATE ( ' \ u00C5' , 'und:ci' ); In the following example, '\u0083' is a NO BREAK HERE character and is ignored. -- Returns FALSE ' \ u0083' LIKE '' ; -- Returns TRUE COLLATE ( ' \ u0083' , 'und:ci' ) LIKE '' ; Quantified LIKE operator The quantified LIKE operator supports the following syntax: search value [ NOT ] LIKE quantifier patterns quantifier : { ANY SOME ALL } patterns : { ( expression [ , ... ] ) UNNEST ( array expression ) } Description Checks search value for matches against several patterns.
- Return type BOOL Examples The following examples illustrate how you can check to see if the string in the first operand matches a pattern specified by the second operand. -- Returns TRUE SELECT 'apple' LIKE 'a%' ; -- Returns FALSE SELECT '%a' LIKE 'apple' ; -- Returns FALSE SELECT 'apple' NOT LIKE 'a%' ; -- Returns TRUE SELECT '%a' NOT LIKE 'apple' ; -- Produces an error SELECT NULL LIKE 'a%' ; -- Produces an error SELECT 'apple' LIKE NULL ; The following example illustrates how to search multiple patterns in an array to find a match with the LIKE operator: WITH Words AS ( SELECT 'Intend with clarity.' as value UNION ALL SELECT 'Secure with intention.' UNION ALL SELECT 'Clarity and security.' ) SELECT value FROM Words WHERE EXISTS ( SELECT value FROM UNNEST ( [ '%ity%' , '%and%' ] ) AS pattern WHERE value LIKE pattern ); / ------------------------+ value +------------------------+ Intend with clarity.

### Work with arrays \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filtering arrays The following example uses a WHERE clause in the ARRAY() operator's subquery to filter the returned rows.
- WITH Races AS ( SELECT "800M" AS race , [ STRUCT ( "Rudisha" AS name , [ 23.4 , 26.3 , 26.4 , 26.1 ] AS laps ), STRUCT ( "Makhloufi" AS name , [ 24.5 , 25.4 , 26.6 , 26.1 ] AS laps ), STRUCT ( "Murphy" AS name , [ 23.9 , 26.0 , 27.0 , 26.0 ] AS laps ), STRUCT ( "Bosse" AS name , [ 23.6 , 26.2 , 26.5 , 27.1 ] AS laps ), STRUCT ( "Rotich" AS name , [ 24.7 , 25.6 , 26.9 , 26.4 ] AS laps ), STRUCT ( "Lewandowski" AS name , [ 25.0 , 25.7 , 26.3 , 27.2 ] AS laps ), STRUCT ( "Kipketer" AS name , [ 23.2 , 26.1 , 27.3 , 29.4 ] AS laps ), STRUCT ( "Berian" AS name , [ 23.7 , 26.1 , 27.0 , 29.3 ] AS laps ) ] AS participants ) SELECT race , ( SELECT name FROM UNNEST ( participants ), UNNEST ( laps ) AS duration ORDER BY duration ASC LIMIT 1 ) AS runner with fastest lap FROM Races ; / ------+-------------------------+ race runner with fastest lap +------+-------------------------+ 800M Kipketer +------+------------------------- / Notice that the preceding query uses the comma operator ( , ) to perform a cross join and flatten the array.
- WITH Sequences AS ( SELECT [ 0 , 1 , 1 , 2 , 3 , 5 ] AS some numbers UNION ALL SELECT [ 2 , 4 , 8 , 16 , 32 ] UNION ALL SELECT [ 5 , 10 ] ) SELECT FROM Sequences ; / ---------------------+ some numbers +---------------------+ [0, 1, 1, 2, 3, 5] [2, 4, 8, 16, 32] [5, 10] +--------------------- / To access array elements in the some numbers column, specify which type of indexing you want to use: either index or OFFSET(index) for zero-based indexes, or ORDINAL(index) for one-based indexes: SELECT some numbers , some numbers [ 0 ] AS index 0 , some numbers [ OFFSET ( 1 ) ] AS offset 1 , some numbers [ ORDINAL ( 1 ) ] AS ordinal 1 FROM Sequences ; / --------------------+---------+----------+-----------+ some numbers index 0 offset 1 ordinal 1 +--------------------+---------+----------+-----------+ [0, 1, 1, 2, 3, 5] 0 1 0 [2, 4, 8, 16, 32] 2 4 2 [5, 10] 5 10 5 +--------------------+---------+----------+----------- / Note: OFFSET and ORDINAL will raise errors if the index is out of range.
- WITH Sequences AS ( SELECT 1 AS id , [ 0 , 1 , 1 , 2 , 3 , 5 ] AS some numbers UNION ALL SELECT 2 AS id , [ 2 , 4 , 8 , 16 , 32 ] AS some numbers UNION ALL SELECT 3 AS id , [ 5 , 10 ] AS some numbers ) SELECT id AS matching rows FROM Sequences WHERE 2 IN UNNEST ( Sequences . some numbers ) ORDER BY matching rows ; / ---------------+ matching rows +---------------+ 1 2 +--------------- / Scanning for values that satisfy a condition To scan an array for values that match a condition, use UNNEST to return a table of the elements in the array, use WHERE to filter the resulting table in a subquery, and use EXISTS to check if the filtered table contains any rows.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- If the table name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The table schema contains 3 columns: x: A parameterized string with a maximum length of 10 y: A STRUCT containing a (an array of parameterized bytes with a maximum length of 5), b (a parameterized NUMERIC with a maximum precision of 15, maximum scale of 2, and rounding mode set to 'ROUND HALF EVEN'), and c (a float) z: A parameterized BIGNUMERIC with a maximum precision of 35 and maximum scale of 0 Creating a partitioned table The following example creates a partitioned table named newtable in mydataset using a DATE column: CREATE TABLE mydataset . newtable ( transaction id INT64 , transaction date DATE ) PARTITION BY transaction date OPTIONS ( partition expiration days = 3 , description = "a table partitioned by transaction date" ) If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- The table option list specifies the: Table expiration time: January 1, 2025 at 00:00:00 UTC Partition expiration time: 1 day Description: A table that expires in 2025 Label: org unit = development Creating a new table from an existing table The following example creates a table named top words in mydataset from a query: CREATE TABLE mydataset . top words OPTIONS ( description = "Top ten words per Shakespeare corpus" ) AS SELECT corpus , ARRAY AGG ( STRUCT ( word , word count ) ORDER BY word count DESC LIMIT 10 ) AS top words FROM bigquery - public - data . samples . shakespeare GROUP BY corpus ; If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Examples Setting the expiration timestamp and description on a table The following example sets the expiration timestamp on a table to seven days from the execution time of the ALTER TABLE statement, and sets the description as well: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "Table that expires seven days from now" ) Setting the require partition filter attribute on a partitioned table The following example sets the timePartitioning.requirePartitionFilter attribute on a partitioned table : ALTER TABLE mydataset . mypartitionedtable SET OPTIONS ( require partition filter = true ) Queries that reference this table must use a filter on the partitioning column, or else BigQuery returns an error.

