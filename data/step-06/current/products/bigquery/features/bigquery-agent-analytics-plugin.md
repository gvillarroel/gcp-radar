---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.238Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Agent Analytics plugin"
feature_slug: "bigquery-agent-analytics-plugin"
latest_feature_date: "2025-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing"
keywords:
  - "bigquery"
  - "agent"
  - "analytics"
  - "plugin"
  - "development"
  - "kit"
  - "exports"
  - "interaction"
---

# BigQuery Agent Analytics plugin

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery Agent Analytics plugin for the Agent Development Kit exports agent interaction logs to BigQuery for analysis and visualization.

## Extended Definition

The BigQuery Agent Analytics plugin for the Agent Development Kit exports agent interaction logs to BigQuery for analysis and visualization.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing](https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing)

## Supporting Pages

### Introduction to continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Autonomous agent monitoring : develop real-time automated monitoring and alerting for real-time agentic interactions using the BigQuery agent analytics plugin , which streams all agent trace data, tool usage, and operational logs directly into BigQuery for deep observability into your AI workforce.
- For an example, refer to the Build an Event-Driven Data Agent with BigQuery and Agent Development Kit (ADK) codelab .
- Home Documentation Data analytics BigQuery Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- You can't use the following SQL capabilities in a continuous query, unless they are listed as a supported stateful operation : The following query operators: PIVOT UNPIVOT TABLESAMPLE Query set operators The SELECT DISTINCT statement EXISTS or NOT EXISTS subqueries Recursive CTEs User-defined functions Window function calls BigQuery ML functions other than those listed in Supported functionality Data definition language (DDL) statements Data manipulation language (DML) statements except for INSERT .

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Google BigQuery Integration View data in BigQuery Product & Behavioral Analytics on Google BigQuery Optimizely's partnership with Google Cloud Partner Advantage page Direct link Numberstation Solution Numbersstation.ai Category BI, ML, & Advanced Analytics Description Numbers Station leverages a multi-agent architecture built with specialized agents to reason through complex questions, building end-to-end analytics solutions and democratizing data by delivering insights where and when you need them.
- Partner references BigQuery agent BigQuery Agent Example Partner Advantage page Direct link Vanna.ai Solution Vanna.ai Category BI, ML, & Advanced Analytics Description Vanni.ai is the Leading open source Python package to query large SQL databases in natural language at production scale with access control that's auditable, accurate, fast, and locally deployable so that code is transparent, results are useful and immediate, and data never leaves your premise.
- Partner references BigQuery Export Integration BigQuery Import Integration BigQuery Version 2 Export Partner Advantage page Direct link Union.ai Solution Union AI orchestrator Category BI, ML, & Advanced Analytics Description The Union platform empowers AI development teams to rapidly ship high-quality code to production by offering optimized performance, unparalleled resource efficiency, and a delightful workflow authoring experience.
- Partner references Creating a dataset using BigQuery Adding a new QuickSight dataset for BigQuery Unlock the power of unified business intelligence with BigQuery and Amazon QuickSight Amplitude Solution Amplitude Analytics Category BI, ML, & Advanced Analytics Description Amplitude is an event-based analytics tool that tracks the behaviors of users based on in-product interactions and analyzes user behavior in real-time.

### "Build ELT pipeline for marketing analytics data \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing](https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Build ELT pipeline for marketing analytics data This tutorial shows you how to set up an ELT workflow that extracts, loads, and transforms marketing analytics data in BigQuery.
- Home Documentation Data analytics BigQuery Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- In this tutorial, you create an ELT workflow by setting up a marketing analytics data transfer by using the BigQuery Data Transfer Service.
- Select daily performance.sqlx , then enter the following query: config { type : "table" , schema : "reporting" , tags : [ "daily" , "google ads" ] } SELECT date , campaign id , campaign name , SUM ( clicks ) AS total clicks FROM ads Campaign CUSTOMER ID GROUP BY date , campaign id , campaign name ORDER BY date DESC Commit and push your changes After you have made your changes in your development workspace, you can commit and push these changes to your repository by following these steps: In the marketing-tutorial-workspace workspace, click Commit 1 change .

