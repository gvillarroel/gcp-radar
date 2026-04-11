---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.761Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "INFORMATION_SCHEMA DDL column support"
feature_slug: "information-schema-ddl-column-support"
latest_feature_date: "2021-11-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
keywords:
  - "INFORMATION_SCHEMA.SCHEMATA"
  - "INFORMATION_SCHEMA.ROUTINES"
  - "system metadata columns"
  - "INFORMATION_SCHEMA.TABLES"
  - "INFORMATION_SCHEMA views"
  - "metadata view columns"
  - "DDL metadata"
  - "DDL column"
---

# INFORMATION_SCHEMA DDL column support

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery INFORMATION_SCHEMA views now expose a DDL column for routines, schemata, and tables metadata views.

## Extended Definition

BigQuery INFORMATION_SCHEMA views now expose a DDL column for routines, schemata, and tables metadata views.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- For readability, some columns are excluded from the result. +--------------+------------+--------------------+-------------------+-----------------+---------------------+ table name table type base table catalog base table schema base table name snapshot time ms +--------------+------------+--------------------+-------------------+-----------------+---------------------+ items clone CLONE myproject mydataset items 2018-10-31 22:40:05 orders bk SNAPSHOT myproject mydataset orders 2018-11-01 08:22:39 +--------------+------------+--------------------+-------------------+-----------------+---------------------+ Example 3: The following example retrieves table name and ddl columns from the INFORMATION SCHEMA.TABLES view for the population by zip 2010 table in the census bureau usa dataset.
- For readability, some columns are excluded from the result. +----------------+---------------+----------------+------------+--------------------+---------------------+---------------------------------------------+ table catalog table schema table name table type is insertable into creation time ddl +----------------+---------------+----------------+------------+--------------------+---------------------+---------------------------------------------+ myproject mydataset mytable1 BASE TABLE YES 2018-10-29 20:34:44 CREATE TABLE myproject.mydataset.mytable1 ( id INT64 ); myproject mydataset myview1 VIEW NO 2018-12-29 00:19:20 CREATE VIEW myproject.mydataset.myview1 AS SELECT 100 as id; +----------------+---------------+----------------+------------+--------------------+---------------------+---------------------------------------------+ Example 2: The following example retrieves table metadata for all tables of type CLONE or SNAPSHOT from the INFORMATION SCHEMA.TABLES view.
- The metadata that's returned is for all types of tables in mydataset in your default project. mydataset contains the following tables: mytable1 : a standard BigQuery table myview1 : a BigQuery view To run the query against a project other than your default project, add the project ID to the dataset in the following format: project id . dataset .INFORMATION SCHEMA. view ; for example, myproject.mydataset.INFORMATION SCHEMA.TABLES .
- Because the table you're querying is in another project, the bigquery-public-data project, you add the project ID to the dataset in the following format: project id . dataset .INFORMATION SCHEMA. view ; for example, bigquery-public-data.census bureau usa.INFORMATION SCHEMA.TABLES .

### "Query multiple tables using a wildcard table \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- However, the following query does not limit the scan based on the second filter condition, TABLE SUFFIX = (SELECT SUBSTR(MAX(table name), LENGTH('gsod19') + 1) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%') , because it is a dynamic expression: #standardSQL Scans all tables with names that fall between gsod1940 and gsod1960 SELECT ROUND (( max - 32 ) 5 / 9 , 1 ) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX BETWEEN '40' AND '60' AND TABLE SUFFIX = ( SELECT SUBSTR ( MAX ( table name ), LENGTH ( 'gsod19' ) + 1 ) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' ) As a workaround, you can perform two separate queries instead; for example: First query: standardSQL Get the list of tables that match the required table name prefixes SELECT SUBSTR(MAX(table name), LENGTH('gsod19') + 1) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' Second query: standardSQL Construct the second query based on the values from the first query SELECT ROUND((max-32) 5/9,1) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX = '49' These example queries use the INFORMATION SCHEMA.TABLES view.
- For example, the following query does not limit the tables scanned for the wildcard table bigquery-public-data.noaa gsod.gsod19 because the filter uses the dynamic value of the table id column: #standardSQL Scans all tables that match the prefix gsod19 SELECT ROUND (( max - 32 ) 5 / 9 , 1 ) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX = ( SELECT SUBSTR ( MAX ( table name ), LENGTH ( 'gsod19' ) + 1 ) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' ) As another example, the following query limits the scan based on the first filter condition, TABLE SUFFIX BETWEEN '40' and '60' , because it is a constant expression.

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- INFORMATION SCHEMA storage calculations don't match billing Use the INFORMATION SCHEMA.TABLE STORAGE USAGE TIMELINE view instead of INFORMATION SCHEMA.TABLE STORAGE - TABLE STORAGE USAGE TIMELINE provides more accurate and granular data to correctly calculate storage costs The queries run on INFORMATION SCHEMA views don't include taxes, adjustments, and rounding errors—take these into account when comparing the data.
- After identifying the corresponding SKUs, use the INFORMATION SCHEMA views to identify the specific resources associated with these charges, for example: If you are charged for on-demand analysis, look into the INFORMATION SCHEMA.JOBS view examples to determine jobs driving costs and users who launched them.
- Data presented in the INFORMATION SCHEMA views is in UTC, whereas billing report data is reported in the US and Canadian Pacific Time (UTC-8).
- You can use the INFORMATION SCHEMA views to determine the storage billing model that works best based on your usage patterns .

