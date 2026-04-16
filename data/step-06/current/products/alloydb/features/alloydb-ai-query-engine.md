---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.482Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB AI query engine"
feature_slug: "alloydb-ai-query-engine"
latest_feature_date: "2025-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators"
  - "https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint"
  - "https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing"
keywords:
  - "alloydb"
  - "ai"
  - "query"
  - "engine"
  - "lets"
  - "you"
  - "combine"
  - "natural"
---

# AlloyDB AI query engine

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB AI query engine lets you combine natural language with SQL by using AI operators such as ai.if, ai.rank, and ai.generate; AlloyDB AI query engine extends model endpoint management with AI operators and support for Vertex AI multimodal and ranking models.

## Extended Definition

AlloyDB AI query engine lets you combine natural language with SQL by using AI operators such as ai.if, ai.rank, and ai.generate; AlloyDB AI query engine extends model endpoint management with AI operators and support for Vertex AI multimodal and ranking models.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- [https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing](https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing)

## Supporting Pages

### "Perform intelligent SQL queries using AI functions \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- Source ID: `site-docs-reference`
- Final score: 584
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This feature includes built-in functions for the following: Filtering ( ai.if ) Semantic ranking ( ai.rank ) Text generation ( ai.generate ) These AI functions use the AlloyDB AI query engine to help your application process data using artificial intelligence models at various scales, from single-row responses to large-scale database operations.
- After registering the model, you can use it in AI functions as follows: SELECT ai . generate ( prompt = > 'What is AlloyDB?' , model id = > 'gemini-3-preview-model' ); Use filters in your queries AlloyDB AI offers AI-powered SQL functions that let you use natural language processing and LLMs directly within your database queries, including the ai.if and ai.rank operators.
- You can use the ai.if , ai.rank , and ai.generate operators to combine natural language with SQL queries.
- Here is the review:' review ) DESC LIMIT 20 ; Perform scoring using array-based functions This ai.rank function lets you score and rank query results based on custom natural language instructions.

### "Model endpoint management reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- Source ID: `site-api-reference`
- Final score: 289
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: A conf level of 0.80 means you can expect the actual future value to fall within the predicted interval 80% of the time. ai.rank() / google ml.rank() function The following shows how to get an score for items in the query based on a semantic criteria specified in natural language: SELECT ai . rank ( model id = > ' MODEL ID ' , prompt = > ' PROMPT ' ); Parameter Description MODEL ID (Optiona) A unique ID for the model endpoint that you define.
- AlloyDB reserves, and creates, the ai schema. ai.rank()/google ml.rank() function You can use the ai.rank() function in two ways: to rank documents against a search query or to score items based on a semantic prompt.
- The ai.rank() function can be used to return scores for how well a document answers a given query or to identify ranking of the items in a query based on a criteria specified in natural language.
- The ai.generate ( Preview ) SQL function in the AI functions, to generate text based on prompts specified in natural language. ai schema AlloyDB reserves, and creates, the ai schema.

### AI functions overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing](https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- How the AI functions works When you embed an AI operator like ai.if() , ai.rank() , or ai.generate() into your SQL query, the AI functions ( Preview ) detects it.
- The google ml integration extension provides operators like ai.if() ( Preview ) for intelligent filtering and ai.rank() ( Preview ) for semantic reranking.
- Using the ai.generate() ( Preview ) operator, you can ask a foundation model to summarize a product review, or to transform data directly in your query.
- Learn more Explore developer resources to build your own natural language query applications with AlloyDB AI.

