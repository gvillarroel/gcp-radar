---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.933Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Scheduled compliance report delivery to BigQuery"
feature_slug: "scheduled-compliance-report-delivery-to-bigquery"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server"
keywords:
  - "compliance"
  - "delivery"
  - "scheduled"
  - "report"
  - "added"
---

# Scheduled compliance report delivery to BigQuery

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR Service added support for daily scheduled compliance reports in BigQuery.

## Extended Definition

Backup and DR Service added support for daily scheduled compliance reports in BigQuery.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)

## Supporting Pages

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- About on-demand jobs Most jobs run on a schedule according to their backup plans, but for upcoming maintenance windows, software upgrades, and for the first snapshot of a new application, you want to ensure that you have a successful copy of the data created before you start your scheduled maintenance task.
- If the constraints continue to be present until it is time to run the next instance of the same policy, the job is given notrun status, and a new job instance with the same job ID and a letter appended to it is added in the queued state.
- Access container YAML code The section Container YAML lists the YAML code snippet that was added to the container or pod's YAML configuration file.
- How uncompleted jobs are retried before failing When a scheduled job fails, the scheduler will automatically retry the job up to three more times.

### Audit logs \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods ADMIN READ countApplianceUpdates countApplianceUpdatesInstallationJobs countApplications countBackups countCloudCredentials countClusters countCombinedJob countCombinedMatrix countConsistencyGroups countDiskPools countDynamicProtections countEvents countHosts countLogicalGroups countMatrix countSlps countSlts countWorkflows createSlaPreflight delegateGetCallDownloadLog discoverVolumes downloadLogStatus downloadOssNotice getAppClass getAppClassByAppclassName getAppliance getApplianceBandwidthStat getApplianceHotfixes getAppliancePolicyManager getApplianceResourceLimit getApplianceResourceWarning getApplianceSsdStatus getApplianceSystemStat getApplianceVersion getApplication getBVInfo getBackup getBackupPreservedStatus getCertificate getCloudCredentialMetaInfo getCloudTypes getCloudVmMetaInfo getCluster getClusterCalloutTest getClustersDetails getConfigParameter getConsistencyGroup getConsistencyGroupMember getCredential getDevice getDiscardedBackup getDiskPool getDiskPoolFromAppliance getDynamicProtection getEvent getExportStatusDetails getGCERegions getGCPProjects getGCPProjectsByProfile getHost getHostAvailableConnector getHostConnector getHostDatastores getHostDetails getInstanceInclusionRule getInstanceMemberRuleMembers getIscsiTestResults getJob getLocalAppliance getLogicalGroup getMSParameter getNfsOptions getNotifications getNotificationsV2 getParameter getPolicy getPreservedBackup getPreservedBackupHistory getProtectedESXINodeCount getReadMeForApplianceUpdate getReadMeForApplianceUpdateInstallationJob getRecoveryPools getRegions getReportExportPrereq getSLAComplianceCompatibility getSessionInfo getSla getSlp getSlt getThirdPartyCertAll getUpdateLogs getVaultPoolClusterApplicationsPerApplication getVaultPoolClusterApplicationsPerCluster getVaultPoolClusters getVaultTaskStatus getVmMetadataDetails getVsphereHost getWarning google.cloud.backupdr.v1.BackupDR.FetchBackupPlanAssociationsForResourceType google.cloud.backupdr.v1.BackupDR.FetchDataSourceReferencesForResourceType google.cloud.backupdr.v1.BackupDR.GetBackup google.cloud.backupdr.v1.BackupDR.GetBackupPlan google.cloud.backupdr.v1.BackupDR.GetBackupPlanAssociation google.cloud.backupdr.v1.BackupDR.GetBackupPlanRevision google.cloud.backupdr.v1.BackupDR.GetBackupVault google.cloud.backupdr.v1.BackupDR.GetDataSource google.cloud.backupdr.v1.BackupDR.GetDataSourceReference google.cloud.backupdr.v1.BackupDR.GetManagementServer google.cloud.backupdr.v1.BackupDR.ListBackupPlanAssociations google.cloud.backupdr.v1.BackupDR.ListBackupPlanRevisions google.cloud.backupdr.v1.BackupDR.ListBackupPlans google.cloud.backupdr.v1.BackupDR.ListBackupVaults google.cloud.backupdr.v1.BackupDR.ListBackups google.cloud.backupdr.v1.BackupDR.ListDataSources google.cloud.backupdr.v1.BackupDR.ListManagementServers google.cloud.backupdr.v1.BackupDrProtectionSummary.ListResourceBackupConfigs GetIamPolicy google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations isApplianceUpgradeInProgress isInMigrationMode listApplianceUpdates listApplianceUpdatesInstallationjobs listAppliances listApplications listApplicationsFlatView listArchives listBackups listBwSchedule listCloudSupportedProfiles listCloudSupportedTemplates listClusters listCombinedJobs listConsistencyGroups listCredentials listDiskPools listDiskPoolsFromAppliance listDiskTypes listDynamicProtections listEffectiveMembers listEffectiveOptionsForApp listEffectiveOptionsForSla listEvents listGcpVaultPool listHosts listLogicalGroup listLogicalGroupMembers listOptionForApp listOptionForPolicy listOptionForSla listOptionsForAppType listOptionsForPolicyType listPolicies listProtectedDataAGM listProtectedDataAGMByAppliance listSlas listSlps listSlts listVMVolumes listWorkFlows listWorkflowsPerApp lsConfiguredInterface lsDns lsEtcHosts lsInterface lsNetworkCapability lsNtp lsOutboundPolicy settableOptionMetadataForApp settableOptionMetadataForPolicy settableOptionMetadataForSla showCustomSetting showRoute showTracePath triggerExport validateHypervisorCredential ADMIN WRITE addApplication addPort addVm appDiscovery appDiscoveryOnAppliance appliancePolicyManager backupNow callbackTestAppliance cloneBackup cloneTemplates clusterDiscovery configDns configNtp configureMountMigrate createApplication createConnection createConsistencyGroup createCredential createDiskPool createDiskPoolFromAppliance createDynamicProtection createHost createLogicalGroup createLogicalGroupSla createOptionForApp createOptionForPolicy createOptionForSla createPolicy createSla createSlp createSlt createWorkflow deleteApplication deleteBackup deleteCluster deleteConsistencyGroup deleteCredential deleteDiskPool deleteDiskPoolFromAppliance deleteDynamicProtection deleteHost deleteLogicalGroup deleteLogicalGroupSla deleteMembershipRule deleteOptionForApp deleteOptionForPolicy deletePolicy deletePorts deleteSla deleteSlp deleteSlt deleteWorkflow discover discoverCloudVm discoverUpdates dissolveAppliance downloadConnector enableConnectorUpgrade expireBackup fetchApplicationOptions generateOTP getCloudVmMountOptionMetaData getCloudVmRestoreOptionMetaData getDataRetentionDetails getDiskMapping getDynamicJsonForPoolManage getNfsTestTaskStatus getRecommendedComplianceSettingsForOnTheFlyPolicy getRecommendedComplianceSettingsForPolicy getVaultList google.cloud.backupdr.v1.BackupDR.AbandonBackup (LRO) google.cloud.backupdr.v1.BackupDR.CreateBackupPlan (LRO) google.cloud.backupdr.v1.BackupDR.CreateBackupPlanAssociation (LRO) google.cloud.backupdr.v1.BackupDR.CreateBackupVault (LRO) google.cloud.backupdr.v1.BackupDR.CreateManagementServer (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackup (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackupPlan (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackupPlanAssociation (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackupVault (LRO) google.cloud.backupdr.v1.BackupDR.DeleteManagementServer (LRO) google.cloud.backupdr.v1.BackupDR.FetchAccessToken google.cloud.backupdr.v1.BackupDR.FinalizeBackup (LRO) google.cloud.backupdr.v1.BackupDR.InitializeService (LRO) google.cloud.backupdr.v1.BackupDR.InitiateBackup google.cloud.backupdr.v1.BackupDR.RemoveDataSource (LRO) google.cloud.backupdr.v1.BackupDR.RestoreBackup (LRO) google.cloud.backupdr.v1.BackupDR.SetInternalStatus (LRO) google.cloud.backupdr.v1.BackupDR.TriggerBackup (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackup (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackupPlan (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackupPlanAssociation (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackupVault (LRO) google.cloud.backupdr.v1.BackupDR.UpdateDataSource (LRO) SetIamPolicy google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation importOrForgetVaultPoolBackupsPerApplication importOrForgetVaultPoolBackupsPerCluster importTemplates installApplianceUpdateNow iscsiTestA jobHistoryArchive joinAppliance liveCloneBackup migrate migrateBackup migrateRestoreMountBackup mkEtcHosts modifyConsistencyGroupMember modifyLogicalGroupMembers mountBackup mountMigratePreflight operateWorkflow recalcConsumedSize registerCluster replicateImage replicateLog restoreBackup restorePreflight revokeCertificate rmEtcHosts runDynamicProtectionJob setConfigParaMeter setDynamicProtectionJobConfig setSchedule stopAppliance testConnection testDns testNfsAsync uninstallHostConnector unmountBackup updateApplianceResourceWarning updateApplication updateBackup updateCloudVmMountOptionMetaData updateCloudVmRestoreOptionMetaData updateConsistencyGroup updateCredential updateDiskPool updateDiskPoolFromAppliance updateHost updateJob updateLogicalGroup updateLogicalGroupSla updateMembershipRule updateOptionForApp updateOptionForPolicy updateOptionForSla updatePolicy updateSchedule updateSla updateSlp updateSlt updateWorkflow upgradeHostConnector uploadThirdPartyCert validateCredential vmAddNew vmDiscoveryWithoutCluster API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Backup and DR Service. google.cloud.backupdr.v1.BackupDR The following audit logs are associated with methods belonging to google.cloud.backupdr.v1.BackupDR .
- Filter for this method : protoPayload.methodName="getReportExportPrereq" getSLAComplianceCompatibility Method : getSLAComplianceCompatibility Audit log type : Data access Permissions : backupdr.managementServers.viewSystem - ADMIN READ Method is a long-running or streaming operation : No.
- The following methods don't produce audit logs: google.cloud.backupdr.v1.BackupDR.FetchMsComplianceMetadata google.cloud.backupdr.v1.BackupDR.FetchUsableBackupVaults google.cloud.backupdr.v1.BackupDR.TestIamPermissions google.cloud.location.Locations.GetLocation google.cloud.location.Locations.ListLocations google.longrunning.Operations.WaitOperation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Filter for this method : protoPayload.methodName="getReadMeForApplianceUpdateInstallationJob" getRecommendedComplianceSettingsForOnTheFlyPolicy Method : getRecommendedComplianceSettingsForOnTheFlyPolicy Audit log type : Admin activity Permissions : backupdr.managementServers.manageBackupPlans - ADMIN WRITE Method is a long-running or streaming operation : No.

### Backup and DR Service for Microsoft SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- Source ID: `site-api-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Backup and DR has a proprietary method of change block tracking so backup solutions using SQL or other methods of obtaining the backups are not impacted by a scheduled Backup and DR data capture jobs.
- Updates the LiveClone or mountable Microsoft SQL Server data on a scheduled or on-demand basis Optionally automatically applies scripts to the LiveClone's Microsoft SQL Server data after each update.
- When you protect the entire instance, as databases are added to the instance, they are automatically included in the next Backup and DR capture job.
- A LiveClone is a copy of your production Microsoft SQL Server data that can be updated manually or on a scheduled basis.

