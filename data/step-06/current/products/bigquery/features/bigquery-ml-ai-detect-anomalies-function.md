---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.364Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML AI.DETECT_ANOMALIES function"
feature_slug: "bigquery-ml-ai-detect-anomalies-function"
latest_feature_date: "2025-11-10"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey"
keywords:
  - "outlier detection in BigQuery ML"
  - "BigQuery ML AI.DETECT_ANOMALIES"
  - "Anomaly detection SQL function"
  - "AI function for anomalies"
  - "AI.DETECT_ANOMALIES"
  - "DETECT_ANOMALIES"
  - "AI anomaly function"
---

# BigQuery ML AI.DETECT_ANOMALIES function

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery ML now offers the AI.DETECT_ANOMALIES function, including use with TimesFM models for time-series anomaly detection.

## Extended Definition

AI.DETECT_ANOMALIES is a BigQuery ML SQL function in BigQuery used to detect anomalies in time-series data. Google Cloud documentation shows it can be run with BigQuery ML's built-in TimesFM model by supplying historical and target time-series data, and it can return anomaly indicators, lower/upper bounds, and anomaly probability output. The function is documented as generally available (GA) and supports a custom context window setting that controls how many recent data points are used by the model.

## Evidence Summary

The tutorial details practical use of AI.DETECT_ANOMALIES with TimesFM on time-series data, the release notes confirm its GA availability and context-window capability, and the syntax reference includes it as a BigQuery ML detection function in model journeys.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)

## Supporting Pages

### "Detect anomalies in multiple time series with the TimesFM model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 74
- Re-rank relevance: STRONG
- Re-rank rationale: The tutorial is explicitly about using the AI.DETECT ANOMALIES function with BigQuery ML and the built-in TimesFM model to detect anomalies.

Evidence snippets:
- Objectives This tutorial guides you through using the AI.DETECT ANOMALIES function with the built-in TimesFM model to detect anomalies in bike share trips.
- This tutorial teaches you how to use the AI.DETECT ANOMALIES function with BigQuery ML's built-in TimesFM model to detect anomalies in time series data.
- Enable the API Detect anomalies in a single bike share trips time series Detect anomalies in time series data by using the AI.DETECT ANOMALIES function.
- DETECT ANOMALIES ( ( SELECT FROM bike share trips WHERE trip hour >= TIMESTAMP ( '2017-07-01' ) AND trip hour TIMESTAMP ( '2017-08-01' ) ), ( SELECT FROM bike share trips WHERE trip hour >= TIMESTAMP ( '2017-08-01' ) AND trip hour TIMESTAMP ( '2017-09-01' ) ), anomaly prob threshold => 0.95 , timestamp col => 'trip hour' , data col => 'num trips' , id cols => [ 'subscriber type' ] ); The results look similar to the following: +-----------------+-------------------------+------------------+------------+--------------------+---------------------+---------------------+---------------------------+ subscriber type time series timestamp time series data is anomaly lower bound upper bound anomaly probability ai detect anomalies status +-----------------+-------------------------+------------------+------------+--------------------+---------------------+---------------------+---------------------------+ Customer 2017-08-01 00:00:00 UTC 13.0 false -1.97939332204...

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- March 30, 2026 Feature The following forecasting and anomaly detection functions and updates are generally available (GA): The AI.DETECT ANOMALIES function supports providing a custom context window that determines how many of the most recent data points should be used by the model.
- You can use the TimesFM 2.5 model in the AI.FORECAST , AI.EVALUATE , and AI.DETECT ANOMALIES functions to achieve better forecasting accuracy and lower latency.
- BQML support: BigQuery conversational analytics now supports a set of BigQuery ML functions , including AI.FORECAST, AI.DETECT ANOMALIES, and AI.GENERATE.
- Use the AI.DETECT ANOMALIES function with a TimesFM model to detect anomalies in time series data, using historical data as a baseline.

### "End-to-end user journeys for ML models \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Model use user journeys The following table describes the statements and functions you can use to evaluate, explain, and get predictions from models: Model category Model type Evaluation Inference AI explanation Model monitoring Supervised learning Linear & logistic regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Deep neural networks (DNN) ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Wide & Deep networks ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Boosted trees ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Random forest ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE AutoML classification & regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.GLOBAL EXPLAIN ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Unsupervised learning K-means ML.EVALUATE ML.PREDICT ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Matrix factorization ML.EVALUATE ML.RECOMMEND ML.GENERATE EMBEDDING N/A N/A Principal component analysis (PCA) ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Autoencoder ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.RECONSTRUCTION LOSS ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Transform-only Transform-only N/A ML.TRANSFORM N/A N/A 1 ML.CONFUSION MATRIX is only applicable to classification models.

