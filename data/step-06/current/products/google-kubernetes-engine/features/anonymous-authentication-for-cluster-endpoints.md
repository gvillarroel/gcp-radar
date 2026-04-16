---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.670Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Anonymous authentication for cluster endpoints"
feature_slug: "anonymous-authentication-for-cluster-endpoints"
latest_feature_date: "2025-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ClusterUpdate"
keywords:
  - "anonymous"
  - "authentication"
  - "cluster"
  - "endpoints"
  - "gke"
  - "clusters"
  - "version"
  - "35"
---

# Anonymous authentication for cluster endpoints

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

New GKE clusters on version 1.35 and later reject anonymous requests to cluster endpoints by default except for health check endpoints.

## Extended Definition

New GKE clusters on version 1.35 and later reject anonymous requests to cluster endpoints by default except for health check endpoints.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ClusterUpdate](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ClusterUpdate)

## Supporting Pages

### Harden your cluster's security \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- Source ID: `site-docs-reference-2`
- Final score: 191
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To limit anonymous access to cluster endpoints, specify LIMITED for the --anonymous-authentication-config flag when you use the gcloud CLI or the GKE API to create or update Standard and Autopilot clusters.
- In GKE version 1.35.0-gke.1171000 and later, anonymous access to non-health-check endpoints is denied by default only on newly created clusters.
- Best practices Restrict access to cluster API discovery Place teams and environments in separate namespaces or clusters Use the principle of least privilege in access policies Use Workload Identity Federation for GKE to access Google Cloud APIs Use groups to manage access Restrict anonymous access to cluster endpoints Restrict access to cluster API discovery Recommended : restrict access to your control plane and nodes from the internet to prevent unintended access to cluster API discovery endpoints.
- Go to Policy details Restrict anonymous access to cluster endpoints Recommended : prevent anonymous requests to all cluster endpoints except for health check endpoints, in all Autopilot and Standard clusters.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Cluster JSON representation { "name" : string , "description" : string , "initialNodeCount" : integer , "nodeConfig" : { object ( NodeConfig ) } , "masterAuth" : { object ( MasterAuth ) } , "loggingService" : string , "monitoringService" : string , "network" : string , "clusterIpv4Cidr" : string , "addonsConfig" : { object ( AddonsConfig ) } , "subnetwork" : string , "nodePools" : [ { object ( NodePool ) } ] , "locations" : [ string ] , "enableKubernetesAlpha" : boolean , "alphaClusterFeatureGates" : [ string ] , "resourceLabels" : { string : string , ... } , "labelFingerprint" : string , "legacyAbac" : { object ( LegacyAbac ) } , "networkPolicy" : { object ( NetworkPolicy ) } , "ipAllocationPolicy" : { object ( IPAllocationPolicy ) } , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } , "autoscaling" : { object ( ClusterAutoscaling ) } , "networkConfig" : { object ( NetworkConfig ) } , "defaultMaxPodsConstraint" : { object ( MaxPodsConstraint ) } , "resourceUsageExportConfig" : { object ( ResourceUsageExportConfig ) } , "authenticatorGroupsConfig" : { object ( AuthenticatorGroupsConfig ) } , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "databaseEncryption" : { object ( DatabaseEncryption ) } , "verticalPodAutoscaling" : { object ( VerticalPodAutoscaling ) } , "shieldedNodes" : { object ( ShieldedNodes ) } , "releaseChannel" : { object ( ReleaseChannel ) } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "meshCertificates" : { object ( MeshCertificates ) } , "costManagementConfig" : { object ( CostManagementConfig ) } , "notificationConfig" : { object ( NotificationConfig ) } , "confidentialNodes" : { object ( ConfidentialNodes ) } , "identityServiceConfig" : { object ( IdentityServiceConfig ) } , "selfLink" : string , "zone" : string , "endpoint" : string , "initialClusterVersion" : string , "currentMasterVersion" : string , "currentNodeVersion" : string , "createTime" : string , "status" : enum ( Status ) , "statusMessage" : string , "nodeIpv4CidrSize" : integer , "servicesIpv4Cidr" : string , "instanceGroupUrls" : [ string ] , "currentNodeCount" : integer , "expireTime" : string , "location" : string , "enableTpu" : boolean , "tpuIpv4CidrBlock" : string , "conditions" : [ { object ( StatusCondition ) } ] , "autopilot" : { object ( Autopilot ) } , "id" : string , "loggingConfig" : { object ( LoggingConfig ) } , "monitoringConfig" : { object ( MonitoringConfig ) } , "nodePoolAutoConfig" : { object ( NodePoolAutoConfig ) } , "podAutoscaling" : { object ( PodAutoscaling ) } , "etag" : string , "fleet" : { object ( Fleet ) } , "securityPostureConfig" : { object ( SecurityPostureConfig ) } , "controlPlaneEndpointsConfig" : { object ( ControlPlaneEndpointsConfig ) } , "enableK8sBetaApis" : { object ( K8sBetaAPIConfig ) } , "enterpriseConfig" : { object ( EnterpriseConfig ) } , "secretManagerConfig" : { object ( SecretManagerConfig ) } , "compliancePostureConfig" : { object ( CompliancePostureConfig ) } , "gkeAutoUpgradeConfig" : { object ( GkeAutoUpgradeConfig ) } , "anonymousAuthenticationConfig" : { object ( AnonymousAuthenticationConfig ) } , "scheduleUpgradeConfig" : { object ( ScheduleUpgradeConfig ) } , "managedOpentelemetryConfig" : { object ( ManagedOpenTelemetryConfig ) } , "managedMachineLearningDiagnosticsConfig" : { object ( ManagedMachineLearningDiagnosticsConfig ) } , // Union field node pool defaults can be only one of the following: "nodePoolDefaults" : { object ( NodePoolDefaults ) } // End of list of possible types for union field node pool defaults . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field user managed keys config can be only one of the following: "userManagedKeysConfig" : { object ( UserManagedKeysConfig ) } // End of list of possible types for union field user managed keys config . // Union field rbac binding config can be only one of the following: "rbacBindingConfig" : { object ( RBACBindingConfig ) } // End of list of possible types for union field rbac binding config . } Fields name string The name of this cluster.
- Enable/Disable Compliance Posture features for the cluster. gkeAutoUpgradeConfig object ( GkeAutoUpgradeConfig ) Configuration for GKE auto upgrades. anonymousAuthenticationConfig object ( AnonymousAuthenticationConfig ) Configuration for limiting anonymous access to all endpoints except the health checks. scheduleUpgradeConfig object ( ScheduleUpgradeConfig ) Optional.
- Default: clusters.autopilot,clusters.createTime,clusters.currentMasterVersion,clusters.currentNodeCount,clusters.currentNodeVersion,clusters.description,clusters.endpoint,clusters.fleet,clusters.location,clusters.name,clusters.network,clusters.nodePools.name,clusters.releaseChannel,clusters.resourceLabels,clusters.selfLink,clusters.status,clusters.statusMessage,clusters.subnetwork,missingZones.
- AnonymousAuthenticationConfig JSON representation { "mode" : enum ( Mode ) } Fields mode enum ( Mode ) Defines the mode of limiting anonymous access in the cluster.

### ClusterUpdate \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ClusterUpdate](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ClusterUpdate)
- Source ID: `site-api-reference`
- Final score: 187
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "desiredNodeVersion" : string , "desiredMonitoringService" : string , "desiredAddonsConfig" : { object ( AddonsConfig ) } , "desiredNodePoolId" : string , "desiredImageType" : string , "desiredDatabaseEncryption" : { object ( DatabaseEncryption ) } , "desiredWorkloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "desiredMeshCertificates" : { object ( MeshCertificates ) } , "desiredShieldedNodes" : { object ( ShieldedNodes ) } , "desiredCostManagementConfig" : { object ( CostManagementConfig ) } , "desiredDnsConfig" : { object ( DNSConfig ) } , "desiredNodePoolAutoscaling" : { object ( NodePoolAutoscaling ) } , "desiredLocations" : [ string ] , "desiredMasterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "desiredClusterAutoscaling" : { object ( ClusterAutoscaling ) } , "desiredBinaryAuthorization" : { object ( BinaryAuthorization ) } , "desiredLoggingService" : string , "desiredResourceUsageExportConfig" : { object ( ResourceUsageExportConfig ) } , "desiredVerticalPodAutoscaling" : { object ( VerticalPodAutoscaling ) } , "desiredPrivateClusterConfig" : { object ( PrivateClusterConfig ) } , "desiredIntraNodeVisibilityConfig" : { object ( IntraNodeVisibilityConfig ) } , "desiredDefaultSnatStatus" : { object ( DefaultSnatStatus ) } , "desiredReleaseChannel" : { object ( ReleaseChannel ) } , "desiredL4ilbSubsettingConfig" : { object ( ILBSubsettingConfig ) } , "desiredDatapathProvider" : enum ( DatapathProvider ) , "desiredPrivateIpv6GoogleAccess" : enum ( PrivateIPv6GoogleAccess ) , "desiredNotificationConfig" : { object ( NotificationConfig ) } , "desiredAuthenticatorGroupsConfig" : { object ( AuthenticatorGroupsConfig ) } , "desiredLoggingConfig" : { object ( LoggingConfig ) } , "desiredMonitoringConfig" : { object ( MonitoringConfig ) } , "desiredIdentityServiceConfig" : { object ( IdentityServiceConfig ) } , "desiredServiceExternalIpsConfig" : { object ( ServiceExternalIPsConfig ) } , "desiredControlPlaneEndpointsConfig" : { object ( ControlPlaneEndpointsConfig ) } , "desiredMasterVersion" : string , "desiredParentProductConfig" : { object ( ParentProductConfig ) } , "desiredGcfsConfig" : { object ( GcfsConfig ) } , "desiredNodePoolAutoConfigNetworkTags" : { object ( NetworkTags ) } , "desiredPodAutoscaling" : { object ( PodAutoscaling ) } , "desiredGatewayApiConfig" : { object ( GatewayAPIConfig ) } , "etag" : string , "desiredNodePoolLoggingConfig" : { object ( NodePoolLoggingConfig ) } , "desiredFleet" : { object ( Fleet ) } , "desiredStackType" : enum ( StackType ) , "additionalPodRangesConfig" : { object ( AdditionalPodRangesConfig ) } , "removedAdditionalPodRangesConfig" : { object ( AdditionalPodRangesConfig ) } , "enableK8sBetaApis" : { object ( K8sBetaAPIConfig ) } , "desiredSecurityPostureConfig" : { object ( SecurityPostureConfig ) } , "desiredNetworkPerformanceConfig" : { object ( ClusterNetworkPerformanceConfig ) } , "desiredAutopilotWorkloadPolicyConfig" : { object ( WorkloadPolicyConfig ) } , "desiredK8sBetaApis" : { object ( K8sBetaAPIConfig ) } , "desiredContainerdConfig" : { object ( ContainerdConfig ) } , "desiredNodePoolAutoConfigResourceManagerTags" : { object ( ResourceManagerTags ) } , "desiredNodeKubeletConfig" : { object ( NodeKubeletConfig ) } , "desiredNodePoolAutoConfigKubeletConfig" : { object ( NodeKubeletConfig ) } , "userManagedKeysConfig" : { object ( UserManagedKeysConfig ) } , "desiredAdditionalIpRangesConfig" : { object ( DesiredAdditionalIPRangesConfig ) } , "desiredEnterpriseConfig" : { object ( DesiredEnterpriseConfig ) } , "desiredAutoIpamConfig" : { object ( AutoIpamConfig ) } , "desiredNodePoolAutoConfigLinuxNodeConfig" : { object ( LinuxNodeConfig ) } , "desiredUserManagedKeysConfig" : { object ( UserManagedKeysConfig ) } , "desiredAnonymousAuthenticationConfig" : { object ( AnonymousAuthenticationConfig ) } , "gkeAutoUpgradeConfig" : { object ( GkeAutoUpgradeConfig ) } , "desiredNetworkTierConfig" : { object ( NetworkTierConfig ) } , "desiredPrivilegedAdmissionConfig" : { object ( PrivilegedAdmissionConfig ) } , "desiredManagedOpentelemetryConfig" : { object ( ManagedOpenTelemetryConfig ) } , "desiredEnablePrivateEndpoint" : boolean , "desiredDefaultEnablePrivateNodes" : boolean , "desiredEnableFqdnNetworkPolicy" : boolean , "desiredEnableMultiNetworking" : boolean , "desiredInTransitEncryptionConfig" : enum ( InTransitEncryptionConfig ) , "desiredEnableCiliumClusterwideNetworkPolicy" : boolean , "desiredSecretManagerConfig" : { object ( SecretManagerConfig ) } , "desiredCompliancePostureConfig" : { object ( CompliancePostureConfig ) } , "desiredRbacBindingConfig" : { object ( RBACBindingConfig ) } , "desiredDisableL4LbFirewallReconciliation" : boolean } Fields desiredNodeVersion string The Kubernetes version to change the nodes to (typically an upgrade).
- Currently only cgroupMode can be set here. desiredUserManagedKeysConfig object ( UserManagedKeysConfig ) The desired user managed keys config for the cluster. desiredAnonymousAuthenticationConfig object ( AnonymousAuthenticationConfig ) Configuration for limiting anonymous access to all endpoints except the health checks. gkeAutoUpgradeConfig object ( GkeAutoUpgradeConfig ) Configuration for GKE auto upgrade. desiredNetworkTierConfig object ( NetworkTierConfig ) The desired network tier configuration for the cluster. desiredPrivilegedAdmissionConfig object ( PrivilegedAdmissionConfig ) The desired privileged admission config for the cluster. desiredManagedOpentelemetryConfig object ( ManagedOpenTelemetryConfig ) The desired managed open telemetry configuration. desiredEnablePrivateEndpoint (deprecated) boolean This item is deprecated!
- Deprecated: Use desiredControlPlaneEndpointsConfig.ip endpoints config.global access instead. desiredIntraNodeVisibilityConfig object ( IntraNodeVisibilityConfig ) The desired config of Intra-node visibility. desiredDefaultSnatStatus object ( DefaultSnatStatus ) The desired status of whether to disable default sNAT for this cluster. desiredReleaseChannel object ( ReleaseChannel ) The desired release channel configuration. desiredL4ilbSubsettingConfig object ( ILBSubsettingConfig ) The desired L4 Internal Load Balancer Subsetting configuration. desiredDatapathProvider enum ( DatapathProvider ) The desired datapath provider for the cluster. desiredPrivateIpv6GoogleAccess enum ( PrivateIPv6GoogleAccess ) The desired state of IPv6 connectivity to Google Services. desiredNotificationConfig object ( NotificationConfig ) The desired notification configuration. desiredAuthenticatorGroupsConfig object ( AuthenticatorGroupsConfig ) The desired authenticator groups config for the cluster. desiredLoggingConfig object ( LoggingConfig ) The desired logging configuration. desiredMonitoringConfig object ( MonitoringConfig ) The desired monitoring configuration. desiredIdentityServiceConfig object ( IdentityServiceConfig ) The desired Identity Service component configuration. desiredServiceExternalIpsConfig object ( ServiceExternalIPsConfig ) ServiceExternalIPsConfig specifies the config for the use of Services with ExternalIPs field. desiredControlPlaneEndpointsConfig object ( ControlPlaneEndpointsConfig ) Control plane endpoints configuration. desiredMasterVersion string The Kubernetes version to change the master to.
- Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: "latest": picks the highest valid Kubernetes version "1.X": picks the highest valid patch+gke.N patch in the 1.X version "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version "1.X.Y-gke.N": picks an explicit Kubernetes version "-": picks the default Kubernetes version desiredParentProductConfig object ( ParentProductConfig ) The desired parent product config for the cluster. desiredGcfsConfig object ( GcfsConfig ) The desired GCFS config for the cluster desiredNodePoolAutoConfigNetworkTags object ( NetworkTags ) The desired network tags that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. desiredPodAutoscaling object ( PodAutoscaling ) The desired config for pod autoscaling. desiredGatewayApiConfig object ( GatewayAPIConfig ) The desired config of Gateway API on this cluster. etag string The current etag of the cluster.

