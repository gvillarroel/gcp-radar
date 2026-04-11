---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.517Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML.GENERATE_TEXT grounding and safety controls"
feature_slug: "bigquery-ml-generate-text-grounding-and-safety-controls"
latest_feature_date: "2024-05-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "safety attributes"
  - "ground_with_google_search"
  - "Google Search grounding"
  - "Google search grounding"
  - "GENERATE_TEXT grounding"
  - "grounding controls"
  - "safety controls"
  - "ML.GENERATE_TEXT"
---

# BigQuery ML.GENERATE_TEXT grounding and safety controls

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery ML.GENERATE_TEXT with Vertex AI Gemini models now supports grounding via ground_with_google_search and configurable safety attributes.

## Extended Definition

BigQuery ML.GENERATE_TEXT is a SQL function in BigQuery ML for running text generation on data, including generative tasks over text stored in BigQuery tables using remote models. BigQuery release notes state that ML.GENERATE_TEXT is part of the BigQuery generative AI function set, that AI.GENERATE_TEXT is the preferred equivalent with the same functionality, and that supported Gemini models can use Vertex AI Provisioned Throughput with this function. The provided excerpts, however, do not directly confirm the `ground_with_google_search` grounding option or configurable safety-attribute controls.

## Evidence Summary

The cited release-notes page confirms ML.GENERATE_TEXT availability and GA positioning for remote-model text generation, plus throughput improvements for Gemini usage, but not the specific grounding or safety-control parameters.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Change BigQuery ML has improved throughput by more than 100x for the following generative AI functions: ML.GENERATE TEXT AI.GENERATE TABLE AI.GENERATE AI.GENERATE BOOL AI.GENERATE DOUBLE AI.GENERATE INT Actual performance varies based on the number of input and output tokens in the request, but a typical 6-hour job can now process millions of rows.
- Feature For supported Gemini models , you can now use Vertex AI Provisioned Throughput with the ML.GENERATE TEXT and AI.GENERATE functions to provide consistent high throughput for requests.
- Try these features with the Generate text by using the ML.GENERATE TEXT function how-to topic and the Generate text by using a Gemma open model and the ML.GENERATE TEXT function tutorial.
- AI.GENERATE TEXT is the new, preferred version of ML.GENERATE TEXT , which has the same functionality but with simplified column output names.

