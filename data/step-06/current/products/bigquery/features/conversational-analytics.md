---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.223Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Conversational analytics"
feature_slug: "conversational-analytics"
latest_feature_date: "2026-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/conversational-analytics"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/ai-introduction"
keywords:
  - "conversational"
  - "analytics"
  - "bigquery"
  - "enables"
  - "natural"
  - "language"
  - "analysis"
  - "through"
---

# Conversational analytics

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery conversational analytics enables natural language analysis through sample agents, custom agents, and supported BigQuery ML functions; Conversational analytics lets users chat with BigQuery data, create custom agents, and access those agents outside BigQuery for natural-language analysis.

## Extended Definition

BigQuery conversational analytics enables natural language analysis through sample agents, custom agents, and supported BigQuery ML functions; Conversational analytics lets users chat with BigQuery data, create custom agents, and access those agents outside BigQuery for natural-language analysis.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/conversational-analytics](https://docs.cloud.google.com/bigquery/docs/conversational-analytics)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)

## Supporting Pages

### Conversational analytics overview \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/conversational-analytics](https://docs.cloud.google.com/bigquery/docs/conversational-analytics)
- Source ID: `site-docs-reference-5`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Conversational analytics in BigQuery lets you chat with agents about your data using natural language.
- The following table shows examples of one-shot prompts that activate the use of BigQuery ML: Use case Sample usage Public dataset Forecasting "Predict the number of trips for the next month." bigquery-public-data.san francisco bikeshare.bikeshare trips Anomaly detection "Find outliers in trips per day for 2018 using 2017 as a baseline." bigquery-public-data.san francisco bikeshare.bikeshare trips LLM text generation "For each article in the 'sports' category, summarize the body column in 1-2 sentences." bigquery-public-data.bbc news.fulltext Security You can manage access to conversational analytics in BigQuery using Conversational Analytics API IAM roles and permissions .
- BigQuery ML support Conversational analytics supports the following BigQuery ML functions in response to chats with data agents and data sources, and in verified SQL queries that you create.
- Other services in the project that support data agents, such as the Conversational Analytics API and Looker Studio Pro, can access data agents that you create in BigQuery.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- The integration with BigQuery enables it to translate natural language into SQL queries that run against your BigQuery data, making data analysis accessible to business users without any SQL knowledge.
- Partner references BigQuery agent BigQuery Agent Example Partner Advantage page Direct link Vanna.ai Solution Vanna.ai Category BI, ML, & Advanced Analytics Description Vanni.ai is the Leading open source Python package to query large SQL databases in natural language at production scale with access control that's auditable, accurate, fast, and locally deployable so that code is transparent, results are useful and immediate, and data never leaves your premise.
- Partner references WisdomAI and Google Cloud Join Forces to Turn Enterprise Data into Instant Insights How to connect to BigQuery from Wisdom Partner Advantage page Direct link Zenlytic Solution Zenlytic Category BI, ML, & Advanced Analytics Description Zenlytic is an LLM-powered business intelligence platform that makes self-serve analytics possible through a conversational interface to your data.
- Partner references Connecting to BigQuery Partner Advantage page Direct link Tellius Solution Tellius Category BI, ML, & Advanced Analytics Description Tellius is an AI-powered modern analytics platform that helps you explore, analyze, and generate insights from petabytes of data easily, at cloud scale, allowing everyone to self-serve analytics in natural language.

### Introduction to AI in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the Gemini CLI to interact with BigQuery data in your terminal by using natural language prompts.
- Use the Conversational Analytics Agent to chat with your data using conversational language.
- These functions help you use Cloud AI APIs for tasks such as the following: Natural language processing Machine translation Document processing Audio transcription Computer vision For more information, see Task-specific solutions overview .
- You can use natural language prompts to generate data pipelines from various data sources or adapt existing data pipelines to suit your data engineering needs.

