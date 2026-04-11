---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.782Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML ML.DETECT_ANOMALIES function"
feature_slug: "bigquery-ml-ml-detect-anomalies-function"
latest_feature_date: "2021-06-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial"
keywords:
  - "time-series anomaly detection"
  - "IID anomaly detection"
  - "ML.DETECT_ANOMALIES syntax"
  - "anomaly detection function"
  - "DETECT_ANOMALIES function"
  - "BigQuery ML anomaly function"
  - "ML.DETECT_ANOMALIES"
  - "DETECT_ANOMALIES"
---

# BigQuery ML ML.DETECT_ANOMALIES function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery ML introduces the ML.DETECT_ANOMALIES function for anomaly detection on time-series and IID random-variable data.

## Extended Definition

BigQuery ML introduces the ML.DETECT_ANOMALIES function for anomaly detection on time-series and IID random-variable data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial)

## Supporting Pages

### "Forecast multiple time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: STRONG
- Re-rank rationale: The documentation tutorial explicitly references ML.DETECT_ANOMALIES as a step for using the trained multivariate model.

Evidence snippets:
- In the following query, the STRUCT(0.95 AS anomaly prob threshold) clause causes the ML.DETECT ANOMALIES function to identify anomalous data points with a 95% confidence level.
- Detect anomalies in new data Detect anomalies in the new data by providing input data to the ML.DETECT ANOMALIES function.
- Use the model to detect anomalies Detect anomalies in the training data by using the ML.DETECT ANOMALIES function.
- Detect anomalies by using the model with the ML.DETECT ANOMALIES function .

### "Detect anomalies in multiple time series with the TimesFM model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: The page appears to concern AI.DETECT_ANOMALIES, and while related in purpose, it does not substantiate a specific ML.DETECT_ANOMALIES function reference.

Evidence snippets:
- Objectives This tutorial guides you through using the AI.DETECT ANOMALIES function with the built-in TimesFM model to detect anomalies in bike share trips.
- This tutorial teaches you how to use the AI.DETECT ANOMALIES function with BigQuery ML's built-in TimesFM model to detect anomalies in time series data.
- Enable the API Detect anomalies in a single bike share trips time series Detect anomalies in time series data by using the AI.DETECT ANOMALIES function.
- DETECT ANOMALIES ( ( SELECT FROM bike share trips WHERE trip hour >= TIMESTAMP ( '2017-07-01' ) AND trip hour TIMESTAMP ( '2017-08-01' ) ), ( SELECT FROM bike share trips WHERE trip hour >= TIMESTAMP ( '2017-08-01' ) AND trip hour TIMESTAMP ( '2017-09-01' ) ), anomaly prob threshold => 0.95 , timestamp col => 'trip hour' , data col => 'num trips' , id cols => [ 'subscriber type' ] ); The results look similar to the following: +-----------------+-------------------------+------------------+------------+--------------------+---------------------+---------------------+---------------------------+ subscriber type time series timestamp time series data is anomaly lower bound upper bound anomaly probability ai detect anomalies status +-----------------+-------------------------+------------------+------------+--------------------+---------------------+---------------------+---------------------------+ Customer 2017-08-01 00:00:00 UTC 13.0 false -1.97939332204...

### "Perform anomaly detection with a multivariate time-series forecasting model\

- URL: [https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 52
- Re-rank relevance: STRONG
- Re-rank rationale: The tutorial explicitly uses ML.DETECT_ANOMALIES as the anomaly-detection mechanism.

Evidence snippets:
- Detect anomalies in the time series data by running the ML.DETECT ANOMALIES function against the model.
- DETECT ANOMALIES ( MODEL bqml tutorial.arimax model , STRUCT ( 0.6 AS anomaly prob threshold ), ( SELECT FROM UNNEST ( [ STRUCT<date TIMESTAMP , pm25 FLOAT64 , wind speed FLOAT64 , temperature FLOAT64 > ( '2023-02-01 00:00:00 UTC' , 8.8166665 , 1.6525 , 44.0 ), ( '2023-02-02 00:00:00 UTC' , 11.8354165 , 1.558333 , 40.5 ), ( '2023-02-03 00:00:00 UTC' , 10.1395835 , 1.6895835 , 46.5 ), ( '2023-02-04 00:00:00 UTC' , 11.439583500000001 , 2.0854165 , 45.0 ), ( '2023-02-05 00:00:00 UTC' , 9.7208335 , 1.7083335 , 46.0 ), ( '2023-02-06 00:00:00 UTC' , 13.3020835 , 2.23125 , 43.5 ), ( '2023-02-07 00:00:00 UTC' , 5.7229165 , 2.377083 , 47.5 ), ( '2023-02-08 00:00:00 UTC' , 7.6291665 , 2.24375 , 44.5 ), ( '2023-02-09 00:00:00 UTC' , 8.5208335 , 2.2541665 , 40.5 ), ( '2023-02-10 00:00:00 UTC' , 9.9086955 , 7.333335 , 39.5 ) ] ) ) ); The results look similar to the following: +-------------------------+-------------+------------+--------------------+--------------------+---------------------+------------+------------+ date temperature is anomaly lower bound upper bound anomaly probability pm25 wind speed +----------------------------------------------------------------------------------------------------------------------------------------------+ 2023-02-01 00:00:00 UTC 44.0 true 36.89918003713138 41.8044385511539 0.88975675709801583 8.8166665 1.6525 +----------------------------------------------------------------------------------------------------------------------------------------------+ 2023-02-02 00:00:00 UTC 40.5 false 34.439946284051572 40.672021330796483 0.57358239699845348 11.8354165 1.558333 +--------------------------------------------------------------------------------------------------------------------+-------------------------+ 2023-02-03 00:00:00 UTC 46.5 true 33.615139992931191 40.501364463964549 0.97902867696346974 10.1395835 1.6895835 +-------------------------+-------------+------------+--------------------+--------------------+---------------------+-------------------------+ Clean up Caution : Deleting a project has the following effects: Everything in the project is deleted.
- DETECT ANOMALIES ( MODEL bqml tutorial.arimax model , STRUCT ( 0.6 AS anomaly prob threshold ) ) ORDER BY date ASC ; The results look similar to the following: +-------------------------+-------------+------------+--------------------+--------------------+---------------------+ date temperature is anomaly lower bound upper bound anomaly probability +--------------------------------------------------------------------------------------------------------------------+ 2009-08-11 00:00:00 UTC 70.1 false 67.647370742988727 72.552629257011262 0 +--------------------------------------------------------------------------------------------------------------------+ 2009-08-12 00:00:00 UTC 73.4 false 71.7035428351283 76.608801349150838 0.20478819992561115 +--------------------------------------------------------------------------------------------------------------------+ 2009-08-13 00:00:00 UTC 64.6 true 67.740408724826068 72.6456672388486 0.945588334903206 +-------------------------+-------------+------------+--------------------+--------------------+---------------------+ Perform anomaly detection on new data Run anomaly detection on the new data that you generate.

