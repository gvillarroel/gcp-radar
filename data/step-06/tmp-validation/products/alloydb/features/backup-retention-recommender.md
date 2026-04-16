---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.103Z"
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
  - "retention"
  - "increase"
  - "opportunities"
  - "recommender"
  - "identify"
  - "backup"
  - "helps"
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
- Identify the backup plan you want to use The backup plan is used by enhanced backups to define your cluster's backup schedule and retention settings.
- Your cluster is enabled for enhanced backups using the associated backup plan's backup and retention settings. gcloud To associate a backup plan with your AlloyDB cluster, run the following command: gcloud backup-dr backup-plan-associations create BPA ID \ --project = WORKLOAD PROJECT ID \ --location = REGION \ --resource-type = alloydb.googleapis.com/Cluster \ --resource = projects/ WORKLOAD PROJECT ID /locations/ REGION /clusters/ CLUSTER ID \ --backup-plan = projects/ VAULT PROJECT ID /locations/ REGION /backupPlans/ BP ID Replace the following: BPA ID : the backup plan association ID.
- Your cluster is enabled for enhanced backups using the associated backup plan's backup and retention settings. gcloud To associate the new backup plan with your cluster, follow these steps: gcloud backup-dr backup-plan-associations create BPA ID \ --project = WORKLOAD PROJECT ID \ --location = REGION \ --resource-type = alloydb.googleapis.com/Cluster \ --resource = projects/ WORKLOAD PROJECT ID /locations/ REGION /clusters/ CLUSTER ID \ --backup-plan = projects/ VAULT PROJECT ID /locations/ REGION /backupPlans/ BP ID \ Replace the following: BPA ID : the backup plan association ID.
- You can delete enhanced backups in the following scenarios: Expired backups in a vault: if a backup has passed its scheduled retention time —for example, after 14 days for default policies—it's generally available for manual deletion.

### Configure backup plans \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- If you enable automated backups on a cluster where you have not configured this feature, AlloyDB applies a default configuration that schedules one automated backup per day, with a 14-day retention window, using Google-managed encryption.
- To do this, include either of the following arguments: To have AlloyDB retain all automated backups for a certain amount of time, use --automated-backup-retention-period= DURATION .
- You can also specify the automated backups retention policy, based on either a duration or a number of backups to keep.
- A retention policy, expressed either as an amount of time to keep backups or as a number of backups to keep.

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Vaultree and AlloyDB: the world's first Fully Homomorphic and Searchable Cloud Encryption Solution Vaultree launches support for Google's AlloyDB Partner Advantage page Direct link Data integration, optimization, and migration Airbyte Solution Airbyte Cloud Category Data integration and migration Description Airbyte is an open-source data integration engine that helps you consolidate your data in your data warehouses, lakes, and databases.
- These solutions are organized by the following categories: Application and Vertical ISVs Business intelligence and advanced analytics Data governance, modeling, and security Data integration, optimization, and migration Data quality and observability Application and Vertical ISVs Commvault Solution Commvault Cloud Platform Category Backup and Restore Description Commvault Platform - Essential provides enterprise-grade data protection and cyber resilience.
- Partner references Scaling Postgres AI Workloads with AlloyDB Omni on Silk Platform AlloyDB Omni and Silk Partner Advantage page Direct link Business intelligence and advanced analytics BoostKpi Solution BoostKPI Category Business intelligence and advanced analytics Description Use BoostKPI to identify and receive alerts about granular anomalies in your business data stored in BigQuery, as well as the root causes of these anomalies.
- Partner references KingswaySoft's AlloyDB Data Integration Using KingswaySoft Google AlloyDB Connection Manager Using the Google AlloyDB Source Component Using the Google AlloyDB Destination Component Nexla Solution Nexla Category Data integration and migration Description Nexla is a data operations platform that helps teams create scalable, repeatable, and predictable data flows for any data use case.

