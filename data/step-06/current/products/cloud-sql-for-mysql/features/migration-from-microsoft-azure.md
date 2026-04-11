---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.824Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Migration from Microsoft Azure"
feature_slug: "migration-from-microsoft-azure"
latest_feature_date: "2025-01-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-overview"
keywords:
  - "migration"
  - "from"
  - "microsoft"
  - "azure"
  - "sql"
  - "supports"
  - "migrating"
  - "to"
---

# Migration from Microsoft Azure

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL supports migrating data from Microsoft Azure to Cloud SQL using replication-based configuration.

## Extended Definition

Cloud SQL supports migrating data from Microsoft Azure to Cloud SQL using replication-based configuration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- January 14, 2025 Feature You can now migrate data from Microsoft Azure to Cloud SQL.
- October 04, 2021 Feature Cloud SQL now supports the ability for you to specify IP CIDR ranges from your VPC network for your Cloud SQL instances allowing you to manage your IP address space better.
- August 01, 2023 Feature You can now migrate large MySQL databases from external sources to Cloud SQL for MySQL faster using Database Migration Service .
- September 02, 2021 Feature Cloud SQL for MySQL now supports using a custom import to set up replication from large external databases.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- January 14, 2025 Cloud SQL for MySQL Feature You can now migrate data from Microsoft Azure to Cloud SQL.
- Cloud SQL for PostgreSQL Feature You can now migrate data from Microsoft Azure to Cloud SQL.
- Cloud SQL for PostgreSQL Feature Cloud SQL Enterprise Plus edition now supports the following regions: europe-west8 (Milan) europe-west12 (Turin) us-west4 (Las Vegas) December 14, 2023 Cloud SQL for MySQL Feature You can now use Database Migration Service to migrate data to an existing Cloud SQL instance that was created using Terraform or other Infrastructure-As-Code (IaC) Tools.
- October 04, 2021 Cloud SQL for MySQL Feature Cloud SQL now supports the ability for you to specify IP CIDR ranges from your VPC network for your Cloud SQL instances allowing you to manage your IP address space better.

### "Choose how to connect to Cloud SQL \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Remove networking options from an instance Cloud SQL supports the removal of the following networking options from an instance: Public IP from an instance with both private services access and public IP Public IP from an instance with public IP, private services access, and Private Service Connect Private Service Connect from an instance with both Private Service Connect and private services access Private Service Connect from an instance with Private Service Connect, private services access, and public IP Enable networking options for an instance You can enable Cloud SQL supports enabling the following connection options for instances: Private services access on an instance with public IP only Private Service Connect on an instance with private services access only Private Service Connect on an instance with both private services access and public IP Public IP on an instance with private services access only Limitations You can't create an instance with both a public IP address and Private Service Connect.
- Configuration options The following types of private networking configurations are supported: Private services access : connect to Cloud SQL instances from a single VPC network based on networking peering.
- Supported features The following table lists the features that Cloud SQL supports when you connect to an instance that's configured with one or both of the private networking options.
- Private Service Connect : connect to Cloud SQL instances from multiple VPC networks that belong to different groups, projects, or organizations.

