---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.945Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Query Explain"
feature_slug: "bigquery-query-explain"
latest_feature_date: "2015-12-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey"
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial"
keywords:
  - "stage-by-stage execution details"
  - "query execution plan"
  - "query stage statistics"
  - "query plan"
  - "execution graph"
  - "EXPLAIN statement"
  - "Query Explain"
  - "EXPLAIN"
---

# BigQuery Query Explain

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added Query Explain to show stage-by-stage execution details for queries.

## Extended Definition

BigQuery added Query Explain to show stage-by-stage execution details for queries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)
- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Feature In the query execution graph, you can now use the query text heatmap to identify which query text contributes to stages that consume more slot time, and to see query plan details for those stages.
- May 12, 2025 Libraries Java 2.50.0 (2025-05-06) Features Add WRITE TRUNCATE DATA as an enum value for write disposition ( #3752 ) ( acea61c ) bigquery: Add support for reservation field in jobs. ( #3768 ) ( 3e97f7c ) Dependencies Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.63.0 ( #3770 ) ( 934389e ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250404-2.0.0 ( #3754 ) ( 1381c8f ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250427-2.0.0 ( #3773 ) ( c0795fe ) Update dependency com.google.cloud:sdk-platform-java-config to v3.46.3 ( #3772 ) ( ab166b6 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.47.0 ( #3779 ) ( b27434b ) Feature You can now view the Query text section in a BigQuery execution graph to understand how the stage steps are related to the query text.
- Feature Colab Enterprise notebooks in BigQuery let you do the following in Preview : Explain code with Gemini assistance Fix and explain errors with Gemini assistance June 18, 2025 Feature You can now publish the results of a data quality scan as Dataplex Universal Catalog metadata .
- This paper describes the algorithms behind the ARIMA PLUS and ARIMA PLUS XREG models for time series forecasting and anomaly detection, and demonstrates the high performance, scalability, explainability, and customizability of the models.

### "End-to-end user journeys for ML models \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Model use user journeys The following table describes the statements and functions you can use to evaluate, explain, and get predictions from models: Model category Model type Evaluation Inference AI explanation Model monitoring Supervised learning Linear & logistic regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Deep neural networks (DNN) ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Wide & Deep networks ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Boosted trees ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Random forest ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE AutoML classification & regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.GLOBAL EXPLAIN ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Unsupervised learning K-means ML.EVALUATE ML.PREDICT ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Matrix factorization ML.EVALUATE ML.RECOMMEND ML.GENERATE EMBEDDING N/A N/A Principal component analysis (PCA) ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Autoencoder ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.RECONSTRUCTION LOSS ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Transform-only Transform-only N/A ML.TRANSFORM N/A N/A 1 ML.CONFUSION MATRIX is only applicable to classification models.
- 3 The ML.EXPLAIN PREDICT function encompasses the ML.PREDICT function because its output is a superset of the results of ML.PREDICT .
- 4 To understand the difference between ML.GLOBAL EXPLAIN and ML.FEATURE IMPORTANCE , see the Explainable AI overview .

### "Forecast a single time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- EXPLAIN FORECAST ( MODEL bqml tutorial.seattle pm25 xreg model , STRUCT ( 30 AS horizon , 0.8 AS confidence level ), ( SELECT date , temperature , wind speed FROM bqml tutorial.seattle air quality daily WHERE date > DATE ( '2020-12-31' ) )); The results should look similar to the following: The output rows are ordered chronologically by the time series timestamp column value.
- Similar to the ML.FORECAST function, the STRUCT(30 AS horizon, 0.8 AS confidence level) clause used in the ML.EXPLAIN FORECAST function indicates that the query forecasts 30 future time points and generates a prediction interval with 80% confidence.
- Retrieving components of the time series, such as seasonality, trend, and feature attributions, by using the ML.EXPLAIN FORECAST function .
- Explain the forecasting results You can get explainability metrics in addition to forecast data by using the ML.EXPLAIN FORECAST function.

