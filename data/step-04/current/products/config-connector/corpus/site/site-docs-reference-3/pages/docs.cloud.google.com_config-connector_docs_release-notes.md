---
title: "Config Connector release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/release-notes
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/release-notes
  title: "Config Connector release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
Resources
Send feedback
Config Connector release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Config Connector. Check this page for
announcements about new or updated features, bug fixes, known issues, and
deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
March 10, 2026
Breaking
Config Connector version 1.144.0 was identified as a bad release. Do not use this version - upgrade directly to 1.145.0 or later.
Announcement
Config Connector version 1.146.0 is now available.
Feature
New Alpha Resources (Direct Reconciler):
ParameterManagerParameter
Manage Parameter Manager Parameters .
Feature
New Fields:
ContainerCluster
Added spec.controlPlaneEndpointsConfig.dnsEndpointConfig.enableK8sTokensViaDns field.
Change
Improvements:
ContainerCluster
Made spec.clusterAutoscaling.autoProvisioningDefaults.bootDiskKMSKeyRef mutable.
NetworkServicesWasmPlugin
Introduced identity and reference.
Added structured reporting diff to numerous direct controllers to enhance diff visibility.
Fixed
Bug Fixes:
SQLInstance
Added client-side default for RetainedBackups and RetentionUnit , and validated the edition field.
Added replicaConfiguration as an unmanageable field.
Controller now correctly defaults the field enablePrivatePathForGoogleCloudServices to false .
CertificateManagerDnsAuthorization
Sanitized Kubernetes labels to avoid 400 errors from invalid characters.
ConfigConnector Core
preview now performs an early exit when no resources are found to reconcile.
Fixed CRD field description for shared parent.
Fixed incorrect exit status in lint filter.
Updated mockgcp to improve compute regional resource mocks and defaults.
February 22, 2026
Announcement
Config Connector version 1.145.0 is now available.
Feature
New Beta Resources (Direct Reconciler):
ComputeSecurityPolicy
Manage Google Cloud Armor security policies.
MemorystoreInstance
Manage Memorystore for Valkey Instances .
Feature
New Fields:
ContainerCluster
Added spec.clusterAutoscaling.defaultComputeClassConfig field.
RunJob
Added spec.template.template.volumes.nfs field to support NFS backed Volumes.
Added spec.template.template.volumes.gcs field to support GCS backed Volumes.
SQLInstance
Added spec.settings.failoverDrReplicaRef field to support designating CloudSQL Enterprise Plus DR Replicas.
Feature
New features:
Added the preview command to the config-connector CLI. The preview command has been removed from the experimental kompanion tool.
Change
Added support for structured diff reporting to the following direct controllers to improve logging and debugging:
ApigeeEnvgroup
ApigeeInstance
AssetFeed
AssetSavedQuery
BackupVaultIdentity
BigtableLogicalView
CloudDeployDeliveryPipeline
ColabRuntime
RedisCluster
SpannerBackupSchedule
SpannerInstance
SpannerInstanceConfig
TaskQueue
WorkstationConfig
Fixed
Bug Fixes:
DataformRepository
Fixed a bug where the serviceAccountRef field could not be updated.
SpannerBackupSchedule
Fixed an issue with invalid update masks by handling output-only fields.
January 30, 2026
Announcement
Config Connector version 1.144.0 is now available.
Feature
New Beta Resources (Direct Reconciler):
TagsLocationTagBinding
TagsLocationTagBinding is promoted to beta and now uses the direct reconciler by default.
Supports tagging of regional resources, including ArtifactRegistryRepository , CloudRun ( RunJob , RunService ), BigQueryDataset , BigQueryTable , and StorageBucket .
spec.location should be set to the region of the resource being tagged.
Fixed
Bug Fixes:
Fixed incorrect diffs in TagsLocationTagBinding caused by project number versus. project ID mismatches.
Change
Reconciliation Improvements:
TagsLocationTagBinding
Switched to direct reconciliation as the default reconciler.
January 27, 2026
Announcement
Config Connector version 1.134.4 is now available.
Fixed
Bug Fixes:
#6035 : Fixed an issue where managedFields metadata could be incorrectly attributed to the status subresource during spec updates, causing "Location must be set" errors.
Feature
#6065 : Enabled Vertical Pod Autoscaler (VPA) support. You can enable VPA for Config Connector components via ControllerResource and NamespacedControllerResource to automatically adjust resource requests.
January 23, 2026
Announcement
Config Connector version 1.143.0 is now available.
Feature
New Alpha Resources (Direct Reconciler):
ParameterManagerParameter
Feature
New Beta Resources (Direct Reconciler):
ArtifactRegistryRepository
LoggingLink
MemorystoreInstance
PrivateCACAPool
Feature
New Features:
Set GOMEMLIMIT for KCC workloads to improve memory management and stability.
Feature
New Fields:
AlloyDBInstance
Added spec.connectionPoolConfig field.
Added status.connectionPoolConfig field.
Change
Reconciliation Improvements:
TagsTagBinding
Added support for organizations in parentRef .
Added support for multiple targets in parentRef .
Resource References (refs.Ref) support added for the following resources to improve reference resolution:
BigQueryTable
BigQueryDataset
CloudRunService
CloudRunJob
ArtifactRegistryRepository
StorageBucket
Fixed
Bug Fixes:
Issue 6221 : ComputeBackendService can now correctly refer to clientTLSPolicy .
Issue 6156 : BigQueryTable now ignores int64 to int32 schema changes when configured.
Issue 6026 : Fixed identity parsing for TagsTagValue .
January 09, 2026
Announcement
Config Connector version 1.142.0 is now available.
Feature
New Beta Resources (Direct Reconciler):
AlloyDBBackup
AccessContextManagerAccessLevel
Feature
New Features:
IAM: Added support for iam.cnrm.cloud.google.com/disable-dependent-services annotation.
Added support for Cilium cluster-wide network policy.
Feature
New Fields:
AlloyDBInstance
Added spec.observabilityConfig and spec.queryInsightsConfig fields.
ContainerNodePool
Added spec.nodeConfig.enableNestedVirtualization field.
Change
Reconciliation Improvements:
Added support for direct reconciliation to more resources, with opt-in
behaviour. The API is unchanged. To use the direct reconciler, add the
alpha.cnrm.cloud.google.com/reconciler: direct annotation to the corresponding
Config Connector object. The following resources now have direct reconciliation
support:
TagsLocationTagBinding : Now supports direct reconciliation.
Fixed
Bug Fixes:
BatchJob : Fixed a bug where the resource could not be created.
FirewallPolicyRule : Fixed an issue with updating the resource.
IAMServiceAccountKey : Fixed an issue causing unnecessary re-reconciliation.
Fixed a bug where ComputeBackendService could not refer to clientTLSPolicy due to an invalid format.
Fixed a bug where interconnect attachments were not ignored.
Fixed a bug in the GitHub MCP server.
Fixed a bug in the private cluster endpoint for mockgcp .
December 19, 2025
Announcement
Config Connector version 1.141.0 is now available.
Feature
New Features:
Enabled Vertical Pod Autoscaler (VPA) support for Config Connector controllers.
Added verticalPodAutoscalerMode field to ConfigConnector and ConfigConnectorContext resources.
Feature
New Fields:
RunJob
Added spec.template.spec.containers[].port field.
DataplexTask
Replaced project with projectRef .
Replaced serviceAccount with serviceAccountRef .
Replaced kmsKey with kmsKeyRef .
Fixed
Bug Fixes:
Fixed various issues in observedState handling for resources with reference fields.
Fixed an issue where IAMPolicy and IAMPartialPolicy controllers would alphabetize the members field within the resource spec and write it back. This behavior can conflict with intent-based reconciliation from GitOps systems such as Config Sync, causing a loop of updates and potentially exhausting IAM read quotas.
December 15, 2025
Announcement
Config Connector version 1.140.2 is now available.
Fixed
Fixed a bug where the IAMPolicy and IAMPartialPolicy controllers would alphabetize the members field within the resource spec and write it back. This behavior can conflict with intent-based reconciliation from GitOps systems such as Config Sync, causing a loop of updates and potentially exhausting IAM read quotas. This issue affected versions 1.140.0 and has now been patched in version 1.140.2.
December 04, 2025
Announcement
Config Connector version 1.140.0 is now available.
Feature
New Beta Resources (Direct Reconciler):
CertificateManagerCertificateIssuanceConfig
Manage Certificate Manager certificate issuance configurations for automating certificate issuance.
Change
New Alpha Resources (Direct Reconciler):
AssuredWorkloadsWorkload
Manage Assured Workloads workloads to support compliance and security requirements.
ConfigDeliveryResourceBundle
Manage Config Delivery resource bundles for Config Sync.
Feature
New Fields:
AlloyDBCluster
Added spec.restoreContinuousBackupSource and spec.restoreBackupSource fields to support restoring from a backup.
BigQueryReservationAssignment
Added spec.jobType field.
FirestoreDatabase
Added spec.deleteProtectionState field.
FirestoreField
Added spec.ttlConfig field.
RunJob
Added spec.template.template.containers.dependsOn field.
Change
Reconciliation Improvements:
Integrated Multi-Cluster Leader Election for improved reliability in multi-cluster setups.
Fixed
Fixed an issue where BigQueryReservationAssignment was not exposing externalRef .
Fixed an issue with CertificateManagerDNSAuthorization API, Fuzzer and Mapper.
Fixed an issue with FirestoreDatabase defaulting logic.
November 20, 2025
Announcement
Config Connector version 1.139.0 is now available.
Change
New Alpha Resources (Direct Reconciler):
FirestoreField
Feature
New Features:
The controller type is now reported at the start and end of reconciliation.
Mockgcp now supports iap oauth brands and bigtable materializedview .
Change
Reconciliation Improvements:
IAM partial policy management
Fixed
Reduced the memory footprint of the recorder.
SQLInstance : Fixed an issue where empty maintenanceVersion patches were sent. The settings and maintenanceVersion fields are now unmanaged.
FirestoreDatabase : Fixed boolean value exports.
November 14, 2025
Announcement
Config Connector version 1.138.0 is now available.
Feature
New Beta Resources (Direct Reconciler):
BackupDRBackupVault
OrgPolicyCustomConstraint
Feature
New Alpha Resources (Direct Reconciler):
FirestoreBackupSchedule
FirestoreDocument
Change
Reconciliation Improvements:
Improved Normalization logic for OrgPolicy , RunJob , TagsTagBinding , and VertexAIIndex resources.
Fixed
Bug Fixes:
Fixed format validation issue in the DataflowFlexTemplateJob direct controller when the
spec.subnetworkRef.external field contains full URL.
Updated status.observedGeneration in ConfigConnector object.
October 16, 2025
Change
New Beta Resources (Direct Reconciler):
DocumentAIProcessorVersion
EssentialContactsContact
BigQueryBigLakeTable
BackupDRBackupPlan
Fixed
Bug Fixes:
Fixed an issue where ComputeBackendService backends were not sorted.
Fixed an issue where CloudFunctionsFunction runtime was not a supported value.
Fixed an issue with labels for BackupDRBackupPlan .
Fixed an issue with labels for RunJob .
Fixed a fuzzing issue for FirestoreField .
Fixed an issue with KMSCryptoKey import.
Fixed a flakiness issue in the MonitoringDashboard fuzzer.
Fixed a flakiness issue in tests.
Fixed an issue with bad labels in tests.
Fixed an issue with etag in direct reconciliation.
Change
New Alpha Resources (Direct Reconciler):
BigtableMaterializedView
MemorystoreInstance
Change
Reconciliation Improvements:
Enabled opt-in for IAM partial policy management.
Enabled server-side apply for KMS resources.
Improved reconciliation for BigtableLogicalView by using deep reflection.
Improved reconciliation for FirestoreDatabase with identity pattern and export support.
Improved reconciliation for RunJob with export support.
Unified ComputeTargetTCPProxy direct API and controller.
Feature
New Fields:
BigtableMaterializedView : Added spec.sourceTableRef and spec.definition .
BackupDRBackupPlan : Added spec.backupConfig.retentionPeriodDays and spec.backupConfig.backupWindow .
Announcement
Config Connector version 1.137.0 is now available.
October 07, 2025
Change
Reconciliation Improvements:
Introduced Stateful Reconciliation for Direct Controllers . With stateful reconciliation, the direct controller stores a hash of the last successfully applied .spec in the resource's .status . This provides a lightweight, GitOps-safe record when a user has modified the desired state of the resource.
Change
New Beta Resources (Direct Reconciler):
AssetFeed
BigQueryReservationAssignment
CloudDeployDeliveryPipeline
ComposerEnvironment
Fixed
Bug Fixes:
Added support for checking etag in spec for alpha resources.
Fixed an issue where CloudIdentityMembership roles comparison would fail.
Fixed a bug where the wrong GVK was reported in IAM controller.
Fixed a bug where errors were swallowed when reading a Secret.
Fixed an issue with LRO endTime in mockgcp.
Fixed a bug in the etag mapper.
Fixed a bug in the mapper generator for slice and single object map.
Fixed a bug in the mapper generator for OneOf if the input is not proto.Message.
Fixed an import for refs in the same package in controllerbuilder .
Feature
New Fields:
ComposerEnvironment
Added spec.storageConfig field.
Added spec.config.workloadsConfig.dagProcessor field.
Added spec.config.workloadsConfig.triggerer field.
Added spec.config.softwareConfig.webServerPluginsMode field.
Added spec.config.softwareConfig.cloudDataLineageIntegration field.
Announcement
Config Connector version 1.136.1 is now available.
September 24, 2025
Announcement
Config Connector version 1.134.1 is now available.
Fixed
Bug Fixes:
#5230 : Fixed an issue that could lead to premature certificate rotation by ensuring errors are not swallowed when reading a Secret.
#5231 : Add more verbose logging during certificate validation to assist with debugging.
September 22, 2025
Fixed
Bug Fixes:
PR#5009
Fix the nil pointer dereference error in AlloyDB direct controller
Announcement
Config Connector version 1.135.0 is now available.
Feature
New Fields:
AlloyDBCluster
Added spec.databaseVersion field
Change
New Beta Resources (Direct Reconciler):
AssetSavedQuery
PubSubSnapshot
Change
Modified Beta Reconciliation:
We migrated the following resources from the Terraform-based or DCL-based controller to the new Direct Controller.
VMWareEngineExternalAddress
September 03, 2025
Change
Improved reconciliation by migrating the following resources from the Terraform-based or DCL-based controller to the new direct controller. These resources are migrated automatically and you no longer need to apply the opt-in annotation to enable the direct controller:
CloudIdentityGroup
CloudIdentityMembership
Fixed
Bug Fixes:
ConfigConnectorContext :
PR#4995 : status.observedGeneration is now being set on the ConfigConnectorContext.
PR#4657 : Added spec.managerNamespace .
SQLInstance :
PR#4838 : Fixed bug in SQLInstance maintenanceVersion UPDATE operation
PR#4843 : Set status on acquisition for SQLInstance controller
PR#4857 : Support SQLInstance maintenanceVersion in CREATE operation
Change
New Fields:
ContainerCluster : DNS endpoint is supported in ContainerCluster.
Announcement
Config Connector version 1.134.0 is now available.
July 30, 2025
Feature
New Beta Resources (Direct Reconciler):
APIGatewayAPI
AppHubApplication
StorageAnywhereCache
Change
New Alpha Resources (Direct Reconciler):
BigtableLogicalView
Change
Reconciliation Improvements
Added support for direct reconciliation to more resources, with opt-in behaviour. The API is backward compatible. The following resources now have direct reconciliation support
BigQueryTable
Use the alpha.cnrm.cloud.google.com/reconciler: direct annotation on the BigQueryTable CR object to opt-in the direct controller.
The direct controller also supports adding BigQueryDataPolicies directly to BigQueryTable columns within spec.schema .
Fixed
PR#4808
filtered out Kubernetes labels that are invalid for Google Cloud in the
ComputeForwardingRule direct controller, ensuring backward compatibility
after migrating to the direct controller.
Announcement
Config Connector version 1.133.0 is now available.
July 14, 2025
Announcement
Config Connector version 1.132.1 is now available.
Change
Reconciliation Improvements:
SpannerInstance
You can opt-in the direct controller by adding the
alpha.cnrm.cloud.google.com/reconciler: direct annotation to the
SpannerInstance resource`.
Direct controller is opt-in if using the following fields:
spec.labels
spec.defaultBackupScheduleType
spec.edition
spec.autoscalingConfig
June 10, 2025
Change
Reconciliation Improvements:
BigtableAppProfile
You can opt-in the direct controller by adding the
alpha.cnrm.cloud.google.com/reconciler: direct annotation to the
BigtableAppProfile resource.
Added support for spec.dataBoostIsolationReadOnly field for resources
reconciled by the direct controller.
CloudIdentityGroup
and
CloudIdentityMembership
You can opt-in the direct controller by adding the
alpha.cnrm.cloud.google.com/reconciler: direct annotation to the
CloudIdentityGroup and CloudIdentityMembership resources.
With direct reconciliation, creating new resources will no longer write
back the service-generated ID to spec.resourceID . To acquire a
resource, you can find its resourceID from the last part of
status.externalRef field, or via gcloud command or Cloud Console. The
spec.resourceID field is used for acquisition only, leave the field
unset when creating a new resource.
Feature
Storage Bucket
Removed immutability constraint on spec.location and spec.customPlacementConfig.dataLocations fields. To learn more, see Relocate buckets .
Change
New Alpha Resources (Direct Reconciler):
OrgPolicyPolicy
OrgPolicyCustomConstraint
SpeechRecognizer
StorageAnywhereCache
Feature
New Fields:
SpannerInstance
For opt-in direct controller,
Added spec.labels field.
Added spec.defaultBackupScheduleType field.
SecretManagerSecret
For opt-in direct controller,
Added spec.labels field.
Announcement
Config Connector version 1.132.0 is now available.
Feature
New Beta Resources (Direct Reconciler):
SpeechCustomClass
SpeechPhraseSet
SpeechRecognizer
VertexAINotebooksInstance
VertexAIMetadataStore
May 01, 2025
Feature
New Beta resources (direct reconciler)
IAPSettings
Change
New Alpha resources (direct reconciler)
ComputeNetworkAttachment
ComputeNetworkEdgeSecurityService
DataplexEntryGroup
DataplexEntryType
DataplexTask
DataplexZone
DatastreamRoute
DocumentAIVersion
GKEBackupBackup
GKEBackupRestore
PubSubSnapshot
SpeechCustomClass
VMwareEngineExternalAddress
MetastoreService
MetastoreFederation
MetastoreBackup
APIQuotaPreference
APIQuotaAdjusterSettings
EventarcGoogleChannelConfig
EventarcChannel
AssetSavedQuery
AssetFeed
EssentialContactsContact
DataCatalogEntryGroup
DataCatalogEntry
DataCatalogTagTemplate
DataCatalogTag
Announcement
Config Connector version 1.131.0 is now available.
Fixed
Fixed an issue : excessive compute.firewallPolicies.patchRule Logs triggered by Config Connector direct reconciliation.
April 07, 2025
Feature
New Fields
GKEHubFeatureMembership
Added spec.configmanagement.configSync.stopSyncing in version1.129.
SpannerInstance .
Added spec.defaultBackupScheduleType field.
Added spec.labels field
Feature
New Beta resources (direct reconciler)
ApigeeEndpointAttachment
ApigeeEnvgroupAttachment
ApigeeInstanceAttachment
ManagedKafkaTopic
SecureSourceManagerInstance
SecureSourceManagerRepository
Change
New Alpha resources (direct reconciler)
ApphubApplication
BackupDRManagementServer
BackupDRBackupVault
BackupDRBackupPlan
BackupDRBackupPlanAssociation
BatchJob
BigLakeTable
BigQueryReservation
CodeDeployDeliveryPipeline
DataplexLake
DatastreamPrivateConnection
DatastreamConnectionProfile
DocumentAIProcessor
GKEBackupBackupPlan
GKEBackupRestorePlan
NetAppBackupPolicy
NotebooksEnvironment
SpannerInstanceConfig
VertexAIFeaturestore
VMwareEnginePrivateCloud
VMwareEngineNetwork
VMwareEngineNetworkPeering
VMwareEngineNetworkPolicy
WorkflowExecution
Announcement
Config Connector version 1.130.2 is now available.
Change
Reconciliation Improvements
Added support for direct reconciliation to more resources, with opt-in behaviour. The API is backward compatible. To use the direct reconciler, add the alpha.cnrm.cloud.google.com/reconciler: direct annotation to the corresponding Config Connector object. The following resources now have direct reconciliation support (and we list some of the issues that this fixes):
SpannerInstance
You can use spec.edition field to optimize your enterprise edition type
You can use spec.autoscalingConfig to automate the scaling instead of manually configure spec.processingUnit or spec. numNodes .
You can use the defaultBackupScheduleType now.
Behavior Change If you use the SpannerInstance Kubernetes metadata.labels to configure your GCP labels, please change them to use the spec.labels field instead.
February 28, 2025
Change
New Alpha resources (direct reconciler)
ManagedKafkaTopic
ApigeeInstanceAttachment
ApigeeEnvgroupAttachment
ApigeeEndpointAttachment
Change
Reconciliation Improvements
SQLInstance
All SQLInstance types are now reconciled using the new direct controller instead of the legacy Terraform-based controller. The previous "opt-in" annotation ( document reference ) no longer applies. Users no longer need to apply the "opt-in" annotation to SQLInstance resources to enable the direct controller. Regardless of the presence (or absence) of an opt-in annotation on SQLInstance resources, the direct reconciler will be used.
This change enables all SQLInstance resources to switch from edition ENTERPRISE to ENTERPRISE_PLUS and fixes the bug that prevented SQL Instance upgrade .
Announcement
Config Connector version 1.129.2 is now available.
Feature
New Beta resources (direct reconciler)
ManagedKafkaCluster
ApigeeInstance
AlloydbInstance
February 04, 2025
Change
Reconciliation Improvements
We have added support for direct reconciliation to more resources, with opt-in behaviour. The API is unchanged. To use the direct reconciler, add the alpha.cnrm.cloud.google.com/reconciler: direct annotation to the corresponding Config Connector object. The following resources now have direct reconciliation support:
AlloyDBInstance
SpannerInstance
Change
New Alpha resources (direct reconciler)
IAPSettings
Customize the Identity-Aware Proxy (IAP) settings for applications and services running on Google Cloud Platform.
SecureSourceManangerInstance
SecureSourceManangerRepository
Announcement
Config Connector version 1.128.0 is now available.
Fixed
DataformRepository fields validation error.
Fixed the incorrect format validation for the following fields:
spec.gitRemoteSettings.authenticationTokenSecretVersionRef
spec.gitRemoteSettings.sshAuthenticationConfig.userPrivateKeySecretVersionRef
spec.npmrcEnvironmentVariablesSecretVersionRef
Feature
New Beta resources (direct reconciler)
ApigeeEnvgroup
Define environment groups to specify the hostnames for routing traffic to Apigee environments.
KMSAutokeyconfig
Manage the KMS auto key which simplifies the CMEKs provisioning and assignment.
Feature
New Fields
SpannerInstance
You need to use the alpha.cnrm.cloud.google.com/reconciler: direct annotation on SpannerInstance resource to opt-in these features.
spec.autoscalingConfig
spec.edition
December 23, 2024
Change
SecretManagerSecretVersion Reconciliation Improvements
You can use the alpha.cnrm.cloud.google.com/reconciler: direct annotation on the object to opt-in the direct controller, which gives the following improvements:
Resolved update stalling caused by DependencyNotReady errors.
Fixed the friction in spec.enabled that enabling or disabling a secret version does not always take effect in GCP.
API Behavior Change The service generated ID is changed from spec.resourceID to status.version with status.externalRef (new field) to guardrail the identity.
Fixed
Dataflowflextemplatejob subnetwork validation error.
Error message should match regions/REGION/subnetworks/SUBNETWORK
Feature
New Fields
BigQueryDataTransferConfig
Added spec.scheduleOptionsV2 to customize the different types of data transfer schedule.
Added status.observedState.error with detailed information about reason of the latest config failure.
GkeHubFeatureMembership
Added spec.configmanagement.management to enable Config Sync Auto Upgrade. This is an opt-in feature and you need to turn on the alpha.cnrm.cloud.google.com/reconciler: direct annotation on the object.
Announcement
Config Connector version 1.127.0 is now available.
Feature
New Beta resources (direct reconciler)
BigQueryAnalyticsHubListing
FirestoreDatabase
WorkstationConfig
Workstation
Change
SecretManagerSecret Reconciliation Improvements
You can use the alpha.cnrm.cloud.google.com/reconciler: direct annotation on the object to opt-in the direct controller, which gives the following improvements:
Enhanced spec.rotation.nextRotationTime to use a fixed datetime value to avoid relative now() friction.
Fixed the spec.replication.auto immutable issue
Added the in-use version aliases in status.observedState.versionAliases
Resolved update stalling issues.
Clarify the TTL use. See the problems and share your use in GitHub issue #3395
December 10, 2024
Announcement
Config Connector version 1.126.0 is now available.
Feature
Use BigQueryConnectionConnection to provide the IAM Service Account
IAMPolicyMember
Added spec.memberFrom.bigQueryConnectionConnectionRef
See an example on IAMPolicyMember use BigqueryConectionConnection "cloudSQL"
IAMPartialPolicy
Added spec.memberFrom.bigQueryConnectionConnectionRef .
Announcement
Config Connector system management CRDs ControllerReconciler and NamespacedControllerReconciler are promoted to Beta. See how to configure the Controller manager rate limit .
Feature
New Beta resources (direct reconciler)
BigQueryTransferConfig
Manage the metadata needed to perform a BigQuery data transfer.
KMSKeyHandle
Manage the provisioning of a CryptoKey.
Change
New Alpha Resources
Add new resource WorkstationConfig
November 13, 2024
Announcement
Config Connector version 1.125.0 is now available.
Feature
New Beta resources (direct reconciler)
BigQueryConnectionConnection
Manage connections to connect to Google services and external data sources
BigQueryAnalyticsHubDataExchange
Manage data exchange to enable self-service data sharing
PrivilegedAccessManagerEntitlement
Manage entitlements to grant for projects, folders, and organizations
WorkstationCluster
Manage workstation cluster to define a group of workstations in a particular region and the VPC network they're attached to.
Feature
Added cluster mode to manage the rate-limit for the Config Connector requests
You can set the rate-limit for the reconciling requests to the kube-apiserver in Cluster and Namespace mode.
Configure NamespacedControllerReconciler (Alpha) for namespace mode. This is added since 1.119
Configure ControllerReconciler (Alpha) for cluster mode. The ControllerReconciler shows an example.
Change
SQLInstance Reconciliation Improvements
You can use the alpha.cnrm.cloud.google.com/reconciler: direct annotation on the SQLInstance CR object to opt-in the direct controller.
The direct reconciler contains 2 fix and improvement:
Fix the upgrade and downgrade issue between ENTERPRISE and ENTERPRISE_PLUS.
Supports creating from clone functionality via spec. cloneSource
Migrated the SQLInstance from the Terraform-based or DCL-based controller to the new Direct Controller to enhance the reliability and performance. The CRD is unchanged.
Change
ComputeFirewallPolicyRule Reconciliation Improvements
You can use the alpha.cnrm.cloud.google.com/reconciler: direct annotation on the ComputeFirewallPolicyRule CR object to opt-in the direct controller, which fixes the targetResources error "required value priority could not be found".
Migrated this resource from the Terraform-based controller to the new Direct Controller to enhance the reliability and performance. The resource CRD is unchanged.
Change
AlloyDBInstance
Added spec.networkConfig.enableOutboundPublicIp field.
Added status.outboundPublicIpAddresses field.
Fixed
Issue 2973 kubelet_config has insecure_kubelet_readonly_port_enabled: true set even if not configured in the ContainerNodePool object.
Fixed
Issue 3007 ComputeBackendService cannot refer clientTLSPolicy due to invalid format
October 16, 2024
Change
CertificateManagerDNSAuthorization
Add the spec.Location field.
Change
ComputeForwardingRule
Added spec.target.googleApisBundle field (allowed values are all-apis or vpc-sc ). Note, when configuring this field, the resource will use direct reconciliation.
Change
CertificateManagerDNSAuthorization is migrated from the Terraform-based to the new Direct controller to enhance reliability and performance. The resource CRD is unchanged.
Announcement
Config Connector version 1.124.0 is now available.
Change
RedisCluster is promoted from alpha to beta (Direct Reconciler).
Change
New Alpha Resources (Direct Reconciler)
PrivilegedAccessManagerEntitlement
BigQueryAnalyticsHubDataExchange
Announcement
The direct resource development guide is now available for contributors
To improve the Config Connector resource development process, we have a new development guide to contributing resources to Config Connector with the direct reconciliation process. This new approach makes contributing more reliable and consistent with Kubernetes development practices. For more information, read the new Direct resource development guide .
September 23, 2024
Announcement
Config Connector version 1.123.1 is now available.
Change
BigQueryConnectionConnection (v1alpha1) now uses direct reconciliation.
Change
BigQueryDataTransferConfig (v1alpha1) now uses direct reconciliation.
Breaking
If you use the CloudIdentityGroup , CloudBuildTrigger and FirestoreIndex resources, do not use version 1.123.0, as it contains regression issues for these resources due to the state-into-spec setting.
Change
DataformRepository is promoted from alpha to beta.
Fixed
Config Connector switches between the Direct and TF-based reconcilers depending on the SQLInstances objects' use of the spec.cloneSource field
Announcement
Starting from this version, all new CustomResources (CRs) have the cnrm.cloud.google.com/state-into-spec annotation field default to absent . For more information about this behavior, see the spec fields documentation . The behavior of existing CRs is not impacted by this change.
Announcement
You can use the alpha.cnrm.cloud.google.com/reconciler: direct annotation on DataflowFlexTemplateJob resource to opt-in
the Direct Cloud Reconciler, which provides an advanced status update solution for some timeout issues.
Change
Added FirestoreDatabase (v1alpha1). This uses direct reconciliation.
September 11, 2024
Announcement
Config Connector version 1.122.0 is now available.
Change
RunJob
Add the spec.template.template.volumes[].cloudSqlInstance field to configure Cloud SQL instance.
Change
ContainerCluster
The spec.nodeConfig.taint can be updated in place in lieu of destroying and recreating the object.
Change
RedisCluster (Alpha) now uses direct reconciliation.
Change
Added RedisCluster (Alpha) resource for service Redis.
Change
SQLInstance now uses direct reconciliation.
Change
SQLInstance
Add the spec.cloneSource field to clone a SQLInstance.
Change
ContainerNodePool
The spec.nodeConfig.taint can be updated in place in lieu of destroying and recreating the object.
Announcement
The state-into-spec field now defaults to Absent in all Config Controller clusters.
August 05, 2024
Announcement
Config Connector version 1.121.0 is now available.
Announcement
The state-into-spec field now defaults to Absent in any new Config Controller clusters.
Starting in version 1.122, this will be the default for all Config Controller clusters.
Starting in version 1.123, this will be the default for all Config Connector clusters.
Change
BigQueryTable
Added spec.requirePartitionFilter field. This release note was added on August 20.
Fixed
BigQueryConnection
Added status.observedState field to store the output-only fields which are previously mistakenly defined in spec .
Change
DataformRepository (Alpha) now uses direct reconciliation.
Fixed
BigtableInstance
When autoscaling is enabled ( spec.cluster[].autoscalingConfig. ), does not use numNodes ( spec.cluster[].numNodes=2 ) as that applies only to manual scaling.
July 09, 2024
Change
MonitoringDashboard
Added dashboardFilters support.
Added alertChart widgets.
Added collapsibleGroup widgets.
Added pieChart widgets.
Added sectionHeader widgets.
Added singleViewGroup widgets.
Added timeSeriesTable widgets.
Added blankView to scorecard widgets.
Added dataSets.targetAxis and y2Axis fields to xyChart widgets.
Added id field to all widgets.
Added prometheusQuery and outputFullDuration to timeSeriesQuery.
Added style fields to text widgets.
Added targetAxis field to thresholds.
Change
StorageBucket
Added spec.softDeletePolicy field.
Added status.observedState.softDeletePolicy field.
Change
AlloyDBInstance
Added networkConfig field to support Public-IP feature.
Change
IAM configuration can now be applied to PrivateCACAPool .
Change
CloudBuildWorkerPool is promoted from alpha to beta.
Announcement
Config Connector version 1.120.1 is now available.
Change
MonitoringAlertPolicy
Added spec.severity field.
Change
ComputeMangedSSLCertificate is promoted from alpha to beta.
Change
CloudIDSEndpoint is promoted from alpha to beta.
Change
You can configure the ConfigConnector operator to roll back to install the v1.119.0 controllers by specifying spec.version: 1.119.0 in the ConfigConnectorContext CR (namespaced mode).
June 18, 2024
Feature
Added options to customize resource reconciliation for ConfigConnector
Added a new ControllerReconciler CRD (v1alpha1). See example .
This feature lets you customize the client-side kube-apiserver request rate limit.
Change
Added ComputeServiceAttachment (v1beta1) resource for service compute
Added ComputeServiceAttachment as dependency of ComputeForwardingRule through spec.target.serviceAttachmentRef .
Fixed
Added three output-only fields for ContainerCluster
Added status.observedState.masterAuth.clusterCaCertificate
Added status.observedState.privateClusterConfig.privateEndpoint
Added status.observedState.privateClusterConfig.publicEndpoint
Feature
The Direct Controller is now the default reconciler
Initialize the Direct Controller registration
Set the default reconciler to Direct Controller if the ConfigConnector CRD does not have cnrm.cloud.google.com/tf2crd: "true" or cnrm.cloud.google.com/dcl2crd: "true" label.
Change
Added CloudBuildWorkerPool (v1alpha1) resource for service cloudbuild
Announcement
Config Connector version 1.119.0 is now available.
Change
Added MonitoringDashboard (v1beta1) resource for service monitoring
June 04, 2024
Fixed
LoggingLogMetric
Change .spec.projectRef.kind from required to be optional.
If this field is given, it has to be .spec.projectRef.kind: Project .
Announcement
Config Connector version 1.118.2 is now available.
May 16, 2024
Announcement
Config Connector version 1.118.1 is now available.
Announcement
This release introduces the direct-reconciliation mechanism to reconcile Config Connector resources. The reconciliation makes API calls directly instead of going through a third-party library. Currently it only applies to LoggingLogMetric .
Fixed
SQLInstance avoids a bug causing repeated reconciliation when spec.settings.edition was configured with a non-empty value.
Change
Added support for ComputeNetworkFirewallPolicyRule resource (v1alpha1).
Change
LoggingLogMetric
Added spec.loggingLogBucketRef field to support bucket reference.
Change
LoggingLogMetric now uses direct reconciliation.
May 13, 2024
Announcement
Config Connector version 1.117.0 is now available.
Change
VertexAIEndpoint is promoted from alpha to beta.
Output fields are now in status.observedState .
The KMS key is now specified using a reference: spec.encryptionSpec.kmsKeyNameRef
The network is now specified using a reference: spec.networkRef
Change
ComputeNetwork
The spec.enableUlaInternalIpv6 field is no longer immutable - it can now
be changed without recreating the network.
Change
VertexAIDataSet is promoted from alpha to beta.
Output fields are now in status.observedState .
The KMS key is now specified using a reference: spec.encryptionSpec.kmsKeyNameRef
Announcement
This release improves our support for VertexAI.
Change
VertexAIIndex is promoted from alpha to beta.
Output fields are now in status.observedState .
Note that isCompleteOverwrite is currently not supported: it is not obviously compatible with declarative operation.
April 17, 2024
Announcement
Config Connector version 1.116.0 is now available.
Issue
An error treats merge as invalid value in cnrm.cloud.google.com/state-into-spec annotation in IAMPolicy , IAMPartialPolicy , IAMPolicyMember , and IAMAuditConfig resources. Upgrading Config Connector to 1.117 or newer versions can fix the issue.
Change
DNSRecordSet
Added spec.routingPolicy.geo.healthCheckedTargets field.
Added spec.routingPolicy.primaryBackup field.
Added spec.routingPolicy.wrr field.
Change
ContainerNodePool
Added spec.nodeConfig.linuxNodeConfig.cgroupMode field.
Announcement
This release includes enhanced support for DNSRecordSet, enabling advanced configurations such as geo-routing, primary/backup, and weighted round-robin load-balancing.
Change
EventArcTrigger
Added spec.destination.httpEndpoint field.
Added spec.destination.networkConfig field.
Change
ContainerCluster
Added spec.nodeConfig.linuxNodeConfig.cgroupMode field.
Change
LoggingLogBucket
Added spec.enableAnalytics field.
April 03, 2024
Feature
Improved support for AlloyDB, by adding new fields to AlloyDBCluster and AlloyDBInstance.
Announcement
Config Connector version 1.115.0 is now available.
Change
AlloyDBCluster
Added spec.clusterType field.
Added spec.deletionPolicy field.
Added spec.secondaryConfig field.
Change
AlloyDBInstance
Added spec.instanceTypeRef field.
March 28, 2024
Change
Initial support (alpha stability) for pausing reconciliation, by setting spec.actuationMode: Paused in the ConfigConnectorContext.
Change
AccessContextManagerServicePerimeterResource is promoted from alpha to beta
Change
GKEHubFeatureMembership
Added spec.policycontroller field.
Fixed
Fixed resource deletion of AlloyDBInstance and EdgeContainerNodePool when their "parent objects" no longer exist.
Change
Added support for APIKeysKey (v1alpha1) resource.
Change
ComputeTargetHttpsProxy
Added spec.certificateManagerCertificates field.
Change
SQLInstance and ComputeBackendService now have additional safeguards against populating plain-text secrets back into the object.
Change
BigQueryDataSet
Added access[].iamMember field.
Change
Initial support (alpha stability) for defaulting state-into-spec to absent (the recommended setting),
by setting spec.stateIntoSpec: Absent in the ConfigConnectorContext.
Change
DNSRecordSet
Added spec.routingPolicy field.
Announcement
Config Connector version 1.114.1 is now available.
Change
Added support for ComputeNetworkFirewallPolicyAssociation (v1beta1) resource.
Change
ComputeAddress
Added status.observedState.address field.
February 14, 2024
Announcement
Config Connector version 1.113.0 is now available.
Feature
Initial support for status.observedState in ContainerCluster,
ContainerNodePool and RedisInstance.
To encourage use of cnrm.cloud.google.com/state-into-spec: absent , you can now use status.observedState in ContainerCluster,
ContainerNodePool and RedisInstance. Some important resource information (such as the certificate for connecting to a GKE cluster) is currently only available in spec, and we recommend instead reading this resource information from observedState if available. More fields may be added to observedState in the future.
Feature
Added support for TagsLocationTagBinding (v1alpha1) resource.
Feature
Resource RunJob (CloudRun Job):
Added spec.template.vpcAccess.connectorRef field.
Feature
Added support for ComputeNetworkFirewallPolicy (v1beta1) resource.
December 06, 2023
Feature
Resource BigtableAppProfile(v1beta1):
Added spec.standardIsolation field.
Feature
Added support for EdgeContainerCluster (v1beta1) and EdgeContainerNodePool (v1beta1) resources.
Feature
Added support for EdgeNetworkNetwork (v1beta1) and EdgeNetworkSubnet (v1beta1) resources.
Fixed
Fixed the SecretKeyRef in the Go client. (Issue #598 .)
Feature
Added support for AlloyDBUser (v1beta1) resource.
Announcement
Config Connector version 1.112.0 is now available.
October 27, 2023
Feature
Added name validation for ValidatingWebhookConfigurationCustomization and MutatingWebhookConfigurationCustomization CRDs.
Feature
Added support for AlloyDBBackup (v1beta1) resource.
Feature
Resource ContainerNodePool(v1beta1):
Added spec.nodeConfig.fastSocket field.
Feature
Added validation for duplicate webhooks in spec.webhooks list of the customizable ControllerResource and NamespacedControllerResource CRDs.
Feature
Resource ContainerCluster(v1beta1):
Added spec.nodeConfig.fastSocket field.
Fixed
Fixed an reconciliation issue in ComputeManagedSSLCert resource. Issue #107 .
Feature
Resource ComputeTargetHTTPSProxy(v1beta1):
Added spec.serverTlsPolicyRef field.
Feature
Added support for AlloyDBInstance (v1beta1) resource.
Feature
Resource ComputeSubnetwork(v1beta1):
Added status.internalIpv6Prefix field.
Feature
Added support for ContainerAttachedCluster (v1beta1) resource.
Feature
Resource SecretManagerSecretVersion(v1beta1):
Added spec.isSecretDataBase64 field.
Fixed
Fixed issue of the retrieved maxWorkers in DataflowFlexTemplateJob resource.
Feature
Resource RunJob(v1beta1):
Added spec.template.template.vpcAccess.networkInterfaces field.
Feature
Added errors on invalid webhook names into status of ValidatingWebhookConfigurationCustomization and MutatingWebhookConfigurationCustomization custom resources.
Fixed
Fixed an issue in ComputeForwardingRule resource when used with PSC. Issue #763 .
Feature
Added support for AlloyDBCluster (v1beta1) resource.
Feature
Resource AlloyDBCluster(v1beta1):
Added spec.networkConfig field.
Announcement
Config Connector version 1.111.0 is now available.
Feature
Graduated ValidatingWebhookConfigurationCustomization , MutatingWebhookConfigurationCustomization , ControllerResource and NamespacedControllerResource CRDs to v1beta1.
Feature
Resource NetworkConnectivitySpoke(v1beta1):
Added spec.linkedVPCNetwork field.
Feature
Resource RunService(v1beta1):
Added spec.template.vpcAccess.networkInterfaces field.
September 29, 2023
Feature
Resource ContainerNodePool(v1beta1):
Added spec.nodeConfig.confidentialNodes field.
Feature
Added MutatingWebhookConfigurationCustomization and ValidatingWebhookConfigurationCustomization to support the customization on webhook timeouts.
Change
Resource StorageBucket(v1beta1):
spec.autoclass.enabled is now mutable.
Feature
Resource SecretManagerSecret(v1beta1):
Added spec.replication.auto field.
Feature
Resource DialogflowCXFlow(v1alpha1):
Added spec.eventHandlers.items.triggerFulfillment.conditionalCases field.
Added spec.eventHandlers.items.triggerFulfillment.setParameterActions field.
Added spec.eventHandlers.items.triggerFulfillment.messages.items.channel field.
Added spec.eventHandlers.items.triggerFulfillment.messages.items.conversationSuccess field.
Added spec.eventHandlers.items.triggerFulfillment.messages.items.liveAgentHandoff field.
Added spec.eventHandlers.items.triggerFulfillment.messages.items.outputAudioText field.
Added spec.eventHandlers.items.triggerFulfillment.messages.items.payload field.
Added spec.eventHandlers.items.triggerFulfillment.messages.items.playAudio field.
Added spec.eventHandlers.items.triggerFulfillment.messages.items.telephonyTransferCall field.
Added spec.transitionRoutes.items.triggerFulfillment.conditionalCases field.
Added spec.transitionRoutes.items.triggerFulfillment.setParameterActions field.
Added spec.transitionRoutes.items.triggerFulfillment.messages.items.channel field.
Added spec.transitionRoutes.items.triggerFulfillment.messages.items.conversationSuccess field.
Added spec.transitionRoutes.items.triggerFulfillment.messages.items.liveAgentHandoff field.
Added spec.transitionRoutes.items.triggerFulfillment.messages.items.outputAudioText field.
Added spec.transitionRoutes.items.triggerFulfillment.messages.items.payload field.
Added spec.transitionRoutes.items.triggerFulfillment.messages.items.playAudio field.
Added spec.transitionRoutes.items.triggerFulfillment.messages.items.telephonyTransferCall field.
Feature
Promoted CertificateManagerCertificate , CertificateManagerCertificateMap , CertificateManagerCertificateMapEntry and CertificateManagerDNSAuthorization from v1alpha1 to v1beta1 .
Feature
Resource ComputeInstanceTemplate(v1beta1):
Added spec.networkInterface.items.internalIpv6PrefixLength field.
Added spec.networkInterface.items.ipv6Address field.
Feature
Resource ContainerCluster(v1beta1):
Added spec.enableFqdnNetworkPolicy field.
Added spec.nodeConfig.confidentialNodes field.
Feature
Resource RunJob(v1beta1):
spec.template.template.volumes[].secret.items[].mode is now optional.
Feature
Resource VertexAIIndexEndpoint(v1alpha1):
Added spec.publicEndpointEnabled field.
Added status.publicEndpointDomainName field.
Feature
Resource DialogflowCXPage(v1alpha1):
Added spec.entryFulfillment.conditionalCases field.
Added spec.entryFulfillment.setParameterActions field.
Added spec.entryFulfillment.messages.items.channel field.
Added spec.entryFulfillment.messages.items.conversationSuccess field.
Added spec.entryFulfillment.messages.items.liveAgentHandoff field.
Added spec.entryFulfillment.messages.items.outputAudioText field.
Added spec.entryFulfillment.messages.items.payload field.
Added spec.entryFulfillment.messages.items.playAudio field.
Added spec.entryFulfillment.messages.items.telephonyTransferCall field.
Added spec.eventHandlers.items.triggerFulfillment.conditionalCases field.
Added spec.eventHandlers.items.triggerFulfillment.setParameterActions field.
Added spec.eventHandlers.items.triggerFulfillment.messages.items.channel field.
Added spec.eventHandlers.items.triggerFulfillment.messages.items.conversationSuccess field.
Added spec.eventHandlers.items.triggerFulfillment.messages.items.liveAgentHandoff field.
Added spec.eventHandlers.items.triggerFulfillment.messages.items.outputAudioText field.
Added spec.eventHandlers.items.triggerFulfillment.messages.items.payload field.
Added spec.eventHandlers.items.triggerFulfillment.messages.items.playAudio field.
Added spec.eventHandlers.items.triggerFulfillment.messages.items.telephonyTransferCall field.
Added spec.form.parameters.items.defaultValue field.
Added spec.form.parameters.items.fillBehavior.repromptEventHandlers field.
Added spec.form.parameters.items.fillBehavior.initialPromptFulfillment.conditionalCases field.
Added spec.form.parameters.items.fillBehavior.initialPromptFulfillment.setParameterActions field.
Added spec.form.parameters.items.fillBehavior.initialPromptFulfillment.messages.items.channel field.
Added spec.form.parameters.items.fillBehavior.initialPromptFulfillment.messages.items.conversationSuccess field.
Added spec.form.parameters.items.fillBehavior.initialPromptFulfillment.messages.items.liveAgentHandoff field.
Added spec.form.parameters.items.fillBehavior.initialPromptFulfillment.messages.items.outputAudioText field.
Added spec.form.parameters.items.fillBehavior.initialPromptFulfillment.messages.items.payload field.
Added spec.form.parameters.items.fillBehavior.initialPromptFulfillment.messages.items.playAudio field.
Added spec.form.parameters.items.fillBehavior.initialPromptFulfillment.messages.items.telephonyTransferCall field.
Added spec.transitionRoutes.items.triggerFulfillment.conditionalCases field.
Added spec.transitionRoutes.items.triggerFulfillment.setParameterActions field.
Added spec.transitionRoutes.items.triggerFulfillment.messages.items.channel field.
Added spec.transitionRoutes.items.triggerFulfillment.messages.items.conversationSuccess field.
Added spec.transitionRoutes.items.triggerFulfillment.messages.items.liveAgentHandoff field.
Added spec.transitionRoutes.items.triggerFulfillment.messages.items.outputAudioText field.
Added spec.transitionRoutes.items.triggerFulfillment.messages.items.payload field.
Added spec.transitionRoutes.items.triggerFulfillment.messages.items.playAudio field.
Added spec.transitionRoutes.items.triggerFulfillment.messages.items.telephonyTransferCall field.
Feature
Added value validation for resource requests and limits in the customizable ControllerResource and NamespacedControllerResource CRDs.
Feature
Resource SecretManagerSecretVersion(v1beta1):
Added spec.deletionPolicy field.
Feature
Resource ComputeInstance(v1beta1):
Added spec.networkInterface.items.internalIpv6PrefixLength field.
Added spec.networkInterface.items.ipv6Address field.
Feature
Promoted RunService from alpha stability to stable stability.
Renamed field spec.template.containerConcurrency to spec.template.maxInstanceRequestConcurrency .
Fixed the IAM support by removing the support of "IAM conditions" on this resource.
Removed field status.resourceGeneration .
Announcement
Config Connector version 1.110.0 is now available.
Feature
Resource BigQueryTable(v1beta1):
Added spec.tableConstraints field.
Added spec.materializedView.allowNonIncrementalDefinition field.
September 06, 2023
Fixed
Resource BigtableGCPolicy(v1beta1):
Fixed a bug that generates unexpected diff when mode and gcRules
are both specified.
Fixed a bug that generates unexpected diff when maxAge in
gcRules is specified with units larger than hours.
Feature
Resource CloudFunctions2Function(v1alpha1):
Added spec.kmsKeyName field.
Feature
Added support for ComputeRegionSSLPolicy (v1alpha1) resource.
Feature
Resource ArtifactRegistryRepository(v1beta1):
Added spec.cleanupPolicies field.
Added spec.cleanupPolicyDryRun field.
Feature
Added name validation for the customizable ControllerResource CRDs.
Feature
Resource ComputeAddress(v1beta1):
Added spec.ipv6EndpointType field.
Feature
Resource RunJob(v1beta1):
Added status.createTime field.
Added status.creator field.
Added status.deleteTime field.
Added status.expireTime field.
Added status.lastModifier field.
Added status.updateTime field.
Feature
Added support for CloudIOTDeviceRegistry (v1alpha1) resource.
Feature
Resource WorkstationsWorkstationCluster(v1alpha1):
Added spec.privateClusterConfig.allowedProjects field.
Feature
Resource SpannerDatabase(v1beta1):
Added spec.enableDropProtection field.
Feature
Resource BigQueryTable(v1beta1):
Added spec.maxStaleness field.
Added spec.externalDataConfiguration.fileSetSpecType field.
Feature
Resource ContainerCluster(v1beta1):
Added spec.allowNetAdmin field.
Added spec.enableK8sBetaApis field.
Added spec.enableMultiNetworking field.
Added spec.ipAllocationPolicy.additionalPodRangesConfig field.
Added spec.monitoringConfig.advancedDatapathObservabilityConfig field.
Added spec.nodeConfig.hostMaintenancePolicy field.
Feature
Resource ComputeBackendService(v1beta1):
Added spec.securityPolicy field.
Added spec.connectionTrackingPolicy.enableStrongAffinity field.
Feature
Resource AlloyDBCluster(v1alpha1):
Added spec.continuousBackupConfig field.
Added spec.restoreBackupSource field.
Added spec.restoreContinuousBackupSource field.
Added status.continuousBackupInfo field.
Feature
Resource MonitoringAlertPolicy(v1beta1):
Added spec.conditions.items.conditionPrometheusQueryLanguage field.
Feature
Resource PubSubSubscription(v1beta1):
Added spec.cloudStorageConfig field.
Added spec.pushConfig.noWrapper field.
Feature
Resource SQLInstance(v1beta1):
Added spec.settings.ipConfiguration.pscConfig field.
Added status.dnsName field.
Added status.pscServiceAttachmentLink field.
Fixed
Fixed spec.webhookConfig.secretRef field in CloudBuildTrigger.
Feature
Resource ComputeTargetPool(v1beta1):
Added spec.securityPolicyRef field.
Feature
Resource DNSManagedZone(v1beta1):
Removed spec.privateVisibilityConfig.required field.
Feature
Resource FirebaseAndroidApp(v1alpha1):
Added spec.apiKeyId field.
Feature
Resource HealthcareFHIRStore(v1alpha1):
Added spec.defaultSearchHandlingStrict field.
Added spec.notificationConfigs.items.sendPreviousResourceOnDelete field.
Added spec.streamConfigs.items.bigqueryDestination.schemaConfig.lastUpdatedPartitionConfig field.
Feature
Resource IAMWorkforcePoolProvider(v1beta1):
Added spec.oidc.clientSecret field.
Added spec.oidc.jwksJson field.
Added spec.oidc.webSsoConfig.additionalScopes field.
Added status.oidc field.
Change
Field spec.containers is no longer required in the customizable ControllerResource CRDs.
Announcement
Config Connector version 1.109.0 is now available.
Feature
Resource EventarcTrigger(v1beta1):
Added spec.eventDataContentType field.
Feature
Resource ComputeTargetInstance(v1beta1):
Added spec.securityPolicyRef field.
Feature
Added support for VertexAIIndexEndpoint (v1alpha1) resource.
Feature
Resource ContainerNodePool(v1beta1):
Added spec.networkConfig.additionalNodeNetworkConfigs field.
Added spec.networkConfig.additionalPodNetworkConfigs field.
Added spec.nodeConfig.hostMaintenancePolicy field.
Added spec.placementPolicy.policyNameRef field.
Feature
Resource ComputeSecurityPolicy(v1beta1):
Added spec.advancedOptionsConfig.userIpRequestHeaders field.
Feature
Resource ComputeInstanceTemplate(v1beta1):
Added spec.disk.items.provisionedIops field.
Added spec.networkInterface.items.ipv6AccessConfig.items.name field.
Added spec.scheduling.localSsdRecoveryTimeout field.
Feature
Resource CloudBuildTrigger(v1beta1):
Added spec.gitFileSource.bitbucketServerConfigRef field.
Added spec.sourceToBuild.bitbucketServerConfigRef field.
Feature
Resource ComputeInstance(v1beta1):
Added spec.networkInterface.items.ipv6AccessConfig.items.name field.
Added spec.scheduling.localSsdRecoveryTimeout field.
Feature
Resource SecretManagerSecret(v1beta1):
Added spec.annotations field.
Added spec.versionAliases field.
Feature
Resource FirebaseWebApp(v1alpha1):
Added spec.apiKeyId field.
August 21, 2023
Feature
Resource ComputeURLMap(v1beta1):
Added spec.pathMatcher.items.routeRules.items.matchRules.items.pathTemplateMatch field.
Added spec.pathMatcher.items.routeRules.items.routeAction.urlRewrite.pathTemplateRewrite field.
Feature
Resource ComputeTargetHTTPProxy(v1beta1):
Added spec.httpKeepAliveTimeoutSec field.
Feature
Resource HealthcareFHIRStore(v1alpha1):
Added spec.complexDataTypeReferenceParsing field.
Feature
Resource ContainerNodePool(v1beta1):
Added spec.nodeConfig.guestAccelerator.items.gpuDriverInstallationConfig field.
Added spec.nodeConfig.soleTenantConfig field.
Added spec.placementPolicy.tpuTopology field.
Feature
Resource BigQueryTable(v1beta1):
Added spec.externalDataConfiguration.jsonOptions field.
Added spec.externalDataConfiguration.metadataCacheMode field.
Added spec.externalDataConfiguration.objectMetadata field.
Added spec.externalDataConfiguration.parquetOptions field.
Feature
Resource CloudFunctions2Function(v1alpha1):
Added status.url field.
Feature
Resource ComputeTargetHTTPSProxy(v1beta1):
Added spec.httpKeepAliveTimeoutSec field.
Feature
Resource ComputeDisk(v1beta1):
Added spec.enableConfidentialCompute field.
Added spec.provisionedThroughput field.
Feature
Resource ComputeInstanceTemplate(v1beta1):
Added spec.networkInterface.items.networkAttachment field.
Feature
Added support for customization on cnrm-controller-manager pods resource requests/limits in namespaced mode.
Feature
Added support for customization on cnrm-unmanaged-detector pods resource requests/limits.
Feature
Resource RedisInstance(v1beta1):
Added status.maintenanceSchedule field.
Feature
Resource GKEBackupBackupPlan(v1alpha1):
Added status.state field.
Added status.stateReason field.
Feature
Resource BigtableTable(v1beta1):
Added spec.changeStreamRetention field.
Feature
Resource VertexAIFeaturestoreEntityTypeFeature(v1alpha1):
Added status.region field.
Feature
Resource ComputeExternalVPNGateway(v1beta1):
Added status.labelFingerprint field.
Feature
Added support for BigQueryReservationCapacityCommitment resource(v1alpha1).
Feature
Resource SQLInstance(v1beta1):
Added spec.settings.dataCacheConfig field.
Added spec.settings.edition field.
Feature
Resource CertificateManagerCertificate(v1alpha1):
Added spec.managed.issuanceConfig field.
Feature
Resource ComputeInstance(v1beta1):
Added spec.params field.
Added spec.bootDisk.initializeParams.resourceManagerTags field.
Feature
Resource DataformRepository(v1alpha1):
Added spec.workspaceCompilationOverrides field.
Feature
Resource ContainerCluster(v1beta1):
Added spec.nodeConfig.guestAccelerator.items.gpuDriverInstallationConfig field.
Added spec.nodeConfig.soleTenantConfig field.
Added spec.securityPostureConfig field.
Feature
Resource ComputeForwardingRule(v1beta1):
Added spec.noAutomateDnsZone field.
Feature
Resource VertexAIIndex(v1alpha1):
Added spec.metadata.config.shardSize field.
Feature
Resource RunJob(v1beta1):
Added spec.annotations field.
Added spec.template.annotations field.
Feature
Resource BigQueryDataset(v1beta1):
Added spec.storageBillingModel field.
Announcement
Config Connector version 1.108.0 is now available.
August 01, 2023
Feature
Resource DataflowFlexTemplateJob(v1beta1):
Added spec.additionalExperiments field.
Added spec.autoscalingAlgorithm field.
Added spec.enableStreamingEngine field.
Added spec.ipConfiguration field.
Added spec.kmsKeyNameRef field.
Added spec.launcherMachineType field.
Added spec.machineType field.
Added spec.maxWorkers field.
Added spec.networkRef field.
Added spec.numWorkers field.
Added spec.sdkContainerImage field.
Added spec.serviceAccountEmailRef field.
Added spec.stagingLocation field.
Added spec.subnetworkRef field.
Added spec.tempLocation field.
Added spec.transformNameMapping field.
Announcement
Config Connector version 1.107.0 is now available.
Feature
Added GOMEMLIMIT environment variable (default value is set to 110MiB) to the webhook container in cnrm-webhook-manager .
It sets a runtime memory limit for the webhook container, which helps in GC-related out-of-memory ("OOM") situations.
Change
Optimized HPA rule for cnrm-webhook-manager with targetCPUUtilizationPercentage adjusted from 90 to 70.
Feature
Resource BigQueryDataset(v1beta1):
Added spec.access.routine field.
Feature
Added support for customization on cnrm-webhook-manager pod replicas.
July 11, 2023
Feature
Resource MonitoringAlertPolicy(v1beta1):
Added spec.alertStrategy.notificationChannelStrategy field.
Added spec.conditions.items.conditionThreshold.forecastOptions field.
Feature
Resource ComputeImage(v1beta1):
Added spec.storageLocations field.
Feature
Resource SQLInstance(v1beta1):
Added spec.settings.advancedMachineFeatures field.
Feature
Added support for KMS key deletion when being orphaned.
Change
Disabled abandon-on-uninstall webhook.
Feature
Added support for customization on cnrm-webhook-manager , cnrm-controller-manager , cnrm-resource-stats-recorder and cnrm-deletiondefenderpods resource requests/limits.
Feature
Added support for RunJob resource.
Feature
Resource VPCAccessConnector(v1beta1):
Added status.selfLink field.
Feature
Resource DataflowFlexTemplateJob(v1beta1):
Added status.type field.
Announcement
Config Connector version 1.106.0 is now available.
Feature
Resource DatastreamStream(v1alpha1):
Added spec.sourceConfig.mysqlSourceConfig.maxConcurrentBackfillTasks field.
Feature
Resource GKEHubFeature(v1beta1):
Added spec.spec.fleetobservability field.
Feature
Resource StorageTransferJob(v1beta1):
Added spec.transferSpec.awsS3DataSource.path field.
Change
Optimized HPA rule for cnrm-webhook-manager with new memory targetAverageUtilization.
Feature
Resource ComputeDisk(v1beta1):
Added spec.guestOsFeatures field.
Added spec.licenses field.
May 26, 2023
Feature
Resource CertificateManagerCertificate(v1alpha1):
Added spec.location field.
Feature
Resource VertexAIEndpoint(v1alpha1):
Added spec.region field.
Feature
Resource ComputeRouterPeer(v1beta1):
Added spec.enableIpv6 field.
Added spec.ipv6NexthopAddress field.
Added spec.peerIpv6NexthopAddress field.
Feature
Resource ContainerCluster(v1beta1):
Added spec.addonsConfig.gcsFuseCsiDriverConfig field.
Announcement
Config Connector version 1.105.0 is now available.
Feature
Resource AlloyDBCluster(v1alpha1):
Added spec.encryptionConfig field.
Added spec.automatedBackupPolicy.encryptionConfig field.
Added status.encryptionInfo field.
Feature
Resource WorkflowsWorkflow(v1alpha1):
Added spec.cryptoKeyName field.
Feature
Resource ComputeBackendService(v1beta1):
Added spec.cdnPolicy.bypassCacheOnRequestHeaders field.
Feature
Resource ComputeNetworkPeering(v1beta1):
Added spec.stackType field.
Feature
Resource ComputeResourcePolicy(v1beta1):
Added spec.diskConsistencyGroupPolicy field.
Fixed
Fixed the issue that the SecretManagerSecretVersion resource stuck in DeleteFailed state when it's deleted after the referenced SecretManagerSecret is deleted.
Feature
Resource WorkstationsWorkstationCluster(v1alpha1):
Added status.resourceConditions field.
Restructured status.conditions field to be consistent with status.conditions field of any Config Connector kind.
Feature
Resource ComputeDisk(v1beta1):
Added spec.asyncPrimaryDisk.diskRef field.
Feature
Resource BigQueryJob(v1beta1):
Added spec.load.parquetOptions field.
Feature
Resource ComputeForwardingRule(v1beta1):
Added spec.allowPscGlobalAccess field.
Added spec.sourceIpRanges field.
Added status.baseForwardingRule field.
Feature
Resource CloudBuildTrigger(v1beta1):
Added spec.build.step.items.allowExitCodes field.
Added spec.build.step.items.allowFailure field.
Added spec.gitFileSource.repositoryRef field.
Added spec.sourceToBuild.repositoryRef field.
Feature
Resource AlloyDBBackup(v1alpha1):
Added spec.encryptionConfig field.
Added status.encryptionInfo field.
May 09, 2023
Announcement
Config Connector version 1.104.0 is now available.
Fixed
Config Connector CLI tool will now export cluster information for BigTableInstance .
Fixed
Resources with a reconcile period of 0 will no longer attempt to reconcile when pods are recreated ( #795 ).
Feature
Resource IAMWorkforcePoolProvider(v1beta1):
Added spec.oidc.webSsoConfig field.
Feature
Resource ComputeFirewallPolicyRule(v1beta1):
Added spec.match.destAddressGroups field.
Added spec.match.destFqdns field.
Added spec.match.destRegionCodes field.
Added spec.match.destThreatIntelligences field.
Added spec.match.srcAddressGroups field.
Added spec.match.srcFqdns field.
Added spec.match.srcRegionCodes field.
Added spec.match.srcThreatIntelligences field.
April 26, 2023
Announcement
Config Connector version 1.103.0 is now available.
Fixed
Fixed set blockOwnerDeletion failures for OwnerReferencesPermissionEnforcement enabled clusters ( #797 ).
Feature
Resource ComputeNetwork(v1beta1):
Added spec.networkFirewallPolicyEnforcementOrder field.
Feature
Added support for manual installation in GKE Autopilot.
Feature
Resource ArtifactRegistryRepository(v1beta1):
Added spec.dockerConfig field.
Feature
Added 136 v1alpha1 Google Cloud resource CRDs. See Install instructions for more information.
Feature
Resource ComputeInstanceTemplate(v1beta1):
Added status.selfLinkUnique field.
Fixed
Issue in resource PrivateCACAPool to support setting maxIssuerPathLength field as 0.
Feature
Resource ComputeVPNGateway(v1beta1):
Added spec.stackType field.
Feature
Resource BigQueryDataset(v1beta1):
Added spec.defaultCollation field.
Added spec.isCaseInsensitive field.
Change
Optimized ratelimiter for IAMPolicyMember controller to make sure new resources get reconciled timely.
Feature
Resource ComputeInstance(v1beta1):
Added spec.scratchDisk.items.size field.
Feature
Resource StorageTransferJob(v1beta1):
Added spec.transferSpec.objectConditions.lastModifiedBefore field.
Added spec.transferSpec.objectConditions.lastModifiedSince field.
Feature
Resource PrivateCACertificateAuthority(v1beta1):
Added spec.config.x509Config.caOptions.zeroMaxIssuerPathLength field.
Feature
Resource ContainerCluster(v1beta1):
Added spec.ipAllocationPolicy.podCidrOverprovisionConfig field.
Added spec.ipAllocationPolicy.stackType field.
Added spec.nodeConfig.advancedMachineFeatures field.
Added spec.nodeConfig.ephemeralStorageLocalSsdConfig field.
Added spec.nodeConfig.localNvmeSsdBlockConfig field.
Feature
Resource PrivateCACAPool(v1beta1):
Added spec.issuancePolicy.baselineValues.caOptions.zeroMaxIssuerPathLength field.
Feature
Resource ContainerNodePool(v1beta1):
Added spec.networkConfig.podCidrOverprovisionConfig field.
Added spec.nodeConfig.advancedMachineFeatures field.
Added spec.nodeConfig.ephemeralStorageLocalSsdConfig field.
Added spec.nodeConfig.localNvmeSsdBlockConfig field.
March 30, 2023
Fixed
Fixed a bug causing diff detection on reservedIpRange field in RedisInstance .
Feature
Added spec.kubeletConfig.podPidsLimit field to ContainerCluster.
Feature
Added spec.kubeletConfig.podPidsLimit field to ContainerNodePool.
Feature
Added scheduling.maintenanceInterval field to ComputeInstanceTemplate .
Feature
Added groupPlacementPolicy.maxDistance field to ComputeResourcePolicy .
Feature
Introduced configurable reconciliation interval feature.
Feature
Added mode , remoteRepositoryConfig , virtualRepositoryConfig fields to
ArtifactRegistryRepository
Feature
Added spec.rateLimitOptions.enforceOnKeyConfigs field to ComputeSecurityPolicy.
Feature
Added transferSpec.sinkAgentPoolName ,
transferSpec.sourceAgentPoolName fields to StorageTransferJob .
Announcement
Config Connector version 1.102.0 is now available.
Feature
Added scheduling.maintenanceInterval field to ComputeInstance .
Feature
Added support for IAMAccessBoundaryPolicy resource.
Feature
Added spec.instanceType field to SQLInstance.
Feature
Added deletionPolicy field to ComputeSharedVPCServiceProject .
Feature
Added protectConfig field to ContainerCluster .
Feature
Added spec.diskEncryptionKey.rsaEncryptedKey field to ComputeDisk.
Feature
Added spec.bitbucketServerTriggerConfig , spec.github.enterpriseConfigResourceNameRef fields to CloudBuildTrigger.
February 21, 2023
Fixed
Disabled fast dependency reconciliation during resource deletion.
Feature
Added spec.externalDataConfiguration.referenceFileSchemaUri field to BigQueryTable .
Feature
Added spec.edgeSecurityPolicyRef and spec.localityLbPolicies fields to ComputeBackendService .
Deprecated
Removed GameServicesRealm resource.
Feature
Added spec.memberFrom.serviceIdentityRef field to IAMPolicyMember ( #722 ).
Feature
Added spec.adaptiveProtectionConfig.autoDeployConfig field to ComputeSecurityPolicy .
Change
Graduated the following resources from alpha to stable : NetworkServicesGateway , NetworkServicesGRPCRoute , NetworkServicesHTTPRoute , NetworkServicesMesh , NetworkServicesTCPRoute , NetworkServicesTLSRoute .
Feature
Added spec.bindings.members.memberFrom.serviceIdentityRef field to IAMPartialPolicy ( #722 ).
Feature
Added spec.scheduling.maxRunDuration field to ComputeInstance .
Fixed
spec.settings.diskType is now immutable in SQLInstance .
Change
Adjusted default reconciliation interval for the following resources:
BigtableInstance : 3600 seconds (1 hour)
BigtableTable : 3600 seconds (1 hour)
ServiceUsage : 3600 seconds (1 hour)
ComputeSslCertificate : 0 seconds (This resource does not support any updates)
Feature
Added spec.shareSettings field to ComputeNodeGroup .
Announcement
Config Connector version 1.101.0 is now available.
Feature
Added spec.resourcePolicies and spec.scheduling.maxRunDuration fields to ComputeInstanceTemplate .
Feature
Added spec.gitFileSource.githubEnterpriseConfigRef , spec.repositoryEventConfig and spec.sourceToBuild.githubEnterpriseConfigRef fields to CloudBuildTrigger .
Fixed
Fixed a bug that could cause controllers to become stuck on an outdated CRD version.
Feature
Added spec.tcpTimeWaitTimeoutSec field to ComputeRouterNAT ( #692 ).
Feature
Added spec.ipConfiguration.enablePrivatePathForGoogleCloudServices field to SQLInstance .
January 25, 2023
Feature
Added support for TagsTagBinding resource. This resource has been auto-generated and is in alpha stability.
Feature
Added fields spec.disk.sourceImageEncryptionKey , spec.disk.sourceSnapshotRef , and spec.disk.sourceSnapshotEncryptionKey in ComputeInstanceTemplate .
Feature
Added support for ServiceIdentity resource ( #728 ).
Feature
Added support for IAMPolicy , IAMPartialPolicy and IAMPolicyMember in DNSManagedZone .
Feature
Added field spec.routerApplianceInstanceRef in ComputeRouterPeer .
Feature
Added fields spec.settings.deletionProtectionEnabled and status.instanceType in SQLInstance ( #748 ).
Feature
Added field spec.imagedEncryptionKey in ComputeImage .
Announcement
Config Connector version 1.100.0 is now available.
Feature
Added support for PubSubLiteReservation resource.
Feature
Added support for BigQueryRoutine resource. This resource has been auto-generated and is in alpha stability ( #739 ).
Fixed
Field spec.settings.sqlServerAuditConfig.bucketRef is no longer required in SQLInstance .
Feature
Added field status.generatedId in ComputeBackendService .
Feature
Extended event-driven reconciliation support to IAMPolicyMember .
Fixed
abandon-on-uninstall webhook will now ignore non-Config Connector CRDs ( #758 ).
Feature
Added field status.expireTime in ComputeSSLCertificate .
January 06, 2023
Feature
Added fields spec.networkConfig.enablePrivateNodes , spec.nodeConfig.loggingVariant , spec.nodeConfig.resourceLabels , spec.upgradeSettings.blueGreenSettings , spec.upgradeSettings.stategy in ContainerNodePool.
Change
Field spec.ipv6AccessType in ComputeSubnetwork has become mutable.
Feature
Added field spec.mesh.controlPlane in GKEHubFeatureMembership.
Feature
Added field spec.deletionPolicy in BigtableGCPolicy.
Change
Field spec.labels in CloudIdentityGroup has become mutable.
Feature
Supported the regional spec.defaultRouteAction.requestMirrorPolicy.backendServiceRef , spec.defaultRouteAction.weightedBackendServices.backendServiceRef for the regional ComputeURLMap resources.
Feature
Added support for DataCatalogPolicyTag resource. This resource has been auto-generated and is in alpha stability.
Feature
Added support for TagsTagKey resource. This resource has been auto-generated and is in alpha stability.
Feature
Added fields spec.clusterAutoscaling.autoProvisioningDefaults.management , spec.clusterAutoscaling.autoProvisioningDefaults.shieldedInstanceConfig spec.clusterAutoscaling.autoProvisioningDefaults.upgradeSettings , spec.gatewayApiConfig , spec.masterAuthorizedNetworksConfig.gcpPublicCidrsAccessEnabled , spec.nodeConfig.loggingVariant , spec.nodeConfig.resourceLabels , spec.nodePoolDefaults.nodeConfigDefaults.loggingVariant , spec.privateClusterConfig.privateEndpointSubnetworkRef in ContainerCluster.
Feature
Added field spec.skipAwaitRollout in OSConfigOSPolicyAssignment.
Announcement
Config Connector version 1.99.0 is now available.
Deprecated
Removed field spec.authorizationPolicyRef in NetworkServicesGateway (Alpha).
Feature
Added fields spec.privateIpAddressRef , spec.redundantInterfaceRef , spec.subnetworkRef in ComputeRouterInterface.
Feature
Extended faster reconciliation of resources with dependencies to support IAMPartialPolicy.
Feature
Added fields spec.configmanagement.oci and spec.mesh.controlPlane in GKEHubFeatureMembership.
Feature
Added fields spec.settings.connectorEnforcement , spec.settings.denyMaintenancePeriod , spec.settings.insightsConfig.queryPlansPerMinute in SQLInstance.
Feature
Added field spec.deletionProtection in BigtableTable.
Feature
Added field spec.privateVisibilityConfig.gkeClustersRef in DNSManagedZone.
Feature
Added field spec.autoclass in StorageBucket.
Feature
Added field spec.deletionPolicy in SQLDatabase.
Fixed
Fixed export error for IAMCustomRole in config-connector CLI with --resource-format=terraform .
Feature
Added support for TagsTagValue resource. This resource has been auto-generated and is in alpha stability.
Feature
Added field spec.cdnPolicy.cacheKeyPolicy.includeHttpHeaders in ComputeBackendService.
Feature
Added fields spec.recaptchaOptionsConfig , spec.rule.headerAction , spec.rule.preconfiguredWafConfig in ComputeSecurityPolicy.
December 13, 2022
Announcement
Config Connector version 1.98.0 is now available.
Feature
Added spec.build.step.script to CloudBuildTrigger .
Feature
Added spec.clusterAutoscaling.autoProvisioningDefaults.diskSize to ContainerCluster .
Feature
Added status.member to IAMServiceAccount .
Fixed
Added mutation support to spec.nodeConfig.tags in ContainerCluster .
Feature
Added spec.settings.timeZone to SQLInstance .
Feature
Added spec.maxTimeTravelHours to BigQueryDataset .
Fixed
Fixed spec.datapathProvider in ContainerCluster by making it immutable.
Fixed
Fixed spec.schemaSettings.encoding in PubSubTopic by making it immutable ( #698 ).
Feature
Added spec.sourceDiskRef and status.sourceDiskId to ComputeDisk .
Feature
Added spec.rules to ComputeRouterNAT .
Feature
Added support for DataCatalogTaxonomy resource. This resource has been auto-generated and is in alpha stability.
November 15, 2022
Feature
Added spec.compressionMode to ComputeBackendBucket .
Feature
Added spec.passwordPolicy to SQLUser .
Feature
Added spec.load.jsonExtension to BigQueryJob .
Feature
Added spec.cloudLoggingConfig to DNSManagedZone .
Announcement
Config Connector version 1.97.0 is now available.
Feature
Added support for DLPJobTrigger resource.
Feature
Added spec.managementConfig.fullManagementConfig to ConfigControllerInstance .
Feature
Added spec.maintenanceVersion and
status.availableMaintenanceVersions to SQLInstance .
Fixed
Moved SQLUser output-only field sqlServerUserDetails from
spec to status .
Feature
Added spec.customPlacementConfig to StorageBucket .
Feature
Added spec.persistenceConfig to RedisInstance .
Feature
Added spec.compressionMode to ComputeBackendService .
Feature
Added spec.gcRules to BigtableGCPolicy (Issues #624 , #542 , #482 , #345 , #300 ).
Feature
Added spec.config.dataprocMetricConfig , spec.config.gceClusterConfig.confidentialInstanceConfig , spec.config.gceClusterConfig.shieldedInstanceConfig , spec.config.masterConfig.diskConfig.localSsdInterface , spec.config.metastoreConfig.dataprocMetastoreServiceRef , spec.config.secondaryWorkerConfig.diskConfig.localSsdInterface , spec.config.securityConfig , spec.config.workerConfig.diskConfig.localSsdInterface and spec.virtualClusterConfig to DataprocCluster .
Feature
Added status.version to SecretManagerSecretVersion .
Feature
Added spec.notificationConfig to StorageTransferJob (Issue #303 ).
Feature
Added spec.externalDataConfiguration.avroOptions to BigQueryTable .
Feature
Added spec.nodeConfig.guestAccelerator[].gpuSharingConfig to
ContainerNodePool .
Feature
Added spec.advancedOptionsConfig.jsonCustomConfig to
ComputeSecurityPolicy .
Feature
Added spec.nodeConfig.guestAccelerator[].gpuSharingConfig and
spec.notificationConfig.pubsub.filter to ContainerCluster .
October 26, 2022
Announcement
Config Connector version 1.96.0 is now available.
Feature
Added costManagementConfig , nodePoolDefaults , serviceExternalIpsConfig to ContainerCluster .
Feature
Added storageTarget to BigTableInstance (Issue #729 ).
Feature
Added chainName to ComputeSnapshot .
Feature
Added support for DLPInspectTemplate resource.
Feature
Added visibleCoreCount to ComputeInstanceTemplate .
Feature
Added location and BITBUCKET support to CloudBuildTrigger (Issue #672 ).
Feature
Released new controller unmanaged-detector . Now if there is no Config Connector controller for a resource's namespace, that resource's status will show as "Unmanaged".
Feature
Extended faster reconciliation of resources with dependencies to support IAMAuditConfig and IAMPolicy .
Deprecated
Removed labels field from NetworkServicesGateway (alpha), NetworkServicesGRPCRoute (alpha), NetworkServicesHTTPRoute (alpha), NetworkServicesMesh (alpha), and NetworkServicesTCPRoute (alpha).
Fixed
Fixed issue with DataprocCluster where resource creation was failing with error message Update call failed: error applying desired state: infeasible update: ({true }) would require recreation (Issue #661 ).
Feature
Added forceDelete to MonitoringNotificationChannel .
Feature
Added locationPolicy , totalMaxNodeCount , totalMinNodeCount to ContainerNodePool .
Feature
Added channelRef and resourceConditions to EventarcTrigger .
Feature
Added snapshotProperties.chainName to ComputeResourcePolicies .
Feature
Added mesh to GKEHubFeatureMembership .
Feature
Added visibleCoreCount to ComputeInstance .
Feature
Added certificateMapRef to ComputeTargetSSLProxy .
September 27, 2022
Announcement
Config Connector version 1.95.0 is now available.
Change
Added enableServiceLinks: false to all the Pod configurations in Config Connector installation bundle. This is to fix the potential issue standard_init_linux.go:228: exec user process caused: argument list too long in Config Connector Pods.
Feature
Added support for DLPDeidentifyTemplate resource.
September 14, 2022
Deprecated
Removed spec.routers in NetworkServicsGRPCRoute (alpha) and NetworkServicsTCPRoute (alpha).
Change
Removed the validation on spec.cluster.numNodes > 0 in BigtableInstance (Issue #673 ).
Feature
Added spec.memberFrom.sqlInstanceRef field to IAMPolicyMember (Issue #689 ).
Feature
Added spec.bindings[].members[].memberFrom.sqlInstanceRef field to IAMPartialPolicy (Issue #689 ).
Feature
Added spec.nodeConfig.reservationAffinity to ContainerCluster .
Feature
Added spec.nodePoolAutoConfig to ContainerCluster .
Change
Added support for major version upgrades to SQLInstance ( spec.databaseVersion is now mutable).
Change
In NetworkServicesGateway (alpha), updated spec.authorizationPolicy to spec.authorizationPolicyRef , and updated spec.serverTlsPolicy to spec.serverTlsPolicyRef .
Deprecated
Removed spec.routers and spec.rules.action.originalDestination in NetworkServicsHTTPRoute (alpha).
Feature
Added spec.nodeConfig.reservationAffinity to ContainerNodePool .
Announcement
Config Connector version 1.94.0 is now available.
Feature
Extended support for value absent in state-into-spec annotation to most Config Connector resources.
Feature
Added spec.placement.managedCluster.config.gceClusterConfig.shieldedInstanceConfig to DataprocWorkflow .
September 01, 2022
Feature
Added spec.lifecycleRule.condition.matchesPrefix and spec.lifecycleRule.condition.matchesSuffix fields to StorageBucket .
Fixed
Fixed the mutability of spec.settings.collation in SQLInstance , as it is actually immutable.
Feature
Added spec.scheduling.instanceTerminationAction field to ComputeInstance .
Feature
Added spec.conditions.conditionMonitoringQueryLanguage.evaluationMissingData , and spec.conditions.conditionThreshold.evaluationMissingData fields to MonitoringAlertPolicy .
Feature
Added spec.settings.locationPreference.secondaryZone , spec.settings.passwordValidationPolicy , and spec.settings.sqlServerAuditConfig fields to SQLInstance .
Feature
Added spec.customerManagedKeyRef field to RedisInstance .
Feature
Added spec.binaryAuthorization.evaluationMode field in ContainerCluster .
Feature
Added spec.networkRef and spec.subnetworkRef fields to ComputeRegionNetworkEndpointGroup .
Feature
Added spec.versionRetentionPeriod field to SpannerDatabase .
Announcement
Config Connector version 1.93.0 is now available.
Feature
Added spec.scheduling.instanceTerminationAction field to ComputeInstanceTemplate .
Deprecated
Config Connector will deprecate GameServicesRealm on November 15, 2022 due to the deprecation of Google Cloud Game Servers on June 30, 2023. This means that Config Connector will stop reconciling GameServicesRealm resources. If you have any questions or require assistance, please contact Google Cloud Support .
Deprecated
Deprecated spec.enableBianryAuthorization field in ContainerCluster .
Feature
Added spec.binaryAuthorization , spec.clusterAutoscaling.autoProvisioningDefaults.bootDiskKMSKeyRef , and spec.meshCertificates fields to ContainerCluster .
Feature
Added spec.bigqueryConfig field to PubSubSubscription .
Feature
Added spec.certificateMapRef field to ComputeTargetHTTPSProxy .
Feature
Added spec.cdnPolicy.bypassCacheOnRequestHeaders and spec.cdnPolicy.requestCoalescing fields to ComputeBackendBucket .
Change
Increased webhook timeout to 10s.
Feature
Added support for "reconcile resource immediately once its dependency is ready" feature for CloudFunctionsFunction , EventarcTrigger , MonitoringUptimeCheckConfig , ServiceDirectoryEndpoint , and ServiceDirectoryService .
August 17, 2022
Change
Config Connector version 1.92.0 is now available.
Fixed
Fixed missing Kind field in Go Client ResourceRef struct.
Feature
Added support for "reconcile resource immediately once its dependency is ready" feature for CloudFunctionsFunction , EventarcTrigger , MonitoringUptimeCheckConfig , ServiceDirectoryEndpoint , ServiceDirectoryService
Feature
Added support for IAMWorkforcePoolProvider resource.
August 04, 2022
Fixed
Fixed all reference docs so that code samples now work when they're copy/pasted.
Fixed
Fixed issue where if ContainerCluster had the remove-default-node-pool directive set to true and there was a ContainerNodePool associated with it, after deleting the successfully reconciled ContainerNodePool , ContainerCluster would get stuck on the UpdateFailed state.
Feature
Added spec.configmanagement.policyController.monitoring and spec.configmanagement.policyController.mutationEnabled fields to GKEHubFeatureMembership .
Feature
Added support for the IAMWorkforcePool resource.
Announcement
Config Connector version 1.91.0 is now available.
Fixed
Fixed issue where SQLInstance could not reference KMSCryptoKey .
Feature
Added support for state-into-spec to StorageBucket .
July 27, 2022
Feature
Added status.pscConnectionId and status.pscConnectionStatus fields to ComputeForwardingRule .
Feature
Added support for state-into-spec: absent to MonitoringAlertPolicy .
Feature
Added spec.includeBuildLogs field to CloudBuildTrigger .
Feature
Added support for "reconcile resource immediately once its dependency is ready" feature for ComputeTargetPool , ComputeNetworkEndpointGroup , NetworkServicesGRPCRoute , NetworkServicesTLSRoute .
Feature
Added spec.maxPortsPerVm field to ComputeRouterNats .
Announcement
Config Connector version 1.90.0 is now available.
Feature
Added spec.monitoringConfig.managedPrometheus field to ContainerCluster .
Feature
Added spec.sslPolicyRef field to ComputeTargetHTTPSProxy .
Feature
Added spec.enableUlaInternalIpv6 and spec.internalIpv6Range fields to ComputeNetwork .
Fixed
Fixed issue where spec.layer7DdosDefenseConfig field in ComputeSecurityPolicy was not being reflected onto underlying resource.
Feature
Added spec.advancedOptionsConfig field to ComputeSecurityPolicy .
Feature
Added spec.externalDataConfiguration.connectionId field to BigQueryTable .
Feature
Added status.creationTime and status.managedZoneId fields to DNSManagedZones .
Feature
Added spec.schemaSettings field to PubSubTopic .
Feature
Added spec.egressPolicies.egressTo.externalResources field to AccessContextManagerServicePerimeters ,
Feature
Added spec.sqlServerUserDetails field to SQLUser .
Feature
Added spec.iap.oauth2ClientIdRef field to ComputeBackendService .
Feature
Added support for ServiceDirectoryEndpoint resource.
Feature
Added spec.cacheKeyPolicy.cdnPolicy.includeNamedCookies field to ComputeBackendService .
Feature
Added support for the DLPStoredInfoType resource.
June 21, 2022
Feature
Added spec.cdnPolicy.cacheKeyPolicy field to ComputeBackendBucket .
Feature
Added support for PubSubSchema resource.
Announcement
Config Connector version 1.89.0 is now available.
Fixed
Fixed bulk-export for MonitoringAlertPolicy .
June 09, 2022
Announcement
Config Connector version 1.88.0 is now available.
Feature
Added support for ServiceDirectoryNamespace and ServiceDirectoryService resources.
Feature
Added fields spec.maintenancePolicy and spec.maintenanceSchedule to MemcacheInstance resource.
June 01, 2022
Announcement
Config Connector version 1.87.0 is now available.
Feature
Added spec.enableDynamicPortAllocation field to ComputeRouterNAT .
Feature
Added spec.gateways field to NetworkServicesTCPRoute .
Feature
Added spec.settings.activeDirectoryConfig field to SQLInstance .
Feature
Added spec.maintenancePolicy.maintenanceExclusion[].exclusionOptions field to ContainerCluster .
Feature
Added spec.pscTargetService field to ComputeRegionNetworkEndpointGroup .
May 24, 2022
Fixed
Fixed issue where webhooks were unintentionally returning 500 errors when rejecting immutable field changes.
Feature
Added support for ComputeRegionNetworkEndpointGroup resource.
Feature
Added spec.serviceDirectoryRegistrations field to ComputeForwardingRule .
Announcement
Config Connector version 1.86.0 is now available.
May 19, 2022
Feature
Added support for PrivateCACertificate resource.
Feature
Added spec.secondaryIpRange field to RedisInstance .
Change
Changed spec.readReplicasMode in RedisInstance from immutable to optional.
Announcement
Config Connector version 1.85.0 is now available.
Change
Fixed spec.topics in SecretManagerSecret (Issue #655 ).
Feature
Added spec.subsetting field to ComputeBackendService .
Change
Fixed the reference configs for AccessContextManagerServicePerimeter .
May 10, 2022
Feature
Added spec.enableExactlyOnceDelivery field to PubSubSubscription .
Announcement
Config Connector version 1.84.0 is now available.
Breaking
Removed spec.gateways field from NetworkServicesTCPRoute (Alpha).
Feature
Added spec.rule.redirectOptions field to ComputeSecurityPolicy .
Breaking
Removed status.terminalCondition.domainMappingReason and status.terminalCondition.internalReason fields from RunService (Alpha).
Feature
Added spec.columnLayout.columns.widgets.logsPanel , spec.gridLayout.widgets.logsPanel , spec.mosaicLayout.tiles.widget.logsPanel , and spec.rowLayout.rows.widgets.logsPanel fields to MonitoringMonitorDashboard .
Feature
Added spec.approvalConfig field to CloudBuildTrigger .
Deprecated
Deprecated spec.rrdatas field in DNSRecordSet .
Feature
Added spec.rrdatasRefs field to DNSRecordSet .
Feature
Added cnrm.cloud.google.com/skip-wait-on-job-termination
directive to DataflowFlexTemplateJob and DataflowJob .
Change
Reduced reconciliation frequency of ConfigConnector object.
Feature
Added spec.addonsConfig.gkeBackupAgentConfig field to ContainerCluster .
Breaking
Removed spec.template.confidential field from RunService (Alpha).
Breaking
Renamed spec.template.volumes.cloudSqlInstance.connections to spec.template.volumes.cloudSqlInstance.instances in RunService (Alpha).
Feature
Added IAMPolicy and IAMPolicyMember support for
AccessContextManagerAccessPolicy .
April 25, 2022
Feature
Added IAMPolicyMember support for BinaryAuthorizationPolicy , CloudFunctionsFunction , DataprocCluster , NetworkSecurityAuthorizationPolicy , NetworkSecurityClientTLSPolicy , NetworkSecurityServerTLSPolicy , and RunService .
Announcement
Config Connector version 1.83.0 is now available.
Change
Made the spec.resourceRef.apiVersion field in IAMPolicy , IAMPartialPolicy , IAMPolicyMember , IAMAuditConfig optional.
April 21, 2022
Deprecated
Deprecated spec.networkInterface[].networkIp field in ComputeInstance resource.
Announcement
Config Connector version 1.82.0 is now available.
Feature
Added field spec.networkInterface[].networkIpRef to ComputeInstance resource.
April 13, 2022
Breaking
This release contains an issue that may prevent you from successfully deleting namespaces with Config Connector enabled if using Config Connector in namespaced-mode. If you are using namespaced-mode, do not upgrade to version 1.81.0 - please upgrade to 1.82.0 instead.
Feature
Added field spec.edgeSecurityPolicy to ComputeBackendBucket resource.
Feature
Added field spec.cluster[].autoscalingConfig to BigtableInstance resource.
Fixed
Fixed the bug introduced in version 1.62.0 that list fields can't be set to empty lists. (Issue #595 )
Feature
Added field spec.type to ComputeSecurityPolicy resource.
Feature
Added support for ApigeeEnvironment resource.
Feature
Added field spec.schedule.repeatInterval to StorageTransferJob resource
Announcement
Config Connector version 1.81.0 is now available.
April 07, 2022
Announcement
Config Connector version 1.80.0 is now available.
Feature
Added support for NetworkServicesTLSRoute resource.
Feature
Added spec.destination.loggingLogBucketRef to LoggingLogSink.
Feature
Added support for ApigeeOrganization resource.
March 30, 2022
Feature
Added spec.nodeConfig.gvnic to ContainerCluster.
Feature
Added spec.filter , spec.gitFileSource , and spec.sourceToBuild to CloudBuildTrigger.
Announcement
Config Connector version 1.79.0 is now available.
Feature
Added IAMPolicy support for BinaryAuthorizationPolicy , CloudFunctionsFunction , DataprocCluster , NetworkSecurityAuthorizationPolicy , NetworkSecurityClientTLSPolicy , NetworkSecurityServerTLSPolicy , and RunService .
Feature
Added spec.mavenConfig to ArtifactRegistryRepository.
Feature
Added spec.nodeConfig.gvnic to ContainerNodePool.
Feature
Added support for MonitoringMonitoredProject resource.
March 21, 2022
Announcement
Config Connector version 1.78.0 is now available.
Fixed
Fixed issue where users could not switch between the field github.push and the field github.pullRequest in CloudBuildTrigger resources ( Issue #357 ).
Fixed
Fixed issue where users could not switch between the field singleClusterRouting and the fields multiClusterRoutingUseAny and multiClusterRoutingClusterIds in BigtableAppProfile resources.
Fixed
Fixed issue where users could not update the policy in ResourceManagerPolicy resources.
March 16, 2022
Announcement
Config Connector version 1.77.0 is now available.
Feature
Added support for ARM binaries.
Feature
Added support for IdentityPlatformConfig resource.
March 04, 2022
Feature
Added support for EventarcTrigger resource.
Feature
Added fields spec.maintenancePolicy and spec.maintenanceSchedule into RedisInstance resource.
Feature
Added support for BillingBudgetsBudget resource.
Feature
Added field spec.rule[].rateLimitOptions into ComputeSecurityPolicy resource.
Change
StorageTransferJob : Fields spec.schedule and spec.transferSpec.awsS3DataSource.awsAccessKey are no longer required.
Feature
Added fields spec.transferSpec.awsS3DataSource.roleArn , spec.transferSpec.posixDataSink and spec.transferSpec.posixDataSource into StorageTransferJob resource.
Feature
Added field status.selfLink into NetworkServicesGateway , NetworkServicesGRPCRoute , NetworkServicesHTTPRoute , NetworkServicesMesh and NetworkServicesTCPRoute resources.
Announcement
Config Connector version 1.75.0 is now available.
Feature
Added fields spec.addonsConfig.gcpFilestoreCsiDriverConfig and spec.clusterAutoscaling.autoProvisioningDefaults.imageType into ContainerCluster resource.
Feature
Added support for LoggingLogView resource.
February 18, 2022
Fixed
Fixed topicRef in CloudBuildTrigger (Issue #605 ).
Feature
Added support for PrivateCACertificateAuthority resource
Announcement
Config Connector version 1.74.0 is now available.
February 11, 2022
Change
CRD go clients (alpha) have moved to pkg/clients/generated/client/clientset/versioned/ package.
Feature
Added support in IAMPartialPolicy and IAMPolicy to cover Organization and BillingAccount resources.
Announcement
Config Connector version 1.73.0 is now available.
Feature
Added support for ComputeFirewallPolicyAssociation resource.
Fixed
Fixed spec.target.targetHTTPProxyRef issue in ComputeForwardingRule (Issue #596 ).
February 01, 2022
Fixed
Miscellaneous bug fixes.
Announcement
Config Connector version 1.72.1 is now available.
January 25, 2022
Feature
Added support for CloudFunctionsFunction resource.
Feature
Added support for LoggingLogBucket resource.
Feature
Added fields spec.alertStrategy and spec.conditions.conditionMatchedLog to MonitoringAlertPolicy resource.
Announcement
Config Connector version 1.72.0 is now available.
January 19, 2022
Feature
Added support for NetworkConnectivitySpoke resource.
Announcement
Config Connector version 1.71.0 is now available.
Feature
Added spec.build.availableSecrets to CloudBuildTrigger resource.
Feature
Added support for LoggingLogMetric resource.
Feature
Added spec.identityServiceConfig to ContainerCluster resource.
Feature
Added regional support for ComputeTargetHTTP(S)Proxy resource(s).
Feature
Added spec.settings.ipConfiguration.allocatedIpRange to SQLInstance resource.
Feature
Added spec.readReplicaMode , spec.replicaCount and status.nodes to RedisInstance resources.
Feature
Added spec.publicAccessPrevention to StorageBucket resource.
Feature
Added spec.nodeConfig.nodeGroupRef and spec.nodeConfig.spot to ContainerCluster and ContainerNodePool resources.
January 07, 2022
Change
StorageBucket : It now errors out if spec.bucketPolicyOnly (deprecated) and spec.uniformBucketLevelAccess are both present but with different values. We recommend using spec.uniformBucketLevelAccess field only.
Change
ContainerCluster : It now errors out if spec.workloadIdentityConfig.identityNamespace (deprecated) and spec.workloadIdentityConfig.workloadPool are both present but with different values. We recommend using spec.workloadIdentityConfig.workloadPool field only.
Feature
Added support for RunService (alpha) resource.
Feature
Added fields spec.bfd.minReceiveInterval , spec.bfd.minTransmitInterval , spec.bfd.multiplier , and spec.bfd.sessionInitializationMode to ComputeRouterPeer resource.
Change
ComputeSnapshot : Output-only field status.sourceDiskLink is removed.
Change
SQLInstance : spec.settings.authorizedGaeApplications , spec.settings.crashSafeReplication , spec.settings.replicationType become no-ops fields. We recommend removing these fields in your configuration.
Change
ContainerCluster : The default value for spec.enableShieldedNodes is changed to true .
Feature
Added support for MonitoringUptimeCheckConfig resource.
Change
ContainerCluster : Output-only field status.instanceGroupUrls is removed.
Change
config-connector CLI removes the ability to export default ComputeNetwork , ComputeSubnetwork , and ComputeRoute via bulk-export command. Those default network assets contain invalid values in other contexts. Removing them from bulk export to avoid additional manual handling of the exported configuration.
Feature
Added field spec.nodeConfig.gcfsConfig (deprecated) to ContainerCluster resource. spec.nodeConfig is a deprecated field that we recommend not using in your configuration.
Announcement
Config Connector 1.70.0 is now available
Feature
Supported referencing Workload Identity principals in IAMPolicyMember . (Issue #583 )
Feature
Added support for NetworkServicesGateway (alpha), NetworkServicesMesh (alpha), NetworkServicesGRPCRoute (alpha), NetworkServicesHTTPRoute (alpha), and NetworkServicesTCPRoute (alpha) resources.
Change
ComputeInstance and ComputeInstanceTemplate : Configuring field spec.serviceAccount.scopes with value trace-append or trace-ro is no longer available. Use trace instead.
Feature
Added field spec.networkInterface.queueCount to ComputeInstance and ComputeInstanceTemplate resources.
Feature
Added field spec.messageRetentionDuration to PubSubTopic resource.
Feature
Added fields spec.nodeConfig.gcfsConfig and spec.managedInstanceGroupUrls to ContainerNodePool resource.
Change
PubSubSubscription : Output-only field status.path is removed.
December 14, 2021
Feature
Added support for CloudIdentityMembership resource
Feature
Added support for IAMWorkloadIdentityPool resource
Feature
Add billgProject flag in ConfigConnectorContext to specify a quota project to send along with user_project_override header, used for all requests sent from Config Connector. If set on a resource that supports sending the resource project, this value will supersede the resource project. This field can only be set if requestProjectPolicy takes BILLING_PROJECT value
Feature
Added support for IAMWorkloadIdentityPoolProvider resource
Feature
Added support for VPCAccessConnector resource
Feature
Rollout support for state-into-spec: absent to ContainerCluster resource (Issue #576 )
Announcement
Config Connector 1.69.0 is now available
Feature
Added support for PrivateCACAPool resource
Fixed
Fixed the issues in ContainerCluster with creating autopilot clusters
Fixed
Fixed the issues in config-connector export that the exported YAML now include zero primitives to match the Google Cloud resource live state
Feature
Added support for ComputePacketMirroring resource
December 01, 2021
Announcement
Config Connector 1.68.0 is now available.
Feature
Added support for MonitoringServiceLevelObjective resource.
Feature
Added support for RecaptchaEnterpriseKey resource.
Feature
Added support for OSConfigOSPolicyAssignment resource.
Feature
Added support for MonitoringService resource.
Feature
Added support for resourceID field for SecretManagerSecretVersion resource.
Feature
Added support for regional ComputeSSLCertificate resource.
Feature
Added support for NetworkConnectivityHub resource.
November 11, 2021
Announcement
Config Connector 1.67.0 is now available.
Fixed
Fixed the issues in config-connector bulk-export and the exported IAMCustomRole resources can now be imported into Config Connector.
Feature
Added support for ConfigControllerInstance (Alpha) resource.
Feature
Added support for PrivateCACertificateTemplate resource.
Feature
Added fields spec.nodeConfig.guestAccelerator[].gpuPartitionSize and spec.workloadIdentityConfig.workloadPool to ContainerCluster resource.
Feature
Added field spec.nodeConfig.guestAccelerator[].gpuPartitionSize to ContainerNodePool resource.
Fixed
Fixed the issue that DataflowJob was repeatedly updating if spec.enableStreamingEngine was set to true .
Deprecated
Deprecated spec.workloadIdentityConfig.identityNamespace (field is also no longer required), spec.masterAuth and status.instanceGroupUrls in ContainerCluster resource.
November 04, 2021
Announcement
Config Connector 1.66.0 is now available.
Feature
Added support for memberFrom in IAMPartialPolicy .
Fixed
Miscellaneous bug fixes and improvements.
November 01, 2021
Feature
Added support for the ComputeServiceAttachment resource.
Change
Config Connector 1.65.0 is now available.
Feature
config-connector command cli print-resources now includes a column listing whether it supports of related IAM resources.
Fixed
config-connector command cli now correctly labels supported bulk-export resources.
Change
All config-connector containers now emit logging to stdout rather than stderr.
October 25, 2021
Feature
Added ipv6AccessType , stackType , externalIpv6Prefix , ipv6CidrRange fields to ComputeSubnetwork .
Feature
Added ipv6AccessConfig , ipv6AccessType and stackType fields to ComputeInstance .
Feature
Added connectionTrackingPolicy field to ComputeBackendService .
Feature
Added nodeConfig.workloadMetadataConfig.mode ; deprecated nodeConfig.workloadMetadataConfig.nodeMetadata in ContainerCluster .
Feature
Added gcsDataSink.path and gcsDataSource.path fields to StorageTransferJob .
Change
In DNSRecordSet, ttl field is no longer required.
Change
Handle the lifecycle of ConfigConnectorContext objects in a separate controller for better isolation and scalability.
Feature
Added importOnly field to KMSCryptoKey .
Feature
Added support for ComputeFirewallPolicyRule resource.
Feature
Added monitoringConfig , dnsConfig and loggingConfig fields to ContainerCluster .
Feature
Added serviceAccountRef field to CloudBuildTrigger .
Change
Moved version field to status in DataprocWorkflowTemplate .
Feature
Added disabled field to IAMServiceAccount .
Feature
Added ipv6AccessConfig , ipv6AccessType and stackType fields to ComputeInstanceTemplate .
Announcement
Config Connector 1.64.0 is now available.
Feature
Added support for FilestoreBackup and FilestoreInstance resources.
Fixed
Fixed the issue of changing BigTableInstance node size.
October 01, 2021
Feature
Added spec.destroyScheduledDuration to KMSCryptoKey .
Change
ComputeRouterPeer : ipAddress is no longer a read-only field, and can be set with the spec.ipAddress field.
Deprecated
ComputeDisk : spec.interface has been deprecated. The value of spec.interface is no longer used by the API, so all validation has been removed and values will not be populated. You should remove this field from your configuration.
Feature
Added spec.configSync.git.gcpServiceAccountRef to GKEHubFeatureMembership .
Announcement
Config Connector 1.63.0 is now available.
September 21, 2021
Announcement
Config Connector 1.62.0 is now available.
Fixed
Miscelleanous bug fixes.
Feature
Added Age and Healthy columns for the kubectl get tabular outputs of ConfigConnector and ConfigConnectorContext resources.
September 10, 2021
Feature
Added the securitySettings field to ComputeBackendService
Fixed
Fixed a bug in BigqueryJob that generates unexpected diff for 'kms_key_name'
Announcement
Config Connector 1.61.0 is now available
Change
Added jitter to resource reconciliation reenqueue period to smooth out the traffic pattern
September 03, 2021
Feature
Added support for ComputeFirewallPolicy resource.
Announcement
Config Connector 1.60.0 is now available.
Fixed
Fixed the error when deleting the ConfigConnectorContext object. (Issue #523 )
August 19, 2021
Fixed
Fixed the issue where ComputeInstance fails reconciliation if metadata is set outside KCC (Issue #524 )
Announcement
Config Connector 1.59.0 is now available
Feature
Added processingUnits field into SpannerInstance
Feature
config-connector CLI supports IAMPartialPolicy as an IAM output format
Feature
Added networkConfig field into ContainerNodePool
August 12, 2021
Fixed
Miscellaneous bug fixes.
Announcement
Config Connector 1.58.1 is now available.
August 02, 2021
Change
Config Connector 1.58.0 is now available.
Feature
Added a list of resources which have service-generated resource IDs .
Feature
Added support for MonitoringMetricDescriptor resource.
Feature
CloudBuildTrigger : added webhookConfig and pubsubConfig options for triggers.
Feature
Added limited support for the cnrm.cloud.google.com/state-into-spec annotation, which allows merge and absent values to merge a resource's state into the spec field or not, respectively.
Currently only supported for BigQueryDataset .
July 22, 2021
Announcement
Config Connector 1.57.0 is now available.
Feature
Added advancedMachineFeatures to ComputeInstance .
Feature
Added support for GKEHubFeatureMembership resource.
Fixed
Reverted DNSRecordSet to an older implementation (from v1.50.0) due to an issue that broke users' ability to modify rrdatas . Note that this also means that rrdatas and ttl are required fields again.
Feature
Added spec.projectRef to ServiceUsageService .
Feature
Added the following output-only fields:
BigQueryJob : query.destinationEncryptionConfiguration.kmsKeyVersion , load.destinationEncryptionConfiguration.kmsKeyVersion , and copy.destinationEncryptionConfiguration.kmsKeyVersion .
BigQueryTable : encryptionConfiguration.kmsKeyVersion .
July 13, 2021
Fixed
Fixed bug that was causing CloudIdentityGroup to go through infinite updates.
Announcement
Config Connector 1.56.0 is now available.
Feature
Added expire , rotation , topics , and ttl fields to SecretManagerSecret ( Issue #471 ).
Feature
Added cluster.kmsKeyRef field to BigtableInstance .
Feature
Aggregated the cnrm-admin ClusterRole to the admin and edit ClusterRoles, and aggregated the cnrm-viewer ClusterRole to view ClusterRole. See Aggregated ClusterRoles for details ( Issue #486 ).
Feature
Added support for ComputeInstanceGroupManager resource ( Issue #314 ).
Feature
Added support for BinaryAuthorizationPolicy resource.
Feature
Added timestamp to log messages.
July 07, 2021
Change
Reduced max retry interval on failure to 120 seconds for fast reconciliation
Change
Added new fields:
ComputeInstance : networkPerformanceConfig.totalEgressBandwidthTier field added.
ComputeInstanceTemplate : advancedMachineFeatures field added.
ComputeInstanceTemplate : confidentialInstanceConfig.enableConfidentialCompute field is now immutable.
ComputeInstanceTemplate : networkPerformanceConfig.totalEgressBandwidthTier field added.
ComputeSecurityPolicy : adaptiveProtectionConfig field added.
RedisInstance : redisVersion field no longer immutable.
Fixed
Use IAMResourceRef type in IAMPartialPolicySpec (Issue #495 )
Announcement
Config Connector 1.55.0 is now available
Fixed
ContainerCluster supports User Project Override (Issue #492 )
Feature
Added NetworkServicesEndpointPolicy support
June 24, 2021
Change
ComputeVPNGateway : vpnInterfaces field moved from status to spec and now includes interconnectAttachmentRef field.
Change
Added support for ingress and egress policies in AccessContextManagerServicePerimeter
Announcement
Config Connector 1.54.0 is now available
Change
Added new fields:
ComputeAddress : networkRef
ComputeDisk : provisionedIops
ComputeInstance : reservationAffinity
ComputeInstanceTemplate : reservationAffinity
ComputeInterconnectedAttachment : encryption and ipsecInternalAddresses
ComputeResourcePolicy : description and instanceSchedulePolicy
ComputeRouterInterface : encryptedInterconnectRouter
SQLInstance : diskAutoresizeLimit
StorageTransferJob : transferSpec.azureBlobStorageDataSource
Change
ComputeAddress : purpose field now additionally accepts IPSEC_INTERCONNECT.
Change
SQLInstance : databaseVersion field now additionally accepts POSTGRES_10, POSTGRES_12, and POSTGRES_13.
Change
The following fields are no longer immutable:
CloudIdentityGroup : initialGroupConfig
DataflowFlexTemplateJob : containerSpecGcsPath and parameters
Feature
Added support for the following resources:
MonitoringDashboard
GKEHubFeature
IAMPartialPolicy
NetworkSecurityAuthorizationPolicy
BinaryAuthorizationAttestor
June 21, 2021
Announcement
Config Connector 1.53.0 is now available
Change
Change cnrm-system containers to use HTTP probes for readiness instead of command probes
Feature
Added support for NetworkSecurityServerTLSPolicy
Feature
Added support for strong hierarchal references to several resources:
Add spec.projectRef to DataprocAutoScalingPolicy
Add spec.projectRef to DataprocCluster
Add spec.projectRef to DataprocWorkflowTemplate
Add spec.projectRef to MonitoringGroup
Feature
Added support for NetworkSecurityClientTLSPolicy
June 11, 2021
Announcement
Config Connector 1.52.0 is now available.
Feature
IAMServiceAccount : added support for resourceID.
Feature
Added support for ComputeURLMap ,
DataFusionInstance ,
LoggingLogExclusion .
Fixed
spec.preservedUnknownFields is set to false for all CRDs, ensuring consistent behavior as the flag is set from true to false across Kubernetes versions.
June 02, 2021
Fixed
Miscellaneous bug fixes.
Announcement
Config Connector 1.51.2 is now available.
May 27, 2021
Change
Config Connector 1.51.1 is now available
Fixed
Miscellaneous bug fixes.
May 24, 2021
Change
Added field spec.initialGroupConfig to CloudIdentityGroup
Change
Added field spec.initialSize to ComputeNodeGroup
Change
Added field spec.externalDataConfiguration.hivePartitioningOptions.requirePartitionFilter to BigQueryTable
Change
Added field spec.replication.userManaged.replicas[].customerManagedEncryption to SecretManagerSecret
Change
Added field spec.basic.conditions[].devicePolicy.osConstraints[].requireVerifiedChromeOs to AccessContextManagerAccessLevel
Change
Added field spec.encryptionConfig to SpannerDatabase
Change
Added field spec.maintenanceWindow to ComputeNodeGroup
Announcement
Config Connector 1.51.0 is now available
May 17, 2021
Announcement
Config Connector version 1.50.0 is now available.
Fixed
Fixed the issue that Storage resources couldn't be deleted if the referenced StorageBucket was deleted first. (Issue #463 )
Change
Resource CRDs are now using apiextensions.k8s.io/v1 . The minimum required Kubernetes version for using Config Connector v1.50.0 and above is Kubernetes 1.16. This change is in preparation for the removal of apiextensions.k8s.io/v1beta1 in Kubernetes 1.22 .
Fixed
Fixed the issue that Project creation failed if spec.resourceID was set. (Issue #462 )
Fixed
Fixed the IAM resource references in go-client. (Issue #413 )
May 04, 2021
Fixed
Miscellaneous bug fixes.
Announcement
Config Connector version 1.49.1 is now available.
April 30, 2021
Change
Hierarchical reference field is optional for BigQueryDataset , ComputeDisk , Folder , and Project (Fixes a follow-up issue in #349 ).
Announcement
Config Connector version 1.49.0 is now available.
April 27, 2021
Feature
Added go-clients for GKEHubMembership and CloudIdentityGroup
Feature
ComputeDisk added support for projectRef
Announcement
Config Connector version 1.48.0 is now available.
April 23, 2021
Change
Added support
CloudIdentityGroup and GKEHubMembership
Announcement
Config Connector version 1.47.0 is now available.
Fixed
Fixed the issue of acquiring ComputeBackendService with iap configuration ( GitHub #304 )
Change
Added resourceID support for Project resource
April 16, 2021
Announcement
Config Connector version 1.46.0 is now available.
Feature
ContainerCluster supports enableAutopilot , enableL4IlbSubsetting , and privateIpv6GoogleAccess .
Fixed
ContainerNodePool supports
disabling autoscaling by setting min and max node counts to 0 (fixes GitHub issue #437 )
Fixed
Go Client now uses a pointer type or allows for a built-in nil value for spec fields that are optional. (fixes GitHub issue #426 )
Change
SecretManagerSecretVersion now requires the secretData field.
Feature
BigQueryDataset add support for projectRef
Fixed
cnrm-resource-stats-recorder container now binds to hostPort 48797 rather than 8888 (fixes GitHub issue #449 )
Feature
Added observedGeneration field to status for resources, enabling compatibility with kstatus (fixes GitHub issue #410 ]{:.external})
April 08, 2021
Feature
Added proxyBind field to ComputeTargetHTTPProxy , ComputeTargeHTTPSProxy , and ComputeTargetTCPProxy .
Feature
Updated the structs' name of any field FooBar to be KindFooBar in Go Client resources. This ensures that the struct names are unique within a Go package.
Feature
Added support for OSConfigGuestPolicy , IdentityPlatformTenant , IdentityPlatformOAuthIDPConfig and IdentityPlatformTenantOauthIDPConfig .
Announcement
Config Connector version 1.45.0 is now available.
Feature
Supported a viewer cluster role so that resources can be referenced cross namespaces in namespaced mode. (Issue #407 )
Fixed
Fixed issue where folderRef / organizationRef could not be defaulted from folder-id / organization-id annotations when creating Project / Folder resources with server-side apply. (More details can be found here ).
Fixed
Fixed the ListMeta type in Go Client (Issue #422 ).
Feature
Added enableStreamingEngine field to DataflowJob .
March 25, 2021
Deprecated
Deprecated nicType field in ComputeInstanceTemplate .
Feature
Added settings.backupConfiguration.backupRetentionSettings and settings.backupConfiguration.transactionLogRetentionDays fields to SQLInstance .
Feature
Added nodeConfig.ephemeralStorageConfig field to ContainerCluster and ContainerNodePool .
Announcement
Config Connector version 1.44.0 is now available.
Fixed
Fixed incorrect file extension for Terraform files output by the config-connector CLI.
Change
Made materializedView.query field in BigQueryTable immutable.
Feature
Added support for the ContainerAnalysisNote resource (no config-connector CLI support)
Feature
Added mtu field to ComputeInterconnectAttachment .
Feature
Added support for acquisitions of Folder using displayName and folderRef / organizationRef .
March 23, 2021
Feature
config-connector CLI now supports a flag to filter out deleted IAM members
Feature
Added support for IAPBrand (no config-connector CLI support)
Fixed
Conflict Prevention is now turned off by default. The current implementation results in the Ready condition destabilizing despite the resource reflecting user-desired state.
Work is enqueued to improve this behavior, but the functionality is turned off for new resources in the interim.
Fixed
Webhook certificates that do not contain a SAN are now re-created on upgrade of the Config Connector operator.
Feature
Added support for folderRef and organizationRef in Project and Folder .
Announcement
Config Connector version 1.43.0 is now available
Feature
Added support for IAPIdentityAwareProxyClient (no config-connector CLI support)
March 12, 2021
Fixed
Ensure that CLI will not terminate on particular problematic resources when on-error is set with ignore or continue
Change
Added operation field into ContainerNodePool
Change
Increase resource limits of webhook, recorder and deletiondefender workloads
On upgrade, ensure that your cluster has sufficient CPU/Memory to allocate if you have seen Pod Unschedulable errors
Announcement
Config Connector version 1.42.0 is now available.
Fixed
Miscellaneous bug fixes
March 05, 2021
Announcement
Config Connector version 1.41.0 is now available.
Fixed
Updated the format of the version tag to v0.0.0 so that Config Connector v1.41.0 and above can be fetched as a Go module. (Issue #408 )
Feature
Added targetGRPCProxyRef field in ComputeForwardingRule .
Feature
Added insightsConfig field in SQLInstance .
Feature
Added transitEncryptionMode field in RedisInstance . Also added serverCaCerts to the status of RedisInstance .
February 26, 2021
Announcement
Config Connector version 1.40.0 is now available
Feature
New fields for ComputeInstanceTemplate : nicType and resourcePolicies
Feature
Added support for DataprocWorkflowTemplate (no config-connector CLI support, expected Q2)
Feature
New status field for BigQueryJob : status
Feature
Added support for DataprocAutoscalingPolicy (no config-connector CLI support, expected Q2)
Feature
New field for ComputeInstance : nicType
Feature
Added support for MemcacheInstance
Feature
Added support for DataprocCluster (no config-connector CLI support, expected Q2)
Fixed
Go client is no longer nested under generated folder.
February 22, 2021
Announcement
Config Connector version 1.39.0 is now available
Feature
Added support for CloudSchedulerJob resource
Feature
Alpha release of Go types and clients for Config Connector resources
Fixed
Fixed issue with ArtifactRegistryRepository always failing to update
Fixed
Reverted webhook port to 443 to alleviate forwarding rule issue on GKE private clusters
Fixed
Fixed issue with aggressive retrying of failed updates leading to exhausting quota
February 09, 2021
Fixed
Miscellaneous bug fixes
Announcement
Config Connector version 1.38.1 is now available
February 05, 2021
Feature
Added resourceID support to: ContainerCluster , ContainerNodePool , SourceRepoRepository and AccessContextManager resources
Fixed
config-connector bulk-export now operates on LoggingLogSink resources
Change
Config Connector version 1.38.0 is now available
Change
Increased CPU and Memory limit for ConfigConnector Operator
January 27, 2021
Announcement
Config Connector version 1.37.0 is now available.
Feature
Added resourceID support for ArtifactRegistryRepository , Bigtable resources, DataflowJob , DNS resources, Monitoring resources, RedisInstance , ResourceManagerLien , SecretManagerSecret , Spanner resources, StorageTransferJob .
Change
Added a column Status Age showing the last transition time for the value in Status , and added the column Age back to the default output of kubectl get for all Config Connector resources. Improved the value at Status and Ready columns to match against the condition name.
Fixed
Fixed the issue with the legacy Common Name field on x509 certificate. Config Connector should be working on clusters of K8s 1.19+. (Issue #335 )
January 22, 2021
Change
Added a column 'Ready' showing the value of the .status.conditions[0] (the ready condition), and associated Status to the default output of kubectl get for all Config Connector resources.
Feature
Added a new sub-command to the CLI, config-connector print-resources which shows all config connector resources and their associated level of export and bulk-export support.
Change
Reduce the memory usage of deletiondefender and controller-manager in high-scale scenarios (1000+ resources under management).
Feature
Added resourceID support to the Compute resources.
Feature
Added support for referencing an organization to IAMCustomRole.
Announcement
Config Connector version 1.36.0 is now available
January 13, 2021
Feature
Added resourceID support for: SQL resources, Pub/Sub resources, LoggingLogSink , StorageBucket , KMS resources, IAMCustomRole .
Announcement
Config Connector version 1.35.0 is now available.
Feature
Added support for the MonitoringGroup resource.
January 06, 2021
Change
Allow for IAMPolicy , IAMPolicyMember , and IAMAuditConfig to reference resources in other namespaces.
Feature
Added support for UpdateFailed , DeleteFailed , DependencyNotFound , and DependencyNotReady events to IAMPolicy , IAMPoicyMember , IAMAuditConfig .
Announcement
Config Connector version 1.34.0 is now available.
Feature
Added support for IAM Member References. This allows users to create an IAMPolicyMember that references another resource as the IAM member (e.g. IAMServiceAccount , LoggingLogSink ). For more information, see the memberFrom field in the IAMPolicyMember reference documentation . Support for IAM Member References is added only to IAMPolicyMember , not IAMPolicy .
Feature
Added cacheMode , clientTtl , defaultTtl , maxTtl , negativeCaching , negativeCachingPolicy , serveWhileStale , and customResponseHeaders fields to ComputeBackendBucket .
Feature
Added support for the GameServicesRealm resource.
Feature
Added IAM support for ComputeDisk .
Change
Allow for Project and Folder resources to be migrated across folders and organizations by updating the folder-id / organization-id annotation. Only folder-to-folder or organization-to-organization migrations are allowed; folder-to-organization migrations or vice versa are not yet supported.
Feature
Added customTimeBefore , daysSinceCustomTime , daysSinceNoncurrentTime , and noncurrentTimeBefore fields to StorageBucket .
December 09, 2020
Feature
Added support for the ComputeProjectMetadata resource
Feature
Added resourceID field to ServiceUsageService and StorageNotification
Feature
Added computeResponseHeaders field to ComputeBackendService
Feature
Added IAM support to BigtableTable
Feature
Added description and disabled fields to LoggingLogSink
Feature
DataflowJobs can now be acquired via name
Announcement
Config Connector version 1.33.0 is now available.
Feature
Added maintenancePolicy.maintenanceExclusion field to ContainerCluster
December 01, 2020
Fixed
Fixed the bug that the Bigtable Garbage Collection Policy can't be created via the Config Connector BigQueryGCPolicy resource. (Issue #300 )
Change
Added "ORC" as a new available value to the CRD description of externalDataConfiguration.sourceFormat field in BigQueryTable .
Announcement
Config Connector version 1.32.0 is now available.
Feature
Added the customResponseHeaders field to ComputeBackendService .
Feature
Added the resourceID field to Folder , BigQueryTable , BigQueryJob , and BigQueryDataset . (Issue #147 and #128 )
Feature
Added the maintenancePolicy.maintenanceExclusion field to ContainerCluster .
Feature
Added the description and disabled fields to LoggingLogSink .
November 29, 2020
Change
Miscellaneous fixes and improvements
Announcement
Config Connector version 1.31.1 is now available
November 23, 2020
Fixed
Fixed issue where IAMPolicyMember and IAMPolicy resources cannot be deleted if an invalid
configuration is applied (such as referencing a non-existent resource)
Announcement
Config Connector version 1.31.0 is now available
Fixed
Fixed issue where notificationConfig.pubsub.topicRef was not usable
Feature
Added support for the ResourceManagerLien resource
Feature
Added support for the ComputeTargetGRPCProxy resource
November 10, 2020
Announcement
Config Connector version 1.30.0 is now available.
Feature
Added maintenancePolicy field to ComputeNodeGroup .
Feature
Added support for the MonitoringAlertPolicy resource.
Change
Added more field descriptions.
Feature
Added mtu field to ComputeNetwork .
Fixed
Fixed bug where DataflowJob would fail to create if zone is unspecified even if region is specified.
Feature
Added privateIpv6GoogleAccess field to ComputeSubnetwork .
Change
Added "Immutable." to CRD descriptions for immutable fields in IAMPolicy , IAMPolicyMember , IAMAuditConfig .
Feature
Added confidentialNodes field to ContainerCluster .
Fixed
Fixed bug in operator where ConfigConnector was not being re-enqueued for reconciliation when there is an error during reconciliation.
Feature
Added skipInitialVersionCreation field to KMSCryptoKey .
Feature
Added interface field to ComputeDisk .
Feature
Added authEnabled field to RedisInstance .
Feature
Added exclusions field to LoggingLogSink .
November 06, 2020
Announcement
Config Connector version 1.29.0 is now available.
Feature
Field descriptions now document immutability.
Feature
DataflowJob labels are now mutable.
October 28, 2020
Announcement
ConfigConnector version 1.28.0 released
Feature
Add spec.requestProjectPolicy field to ConfigConnectorContext CRD
October 21, 2020
Feature
Added support for externally referencing billing account and organizations in IAMPolicyMember
Feature
Added LoggingLogSink resource for creating log sinks at project, folder, and organization scopes
Feature
Added ResourceManagerPolicy resource for setting organization policy at project, folder, and organization scopes
October 19, 2020
Fixed
Fixes "413 Request Entity Too Large" seen across multiple resource types
Feature
Adds support for MonitoringNotificationChannel
October 15, 2020
Feature
Add support for the AccessContextManagerServicePerimeter resource
Feature
Support export sub-command in the config-connector CLI
Feature
Add support for Folder-level IAM Audit Configs
Fixed
Fix deadLetterTopicRef in the PubSubSubscription resource ( Issue #281 )
October 07, 2020
Feature
Add the artifacts and options fields to CloudBuildTrigger
Feature
Add logic to auto-trigger server-side apply metadata on resources on K8s clusters with server-side apply enabled (i.e. K8s 1.16+)
Feature
Add the auditConfigs field to IAMPolicy
Fixed
Fix issue where kubectl get gcp did not include IAMPolicy , IAMPolicyMember , and IAMAuditConfig resources ( Issue #286 )
Feature
Add the transformNameMapping field to DataflowJob
Feature
Add support for the DataflowFlexTemplateJob resource
Feature
Add support for the GRPC protocol for ComputeBackendService
Feature
Add the loadBalancerType , datapathProvider , and notificationConfig fields to ContainerCluster
October 02, 2020
Fixed
Fixed an issue where an IAMPolicy cannot be deleted when the externally referenced resource does not exist.
Fixed
Fixed an infinite diff condition on spec.minMasterVersion.
Feature
Added Cloud IAM support for ComputeImage.
September 03, 2020
Feature
BigtableInstance : numNodes on resources is now optional. You can then programmatically scale your Bigtable instances . You cannot add the numNodes field after creating a BigtableInstance .
For production instances where the numNodes will be managed
by Config Connector, this field is required with a minimum of 1.
For a development instance or for an existing instance where
the numNodes is managed outside of Config Connector, this field
must be left unset.
August 27, 2020
Change
Support referencing org-level IAM custom roles for IAMPolicy/IAMPolicyMember
Fixed
Increase support for cross-project references
August 19, 2020
Feature
Add support for configuring Bigtable garbage collection policies with the BigtableGCPolicy resource
Fixed
Fix issue where Deletion Defender would sometimes panic during uninstallation of Config Connector, preventing uninstallation to complete.
Fixed
Fixes issue where SQLUser would constantly update despite there being no changes.
Fixed
Performance improvements.
August 13, 2020
Feature
The Config Connector GKE Add-on is launched to GA. Users can now enable the GKE Add-on on cluster creation with the gcloud CLI or on the Cloud Console.
Feature
Add support for BigtableAppProfile
August 08, 2020
Fixed
Fix a bug where a CRD would be marked as uninstalling on a dryrun delete
Feature
Added support for BigtableTable
July 31, 2020
Feature
Changes DataflowJob to allow for spec.parameters and spec.ipConfiguration to be updateable
Fixed
Fixes issue that was causing ContainerNodePool and SQLDatabase to display UpdateFailed due to the referenced ContainerCluster or SQLDatabase not being ready
Feature
Add support for ArtifactRegistryRepository
Fixed
Fixes issue preventing the creation of BigQuery resources that read from Google Drive files due to insufficient OAuth 2.0 scopes
Fixed
Fixes issue causing SourceRepoRepository to constantly update even when there were no changes
July 21, 2020
Fixed
bug fixes and performance improvements
July 16, 2020
Feature
Add support for allowing fields not specified by the user to be externally-managed (i.e. changeable outside of Config Connector). This feature can be enabled for a resource by enabling K8s server-side apply for the resource, which will be the default for all K8s resources starting in K8s 1.18. More detailed docs about the feature coming soon.
Fixed
Fix OOM issue for the cnrm-resource-stats-recorder pod ( Issue #239 ).
Feature
Add support for projectViewer prefix for members in IAMPolicy and IAMPolicyMember ( Issue #234 ).
Fixed
Fix ContainerCluster validation issue ( Issue #242 ).
Feature
Operator improvement: add support for cluster-mode set-ups, which allows users to use one Google Service Account for all namespaces in their cluster. This is very similar to the traditional "Workload Identity" installation set-up.
Change
Reduce spec.revisionHistoryLimit for the cnrm-stats-recorder and cnrm-webhook-manager Deployments from 10 (the default) to 1.
July 09, 2020
Feature
Added support for SecretManagerSecret
July 01, 2020
Feature
Config Connector now supports --server-dry-run for resource CRDs.
Change
Deprecate BigtableInstance's spec.deletionProtection field.
Fixed
Fix a bug for the BigtableInstance resource that causes constant reconciliation.
June 25, 2020
Feature
Add an option, iam-format, to config-connector to control IAM output, options are policy, policymember, or none.
Feature
ComputeForwardingRule's target field now supports referencing a ComputeTargetSSLProxy and ComputeTargetTCPProxy.
Change
DataFlowJob's serviceAccountEmail, network, subnetwork, machineType, and ipConfiguration fields now support updates.
Fixed
Fix an issue where config-connector would error on a Project resource.
June 16, 2020
Feature
You can use config-connector tool to export Google Cloud resources into Config Connector: documentation
Fixed
Bug fixes
June 12, 2020
Feature
Added ability to update streaming DataflowJobs by updating its spec (e.g. spec.templateGcsPath ). Note that not all fields can be updated, and batch DataflowJobs don't support updates.
Added IAMPolicy to the output of config-connector
June 03, 2020
Change
Miscellaneous bug fixes and improvements
May 29, 2020
Fixed
Fixed support for autoscaling and manually resizing node pools with ContainerNodePool
Change
Added support for SQLSSLCert
Change
Supported acquisition of backends added to Compute Backend Services out-of-band of Config Connector
May 27, 2020
Change
Added support for BigQueryJob resource
May 19, 2020
Fixed
Improving handling of scenarios when version field on ContainerNodePool is updated externally
Fixed
Bug fixes and reliability improvements
May 15, 2020
Fixed
fix ContainerNodePool version upgrade scenario
Change
increase the cpu/memory request for webhook and recorder
Change
Miscellaneous bug fixes and improvement
April 30, 2020
Change
Reduced memory requirements for deletion defender, recorder, and webhook.
Reduced cpu requirements for recorder and webhook
Increased CPU for the manager controller from 100m to 200m.
Change
Fixes for the examples for the following resources: CloudBuildTrigger, AccessContextManager, ComputeDisk, and ComputeSubNetwork
Change
Ensure the webhook process does not signal it is ready until it is serving HTTP traffic
April 21, 2020
Change
Miscellaneous bug fixes and improvements
April 14, 2020
Change
Added readiness probes to Config Connector pods
April 10, 2020
Change
miscellaneous bug fixes and improvements
Feature
Add the CloudBuildTrigger resource
Add the SourceRepoRepository resource
April 02, 2020
Fixed
Fixed the ComputeInstance idempotency issue
March 25, 2020
Feature
Add support for structured metadata list for ComputeInstance and ComputeInstanceTemplate in the form of a spec.metadata field.
Feature
Add "Deletion Defender" workload -- a pod whose job is to ensure that only resources meant to trigger a delete on the underlying API do so. If this workload goes down for whatever reason, the controller is prevented from performing deletions, thus protecting against accidental deletions in the case of cascading deletions prompted by uninstalling CRDs.
March 23, 2020
Change
Bumped memory request and limit for the manager pod as resource usage has gone up and the original limit of 256 Mi was found to not be sufficient for large customers
Change
Changed admission webhooks to return non-200 error codes when denying admission
Fixed
Fixed label update issue on ContainerCluster (https://github.com/GoogleCloudPlatform/k8s-config-connector/issues/110)
March 18, 2020
Change
miscellaneous bug fixes and improvements
March 10, 2020
Feature
ComputeHealthCheck's location field now supports supplying a region
Feature
Added a version annotation to the Config Connector manifests
Fixed
Fixed an issue with deleting StorageBucketAccessControl when the ServiceAccount did not exist: https://github.com/GoogleCloudPlatform/k8s-config-connector/issues/39
Change
With the exception of role-bindings, moved all system components for namespaced mode into the cnrm-system, note: you must completely uninstall and reinstall to upgrade namespaced mode completely for this release.
February 26, 2020
Feature
Added support for DataflowJob resource
February 21, 2020
Feature
Added support for ComputeNetworkEndpointGroup resource
February 17, 2020
Feature
Added support for DNSPolicy resource
February 09, 2020
Feature
Added support for ComputeResourcePolicy resource
January 23, 2020
Feature
Config Connector has reached General Availability (GA) .
Feature
Config Connector now supports configuring Google Cloud resources with sensitive data in GKE Secrets.
Feature
Config connector now supports authenticating to multiple Google Service Accounts using different
Kubernetes Service accounts in your Config Connector cluster using Namespaced mode .
Feature
Some Config Connector resources now support directives, which allow Config Connector to take additional actions beyond creating or deleting resources. For more information, see Resources
January 09, 2020
Feature
Added support for DNSRecordSet , Project and ServiceUsage resources
January 02, 2020
Feature
Improved initial Prometheus metrics
Feature
Added external resource reference support for IAMPolicy and IAMPolicyMember
December 23, 2019
Change
No longer run system components as root
Change
Add a specific ResourceReference structure to IAMPolicy and IAMPolicyMember
Feature
Add initial support for exporting prometheus metrics
Feature
Add support for ComputeNodeTemplate
December 17, 2019
Feature
Added the external field to support the external resource references
Feature
Added support for ComputeTargetTCPProxy
December 12, 2019
Feature
Added support for SpannerDatabase
November 26, 2019
Feature
Added support for ServiceNetworkingConnection and ComputeTargetHTTPSProxy
November 21, 2019
Feature
Added support for ComputeInterconnectAttachment, ComputeSSLProxy, ComputeTargetSSLProxy, (Regional)ComputeDisk
November 06, 2019
Feature
Added support for FirestoreIndex, ComputeRouterInterface, ComputeRoute, ComputeRouterPeer
November 01, 2019
Feature
New resources supported: IAMPolicyMember, BigQueryTable, ComputeVPNTunnel, ComputeImage, ComputeSnapshot, ComputeBackendBucket, ComputeDisk, ComputeSSLCertificate, ComputeHTTPHealthCheck, ComputeRouterNAT, ComputeExternalVPNGateway, ComputeRouter, ComputeVPNTunnel, DNSManagedZone, StorageNotification
Breaking
Breaking namespace changes for the following resources:
- GlobalComputeAddress: v1alpha2->v2apha3
- ComputeNetwork: v1alpha2->v1alpha3
- ComputeSubnetwork: v1alpha2->v1alpha3
- ComputeBackendService: v1alpha2->v1alpha3
- ComputeHealthCheck: v1alpha2->v1alpha3
- ComputeFirewall: v1alpha2->v1alpha3
October 22, 2019
Feature
Added new resources and samples for BigQueryTable, ComputeExternalVPNGateway
October 15, 2019
Change
Bump compute api group version to v1alpha2
rename ComputeGlobalForwardingRule to ComputeForwardingRule
add required location field to the following existing resources: ComputeAddress, ComputeBackendService, ComputeForwardingRule, ComputeHealthCheck, ComputeTargetHttpProxy, ComputeURLMap
ComputeAddress CRD now supports both global and regional compute addresses
Feature
Add the following new resources with samples : ComputeNetworkPeering, ComputeTargetVPNGateway, ComputeVpnGateway, IAMCustomRole, ComputeHTTPSHealthCheck, ComputeSharedVPCHostProject, ComputeRouter
October 08, 2019
Change
New gcp category in CRDs, so you can view Config Connector resources via kubectl get gcp
September 30, 2019
Feature
Config Connector now supports GKE workload identity
Feature
Added the ContainerNodePool resource
September 20, 2019
Feature
Adding ComputeGlobalForwardingRule resource and examples
September 13, 2019
Fixed
Fixed an issue with creating service account keys across projects.
September 09, 2019
Change
Update samples for version 0.1.2
September 03, 2019
Feature
Added ComputeTargetHTTPProxy, ComputeBackendService, ComputeFirewall, ComputeUrlMap resources
Change
Samples updates for newly added resources, as well bigtablecluster, bigtableinstance, iampolicy
August 16, 2019
Feature
Config Connector v0.1.1 is now available in Beta.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
