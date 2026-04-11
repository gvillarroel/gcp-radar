---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.185Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Backup/recovery appliance alert event: system components down"
feature_slug: "backup-recovery-appliance-alert-event-system-components-down"
latest_feature_date: "2025-05-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
keywords:
  - "down"
  - "components"
  - "system"
  - "alert"
  - "appliance"
  - "recovery"
  - "event"
  - "backup"
---

# Backup/recovery appliance alert event: system components down

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

A new monitoring alert event (11004) is added to report when backup/recovery appliance system components are down.

## Extended Definition

A new monitoring alert event (11004) is added to report when backup/recovery appliance system components are down.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)

## Supporting Pages

### "Set up and plan a backup/recovery appliance deployment \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Set up Backup and DR Service in the Google Cloud console Go to the Google Cloud console to activate the Backup and DR Service API and set up permissions for your account: Activate Google Cloud Backup and DR Backup/recovery appliance types Backup and DR Service provides appliance types that are optimized for different workloads—Compute Engine VMs, VMware VMs, databases, and file systems.
- Components of the backup/recovery appliance architecture The Backup and DR Service architecture is delivered through the following components: Google Cloud console : The Google Cloud console includes the Backup and DR product for central management of your Persistent Disk vaulted backups, backup plans for Compute Engine instances, and enhanced backup for Cloud SQL in those products.
- Purpose Source Target Port (TCP) Support traffic (support to appliance) SSH CLIENT IP Backup/recovery appliance 26 iSCSI backup (host to appliance) AGENT HOST IP Backup/recovery appliance 3260 StreamSnap traffic (appliance to appliance) SOURCE APPLIANCE IP Backup/recovery appliance 5107 Backup/recovery appliance connectivity to management console APPLIANCE IP .backupdr.googleusercontent.com 443 Replace the following: SSH CLIENT IP: the IP address of the host running the SSH client.
- Purpose Source Target Port (TCP) Agent traffic (appliance to host) Backup/recovery appliance Host running Backup and DR agent 5106 For hosts using NFS for backup traffic, or for ESX hosts running in Google Cloud VMware Engine that are using NFS for mounts, you need to manually add the following TCP and UDP ports to allow connectivity with an ingress firewall rule.

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- 11004: Backup/recovery appliance system components are down.
- Introducing notifications and alerts for the following critical events: Processes not running on a backup/recovery appliance Expired certificates No jobs running on a backup/recovery appliance CPU and memory usage exceeding threshold values Backup/recovery appliance appliance version out of support Backup/recovery appliance updates available You can subscribe to these events and configure email alerts.
- October 21, 2025 Fixed Resolved a problem with timestamp conversions during recovery range calculations in SAP HANA Fixed a bug that prevented the identification of persistent disk names in some SAP HANA environments Fixed DB2 restore issue wrt pre-flight checks and instances with a large number of archive logs Fixed a logging issue during Postgres upgrades where an incorrect version was displayed after a rollback Resolved a restore failure when using a combination of full and incremental backups for SAP ASE Fixed a connection leak and an issue with executor service shutdown in the VMware hypervisor integration, improving reliability.
- Feature This release introduces enhanced logging and alerting capabilities for backup/recovery appliances , enabling proactive monitoring of their health and status.

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- To manually initiate database logs replication to the remote backup/recovery appliance: Click the App Manager tab and select the Applications option from the drop-down list.
- Run an on-demand backup job from the appliance management console To run an on-demand capture of a managed application from the Manage Backup Plan page: Click the App Manager tab and select the Applications option from the drop-down list.
- For example, you might need to manually perform log replication if the log for a database image did not properly replicate to the backup/recovery appliance or if there is no log for the database image on the backup/recovery appliance.
- To perform on-demand log replication of just the database log to a remote backup/recovery appliance, select the Replicate Logs menu command described in Running On-Demand Database Log Replication .

