---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.187Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Backup/recovery appliance alert event: update available"
feature_slug: "backup-recovery-appliance-alert-event-update-available"
latest_feature_date: "2025-05-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan"
keywords:
  - "update"
  - "available"
  - "alert"
  - "appliance"
  - "recovery"
  - "event"
  - "new"
  - "backup"
---

# Backup/recovery appliance alert event: update available

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

A new monitoring alert event (90003) is added to notify when a new backup/recovery appliance update is available.

## Extended Definition

A new monitoring alert event (90003) is added to notify when a new backup/recovery appliance update is available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Introducing notifications and alerts for the following critical events: Processes not running on a backup/recovery appliance Expired certificates No jobs running on a backup/recovery appliance CPU and memory usage exceeding threshold values Backup/recovery appliance appliance version out of support Backup/recovery appliance updates available You can subscribe to these events and configure email alerts.
- 90003: A new backup/recovery appliance update is available.
- February 27, 2025 Announcement Backup and DR now supports the latest RHEL and SLES OS and kernels in backup/recovery appliance 11.0.13 and later: RHEL 8.8 : 4.18.0-477.36.1, 4.18.0-477.43.1, 4.18.0-477.51.1, 4.18.0-477.55.1, 4.18.0-477.58.1, 4.18.0-477.64.1, 4.18.0-477.67.1, 4.18.0-477.70.1, 4.18.0-477.75.1, 4.18.0-477.81.1, 4.18.0-477.83.1 RHEL 8.10 : 4.18.0-553.30.1, 4.18.0-553.32.1, 4.18.0-553.33.1 RHEL 9.3 : 5.14.0-362.24.1 RHEL 9.4 : 5.14.0-427.13.1, 5.14.0-427.16.1, 5.14.0-427.18.1, 5.14.0-427.20.1, 5.14.0-427.22.1, 5.14.0-427.24.1, 5.14.0-427.26.1, 5.14.0-427.28.1, 5.14.0-427.31.1, 5.14.0-427.33.1, 5.14.0-427.35.1, 5.14.0-427.37.1, 5.14.0-427.40.1, 5.14.0-427.42.1 RHEL 9.5 : 5.14.0-503.11.1, 5.14.0-503.14.1, 5.14.0-503.15.1, 5.14.0-503.16.1, 5.14.0-503.19.1 SLES 15 SP6 : All kernels February 26, 2025 Announcement Backup and DR Service 11.0.14.302 is now available to update your backup/recovery appliance.
- OEL 8.8, 9.1, and 9.2 RHEL 8.8 and 9.2 RHEL for SAP 8.8, 9.0, and 9.2 Rocky Linux 8.8, 9.0, 9.1, and 9.2 Rocky Linux Optimised for Google Cloud 8.8 and 9.2 SLES 15 SP5 SLES for SAP 15 SP5 Announcement Backup and DR Service 11.0.8.454 is now available to update your backup/recovery appliance.

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- When a reserved slot is not available because all the slots of that category are running jobs, the backup/recovery appliance checks whether an unreserved slot is available.
- Before starting a job, each backup/recovery appliance checks whether a slot corresponding to the job's category is available to run the job.
- For example, you might need to manually perform log replication if the log for a database image did not properly replicate to the backup/recovery appliance or if there is no log for the database image on the backup/recovery appliance.
- To perform on-demand log replication of just the database log to a remote backup/recovery appliance, select the Replicate Logs menu command described in Running On-Demand Database Log Replication .

### "Set up and plan a backup/recovery appliance deployment \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- If the Workflow service isn't available in a region where your backup/recovery appliance is deployed, then the Backup and DR Service defaults to running the workflow in the us-central1 region (the appliance itself is still created in your selected region).
- Purpose Source Target Port (TCP) Support traffic (support to appliance) SSH CLIENT IP Backup/recovery appliance 26 iSCSI backup (host to appliance) AGENT HOST IP Backup/recovery appliance 3260 StreamSnap traffic (appliance to appliance) SOURCE APPLIANCE IP Backup/recovery appliance 5107 Backup/recovery appliance connectivity to management console APPLIANCE IP .backupdr.googleusercontent.com 443 Replace the following: SSH CLIENT IP: the IP address of the host running the SSH client.
- Set up Backup and DR Service in the Google Cloud console Go to the Google Cloud console to activate the Backup and DR Service API and set up permissions for your account: Activate Google Cloud Backup and DR Backup/recovery appliance types Backup and DR Service provides appliance types that are optimized for different workloads—Compute Engine VMs, VMware VMs, databases, and file systems.
- Components of the backup/recovery appliance architecture The Backup and DR Service architecture is delivered through the following components: Google Cloud console : The Google Cloud console includes the Backup and DR product for central management of your Persistent Disk vaulted backups, backup plans for Compute Engine instances, and enhanced backup for Cloud SQL in those products.

