---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.663Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "SSL mode"
feature_slug: "ssl-mode"
latest_feature_date: "2024-04-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "ssl"
  - "mode"
  - "sql"
  - "supports"
  - "for"
  - "specifying"
  - "connection"
  - "encryption"
---

# SSL mode

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL supports SSL mode for specifying connection encryption requirements instead of the legacy require_ssl setting.

## Extended Definition

Cloud SQL supports SSL mode for specifying connection encryption requirements instead of the legacy require_ssl setting.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- April 02, 2024 Feature You can now use SSL mode instead of the legacy require ssl setting to specify the encryption requirements for connections to your Cloud SQL for SQL Server instances.
- May 14, 2025 Feature Cloud SQL for SQL Server now supports TLS connections to Active Directory endpoints without requiring server certificate trust or the use of IP addresses.
- March 17, 2025 Feature Cloud SQL for SQL Server supports transparent data encryption (TDE) to encrypt data stored in your Cloud SQL for SQL Server instances.
- For users of the Cloud SQL Auth Proxy : If the Cloud SQL instance to which you're connecting is using shared certificate authority (CA) for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.13.0 or later.

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl)
- Source ID: `site-iam-reference`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Service connection limitations If your instance uses the shared CA ( GOOGLE MANAGED CAS CA ) or customer-managed CA ( CUSTOMER MANAGED CAS CA ) option for its serverCaMode configuration, then the instance can't support connections from the following Google Cloud services: App Engine standard environment App Engine flexible environment Cloud Run services that run in a first generation execution environment What's next Configure SSL/TLS on your Cloud SQL instance.
- Optionally, your SSL/TLS connection can perform server identity verification by validating the server certificate installed on the Cloud SQL instance and client identity verification by validating the client certificate installed on the client.
- SSL certificate expiration For Cloud SQL instances that use per-instance CAs ( serverCaMode is set to GOOGLE MANAGED INTERNAL CA ), the SSL certificates come with an expiration period of 10 years.
- To choose per-instance CA, select Google managed internal certificate authority (Google Cloud console) or specify GOOGLE MANAGED INTERNAL CA for the serverCaMode setting (Cloud SQL Admin API) or the --server-ca-mode flag ( gcloud CLI ) when you create the instance .

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Cloud SQL for SQL Server Feature You can now use SSL mode instead of the legacy require ssl setting to specify the encryption requirements for connections to your Cloud SQL for SQL Server instances.
- October 30, 2023 Cloud SQL for PostgreSQL Feature The rollout of the following items is complete : The oracle fdw extension, version 1.2 The minor versions, extension versions, and plugin versions listed in the September 21 release note October 27, 2023 Cloud SQL for PostgreSQL Feature You can now specify the SSL mode of your Cloud SQL instances, which gives you more accurate SSL encryption.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool Cloud SQL for PostgreSQL Feature Cloud SQL for PostgreSQL now supports read pool autoscaling (GA) , which helps you more easily manage your application's workload needs.
- March 31, 2025 Cloud SQL for MySQL Feature Cloud SQL now supports Managed Connection Pooling (MCP) in Preview , which lets you scale your workloads by optimizing resource utilization for your Cloud SQL instances using pooling.

