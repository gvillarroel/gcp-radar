---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.516Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Key Access Justifications for external CMEK keys"
feature_slug: "key-access-justifications-for-external-cmek-keys"
latest_feature_date: "2024-03-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups"
  - "https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference"
  - "https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing"
keywords:
  - "key"
  - "access"
  - "justifications"
  - "external"
  - "cmek"
  - "keys"
  - "alloydb"
  - "supports"
---

# Key Access Justifications for external CMEK keys

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB supports Key Access Justifications for external CMEK keys so you can view and manage external key access requests.

## Extended Definition

AlloyDB supports Key Access Justifications for external CMEK keys so you can view and manage external key access requests.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups](https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups)
- [https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference](https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference)
- [https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing](https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing)

## Supporting Pages

### "Manage enhanced backups \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups](https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups)
- Source ID: `site-docs-reference-2`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Enable the Backup and DR API To use enhanced backups with your AlloyDB clusters, you must first enable the Backup and DR API: Enable the Backup and DR API Required permissions To configure enhanced backups for your AlloyDB clusters, you need the alloydb.backupDrAdmin role or the following permissions: backupdr.backupPlans.list backupdr.backupPlanAssociations.createForAlloydbCluster backupdr.backupPlanAssociations.fetchForAlloydbCluster backupdr.backupPlanAssociations.list backupdr.backupPlanAssociations.getForAlloydbCluster backupdr.backupPlanAssociations.triggerBackupForAlloydbCluster backupdr.backupPlanAssociations.deleteForAlloydbCluster backupdr.backupPlans.useForAlloydbCluster backupdr.bvdataSources.get backupdr.bvdataSources.list Note: If your backup vault is in a different project than your AlloyDB cluster, you need to grant the backupdr.alloydbOperator role to the vault service agent.
- Your cluster is enabled for enhanced backups using the associated backup plan's backup and retention settings. gcloud To associate a backup plan with your AlloyDB cluster, run the following command: gcloud backup-dr backup-plan-associations create BPA ID \ --project = WORKLOAD PROJECT ID \ --location = REGION \ --resource-type = alloydb.googleapis.com/Cluster \ --resource = projects/ WORKLOAD PROJECT ID /locations/ REGION /clusters/ CLUSTER ID \ --backup-plan = projects/ VAULT PROJECT ID /locations/ REGION /backupPlans/ BP ID Replace the following: BPA ID : the backup plan association ID.
- Your cluster is enabled for enhanced backups using the associated backup plan's backup and retention settings. gcloud To associate the new backup plan with your cluster, follow these steps: gcloud backup-dr backup-plan-associations create BPA ID \ --project = WORKLOAD PROJECT ID \ --location = REGION \ --resource-type = alloydb.googleapis.com/Cluster \ --resource = projects/ WORKLOAD PROJECT ID /locations/ REGION /clusters/ CLUSTER ID \ --backup-plan = projects/ VAULT PROJECT ID /locations/ REGION /backupPlans/ BP ID \ Replace the following: BPA ID : the backup plan association ID.
- Your cluster's associated backup plan is deleted and your cluster is now managed under the Standard backups option, managed by AlloyDB. gcloud To disable enhanced backups and switch your cluster back to the standard backups option, run the following command: gcloud backup-dr backup-plan-associations delete BACKUP PLAN ASSOCIATION NAME --LOCATION = BACKUP VAULT LOCATION Replace the following: BACKUP PLAN ASSOCIATION NAME : the name of the backup plan association that you want to delete.

### "AlloyDB ScaNN Index reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference](https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference)
- Source ID: `site-api-reference`
- Final score: 56
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Index creation (optional) auto maintenance ( Preview ) This index option lets you automatically maintain a ScaNN index so that as your dataset grows, AlloyDB analyzes and updates centroids, and splits large outlier partitions.
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback AlloyDB ScaNN Index reference Stay organized with collections Save and categorize content based on your preferences.
- This page provides a detailed reference for the tuning parameters available for Scalable Nearest Neighbors (ScaNN) indexes in AlloyDB for PostgreSQL.
- Note: Before creating a ScaNN index, you must install the alloydb scann and vector extensions.

### AI functions overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing](https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback AI functions overview Stay organized with collections Save and categorize content based on your preferences.
- The AlloyDB AI functions ( Preview ) integrates with Vertex AI to bring intelligent filtering, semantic ranking, and text generation to your operational data in real time.
- Video AlloyDB AI vector search and AI operators Empower small IT teams to harness generative AI with Google Cloud databases.
- Learn more Explore developer resources to build your own natural language query applications with AlloyDB AI.

