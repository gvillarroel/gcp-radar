# Backup and DR

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 75
Unique features: 83

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-01-20 | Backup and DR cost reports |  | Cost reports became generally available in Backup and DR Service to provide resource-specific billing visibility; Cost reports are available in Backup and DR Service for viewing resource-specific service spending. |
| 2025-12-22 | Change Block Tracking (CBT) support for RHEL 8 and RHEL 9 kernels |  | Linux Change Block Tracking support was expanded to include new kernels on RHEL 8 and RHEL 9. |
| 2025-12-22 | Enhanced VMware VM restore and clone performance |  | Restore and clone operations for VMware virtual machines were improved for higher performance. |
| 2025-12-17 | Backup Vault CMEK support for Compute Engine |  | Backup Vault now supports CMEK-protected Compute Engine instances and Persistent Disks for backup protection. |
| 2025-12-16 | Cloud SQL enhanced backups |  | Cloud SQL enhanced backups are generally available, with centralized backup management, enforced retention, granular scheduling, longer retention, and PITR after instance deletion. |
| 2025-11-19 | Change Block Tracking (CBT) support for RHEL 8.8 SAP kernels |  | Change Block Tracking support was added for RHEL 8.8 SAP kernels. |
| 2025-11-07 | Database Center support for Backup and DR-protected databases |  | Database Center support for resources protected by Backup and DR Service entered public preview, providing a unified data protection posture dashboard. |
| 2025-10-30 | AlloyDB for PostgreSQL enhanced backups with Backup and DR |  | AlloyDB for PostgreSQL enhanced backups entered public preview with Backup and DR, including backup vault support, backup plans, and centralized management. |
| 2025-10-30 | Backup Vault retention lock by backup rule |  | A backup vault setting was added to prevent deletion during the retention duration defined in the backup rule, blocking manual deletion. |
| 2025-10-21 | Change Block Tracking (CBT) support for RHEL kernels |  | Change Block Tracking support was added for newer RHEL kernels including 8.10, 9.2, 9.4, and 9.6. |
| 2025-10-21 | Long-running backup job alerts with application context |  | Alerts for long-running jobs were improved to include application type and application name. |
| 2025-10-14 | Backup Vault workload-level quotas |  | Backup vaults can now enforce quotas at workload level for data sources, backups, backup plans, and backup plan associations. |
| 2025-05-21 | Backup/recovery appliance alert event: certificate expiration |  | A new monitoring alert event (11001) is added to notify when a backup/recovery appliance certificate is about to expire. |
| 2025-05-21 | Backup/recovery appliance alert event: jobs running over 6 hours |  | A new monitoring alert event (10237) is added to report backup/recovery appliance jobs that run for more than six hours. |
| 2025-05-21 | Backup/recovery appliance alert event: system components down |  | A new monitoring alert event (11004) is added to report when backup/recovery appliance system components are down. |
| 2025-05-21 | Backup/recovery appliance alert event: unable to sync with host |  | A new monitoring alert event (11006) is added to report when a backup/recovery appliance is unable to sync with its host. |
| 2025-05-21 | Backup/recovery appliance alert event: update available |  | A new monitoring alert event (90003) is added to notify when a new backup/recovery appliance update is available. |
| 2025-05-21 | Db2 backup and restore using persistent disk snapshots |  | Backup and DR Service now supports backup and restore of Db2 databases using persistent disk snapshots. |
| 2025-05-21 | Enhanced backup/recovery appliance monitoring and alerting |  | Backup and DR now adds enhanced logging and alerting for backup/recovery appliances, including proactive monitoring with Cloud Logging email notifications for status changes or potential issues. |
| 2025-03-14 | Data protection pane in VM instance creation |  | The Google Cloud console instance creation page now includes a Data protection pane to configure backup and replication settings at creation time. |
| 2025-01-24 | Scheduled non-disruptive patch updates for backup/recovery appliances |  | Backup and DR now supports a default update window for non-disruptive appliance patching, pre-update notifications, and optional rescheduling of those updates. |
| 2024-12-02 | Centralized backup management in Google Cloud console |  | Backup and DR introduces centralized backup management capabilities in the Google Cloud console. |
| 2024-12-02 | Compute Engine VM backup to backup vaults |  | Backup and DR adds support for backing up Compute Engine VMs directly to backup vaults. |
| 2024-12-02 | Compute Engine VM policy assignment during creation |  | Backup and DR policies can now be applied when creating Compute Engine VMs during the VM creation workflow. |
| 2024-12-02 | Immutable and indelible backups in backup vaults |  | Backup and DR introduces immutable and indelible backup support using the new backup vault feature; Added support for immutable and indelible backups using Backup Vaults. |
| 2024-11-21 | ssh-rsa SSH host key algorithm | 2024-11-21 | Support for ssh-rsa as an SSH Host Key algorithm is being deprecated; deprecated on 2024-11-21. |
| 2024-10-21 | Deployment of backup/recovery appliances across management console VPCs |  | Administrators can now deploy backup/recovery appliances in any VPC available within the management console project. |
| 2024-10-21 | Management console deployment without private services access |  | Backup and DR now supports deploying the new management console without requiring private services access. |
| 2024-10-17 | Connector version logs in Cloud Logging |  | Backup and DR now supports viewing connector version logs in Cloud Logging. |
| 2024-10-17 | Connector version reports in BigQuery |  | Backup and DR now supports exporting or viewing connector version reports in BigQuery. |
| 2024-09-30 | Unprotected resource logs in Cloud Logging |  | Backup and DR now supports unprotected resource logs in Cloud Logging. |
| 2024-09-30 | Unprotected resource reports in BigQuery |  | Backup and DR now supports unprotected resource reports in BigQuery. |
| 2024-09-10 | Centralized Backup and DR management in Google Cloud Console |  | Added centralized Backup and DR management in Google Cloud Console with support for Compute Engine VM backups to backup vaults. |
| 2024-09-10 | Compute Engine VM creation integration for backup policy assignment |  | Added integration with Compute Engine VM creation to apply Backup and DR policies during VM creation. |
| 2024-09-04 | Dynamic protection tags for VMware Engine VM backups |  | Added automatic protection for Google Cloud VMware Engine VMs using vSphere-based dynamic protection tags. |
| 2024-09-02 | Mounted image logs in Cloud Logging |  | Added support to view mounted image logs in Cloud Logging. |
| 2024-09-02 | Mounted image reports in BigQuery |  | Added support to view mounted image reports in BigQuery. |
| 2024-08-07 | Manual-to-dynamic protection migration using tags via management console |  | Added support for migrating manual protection to dynamic protection using tags through the management console. |
| 2024-08-07 | Oracle database restore to any target |  | Added support for restoring Oracle databases to any target. |
| 2024-06-11 | Storage resource usage logs in Cloud Logging |  | Added support to view storage resource usage logs in Cloud Logging. |
| 2024-06-11 | Storage resource utilization reports in BigQuery |  | Added support to view storage resource utilization reports in BigQuery. |
| 2024-05-21 | Automatic patch updates |  | Added support for automatic patch updates. |
| 2024-05-21 | Manual-to-dynamic protection migration using tags |  | Added support for migrating manual protection to tag-based dynamic protection across all backup/recovery appliance types. |
| 2024-04-22 | Backup and DR prebuilt report integration with Looker Studio |  | Backup and DR Service now supports viewing built-in prebuilt reports in Looker Studio. |
| 2024-04-01 | Dynamic protection tags for automated Compute Engine backups |  | Backup and DR Service added automated protection of Compute Engine instances using Google Cloud tags via dynamic protection tags. |
| 2024-03-25 | Scheduled compliance log export to Cloud Logging |  | Backup and DR Service added support for daily scheduled compliance logs in Cloud Logging. |
| 2024-03-25 | Scheduled compliance report delivery to BigQuery |  | Backup and DR Service added support for daily scheduled compliance reports in BigQuery. |
| 2024-03-21 | Historical report access in Backup and DR |  | Backup and DR Service added support for accessing historical reports. |
| 2024-02-28 | Backup and recovery job log reporting in Cloud Logging |  | Backup and DR Service added comprehensive job reporting access via backup and recovery job logs in Cloud Logging. |
| 2024-02-28 | Built-in reporting platform integration for Backup and DR |  | Backup and DR Service added a reporting system built on Cloud Monitoring, Cloud Logging, and BigQuery. |
| 2024-02-28 | Cloud Monitoring integration with Backup and DR |  | Backup and DR Service integrated with Cloud Monitoring to view metrics and configure custom email alerts. |
| 2024-02-28 | Prebuilt report access in BigQuery |  | Backup and DR Service added support to view prebuilt reports in BigQuery. |
| 2024-02-16 | Change Block Tracking support for Linux appliances |  | Backup and DR Service added Change Block Tracking (CBT) support for additional Linux OS versions, including SLES 15 SP5. |
| 2024-02-16 | Connector support for additional Linux OS versions |  | Backup and DR Service added basic connector support for new RHEL and Rocky Linux appliance versions. |
| 2024-02-16 | Google Cloud VMware Engine Storage support |  | Backup and DR Service added support for Google Cloud VMware Engine Storage-only nodes. |
| 2024-02-16 | SAP HANA backup using Compute Engine persistent disk snapshots |  | Backup and DR Service added support for backing up SAP HANA databases on Compute Engine as persistent disk snapshots. |
| 2023-12-20 | Management console creation via Google Cloud CLI |  | Backup and DR now supports creating the management console using the Google Cloud CLI. |
| 2023-12-01 | Highly available management console |  | The Backup and DR management console is now highly available within the deployed region to improve resilience to zonal outages. |
| 2023-11-21 | Basic connector OS support expansion |  | Backup and DR added basic connector support for additional Linux distributions and versions, including Rocky Linux, RHEL, SLES, and OEL variants. |
| 2023-11-21 | Job completion events and alerts |  | Backup and DR added support for viewing successful job events and configuring alerts when jobs complete successfully. |
| 2023-11-21 | SAP HANA backup snapshots on Compute Engine |  | Backup and DR added support for backing up SAP HANA databases on Compute Engine instances as Compute Engine Persistent Disk snapshots, introduced in private preview. |
| 2023-10-19 | Security Command Center threat detection for Backup and DR actions |  | Security Command Center Premium added real-time Event Threat Detection coverage for Backup and DR actions, including detection of data-destruction and recovery-inhibiting activities. |
| 2023-10-06 | PostgreSQL backup image restore to alternate location |  | Backup and DR added support for restoring PostgreSQL database backup images to an alternate location. |
| 2023-10-06 | RHEL 8.4 support for Oracle 21c |  | Backup and DR agent added support for RHEL 8.4 with Oracle 21c. |
| 2023-10-06 | Rocky Linux 8.7 operating system support |  | Backup and DR agent was enhanced to support the Rocky Linux 8.7 operating system. |
| 2023-10-06 | Rocky Linux 8.7 support for Oracle 19c |  | Backup and DR agent added support for Rocky Linux 8.7 when backing up Oracle 19c databases. |
| 2023-08-21 | Compute Engine local SSD backup and restore support |  | Backup and DR Service added support for backing up and restoring Compute Engine instances that use local SSDs. |
| 2023-08-21 | Concurrent database and log backups |  | Backup and DR Service added support for running database backups and log backups concurrently. |
| 2023-08-21 | Hotfix update rollback |  | Backup and DR Service added the ability to roll back hotfix updates. |
| 2023-08-21 | In-product notification delivery |  | Backup and DR Service added in-product notifications for important product updates. |
| 2023-07-10 | Cloud audit logging integration |  | Backup and DR Service was integrated with cloud audit logging for audit trail and observability support. |
| 2023-07-10 | Cloud IAM integration |  | Backup and DR Service was integrated with Google Cloud IAM for permission-based access control. |
| 2023-07-10 | Hotfix management on backup/recovery appliances |  | Backup and DR Service gained support for managing hotfixes on backup/recovery appliances. |
| 2023-07-10 | Rapid Oracle database recovery |  | Backup and DR Service significantly reduced Oracle database recovery time by enabling near-instant backup storage-based startup and online migration. |
| 2023-04-28 | RHEL for SAP 8.6 agent support |  | Backup and DR agent support was expanded to include RHEL for SAP 8.6. |
| 2023-04-27 | Archive snapshots for Compute Engine instance backups |  | Backup and DR Service added support for archive snapshots when backing up Compute Engine instances. |
| 2023-04-27 | Management-console appliance updates |  | Backup and DR Service now provides a simplified experience for updating backup/recovery appliances from the management console. |
| 2023-04-27 | Oracle Enterprise Linux 8.7/9.0 agent support |  | Backup and DR agent support was expanded to include Oracle Enterprise Linux 8.7 and 9.0. |
| 2023-04-27 | RHEL 8.6/8.7/9.0 agent support |  | Backup and DR agent support was expanded to include RHEL 8.6, RHEL 8.7, and RHEL 9.0. |
| 2023-03-06 | Backup and DR backup event alerting |  | Backup and DR now supports alerting for backup events through Cloud Monitoring with channels such as email, SMS, Slack, and PagerDuty. |
| 2023-03-06 | Backup and DR backup event logging |  | Backup and DR now supports centralized logging of backup events in Cloud Logging with custom filtering. |
| 2023-01-31 | Backup and DR component cleanup guidance |  | Project cleanup guidance was added for deleting or disabling Backup and DR components. |
| 2023-01-31 | Backup and DR metrics reporting enhancements |  | Metrics reporting was improved for ongoing management console and backup/recovery appliance supportability. |

Source file slug: `backup-and-dr.md`

