---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.924Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "europe-central2 region support"
feature_slug: "europe-central2-region-support"
latest_feature_date: "2021-03-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/ad"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages"
keywords:
  - "europe"
  - "central2"
  - "region"
  - "sql"
  - "for"
  - "server"
  - "instances"
  - "can"
---

# europe-central2 region support

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL for SQL Server instances can be deployed in the europe-central2 (Warsaw) region.

## Extended Definition

Cloud SQL for SQL Server instances can be deployed in the europe-central2 (Warsaw) region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages)

## Supporting Pages

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- December 05, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: africa-south1 (Johannesburg) asia-east2 (Hong Kong) europe-west10 (Berlin) December 03, 2024 Feature You can now use the Network Connectivity Center hub to propagate Private Service Connect endpoints of Cloud SQL instances in a VPC network.
- December 20, 2024 Feature You can use the following observability dashboards in Cloud SQL for SQL Server to monitor, analyze, and diagnose issues with your instances, databases, and queries: System insights Query insights Both of these dashboards are available to you in the Google Cloud Console.
- With committed use discounts for Cloud SQL, you can earn a deep discount off your cost of use in exchange for committing to continuously use database instances in a particular region for a 1- or 3-year term.
- June 20, 2024 Feature You can now use the gcloud sql instances describe command or the SQL Admin API to retrieve a list of database versions that are available to your SQL Server instance for upgrade.

### "Overview of Managed Microsoft AD in Cloud SQL \_|\_ Cloud SQL for SQL Server\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad)
- Source ID: `site-iam-reference`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- Best practices for integrating with Managed Microsoft AD When you plan an integration, review the following: Prerequisites for integration Integrating with a managed AD domain in a different project Managed Microsoft AD documentation Deploy domain controllers in additional regions Use the AD diagnosis tool to troubleshoot AD setup issues with your on-premises domain and Cloud SQL for SQL Server instances in Google Cloud console.
- However, you can: Add global groups or individual user logins directly in SQL Server Use universal groups when all groups and users belong to the same forest If domain local groups were supported, individual user accounts, and global and universal groups, could be added as children of a domain local group (that guards access to SQL Server).
- Option 1: Add user accounts and groups as logins to SQL Server If you have multiple domains, in multiple forests, and you have multiple global groups, you can add all of the individual user accounts, and the global and universal groups, directly as logins to SQL Server.
- MySQL PostgreSQL SQL Server You can integrate Cloud SQL for SQL Server with Managed Service for Microsoft Active Directory (also called Managed Microsoft AD).

### "Cloud SQL Admin API error messages \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages)
- Source ID: `site-api-reference`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL SQL Server Reference Send feedback Cloud SQL Admin API error messages Stay organized with collections Save and categorize content based on your preferences.
- ERROR PITR BACKUP RUN NOT DELETABLE This upgrade backup cannot be deleted because it's within the point-in-time recovery retention period for the instance.
- ERROR READ REPLICA INCOMPATIBLE DATABASE TYPES The database versions for the source and target instances are incompatible for replication.
- ERROR INVALID CLONE DESTINATION PROJECT The project for the destination Cloud SQL instance doesn't match the project on the request URL.

