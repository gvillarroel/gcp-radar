---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.882Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "DML on tables with required fields"
feature_slug: "dml-on-tables-with-required-fields"
latest_feature_date: "2017-07-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
keywords:
  - "dml"
  - "tables"
  - "required"
  - "fields"
  - "bigquery"
  - "supports"
  - "statements"
  - "modify"
---

# DML on tables with required fields

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports using DML statements to modify tables with required fields.

## Extended Definition

BigQuery supports using DML statements to modify tables with required fields.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)

## Supporting Pages

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to run a cross-cloud join: bigquery.jobs.create bigquery.tables.getData You might also be able to get these permissions with custom roles or other predefined roles .
- You can reference BigLake tables anywhere in a SELECT statement as if they were standard BigQuery tables, including in data manipulation language (DML) and data definition language (DDL) statements that use subqueries to retrieve data.
- You cannot modify BigLake tables using DML statements or other methods.
- Cross-cloud join required permissions To get the permissions that you need to run a cross-cloud join, ask your administrator to grant you the following IAM roles on the project where the join is executed: BigQuery Data Viewer ( roles/bigquery.dataViewer ) BigQuery Job User ( roles/bigquery.jobUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Quotas and limits for jobs against partitioned tables Quotas and limits also apply to the different types of jobs you can run against partitioned tables, including: Loading data (load jobs) Exporting data (extract jobs) Querying data (query jobs) Copying tables (copy jobs) Number of partition modifications for column-partitioned tables quota errors BigQuery returns this error when your column-partitioned table reaches the quota of the number of partition modifications permitted per day.
- Table pricing When you create and use partitioned tables in BigQuery, your charges are based on how much data is stored in the partitions and on the queries you run against the data: For information on storage pricing, see Storage pricing .
- For best practices for controlling costs in BigQuery, see Controlling costs in BigQuery Table security Access control for partitioned tables is the same as access control for standard tables.
- With sharded tables, BigQuery must maintain a copy of the schema and metadata for each table.

### "Data manipulation language (DML) statements in GoogleSQL \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Data manipulation language (DML) statements in GoogleSQL The BigQuery data manipulation language (DML) enables you to update, insert, and delete data from your BigQuery tables.
- On-demand query size calculation If you use on-demand billing, BigQuery charges for data manipulation language (DML) statements based on the number of bytes processed by the statement.
- Inventory ) THEN UPDATE SET comments = ARRAY CONCAT ( comments , ARRAY<STRUCT<created DATE , comment STRING >> [ ( CAST ( '2016-02-01' AS DATE ), 'comment2' ) ] ) These are the tables before you run the query: Inventory +-----------------+----------+ product quantity +-----------------+----------+ dryer 50 microwave 20 oven 35 refrigerator 25 top load washer 30 +-----------------+----------+ DetailedInventory +----------------------+----------+--------------------+-------------------------------------------------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+-------------------------------------------------+----------------+ countertop microwave 20 NULL [] NULL dishwasher 30 false [] NULL dryer 30 false [] NULL front load washer 20 false [] NULL microwave 20 false [] NULL oven 5 true [{"created":"2016-01-01","comment":"comment1"}] NULL refrigerator 10 false [] NULL top load washer 10 true [{"created":"2016-01-01","comment":"comment1"}] NULL +----------------------+----------+--------------------+-------------------------------------------------+----------------+ This is the DetailedInventory table after you run the query: +----------------------+----------+--------------------+-----------------------------------------------------------------------------------------------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+-----------------------------------------------------------------------------------------------+----------------+ countertop microwave 20 NULL [] NULL dishwasher 30 false [] NULL dryer 30 false [] NULL front load washer 20 false [] NULL microwave 20 false [{"created":"2016-02-01","comment":"comment2"}] NULL oven 5 true [{"created":"2016-01-01","comment":"comment1"}] NULL refrigerator 10 false [{"created":"2016-02-01","comment":"comment2"}] NULL top load washer 10 true [{"created":"2016-01-01","comment":"comment1"},{"created":"2016-02-01","comment":"comment2"}] NULL +----------------------+----------+--------------------+-----------------------------------------------------------------------------------------------+----------------+ Example 6 In the following example, the query increases the inventory of products from the warehouse in CA .
- Inventory S ON T . product = S . product WHEN NOT MATCHED AND quantity < 20 THEN INSERT ( product , quantity , supply constrained , comments ) VALUES ( product , quantity , true , ARRAY<STRUCT<created DATE , comment STRING >> [ ( DATE ( '2016-01-01' ), 'comment1' ) ] ) WHEN NOT MATCHED THEN INSERT ( product , quantity , supply constrained ) VALUES ( product , quantity , false ) These are the tables before you run the query: Inventory +-------------------+----------+ product quantity +-------------------+----------+ dishwasher 30 dryer 30 front load washer 20 microwave 20 oven 5 top load washer 10 +-------------------+----------+ DetailedInventory +----------------------+----------+--------------------+----------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+----------+----------------+ countertop microwave 20 NULL [] NULL front load washer 20 false [] NULL microwave 20 false [] NULL refrigerator 10 false [] NULL +----------------------+----------+--------------------+----------+----------------+ This is the DetailedInventory table after you run the query: DetailedInventory +----------------------+----------+--------------------+-------------------------------------------------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+-------------------------------------------------+----------------+ countertop microwave 20 NULL [] NULL dishwasher 30 false [] NULL dryer 30 false [] NULL front load washer 20 false [] NULL microwave 20 false [] NULL oven 5 true [{"created":"2016-01-01","comment":"comment1"}] NULL refrigerator 10 false [] NULL top load washer 10 true [{"created":"2016-01-01","comment":"comment1"}] NULL +----------------------+----------+--------------------+-------------------------------------------------+----------------+ Example 2 In the following example, the query merges items from the NewArrivals table into the Inventory table.

