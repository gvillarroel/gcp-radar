---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.947Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Backup and DR backup event logging"
feature_slug: "backup-and-dr-backup-event-logging"
latest_feature_date: "2023-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging"
  - "https://docs.cloud.google.com/compute/docs/access/managed-constraints"
keywords:
  - "events"
  - "centralized"
  - "supports"
  - "logging"
  - "event"
---

# Backup and DR backup event logging

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR now supports centralized logging of backup events in Cloud Logging with custom filtering.

## Extended Definition

Backup and DR now supports centralized logging of backup events in Cloud Logging with custom filtering.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging)
- [https://docs.cloud.google.com/compute/docs/access/managed-constraints](https://docs.cloud.google.com/compute/docs/access/managed-constraints)

## Supporting Pages

### "Backup/recovery appliance event logs \_|\_ Backup and DR \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following sample is an example log entry logged on a backup/recovery appliance ba-1-52973 for a failed snapshot job. { "insertId" : "aop2oko38hsami1c" , "jsonPayload" : { "appName" : "instance-2" , "srcid" : "111428" , "jobName" : "Job 0110906c" , "appType" : "GCPInstance" , "eventId" : 43901 , "component" : "udp" , "eventTime" : "2023-02-06T20:24:52.450Z" , "errorMessage" : "Failed snapshot Job 0110906c for application instance-2 on host instance-2, Error: 1249: Failed to get VM details , sltname: pd snaps, slpname: ba-1-52973 Profile. " }, "resource" : { "type" : "backupdr.googleapis.com/BackupRecoveryAppliance" , "labels" : { "backup recovery appliance id" : "test-backup-recovery-appliances" , "resource container" : "projects/1234567" , "management server id" : "abcd-efgh-1234-5678-6789" , "location" : "" } }, "timestamp" : "2023-02-06T20:24:55.275029393Z" , "severity" : "ERROR" , "logName" : "projects/project1/logs/backupdr.googleapis.com %2F backup recovery appliance events" , "receiveTimestamp" : "2023-02-06T20:24:56.388937247Z" } Note: Event logs are not generated for successfully completed backup jobs.
- Use the following query to view all the event logs associated with backup/recovery appliances for a given PROJECT ID : logName="projects/ PROJECT ID /logs/backupdr.googleapis.com%2Fbackup recovery appliance events" If you are looking for event logs for a specific backup/recovery appliance, add the following backup/recovery appliance name: logName="projects/ PROJECT ID /logs/backupdr.googleapis.com%2Fbackup recovery appliance events" resource.labels.backup recovery appliance id= " backup/recovery appliance name " If you are looking for event logs for a specific event ID, then use the following log query.
- Note: You can refer to the Event IDs , for the list of important Backup and DR event IDs. logName = "projects/ PROJECT ID /logs/backupdr.googleapis.com %2F backup recovery appliance events" AND jsonPayload . eventId = event ID If you are looking for event logs for multiple specific event IDs, then use the following log query.
- Make sure you use uppercase AND . logName = "projects/ PROJECT ID /logs/backupdr.googleapis.com %2F backup recovery appliance events" AND jsonPayload . app name = appname What's next To configure log-based alerts for Backup and DR Service, create a log query, using the filter event logs , and then Configure log-based alerts .

### Managed constraints \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/managed-constraints](https://docs.cloud.google.com/compute/docs/access/managed-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When enabled, you can't create compute instances that have the gce-container-declaration metadata key.This constraint also prevents creation of compute instances from instance templates that contain the gce-container-declaration metadata key, which affects managed instance groups (MIGs) that use such instance templates. constraints/compute.managed.disableVmsWithContainerStartupAgent Restricts usage of Global Internal DNS (gDNS) for projects that have a ZonalOnly DNS setting.
- This constraint only applies to Compute Alpha API features. constraints/compute.managed.blockPreviewFeatures Block Project-wide SSH Keys Preview: This constraint prevents the block-project-ssh-keys metadata key from being set to false at the project, project-zonal, or instance level for Compute Engine VMs within the organization, project, or folder where this constraint is enforced.
- By default, hardware-accelerated nested virtualization is allowed for all Compute Engine VMs running on Intel Haswell or newer CPU platforms. constraints/compute.managed.disableNestedVirtualization Disable Non-FIPS Compliant Machine Types Preview: This constraint, when enforced, prevents the creation or update of VM instances using machine types that are not FIPS compliant.
- You can exempt specific VMs using tags and conditional rules. constraints/compute.managed.disableNonFIPSMachineTypes Restrict enabling VM serial port access metadata This constraint prevents the serial-port-enable metadata key from being set to true for Compute Engine VMs within the organization, project, or folder where this constraint is enforced.

### Audit logs \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods ADMIN READ countApplianceUpdates countApplianceUpdatesInstallationJobs countApplications countBackups countCloudCredentials countClusters countCombinedJob countCombinedMatrix countConsistencyGroups countDiskPools countDynamicProtections countEvents countHosts countLogicalGroups countMatrix countSlps countSlts countWorkflows createSlaPreflight delegateGetCallDownloadLog discoverVolumes downloadLogStatus downloadOssNotice getAppClass getAppClassByAppclassName getAppliance getApplianceBandwidthStat getApplianceHotfixes getAppliancePolicyManager getApplianceResourceLimit getApplianceResourceWarning getApplianceSsdStatus getApplianceSystemStat getApplianceVersion getApplication getBVInfo getBackup getBackupPreservedStatus getCertificate getCloudCredentialMetaInfo getCloudTypes getCloudVmMetaInfo getCluster getClusterCalloutTest getClustersDetails getConfigParameter getConsistencyGroup getConsistencyGroupMember getCredential getDevice getDiscardedBackup getDiskPool getDiskPoolFromAppliance getDynamicProtection getEvent getExportStatusDetails getGCERegions getGCPProjects getGCPProjectsByProfile getHost getHostAvailableConnector getHostConnector getHostDatastores getHostDetails getInstanceInclusionRule getInstanceMemberRuleMembers getIscsiTestResults getJob getLocalAppliance getLogicalGroup getMSParameter getNfsOptions getNotifications getNotificationsV2 getParameter getPolicy getPreservedBackup getPreservedBackupHistory getProtectedESXINodeCount getReadMeForApplianceUpdate getReadMeForApplianceUpdateInstallationJob getRecoveryPools getRegions getReportExportPrereq getSLAComplianceCompatibility getSessionInfo getSla getSlp getSlt getThirdPartyCertAll getUpdateLogs getVaultPoolClusterApplicationsPerApplication getVaultPoolClusterApplicationsPerCluster getVaultPoolClusters getVaultTaskStatus getVmMetadataDetails getVsphereHost getWarning google.cloud.backupdr.v1.BackupDR.FetchBackupPlanAssociationsForResourceType google.cloud.backupdr.v1.BackupDR.FetchDataSourceReferencesForResourceType google.cloud.backupdr.v1.BackupDR.GetBackup google.cloud.backupdr.v1.BackupDR.GetBackupPlan google.cloud.backupdr.v1.BackupDR.GetBackupPlanAssociation google.cloud.backupdr.v1.BackupDR.GetBackupPlanRevision google.cloud.backupdr.v1.BackupDR.GetBackupVault google.cloud.backupdr.v1.BackupDR.GetDataSource google.cloud.backupdr.v1.BackupDR.GetDataSourceReference google.cloud.backupdr.v1.BackupDR.GetManagementServer google.cloud.backupdr.v1.BackupDR.ListBackupPlanAssociations google.cloud.backupdr.v1.BackupDR.ListBackupPlanRevisions google.cloud.backupdr.v1.BackupDR.ListBackupPlans google.cloud.backupdr.v1.BackupDR.ListBackupVaults google.cloud.backupdr.v1.BackupDR.ListBackups google.cloud.backupdr.v1.BackupDR.ListDataSources google.cloud.backupdr.v1.BackupDR.ListManagementServers google.cloud.backupdr.v1.BackupDrProtectionSummary.ListResourceBackupConfigs GetIamPolicy google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations isApplianceUpgradeInProgress isInMigrationMode listApplianceUpdates listApplianceUpdatesInstallationjobs listAppliances listApplications listApplicationsFlatView listArchives listBackups listBwSchedule listCloudSupportedProfiles listCloudSupportedTemplates listClusters listCombinedJobs listConsistencyGroups listCredentials listDiskPools listDiskPoolsFromAppliance listDiskTypes listDynamicProtections listEffectiveMembers listEffectiveOptionsForApp listEffectiveOptionsForSla listEvents listGcpVaultPool listHosts listLogicalGroup listLogicalGroupMembers listOptionForApp listOptionForPolicy listOptionForSla listOptionsForAppType listOptionsForPolicyType listPolicies listProtectedDataAGM listProtectedDataAGMByAppliance listSlas listSlps listSlts listVMVolumes listWorkFlows listWorkflowsPerApp lsConfiguredInterface lsDns lsEtcHosts lsInterface lsNetworkCapability lsNtp lsOutboundPolicy settableOptionMetadataForApp settableOptionMetadataForPolicy settableOptionMetadataForSla showCustomSetting showRoute showTracePath triggerExport validateHypervisorCredential ADMIN WRITE addApplication addPort addVm appDiscovery appDiscoveryOnAppliance appliancePolicyManager backupNow callbackTestAppliance cloneBackup cloneTemplates clusterDiscovery configDns configNtp configureMountMigrate createApplication createConnection createConsistencyGroup createCredential createDiskPool createDiskPoolFromAppliance createDynamicProtection createHost createLogicalGroup createLogicalGroupSla createOptionForApp createOptionForPolicy createOptionForSla createPolicy createSla createSlp createSlt createWorkflow deleteApplication deleteBackup deleteCluster deleteConsistencyGroup deleteCredential deleteDiskPool deleteDiskPoolFromAppliance deleteDynamicProtection deleteHost deleteLogicalGroup deleteLogicalGroupSla deleteMembershipRule deleteOptionForApp deleteOptionForPolicy deletePolicy deletePorts deleteSla deleteSlp deleteSlt deleteWorkflow discover discoverCloudVm discoverUpdates dissolveAppliance downloadConnector enableConnectorUpgrade expireBackup fetchApplicationOptions generateOTP getCloudVmMountOptionMetaData getCloudVmRestoreOptionMetaData getDataRetentionDetails getDiskMapping getDynamicJsonForPoolManage getNfsTestTaskStatus getRecommendedComplianceSettingsForOnTheFlyPolicy getRecommendedComplianceSettingsForPolicy getVaultList google.cloud.backupdr.v1.BackupDR.AbandonBackup (LRO) google.cloud.backupdr.v1.BackupDR.CreateBackupPlan (LRO) google.cloud.backupdr.v1.BackupDR.CreateBackupPlanAssociation (LRO) google.cloud.backupdr.v1.BackupDR.CreateBackupVault (LRO) google.cloud.backupdr.v1.BackupDR.CreateManagementServer (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackup (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackupPlan (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackupPlanAssociation (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackupVault (LRO) google.cloud.backupdr.v1.BackupDR.DeleteManagementServer (LRO) google.cloud.backupdr.v1.BackupDR.FetchAccessToken google.cloud.backupdr.v1.BackupDR.FinalizeBackup (LRO) google.cloud.backupdr.v1.BackupDR.InitializeService (LRO) google.cloud.backupdr.v1.BackupDR.InitiateBackup google.cloud.backupdr.v1.BackupDR.RemoveDataSource (LRO) google.cloud.backupdr.v1.BackupDR.RestoreBackup (LRO) google.cloud.backupdr.v1.BackupDR.SetInternalStatus (LRO) google.cloud.backupdr.v1.BackupDR.TriggerBackup (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackup (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackupPlan (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackupPlanAssociation (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackupVault (LRO) google.cloud.backupdr.v1.BackupDR.UpdateDataSource (LRO) SetIamPolicy google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation importOrForgetVaultPoolBackupsPerApplication importOrForgetVaultPoolBackupsPerCluster importTemplates installApplianceUpdateNow iscsiTestA jobHistoryArchive joinAppliance liveCloneBackup migrate migrateBackup migrateRestoreMountBackup mkEtcHosts modifyConsistencyGroupMember modifyLogicalGroupMembers mountBackup mountMigratePreflight operateWorkflow recalcConsumedSize registerCluster replicateImage replicateLog restoreBackup restorePreflight revokeCertificate rmEtcHosts runDynamicProtectionJob setConfigParaMeter setDynamicProtectionJobConfig setSchedule stopAppliance testConnection testDns testNfsAsync uninstallHostConnector unmountBackup updateApplianceResourceWarning updateApplication updateBackup updateCloudVmMountOptionMetaData updateCloudVmRestoreOptionMetaData updateConsistencyGroup updateCredential updateDiskPool updateDiskPoolFromAppliance updateHost updateJob updateLogicalGroup updateLogicalGroupSla updateMembershipRule updateOptionForApp updateOptionForPolicy updateOptionForSla updatePolicy updateSchedule updateSla updateSlp updateSlt updateWorkflow upgradeHostConnector uploadThirdPartyCert validateCredential vmAddNew vmDiscoveryWithoutCluster API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Backup and DR Service. google.cloud.backupdr.v1.BackupDR The following audit logs are associated with methods belonging to google.cloud.backupdr.v1.BackupDR .
- Filter for this method : protoPayload.methodName="listEffectiveOptionsForSla" listEvents Method : listEvents Audit log type : Data access Permissions : backupdr.managementServers.viewSystem - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="countDynamicProtections" countEvents Method : countEvents Audit log type : Data access Permissions : backupdr.managementServers.viewSystem - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="listEvents" listGcpVaultPool Method : listGcpVaultPool Audit log type : Data access Permissions : backupdr.managementServers.viewStorage - ADMIN READ Method is a long-running or streaming operation : No.

