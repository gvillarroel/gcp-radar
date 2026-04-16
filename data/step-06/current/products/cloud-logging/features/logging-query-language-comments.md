---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.381Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logging query language comments"
feature_slug: "logging-query-language-comments"
latest_feature_date: "2022-04-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logging-query-language"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
keywords:
  - "logging"
  - "query"
  - "language"
  - "comments"
  - "supports"
  - "within"
  - "queries"
---

# Logging query language comments

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Logging query language supports comments within queries.

## Extended Definition

The Logging query language supports comments within queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)

## Supporting Pages

### Logging query language \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following functions match the string "hello world": SEARCH("hello world") SEARCH("Hello World") SEARCH("HELLO WORLD") Because backticks are used in the following functions, they produce different results: SEARCH("hello world") SEARCH("world hello") The Logging query language supports different ways that you can search your log data.
- Syntax notation The following sections provide an overview of the Logging query language syntax, and discuss in detail how queries are structured and how matching is performed.
- Syntax summary The Logging query language syntax can be thought of in terms of queries and comparisons .
- Using the resource.type field in the following examples, the Logging query language grammar looks like this: Simple restriction: resource.type = "k8s cluster" Conjunctive restriction: resource.type = "k8s cluster" AND severity = "ERROR" Note: When a query contains multiple statements, you can either specify how those statements are joined or rely on Cloud Logging implicitly adding the conjunctive restriction, AND , between the statements.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Write advanced queries using the Logging query language You can use the Logging query language to build more advanced queries in the Logs Explorer query-editor field: If you don't see the query-editor field in the Query pane, enable Show query .
- Home Documentation Observability Cloud Logging Guides Send feedback Build and save queries by using the Logging query language Stay organized with collections Save and categorize content based on your preferences.
- The queries you build are written in the Logging query language .
- The following example illustrates a sample request body, which contains an instance of SavedQuery : { "parent": "projects/my-project/locations/global" "savedQueryId": "compute-query" { "displayName": "compute-admin-activity-query", "description": "Queries for Compute Engine Admin Activity logs.", "loggingQuery": { "filter": resource.type="gce instance" AND log id("cloudaudit.googleapis.com/activity"), }, "visibility": "PRIVATE" } } To share the query with other members of the Google Cloud project, specify a value of SHARED in the visibility field.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Write advanced queries using the Logging query language .
- Query-editor field: Build advanced queries by using the Logging query language.
- The Observability Analytics page opens in a new tab and automatically translates the current Logging query language query into a SQL query.
- These filters use an extended set of Logging query language such as disjunctive clauses.

