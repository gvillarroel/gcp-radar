---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.465Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Array-based AI functions"
feature_slug: "array-based-ai-functions"
latest_feature_date: "2026-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators"
  - "https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint"
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language"
keywords:
  - "array"
  - "based"
  - "ai"
  - "functions"
  - "enable"
  - "batch"
  - "processing"
  - "natural"
---

# Array-based AI functions

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Array-based AI functions enable batch processing of natural language prompts in SQL for higher-performance large-scale AI operations; Array-based AI functions let you make AlloyDB AI function calls in bulk instead of row by row to scale intelligent workflows faster.

## Extended Definition

Array-based AI functions enable batch processing of natural language prompts in SQL for higher-performance large-scale AI operations; Array-based AI functions let you make AlloyDB AI function calls in bulk instead of row by row to scale intelligent workflows faster.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)

## Supporting Pages

### "Perform intelligent SQL queries using AI functions \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Here is the review:' review ) DESC LIMIT 20 ; Perform scoring using array-based functions This ai.rank function lets you score and rank query results based on custom natural language instructions.
- SELECT item name , COUNT ( ) FROM menu items JOIN user reviews ON ai . if ( prompt = > 'Does the following user review talk about the menu item mentioned ? review: ' user reviews . review text ' menu item: ' item name ) GROUP BY item name ; Perform filtering using array-based functions The following example identifies restaurants with more than 10 positive reviews by using an AI model ( gemini-2.5-flash-lite ) to analyze review sentiment and filter the results.
- After registering the model, you can use it in AI functions as follows: SELECT ai . generate ( prompt = > 'What is AlloyDB?' , model id = > 'gemini-3-preview-model' ); Use filters in your queries AlloyDB AI offers AI-powered SQL functions that let you use natural language processing and LLMs directly within your database queries, including the ai.if and ai.rank operators.
- Review: ' review ) AS review summary FROM user reviews ; Perform text generation using array-based functions The following query uses UNNEST and ai.generate to summarize multiple reviews efficiently.

### "Model endpoint management reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- Source ID: `site-api-reference`
- Final score: 143
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The ai.generate ( Preview ) SQL function in the AI functions, to generate text based on prompts specified in natural language. ai schema AlloyDB reserves, and creates, the ai schema.
- The ai.rank ( Preview ) SQL function in the AI functions, to order a list of items in a query based on a criteria stated using natural language.
- The ai.rank ( Preview ) SQL function in the AI functions, to order a list of items in a query based on a criteria stated using natural language.
- The ai.generate ( Preview ) SQL function in the AI functions, to generate text based on prompts specified in natural language.

### "Generate SQL queries using natural language questions \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- Source ID: `site-docs-reference-required-8`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SELECT alloydb ai nl . refresh value index ( nl config id in = > 'my app config' ); To enable AlloyDB AI natural language to match synonyms of a value, run the following example statement: SELECT alloydb ai nl . insert synonym set ( ARRAY [ 'USA' , 'US' , 'United States' , 'United States of America' ] ); Although the data in your tables might use a specific value—for example, if United States is used to identify a country—you can define a synonym set that contains all the synonyms for United States .
- To provide a customized parameterization of a fragment, use the manual version of alloydb ai nl.add fragment , as shown in the following example: SELECT alloydb ai nl . add fragment ( nl config id = > 'my app config' , table aliases = > ARRAY [ 'bird dev financial.district AS T' ], intent = > $$ districts in 'Prague' $$ , parameterized intent = > $$ districts in $ 1 $$ , fragment = > $$ T . "A3" = 'Prague' $$ , parameterized fragment = > $$ T . "A3" = $ 1 $$ , manifest = > $$ districts in a given city$$ , check intent = > TRUE ); Manage fragments To manage fragments, use the following APIs: -- To disable a fragment: SELECT alloydb ai nl . disable fragment ( INPUT fragment id ); -- To enable a fragment which has been disabled: SELECT alloydb ai nl . enable fragment ( INPUT fragment id ); -- To permanently remove a fragment: SELECT alloydb ai nl . drop fragment ( INPUT fragment id ); You can use the view alloydb ai nl.fragment store view to extract the fragment id of a fragment, given its content.
- To associate a column with a concept type, run the following query: SELECT alloydb ai nl . associate concept type ( column names in = > 'my schema.country.country name' , concept type in = > 'country name' , nl config id in = > 'my app config' ); To create a value index based on all the columns that are part of a natural language config and are associated with a concept type, run the following statement: SELECT alloydb ai nl . create value index ( nl config id in = > 'my app config' ); When you associate concept types to new columns, refresh the value index to reflect the changes.
- SELECT alloydb ai nl . get concept and value ( value phrases in = > ARRAY [ 'United States' ], nl config id in = > 'my app config' ); For example, if a user asks a question like "What is the population of the United States?" that uses the following get sql query, AlloyDB AI natural language uses the get concept and value function with the value phrase United States to perform a fuzzy search against the value indexes.

