---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.923Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Enhanced backup/recovery appliance monitoring and alerting"
feature_slug: "enhanced-backup-recovery-appliance-monitoring-and-alerting"
latest_feature_date: "2025-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan"
keywords:
  - "alerting"
  - "enhanced"
  - "monitoring"
  - "appliance"
  - "recovery"
---

# Enhanced backup/recovery appliance monitoring and alerting

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR now adds enhanced logging and alerting for backup/recovery appliances, including proactive monitoring with Cloud Logging email notifications for status changes or potential issues.

## Extended Definition

Backup and DR now adds enhanced logging and alerting for backup/recovery appliances, including proactive monitoring with Cloud Logging email notifications for status changes or potential issues.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts](https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)

## Supporting Pages

### "Configure log-based alerts for a backup/recovery appliance \_|\_ Backup\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts](https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If your alert policy includes or excludes specific event IDs then you need to modify the event ID as well: "entries" : [ { "jsonPayload" : { "eventId" : 10046 , "errorMessage" : "this is a manually generated error message created for testing" }, "resource" : { "type" : "backupdr.googleapis.com/BackupRecoveryAppliance" , }, "severity" : "ERROR" , "logName" : "projects/ PROJECT ID /logs/backupdr.googleapis.com %2F backup recovery appliance events" , } ] Copy the log entry you configured previously.
- Policyname = 'Backup/DR event has occurred' Notification rate limit = 6 hr logName = "projects/ PROJECT ID /logs/backupdr.googleapis.com %2F backup recovery appliance events" AND NOT jsonPayload . eventId = ( 10085 OR 10229 OR 42356 OR 43901 ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Policyname = 'Snapshot job has failed' Notification rate limit = 30 min logName = "projects/ PROJECT ID /logs/backupdr.googleapis.com %2F backup recovery appliance events" AND jsonPayload . eventId = 43901 Events that are less urgent and hence require less frequent notifications.
- The following is the sample query to get notified on an event with a specific event ID. logName = "projects/ PROJECT ID /logs/backupdr.googleapis.com %2F backup recovery appliance events" jsonPayload . eventId = 10046 In the header of the Query results pane, click Create alert .

### "Set up and plan a backup/recovery appliance deployment \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Components of the backup/recovery appliance architecture The Backup and DR Service architecture is delivered through the following components: Google Cloud console : The Google Cloud console includes the Backup and DR product for central management of your Persistent Disk vaulted backups, backup plans for Compute Engine instances, and enhanced backup for Cloud SQL in those products.
- Purpose Source Target Port (TCP) Support traffic (support to appliance) SSH CLIENT IP Backup/recovery appliance 26 iSCSI backup (host to appliance) AGENT HOST IP Backup/recovery appliance 3260 StreamSnap traffic (appliance to appliance) SOURCE APPLIANCE IP Backup/recovery appliance 5107 Backup/recovery appliance connectivity to management console APPLIANCE IP .backupdr.googleusercontent.com 443 Replace the following: SSH CLIENT IP: the IP address of the host running the SSH client.
- Set up Backup and DR Service in the Google Cloud console Go to the Google Cloud console to activate the Backup and DR Service API and set up permissions for your account: Activate Google Cloud Backup and DR Backup/recovery appliance types Backup and DR Service provides appliance types that are optimized for different workloads—Compute Engine VMs, VMware VMs, databases, and file systems.
- Purpose Source Target Port (TCP) Agent traffic (appliance to host) Backup/recovery appliance Host running Backup and DR agent 5106 For hosts using NFS for backup traffic, or for ESX hosts running in Google Cloud VMware Engine that are using NFS for mounts, you need to manually add the following TCP and UDP ports to allow connectivity with an ingress firewall rule.

### "Set up and plan a backup/recovery appliance deployment \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Components of the backup/recovery appliance architecture The Backup and DR Service architecture is delivered through the following components: Google Cloud console : The Google Cloud console includes the Backup and DR product for central management of your Persistent Disk vaulted backups, backup plans for Compute Engine instances, and enhanced backup for Cloud SQL in those products.
- Purpose Source Target Port (TCP) Support traffic (support to appliance) SSH CLIENT IP Backup/recovery appliance 26 iSCSI backup (host to appliance) AGENT HOST IP Backup/recovery appliance 3260 StreamSnap traffic (appliance to appliance) SOURCE APPLIANCE IP Backup/recovery appliance 5107 Backup/recovery appliance connectivity to management console APPLIANCE IP .backupdr.googleusercontent.com 443 Replace the following: SSH CLIENT IP: the IP address of the host running the SSH client.
- Set up Backup and DR Service in the Google Cloud console Go to the Google Cloud console to activate the Backup and DR Service API and set up permissions for your account: Activate Google Cloud Backup and DR Backup/recovery appliance types Backup and DR Service provides appliance types that are optimized for different workloads—Compute Engine VMs, VMware VMs, databases, and file systems.
- Purpose Source Target Port (TCP) Agent traffic (appliance to host) Backup/recovery appliance Host running Backup and DR agent 5106 For hosts using NFS for backup traffic, or for ESX hosts running in Google Cloud VMware Engine that are using NFS for mounts, you need to manually add the following TCP and UDP ports to allow connectivity with an ingress firewall rule.

