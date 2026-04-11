---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.657Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Week 5 maintenance notifications"
feature_slug: "week-5-maintenance-notifications"
latest_feature_date: "2024-06-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "week"
  - "maintenance"
  - "notifications"
  - "sql"
  - "lets"
  - "you"
  - "choose"
  - "to"
---

# Week 5 maintenance notifications

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL lets you choose to receive maintenance notifications five weeks before a scheduled maintenance update.

## Extended Definition

Cloud SQL lets you choose to receive maintenance notifications five weeks before a scheduled maintenance update.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- June 10, 2024 Feature You can now choose to receive a maintenance notification 5 weeks before the maintenance update of your Cloud SQL instance is scheduled to occur.
- April 30, 2021 Feature The following version upgrade applies to Cloud SQL for SQL Server: SQL Server 2017 is upgraded from 14.0.3257.3 to 14.0.3370.1 If you use maintenance windows, the new version will be available after your maintenance update.
- While Cloud SQL schedules maintenance updates once every few months to ensure you have the latest maintenance version, you might want to use self-service maintenance if: You need an update sooner than your next scheduled maintenance event.
- This option lets you establish your own CA hierarchy and manage the rotation of CA certificates for your Cloud SQL instances to help you meet your regulatory compliance needs.

### "Choose how to connect to Cloud SQL \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Configuration options Cloud SQL Auth Proxy , or Cloud SQL Language Connectors, including Cloud SQL Java connector Cloud SQL Python connector Cloud SQL Go connector Cloud SQL Node.js connector The following Google Cloud services use an embedded Cloud SQL Auth Proxy when you connect to a Cloud SQL instance over public IP address: Cloud Run App Engine flexible environment App Engine standard environment To configure SSL/TLS certificates on the Cloud SQL instance and for your client, do the following: Choose a server CA mode for your instance .
- IP address type: private or public When you first create your Cloud SQL instance, you can choose whether to configure the instance with a public IP address , a private IP address , or a combination of both .
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Choose how to connect to Cloud SQL Stay organized with collections Save and categorize content based on your preferences.
- Cloud Shell Connecting using the Cloud Shell Cloud Code Connecting using Cloud Code in JetBrains IDE Connect using third-party database administration tools SQL Server Management Studio Connecting with SQL Server Management Studio SSMS Object Explorer Connecting with SSMS Object Explorer Visual Studio Visual Studio Code for SQL Server Troubleshoot If you're having problems connecting, then check the following pages for help debugging or finding solutions to known issues: Debugging connection issues Known connectivity errors Troubleshooting Cloud SQL Auth Proxy connection Common connection issues What's next Learn how to connect with the Quickstart for Cloud SQL for sqlserver .

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- June 10, 2024 Cloud SQL for MySQL Feature You can now choose to receive a maintenance notification 5 weeks before the maintenance update of your Cloud SQL instance is scheduled to occur.
- Cloud SQL for SQL Server Feature You can now choose to receive a maintenance notification 5 weeks before the maintenance update of your Cloud SQL instance is scheduled to occur.
- Feature You can now choose to receive a maintenance notification 5 weeks before the maintenance update of your Cloud SQL instance is scheduled to occur.
- Please use this table to find the name of the maintenance version to apply, and use that version or the latest version available: PostgreSQL version Maintenance version PostgreSQL 9.6 POSTGRES 9 6 24.R20220710.01 02 PostgreSQL 10 POSTGRES 10 21.R20220710.01 02 PostgreSQL 11 POSTGRES 11 16.R20220710.01 02 PostgreSQL 12 POSTGRES 12 11.R20220710.01 02 PostgreSQL 13 POSTGRES 13 7.R20220710.01 02 After you have identified the name of the maintenance version, please upgrade to the target maintenance version , performing the corresponding update of your instances (to the latest maintenance version).

