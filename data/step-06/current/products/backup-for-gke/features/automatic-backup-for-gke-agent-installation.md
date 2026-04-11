---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.538Z"
product_name: "Backup for GKE"
product_slug: "backup-for-gke"
feature_name: "Automatic Backup for GKE agent installation"
feature_slug: "automatic-backup-for-gke-agent-installation"
latest_feature_date: "2023-07-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke"
keywords:
  - "automatically"
  - "installation"
  - "agent"
  - "automatic"
  - "backup"
  - "now"
  - "for"
  - "gke"
---

# Automatic Backup for GKE agent installation

Product: Backup for GKE
Coverage: LOW

## Step 02 Summary

Backup for GKE now automatically installs the agent in a cluster when a user creates the first BackupPlan or RestorePlan resource.

## Extended Definition

Backup for GKE now automatically installs the agent in a cluster when a user creates the first BackupPlan or RestorePlan resource.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)

## Supporting Pages

### Plan a set of backups \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: This will automatically install the Backup for GKE agent in the specified cluster.
- Automatic pause : Backup for GKE can automatically pause a backup plan in the following scenarios: When initiating a backup (scheduled or manual), if any of the following errors occur: StatusInvalidCluster : The StatusInvalidCluster error indicates an unrecoverable condition where the cluster name is invalid or metadata information of the cluster is unavailable.
- If this value is set, then backups created for that plan cannot be deleted (either automatically or manually) until that lifetime expires.
- In the Retention policy section, do the following: Set the number of days to retain the backup before the backup is automatically deleted.

### Back up your workloads \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the backup plan for this backup defines a minimum lifetime for backups, configured with the --backup-delete-lock-days flag, then backups created for this plan cannot be deleted (either automatically or manually) until that lifetime expires.
- Enter a backup name and optional description. (Optional) Set the number of days to retain the backup before the backup is automatically deleted. (Optional) Set the number of days during which backups cannot be deleted.
- Delete a backup Backups can be deleted in two ways: If the backup plan defines a retention period, backups created for that plan are automatically deleted after that period expires.
- View a volume backup Volume backup resources are automatically created by the agent when PersistentVolumeClaims are encountered within the scope of a backup.

### Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Administrators don't interact with the agent, as the agent is driven by custom Kubernetes resources ( BackupJob and RestoreJob ) automatically created in the cluster by the Backup for GKE service in response to the creation of backup and restore cloud resources.
- Agent overview The Backup for GKE agent is deployed and runs in each GKE cluster that you configure to be backed up by the Backup for GKE service.
- A GKE add-on (the Backup for GKE agent) that must be enabled in each cluster for which you wish to perform backup and restore operations.
- The agent runs backup and restore operations in these clusters by interacting with the Backup for GKE API.

