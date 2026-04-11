---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.401Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery query templates for data clean rooms"
feature_slug: "bigquery-query-templates-for-data-clean-rooms"
latest_feature_date: "2025-08-28"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/query-templates"
  - "https://docs.cloud.google.com/bigquery/docs/analysis-rules"
keywords:
  - "query template restrictions"
  - "clean room query templates"
  - "predefined clean room queries"
  - "predefined runnable queries"
  - "BigQuery clean room queries"
  - "query templates for data clean rooms"
  - "query templates"
  - "data clean rooms"
---

# BigQuery query templates for data clean rooms

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports query templates in data clean rooms to predefine and restrict runnable queries.

## Extended Definition

BigQuery data clean room query templates let data owners and contributors create predefined queries (as table-valued functions) for specific clean room use cases and publish them for subscribers. Query template subscribers can access a template only through the clean room and can run only the queries that are approved in that template, rather than arbitrary queries. The feature is supported by clean-room role-based workflows (creator, approver, subscriber) that govern who can define, approve, and execute those templates.

## Evidence Summary

The cited BigQuery documentation pages define data clean room query templates as predefined, publishable TVF-based queries with role-governed approval and subscription workflows that limit subscribers to approved executable queries.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/query-templates](https://docs.cloud.google.com/bigquery/docs/query-templates)
- [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)

## Supporting Pages

### "Restrict data access using analysis rules \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Preview Parameter-driven privacy budgeting for differential privacy is in preview while differential privacy enforcement in BigQuery data clean rooms is now generally available (GA).
- You can enforce this rule on a view, using DDL statements or data clean rooms.
- You can enforce this rule on a view, using DDL statements or data clean rooms.
- You can enforce this rule on a view, using DDL statements or data clean rooms.

