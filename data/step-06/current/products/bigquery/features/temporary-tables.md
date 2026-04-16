---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.806Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Temporary tables"
feature_slug: "temporary-tables"
latest_feature_date: "2019-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "temporary"
  - "tables"
  - "bigquery"
  - "store"
  - "intermediate"
  - "query"
  - "results"
  - "short"
---

# Temporary tables

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery temporary tables store intermediate query results for short-lived use.

## Extended Definition

BigQuery temporary tables store intermediate query results for short-lived use.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SELECT item , purchases , category , LAST VALUE ( item ) OVER ( item window ) AS most popular FROM Produce WINDOW item window AS ( PARTITION BY category ORDER BY purchases ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( d ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS ( b ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ), d AS ( c ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( c ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS b Set operators query expr [ { INNER [ { FULL LEFT } [ OUTER ] ] } ] { UNION { ALL DISTINCT } INTERSECT DISTINCT EXCEPT DISTINCT } [ { BY NAME [ ON ( column list ) ] [ STRICT ] CORRESPONDING [ BY ( column list ) ] } ] query expr Set operators combine or filter results from two or more input queries into a single result set.
- The following examples illustrate the use of parentheses with set operations: -- Same set operations, no parentheses. query1 UNION ALL query2 UNION ALL query3 ; -- Different set operations, parentheses needed. query1 UNION ALL ( query2 UNION DISTINCT query3 ); -- Invalid query1 UNION ALL query2 UNION DISTINCT query3 ; -- Same set operations, no parentheses. query1 EXCEPT DISTINCT query2 EXCEPT DISTINCT query3 ; -- Equivalent query with optional parentheses, returns same results. ( query1 EXCEPT DISTINCT query2 ) EXCEPT DISTINCT query3 ; -- Different execution order with a subquery, parentheses needed. query1 EXCEPT DISTINCT ( query2 EXCEPT DISTINCT query3 ); Set operator behavior with duplicate rows Consider a given row R that appears exactly m times in the first input query and n times in the second input query, where m >= 0 and n >= 0 : For UNION ALL , row R appears exactly m + n times in the result.
- FROM clause FROM from clause [, ...] from clause : from item [ { pivot operator unpivot operator match recognize clause } ] [ tablesample operator ] from item : { table name [ as alias ] [ FOR SYSTEM TIME AS OF timestamp expression ] { join operation ( join operation ) } ( query expr ) [ as alias ] field path unnest operator cte name [ as alias ] graph table operator [ as alias ] } as alias : [ AS ] alias The FROM clause indicates the table or tables from which to retrieve rows, and specifies how to join those rows together to produce a single stream of rows for processing in the rest of the query. pivot operator See PIVOT operator . unpivot operator See UNPIVOT operator . tablesample operator See TABLESAMPLE operator . match recognize clause See MATCH RECOGNIZE clause . graph table operator See GRAPH TABLE operator . table name The name (optionally qualified) of an existing table.
- Smaller epsilons and more noise will provide greater privacy protection. -- This gets the average number of items requested per professor and adds -- noise to the results SELECT WITH DIFFERENTIAL PRIVACY OPTIONS ( epsilon = 10 , delta = .01 , max groups contributed = 2 , privacy unit column = id ) item , AVG ( quantity , contribution bounds per group = > ( 0 , 100 )) AS average quantity FROM professors GROUP BY item ; -- These results will change each time you run the query. -- The scissors group was removed this time, but might not be -- removed the next time. / ----------+------------------+ item average quantity +----------+------------------+ pencil 38.5038356810269 pen 13.4725028762032 +----------+------------------ / Remove noise Removing noise removes privacy protection.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All query results, including both interactive and batch queries, are cached in temporary tables for approximately 24 hours with some exceptions .
- Pre-process the data in BigQuery and store that data in additional tables.
- Identify API calls Go to the Google Cloud navigation menu menu, and then select Logging > Logs Explorer : Go to the Logs Explorer Filter logs to view table operations by running the following query: resource.type="bigquery dataset" protoPayload.resourceName="projects/my-project-id/datasets/my dataset/tables/my table" (protoPayload.methodName="google.cloud.bigquery.v2.TableService.PatchTable" OR protoPayload.methodName="google.cloud.bigquery.v2.TableService.UpdateTable" OR protoPayload.methodName="google.cloud.bigquery.v2.TableService.InsertTable") Identify jobs The following query returns a list of jobs that modify the affected table in the project within the past day.
- Maximum number of API requests limit errors BigQuery returns this error when you reach the rate limit for the number of API requests to a BigQuery API per user per method—for example, the tables.get method calls from a service account, or the jobs.insert method calls from a different user email.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.tables.create The dataset where you create the table clone. bigquery.tables.get The source table. bigquery.tables.getData The source table. bigquery.tables.restoreSnapshot The source table (required only if the source table is a table snapshot).
- External tables let BigQuery query data that is stored outside of BigQuery storage.
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.

