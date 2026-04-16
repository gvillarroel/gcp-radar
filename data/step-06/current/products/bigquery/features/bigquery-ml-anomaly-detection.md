---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.702Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML anomaly detection"
feature_slug: "bigquery-ml-anomaly-detection"
latest_feature_date: "2021-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/anomaly-detection-overview"
  - "https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial"
keywords:
  - "bigquery"
  - "ml"
  - "anomaly"
  - "detection"
  - "uses"
  - "detect"
  - "anomalies"
  - "models"
---

# BigQuery ML anomaly detection

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML anomaly detection uses ML.DETECT_ANOMALIES with supported models to identify anomalies in time-series and IID data.

## Extended Definition

BigQuery ML anomaly detection uses ML.DETECT_ANOMALIES with supported models to identify anomalies in time-series and IID data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/anomaly-detection-overview](https://docs.cloud.google.com/bigquery/docs/anomaly-detection-overview)
- [https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial)

## Supporting Pages

### Anomaly detection overview \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/anomaly-detection-overview](https://docs.cloud.google.com/bigquery/docs/anomaly-detection-overview)
- Source ID: `site-docs-reference-5`
- Final score: 86
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
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- DETECT ANOMALIES ( MODEL bqml tutorial.arimax model , STRUCT ( 0.6 AS anomaly prob threshold ) ) ORDER BY date ASC ; The results look similar to the following: +-------------------------+-------------+------------+--------------------+--------------------+---------------------+ date temperature is anomaly lower bound upper bound anomaly probability +--------------------------------------------------------------------------------------------------------------------+ 2009-08-11 00:00:00 UTC 70.1 false 67.647370742988727 72.552629257011262 0 +--------------------------------------------------------------------------------------------------------------------+ 2009-08-12 00:00:00 UTC 73.4 false 71.7035428351283 76.608801349150838 0.20478819992561115 +--------------------------------------------------------------------------------------------------------------------+ 2009-08-13 00:00:00 UTC 64.6 true 67.740408724826068 72.6456672388486 0.945588334903206 +-------------------------+-------------+------------+--------------------+--------------------+---------------------+ Perform anomaly detection on new data Run anomaly detection on the new data that you generate.
- DETECT ANOMALIES ( MODEL bqml tutorial.arimax model , STRUCT ( 0.6 AS anomaly prob threshold ), ( SELECT FROM UNNEST ( [ STRUCT<date TIMESTAMP , pm25 FLOAT64 , wind speed FLOAT64 , temperature FLOAT64 > ( '2023-02-01 00:00:00 UTC' , 8.8166665 , 1.6525 , 44.0 ), ( '2023-02-02 00:00:00 UTC' , 11.8354165 , 1.558333 , 40.5 ), ( '2023-02-03 00:00:00 UTC' , 10.1395835 , 1.6895835 , 46.5 ), ( '2023-02-04 00:00:00 UTC' , 11.439583500000001 , 2.0854165 , 45.0 ), ( '2023-02-05 00:00:00 UTC' , 9.7208335 , 1.7083335 , 46.0 ), ( '2023-02-06 00:00:00 UTC' , 13.3020835 , 2.23125 , 43.5 ), ( '2023-02-07 00:00:00 UTC' , 5.7229165 , 2.377083 , 47.5 ), ( '2023-02-08 00:00:00 UTC' , 7.6291665 , 2.24375 , 44.5 ), ( '2023-02-09 00:00:00 UTC' , 8.5208335 , 2.2541665 , 40.5 ), ( '2023-02-10 00:00:00 UTC' , 9.9086955 , 7.333335 , 39.5 ) ] ) ) ); The results look similar to the following: +-------------------------+-------------+------------+--------------------+--------------------+---------------------+------------+------------+ date temperature is anomaly lower bound upper bound anomaly probability pm25 wind speed +----------------------------------------------------------------------------------------------------------------------------------------------+ 2023-02-01 00:00:00 UTC 44.0 true 36.89918003713138 41.8044385511539 0.88975675709801583 8.8166665 1.6525 +----------------------------------------------------------------------------------------------------------------------------------------------+ 2023-02-02 00:00:00 UTC 40.5 false 34.439946284051572 40.672021330796483 0.57358239699845348 11.8354165 1.558333 +--------------------------------------------------------------------------------------------------------------------+-------------------------+ 2023-02-03 00:00:00 UTC 46.5 true 33.615139992931191 40.501364463964549 0.97902867696346974 10.1395835 1.6895835 +-------------------------+-------------+------------+--------------------+--------------------+---------------------+-------------------------+ Clean up Caution : Deleting a project has the following effects: Everything in the project is deleted.
- Perform anomaly detection with a multivariate time-series forecasting model This tutorial shows you how to do the following tasks: Create an ARIMA PLUS XREG time series forecasting model .
- Perform anomaly detection on historical data Run anomaly detection against the historical data that you used to train the model.

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- For a notebook that illustrates this scenario, see Log Anomaly Detection & Investigation with Text Embeddings + BigQuery Vector Search .
- Some possible use cases are as follows: Retrieval-augmented generation (RAG) : Parse documents, perform vector search on content, and generate summarized answers to natural language questions using Gemini models, all within BigQuery.
- You can also use this capability to enrich context for LLMs, in order to improve threat detection, forensics, and troubleshooting workflows.
- For example, a common operation in clustering, classification, and recommendation models is to measure the distance between vectors in an embedding space to find items that are most semantically similar.

