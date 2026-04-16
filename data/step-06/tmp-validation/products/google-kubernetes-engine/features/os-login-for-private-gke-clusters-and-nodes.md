---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.383Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "OS Login for private GKE clusters and nodes"
feature_slug: "os-login-for-private-gke-clusters-and-nodes"
latest_feature_date: "2021-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "login"
  - "private"
  - "enabled"
  - "clusters"
  - "nodes"
---

# OS Login for private GKE clusters and nodes

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

OS Login can be enabled and configured for private GKE clusters and their nodes.

## Extended Definition

OS Login can be enabled and configured for private GKE clusters and their nodes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "Access private registries with private CA certificates \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Verify that your cluster can access the private registry Run the following command: gcloud container clusters describe CLUSTER NAME \ --location = LOCATION \ --flatten = "nodePoolDefaults.nodeConfigDefaults.containerdConfig" The output is similar to the following: registryHosts containerdConfig: registryHosts: - server: example.io hosts: - host: example.mirror.io capabilities: - "HOST CAPABILITY PULL" - "HOST CAPABILITY RESOLVE" ca: - gcpSecretManagerSecretUri: projects/123456789012/secrets/example-secret-name/versions/1 privateRegistryAccessConfig containerdConfig: privateRegistryAccessConfig: certificateAuthorityDomainConfig: - fqdns: - 203.0.113.105 gcpSecretManagerCertificateConfig: secretUri: projects/123456789012/secrets/example-secret-name/versions/1 enabled: true Deploy a workload that accesses a private image In this section, you deploy a static Pod that references an image from your private registry.
- In Standard clusters that don't have automatic upgrades enabled, you must manually recreate your nodes to apply the configuration.
- Run the following command to create Autopilot clusters: gcloud container clusters create-auto CLUSTER NAME \ --location = LOCATION \ --scopes = "cloud-platform" \ --containerd-config-from-file = " PATH TO CONFIG FILE " Note : If your configuration file does not use secrets from Secret Manager, such as for the privateRegistryAccessConfig feature or when using registryHosts with certificates stored in Secret Manager, you can remove the --scopes="cloud-platform" flag.
- For a description of these fields, see registryHosts in the Available containerd configuration options. privateRegistryAccessConfig privateRegistryAccessConfig : certificateAuthorityDomainConfig : - gcpSecretManagerCertificateConfig : secretURI : "projects/ PROJECT NUMBER /secrets/ SECRET NAME /versions/ SECRET VERSION " fqdns : - " FQDN1 " - " FQDN2 " enabled : true Replace the following: PROJECT NUMBER : the project number that you got in the previous step.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command to determine if your cluster has private nodes enabled: gcloud container clusters describe $CLUSTER NAME \ --format="value(privateClusterConfig.enablePrivateNodes)" If the return value is True, all nodes are private nodes for this cluster and the vulnerability is mitigated.
- To find all clusters originally created with public nodes, use this Cloud Asset Inventory query in the project or organization: SELECT resource.data.name AS cluster name, resource.parent AS project name, resource.data.privateClusterConfig.enablePrivateNodes FROM container googleapis com Cluster WHERE resource.data.privateClusterConfig.enablePrivateNodes is null OR resource.data.privateClusterConfig.enablePrivateNodes = false Disallow SSH to the cluster nodes 2024-07-02 Update: This section applies to both Autopilot and Standard clusters.
- Clusters and nodes with autoupgrade enabled will begin upgrading as the week progresses, but due to the severity of the vulnerability we recommend upgrading manually as follows to get patches as fast as possible.
- Convert public node pools to private 2024-07-02 Update: For Autopilot clusters originally created as public clusters, you can place your workloads on private nodes by using nodeSelectors .

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- If enabled, all nodes are given only RFC 1918 private addresses and communicate with the master via private networking.
- Cluster JSON representation { "name" : string , "description" : string , "initialNodeCount" : integer , "nodeConfig" : { object ( NodeConfig ) } , "masterAuth" : { object ( MasterAuth ) } , "loggingService" : string , "monitoringService" : string , "network" : string , "clusterIpv4Cidr" : string , "addonsConfig" : { object ( AddonsConfig ) } , "subnetwork" : string , "nodePools" : [ { object ( NodePool ) } ] , "locations" : [ string ] , "enableKubernetesAlpha" : boolean , "alphaClusterFeatureGates" : [ string ] , "resourceLabels" : { string : string , ... } , "labelFingerprint" : string , "legacyAbac" : { object ( LegacyAbac ) } , "networkPolicy" : { object ( NetworkPolicy ) } , "ipAllocationPolicy" : { object ( IPAllocationPolicy ) } , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } , "autoscaling" : { object ( ClusterAutoscaling ) } , "networkConfig" : { object ( NetworkConfig ) } , "defaultMaxPodsConstraint" : { object ( MaxPodsConstraint ) } , "resourceUsageExportConfig" : { object ( ResourceUsageExportConfig ) } , "authenticatorGroupsConfig" : { object ( AuthenticatorGroupsConfig ) } , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "databaseEncryption" : { object ( DatabaseEncryption ) } , "verticalPodAutoscaling" : { object ( VerticalPodAutoscaling ) } , "shieldedNodes" : { object ( ShieldedNodes ) } , "releaseChannel" : { object ( ReleaseChannel ) } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "meshCertificates" : { object ( MeshCertificates ) } , "costManagementConfig" : { object ( CostManagementConfig ) } , "notificationConfig" : { object ( NotificationConfig ) } , "confidentialNodes" : { object ( ConfidentialNodes ) } , "identityServiceConfig" : { object ( IdentityServiceConfig ) } , "selfLink" : string , "zone" : string , "endpoint" : string , "initialClusterVersion" : string , "currentMasterVersion" : string , "currentNodeVersion" : string , "createTime" : string , "status" : enum ( Status ) , "statusMessage" : string , "nodeIpv4CidrSize" : integer , "servicesIpv4Cidr" : string , "instanceGroupUrls" : [ string ] , "currentNodeCount" : integer , "expireTime" : string , "location" : string , "enableTpu" : boolean , "tpuIpv4CidrBlock" : string , "conditions" : [ { object ( StatusCondition ) } ] , "autopilot" : { object ( Autopilot ) } , "id" : string , "loggingConfig" : { object ( LoggingConfig ) } , "monitoringConfig" : { object ( MonitoringConfig ) } , "nodePoolAutoConfig" : { object ( NodePoolAutoConfig ) } , "podAutoscaling" : { object ( PodAutoscaling ) } , "etag" : string , "fleet" : { object ( Fleet ) } , "securityPostureConfig" : { object ( SecurityPostureConfig ) } , "controlPlaneEndpointsConfig" : { object ( ControlPlaneEndpointsConfig ) } , "enableK8sBetaApis" : { object ( K8sBetaAPIConfig ) } , "enterpriseConfig" : { object ( EnterpriseConfig ) } , "secretManagerConfig" : { object ( SecretManagerConfig ) } , "compliancePostureConfig" : { object ( CompliancePostureConfig ) } , "gkeAutoUpgradeConfig" : { object ( GkeAutoUpgradeConfig ) } , "anonymousAuthenticationConfig" : { object ( AnonymousAuthenticationConfig ) } , "scheduleUpgradeConfig" : { object ( ScheduleUpgradeConfig ) } , "managedOpentelemetryConfig" : { object ( ManagedOpenTelemetryConfig ) } , "managedMachineLearningDiagnosticsConfig" : { object ( ManagedMachineLearningDiagnosticsConfig ) } , // Union field node pool defaults can be only one of the following: "nodePoolDefaults" : { object ( NodePoolDefaults ) } // End of list of possible types for union field node pool defaults . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field user managed keys config can be only one of the following: "userManagedKeysConfig" : { object ( UserManagedKeysConfig ) } // End of list of possible types for union field user managed keys config . // Union field rbac binding config can be only one of the following: "rbacBindingConfig" : { object ( RBACBindingConfig ) } // End of list of possible types for union field rbac binding config . } Fields name string The name of this cluster.
- NetworkConfig JSON representation { "network" : string , "subnetwork" : string , "enableIntraNodeVisibility" : boolean , "defaultSnatStatus" : { object ( DefaultSnatStatus ) } , "enableL4ilbSubsetting" : boolean , "datapathProvider" : enum ( DatapathProvider ) , "privateIpv6GoogleAccess" : enum ( PrivateIPv6GoogleAccess ) , "dnsConfig" : { object ( DNSConfig ) } , "serviceExternalIpsConfig" : { object ( ServiceExternalIPsConfig ) } , "gatewayApiConfig" : { object ( GatewayAPIConfig ) } , "enableMultiNetworking" : boolean , "networkPerformanceConfig" : { object ( ClusterNetworkPerformanceConfig ) } , // Union field enable fqdn network policy can be only one of the following: "enableFqdnNetworkPolicy" : boolean // End of list of possible types for union field enable fqdn network policy . // Union field in transit encryption config can be only one of the following: "inTransitEncryptionConfig" : enum ( InTransitEncryptionConfig ) // End of list of possible types for union field in transit encryption config . // Union field enable cilium clusterwide network policy can be only one of the // following: "enableCiliumClusterwideNetworkPolicy" : boolean // End of list of possible types for union field // enable cilium clusterwide network policy . // Union field default enable private nodes can be only one of the following: "defaultEnablePrivateNodes" : boolean // End of list of possible types for union field default enable private nodes . // Union field disable l4 lb firewall reconciliation can be only one of the // following: "disableL4LbFirewallReconciliation" : boolean // End of list of possible types for union field // disable l4 lb firewall reconciliation . } Fields network string Output only.
- This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes. cloudRunConfig object ( CloudRunConfig ) Configuration for the Cloud Run addon, which allows the user to use a managed Knative service. dnsCacheConfig object ( DnsCacheConfig ) Configuration for NodeLocalDNS, a dns cache running on cluster nodes configConnectorConfig object ( ConfigConnectorConfig ) Configuration for the ConfigConnector add-on, a Kubernetes extension to manage hosted Google Cloud services through the Kubernetes API. gcePersistentDiskCsiDriverConfig object ( GcePersistentDiskCsiDriverConfig ) Configuration for the Compute Engine Persistent Disk CSI driver. gcpFilestoreCsiDriverConfig object ( GcpFilestoreCsiDriverConfig ) Configuration for the Filestore CSI driver. gkeBackupAgentConfig object ( GkeBackupAgentConfig ) Configuration for the Backup for GKE agent addon. gcsFuseCsiDriverConfig object ( GcsFuseCsiDriverConfig ) Configuration for the Cloud Storage Fuse CSI driver. statefulHaConfig object ( StatefulHAConfig ) Optional.

