---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.740Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ARIMA_PLUS ML.EVALUATE forecasting metrics"
feature_slug: "arima-plus-ml-evaluate-forecasting-metrics"
latest_feature_date: "2022-05-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial"
keywords:
  - "SMAPE metric"
  - "MAPE metric"
  - "MSE metric"
  - "ARIMA_PLUS forecasting metrics"
  - "forecasting accuracy"
  - "ARIMA_PLUS ML.EVALUATE"
  - "ARIMA_PLUS evaluate"
  - "BigQuery ML.EVALUATE"
---

# ARIMA_PLUS ML.EVALUATE forecasting metrics

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

ARIMA_PLUS models in BigQuery now support ML.EVALUATE to compute additional forecasting accuracy metrics such as MAPE, SMAPE, and MSE.

## Extended Definition

BigQuery ARIMA_PLUS allows model performance evaluation through ML.EVALUATE for forecasting tasks. In the referenced BigQuery tutorial, the workflow evaluates a trained univariate ARIMA_PLUS model by withholding later time points from training and then using those points to assess forecasting accuracy. The provided excerpt supports ML.EVALUATE for forecasting accuracy evaluation, but it does not explicitly list metric names such as MAPE, SMAPE, or MSE.

## Evidence Summary

The cited BigQuery tutorial documents ARIMA_PLUS model training and evaluation flow, including using ML.EVALUATE with a holdout period to validate forecasting accuracy.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial)

## Supporting Pages

### "Scale an ARIMA_PLUS univariate time series model to millions of time series\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Evaluate forecasting accuracy for a model with a smaller hyperparameter search space and smart fast training strategies Follow these steps to evaluate the model: In the Google Cloud console, go to the BigQuery page.
- This example leaves out the time points in the time series after June 1, 2016 so that those time points can be used to evaluate the forecasting accuracy later by using the ML.EVALUATE function.
- In short, you have used a smaller hyperparameter search space and smart fast training strategies to make your model training more than 20x faster without sacrificing forecasting accuracy.
- Evaluate forecasting accuracy for a model with a smaller hyperparameter search space Follow these steps to evaluate the model: In the Google Cloud console, go to the BigQuery page.

