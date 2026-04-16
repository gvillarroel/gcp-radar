---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.879Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ISOYEAR date part support in EXTRACT"
feature_slug: "isoyear-date-part-support-in-extract"
latest_feature_date: "2017-08-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "isoyear"
  - "date"
  - "part"
  - "extract"
  - "bigquery"
  - "standard"
  - "sql"
  - "supports"
---

# ISOYEAR date part support in EXTRACT

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery standard SQL supports ISOYEAR as a date part for the EXTRACT function.

## Extended Definition

BigQuery standard SQL supports ISOYEAR as a date part for the EXTRACT function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Date functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SELECT DATE TRUNC ( '2015-06-15' , ISOYEAR ) AS isoyear boundary , EXTRACT ( ISOYEAR FROM DATE '2015-06-15' ) AS isoyear number ; / ------------------+----------------+ isoyear boundary isoyear number +------------------+----------------+ 2014-12-29 2015 +------------------+---------------- / EXTRACT EXTRACT ( part FROM date expression ) Description Returns the value corresponding to the specified date part.
- SELECT date , EXTRACT ( ISOYEAR FROM date ) AS isoyear , EXTRACT ( ISOWEEK FROM date ) AS isoweek , EXTRACT ( YEAR FROM date ) AS year , EXTRACT ( WEEK FROM date ) AS week FROM UNNEST ( GENERATE DATE ARRAY ( '2015-12-23' , '2016-01-09' )) AS date ORDER BY date ; / ------------+---------+---------+------+------+ date isoyear isoweek year week +------------+---------+---------+------+------+ 2015-12-23 2015 52 2015 51 2015-12-24 2015 52 2015 51 2015-12-25 2015 52 2015 51 2015-12-26 2015 52 2015 51 2015-12-27 2015 52 2015 52 2015-12-28 2015 53 2015 52 2015-12-29 2015 53 2015 52 2015-12-30 2015 53 2015 52 2015-12-31 2015 53 2015 52 2016-01-01 2015 53 2016 0 2016-01-02 2015 53 2016 0 2016-01-03 2015 53 2016 1 2016-01-04 2016 1 2016 1 2016-01-05 2016 1 2016 1 2016-01-06 2016 1 2016 1 2016-01-07 2016 1 2016 1 2016-01-08 2016 1 2016 1 2016-01-09 2016 1 2016 1 +------------+---------+---------+------+------ / In the following example, date expression falls on a Sunday.
- SELECT EXTRACT ( DAY FROM DATE '2013-12-25' ) AS the day ; / ---------+ the day +---------+ 25 +--------- / In the following example, EXTRACT returns values corresponding to different date parts from a column of dates near the end of the year.
- However, DATE TRUNC with the ISOYEAR date part truncates the date expression to the beginning of the ISO year, not the Gregorian calendar year.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Partner references BigQuery Continuous Query Keboola Integration with BigQuery Partner Advantage page Direct link Matillion Solution Matillion ETL Category ETL & Data Integration Description Matillion is a data integration and transformation tool for cloud data warehouses that enables data journey by extracting, migrating, and transforming data in the cloud, allowing businesses to obtain new insights and make better business decisions.
- Partner references Simplify and Automate BigQuery Data Security Adding Google BigQuery data sources Partner Advantage page Direct link Openlayer Solution Openlayer Category Data Governance, Security, & MDM Description Openlayer is an AI governance and observability platform that helps teams validate, track, and monitor machine learning models and AI systems.
- Partner references Bed Bath & Beyond uses Nexla for rapid data replication into BigQuery Top national retail chain uses Nexla Partner Advantage page Direct link Portable Solution Portable ETL Category ETL & Data Integration Description A cloud-based ELT (Extract, Load, Transform) platform that enables no-code data pipeline creation.
- Partner references Google BigQuery Dataset configuration Get up-to-date marketing data to Google BigQuery Partner Advantage page Direct link Gretel Solution Gretel Category ETL & Data Integration Description Gretel is a multimodal synthetic data platform that leverages advanced generative AI and privacy-enhancing technologies.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Last modified Schema Total Rows Total Bytes Expiration Time Partitioning Clustered Fields Total Logical ----------------- --------------------------- ------------ ------------- ------------ ------------------- ------------------ --------------- 31 Oct 17:34:31 - l orderkey: integer 3086653 210767042 210767042 - l partkey: integer - l suppkey: integer - l commitdate: date - l shipdate: date - l receiptdate: date - l shipinstruct: string - l shipmode: string Now, using the CREATE TABLE AS SELECT statement you can selectively load data to the myotherdataset.orders table in the US multi-region: CREATE OR REPLACE TABLE myotherdataset . orders PARTITION BY DATE TRUNC ( l commitdate , YEAR ) AS SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1992 ; Note: If you get a ResourceExhausted error, retry after some time.
- When new data is available, append the data of the 1993 year to the destination table using the INSERT INTO SELECT statement: INSERT INTO myotherdataset . orders SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1993 ; Example 2 The following example inserts data into an ingestion-time partitioned table: CREATE TABLE mydataset . orders ( id String , numeric id INT64 ) PARTITION BY PARTITIONDATE ; After creating a partitioned table, you can insert data into the ingestion-time partitioned table: INSERT INTO mydataset . orders ( PARTITIONTIME , id , numeric id ) SELECT TIMESTAMP ( "2023-01-01" ), id , numeric id , FROM mydataset . ordersof23 WHERE numeric id > 4000000 ; CREATE TABLE LIKE statement Creates a new table with all of the same metadata of another table.
- CREATE MATERIALIZED VIEW IF NOT EXISTS myproject . mydataset . new mv OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "new mv" , description = "a view that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] , enable refresh = false ) AS SELECT column 1 , column 2 , column 3 FROM myproject.mydataset.mytable The materialized view is defined using the following GoogleSQL query: SELECT column 1, column 2, column 3 FROM myproject.mydataset.mytable The materialized view option list specifies the: Expiration time: 48 hours from the time the view is created Friendly name: new mv Description: A view that expires in 2 days Label: org unit = development Refresh enabled: false Creating a materialized view with partitioning and clustering The following example creates a materialized view named new mv in mydataset , partitioned by the col datetime column and clustered by the col int column: CREATE MATERIALIZED VIEW myproject . mydataset . new mv PARTITION BY DATE ( col datetime ) CLUSTER BY col int AS SELECT col int , col datetime , COUNT ( 1 ) as cnt FROM myproject . mydataset . mv base table GROUP BY col int , col datetime The base table, mv base table , must also be partitioned by the col datetime column.

