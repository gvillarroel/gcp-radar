---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.317Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE workload metrics"
feature_slug: "gke-workload-metrics"
latest_feature_date: "2021-10-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-multihost-gpu"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "pipeline"
  - "scrapes"
  - "prometheus"
  - "fully"
  - "workload"
  - "managed"
  - "metrics"
---

# GKE workload metrics

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

A fully managed pipeline scrapes Prometheus-style workload metrics and sends them to Cloud Monitoring.

## Extended Definition

A fully managed pipeline scrapes Prometheus-style workload metrics and sends them to Cloud Monitoring.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-multihost-gpu](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-multihost-gpu)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "Serve LLMs like DeepSeek-R1 671B or Llama 3.1 405B on GKE \_|\_ GKE AI/ML\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-multihost-gpu](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-multihost-gpu)
- Source ID: `site-docs-reference-required-4`
- Final score: 163
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the bash script: nohup ./load.sh & Verify that Google Cloud Managed Service for Prometheus ingests the metrics After Google Cloud Managed Service for Prometheus scrapes the metrics and you're adding load to the vLLM endpoint, you can view metrics on Cloud Monitoring.
- To deploy the Horizontal Pod Autoscaler configuration using num requests waiting , follow these steps: Save the following manifest as vllm-hpa.yaml : apiVersion : autoscaling/v2 kind : HorizontalPodAutoscaler metadata : name : lws-hpa spec : minReplicas : 1 maxReplicas : 2 metrics : - type : Pods pods : metric : name : prometheus.googleapis.com vllm:num requests waiting gauge target : type : AverageValue averageValue : 5 scaleTargetRef : apiVersion : leaderworkerset.x-k8s.io/v1 kind : LeaderWorkerSet name : vllm The vLLM metrics in Google Cloud Managed Service for Prometheus follow the vllm:metric name format.
- Save the following manifest as vllm pod monitor.yaml : apiVersion : monitoring.googleapis.com/v1 kind : PodMonitoring metadata : name : vllm-pod-monitoring spec : selector : matchLabels : leaderworkerset.sigs.k8s.io/name : vllm role : leader endpoints : - path : /metrics port : 8080 interval : 15s Apply the manifest to the cluster: kubectl apply -f vllm pod monitor.yaml Success: Google Cloud Managed Service for Prometheus is now configured to scrape the vLLM server metrics and make them visible to the horizontal Pod austoscaling controller.
- This graph shows that Google Cloud Managed Service for Prometheus is ingesting the traffic metrics in response to the load added to the vLLM endpoint: Deploy the Horizontal Pod Autoscaler configuration When you decide which metric to autoscale on, we recommend the following metrics for vLLM: num requests waiting : this metric relates to the number of requests waiting in the model server's queue.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- ManagedPrometheusConfig JSON representation { "enabled" : boolean , "autoMonitoringConfig" : { object ( AutoMonitoringConfig ) } } Fields enabled boolean Enable Managed Collection. autoMonitoringConfig object ( AutoMonitoringConfig ) GKE Workload Auto-Monitoring Configuration.
- Cluster JSON representation { "name" : string , "description" : string , "initialNodeCount" : integer , "nodeConfig" : { object ( NodeConfig ) } , "masterAuth" : { object ( MasterAuth ) } , "loggingService" : string , "monitoringService" : string , "network" : string , "clusterIpv4Cidr" : string , "addonsConfig" : { object ( AddonsConfig ) } , "subnetwork" : string , "nodePools" : [ { object ( NodePool ) } ] , "locations" : [ string ] , "enableKubernetesAlpha" : boolean , "alphaClusterFeatureGates" : [ string ] , "resourceLabels" : { string : string , ... } , "labelFingerprint" : string , "legacyAbac" : { object ( LegacyAbac ) } , "networkPolicy" : { object ( NetworkPolicy ) } , "ipAllocationPolicy" : { object ( IPAllocationPolicy ) } , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } , "autoscaling" : { object ( ClusterAutoscaling ) } , "networkConfig" : { object ( NetworkConfig ) } , "defaultMaxPodsConstraint" : { object ( MaxPodsConstraint ) } , "resourceUsageExportConfig" : { object ( ResourceUsageExportConfig ) } , "authenticatorGroupsConfig" : { object ( AuthenticatorGroupsConfig ) } , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "databaseEncryption" : { object ( DatabaseEncryption ) } , "verticalPodAutoscaling" : { object ( VerticalPodAutoscaling ) } , "shieldedNodes" : { object ( ShieldedNodes ) } , "releaseChannel" : { object ( ReleaseChannel ) } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "meshCertificates" : { object ( MeshCertificates ) } , "costManagementConfig" : { object ( CostManagementConfig ) } , "notificationConfig" : { object ( NotificationConfig ) } , "confidentialNodes" : { object ( ConfidentialNodes ) } , "identityServiceConfig" : { object ( IdentityServiceConfig ) } , "selfLink" : string , "zone" : string , "endpoint" : string , "initialClusterVersion" : string , "currentMasterVersion" : string , "currentNodeVersion" : string , "createTime" : string , "status" : enum ( Status ) , "statusMessage" : string , "nodeIpv4CidrSize" : integer , "servicesIpv4Cidr" : string , "instanceGroupUrls" : [ string ] , "currentNodeCount" : integer , "expireTime" : string , "location" : string , "enableTpu" : boolean , "tpuIpv4CidrBlock" : string , "conditions" : [ { object ( StatusCondition ) } ] , "autopilot" : { object ( Autopilot ) } , "id" : string , "loggingConfig" : { object ( LoggingConfig ) } , "monitoringConfig" : { object ( MonitoringConfig ) } , "nodePoolAutoConfig" : { object ( NodePoolAutoConfig ) } , "podAutoscaling" : { object ( PodAutoscaling ) } , "etag" : string , "fleet" : { object ( Fleet ) } , "securityPostureConfig" : { object ( SecurityPostureConfig ) } , "controlPlaneEndpointsConfig" : { object ( ControlPlaneEndpointsConfig ) } , "enableK8sBetaApis" : { object ( K8sBetaAPIConfig ) } , "enterpriseConfig" : { object ( EnterpriseConfig ) } , "secretManagerConfig" : { object ( SecretManagerConfig ) } , "compliancePostureConfig" : { object ( CompliancePostureConfig ) } , "gkeAutoUpgradeConfig" : { object ( GkeAutoUpgradeConfig ) } , "anonymousAuthenticationConfig" : { object ( AnonymousAuthenticationConfig ) } , "scheduleUpgradeConfig" : { object ( ScheduleUpgradeConfig ) } , "managedOpentelemetryConfig" : { object ( ManagedOpenTelemetryConfig ) } , "managedMachineLearningDiagnosticsConfig" : { object ( ManagedMachineLearningDiagnosticsConfig ) } , // Union field node pool defaults can be only one of the following: "nodePoolDefaults" : { object ( NodePoolDefaults ) } // End of list of possible types for union field node pool defaults . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field user managed keys config can be only one of the following: "userManagedKeysConfig" : { object ( UserManagedKeysConfig ) } // End of list of possible types for union field user managed keys config . // Union field rbac binding config can be only one of the following: "rbacBindingConfig" : { object ( RBACBindingConfig ) } // End of list of possible types for union field rbac binding config . } Fields name string The name of this cluster.
- MonitoringConfig JSON representation { "componentConfig" : { object ( MonitoringComponentConfig ) } , "managedPrometheusConfig" : { object ( ManagedPrometheusConfig ) } , "advancedDatapathObservabilityConfig" : { object ( AdvancedDatapathObservabilityConfig ) } } Fields componentConfig object ( MonitoringComponentConfig ) Monitoring components configuration managedPrometheusConfig object ( ManagedPrometheusConfig ) Enable Google Cloud Managed Service for Prometheus in the cluster. advancedDatapathObservabilityConfig object ( AdvancedDatapathObservabilityConfig ) Configuration of Advanced Datapath Observability features.
- ManagedOpenTelemetryConfig JSON representation { // Union field scope can be only one of the following: "scope" : enum ( Scope ) // End of list of possible types for union field scope . } Fields Union field scope . scope can be only one of the following: scope enum ( Scope ) Scope of the Managed OpenTelemetry pipeline.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- ManagedPrometheusConfig JSON representation { "enabled" : boolean , "autoMonitoringConfig" : { object ( AutoMonitoringConfig ) } } Fields enabled boolean Enable Managed Collection. autoMonitoringConfig object ( AutoMonitoringConfig ) GKE Workload Auto-Monitoring Configuration.
- Cluster JSON representation { "name" : string , "description" : string , "initialNodeCount" : integer , "nodeConfig" : { object ( NodeConfig ) } , "masterAuth" : { object ( MasterAuth ) } , "loggingService" : string , "monitoringService" : string , "network" : string , "clusterIpv4Cidr" : string , "addonsConfig" : { object ( AddonsConfig ) } , "subnetwork" : string , "nodePools" : [ { object ( NodePool ) } ] , "locations" : [ string ] , "enableKubernetesAlpha" : boolean , "alphaClusterFeatureGates" : [ string ] , "resourceLabels" : { string : string , ... } , "labelFingerprint" : string , "legacyAbac" : { object ( LegacyAbac ) } , "networkPolicy" : { object ( NetworkPolicy ) } , "ipAllocationPolicy" : { object ( IPAllocationPolicy ) } , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } , "autoscaling" : { object ( ClusterAutoscaling ) } , "networkConfig" : { object ( NetworkConfig ) } , "defaultMaxPodsConstraint" : { object ( MaxPodsConstraint ) } , "resourceUsageExportConfig" : { object ( ResourceUsageExportConfig ) } , "authenticatorGroupsConfig" : { object ( AuthenticatorGroupsConfig ) } , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "databaseEncryption" : { object ( DatabaseEncryption ) } , "verticalPodAutoscaling" : { object ( VerticalPodAutoscaling ) } , "shieldedNodes" : { object ( ShieldedNodes ) } , "releaseChannel" : { object ( ReleaseChannel ) } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "meshCertificates" : { object ( MeshCertificates ) } , "costManagementConfig" : { object ( CostManagementConfig ) } , "notificationConfig" : { object ( NotificationConfig ) } , "confidentialNodes" : { object ( ConfidentialNodes ) } , "identityServiceConfig" : { object ( IdentityServiceConfig ) } , "selfLink" : string , "zone" : string , "endpoint" : string , "initialClusterVersion" : string , "currentMasterVersion" : string , "currentNodeVersion" : string , "createTime" : string , "status" : enum ( Status ) , "statusMessage" : string , "nodeIpv4CidrSize" : integer , "servicesIpv4Cidr" : string , "instanceGroupUrls" : [ string ] , "currentNodeCount" : integer , "expireTime" : string , "location" : string , "enableTpu" : boolean , "tpuIpv4CidrBlock" : string , "conditions" : [ { object ( StatusCondition ) } ] , "autopilot" : { object ( Autopilot ) } , "id" : string , "loggingConfig" : { object ( LoggingConfig ) } , "monitoringConfig" : { object ( MonitoringConfig ) } , "nodePoolAutoConfig" : { object ( NodePoolAutoConfig ) } , "podAutoscaling" : { object ( PodAutoscaling ) } , "etag" : string , "fleet" : { object ( Fleet ) } , "securityPostureConfig" : { object ( SecurityPostureConfig ) } , "controlPlaneEndpointsConfig" : { object ( ControlPlaneEndpointsConfig ) } , "enableK8sBetaApis" : { object ( K8sBetaAPIConfig ) } , "enterpriseConfig" : { object ( EnterpriseConfig ) } , "secretManagerConfig" : { object ( SecretManagerConfig ) } , "compliancePostureConfig" : { object ( CompliancePostureConfig ) } , "gkeAutoUpgradeConfig" : { object ( GkeAutoUpgradeConfig ) } , "anonymousAuthenticationConfig" : { object ( AnonymousAuthenticationConfig ) } , "scheduleUpgradeConfig" : { object ( ScheduleUpgradeConfig ) } , "managedOpentelemetryConfig" : { object ( ManagedOpenTelemetryConfig ) } , "managedMachineLearningDiagnosticsConfig" : { object ( ManagedMachineLearningDiagnosticsConfig ) } , // Union field node pool defaults can be only one of the following: "nodePoolDefaults" : { object ( NodePoolDefaults ) } // End of list of possible types for union field node pool defaults . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field user managed keys config can be only one of the following: "userManagedKeysConfig" : { object ( UserManagedKeysConfig ) } // End of list of possible types for union field user managed keys config . // Union field rbac binding config can be only one of the following: "rbacBindingConfig" : { object ( RBACBindingConfig ) } // End of list of possible types for union field rbac binding config . } Fields name string The name of this cluster.
- MonitoringConfig JSON representation { "componentConfig" : { object ( MonitoringComponentConfig ) } , "managedPrometheusConfig" : { object ( ManagedPrometheusConfig ) } , "advancedDatapathObservabilityConfig" : { object ( AdvancedDatapathObservabilityConfig ) } } Fields componentConfig object ( MonitoringComponentConfig ) Monitoring components configuration managedPrometheusConfig object ( ManagedPrometheusConfig ) Enable Google Cloud Managed Service for Prometheus in the cluster. advancedDatapathObservabilityConfig object ( AdvancedDatapathObservabilityConfig ) Configuration of Advanced Datapath Observability features.
- ManagedOpenTelemetryConfig JSON representation { // Union field scope can be only one of the following: "scope" : enum ( Scope ) // End of list of possible types for union field scope . } Fields Union field scope . scope can be only one of the following: scope enum ( Scope ) Scope of the Managed OpenTelemetry pipeline.

