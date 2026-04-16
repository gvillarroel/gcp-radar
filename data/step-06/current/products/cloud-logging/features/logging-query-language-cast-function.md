---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.323Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logging query language cast function"
feature_slug: "logging-query-language-cast-function"
latest_feature_date: "2024-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logging-query-language"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery"
keywords:
  - "logging"
  - "query"
  - "language"
  - "cast"
  - "supports"
---

# Logging query language cast function

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Logging query language supports the cast function.

## Extended Definition

The Logging query language supports the cast function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)

## Supporting Pages

### Logging query language \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following functions match the string "hello world": SEARCH("hello world") SEARCH("Hello World") SEARCH("HELLO WORLD") Because backticks are used in the following functions, they produce different results: SEARCH("hello world") SEARCH("world hello") The Logging query language supports different ways that you can search your log data.
- Using the resource.type field in the following examples, the Logging query language grammar looks like this: Simple restriction: resource.type = "k8s cluster" Conjunctive restriction: resource.type = "k8s cluster" AND severity = "ERROR" Note: When a query contains multiple statements, you can either specify how those statements are joined or rely on Cloud Logging implicitly adding the conjunctive restriction, AND , between the statements.
- Home Documentation Observability Cloud Logging Guides Send feedback Logging query language Stay organized with collections Save and categorize content based on your preferences.
- Syntax notation The following sections provide an overview of the Logging query language syntax, and discuss in detail how queries are structured and how matching is performed.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Write advanced queries using the Logging query language You can use the Logging query language to build more advanced queries in the Logs Explorer query-editor field: If you don't see the query-editor field in the Query pane, enable Show query .
- For example, when the two operators are mixed, the expression a AND b OR c AND d turns into the following Logging query language expression: "a" "b" OR "c" "d" The NOT operator has the highest precedence, followed by OR and AND in that order.
- Home Documentation Observability Cloud Logging Guides Send feedback Build and save queries by using the Logging query language Stay organized with collections Save and categorize content based on your preferences.
- Include a timestamp expression in the query-editor field To add a timestamp expression directly to the query-editor field, use the Logging query language .

### OpsAnalyticsQuery \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- The alias must be defined in the QueryBuilderConfig 's fieldSources list, otherwise the model is invalid. projectedField object ( ProjectedField ) A projected field option for when a user wants to use a field with some additional transformations such as casting or extractions.
- Home Documentation Observability Cloud Logging Reference Send feedback OpsAnalyticsQuery Stay organized with collections Save and categorize content based on your preferences.
- JSON representation QueryBuilderConfig JSON representation FilterPredicate JSON representation OperatorType FilterExpression JSON representation FieldSource JSON representation ProjectedField JSON representation FieldOperation FunctionApplication JSON representation Comparator SortOrderParameter JSON representation SortOrder Describes a query that can be run in Log Analytics.
- Valid alias examples are: - single word alias: TestAlias - numbers in an alias: Alias123 - multi word alias should be enclosed in quotes: "Test Alias" Invalid alias examples are: - alias containing keywords: WHERE, SELECT, FROM, etc. - alias starting with a number: 1stAlias cast string The cast for the field.

