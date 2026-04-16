---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.472Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Gemini 3.0 support for generative AI functions"
feature_slug: "gemini-3-0-support-for-generative-ai-functions"
latest_feature_date: "2025-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators"
  - "https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint"
  - "https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing"
keywords:
  - "gemini"
  - "generative"
  - "ai"
  - "functions"
  - "lets"
  - "alloydb"
  - "use"
  - "models"
---

# Gemini 3.0 support for generative AI functions

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Gemini 3.0 support lets AlloyDB generative AI functions use Gemini 3.0 models such as AI.GENERATE.

## Extended Definition

Gemini 3.0 support lets AlloyDB generative AI functions use Gemini 3.0 models such as AI.GENERATE.

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
- Final score: 251
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- After registering the model, you can use it in AI functions as follows: SELECT ai . generate ( prompt = > 'What is AlloyDB?' , model id = > 'gemini-3-preview-model' ); Use filters in your queries AlloyDB AI offers AI-powered SQL functions that let you use natural language processing and LLMs directly within your database queries, including the ai.if and ai.rank operators.
- This feature includes built-in functions for the following: Filtering ( ai.if ) Semantic ranking ( ai.rank ) Text generation ( ai.generate ) These AI functions use the AlloyDB AI query engine to help your application process data using artificial intelligence models at various scales, from single-row responses to large-scale database operations.
- Fetch results from the output cursor and store them LOOP FETCH result cursor INTO rec ; EXIT WHEN NOT FOUND ; INSERT INTO filtered results VALUES ( rec . input , rec . output ); END LOOP ; CLOSE result cursor ; END $$ ; Text generation and summarization AlloyDB AI offers text generation operators like scalar ai.generate and array-based and cursor-based ai.generate .
- Perform text generation using scalar functions The ai.generate function produces text by combining provided data with the user's prompt. -- Function Signature FUNCTION ai . generate ( prompt TEXT , model id VARCHAR ( 100 ) DEFAULT NULL ) RETURNS TEXT For example, you can use the following query to generate a concise summary of each user review.

### "Model endpoint management reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- Source ID: `site-api-reference`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The ai.generate ( Preview ) SQL function in the AI functions, to generate text based on prompts specified in natural language. ai schema AlloyDB reserves, and creates, the ai schema.
- The ai.generate ( Preview ) SQL function in the AI functions, to generate text based on prompts specified in natural language.
- Here is the review: ai.generate() / google ml.generate() function The following shows how to generate embeddings using the default embedding model: SELECT ai . generate ( model id = > ' MODEL ID ' , prompt = > ' PROMPT ' ); Parameter Description MODEL ID (Optional) A unique ID for the model endpoint that you define.
- The following table shows the auth types that you can set: Authentication method Set in function as… Model provider AlloyDB service agent alloydb service agent iam Vertex AI provider Secret Manager secret manager third-party providers, such as Anthropic, Hugging Face, or OpenAI Models Use this reference to understand parameters for functions that let you manage model endpoints. google ml.create model() function The following shows how to call the google ml.create model() SQL function used to register model endpoint metadata: CALL google ml . create model ( model id = > ' MODEL ID ' , model request url = > ' REQUEST URL ' , model provider = > ' PROVIDER ID ' , model type = > ' MODEL TYPE ' , model qualified name = > ' MODEL QUALIFIED NAME ' , model auth type = > ' AUTH TYPE ' , model auth id = > ' AUTH ID ' , generate headers fn = > ' GENERATE HEADER FUNCTION ' , model in transform fn = > ' INPUT TRANSFORM FUNCTION ' , model out transform fn = > ' OUTPUT TRANSFORM FUNCTION ' ); Parameter Required Description MODEL ID required for all model endpoints A unique ID for the model endpoint that you define.

### AI functions overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing](https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- How the AI functions works When you embed an AI operator like ai.if() , ai.rank() , or ai.generate() into your SQL query, the AI functions ( Preview ) detects it.
- Using the ai.generate() ( Preview ) operator, you can ask a foundation model to summarize a product review, or to transform data directly in your query.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback AI functions overview Stay organized with collections Save and categorize content based on your preferences.
- The AlloyDB AI functions ( Preview ) integrates with Vertex AI to bring intelligent filtering, semantic ranking, and text generation to your operational data in real time.

