---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.592Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ML.GENERATE_TEXT with remote models in BigQuery"
feature_slug: "ml-generate-text-with-remote-models-in-bigquery"
latest_feature_date: "2024-02-15"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "ML.GENERATE_TEXT with REMOTE"
  - "remote model inference"
  - "text generation query"
  - "GENERATE_TEXT function"
  - "ML.GENERATE_TEXT()"
  - "ML.GENERATE_TEXT"
  - "GENERATE_TEXT"
---

# ML.GENERATE_TEXT with remote models in BigQuery

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

Supports using ML.GENERATE_TEXT with a remote model to run generative natural language tasks on BigQuery table text.

## Extended Definition

BigQuery supports running `ML.GENERATE_TEXT` (documented also as `AI.GENERATE TEXT`) against a remote model to process text stored in BigQuery tables. In this flow, you create a remote model based on an external model (for example, Gemma or Gemini) and then call the function in a SQL query to perform generative natural-language tasks such as keyword extraction and sentiment analysis. This is intended for broad generative AI tasks applied to table text, where the model is invoked directly from BigQuery queries.

## Evidence Summary

The two tutorials provide concrete examples of remote-model setup plus `AI.GENERATE TEXT` usage for keyword and sentiment workflows on IMDB review text, while the release notes confirm this as a supported `ML.GENERATE TEXT` remote-model capability for BigQuery table text.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Generate text by using a Gemma open model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)
- Source ID: `site-docs-root-2`
- Final score: 106
- Re-rank relevance: STRONG
- Re-rank rationale: The page explains running generative text with a remote Vertex AI model in BigQuery, including setup and execution flow.

Evidence snippets:
- Generate text by using a Gemma open model and the AI.GENERATE TEXT function This tutorial shows you how to create a remote model that's based on the Gemma model , and then how to use that model with the AI.GENERATE TEXT function to extract keywords and perform sentiment analysis on movie reviews from the bigquery-public-data.imdb.reviews public table.
- Perform keyword extraction Perform keyword extraction on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- GENERATE TEXT ( MODEL bqml tutorial . gemma model , ( SELECT 'Analyze the sentiment of the following movie review and classify it as either POSITIVE or NEGATIVE. \nMovie Review: ' review AS prompt , FROM bigquery - public - data . imdb . reviews LIMIT 10 ), STRUCT ( 0 .

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-root-2`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: The tutorial explains using a remote Gemini model from Vertex AI with the text-generation function, which materially relates to remote-model text generation though under AI.GENERATE_TEXT naming.

Evidence snippets:
- Generic Cinematography and boring, there's really nothing... ... ... ... +--------------+------------------+----------------------------------------+ Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- Home Documentation Data analytics BigQuery Guides Send feedback Generate text by using a Gemini model and the AI.GENERATE TEXT function Stay organized with collections Save and categorize content based on your preferences.
- This tutorial shows you how to create a remote model that's based on the gemini-2.5-flash model , and how to use that model with the AI.GENERATE TEXT function to extract keywords and perform sentiment analysis.
- Perform keyword extraction Perform keyword extraction on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Try these features with the Generate text by using the ML.GENERATE TEXT function how-to topic and the Generate text by using a Gemma open model and the ML.GENERATE TEXT function tutorial.
- Use the ML.GENERATE TEXT function with these remote models to perform generative natural language tasks for text stored in BigQuery tables.
- Use the ML.GENERATE TEXT function with these remote models to perform generative natural language tasks for text stored in BigQuery tables.
- Using the ML.GENERATE TEXT function with this remote model to perform a broad range of generative AI tasks.

