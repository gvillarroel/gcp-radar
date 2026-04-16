---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.977Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Flexible instance configurations"
feature_slug: "flexible-instance-configurations"
latest_feature_date: "2021-03-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-overview"
  - "https://docs.cloud.google.com/sql/docs/mysql/quotas"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore"
keywords:
  - "flexible"
  - "instance"
  - "configurations"
  - "sql"
  - "mysql"
  - "supports"
  - "custom"
  - "vcpu"
---

# Flexible instance configurations

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports flexible instance configurations with custom vCPU and RAM sizing.

## Extended Definition

Cloud SQL for MySQL supports flexible instance configurations with custom vCPU and RAM sizing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)
- [https://docs.cloud.google.com/sql/docs/mysql/quotas](https://docs.cloud.google.com/sql/docs/mysql/quotas)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)

## Supporting Pages

### "Choose how to connect to Cloud SQL \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)
- Source ID: `site-docs-root`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Remove networking options from an instance Cloud SQL supports the removal of the following networking options from an instance: Public IP from an instance with both private services access and public IP Public IP from an instance with public IP, private services access, and Private Service Connect Private Service Connect from an instance with both Private Service Connect and private services access Private Service Connect from an instance with Private Service Connect, private services access, and public IP Enable networking options for an instance You can enable Cloud SQL supports enabling the following connection options for instances: Private services access on an instance with public IP only Private Service Connect on an instance with private services access only Private Service Connect on an instance with both private services access and public IP Public IP on an instance with private services access only Limitations You can't create an instance with both a public IP address and Private Service Connect.
- Configuration options Cloud SQL Auth Proxy , or Cloud SQL Language Connectors, including Cloud SQL Java connector Cloud SQL Python connector Cloud SQL Go connector Cloud SQL Node.js connector The following Google Cloud services use an embedded Cloud SQL Auth Proxy when you connect to a Cloud SQL instance over public IP address: Cloud Run App Engine flexible environment App Engine standard environment To configure SSL/TLS certificates on the Cloud SQL instance and for your client, do the following: Choose a server CA mode for your instance .
- Configuration options The following types of private networking configurations are supported: Private services access : connect to Cloud SQL instances from a single VPC network based on networking peering.
- Supported features The following table lists the features that Cloud SQL supports when you connect to an instance that's configured with one or both of the private networking options.

### Quotas and limits \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/quotas](https://docs.cloud.google.com/sql/docs/mysql/quotas)
- Source ID: `site-docs-root`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- For Cloud SQL, quotas are part of a system that do the following: Monitor your use or consumption of Cloud SQL instances Restrict your consumption of these instances for reasons including ensuring fairness and reducing spikes in usage Maintain configurations that enforce prescribed restrictions automatically Provide a means to make or request changes to the quota When a quota is exceeded, in most cases, the system blocks access to the relevant instance immediately, and the task that you're trying to perform fails.
- If the number of active tables is significantly larger than both the Cloud SQL table defaults and the open tables recommendation by MySQL, then Cloud SQL recommends configuring the table open cache and table definition cache database flags with your instance's active table count.
- Table limit Cloud SQL for MySQL has a limit of 50,000 tables by default, or 500,000 tables for an instance if you meet the minimum hardware requirements of at least 32 cores and a minimum of 200G of memory.
- Update Operation: We allow customers to switch the network of instances, so we need new forwarding rules in the new network.

### "Restore an instance overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)
- Source ID: `site-docs-reference-3`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- If your source instance had custom backup configurations or was using enhanced backups, then you'll need to update the backup configurations after restore is complete.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Restore an instance overview Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server Cloud SQL lets you restore your instances from a backup, or by performing point-in-time recovery (PITR).
- For customer-managed encryption key (CMEK)-enabled instances , binary logs are encrypted using the latest version of the CMEK.

