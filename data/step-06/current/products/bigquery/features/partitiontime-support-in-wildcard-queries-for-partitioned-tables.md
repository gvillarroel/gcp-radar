---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.884Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "_PARTITIONTIME support in wildcard queries for partitioned tables"
feature_slug: "partitiontime-support-in-wildcard-queries-for-partitioned-tables"
latest_feature_date: "2017-11-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "_PARTITIONTIME pseudo-column"
  - "_PARTITIONTIME wildcard"
  - "query partitioned tables with wildcard"
  - "_PARTITIONTIME"
  - "wildcard partition query"
  - "wildcard table names"
  - "wildcard table queries"
  - "FROM table* syntax"
---

# _PARTITIONTIME support in wildcard queries for partitioned tables

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports the _PARTITIONTIME pseudo column when querying partitioned tables with wildcard table names.

## Extended Definition

BigQuery now supports the _PARTITIONTIME pseudo column when querying partitioned tables with wildcard table names.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### "Query multiple tables using a wildcard table \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly covers wildcard queries on partitioned tables and filtering with PARTITIONTIME pseudocolumns.

Evidence snippets:
- For example, to find the maximum temperature reported in the years between 1929 and 1935 inclusive, use the table wildcard to represent the last two digits of the year: standardSQL SELECT max, ROUND((max-32) 5/9,1) celsius, mo, da, year FROM bigquery-public-data.noaa gsod.gsod19 WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX BETWEEN '29' and '35' ORDER BY max DESC Scanning a range of ingestion-time partitioned tables using PARTITIONTIME To scan a range of ingestion-time partitioned tables, use the PARTITIONTIME pseudocolumn with the TABLE SUFFIX pseudocolumn.
- For example, the following query scans the January 1, 2017 partition in the table my dataset.mytable id1 . standardSQL SELECT field1, field2, field3 FROM my dataset.mytable WHERE TABLE SUFFIX = 'id1' AND PARTITIONTIME = TIMESTAMP('2017-01-01') Querying all tables in a dataset To scan all tables in a dataset, you can use an empty prefix and the table wildcard, which means that the TABLE SUFFIX pseudocolumn contains full table names.
- Filters on the TABLE SUFFIX or PARTITIONTIME pseudocolumns that include JavaScript user-defined functions don't limit the number of tables scanned in a wildcard table.
- Limitations Wildcard table queries are subject to the following limitations.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- When new data is available, append the data of the 1993 year to the destination table using the INSERT INTO SELECT statement: INSERT INTO myotherdataset . orders SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1993 ; Example 2 The following example inserts data into an ingestion-time partitioned table: CREATE TABLE mydataset . orders ( id String , numeric id INT64 ) PARTITION BY PARTITIONDATE ; After creating a partitioned table, you can insert data into the ingestion-time partitioned table: INSERT INTO mydataset . orders ( PARTITIONTIME , id , numeric id ) SELECT TIMESTAMP ( "2023-01-01" ), id , numeric id , FROM mydataset . ordersof23 WHERE numeric id > 4000000 ; CREATE TABLE LIKE statement Creates a new table with all of the same metadata of another table.
- CREATE TABLE mydataset . myclusteredtable ( customer id STRING , transaction amount NUMERIC ) PARTITION BY DATE ( PARTITIONTIME ) CLUSTER BY customer id OPTIONS ( partition expiration days = 3 , description = "a table clustered by customer id" ) If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- TIMESTAMP TRUNC( PARTITIONTIME, { DAY HOUR MONTH YEAR }) .

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- The INFORMATION SCHEMA.COLUMNS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table also referred to as the datasetId . table name STRING The name of the table or view also referred to as the tableId . column name STRING The name of the column. ordinal position INT64 The 1-indexed offset of the column within the table; if it's a pseudo column such as PARTITIONTIME or PARTITIONDATE, the value is NULL . is nullable STRING YES or NO depending on whether the column's mode allows NULL values. data type STRING The column's GoogleSQL data type . is generated STRING The value is ALWAYS if the column is an automatically generated embedding column ; otherwise, the value is NEVER . generation expression STRING The value is the generation expression used to define the column if the column is an automatically generated embedding column; otherwise the value is NULL . is stored STRING The value is YES if the column is an automatically generated embedding column; otherwise, the value is NULL . is hidden STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is updatable STRING The value is always NULL . is system defined STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is partitioning column STRING YES or NO depending on whether the column is a partitioning column . clustering ordinal position INT64 The 1-indexed offset of the column within the table's clustering columns; the value is NULL if the table is not a clustered table. collation name STRING The name of the collation specification if it exists; otherwise, NULL .

