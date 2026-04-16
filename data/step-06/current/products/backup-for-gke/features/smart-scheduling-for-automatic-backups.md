---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:38:03.552Z"
product_name: "Backup for GKE"
product_slug: "backup-for-gke"
feature_name: "Smart Scheduling for automatic backups"
feature_slug: "smart-scheduling-for-automatic-backups"
latest_feature_date: "2024-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup"
keywords:
  - "scheduling"
  - "smart"
  - "automatic"
  - "backups"
  - "supports"
---

# Smart Scheduling for automatic backups

Product: Backup for GKE
Coverage: MEDIUM

## Step 02 Summary

Backup for GKE now supports Smart Scheduling, an RPO-based backup scheduling model in addition to cron scheduling.

## Extended Definition

Backup for GKE now supports Smart Scheduling, an RPO-based backup scheduling model in addition to cron scheduling.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup)

## Supporting Pages

### Plan a set of backups \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can create a backup plan with a backup scheduling method to automatically create backups: smart scheduling or cron scheduling.
- Smart scheduling uses this value to automatically create backups.
- CRON SCHEDULE : an optional argument to define a cron schedule that automatically creates backups and supports standard cron syntax.
- To automatically create backups, in the Backup schedule section, select the Enable backup schedule checkbox, and then choose one of the following methods: Note: All backup schedules are interpreted in UTC timezone.

### "Define custom backup and restore logic \_|\_ Backup for GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- If ready, the application description will show Ready to backup status as true , such as in this example: % kubectl describe protectedapplication nginx Name: nginx Namespace: default API Version: gkebackup.gke.io/v1 Kind: ProtectedApplication Metadata: UID: 90c04a86-9dcd-48f2-abbf-5d84f979b2c2 Spec: Components: Name: nginx Resource Kind: Deployment Resource Names: nginx Strategy: Backup All Restore All: Backup Pre Hooks: Command: /sbin/fsfreeze -f /var/log/nginx Container: nginx Name: freeze Backup Post Hooks: Command: /sbin/fsfreeze -u /var/log/nginx Container: nginx Name: unfreeze Type: BackupAllRestoreAll Resource Selection: Selector: Match Labels: app: nginx Type: Selector Status: Ready To Backup: true Events: <none> What's next Learn more about planning a set of backups .
- If ProtectedApplication resources are not present, Backup for GKE creates volume backups for all volumes within the scope of a backup and the resulting volume backups will be crash consistent - all writes flushed to the disk at a particular point in time will be captured (i.e., no partial writes).
- If some of the resources referenced by your ProtectedApplication are created automatically by an operator, you should also include the operator's custom resources in your ProtectedApplication selector.
- These commands are executed only on the selected backup Pod . backupPostHooks - (optional) an ordered list of hooks that are executed after volume backups have reached the UPLOADING phase.

### Back up your workloads \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the backup plan for this backup defines a minimum lifetime for backups, configured with the --backup-delete-lock-days flag, then backups created for this plan cannot be deleted (either automatically or manually) until that lifetime expires.
- Enter a backup name and optional description. (Optional) Set the number of days to retain the backup before the backup is automatically deleted. (Optional) Set the number of days during which backups cannot be deleted.
- Delete a backup Backups can be deleted in two ways: If the backup plan defines a retention period, backups created for that plan are automatically deleted after that period expires.
- If your backup plan defines a schedule for the backup, the backups are automatically created according to that schedule.

