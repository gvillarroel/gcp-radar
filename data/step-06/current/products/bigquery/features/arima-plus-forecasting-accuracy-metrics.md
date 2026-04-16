---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.687Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ARIMA_PLUS forecasting accuracy metrics"
feature_slug: "arima-plus-forecasting-accuracy-metrics"
latest_feature_date: "2022-05-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial"
keywords:
  - "arima"
  - "plus"
  - "forecasting"
  - "accuracy"
  - "metrics"
  - "models"
  - "can"
  - "use"
---

# ARIMA_PLUS forecasting accuracy metrics

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

ARIMA_PLUS models can use ML.EVALUATE to calculate forecasting accuracy metrics such as MAPE, SMAPE, and MSE.

## Extended Definition

ARIMA_PLUS models can use ML.EVALUATE to calculate forecasting accuracy metrics such as MAPE, SMAPE, and MSE.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)

## Supporting Pages

### "Scale an ARIMA_PLUS univariate time series model to millions of time series\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial)
- Source ID: `site-docs-reference`
- Final score: 391
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- EVALUATE ( MODEL bqml tutorial.nyc citibike arima model default , TABLE bqml tutorial.nyc citibike time series , STRUCT ( 7 AS horizon , TRUE AS perform aggregation )); This query reports several forecasting metrics, including: The results should look similar to the following: The TABLE clause in the ML.EVALUATE function identifies a table containing the ground truth data.
- This example leaves out the time points in the time series after June 1, 2016 so that those time points can be used to evaluate the forecasting accuracy later by using the ML.EVALUATE function.
- Of the forecasting metrics returned by ML.EVALUATE , only mean absolute percentage error and symmetric mean absolute percentage error are time series value independent.
- Evaluate forecasting accuracy for each time series Evaluate the forecasting accuracy of the model by using the ML.EVALUATE function.

### "Use custom holidays in an ARIMA_PLUS time-series forecasting model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to BigQuery In the SQL editor pane, run the following SQL statement: SELECT "original" AS model type , FROM ml . evaluate ( MODEL bqml tutorial.forecast googleio , ( SELECT FROM bqml tutorial.googleio page views WHERE date >= '2022-05-08' AND date '2022-05-12' ), STRUCT ( 365 AS horizon , TRUE AS perform aggregation )) UNION ALL SELECT "with custom holiday" AS model type , FROM ml . evaluate ( MODEL bqml tutorial.forecast googleio with custom holiday , ( SELECT FROM bqml tutorial.googleio page views WHERE date >= '2022-05-08' AND date '2022-05-12' ), STRUCT ( 365 AS horizon , TRUE AS perform aggregation )); The results show that the second model offers a significant performance improvement: Clean up Caution : Deleting a project has the following effects: Everything in the project is deleted.
- EXPLAIN FORECAST ( model bqml tutorial.forecast googleio with custom holiday , STRUCT ( 365 AS horizon )) WHERE holiday effect != 0 ; The results show that Google I/O contributes a large amount of holiday effect to the forecasted results: Compare model performance Use the ML.EVALUATE function to compare the performance of the first model created without custom holidays and the second model created with custom holidays.
- Use custom holidays in an ARIMA PLUS time-series forecasting model This tutorial shows you how to do the following tasks: Create an ARIMA PLUS time-series forecasting model that uses only built-in holidays.
- Create an ARIMA PLUS time-series forecasting model that uses custom holidays in addition to built-in holidays.

### "Forecast a single time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The summary() function shows you the evaluation metrics of all the candidate models evaluated during the process of automatic hyperparameter tuning. summary = model . summary ( show all candidate models = True , ) print ( summary . peek ()) Expected output: row non seasonal p non seasonal d non seasonal q has drift log likelihood AIC variance seasonal periods has holiday effect has spikes and dips has step changes error message 0 0 1 3 True -2464.255656 4938.511313 42772.506055 ['WEEKLY'] False False True 1 2 1 0 False -2473.141651 4952.283303 44942.416463 ['WEEKLY'] False False True 2 1 1 0 False -2479.880885 4963.76177 46642.953433 ['WEEKLY'] False False True 3 0 1 1 False -2470.632377 4945.264753 44319.379307 ['WEEKLY'] False False True 4 2 1 1 True -2463.671247 4937.342493 42633.299513 ['WEEKLY'] False False True The non seasonal p , non seasonal d , non seasonal q , and has drift output columns define an ARIMA model in the training pipeline.
- ARIMAPlus () model . auto arima = True model . data frequency = "auto frequency" model . decompose time series = True Use the data loaded in the previous step to fit the model training data = total visits . to frame () . reset index ( drop = False ) X = training data [[ "parsed date" ]] y = training data [[ "total visits" ]] model . fit ( X , y ) Evaluate the candidate models SQL Evaluate the time series models by using the ML.ARIMA EVALUATE function.
- The ML.ARIMA EVALUATE function shows you the evaluation metrics of all the candidate models evaluated during the process of automatic hyperparameter tuning.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.ga arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'parsed date' , time series data col = 'total visits' , auto arima = TRUE , data frequency = 'AUTO FREQUENCY' , decompose time series = TRUE ) AS SELECT PARSE TIMESTAMP ( "%Y%m%d" , date ) AS parsed date , SUM ( totals . visits ) AS total visits FROM bigquery-public-data.google analytics sample.ga sessions GROUP BY date ; The query takes about 4 seconds to complete, after which you can access the ga arima model model.

