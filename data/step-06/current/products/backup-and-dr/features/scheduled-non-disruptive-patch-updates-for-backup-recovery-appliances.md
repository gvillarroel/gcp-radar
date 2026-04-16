---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.924Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Scheduled non-disruptive patch updates for backup/recovery appliances"
feature_slug: "scheduled-non-disruptive-patch-updates-for-backup-recovery-appliances"
latest_feature_date: "2025-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/bulletins/backupdr-update-policy"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
keywords:
  - "disruptive"
  - "patch"
  - "scheduled"
  - "appliances"
  - "updates"
  - "recovery"
---

# Scheduled non-disruptive patch updates for backup/recovery appliances

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR now supports a default update window for non-disruptive appliance patching, pre-update notifications, and optional rescheduling of those updates.

## Extended Definition

Backup and DR now supports a default update window for non-disruptive appliance patching, pre-update notifications, and optional rescheduling of those updates.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/bulletins/backupdr-update-policy](https://docs.cloud.google.com/backup-disaster-recovery/docs/bulletins/backupdr-update-policy)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)

## Supporting Pages

### "Update backup/recovery appliances \_|\_ Backup and DR \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Auto-patch updates are applied only on backup/recovery appliances that are in the "Out of support" state.
- For example, if N (11.0.17) is the latest version available, and a backup/recovery appliance is on unsupported version N-2 (11.0.15), then auto patch upgrades only move the appliances to N-1 (11.0.16), and not to the latest version (11.0.17).
- You cannot schedule updates for backup/recovery appliances that protect agent-based workloads such as file systems and databases.
- Right-click an update name —for example, PATCH NUMBER or HF NUMBER —and select Cancel Scheduled Updates .

### Backup and DR Service update policy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/bulletins/backupdr-update-policy](https://docs.cloud.google.com/backup-disaster-recovery/docs/bulletins/backupdr-update-policy)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Google Cloud Backup and DR Service regularly releases updates for backup/recovery appliances, which includes bug fixes, security patches, and enhancements.
- Backup and DR Service notifies you of available updates to backup/recovery appliances through in-product notifications in the management console.
- However, some updates require you to manually update backup/recovery appliances.
- As described in the Google Cloud Backup and DR Support Services Guide , Backup and DR Service only supports the current version (n) of the backup/recovery appliance and one version immediately preceding the current release (n-1) with bug fixes and patches.

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- From the Monitor tab, you can view and manage jobs (cancel active jobs or change the job priority of a queued job) from backup/recovery appliances managed by the appliance management console.
- About on-demand jobs Most jobs run on a schedule according to their backup plans, but for upcoming maintenance windows, software upgrades, and for the first snapshot of a new application, you want to ensure that you have a successful copy of the data created before you start your scheduled maintenance task.
- Log Replicate logreplicate Uses StreamSnap technology to perform the replication between the local and remote appliances, meaning the log replication goes directly from the snapshot pool on the local appliance to the snapshot pool on the remote appliance.
- For example, you might need to manually perform log replication if the log for a database image did not properly replicate to the backup/recovery appliance or if there is no log for the database image on the backup/recovery appliance.

