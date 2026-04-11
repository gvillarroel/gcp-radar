---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.327Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "AI.EVALUATE custom context window and MASE output"
feature_slug: "ai-evaluate-custom-context-window-and-mase-output"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial"
keywords:
  - "mean absolute scaled error"
  - "time series evaluation"
  - "custom context window"
  - "MASE output"
  - "MASE"
  - "AI.EVALUATE"
  - "EVALUATE"
---

# AI.EVALUATE custom context window and MASE output

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The AI.EVALUATE function now supports a custom context window and returns mean absolute scaled error for time-series evaluation.

## Extended Definition

AI.EVALUATE in BigQuery is used to evaluate forecast outputs against a reference time series based on historical data. The BigQuery release notes state that AI.EVALUATE supports a custom context window that controls how many of the most recent data points are used by the model; evidence for MASE specifically being returned as an output is not explicit in the provided excerpts.

## Evidence Summary

The release notes provide direct evidence of AI.EVALUATE usage and custom context-window support, while the tutorials confirm EVALUATE-based forecast evaluation and output reporting but do not explicitly show MASE in the cited snippets.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- The AI.EVALUATE function supports the following: You can provide a custom context window that determines how many of the most recent data points should be used by the model.
- You can use the TimesFM 2.5 model in the AI.FORECAST , AI.EVALUATE , and AI.DETECT ANOMALIES functions to achieve better forecasting accuracy and lower latency.
- Use AI.EVALUATE to evaluate forecasted data against a reference time series based on historical data.
- March 30, 2026 Feature The following forecasting and anomaly detection functions and updates are generally available (GA): The AI.DETECT ANOMALIES function supports providing a custom context window that determines how many of the most recent data points should be used by the model.

### "Forecast a single time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create a table of input data Create a table of data that you can use to train and evaluate the model.
- EVALUATE ( MODEL bqml tutorial.seattle pm25 xreg model , ( SELECT date , pm25 , temperature , wind speed FROM bqml tutorial.seattle air quality daily WHERE date > DATE ( '2020-12-31' ) ), STRUCT ( TRUE AS perform aggregation , 30 AS horizon )); The results should look similar to the following: For more information about the output columns, see ML.EVALUATE function .
- ARIMA EVALUATE ( MODEL bqml tutorial.seattle pm25 xreg model ); The results should look similar to the following: The non seasonal p , non seasonal d , non seasonal q , and has drift output columns define an ARIMA model in the training pipeline.
- The ML.ARIMA EVALUATE function shows you the evaluation metrics of all the candidate models that were evaluated during the process of automatic hyperparameter tuning.

### "Forecast a single time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- The summary() function shows you the evaluation metrics of all the candidate models evaluated during the process of automatic hyperparameter tuning. summary = model . summary ( show all candidate models = True , ) print ( summary . peek ()) Expected output: row non seasonal p non seasonal d non seasonal q has drift log likelihood AIC variance seasonal periods has holiday effect has spikes and dips has step changes error message 0 0 1 3 True -2464.255656 4938.511313 42772.506055 ['WEEKLY'] False False True 1 2 1 0 False -2473.141651 4952.283303 44942.416463 ['WEEKLY'] False False True 2 1 1 0 False -2479.880885 4963.76177 46642.953433 ['WEEKLY'] False False True 3 0 1 1 False -2470.632377 4945.264753 44319.379307 ['WEEKLY'] False False True 4 2 1 1 True -2463.671247 4937.342493 42633.299513 ['WEEKLY'] False False True The non seasonal p , non seasonal d , non seasonal q , and has drift output columns define an ARIMA model in the training pipeline.
- ARIMAPlus () model . auto arima = True model . data frequency = "auto frequency" model . decompose time series = True Use the data loaded in the previous step to fit the model training data = total visits . to frame () . reset index ( drop = False ) X = training data [[ "parsed date" ]] y = training data [[ "total visits" ]] model . fit ( X , y ) Evaluate the candidate models SQL Evaluate the time series models by using the ML.ARIMA EVALUATE function.
- ARIMA EVALUATE ( MODEL bqml tutorial.ga arima model ); The results should look similar to the following: BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- The decompose time series option of the CREATE MODEL statement defaults to TRUE , so that information about the time series data is returned when you evaluate the model in the next step.

