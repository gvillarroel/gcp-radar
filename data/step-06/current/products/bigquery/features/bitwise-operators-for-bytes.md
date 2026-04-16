---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.896Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Bitwise operators for BYTES"
feature_slug: "bitwise-operators-for-bytes"
latest_feature_date: "2017-02-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "bitwise"
  - "operators"
  - "bytes"
  - "bigquery"
  - "standard"
  - "sql"
  - "supports"
  - "values"
---

# Bitwise operators for BYTES

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Standard SQL supports bitwise operators for BYTES values.

## Extended Definition

BigQuery Standard SQL supports bitwise operators for BYTES values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Operators \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Binary 2 + All numeric types Unary plus Unary - All numeric types Unary minus Unary Integer or BYTES Bitwise not Unary 3 All numeric types Multiplication Binary / All numeric types Division Binary STRING , BYTES , or ARRAY<T> Concatenation operator Binary 4 + All numeric types, DATE with INT64 , INTERVAL Addition Binary - All numeric types, DATE with INT64 , INTERVAL Subtraction Binary 5 << Integer or BYTES Bitwise left-shift Binary > Integer or BYTES Bitwise right-shift Binary 6 & Integer or BYTES Bitwise and Binary 7 ^ Integer or BYTES Bitwise xor Binary 8 Integer or BYTES Bitwise or Binary 9 (Comparison Operators) = Any comparable type.
- GoogleSQL for BigQuery supports operators.
- Clarity and security. +------------------------ / The following queries illustrate some of the semantic rules for the quantified LIKE operator: SELECT NULL LIKE ANY ( 'a' , 'b' ), -- NULL 'a' LIKE ANY ( 'a' , 'c' ), -- TRUE 'a' LIKE ANY ( 'b' , 'c' ), -- FALSE 'a' LIKE ANY ( 'a' , NULL ), -- TRUE 'a' LIKE ANY ( 'b' , NULL ), -- NULL NULL NOT LIKE ANY ( 'a' , 'b' ), -- NULL 'a' NOT LIKE ANY ( 'a' , 'b' ), -- TRUE 'a' NOT LIKE ANY ( 'a' , '%a%' ), -- FALSE 'a' NOT LIKE ANY ( 'a' , NULL ), -- NULL 'a' NOT LIKE ANY ( 'b' , NULL ); -- TRUE SELECT NULL LIKE SOME ( 'a' , 'b' ), -- NULL 'a' LIKE SOME ( 'a' , 'c' ), -- TRUE 'a' LIKE SOME ( 'b' , 'c' ), -- FALSE 'a' LIKE SOME ( 'a' , NULL ), -- TRUE 'a' LIKE SOME ( 'b' , NULL ), -- NULL NULL NOT LIKE SOME ( 'a' , 'b' ), -- NULL 'a' NOT LIKE SOME ( 'a' , 'b' ), -- TRUE 'a' NOT LIKE SOME ( 'a' , '%a%' ), -- FALSE 'a' NOT LIKE SOME ( 'a' , NULL ), -- NULL 'a' NOT LIKE SOME ( 'b' , NULL ); -- TRUE SELECT NULL LIKE ALL ( 'a' , 'b' ), -- NULL 'a' LIKE ALL ( 'a' , '%a%' ), -- TRUE 'a' LIKE ALL ( 'a' , 'c' ), -- FALSE 'a' LIKE ALL ( 'a' , NULL ), -- NULL 'a' LIKE ALL ( 'b' , NULL ), -- FALSE NULL NOT LIKE ALL ( 'a' , 'b' ), -- NULL 'a' NOT LIKE ALL ( 'b' , 'c' ), -- TRUE 'a' NOT LIKE ALL ( 'a' , 'c' ), -- FALSE 'a' NOT LIKE ALL ( 'a' , NULL ), -- FALSE 'a' NOT LIKE ALL ( 'b' , NULL ); -- NULL The following queries illustrate some of the semantic rules for the quantified LIKE operator and collation: SELECT COLLATE ( 'a' , 'und:ci' ) LIKE ALL ( 'a' , 'A' ), -- TRUE 'a' LIKE ALL ( COLLATE ( 'a' , 'und:ci' ), 'A' ), -- TRUE 'a' LIKE ALL ( '%A%' , COLLATE ( 'a' , 'und:ci' )); -- TRUE -- ERROR: BYTES and STRING values can't be used together.
- Examples The examples in this section reference a table called entry table : / -------+ entry +-------+ a b c NULL +------- / SELECT 'a' FROM entry table WHERE entry = 'a' -- a => 'a' = 'a' => TRUE -- b => 'b' = 'a' => FALSE -- NULL => NULL = 'a' => NULL / -------+ entry +-------+ a +------- / SELECT entry FROM entry table WHERE NOT ( entry = 'a' ) -- a => NOT('a' = 'a') => NOT(TRUE) => FALSE -- b => NOT('b' = 'a') => NOT(FALSE) => TRUE -- NULL => NOT(NULL = 'a') => NOT(NULL) => NULL / -------+ entry +-------+ b c +------- / SELECT entry FROM entry table WHERE entry IS NULL -- a => 'a' IS NULL => FALSE -- b => 'b' IS NULL => FALSE -- NULL => NULL IS NULL => TRUE / -------+ entry +-------+ NULL +------- / Graph logical operators GoogleSQL supports the following logical operators in element pattern label expressions : Name Syntax Description NOT !X Returns TRUE if X isn't included, otherwise, returns FALSE .

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Example: legacySQL SELECT cigarette use , / Finds average and standard deviation / AVG ( weight pounds ) baby weight , STDDEV ( weight pounds ) baby weight stdev , AVG ( mother age ) mother age FROM [ bigquery - public - data : samples . natality ] WHERE year = 2003 AND state = 'OH' / Group the result values by those / / who smoked and those who didn't. / GROUP BY cigarette use ; Filter query results using an aggregated value In order to filter query results using an aggregated value (for example, filtering by the value of a SUM ), use the HAVING function.
- JOIN operator BigQuery supports multiple JOIN operators in each FROM clause.
- Example This query adds the GROUPING function to the previous example to better identify the rows added because of the ROLLUP function. legacySQL SELECT year , GROUPING ( year ) as rollup year , is male , GROUPING ( is male ) as rollup gender , COUNT ( 1 ) as count FROM [ bigquery - public - data : samples . natality ] WHERE year > = 2000 AND year < = 2002 GROUP BY ROLLUP ( year , is male ) ORDER BY year , is male ; These are the result the new query returns. +------+-------------+---------+---------------+----------+ year rollup year is male rollup gender count +------+-------------+---------+---------------+----------+ NULL 1 NULL 1 12122730 2000 0 NULL 1 4063823 2000 0 false 0 1984255 2000 0 true 0 2079568 2001 0 NULL 1 4031531 2001 0 false 0 1970770 2001 0 true 0 2060761 2002 0 NULL 1 4027376 2002 0 false 0 1966519 2002 0 true 0 2060857 +------+-------------+---------+---------------+----------+ Notes: Non-aggregated fields in the SELECT clause must be listed in the GROUP BY clause. legacySQL SELECT word , corpus , COUNT ( word ) FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word , corpus ; / Succeeds because all non-aggregated fields are group keys. / legacySQL SELECT word , corpus , COUNT ( word ) FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word ; / Fails because corpus is not aggregated nor is it a group key. / Expressions computed in the SELECT clause cannot be used in the corresponding GROUP BY clause. legacySQL SELECT word , corpus , COUNT ( word ) word count FROM [ bigquery - public - data : samples . shakespeare ] WHERE word CONTAINS "th" GROUP BY word , corpus , word count ; / Fails because word count is not visible to this GROUP BY clause. / Grouping by float and double values is not supported, because the equality function for those types is not well-defined.
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , RANK () OVER ( PARTITION BY corpus ORDER BY word count DESC ) rank , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count rank handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 3 circumstance 3 5 RATIO TO REPORT( <column> ) Returns the ratio of each value to the sum of the values, as a double between 0 and 1. legacySQL SELECT word , word count , RATIO TO REPORT ( word count ) OVER ( PARTITION BY corpus ORDER BY word count DESC ) r to r , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count r to r handkerchief 29 0.6444444444444445 satisfaction 5 0.1111111111111111 displeasure 4 0.08888888888888889 instruments 4 0.08888888888888889 circumstance 3 0.06666666666666667 ROW NUMBER() Returns the current row number of the query result over the window, starting with 1. legacySQL SELECT word , word count , ROW NUMBER () OVER ( PARTITION BY corpus ORDER BY word count DESC ) row num , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count row num handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 4 circumstance 3 5 Other functions Syntax Other functions CASE WHEN ...

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.
- Example: data policies = ["{'name':'myproject.region-us.data policy name1'}", "{'name':'myproject.region-us.data policy name2'}"] The ALTER TABLE ALTER COLUMN statement supports the = and += operators to add data policies to a specific column.
- Example: data policies = ["{'name':'myproject.region-us.data policy name1'}", "{'name':'myproject.region-us.data policy name2'}"] The ALTER TABLE ALTER COLUMN statement supports the = and += operators to add data policies to a specific column.

