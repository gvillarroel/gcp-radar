---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.576Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ML.GENERATE_TEXT for visual content in BigQuery object tables"
feature_slug: "ml-generate-text-for-visual-content-in-bigquery-object-tables"
latest_feature_date: "2024-03-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma"
keywords:
  - "visual question answering"
  - "video captioning"
  - "image captioning"
  - "remote vision model with ML.GENERATE_TEXT"
  - "ML.GENERATE_TEXT function"
  - "GENERATE_TEXT function"
  - "visual Q&A"
  - "ML.GENERATE_TEXT"
---

# ML.GENERATE_TEXT for visual content in BigQuery object tables

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports using the ML.GENERATE_TEXT function with remote vision models to perform image or video captioning and visual Q&A on object table content.

## Extended Definition

BigQuery documents using the ML.GENERATE TEXT/AI.GENERATE TEXT SQL function with remote models to run generative AI tasks on data stored in BigQuery tables, with examples covering text-oriented use cases such as sentiment analysis and keyword extraction. The available excerpts do not explicitly confirm support for image/video captioning, visual question answering, or object-table input for this function.

## Evidence Summary

The cited pages collectively validate BigQuery remote-model text generation via AI/ML.GENERATE_TEXT but provide no direct evidence for the claimed visual-capability-on-object-tables variant.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)

## Supporting Pages

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

