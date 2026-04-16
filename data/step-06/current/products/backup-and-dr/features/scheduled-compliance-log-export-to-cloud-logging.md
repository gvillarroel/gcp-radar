---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.933Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Scheduled compliance log export to Cloud Logging"
feature_slug: "scheduled-compliance-log-export-to-cloud-logging"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines"
keywords:
  - "export"
  - "compliance"
  - "scheduled"
  - "logging"
  - "added"
---

# Scheduled compliance log export to Cloud Logging

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR Service added support for daily scheduled compliance logs in Cloud Logging.

## Extended Definition

Backup and DR Service added support for daily scheduled compliance logs in Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)

## Supporting Pages

### Audit logs \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods ADMIN READ countApplianceUpdates countApplianceUpdatesInstallationJobs countApplications countBackups countCloudCredentials countClusters countCombinedJob countCombinedMatrix countConsistencyGroups countDiskPools countDynamicProtections countEvents countHosts countLogicalGroups countMatrix countSlps countSlts countWorkflows createSlaPreflight delegateGetCallDownloadLog discoverVolumes downloadLogStatus downloadOssNotice getAppClass getAppClassByAppclassName getAppliance getApplianceBandwidthStat getApplianceHotfixes getAppliancePolicyManager getApplianceResourceLimit getApplianceResourceWarning getApplianceSsdStatus getApplianceSystemStat getApplianceVersion getApplication getBVInfo getBackup getBackupPreservedStatus getCertificate getCloudCredentialMetaInfo getCloudTypes getCloudVmMetaInfo getCluster getClusterCalloutTest getClustersDetails getConfigParameter getConsistencyGroup getConsistencyGroupMember getCredential getDevice getDiscardedBackup getDiskPool getDiskPoolFromAppliance getDynamicProtection getEvent getExportStatusDetails getGCERegions getGCPProjects getGCPProjectsByProfile getHost getHostAvailableConnector getHostConnector getHostDatastores getHostDetails getInstanceInclusionRule getInstanceMemberRuleMembers getIscsiTestResults getJob getLocalAppliance getLogicalGroup getMSParameter getNfsOptions getNotifications getNotificationsV2 getParameter getPolicy getPreservedBackup getPreservedBackupHistory getProtectedESXINodeCount getReadMeForApplianceUpdate getReadMeForApplianceUpdateInstallationJob getRecoveryPools getRegions getReportExportPrereq getSLAComplianceCompatibility getSessionInfo getSla getSlp getSlt getThirdPartyCertAll getUpdateLogs getVaultPoolClusterApplicationsPerApplication getVaultPoolClusterApplicationsPerCluster getVaultPoolClusters getVaultTaskStatus getVmMetadataDetails getVsphereHost getWarning google.cloud.backupdr.v1.BackupDR.FetchBackupPlanAssociationsForResourceType google.cloud.backupdr.v1.BackupDR.FetchDataSourceReferencesForResourceType google.cloud.backupdr.v1.BackupDR.GetBackup google.cloud.backupdr.v1.BackupDR.GetBackupPlan google.cloud.backupdr.v1.BackupDR.GetBackupPlanAssociation google.cloud.backupdr.v1.BackupDR.GetBackupPlanRevision google.cloud.backupdr.v1.BackupDR.GetBackupVault google.cloud.backupdr.v1.BackupDR.GetDataSource google.cloud.backupdr.v1.BackupDR.GetDataSourceReference google.cloud.backupdr.v1.BackupDR.GetManagementServer google.cloud.backupdr.v1.BackupDR.ListBackupPlanAssociations google.cloud.backupdr.v1.BackupDR.ListBackupPlanRevisions google.cloud.backupdr.v1.BackupDR.ListBackupPlans google.cloud.backupdr.v1.BackupDR.ListBackupVaults google.cloud.backupdr.v1.BackupDR.ListBackups google.cloud.backupdr.v1.BackupDR.ListDataSources google.cloud.backupdr.v1.BackupDR.ListManagementServers google.cloud.backupdr.v1.BackupDrProtectionSummary.ListResourceBackupConfigs GetIamPolicy google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations isApplianceUpgradeInProgress isInMigrationMode listApplianceUpdates listApplianceUpdatesInstallationjobs listAppliances listApplications listApplicationsFlatView listArchives listBackups listBwSchedule listCloudSupportedProfiles listCloudSupportedTemplates listClusters listCombinedJobs listConsistencyGroups listCredentials listDiskPools listDiskPoolsFromAppliance listDiskTypes listDynamicProtections listEffectiveMembers listEffectiveOptionsForApp listEffectiveOptionsForSla listEvents listGcpVaultPool listHosts listLogicalGroup listLogicalGroupMembers listOptionForApp listOptionForPolicy listOptionForSla listOptionsForAppType listOptionsForPolicyType listPolicies listProtectedDataAGM listProtectedDataAGMByAppliance listSlas listSlps listSlts listVMVolumes listWorkFlows listWorkflowsPerApp lsConfiguredInterface lsDns lsEtcHosts lsInterface lsNetworkCapability lsNtp lsOutboundPolicy settableOptionMetadataForApp settableOptionMetadataForPolicy settableOptionMetadataForSla showCustomSetting showRoute showTracePath triggerExport validateHypervisorCredential ADMIN WRITE addApplication addPort addVm appDiscovery appDiscoveryOnAppliance appliancePolicyManager backupNow callbackTestAppliance cloneBackup cloneTemplates clusterDiscovery configDns configNtp configureMountMigrate createApplication createConnection createConsistencyGroup createCredential createDiskPool createDiskPoolFromAppliance createDynamicProtection createHost createLogicalGroup createLogicalGroupSla createOptionForApp createOptionForPolicy createOptionForSla createPolicy createSla createSlp createSlt createWorkflow deleteApplication deleteBackup deleteCluster deleteConsistencyGroup deleteCredential deleteDiskPool deleteDiskPoolFromAppliance deleteDynamicProtection deleteHost deleteLogicalGroup deleteLogicalGroupSla deleteMembershipRule deleteOptionForApp deleteOptionForPolicy deletePolicy deletePorts deleteSla deleteSlp deleteSlt deleteWorkflow discover discoverCloudVm discoverUpdates dissolveAppliance downloadConnector enableConnectorUpgrade expireBackup fetchApplicationOptions generateOTP getCloudVmMountOptionMetaData getCloudVmRestoreOptionMetaData getDataRetentionDetails getDiskMapping getDynamicJsonForPoolManage getNfsTestTaskStatus getRecommendedComplianceSettingsForOnTheFlyPolicy getRecommendedComplianceSettingsForPolicy getVaultList google.cloud.backupdr.v1.BackupDR.AbandonBackup (LRO) google.cloud.backupdr.v1.BackupDR.CreateBackupPlan (LRO) google.cloud.backupdr.v1.BackupDR.CreateBackupPlanAssociation (LRO) google.cloud.backupdr.v1.BackupDR.CreateBackupVault (LRO) google.cloud.backupdr.v1.BackupDR.CreateManagementServer (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackup (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackupPlan (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackupPlanAssociation (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackupVault (LRO) google.cloud.backupdr.v1.BackupDR.DeleteManagementServer (LRO) google.cloud.backupdr.v1.BackupDR.FetchAccessToken google.cloud.backupdr.v1.BackupDR.FinalizeBackup (LRO) google.cloud.backupdr.v1.BackupDR.InitializeService (LRO) google.cloud.backupdr.v1.BackupDR.InitiateBackup google.cloud.backupdr.v1.BackupDR.RemoveDataSource (LRO) google.cloud.backupdr.v1.BackupDR.RestoreBackup (LRO) google.cloud.backupdr.v1.BackupDR.SetInternalStatus (LRO) google.cloud.backupdr.v1.BackupDR.TriggerBackup (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackup (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackupPlan (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackupPlanAssociation (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackupVault (LRO) google.cloud.backupdr.v1.BackupDR.UpdateDataSource (LRO) SetIamPolicy google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation importOrForgetVaultPoolBackupsPerApplication importOrForgetVaultPoolBackupsPerCluster importTemplates installApplianceUpdateNow iscsiTestA jobHistoryArchive joinAppliance liveCloneBackup migrate migrateBackup migrateRestoreMountBackup mkEtcHosts modifyConsistencyGroupMember modifyLogicalGroupMembers mountBackup mountMigratePreflight operateWorkflow recalcConsumedSize registerCluster replicateImage replicateLog restoreBackup restorePreflight revokeCertificate rmEtcHosts runDynamicProtectionJob setConfigParaMeter setDynamicProtectionJobConfig setSchedule stopAppliance testConnection testDns testNfsAsync uninstallHostConnector unmountBackup updateApplianceResourceWarning updateApplication updateBackup updateCloudVmMountOptionMetaData updateCloudVmRestoreOptionMetaData updateConsistencyGroup updateCredential updateDiskPool updateDiskPoolFromAppliance updateHost updateJob updateLogicalGroup updateLogicalGroupSla updateMembershipRule updateOptionForApp updateOptionForPolicy updateOptionForSla updatePolicy updateSchedule updateSla updateSlp updateSlt updateWorkflow upgradeHostConnector uploadThirdPartyCert validateCredential vmAddNew vmDiscoveryWithoutCluster API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Backup and DR Service. google.cloud.backupdr.v1.BackupDR The following audit logs are associated with methods belonging to google.cloud.backupdr.v1.BackupDR .
- Filter for this method : protoPayload.methodName="getReportExportPrereq" getSLAComplianceCompatibility Method : getSLAComplianceCompatibility Audit log type : Data access Permissions : backupdr.managementServers.viewSystem - ADMIN READ Method is a long-running or streaming operation : No.
- The following methods don't produce audit logs: google.cloud.backupdr.v1.BackupDR.FetchMsComplianceMetadata google.cloud.backupdr.v1.BackupDR.FetchUsableBackupVaults google.cloud.backupdr.v1.BackupDR.TestIamPermissions google.cloud.location.Locations.GetLocation google.cloud.location.Locations.ListLocations google.longrunning.Operations.WaitOperation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Filter for this method : protoPayload.methodName="getReadMeForApplianceUpdateInstallationJob" getRecommendedComplianceSettingsForOnTheFlyPolicy Method : getRecommendedComplianceSettingsForOnTheFlyPolicy Audit log type : Admin activity Permissions : backupdr.managementServers.manageBackupPlans - ADMIN WRITE Method is a long-running or streaming operation : No.

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- About on-demand jobs Most jobs run on a schedule according to their backup plans, but for upcoming maintenance windows, software upgrades, and for the first snapshot of a new application, you want to ensure that you have a successful copy of the data created before you start your scheduled maintenance task.
- If the constraints continue to be present until it is time to run the next instance of the same policy, the job is given notrun status, and a new job instance with the same job ID and a letter appended to it is added in the queued state.
- Access container YAML code The section Container YAML lists the YAML code snippet that was added to the container or pod's YAML configuration file.
- How uncompleted jobs are retried before failing When a scheduled job fails, the scheduler will automatically retry the job up to three more times.

### "Accelerator-optimized machine family \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- Source ID: `site-docs-reference-2`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Supported disk types for A4X Max and A4X instances A4X Max A4X Max instances can use the following block storage types: Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported for the boot disk Hyperdisk Throughput ( hyperdisk-throughput ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Local SSD: which is automatically added to instances that are created by using any of the A4X Max machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a4x-maxgpu-4g-metal 32 32 32 32 8 4 A4X A4X instances can use the following block storage types: Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported for the boot disk Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk ML ( hyperdisk-ml ) Local SSD: which is automatically added to instances that are created by using any of the A4X machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a4x-highgpu-4g 128 128 0 0 128 8 4 1 Hyperdisk usage is charged separately from machine type pricing .
- The following table describes the host maintenance features for accelerator-optimized machine types: Machine type Number of GPUs Typical scheduled maintenance event frequency Maintenance behavior Advanced notification for scheduled maintenance On-demand maintenance Simulate maintenance A4X Max 2 and A4X 2 4 Minimum of 90 days Terminates with Local SSD data persistence 90 days Yes No A4 2 8 Minimum of 90 days Terminates with Local SSD data persistence 90 days Yes No A3 Ultra 2 8 Minimum of 90 days Terminates with Local SSD data persistence 90 days Yes No A3 Mega 2 and A3 High 2 8 Minimum of 30 days 1 Terminate and restart 7 days Yes Yes A3 High 1, 2, 4 Minimum of 30 days 1 Terminate and restart 7 days 1 No Yes A3 Edge 8 Minimum of 30 days Terminate and restart 7 days Yes Yes A2 Ultra 1, 2, 4, 8 Minimum of 30 days Terminate and restart 7 days Yes (8 GPUs only) Yes A2 Standard 1, 2, 4, 8, or 16 Minimum of 30 days Terminate and restart 7 days Yes (8 and 16 GPUs only) Yes G4 1, 2, or 4 Minimum of 30 days Terminate and restart.
- A3 High A3 High instances can use the following block storage types: Balanced Persistent Disk ( pd-balanced ) SSD (performance) Persistent Disk ( pd-ssd ) Hyperdisk Balanced ( hyperdisk-balanced ) Hyperdisk Balanced High Availability ( hyperdisk-balanced-high-availability ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk Throughput ( hyperdisk-throughput ) Local SSD: which is automatically added to instances that are created by using any of the A3 machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD disks a3-highgpu-1g 128 32 32 64 64 N/A 2 a3-highgpu-2g 128 32 32 64 64 N/A 4 a3-highgpu-4g 128 32 32 64 64 8 8 a3-highgpu-8g 128 32 32 64 64 8 16 1 Hyperdisk and Persistent Disk usage are charged separately from machine type pricing .
- A3 Mega A3 Mega instances can use the following block storage types: Balanced Persistent Disk ( pd-balanced ) SSD (performance) Persistent Disk ( pd-ssd ) Hyperdisk Balanced ( hyperdisk-balanced ) Hyperdisk Balanced High Availability ( hyperdisk-balanced-high-availability ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk Throughput ( hyperdisk-throughput ) Local SSD: which is automatically added to instances that are created by using any of the A3 machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD disks a3-megagpu-8g 128 32 32 64 64 8 16 1 Hyperdisk and Persistent Disk usage are charged separately from machine type pricing .

