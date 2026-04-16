---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.254Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "AI.DETECT_ANOMALIES"
feature_slug: "ai-detect-anomalies"
latest_feature_date: "2025-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/anomaly-detection-overview"
  - "https://docs.cloud.google.com/bigquery/docs/conversational-analytics"
keywords:
  - "ai"
  - "detect"
  - "anomalies"
  - "uses"
  - "timesfm"
  - "model"
  - "time"
  - "series"
---

# AI.DETECT_ANOMALIES

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

AI.DETECT_ANOMALIES uses a TimesFM model to detect anomalies in time series data against historical baselines.

## Extended Definition

AI.DETECT_ANOMALIES uses a TimesFM model to detect anomalies in time series data against historical baselines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/anomaly-detection-overview](https://docs.cloud.google.com/bigquery/docs/anomaly-detection-overview)
- [https://docs.cloud.google.com/bigquery/docs/conversational-analytics](https://docs.cloud.google.com/bigquery/docs/conversational-analytics)

## Supporting Pages

### "Detect anomalies in multiple time series with the TimesFM model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 400
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Detect anomalies in multiple time series with the TimesFM model Stay organized with collections Save and categorize content based on your preferences.
- This tutorial teaches you how to use the AI.DETECT ANOMALIES function with BigQuery ML's built-in TimesFM model to detect anomalies in time series data.
- Objectives This tutorial guides you through using the AI.DETECT ANOMALIES function with the built-in TimesFM model to detect anomalies in bike share trips.
- Follow these steps to detect anomalies with the TimesFM model: In the Google Cloud console, go to the BigQuery page.

### Anomaly detection overview \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/anomaly-detection-overview](https://docs.cloud.google.com/bigquery/docs/anomaly-detection-overview)
- Source ID: `site-docs-reference-5`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the AI.DETECT ANOMALIES function or ML.DETECT ANOMALIES function with one of the following models to detect anomalies in training data or new serving data: Data type Model types Function What the function does Time series TimesFM AI.DETECT ANOMALIES Detect the anomalies in the time series.
- ARIMA PLUS XREG ML.DETECT ANOMALIES Detect the anomalies in the time series with external regressors.
- ARIMA PLUS ML.DETECT ANOMALIES Detect the anomalies in the time series.
- If you already have labeled data that identifies anomalies, you can perform anomaly detection by using the ML.PREDICT function with one of the following supervised machine learning models: Linear and logistic regression models Boosted trees models Random forest models Deep neural network (DNN) models Wide & Deep models AutoML models Recommended knowledge By using the default settings in the CREATE MODEL statements and the inference functions, you can create and use an anomaly detection model even without much ML knowledge.

### Conversational analytics overview \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/conversational-analytics](https://docs.cloud.google.com/bigquery/docs/conversational-analytics)
- Source ID: `site-docs-reference-5`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- AI.FORECAST AI.DETECT ANOMALIES AI.GENERATE To use the supported AI.GENERATE function, you must have the required permissions to run generative AI queries.
- The following table shows examples of one-shot prompts that activate the use of BigQuery ML: Use case Sample usage Public dataset Forecasting "Predict the number of trips for the next month." bigquery-public-data.san francisco bikeshare.bikeshare trips Anomaly detection "Find outliers in trips per day for 2018 using 2017 as a baseline." bigquery-public-data.san francisco bikeshare.bikeshare trips LLM text generation "For each article in the 'sports' category, summarize the body column in 1-2 sentences." bigquery-public-data.bbc news.fulltext Security You can manage access to conversational analytics in BigQuery using Conversational Analytics API IAM roles and permissions .
- Provide instructions for interpreting and querying the data, such as defining the following: Synonyms and business terms for field names Most important fields and defaults for filtering and grouping Create verified queries that the data agent can use to shape an agent's response structure and to learn the business logic that your organization uses.
- Unlike conventional quotas, DSQ lets you access a large shared pool of resources without a fixed per-project limit for model throughput.

