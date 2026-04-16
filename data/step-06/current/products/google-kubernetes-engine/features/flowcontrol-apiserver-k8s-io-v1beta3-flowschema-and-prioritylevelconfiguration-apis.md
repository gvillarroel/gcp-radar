---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:13:28.348Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "flowcontrol.apiserver.k8s.io/v1beta3 FlowSchema and PriorityLevelConfiguration APIs"
feature_slug: "flowcontrol-apiserver-k8s-io-v1beta3-flowschema-and-prioritylevelconfiguration-apis"
latest_feature_date: "2024-05-01"
deprecation_date: "2024-05-01"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool"
keywords:
  - "flowcontrol"
  - "apiserver"
  - "k8s"
  - "io"
  - "v1beta3"
  - "flowschema"
  - "prioritylevelconfiguration"
  - "apis"
---

# flowcontrol.apiserver.k8s.io/v1beta3 FlowSchema and PriorityLevelConfiguration APIs

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The v1beta3 FlowSchema and PriorityLevelConfiguration APIs are deprecated in favor of flowcontrol.apiserver.k8s.io/v1; The v1beta3 FlowSchema and PriorityLevelConfiguration APIs are deprecated in favor of flowcontrol.apiserver.k8s.io/v1; deprecated on 2024-05-01.

## Extended Definition

The v1beta3 FlowSchema and PriorityLevelConfiguration APIs are deprecated in favor of flowcontrol.apiserver.k8s.io/v1; The v1beta3 FlowSchema and PriorityLevelConfiguration APIs are deprecated in favor of flowcontrol.apiserver.k8s.io/v1; deprecated on 2024-05-01.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Cluster JSON representation { "name" : string , "description" : string , "initialNodeCount" : integer , "nodeConfig" : { object ( NodeConfig ) } , "masterAuth" : { object ( MasterAuth ) } , "loggingService" : string , "monitoringService" : string , "network" : string , "clusterIpv4Cidr" : string , "addonsConfig" : { object ( AddonsConfig ) } , "subnetwork" : string , "nodePools" : [ { object ( NodePool ) } ] , "locations" : [ string ] , "enableKubernetesAlpha" : boolean , "alphaClusterFeatureGates" : [ string ] , "resourceLabels" : { string : string , ... } , "labelFingerprint" : string , "legacyAbac" : { object ( LegacyAbac ) } , "networkPolicy" : { object ( NetworkPolicy ) } , "ipAllocationPolicy" : { object ( IPAllocationPolicy ) } , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } , "autoscaling" : { object ( ClusterAutoscaling ) } , "networkConfig" : { object ( NetworkConfig ) } , "defaultMaxPodsConstraint" : { object ( MaxPodsConstraint ) } , "resourceUsageExportConfig" : { object ( ResourceUsageExportConfig ) } , "authenticatorGroupsConfig" : { object ( AuthenticatorGroupsConfig ) } , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "databaseEncryption" : { object ( DatabaseEncryption ) } , "verticalPodAutoscaling" : { object ( VerticalPodAutoscaling ) } , "shieldedNodes" : { object ( ShieldedNodes ) } , "releaseChannel" : { object ( ReleaseChannel ) } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "meshCertificates" : { object ( MeshCertificates ) } , "costManagementConfig" : { object ( CostManagementConfig ) } , "notificationConfig" : { object ( NotificationConfig ) } , "confidentialNodes" : { object ( ConfidentialNodes ) } , "identityServiceConfig" : { object ( IdentityServiceConfig ) } , "selfLink" : string , "zone" : string , "endpoint" : string , "initialClusterVersion" : string , "currentMasterVersion" : string , "currentNodeVersion" : string , "createTime" : string , "status" : enum ( Status ) , "statusMessage" : string , "nodeIpv4CidrSize" : integer , "servicesIpv4Cidr" : string , "instanceGroupUrls" : [ string ] , "currentNodeCount" : integer , "expireTime" : string , "location" : string , "enableTpu" : boolean , "tpuIpv4CidrBlock" : string , "conditions" : [ { object ( StatusCondition ) } ] , "autopilot" : { object ( Autopilot ) } , "id" : string , "loggingConfig" : { object ( LoggingConfig ) } , "monitoringConfig" : { object ( MonitoringConfig ) } , "nodePoolAutoConfig" : { object ( NodePoolAutoConfig ) } , "podAutoscaling" : { object ( PodAutoscaling ) } , "etag" : string , "fleet" : { object ( Fleet ) } , "securityPostureConfig" : { object ( SecurityPostureConfig ) } , "controlPlaneEndpointsConfig" : { object ( ControlPlaneEndpointsConfig ) } , "enableK8sBetaApis" : { object ( K8sBetaAPIConfig ) } , "enterpriseConfig" : { object ( EnterpriseConfig ) } , "secretManagerConfig" : { object ( SecretManagerConfig ) } , "compliancePostureConfig" : { object ( CompliancePostureConfig ) } , "gkeAutoUpgradeConfig" : { object ( GkeAutoUpgradeConfig ) } , "anonymousAuthenticationConfig" : { object ( AnonymousAuthenticationConfig ) } , "scheduleUpgradeConfig" : { object ( ScheduleUpgradeConfig ) } , "managedOpentelemetryConfig" : { object ( ManagedOpenTelemetryConfig ) } , "managedMachineLearningDiagnosticsConfig" : { object ( ManagedMachineLearningDiagnosticsConfig ) } , // Union field node pool defaults can be only one of the following: "nodePoolDefaults" : { object ( NodePoolDefaults ) } // End of list of possible types for union field node pool defaults . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field user managed keys config can be only one of the following: "userManagedKeysConfig" : { object ( UserManagedKeysConfig ) } // End of list of possible types for union field user managed keys config . // Union field rbac binding config can be only one of the following: "rbacBindingConfig" : { object ( RBACBindingConfig ) } // End of list of possible types for union field rbac binding config . } Fields name string The name of this cluster.
- Curl Request curl --location 'https://container.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "get cluster", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema MCPGetClusterRequest gets the settings of a cluster.
- Enable/Disable Security Posture API features for the cluster. controlPlaneEndpointsConfig object ( ControlPlaneEndpointsConfig ) Configuration for all cluster's control plane endpoints. enableK8sBetaApis object ( K8sBetaAPIConfig ) Beta APIs Config enterpriseConfig (deprecated) object ( EnterpriseConfig ) This item is deprecated!
- The following scopes are recommended, but not required, and by default are not included: https://www.googleapis.com/auth/compute is required for mounting persistent storage on your nodes. https://www.googleapis.com/auth/devstorage.read only is required for communicating with gcr.io (the Artifact Registry ).

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://container.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "get node pool", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema MCPGetNodePoolRequest retrieves a node pool for a cluster.
- The following scopes are recommended, but not required, and by default are not included: https://www.googleapis.com/auth/compute is required for mounting persistent storage on your nodes. https://www.googleapis.com/auth/devstorage.read only is required for communicating with gcr.io (the Artifact Registry ).
- To target a SPECIFIC RESERVATION by name, specify "compute.googleapis.com/reservation-name" as the key and specify the name of your reservation as its value. values[] string Corresponds to the label value(s) of reservation resource(s).
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Reference Send feedback MCP Tools Reference: container.googleapis.com Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Cluster JSON representation { "name" : string , "description" : string , "initialNodeCount" : integer , "nodeConfig" : { object ( NodeConfig ) } , "masterAuth" : { object ( MasterAuth ) } , "loggingService" : string , "monitoringService" : string , "network" : string , "clusterIpv4Cidr" : string , "addonsConfig" : { object ( AddonsConfig ) } , "subnetwork" : string , "nodePools" : [ { object ( NodePool ) } ] , "locations" : [ string ] , "enableKubernetesAlpha" : boolean , "alphaClusterFeatureGates" : [ string ] , "resourceLabels" : { string : string , ... } , "labelFingerprint" : string , "legacyAbac" : { object ( LegacyAbac ) } , "networkPolicy" : { object ( NetworkPolicy ) } , "ipAllocationPolicy" : { object ( IPAllocationPolicy ) } , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } , "autoscaling" : { object ( ClusterAutoscaling ) } , "networkConfig" : { object ( NetworkConfig ) } , "defaultMaxPodsConstraint" : { object ( MaxPodsConstraint ) } , "resourceUsageExportConfig" : { object ( ResourceUsageExportConfig ) } , "authenticatorGroupsConfig" : { object ( AuthenticatorGroupsConfig ) } , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "databaseEncryption" : { object ( DatabaseEncryption ) } , "verticalPodAutoscaling" : { object ( VerticalPodAutoscaling ) } , "shieldedNodes" : { object ( ShieldedNodes ) } , "releaseChannel" : { object ( ReleaseChannel ) } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "meshCertificates" : { object ( MeshCertificates ) } , "costManagementConfig" : { object ( CostManagementConfig ) } , "notificationConfig" : { object ( NotificationConfig ) } , "confidentialNodes" : { object ( ConfidentialNodes ) } , "identityServiceConfig" : { object ( IdentityServiceConfig ) } , "selfLink" : string , "zone" : string , "endpoint" : string , "initialClusterVersion" : string , "currentMasterVersion" : string , "currentNodeVersion" : string , "createTime" : string , "status" : enum ( Status ) , "statusMessage" : string , "nodeIpv4CidrSize" : integer , "servicesIpv4Cidr" : string , "instanceGroupUrls" : [ string ] , "currentNodeCount" : integer , "expireTime" : string , "location" : string , "enableTpu" : boolean , "tpuIpv4CidrBlock" : string , "conditions" : [ { object ( StatusCondition ) } ] , "autopilot" : { object ( Autopilot ) } , "id" : string , "loggingConfig" : { object ( LoggingConfig ) } , "monitoringConfig" : { object ( MonitoringConfig ) } , "nodePoolAutoConfig" : { object ( NodePoolAutoConfig ) } , "podAutoscaling" : { object ( PodAutoscaling ) } , "etag" : string , "fleet" : { object ( Fleet ) } , "securityPostureConfig" : { object ( SecurityPostureConfig ) } , "controlPlaneEndpointsConfig" : { object ( ControlPlaneEndpointsConfig ) } , "enableK8sBetaApis" : { object ( K8sBetaAPIConfig ) } , "enterpriseConfig" : { object ( EnterpriseConfig ) } , "secretManagerConfig" : { object ( SecretManagerConfig ) } , "compliancePostureConfig" : { object ( CompliancePostureConfig ) } , "gkeAutoUpgradeConfig" : { object ( GkeAutoUpgradeConfig ) } , "anonymousAuthenticationConfig" : { object ( AnonymousAuthenticationConfig ) } , "scheduleUpgradeConfig" : { object ( ScheduleUpgradeConfig ) } , "managedOpentelemetryConfig" : { object ( ManagedOpenTelemetryConfig ) } , "managedMachineLearningDiagnosticsConfig" : { object ( ManagedMachineLearningDiagnosticsConfig ) } , // Union field node pool defaults can be only one of the following: "nodePoolDefaults" : { object ( NodePoolDefaults ) } // End of list of possible types for union field node pool defaults . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field user managed keys config can be only one of the following: "userManagedKeysConfig" : { object ( UserManagedKeysConfig ) } // End of list of possible types for union field user managed keys config . // Union field rbac binding config can be only one of the following: "rbacBindingConfig" : { object ( RBACBindingConfig ) } // End of list of possible types for union field rbac binding config . } Fields name string The name of this cluster.
- Curl Request curl --location 'https://container.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list clusters", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema MCPListClustersRequest lists clusters.
- Enable/Disable Security Posture API features for the cluster. controlPlaneEndpointsConfig object ( ControlPlaneEndpointsConfig ) Configuration for all cluster's control plane endpoints. enableK8sBetaApis object ( K8sBetaAPIConfig ) Beta APIs Config enterpriseConfig (deprecated) object ( EnterpriseConfig ) This item is deprecated!
- The following scopes are recommended, but not required, and by default are not included: https://www.googleapis.com/auth/compute is required for mounting persistent storage on your nodes. https://www.googleapis.com/auth/devstorage.read only is required for communicating with gcr.io (the Artifact Registry ).

