---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.209Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Conversational analytics suggested questions"
feature_slug: "conversational-analytics-suggested-questions"
latest_feature_date: "2026-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/conversational-analytics"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui"
keywords:
  - "conversational"
  - "analytics"
  - "suggested"
  - "questions"
  - "bigquery"
  - "suggests"
  - "clickable"
  - "follow"
---

# Conversational analytics suggested questions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery conversational analytics suggests clickable follow-up questions in the Google Cloud console.

## Extended Definition

BigQuery conversational analytics suggests clickable follow-up questions in the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/conversational-analytics](https://docs.cloud.google.com/bigquery/docs/conversational-analytics)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)

## Supporting Pages

### Conversational analytics overview \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/conversational-analytics](https://docs.cloud.google.com/bigquery/docs/conversational-analytics)
- Source ID: `site-docs-reference-5`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table shows examples of one-shot prompts that activate the use of BigQuery ML: Use case Sample usage Public dataset Forecasting "Predict the number of trips for the next month." bigquery-public-data.san francisco bikeshare.bikeshare trips Anomaly detection "Find outliers in trips per day for 2018 using 2017 as a baseline." bigquery-public-data.san francisco bikeshare.bikeshare trips LLM text generation "For each article in the 'sports' category, summarize the body column in 1-2 sentences." bigquery-public-data.bbc news.fulltext Security You can manage access to conversational analytics in BigQuery using Conversational Analytics API IAM roles and permissions .
- BigQuery ML support Conversational analytics supports the following BigQuery ML functions in response to chats with data agents and data sources, and in verified SQL queries that you create.
- Best practices Review the following guides to learn about best practices for using the Conversational Analytics API: Set project-level, user-level, and query-level spending limits to manage costs for your agents .
- Other services in the project that support data agents, such as the Conversational Analytics API and Looker Studio Pro, can access data agents that you create in BigQuery.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Partner references BigQuery Destination Getting your data into Google BigQuery Partner Advantage page Direct link Wisdom.AI Solution Wisdom Enterprise Context Category BI, ML, & Advanced Analytics Description WisdomAI is a conversational AI assistant for business intelligence that allows users to ask questions about their data in plain English.
- Partner references Google BigQuery Integration View data in BigQuery Product & Behavioral Analytics on Google BigQuery Optimizely's partnership with Google Cloud Partner Advantage page Direct link Numberstation Solution Numbersstation.ai Category BI, ML, & Advanced Analytics Description Numbers Station leverages a multi-agent architecture built with specialized agents to reason through complex questions, building end-to-end analytics solutions and democratizing data by delivering insights where and when you need them.
- Partner references WisdomAI and Google Cloud Join Forces to Turn Enterprise Data into Instant Insights How to connect to BigQuery from Wisdom Partner Advantage page Direct link Zenlytic Solution Zenlytic Category BI, ML, & Advanced Analytics Description Zenlytic is an LLM-powered business intelligence platform that makes self-serve analytics possible through a conversational interface to your data.
- Partner references Setting Up a Native BigQuery Connection Partner Advantage page Direct link Metabase Solution Metabase Category BI, ML, & Advanced Analytics Description Metabase is an open source BI tool that makes it easy for teams to ask questions and learn from their data using a user-friendly interface.

### Explore BigQuery in the Google Cloud console \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- Source ID: `site-docs-reference-5`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- For information on creating agents and using conversational analytics, see Conversational analytics in BigQuery .
- Go to Overview You can also open the BigQuery Overview page by entering the following URL in your browser: https://console.cloud.google.com/bigquery/overview Review the following sections of the Overview page: The Introduction section: gives you a quick video overview of BigQuery's capabilities.
- After you select a data source, you can do the following based on the capabilities available for your data source: Set up BigQuery table over external data ( federation ) : enables BigQuery to access external data without ingesting it into BigQuery.
- Note: To see how to use keyboard shortcuts in Studio, click keyboard BigQuery Studio shortcuts in the BigQuery Studio toolbar: To explore the Studio page, follow these steps: In the Google Cloud console, go to the BigQuery Studio page.

