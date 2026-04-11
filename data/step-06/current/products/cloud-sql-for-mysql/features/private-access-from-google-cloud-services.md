---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.893Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Private access from Google Cloud services"
feature_slug: "private-access-from-google-cloud-services"
latest_feature_date: "2022-12-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-overview"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
keywords:
  - "private"
  - "access"
  - "from"
  - "services"
  - "sql"
  - "for"
  - "mysql"
  - "supports"
---

# Private access from Google Cloud services

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports private connectivity that lets other Google Cloud services such as BigQuery access and query Cloud SQL data.

## Extended Definition

Cloud SQL for MySQL supports private connectivity that lets other Google Cloud services such as BigQuery access and query Cloud SQL data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)

## Supporting Pages

### "Configure private services access \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access)
- Source ID: `site-iam-reference`
- Final score: 296
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure private services access for Cloud SQL Important: When you create a private connection between your VPC network and the Cloud SQL service, it becomes available for use by any Google service that supports private services access.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Configure private services access Stay organized with collections Save and categorize content based on your preferences.
- Before you begin Cloud SQL requires private services access for each VPC network that's used for private IP connections.
- MySQL PostgreSQL SQL Server This page describes how to configure private services access in your VPC network.

### "Choose how to connect to Cloud SQL \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)
- Source ID: `site-docs-root`
- Final score: 258
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Remove networking options from an instance Cloud SQL supports the removal of the following networking options from an instance: Public IP from an instance with both private services access and public IP Public IP from an instance with public IP, private services access, and Private Service Connect Private Service Connect from an instance with both Private Service Connect and private services access Private Service Connect from an instance with Private Service Connect, private services access, and public IP Enable networking options for an instance You can enable Cloud SQL supports enabling the following connection options for instances: Private services access on an instance with public IP only Private Service Connect on an instance with private services access only Private Service Connect on an instance with both private services access and public IP Public IP on an instance with private services access only Limitations You can't create an instance with both a public IP address and Private Service Connect.
- Summary Recommendation : For improved security, we recommend that you configure your instance with a private IP address type unless you have specific requirements for an internet-accessible Cloud SQL instance, or if you're connecting from a client that doesn't meet the requirements for a VPC.
- Configuration options The following types of private networking configurations are supported: Private services access : connect to Cloud SQL instances from a single VPC network based on networking peering.
- Feature Instance with private services access only Instance with Private Service Connect only Instance with both private services access and Private Service Connect Connect from multiple VPCs Not supported.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- December 15, 2022 Feature You can now allow other Google Cloud services, such as BigQuery, to access data in Cloud SQL for MySQL and make queries against this data over a private connection.
- September 02, 2021 Feature Cloud SQL for MySQL now supports using a custom import to set up replication from large external databases.
- January 25, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: asia-northeast2 (Osaka) asia-south2 (Delhi) europe-north1 (Finland) europe-southwest1 (Madrid) us-east5 (Columbus) us-south1 (Dallas) January 12, 2024 Feature Cloud SQL for MySQL now supports setting microsecond time periods for the following flag on MySQL 5.7 and MySQL 8.0: innodb flush log at timeout For more information about this flag, see supported flags .
- December 05, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: africa-south1 (Johannesburg) asia-east2 (Hong Kong) europe-west10 (Berlin) December 04, 2024 Feature Cloud SQL for MySQL now supports minor version 8.0.40.

