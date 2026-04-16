---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.956Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "HA-enabled external server replicas"
feature_slug: "ha-enabled-external-server-replicas"
latest_feature_date: "2022-07-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/cmek"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages"
  - "https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect"
keywords:
  - "ha"
  - "enabled"
  - "external"
  - "server"
  - "replicas"
  - "sql"
  - "mysql"
  - "supports"
---

# HA-enabled external server replicas

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports creating external server replicas with high availability enabled.

## Extended Definition

Cloud SQL for MySQL supports creating external server replicas with high availability enabled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages)
- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)

## Supporting Pages

### "About customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek)
- Source ID: `site-docs-reference-3`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can't use customer-managed encryption keys to encrypt: External servers (external primary instances and external replicas) Instance metadata, such as the instance ID, database version, machine type, flags, backup schedule, etc.
- MySQL PostgreSQL SQL Server By default, Cloud SQL for MySQL encrypts customer content at rest.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback About customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- To use CMEKs created by Cloud KMS Autokey to protect your Cloud SQL for MySQL resources, use the steps provided for Secret Manager at Using Autokey with Secret Manager resources as an example.

### "Cloud SQL Admin API error messages \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages)
- Source ID: `site-api-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ERROR DISALLOWED UPDATING EXTERNAL SERVER REPLICA REPLICATION STATE Updating the replication state setting of an external server replica instance isn't allowed.
- ERROR DISALLOWED UPDATING EXTERNAL SERVER REPLICA REPLICATION STATE Updating the replication state setting of an external server replica instance isn't allowed.
- ERROR READ REPLICA UNDER EXTERNAL SERVER REPLICA NOT SYNCED To have a read replica, there must be an initial sync completed on the external server replica.
- ERROR EXTERNAL SERVER REPLICA GTID MODE External server replica must have gtid mode=ON in order to have a read replica.

### "Private Service Connect overview \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- The supported serving ports for MySQL are as follows: TCP port 3306 for direct connections to MySQL database server (including when using Managed Connection Pooling ).
- You can use outbound connectivity to migrate data from an external server within your network, or do a homogeneous migration using Database Migration Service.
- MySQL PostgreSQL SQL Server This page describes concepts associated with Private Service Connect.
- You can use Private Service Connect for the following purposes: Connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations Connect to either a primary instance or any of its read replicas Private Service Connect endpoint You can use Private Service Connect endpoints to access Cloud SQL instances privately from your consumer VPC networks.

