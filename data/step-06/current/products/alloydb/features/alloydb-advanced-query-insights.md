---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.593Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB advanced query insights"
feature_slug: "alloydb-advanced-query-insights"
latest_feature_date: "2025-02-14"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview"
  - "https://docs.cloud.google.com/alloydb/docs/query-insights-overview"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "query insight recommendations"
  - "execution insight"
  - "advanced query insights"
  - "query insights panel"
  - "advanced insights"
  - "query plan insights"
  - "query insights"
  - "Query Insights"
---

# AlloyDB advanced query insights

Product: AlloyDB
Coverage: HIGH

## Step 02 Summary

AlloyDB for PostgreSQL now supports advanced query insights as a generally available capability.

## Extended Definition

Advanced query insights in AlloyDB for PostgreSQL is a fully managed query-performance analysis feature that helps detect, diagnose, and resolve query issues through prebuilt dashboards and near-real-time query statistics with correlation across dimensions such as users, hosts, and databases. It also supports application-level monitoring by tagging queries with business-logic context (for example, model, view, controller, route, user, or host) and offers client/IP-related execution-time insights within documented limitations, and it is documented as generally available as of 2025-02-14.

## Evidence Summary

The AlloyDB documentation pages describe what advanced query insights does and how it works, while the release notes provide lifecycle status and GA timing for the feature.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- [https://docs.cloud.google.com/alloydb/docs/query-insights-overview](https://docs.cloud.google.com/alloydb/docs/query-insights-overview)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### "Advanced query insights features overview \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Benefits of advanced query insights features The following advanced query insights features are available to help you detect and fix query performance problems: Prebuilt dashboards that help you identify query performance problems early and let you identify, diagnose, and resolve issues in a single page on the Google Cloud console.
- To help you proactively identify and troubleshoot root causes of query performance issues, advanced query insights features let you do the following: Perform ad hoc analysis to diagnose difficult problems using near real-time query stats and correlation analysis across multiple dimensions like users, hosts, and databases.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Advanced query insights features overview Stay organized with collections Save and categorize content based on your preferences.
- How advanced query insights features work Advanced query insights features are fully managed, which means you don't need to install or actively manage the feature.

### About query insights \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/query-insights-overview](https://docs.cloud.google.com/alloydb/docs/query-insights-overview)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: The page is an overview of AlloyDB Query Insights and explains its performance diagnosis and monitoring capabilities, though it does not explicitly call the feature 'advanced' or state GA status.

Evidence snippets:
- Limitations The limitations of query insights are as follows: When client IP address tracking is enabled and a high number of clients, for example, exceeding 100, send traffic to an instance, query insights capture the client addresses that contribute to the highest cumulative execution time.
- What's Next Improve query performance using query insights AlloyDB metrics Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Query insights let you tag queries with business logic that the query is associated with, such as payment, inventory, business analytics, or shipping so that you can monitor query performance from an application-centric perspective.
- With query insights, you can monitor performance at an application level and trace the source of a problematic query across the application stack by model, view, controller, route, user, and host.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- February 14, 2025 Feature Support for advanced query insights , index advisor , and active queries is now generally available ( GA ) in AlloyDB for PostgreSQL.
- April 02, 2026 Change You can now enable Advanced Query Insights on primary clusters which have secondary clusters configured.
- For more information, see Improve query performance using advanced query insights features for AlloyDB .
- If you perform a switchover, you must re-enable Advanced Query Insights on the new primary cluster.

