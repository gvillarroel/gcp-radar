---
title: "Audit logs \_|\_ Backup and DR \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging
  title: "Audit logs \_|\_ Backup and DR \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Backup and DR
Guides
Send feedback
Audit logs
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Backup and DR Service. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Backup and DR Service audit logs use the service name backupdr.googleapis.com .
Filter for this service:
protoPayload . serviceName = "backupdr.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Backup and DR Service generates an audit log whose category is dependent on the
type property of the permission required to perform the method.
Methods that require an IAM permission with the type property value
of DATA_READ , DATA_WRITE , or ADMIN_READ generate
Data Access audit logs.
Methods that require an IAM permission with the type property value
of ADMIN_WRITE generate
Admin Activity audit logs.
API methods in the following list that are marked with (LRO) are long-running operations (LROs).
These methods usually generate two audit log entries: one when the operation starts and
another when it ends. For more information see Audit logs for long-running operations .
Permission type
Methods
ADMIN_READ
countApplianceUpdates countApplianceUpdatesInstallationJobs countApplications countBackups countCloudCredentials countClusters countCombinedJob countCombinedMatrix countConsistencyGroups countDiskPools countDynamicProtections countEvents countHosts countLogicalGroups countMatrix countSlps countSlts countWorkflows createSlaPreflight delegateGetCallDownloadLog discoverVolumes downloadLogStatus downloadOssNotice getAppClass getAppClassByAppclassName getAppliance getApplianceBandwidthStat getApplianceHotfixes getAppliancePolicyManager getApplianceResourceLimit getApplianceResourceWarning getApplianceSsdStatus getApplianceSystemStat getApplianceVersion getApplication getBVInfo getBackup getBackupPreservedStatus getCertificate getCloudCredentialMetaInfo getCloudTypes getCloudVmMetaInfo getCluster getClusterCalloutTest getClustersDetails getConfigParameter getConsistencyGroup getConsistencyGroupMember getCredential getDevice getDiscardedBackup getDiskPool getDiskPoolFromAppliance getDynamicProtection getEvent getExportStatusDetails getGCERegions getGCPProjects getGCPProjectsByProfile getHost getHostAvailableConnector getHostConnector getHostDatastores getHostDetails getInstanceInclusionRule getInstanceMemberRuleMembers getIscsiTestResults getJob getLocalAppliance getLogicalGroup getMSParameter getNfsOptions getNotifications getNotificationsV2 getParameter getPolicy getPreservedBackup getPreservedBackupHistory getProtectedESXINodeCount getReadMeForApplianceUpdate getReadMeForApplianceUpdateInstallationJob getRecoveryPools getRegions getReportExportPrereq getSLAComplianceCompatibility getSessionInfo getSla getSlp getSlt getThirdPartyCertAll getUpdateLogs getVaultPoolClusterApplicationsPerApplication getVaultPoolClusterApplicationsPerCluster getVaultPoolClusters getVaultTaskStatus getVmMetadataDetails getVsphereHost getWarning google.cloud.backupdr.v1.BackupDR.FetchBackupPlanAssociationsForResourceType google.cloud.backupdr.v1.BackupDR.FetchDataSourceReferencesForResourceType google.cloud.backupdr.v1.BackupDR.GetBackup google.cloud.backupdr.v1.BackupDR.GetBackupPlan google.cloud.backupdr.v1.BackupDR.GetBackupPlanAssociation google.cloud.backupdr.v1.BackupDR.GetBackupPlanRevision google.cloud.backupdr.v1.BackupDR.GetBackupVault google.cloud.backupdr.v1.BackupDR.GetDataSource google.cloud.backupdr.v1.BackupDR.GetDataSourceReference google.cloud.backupdr.v1.BackupDR.GetManagementServer google.cloud.backupdr.v1.BackupDR.ListBackupPlanAssociations google.cloud.backupdr.v1.BackupDR.ListBackupPlanRevisions google.cloud.backupdr.v1.BackupDR.ListBackupPlans google.cloud.backupdr.v1.BackupDR.ListBackupVaults google.cloud.backupdr.v1.BackupDR.ListBackups google.cloud.backupdr.v1.BackupDR.ListDataSources google.cloud.backupdr.v1.BackupDR.ListManagementServers google.cloud.backupdr.v1.BackupDrProtectionSummary.ListResourceBackupConfigs GetIamPolicy google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations isApplianceUpgradeInProgress isInMigrationMode listApplianceUpdates listApplianceUpdatesInstallationjobs listAppliances listApplications listApplicationsFlatView listArchives listBackups listBwSchedule listCloudSupportedProfiles listCloudSupportedTemplates listClusters listCombinedJobs listConsistencyGroups listCredentials listDiskPools listDiskPoolsFromAppliance listDiskTypes listDynamicProtections listEffectiveMembers listEffectiveOptionsForApp listEffectiveOptionsForSla listEvents listGcpVaultPool listHosts listLogicalGroup listLogicalGroupMembers listOptionForApp listOptionForPolicy listOptionForSla listOptionsForAppType listOptionsForPolicyType listPolicies listProtectedDataAGM listProtectedDataAGMByAppliance listSlas listSlps listSlts listVMVolumes listWorkFlows listWorkflowsPerApp lsConfiguredInterface lsDns lsEtcHosts lsInterface lsNetworkCapability lsNtp lsOutboundPolicy settableOptionMetadataForApp settableOptionMetadataForPolicy settableOptionMetadataForSla showCustomSetting showRoute showTracePath triggerExport validateHypervisorCredential
ADMIN_WRITE
addApplication addPort addVm appDiscovery appDiscoveryOnAppliance appliancePolicyManager backupNow callbackTestAppliance cloneBackup cloneTemplates clusterDiscovery configDns configNtp configureMountMigrate createApplication createConnection createConsistencyGroup createCredential createDiskPool createDiskPoolFromAppliance createDynamicProtection createHost createLogicalGroup createLogicalGroupSla createOptionForApp createOptionForPolicy createOptionForSla createPolicy createSla createSlp createSlt createWorkflow deleteApplication deleteBackup deleteCluster deleteConsistencyGroup deleteCredential deleteDiskPool deleteDiskPoolFromAppliance deleteDynamicProtection deleteHost deleteLogicalGroup deleteLogicalGroupSla deleteMembershipRule deleteOptionForApp deleteOptionForPolicy deletePolicy deletePorts deleteSla deleteSlp deleteSlt deleteWorkflow discover discoverCloudVm discoverUpdates dissolveAppliance downloadConnector enableConnectorUpgrade expireBackup fetchApplicationOptions generateOTP getCloudVmMountOptionMetaData getCloudVmRestoreOptionMetaData getDataRetentionDetails getDiskMapping getDynamicJsonForPoolManage getNfsTestTaskStatus getRecommendedComplianceSettingsForOnTheFlyPolicy getRecommendedComplianceSettingsForPolicy getVaultList google.cloud.backupdr.v1.BackupDR.AbandonBackup (LRO) google.cloud.backupdr.v1.BackupDR.CreateBackupPlan (LRO) google.cloud.backupdr.v1.BackupDR.CreateBackupPlanAssociation (LRO) google.cloud.backupdr.v1.BackupDR.CreateBackupVault (LRO) google.cloud.backupdr.v1.BackupDR.CreateManagementServer (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackup (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackupPlan (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackupPlanAssociation (LRO) google.cloud.backupdr.v1.BackupDR.DeleteBackupVault (LRO) google.cloud.backupdr.v1.BackupDR.DeleteManagementServer (LRO) google.cloud.backupdr.v1.BackupDR.FetchAccessToken google.cloud.backupdr.v1.BackupDR.FinalizeBackup (LRO) google.cloud.backupdr.v1.BackupDR.InitializeService (LRO) google.cloud.backupdr.v1.BackupDR.InitiateBackup google.cloud.backupdr.v1.BackupDR.RemoveDataSource (LRO) google.cloud.backupdr.v1.BackupDR.RestoreBackup (LRO) google.cloud.backupdr.v1.BackupDR.SetInternalStatus (LRO) google.cloud.backupdr.v1.BackupDR.TriggerBackup (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackup (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackupPlan (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackupPlanAssociation (LRO) google.cloud.backupdr.v1.BackupDR.UpdateBackupVault (LRO) google.cloud.backupdr.v1.BackupDR.UpdateDataSource (LRO) SetIamPolicy google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation importOrForgetVaultPoolBackupsPerApplication importOrForgetVaultPoolBackupsPerCluster importTemplates installApplianceUpdateNow iscsiTestA jobHistoryArchive joinAppliance liveCloneBackup migrate migrateBackup migrateRestoreMountBackup mkEtcHosts modifyConsistencyGroupMember modifyLogicalGroupMembers mountBackup mountMigratePreflight operateWorkflow recalcConsumedSize registerCluster replicateImage replicateLog restoreBackup restorePreflight revokeCertificate rmEtcHosts runDynamicProtectionJob setConfigParaMeter setDynamicProtectionJobConfig setSchedule stopAppliance testConnection testDns testNfsAsync uninstallHostConnector unmountBackup updateApplianceResourceWarning updateApplication updateBackup updateCloudVmMountOptionMetaData updateCloudVmRestoreOptionMetaData updateConsistencyGroup updateCredential updateDiskPool updateDiskPoolFromAppliance updateHost updateJob updateLogicalGroup updateLogicalGroupSla updateMembershipRule updateOptionForApp updateOptionForPolicy updateOptionForSla updatePolicy updateSchedule updateSla updateSlp updateSlt updateWorkflow upgradeHostConnector uploadThirdPartyCert validateCredential vmAddNew vmDiscoveryWithoutCluster
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Backup and DR Service.
google.cloud.backupdr.v1.BackupDR
The following audit logs are associated with methods belonging to
google.cloud.backupdr.v1.BackupDR .
AbandonBackup
Method : google.cloud.backupdr.v1.BackupDR.AbandonBackup
Audit log type : Admin activity
Permissions : backupdr.bvdataSources.abandonBackup - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.AbandonBackup"
CreateBackupPlan
Method : google.cloud.backupdr.v1.BackupDR.CreateBackupPlan
Audit log type : Admin activity
Permissions : backupdr.backupPlans.create - ADMIN_WRITE
backupdr.backupVaults.associate - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.CreateBackupPlan"
CreateBackupPlanAssociation
Method : google.cloud.backupdr.v1.BackupDR.CreateBackupPlanAssociation
Audit log type : Admin activity
Permissions : backupdr.backupPlanAssociations.createForComputeDisk - ADMIN_WRITE
backupdr.backupPlanAssociations.createForComputeInstance - ADMIN_WRITE
backupdr.backupPlans.useForComputeDisk - ADMIN_WRITE
backupdr.backupPlans.useForComputeInstance - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.CreateBackupPlanAssociation"
CreateBackupVault
Method : google.cloud.backupdr.v1.BackupDR.CreateBackupVault
Audit log type : Admin activity
Permissions : backupdr.backupVaults.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.CreateBackupVault"
CreateManagementServer
Method : google.cloud.backupdr.v1.BackupDR.CreateManagementServer
Audit log type : Admin activity
Permissions : backupdr.managementServers.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.CreateManagementServer"
DeleteBackup
Method : google.cloud.backupdr.v1.BackupDR.DeleteBackup
Audit log type : Admin activity
Permissions : backupdr.bvbackups.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.DeleteBackup"
DeleteBackupPlan
Method : google.cloud.backupdr.v1.BackupDR.DeleteBackupPlan
Audit log type : Admin activity
Permissions : backupdr.backupPlans.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.DeleteBackupPlan"
DeleteBackupPlanAssociation
Method : google.cloud.backupdr.v1.BackupDR.DeleteBackupPlanAssociation
Audit log type : Admin activity
Permissions : backupdr.backupPlanAssociations.deleteForCloudSqlInstance - ADMIN_WRITE
backupdr.backupPlanAssociations.deleteForComputeDisk - ADMIN_WRITE
backupdr.backupPlanAssociations.deleteForComputeInstance - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.DeleteBackupPlanAssociation"
DeleteBackupVault
Method : google.cloud.backupdr.v1.BackupDR.DeleteBackupVault
Audit log type : Admin activity
Permissions : backupdr.backupVaults.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.DeleteBackupVault"
DeleteManagementServer
Method : google.cloud.backupdr.v1.BackupDR.DeleteManagementServer
Audit log type : Admin activity
Permissions : backupdr.managementServers.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.DeleteManagementServer"
FetchAccessToken
Method : google.cloud.backupdr.v1.BackupDR.FetchAccessToken
Audit log type : Admin activity
Permissions : backupdr.bvdataSources.fetchAccessToken - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.FetchAccessToken"
FetchBackupPlanAssociationsForResourceType
Method : google.cloud.backupdr.v1.BackupDR.FetchBackupPlanAssociationsForResourceType
Audit log type : Data access
Permissions : backupdr.backupPlanAssociations.fetchForCloudSqlInstance - ADMIN_READ
backupdr.backupPlanAssociations.fetchForComputeInstance - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.FetchBackupPlanAssociationsForResourceType"
FetchDataSourceReferencesForResourceType
Method : google.cloud.backupdr.v1.BackupDR.FetchDataSourceReferencesForResourceType
Audit log type : Data access
Permissions : backupdr.dataSourceReferences.fetchForCloudSqlInstance - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.FetchDataSourceReferencesForResourceType"
FinalizeBackup
Method : google.cloud.backupdr.v1.BackupDR.FinalizeBackup
Audit log type : Admin activity
Permissions : backupdr.bvdataSources.finalizeBackup - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.FinalizeBackup"
GetBackup
Method : google.cloud.backupdr.v1.BackupDR.GetBackup
Audit log type : Data access
Permissions : backupdr.bvbackups.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.GetBackup"
GetBackupPlan
Method : google.cloud.backupdr.v1.BackupDR.GetBackupPlan
Audit log type : Data access
Permissions : backupdr.backupPlans.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.GetBackupPlan"
GetBackupPlanAssociation
Method : google.cloud.backupdr.v1.BackupDR.GetBackupPlanAssociation
Audit log type : Data access
Permissions : backupdr.backupPlanAssociations.getForComputeInstance - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.GetBackupPlanAssociation"
GetBackupPlanRevision
Method : google.cloud.backupdr.v1.BackupDR.GetBackupPlanRevision
Audit log type : Data access
Permissions : backupdr.backupPlanRevisions.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.GetBackupPlanRevision"
GetBackupVault
Method : google.cloud.backupdr.v1.BackupDR.GetBackupVault
Audit log type : Data access
Permissions : backupdr.backupVaults.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.GetBackupVault"
GetDataSource
Method : google.cloud.backupdr.v1.BackupDR.GetDataSource
Audit log type : Data access
Permissions : backupdr.bvdataSources.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.GetDataSource"
GetDataSourceReference
Method : google.cloud.backupdr.v1.BackupDR.GetDataSourceReference
Audit log type : Data access
Permissions : backupdr.dataSourceReferences.getForCloudSqlInstance - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.GetDataSourceReference"
GetManagementServer
Method : google.cloud.backupdr.v1.BackupDR.GetManagementServer
Audit log type : Data access
Permissions : backupdr.managementServers.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.GetManagementServer"
InitializeService
Method : google.cloud.backupdr.v1.BackupDR.InitializeService
Audit log type : Admin activity
Permissions : backupdr.serviceConfig.initialize - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.InitializeService"
InitiateBackup
Method : google.cloud.backupdr.v1.BackupDR.InitiateBackup
Audit log type : Admin activity
Permissions : backupdr.bvdataSources.initiateBackup - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.InitiateBackup"
ListBackupPlanAssociations
Method : google.cloud.backupdr.v1.BackupDR.ListBackupPlanAssociations
Audit log type : Data access
Permissions : backupdr.backupPlanAssociations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.ListBackupPlanAssociations"
ListBackupPlanRevisions
Method : google.cloud.backupdr.v1.BackupDR.ListBackupPlanRevisions
Audit log type : Data access
Permissions : backupdr.backupPlanRevisions.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.ListBackupPlanRevisions"
ListBackupPlans
Method : google.cloud.backupdr.v1.BackupDR.ListBackupPlans
Audit log type : Data access
Permissions : backupdr.backupPlans.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.ListBackupPlans"
ListBackupVaults
Method : google.cloud.backupdr.v1.BackupDR.ListBackupVaults
Audit log type : Data access
Permissions : backupdr.backupVaults.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.ListBackupVaults"
ListBackups
Method : google.cloud.backupdr.v1.BackupDR.ListBackups
Audit log type : Data access
Permissions : backupdr.bvbackups.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.ListBackups"
ListDataSources
Method : google.cloud.backupdr.v1.BackupDR.ListDataSources
Audit log type : Data access
Permissions : backupdr.bvdataSources.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.ListDataSources"
ListManagementServers
Method : google.cloud.backupdr.v1.BackupDR.ListManagementServers
Audit log type : Data access
Permissions : backupdr.managementServers.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.ListManagementServers"
RemoveDataSource
Method : google.cloud.backupdr.v1.BackupDR.RemoveDataSource
Audit log type : Admin activity
Permissions : backupdr.bvdataSources.remove - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.RemoveDataSource"
RestoreBackup
Method : google.cloud.backupdr.v1.BackupDR.RestoreBackup
Audit log type : Admin activity
Permissions : backupdr.bvbackups.restore - ADMIN_WRITE
backupdr.compute.restoreFromBackupVault - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.RestoreBackup"
SetInternalStatus
Method : google.cloud.backupdr.v1.BackupDR.SetInternalStatus
Audit log type : Admin activity
Permissions : backupdr.bvdataSources.setInternalStatus - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.SetInternalStatus"
TriggerBackup
Method : google.cloud.backupdr.v1.BackupDR.TriggerBackup
Audit log type : Admin activity
Permissions : backupdr.backupPlanAssociations.triggerBackupForComputeDisk - ADMIN_WRITE
backupdr.backupPlanAssociations.triggerBackupForComputeInstance - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.TriggerBackup"
UpdateBackup
Method : google.cloud.backupdr.v1.BackupDR.UpdateBackup
Audit log type : Admin activity
Permissions : backupdr.bvbackups.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.UpdateBackup"
UpdateBackupPlan
Method : google.cloud.backupdr.v1.BackupDR.UpdateBackupPlan
Audit log type : Admin activity
Permissions : backupdr.backupPlans.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.UpdateBackupPlan"
UpdateBackupPlanAssociation
Method : google.cloud.backupdr.v1.BackupDR.UpdateBackupPlanAssociation
Audit log type : Admin activity
Permissions : backupdr.backupPlanAssociations.updateForComputeDisk - ADMIN_WRITE
backupdr.backupPlanAssociations.updateForComputeInstance - ADMIN_WRITE
backupdr.backupPlans.useForComputeDisk - ADMIN_WRITE
backupdr.backupPlans.useForComputeInstance - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.UpdateBackupPlanAssociation"
UpdateBackupVault
Method : google.cloud.backupdr.v1.BackupDR.UpdateBackupVault
Audit log type : Admin activity
Permissions : backupdr.backupVaults.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.UpdateBackupVault"
UpdateDataSource
Method : google.cloud.backupdr.v1.BackupDR.UpdateDataSource
Audit log type : Admin activity
Permissions : backupdr.bvdataSources.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDR.UpdateDataSource"
google.cloud.backupdr.v1.BackupDrProtectionSummary
The following audit logs are associated with methods belonging to
google.cloud.backupdr.v1.BackupDrProtectionSummary .
ListResourceBackupConfigs
Method : google.cloud.backupdr.v1.BackupDrProtectionSummary.ListResourceBackupConfigs
Audit log type : Data access
Permissions : backupdr.resourceBackupConfigs.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.backupdr.v1.BackupDrProtectionSummary.ListResourceBackupConfigs"
google.iam.v1.IAMPolicy
The following audit logs are associated with methods belonging to
google.iam.v1.IAMPolicy .
GetIamPolicy
Method : GetIamPolicy
Audit log type : Data access
Permissions : backupdr.managementServers.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="GetIamPolicy"
SetIamPolicy
Method : SetIamPolicy
Audit log type : Admin activity
Permissions : backupdr.managementServers.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="SetIamPolicy"
google.longrunning.Operations
The following audit logs are associated with methods belonging to
google.longrunning.Operations .
CancelOperation
Method : google.longrunning.Operations.CancelOperation
Audit log type : Admin activity
Permissions : backupdr.operations.cancel - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.CancelOperation"
DeleteOperation
Method : google.longrunning.Operations.DeleteOperation
Audit log type : Admin activity
Permissions : backupdr.operations.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.DeleteOperation"
GetOperation
Method : google.longrunning.Operations.GetOperation
Audit log type : Data access
Permissions : backupdr.operations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.GetOperation"
ListOperations
Method : google.longrunning.Operations.ListOperations
Audit log type : Data access
Permissions : backupdr.operations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.ListOperations"
other
The following audit logs are associated with methods belonging to
other .
addApplication
Method : addApplication
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageApplications - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="addApplication"
addPort
Method : addPort
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageHosts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="addPort"
addVm
Method : addVm
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageHosts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="addVm"
appDiscovery
Method : appDiscovery
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageApplications - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="appDiscovery"
appDiscoveryOnAppliance
Method : appDiscoveryOnAppliance
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="appDiscoveryOnAppliance"
appliancePolicyManager
Method : appliancePolicyManager
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="appliancePolicyManager"
backupNow
Method : backupNow
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackups - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="backupNow"
callbackTestAppliance
Method : callbackTestAppliance
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="callbackTestAppliance"
cloneBackup
Method : cloneBackup
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageClones - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="cloneBackup"
cloneTemplates
Method : cloneTemplates
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="cloneTemplates"
clusterDiscovery
Method : clusterDiscovery
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageHosts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="clusterDiscovery"
configDns
Method : configDns
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="configDns"
configNtp
Method : configNtp
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="configNtp"
configureMountMigrate
Method : configureMountMigrate
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageMigrations - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="configureMountMigrate"
countApplianceUpdates
Method : countApplianceUpdates
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="countApplianceUpdates"
countApplianceUpdatesInstallationJobs
Method : countApplianceUpdatesInstallationJobs
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="countApplianceUpdatesInstallationJobs"
countApplications
Method : countApplications
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="countApplications"
countBackups
Method : countBackups
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="countBackups"
countCloudCredentials
Method : countCloudCredentials
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="countCloudCredentials"
countClusters
Method : countClusters
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="countClusters"
countCombinedJob
Method : countCombinedJob
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="countCombinedJob"
countCombinedMatrix
Method : countCombinedMatrix
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="countCombinedMatrix"
countConsistencyGroups
Method : countConsistencyGroups
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="countConsistencyGroups"
countDiskPools
Method : countDiskPools
Audit log type : Data access
Permissions : backupdr.managementServers.viewStorage - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="countDiskPools"
countDynamicProtections
Method : countDynamicProtections
Audit log type : Data access
Permissions : backupdr.managementServers.listDynamicProtection - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="countDynamicProtections"
countEvents
Method : countEvents
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="countEvents"
countHosts
Method : countHosts
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="countHosts"
countLogicalGroups
Method : countLogicalGroups
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="countLogicalGroups"
countMatrix
Method : countMatrix
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="countMatrix"
countSlps
Method : countSlps
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupPlans - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="countSlps"
countSlts
Method : countSlts
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupPlans - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="countSlts"
countWorkflows
Method : countWorkflows
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="countWorkflows"
createApplication
Method : createApplication
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageApplications - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="createApplication"
createConnection
Method : createConnection
Audit log type : Admin activity
Permissions : backupdr.managementServers.createConnection - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="createConnection"
createConsistencyGroup
Method : createConsistencyGroup
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageApplications - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="createConsistencyGroup"
createCredential
Method : createCredential
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageSystem - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="createCredential"
createDiskPool
Method : createDiskPool
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageStorage - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="createDiskPool"
createDiskPoolFromAppliance
Method : createDiskPoolFromAppliance
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="createDiskPoolFromAppliance"
createDynamicProtection
Method : createDynamicProtection
Audit log type : Admin activity
Permissions : backupdr.managementServers.createDynamicProtection - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="createDynamicProtection"
createHost
Method : createHost
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageHosts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="createHost"
createLogicalGroup
Method : createLogicalGroup
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageApplications - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="createLogicalGroup"
createLogicalGroupSla
Method : createLogicalGroupSla
Audit log type : Admin activity
Permissions : backupdr.managementServers.assignBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="createLogicalGroupSla"
createOptionForApp
Method : createOptionForApp
Audit log type : Admin activity
Permissions : backupdr.managementServers.assignBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="createOptionForApp"
createOptionForPolicy
Method : createOptionForPolicy
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="createOptionForPolicy"
createOptionForSla
Method : createOptionForSla
Audit log type : Admin activity
Permissions : backupdr.managementServers.assignBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="createOptionForSla"
createPolicy
Method : createPolicy
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="createPolicy"
createSla
Method : createSla
Audit log type : Admin activity
Permissions : backupdr.managementServers.assignBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="createSla"
createSlaPreflight
Method : createSlaPreflight
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupPlans - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="createSlaPreflight"
createSlp
Method : createSlp
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="createSlp"
createSlt
Method : createSlt
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="createSlt"
createWorkflow
Method : createWorkflow
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageWorkflows - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="createWorkflow"
delegateGetCallDownloadLog
Method : delegateGetCallDownloadLog
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="delegateGetCallDownloadLog"
deleteApplication
Method : deleteApplication
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageApplications - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deleteApplication"
deleteBackup
Method : deleteBackup
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageExpiration - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deleteBackup"
deleteCluster
Method : deleteCluster
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageSystem - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deleteCluster"
deleteConsistencyGroup
Method : deleteConsistencyGroup
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageApplications - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deleteConsistencyGroup"
deleteCredential
Method : deleteCredential
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageSystem - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deleteCredential"
deleteDiskPool
Method : deleteDiskPool
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageStorage - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deleteDiskPool"
deleteDiskPoolFromAppliance
Method : deleteDiskPoolFromAppliance
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deleteDiskPoolFromAppliance"
deleteDynamicProtection
Method : deleteDynamicProtection
Audit log type : Admin activity
Permissions : backupdr.managementServers.deleteDynamicProtection - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deleteDynamicProtection"
deleteHost
Method : deleteHost
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageHosts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deleteHost"
deleteLogicalGroup
Method : deleteLogicalGroup
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageApplications - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deleteLogicalGroup"
deleteLogicalGroupSla
Method : deleteLogicalGroupSla
Audit log type : Admin activity
Permissions : backupdr.managementServers.assignBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deleteLogicalGroupSla"
deleteMembershipRule
Method : deleteMembershipRule
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageApplications - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deleteMembershipRule"
deleteOptionForApp
Method : deleteOptionForApp
Audit log type : Admin activity
Permissions : backupdr.managementServers.assignBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deleteOptionForApp"
deleteOptionForPolicy
Method : deleteOptionForPolicy
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deleteOptionForPolicy"
deletePolicy
Method : deletePolicy
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deletePolicy"
deletePorts
Method : deletePorts
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageHosts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deletePorts"
deleteSla
Method : deleteSla
Audit log type : Admin activity
Permissions : backupdr.managementServers.assignBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deleteSla"
deleteSlp
Method : deleteSlp
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deleteSlp"
deleteSlt
Method : deleteSlt
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deleteSlt"
deleteWorkflow
Method : deleteWorkflow
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageWorkflows - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="deleteWorkflow"
discover
Method : discover
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageApplications - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="discover"
discoverCloudVm
Method : discoverCloudVm
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageHosts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="discoverCloudVm"
discoverUpdates
Method : discoverUpdates
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageSystem - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="discoverUpdates"
discoverVolumes
Method : discoverVolumes
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="discoverVolumes"
dissolveAppliance
Method : dissolveAppliance
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="dissolveAppliance"
downloadConnector
Method : downloadConnector
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageSystem - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="downloadConnector"
downloadLogStatus
Method : downloadLogStatus
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="downloadLogStatus"
downloadOssNotice
Method : downloadOssNotice
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="downloadOssNotice"
enableConnectorUpgrade
Method : enableConnectorUpgrade
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageHosts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="enableConnectorUpgrade"
expireBackup
Method : expireBackup
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageExpiration - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="expireBackup"
fetchApplicationOptions
Method : fetchApplicationOptions
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackups - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="fetchApplicationOptions"
generateOTP
Method : generateOTP
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageSystem - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="generateOTP"
getAppClass
Method : getAppClass
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getAppClass"
getAppClassByAppclassName
Method : getAppClassByAppclassName
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getAppClassByAppclassName"
getAppliance
Method : getAppliance
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getAppliance"
getApplianceBandwidthStat
Method : getApplianceBandwidthStat
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getApplianceBandwidthStat"
getApplianceHotfixes
Method : getApplianceHotfixes
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getApplianceHotfixes"
getAppliancePolicyManager
Method : getAppliancePolicyManager
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getAppliancePolicyManager"
getApplianceResourceLimit
Method : getApplianceResourceLimit
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getApplianceResourceLimit"
getApplianceResourceWarning
Method : getApplianceResourceWarning
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getApplianceResourceWarning"
getApplianceSsdStatus
Method : getApplianceSsdStatus
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getApplianceSsdStatus"
getApplianceSystemStat
Method : getApplianceSystemStat
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getApplianceSystemStat"
getApplianceVersion
Method : getApplianceVersion
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getApplianceVersion"
getApplication
Method : getApplication
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getApplication"
getBVInfo
Method : getBVInfo
Audit log type : Data access
Permissions : backupdr.managementServers.viewStorage - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getBVInfo"
getBackup
Method : getBackup
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getBackup"
getBackupPreservedStatus
Method : getBackupPreservedStatus
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getBackupPreservedStatus"
getCertificate
Method : getCertificate
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getCertificate"
getCloudCredentialMetaInfo
Method : getCloudCredentialMetaInfo
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getCloudCredentialMetaInfo"
getCloudTypes
Method : getCloudTypes
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getCloudTypes"
getCloudVmMetaInfo
Method : getCloudVmMetaInfo
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getCloudVmMetaInfo"
getCloudVmMountOptionMetaData
Method : getCloudVmMountOptionMetaData
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageMounts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getCloudVmMountOptionMetaData"
getCloudVmRestoreOptionMetaData
Method : getCloudVmRestoreOptionMetaData
Audit log type : Admin activity
Permissions : backupdr.managementServers.access - ADMIN_READ
backupdr.managementServers.manageMounts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getCloudVmRestoreOptionMetaData"
getCluster
Method : getCluster
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getCluster"
getClusterCalloutTest
Method : getClusterCalloutTest
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getClusterCalloutTest"
getClustersDetails
Method : getClustersDetails
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getClustersDetails"
getConfigParameter
Method : getConfigParameter
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getConfigParameter"
getConsistencyGroup
Method : getConsistencyGroup
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getConsistencyGroup"
getConsistencyGroupMember
Method : getConsistencyGroupMember
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getConsistencyGroupMember"
getCredential
Method : getCredential
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getCredential"
getDataRetentionDetails
Method : getDataRetentionDetails
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageSystem - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getDataRetentionDetails"
getDevice
Method : getDevice
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getDevice"
getDiscardedBackup
Method : getDiscardedBackup
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getDiscardedBackup"
getDiskMapping
Method : getDiskMapping
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackups - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getDiskMapping"
getDiskPool
Method : getDiskPool
Audit log type : Data access
Permissions : backupdr.managementServers.viewStorage - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getDiskPool"
getDiskPoolFromAppliance
Method : getDiskPoolFromAppliance
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getDiskPoolFromAppliance"
getDynamicJsonForPoolManage
Method : getDynamicJsonForPoolManage
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageStorage - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getDynamicJsonForPoolManage"
getDynamicProtection
Method : getDynamicProtection
Audit log type : Data access
Permissions : backupdr.managementServers.getDynamicProtection - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getDynamicProtection"
getEvent
Method : getEvent
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getEvent"
getExportStatusDetails
Method : getExportStatusDetails
Audit log type : Data access
Permissions : backupdr.managementServers.viewReports - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getExportStatusDetails"
getGCERegions
Method : getGCERegions
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getGCERegions"
getGCPProjects
Method : getGCPProjects
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getGCPProjects"
getGCPProjectsByProfile
Method : getGCPProjectsByProfile
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getGCPProjectsByProfile"
getHost
Method : getHost
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getHost"
getHostAvailableConnector
Method : getHostAvailableConnector
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getHostAvailableConnector"
getHostConnector
Method : getHostConnector
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getHostConnector"
getHostDatastores
Method : getHostDatastores
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getHostDatastores"
getHostDetails
Method : getHostDetails
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getHostDetails"
getInstanceInclusionRule
Method : getInstanceInclusionRule
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getInstanceInclusionRule"
getInstanceMemberRuleMembers
Method : getInstanceMemberRuleMembers
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getInstanceMemberRuleMembers"
getIscsiTestResults
Method : getIscsiTestResults
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getIscsiTestResults"
getJob
Method : getJob
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getJob"
getLocalAppliance
Method : getLocalAppliance
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getLocalAppliance"
getLogicalGroup
Method : getLogicalGroup
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getLogicalGroup"
getMSParameter
Method : getMSParameter
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getMSParameter"
getNfsOptions
Method : getNfsOptions
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getNfsOptions"
getNfsTestTaskStatus
Method : getNfsTestTaskStatus
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageHosts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getNfsTestTaskStatus"
getNotifications
Method : getNotifications
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getNotifications"
getNotificationsV2
Method : getNotificationsV2
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getNotificationsV2"
getParameter
Method : getParameter
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getParameter"
getPolicy
Method : getPolicy
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupPlans - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getPolicy"
getPreservedBackup
Method : getPreservedBackup
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getPreservedBackup"
getPreservedBackupHistory
Method : getPreservedBackupHistory
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getPreservedBackupHistory"
getProtectedESXINodeCount
Method : getProtectedESXINodeCount
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getProtectedESXINodeCount"
getReadMeForApplianceUpdate
Method : getReadMeForApplianceUpdate
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getReadMeForApplianceUpdate"
getReadMeForApplianceUpdateInstallationJob
Method : getReadMeForApplianceUpdateInstallationJob
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getReadMeForApplianceUpdateInstallationJob"
getRecommendedComplianceSettingsForOnTheFlyPolicy
Method : getRecommendedComplianceSettingsForOnTheFlyPolicy
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getRecommendedComplianceSettingsForOnTheFlyPolicy"
getRecommendedComplianceSettingsForPolicy
Method : getRecommendedComplianceSettingsForPolicy
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getRecommendedComplianceSettingsForPolicy"
getRecoveryPools
Method : getRecoveryPools
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getRecoveryPools"
getRegions
Method : getRegions
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getRegions"
getReportExportPrereq
Method : getReportExportPrereq
Audit log type : Data access
Permissions : backupdr.managementServers.viewReports - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getReportExportPrereq"
getSLAComplianceCompatibility
Method : getSLAComplianceCompatibility
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getSLAComplianceCompatibility"
getSessionInfo
Method : getSessionInfo
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getSessionInfo"
getSla
Method : getSla
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupPlans - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getSla"
getSlp
Method : getSlp
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupPlans - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getSlp"
getSlt
Method : getSlt
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupPlans - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getSlt"
getThirdPartyCertAll
Method : getThirdPartyCertAll
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getThirdPartyCertAll"
getUpdateLogs
Method : getUpdateLogs
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getUpdateLogs"
getVaultList
Method : getVaultList
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageStorage - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getVaultList"
getVaultPoolClusterApplicationsPerApplication
Method : getVaultPoolClusterApplicationsPerApplication
Audit log type : Data access
Permissions : backupdr.managementServers.viewStorage - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getVaultPoolClusterApplicationsPerApplication"
getVaultPoolClusterApplicationsPerCluster
Method : getVaultPoolClusterApplicationsPerCluster
Audit log type : Data access
Permissions : backupdr.managementServers.viewStorage - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getVaultPoolClusterApplicationsPerCluster"
getVaultPoolClusters
Method : getVaultPoolClusters
Audit log type : Data access
Permissions : backupdr.managementServers.viewStorage - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getVaultPoolClusters"
getVaultTaskStatus
Method : getVaultTaskStatus
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getVaultTaskStatus"
getVmMetadataDetails
Method : getVmMetadataDetails
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getVmMetadataDetails"
getVsphereHost
Method : getVsphereHost
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getVsphereHost"
getWarning
Method : getWarning
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="getWarning"
importOrForgetVaultPoolBackupsPerApplication
Method : importOrForgetVaultPoolBackupsPerApplication
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageSystem - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="importOrForgetVaultPoolBackupsPerApplication"
importOrForgetVaultPoolBackupsPerCluster
Method : importOrForgetVaultPoolBackupsPerCluster
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageSystem - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="importOrForgetVaultPoolBackupsPerCluster"
importTemplates
Method : importTemplates
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="importTemplates"
installApplianceUpdateNow
Method : installApplianceUpdateNow
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageSystem - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="installApplianceUpdateNow"
isApplianceUpgradeInProgress
Method : isApplianceUpgradeInProgress
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="isApplianceUpgradeInProgress"
isInMigrationMode
Method : isInMigrationMode
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="isInMigrationMode"
iscsiTestA
Method : iscsiTestA
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageHosts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="iscsiTestA"
jobHistoryArchive
Method : jobHistoryArchive
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="jobHistoryArchive"
joinAppliance
Method : joinAppliance
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="joinAppliance"
listApplianceUpdates
Method : listApplianceUpdates
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listApplianceUpdates"
listApplianceUpdatesInstallationjobs
Method : listApplianceUpdatesInstallationjobs
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listApplianceUpdatesInstallationjobs"
listAppliances
Method : listAppliances
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listAppliances"
listApplications
Method : listApplications
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listApplications"
listApplicationsFlatView
Method : listApplicationsFlatView
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listApplicationsFlatView"
listArchives
Method : listArchives
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listArchives"
listBackups
Method : listBackups
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listBackups"
listBwSchedule
Method : listBwSchedule
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listBwSchedule"
listCloudSupportedProfiles
Method : listCloudSupportedProfiles
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupPlans - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listCloudSupportedProfiles"
listCloudSupportedTemplates
Method : listCloudSupportedTemplates
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupPlans - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listCloudSupportedTemplates"
listClusters
Method : listClusters
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listClusters"
listCombinedJobs
Method : listCombinedJobs
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listCombinedJobs"
listConsistencyGroups
Method : listConsistencyGroups
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listConsistencyGroups"
listCredentials
Method : listCredentials
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listCredentials"
listDiskPools
Method : listDiskPools
Audit log type : Data access
Permissions : backupdr.managementServers.viewStorage - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listDiskPools"
listDiskPoolsFromAppliance
Method : listDiskPoolsFromAppliance
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listDiskPoolsFromAppliance"
listDiskTypes
Method : listDiskTypes
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listDiskTypes"
listDynamicProtections
Method : listDynamicProtections
Audit log type : Data access
Permissions : backupdr.managementServers.listDynamicProtection - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listDynamicProtections"
listEffectiveMembers
Method : listEffectiveMembers
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listEffectiveMembers"
listEffectiveOptionsForApp
Method : listEffectiveOptionsForApp
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupPlans - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listEffectiveOptionsForApp"
listEffectiveOptionsForSla
Method : listEffectiveOptionsForSla
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupPlans - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listEffectiveOptionsForSla"
listEvents
Method : listEvents
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listEvents"
listGcpVaultPool
Method : listGcpVaultPool
Audit log type : Data access
Permissions : backupdr.managementServers.viewStorage - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listGcpVaultPool"
listHosts
Method : listHosts
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listHosts"
listLogicalGroup
Method : listLogicalGroup
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listLogicalGroup"
listLogicalGroupMembers
Method : listLogicalGroupMembers
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listLogicalGroupMembers"
listOptionForApp
Method : listOptionForApp
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listOptionForApp"
listOptionForPolicy
Method : listOptionForPolicy
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupPlans - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listOptionForPolicy"
listOptionForSla
Method : listOptionForSla
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupPlans - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listOptionForSla"
listOptionsForAppType
Method : listOptionsForAppType
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listOptionsForAppType"
listOptionsForPolicyType
Method : listOptionsForPolicyType
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listOptionsForPolicyType"
listPolicies
Method : listPolicies
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupPlans - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listPolicies"
listProtectedDataAGM
Method : listProtectedDataAGM
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listProtectedDataAGM"
listProtectedDataAGMByAppliance
Method : listProtectedDataAGMByAppliance
Audit log type : Data access
Permissions : backupdr.managementServers.viewSystem - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listProtectedDataAGMByAppliance"
listSlas
Method : listSlas
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupPlans - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listSlas"
listSlps
Method : listSlps
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupPlans - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listSlps"
listSlts
Method : listSlts
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupPlans - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listSlts"
listVMVolumes
Method : listVMVolumes
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listVMVolumes"
listWorkFlows
Method : listWorkFlows
Audit log type : Data access
Permissions : backupdr.managementServers.viewWorkflows - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listWorkFlows"
listWorkflowsPerApp
Method : listWorkflowsPerApp
Audit log type : Data access
Permissions : backupdr.managementServers.viewWorkflows - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="listWorkflowsPerApp"
liveCloneBackup
Method : liveCloneBackup
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageLiveClones - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="liveCloneBackup"
lsConfiguredInterface
Method : lsConfiguredInterface
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="lsConfiguredInterface"
lsDns
Method : lsDns
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="lsDns"
lsEtcHosts
Method : lsEtcHosts
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="lsEtcHosts"
lsInterface
Method : lsInterface
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="lsInterface"
lsNetworkCapability
Method : lsNetworkCapability
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="lsNetworkCapability"
lsNtp
Method : lsNtp
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="lsNtp"
lsOutboundPolicy
Method : lsOutboundPolicy
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="lsOutboundPolicy"
migrate
Method : migrate
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageApplications - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="migrate"
migrateBackup
Method : migrateBackup
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageRestores - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="migrateBackup"
migrateRestoreMountBackup
Method : migrateRestoreMountBackup
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageMigrations - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="migrateRestoreMountBackup"
mkEtcHosts
Method : mkEtcHosts
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="mkEtcHosts"
modifyConsistencyGroupMember
Method : modifyConsistencyGroupMember
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageApplications - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="modifyConsistencyGroupMember"
modifyLogicalGroupMembers
Method : modifyLogicalGroupMembers
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageApplications - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="modifyLogicalGroupMembers"
mountBackup
Method : mountBackup
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageMounts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="mountBackup"
mountMigratePreflight
Method : mountMigratePreflight
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageMigrations - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="mountMigratePreflight"
operateWorkflow
Method : operateWorkflow
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageWorkflows - ADMIN_WRITE
backupdr.managementServers.runWorkflows - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="operateWorkflow"
recalcConsumedSize
Method : recalcConsumedSize
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackups - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="recalcConsumedSize"
registerCluster
Method : registerCluster
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageSystem - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="registerCluster"
replicateImage
Method : replicateImage
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackups - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="replicateImage"
replicateLog
Method : replicateLog
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackups - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="replicateLog"
restoreBackup
Method : restoreBackup
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageRestores - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="restoreBackup"
restorePreflight
Method : restorePreflight
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageRestores - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="restorePreflight"
revokeCertificate
Method : revokeCertificate
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageHosts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="revokeCertificate"
rmEtcHosts
Method : rmEtcHosts
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="rmEtcHosts"
runDynamicProtectionJob
Method : runDynamicProtectionJob
Audit log type : Admin activity
Permissions : backupdr.managementServers.assignBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="runDynamicProtectionJob"
setConfigParaMeter
Method : setConfigParaMeter
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="setConfigParaMeter"
setDynamicProtectionJobConfig
Method : setDynamicProtectionJobConfig
Audit log type : Admin activity
Permissions : backupdr.managementServers.assignBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="setDynamicProtectionJobConfig"
setSchedule
Method : setSchedule
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="setSchedule"
settableOptionMetadataForApp
Method : settableOptionMetadataForApp
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="settableOptionMetadataForApp"
settableOptionMetadataForPolicy
Method : settableOptionMetadataForPolicy
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="settableOptionMetadataForPolicy"
settableOptionMetadataForSla
Method : settableOptionMetadataForSla
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupPlans - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="settableOptionMetadataForSla"
showCustomSetting
Method : showCustomSetting
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="showCustomSetting"
showRoute
Method : showRoute
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="showRoute"
showTracePath
Method : showTracePath
Audit log type : Data access
Permissions : backupdr.managementServers.viewBackupServers - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="showTracePath"
stopAppliance
Method : stopAppliance
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="stopAppliance"
testConnection
Method : testConnection
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="testConnection"
testDns
Method : testDns
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="testDns"
testNfsAsync
Method : testNfsAsync
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageHosts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="testNfsAsync"
triggerExport
Method : triggerExport
Audit log type : Data access
Permissions : backupdr.managementServers.viewReports - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="triggerExport"
uninstallHostConnector
Method : uninstallHostConnector
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="uninstallHostConnector"
unmountBackup
Method : unmountBackup
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageMounts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="unmountBackup"
updateApplianceResourceWarning
Method : updateApplianceResourceWarning
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateApplianceResourceWarning"
updateApplication
Method : updateApplication
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageApplications - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateApplication"
updateBackup
Method : updateBackup
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageExpiration - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateBackup"
updateCloudVmMountOptionMetaData
Method : updateCloudVmMountOptionMetaData
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageMounts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateCloudVmMountOptionMetaData"
updateCloudVmRestoreOptionMetaData
Method : updateCloudVmRestoreOptionMetaData
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageMounts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateCloudVmRestoreOptionMetaData"
updateConsistencyGroup
Method : updateConsistencyGroup
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageApplications - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateConsistencyGroup"
updateCredential
Method : updateCredential
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageSystem - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateCredential"
updateDiskPool
Method : updateDiskPool
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageStorage - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateDiskPool"
updateDiskPoolFromAppliance
Method : updateDiskPoolFromAppliance
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateDiskPoolFromAppliance"
updateHost
Method : updateHost
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageHosts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateHost"
updateJob
Method : updateJob
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageJobs - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateJob"
updateLogicalGroup
Method : updateLogicalGroup
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageApplications - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateLogicalGroup"
updateLogicalGroupSla
Method : updateLogicalGroupSla
Audit log type : Admin activity
Permissions : backupdr.managementServers.assignBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateLogicalGroupSla"
updateMembershipRule
Method : updateMembershipRule
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageApplications - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateMembershipRule"
updateOptionForApp
Method : updateOptionForApp
Audit log type : Admin activity
Permissions : backupdr.managementServers.assignBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateOptionForApp"
updateOptionForPolicy
Method : updateOptionForPolicy
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateOptionForPolicy"
updateOptionForSla
Method : updateOptionForSla
Audit log type : Admin activity
Permissions : backupdr.managementServers.assignBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateOptionForSla"
updatePolicy
Method : updatePolicy
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updatePolicy"
updateSchedule
Method : updateSchedule
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageSystem - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateSchedule"
updateSla
Method : updateSla
Audit log type : Admin activity
Permissions : backupdr.managementServers.assignBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateSla"
updateSlp
Method : updateSlp
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateSlp"
updateSlt
Method : updateSlt
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateSlt"
updateWorkflow
Method : updateWorkflow
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageWorkflows - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="updateWorkflow"
upgradeHostConnector
Method : upgradeHostConnector
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageBackupServers - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="upgradeHostConnector"
uploadThirdPartyCert
Method : uploadThirdPartyCert
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageSystem - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="uploadThirdPartyCert"
validateCredential
Method : validateCredential
Audit log type : Admin activity
Permissions : backupdr.managementServers.assignBackupPlans - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="validateCredential"
validateHypervisorCredential
Method : validateHypervisorCredential
Audit log type : Data access
Permissions : backupdr.managementServers.access - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="validateHypervisorCredential"
vmAddNew
Method : vmAddNew
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageHosts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="vmAddNew"
vmDiscoveryWithoutCluster
Method : vmDiscoveryWithoutCluster
Audit log type : Admin activity
Permissions : backupdr.managementServers.manageHosts - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="vmDiscoveryWithoutCluster"
System events
System Event audit logs are generated by GCP systems, not
direct user action. For more information, see
System Event audit logs .
Method Name
Filter For This Event
Notes
google.internal.cloud.backupdr.v1internal.BackupDR.DeleteBackupInternal
protoPayload.methodName="google.internal.cloud.backupdr.v1internal.BackupDR.DeleteBackupInternal"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.cloud.backupdr.v1.BackupDR.FetchMsComplianceMetadata
google.cloud.backupdr.v1.BackupDR.FetchUsableBackupVaults
google.cloud.backupdr.v1.BackupDR.TestIamPermissions
google.cloud.location.Locations.GetLocation
google.cloud.location.Locations.ListLocations
google.longrunning.Operations.WaitOperation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
