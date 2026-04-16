---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.232Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "GKEHubMembership Go client"
feature_slug: "gkehubmembership-go-client"
latest_feature_date: "2021-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/configuring-your-client"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance"
keywords:
  - "gkehubmembership"
  - "generated"
  - "provides"
  - "client"
---

# GKEHubMembership Go client

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector provides a generated Go client for GKEHubMembership.

## Extended Definition

Config Connector provides a generated Go client for GKEHubMembership.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/how-to/configuring-your-client](https://docs.cloud.google.com/config-connector/docs/how-to/configuring-your-client)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance)

## Supporting Pages

### "Configuring your kubectl client \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/configuring-your-client](https://docs.cloud.google.com/config-connector/docs/how-to/configuring-your-client)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configuring your kubectl client By default, Config Connector expects the resource's namespace to match the Google Cloud project ID where it's created.

### AlloyDBInstance \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance)
- Source ID: `site-docs-root`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Property Value Google Cloud Service Name AlloyDB for PostgreSQL Google Cloud Service Documentation /alloydb/docs/ Google Cloud REST Resource Name v1.projects.locations.clusters.instances Google Cloud REST Resource Documentation /alloydb/docs/reference/rest/v1/projects.locations.clusters.instances Config Connector Resource Short Names gcpalloydbinstance gcpalloydbinstances alloydbinstance Config Connector Service Name alloydb.googleapis.com Config Connector Resource Fully Qualified Name alloydbinstances.alloydb.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema annotations : string : string availabilityType : string clusterRef : external : string name : string namespace : string connectionPoolConfig : enabled : boolean flags : string : string databaseFlags : string : string displayName : string gceZone : string instanceType : string instanceTypeRef : external : string name : string namespace : string machineConfig : cpuCount : integer machineType : string networkConfig : authorizedExternalNetworks : - cidrRange : string enableOutboundPublicIp : boolean enablePublicIp : boolean observabilityConfig : assistiveExperiencesEnabled : boolean enabled : boolean maxQueryStringLength : integer preserveComments : boolean queryPlansPerMinute : integer recordApplicationTags : boolean trackActiveQueries : boolean trackClientAddress : boolean trackWaitEvents : boolean queryInsightsConfig : queryPlansPerMinute : integer queryStringLength : integer recordApplicationTags : boolean recordClientAddress : boolean readPoolConfig : nodeCount : integer resourceID : string Fields annotations Optional map (key: string, value: string) Annotations to allow client tools to store small amount of arbitrary data.
- This can happen due to user-triggered updates or system actions like failover or maintenance. state string The current state of the alloydb instance. uid string The system-generated UID of the resource. updateTime string Time the Instance was updated in UTC.
- If not set, this flag is "off" by default. observabilityConfig.trackClientAddress Optional boolean Track client address for an instance.
- This flag is turned "on" by default. queryInsightsConfig.recordClientAddress Optional boolean Record client address for an instance.

### Ignore unspecified fields \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Kinds with Merge support The following are all the Config Connector kinds that support Merge populating behavior: AccessContextManagerAccessLevel AccessContextManagerAccessPolicy AccessContextManagerServicePerimeter AlloyDBBackup AlloyDBCluster AlloyDBUser ApigeeEnvironment ApigeeOrganization ArtifactRegistryRepository BigQueryDataset BigQueryJob BigQueryTable BigtableAppProfile BigtableGCPolicy BigtableInstance BigtableTable BillingBudgetsBudget BinaryAuthorizationAttestor BinaryAuthorizationPolicy CertificateManagerCertificate CertificateManagerCertificateMap CertificateManagerCertificateMapEntry CloudBuildTrigger CloudFunctionsFunction CloudIdentityGroup CloudIdentityMembership CloudSchedulerJob ComputeAddress ComputeBackendBucket ComputeBackendService ComputeDisk ComputeExternalVPNGateway ComputeFirewall ComputeFirewallPolicy ComputeFirewallPolicyAssociation ComputeForwardingRule ComputeHTTPHealthCheck ComputeHTTPSHealthCheck ComputeHealthCheck ComputeImage ComputeInstance ComputeInstanceGroup ComputeInstanceGroupManager ComputeInstanceTemplate ComputeInterconnectAttachment ComputeNetwork ComputeNetworkEndpointGroup ComputeNetworkFirewallPolicy ComputeNetworkPeering ComputeNodeGroup ComputeNodeTemplate ComputePacketMirroring ComputeProjectMetadata ComputeRegionNetworkEndpointGroup ComputeReservation ComputeResourcePolicy ComputeRoute ComputeRouter ComputeRouterInterface ComputeRouterNAT ComputeRouterPeer ComputeSSLCertificate ComputeSSLPolicy ComputeSecurityPolicy ComputeServiceAttachment ComputeSharedVPCHostProject ComputeSharedVPCServiceProject ComputeSnapshot ComputeSubnetwork ComputeTargetGRPCProxy ComputeTargetHTTPProxy ComputeTargetHTTPSProxy ComputeTargetInstance ComputeTargetPool ComputeTargetSSLProxy ComputeTargetTCPProxy ComputeTargetVPNGateway ComputeURLMap ComputeVPNGateway ComputeVPNTunnel ConfigControllerInstance ContainerAnalysisNote ContainerAttachedCluster ContainerCluster ContainerNodePool DLPDeidentifyTemplate DLPInspectTemplate DLPJobTrigger DLPStoredInfoType DNSManagedZone DNSPolicy DNSRecordSet DataFusionInstance DataflowFlexTemplateJob DataflowJob DataprocAutoscalingPolicy DataprocCluster DataprocWorkflowTemplate EdgeContainerCluster EdgeContainerNodePool EdgeContainerVpnConnection EdgeNetworkNetwork EdgeNetworkSubnet EventarcTrigger FilestoreBackup FilestoreInstance FirestoreIndex Folder GKEHubFeature GKEHubMembership IAMAccessBoundaryPolicy IAMAuditConfig IAMCustomRole IAMPartialPolicy IAMPolicy IAMPolicyMember IAMServiceAccount IAMServiceAccountKey IAMWorkforcePool IAMWorkforcePoolProvider IAMWorkloadIdentityPool IAMWorkloadIdentityPoolProvider IAPBrand IAPIdentityAwareProxyClient IdentityPlatformConfig IdentityPlatformOAuthIDPConfig IdentityPlatformTenant IdentityPlatformTenantOAuthIDPConfig KMSCryptoKey KMSKeyRing LoggingLogBucket LoggingLogExclusion LoggingLogSink LoggingLogView MemcacheInstance MonitoringAlertPolicy MonitoringGroup MonitoringMetricDescriptor MonitoringMonitoredProject MonitoringNotificationChannel MonitoringService MonitoringServiceLevelObjective MonitoringUptimeCheckConfig NetworkConnectivityHub NetworkConnectivitySpoke NetworkSecurityAuthorizationPolicy NetworkSecurityClientTLSPolicy NetworkSecurityServerTLSPolicy NetworkServicesEndpointPolicy NetworkServicesGRPCRoute NetworkServicesGateway NetworkServicesHTTPRoute NetworkServicesMesh NetworkServicesTCPRoute NetworkServicesTLSRoute OSConfigGuestPolicy OSConfigOSPolicyAssignment PrivateCACAPool PrivateCACertificate PrivateCACertificateAuthority PrivateCACertificateTemplate Project PubSubLiteReservation PubSubSchema PubSubSubscription PubSubTopic RecaptchaEnterpriseKey RedisInstance ResourceManagerLien ResourceManagerPolicy RunJob RunService SQLDatabase SQLSSLCert SQLUser SecretManagerSecret SecretManagerSecretVersion Service ServiceDirectoryEndpoint ServiceDirectoryNamespace ServiceDirectoryService ServiceIdentity ServiceNetworkingConnection SourceRepoRepository SpannerDatabase SpannerInstance StorageBucket StorageBucketAccessControl StorageDefaultObjectAccessControl StorageNotification StorageTransferJob VPCAccessConnector The following kinds don't support the Merge populating behavior starting from the corresponding version: Kind Name Version LoggingLogMetric 1.118.1 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- In the same example, the populated spec.barz.bz2 with value "bz2" may result an HTTP 400 client error or other unexpected responses if the API implementation violates the GET/PUT symmetry principle.

