---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.725Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "NetApp Cloud Volumes Service support"
feature_slug: "netapp-cloud-volumes-service-support"
latest_feature_date: "2021-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging"
keywords:
  - "netapp"
  - "volumes"
  - "workload"
  - "vms"
  - "can"
  - "use"
  - "nfs"
  - "mount"
---

# NetApp Cloud Volumes Service support

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Workload VMs can use NetApp Cloud Volumes Service volumes as NFS mount points or SMB shares.

## Extended Definition

Workload VMs can use NetApp Cloud Volumes Service volumes as NFS mount points or SMB shares.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms](https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging)

## Supporting Pages

### "Workload VM backup solutions \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms](https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms)
- Source ID: `site-docs-reference-required-4`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- The performance tiers of Google Cloud NetApp Volumes are dynamic and a volume can be upgraded to a higher tier during recovery to meet your RTO and then changed to a lower tier to optimize costs.
- Use Google Cloud NetApp Volumes to export NFS and SMB volumes for use as backup repositories.
- Google Cloud NetApp Volumes are regional, and data is not replicated across zones or regions.
- For more information, see Regions where Google Cloud NetApp Volumes is available .

### "Mount backup images of Compute Engine instances in the appliance management\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- From Select Volumes To Mount , select a single volume or multiple volumes to attach to the existing instance.
- From Select Volumes To Mount , select a single volume or multiple volumes to mount.
- Impact of mounting instances where disks are encrypted with CMEK If you are mounting a Compute Engine instance that has attached disks that are encrypted with Customer Managed Encryption Keys (CMEK), then be aware of the following: The mounted disks are encrypted with the same key version that the selected snapshot of the disks is encrypted with.
- To mount a Compute Engine backup image as an existing or new Compute Engine instance, where the source disk is using customer-managed encryption keys (CMEK), follow these steps: Copy the service account name of the Compute Engine service agent from the target project.

### Audit logs \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging)
- Source ID: `site-docs-reference-2`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ countApplianceUpdates countApplianceUpdatesInstallationJobs countApplications countBackups countCloudCredentials countClusters countCombinedJob countCombinedMatrix countConsistencyGroups countDiskPools countDynamicProtections countEvents countHosts countLogicalGroups countMatrix countSlps countSlts countWorkflows createSlaPreflight delegateGetCallDownloadLog discoverVolumes downloadLogStatus downloadOssNotice getAppClass getAppClassByAppclassName getAppliance getApplianceBandwidthStat getApplianceHotfixes getAppliancePolicyManager getApplianceResourceLimit getApplianceResourceWarning getApplianceSsdStatus getApplianceSystemStat getApplianceVersion getApplication getBVInfo getBackup getBackupPreservedStatus getCertificate getCloudCredentialMetaInfo getCloudTypes getCloudVmMetaInfo getCluster getClusterCalloutTest getClustersDetails getConfigParameter getConsistencyGroup getConsistencyGroupMember getCredential getDevice getDiscardedBackup getDiskPool getDiskPoolFromAppliance getDynamicProtection getEvent getExportStatusDetails getGCERegions getGCPProjects getGCPProjectsByProfile getHost getHostAvailableConnector getHostConnector getHostDatastores getHostDetails getInstanceInclusionRule getInstanceMemberRuleMembers getIscsiTestResults getJob getLocalAppliance getLogicalGroup getMSParameter getNfsOptions getNotifications getNotificationsV2 getParameter getPolicy getPreservedBackup getPreservedBackupHistory getProtectedESXINodeCount getReadMeForApplianceUpdate getReadMeForApplianceUpdateInstallationJob getRecoveryPools getRegions getReportExportPrereq getSLAComplianceCompatibility getSessionInfo getSla getSlp getSlt getThirdPartyCertAll getUpdateLogs getVaultPoolClusterApplicationsPerApplication getVaultPoolClusterApplicationsPerCluster getVaultPoolClusters getVaultTaskStatus getVmMetadataDetails getVsphereHost getWarning google.cloud.backupdr.v1.BackupDR.FetchBackupPlanAssociationsForResourceType google.cloud.backupdr.v1.BackupDR.FetchDataSourceReferencesForResourceType google.cloud.backupdr.v1.BackupDR.GetBackup google.cloud.backupdr.v1.BackupDR.GetBackupPlan google.cloud.backupdr.v1.BackupDR.GetBackupPlanAssociation google.cloud.backupdr.v1.BackupDR.GetBackupPlanRevision google.cloud.backupdr.v1.BackupDR.GetBackupVault google.cloud.backupdr.v1.BackupDR.GetDataSource google.cloud.backupdr.v1.BackupDR.GetDataSourceReference google.cloud.backupdr.v1.BackupDR.GetManagementServer google.cloud.backupdr.v1.BackupDR.ListBackupPlanAssociations google.cloud.backupdr.v1.BackupDR.ListBackupPlanRevisions google.cloud.backupdr.v1.BackupDR.ListBackupPlans google.cloud.backupdr.v1.BackupDR.ListBackupVaults google.cloud.backupdr.v1.BackupDR.ListBackups google.cloud.backupdr.v1.BackupDR.ListDataSources google.cloud.backupdr.v1.BackupDR.ListManagementServers google.cloud.backupdr.v1.BackupDrProtectionSummary.ListResourceBackupConfigs GetIamPolicy google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations isApplianceUpgradeInProgress isInMigrationMode listApplianceUpdates listApplianceUpdatesInstallationjobs listAppliances listApplications listApplicationsFlatView listArchives listBackups listBwSchedule listCloudSupportedProfiles listCloudSupportedTemplates listClusters listCombinedJobs listConsistencyGroups listCredentials listDiskPools listDiskPoolsFromAppliance listDiskTypes listDynamicProtections listEffectiveMembers listEffectiveOptionsForApp listEffectiveOptionsForSla listEvents listGcpVaultPool listHosts listLogicalGroup listLogicalGroupMembers listOptionForApp listOptionForPolicy listOptionForSla listOptionsForAppType listOptionsForPolicyType listPolicies listProtectedDataAGM listProtectedDataAGMByAppliance listSlas listSlps listSlts listVMVolumes listWorkFlows listWorkflowsPerApp lsConfiguredInterface lsDns lsEtcHosts lsInterface lsNetworkCapability lsNtp lsOutboundPolicy settableOptionMetadataForApp settableOptionMetadataForPolicy settableOptionMetadataForSla showCustomSetting showRoute showTracePath triggerExport validateHypervisorCredential ADMIN WRITE addApplication addPort addVm appDiscovery appDiscoveryOnAppliance appliancePolicyManager backupNow callbackTestAppliance cloneBackup cloneTemplates clusterDiscovery configDns configNtp configureMountMigrate createApplication createConnection createConsistencyGroup createCredential createDiskPool createDiskPoolFromAppliance createDynamicProtection createHost createLogicalGroup createLogicalGroupSla createOptionForApp createOptionForPolicy createOptionForSla createPolicy createSla createSlp createSlt createWorkflow deleteApplication deleteBackup deleteCluster deleteConsistencyGroup deleteCredential deleteDiskPool deleteDiskPoolFromAppliance deleteDynamicProtection deleteHost deleteLogicalGroup deleteLogicalGroupSla deleteMembershipRule deleteOptionForApp deleteOptionForPolicy deletePolicy deletePorts deleteSla deleteSlp deleteSlt deleteWorkflow discover discoverCloudVm discoverUpdates dissolveAppliance downloadConnector enableConnectorUpgrade expireBackup fetchApplicationOptions generateOTP getCloudVmMountOptionMetaData getCloudVmRestoreOptionMetaData getDataRetentionDetails getDiskMapping getDynamicJsonForPoolManage getNfsTestTaskStatus getRecommendedComplianceSettingsForOnTheFlyPolicy getRecommendedComplianceSettingsForPolicy getVaultList google.cloud.backupdr.v1.BackupDR.AbandonBackup (LRO) google.cloud.backupdr.v1.BackupDR.CreateBackupPlan (LRO) google.cloud.backupdr.v1.BackupDR.CreateBackupPlanAssociation (LRO) google.cloud.backupdr.v1.BackupDR.CreateBackupVault (LRO) google.cloud.backupdr.v1.BackupDR.CreateManagementServer (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackup (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackupPlan (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackupPlanAssociation (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackupVault (LRO) google.cloud.backupdr.v1.BackupDR.DeleteManagementServer (LRO) google.cloud.backupdr.v1.BackupDR.FetchAccessToken google.cloud.backupdr.v1.BackupDR.FinalizeBackup (LRO) google.cloud.backupdr.v1.BackupDR.InitializeService (LRO) google.cloud.backupdr.v1.BackupDR.InitiateBackup google.cloud.backupdr.v1.BackupDR.RemoveDataSource (LRO) google.cloud.backupdr.v1.BackupDR.RestoreBackup (LRO) google.cloud.backupdr.v1.BackupDR.SetInternalStatus (LRO) google.cloud.backupdr.v1.BackupDR.TriggerBackup (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackup (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackupPlan (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackupPlanAssociation (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackupVault (LRO) google.cloud.backupdr.v1.BackupDR.UpdateDataSource (LRO) SetIamPolicy google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation importOrForgetVaultPoolBackupsPerApplication importOrForgetVaultPoolBackupsPerCluster importTemplates installApplianceUpdateNow iscsiTestA jobHistoryArchive joinAppliance liveCloneBackup migrate migrateBackup migrateRestoreMountBackup mkEtcHosts modifyConsistencyGroupMember modifyLogicalGroupMembers mountBackup mountMigratePreflight operateWorkflow recalcConsumedSize registerCluster replicateImage replicateLog restoreBackup restorePreflight revokeCertificate rmEtcHosts runDynamicProtectionJob setConfigParaMeter setDynamicProtectionJobConfig setSchedule stopAppliance testConnection testDns testNfsAsync uninstallHostConnector unmountBackup updateApplianceResourceWarning updateApplication updateBackup updateCloudVmMountOptionMetaData updateCloudVmRestoreOptionMetaData updateConsistencyGroup updateCredential updateDiskPool updateDiskPoolFromAppliance updateHost updateJob updateLogicalGroup updateLogicalGroupSla updateMembershipRule updateOptionForApp updateOptionForPolicy updateOptionForSla updatePolicy updateSchedule updateSla updateSlp updateSlt updateWorkflow upgradeHostConnector uploadThirdPartyCert validateCredential vmAddNew vmDiscoveryWithoutCluster API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Backup and DR Service. google.cloud.backupdr.v1.BackupDR The following audit logs are associated with methods belonging to google.cloud.backupdr.v1.BackupDR .
- Filter for this method : protoPayload.methodName="getCloudVmMountOptionMetaData" getCloudVmRestoreOptionMetaData Method : getCloudVmRestoreOptionMetaData Audit log type : Admin activity Permissions : backupdr.managementServers.access - ADMIN READ backupdr.managementServers.manageMounts - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="mountMigratePreflight" operateWorkflow Method : operateWorkflow Audit log type : Admin activity Permissions : backupdr.managementServers.manageWorkflows - ADMIN WRITE backupdr.managementServers.runWorkflows - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="updateCloudVmMountOptionMetaData" updateCloudVmRestoreOptionMetaData Method : updateCloudVmRestoreOptionMetaData Audit log type : Admin activity Permissions : backupdr.managementServers.manageMounts - ADMIN WRITE Method is a long-running or streaming operation : No.

