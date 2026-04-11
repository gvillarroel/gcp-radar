---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.357Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML AI.GENERATE_INT function"
feature_slug: "bigquery-ml-ai-generate-int-function"
latest_feature_date: "2025-11-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "AI.GENERATE_INT function"
  - "Gemini AI.GENERATE_INT"
  - "AI.GENERATE_INT"
  - "ML.GENERATE_INT"
  - "returns INTEGER from prompt"
  - "scalar integer output"
  - "integer generation"
  - "BigQuery ML AI function"
---

# BigQuery ML AI.GENERATE_INT function

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery ML adds AI.GENERATE_INT for returning scalar integer outputs from generative AI prompts; BigQuery ML adds the AI.GENERATE_INT function for text analysis with integer-oriented output using a Vertex AI Gemini model.

## Extended Definition

AI.GENERATE_INT is a BigQuery ML generative AI SQL function in BigQuery that returns scalar integer values, with function output typed to match the function name (INTEGER). It is positioned for use cases such as filtering, scoring, and counting. The feature is listed as being in preview.

## Evidence Summary

The BigQuery release notes explicitly describe AI.GENERATE_INT as a scalar integer-generating function, part of BigQuery ML generative AI functions, and note its preview status.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- You can use the AI.GENERATE BOOL , AI.GENERATE DOUBLE , and AI.GENERATE INT functions to generate scalar values, which are convenient for filtering, scoring, and counting purposes.
- Change BigQuery ML has improved throughput by more than 100x for the following generative AI functions: ML.GENERATE TEXT AI.GENERATE TABLE AI.GENERATE AI.GENERATE BOOL AI.GENERATE DOUBLE AI.GENERATE INT Actual performance varies based on the number of input and output tokens in the request, but a typical 6-hour job can now process millions of rows.
- The function output includes a response that matches the type in the function name: AI.GENERATE AI.GENERATE BOOL AI.GENERATE INT AI.GENERATE DOUBLE This feature is in preview .

