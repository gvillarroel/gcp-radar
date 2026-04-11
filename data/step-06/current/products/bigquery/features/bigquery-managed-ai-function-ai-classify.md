---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.374Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery managed AI function AI.CLASSIFY"
feature_slug: "bigquery-managed-ai-function-ai-classify"
latest_feature_date: "2025-10-27"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/ai-introduction"
keywords:
  - "AI.CLASSIFY function"
  - "CLASSIFY AI function"
  - "text classification"
  - "user-defined categories"
  - "AI.CLASSIFY()"
  - "AI.CLASSIFY"
  - "managed AI functions"
  - "managed AI function"
---

# BigQuery managed AI function AI.CLASSIFY

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

The managed AI function AI.CLASSIFY is available in BigQuery for classifying text into user-defined categories.

## Extended Definition

AI.CLASSIFY is a managed AI function in BigQuery that classifies text into user-defined categories. The function supports specifying a model through an optional endpoint argument and can run using end-user credentials instead of a BigQuery connection, and it was updated so a single input can be classified into multiple categories.

## Evidence Summary

The release notes provide direct functional details and February 2026 update behavior for AI.CLASSIFY, while the AI introduction page confirms it is a managed AI function used for classification tasks.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- January 23, 2026 Change You can now optionally specify which model to use by passing an endpoint argument to the AI.IF , AI.SCORE , and AI.CLASSIFY functions.
- Change You can now run queries that use the AI.IF , AI.SCORE , and AI.CLASSIFY functions by using your end-user credentials instead of a BigQuery connection.
- February 12, 2026 Feature The AI.CLASSIFY function now supports classifying your input into multiple categories.
- AI.CLASSIFY : Classify text into user-defined categories.

### Introduction to AI in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Managed AI functions offer a streamlined syntax for routine tasks such as filtering, rating, and classification.

