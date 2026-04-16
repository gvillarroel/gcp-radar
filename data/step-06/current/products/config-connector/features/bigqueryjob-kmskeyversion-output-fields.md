---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.223Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "BigQueryJob kmsKeyVersion output fields"
feature_slug: "bigqueryjob-kmskeyversion-output-fields"
latest_feature_date: "2021-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbbackup"
keywords:
  - "kmskeyversion"
  - "bigqueryjob"
  - "only"
  - "output"
  - "exposes"
  - "fields"
---

# BigQueryJob kmsKeyVersion output fields

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector exposes output-only kmsKeyVersion fields for BigQueryJob destination encryption configurations.

## Extended Definition

Config Connector exposes output-only kmsKeyVersion fields for BigQueryJob destination encryption configurations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbbackup](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbbackup)

## Supporting Pages

### AlloyDBCluster \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Field is required when parent field is specified Status Schema backupSource : - backupName : string conditions : - lastTransitionTime : string message : string reason : string status : string type : string continuousBackupInfo : - earliestRestorableTime : string enabledTime : string encryptionInfo : - encryptionType : string kmsKeyVersions : - string schedule : - string databaseVersion : string encryptionInfo : - encryptionType : string kmsKeyVersions : - string externalRef : string migrationSource : - hostPort : string referenceId : string sourceType : string name : string observedGeneration : integer observedState : clusterType : string databaseVersion : string uid : string Fields backupSource list (object) Output only.
- Cloud KMS key versions that are being used to protect the database or the backup. encryptionInfo[].kmsKeyVersions[] string externalRef string A unique specifier for the AlloyDBCluster resource in GCP. migrationSource list (object) Output only.
- Cloud KMS key versions that are being used to protect the database or the backup. continuousBackupInfo[].encryptionInfo[].kmsKeyVersions[] string continuousBackupInfo[].schedule list (string) Output only.
- Type of encryption. continuousBackupInfo[].encryptionInfo[].kmsKeyVersions list (string) Output only.

### AlloyDBBackup \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbbackup](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbbackup)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS key versions that are being used to protect the database or the backup. encryptionInfo[].kmsKeyVersions[] string etag string A hash of the resource. name string Output only.
- Type of encryption. encryptionInfo[].kmsKeyVersions list (string) Output only.
- Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string createTime : string encryptionInfo : - encryptionType : string kmsKeyVersions : - string etag : string name : string observedGeneration : integer reconciling : boolean state : string uid : string updateTime : string Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- Can be True, False, Unknown. conditions[].type string Type is the type of the condition. createTime string Time the Backup was created in UTC. encryptionInfo list (object) EncryptionInfo describes the encryption information of a cluster or a backup. encryptionInfo[] object encryptionInfo[].encryptionType string Output only.

### Ignore unspecified fields \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Kinds with Merge support The following are all the Config Connector kinds that support Merge populating behavior: AccessContextManagerAccessLevel AccessContextManagerAccessPolicy AccessContextManagerServicePerimeter AlloyDBBackup AlloyDBCluster AlloyDBUser ApigeeEnvironment ApigeeOrganization ArtifactRegistryRepository BigQueryDataset BigQueryJob BigQueryTable BigtableAppProfile BigtableGCPolicy BigtableInstance BigtableTable BillingBudgetsBudget BinaryAuthorizationAttestor BinaryAuthorizationPolicy CertificateManagerCertificate CertificateManagerCertificateMap CertificateManagerCertificateMapEntry CloudBuildTrigger CloudFunctionsFunction CloudIdentityGroup CloudIdentityMembership CloudSchedulerJob ComputeAddress ComputeBackendBucket ComputeBackendService ComputeDisk ComputeExternalVPNGateway ComputeFirewall ComputeFirewallPolicy ComputeFirewallPolicyAssociation ComputeForwardingRule ComputeHTTPHealthCheck ComputeHTTPSHealthCheck ComputeHealthCheck ComputeImage ComputeInstance ComputeInstanceGroup ComputeInstanceGroupManager ComputeInstanceTemplate ComputeInterconnectAttachment ComputeNetwork ComputeNetworkEndpointGroup ComputeNetworkFirewallPolicy ComputeNetworkPeering ComputeNodeGroup ComputeNodeTemplate ComputePacketMirroring ComputeProjectMetadata ComputeRegionNetworkEndpointGroup ComputeReservation ComputeResourcePolicy ComputeRoute ComputeRouter ComputeRouterInterface ComputeRouterNAT ComputeRouterPeer ComputeSSLCertificate ComputeSSLPolicy ComputeSecurityPolicy ComputeServiceAttachment ComputeSharedVPCHostProject ComputeSharedVPCServiceProject ComputeSnapshot ComputeSubnetwork ComputeTargetGRPCProxy ComputeTargetHTTPProxy ComputeTargetHTTPSProxy ComputeTargetInstance ComputeTargetPool ComputeTargetSSLProxy ComputeTargetTCPProxy ComputeTargetVPNGateway ComputeURLMap ComputeVPNGateway ComputeVPNTunnel ConfigControllerInstance ContainerAnalysisNote ContainerAttachedCluster ContainerCluster ContainerNodePool DLPDeidentifyTemplate DLPInspectTemplate DLPJobTrigger DLPStoredInfoType DNSManagedZone DNSPolicy DNSRecordSet DataFusionInstance DataflowFlexTemplateJob DataflowJob DataprocAutoscalingPolicy DataprocCluster DataprocWorkflowTemplate EdgeContainerCluster EdgeContainerNodePool EdgeContainerVpnConnection EdgeNetworkNetwork EdgeNetworkSubnet EventarcTrigger FilestoreBackup FilestoreInstance FirestoreIndex Folder GKEHubFeature GKEHubMembership IAMAccessBoundaryPolicy IAMAuditConfig IAMCustomRole IAMPartialPolicy IAMPolicy IAMPolicyMember IAMServiceAccount IAMServiceAccountKey IAMWorkforcePool IAMWorkforcePoolProvider IAMWorkloadIdentityPool IAMWorkloadIdentityPoolProvider IAPBrand IAPIdentityAwareProxyClient IdentityPlatformConfig IdentityPlatformOAuthIDPConfig IdentityPlatformTenant IdentityPlatformTenantOAuthIDPConfig KMSCryptoKey KMSKeyRing LoggingLogBucket LoggingLogExclusion LoggingLogSink LoggingLogView MemcacheInstance MonitoringAlertPolicy MonitoringGroup MonitoringMetricDescriptor MonitoringMonitoredProject MonitoringNotificationChannel MonitoringService MonitoringServiceLevelObjective MonitoringUptimeCheckConfig NetworkConnectivityHub NetworkConnectivitySpoke NetworkSecurityAuthorizationPolicy NetworkSecurityClientTLSPolicy NetworkSecurityServerTLSPolicy NetworkServicesEndpointPolicy NetworkServicesGRPCRoute NetworkServicesGateway NetworkServicesHTTPRoute NetworkServicesMesh NetworkServicesTCPRoute NetworkServicesTLSRoute OSConfigGuestPolicy OSConfigOSPolicyAssignment PrivateCACAPool PrivateCACertificate PrivateCACertificateAuthority PrivateCACertificateTemplate Project PubSubLiteReservation PubSubSchema PubSubSubscription PubSubTopic RecaptchaEnterpriseKey RedisInstance ResourceManagerLien ResourceManagerPolicy RunJob RunService SQLDatabase SQLSSLCert SQLUser SecretManagerSecret SecretManagerSecretVersion Service ServiceDirectoryEndpoint ServiceDirectoryNamespace ServiceDirectoryService ServiceIdentity ServiceNetworkingConnection SourceRepoRepository SpannerDatabase SpannerInstance StorageBucket StorageBucketAccessControl StorageDefaultObjectAccessControl StorageNotification StorageTransferJob VPCAccessConnector The following kinds don't support the Merge populating behavior starting from the corresponding version: Kind Name Version LoggingLogMetric 1.118.1 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- As an example, assume the CRD schema let you specify two fields named foo and bar in spec, while your applied YAML file has only foo specified: spec : foo : "foo" You'll notice another field named bar appears in the CR if the YAML is applied successfully and the resource is UpToDate : spec : foo : "foo" bar : "bar" Due to the complexity of interaction between Config Connector and Google Cloud APIs, you might want to change this default behavior and skip populating the Kubernetes resource spec with unspecified fields.
- Note that the only populating behavior CRDs added in version 1.114.0 and later follow is Absent regardless of the cnrm.cloud.google.com/state-into-spec annotation or the stateIntoSpec fields in the ConfigConnector CR or ConfigConnectorContext CR.
- To further explain the difference introduced by this annotation, assume there is a spec with the following schema: foo1 : string foo2 : string bars : - bar : br1 : string br2 : string barz : bz1 : string bz2 : string Also assume you have specified the spec in your YAML as: spec : foo1 : "foo1" bars : - br1 : "1 br1" - br1 : "2 br1" barz : bz1 : "bz1" Then by default, the populated spec in the created Kubernetes resource might be: spec : foo1 : "foo1" foo2 : "foo2" bars : - br1 : "1 br1" br2 : "1 br2" - br1 : "2 br1" br2 : "2 br2" barz : bz1 : "bz1" bz2 : "bz2" While if you set cnrm.cloud.google.com/state-into-spec: absent , the final spec in the created Kubernetes resource will be: spec : foo1 : "foo1" bars : - br1 : "1 br1" - br1 : "2 br1" barz : bz1 : "bz1" When to use cnrm.cloud.google.com/state-into-spec: absent In most cases, you'll want to set cnrm.cloud.google.com/state-into-spec: absent to get the Absent populating behavior for spec fields.

