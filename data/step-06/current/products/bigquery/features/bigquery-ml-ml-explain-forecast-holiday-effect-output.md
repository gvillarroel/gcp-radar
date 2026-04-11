---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.644Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML ML.EXPLAIN_FORECAST holiday effect output"
feature_slug: "bigquery-ml-ml-explain-forecast-holiday-effect-output"
latest_feature_date: "2023-07-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial"
keywords:
  - "forecast holiday attribution"
  - "holiday contribution output"
  - "per-holiday explanation"
  - "forecast explanation output"
  - "time series forecast explain"
  - "holiday effects"
  - "ML.EXPLAIN_FORECAST"
---

# BigQuery ML ML.EXPLAIN_FORECAST holiday effect output

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery ML now updates ML.EXPLAIN_FORECAST to include per-holiday explanation of holiday effects in time-series forecasts.

## Extended Definition

BigQuery ML’s `ML.EXPLAIN FORECAST` function returns forecasted future time-series values along with a prediction interval (specified via a `STRUCT` with horizon and confidence), and also returns explainability outputs that break forecasts into separate components such as seasonality, trend, and feature attributions. The provided official docs and tutorials do not explicitly document a distinct per-holiday effect output, so the specific “holiday effect” enhancement is only weakly evidenced by the supplied excerpts.

## Evidence Summary

These pages define `ML.EXPLAIN FORECAST` as a forecast function with confidence/horizon output plus component-level explainability, but do not clearly state holiday-specific attribution details in the provided snippets.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)

## Supporting Pages

### "Forecast a single time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Similar to the ML.FORECAST function, the STRUCT(30 AS horizon, 0.8 AS confidence level) clause used in the ML.EXPLAIN FORECAST function indicates that the query forecasts 30 future time points and generates a prediction interval with 80% confidence.
- Retrieving components of the time series, such as seasonality, trend, and feature attributions, by using the ML.EXPLAIN FORECAST function .
- Explain the forecasting results You can get explainability metrics in addition to forecast data by using the ML.EXPLAIN FORECAST function.
- The ML.EXPLAIN FORECAST function forecasts future time series values and also returns all the separate components of the time series.

### "Forecast a single time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Similar to the ML.FORECAST function, the STRUCT(30 AS horizon, 0.8 AS confidence level) clause used in the ML.EXPLAIN FORECAST function indicates that the query forecasts 30 future time points and generates a prediction interval with 80% confidence.
- Explain the forecasting results SQL You can get explainability metrics in addition to forecast data by using the ML.EXPLAIN FORECAST function.
- The ML.EXPLAIN FORECAST function forecasts future time series values and also returns all the separate components of the time series.
- Retrieving components of the time series, such as seasonality and trend, by using the ML.EXPLAIN FORECAST function .

### "Forecast multiple time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Similar to the ML.FORECAST function, the STRUCT(5 AS horizon, 0.8 AS confidence level) clause used in the ML.EXPLAIN FORECAST function indicates that the query forecasts 30 future time points and generates a prediction interval with 80% confidence.
- Retrieving components of the time series, such as seasonality, trend, and feature attributions, by using the ML.EXPLAIN FORECAST function .
- Explain the forecasting results You can get explainability metrics in addition to forecast data by using the ML.EXPLAIN FORECAST function.
- The ML.EXPLAIN FORECAST function forecasts future time series values and also returns all the separate components of the time series.

