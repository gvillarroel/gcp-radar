---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.580Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Query result chart visualization in BigQuery console"
feature_slug: "query-result-chart-visualization-in-bigquery-console"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console"
keywords:
  - "query"
  - "result"
  - "chart"
  - "visualization"
  - "bigquery"
  - "console"
  - "editor"
  - "tab"
---

# Query result chart visualization in BigQuery console

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery query editor Chart tab visualizes query results after a query runs.

## Extended Definition

The BigQuery query editor Chart tab visualizes query results after a query runs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console](https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console)

## Supporting Pages

### "Limit forecasted values for an ARIMA_PLUS time series model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- In the Query results pane, click the Visualization tab: The chart shows that the forecasted values for the daily total number of Citi Bike trips where start station id=79 are negative numbers, which isn't useful.
- The query results similar to the following: Use the Google Cloud console to chart the time series data.
- This option causes the model to only forecast values that are greater than 0, based on the values in the column specified by the time series data col argument, in this case num trips . #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' , forecast limit lower bound = 0 ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; Run the CREATE MODEL query to create and train your model: In the Google Cloud console, click the Compose new query button.
- Enter the following GoogleSQL query in the query editor. #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' , forecast limit lower bound = 0 ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; Click Run .

### "Forecast multiple time series with a TimesFM univariate model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- FORECAST ( ( SELECT TIMESTAMP TRUNC ( start date , HOUR ) as trip hour , COUNT ( ) as num trips FROM bigquery-public-data.san francisco bikeshare.bikeshare trips WHERE subscriber type = 'Subscriber' AND start date >= TIMESTAMP ( '2018-01-01' ) GROUP BY TIMESTAMP TRUNC ( start date , HOUR ) ), horizon => 720 , confidence level => 0.95 , timestamp col => 'trip hour' , data col => 'num trips' , output historical time series => true ); When the query is finished running, click the Visualization tab in the Query results pane.
- Follow these steps to chart the function output: In the Google Cloud console, go to the BigQuery page.
- FORECAST ( ( SELECT TIMESTAMP TRUNC ( start date , HOUR ) as trip hour , subscriber type , COUNT ( ) as num trips FROM bigquery-public-data.san francisco bikeshare.bikeshare trips WHERE start date >= TIMESTAMP ( '2018-01-01' ) GROUP BY TIMESTAMP TRUNC ( start date , HOUR ), subscriber type ), horizon => 720 , confidence level => 0.95 , timestamp col => 'trip hour' , data col => 'num trips' , id cols => [ 'subscriber type' ] ); The results look similar to the following: +---------------------+--------------------------+------------------+------------------+---------------------------------+---------------------------------+--------------------+ subscriber type forecast timestamp forecast value confidence level prediction interval lower bound prediction interval upper bound ai forecast status +---------------------+--------------------------+------------------+------------------+---------------------------------+---------------------------------+--------------------+ Subscriber 2018-05-01 00:00:00 UTC 26.3045959...
- FORECAST ( ( SELECT TIMESTAMP TRUNC ( start date , HOUR ) as trip hour , COUNT ( ) as num trips FROM bigquery-public-data.san francisco bikeshare.bikeshare trips WHERE subscriber type = 'Subscriber' AND start date >= TIMESTAMP ( '2018-01-01' ) GROUP BY TIMESTAMP TRUNC ( start date , HOUR ) ), horizon => 720 , confidence level => 0.95 , timestamp col => 'trip hour' , data col => 'num trips' ); The results look similar to the following: +-------------------------+-------------------+------------------+---------------------------------+---------------------------------+--------------------+ forecast timestamp forecast value confidence level prediction interval lower bound prediction interval upper bound ai forecast status +-------------------------+-------------------+------------------+---------------------------------+---------------------------------+--------------------+ 2018-05-01 00:00:00 UTC 26.3045959...

### Try BigQuery using the sandbox \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console](https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the query editor , enter the following query: SELECT start station name , start station latitude , start station longitude , ST GEOGPOINT ( start station longitude , start station latitude ) AS geo location , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips GROUP BY 1 , 2 , 3 ORDER BY num trips DESC LIMIT 100 ; If the query is valid, then a check mark appears along with the amount of data that the query processes.
- Go to BigQuery You can also open BigQuery in the Google Cloud console by entering the following URL in your browser: https://console.cloud.google.com/bigquery The Google Cloud console is the graphical interface that you use to create and manage BigQuery resources and to run SQL queries.
- To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Enable the BigQuery sandbox In the Google Cloud console, go to the BigQuery page.
- You are redirected back to the BigQuery page in the Google Cloud console.

