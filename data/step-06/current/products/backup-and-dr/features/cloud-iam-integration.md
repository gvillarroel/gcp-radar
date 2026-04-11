---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.214Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Cloud IAM integration"
feature_slug: "cloud-iam-integration"
latest_feature_date: "2023-07-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems"
keywords:
  - "iam"
  - "integrated"
  - "integration"
  - "with"
  - "backup"
  - "was"
  - "and"
  - "dr"
---

# Cloud IAM integration

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR Service was integrated with Google Cloud IAM for permission-based access control.

## Extended Definition

Backup and DR Service was integrated with Google Cloud IAM for permission-based access control.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- July 10, 2023 Feature Backup and DR Service is now integrated with cloud Identity and Access Management (IAM).
- Security The following CVEs have been addressed in this release: CVE-2024-38286, CVE-2019-9636, CVE-2023-5178, CVE-2020-14343, CVE-2021-29921, CVE-2019-7164, CVE-2020-27619, CVE-2018-20060, CVE-2019-20477, CVE-2019-9948, CVE-2020-1747, CVE-2021-3177, CVE-2022-42919, CVE-2024-0565, CVE-2015-20107, CVE-2023-51042, CVE-2020-10878, CVE-2023-6546, CVE-2022-0391, CVE-2022-45884, CVE-2021-33631, CVE-2020-10543, CVE-2019-20907, CVE-2023-3812, CVE-2019-11324, CVE-2022-45919, CVE-2023-6931, CVE-2024-1086, CVE-2021-43818, CVE-2021-33503, CVE-2020-26116, CVE-2019-20916, CVE-2023-2163, CVE-2021-42771, CVE-2022-45886, CVE-2021-3737, CVE-2023-52425, CVE-2018-18074, CVE-2021-27291, CVE-2021-20270, CVE-2023-24329, CVE-2019-18874, CVE-2019-16056, CVE-2019-7548, CVE-2021-3572, CVE-2019-9740, CVE-2021-23336, CVE-2020-14422, CVE-2021-3426, CVE-2023-1192, CVE-2022-38096, CVE-2023-6135, CVE-2020-8492, CVE-2020-27783, CVE-2020-28493, CVE-2023-46218, CVE-2021-4189, CVE-2020-26137, CVE-2021-3733, CVE-2019-16935, CVE-2021-28957, CVE-2018-20852, CVE-2019-11236, CVE-2019-9947, CVE-2020-28241, CVE-2023-5388, CVE-2023-28322 CVE-2022-48624, CVE-2023-38546, CVE-2021-20095 December 02, 2024 Feature Backup and DR service added integration with the Compute Engine VM creation experience, enabling the application of Backup and DR backup policies when VMs are created.
- October 21, 2025 Fixed Resolved a problem with timestamp conversions during recovery range calculations in SAP HANA Fixed a bug that prevented the identification of persistent disk names in some SAP HANA environments Fixed DB2 restore issue wrt pre-flight checks and instances with a large number of archive logs Fixed a logging issue during Postgres upgrades where an incorrect version was displayed after a rollback Resolved a restore failure when using a combination of full and incremental backups for SAP ASE Fixed a connection leak and an issue with executor service shutdown in the VMware hypervisor integration, improving reliability.
- Database Center is an AI-assisted dashboard that highlights fleet-wide data points.The integration is designed to provide Database Center users with a single, unified, and accurate view of the data protection posture for all databases protected by Backup and DR Service.This capability is available today, at no additional cost, for all Cloud SQL customers who have protected their databases through Backup and DR Service enhanced protection.

### Control access with IAM \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Granular Backup and DR permissions depend on ACL configuration provided by Backup and DR admin within the management console. backupdr. backupPlanAssociations. createForComputeInstance backupdr. backupPlanAssociations. deleteForComputeInstance backupdr. backupPlanAssociations. updateForComputeInstance backupdr. managementServers. access backupdr. managementServers. backupAccess backupdr.managementServers.get backupdr. managementServers. getDynamicProtection backupdr. managementServers. getIamPolicy backupdr. managementServers. list backupdr. managementServers. listDynamicProtection backupdr. managementServers. viewBackupPlans backupdr. managementServers. viewBackupServers backupdr. managementServers. viewReports backupdr. managementServers. viewStorage backupdr. managementServers. viewSystem backupdr. managementServers. viewWorkflows backupdr.operations.get backupdr.operations.list backupdr.trial.get resourcemanager.projects.get resourcemanager.projects.list Backup and DR User V2 ( roles/ backupdr.userv2 ) Provides full access to Backup and DR resources except deploying and managing backup infrastructure, expiring backups, changing data sensitivity and configuring on-premises billing. backupdr. backupPlanAssociations. backupdr. backupPlanAssociations. createForAlloydbCluster backupdr. backupPlanAssociations. createForCloudSqlInstance backupdr. backupPlanAssociations. createForComputeDisk backupdr. backupPlanAssociations. createForComputeInstance backupdr. backupPlanAssociations. createForFilestoreInstance backupdr. backupPlanAssociations. deleteForAlloydbCluster backupdr. backupPlanAssociations. deleteForCloudSqlInstance backupdr. backupPlanAssociations. deleteForComputeDisk backupdr. backupPlanAssociations. deleteForComputeInstance backupdr. backupPlanAssociations. deleteForFilestoreInstance backupdr. backupPlanAssociations. fetchForAlloydbCluster backupdr. backupPlanAssociations. fetchForCloudSqlInstance backupdr. backupPlanAssociations. fetchForComputeDisk backupdr. backupPlanAssociations. fetchForComputeInstance backupdr. backupPlanAssociations. fetchForFilestoreInstance backupdr. backupPlanAssociations. getForAlloydbCluster backupdr. backupPlanAssociations. getForCloudSqlInstance backupdr. backupPlanAssociations. getForComputeDisk backupdr. backupPlanAssociations. getForComputeInstance backupdr. backupPlanAssociations. getForFilestoreInstance backupdr. backupPlanAssociations. list backupdr. backupPlanAssociations. triggerBackupForAlloydbCluster backupdr. backupPlanAssociations. triggerBackupForCloudSqlInstance backupdr. backupPlanAssociations. triggerBackupForComputeDisk backupdr. backupPlanAssociations. triggerBackupForComputeInstance backupdr. backupPlanAssociations. triggerBackupForFilestoreInstance backupdr. backupPlanAssociations. updateForAlloydbCluster backupdr. backupPlanAssociations. updateForComputeDisk backupdr. backupPlanAssociations. updateForComputeInstance backupdr. backupPlanAssociations. updateForFilestoreInstance backupdr.backupPlanRevisions. backupdr. backupPlanRevisions. get backupdr. backupPlanRevisions. list backupdr.backupPlans. backupdr.backupPlans.create backupdr.backupPlans.delete backupdr.backupPlans.get backupdr.backupPlans.list backupdr.backupPlans.update backupdr. backupPlans. useForAlloydbCluster backupdr. backupPlans. useForCloudSqlInstance backupdr. backupPlans. useForComputeDisk backupdr. backupPlans. useForComputeInstance backupdr. backupPlans. useForFilestoreInstance backupdr. backupVaults. associate backupdr.backupVaults.get backupdr.backupVaults.list backupdr. bvbackups. fetchForCloudSqlInstance backupdr. bvbackups. fetchForComputeDisk backupdr. bvbackups. fetchForComputeInstance backupdr.bvbackups.get backupdr.bvbackups.list backupdr.bvbackups.restore backupdr. bvbackups. useReadOnlyForAlloydbCluster backupdr. bvbackups. useReadOnlyForCloudSqlInstance backupdr. bvbackups. useReadOnlyForFilestoreInstance backupdr.bvdataSources.get backupdr.bvdataSources.list backupdr. bvdataSources. useReadOnlyForAlloydbCluster backupdr. bvdataSources. useReadOnlyForCloudSqlInstance backupdr. compute. restoreFromBackupVault backupdr. dataSourceReferences. backupdr. dataSourceReferences. fetchForAlloydbCluster backupdr. dataSourceReferences. fetchForCloudSqlInstance backupdr. dataSourceReferences. fetchForFilestoreInstance backupdr. dataSourceReferences. getForAlloydbCluster backupdr. dataSourceReferences. getForCloudSqlInstance backupdr. dataSourceReferences. getForFilestoreInstance backupdr. dataSourceReferences. list backupdr.locations. backupdr.locations.get backupdr.locations.list backupdr. managementServers. access backupdr. managementServers. assignBackupPlans backupdr. managementServers. backupAccess backupdr. managementServers. createDynamicProtection backupdr. managementServers. deleteDynamicProtection backupdr.managementServers.get backupdr. managementServers. getDynamicProtection backupdr. managementServers. getIamPolicy backupdr. managementServers. list backupdr. managementServers. listDynamicProtection backupdr. managementServers. manageApplications backupdr. managementServers. manageBackupPlans backupdr. managementServers. manageBackups backupdr. managementServers. manageClones backupdr. managementServers. manageHosts backupdr. managementServers. manageJobs backupdr. managementServers. manageLiveClones backupdr. managementServers. manageMigrations backupdr. managementServers. manageMirroring backupdr. managementServers. manageMounts backupdr. managementServers. manageRestores backupdr. managementServers. manageWorkflows backupdr. managementServers. refreshWorkflows backupdr. managementServers. runWorkflows backupdr. managementServers. testFailOvers backupdr. managementServers. viewBackupPlans backupdr. managementServers. viewBackupServers backupdr. managementServers. viewReports backupdr. managementServers. viewStorage backupdr. managementServers. viewSystem backupdr. managementServers. viewWorkflows backupdr.operations.get backupdr.operations.list backupdr.trial.get resourcemanager.projects.get resourcemanager.projects.list Service agent roles Service agent roles should only be granted to service agents .
- Permission name Description backupdr.managementServers.manageClones Provides permissions to create and manage clones from backups. backupdr.managementServers.manageLiveClones Provides permissions to create and manage LiveClones from backups. backupdr.managementServers.manageMounts Provides permissions to create and manage active mounts from backups. backupdr.managementServers.manageRestores Provides permissions needed to restore from backups. backupdr.managementServers.manageBackups Provides permissions to perform backup operations: Backup Now. backupdr.managementServers.viewSystem Provides access to view backup/recovery appliance configuration. backupdr.managementServers.manageSystem Provides permissions to configure backup/recovery appliances and report manager. backupdr.managementServers.viewStorage Provide access to view storage and disk pool configurations. backupdr.managementServers.manageStorage Provides permissions to add, modify, remove, and view storage and disk pools. backupdr.managementServers.viewBackupPlans Provides access to view backup plans — backup templates and resource profiles. backupdr.managementServers.assignBackupPlans Provides permissions to assign pre-configured backup plans — backup templates and resource profiles to applications or workloads. backupdr.managementServers.manageBackupPlans Provides permissions to create, modify, delete, view, and assign backup plans — backup templates and resource profiles. backupdr.managementServers.testFailOvers Provides permissions to perform test failover and delete test failover operations on a remote StreamSnap backup. backupdr.managementServers.viewWorkflows Provide access to view backup Backup and DR Workflows that automate access to copy data within Backup and DR Service. backupdr.managementServers.runWorkflows Provides permissions to run a preconfigured Backup and DR Workflows that automates access to copy data within Backup and DR Service. backupdr.managementServers.refreshWorkflows Provides permissions to refresh a clone that was created by a backup Backup and DR Workflow that automates access to copy data within Backup and DR Service. backupdr.managementServers.manageWorkflows Provides permissions to add, modify, remove, run, and view backup Backup and DR Workflow that automate access to copy data within Backup and DR Service. backupdr.managementServers.manageMirroring Provides permissions to perform failover, syncback, cleanup, failback, test failover, and delete test failover operations on a remote StreamSnap backup. backupdr.managementServers.manageHosts Provides permissions to add, modify, remove, and view hosts — physical and virtual machines backupdr.managementServers.manageApplications Provides permissions to manage all aspects of applications, including logical groups and consistency groups, run backups on demand, and export templates. backupdr.managementServers.manageSensitiveData Provides permissions needed to mark applications and backups as sensitive or non-sensitive data. backupdr.managementServers.accessSensitiveData Provides access to applications and backups marked as sensitive.
- Home Documentation Storage Backup and DR Reference Send feedback Control access with IAM Stay organized with collections Save and categorize content based on your preferences.
- The following table describes IAM roles that are associated with Backup and DR Service and lists the permissions that are contained in each role.

### "Backup and DR Service for Filestore and file systems on self-managed storage\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems)
- Source ID: `site-api-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Filestore and file systems on self-managed storage Stay organized with collections Save and categorize content based on your preferences.
- What's next Manage hosts and their connected applications Other documentation for Backup and DR for file systems This page is one in a series of pages specific to protecting and recovering filesystems with Backup and DR Service.
- The following steps describe the process for how to perform data backup and recovery with volume-based backup images and CBT: The Backup and DR agent has CBT to track changed blocks in the file system.
- How it works example: Backup and DR volume-based backup with Linux CBT Only changed blocks are tracked in the bitmap, there are no copy-on-writes or I/O-intensive operations.

