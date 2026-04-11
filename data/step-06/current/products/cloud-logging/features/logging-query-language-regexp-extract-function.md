---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.526Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logging query language regexp_extract function"
feature_slug: "logging-query-language-regexp-extract-function"
latest_feature_date: "2024-04-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logging-query-language"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
keywords:
  - "logging"
  - "query"
  - "language"
  - "regexp"
  - "extract"
  - "function"
  - "the"
  - "supports"
---

# Logging query language regexp_extract function

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

The Logging query language supports the regexp_extract function.

## Extended Definition

The Logging query language supports the regexp_extract function.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)

## Supporting Pages

### Logging query language \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following functions match the string "hello world": SEARCH("hello world") SEARCH("Hello World") SEARCH("HELLO WORLD") Because backticks are used in the following functions, they produce different results: SEARCH("hello world") SEARCH("world hello") The Logging query language supports different ways that you can search your log data.
- For example, the following query casts the timestamp field into a STRING and specifies the America/New York timezone: cast(timestamp, STRING, TIME ZONE("America/New York")) = "^2025-04-02. " regexp extract Use the regexp extract function to find the first substring that matches a regular expression: REGEXP EXTRACT([FIELD], [REGULAR EXPRESSION]) In the previous expression, the fields are defined as follows: [FIELD] : The name of a field in the log entry, such as logName or jsonPayload.a field . [REGULAR EXPRESSION] : The RE2 regular expression that must contain one capture group ( (...) ).
- Using the resource.type field in the following examples, the Logging query language grammar looks like this: Simple restriction: resource.type = "k8s cluster" Conjunctive restriction: resource.type = "k8s cluster" AND severity = "ERROR" Note: When a query contains multiple statements, you can either specify how those statements are joined or rely on Cloud Logging implicitly adding the conjunctive restriction, AND , between the statements.
- Use indexed fields Logging always indexes the following LogEntry fields: resource.type resource.labels. logName severity timestamp insertId operation.id trace httpRequest.status labels. split.uid You can also add custom indexed fields to any log bucket or make use of the SEARCH function to accelerate your query.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- April 03, 2024 Feature The Logging query language now supports the cast and regexp extract functions.
- April 18, 2023 Feature You can now configure Log Analytics on Cloud Logging buckets and BigQuery linked datasets by using the following Terraform modules: google logging project bucket config google logging linked dataset April 11, 2023 Change The Logging Query Language now supports a built-in SEARCH function that you can use to find strings in your log data.
- March 14, 2023 Feature The Logging Query Language now supports a built-in SEARCH function that you can use to find strings in your log data.
- For more information, see the following documents: About analytics views Create, query, and manage analytics views January 06, 2025 Libraries Go 1.13.0 (2025-01-02) Features logging: Change go gapic transport to grpc+rest in logging ( #11289 ) ( a5f250b ) Bug Fixes logging: Update golang.org/x/net to v0.33.0 ( e9b0b69 ) logging: Update google.golang.org/api to v0.203.0 ( 8bb87d5 ) logging: WARNING: On approximately Dec 1, 2024, an update to Protobuf will change service registration function signatures to use an interface instead of a concrete type in generated .pb.go files.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Write advanced queries using the Logging query language You can use the Logging query language to build more advanced queries in the Logs Explorer query-editor field: If you don't see the query-editor field in the Query pane, enable Show query .
- For example, when the two operators are mixed, the expression a AND b OR c AND d turns into the following Logging query language expression: "a" "b" OR "c" "d" The NOT operator has the highest precedence, followed by OR and AND in that order.
- Home Documentation Observability Cloud Logging Guides Send feedback Build and save queries by using the Logging query language Stay organized with collections Save and categorize content based on your preferences.
- Include a timestamp expression in the query-editor field To add a timestamp expression directly to the query-editor field, use the Logging query language .

