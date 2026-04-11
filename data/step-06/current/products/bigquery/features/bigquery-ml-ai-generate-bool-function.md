---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.356Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML AI.GENERATE_BOOL function"
feature_slug: "bigquery-ml-ai-generate-bool-function"
latest_feature_date: "2025-11-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "scalar bool result"
  - "Gemini bool prompt"
  - "AI.GENERATE_BOOL function"
  - "AI.GENERATE_BOOL"
  - "boolean-oriented output"
  - "GENERATE_BOOL"
  - "AI boolean function"
  - "boolean output"
---

# BigQuery ML AI.GENERATE_BOOL function

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery ML adds AI.GENERATE_BOOL for returning scalar boolean outputs from generative AI prompts; BigQuery ML adds the AI.GENERATE_BOOL function for text analysis with boolean-oriented output using a Vertex AI Gemini model.

## Extended Definition

BigQuery ML includes AI.GENERATE_BOOL as part of its AI.GENERATE_* family of functions for producing a scalar boolean result. In official BigQuery release notes, this function is described as a scalar-valued AI.GENERATE function (where output type aligns with the function name) used for tasks like filtering, scoring, and counting, and it is identified as a preview feature.

## Evidence Summary

The BigQuery release notes page confirms AI.GENERATE_BOOL exists, returns scalar boolean output matching function naming conventions, is intended for structured use cases like filtering/scoring/counting, and is currently in preview.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Change BigQuery ML has improved throughput by more than 100x for the following generative AI functions: ML.GENERATE TEXT AI.GENERATE TABLE AI.GENERATE AI.GENERATE BOOL AI.GENERATE DOUBLE AI.GENERATE INT Actual performance varies based on the number of input and output tokens in the request, but a typical 6-hour job can now process millions of rows.
- You can use the AI.GENERATE BOOL , AI.GENERATE DOUBLE , and AI.GENERATE INT functions to generate scalar values, which are convenient for filtering, scoring, and counting purposes.
- The function output includes a response that matches the type in the function name: AI.GENERATE AI.GENERATE BOOL AI.GENERATE INT AI.GENERATE DOUBLE This feature is in preview .

