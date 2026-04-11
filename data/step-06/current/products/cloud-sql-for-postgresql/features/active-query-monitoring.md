---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.328Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Active query monitoring"
feature_slug: "active-query-monitoring"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "active"
  - "query"
  - "monitoring"
  - "helps"
  - "you"
  - "monitor"
  - "and"
  - "troubleshoot"
---

# Active query monitoring

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Active query monitoring helps you monitor and troubleshoot queries that are currently running in your database.

## Extended Definition

Active query monitoring helps you monitor and troubleshoot queries that are currently running in your database.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- After creating a replica, the query SELECT from pg stat activity where state = 'active' and pid = XXXX and username = 'cloudsqlreplica' is expected to run continuously on your primary instance.
- For general tuning advice, see Optimizing, monitoring, and troubleshooting vacuum operations in PostgreSQL .
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Issues updating storage capacity Topics in this page include: Backup and recovery Cancel import and export Cloning Connectivity Creating instances Flags High availability Import and export Integrate with Vertex AI Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- Connect to the database and run the following query: SELECT datname, username, application name as appname, client addr, state, now() - backend start as conn age, now() - xact start as xact age, now() - query start as query age, now() - state change as last activity age, wait event type, wait event, query FROM pg stat activity WHERE state <> 'idle' ORDER BY 8 DESC LIMIT 20; You want to find out what units are being used for a specific field.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Monitor active queries : monitor and troubleshoot the queries that are active in your database.
- It provides self-service, intuitive monitoring, and diagnostic information that goes beyond detection to help you to identify the root cause of performance problems.
- It helps you set up production-ready vector search capabilities, such as embedding generation, query optimization, and index creation.
- To use AI-assisted troubleshooting, you need Gemini Cloud Assist and query insights for Enterprise Plus edition .

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Monitor active queries : monitor and troubleshoot the queries that are active in your database.
- Monitor active queries : monitor and troubleshoot the queries that are active in your database.
- Cloud SQL for SQL Server Feature You can use the following observability dashboards in Cloud SQL for SQL Server to monitor, analyze, and diagnose issues with your instances, databases, and queries: System insights Query insights Both of these dashboards are available to you in the Google Cloud Console.
- July 19, 2024 Cloud SQL for SQL Server Feature You can now use Extended Events (XEvents) on your Cloud SQL for SQL Server instance to monitor, identify, and troubleshoot the performance of the databases on your instance.

