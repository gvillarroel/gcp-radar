---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.418Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Vertex AI Provisioned Throughput support for BigQuery SQL AI generation"
feature_slug: "vertex-ai-provisioned-throughput-support-for-bigquery-sql-ai-generation"
latest_feature_date: "2025-06-10"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "Vertex AI Provisioned Throughput"
  - "provisioned throughput"
  - "Provisioned Throughput"
  - "Vertex AI PT"
  - "BigQuery SQL AI generation"
  - "AI generation function"
  - "AI.GENERATE_TEXT"
  - "ML.GENERATE_TEXT"
---

# Vertex AI Provisioned Throughput support for BigQuery SQL AI generation

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports Vertex AI Provisioned Throughput for ML.GENERATE_TEXT and AI.GENERATE functions to provide consistent high throughput.

## Extended Definition

BigQuery supports Vertex AI Provisioned Throughput with the AI.GENERATE and ML.GENERATE functions (notably ML.GENERATE TEXT and AI.GENERATE TEXT) for supported Gemini models, enabling more consistent high-throughput request handling for SQL-based AI generation. BigQuery documentation also identifies AI.GENERATE TEXT as the preferred equivalent of ML.GENERATE TEXT, with the same functionality and simplified column output names.

## Evidence Summary

The release notes provide the direct feature statement about Vertex AI Provisioned Throughput and throughput benefits, while the BigQuery tutorials confirm active use of AI/ML.GENERATE text functions with remote models in BigQuery SQL.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-root-2`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Generic Cinematography and boring, there's really nothing... ... ... ... +--------------+------------------+----------------------------------------+ Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- Home Documentation Data analytics BigQuery Guides Send feedback Generate text by using a Gemini model and the AI.GENERATE TEXT function Stay organized with collections Save and categorize content based on your preferences.
- This tutorial shows you how to create a remote model that's based on the gemini-2.5-flash model , and how to use that model with the AI.GENERATE TEXT function to extract keywords and perform sentiment analysis.
- Perform keyword extraction Perform keyword extraction on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.

### "Generate text by using a Gemma open model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)
- Source ID: `site-docs-root-2`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Generate text by using a Gemma open model and the AI.GENERATE TEXT function This tutorial shows you how to create a remote model that's based on the Gemma model , and then how to use that model with the AI.GENERATE TEXT function to extract keywords and perform sentiment analysis on movie reviews from the bigquery-public-data.imdb.reviews public table.
- Perform keyword extraction Perform keyword extraction on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Feature For supported Gemini models , you can now use Vertex AI Provisioned Throughput with the ML.GENERATE TEXT and AI.GENERATE functions to provide consistent high throughput for requests.
- AI.GENERATE TEXT is the new, preferred version of ML.GENERATE TEXT , which has the same functionality but with simplified column output names.
- Change BigQuery ML has improved throughput by more than 100x for the following generative AI functions: ML.GENERATE TEXT AI.GENERATE TABLE AI.GENERATE AI.GENERATE BOOL AI.GENERATE DOUBLE AI.GENERATE INT Actual performance varies based on the number of input and output tokens in the request, but a typical 6-hour job can now process millions of rows.
- Try these features with the Generate text by using the ML.GENERATE TEXT function how-to topic and the Generate text by using a Gemma open model and the ML.GENERATE TEXT function tutorial.

