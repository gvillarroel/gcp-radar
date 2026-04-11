---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.423Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Query Insights"
feature_slug: "query-insights"
latest_feature_date: "2021-01-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/ai-overview"
keywords:
  - "query"
  - "insights"
  - "provides"
  - "performance"
  - "monitoring"
  - "and"
  - "diagnostics"
  - "to"
---

# Query Insights

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Query Insights provides performance monitoring and diagnostics to detect and troubleshoot slow queries in Cloud SQL databases.

## Extended Definition

Query Insights provides performance monitoring and diagnostics to detect and troubleshoot slow queries in Cloud SQL databases.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/ai-overview](https://docs.cloud.google.com/sql/docs/postgres/ai-overview)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- It provides self-service, intuitive monitoring, and diagnostic information that goes beyond detection to help you to identify the root cause of performance problems.
- For more information about monitoring queries, see Use Query Insights to improve query performance .
- Each edition provides different performance and availability characteristics to meet the needs of your applications.
- To use AI-assisted troubleshooting, you need Gemini Cloud Assist and query insights for Enterprise Plus edition .

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- It provides self-service, intuitive monitoring, and diagnostic information that goes beyond detection to help you to identify the root cause of performance problems.
- It provides self-service, intuitive monitoring, and diagnostic information that goes beyond detection to help you to identify the root cause of performance problems.
- For more information about monitoring queries, see Use Query Insights to improve query performance .
- Cloud SQL for SQL Server Feature You can use the following observability dashboards in Cloud SQL for SQL Server to monitor, analyze, and diagnose issues with your instances, databases, and queries: System insights Query insights Both of these dashboards are available to you in the Google Cloud Console.

### "Build generative AI applications using Cloud SQL \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/ai-overview](https://docs.cloud.google.com/sql/docs/postgres/ai-overview)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Cloud SQL provides the following metrics in the Metrics Explorer in Cloud Monitoring: Metric Description Metric label Data cache used The data cache usage (in bytes) database/data cache/bytes used Data cache quota The maximum data cache size (in bytes) database/data cache/quota Data cache hit count The total number of data cache hit read operations for an instance database/postgresql/data cache/hit count Data cache miss count The total number of data cache miss read operations for an instance database/postgresql/data cache/miss count Data cache hit ratio The ratio of data cache hit read operations to data cache miss read operations for an instance database/postgresql/data cache/hit ratio System Insights : provide system metrics such as CPU utilization, disk utilization, and throughput to help you monitor the health of instances and troubleshoot issues that affect the performance of your generative AI applications.
- You can use the Cloud SQL Query Insights dashboard to observe the performance of top queries and analyze these queries by using visual query plans.
- Query Insights can also help you integrate with your existing application monitoring (APM) tools so that you can troubleshoot query problems using tools with which you're familiar.
- You can also monitor performance at an application level and trace the source of a problematic query across the application stack to the database by using SQLcommenter .

