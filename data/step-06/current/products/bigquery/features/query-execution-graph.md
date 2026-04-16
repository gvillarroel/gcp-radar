---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.600Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Query execution graph"
feature_slug: "query-execution-graph"
latest_feature_date: "2023-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
keywords:
  - "query"
  - "execution"
  - "graph"
  - "helps"
  - "diagnose"
  - "performance"
  - "issues"
  - "provides"
---

# Query execution graph

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The query execution graph helps diagnose query performance issues and provides query performance insights; The query execution graph helps diagnose BigQuery query performance issues and provides performance insights.

## Extended Definition

The query execution graph helps diagnose query performance issues and provides query performance insights; The query execution graph helps diagnose BigQuery query performance issues and provides performance insights.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Partner references BigQuery and Monte Carlo How Resident Reduced Data Issues with Monte Carlo New Relic Solution New Relic Infrastructure Monitoring Category Data Quality, Observability, & FinOps Description New Relic provides performance, availability, and monitoring services that improve your product, improve your business, and keep your customers happy.
- Partner references Google BigQuery as a source in Validio Partner Advantage page Direct link ETL & Data Integration Ab Initio Solution Ab Initio Platform Category ETL & Data Integration Description Ab Initio provides a high-performance software suite for data integration, batch processing, data quality, and metadata management.
- Partner references Generating SQL for BigQuery Partner Advantage page Direct link Windsor.ai Solution Windsor.ai Marketing data Attribution Category BI, ML, & Advanced Analytics Description Windsor.ai is a marketing data attribution software that helps performance marketers and data engineers get their job done efficiently.
- Partner references BigQuery with Alteryx Designer Cloud Google BigQuery Input Tool Google BigQuery Output Tool Arcion Labs Solution Arcion Cloud Category ETL & Data Integration Description Arcion is a cloud-native, zero-code data mobility platform that helps organizations deploy high-performance, real-time data pipelines.

### Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- Source ID: `site-docs-reference-2`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also select individual jobs to open the job details page , which provides query details such as execution graphs, SQL text, and execution history to help you diagnose and troubleshoot queries.
- The Performance tab compiles query information including the execution graph, the SQL text, and execution history.
- This helps you troubleshoot potential performance issues between two query jobs.
- Performance variance : information about how the job performed in comparison to a past execution of the same query.

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A dataset-per-tenant design helps to mitigate the following concerns that an organization experiences when it scales to thousands of tenants: Administrative complexity : the total number of new projects and cloud resources on a per customer basis End-to-end latency : how up to date the datastore is for both the tenants and cross-customer analytics solutions Performance expectations : ensuring that tenant performance stays within acceptable limits Configure datasets for each tenant Within a project that is dedicated to storing customer data, each customer's data is separated by BigQuery datasets.
- Sensitive Data Protection Sensitive Data Protection provides APIs and scanning utilities that help you identify and mitigate sensitive content that is stored inside BigQuery or Cloud Storage datasets.
- Best practices for multi-tenant workloads on BigQuery This document provides techniques and best practices for common patterns that are used in multi-tenant data platforms and enterprise data marts.
- This document is for organizations that deploy multi-tenant platforms on BigQuery and who want to understand the available access controls and performance management features .

