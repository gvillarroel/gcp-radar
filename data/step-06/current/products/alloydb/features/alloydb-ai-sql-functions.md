---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.813Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB AI SQL functions"
feature_slug: "alloydb-ai-sql-functions"
latest_feature_date: "2026-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators"
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables"
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language"
  - "https://docs.cloud.google.com/alloydb/docs/ai/adaptive-filtering"
keywords:
  - "ai.forecast"
  - "semantic filtering"
  - "AlloyDB AI SQL functions"
  - "alloydb ai functions"
  - "AI SQL functions"
  - "ai.if"
  - "ai.rank"
  - "ai.generate"
---

# AlloyDB AI SQL functions

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB AI generally adds SQL functions such as ai.if, ai.rank, ai.generate, and ai.forecast for semantic filtering, ranking, generation, and forecasting in SQL.

## Extended Definition

AlloyDB AI generally adds SQL functions such as ai.if, ai.rank, ai.generate, and ai.forecast for semantic filtering, ranking, generation, and forecasting in SQL.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- [https://docs.cloud.google.com/alloydb/docs/ai/adaptive-filtering](https://docs.cloud.google.com/alloydb/docs/ai/adaptive-filtering)

## Supporting Pages

### "Perform intelligent SQL queries using AI functions \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- Source ID: `site-docs-reference-2`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This feature includes built-in functions for the following: Filtering ( ai.if ) Semantic ranking ( ai.rank ) Text generation ( ai.generate ) These AI functions use the AlloyDB AI query engine to help your application process data using artificial intelligence models at various scales, from single-row responses to large-scale database operations.
- You can use the ai.if , ai.rank , and ai.generate operators to combine natural language with SQL queries.
- After registering the model, you can use it in AI functions as follows: SELECT ai . generate ( prompt = > 'What is AlloyDB?' , model id = > 'gemini-3-preview-model' ); Use filters in your queries AlloyDB AI offers AI-powered SQL functions that let you use natural language processing and LLMs directly within your database queries, including the ai.if and ai.rank operators.
- WITH initial arrays AS ( WITH initial arrays AS ( SELECT ARRAY AGG ( r . id ORDER BY r . id ) AS review ids , -- Assuming ai.if takes an array of prompts and returns a boolean array ai . if ( prompts = > ARRAY AGG ( 'Is the review positive: ' r . review ORDER BY r . id ) model id = > 'gemini-2.5-flash-lite' , batch size = > 20 ) AS truth values FROM restaurant reviews r ), reviews AS ( SELECT initial arrays . review ids [ i ] AS review id , initial arrays . truth values [ i ] AS truth value FROM initial arrays , generate series ( 1 , array length ( initial arrays . review ids , 1 )) AS i ) SELECT rest review . city , rest review . name FROM restaurant reviews rest review JOIN reviews review ON rest review . id = review . review id WHERE review . truth value = 't' GROUP BY rest review . city , rest review . name HAVING COUNT ( ) > 10 ; Perform filtering using cursors The following example shows how to filter a large set of restaurant reviews by streaming them through a cursor.

### "Generate and manage auto vector embeddings for large tables \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Generate SQL queries using natural language questions \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Understand adaptive filtering in AlloyDB AI \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/adaptive-filtering](https://docs.cloud.google.com/alloydb/docs/ai/adaptive-filtering)
- Source ID: `site-docs-reference-2`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

