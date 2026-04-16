---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.577Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "CMEK organization policy constraints"
feature_slug: "cmek-organization-policy-constraints"
latest_feature_date: "2022-04-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options"
keywords:
  - "cmek"
  - "organization"
  - "policy"
  - "constraints"
  - "let"
  - "organizations"
  - "enforce"
  - "sql"
---

# CMEK organization policy constraints

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

CMEK organization policy constraints let organizations enforce Cloud SQL use of customer-managed encryption keys and restrict allowed key projects.

## Extended Definition

CMEK organization policy constraints let organizations enforce Cloud SQL use of customer-managed encryption keys and restrict allowed key projects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options)

## Supporting Pages

### "Data residency overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use organizational policy constraints to enforce data residency requirements at the organization, project, or folder level.
- CMEK are intended for organizations that have sensitive or regulated data that requires them to manage their own encryption keys.
- You can enforce this constraint even if the user is authorized according to your Google Cloud IAM policy .
- Each time one of your keys is requested to encrypt or decrypt data, Key Access Justifications provides a detailed justification, along with a mechanism for you to approve or deny key access using an automated policy that you set.

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Note: Some organizations use an organization policy to restrict resource locations.
- Note: If there is a resource location constraint on your organization policy, you must select one of the regions that the organization policy allows.
- If this type of policy affects your project, you can only select regions the organization policy allows.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } To see how the underlying REST API request is constructed for this task, see the APIs Explorer on the instances:insert page .

### "Choose your backup option \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options)
- Source ID: `site-docs-reference-required-4`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- The following table provides an overview of the key features available with each backup option: Features Standard backups Enhanced backups Centralized backup management across projects - ✔ Backup vault - ✔ Automated backup schedule Daily Hourly, daily, weekly, monthly, yearly On-demand backups ✔ ✔ Multi-region backups ✔ ✔ Final backup in instance deletion ✔ ✔ Backup retention period 1 year 10 years Retain all backups on instance deletion ✔ ✔ Retain backups on project deletion - ✔ Enforced retention with retention lock - ✔ Point-in-time recovery using logs ✔ ✔ Point-in-time recovery after instance deletion ✔ ✔ Cross-region backup and restore ✔ - CMEK support ✔ - For detailed information about these backup options, see Standard backups and Enhanced backups .
- If your organization has this type of requirement, it probably uses a Resource Location Restriction organizational policy .
- In a multi-region configuration, it's recommended that backups be in the same region as the instance to minimize latency and avoid potential backup failures due to organization policies, or location-based limitations.
- This is useful if your organization needs to comply with data residency regulations that require you to keep your backups within a specific geographic boundary.

