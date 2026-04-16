---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.085Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Time-series forecasting"
feature_slug: "time-series-forecasting"
latest_feature_date: "2025-10-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting"
  - "https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators"
  - "https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint"
keywords:
  - "predict"
  - "future"
  - "trends"
  - "forecasting"
  - "series"
  - "time"
  - "lets"
---

# Time-series forecasting

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Time-series forecasting lets AlloyDB predict future trends from historical data by using forecasting models such as TimesFM.

## Extended Definition

Time-series forecasting lets AlloyDB predict future trends from historical data by using forecasting models such as TimesFM.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting](https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting)
- [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)

## Supporting Pages

### "Perform time-series forecasting \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting](https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting)
- Source ID: `site-docs-reference-2`
- Final score: 241
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To construct the model request url for the SQL model creation call, replace the project and endpoint identifiers with the endpoint details from the preceding step as follows: CALL google ml . create model ( model id => 'timesfm v2' , model qualified name => 'timesfm v2' , model type => 'ts forecasting' , model provider => 'google' , model request url => 'https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /endpoints/ ENDPOINT ID :predict' ); You need this model request url in the google ml.create model call when you register the TimesFM model in AlloyDB, as described in the following section.
- CALL google ml . create model ( model id = > ' MODEL ID ' , model qualified name = > ' MODEL QUALIFIED NAME ' , model type = > 'ts forecasting' , model provider = > 'google' , model request url = > 'https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /endpoints/ ENDPOINT ID :predict' -- Example endpoint from Model Garden ); Replace the following: MODEL ID : a unique identifier for the registered model you want to use for forecasting—for example, vertex timesfm .
- Generate forecasts from a source table The following example shows how to call the ai.forecast function using a source table to generate predictions: SELECT FROM ai . forecast ( model id = > ' MODEL ID ' , source table = > 'time series data' , data col = > 'data points' , timestamp col = > 'timestamp' , horizon = > 2 , conf level = > 0 .
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Perform time-series forecasting Stay organized with collections Save and categorize content based on your preferences.

### "Model endpoint management reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following review talks about parking at the restaurant. review: For examples of SQL queries that perform filters and joins to evaluate a condition, see Use natural language in SQL operators ai.forecast()/google ml.forecast() function The following examples demonstrate how to perform time-series predictions directly in your AlloyDB database: From a source table SELECT FROM ai . forecast ( model id = > ' MODEL ID ' , source table = > ' SOURCE TABLE ' , data col = > ' DATA COL ' , timestamp col = > ' TIMESTAMP COL ' , horizon = > ' HORIZON ' , conf level = > ' CONF LEVEL ' ); From a source query SELECT FROM ai . forecast ( model id = > ' MODEL ID ' , source query = > ' SOURCE QUERY ' , data col = > ' DATA COL ' , timestamp col = > ' TIMESTAMP COL ' , horizon = > ' HORIZON ' , conf level = > ' CONF LEVEL ' ); Parameter Description MODEL ID A unique identifier for the registered model you want to use for forecasting—for example, vertex timesfm .
- Note: A conf level of 0.80 means you can expect the actual future value to fall within the predicted interval 80% of the time. ai.rank() / google ml.rank() function The following shows how to get an score for items in the query based on a semantic criteria specified in natural language: SELECT ai . rank ( model id = > ' MODEL ID ' , prompt = > ' PROMPT ' ); Parameter Description MODEL ID (Optiona) A unique ID for the model endpoint that you define.
- Use either SOURCE TABLE or SOURCE QUERY —for example, (SELECT FROM forecast 3 ORDER BY timestamp LIMIT 1) AS time series data .
- SOURCE QUERY A GoogleSQL query statement that generates the time series data you want to forecast.

### "Perform intelligent SQL queries using AI functions \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Perform time-series forecasting .
- WITH initial arrays AS ( WITH initial arrays AS ( SELECT ARRAY AGG ( r . id ORDER BY r . id ) AS review ids , -- Assuming ai.if takes an array of prompts and returns a boolean array ai . if ( prompts = > ARRAY AGG ( 'Is the review positive: ' r . review ORDER BY r . id ) model id = > 'gemini-2.5-flash-lite' , batch size = > 20 ) AS truth values FROM restaurant reviews r ), reviews AS ( SELECT initial arrays . review ids [ i ] AS review id , initial arrays . truth values [ i ] AS truth value FROM initial arrays , generate series ( 1 , array length ( initial arrays . review ids , 1 )) AS i ) SELECT rest review . city , rest review . name FROM restaurant reviews rest review JOIN reviews review ON rest review . id = review . review id WHERE review . truth value = 't' GROUP BY rest review . city , rest review . name HAVING COUNT ( ) > 10 ; Perform filtering using cursors The following example shows how to filter a large set of restaurant reviews by streaming them through a cursor.
- SELECT item name , COUNT ( ) FROM menu items JOIN user reviews ON ai . if ( prompt = > 'Does the following user review talk about the menu item mentioned ? review: ' user reviews . review text ' menu item: ' item name ) GROUP BY item name ; Perform filtering using array-based functions The following example identifies restaurants with more than 10 positive reviews by using an AI model ( gemini-2.5-flash-lite ) to analyze review sentiment and filter the results.
- Perform scoring using scalar functions The following function lets you provide a prompt which describes the ranking criteria and returns a score for each item. -- Function signature FUNCTION ai . rank ( prompt TEXT , model id VARCHAR ( 100 ) DEFAULT NULL ) RETURNS real For example, the following query gets the top 20 most positive restaurant reviews, using scores from an LLM.

