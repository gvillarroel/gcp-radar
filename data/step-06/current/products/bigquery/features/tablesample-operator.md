---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.747Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "TABLESAMPLE operator"
feature_slug: "tablesample-operator"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "tablesample"
  - "operator"
  - "lets"
  - "bigquery"
  - "query"
  - "random"
  - "subsets"
  - "large"
---

# TABLESAMPLE operator

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The TABLESAMPLE operator lets BigQuery query random subsets of data from large tables.

## Extended Definition

The TABLESAMPLE operator lets BigQuery query random subsets of data from large tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- FROM clause FROM from clause [, ...] from clause : from item [ { pivot operator unpivot operator match recognize clause } ] [ tablesample operator ] from item : { table name [ as alias ] [ FOR SYSTEM TIME AS OF timestamp expression ] { join operation ( join operation ) } ( query expr ) [ as alias ] field path unnest operator cte name [ as alias ] graph table operator [ as alias ] } as alias : [ AS ] alias The FROM clause indicates the table or tables from which to retrieve rows, and specifies how to join those rows together to produce a single stream of rows for processing in the rest of the query. pivot operator See PIVOT operator . unpivot operator See UNPIVOT operator . tablesample operator See TABLESAMPLE operator . match recognize clause See MATCH RECOGNIZE clause . graph table operator See GRAPH TABLE operator . table name The name (optionally qualified) of an existing table.
- SELECT FROM Produce UNPIVOT ( ( first half sales , second half sales ) FOR semesters IN (( Q1 , Q2 ) AS 'semester 1' , ( Q3 , Q4 ) AS 'semester 2' )) / ---------+------------------+-------------------+------------+ product first half sales second half sales semesters +---------+------------------+-------------------+------------+ Kale 51 23 semester 1 Kale 45 3 semester 2 Apple 77 0 semester 1 Apple 25 2 semester 2 +---------+------------------+-------------------+------------ / TABLESAMPLE operator TABLESAMPLE SYSTEM ( percent PERCENT ) Description You can use the TABLESAMPLE operator to select a random sample of a dataset.
- SELECT item , purchases , category , LAST VALUE ( item ) OVER ( item window ) AS most popular FROM Produce WINDOW item window AS ( PARTITION BY category ORDER BY purchases ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( d ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS ( b ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ), d AS ( c ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( c ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS b Set operators query expr [ { INNER [ { FULL LEFT } [ OUTER ] ] } ] { UNION { ALL DISTINCT } INTERSECT DISTINCT EXCEPT DISTINCT } [ { BY NAME [ ON ( column list ) ] [ STRICT ] CORRESPONDING [ BY ( column list ) ] } ] query expr Set operators combine or filter results from two or more input queries into a single result set.
- The following examples illustrate the use of parentheses with set operations: -- Same set operations, no parentheses. query1 UNION ALL query2 UNION ALL query3 ; -- Different set operations, parentheses needed. query1 UNION ALL ( query2 UNION DISTINCT query3 ); -- Invalid query1 UNION ALL query2 UNION DISTINCT query3 ; -- Same set operations, no parentheses. query1 EXCEPT DISTINCT query2 EXCEPT DISTINCT query3 ; -- Equivalent query with optional parentheses, returns same results. ( query1 EXCEPT DISTINCT query2 ) EXCEPT DISTINCT query3 ; -- Different execution order with a subquery, parentheses needed. query1 EXCEPT DISTINCT ( query2 EXCEPT DISTINCT query3 ); Set operator behavior with duplicate rows Consider a given row R that appears exactly m times in the first input query and n times in the second input query, where m >= 0 and n >= 0 : For UNION ALL , row R appears exactly m + n times in the result.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Example: legacySQL SELECT page title , / Populate these columns as True or False, / / depending on the condition / IF ( page title CONTAINS 'search' , INTEGER ( total ), 0 ) AS search , IF ( page title CONTAINS 'Earth' OR page title CONTAINS 'Maps' , INTEGER ( total ), 0 ) AS geo , FROM / Subselect to return top revised Wikipedia articles / / containing 'Google', followed by additional text. / ( SELECT TOP ( title , 5 ) as page title , COUNT ( ) as total FROM [ bigquery - public - data : samples . wikipedia ] WHERE REGEXP MATCH ( title , r '^Google.+' ) AND wp namespace = 0 ); Returns: +---------------+--------+------+ page title search geo +---------------+--------+------+ Google search 4261 0 Google Earth 0 3874 Google Chrome 0 0 Google Maps 0 2617 Google bomb 0 0 +---------------+--------+------+ Using HASH to select a random sample of your data Some queries can provide a useful result using random subsampling of the result set.
- Example: legacySQL SELECT state , / If 'is male' is True, return 'Male', / / otherwise return 'Female' / IF ( is male , 'Male' , 'Female' ) AS sex , / The count value is aliased as 'cnt' / / and used in the HAVING clause below. / COUNT ( ) AS cnt FROM [ bigquery - public - data : samples . natality ] WHERE state != '' GROUP BY state , sex HAVING cnt > 3000000 ORDER BY cnt DESC Returns: +-------+--------+---------+ state sex cnt +-------+--------+---------+ CA Male 7060826 CA Female 6733288 TX Male 5107542 TX Female 4879247 NY Male 4442246 NY Female 4227891 IL Male 3089555 +-------+--------+---------+ Arithmetic operators Arithmetic operators take numeric arguments and return a numeric result.
- Example Referring back to the example used for the WITHIN modifier, OMIT RECORD IF can be used to accomplish the same thing WITHIN and HAVING were used to do in that example. legacySQL SELECT repository . url FROM [ bigquery - public - data : samples . github nested ] OMIT RECORD IF COUNT ( payload . pages . page name ) < = 80 ; GROUP BY clause The GROUP BY clause lets you group rows that have the same values for a given field or set of fields so that you can compute aggregations of related fields.
- FLATTEN operator (FLATTEN( [project name:]datasetId.tableId , field to be flattened)) (FLATTEN(( subquery ), field to be flattened)) Unlike typical SQL-processing systems, BigQuery is designed to handle repeated data.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Cannot appear with main file uri in procedure option list . argument type : Any valid BigQuery type . procedure argument mode : Specifies whether an argument is an input, an output, or both. procedure option list The procedure option list lets you specify procedure options.
- For example, if the functionj add random(i) returns i + rand() , the function is not deterministic and BigQuery does not use cached results.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .

