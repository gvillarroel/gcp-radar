---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.567Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Gemini Cloud Assist investigation capabilities"
feature_slug: "gemini-cloud-assist-investigation-capabilities"
latest_feature_date: "2026-02-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting"
keywords:
  - "gemini"
  - "assist"
  - "investigation"
  - "capabilities"
  - "help"
  - "troubleshoot"
  - "sql"
  - "issues"
---

# Gemini Cloud Assist investigation capabilities

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Gemini Cloud Assist investigation capabilities help troubleshoot Cloud SQL issues with AI-assisted investigation workflows.

## Extended Definition

Gemini Cloud Assist investigation capabilities help troubleshoot Cloud SQL issues with AI-assisted investigation workflows.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)

## Supporting Pages

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- February 23, 2026 Feature Gemini Cloud Assist investigation capabilities are now supported in Cloud SQL for SQL Server ( Preview ).
- Feature The Cloud SQL Active Directory (AD) Diagnosis tool helps you troubleshoot issues that you might face while connecting to AD-enabled Cloud SQL for SQL Server instances, using an on-premises AD domain.
- With AI-assisted troubleshooting, you can resolve complex database performance issues like slow queries and high load for your instances in a guided manner.
- These metrics improve observability of Cloud SQL for SQL Server instances, helping you investigate performance issues and resource bottlenecks.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- February 23, 2026 Cloud SQL for MySQL Feature Gemini Cloud Assist investigation capabilities are now supported in Cloud SQL for MySQL ( Preview ).
- Cloud SQL for PostgreSQL Feature Gemini Cloud Assist investigation capabilities are now supported in Cloud SQL for PostgreSQL ( Preview ).
- Cloud SQL for SQL Server Feature Gemini Cloud Assist investigation capabilities are now supported in Cloud SQL for SQL Server ( Preview ).
- You can use Gemini assistance to help you observe and troubleshoot your Cloud SQL resources.

### Troubleshoot \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Issues updating storage capacity Topics in this page include: Backup and recovery Cloning Connectivity Creating instances Flags High availability Import and export Linked servers Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- Network connectivity issues with private IP instances You might experience some of the following issues during integration setup: Slow operations to create Microsoft Entra ID logins Unable to create Microsoft Entra ID logins Unable to connect to the instance using Microsoft Entra ID authentication For more information on how to help address these issues, see Troubleshooting Microsoft Entra ID integration .
- To download the logs as JSON: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" \ downloaded-log.json To download the logs as TEXT: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" jq -rnc --stream 'fromstream(1 truncate stream(inputs)) \ .textPayload' \ --order = asc downloaded-log.txt Manage instances Issue Troubleshooting Temporary storage increased automatic storage.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Troubleshoot Stay organized with collections Save and categorize content based on your preferences.

