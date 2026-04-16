---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.158Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "PubSubSubscription BigQuery configuration support"
feature_slug: "pubsubsubscription-bigquery-configuration-support"
latest_feature_date: "2022-09-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields"
  - "https://docs.cloud.google.com/config-connector/docs/resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources"
keywords:
  - "bigqueryconfig"
  - "pubsubsubscription"
  - "configuration"
  - "supports"
  - "spec"
---

# PubSubSubscription BigQuery configuration support

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports the spec.bigqueryConfig field for PubSubSubscription resources.

## Extended Definition

Config Connector supports the spec.bigqueryConfig field for PubSubSubscription resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)

## Supporting Pages

### Resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

### Ignore unspecified fields \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Kinds with Merge support The following are all the Config Connector kinds that support Merge populating behavior: AccessContextManagerAccessLevel AccessContextManagerAccessPolicy AccessContextManagerServicePerimeter AlloyDBBackup AlloyDBCluster AlloyDBUser ApigeeEnvironment ApigeeOrganization ArtifactRegistryRepository BigQueryDataset BigQueryJob BigQueryTable BigtableAppProfile BigtableGCPolicy BigtableInstance BigtableTable BillingBudgetsBudget BinaryAuthorizationAttestor BinaryAuthorizationPolicy CertificateManagerCertificate CertificateManagerCertificateMap CertificateManagerCertificateMapEntry CloudBuildTrigger CloudFunctionsFunction CloudIdentityGroup CloudIdentityMembership CloudSchedulerJob ComputeAddress ComputeBackendBucket ComputeBackendService ComputeDisk ComputeExternalVPNGateway ComputeFirewall ComputeFirewallPolicy ComputeFirewallPolicyAssociation ComputeForwardingRule ComputeHTTPHealthCheck ComputeHTTPSHealthCheck ComputeHealthCheck ComputeImage ComputeInstance ComputeInstanceGroup ComputeInstanceGroupManager ComputeInstanceTemplate ComputeInterconnectAttachment ComputeNetwork ComputeNetworkEndpointGroup ComputeNetworkFirewallPolicy ComputeNetworkPeering ComputeNodeGroup ComputeNodeTemplate ComputePacketMirroring ComputeProjectMetadata ComputeRegionNetworkEndpointGroup ComputeReservation ComputeResourcePolicy ComputeRoute ComputeRouter ComputeRouterInterface ComputeRouterNAT ComputeRouterPeer ComputeSSLCertificate ComputeSSLPolicy ComputeSecurityPolicy ComputeServiceAttachment ComputeSharedVPCHostProject ComputeSharedVPCServiceProject ComputeSnapshot ComputeSubnetwork ComputeTargetGRPCProxy ComputeTargetHTTPProxy ComputeTargetHTTPSProxy ComputeTargetInstance ComputeTargetPool ComputeTargetSSLProxy ComputeTargetTCPProxy ComputeTargetVPNGateway ComputeURLMap ComputeVPNGateway ComputeVPNTunnel ConfigControllerInstance ContainerAnalysisNote ContainerAttachedCluster ContainerCluster ContainerNodePool DLPDeidentifyTemplate DLPInspectTemplate DLPJobTrigger DLPStoredInfoType DNSManagedZone DNSPolicy DNSRecordSet DataFusionInstance DataflowFlexTemplateJob DataflowJob DataprocAutoscalingPolicy DataprocCluster DataprocWorkflowTemplate EdgeContainerCluster EdgeContainerNodePool EdgeContainerVpnConnection EdgeNetworkNetwork EdgeNetworkSubnet EventarcTrigger FilestoreBackup FilestoreInstance FirestoreIndex Folder GKEHubFeature GKEHubMembership IAMAccessBoundaryPolicy IAMAuditConfig IAMCustomRole IAMPartialPolicy IAMPolicy IAMPolicyMember IAMServiceAccount IAMServiceAccountKey IAMWorkforcePool IAMWorkforcePoolProvider IAMWorkloadIdentityPool IAMWorkloadIdentityPoolProvider IAPBrand IAPIdentityAwareProxyClient IdentityPlatformConfig IdentityPlatformOAuthIDPConfig IdentityPlatformTenant IdentityPlatformTenantOAuthIDPConfig KMSCryptoKey KMSKeyRing LoggingLogBucket LoggingLogExclusion LoggingLogSink LoggingLogView MemcacheInstance MonitoringAlertPolicy MonitoringGroup MonitoringMetricDescriptor MonitoringMonitoredProject MonitoringNotificationChannel MonitoringService MonitoringServiceLevelObjective MonitoringUptimeCheckConfig NetworkConnectivityHub NetworkConnectivitySpoke NetworkSecurityAuthorizationPolicy NetworkSecurityClientTLSPolicy NetworkSecurityServerTLSPolicy NetworkServicesEndpointPolicy NetworkServicesGRPCRoute NetworkServicesGateway NetworkServicesHTTPRoute NetworkServicesMesh NetworkServicesTCPRoute NetworkServicesTLSRoute OSConfigGuestPolicy OSConfigOSPolicyAssignment PrivateCACAPool PrivateCACertificate PrivateCACertificateAuthority PrivateCACertificateTemplate Project PubSubLiteReservation PubSubSchema PubSubSubscription PubSubTopic RecaptchaEnterpriseKey RedisInstance ResourceManagerLien ResourceManagerPolicy RunJob RunService SQLDatabase SQLSSLCert SQLUser SecretManagerSecret SecretManagerSecretVersion Service ServiceDirectoryEndpoint ServiceDirectoryNamespace ServiceDirectoryService ServiceIdentity ServiceNetworkingConnection SourceRepoRepository SpannerDatabase SpannerInstance StorageBucket StorageBucketAccessControl StorageDefaultObjectAccessControl StorageNotification StorageTransferJob VPCAccessConnector The following kinds don't support the Merge populating behavior starting from the corresponding version: Kind Name Version LoggingLogMetric 1.118.1 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Ensure the YAML configuration used for acquisition does not have the cnrm.cloud.google.com/state-into-spec annotation.
- To further explain the difference introduced by this annotation, assume there is a spec with the following schema: foo1 : string foo2 : string bars : - bar : br1 : string br2 : string barz : bz1 : string bz2 : string Also assume you have specified the spec in your YAML as: spec : foo1 : "foo1" bars : - br1 : "1 br1" - br1 : "2 br1" barz : bz1 : "bz1" Then by default, the populated spec in the created Kubernetes resource might be: spec : foo1 : "foo1" foo2 : "foo2" bars : - br1 : "1 br1" br2 : "1 br2" - br1 : "2 br1" br2 : "2 br2" barz : bz1 : "bz1" bz2 : "bz2" While if you set cnrm.cloud.google.com/state-into-spec: absent , the final spec in the created Kubernetes resource will be: spec : foo1 : "foo1" bars : - br1 : "1 br1" - br1 : "2 br1" barz : bz1 : "bz1" When to use cnrm.cloud.google.com/state-into-spec: absent In most cases, you'll want to set cnrm.cloud.google.com/state-into-spec: absent to get the Absent populating behavior for spec fields.
- Configure the cluster-level or namespace-level stateIntoSpec override When installing Config Connector, or updating the Config Connector installation, you can configure the cluster-level or namespace-level stateIntoSpec override to be Absent in the ConfigConnector CR or ConfigConnectorContext CR. spec : stateIntoSpec : Absent This makes Absent the default spec fields populating behavior for any new resources created in the cluster or in the namespace when you don't specify the cnrm.cloud.google.com/state-into-spec annotation in the new resource YAMLs.

### "Configure container resources and replicas \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- Source ID: `site-docs-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- Create a file named configure-webhook-manager.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : replicas : 3 containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use kubectl apply to apply the modified configuration to your cluster: kubectl apply -f configure-webhook-manager.yaml Verify the successful configuration by running the following command. kubectl get controllerresource cnrm-webhook-manager -o jsonpath='{.status.healthy}' It should display status.healthy field set to true .
- The following YAML file shows an example configuration: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : NamespacedControllerResource metadata : name : cnrm-controller-manager # name should not contain the namespace ID suffix namespace : NAMESPACE spec : containers : - name : manager resources : limits : cpu : 200m memory : 512Mi requests : cpu : 100m memory : 256Mi Replace NAMESPACE with the name of your namespace.
- If you manually configure the replicas using the configuration YAML, the Config Connector operator automatically adjusts the minReplicas and maxReplicas of the HorizontalPodAutoscaler to ensure the cluster maintains at least the specified number of replicas in the configuration YAML.
- For example, to configure the memory request and limit of the webhook container of the cnrm-webhook-manager controller, create and apply the following YAML file: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use NamespacedControllerResource for the namespaced controller manager Use the NamespacedControllerResource custom resource only to configure resources for the cnrm-controller-manager when Config Connector is running in namespaced mode.

