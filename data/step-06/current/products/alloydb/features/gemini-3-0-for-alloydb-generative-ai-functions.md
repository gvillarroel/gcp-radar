---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.819Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Gemini 3.0 for AlloyDB generative AI functions"
feature_slug: "gemini-3-0-for-alloydb-generative-ai-functions"
latest_feature_date: "2025-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/build-context-gemini-cli"
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables"
  - "https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators"
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language"
keywords:
  - "Gemini function invocation"
  - "AI function calls"
  - "AlloyDB generative AI functions"
  - "AI.GENERATE function"
  - "AI.GENERATE"
  - "Gemini 3.0"
  - "Gemini 3"
---

# Gemini 3.0 for AlloyDB generative AI functions

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB now supports calling Gemini 3.0 in generative AI functions such as AI.GENERATE.

## Extended Definition

AlloyDB now supports calling Gemini 3.0 in generative AI functions such as AI.GENERATE.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/build-context-gemini-cli](https://docs.cloud.google.com/alloydb/docs/ai/build-context-gemini-cli)
- [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)

## Supporting Pages

### "Build context sets using Gemini CLI \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/build-context-gemini-cli](https://docs.cloud.google.com/alloydb/docs/ai/build-context-gemini-cli)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Generate and manage auto vector embeddings for large tables \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- Source ID: `site-docs-reference-2`
- Final score: 90
- Re-rank relevance: N/A

### "Perform intelligent SQL queries using AI functions \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- Source ID: `site-docs-reference-2`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- CALL google ml . create model ( model id = > 'gemini-2.5-flash-lite-global' , model type = > 'llm' , model provider = > 'google' , model qualified name = > 'gemini-2.5-flash-lite' , model request url = > 'https://aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/global/publishers/google/models/gemini-2.5-flash-lite:generateContent' , model auth type = > 'alloydb service agent iam' ); Use Gemini 3.0 models Some Gemini models, such as gemini-3.0-pro-preview , are available only through the global endpoint.
- Perform text generation using scalar functions The ai.generate function produces text by combining provided data with the user's prompt. -- Function Signature FUNCTION ai . generate ( prompt TEXT , model id VARCHAR ( 100 ) DEFAULT NULL ) RETURNS TEXT For example, you can use the following query to generate a concise summary of each user review.
- Fetch results from the output cursor and store them LOOP FETCH result cursor INTO rec ; EXIT WHEN NOT FOUND ; INSERT INTO filtered results VALUES ( rec . input , rec . output ); END LOOP ; CLOSE result cursor ; END $$ ; Text generation and summarization AlloyDB AI offers text generation operators like scalar ai.generate and array-based and cursor-based ai.generate .
- This feature includes built-in functions for the following: Filtering ( ai.if ) Semantic ranking ( ai.rank ) Text generation ( ai.generate ) These AI functions use the AlloyDB AI query engine to help your application process data using artificial intelligence models at various scales, from single-row responses to large-scale database operations.

### "Generate SQL queries using natural language questions \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- Source ID: `site-docs-root-2`
- Final score: 82
- Re-rank relevance: N/A

