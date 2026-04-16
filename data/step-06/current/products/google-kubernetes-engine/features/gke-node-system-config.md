---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.943Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Node System Config"
feature_slug: "gke-node-system-config"
latest_feature_date: "2021-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "gke"
  - "node"
  - "system"
  - "config"
  - "provides"
  - "configuration"
  - "level"
  - "settings"
---

# GKE Node System Config

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Provides configuration of node-level system settings in GKE.

## Extended Definition

Provides configuration of node-level system settings in GKE.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "About node pool auto-creation \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- Source ID: `site-docs-reference-2`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Cluster-level default settings with a configuration file When you enable node auto-provisioning, you can use a YAML configuration file to specify cluster-wide default settings for auto-created node pools.
- For more information about how to use the cluster-level configuration file, see Configure settings with a node auto-provisioning configuration file .
- The following example configuration file enables node auto-repair and auto-upgrade for any new auto-created node pools: management : autoRepair : true autoUpgrade : true The following example configuration file sets the cluster-wide resource limits for node auto-provisioning and configures multiple default settings: resourceLimits : - resourceType : 'cpu' minimum : 4 maximum : 10 - resourceType : 'memory' maximum : 64 - resourceType : 'nvidia-tesla-t4' maximum : 4 management : autoRepair : true autoUpgrade : true shieldedInstanceConfig : enableSecureBoot : true enableIntegrityMonitoring : true diskSizeGb : 100 This configuration file sets the following default values: Enables node auto-repair and auto-upgrade for any new auto-created node pools.
- Workload-level default settings : you can use the spec.nodePoolConfig field and the spec.priorityDefaults field in the ComputeClass specification to set default values for specific node settings.

### GKE security overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Secure instance metadata GKE uses instance metadata from the underlying Compute Engine instances to provide nodes with credentials and configurations that are used to bootstrap nodes and to connect to the control plane.
- These settings allow you to change security settings of your processes like: User and group to run as Available Linux capabilities Ability to escalate privileges To enforce these restrictions at the cluster level rather than at the Pod or container levels, use the PodSecurityAdmission controller .
- Container-Optimized OS implements several advanced features for enhancing the security of GKE clusters, including: Locked-down firewall Read-only filesystem where possible Limited user accounts and disabled root login GKE Autopilot nodes always use Container-Optimized OS as the operating system.
- Note: The default Docker AppArmor profile is applied by the container runtime at the node level, which means the profile is applied even if container.apparmor.security.beta.kubernetes.io/container-name annotations are missing from a Pod.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- NodePool JSON representation { "name" : string , "config" : { object ( NodeConfig ) } , "initialNodeCount" : integer , "locations" : [ string ] , "networkConfig" : { object ( NodeNetworkConfig ) } , "selfLink" : string , "version" : string , "instanceGroupUrls" : [ string ] , "status" : enum ( Status ) , "statusMessage" : string , "autoscaling" : { object ( NodePoolAutoscaling ) } , "management" : { object ( NodeManagement ) } , "maxPodsConstraint" : { object ( MaxPodsConstraint ) } , "conditions" : [ { object ( StatusCondition ) } ] , "podIpv4CidrSize" : integer , "upgradeSettings" : { object ( UpgradeSettings ) } , "placementPolicy" : { object ( PlacementPolicy ) } , "updateInfo" : { object ( UpdateInfo ) } , "etag" : string , "queuedProvisioning" : { object ( QueuedProvisioning ) } , "bestEffortProvisioning" : { object ( BestEffortProvisioning ) } , "nodeDrainConfig" : { object ( NodeDrainConfig ) } } Fields name string The name of the node pool. config object ( NodeConfig ) The node configuration of the pool. initialNodeCount integer The initial node count for the pool.
- NodeConfigDefaults JSON representation { "gcfsConfig" : { object ( GcfsConfig ) } , "loggingConfig" : { object ( NodePoolLoggingConfig ) } , "containerdConfig" : { object ( ContainerdConfig ) } , "nodeKubeletConfig" : { object ( NodeKubeletConfig ) } } Fields gcfsConfig object ( GcfsConfig ) GCFS (Google Container File System, also known as Riptide) options. loggingConfig object ( NodePoolLoggingConfig ) Logging configuration for node pools. containerdConfig object ( ContainerdConfig ) Parameters for containerd customization. nodeKubeletConfig object ( NodeKubeletConfig ) NodeKubeletConfig controls the defaults for new node-pools.
- Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.authorized networks config instead. maintenancePolicy object ( MaintenancePolicy ) Configure the maintenance policy for this cluster. binaryAuthorization object ( BinaryAuthorization ) Configuration for Binary Authorization. autoscaling object ( ClusterAutoscaling ) Cluster-level autoscaling configuration. networkConfig object ( NetworkConfig ) Configuration for cluster networking. defaultMaxPodsConstraint object ( MaxPodsConstraint ) The default constraint on the maximum number of pods that can be run simultaneously on a node in the node pool of this cluster.
- Resource usage export is disabled when this config is unspecified. authenticatorGroupsConfig object ( AuthenticatorGroupsConfig ) Configuration controlling RBAC group membership information. privateClusterConfig object ( PrivateClusterConfig ) Configuration for private cluster. databaseEncryption object ( DatabaseEncryption ) Configuration of etcd encryption. verticalPodAutoscaling object ( VerticalPodAutoscaling ) Cluster-level Vertical Pod Autoscaling configuration. shieldedNodes object ( ShieldedNodes ) Shielded Nodes configuration. releaseChannel object ( ReleaseChannel ) Release channel configuration.

