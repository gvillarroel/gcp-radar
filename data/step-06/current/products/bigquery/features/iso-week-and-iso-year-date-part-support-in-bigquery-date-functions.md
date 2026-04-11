---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.883Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ISO week and ISO year date-part support in BigQuery date functions"
feature_slug: "iso-week-and-iso-year-date-part-support-in-bigquery-date-functions"
latest_feature_date: "2018-01-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
keywords:
  - "DATETIME_DIFF"
  - "DATE_DIFF"
  - "DATETIME_TRUNC"
  - "ISO week"
  - "ISO year"
  - "TIMESTAMP_TRUNC"
  - "DATE_TRUNC"
  - "ISOWEEK"
---

# ISO week and ISO year date-part support in BigQuery date functions

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports ISOWEEK and ISOYEAR date parts in DATE_TRUNC, DATETIME_TRUNC, TIMESTAMP_TRUNC, DATE_DIFF, and DATETIME_DIFF.

## Extended Definition

BigQuery now supports ISOWEEK and ISOYEAR date parts in DATE_TRUNC, DATETIME_TRUNC, TIMESTAMP_TRUNC, DATE_DIFF, and DATETIME_DIFF.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)

## Supporting Pages

### Date functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: This is a date-function reference page, so it may document supported date parts, but the excerpt only lists functions and does not explicitly mention ISO year or ISO week semantics.

Evidence snippets:
- DATE DIFF with the date part ISOWEEK also returns 1 because ISO weeks begin on Monday.
- SELECT DATE DIFF ( '2017-12-18' , '2017-12-17' , WEEK ) AS week diff , DATE DIFF ( '2017-12-18' , '2017-12-17' , WEEK ( MONDAY )) AS week weekday diff , DATE DIFF ( '2017-12-18' , '2017-12-17' , ISOWEEK ) AS isoweek diff ; / -----------+-------------------+--------------+ week diff week weekday diff isoweek diff +-----------+-------------------+--------------+ 0 1 1 +-----------+-------------------+-------------- / DATE FROM UNIX DATE DATE FROM UNIX DATE ( int64 expression ) Description Interprets int64 expression as the number of days since 1970-01-01.
- However, DATE TRUNC with the ISOYEAR date part truncates the date expression to the beginning of the ISO year, not the Gregorian calendar year.
- The first ISOWEEK of each ISO year begins on the Monday before the first Thursday of the Gregorian calendar year.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Last modified Schema Total Rows Total Bytes Expiration Time Partitioning Clustered Fields Total Logical ----------------- --------------------------- ------------ ------------- ------------ ------------------- ------------------ --------------- 31 Oct 17:34:31 - l orderkey: integer 3086653 210767042 210767042 - l partkey: integer - l suppkey: integer - l commitdate: date - l shipdate: date - l receiptdate: date - l shipinstruct: string - l shipmode: string Now, using the CREATE TABLE AS SELECT statement you can selectively load data to the myotherdataset.orders table in the US multi-region: CREATE OR REPLACE TABLE myotherdataset . orders PARTITION BY DATE TRUNC ( l commitdate , YEAR ) AS SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1992 ; Note: If you get a ResourceExhausted error, retry after some time.
- CREATE TABLE mydataset . myclusteredtable ( input timestamp TIMESTAMP , customer id STRING , transaction amount NUMERIC ) PARTITION BY TIMESTAMP TRUNC ( input timestamp , HOUR ) CLUSTER BY customer id OPTIONS ( partition expiration days = 3 , description = "a table clustered by customer id" ) If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- TIMESTAMP TRUNC(<timestamp column>, { DAY HOUR MONTH YEAR }) .
- DATETIME TRUNC(<datetime column>, { DAY HOUR MONTH YEAR }) .

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- DATETIME DIFF Gets the number of unit boundaries between two DATETIME values at a particular time granularity.
- DATE DIFF Gets the number of unit boundaries between two DATE values at a particular time granularity.
- DATE TRUNC Truncates a DATE , DATETIME , or TIMESTAMP value at a particular granularity.
- TIMESTAMP TRUNC Truncates a TIMESTAMP or DATETIME value at a particular granularity.

