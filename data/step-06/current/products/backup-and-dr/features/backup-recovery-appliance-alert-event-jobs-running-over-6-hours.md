---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.185Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Backup/recovery appliance alert event: jobs running over 6 hours"
feature_slug: "backup-recovery-appliance-alert-event-jobs-running-over-6-hours"
latest_feature_date: "2025-05-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
keywords:
  - "over"
  - "running"
  - "jobs"
  - "alert"
  - "appliance"
  - "recovery"
  - "event"
  - "backup"
---

# Backup/recovery appliance alert event: jobs running over 6 hours

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

A new monitoring alert event (10237) is added to report backup/recovery appliance jobs that run for more than six hours.

## Extended Definition

A new monitoring alert event (10237) is added to report backup/recovery appliance jobs that run for more than six hours.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)

## Supporting Pages

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When a reserved slot is not available because all the slots of that category are running jobs, the backup/recovery appliance checks whether an unreserved slot is available.
- To perform on-demand log replication of just the database log to a remote backup/recovery appliance, select the Replicate Logs menu command described in Running On-Demand Database Log Replication .
- From the Monitor tab, you can view and manage jobs (cancel active jobs or change the job priority of a queued job) from backup/recovery appliances managed by the appliance management console.
- Each backup/recovery appliance reserves a pool of slots for all various categories of jobs: data access, expiration, log replication, log OnVault, on-demand, OnVault, snapshot, streamsnap.

### "Set up and plan a backup/recovery appliance deployment \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Purpose Source Target Port (TCP) Support traffic (support to appliance) SSH CLIENT IP Backup/recovery appliance 26 iSCSI backup (host to appliance) AGENT HOST IP Backup/recovery appliance 3260 StreamSnap traffic (appliance to appliance) SOURCE APPLIANCE IP Backup/recovery appliance 5107 Backup/recovery appliance connectivity to management console APPLIANCE IP .backupdr.googleusercontent.com 443 Replace the following: SSH CLIENT IP: the IP address of the host running the SSH client.
- Purpose Source Target Port (TCP) Agent traffic (appliance to host) Backup/recovery appliance Host running Backup and DR agent 5106 For hosts using NFS for backup traffic, or for ESX hosts running in Google Cloud VMware Engine that are using NFS for mounts, you need to manually add the following TCP and UDP ports to allow connectivity with an ingress firewall rule.
- Purpose Source Target Port (TCP/UDP) NFS backup or mount Host running Agent or ESXi host running mount Backup/recovery appliance 111, 756, 2049, 4001, 4045 For a list of the permissions used during this operation, see Backup and DR installation permissions reference .
- If the Workflow service isn't available in a region where your backup/recovery appliance is deployed, then the Backup and DR Service defaults to running the workflow in the us-central1 region (the appliance itself is still created in your selected region).

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Introducing notifications and alerts for the following critical events: Processes not running on a backup/recovery appliance Expired certificates No jobs running on a backup/recovery appliance CPU and memory usage exceeding threshold values Backup/recovery appliance appliance version out of support Backup/recovery appliance updates available You can subscribe to these events and configure email alerts.
- You can now configure email notifications via Cloud Logging to receive timely alerts on appliance status changes or potential issues, and five new events have been added for more granular monitoring: 10237: Jobs running over 6 hours.
- Feature This release introduces enhanced logging and alerting capabilities for backup/recovery appliances , enabling proactive monitoring of their health and status.
- Guardrails have been defined for each backup/recovery appliance to specify the number of supported job slots, ensuring smooth parallel backup and mount jobs.

