---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.869Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "WEEK date part support in EXTRACT"
feature_slug: "week-date-part-support-in-extract"
latest_feature_date: "2017-11-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions"
  - "https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function"
keywords:
  - "week"
  - "date"
  - "part"
  - "extract"
  - "bigquery"
  - "supports"
  - "standard"
  - "sql"
---

# WEEK date part support in EXTRACT

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports WEEK as a date part for the EXTRACT function; BigQuery standard SQL supports WEEK as a date part for the EXTRACT function.

## Extended Definition

BigQuery supports WEEK as a date part for the EXTRACT function; BigQuery standard SQL supports WEEK as a date part for the EXTRACT function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions)
- [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)

## Supporting Pages

### Date functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- LAST DAY supports the following values for date part : YEAR QUARTER MONTH WEEK .
- DATE ADD supports the following date part values: DAY WEEK .
- DATE SUB supports the following date part values: DAY WEEK .
- SELECT date , EXTRACT ( ISOYEAR FROM date ) AS isoyear , EXTRACT ( ISOWEEK FROM date ) AS isoweek , EXTRACT ( YEAR FROM date ) AS year , EXTRACT ( WEEK FROM date ) AS week FROM UNNEST ( GENERATE DATE ARRAY ( '2015-12-23' , '2016-01-09' )) AS date ORDER BY date ; / ------------+---------+---------+------+------+ date isoyear isoweek year week +------------+---------+---------+------+------+ 2015-12-23 2015 52 2015 51 2015-12-24 2015 52 2015 51 2015-12-25 2015 52 2015 51 2015-12-26 2015 52 2015 51 2015-12-27 2015 52 2015 52 2015-12-28 2015 53 2015 52 2015-12-29 2015 53 2015 52 2015-12-30 2015 53 2015 52 2015-12-31 2015 53 2015 52 2016-01-01 2015 53 2016 0 2016-01-02 2015 53 2016 0 2016-01-03 2015 53 2016 1 2016-01-04 2016 1 2016 1 2016-01-05 2016 1 2016 1 2016-01-06 2016 1 2016 1 2016-01-07 2016 1 2016 1 2016-01-08 2016 1 2016 1 2016-01-09 2016 1 2016 1 +------------+---------+---------+------+------ / In the following example, date expression falls on a Sunday.

### "Deploy and apply a remote function using BigQuery DataFrames \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)
- Source ID: `site-docs-reference-required-15`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery remote function created to support the BigQuery DataFrames remote function can be located via a property bigframes remote function set in the remote function object. print ( f "Created BQ remote function: { get bucket . bigframes remote function } " ) The cloud function can be located via another property bigframes cloud function set in the remote function object. print ( f "Created cloud function: { get bucket . bigframes cloud function } " ) Warning: The deployed cloud function may be visible to other users with sufficient privilege in the project, so the user should be careful about having any sensitive data in the code that will be deployed as a remote function.
- One can find more details about the usage and the requirements via help command. help ( bpd . remote function ) Read a table and inspect the column of interest. df = bpd . read gbq ( "bigquery-public-data.ml datasets.penguins" ) df [ "body mass g" ] . head ( 10 ) Define a custom function, and specify the intent to turn it into a remote function.
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Set BigQuery DataFrames options bpd . options . bigquery . project = your gcp project id bpd . options . bigquery . location = "US" BigQuery DataFrames gives you the ability to turn your custom scalar functions into a BigQuery remote function.
- For that, there is a google cloud function deployed by serializing the user code, and a BigQuery remote function created to call the cloud function via the latter's http endpoint on the data in the DataFrame.

### "Forecast multiple time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model group OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 5 ) AS SELECT start station name , EXTRACT ( DATE from starttime ) AS date , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips WHERE start station name LIKE '%Central Park%' GROUP BY start station name , date ; The query takes approximately 24 seconds to complete, after which you can access the nyc citibike arima model group model.
- Go to BigQuery In the query editor, paste in the following query and click Run : SELECT EXTRACT ( DATE from starttime ) AS date , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips GROUP BY date ; When the query completes, click Open in > Data Studio .
- For more information, see Set up ADC for a local development environment . explain = model . predict explain ( horizon = 3 , confidence level = 0.9 ) print ( explain . peek ( 5 )) Expected output: time series timestamp start station name time series type time series data time series adjusted data standard error confidence level prediction interval lower bound prediction interval upper bound trend seasonal period yearly seasonal period quarterly seasonal period monthly seasonal period weekly seasonal period daily holiday effect spikes and dips step changes residual 0 2013-07-01 00:00:00+00:00 Central Park S & 6 Ave history 69.0 154.168527 32.572948 <NA> <NA> <NA> 0.0 35.477484 <NA> <NA> -28.402102 <NA> <NA> 0.0 -85.168527 147.093145 1 2013-07-01 00:00:00+00:00 Grand Army Plaza & Central Park S history 79.0 79.0 24.982769 <NA> <NA> <NA> 0.0 43.46428 <NA> <NA> -30.01599 <NA> <NA> 0.0 0.0 65.55171 2 2013-07-02 00:00:00+00:00 Central Park S & 6 Ave history 180.0 204.045651 32.572948 <NA> <NA> <NA> 147.093045 72.498327 <NA> <NA> -15.545721 <NA> <NA> 0.0 -85.168527 61.122876 3 2013-07-02 00:00:00+00:00 Grand Army Plaza & Central Park S history 129.0 99.556269 24.982769 <NA> <NA> <NA> 65.551665 45.836432 <NA> <NA> -11.831828 <NA> <NA> 0.0 0.0 29.443731 4 2013-07-03 00:00:00+00:00 Central Park S & 6 Ave history 115.0 205.968236 32.572948 <NA> <NA> <NA> 191.32754 59.220766 <NA> <NA> -44.580071 <NA> <NA> 0.0 -85.168527 -5.799709 The output rows are ordered first by time series timestamp , then chronologically by the start station name column value.
- To create the model, you need the following permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData To run inference, you need the following permissions: bigquery.models.getData bigquery.jobs.create For more information about IAM roles and permissions in BigQuery, see Introduction to IAM .

