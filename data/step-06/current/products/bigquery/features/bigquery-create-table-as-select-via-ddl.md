---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.880Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery CREATE TABLE AS SELECT via DDL"
feature_slug: "bigquery-create-table-as-select-via-ddl"
latest_feature_date: "2018-03-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart"
keywords:
  - "CTAS"
  - "query result destination table"
  - "CREATE TABLE ... AS SELECT"
  - "table created from query"
  - "CREATE TABLE AS SELECT"
  - "CREATE TABLE statement"
  - "DDL table creation"
  - "CREATE TABLE AS"
---

# BigQuery CREATE TABLE AS SELECT via DDL

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery DDL gained support for creating tables from query results.

## Extended Definition

BigQuery DDL gained support for creating tables from query results.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Last modified Schema Total Rows Total Bytes Expiration Time Partitioning Clustered Fields Total Logical ----------------- --------------------------- ------------ ------------- ------------ ------------------- ------------------ --------------- 31 Oct 17:34:31 - l orderkey: integer 3086653 210767042 210767042 - l partkey: integer - l suppkey: integer - l commitdate: date - l shipdate: date - l receiptdate: date - l shipinstruct: string - l shipmode: string Now, using the CREATE TABLE AS SELECT statement you can selectively load data to the myotherdataset.orders table in the US multi-region: CREATE OR REPLACE TABLE myotherdataset . orders PARTITION BY DATE TRUNC ( l commitdate , YEAR ) AS SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1992 ; Note: If you get a ResourceExhausted error, retry after some time.
- DDL functionality extends the information returned by a Jobs resource . statistics.query.statementType includes the following additional values: CREATE TABLE CREATE TABLE AS SELECT DROP TABLE CREATE VIEW DROP VIEW statistics.query has 2 additional fields: ddlOperationPerformed : The DDL operation performed, possibly dependent on the existence of the DDL target.
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE TABLE statement is ignored. column option list Specify a column option list in the following format: NAME=VALUE, ...
- A column name: Must contain only letters (a-z, A-Z), numbers (0-9), or underscores ( ) Must start with a letter or underscore Can be up to 300 characters column schema : Similar to a data type , but supports an optional NOT NULL constraint for types other than ARRAY . column schema also supports options on top-level columns and STRUCT fields. column schema can be used only in the column definition list of CREATE TABLE statements.

### Work with Salesforce Data Cloud data in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)
- Source ID: `site-docs-root-2`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- In this example, we retrieve total sales for a customer named john . -- Get combined sales for a customer from both offline and online sales USING ( SELECT total price FROM listing nto john.nto orders dll WHERE customer name = 'john' UNION ALL SELECT total price FROM listing nto john.nto orders dll WHERE customer name = 'john' ) a SELECT SUM ( total price ); Cross Cloud Data Transfer through CTAS You can use Create Table As Select (CTAS) to move data from Data Cloud tables in the BigQuery Omni region to the US region. -- Move all the orders for March to the US region CREATE OR REPLACE TABLE us data . online orders march AS SELECT FROM listing nto john . nto orders dll WHERE EXTRACT ( MONTH FROM order time ) = 3 The destination table is a BigQuery managed table in the US region.

