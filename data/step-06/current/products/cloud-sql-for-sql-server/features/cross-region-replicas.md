---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.918Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "cross-region replicas"
feature_slug: "cross-region-replicas"
latest_feature_date: "2021-06-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/ad"
keywords:
  - "cross"
  - "region"
  - "replicas"
  - "sql"
  - "for"
  - "server"
  - "supports"
  - "creating"
---

# cross-region replicas

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL for SQL Server supports creating replicas in other regions.

## Extended Definition

Cloud SQL for SQL Server supports creating replicas in other regions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages)
- [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad)

## Supporting Pages

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- February 08, 2022 Feature Cross-region replication is now generally available in Cloud SQL for SQL Server.
- Feature Cloud SQL for SQL Server now supports SQL Server 2025 ( GA ): SQL Server 2025 Standard SQL Server 2025 Enterprise SQL Server 2025 Express For more information, see Database versions and version policies and Choose a machine series .
- May 14, 2025 Feature Cloud SQL for SQL Server now supports TLS connections to Active Directory endpoints without requiring server certificate trust or the use of IP addresses.
- March 17, 2025 Feature Cloud SQL for SQL Server supports transparent data encryption (TDE) to encrypt data stored in your Cloud SQL for SQL Server instances.

### "Cloud SQL Admin API error messages \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL SQL Server Reference Send feedback Cloud SQL Admin API error messages Stay organized with collections Save and categorize content based on your preferences.
- ERROR BOTH GCE ZONE GAE APP SPECIFIED The Compute Engine zone and the App Engine application ID are both specified for location preference when creating or updating an instance.
- ERROR INVALID CLONE DESTINATION PROJECT The project for the destination Cloud SQL instance doesn't match the project on the request URL.
- ERROR INVALID CLONE SOURCE PROJECT The project for the source Cloud SQL instance doesn't match the project on the request URL.

### "Overview of Managed Microsoft AD in Cloud SQL \_|\_ Cloud SQL for SQL Server\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Best practices for integrating with Managed Microsoft AD When you plan an integration, review the following: Prerequisites for integration Integrating with a managed AD domain in a different project Managed Microsoft AD documentation Deploy domain controllers in additional regions Use the AD diagnosis tool to troubleshoot AD setup issues with your on-premises domain and Cloud SQL for SQL Server instances in Google Cloud console.
- Having a SQL Server instance and a managed AD instance in the same region offers the lowest network latency and the best performance.
- If your Managed Microsoft AD is in a different project, AD PROJECT ID should be the one containing the Managed Service for Microsoft Active Directory instance, while the service account's SQL PROJECT NUMBER should be the one containing the SQL Server instance: gcloud projects add-iam-policy-binding AD PROJECT ID \ --member = serviceAccount:service- SQL PROJECT NUMBER @gcp-sa-cloud-sql.iam.gserviceaccount.com \ --role = roles/managedidentities.sqlintegrator Also see gcloud beta services identity create .
- However, you can: Add global groups or individual user logins directly in SQL Server Use universal groups when all groups and users belong to the same forest If domain local groups were supported, individual user accounts, and global and universal groups, could be added as children of a domain local group (that guards access to SQL Server).

