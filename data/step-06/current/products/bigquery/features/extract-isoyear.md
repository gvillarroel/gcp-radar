---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.893Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "EXTRACT ISOYEAR"
feature_slug: "extract-isoyear"
latest_feature_date: "2017-08-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions"
keywords:
  - "ISO calendar year part"
  - "ISOYEAR extraction"
  - "EXTRACT date part ISOYEAR"
  - "ISOYEAR date part"
  - "EXTRACT(ISOYEAR"
  - "ISOYEAR"
---

# EXTRACT ISOYEAR

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL now supports the ISOYEAR date part in the EXTRACT function.

## Extended Definition

BigQuery Standard SQL now supports the ISOYEAR date part in the EXTRACT function.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions)

## Supporting Pages

### Date functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: WEAK
- Re-rank rationale: EXTRACT is listed as a supported date function here, but ISOYEAR support is not shown in the provided excerpt.

Evidence snippets:
- SELECT date , EXTRACT ( ISOYEAR FROM date ) AS isoyear , EXTRACT ( ISOWEEK FROM date ) AS isoweek , EXTRACT ( YEAR FROM date ) AS year , EXTRACT ( WEEK FROM date ) AS week FROM UNNEST ( GENERATE DATE ARRAY ( '2015-12-23' , '2016-01-09' )) AS date ORDER BY date ; / ------------+---------+---------+------+------+ date isoyear isoweek year week +------------+---------+---------+------+------+ 2015-12-23 2015 52 2015 51 2015-12-24 2015 52 2015 51 2015-12-25 2015 52 2015 51 2015-12-26 2015 52 2015 51 2015-12-27 2015 52 2015 52 2015-12-28 2015 53 2015 52 2015-12-29 2015 53 2015 52 2015-12-30 2015 53 2015 52 2015-12-31 2015 53 2015 52 2016-01-01 2015 53 2016 0 2016-01-02 2015 53 2016 0 2016-01-03 2015 53 2016 1 2016-01-04 2016 1 2016 1 2016-01-05 2016 1 2016 1 2016-01-06 2016 1 2016 1 2016-01-07 2016 1 2016 1 2016-01-08 2016 1 2016 1 2016-01-09 2016 1 2016 1 +------------+---------+---------+------+------ / In the following example, date expression falls on a Sunday.
- SELECT DATE TRUNC ( '2015-06-15' , ISOYEAR ) AS isoyear boundary , EXTRACT ( ISOYEAR FROM DATE '2015-06-15' ) AS isoyear number ; / ------------------+----------------+ isoyear boundary isoyear number +------------------+----------------+ 2014-12-29 2015 +------------------+---------------- / EXTRACT EXTRACT ( part FROM date expression ) Description Returns the value corresponding to the specified date part.
- However, DATE TRUNC with the ISOYEAR date part truncates the date expression to the beginning of the ISO year, not the Gregorian calendar year.
- SELECT DATE DIFF ( '2017-12-30' , '2014-12-30' , YEAR ) AS year diff , DATE DIFF ( '2017-12-30' , '2014-12-30' , ISOYEAR ) AS isoyear diff ; / -----------+--------------+ year diff isoyear diff +-----------+--------------+ 3 2 +-----------+-------------- / The following example shows the result of DATE DIFF for two days in succession.

