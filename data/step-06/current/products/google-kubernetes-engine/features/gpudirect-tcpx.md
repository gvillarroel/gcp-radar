---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.757Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GPUDirect-TCPX"
feature_slug: "gpudirect-tcpx"
latest_feature_date: "2024-04-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/training-megatron-llama-workload"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "gpudirect"
  - "tcpx"
  - "available"
  - "gke"
  - "versions"
  - "gpu"
  - "network"
  - "acceleration"
---

# GPUDirect-TCPX

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GPUDirect-TCPX support is available on supported GKE versions for GPU network acceleration.

## Extended Definition

GPUDirect-TCPX support is available on supported GKE versions for GPU network acceleration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/training-megatron-llama-workload](https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/training-megatron-llama-workload)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "Train Llama2 with Megatron-LM on A3 Mega virtual machines \_|\_ GKE AI/ML\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/training-megatron-llama-workload](https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/training-megatron-llama-workload)
- Source ID: `site-docs-reference-required-4`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Set up your environment Create environment variables for some common parameters export CLUSTER NAME= CLUSTER NAME export CONTROL PLANE LOCATION= CONTROL PLANE LOCATION export PROJECT ID= PROJECT ID Replace the following: CLUSTER NAME : the name of your A3 Mega GKE cluster that has GPUDirect-TCPXO and multi-networking enabled.
- Create an A3 Mega cluster Create a A3 Mega GKE cluster with GPUDirect-TCPXO and multi-networking.
- Set up the service account: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/gpudirect-tcpxo/topology-scheduler/service-account.yaml Install the topology scheduler scripts in a configmap: curl -OL https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/gpudirect-tcpxo/topology-scheduler/schedule-daemon.py curl -OL https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/gpudirect-tcpxo/topology-scheduler/label-nodes-daemon.py kubectl -n kube-system create configmap topology-scheduler-scripts \ --from-file=schedule-daemon.py=schedule-daemon.py \ --from-file=label-nodes-daemon.py=label-nodes-daemon.py Install the topology label daemonset and topology scheduler Pod: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/gpudirect-tcpxo/topology-scheduler/label-nodes-daemon.yaml $ kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/gpudirect-tcpxo/topology-scheduler/schedule-daemon.yaml Observe the actions of the topology scheduler: kubectl -n kube-system logs topology-scheduler-pod Run the workload Build the Dockerfile and push to the Google Cloud Artifact Registry Create a Cloud Storage bucket and a Docker repository .
- For more information, see Maximize GPU network bandwidth with GPUDirect and multi-networking .

### "Allocate network resources by using GKE managed DRANET \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)
- Source ID: `site-docs-reference-2`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Request a specific number of network devices The preceding examples show how to request all available network devices of a certain type by setting allocationMode to All .
- Common use cases for requesting network interfaces for a Pod include: Requesting all available RDMA-capable interfaces.
- In GKE versions 1.34.1-gke.1829001 and later, GKE automatically installs DeviceClass resources for networking.
- The following manifest requests all available non-RDMA network devices on the node.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- AdvancedDatapathObservabilityConfig JSON representation { "enableMetrics" : boolean , "relayMode" : enum ( RelayMode ) , // Union field enable relay can be only one of the following: "enableRelay" : boolean // End of list of possible types for union field enable relay . } Fields enableMetrics boolean Expose flow metrics on nodes relayMode enum ( RelayMode ) Method used to make Relay available Union field enable relay . enable relay can be only one of the following: enableRelay boolean Enable Relay component NodePoolAutoConfig JSON representation { "networkTags" : { object ( NetworkTags ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "nodeKubeletConfig" : { object ( NodeKubeletConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } } Fields networkTags object ( NetworkTags ) The list of instance tags applied to all nodes.
- Leave blank to have one automatically chosen or specify a /14 block in 10.0.0.0/8 . addonsConfig object ( AddonsConfig ) Configurations for the various addons available to run in the cluster. subnetwork string The name of the Google Compute Engine subnetwork to which the cluster is connected. nodePools[] object ( NodePool ) The node pools associated with this cluster.
- If left as an empty string, monitoring.googleapis.com/kubernetes will be used for GKE 1.14+ or monitoring.googleapis.com for earlier versions. network string The name of the Google Compute Engine network to which the cluster is connected.
- Cluster JSON representation { "name" : string , "description" : string , "initialNodeCount" : integer , "nodeConfig" : { object ( NodeConfig ) } , "masterAuth" : { object ( MasterAuth ) } , "loggingService" : string , "monitoringService" : string , "network" : string , "clusterIpv4Cidr" : string , "addonsConfig" : { object ( AddonsConfig ) } , "subnetwork" : string , "nodePools" : [ { object ( NodePool ) } ] , "locations" : [ string ] , "enableKubernetesAlpha" : boolean , "alphaClusterFeatureGates" : [ string ] , "resourceLabels" : { string : string , ... } , "labelFingerprint" : string , "legacyAbac" : { object ( LegacyAbac ) } , "networkPolicy" : { object ( NetworkPolicy ) } , "ipAllocationPolicy" : { object ( IPAllocationPolicy ) } , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } , "autoscaling" : { object ( ClusterAutoscaling ) } , "networkConfig" : { object ( NetworkConfig ) } , "defaultMaxPodsConstraint" : { object ( MaxPodsConstraint ) } , "resourceUsageExportConfig" : { object ( ResourceUsageExportConfig ) } , "authenticatorGroupsConfig" : { object ( AuthenticatorGroupsConfig ) } , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "databaseEncryption" : { object ( DatabaseEncryption ) } , "verticalPodAutoscaling" : { object ( VerticalPodAutoscaling ) } , "shieldedNodes" : { object ( ShieldedNodes ) } , "releaseChannel" : { object ( ReleaseChannel ) } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "meshCertificates" : { object ( MeshCertificates ) } , "costManagementConfig" : { object ( CostManagementConfig ) } , "notificationConfig" : { object ( NotificationConfig ) } , "confidentialNodes" : { object ( ConfidentialNodes ) } , "identityServiceConfig" : { object ( IdentityServiceConfig ) } , "selfLink" : string , "zone" : string , "endpoint" : string , "initialClusterVersion" : string , "currentMasterVersion" : string , "currentNodeVersion" : string , "createTime" : string , "status" : enum ( Status ) , "statusMessage" : string , "nodeIpv4CidrSize" : integer , "servicesIpv4Cidr" : string , "instanceGroupUrls" : [ string ] , "currentNodeCount" : integer , "expireTime" : string , "location" : string , "enableTpu" : boolean , "tpuIpv4CidrBlock" : string , "conditions" : [ { object ( StatusCondition ) } ] , "autopilot" : { object ( Autopilot ) } , "id" : string , "loggingConfig" : { object ( LoggingConfig ) } , "monitoringConfig" : { object ( MonitoringConfig ) } , "nodePoolAutoConfig" : { object ( NodePoolAutoConfig ) } , "podAutoscaling" : { object ( PodAutoscaling ) } , "etag" : string , "fleet" : { object ( Fleet ) } , "securityPostureConfig" : { object ( SecurityPostureConfig ) } , "controlPlaneEndpointsConfig" : { object ( ControlPlaneEndpointsConfig ) } , "enableK8sBetaApis" : { object ( K8sBetaAPIConfig ) } , "enterpriseConfig" : { object ( EnterpriseConfig ) } , "secretManagerConfig" : { object ( SecretManagerConfig ) } , "compliancePostureConfig" : { object ( CompliancePostureConfig ) } , "gkeAutoUpgradeConfig" : { object ( GkeAutoUpgradeConfig ) } , "anonymousAuthenticationConfig" : { object ( AnonymousAuthenticationConfig ) } , "scheduleUpgradeConfig" : { object ( ScheduleUpgradeConfig ) } , "managedOpentelemetryConfig" : { object ( ManagedOpenTelemetryConfig ) } , "managedMachineLearningDiagnosticsConfig" : { object ( ManagedMachineLearningDiagnosticsConfig ) } , // Union field node pool defaults can be only one of the following: "nodePoolDefaults" : { object ( NodePoolDefaults ) } // End of list of possible types for union field node pool defaults . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field user managed keys config can be only one of the following: "userManagedKeysConfig" : { object ( UserManagedKeysConfig ) } // End of list of possible types for union field user managed keys config . // Union field rbac binding config can be only one of the following: "rbacBindingConfig" : { object ( RBACBindingConfig ) } // End of list of possible types for union field rbac binding config . } Fields name string The name of this cluster.

