---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.188Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Enhanced backup/recovery appliance monitoring and alerting"
feature_slug: "enhanced-backup-recovery-appliance-monitoring-and-alerting"
latest_feature_date: "2025-05-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr"
keywords:
  - "alerting"
  - "enhanced"
  - "monitoring"
  - "appliance"
  - "recovery"
  - "backup"
  - "and"
  - "dr"
---

# Enhanced backup/recovery appliance monitoring and alerting

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR now adds enhanced logging and alerting for backup/recovery appliances, including proactive monitoring with Cloud Logging email notifications for status changes or potential issues.

## Extended Definition

Backup and DR now adds enhanced logging and alerting for backup/recovery appliances, including proactive monitoring with Cloud Logging email notifications for status changes or potential issues.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature This release introduces enhanced logging and alerting capabilities for backup/recovery appliances , enabling proactive monitoring of their health and status.
- February 27, 2025 Announcement Backup and DR now supports the latest RHEL and SLES OS and kernels in backup/recovery appliance 11.0.13 and later: RHEL 8.8 : 4.18.0-477.36.1, 4.18.0-477.43.1, 4.18.0-477.51.1, 4.18.0-477.55.1, 4.18.0-477.58.1, 4.18.0-477.64.1, 4.18.0-477.67.1, 4.18.0-477.70.1, 4.18.0-477.75.1, 4.18.0-477.81.1, 4.18.0-477.83.1 RHEL 8.10 : 4.18.0-553.30.1, 4.18.0-553.32.1, 4.18.0-553.33.1 RHEL 9.3 : 5.14.0-362.24.1 RHEL 9.4 : 5.14.0-427.13.1, 5.14.0-427.16.1, 5.14.0-427.18.1, 5.14.0-427.20.1, 5.14.0-427.22.1, 5.14.0-427.24.1, 5.14.0-427.26.1, 5.14.0-427.28.1, 5.14.0-427.31.1, 5.14.0-427.33.1, 5.14.0-427.35.1, 5.14.0-427.37.1, 5.14.0-427.40.1, 5.14.0-427.42.1 RHEL 9.5 : 5.14.0-503.11.1, 5.14.0-503.14.1, 5.14.0-503.15.1, 5.14.0-503.16.1, 5.14.0-503.19.1 SLES 15 SP6 : All kernels February 26, 2025 Announcement Backup and DR Service 11.0.14.302 is now available to update your backup/recovery appliance.
- Enhanced backups are managed and stored by Backup and DR Service and provide immutable and indelible backups through backup vault, fine grained scheduling, backup protection against source project deletion and source cluster deletion, PiTR using logs and centralized monitoring and reporting.
- OEL 8.8, 9.1, and 9.2 RHEL 8.8 and 9.2 RHEL for SAP 8.8, 9.0, and 9.2 Rocky Linux 8.8, 9.0, 9.1, and 9.2 Rocky Linux Optimised for Google Cloud 8.8 and 9.2 SLES 15 SP5 SLES for SAP 15 SP5 Announcement Backup and DR Service 11.0.8.454 is now available to update your backup/recovery appliance.

### "Set up and plan a backup/recovery appliance deployment \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Components of the backup/recovery appliance architecture The Backup and DR Service architecture is delivered through the following components: Google Cloud console : The Google Cloud console includes the Backup and DR product for central management of your Persistent Disk vaulted backups, backup plans for Compute Engine instances, and enhanced backup for Cloud SQL in those products.
- Set up Backup and DR Service in the Google Cloud console Go to the Google Cloud console to activate the Backup and DR Service API and set up permissions for your account: Activate Google Cloud Backup and DR Backup/recovery appliance types Backup and DR Service provides appliance types that are optimized for different workloads—Compute Engine VMs, VMware VMs, databases, and file systems.
- Purpose Source Target Port (TCP) Agent traffic (appliance to host) Backup/recovery appliance Host running Backup and DR agent 5106 For hosts using NFS for backup traffic, or for ESX hosts running in Google Cloud VMware Engine that are using NFS for mounts, you need to manually add the following TCP and UDP ports to allow connectivity with an ingress firewall rule.
- Purpose Source Target Port (TCP/UDP) NFS backup or mount Host running Agent or ESXi host running mount Backup/recovery appliance 111, 756, 2049, 4001, 4045 For a list of the permissions used during this operation, see Backup and DR installation permissions reference .

### Product overview \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr)
- Source ID: `site-api-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Backup and DR Service provides the following capabilities: Centralized backup management Policy-based backup management Comprehensive monitoring and reporting Incremental backups for faster recovery point objective (RPO) and lower total cost of ownership (TCO) Backup storage: the service supports two types of storage for backups: A backup vault is a Google-managed secured and isolated storage resource, managed by Backup and DR Service.
- Backup plans created in the appliance management console Backup plans are created in the appliance management console and the backup jobs are run on specialized Google Cloud VMs called backup/recovery appliances that you deploy in your own Google Cloud projects.
- Backup and DR Service provides centralized management, monitoring, and reporting of day to day backup operations all from one place.
- Backup and DR Service is a managed service that provides backup and recovery of workloads running in Google Cloud.

