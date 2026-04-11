---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.695Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML image analytics with vision models"
feature_slug: "bigquery-ml-image-analytics-with-vision-models"
latest_feature_date: "2023-01-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/ai-application-overview"
keywords:
  - "predict on image data"
  - "BigQuery ML image analytics"
  - "image analytics preview"
  - "vision models"
  - "image inference"
  - "vision model"
  - "image analytics"
  - "object tables"
---

# BigQuery ML image analytics with vision models

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML now supports image analytics in preview using vision models and object tables for image inference.

## Extended Definition

The feature refers to BigQuery ML’s image analytics capability exposed through the `ML.ANNOTATE_IMAGE` SQL function when operating on data in BigQuery object tables. In the BigQuery AI application overview, this function is documented alongside other object-table AI functions, indicating image annotation is supported as an image-processing workflow on object-stored data. The provided evidence does not explicitly confirm preview status, date of launch, or specific model families by name.

## Evidence Summary

The cited BigQuery documentation page explicitly lists `ML.ANNOTATE_IMAGE` (with other AI functions) as working on object table data, which supports the core image-analytics feature but not its preview or vision-model details.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/ai-application-overview](https://docs.cloud.google.com/bigquery/docs/ai-application-overview)

## Supporting Pages

### Task-specific solutions overview \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-application-overview](https://docs.cloud.google.com/bigquery/docs/ai-application-overview)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: MODERATE
- Re-rank rationale: The page includes computer vision as a supported task and notes ML inference workflows with AI services, but does not explicitly detail vision image analytics in object-table mode.

Evidence snippets:
- ML.PROCESS DOCUMENT works on documents in object tables .
- ML.TRANSCRIBE works with audio files in object tables .
- ML.ANNOTATE IMAGE works with data in object tables .

