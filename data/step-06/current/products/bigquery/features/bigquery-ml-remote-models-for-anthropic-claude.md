---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.449Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML remote models for Anthropic Claude"
feature_slug: "bigquery-ml-remote-models-for-anthropic-claude"
latest_feature_date: "2025-03-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "Anthropic Claude in BQML"
  - "BQML remote model for Claude"
  - "Anthropic Claude model"
  - "CREATE MODEL remote options"
  - "BigQuery ML remote models"
  - "Vertex AI remote model"
  - "LLM remote model"
  - "ML.GENERATE_TEXT"
---

# BigQuery ML remote models for Anthropic Claude

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery ML now supports creating remote models based on Anthropic Claude in Vertex AI and using ML.GENERATE_TEXT/ML.EVALUATE with those models.

## Extended Definition

The available release-note evidence shows that BigQuery ML’s generative functions (ML.GENERATE_TEXT and AI.GENERATE) can use supported Gemini models with Vertex AI Provisioned Throughput for improved/consistent request throughput. It does not explicitly confirm Anthropic Claude remote model creation or ML.EVALUATE support in the provided excerpt, so Claude-specific remote-model behavior is not established from this source.

## Evidence Summary

The cited page provides performance and throughput improvements for BigQuery ML text generation functions with supported Gemini models in Vertex AI, but does not provide explicit evidence for Anthropic Claude remote models or ML.EVALUATE usage.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Change BigQuery ML has improved throughput by more than 100x for the following generative AI functions: ML.GENERATE TEXT AI.GENERATE TABLE AI.GENERATE AI.GENERATE BOOL AI.GENERATE DOUBLE AI.GENERATE INT Actual performance varies based on the number of input and output tokens in the request, but a typical 6-hour job can now process millions of rows.
- Feature For supported Gemini models , you can now use Vertex AI Provisioned Throughput with the ML.GENERATE TEXT and AI.GENERATE functions to provide consistent high throughput for requests.
- Try these features with the Generate text by using the ML.GENERATE TEXT function how-to topic and the Generate text by using a Gemma open model and the ML.GENERATE TEXT function tutorial.
- AI.GENERATE TEXT is the new, preferred version of ML.GENERATE TEXT , which has the same functionality but with simplified column output names.

