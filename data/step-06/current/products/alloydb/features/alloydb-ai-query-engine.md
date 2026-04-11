---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.582Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB AI query engine"
feature_slug: "alloydb-ai-query-engine"
latest_feature_date: "2025-05-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators"
  - "https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "text and image embeddings"
  - "Vertex AI multimodal"
  - "AlloyDB AI query engine"
  - "AI SQL functions"
  - "ai.if"
  - "ai functions"
  - "AI query engine"
  - "ai.rank"
---

# AlloyDB AI query engine

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB AI query engine introduces AI SQL capabilities including ai.if, ai.rank, and ai.generate with multimodal and text embedding model integration; AlloyDB AI query engine is in Preview and enables SQL with AI operators plus Vertex AI multimodal and ranking models for filtering, joining, ranking, and summarization.

## Extended Definition

AlloyDB AI query engine introduces AI SQL capabilities including ai.if, ai.rank, and ai.generate with multimodal and text embedding model integration; AlloyDB AI query engine is in Preview and enables SQL with AI operators plus Vertex AI multimodal and ranking models for filtering, joining, ranking, and summarization.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### "Perform intelligent SQL queries using AI functions \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- Source ID: `site-docs-root-2`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This feature includes built-in functions for the following: Filtering ( ai.if ) Semantic ranking ( ai.rank ) Text generation ( ai.generate ) These AI functions use the AlloyDB AI query engine to help your application process data using artificial intelligence models at various scales, from single-row responses to large-scale database operations.
- After registering the model, you can use it in AI functions as follows: SELECT ai . generate ( prompt = > 'What is AlloyDB?' , model id = > 'gemini-3-preview-model' ); Use filters in your queries AlloyDB AI offers AI-powered SQL functions that let you use natural language processing and LLMs directly within your database queries, including the ai.if and ai.rank operators.
- To use the AlloyDB AI query engine functionality, set the google ml integration.enable ai query engine flag to on .
- You can use the ai.if , ai.rank , and ai.generate operators to combine natural language with SQL queries.

### "Model endpoint management reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- Source ID: `site-api-reference`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Filters and join with ai.if ( Preview ) SQL function in the AI functions, provides support to evaluate the conditions specified using natural language.
- Filters and join with ai.if ( Preview ) SQL function in the AI functions, provides support to evaluate the conditions specified using natural language.
- The ai.rank ( Preview ) SQL function in the AI functions, to order a list of items in a query based on a criteria stated using natural language.
- The ai.rank ( Preview ) SQL function in the AI functions, to order a list of items in a query based on a criteria stated using natural language.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: The page includes an AI-adjacent natural-language querying preview (QueryData), but does not reference the AI query engine API/operators listed in this feature.

Evidence snippets:
- May 21, 2025 Feature AlloyDB AI query engine ( Preview ) lets you combine natural language with SQL using operators like ai.if , ai.rank , and ai.generate .
- Feature AlloyDB AI query engine that builds on model endpoint management , and adds support for AI operators and Vertex AI multimodal and ranking models is available in ( Preview ).
- You can combine natural language phrases with SQL queries, like ai.if() for filters and joins, ai.rank() for ordering using ranking models, and ai.generate() for generating summaries of your data, and generate multimodal embeddings.
- This feature includes out-of-the-box functions for filtering ( ai.if ), semantic ranking ( ai.rank ), generation ( ai.generate ), and forecasting ( ai.forecast ).

