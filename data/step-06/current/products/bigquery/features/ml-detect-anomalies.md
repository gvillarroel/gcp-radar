---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.737Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ML.DETECT_ANOMALIES"
feature_slug: "ml-detect-anomalies"
latest_feature_date: "2021-06-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/anomaly-detection-overview"
  - "https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial"
keywords:
  - "ml"
  - "detect"
  - "anomalies"
  - "performs"
  - "anomaly"
  - "detection"
  - "bigquery"
  - "time"
---

# ML.DETECT_ANOMALIES

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

ML.DETECT_ANOMALIES performs anomaly detection in BigQuery ML for supported time-series and IID data models.

## Extended Definition

ML.DETECT_ANOMALIES performs anomaly detection in BigQuery ML for supported time-series and IID data models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/anomaly-detection-overview](https://docs.cloud.google.com/bigquery/docs/anomaly-detection-overview)
- [https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)

## Supporting Pages

### Anomaly detection overview \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/anomaly-detection-overview](https://docs.cloud.google.com/bigquery/docs/anomaly-detection-overview)
- Source ID: `site-docs-reference-5`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you already have labeled data that identifies anomalies, you can perform anomaly detection by using the ML.PREDICT function with one of the following supervised machine learning models: Linear and logistic regression models Boosted trees models Random forest models Deep neural network (DNN) models Wide & Deep models AutoML models Recommended knowledge By using the default settings in the CREATE MODEL statements and the inference functions, you can create and use an anomaly detection model even without much ML knowledge.
- Use the AI.DETECT ANOMALIES function or ML.DETECT ANOMALIES function with one of the following models to detect anomalies in training data or new serving data: Data type Model types Function What the function does Time series TimesFM AI.DETECT ANOMALIES Detect the anomalies in the time series.
- If you aren't certain what counts as anomalous data, or you don't have labeled data to train a model on, you can use unsupervised machine learning to perform anomaly detection.
- You can use anomaly detection to detect critical incidents, such as technical issues, or opportunities, such as changes in consumer behavior.

### "Perform anomaly detection with a multivariate time-series forecasting model\

- URL: [https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 298
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DETECT ANOMALIES ( MODEL bqml tutorial.arimax model , STRUCT ( 0.6 AS anomaly prob threshold ), ( SELECT FROM UNNEST ( [ STRUCT<date TIMESTAMP , pm25 FLOAT64 , wind speed FLOAT64 , temperature FLOAT64 > ( '2023-02-01 00:00:00 UTC' , 8.8166665 , 1.6525 , 44.0 ), ( '2023-02-02 00:00:00 UTC' , 11.8354165 , 1.558333 , 40.5 ), ( '2023-02-03 00:00:00 UTC' , 10.1395835 , 1.6895835 , 46.5 ), ( '2023-02-04 00:00:00 UTC' , 11.439583500000001 , 2.0854165 , 45.0 ), ( '2023-02-05 00:00:00 UTC' , 9.7208335 , 1.7083335 , 46.0 ), ( '2023-02-06 00:00:00 UTC' , 13.3020835 , 2.23125 , 43.5 ), ( '2023-02-07 00:00:00 UTC' , 5.7229165 , 2.377083 , 47.5 ), ( '2023-02-08 00:00:00 UTC' , 7.6291665 , 2.24375 , 44.5 ), ( '2023-02-09 00:00:00 UTC' , 8.5208335 , 2.2541665 , 40.5 ), ( '2023-02-10 00:00:00 UTC' , 9.9086955 , 7.333335 , 39.5 ) ] ) ) ); The results look similar to the following: +-------------------------+-------------+------------+--------------------+--------------------+---------------------+------------+------------+ date temperature is anomaly lower bound upper bound anomaly probability pm25 wind speed +----------------------------------------------------------------------------------------------------------------------------------------------+ 2023-02-01 00:00:00 UTC 44.0 true 36.89918003713138 41.8044385511539 0.88975675709801583 8.8166665 1.6525 +----------------------------------------------------------------------------------------------------------------------------------------------+ 2023-02-02 00:00:00 UTC 40.5 false 34.439946284051572 40.672021330796483 0.57358239699845348 11.8354165 1.558333 +--------------------------------------------------------------------------------------------------------------------+-------------------------+ 2023-02-03 00:00:00 UTC 46.5 true 33.615139992931191 40.501364463964549 0.97902867696346974 10.1395835 1.6895835 +-------------------------+-------------+------------+--------------------+--------------------+---------------------+-------------------------+ Clean up Caution : Deleting a project has the following effects: Everything in the project is deleted.
- DETECT ANOMALIES ( MODEL bqml tutorial.arimax model , STRUCT ( 0.6 AS anomaly prob threshold ) ) ORDER BY date ASC ; The results look similar to the following: +-------------------------+-------------+------------+--------------------+--------------------+---------------------+ date temperature is anomaly lower bound upper bound anomaly probability +--------------------------------------------------------------------------------------------------------------------+ 2009-08-11 00:00:00 UTC 70.1 false 67.647370742988727 72.552629257011262 0 +--------------------------------------------------------------------------------------------------------------------+ 2009-08-12 00:00:00 UTC 73.4 false 71.7035428351283 76.608801349150838 0.20478819992561115 +--------------------------------------------------------------------------------------------------------------------+ 2009-08-13 00:00:00 UTC 64.6 true 67.740408724826068 72.6456672388486 0.945588334903206 +-------------------------+-------------+------------+--------------------+--------------------+---------------------+ Perform anomaly detection on new data Run anomaly detection on the new data that you generate.
- Perform anomaly detection with a multivariate time-series forecasting model This tutorial shows you how to do the following tasks: Create an ARIMA PLUS XREG time series forecasting model .
- Perform anomaly detection on historical data Run anomaly detection against the historical data that you used to train the model.

### "Forecast multiple time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DETECT ANOMALIES ( model bqml tutorial.multi time series arimax model , STRUCT ( 0.95 AS anomaly prob threshold ), ( SELECT FROM bqml tutorial.iowa liquor sales with weather WHERE DATE >= DATE ( '2022-09-01' ) ) ); The results should look similar to the following: Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- DETECT ANOMALIES ( model bqml tutorial.multi time series arimax model , STRUCT ( 0.95 AS anomaly prob threshold ) ); The results should look similar to the following: The anomaly probability column in the results identifies the likelihood that a given bottles sold column value is anomalous.
- In the following query, the STRUCT(0.95 AS anomaly prob threshold) clause causes the ML.DETECT ANOMALIES function to identify anomalous data points with a 95% confidence level.
- Follow these steps to detect anomalies in the training data: In the Google Cloud console, go to the BigQuery page.

