---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.493Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "LOG_ANALYZER"
feature_slug: "log-analyzer"
latest_feature_date: "2024-03-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions"
  - "https://docs.cloud.google.com/bigquery/docs/graph-iso-standards"
  - "https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial"
keywords:
  - "log"
  - "analyzer"
  - "bigquery"
  - "provides"
  - "text"
  - "processing"
  - "search"
  - "analysis"
---

# LOG_ANALYZER

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery provides the LOG_ANALYZER analyzer for text processing in search and analysis functions; BigQuery supports the LOG_ANALYZER text analyzer for search-related functions.

## Extended Definition

BigQuery provides the LOG_ANALYZER analyzer for text processing in search and analysis functions; BigQuery supports the LOG_ANALYZER text analyzer for search-related functions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions)
- [https://docs.cloud.google.com/bigquery/docs/graph-iso-standards](https://docs.cloud.google.com/bigquery/docs/graph-iso-standards)
- [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)

## Supporting Pages

### Approximate aggregate functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Reference Send feedback Approximate aggregate functions Stay organized with collections Save and categorize content based on your preferences.
- GoogleSQL for BigQuery supports approximate aggregate functions.

### "Forecast a single time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- Read and visualize the time series you want to forecast. df = bpd . read gbq ( "bigquery-public-data.google analytics sample.ga sessions " ) parsed date = bpd . to datetime ( df . date , format = "%Y%m %d " , utc = True ) parsed date . name = "parsed date" visits = df [ "totals" ] . struct . field ( "visits" ) visits . name = "total visits" total visits = visits . groupby ( parsed date ) . sum () Expected output: total visits.head() parsed date 2016-08-01 00:00:00+00:00 1711 2016-08-02 00:00:00+00:00 2140 2016-08-03 00:00:00+00:00 2890 2016-08-04 00:00:00+00:00 3161 2016-08-05 00:00:00+00:00 2702 Name: total visits, dtype: Int64 total visits . plot . line () The result is similar to the following: Create the time series model Create a time series model to forecast total site visits as represented by totals.visits column, and train it on the Google Analytics 360 data.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.ga arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'parsed date' , time series data col = 'total visits' , auto arima = TRUE , data frequency = 'AUTO FREQUENCY' , decompose time series = TRUE ) AS SELECT PARSE TIMESTAMP ( "%Y%m%d" , date ) AS parsed date , SUM ( totals . visits ) AS total visits FROM bigquery-public-data.google analytics sample.ga sessions GROUP BY date ; The query takes about 4 seconds to complete, after which you can access the ga arima model model.
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- To create the model, you need the following permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData To run inference, you need the following permissions: bigquery.models.getData bigquery.jobs.create For more information about IAM roles and permissions in BigQuery, see Introduction to IAM .

### BigQuery Graph and ISO standards \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/graph-iso-standards](https://docs.cloud.google.com/bigquery/docs/graph-iso-standards)
- Source ID: `site-api-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery Graph is based on two ISO standards: ISO/IEC 9075-16:2023 - Information technology — Database languages SQL Property Graph Queries (SQL/PGQ) , Edition 1, 2023 ISO/IEC 39075:2024 - Information technology — Database languages — GQL , Edition 1, 2024 The following tables describe the high-level relationship between SQL/PGQ, GQL, and how BigQuery Graph supports these standards.
- Standard SQL/PGQ GQL BigQuery Graph Query Graph pattern matching capabilities Shares the core Graph Pattern Matching Language (GPML) functionalities with GQL.
- However, the CREATE PROPERTY GRAPH statement supported by BigQuery Graph is closely related to GG02 (with similar support for GG20, GG21, GG22, and GG23).
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.

