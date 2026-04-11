---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.193Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Deployment of backup/recovery appliances across management console VPCs"
feature_slug: "deployment-of-backup-recovery-appliances-across-management-console-vpcs"
latest_feature_date: "2024-10-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan"
keywords:
  - "deployment"
  - "across"
  - "appliances"
  - "management"
  - "console"
  - "recovery"
  - "of"
  - "backup"
---

# Deployment of backup/recovery appliances across management console VPCs

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Administrators can now deploy backup/recovery appliances in any VPC available within the management console project.

## Extended Definition

Administrators can now deploy backup/recovery appliances in any VPC available within the management console project.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan)

## Supporting Pages

### "Set up and plan a backup/recovery appliance deployment \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Each Backup and DR deployment includes a single appliance management console managing any number of backup/recovery appliances.
- Purpose Source Target Port (TCP) Support traffic (support to appliance) SSH CLIENT IP Backup/recovery appliance 26 iSCSI backup (host to appliance) AGENT HOST IP Backup/recovery appliance 3260 StreamSnap traffic (appliance to appliance) SOURCE APPLIANCE IP Backup/recovery appliance 5107 Backup/recovery appliance connectivity to management console APPLIANCE IP .backupdr.googleusercontent.com 443 Replace the following: SSH CLIENT IP: the IP address of the host running the SSH client.
- Components of the backup/recovery appliance architecture The Backup and DR Service architecture is delivered through the following components: Google Cloud console : The Google Cloud console includes the Backup and DR product for central management of your Persistent Disk vaulted backups, backup plans for Compute Engine instances, and enhanced backup for Cloud SQL in those products.
- Supported regions The following section lists the appliance management console and backup/recovery appliances supported regions.

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- From the Monitor tab, you can view and manage jobs (cancel active jobs or change the job priority of a queued job) from backup/recovery appliances managed by the appliance management console.
- Run an on-demand backup job from the appliance management console To run an on-demand capture of a managed application from the Manage Backup Plan page: Click the App Manager tab and select the Applications option from the drop-down list.
- Home Documentation Storage Backup and DR Guides Send feedback Monitor jobs in the appliance management console Stay organized with collections Save and categorize content based on your preferences.
- To perform on-demand log replication of just the database log to a remote backup/recovery appliance, select the Replicate Logs menu command described in Running On-Demand Database Log Replication .

### "Backup plans in the appliance management console overview \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You define a resource profile for any backup/recovery appliance that has been added to the appliance management console.
- Backup plans are the rules that the appliance management console uses to define how often to back up application data, how long to retain the application data backups, and where and how to replicate the application's data backups.
- Where the backup data is retained (local backup/recovery appliance, remote backup/recovery appliance or OnVault storage location) By mixing and matching policies within a template you can create a single template that defines the shortterm and longterm retention of data, as well as where the data will be retained and how long the replicated data will be retained.
- Home Documentation Storage Backup and DR Guides Send feedback Backup plans in the appliance management console overview Stay organized with collections Save and categorize content based on your preferences.

