---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.945Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "JOIN statements"
feature_slug: "join-statements"
latest_feature_date: "2011-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "join"
  - "statements"
  - "let"
  - "bigquery"
  - "combine"
  - "rows"
  - "multiple"
  - "tables"
---

# JOIN statements

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

JOIN statements let BigQuery combine rows from multiple tables in a query.

## Extended Definition

JOIN statements let BigQuery combine rows from multiple tables in a query.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- SelectFromTablesAndAppend ( target date DATE , OUT rows added INT64 ) BEGIN CREATE TEMP TABLE DataForTargetDate AS SELECT t1 . id , t1 . x , t2 . y FROM dataset . partitioned table1 AS t1 JOIN dataset . partitioned table2 AS t2 ON t1 . id = t2 . id WHERE t1 . date = target date AND t2 . date = target date ; SET rows added = ( SELECT COUNT ( ) FROM DataForTargetDate ); SELECT id , x , y , target date -- note that target date is a parameter FROM DataForTargetDate ; DROP TABLE DataForTargetDate ; END ; The following example declares a variable rows added , then passes it as an argument to the SelectFromTablesAndAppend procedure from the previous example, along with the value of CURRENT DATE ; then it returns a message stating how many rows were added.
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.

### "Data manipulation language (DML) statements in GoogleSQL \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data manipulation language (DML) statements in GoogleSQL The BigQuery data manipulation language (DML) enables you to update, insert, and delete data from your BigQuery tables.
- The merge condition is used by the JOIN to match rows between source and target tables.
- DetailedInventory SET comments = ARRAY ( SELECT c FROM UNNEST ( comments ) AS c WHERE c . comment NOT LIKE '%comment2%' ) WHERE true +----------------------+----------+--------------------+----------------------------------------------------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+----------------------------------------------------+----------------+ countertop microwave 20 NULL [] NULL dishwasher 30 false [u'{"created":"2016-01-01","comment":"comment1"}'] NULL dryer 30 false [] NULL front load washer 20 false [u'{"created":"2016-01-01","comment":"comment1"}'] NULL microwave 20 false [] NULL oven 5 false [] NULL refrigerator 10 false [] NULL top load washer 10 false [u'{"created":"2016-01-01","comment":"comment1"}'] NULL +----------------------+----------+--------------------+----------------------------------------------------+----------------+ UPDATE statement using join between three tables The following example sets supply constrained to true for all products from NewArrivals where the warehouse location is in 'WA' state.
- If there is at least one matched clause performing an UPDATE operation, a runtime error is returned when multiple rows from the source table match one row from the target table, and you are trying to update or delete that row in the target table. not matched by target clause The not matched by target clause defines how to insert into the target table if a row from source table does not match any row in the target table. not matched by source clause The not matched by source clause defines how to update or delete a row in the target table if that row does not match any row in the source table.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- FROM clause FROM from clause [, ...] from clause : from item [ { pivot operator unpivot operator match recognize clause } ] [ tablesample operator ] from item : { table name [ as alias ] [ FOR SYSTEM TIME AS OF timestamp expression ] { join operation ( join operation ) } ( query expr ) [ as alias ] field path unnest operator cte name [ as alias ] graph table operator [ as alias ] } as alias : [ AS ] alias The FROM clause indicates the table or tables from which to retrieve rows, and specifies how to join those rows together to produce a single stream of rows for processing in the rest of the query. pivot operator See PIVOT operator . unpivot operator See UNPIVOT operator . tablesample operator See TABLESAMPLE operator . match recognize clause See MATCH RECOGNIZE clause . graph table operator See GRAPH TABLE operator . table name The name (optionally qualified) of an existing table.
- Examples This query returns returns all rows from the Roster table where the SchoolID column has the value 52 : SELECT FROM Roster WHERE SchoolID = 52 ; The bool expression can contain multiple sub-conditions: SELECT FROM Roster WHERE STARTS WITH ( LastName , "Mc" ) OR STARTS WITH ( LastName , "Mac" ); Expressions in an INNER JOIN have an equivalent expression in the WHERE clause.
- SchoolID ; / ---------------------------+ LastName Mascot +---------------------------+ Adams Jaguars Buchanan Lakers Coolidge Lakers Davis Knights NULL Mustangs +--------------------------- / Join conditions In a join operation , a join condition helps specify how to combine rows in two from items to form a single source.
- The join operator and join condition specify how to combine and discard rows from the two from item s to form a single source. [INNER] JOIN An INNER JOIN , or simply JOIN , effectively calculates the Cartesian product of the two from item s and discards all rows that don't meet the join condition.

