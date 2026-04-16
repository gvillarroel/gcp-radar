---
title: "ClusterUpdate \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ClusterUpdate
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-organization
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ClusterUpdate
  title: "ClusterUpdate \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Reference
Send feedback
ClusterUpdate
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
IntraNodeVisibilityConfig
JSON representation
ILBSubsettingConfig
JSON representation
DesiredAdditionalIPRangesConfig
JSON representation
DesiredEnterpriseConfig
JSON representation
ClusterUpdate describes an update to the cluster. Exactly one update can be applied to a cluster with each request, so at most one field can be provided.
JSON representation
{
"desiredNodeVersion" : string ,
"desiredMonitoringService" : string ,
"desiredAddonsConfig" : {
object ( AddonsConfig )
} ,
"desiredNodePoolId" : string ,
"desiredImageType" : string ,
"desiredDatabaseEncryption" : {
object ( DatabaseEncryption )
} ,
"desiredWorkloadIdentityConfig" : {
object ( WorkloadIdentityConfig )
} ,
"desiredMeshCertificates" : {
object ( MeshCertificates )
} ,
"desiredShieldedNodes" : {
object ( ShieldedNodes )
} ,
"desiredCostManagementConfig" : {
object ( CostManagementConfig )
} ,
"desiredDnsConfig" : {
object ( DNSConfig )
} ,
"desiredNodePoolAutoscaling" : {
object ( NodePoolAutoscaling )
} ,
"desiredLocations" : [
string
] ,
"desiredMasterAuthorizedNetworksConfig" : {
object ( MasterAuthorizedNetworksConfig )
} ,
"desiredClusterAutoscaling" : {
object ( ClusterAutoscaling )
} ,
"desiredBinaryAuthorization" : {
object ( BinaryAuthorization )
} ,
"desiredLoggingService" : string ,
"desiredResourceUsageExportConfig" : {
object ( ResourceUsageExportConfig )
} ,
"desiredVerticalPodAutoscaling" : {
object ( VerticalPodAutoscaling )
} ,
"desiredPrivateClusterConfig" : {
object ( PrivateClusterConfig )
} ,
"desiredIntraNodeVisibilityConfig" : {
object ( IntraNodeVisibilityConfig )
} ,
"desiredDefaultSnatStatus" : {
object ( DefaultSnatStatus )
} ,
"desiredReleaseChannel" : {
object ( ReleaseChannel )
} ,
"desiredL4ilbSubsettingConfig" : {
object ( ILBSubsettingConfig )
} ,
"desiredDatapathProvider" : enum ( DatapathProvider ) ,
"desiredPrivateIpv6GoogleAccess" : enum ( PrivateIPv6GoogleAccess ) ,
"desiredNotificationConfig" : {
object ( NotificationConfig )
} ,
"desiredAuthenticatorGroupsConfig" : {
object ( AuthenticatorGroupsConfig )
} ,
"desiredLoggingConfig" : {
object ( LoggingConfig )
} ,
"desiredMonitoringConfig" : {
object ( MonitoringConfig )
} ,
"desiredIdentityServiceConfig" : {
object ( IdentityServiceConfig )
} ,
"desiredServiceExternalIpsConfig" : {
object ( ServiceExternalIPsConfig )
} ,
"desiredControlPlaneEndpointsConfig" : {
object ( ControlPlaneEndpointsConfig )
} ,
"desiredMasterVersion" : string ,
"desiredParentProductConfig" : {
object ( ParentProductConfig )
} ,
"desiredGcfsConfig" : {
object ( GcfsConfig )
} ,
"desiredNodePoolAutoConfigNetworkTags" : {
object ( NetworkTags )
} ,
"desiredPodAutoscaling" : {
object ( PodAutoscaling )
} ,
"desiredGatewayApiConfig" : {
object ( GatewayAPIConfig )
} ,
"etag" : string ,
"desiredNodePoolLoggingConfig" : {
object ( NodePoolLoggingConfig )
} ,
"desiredFleet" : {
object ( Fleet )
} ,
"desiredStackType" : enum ( StackType ) ,
"additionalPodRangesConfig" : {
object ( AdditionalPodRangesConfig )
} ,
"removedAdditionalPodRangesConfig" : {
object ( AdditionalPodRangesConfig )
} ,
"enableK8sBetaApis" : {
object ( K8sBetaAPIConfig )
} ,
"desiredSecurityPostureConfig" : {
object ( SecurityPostureConfig )
} ,
"desiredNetworkPerformanceConfig" : {
object ( ClusterNetworkPerformanceConfig )
} ,
"desiredAutopilotWorkloadPolicyConfig" : {
object ( WorkloadPolicyConfig )
} ,
"desiredK8sBetaApis" : {
object ( K8sBetaAPIConfig )
} ,
"desiredContainerdConfig" : {
object ( ContainerdConfig )
} ,
"desiredNodePoolAutoConfigResourceManagerTags" : {
object ( ResourceManagerTags )
} ,
"desiredNodeKubeletConfig" : {
object ( NodeKubeletConfig )
} ,
"desiredNodePoolAutoConfigKubeletConfig" : {
object ( NodeKubeletConfig )
} ,
"userManagedKeysConfig" : {
object ( UserManagedKeysConfig )
} ,
"desiredAdditionalIpRangesConfig" : {
object ( DesiredAdditionalIPRangesConfig )
} ,
"desiredEnterpriseConfig" : {
object ( DesiredEnterpriseConfig )
} ,
"desiredAutoIpamConfig" : {
object ( AutoIpamConfig )
} ,
"desiredNodePoolAutoConfigLinuxNodeConfig" : {
object ( LinuxNodeConfig )
} ,
"desiredUserManagedKeysConfig" : {
object ( UserManagedKeysConfig )
} ,
"desiredAnonymousAuthenticationConfig" : {
object ( AnonymousAuthenticationConfig )
} ,
"gkeAutoUpgradeConfig" : {
object ( GkeAutoUpgradeConfig )
} ,
"desiredNetworkTierConfig" : {
object ( NetworkTierConfig )
} ,
"desiredPrivilegedAdmissionConfig" : {
object ( PrivilegedAdmissionConfig )
} ,
"desiredManagedOpentelemetryConfig" : {
object ( ManagedOpenTelemetryConfig )
} ,
"desiredEnablePrivateEndpoint" : boolean ,
"desiredDefaultEnablePrivateNodes" : boolean ,
"desiredEnableFqdnNetworkPolicy" : boolean ,
"desiredEnableMultiNetworking" : boolean ,
"desiredInTransitEncryptionConfig" : enum ( InTransitEncryptionConfig ) ,
"desiredEnableCiliumClusterwideNetworkPolicy" : boolean ,
"desiredSecretManagerConfig" : {
object ( SecretManagerConfig )
} ,
"desiredCompliancePostureConfig" : {
object ( CompliancePostureConfig )
} ,
"desiredRbacBindingConfig" : {
object ( RBACBindingConfig )
} ,
"desiredDisableL4LbFirewallReconciliation" : boolean
}
Fields
desiredNodeVersion
string
The Kubernetes version to change the nodes to (typically an upgrade).
Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior:
"latest": picks the highest valid Kubernetes version
"1.X": picks the highest valid patch+gke.N patch in the 1.X version
"1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version
"1.X.Y-gke.N": picks an explicit Kubernetes version
"-": picks the Kubernetes master version
desiredMonitoringService
string
The monitoring service the cluster should use to write metrics. Currently available options:
monitoring.googleapis.com/kubernetes - The Cloud Monitoring service with a Kubernetes-native resource model
monitoring.googleapis.com - The legacy Cloud Monitoring service (no longer available as of GKE 1.15).
none - No metrics will be exported from the cluster.
If left as an empty string, monitoring.googleapis.com/kubernetes will be used for GKE 1.14+ or monitoring.googleapis.com for earlier versions.
desiredAddonsConfig
object ( AddonsConfig )
Configurations for the various addons available to run in the cluster.
desiredNodePoolId
string
The node pool to be upgraded. This field is mandatory if "desiredNodeVersion", "desired_image_family" or "desiredNodePoolAutoscaling" is specified and there is more than one node pool on the cluster.
desiredImageType
string
The desired image type for the node pool. NOTE: Set the "desired_node_pool" field as well.
desiredDatabaseEncryption
object ( DatabaseEncryption )
Configuration of etcd encryption.
desiredWorkloadIdentityConfig
object ( WorkloadIdentityConfig )
Configuration for Workload Identity.
desiredMeshCertificates
object ( MeshCertificates )
Configuration for issuance of mTLS keys and certificates to Kubernetes pods.
desiredShieldedNodes
object ( ShieldedNodes )
Configuration for Shielded Nodes.
desiredCostManagementConfig
object ( CostManagementConfig )
The desired configuration for the fine-grained cost management feature.
desiredDnsConfig
object ( DNSConfig )
DNSConfig contains clusterDNS config for this cluster.
desiredNodePoolAutoscaling
object ( NodePoolAutoscaling )
Autoscaler configuration for the node pool specified in desiredNodePoolId. If there is only one pool in the cluster and desiredNodePoolId is not provided then the change applies to that single node pool.
desiredLocations[]
string
The desired list of Google Compute Engine zones in which the cluster's nodes should be located.
This list must always include the cluster's primary zone.
Warning: changing cluster locations will update the locations of all node pools and will result in nodes being added and/or removed.
desiredMasterAuthorizedNetworksConfig (deprecated)
object ( MasterAuthorizedNetworksConfig )
This item is deprecated!
The desired configuration options for master authorized networks feature.
Deprecated: Use desiredControlPlaneEndpointsConfig.ip_endpoints_config.authorized_networks_config instead.
desiredClusterAutoscaling
object ( ClusterAutoscaling )
Cluster-level autoscaling configuration.
desiredBinaryAuthorization
object ( BinaryAuthorization )
The desired configuration options for the Binary Authorization feature.
desiredLoggingService
string
The logging service the cluster should use to write logs. Currently available options:
logging.googleapis.com/kubernetes - The Cloud Logging service with a Kubernetes-native resource model
logging.googleapis.com - The legacy Cloud Logging service (no longer available as of GKE 1.15).
none - no logs will be exported from the cluster.
If left as an empty string, logging.googleapis.com/kubernetes will be used for GKE 1.14+ or logging.googleapis.com for earlier versions.
desiredResourceUsageExportConfig
object ( ResourceUsageExportConfig )
The desired configuration for exporting resource usage.
desiredVerticalPodAutoscaling
object ( VerticalPodAutoscaling )
Cluster-level Vertical Pod Autoscaling configuration.
desiredPrivateClusterConfig (deprecated)
object ( PrivateClusterConfig )
This item is deprecated!
The desired private cluster configuration. masterGlobalAccessConfig is the only field that can be changed via this field. See also ClusterUpdate.desired_enable_private_endpoint for modifying other fields within PrivateClusterConfig .
Deprecated: Use desiredControlPlaneEndpointsConfig.ip_endpoints_config.global_access instead.
desiredIntraNodeVisibilityConfig
object ( IntraNodeVisibilityConfig )
The desired config of Intra-node visibility.
desiredDefaultSnatStatus
object ( DefaultSnatStatus )
The desired status of whether to disable default sNAT for this cluster.
desiredReleaseChannel
object ( ReleaseChannel )
The desired release channel configuration.
desiredL4ilbSubsettingConfig
object ( ILBSubsettingConfig )
The desired L4 Internal Load Balancer Subsetting configuration.
desiredDatapathProvider
enum ( DatapathProvider )
The desired datapath provider for the cluster.
desiredPrivateIpv6GoogleAccess
enum ( PrivateIPv6GoogleAccess )
The desired state of IPv6 connectivity to Google Services.
desiredNotificationConfig
object ( NotificationConfig )
The desired notification configuration.
desiredAuthenticatorGroupsConfig
object ( AuthenticatorGroupsConfig )
The desired authenticator groups config for the cluster.
desiredLoggingConfig
object ( LoggingConfig )
The desired logging configuration.
desiredMonitoringConfig
object ( MonitoringConfig )
The desired monitoring configuration.
desiredIdentityServiceConfig
object ( IdentityServiceConfig )
The desired Identity Service component configuration.
desiredServiceExternalIpsConfig
object ( ServiceExternalIPsConfig )
ServiceExternalIPsConfig specifies the config for the use of Services with ExternalIPs field.
desiredControlPlaneEndpointsConfig
object ( ControlPlaneEndpointsConfig )
Control plane endpoints configuration.
desiredMasterVersion
string
The Kubernetes version to change the master to.
Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior:
"latest": picks the highest valid Kubernetes version
"1.X": picks the highest valid patch+gke.N patch in the 1.X version
"1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version
"1.X.Y-gke.N": picks an explicit Kubernetes version
"-": picks the default Kubernetes version
desiredParentProductConfig
object ( ParentProductConfig )
The desired parent product config for the cluster.
desiredGcfsConfig
object ( GcfsConfig )
The desired GCFS config for the cluster
desiredNodePoolAutoConfigNetworkTags
object ( NetworkTags )
The desired network tags that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters.
desiredPodAutoscaling
object ( PodAutoscaling )
The desired config for pod autoscaling.
desiredGatewayApiConfig
object ( GatewayAPIConfig )
The desired config of Gateway API on this cluster.
etag
string
The current etag of the cluster. If an etag is provided and does not match the current etag of the cluster, update will be blocked and an ABORTED error will be returned.
desiredNodePoolLoggingConfig
object ( NodePoolLoggingConfig )
The desired node pool logging configuration defaults for the cluster.
desiredFleet
object ( Fleet )
The desired fleet configuration for the cluster.
desiredStackType
enum ( StackType )
The desired stack type of the cluster. If a stack type is provided and does not match the current stack type of the cluster, update will attempt to change the stack type to the new type.
additionalPodRangesConfig
object ( AdditionalPodRangesConfig )
The additional pod ranges to be added to the cluster. These pod ranges can be used by node pools to allocate pod IPs.
removedAdditionalPodRangesConfig
object ( AdditionalPodRangesConfig )
The additional pod ranges that are to be removed from the cluster. The pod ranges specified here must have been specified earlier in the 'additionalPodRangesConfig' argument.
enableK8sBetaApis
object ( K8sBetaAPIConfig )
Kubernetes open source beta apis enabled on the cluster. Only beta apis
desiredSecurityPostureConfig
object ( SecurityPostureConfig )
Enable/Disable Security Posture API features for the cluster.
desiredNetworkPerformanceConfig
object ( ClusterNetworkPerformanceConfig )
The desired network performance config.
desiredAutopilotWorkloadPolicyConfig
object ( WorkloadPolicyConfig )
WorkloadPolicyConfig is the configuration related to GCW workload policy
desiredK8sBetaApis
object ( K8sBetaAPIConfig )
Desired Beta APIs to be enabled for cluster.
desiredContainerdConfig
object ( ContainerdConfig )
The desired containerd config for the cluster.
desiredNodePoolAutoConfigResourceManagerTags
object ( ResourceManagerTags )
The desired resource manager tags that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters.
desiredNodeKubeletConfig
object ( NodeKubeletConfig )
The desired node kubelet config for the cluster.
desiredNodePoolAutoConfigKubeletConfig
object ( NodeKubeletConfig )
The desired node kubelet config for all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters.
userManagedKeysConfig (deprecated)
object ( UserManagedKeysConfig )
This item is deprecated!
The Custom keys configuration for the cluster.
This field is deprecated. Use ClusterUpdate.desired_user_managed_keys_config instead.
desiredAdditionalIpRangesConfig
object ( DesiredAdditionalIPRangesConfig )
The desired config for additional subnetworks attached to the cluster.
desiredEnterpriseConfig (deprecated)
object ( DesiredEnterpriseConfig )
This item is deprecated!
The desired enterprise configuration for the cluster.
Deprecated: GKE Enterprise features are now available without an Enterprise tier.
desiredAutoIpamConfig
object ( AutoIpamConfig )
AutoIpamConfig contains all information related to Auto IPAM
desiredNodePoolAutoConfigLinuxNodeConfig
object ( LinuxNodeConfig )
The desired Linux node config for all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters.
Currently only cgroupMode can be set here.
desiredUserManagedKeysConfig
object ( UserManagedKeysConfig )
The desired user managed keys config for the cluster.
desiredAnonymousAuthenticationConfig
object ( AnonymousAuthenticationConfig )
Configuration for limiting anonymous access to all endpoints except the health checks.
gkeAutoUpgradeConfig
object ( GkeAutoUpgradeConfig )
Configuration for GKE auto upgrade.
desiredNetworkTierConfig
object ( NetworkTierConfig )
The desired network tier configuration for the cluster.
desiredPrivilegedAdmissionConfig
object ( PrivilegedAdmissionConfig )
The desired privileged admission config for the cluster.
desiredManagedOpentelemetryConfig
object ( ManagedOpenTelemetryConfig )
The desired managed open telemetry configuration.
desiredEnablePrivateEndpoint (deprecated)
boolean
This item is deprecated!
Enable/Disable private endpoint for the cluster's master.
Deprecated: Use desiredControlPlaneEndpointsConfig.ip_endpoints_config.enable_public_endpoint instead. Note that the value of enablePublicEndpoint is reversed: if enablePrivateEndpoint is false, then enablePublicEndpoint will be true.
desiredDefaultEnablePrivateNodes
boolean
Override the default setting of whether future created nodes have private IP addresses only, namely NetworkConfig.default_enable_private_nodes
desiredEnableFqdnNetworkPolicy
boolean
Enable/Disable FQDN Network Policy for the cluster.
desiredEnableMultiNetworking
boolean
Enable/Disable Multi-Networking for the cluster
desiredInTransitEncryptionConfig
enum ( InTransitEncryptionConfig )
Specify the details of in-transit encryption.
desiredEnableCiliumClusterwideNetworkPolicy
boolean
Enable/Disable Cilium Clusterwide Network Policy for the cluster.
desiredSecretManagerConfig
object ( SecretManagerConfig )
Enable/Disable Secret Manager Config.
desiredCompliancePostureConfig
object ( CompliancePostureConfig )
Enable/Disable Compliance Posture features for the cluster.
desiredRbacBindingConfig
object ( RBACBindingConfig )
RBACBindingConfig allows user to restrict ClusterRoleBindings an RoleBindings that can be created.
desiredDisableL4LbFirewallReconciliation
boolean
Enable/Disable L4 LB VPC firewall reconciliation for the cluster.
IntraNodeVisibilityConfig
IntraNodeVisibilityConfig contains the desired config of the intra-node visibility on this cluster.
JSON representation
{
"enabled" : boolean
}
Fields
enabled
boolean
Enables intra node visibility for this cluster.
ILBSubsettingConfig
ILBSubsettingConfig contains the desired config of L4 Internal LoadBalancer subsetting on this cluster.
JSON representation
{
"enabled" : boolean
}
Fields
enabled
boolean
Enables l4 ILB subsetting for this cluster.
DesiredAdditionalIPRangesConfig
DesiredAdditionalIPRangesConfig is a wrapper used for cluster update operation and contains multiple AdditionalIPRangesConfigs.
JSON representation
{
"additionalIpRangesConfigs" : [
{
object ( AdditionalIPRangesConfig )
}
]
}
Fields
additionalIpRangesConfigs[]
object ( AdditionalIPRangesConfig )
List of additional IP ranges configs where each AdditionalIPRangesConfig corresponds to one subnetwork's IP ranges
DesiredEnterpriseConfig
This item is deprecated!
DesiredEnterpriseConfig is a wrapper used for updating enterpriseConfig.
Deprecated: GKE Enterprise features are now available without an Enterprise tier.
JSON representation
{
"desiredTier" : enum ( ClusterTier )
}
Fields
desiredTier
enum ( ClusterTier )
desiredTier specifies the desired tier of the cluster.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-03 UTC."],[],[]]
