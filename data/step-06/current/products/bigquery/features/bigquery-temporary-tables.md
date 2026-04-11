---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.844Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery temporary tables"
feature_slug: "bigquery-temporary-tables"
latest_feature_date: "2019-10-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "session-scoped temporary table"
  - "TEMP table in scripts"
  - "CREATE TEMP TABLE AS SELECT"
  - "CREATE TEMP TABLE"
  - "temp table"
  - "temporary table in BigQuery"
  - "temporary table"
---

# BigQuery temporary tables

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports the use of temporary tables during query and script execution.

## Extended Definition

BigQuery supports the use of temporary tables during query and script execution.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- SelectFromTablesAndAppend ( target date DATE , OUT rows added INT64 ) BEGIN CREATE TEMP TABLE DataForTargetDate AS SELECT t1 . id , t1 . x , t2 . y FROM dataset . partitioned table1 AS t1 JOIN dataset . partitioned table2 AS t2 ON t1 . id = t2 . id WHERE t1 . date = target date AND t2 . date = target date ; SET rows added = ( SELECT COUNT ( ) FROM DataForTargetDate ); SELECT id , x , y , target date -- note that target date is a parameter FROM DataForTargetDate ; DROP TABLE DataForTargetDate ; END ; The following example declares a variable rows added , then passes it as an argument to the SelectFromTablesAndAppend procedure from the previous example, along with the value of CURRENT DATE ; then it returns a message stating how many rows were added.
- CREATE TEMP TABLE Example ( x INT64 , y STRING ); INSERT INTO Example VALUES ( 5 , 'foo' ); INSERT INTO Example VALUES ( 6 , 'bar' ); SELECT FROM Example ; This script returns the following output: +-----+---+-----+ Row x y +-----+--- -----+ 1 5 foo 2 6 bar +-----+--- -----+ Load data across clouds Example 1 Suppose you have a BigLake table named myawsdataset.orders that references data from Amazon S3 .
- Syntax CREATE [ OR REPLACE ] [ TEMP TEMPORARY ] TABLE [ IF NOT EXISTS ] table name [ ( column constraint definition [ , ... ] ) ] [ DEFAULT COLLATE collate specification ] [ PARTITION BY partition expression ] [ CLUSTER BY clustering column list ] [ WITH CONNECTION connection name ] [ OPTIONS ( table option list ) ] [ AS query statement ] column := column definition constraint definition := [ primary key ] [[ CONSTRAINT constraint name ] foreign key , ... ] primary key := PRIMARY KEY ( column name [ , ... ] ) NOT ENFORCED foreign key := FOREIGN KEY ( column name [ , ... ] ) foreign reference foreign reference := REFERENCES primary key table ( column name [ , ... ] ) NOT ENFORCED Arguments OR REPLACE : Replaces any table with the same name if it exists.
- For temporary tables, do not include the project name or dataset name. column : The table's schema information. constraint definition : An expression that defines a table constraint. collation specification : When a new column is added to the table without an explicit collation specification, the column inherits this collation specification for STRING types.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- CREATE TEMP TABLE tmp table ( n INT64 ); -- insert some values into the temp table by using recursive CTEs.
- It looks like this: / -----------------------+ LastName SchoolID +-----------------------+ Adams 50 Buchanan 52 Coolidge 52 Davis 51 Eisenhower 77 +----------------------- / You can use this WITH clause to emulate a temporary table name for the examples in this reference: WITH Roster AS ( SELECT 'Adams' as LastName , 50 as SchoolID UNION ALL SELECT 'Buchanan' , 52 UNION ALL SELECT 'Coolidge' , 52 UNION ALL SELECT 'Davis' , 51 UNION ALL SELECT 'Eisenhower' , 77 ) SELECT FROM Roster PlayerStats table The PlayerStats table includes a list of player names ( LastName ) and the unique ID assigned to the opponent they played in a given game ( OpponentID ) and the number of points scored by the athlete in that game ( PointsScored ). / ----------------------------------------+ LastName OpponentID PointsScored +----------------------------------------+ Adams 51 3 Buchanan 77 0 Coolidge 77 1 Adams 52 4 Buchanan 50 13 +---------------------------------------- / You can use this WITH clause to emulate a temporary table name for the examples in this reference: WITH PlayerStats AS ( SELECT 'Adams' as LastName , 51 as OpponentID , 3 as PointsScored UNION ALL SELECT 'Buchanan' , 77 , 0 UNION ALL SELECT 'Coolidge' , 77 , 1 UNION ALL SELECT 'Adams' , 52 , 4 UNION ALL SELECT 'Buchanan' , 50 , 13 ) SELECT FROM PlayerStats TeamMascot table The TeamMascot table includes a list of unique school IDs ( SchoolID ) and the mascot for that school ( Mascot ). / ---------------------+ SchoolID Mascot +---------------------+ 50 Jaguars 51 Knights 52 Lakers 53 Mustangs +--------------------- / You can use this WITH clause to emulate a temporary table name for the examples in this reference: WITH TeamMascot AS ( SELECT 50 as SchoolID , 'Jaguars' as Mascot UNION ALL SELECT 51 , 'Knights' UNION ALL SELECT 52 , 'Lakers' UNION ALL SELECT 53 , 'Mustangs' ) SELECT FROM TeamMascot GROUP BY clause Example: SELECT LastName , SUM ( PointsScored ) FROM PlayerStats GROUP BY LastName ; LastName SUM Adams 7 Buchanan 13 Coolidge 1 UNION The UNION operator combines the result sets of two or more SELECT statements by pairing columns from the result set of each SELECT statement and vertically concatenating them.
- To force the path to be interpreted as a table name, wrap the path using . unnest operator See UNNEST operator . cte name Common table expressions (CTEs) in a WITH Clause act like temporary tables that you can reference anywhere in the FROM clause.
- The following example demonstrates how to insert data into a table by using recursive CTEs: -- create a temp table.

