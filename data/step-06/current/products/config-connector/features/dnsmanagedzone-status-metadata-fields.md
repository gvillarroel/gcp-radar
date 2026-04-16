---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.164Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "DNSManagedZone status metadata fields"
feature_slug: "dnsmanagedzone-status-metadata-fields"
latest_feature_date: "2022-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy"
  - "https://docs.cloud.google.com/config-connector/docs/concepts/resources"
keywords:
  - "creationtime"
  - "dnsmanagedzone"
  - "metadata"
  - "exposes"
  - "status"
  - "fields"
---

# DNSManagedZone status metadata fields

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector exposes creationTime and managedZoneId status fields for DNSManagedZone resources.

## Extended Definition

Config Connector exposes creationTime and managedZoneId status fields for DNSManagedZone resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)
- [https://docs.cloud.google.com/config-connector/docs/concepts/resources](https://docs.cloud.google.com/config-connector/docs/concepts/resources)

## Supporting Pages

### Ignore unspecified fields \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Kinds with Merge support The following are all the Config Connector kinds that support Merge populating behavior: AccessContextManagerAccessLevel AccessContextManagerAccessPolicy AccessContextManagerServicePerimeter AlloyDBBackup AlloyDBCluster AlloyDBUser ApigeeEnvironment ApigeeOrganization ArtifactRegistryRepository BigQueryDataset BigQueryJob BigQueryTable BigtableAppProfile BigtableGCPolicy BigtableInstance BigtableTable BillingBudgetsBudget BinaryAuthorizationAttestor BinaryAuthorizationPolicy CertificateManagerCertificate CertificateManagerCertificateMap CertificateManagerCertificateMapEntry CloudBuildTrigger CloudFunctionsFunction CloudIdentityGroup CloudIdentityMembership CloudSchedulerJob ComputeAddress ComputeBackendBucket ComputeBackendService ComputeDisk ComputeExternalVPNGateway ComputeFirewall ComputeFirewallPolicy ComputeFirewallPolicyAssociation ComputeForwardingRule ComputeHTTPHealthCheck ComputeHTTPSHealthCheck ComputeHealthCheck ComputeImage ComputeInstance ComputeInstanceGroup ComputeInstanceGroupManager ComputeInstanceTemplate ComputeInterconnectAttachment ComputeNetwork ComputeNetworkEndpointGroup ComputeNetworkFirewallPolicy ComputeNetworkPeering ComputeNodeGroup ComputeNodeTemplate ComputePacketMirroring ComputeProjectMetadata ComputeRegionNetworkEndpointGroup ComputeReservation ComputeResourcePolicy ComputeRoute ComputeRouter ComputeRouterInterface ComputeRouterNAT ComputeRouterPeer ComputeSSLCertificate ComputeSSLPolicy ComputeSecurityPolicy ComputeServiceAttachment ComputeSharedVPCHostProject ComputeSharedVPCServiceProject ComputeSnapshot ComputeSubnetwork ComputeTargetGRPCProxy ComputeTargetHTTPProxy ComputeTargetHTTPSProxy ComputeTargetInstance ComputeTargetPool ComputeTargetSSLProxy ComputeTargetTCPProxy ComputeTargetVPNGateway ComputeURLMap ComputeVPNGateway ComputeVPNTunnel ConfigControllerInstance ContainerAnalysisNote ContainerAttachedCluster ContainerCluster ContainerNodePool DLPDeidentifyTemplate DLPInspectTemplate DLPJobTrigger DLPStoredInfoType DNSManagedZone DNSPolicy DNSRecordSet DataFusionInstance DataflowFlexTemplateJob DataflowJob DataprocAutoscalingPolicy DataprocCluster DataprocWorkflowTemplate EdgeContainerCluster EdgeContainerNodePool EdgeContainerVpnConnection EdgeNetworkNetwork EdgeNetworkSubnet EventarcTrigger FilestoreBackup FilestoreInstance FirestoreIndex Folder GKEHubFeature GKEHubMembership IAMAccessBoundaryPolicy IAMAuditConfig IAMCustomRole IAMPartialPolicy IAMPolicy IAMPolicyMember IAMServiceAccount IAMServiceAccountKey IAMWorkforcePool IAMWorkforcePoolProvider IAMWorkloadIdentityPool IAMWorkloadIdentityPoolProvider IAPBrand IAPIdentityAwareProxyClient IdentityPlatformConfig IdentityPlatformOAuthIDPConfig IdentityPlatformTenant IdentityPlatformTenantOAuthIDPConfig KMSCryptoKey KMSKeyRing LoggingLogBucket LoggingLogExclusion LoggingLogSink LoggingLogView MemcacheInstance MonitoringAlertPolicy MonitoringGroup MonitoringMetricDescriptor MonitoringMonitoredProject MonitoringNotificationChannel MonitoringService MonitoringServiceLevelObjective MonitoringUptimeCheckConfig NetworkConnectivityHub NetworkConnectivitySpoke NetworkSecurityAuthorizationPolicy NetworkSecurityClientTLSPolicy NetworkSecurityServerTLSPolicy NetworkServicesEndpointPolicy NetworkServicesGRPCRoute NetworkServicesGateway NetworkServicesHTTPRoute NetworkServicesMesh NetworkServicesTCPRoute NetworkServicesTLSRoute OSConfigGuestPolicy OSConfigOSPolicyAssignment PrivateCACAPool PrivateCACertificate PrivateCACertificateAuthority PrivateCACertificateTemplate Project PubSubLiteReservation PubSubSchema PubSubSubscription PubSubTopic RecaptchaEnterpriseKey RedisInstance ResourceManagerLien ResourceManagerPolicy RunJob RunService SQLDatabase SQLSSLCert SQLUser SecretManagerSecret SecretManagerSecretVersion Service ServiceDirectoryEndpoint ServiceDirectoryNamespace ServiceDirectoryService ServiceIdentity ServiceNetworkingConnection SourceRepoRepository SpannerDatabase SpannerInstance StorageBucket StorageBucketAccessControl StorageDefaultObjectAccessControl StorageNotification StorageTransferJob VPCAccessConnector The following kinds don't support the Merge populating behavior starting from the corresponding version: Kind Name Version LoggingLogMetric 1.118.1 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This skips populating unspecified fields into the Kubernetes resource spec: metadata : annotations : cnrm.cloud.google.com/state-into-spec : absent This annotation has a default value of merge if not specified, which means Config Connector populates all unspecified fields into spec.
- Observed State If you need to set cnrm.cloud.google.com/state-into-spec: absent , but your solution depends on the populated values from unspecified fields, check if these fields exist under status.observedState in the CRD schema.
- If they're represented under status.observedState , then you can set cnrm.cloud.google.com/state-into-spec: absent and still access the values of the unspecified fields after a successful reconciliation.

### About Config Connector CRDs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/resources](https://docs.cloud.google.com/config-connector/docs/concepts/resources)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The ready condition has Message and Reason fields which provide additional information on the resource's status.
- This section describes how Config Connector uses subfields within metadata.
- These actions are defined in subfields of metadata.annotations .
- Status Condition Config Connector uses a ready condition in status.condition for two purposes: indicating when a resource is ready.

### IAMPartialPolicy \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)
- Source ID: `site-docs-root-2`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Kind Supports Conditions AccessContextManagerAccessPolicy ApigeeEnvironment ArtifactRegistryRepository BigQueryTable Y BigtableInstance Y BigtableTable Y BillingAccount Y BinaryAuthorizationPolicy Y CloudFunctionsFunction Y ComputeBackendBucket ComputeDisk ComputeImage Y ComputeInstance Y ComputeSnapshot ComputeSubnetwork Y DNSManagedZone DataprocCluster Y Folder Y IAMServiceAccount Y IAMWorkforcePool Y KMSCryptoKey Y KMSKeyRing Y NetworkSecurityAuthorizationPolicy Y NetworkSecurityClientTLSPolicy Y NetworkSecurityServerTLSPolicy Y Organization Y Project Y PubSubSubscription PubSubTopic RunJob RunService SecretManagerSecret ServiceDirectoryNamespace ServiceDirectoryService SourceRepoRepository SpannerDatabase Y SpannerInstance StorageBucket Y Kind External Reference Formats AccessContextManagerAccessPolicy {{name}} ApigeeEnvironment organizations/{{apigee organization}}/environments/{{name}} ArtifactRegistryRepository projects/{{project}}/locations/{{location}}/repositories/{{repository id}} BigQueryTable projects/{{project}}/datasets/{{dataset id}}/tables/{{table id}} BigtableInstance projects/{{project}}/instances/{{name}} BigtableTable projects/{{project}}/instances/{{instance name}}/tables/{{name}} BillingAccount {{billing account id}} BinaryAuthorizationPolicy projects/{{project}}/policy CloudFunctionsFunction projects/{{project}}/locations/{{region}}/functions/{{name}} ComputeBackendBucket projects/{{project}}/global/backendBuckets/{{name}} ComputeDisk projects/{{project}}/regions/{{region}}/disks/{{name}} projects/{{project}}/zones/{{zone}}/disks/{{name}} ComputeImage projects/{{project}}/global/images/{{name}} ComputeInstance projects/{{project}}/zones/{{zone}}/instances/{{name}} ComputeSnapshot projects/{{project}}/global/snapshots/{{name}} ComputeSubnetwork projects/{{project}}/regions/{{region}}/subnetworks/{{name}} DNSManagedZone projects/{{project}}/managedZones/{{name}} DataprocCluster projects/{{project}}/regions/{{location}}/clusters/{{name}} Folder folders/{{folder id}} IAMServiceAccount projects/{{project}}/serviceAccounts/{{account id}}@{{project}}.iam.gserviceaccount.com IAMWorkforcePool locations/{{location}}/workforcePools/{{name}} KMSCryptoKey projects/{{project}}/locations/{{location}}/keyRings/{{key ring id}}/cryptoKeys/{{name}} KMSKeyRing projects/{{project}}/locations/{{location}}/keyRings/{{name}} NetworkSecurityAuthorizationPolicy projects/{{project}}/locations/{{location}}/authorizationPolicies/{{name}} NetworkSecurityClientTLSPolicy projects/{{project}}/locations/{{location}}/clientTlsPolicies/{{name}} NetworkSecurityServerTLSPolicy projects/{{project}}/locations/{{location}}/serverTlsPolicies/{{name}} Organization {{org id}} Project projects/{{project id}} PubSubSubscription projects/{{project}}/subscriptions/{{name}} PubSubTopic projects/{{project}}/topics/{{name}} RunJob projects/{{project}}/locations/{{location}}/jobs/{{name}} RunService projects/{{project}}/locations/{{location}}/services/{{name}} SecretManagerSecret projects/{{project}}/secrets/{{secret id}} ServiceDirectoryNamespace projects/{{project}}/locations/{{location}}/namespaces/{{namespace id}} ServiceDirectoryService {{namespace}}/services/{{service id}} SourceRepoRepository projects/{{project}}/repos/{{name}} SpannerDatabase projects/{{project}}/instances/{{instance}}/databases/{{name}} SpannerInstance projects/{{project}}/instances/{{name}} StorageBucket {{name}} Custom Resource Definition Properties Spec Schema bindings : - condition : description : string expression : string title : string members : - member : string memberFrom : bigQueryConnectionConnectionRef : name : string namespace : string type : string logSinkRef : name : string namespace : string serviceAccountRef : name : string namespace : string serviceIdentityRef : name : string namespace : string sqlInstanceRef : name : string namespace : string role : string resourceRef : apiVersion : string external : string kind : string name : string namespace : string Fields bindings Optional list (object) Optional.
- The Google Cloud resource to set the IAM policy on for example organization or project, etc. resourceRef.apiVersion Optional string APIVersion of the referenced resource resourceRef.external Optional string The external name of the referenced resource resourceRef.kind Required string Kind of the referenced resource resourceRef.name Optional string resourceRef.namespace Optional string Field is required when parent field is specified Status Schema allBindings : - condition : description : string expression : string title : string members : - string role : string conditions : - lastTransitionTime : string message : string reason : string status : string type : string lastAppliedBindings : - condition : description : string expression : string title : string members : - string role : string observedGeneration : integer Fields allBindings list (object) AllBindings surfaces all IAM bindings for the referenced resource. allBindings[] object Specifies the members to bind to an IAM role. allBindings[].condition object Optional.
- If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
- For "cloudResource" connection, the service account is in status.observedState.cloudResource.serviceAccountID. bindings[].members[].memberFrom.bigQueryConnectionConnectionRef.name Required string bindings[].members[].memberFrom.bigQueryConnectionConnectionRef.namespace Optional string bindings[].members[].memberFrom.bigQueryConnectionConnectionRef.type Required string Type field specifies the connection type of the BigQueryConnectionConnection resource, whose service account is to be bound to the role. bindings[].members[].memberFrom.logSinkRef Optional object The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role. bindings[].members[].memberFrom.logSinkRef.name Required string bindings[].members[].memberFrom.logSinkRef.namespace Optional string bindings[].members[].memberFrom.serviceAccountRef Optional object The IAMServiceAccount to be bound to the role. bindings[].members[].memberFrom.serviceAccountRef.name Required string bindings[].members[].memberFrom.serviceAccountRef.namespace Optional string bindings[].members[].memberFrom.serviceIdentityRef Optional object The ServiceIdentity whose service account (i.e., its 'status.email') is to be bound to the role. bindings[].members[].memberFrom.serviceIdentityRef.name Required string bindings[].members[].memberFrom.serviceIdentityRef.namespace Optional string bindings[].members[].memberFrom.sqlInstanceRef Optional object The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role. bindings[].members[].memberFrom.sqlInstanceRef.name Required string bindings[].members[].memberFrom.sqlInstanceRef.namespace Optional string bindings[].role Required string Required.

