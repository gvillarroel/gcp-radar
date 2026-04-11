---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.538Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logging query language SEARCH function"
feature_slug: "logging-query-language-search-function"
latest_feature_date: "2023-03-14"
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
  - "search"
  - "function"
  - "the"
  - "includes"
  - "built"
---

# Logging query language SEARCH function

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

The Logging Query Language includes a built-in SEARCH function for finding strings in log data.

## Extended Definition

The Logging Query Language includes a built-in SEARCH function for finding strings in log data.

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
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following functions match the string "hello world": SEARCH("hello world") SEARCH("Hello World") SEARCH("HELLO WORLD") Because backticks are used in the following functions, they produce different results: SEARCH("hello world") SEARCH("world hello") The Logging query language supports different ways that you can search your log data.
- For example, if you are looking in your activity log for entries containing any mention of GCE OPERATION DONE , you can use the following query: logName = "projects/my-project-id/logs/compute.googleapis.com%2Factivity log" AND "GCE OPERATION DONE" Instead of using global restrictions, which can be slow, we recommend that you use the built-in SEARCH function and query indexed fields.
- Use indexed fields Logging always indexes the following LogEntry fields: resource.type resource.labels. logName severity timestamp insertId operation.id trace httpRequest.status labels. split.uid You can also add custom indexed fields to any log bucket or make use of the SEARCH function to accelerate your query.
- You can use the built-in SEARCH function to find strings in your log data: SEARCH([query]) SEARCH([field], [query]) Both forms of the SEARCH function contain a query argument, which must be formatted as a string literal.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- April 18, 2023 Feature You can now configure Log Analytics on Cloud Logging buckets and BigQuery linked datasets by using the following Terraform modules: google logging project bucket config google logging linked dataset April 11, 2023 Change The Logging Query Language now supports a built-in SEARCH function that you can use to find strings in your log data.
- March 14, 2023 Feature The Logging Query Language now supports a built-in SEARCH function that you can use to find strings in your log data.
- April 03, 2024 Feature The Logging query language now supports the cast and regexp extract functions.
- For more information, see the following documents: About analytics views Create, query, and manage analytics views January 06, 2025 Libraries Go 1.13.0 (2025-01-02) Features logging: Change go gapic transport to grpc+rest in logging ( #11289 ) ( a5f250b ) Bug Fixes logging: Update golang.org/x/net to v0.33.0 ( e9b0b69 ) logging: Update google.golang.org/api to v0.203.0 ( 8bb87d5 ) logging: WARNING: On approximately Dec 1, 2024, an update to Protobuf will change service registration function signatures to use an interface instead of a concrete type in generated .pb.go files.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- The search terms you enter in this field are converted into a Logging query language expression.
- View saved queries You can view both private queries and queries that are shared with other members in the Google Cloud project by clicking the menu book Query library button: Console In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Write advanced queries using the Logging query language You can use the Logging query language to build more advanced queries in the Logs Explorer query-editor field: If you don't see the query-editor field in the Query pane, enable Show query .
- For example, when the two operators are mixed, the expression a AND b OR c AND d turns into the following Logging query language expression: "a" "b" OR "c" "d" The NOT operator has the highest precedence, followed by OR and AND in that order.

