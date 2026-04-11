---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.761Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery parameterized types"
feature_slug: "bigquery-parameterized-types"
latest_feature_date: "2021-11-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"
keywords:
  - "BIGNUMERIC(precision, scale)"
  - "parametric types"
  - "NUMERIC(precision, scale)"
  - "precision-scale types"
  - "parameterized types"
  - "type parameters"
  - "STRING(n)"
  - "BYTES(n)"
---

# BigQuery parameterized types

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports parameterized data types, including string, bytes, numeric, and bignumeric variants with precision/scale.

## Extended Definition

BigQuery now supports parameterized data types, including string, bytes, numeric, and bignumeric variants with precision/scale.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)

## Supporting Pages

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: It provides a type inventory and numeric/string categories, but does not describe parameterized type syntax such as length or precision/scale modifiers.

Evidence snippets:
- Parameterized data types Syntax: DATA TYPE ( param [ , ... ] ) You can use parameters to specify constraints for the following data types: STRING BYTES NUMERIC BIGNUMERIC A data type that's declared with parameters is called a parameterized data type.
- DECLARE x NUMERIC ( 10 ) DEFAULT 12345 ; DECLARE y NUMERIC ( 5 , 2 ) DEFAULT 123.45 ; -- The variable x is treated as a NUMERIC value when read, so the result of this query -- is a NUMERIC without type parameters.
- SELECT x ; -- Type parameters aren't propagated within expressions, so variables x and y are treated -- as NUMERIC values when read and the result of this query is a NUMERIC without type parameters.
- See Parameterized Data Types for more information on parameterized types and where they can be used.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Last modified Schema Total Rows Total Bytes Expiration Time Partitioning Clustered Fields Total Logical ----------------- --------------------------- ------------ ------------- ------------ ------------------- ------------------ --------------- 31 Oct 17:34:31 - l orderkey: integer 3086653 210767042 210767042 - l partkey: integer - l suppkey: integer - l commitdate: date - l shipdate: date - l receiptdate: date - l shipinstruct: string - l shipmode: string Now, using the CREATE TABLE AS SELECT statement you can selectively load data to the myotherdataset.orders table in the US multi-region: CREATE OR REPLACE TABLE myotherdataset . orders PARTITION BY DATE TRUNC ( l commitdate , YEAR ) AS SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1992 ; Note: If you get a ResourceExhausted error, retry after some time.
- When new data is available, append the data of the 1993 year to the destination table using the INSERT INTO SELECT statement: INSERT INTO myotherdataset . orders SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1993 ; Example 2 The following example inserts data into an ingestion-time partitioned table: CREATE TABLE mydataset . orders ( id String , numeric id INT64 ) PARTITION BY PARTITIONDATE ; After creating a partitioned table, you can insert data into the ingestion-time partitioned table: INSERT INTO mydataset . orders ( PARTITIONTIME , id , numeric id ) SELECT TIMESTAMP ( "2023-01-01" ), id , numeric id , FROM mydataset . ordersof23 WHERE numeric id > 4000000 ; CREATE TABLE LIKE statement Creates a new table with all of the same metadata of another table.
- Job job = bigquery . create ( JobInfo . of ( config )); job = job . waitFor (); if ( job . isDone ()) { System . out . println ( "View created successfully" ); } else { System . out . println ( "View was not created" ); } } catch ( BigQueryException InterruptedException e ) { System . out . println ( "View was not created. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- If the table name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The table schema contains 3 columns: x: A REQUIRED integer y: A REQUIRED STRUCT containing a (an array of strings), b (a REQUIRED boolean), and c (a NULLABLE float) z: A NULLABLE string Note: When you examine the table schema in the Google Cloud console, a STRUCT is displayed as a RECORD, and an ARRAY is displayed as REPEATED.

### "Data manipulation language (DML) statements in GoogleSQL \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Warehouse ( warehouse STRING , state STRING ); DetailedInventory table [ { "name" : "product" , "type" : "string" } , { "name" : "quantity" , "type" : "integer" } , { "name" : "supply constrained" , "type" : "boolean" } , { "name" : "comments" , "type" : "record" , "mode" : "repeated" , "fields" : [ { "name" : "created" , "type" : "date" } , { "name" : "comment" , "type" : "string" } ]} , { "name" : "specifications" , "type" : "record" , "fields" : [ { "name" : "color" , "type" : "string" } , { "name" : "warranty" , "type" : "string" } , { "name" : "dimensions" , "type" : "record" , "fields" : [ { "name" : "depth" , "type" : "float" } , { "name" : "height" , "type" : "float" } , { "name" : "width" , "type" : "float" } ]} ]} ] DDL statement to create this table: CREATE OR REPLACE TABLE dataset .
- Inventory ( product STRING , quantity INT64 , supply constrained BOOLEAN ); NewArrivals table [ { "name" : "product" , "type" : "string" } , { "name" : "quantity" , "type" : "integer" } , { "name" : "warehouse" , "type" : "string" } ] DDL statement to create this table: CREATE OR REPLACE TABLE dataset .
- NewArrivals ( product STRING , quantity INT64 , warehouse STRING ); Warehouse table [ { "name" : "warehouse" , "type" : "string" } , { "name" : "state" , "type" : "string" } ] DDL statement to create this table: CREATE OR REPLACE TABLE dataset .
- Inventory table [ { "name" : "product" , "type" : "string" } , { "name" : "quantity" , "type" : "integer" } , { "name" : "supply constrained" , "type" : "boolean" } ] DDL statement to create this table: CREATE OR REPLACE TABLE dataset .

