---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.733Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CAST format clause"
feature_slug: "cast-format-clause"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial"
keywords:
  - "cast"
  - "format"
  - "clause"
  - "adds"
  - "formatting"
  - "when"
  - "casting"
  - "values"
---

# CAST format clause

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The CAST format clause adds formatting support when casting values between supported BigQuery data types.

## Extended Definition

The CAST format clause adds formatting support when casting values between supported BigQuery data types.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)

## Supporting Pages

### "Forecast a single time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Learn how to forecast a single time series with a univariate model Learn how to forecast multiple time series with a univariate model Learn how to scale a univariate model when forecasting multiple time series over many rows .
- In time series forecasting, the prediction interval, as represented by the prediction interval lower bound and prediction interval upper bound column values, is as important as the forecast value column value.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.seattle pm25 xreg model OPTIONS ( MODEL TYPE = 'ARIMA PLUS XREG' , time series timestamp col = 'date' , # Identifies the column that contains time points time series data col = 'pm25' ) # Identifies the column to forecast AS SELECT date , # The column that contains time points pm25 , # The column to forecast temperature , # Temperature input to use in forecasting wind speed # Wind speed input to use in forecasting FROM bqml tutorial.seattle air quality daily WHERE date BETWEEN DATE ( '2012-01-01' ) AND DATE ( '2020-12-31' ); The query takes about 20 seconds to complete, after which you can access the seattle pm25 xreg model model.
- Similar to the ML.FORECAST function, the STRUCT(30 AS horizon, 0.8 AS confidence level) clause used in the ML.EXPLAIN FORECAST function indicates that the query forecasts 30 future time points and generates a prediction interval with 80% confidence.

### "Forecast a single time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- The decompose time series option defaults to True, so that information about the time series data is returned when you evaluate the model in the next step. model = forecasting .
- For more information, see Set up ADC for a local development environment . from bigframes.ml import forecasting import bigframes.pandas as bpd Create a time series model to forecast total site visits: The auto arima option defaults to True, so the auto.ARIMA algorithm automatically tunes the hyperparameters in the model.
- What's next Learn how to forecast a single time series with a multivariate model Learn how to forecast multiple time series with a univariate model Learn how to scale a univariate model when forecasting multiple time series over many rows .
- The best model is saved as the final model and is used when you call functions such as ML.FORECAST on the model The seasonal periods column contains information about the seasonal pattern identified in the time series data.

### "Forecast multiple time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- What's next Learn how to forecast a single time series with a univariate model Learn how to forecast a single time series with a multivariate model Learn how to scale a univariate model when forecasting multiple time series over many rows .
- In time series forecasting, the prediction interval, as represented by the prediction interval lower bound and prediction interval upper bound column values, is as important as the forecast value column value.
- In time series forecasting, the prediction interval, as represented by the prediction interval lower bound and prediction interval upper bound column values, is as important as the forecast value column value.
- In time series forecasting, the prediction interval, as represented by the prediction interval lower bound and prediction interval upper bound column values, is as important as the forecast value column value.

