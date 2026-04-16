---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.461Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Pre-filtering in vector searches"
feature_slug: "pre-filtering-in-vector-searches"
latest_feature_date: "2024-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
keywords:
  - "pre"
  - "filtering"
  - "vector"
  - "searches"
  - "bigquery"
  - "improve"
  - "query"
  - "efficiency"
---

# Pre-filtering in vector searches

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery vector searches support pre-filtering data to improve query efficiency.

## Extended Definition

BigQuery vector searches support pre-filtering data to improve query efficiency.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)

## Supporting Pages

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- You can also perform vector searches by using BigQuery DataFrames in Python.
- Some possible use cases are as follows: Retrieval-augmented generation (RAG) : Parse documents, perform vector search on content, and generate summarized answers to natural language questions using Gemini models, all within BigQuery.
- For a notebook that illustrates this scenario, see Log Anomaly Detection & Investigation with Text Embeddings + BigQuery Vector Search .
- Introduction to embeddings and vector search This document provides an overview of embeddings and vector search in BigQuery.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Configure BigQuery Destination Integration with BigQuery Data export to BigQuery Partner Advantage page Direct link Email Meter Solution Email Meter Category BI, ML, & Advanced Analytics Description Email Meter is an email analytics platform that gives companies detailed insight into their team's email performance, so they can improve efficiency and the health of customer relationships.
- Partner references BigQuery Export Integration BigQuery Import Integration BigQuery Version 2 Export Partner Advantage page Direct link Union.ai Solution Union AI orchestrator Category BI, ML, & Advanced Analytics Description The Union platform empowers AI development teams to rapidly ship high-quality code to production by offering optimized performance, unparalleled resource efficiency, and a delightful workflow authoring experience.
- Partner references Secure Data Warehousing with BigQuery Vaultree's Data-In-Use Encryption for BigQuery Partner Advantage page Direct link Data Quality, Observability, & FinOps Alvin.ai Solution Alvin Automated BigQuery Optimization Category Data Quality, Observability, & FinOps Description Alvin.ai is a platform that automatically optimizes BigQuery workloads to reduce costs and improve query performance.
- Partner references BigQuery Connection Setup Improved BigQuery support Deploying BigQuery Y42 Solution Y42 Category ETL & Data Integration Description Y42's Turnkey Data Orchestration Platform with embedded observability gives data practitioners a unified space to reliably build, monitor, and maintain the flow of data to power their business analytics and AI applications.

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- GENERATE TEXT ( MODEL bqml tutorial.text model , ( SELECT CONCAT ( 'Propose some project ideas to improve user password security using the context below: ' , STRING AGG ( FORMAT ( "patent title: %s, patent abstract: %s" , base . title , base . abstract ), ', \n ' ) ) AS prompt , FROM VECTOR SEARCH ( TABLE bqml tutorial.embeddings , 'embedding' , ( SELECT embedding , content AS query FROM AI .
- Go to BigQuery In the query editor, run the following SQL statement: CREATE OR REPLACE VECTOR INDEX my index ON bqml tutorial.embeddings ( embedding ) OPTIONS ( index type = 'IVF' , distance type = 'COSINE' , ivf options = '{"num lists":500}' ) Creating a vector index typically takes only a few seconds.
- Go to BigQuery In the query editor, run the following SQL statement: SELECT table name , index name , index status , coverage percentage , last refresh time , disable reason FROM PROJECT ID .bqml tutorial.INFORMATION SCHEMA.VECTOR INDEXES Replace PROJECT ID with your project ID.
- Go to BigQuery In the query editor, run the following SQL statement: SELECT query . query , base . publication number , base . title , base . abstract FROM VECTOR SEARCH ( TABLE bqml tutorial.embeddings , 'embedding' , ( SELECT embedding , content AS query FROM AI .

