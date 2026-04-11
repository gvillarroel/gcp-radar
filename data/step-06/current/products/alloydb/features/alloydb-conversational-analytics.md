---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.559Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB conversational analytics"
feature_slug: "alloydb-conversational-analytics"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/context-sets-overview"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "operational analytics"
  - "Conversational Analytics API"
  - "AlloyDB conversational mode"
  - "conversational analytics"
  - "Ask in natural language"
  - "NLQ"
  - "conversational query"
  - "natural language query"
---

# AlloyDB conversational analytics

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

Conversational analytics for AlloyDB enables natural-language querying of operational data through the Conversational Analytics API.

## Extended Definition

Conversational analytics for AlloyDB enables natural-language querying of operational data through the Conversational Analytics API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/context-sets-overview](https://docs.cloud.google.com/alloydb/docs/ai/context-sets-overview)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### Context sets overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/context-sets-overview](https://docs.cloud.google.com/alloydb/docs/ai/context-sets-overview)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Context sets for databases is only used by the QueryData endpoint in the Conversational Analytics API.
- If not set, this value defaults to the natural language query. manifest : A generalized, auto-generated form of the intent. parameterized intent : A templated, auto-generated form of the intent, with entity values replaced by parameters. parameterized sql : A templated, auto-generated form of the SQL query that corresponds to the parameterized intent.
- The main components of the query template JSON object are as follows: nl query : An example of a natural language query that tools such as QueryData handle. sql : The SQL query for the natural language query. intent : The goal or purpose of the natural language query.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- This feature is powered by the Conversational Analytics API , which can help you translate complex human dialog into precise database queries to provide actionable insights.
- March 30, 2026 Feature AlloyDB now offers conversational analytics, which lets users query their operational data using natural language.
- For more information, see Conversational analytics for AlloyDB overview .

