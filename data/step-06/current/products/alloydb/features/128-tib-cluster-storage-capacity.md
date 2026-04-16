---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.494Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "128 TiB cluster storage capacity"
feature_slug: "128-tib-cluster-storage-capacity"
latest_feature_date: "2024-11-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting"
  - "https://docs.cloud.google.com/alloydb/docs/ai/tune-indexes"
  - "https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization"
keywords:
  - "128"
  - "tib"
  - "cluster"
  - "storage"
  - "capacity"
  - "alloydb"
  - "supports"
  - "up"
---

# 128 TiB cluster storage capacity

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB supports up to 128 TiB of storage per cluster in all available regions.

## Extended Definition

AlloyDB supports up to 128 TiB of storage per cluster in all available regions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting](https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting)
- [https://docs.cloud.google.com/alloydb/docs/ai/tune-indexes](https://docs.cloud.google.com/alloydb/docs/ai/tune-indexes)
- [https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization](https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization)

## Supporting Pages

### "Perform time-series forecasting \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting](https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting)
- Source ID: `site-docs-reference-2`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To construct the model request url for the SQL model creation call, replace the project and endpoint identifiers with the endpoint details from the preceding step as follows: CALL google ml . create model ( model id => 'timesfm v2' , model qualified name => 'timesfm v2' , model type => 'ts forecasting' , model provider => 'google' , model request url => 'https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /endpoints/ ENDPOINT ID :predict' ); You need this model request url in the google ml.create model call when you register the TimesFM model in AlloyDB, as described in the following section.
- Note: If your AlloyDB instance is in a different Google Cloud project than the Vertex AI model endpoint, make sure that the AlloyDB Service Account is granted the Vertex AI User role, which is roles/aiplatform.user , in the project where the Vertex AI model is hosted.
- 80 ); Register the TimesFM model in AlloyDB To register the TimesFM model in AlloyDB, follow these steps: Verify that the google ml integration extension is installed in the AlloyDB database that contains the data that you want to run predictions on.
- You use this information in Register the TimesFM model in AlloyDB —for example, https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /endpoints/ ENDPOINT ID :predict .

### "Tune vector query performance in AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/tune-indexes](https://docs.cloud.google.com/alloydb/docs/ai/tune-indexes)
- Source ID: `site-docs-reference-2`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Tune vector query performance in AlloyDB for PostgreSQL Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to tune your indexes to achieve faster query performance and better recall in AlloyDB for PostgreSQL.

### "AlloyDB query tuning and optimization \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization](https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization)
- Source ID: `site-api-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- All documented hints in the following tables are available in AlloyDB: pg hint plan hint Purpose ColumnarScan(table) , NoColumnarScan(table) Influences the planner to use columnar engine for the specified table.
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback AlloyDB query tuning and optimization Stay organized with collections Save and categorize content based on your preferences.
- This document describes different ways to optimize queries and manage indexes in AlloyDB for PostgreSQL.
- For related information on indexing strategies, see AlloyDB database indexing strategies .

