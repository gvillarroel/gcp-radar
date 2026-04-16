---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.911Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Internal load balancer subsetting"
feature_slug: "internal-load-balancer-subsetting"
latest_feature_date: "2021-06-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ClusterUpdate"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "internal"
  - "load"
  - "balancer"
  - "subsetting"
  - "enables"
  - "gke"
  - "versions"
---

# Internal load balancer subsetting

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Enables internal load balancer subsetting for supported GKE versions.

## Extended Definition

Enables internal load balancer subsetting for supported GKE versions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ClusterUpdate](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ClusterUpdate)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- To update the default setting, use ClusterUpdate.desired default enable private nodes Union field disable l4 lb firewall reconciliation . disable l4 lb firewall reconciliation can be only one of the following: disableL4LbFirewallReconciliation boolean Disable L4 load balancer VPC firewalls to enable firewall policies.
- When disabled is set to false, default IP masquerade rules will be applied to the nodes to prevent sNAT on cluster internal traffic. enableL4ilbSubsetting boolean Whether L4ILB Subsetting is enabled for this cluster. datapathProvider enum ( DatapathProvider ) The desired datapath provider for this cluster.
- CloudRunConfig JSON representation { "disabled" : boolean , "loadBalancerType" : enum ( LoadBalancerType ) } Fields disabled boolean Whether Cloud Run addon is enabled for this cluster. loadBalancerType enum ( LoadBalancerType ) Which load balancer type is installed for Cloud Run.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- To update the default setting, use ClusterUpdate.desired default enable private nodes Union field disable l4 lb firewall reconciliation . disable l4 lb firewall reconciliation can be only one of the following: disableL4LbFirewallReconciliation boolean Disable L4 load balancer VPC firewalls to enable firewall policies.
- When disabled is set to false, default IP masquerade rules will be applied to the nodes to prevent sNAT on cluster internal traffic. enableL4ilbSubsetting boolean Whether L4ILB Subsetting is enabled for this cluster. datapathProvider enum ( DatapathProvider ) The desired datapath provider for this cluster.
- CloudRunConfig JSON representation { "disabled" : boolean , "loadBalancerType" : enum ( LoadBalancerType ) } Fields disabled boolean Whether Cloud Run addon is enabled for this cluster. loadBalancerType enum ( LoadBalancerType ) Which load balancer type is installed for Cloud Run.

### ClusterUpdate \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ClusterUpdate](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ClusterUpdate)
- Source ID: `site-api-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deprecated: Use desiredControlPlaneEndpointsConfig.ip endpoints config.global access instead. desiredIntraNodeVisibilityConfig object ( IntraNodeVisibilityConfig ) The desired config of Intra-node visibility. desiredDefaultSnatStatus object ( DefaultSnatStatus ) The desired status of whether to disable default sNAT for this cluster. desiredReleaseChannel object ( ReleaseChannel ) The desired release channel configuration. desiredL4ilbSubsettingConfig object ( ILBSubsettingConfig ) The desired L4 Internal Load Balancer Subsetting configuration. desiredDatapathProvider enum ( DatapathProvider ) The desired datapath provider for the cluster. desiredPrivateIpv6GoogleAccess enum ( PrivateIPv6GoogleAccess ) The desired state of IPv6 connectivity to Google Services. desiredNotificationConfig object ( NotificationConfig ) The desired notification configuration. desiredAuthenticatorGroupsConfig object ( AuthenticatorGroupsConfig ) The desired authenticator groups config for the cluster. desiredLoggingConfig object ( LoggingConfig ) The desired logging configuration. desiredMonitoringConfig object ( MonitoringConfig ) The desired monitoring configuration. desiredIdentityServiceConfig object ( IdentityServiceConfig ) The desired Identity Service component configuration. desiredServiceExternalIpsConfig object ( ServiceExternalIPsConfig ) ServiceExternalIPsConfig specifies the config for the use of Services with ExternalIPs field. desiredControlPlaneEndpointsConfig object ( ControlPlaneEndpointsConfig ) Control plane endpoints configuration. desiredMasterVersion string The Kubernetes version to change the master to.
- ILBSubsettingConfig ILBSubsettingConfig contains the desired config of L4 Internal LoadBalancer subsetting on this cluster.
- JSON representation { "desiredNodeVersion" : string , "desiredMonitoringService" : string , "desiredAddonsConfig" : { object ( AddonsConfig ) } , "desiredNodePoolId" : string , "desiredImageType" : string , "desiredDatabaseEncryption" : { object ( DatabaseEncryption ) } , "desiredWorkloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "desiredMeshCertificates" : { object ( MeshCertificates ) } , "desiredShieldedNodes" : { object ( ShieldedNodes ) } , "desiredCostManagementConfig" : { object ( CostManagementConfig ) } , "desiredDnsConfig" : { object ( DNSConfig ) } , "desiredNodePoolAutoscaling" : { object ( NodePoolAutoscaling ) } , "desiredLocations" : [ string ] , "desiredMasterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "desiredClusterAutoscaling" : { object ( ClusterAutoscaling ) } , "desiredBinaryAuthorization" : { object ( BinaryAuthorization ) } , "desiredLoggingService" : string , "desiredResourceUsageExportConfig" : { object ( ResourceUsageExportConfig ) } , "desiredVerticalPodAutoscaling" : { object ( VerticalPodAutoscaling ) } , "desiredPrivateClusterConfig" : { object ( PrivateClusterConfig ) } , "desiredIntraNodeVisibilityConfig" : { object ( IntraNodeVisibilityConfig ) } , "desiredDefaultSnatStatus" : { object ( DefaultSnatStatus ) } , "desiredReleaseChannel" : { object ( ReleaseChannel ) } , "desiredL4ilbSubsettingConfig" : { object ( ILBSubsettingConfig ) } , "desiredDatapathProvider" : enum ( DatapathProvider ) , "desiredPrivateIpv6GoogleAccess" : enum ( PrivateIPv6GoogleAccess ) , "desiredNotificationConfig" : { object ( NotificationConfig ) } , "desiredAuthenticatorGroupsConfig" : { object ( AuthenticatorGroupsConfig ) } , "desiredLoggingConfig" : { object ( LoggingConfig ) } , "desiredMonitoringConfig" : { object ( MonitoringConfig ) } , "desiredIdentityServiceConfig" : { object ( IdentityServiceConfig ) } , "desiredServiceExternalIpsConfig" : { object ( ServiceExternalIPsConfig ) } , "desiredControlPlaneEndpointsConfig" : { object ( ControlPlaneEndpointsConfig ) } , "desiredMasterVersion" : string , "desiredParentProductConfig" : { object ( ParentProductConfig ) } , "desiredGcfsConfig" : { object ( GcfsConfig ) } , "desiredNodePoolAutoConfigNetworkTags" : { object ( NetworkTags ) } , "desiredPodAutoscaling" : { object ( PodAutoscaling ) } , "desiredGatewayApiConfig" : { object ( GatewayAPIConfig ) } , "etag" : string , "desiredNodePoolLoggingConfig" : { object ( NodePoolLoggingConfig ) } , "desiredFleet" : { object ( Fleet ) } , "desiredStackType" : enum ( StackType ) , "additionalPodRangesConfig" : { object ( AdditionalPodRangesConfig ) } , "removedAdditionalPodRangesConfig" : { object ( AdditionalPodRangesConfig ) } , "enableK8sBetaApis" : { object ( K8sBetaAPIConfig ) } , "desiredSecurityPostureConfig" : { object ( SecurityPostureConfig ) } , "desiredNetworkPerformanceConfig" : { object ( ClusterNetworkPerformanceConfig ) } , "desiredAutopilotWorkloadPolicyConfig" : { object ( WorkloadPolicyConfig ) } , "desiredK8sBetaApis" : { object ( K8sBetaAPIConfig ) } , "desiredContainerdConfig" : { object ( ContainerdConfig ) } , "desiredNodePoolAutoConfigResourceManagerTags" : { object ( ResourceManagerTags ) } , "desiredNodeKubeletConfig" : { object ( NodeKubeletConfig ) } , "desiredNodePoolAutoConfigKubeletConfig" : { object ( NodeKubeletConfig ) } , "userManagedKeysConfig" : { object ( UserManagedKeysConfig ) } , "desiredAdditionalIpRangesConfig" : { object ( DesiredAdditionalIPRangesConfig ) } , "desiredEnterpriseConfig" : { object ( DesiredEnterpriseConfig ) } , "desiredAutoIpamConfig" : { object ( AutoIpamConfig ) } , "desiredNodePoolAutoConfigLinuxNodeConfig" : { object ( LinuxNodeConfig ) } , "desiredUserManagedKeysConfig" : { object ( UserManagedKeysConfig ) } , "desiredAnonymousAuthenticationConfig" : { object ( AnonymousAuthenticationConfig ) } , "gkeAutoUpgradeConfig" : { object ( GkeAutoUpgradeConfig ) } , "desiredNetworkTierConfig" : { object ( NetworkTierConfig ) } , "desiredPrivilegedAdmissionConfig" : { object ( PrivilegedAdmissionConfig ) } , "desiredManagedOpentelemetryConfig" : { object ( ManagedOpenTelemetryConfig ) } , "desiredEnablePrivateEndpoint" : boolean , "desiredDefaultEnablePrivateNodes" : boolean , "desiredEnableFqdnNetworkPolicy" : boolean , "desiredEnableMultiNetworking" : boolean , "desiredInTransitEncryptionConfig" : enum ( InTransitEncryptionConfig ) , "desiredEnableCiliumClusterwideNetworkPolicy" : boolean , "desiredSecretManagerConfig" : { object ( SecretManagerConfig ) } , "desiredCompliancePostureConfig" : { object ( CompliancePostureConfig ) } , "desiredRbacBindingConfig" : { object ( RBACBindingConfig ) } , "desiredDisableL4LbFirewallReconciliation" : boolean } Fields desiredNodeVersion string The Kubernetes version to change the nodes to (typically an upgrade).
- JSON representation { "enabled" : boolean } Fields enabled boolean Enables l4 ILB subsetting for this cluster.

