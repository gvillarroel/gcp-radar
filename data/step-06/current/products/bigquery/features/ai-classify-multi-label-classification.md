---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.342Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "AI.CLASSIFY multi-label classification"
feature_slug: "ai-classify-multi-label-classification"
latest_feature_date: "2026-02-12"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "multi label classification"
  - "AI classification function"
  - "multiple output categories"
  - "classify input"
  - "multi-label"
  - "AI.CLASSIFY"
  - "CLASSIFY"
---

# AI.CLASSIFY multi-label classification

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

AI.CLASSIFY now supports classifying an input into multiple categories.

## Extended Definition

AI.CLASSIFY is a BigQuery function for classifying text into user-defined categories, and as of February 12, 2026 it supports multi-label classification. This indicates AI.CLASSIFY can return multiple category labels for a single input instead of only one.

## Evidence Summary

The BigQuery release notes explicitly add AI.CLASSIFY multi-category (multi-label) support on Feb 12, 2026 and define AI.CLASSIFY as text classification into user-defined categories.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- January 23, 2026 Change You can now optionally specify which model to use by passing an endpoint argument to the AI.IF , AI.SCORE , and AI.CLASSIFY functions.
- Change You can now run queries that use the AI.IF , AI.SCORE , and AI.CLASSIFY functions by using your end-user credentials instead of a BigQuery connection.
- February 12, 2026 Feature The AI.CLASSIFY function now supports classifying your input into multiple categories.
- AI.CLASSIFY : Classify text into user-defined categories.

### "Generate text by using a Gemma open model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)
- Source ID: `site-docs-root-2`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- 2 AS temperature , 128 AS max output tokens )); The output is similar to the following, with non-generated columns omitted for clarity: +-----------------------------+-------------------------+-----------------------------+-----+ result status prompt ... +-----------------------------+-------------------------+-----------------------------+-----+ NEGATIVE Analyze the sentiment of movie review and classify it as either POSITIVE or NEGATIVE.
- Movie Review: Although Charlie Chaplin made some great short comedies in the late... +-----------------------------+-------------------------+-----------------------------+-----+ NEGATIVE Analyze the sentiment of movie review and classify it as either POSITIVE or NEGATIVE.
- GENERATE TEXT ( MODEL bqml tutorial . gemma model , ( SELECT 'Analyze the sentiment of the following movie review and classify it as either POSITIVE or NEGATIVE. \nMovie Review: ' review AS prompt , FROM bigquery - public - data . imdb . reviews LIMIT 10 ), STRUCT ( 0 .

