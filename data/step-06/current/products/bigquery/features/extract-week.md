---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.894Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "EXTRACT WEEK"
feature_slug: "extract-week"
latest_feature_date: "2017-08-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial"
keywords:
  - "WEEK extraction"
  - "week-of-year value"
  - "EXTRACT date part WEEK"
  - "WEEK date part"
  - "EXTRACT(WEEK"
  - "WEEK"
---

# EXTRACT WEEK

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL now supports the WEEK date part in the EXTRACT function.

## Extended Definition

BigQuery Standard SQL now supports the WEEK date part in the EXTRACT function.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)

## Supporting Pages

### Date functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: WEAK
- Re-rank rationale: The page includes EXTRACT in the date function list, which may define supported parts, but the excerpt does not explicitly document WEEK.

Evidence snippets:
- SELECT date , EXTRACT ( ISOYEAR FROM date ) AS isoyear , EXTRACT ( ISOWEEK FROM date ) AS isoweek , EXTRACT ( YEAR FROM date ) AS year , EXTRACT ( WEEK FROM date ) AS week FROM UNNEST ( GENERATE DATE ARRAY ( '2015-12-23' , '2016-01-09' )) AS date ORDER BY date ; / ------------+---------+---------+------+------+ date isoyear isoweek year week +------------+---------+---------+------+------+ 2015-12-23 2015 52 2015 51 2015-12-24 2015 52 2015 51 2015-12-25 2015 52 2015 51 2015-12-26 2015 52 2015 51 2015-12-27 2015 52 2015 52 2015-12-28 2015 53 2015 52 2015-12-29 2015 53 2015 52 2015-12-30 2015 53 2015 52 2015-12-31 2015 53 2015 52 2016-01-01 2015 53 2016 0 2016-01-02 2015 53 2016 0 2016-01-03 2015 53 2016 1 2016-01-04 2016 1 2016 1 2016-01-05 2016 1 2016 1 2016-01-06 2016 1 2016 1 2016-01-07 2016 1 2016 1 2016-01-08 2016 1 2016 1 2016-01-09 2016 1 2016 1 +------------+---------+---------+------+------ / In the following example, date expression falls on a Sunday.
- WITH table AS ( SELECT DATE ( '2017-11-05' ) AS date ) SELECT date , EXTRACT ( WEEK ( SUNDAY ) FROM date ) AS week sunday , EXTRACT ( WEEK ( MONDAY ) FROM date ) AS week monday FROM table ; / ------------+-------------+-------------+ date week sunday week monday +------------+-------------+-------------+ 2017-11-05 45 44 +------------+-------------+------------- / FORMAT DATE FORMAT DATE ( format string , date expr ) Description Formats a DATE value according to a specified format string.
- Return Data Type DATE Example These both return the last day of the month: SELECT LAST DAY ( DATE '2008-11-25' , MONTH ) AS last day / ------------+ last day +------------+ 2008-11-30 +------------ / SELECT LAST DAY ( DATE '2008-11-25' ) AS last day / ------------+ last day +------------+ 2008-11-30 +------------ / This returns the last day of the year: SELECT LAST DAY ( DATE '2008-11-25' , YEAR ) AS last day / ------------+ last day +------------+ 2008-12-31 +------------ / This returns the last day of the week for a week that starts on a Sunday: SELECT LAST DAY ( DATE '2008-11-10' , WEEK ( SUNDAY )) AS last day / ------------+ last day +------------+ 2008-11-15 +------------ / This returns the last day of the week for a week that starts on a Monday: SELECT LAST DAY ( DATE '2008-11-10' , WEEK ( MONDAY )) AS last day / ------------+ last day +------------+ 2008-11-16 +------------ / PARSE DATE PARSE DATE ( format string , date string ) Description Converts a STRING value to a DATE value.
- SELECT DATE DIFF ( '2017-12-18' , '2017-12-17' , WEEK ) AS week diff , DATE DIFF ( '2017-12-18' , '2017-12-17' , WEEK ( MONDAY )) AS week weekday diff , DATE DIFF ( '2017-12-18' , '2017-12-17' , ISOWEEK ) AS isoweek diff ; / -----------+-------------------+--------------+ week diff week weekday diff isoweek diff +-----------+-------------------+--------------+ 0 1 1 +-----------+-------------------+-------------- / DATE FROM UNIX DATE DATE FROM UNIX DATE ( int64 expression ) Description Interprets int64 expression as the number of days since 1970-01-01.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Example: SELECT UTC USEC TO MONTH(1274259481071200); Returns: 1272672000000000 UTC USEC TO WEEK( <unix timestamp> , <day of week> ) Returns a UNIX timestamp in microseconds that represents a day in the week of the unix timestamp argument.
- Example: SELECT UTC USEC TO WEEK(1207929480000000, 2) AS tuesday; Returns: 1207612800000000 UTC USEC TO YEAR( <unix timestamp> ) Returns a UNIX timestamp in microseconds that represents the year of the unix timestamp argument.
- Example: SELECT DAY(TIMESTAMP('2012-10-02 05:23:48')); Returns: 2 DAYOFWEEK( <timestamp> ) Returns the day of the week of a TIMESTAMP data type as an integer between 1 (Sunday) and 7 (Saturday), inclusively.
- Example: SELECT DAYOFWEEK(TIMESTAMP("2012-10-01 02:03:04")); Returns: 2 DAYOFYEAR( <timestamp> ) Returns the day of the year of a TIMESTAMP data type as an integer between 1 and 366, inclusively.

### "Forecast a single time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . ex pred = model . predict explain ( horizon = 30 , confidence level = 0.8 ) print ( ex pred . head ( 4 )) Expected output: time series timestamp time series type time series data time series adjusted data standard error confidence level prediction interval lower bound prediction interval upper bound trend seasonal period yearly seasonal period quarterly seasonal period monthly seasonal period weekly seasonal period daily holiday effect spikes and dips step changes residual 0 2016-08-01 00:00:00+00:00 history 1711.0 505.716474 206.939556 <NA> <NA> <NA> 0.0 <NA> <NA> <NA> 169.611938 <NA> <NA> <NA> 1205.283526 336.104536 1 2016-08-02 00:00:00+00:00 history 2140.0 623.137701 206.939556 <NA> <NA> <NA> 336.104428 <NA> <NA> <NA> 287.033273 <NA> <NA> <NA> 1205.283526 311.578773 2 2016-08-03 00:00:00+00:00 history 2890.0 1008.655091 206.939556 <NA> <NA> <NA> 563.514213 <NA> <NA> <NA> 445.140878 <NA> <NA> <NA> 1205.283526 676.061383 3 2016-08-04 00:00:00+00:00 history 3161.0 1389.40959 206.939556 <NA> <NA> <NA> 986.317236 <NA> <NA> <NA> 403.092354 <NA> <NA> <NA> 1205.283526 566.306884 4 2016-08-05 00:00:00+00:00 history 2702.0 1394.395741 206.939556 <NA> <NA> <NA> 1248.707386 <NA> <NA> <NA> 145.688355 <NA> <NA> <NA> 1205.283526 102.320733 5 2016-08-06 00:00:00+00:00 history 1663.0 437.09243 206.939556 <NA> <NA> <NA> 1188.59004 <NA> <NA> <NA> -751.49761 <NA> <NA> <NA> 1205.283526 20.624044 If you would like to visualize the results, you can use Looker Studio as described in the Visualize the input data section to create a chart, using the following columns as metrics: time series data prediction interval lower bound prediction interval upper bound trend seasonal period weekly step changes Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- The summary() function shows you the evaluation metrics of all the candidate models evaluated during the process of automatic hyperparameter tuning. summary = model . summary ( show all candidate models = True , ) print ( summary . peek ()) Expected output: row non seasonal p non seasonal d non seasonal q has drift log likelihood AIC variance seasonal periods has holiday effect has spikes and dips has step changes error message 0 0 1 3 True -2464.255656 4938.511313 42772.506055 ['WEEKLY'] False False True 1 2 1 0 False -2473.141651 4952.283303 44942.416463 ['WEEKLY'] False False True 2 1 1 0 False -2479.880885 4963.76177 46642.953433 ['WEEKLY'] False False True 3 0 1 1 False -2470.632377 4945.264753 44319.379307 ['WEEKLY'] False False True 4 2 1 1 True -2463.671247 4937.342493 42633.299513 ['WEEKLY'] False False True The non seasonal p , non seasonal d , non seasonal q , and has drift output columns define an ARIMA model in the training pipeline.
- The resulting chart looks similar to the following: Looking at the chart, you can see that the input time series has a weekly seasonal pattern.
- It reports a weekly pattern, which agrees with the results you saw if you chose to visualize the input data.

