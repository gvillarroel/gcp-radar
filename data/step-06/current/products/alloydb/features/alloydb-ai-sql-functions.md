---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.561Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB AI SQL functions"
feature_slug: "alloydb-ai-sql-functions"
latest_feature_date: "2026-03-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint"
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
Coverage: LOW

## Step 02 Summary

AlloyDB AI generally adds SQL functions such as ai.if, ai.rank, ai.generate, and ai.forecast for semantic filtering, ranking, generation, and forecasting in SQL.

## Extended Definition

AlloyDB AI generally adds SQL functions such as ai.if, ai.rank, ai.generate, and ai.forecast for semantic filtering, ranking, generation, and forecasting in SQL.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)

## Supporting Pages

### "Perform intelligent SQL queries using AI functions \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- Source ID: `site-docs-root-2`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This feature includes built-in functions for the following: Filtering ( ai.if ) Semantic ranking ( ai.rank ) Text generation ( ai.generate ) These AI functions use the AlloyDB AI query engine to help your application process data using artificial intelligence models at various scales, from single-row responses to large-scale database operations.
- You can use the ai.if , ai.rank , and ai.generate operators to combine natural language with SQL queries.
- After registering the model, you can use it in AI functions as follows: SELECT ai . generate ( prompt = > 'What is AlloyDB?' , model id = > 'gemini-3-preview-model' ); Use filters in your queries AlloyDB AI offers AI-powered SQL functions that let you use natural language processing and LLMs directly within your database queries, including the ai.if and ai.rank operators.
- WITH initial arrays AS ( WITH initial arrays AS ( SELECT ARRAY AGG ( r . id ORDER BY r . id ) AS review ids , -- Assuming ai.if takes an array of prompts and returns a boolean array ai . if ( prompts = > ARRAY AGG ( 'Is the review positive: ' r . review ORDER BY r . id ) model id = > 'gemini-2.5-flash-lite' , batch size = > 20 ) AS truth values FROM restaurant reviews r ), reviews AS ( SELECT initial arrays . review ids [ i ] AS review id , initial arrays . truth values [ i ] AS truth value FROM initial arrays , generate series ( 1 , array length ( initial arrays . review ids , 1 )) AS i ) SELECT rest review . city , rest review . name FROM restaurant reviews rest review JOIN reviews review ON rest review . id = review . review id WHERE review . truth value = 't' GROUP BY rest review . city , rest review . name HAVING COUNT ( ) > 10 ; Perform filtering using cursors The following example shows how to filter a large set of restaurant reviews by streaming them through a cursor.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- This feature includes out-of-the-box functions for filtering ( ai.if ), semantic ranking ( ai.rank ), generation ( ai.generate ), and forecasting ( ai.forecast ).
- You can combine natural language phrases with SQL queries, like ai.if() for filters and joins, ai.rank() for ordering using ranking models, and ai.generate() for generating summaries of your data, and generate multimodal embeddings.
- May 21, 2025 Feature AlloyDB AI query engine ( Preview ) lets you combine natural language with SQL using operators like ai.if , ai.rank , and ai.generate .
- Feature You can now use Gemini 3.0 Flash ( Preview ) when you call generative AI functions in AlloyDB, such as AI.GENERATE .

### "Model endpoint management reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- Source ID: `site-api-reference`
- Final score: 54
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following review talks about parking at the restaurant. review: For examples of SQL queries that perform filters and joins to evaluate a condition, see Use natural language in SQL operators ai.forecast()/google ml.forecast() function The following examples demonstrate how to perform time-series predictions directly in your AlloyDB database: From a source table SELECT FROM ai . forecast ( model id = > ' MODEL ID ' , source table = > ' SOURCE TABLE ' , data col = > ' DATA COL ' , timestamp col = > ' TIMESTAMP COL ' , horizon = > ' HORIZON ' , conf level = > ' CONF LEVEL ' ); From a source query SELECT FROM ai . forecast ( model id = > ' MODEL ID ' , source query = > ' SOURCE QUERY ' , data col = > ' DATA COL ' , timestamp col = > ' TIMESTAMP COL ' , horizon = > ' HORIZON ' , conf level = > ' CONF LEVEL ' ); Parameter Description MODEL ID A unique identifier for the registered model you want to use for forecasting—for example, vertex timesfm .
- Note: A conf level of 0.80 means you can expect the actual future value to fall within the predicted interval 80% of the time. ai.rank() / google ml.rank() function The following shows how to get an score for items in the query based on a semantic criteria specified in natural language: SELECT ai . rank ( model id = > ' MODEL ID ' , prompt = > ' PROMPT ' ); Parameter Description MODEL ID (Optiona) A unique ID for the model endpoint that you define.
- AlloyDB reserves, and creates, the ai schema. ai.if()/google ml.if() function The following shows how to perform filters and joins to evaluate a condition: SELECT ai . if ( model id = > ' MODEL ID ' , prompt = > ' PROMPT ' ); Parameter Description MODEL ID (Optional) A unique ID for the model endpoint that you define.
- Here is the review: ai.generate() / google ml.generate() function The following shows how to generate embeddings using the default embedding model: SELECT ai . generate ( model id = > ' MODEL ID ' , prompt = > ' PROMPT ' ); Parameter Description MODEL ID (Optional) A unique ID for the model endpoint that you define.

