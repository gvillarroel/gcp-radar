---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.854Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "DML MERGE statements"
feature_slug: "dml-merge-statements"
latest_feature_date: "2018-04-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/data-manipulation-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "dml"
  - "merge"
  - "statements"
  - "bigquery"
  - "supports"
---

# DML MERGE statements

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports DML MERGE statements.

## Extended Definition

BigQuery supports DML MERGE statements.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data manipulation language (DML) statements in GoogleSQL \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- On-demand query size calculation If you use on-demand billing, BigQuery charges for data manipulation language (DML) statements based on the number of bytes processed by the statement.
- Data manipulation language (DML) statements in GoogleSQL The BigQuery data manipulation language (DML) enables you to update, insert, and delete data from your BigQuery tables.
- Inventory S ON T . product = S . product WHEN NOT MATCHED AND quantity < 20 THEN INSERT ( product , quantity , supply constrained , comments ) VALUES ( product , quantity , true , ARRAY<STRUCT<created DATE , comment STRING >> [ ( DATE ( '2016-01-01' ), 'comment1' ) ] ) WHEN NOT MATCHED THEN INSERT ( product , quantity , supply constrained ) VALUES ( product , quantity , false ) These are the tables before you run the query: Inventory +-------------------+----------+ product quantity +-------------------+----------+ dishwasher 30 dryer 30 front load washer 20 microwave 20 oven 5 top load washer 10 +-------------------+----------+ DetailedInventory +----------------------+----------+--------------------+----------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+----------+----------------+ countertop microwave 20 NULL [] NULL front load washer 20 false [] NULL microwave 20 false [] NULL refrigerator 10 false [] NULL +----------------------+----------+--------------------+----------+----------------+ This is the DetailedInventory table after you run the query: DetailedInventory +----------------------+----------+--------------------+-------------------------------------------------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+-------------------------------------------------+----------------+ countertop microwave 20 NULL [] NULL dishwasher 30 false [] NULL dryer 30 false [] NULL front load washer 20 false [] NULL microwave 20 false [] NULL oven 5 true [{"created":"2016-01-01","comment":"comment1"}] NULL refrigerator 10 false [] NULL top load washer 10 true [{"created":"2016-01-01","comment":"comment1"}] NULL +----------------------+----------+--------------------+-------------------------------------------------+----------------+ Example 2 In the following example, the query merges items from the NewArrivals table into the Inventory table.
- Warehouse ON NewArrivals . warehouse = Warehouse . warehouse WHERE DetailedInventory . product = NewArrivals . product AND Warehouse . state = 'WA' Before: DetailedInventory +----------------------+----------+--------------------+----------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+----------+----------------+ countertop microwave 20 NULL [] NULL dishwasher 30 false [] NULL dryer 30 false [] NULL front load washer 20 false [] NULL microwave 20 false [] NULL oven 5 false [] NULL refrigerator 10 false [] NULL top load washer 10 false [] NULL +----------------------+----------+--------------------+----------+----------------+ New arrivals +-----------------+----------+--------------+ product quantity warehouse +-----------------+----------+--------------+ dryer 200 warehouse #2 oven 300 warehouse #3 top load washer 100 warehouse #1 +-----------------+----------+--------------+ Warehouse +--------------+-------+ warehouse state +--------------+-------+ warehouse #1 WA warehouse #2 CA warehouse #3 WA +--------------+-------+ After: +----------------------+----------+--------------------+----------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+----------+----------------+ countertop microwave 20 NULL [] NULL dishwasher 30 false [] NULL dryer 30 false [] NULL front load washer 20 false [] NULL microwave 20 false [] NULL oven 5 true [] NULL refrigerator 10 false [] NULL top load washer 10 true [] NULL +----------------------+----------+--------------------+----------+----------------+ MERGE statement A MERGE statement is a DML statement that can combine INSERT , UPDATE , and DELETE operations into a single statement and perform the operations atomically.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- A column name: Must contain only letters (a-z, A-Z), numbers (0-9), or underscores ( ) Must start with a letter or underscore Can be up to 300 characters column schema : Similar to a data type , but supports an optional NOT NULL constraint for types other than ARRAY . column schema also supports options on top-level columns and STRUCT fields. column schema can be used only in the column definition list of CREATE TABLE statements.
- BigQuery supports stored procedures for Apache Spark that are written in Python, Java, or Scala. pyspark code : The PySpark code for the stored procedure for Apache Spark if you want to pass the body of the procedure inline.
- Run DDL statements You can run DDL statements by using the Google Cloud console, by using the bq command-line tool, by calling the jobs.query REST API, or programmatically using the BigQuery API client libraries .

### "Transform data with data manipulation language (DML) \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- If you submit one or more mutating DML statements on a table while other mutating DML jobs on it are still running (or pending), BigQuery runs up to 2 of them concurrently, after which up to 20 are queued as PENDING .
- Rows that were recently written using the tabledata.insertall streaming method can't be modified with data manipulation language (DML), such as UPDATE , DELETE , MERGE , or TRUNCATE statements.
- A MERGE DML statement does not conflict with other concurrently running DML statements as long as the statement only inserts rows and does not delete or update any existing rows.
- Fine-grained DML is a performance enhancement designed to optimize the execution of UPDATE , DELETE , and MERGE statements (also known as mutating DML statements).

