---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.771Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Yearly time-unit partitioning"
feature_slug: "yearly-time-unit-partitioning"
latest_feature_date: "2020-09-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
  - "https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
keywords:
  - "yearly"
  - "time"
  - "unit"
  - "partitioning"
  - "bigquery"
  - "supports"
  - "creating"
  - "partitions"
---

# Yearly time-unit partitioning

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports creating time-unit partitions with yearly granularity.

## Extended Definition

BigQuery supports creating time-unit partitions with yearly granularity.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)

## Supporting Pages

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Select daily, hourly, monthly, or yearly partitioning When you partition a table by time-unit column or ingestion time, you choose whether the partitions have daily, hourly, monthly, or yearly granularity.
- Ingestion time partitioning When you create a table partitioned by ingestion time, BigQuery automatically assigns rows to partitions based on the time when BigQuery ingests the data.
- If you insert the following values into the table, the rows are written to the following partitions: Column value Partition (monthly) DATETIME("2019-01-01") 201901 DATETIME("2019-01-15") 201901 DATETIME("2019-04-30") 201904 In addition, two special partitions are created: NULL : Contains rows with NULL values in the partitioning column.
- If a query uses a qualifying filter on the value of the partitioning column, BigQuery can scan the partitions that match the filter and skip the remaining partitions.

### "Forecast a single time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . ex pred = model . predict explain ( horizon = 30 , confidence level = 0.8 ) print ( ex pred . head ( 4 )) Expected output: time series timestamp time series type time series data time series adjusted data standard error confidence level prediction interval lower bound prediction interval upper bound trend seasonal period yearly seasonal period quarterly seasonal period monthly seasonal period weekly seasonal period daily holiday effect spikes and dips step changes residual 0 2016-08-01 00:00:00+00:00 history 1711.0 505.716474 206.939556 <NA> <NA> <NA> 0.0 <NA> <NA> <NA> 169.611938 <NA> <NA> <NA> 1205.283526 336.104536 1 2016-08-02 00:00:00+00:00 history 2140.0 623.137701 206.939556 <NA> <NA> <NA> 336.104428 <NA> <NA> <NA> 287.033273 <NA> <NA> <NA> 1205.283526 311.578773 2 2016-08-03 00:00:00+00:00 history 2890.0 1008.655091 206.939556 <NA> <NA> <NA> 563.514213 <NA> <NA> <NA> 445.140878 <NA> <NA> <NA> 1205.283526 676.061383 3 2016-08-04 00:00:00+00:00 history 3161.0 1389.40959 206.939556 <NA> <NA> <NA> 986.317236 <NA> <NA> <NA> 403.092354 <NA> <NA> <NA> 1205.283526 566.306884 4 2016-08-05 00:00:00+00:00 history 2702.0 1394.395741 206.939556 <NA> <NA> <NA> 1248.707386 <NA> <NA> <NA> 145.688355 <NA> <NA> <NA> 1205.283526 102.320733 5 2016-08-06 00:00:00+00:00 history 1663.0 437.09243 206.939556 <NA> <NA> <NA> 1188.59004 <NA> <NA> <NA> -751.49761 <NA> <NA> <NA> 1205.283526 20.624044 If you would like to visualize the results, you can use Data Studio as described in the Visualize the input data section to create a chart, using the following columns as metrics: time series data prediction interval lower bound prediction interval upper bound trend seasonal period weekly step changes Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- Read and visualize the time series you want to forecast. df = bpd . read gbq ( "bigquery-public-data.google analytics sample.ga sessions " ) parsed date = bpd . to datetime ( df . date , format = "%Y%m %d " , utc = True ) parsed date . name = "parsed date" visits = df [ "totals" ] . struct . field ( "visits" ) visits . name = "total visits" total visits = visits . groupby ( parsed date ) . sum () Expected output: total visits.head() parsed date 2016-08-01 00:00:00+00:00 1711 2016-08-02 00:00:00+00:00 2140 2016-08-03 00:00:00+00:00 2890 2016-08-04 00:00:00+00:00 3161 2016-08-05 00:00:00+00:00 2702 Name: total visits, dtype: Int64 total visits . plot . line () The result is similar to the following: Create the time series model Create a time series model to forecast total site visits as represented by totals.visits column, and train it on the Google Analytics 360 data.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.ga arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'parsed date' , time series data col = 'total visits' , auto arima = TRUE , data frequency = 'AUTO FREQUENCY' , decompose time series = TRUE ) AS SELECT PARSE TIMESTAMP ( "%Y%m%d" , date ) AS parsed date , SUM ( totals . visits ) AS total visits FROM bigquery-public-data.google analytics sample.ga sessions GROUP BY date ; The query takes about 4 seconds to complete, after which you can access the ga arima model model.
- Go to BigQuery In the query editor, paste in the following query and click Run : SELECT PARSE TIMESTAMP ( "%Y%m%d" , date ) AS parsed date , SUM ( totals . visits ) AS total visits FROM bigquery-public-data.google analytics sample.ga sessions GROUP BY date ; When the query completes, click Open in > Data Studio .

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-reference-2`
- Final score: 25
- Re-rank relevance: N/A

Evidence snippets:
- Use this dashboard to view information about BigQuery incidents, datasets, tables, projects, query times, and slot utilization.
- BigQuery provides several options for copying a table's data from a particular point in time.
- Manage reservations When BigQuery executes queries, it uses units of computing called slots .
- Troubleshoot In addition to the features described in this document for monitoring and managing your organization's BigQuery system, the following resources are available for troubleshooting problems that might arise: BigQuery error messages BigQuery billing questions Troubleshoot quota errors If you need additional assistance, see Get support .

