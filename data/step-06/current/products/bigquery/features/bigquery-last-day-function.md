---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.807Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery LAST_DAY function"
feature_slug: "bigquery-last-day-function"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
keywords:
  - "date truncation function"
  - "last day of interval"
  - "LAST_DAY(date_expression)"
  - "LAST_DAY function"
  - "LAST_DAY()"
  - "LAST_DAY"
---

# BigQuery LAST_DAY function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery standard SQL added support for the LAST_DAY function and marked it generally available.

## Extended Definition

BigQuery standard SQL added support for the LAST_DAY function and marked it generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)

## Supporting Pages

### Date functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: STRONG
- Re-rank rationale: The function list explicitly includes LAST DAY, and this is the canonical reference page for BigQuery date function behavior.

Evidence snippets:
- Return Data Type STRING Examples SELECT FORMAT DATE ( '%x' , DATE '2008-12-25' ) AS US format ; / ------------+ US format +------------+ 12/25/08 +------------ / SELECT FORMAT DATE ( '%b-%d-%Y' , DATE '2008-12-25' ) AS formatted ; / -------------+ formatted +-------------+ Dec-25-2008 +------------- / SELECT FORMAT DATE ( '%b %Y' , DATE '2008-12-25' ) AS formatted ; / -------------+ formatted +-------------+ Dec 2008 +------------- / LAST DAY LAST DAY ( date expression [ , date part ] ) Description Returns the last day from a date expression.
- Return Data Type DATE Example These both return the last day of the month: SELECT LAST DAY ( DATE '2008-11-25' , MONTH ) AS last day / ------------+ last day +------------+ 2008-11-30 +------------ / SELECT LAST DAY ( DATE '2008-11-25' ) AS last day / ------------+ last day +------------+ 2008-11-30 +------------ / This returns the last day of the year: SELECT LAST DAY ( DATE '2008-11-25' , YEAR ) AS last day / ------------+ last day +------------+ 2008-12-31 +------------ / This returns the last day of the week for a week that starts on a Sunday: SELECT LAST DAY ( DATE '2008-11-10' , WEEK ( SUNDAY )) AS last day / ------------+ last day +------------+ 2008-11-15 +------------ / This returns the last day of the week for a week that starts on a Monday: SELECT LAST DAY ( DATE '2008-11-10' , WEEK ( MONDAY )) AS last day / ------------+ last day +------------+ 2008-11-16 +------------ / PARSE DATE PARSE DATE ( format string , date string ) Description Converts a STRING value to a DATE value.
- MONTH QUARTER YEAR Special handling is required for MONTH, QUARTER, and YEAR parts when the date is at (or near) the last day of the month.
- MONTH QUARTER YEAR Special handling is required for MONTH, QUARTER, and YEAR parts when the date is at (or near) the last day of the month.

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- LAST DAY Gets the last day in a specified time period that contains a DATETIME value.
- LAST DAY Gets the last day in a specified time period that contains a DATE value.

