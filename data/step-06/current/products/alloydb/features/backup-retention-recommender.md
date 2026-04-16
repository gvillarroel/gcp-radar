---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.484Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Backup retention recommender"
feature_slug: "backup-retention-recommender"
latest_feature_date: "2025-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups"
  - "https://docs.cloud.google.com/alloydb/docs/backup/configure"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
keywords:
  - "backup"
  - "retention"
  - "recommender"
  - "helps"
  - "identify"
  - "opportunities"
  - "increase"
  - "alloydb"
---

# Backup retention recommender

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The Backup retention recommender helps identify opportunities to increase AlloyDB backup retention.

## Extended Definition

The Backup retention recommender helps identify opportunities to increase AlloyDB backup retention.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups](https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups)
- [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)

## Supporting Pages

### "Manage enhanced backups \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups](https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups)
- Source ID: `site-docs-reference-2`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Your cluster is enabled for enhanced backups using the associated backup plan's backup and retention settings. gcloud To associate a backup plan with your AlloyDB cluster, run the following command: gcloud backup-dr backup-plan-associations create BPA ID \ --project = WORKLOAD PROJECT ID \ --location = REGION \ --resource-type = alloydb.googleapis.com/Cluster \ --resource = projects/ WORKLOAD PROJECT ID /locations/ REGION /clusters/ CLUSTER ID \ --backup-plan = projects/ VAULT PROJECT ID /locations/ REGION /backupPlans/ BP ID Replace the following: BPA ID : the backup plan association ID.
- Your cluster is enabled for enhanced backups using the associated backup plan's backup and retention settings. gcloud To associate the new backup plan with your cluster, follow these steps: gcloud backup-dr backup-plan-associations create BPA ID \ --project = WORKLOAD PROJECT ID \ --location = REGION \ --resource-type = alloydb.googleapis.com/Cluster \ --resource = projects/ WORKLOAD PROJECT ID /locations/ REGION /clusters/ CLUSTER ID \ --backup-plan = projects/ VAULT PROJECT ID /locations/ REGION /backupPlans/ BP ID \ Replace the following: BPA ID : the backup plan association ID.
- Identify the backup plan you want to use The backup plan is used by enhanced backups to define your cluster's backup schedule and retention settings.
- After you identify the backup plan you want to associate, use the backup plan name to associate it with your AlloyDB cluster.

### Configure backup plans \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- If you enable automated backups on a cluster where you have not configured this feature, AlloyDB applies a default configuration that schedules one automated backup per day, with a 14-day retention window, using Google-managed encryption.
- To do this, include either of the following arguments: To have AlloyDB retain all automated backups for a certain amount of time, use --automated-backup-retention-period= DURATION .
- To have AlloyDB instead retain a certain number of backups, use --automated-backup-retention-count= COUNT .
- This example sets a cluster to take an automated backup at midnight UTC on every Monday and Thursday: gcloud alloydb clusters update my - cluster \ -- automated - backup - days - of - week = MONDAY , THURSDAY \ -- automated - backup - start - times = 00 : 00 \ -- region = us - central1 \ -- project = my - project To encrypt scheduled backups using a CMEK key instead of the default Google-managed encryption, provide these additional arguments: --automated-backup-encryption-key= KEY ID : the ID of the CMEK key to use. --automated-backup-encryption-key-keyring= KEYRING ID : the ID of the key's keyring. --automated-backup-encryption-key-location= LOCATION ID : the ID of that keyring's region.

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Vaultree and AlloyDB: the world's first Fully Homomorphic and Searchable Cloud Encryption Solution Vaultree launches support for Google's AlloyDB Partner Advantage page Direct link Data integration, optimization, and migration Airbyte Solution Airbyte Cloud Category Data integration and migration Description Airbyte is an open-source data integration engine that helps you consolidate your data in your data warehouses, lakes, and databases.
- Partner references Scaling Postgres AI Workloads with AlloyDB Omni on Silk Platform AlloyDB Omni and Silk Partner Advantage page Direct link Business intelligence and advanced analytics BoostKpi Solution BoostKPI Category Business intelligence and advanced analytics Description Use BoostKPI to identify and receive alerts about granular anomalies in your business data stored in BigQuery, as well as the root causes of these anomalies.
- Partner references KingswaySoft's AlloyDB Data Integration Using KingswaySoft Google AlloyDB Connection Manager Using the Google AlloyDB Source Component Using the Google AlloyDB Destination Component Nexla Solution Nexla Category Data integration and migration Description Nexla is a data operations platform that helps teams create scalable, repeatable, and predictable data flows for any data use case.
- Partner references Deepnote and AlloyDB Partner Advantage page Direct link Tellius Solution Tellius Category Business intelligence, machine learning, and advanced analytics Description Tellius is an AI-powered modern analytics platform that helps you explore, analyze, and generate insights from petabytes of data easily, at Cloud scale, allowing everyone to self-serve analytics in natural language.

