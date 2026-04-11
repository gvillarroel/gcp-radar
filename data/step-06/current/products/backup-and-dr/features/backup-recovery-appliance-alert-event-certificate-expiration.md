---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.184Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Backup/recovery appliance alert event: certificate expiration"
feature_slug: "backup-recovery-appliance-alert-event-certificate-expiration"
latest_feature_date: "2025-05-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan"
keywords:
  - "certificate"
  - "expiration"
  - "alert"
  - "appliance"
  - "recovery"
  - "event"
  - "new"
  - "backup"
---

# Backup/recovery appliance alert event: certificate expiration

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

A new monitoring alert event (11001) is added to notify when a backup/recovery appliance certificate is about to expire.

## Extended Definition

A new monitoring alert event (11001) is added to notify when a backup/recovery appliance certificate is about to expire.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)

## Supporting Pages

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Each backup/recovery appliance reserves a pool of slots for all various categories of jobs: data access, expiration, log replication, log OnVault, on-demand, OnVault, snapshot, streamsnap.
- For example, you might need to manually perform log replication if the log for a database image did not properly replicate to the backup/recovery appliance or if there is no log for the database image on the backup/recovery appliance.
- To perform on-demand log replication of just the database log to a remote backup/recovery appliance, select the Replicate Logs menu command described in Running On-Demand Database Log Replication .
- From the Monitor tab, you can view and manage jobs (cancel active jobs or change the job priority of a queued job) from backup/recovery appliances managed by the appliance management console.

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Introducing notifications and alerts for the following critical events: Processes not running on a backup/recovery appliance Expired certificates No jobs running on a backup/recovery appliance CPU and memory usage exceeding threshold values Backup/recovery appliance appliance version out of support Backup/recovery appliance updates available You can subscribe to these events and configure email alerts.
- You can now configure email notifications via Cloud Logging to receive timely alerts on appliance status changes or potential issues, and five new events have been added for more granular monitoring: 10237: Jobs running over 6 hours.
- Announcement The new Backup and DR Service update policy requires updating all backup/recovery appliances older than version 11.0.3 to maintain product support and avoid restrictions on enabling backups for new entities.
- Feature This release introduces enhanced logging and alerting capabilities for backup/recovery appliances , enabling proactive monitoring of their health and status.

### "Set up and plan a backup/recovery appliance deployment \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Purpose Source Target Port (TCP) Support traffic (support to appliance) SSH CLIENT IP Backup/recovery appliance 26 iSCSI backup (host to appliance) AGENT HOST IP Backup/recovery appliance 3260 StreamSnap traffic (appliance to appliance) SOURCE APPLIANCE IP Backup/recovery appliance 5107 Backup/recovery appliance connectivity to management console APPLIANCE IP .backupdr.googleusercontent.com 443 Replace the following: SSH CLIENT IP: the IP address of the host running the SSH client.
- Set up Backup and DR Service in the Google Cloud console Go to the Google Cloud console to activate the Backup and DR Service API and set up permissions for your account: Activate Google Cloud Backup and DR Backup/recovery appliance types Backup and DR Service provides appliance types that are optimized for different workloads—Compute Engine VMs, VMware VMs, databases, and file systems.
- Components of the backup/recovery appliance architecture The Backup and DR Service architecture is delivered through the following components: Google Cloud console : The Google Cloud console includes the Backup and DR product for central management of your Persistent Disk vaulted backups, backup plans for Compute Engine instances, and enhanced backup for Cloud SQL in those products.
- Purpose Source Target Port (TCP) Agent traffic (appliance to host) Backup/recovery appliance Host running Backup and DR agent 5106 For hosts using NFS for backup traffic, or for ESX hosts running in Google Cloud VMware Engine that are using NFS for mounts, you need to manually add the following TCP and UDP ports to allow connectivity with an ingress firewall rule.

