---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.824Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB time-series forecasting"
feature_slug: "alloydb-time-series-forecasting"
latest_feature_date: "2025-10-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting"
  - "https://docs.cloud.google.com/alloydb/docs/ai/invoke-predictions"
  - "https://docs.cloud.google.com/alloydb/docs/ai/build-etl-pipeline-alloydb-dataflow"
  - "https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent"
keywords:
  - "future trend prediction"
  - "historical data forecasting"
  - "time series forecast"
  - "TimesFM model"
  - "time-series forecasting"
  - "TimesFM"
  - "forecasting queries"
---

# AlloyDB time-series forecasting

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB now supports time-series forecasting on historical data, including TimesFM models, to predict future trends.

## Extended Definition

AlloyDB now supports time-series forecasting on historical data, including TimesFM models, to predict future trends.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting](https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting)
- [https://docs.cloud.google.com/alloydb/docs/ai/invoke-predictions](https://docs.cloud.google.com/alloydb/docs/ai/invoke-predictions)
- [https://docs.cloud.google.com/alloydb/docs/ai/build-etl-pipeline-alloydb-dataflow](https://docs.cloud.google.com/alloydb/docs/ai/build-etl-pipeline-alloydb-dataflow)
- [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)

## Supporting Pages

### "Perform time-series forecasting \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting](https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting)
- Source ID: `site-docs-reference-2`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To construct the model request url for the SQL model creation call, replace the project and endpoint identifiers with the endpoint details from the preceding step as follows: CALL google ml . create model ( model id => 'timesfm v2' , model qualified name => 'timesfm v2' , model type => 'ts forecasting' , model provider => 'google' , model request url => 'https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /endpoints/ ENDPOINT ID :predict' ); You need this model request url in the google ml.create model call when you register the TimesFM model in AlloyDB, as described in the following section.
- 80 ); Register the TimesFM model in AlloyDB To register the TimesFM model in AlloyDB, follow these steps: Verify that the google ml integration extension is installed in the AlloyDB database that contains the data that you want to run predictions on.
- Manual deployment To manually deploy the TimesFM model using a Colaboratory notebook, follow these steps: Navigate to the Model Garden page in the Google Cloud console: Go to Model Garden In the Search field, enter TimesFM .
- One-click deployment To deploy the TimesFM model using a one-click deployment, follow these steps: In the Google Cloud console, go to the Model Garden page: Go to Model Garden In the Search field, enter TimesFM .

### Invoke predictions \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/invoke-predictions](https://docs.cloud.google.com/alloydb/docs/ai/invoke-predictions)
- Source ID: `site-docs-root-2`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Build realtime vector embedding pipeline for AlloyDB with Dataflow \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/build-etl-pipeline-alloydb-dataflow](https://docs.cloud.google.com/alloydb/docs/ai/build-etl-pipeline-alloydb-dataflow)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

### "Integrate QueryData with an application \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- Source ID: `site-docs-root-2`
- Final score: 64
- Re-rank relevance: N/A

