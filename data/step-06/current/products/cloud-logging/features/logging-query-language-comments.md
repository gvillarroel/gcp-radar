---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.544Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logging query language comments"
feature_slug: "logging-query-language-comments"
latest_feature_date: "2022-04-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logging-query-language"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
keywords:
  - "logging"
  - "query"
  - "language"
  - "comments"
  - "the"
  - "supports"
  - "within"
  - "queries"
---

# Logging query language comments

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

The Logging query language supports comments within queries.

## Extended Definition

The Logging query language supports comments within queries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)

## Supporting Pages

### Logging query language \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following functions match the string "hello world": SEARCH("hello world") SEARCH("Hello World") SEARCH("HELLO WORLD") Because backticks are used in the following functions, they produce different results: SEARCH("hello world") SEARCH("world hello") The Logging query language supports different ways that you can search your log data.
- Syntax notation The following sections provide an overview of the Logging query language syntax, and discuss in detail how queries are structured and how matching is performed.
- Syntax summary The Logging query language syntax can be thought of in terms of queries and comparisons .
- Using the resource.type field in the following examples, the Logging query language grammar looks like this: Simple restriction: resource.type = "k8s cluster" Conjunctive restriction: resource.type = "k8s cluster" AND severity = "ERROR" Note: When a query contains multiple statements, you can either specify how those statements are joined or rely on Cloud Logging implicitly adding the conjunctive restriction, AND , between the statements.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Write advanced queries using the Logging query language You can use the Logging query language to build more advanced queries in the Logs Explorer query-editor field: If you don't see the query-editor field in the Query pane, enable Show query .
- Home Documentation Observability Cloud Logging Guides Send feedback Build and save queries by using the Logging query language Stay organized with collections Save and categorize content based on your preferences.
- The queries you build are written in the Logging query language .
- The following example illustrates a sample request body, which contains an instance of SavedQuery : { "parent": "projects/my-project/locations/global" "savedQueryId": "compute-query" { "displayName": "compute-admin-activity-query", "description": "Queries for Compute Engine Admin Activity logs.", "loggingQuery": { "filter": resource.type="gce instance" AND log id("cloudaudit.googleapis.com/activity"), }, "visibility": "PRIVATE" } } To share the query with other members of the Google Cloud project, specify a value of SHARED in the visibility field.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- April 18, 2023 Feature You can now configure Log Analytics on Cloud Logging buckets and BigQuery linked datasets by using the following Terraform modules: google logging project bucket config google logging linked dataset April 11, 2023 Change The Logging Query Language now supports a built-in SEARCH function that you can use to find strings in your log data.
- March 14, 2023 Feature The Logging Query Language now supports a built-in SEARCH function that you can use to find strings in your log data.
- April 03, 2024 Feature The Logging query language now supports the cast and regexp extract functions.
- September 15, 2025 Libraries Java 3.23.4 (2025-09-11) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.62.1 ( 1438bff ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.52.1 ( #1853 ) ( c21a635 ) Update googleapis/sdk-platform-java action to v2.62.1 ( #1855 ) ( b6ce498 ) September 08, 2025 Libraries Node.js 11.2.1 (2025-09-03) Bug Fixes logging: Specifying resourceNames should fetch logs only from those resources ( #1597 ) ( ff7899f ) August 25, 2025 Libraries Java 3.23.3 (2025-08-20) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.52.0 ( #1848 ) ( 162ef56 ) August 11, 2025 Libraries Java 3.23.2 (2025-08-05) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.61.0 ( 0a21b83 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #1843 ) ( 975d8ae ) Java 3.23.2 (2025-08-05) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.61.0 ( 0a21b83 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #1843 ) ( 975d8ae ) Java 3.23.2 (2025-08-05) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.61.0 ( 0a21b83 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #1843 ) ( 975d8ae ) August 04, 2025 Libraries Java 3.23.1 (2025-07-28) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( 6a268f8 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #1834 ) ( 2e46f6e ) Java 3.23.1 (2025-07-28) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( 6a268f8 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #1834 ) ( 2e46f6e ) Java 3.23.1 (2025-07-28) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( 6a268f8 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #1834 ) ( 2e46f6e ) Java 3.23.1 (2025-07-28) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( 6a268f8 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #1834 ) ( 2e46f6e ) Feature You can now build queries without manually writing SQL in the Log Analytics page by using the query builder.

