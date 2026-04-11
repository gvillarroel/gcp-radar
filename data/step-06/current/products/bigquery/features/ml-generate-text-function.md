---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.629Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ML.GENERATE_TEXT function"
feature_slug: "ml-generate-text-function"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
keywords:
  - "GEN_TEXT function"
  - "prompt-based generation"
  - "LLM-powered function"
  - "text generation function"
  - "GENERATE_TEXT function"
  - "table data generation"
  - "ML.GENERATE_TEXT"
  - "GENERATE_TEXT()"
---

# ML.GENERATE_TEXT function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML now supports the ML.GENERATE_TEXT function with an LLM-based remote model to perform generative natural-language tasks on table data.

## Extended Definition

AI.GENERATE_TEXT is a BigQuery SQL function that takes a text prompt and invokes a remote Large Language Model (LLM) model to produce generated output. BigQuery tutorials show it being used with remote models based on Gemma and Gemini, where prompts are derived from table data (for example, movie reviews) to perform keyword extraction and sentiment analysis, and also with vector-search results fed into prompts for retrieval-augmented generation.

## Evidence Summary

The cited BigQuery tutorial pages provide implementation examples of AI.GENERATE_TEXT with remote Gemma/Gemini models, prompt-based generation from table queries, and RAG-style prompting with vector search context.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)

## Supporting Pages

### "Generate text by using a Gemma open model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)
- Source ID: `site-docs-root-2`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: The tutorial covers generative text via AI.GENERATE_TEXT on table data, which is closely related but uses the AI-namespace function name instead of ML.GENERATE_TEXT.

Evidence snippets:
- Generate text by using a Gemma open model and the AI.GENERATE TEXT function This tutorial shows you how to create a remote model that's based on the Gemma model , and then how to use that model with the AI.GENERATE TEXT function to extract keywords and perform sentiment analysis on movie reviews from the bigquery-public-data.imdb.reviews public table.
- Perform keyword extraction Perform keyword extraction on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- GENERATE TEXT ( MODEL bqml tutorial . gemma model , ( SELECT 'Analyze the sentiment of the following movie review and classify it as either POSITIVE or NEGATIVE. \nMovie Review: ' review AS prompt , FROM bigquery - public - data . imdb . reviews LIMIT 10 ), STRUCT ( 0 .

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-root-2`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: The page centers on AI.GENERATE_TEXT and does not describe the legacy ML.GENERATE_TEXT API explicitly.

Evidence snippets:
- Generic Cinematography and boring, there's really nothing... ... ... ... +--------------+------------------+----------------------------------------+ Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- Home Documentation Data analytics BigQuery Guides Send feedback Generate text by using a Gemini model and the AI.GENERATE TEXT function Stay organized with collections Save and categorize content based on your preferences.
- This tutorial shows you how to create a remote model that's based on the gemini-2.5-flash model , and how to use that model with the AI.GENERATE TEXT function to extract keywords and perform sentiment analysis.
- Perform keyword extraction Perform keyword extraction on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Generate text augmented by vector search results Feed the search results as prompts to generate text with the AI.GENERATE TEXT function In the Google Cloud console, go to the BigQuery page.
- Perform RAG by generating text with the AI.GENERATE TEXT function , and using vector search results to augment the prompt input and improve results.
- GENERATE TEXT ( MODEL bqml tutorial.text model , ( SELECT CONCAT ( 'Propose some project ideas to improve user password security using the context below: ' , STRING AGG ( FORMAT ( "patent title: %s, patent abstract: %s" , base . title , base . abstract ), ', \n ' ) ) AS prompt , FROM VECTOR SEARCH ( TABLE bqml tutorial.embeddings , 'embedding' , ( SELECT embedding , content AS query FROM AI .
- Generate text embeddings Generate text embeddings from patent abstracts using the AI.GENERATE EMBEDDING function , and then write them to a BigQuery table so that they can be searched.

