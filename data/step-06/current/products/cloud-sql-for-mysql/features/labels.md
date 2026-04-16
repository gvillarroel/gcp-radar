---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:52.000Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Labels"
feature_slug: "labels"
latest_feature_date: "2017-06-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups"
  - "https://docs.cloud.google.com/sql/docs/editions-intro"
keywords:
  - "labels"
  - "sql"
  - "mysql"
  - "supports"
  - "organizing"
  - "instances"
---

# Labels

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports labels for organizing instances.

## Extended Definition

Cloud SQL for MySQL supports labels for organizing instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)

## Supporting Pages

### "Cloud SQL backups overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- Source ID: `site-docs-reference-3`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- MySQL PostgreSQL SQL Server Cloud SQL lets you back up your instances on-demand, or automatically using a backup schedule.
- Relevant log files include: cloudsql.googlapis.com/mysql-general.log cloudsql.googleapis.com/mysql.err If Cloud Audit Logs is enabled and you have the required permissions to view them, cloudaudit.googleapis.com/activity may also be available.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Cloud SQL backups overview Stay organized with collections Save and categorize content based on your preferences.
- You can also set an Cloud SQL custom organization policy to take a final back at instance deletion for all instances in your organization and set a standard retention period.

### "Cloud SQL editions overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- Source ID: `site-docs-reference-3`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- MySQL 5.6, 5.7, 8.0, 8.4 Availability SLA 99.99% (includes maintenance) 99.95% (excludes maintenance) Performance Machine series N2 C4A General purpose shared core General purpose dedicated core N4 Machine configuration limits N2 machine series Up to 128 vCPU Up to 864 GB RAM 1:8 core:memory ratio C4A machine series Up to 72 vCPU Up to 576 GB RAM 1:8 core:memory ratio General purpose shared core 1 vCPU Up to 1.7 GB RAM 1:6.5 core:memory ratio General purpose dedicated core Up to 96 vCPU Up to 624 GB RAM 1:6.5 core:memory ratio N4 machine series Up to 80 vCPU Up to 624 GB RAM 1:8 core:memory ratio Data cache Yes No Optimized writes Yes No Point-in-time log retention Up to 35 days Up to 7 days Read pools Yes No Availability Maintenance downtime Planned operations downtime Sub-second downtime Few minutes Advanced disaster recovery (DR) Yes No Write endpoint for advanced disaster recovery (DR) Yes No Write endpoint connectivity Yes No Managed Connection Pooling Yes No Observability AI-assisted troubleshooting Yes No Query insights 30 day metric retention 1 MB query length 200 query plan sample maximum Wait event analysis Index advisor recommendations 7 day metric retention 4500 bytes query length 20 query plan sample maximum Enhanced recommenders Yes No Cloud SQL Enterprise Plus edition enhancements Cloud SQL Enterprise Plus edition is ideal for applications that require the best performance, availability, and observability.
- Cloud SQL editions features The following table provides an overview of key features enhancements available for Cloud SQL Enterprise Plus edition when compared to Cloud SQL Enterprise edition: Cloud SQL Enterprise Plus edition Cloud SQL Enterprise edition Database versions MySQL 8.0, 8.4 Note: If the database version for your instance is MySQL 8.4, then the default Cloud SQL edition is Enterprise Plus.
- MySQL PostgreSQL SQL Server Cloud SQL for MySQL editions is a tier-based pricing model where each edition provides different performance, availability, observability, and data protection characteristics to support your various business and application needs.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Cloud SQL editions overview Stay organized with collections Save and categorize content based on your preferences.

### "Private Service Connect overview \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- You can use Private Service Connect for the following purposes: Connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations Connect to either a primary instance or any of its read replicas Private Service Connect endpoint You can use Private Service Connect endpoints to access Cloud SQL instances privately from your consumer VPC networks.
- Private Service Connect outbound connections You can attach a Private Service Connect interface to your existing Cloud SQL Private Service Connect-enabled instances using a network attachment to allow your Cloud SQL instance to make outbound connections to your network.
- DNS names and records For instances with Private Service Connect enabled, we recommend that you use the DNS name because different networks can connect to the same instance and Private Service Connect endpoints in each network might have different IP addresses.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Private Service Connect overview Stay organized with collections Save and categorize content based on your preferences.

