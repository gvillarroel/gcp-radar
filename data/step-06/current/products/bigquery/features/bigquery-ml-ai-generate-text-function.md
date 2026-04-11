---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.358Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML AI.GENERATE_TEXT function"
feature_slug: "bigquery-ml-ai-generate-text-function"
latest_feature_date: "2025-11-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "replacement for ML.GENERATE_TEXT"
  - "text generation model prompt"
  - "AI.GENERATE_TEXT function"
  - "BigQuery ML text function"
  - "AI.GENERATE_TEXT"
  - "ML.GENERATE_TEXT"
---

# BigQuery ML AI.GENERATE_TEXT function

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery ML now offers AI.GENERATE_TEXT as the preferred replacement for ML.GENERATE_TEXT.

## Extended Definition

AI.GENERATE_TEXT is a BigQuery ML SQL function used with remote models (for example, Gemini or Gemma models) to generate text for tasks such as keyword extraction and sentiment analysis. Google Cloud BigQuery release notes state that AI.GENERATE_TEXT is the new preferred form of ML.GENERATE_TEXT and provides the same functionality, with simplified output column names.

## Evidence Summary

The tutorial pages show real usage of AI.GENERATE_TEXT with remote models for text-generation use cases, and the release notes explicitly document its preferred status versus ML.GENERATE_TEXT.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-root-2`
- Final score: 88
- Re-rank relevance: STRONG
- Re-rank rationale: The page is explicitly about creating a Gemini remote model and using the AI.GENERATE_TEXT function in BigQuery.

Evidence snippets:
- Generic Cinematography and boring, there's really nothing... ... ... ... +--------------+------------------+----------------------------------------+ Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- Home Documentation Data analytics BigQuery Guides Send feedback Generate text by using a Gemini model and the AI.GENERATE TEXT function Stay organized with collections Save and categorize content based on your preferences.
- This tutorial shows you how to create a remote model that's based on the gemini-2.5-flash model , and how to use that model with the AI.GENERATE TEXT function to extract keywords and perform sentiment analysis.
- Perform keyword extraction Perform keyword extraction on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.

### "Generate text by using a Gemma open model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)
- Source ID: `site-docs-root-2`
- Final score: 88
- Re-rank relevance: STRONG
- Re-rank rationale: The page is explicitly about the AI.GENERATE_TEXT function and describes its usage in a BigQuery ML workflow.

Evidence snippets:
- Generate text by using a Gemma open model and the AI.GENERATE TEXT function This tutorial shows you how to create a remote model that's based on the Gemma model , and then how to use that model with the AI.GENERATE TEXT function to extract keywords and perform sentiment analysis on movie reviews from the bigquery-public-data.imdb.reviews public table.
- Perform keyword extraction Perform keyword extraction on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- AI.GENERATE TEXT is the new, preferred version of ML.GENERATE TEXT , which has the same functionality but with simplified column output names.
- Change BigQuery ML has improved throughput by more than 100x for the following generative AI functions: ML.GENERATE TEXT AI.GENERATE TABLE AI.GENERATE AI.GENERATE BOOL AI.GENERATE DOUBLE AI.GENERATE INT Actual performance varies based on the number of input and output tokens in the request, but a typical 6-hour job can now process millions of rows.
- Feature For supported Gemini models , you can now use Vertex AI Provisioned Throughput with the ML.GENERATE TEXT and AI.GENERATE functions to provide consistent high throughput for requests.
- Try these features with the Generate text by using the ML.GENERATE TEXT function how-to topic and the Generate text by using a Gemma open model and the ML.GENERATE TEXT function tutorial.

