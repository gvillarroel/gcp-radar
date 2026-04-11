---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.466Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML supervised tuning for Vertex AI Gemini models"
feature_slug: "bigquery-ml-supervised-tuning-for-vertex-ai-gemini-models"
latest_feature_date: "2024-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
keywords:
  - "supervised tuning on remote model"
  - "BigQuery ML supervised tuning"
  - "supervised tuning"
  - "Gemini 1.5 Flash tuning"
  - "Gemini 1.5 Pro tuning"
  - "Vertex AI Gemini models"
  - "BQ ML tuning"
  - "Gemini tuning"
---

# BigQuery ML supervised tuning for Vertex AI Gemini models

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML now supports supervised tuning on remote models built on Vertex AI Gemini 1.5 Flash or Gemini 1.5 Pro.

## Extended Definition

BigQuery ML’s `CREATE MODEL` syntax supports supervised tuning for remote models hosted on Google models in Vertex AI by exposing tuning-specific options during model creation. The documented options include a learning rate multiplier, an evaluation task selector, and a prompt column parameter used in the training data for tuning.

## Evidence Summary

The cited CREATE MODEL reference page provides direct syntax evidence that supervised tuning can be configured for BigQuery remote models in Vertex AI via tuning-specific clauses.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)

## Supporting Pages

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Remote models over Google models in Vertex AI LEARNING RATE MULTIPLIER A multiplier to apply to the recommended learning rate when performing supervised tuning.
- Remote models over Google models in Vertex AI EVALUATION TASK When performing supervised tuning, the type of task that you want to tune the model to perform.
- ARIMA PLUS PROMPT COL The name of the prompt column in the training data table to use when performing supervised tuning.

