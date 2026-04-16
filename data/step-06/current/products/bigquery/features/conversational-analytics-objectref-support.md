---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.208Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Conversational analytics ObjectRef support"
feature_slug: "conversational-analytics-objectref-support"
latest_feature_date: "2026-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/conversational-analytics"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "conversational"
  - "analytics"
  - "objectref"
  - "bigquery"
  - "can"
  - "use"
  - "functions"
  - "reference"
---

# Conversational analytics ObjectRef support

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery conversational analytics can use ObjectRef functions to reference and interact with unstructured Cloud Storage data.

## Extended Definition

BigQuery conversational analytics can use ObjectRef functions to reference and interact with unstructured Cloud Storage data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/conversational-analytics](https://docs.cloud.google.com/bigquery/docs/conversational-analytics)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### Conversational analytics overview \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/conversational-analytics](https://docs.cloud.google.com/bigquery/docs/conversational-analytics)
- Source ID: `site-docs-reference-5`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery ML support Conversational analytics supports the following BigQuery ML functions in response to chats with data agents and data sources, and in verified SQL queries that you create.
- Conversational analytics is powered by Gemini for Google Cloud and supports some BigQuery ML functions.
- The following table shows examples of one-shot prompts that activate the use of BigQuery ML: Use case Sample usage Public dataset Forecasting "Predict the number of trips for the next month." bigquery-public-data.san francisco bikeshare.bikeshare trips Anomaly detection "Find outliers in trips per day for 2018 using 2017 as a baseline." bigquery-public-data.san francisco bikeshare.bikeshare trips LLM text generation "For each article in the 'sports' category, summarize the body column in 1-2 sentences." bigquery-public-data.bbc news.fulltext Security You can manage access to conversational analytics in BigQuery using Conversational Analytics API IAM roles and permissions .
- Other services in the project that support data agents, such as the Conversational Analytics API and Looker Studio Pro, can access data agents that you create in BigQuery.

### Geography functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)
- Source ID: `site-docs-reference-required-7`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Reference Send feedback Geography functions Stay organized with collections Save and categorize content based on your preferences.
- GoogleSQL for BigQuery supports the following functions that can be used to analyze geographical data, determine spatial relationships between geographical features, and construct or manipulate GEOGRAPHY s.
- The following formats are supported: A URI from an image table provided by Google Earth Engine in BigQuery sharing (formerly Analytics Hub).
- GoogleSQL for BigQuery supports geography functions.

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Reference Send feedback String functions Stay organized with collections Save and categorize content based on your preferences.
- GoogleSQL for BigQuery supports string functions.
- SELECT CONTAINS SUBSTR ( 'hello' , NULL ) AS result ; -- Throws an error The following examples reference a table called Recipes that you can emulate with a WITH clause like this: WITH Recipes AS ( SELECT 'Blueberry pancakes' as Breakfast , 'Egg salad sandwich' as Lunch , 'Potato dumplings' as Dinner UNION ALL SELECT 'Potato pancakes' , 'Toasted cheese sandwich' , 'Beef stroganoff' UNION ALL SELECT 'Ham scramble' , 'Steak avocado salad' , 'Tomato pasta' UNION ALL SELECT 'Avocado toast' , 'Tomato soup' , 'Blueberry salmon' UNION ALL SELECT 'Corned beef hash' , 'Lentil potato soup' , 'Glazed ham' ) SELECT FROM Recipes ; / -------------------+-------------------------+------------------+ Breakfast Lunch Dinner +-------------------+-------------------------+------------------+ Bluberry pancakes Egg salad sandwich Potato dumplings Potato pancakes Toasted cheese sandwich Beef stroganoff Ham scramble Steak avocado salad Tomato pasta Avocado toast Tomato soup Blueberry samon Corned beef hash Lentil potato soup Glazed ham +-------------------+-------------------------+------------------ / The following query searches across all columns of the Recipes table for the value toast and returns the rows that contain this value.
- A column reference is evaluated as one the following data types: STRING INT64 BOOL NUMERIC BIGNUMERIC TIMESTAMP TIME DATE DATETIME ARRAY STRUCT When the expression is evaluated, the result is cast to a STRING , and then the function looks for the search value in the result.

