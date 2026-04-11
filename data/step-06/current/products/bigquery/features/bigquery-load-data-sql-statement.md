---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.647Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery LOAD DATA SQL statement"
feature_slug: "bigquery-load-data-sql-statement"
latest_feature_date: "2023-07-05"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "newline-delimited JSON"
  - "ORC and Parquet"
  - "load data statement"
  - "SQL load statement"
  - "load table data"
  - "LOAD DATA SQL"
  - "LOAD DATA"
  - "Avro"
---

# BigQuery LOAD DATA SQL statement

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

The LOAD DATA SQL statement now supports loading Avro, CSV, newline-delimited JSON, JSON, ORC, and Parquet files into tables.

## Extended Definition

BigQuery's `LOAD DATA` SQL statement is used to load external files into BigQuery tables or partitions. It supports loading files in AVRO, CSV, NEWLINE DELIMITED JSON (or JSON), ORC, and PARQUET formats, with DELTA LAKE listed as preview-supported. The statement can create a table during load, or append to or overwrite existing table/partition data, and it supports providing a schema or using schema auto-detection for supported formats.

## Evidence Summary

The BigQuery tables and SQL DDL reference pages both document `LOAD DATA` and explicitly list accepted source formats plus table/partition loading modes and schema handling.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Supported values for LOAD DATA include: AVRO , CSV , DELTA LAKE ( preview ) NEWLINE DELIMITED JSON (or JSON ), ORC , PARQUET .
- Create a table when you load data When you load data into BigQuery, you can load data into a new table or partition, you can append data to an existing table or partition, or you can overwrite a table or partition.
- Supported values for CREATE EXTERNAL TABLE include: AVRO , CLOUD BIGTABLE , CSV , DATASTORE BACKUP , DELTA LAKE ( preview ), GOOGLE SHEETS , NEWLINE DELIMITED JSON (or JSON ), ORC , PARQUET .
- When you load data into BigQuery, you can supply the table or partition schema, or for supported data formats, you can use schema auto-detection .

### "Class AvroOptions.Builder (2.62.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.AvroOptions.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.AvroOptions.Builder)
- Source ID: `site-java-reference`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: The page is API-reference documentation for a Java client method to set Avro logical type interpretation and does not define or document the LOAD DATA SQL statement feature.

Evidence snippets:
- Builder Inheritance java.lang.Object > AvroOptions.Builder Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods build() public AvroOptions build () Creates a AvroOptions object.
- Parameter Name Description useAvroLogicalTypes boolean Returns Type Description AvroOptions.Builder Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- 2.62.0 (latest) 2.61.0 2.60.0 2.59.0 2.58.0 2.57.2 2.56.0 2.55.3 2.54.2 2.53.0 2.52.0 2.51.0 2.50.1 2.49.0 2.48.1 2.47.0 2.46.0 2.45.0 2.44.0 2.43.3 2.42.3 2.41.0 2.40.3 2.39.1 2.38.2 2.37.2 2.36.0 2.35.0 2.34.2 2.33.2 public static final class AvroOptions .
- Builder setUseAvroLogicalTypes ( boolean useAvroLogicalTypes ) [Optional] Sets whether BigQuery should interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Supported values for LOAD DATA include: AVRO , CSV , DELTA LAKE ( preview ) NEWLINE DELIMITED JSON (or JSON ), ORC , PARQUET .
- Last modified Schema Total Rows Total Bytes Expiration Time Partitioning Clustered Fields Total Logical ----------------- --------------------------- ------------ ------------- ------------ ------------------- ------------------ --------------- 31 Oct 17:34:31 - l orderkey: integer 3086653 210767042 210767042 - l partkey: integer - l suppkey: integer - l commitdate: date - l shipdate: date - l receiptdate: date - l shipinstruct: string - l shipmode: string Now, using the CREATE TABLE AS SELECT statement you can selectively load data to the myotherdataset.orders table in the US multi-region: CREATE OR REPLACE TABLE myotherdataset . orders PARTITION BY DATE TRUNC ( l commitdate , YEAR ) AS SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1992 ; Note: If you get a ResourceExhausted error, retry after some time.
- CREATE TEMP TABLE Example ( x INT64 , y STRING ); INSERT INTO Example VALUES ( 5 , 'foo' ); INSERT INTO Example VALUES ( 6 , 'bar' ); SELECT FROM Example ; This script returns the following output: +-----+---+-----+ Row x y +-----+--- -----+ 1 5 foo 2 6 bar +-----+--- -----+ Load data across clouds Example 1 Suppose you have a BigLake table named myawsdataset.orders that references data from Amazon S3 .
- Supported values for CREATE EXTERNAL TABLE include: AVRO , CLOUD BIGTABLE , CSV , DATASTORE BACKUP , DELTA LAKE ( preview ), GOOGLE SHEETS , NEWLINE DELIMITED JSON (or JSON ), ORC , PARQUET .

