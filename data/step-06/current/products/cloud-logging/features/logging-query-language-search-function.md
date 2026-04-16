---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.355Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logging query language SEARCH function"
feature_slug: "logging-query-language-search-function"
latest_feature_date: "2023-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logging-query-language"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
keywords:
  - "logging"
  - "query"
  - "language"
  - "search"
  - "includes"
  - "built"
  - "finding"
  - "strings"
---

# Logging query language SEARCH function

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Logging Query Language includes a built-in SEARCH function for finding strings in log data.

## Extended Definition

The Logging Query Language includes a built-in SEARCH function for finding strings in log data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)

## Supporting Pages

### Logging query language \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following functions match the string "hello world": SEARCH("hello world") SEARCH("Hello World") SEARCH("HELLO WORLD") Because backticks are used in the following functions, they produce different results: SEARCH("hello world") SEARCH("world hello") The Logging query language supports different ways that you can search your log data.
- You can use the built-in SEARCH function to find strings in your log data: SEARCH([query]) SEARCH([field], [query]) Both forms of the SEARCH function contain a query argument, which must be formatted as a string literal.
- Using the resource.type field in the following examples, the Logging query language grammar looks like this: Simple restriction: resource.type = "k8s cluster" Conjunctive restriction: resource.type = "k8s cluster" AND severity = "ERROR" Note: When a query contains multiple statements, you can either specify how those statements are joined or rely on Cloud Logging implicitly adding the conjunctive restriction, AND , between the statements.
- For example, if you are looking in your activity log for entries containing any mention of GCE OPERATION DONE , you can use the following query: logName = "projects/my-project-id/logs/compute.googleapis.com%2Factivity log" AND "GCE OPERATION DONE" Instead of using global restrictions, which can be slow, we recommend that you use the built-in SEARCH function and query indexed fields.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- The search terms you enter in this field are converted into a Logging query language expression.
- View saved queries You can view both private queries and queries that are shared with other members in the Google Cloud project by clicking the menu book Query library button: Console In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Write advanced queries using the Logging query language You can use the Logging query language to build more advanced queries in the Logs Explorer query-editor field: If you don't see the query-editor field in the Query pane, enable Show query .
- For example, when the two operators are mixed, the expression a AND b OR c AND d turns into the following Logging query language expression: "a" "b" OR "c" "d" The NOT operator has the highest precedence, followed by OR and AND in that order.

### Internet Information Services \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis)
- Source ID: `site-docs-root-2`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enter the following query in the editor, and then click Run query : resource.type="gce instance" log id("iis access") To verify that IIS metrics are being sent to Cloud Monitoring, do the following: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Example configuration The following commands create the configuration to collect and ingest telemetry for IIS: $ ErrorActionPreference = ' Stop ' This config gets merged with the built - in Ops Agent config , which already includes the v1 receiver in the default pipeline .
- To verify that IIS logs are being sent to Cloud Logging, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- The language toggle is in the same toolbar that lets you format your query.

