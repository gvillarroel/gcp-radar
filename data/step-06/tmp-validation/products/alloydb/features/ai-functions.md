---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.069Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AI functions"
feature_slug: "ai-functions"
latest_feature_date: "2026-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing"
  - "https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators"
  - "https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint"
keywords:
  - "bring"
  - "filtering"
  - "semantic"
  - "ranking"
  - "functions"
  - "powered"
---

# AI functions

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AI functions bring LLM-powered filtering, semantic ranking, generation, and forecasting directly into AlloyDB SQL workflows.

## Extended Definition

AI functions bring LLM-powered filtering, semantic ranking, generation, and forecasting directly into AlloyDB SQL workflows.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing](https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing)
- [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)

## Supporting Pages

### AI functions overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing](https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The AlloyDB AI functions ( Preview ) integrates with Vertex AI to bring intelligent filtering, semantic ranking, and text generation to your operational data in real time.
- AI-Powered SQL filtering and ranking Use simple SQL functions for powerful AI tasks.
- The google ml integration extension provides operators like ai.if() ( Preview ) for intelligent filtering and ai.rank() ( Preview ) for semantic reranking.
- Use them for tasks such as semantic search, joins, and result ranking.

### "Perform intelligent SQL queries using AI functions \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This feature includes built-in functions for the following: Filtering ( ai.if ) Semantic ranking ( ai.rank ) Text generation ( ai.generate ) These AI functions use the AlloyDB AI query engine to help your application process data using artificial intelligence models at various scales, from single-row responses to large-scale database operations.
- SELECT item name , COUNT ( ) FROM menu items JOIN user reviews ON ai . if ( prompt = > 'Does the following user review talk about the menu item mentioned ? review: ' user reviews . review text ' menu item: ' item name ) GROUP BY item name ; Perform filtering using array-based functions The following example identifies restaurants with more than 10 positive reviews by using an AI model ( gemini-2.5-flash-lite ) to analyze review sentiment and filter the results.
- Perform scoring using scalar functions The following function lets you provide a prompt which describes the ranking criteria and returns a score for each item. -- Function signature FUNCTION ai . rank ( prompt TEXT , model id VARCHAR ( 100 ) DEFAULT NULL ) RETURNS real For example, the following query gets the top 20 most positive restaurant reviews, using scores from an LLM.
- After registering the model, you can use it in AI functions as follows: SELECT ai . generate ( prompt = > 'What is AlloyDB?' , model id = > 'gemini-3-preview-model' ); Use filters in your queries AlloyDB AI offers AI-powered SQL functions that let you use natural language processing and LLMs directly within your database queries, including the ai.if and ai.rank operators.

### "Model endpoint management reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The google ml.rank() ( Preview ) SQL function in the AI functions, which improves the order of search results by ranking or ordering a collection of records in relation to a given query (a search string).
- Ranking functions Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- See Transform functions . google ml.alter model() The following shows how to call the google ml.alter model() SQL function used to update model endpoint metadata: CALL google ml . alter model ( model id = > ' MODEL ID ' , model request url = > ' REQUEST URL ' , model provider = > ' PROVIDER ID ' , model type = > ' MODEL TYPE ' , model qualified name = > ' MODEL QUALIFIED NAME ' , model auth type = > ' AUTH TYPE ' , model auth id = > ' AUTH ID ' , generate headers fn = > ' GENERATE HEADER FUNCTION ' , model in transform fn = > ' INPUT TRANSFORM FUNCTION ' , model out transform fn = > ' OUTPUT TRANSFORM FUNCTION ' ); For information about the values that you must set for each parameter, see Create a model . google ml.drop model() function The following shows how to call the google ml.drop model() SQL function used to drop a model endpoint: CALL google ml . drop model ( ' MODEL ID ' ); Parameter Description MODEL ID A unique ID for the model endpoint that you defined. google ml.list model() function The following shows how to call the google ml.list model() SQL function used to list model endpoint information: SELECT google ml . list model ( ' MODEL ID ' ); Parameter Description MODEL ID A unique ID for the model endpoint that you defined. google ml.model info view view The following shows how to call the google ml.model info view view that is used to list model endpoint information for all model endpoints: SELECT FROM google ml . model info view ; Secrets Use this reference to understand parameters for functions that let you manage secrets. google ml.create sm secret() function The following shows how to call the google ml.create sm secret() SQL function used to add the secret created in Secret Manager: CALL google ml . create sm secret ( secret id = > ' SECRET ID ' , secret path = > 'projects/ project-id /secrets/ SECRET MANAGER SECRET ID /versions/ VERSION NUMBER ' ); Parameter Description SECRET ID The secret ID that you set and is subsequently used when registering a model endpoint.
- The following table shows the auth types that you can set: Authentication method Set in function as… Model provider AlloyDB service agent alloydb service agent iam Vertex AI provider Secret Manager secret manager third-party providers, such as Anthropic, Hugging Face, or OpenAI Models Use this reference to understand parameters for functions that let you manage model endpoints. google ml.create model() function The following shows how to call the google ml.create model() SQL function used to register model endpoint metadata: CALL google ml . create model ( model id = > ' MODEL ID ' , model request url = > ' REQUEST URL ' , model provider = > ' PROVIDER ID ' , model type = > ' MODEL TYPE ' , model qualified name = > ' MODEL QUALIFIED NAME ' , model auth type = > ' AUTH TYPE ' , model auth id = > ' AUTH ID ' , generate headers fn = > ' GENERATE HEADER FUNCTION ' , model in transform fn = > ' INPUT TRANSFORM FUNCTION ' , model out transform fn = > ' OUTPUT TRANSFORM FUNCTION ' ); Parameter Required Description MODEL ID required for all model endpoints A unique ID for the model endpoint that you define.

