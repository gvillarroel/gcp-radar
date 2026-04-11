---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.690Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Cloud SQL Proxy Operator"
feature_slug: "cloud-sql-proxy-operator"
latest_feature_date: "2023-05-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview"
keywords:
  - "sql"
  - "proxy"
  - "operator"
  - "provides"
  - "kubernetes"
  - "based"
  - "management"
  - "of"
---

# Cloud SQL Proxy Operator

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL Proxy Operator provides Kubernetes-based management of Cloud SQL Proxy connectivity; The Cloud SQL Proxy Operator automates connecting workloads in a GKE cluster to Cloud SQL databases.

## Extended Definition

Cloud SQL Proxy Operator provides Kubernetes-based management of Cloud SQL Proxy connectivity; The Cloud SQL Proxy Operator automates connecting workloads in a GKE cluster to Cloud SQL databases.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview)

## Supporting Pages

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- July 31, 2025 Feature Cloud SQL now offers two options of backup services to manage your instance's backups: Enhanced backups ( Preview ): backups are managed and stored in a centralized backup management project that leverages the Backup and DR service , and provides enforced retention, granular scheduling, and longer retention.
- December 11, 2025 Feature Cloud SQL for SQL Server integration with Microsoft Entra ID ( Preview ) provides centralized identity and access management (IAM) for your databases using your existing Microsoft Entra ID tenant.
- Feature Cloud SQL for SQL Server integration with Microsoft Entra ID ( GA ) provides centralized identity and access management (IAM) for your databases using your existing Microsoft Entra ID tenant.
- The Cloud SQL Proxy Operator is an open-source Kubernetes operator that automates connecting workloads in a GKE cluster to Cloud SQL databases.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- July 31, 2025 Cloud SQL for MySQL Feature Cloud SQL now offers two options of backup services to manage your instance's backups: Enhanced backups ( Preview ): backups are managed and stored in a centralized backup management project that leverages the Backup and DR service , and provides enforced retention, granular scheduling, and longer retention.
- Cloud SQL for PostgreSQL Feature Cloud SQL now offers two options of backup services to manage your instance's backups: Enhanced backups ( Preview ): backups are managed and stored in a centralized backup management project that leverages the Backup and DR service , and provides enforced retention, granular scheduling, and longer retention.
- Cloud SQL for SQL Server Feature Cloud SQL now offers two options of backup services to manage your instance's backups: Enhanced backups ( Preview ): backups are managed and stored in a centralized backup management project that leverages the Backup and DR service , and provides enforced retention, granular scheduling, and longer retention.
- December 11, 2025 Cloud SQL for SQL Server Feature Cloud SQL for SQL Server integration with Microsoft Entra ID ( Preview ) provides centralized identity and access management (IAM) for your databases using your existing Microsoft Entra ID tenant.

### "Choose how to connect to Cloud SQL \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Shell Connecting using the Cloud Shell Cloud Code Connecting using Cloud Code in JetBrains IDE Connect using third-party database administration tools SQL Server Management Studio Connecting with SQL Server Management Studio SSMS Object Explorer Connecting with SSMS Object Explorer Visual Studio Visual Studio Code for SQL Server Troubleshoot If you're having problems connecting, then check the following pages for help debugging or finding solutions to known issues: Debugging connection issues Known connectivity errors Troubleshooting Cloud SQL Auth Proxy connection Common connection issues What's next Learn how to connect with the Quickstart for Cloud SQL for sqlserver .
- Configuration options The following types of private networking configurations are supported: Private services access : connect to Cloud SQL instances from a single VPC network based on networking peering.
- Another more secure alternative for connecting to a Cloud SQL instance that uses public IP is to use a Cloud SQL connector (such as the Cloud SQL Auth Proxy or one of the Cloud SQL Language Connectors).
- If you're connecting to an instance by a public IP address , use a Cloud SQL connector (either the Cloud SQL Auth Proxy or one of the Cloud SQL Language Connectors).

