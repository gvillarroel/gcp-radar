---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.595Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Private Service Connect backends"
feature_slug: "private-service-connect-backends"
latest_feature_date: "2025-08-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview"
keywords:
  - "private"
  - "connect"
  - "backends"
  - "provide"
  - "an"
  - "alternative"
  - "to"
  - "psc"
---

# Private Service Connect backends

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Private Service Connect backends provide an alternative to PSC endpoints for accessing Cloud SQL instances.

## Extended Definition

Private Service Connect backends provide an alternative to PSC endpoints for accessing Cloud SQL instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect](https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview)

## Supporting Pages

### "Private Service Connect overview \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect](https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Private Service Connect backend You can use Private Service Connect backends , as an alternative to Private Service Connect endpoints , to access Cloud SQL instances.
- To use Private Service Connect backends, you must setup the following resources for each serving port on which you want to access a given Cloud SQL instance: Private Service Connect Network Endpoint Group (NEG) , which must reference the service attachment and a serving port of the Cloud SQL instance.
- The hub provides a centralized connectivity management model to interconnect spoke VPC networks to Private Service Connect endpoints.
- You can use Private Service Connect for the following purposes: Connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations Connect to either a primary instance or any of its read replicas Private Service Connect endpoint You can use Private Service Connect endpoints to access Cloud SQL instances privately from your consumer VPC networks.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- August 15, 2025 Cloud SQL for MySQL Feature Now you can use Private Service Connect backends , as an alternative to Private Service Connect endpoints, to access Cloud SQL instances.
- Cloud SQL for PostgreSQL Feature Now you can use Private Service Connect backends , as an alternative to Private Service Connect endpoints, to access Cloud SQL instances.
- Feature Now you can use Private Service Connect backends , as an alternative to Private Service Connect endpoints, to access Cloud SQL instances.
- December 15, 2022 Cloud SQL for MySQL Feature You can now allow other Google Cloud services, such as BigQuery, to access data in Cloud SQL for MySQL and make queries against this data over a private connection.

### "Choose how to connect to Cloud SQL \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Private IP address Public IP address Description Internal, Virtual Private Cloud (VPC) network-only (private) IP address An external, internet-accessible (public) IP address Decision points Do you need to connect from clients hosted on VPC networks inside Google Cloud or from clients that have access to those VPC networks?
- Cloud SQL connector Direct connection Description Cloud SQL Auth Proxy, a client-side proxy, and Cloud SQL Language Connectors, client-side libraries, provide simplified and secure access to your Cloud SQL instances, especially when you connect to an instance using a public IP address.
- Private networking options when using a private IP address When you configure your instance to use a private IP address, you can choose the following private networking options: private services access, Private Service Connect, or both.
- Configuration options The following types of private networking configurations are supported: Private services access : connect to Cloud SQL instances from a single VPC network based on networking peering.

