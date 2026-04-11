---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.956Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "TIMESTAMP Data Type"
feature_slug: "timestamp-data-type"
latest_feature_date: "2013-03-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
keywords:
  - "native TIMESTAMP support"
  - "TIMESTAMP field type"
  - "CREATE TABLE TIMESTAMP"
  - "standard SQL TIMESTAMP"
  - "TIMESTAMP data type"
  - "TIMESTAMP columns"
  - "timestamp column"
  - "TIMESTAMP type"
---

# TIMESTAMP Data Type

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Added native TIMESTAMP data type support in BigQuery.

## Extended Definition

Added native TIMESTAMP data type support in BigQuery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)

## Supporting Pages

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- When you load JSON or CSV data, values in TIMESTAMP columns must use a dash ( - ) or slash ( / ) separator for the date portion of the timestamp, and the date must be in one of the following formats: YYYY-MM-DD (year-month-day) or YYYY/MM/DD (year/month/day).
- The expiration time evaluates to the partition's UTC date plus the integer value. --time partitioning field : The DATE or TIMESTAMP column used to create a partitioned table.
- Schema autodetection will also decide TIMESTAMP column type based on this format instead of the existing format.
- Schema autodetection will also decide TIMESTAMP column type based on this format instead of the existing format.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- The table is a partitioned table , partitioned by a truncated TIMESTAMP column and clustered by a STRING column named customer id .
- Schema autodetection will also decide TIMESTAMP column type based on this format instead of the existing format.
- Partition by a TIMESTAMP column with the specified partitioning type.
- TIMESTAMP TRUNC(<timestamp column>, { DAY HOUR MONTH YEAR }) .

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Example: SELECT DATEDIFF(TIMESTAMP('2012-10-02 05:23:48'), TIMESTAMP('2011-06-24 12:18:35')); Returns: 466 Example: SELECT DATEDIFF(TIMESTAMP('2011-06-24 12:18:35'), TIMESTAMP('2012-10-02 05:23:48')); Returns: -466 DAY( <timestamp> ) Returns the day of the month of a TIMESTAMP data type as an integer between 1 and 31, inclusively.
- Example: SELECT DATE ADD(TIMESTAMP("2012-10-01 02:03:04"), 5, "YEAR"); Returns: 2017-10-01 02:03:04 UTC SELECT DATE ADD(TIMESTAMP("2012-10-01 02:03:04"), -5, "YEAR"); Returns: 2007-10-01 02:03:04 UTC DATEDIFF( <timestamp1> , <timestamp2> ) Returns the number of days between two TIMESTAMP data types.
- Example: SELECT SEC TO TIMESTAMP(1355968987); Returns: 2012-12-20 02:03:07 UTC SELECT SEC TO TIMESTAMP(INTEGER(1355968984 + 3)); Returns: 2012-12-20 02:03:07 UTC SECOND( <timestamp> ) Returns the seconds of a TIMESTAMP data type as an integer between 0 and 59, inclusively.
- Example: SELECT DAY(TIMESTAMP('2012-10-02 05:23:48')); Returns: 2 DAYOFWEEK( <timestamp> ) Returns the day of the week of a TIMESTAMP data type as an integer between 1 (Sunday) and 7 (Saturday), inclusively.

