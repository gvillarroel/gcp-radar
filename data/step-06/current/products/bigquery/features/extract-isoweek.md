---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.892Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "EXTRACT ISOWEEK"
feature_slug: "extract-isoweek"
latest_feature_date: "2017-08-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions"
keywords:
  - "ISOWEEK extraction"
  - "EXTRACT date part ISOWEEK"
  - "ISO week value"
  - "ISOWEEK date part"
  - "EXTRACT(ISOWEEK"
  - "ISOWEEK"
---

# EXTRACT ISOWEEK

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL now supports the ISOWEEK date part in the EXTRACT function.

## Extended Definition

BigQuery Standard SQL now supports the ISOWEEK date part in the EXTRACT function.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions)

## Supporting Pages

### Date functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: WEAK
- Re-rank rationale: While this is a date-function reference page that could include supported EXTRACT date parts, the excerpt does not specifically state ISOWEEK availability.

Evidence snippets:
- SELECT date , EXTRACT ( ISOYEAR FROM date ) AS isoyear , EXTRACT ( ISOWEEK FROM date ) AS isoweek , EXTRACT ( YEAR FROM date ) AS year , EXTRACT ( WEEK FROM date ) AS week FROM UNNEST ( GENERATE DATE ARRAY ( '2015-12-23' , '2016-01-09' )) AS date ORDER BY date ; / ------------+---------+---------+------+------+ date isoyear isoweek year week +------------+---------+---------+------+------+ 2015-12-23 2015 52 2015 51 2015-12-24 2015 52 2015 51 2015-12-25 2015 52 2015 51 2015-12-26 2015 52 2015 51 2015-12-27 2015 52 2015 52 2015-12-28 2015 53 2015 52 2015-12-29 2015 53 2015 52 2015-12-30 2015 53 2015 52 2015-12-31 2015 53 2015 52 2016-01-01 2015 53 2016 0 2016-01-02 2015 53 2016 0 2016-01-03 2015 53 2016 1 2016-01-04 2016 1 2016 1 2016-01-05 2016 1 2016 1 2016-01-06 2016 1 2016 1 2016-01-07 2016 1 2016 1 2016-01-08 2016 1 2016 1 2016-01-09 2016 1 2016 1 +------------+---------+---------+------+------ / In the following example, date expression falls on a Sunday.
- SELECT DATE DIFF ( '2017-12-18' , '2017-12-17' , WEEK ) AS week diff , DATE DIFF ( '2017-12-18' , '2017-12-17' , WEEK ( MONDAY )) AS week weekday diff , DATE DIFF ( '2017-12-18' , '2017-12-17' , ISOWEEK ) AS isoweek diff ; / -----------+-------------------+--------------+ week diff week weekday diff isoweek diff +-----------+-------------------+--------------+ 0 1 1 +-----------+-------------------+-------------- / DATE FROM UNIX DATE DATE FROM UNIX DATE ( int64 expression ) Description Interprets int64 expression as the number of days since 1970-01-01.
- Time zone part definitions MINUTE HOUR DAY WEEK WEEK(<WEEKDAY>) ISOWEEK MONTH QUARTER YEAR ISOYEAR Details The resulting value is always rounded to the beginning of granularity .
- The first ISOWEEK of each ISO year begins on the Monday before the first Thursday of the Gregorian calendar year.

