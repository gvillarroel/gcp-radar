---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.867Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Cloud SQL Auth Proxy v2"
feature_slug: "cloud-sql-auth-proxy-v2"
latest_feature_date: "2023-02-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "sql"
  - "auth"
  - "proxy"
  - "v2"
  - "improves"
  - "secure"
  - "connectivity"
  - "to"
---

# Cloud SQL Auth Proxy v2

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL Auth Proxy v2 improves secure connectivity to Cloud SQL instances with better performance, stability, telemetry, and expanded configuration and integration features.

## Extended Definition

Cloud SQL Auth Proxy v2 improves secure connectivity to Cloud SQL instances with better performance, stability, telemetry, and expanded configuration and integration features.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview)
- [https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool](https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### "Choose how to connect to Cloud SQL \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Shell Connecting using the Cloud Shell Cloud Code Connecting using Cloud Code in JetBrains IDE Connect using third-party database administration tools SQL Server Management Studio Connecting with SQL Server Management Studio SSMS Object Explorer Connecting with SSMS Object Explorer Visual Studio Visual Studio Code for SQL Server Troubleshoot If you're having problems connecting, then check the following pages for help debugging or finding solutions to known issues: Debugging connection issues Known connectivity errors Troubleshooting Cloud SQL Auth Proxy connection Common connection issues What's next Learn how to connect with the Quickstart for Cloud SQL for sqlserver .
- Cloud SQL connector Direct connection Description Cloud SQL Auth Proxy, a client-side proxy, and Cloud SQL Language Connectors, client-side libraries, provide simplified and secure access to your Cloud SQL instances, especially when you connect to an instance using a public IP address.
- Another more secure alternative for connecting to a Cloud SQL instance that uses public IP is to use a Cloud SQL connector (such as the Cloud SQL Auth Proxy or one of the Cloud SQL Language Connectors).
- Configuration options Cloud SQL Auth Proxy , or Cloud SQL Language Connectors, including Cloud SQL Java connector Cloud SQL Python connector Cloud SQL Go connector Cloud SQL Node.js connector The following Google Cloud services use an embedded Cloud SQL Auth Proxy when you connect to a Cloud SQL instance over public IP address: Cloud Run App Engine flexible environment App Engine standard environment To configure SSL/TLS certificates on the Cloud SQL instance and for your client, do the following: Choose a server CA mode for your instance .

### "Active Directory Diagnosis tool for Cloud SQL \_|\_ Cloud SQL for SQL Server\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool](https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Active Directory Diagnosis tool for Cloud SQL Stay organized with collections Save and categorize content based on your preferences.
- The Active Directory (AD) Diagnosis tool is a utility PowerShell script that helps you to troubleshoot AD setup issues with your on-premises domain and Cloud SQL for SQL Server instances in Google Cloud.
- On-premises domain name, such as my-onprem-domain.com Managed AD domain name, such as my-ad-domain.com List of SQL Server Active Directory FQDNs and private IP addresses.
- This page describes how to use the Active Directory Diagnosis tool for Cloud SQL and explains the checks that the tool performs.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- February 08, 2023 Cloud SQL for MySQL Feature The Cloud SQL Auth proxy is a utility for ensuring secure connections to your Cloud SQL instances.
- Cloud SQL for PostgreSQL Feature The Cloud SQL Auth proxy is a utility for ensuring secure connections to your Cloud SQL instances.
- Cloud SQL for SQL Server Feature The Cloud SQL Auth proxy is a utility for ensuring secure connections to your Cloud SQL instances.
- For users of the Cloud SQL Auth Proxy : If the Cloud SQL instance to which you're connecting is using shared certificate authority (CA) for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.13.0 or later.

