---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.602Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Query Insights and active queries for read pool instances"
feature_slug: "query-insights-and-active-queries-for-read-pool-instances"
latest_feature_date: "2024-08-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview"
  - "https://docs.cloud.google.com/alloydb/docs/query-insights-overview"
keywords:
  - "active query view"
  - "query visibility"
  - "read pool performance"
  - "query insights preview"
  - "read pool instances"
  - "preview availability"
  - "active queries"
  - "Query Insights"
---

# Query Insights and active queries for read pool instances

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

Enhanced Query Insights and active query visibility are available in preview for AlloyDB read pool instances.

## Extended Definition

Enhanced Query Insights and active query visibility are available in preview for AlloyDB read pool instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- [https://docs.cloud.google.com/alloydb/docs/query-insights-overview](https://docs.cloud.google.com/alloydb/docs/query-insights-overview)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- August 08, 2024 Feature Enhanced Query Insights and active queries are now available in Preview for read pool instances.
- July 31, 2024 Feature Gemini in Databases assistance in AlloyDB for PostgreSQL is now available in Preview for standard and enhanced query insights, system insights, index advisor, and active queries.
- February 14, 2025 Feature Support for advanced query insights , index advisor , and active queries is now generally available ( GA ) in AlloyDB for PostgreSQL.
- Enhanced Query Insights : an assistive query performance diagnostics platform that lets you detect, troubleshoot, and prevent database and query performance problems in near real-time.

### "Advanced query insights features overview \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- AlloyDB stores query insights data for its primary and read pool instances for 30 days.
- Benefits of advanced query insights features The following advanced query insights features are available to help you detect and fix query performance problems: Prebuilt dashboards that help you identify query performance problems early and let you identify, diagnose, and resolve issues in a single page on the Google Cloud console.
- To help you proactively identify and troubleshoot root causes of query performance issues, advanced query insights features let you do the following: Perform ad hoc analysis to diagnose difficult problems using near real-time query stats and correlation analysis across multiple dimensions like users, hosts, and databases.
- Based on the previous seven days of Query Insights data, you can monitor query performance at the application level and trace the source of problematic queries across the application stack by action, controller, framework, route, application, and database driver.

### About query insights \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/query-insights-overview](https://docs.cloud.google.com/alloydb/docs/query-insights-overview)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: It discusses Query Insights generally, but there is no specific coverage of read pool instances or active query behavior in the provided content.

Evidence snippets:
- Limitations The limitations of query insights are as follows: When client IP address tracking is enabled and a high number of clients, for example, exceeding 100, send traffic to an instance, query insights capture the client addresses that contribute to the highest cumulative execution time.
- What's Next Improve query performance using query insights AlloyDB metrics Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Query insights let you tag queries with business logic that the query is associated with, such as payment, inventory, business analytics, or shipping so that you can monitor query performance from an application-centric perspective.
- With query insights, you can monitor performance at an application level and trace the source of a problematic query across the application stack by model, view, controller, route, user, and host.

