---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.194Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "MonitoringAlertPolicy alert strategy"
feature_slug: "monitoringalertpolicy-alert-strategy"
latest_feature_date: "2022-01-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/folder-scoped-resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/project-scoped-resources"
keywords:
  - "strategy"
  - "monitoringalertpolicy"
  - "alert"
  - "configuration"
  - "resource"
  - "supports"
  - "through"
  - "spec"
---

# MonitoringAlertPolicy alert strategy

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

The MonitoringAlertPolicy resource supports alert strategy configuration through spec.alertStrategy.

## Extended Definition

The MonitoringAlertPolicy resource supports alert strategy configuration through spec.alertStrategy.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)
- [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/folder-scoped-resources](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/folder-scoped-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/project-scoped-resources](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/project-scoped-resources)

## Supporting Pages

### ContainerCluster \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- For more details on how to debug and fix an issue which could lead to a permanent diff, please refer to the Config Connector Troubleshooting page Property Value Google Cloud Service Name Kubernetes Engine Google Cloud Service Documentation /kubernetes-engine/docs/ Google Cloud REST Resource Name v1.projects.locations.clusters Google Cloud REST Resource Documentation /kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters Config Connector Resource Short Names gcpcontainercluster gcpcontainerclusters containercluster Config Connector Service Name container.googleapis.com Config Connector Resource Fully Qualified Name containerclusters.container.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Annotations Fields cnrm.cloud.google.com/project-id cnrm.cloud.google.com/remove-default-node-pool Spec Schema addonsConfig : cloudrunConfig : disabled : boolean loadBalancerType : string configConnectorConfig : enabled : boolean dnsCacheConfig : enabled : boolean gcePersistentDiskCsiDriverConfig : enabled : boolean gcpFilestoreCsiDriverConfig : enabled : boolean gcsFuseCsiDriverConfig : enabled : boolean gkeBackupAgentConfig : enabled : boolean horizontalPodAutoscaling : disabled : boolean httpLoadBalancing : disabled : boolean istioConfig : auth : string disabled : boolean kalmConfig : enabled : boolean networkPolicyConfig : disabled : boolean allowNetAdmin : boolean authenticatorGroupsConfig : securityGroup : string binaryAuthorization : enabled : boolean evaluationMode : string clusterAutoscaling : autoProvisioningDefaults : bootDiskKMSKeyRef : external : string name : string namespace : string diskSize : integer imageType : string management : autoRepair : boolean autoUpgrade : boolean upgradeOptions : - autoUpgradeStartTime : string description : string minCpuPlatform : string oauthScopes : - string serviceAccountRef : external : string name : string namespace : string shieldedInstanceConfig : enableIntegrityMonitoring : boolean enableSecureBoot : boolean upgradeSettings : blueGreenSettings : nodePoolSoakDuration : string standardRolloutPolicy : batchNodeCount : integer batchPercentage : float batchSoakDuration : string maxSurge : integer maxUnavailable : integer strategy : string autoscalingProfile : string defaultComputeClassConfig : enabled : boolean enabled : boolean resourceLimits : - maximum : integer minimum : integer resourceType : string clusterIpv4Cidr : string clusterTelemetry : type : string confidentialNodes : enabled : boolean controlPlaneEndpointsConfig : dnsEndpointConfig : allowExternalTraffic : boolean enableK8sTokensViaDns : boolean ipEndpointsConfig : enabled : boolean costManagementConfig : enabled : boolean databaseEncryption : keyName : string state : string datapathProvider : string defaultMaxPodsPerNode : integer defaultSnatStatus : disabled : boolean description : string dnsConfig : clusterDns : string clusterDnsDomain : string clusterDnsScope : string enableAutopilot : boolean enableBinaryAuthorization : boolean enableCiliumClusterwideNetworkPolicy : boolean enableFqdnNetworkPolicy : boolean enableIntranodeVisibility : boolean enableK8sBetaApis : enabledApis : - string enableKubernetesAlpha : boolean enableL4IlbSubsetting : boolean enableLegacyAbac : boolean enableMultiNetworking : boolean enableShieldedNodes : boolean enableTpu : boolean gatewayApiConfig : channel : string identityServiceConfig : enabled : boolean initialNodeCount : integer ipAllocationPolicy : additionalPodRangesConfig : podRangeNames : - string clusterIpv4CidrBlock : string clusterSecondaryRangeName : string podCidrOverprovisionConfig : disabled : boolean servicesIpv4CidrBlock : string servicesSecondaryRangeName : string stackType : string location : string loggingConfig : enableComponents : - string loggingService : string maintenancePolicy : dailyMaintenanceWindow : duration : string startTime : string maintenanceExclusion : - endTime : string exclusionName : string exclusionOptions : scope : string startTime : string recurringWindow : endTime : string recurrence : string startTime : string masterAuth : clientCertificate : string clientCertificateConfig : issueClientCertificate : boolean clientKey : string clusterCaCertificate : string password : value : string valueFrom : secretKeyRef : key : string name : string username : string masterAuthorizedNetworksConfig : cidrBlocks : - cidrBlock : string displayName : string gcpPublicCidrsAccessEnabled : boolean meshCertificates : enableCertificates : boolean minMasterVersion : string monitoringConfig : advancedDatapathObservabilityConfig : - enableMetrics : boolean relayMode : string enableComponents : - string managedPrometheus : enabled : boolean monitoringService : string networkPolicy : enabled : boolean provider : string networkRef : external : string name : string namespace : string networkingMode : string nodeConfig : advancedMachineFeatures : enableNestedVirtualization : boolean threadsPerCore : integer bootDiskKMSCryptoKeyRef : external : string name : string namespace : string confidentialNodes : enabled : boolean diskSizeGb : integer diskType : string ephemeralStorageConfig : localSsdCount : integer ephemeralStorageLocalSsdConfig : localSsdCount : integer fastSocket : enabled : boolean gcfsConfig : enabled : boolean guestAccelerator : - count : integer gpuDriverInstallationConfig : gpuDriverVersion : string gpuPartitionSize : string gpuSharingConfig : gpuSharingStrategy : string maxSharedClientsPerGpu : integer type : string gvnic : enabled : boolean hostMaintenancePolicy : maintenanceInterval : string imageType : string kubeletConfig : cpuCfsQuota : boolean cpuCfsQuotaPeriod : string cpuManagerPolicy : string podPidsLimit : integer labels : string : string linuxNodeConfig : cgroupMode : string sysctls : string : string localNvmeSsdBlockConfig : localSsdCount : integer localSsdCount : integer loggingVariant : string machineType : string metadata : string : string minCpuPlatform : string nodeGroupRef : external : string name : string namespace : string oauthScopes : - string preemptible : boolean reservationAffinity : consumeReservationType : string key : string values : - string resourceLabels : string : string sandboxConfig : sandboxType : string serviceAccountRef : external : string name : string namespace : string shieldedInstanceConfig : enableIntegrityMonitoring : boolean enableSecureBoot : boolean soleTenantConfig : nodeAffinity : - key : string operator : string values : - string spot : boolean tags : - string taint : - effect : string key : string value : string workloadMetadataConfig : mode : string nodeMetadata : string nodeLocations : - string nodePoolAutoConfig : networkTags : tags : - string nodePoolDefaults : nodeConfigDefaults : gcfsConfig : enabled : boolean loggingVariant : string nodeVersion : string notificationConfig : pubsub : enabled : boolean filter : eventType : - string topicRef : external : string name : string namespace : string podSecurityPolicyConfig : enabled : boolean privateClusterConfig : enablePrivateEndpoint : boolean enablePrivateNodes : boolean masterGlobalAccessConfig : enabled : boolean masterIpv4CidrBlock : string peeringName : string privateEndpoint : string privateEndpointSubnetworkRef : external : string name : string namespace : string publicEndpoint : string privateIpv6GoogleAccess : string protectConfig : workloadConfig : auditMode : string workloadVulnerabilityMode : string releaseChannel : channel : string resourceID : string resourceUsageExportConfig : bigqueryDestination : datasetId : string enableNetworkEgressMetering : boolean enableResourceConsumptionMetering : boolean securityPostureConfig : mode : string vulnerabilityMode : string serviceExternalIpsConfig : enabled : boolean subnetworkRef : external : string name : string namespace : string verticalPodAutoscaling : enabled : boolean workloadIdentityConfig : identityNamespace : string workloadPool : string Fields addonsConfig Optional object The configuration for addons supported by GKE. addonsConfig.cloudrunConfig Optional object The status of the CloudRun addon.
- Example: "3.5s". clusterAutoscaling.autoProvisioningDefaults.upgradeSettings.maxSurge Optional integer The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process. clusterAutoscaling.autoProvisioningDefaults.upgradeSettings.maxUnavailable Optional integer The maximum number of nodes that can be simultaneously unavailable during the upgrade process. clusterAutoscaling.autoProvisioningDefaults.upgradeSettings.strategy Optional string Update strategy of the node pool. clusterAutoscaling.autoscalingProfile Optional string Configuration options for the Autoscaling profile feature, which lets you choose whether the cluster autoscaler should optimize for resource utilization or resource availability when deciding to remove nodes from a cluster.
- Replace ${PROJECT ID?} below with your project ID. workloadPool : ${PROJECT ID?}.svc.id.goog networkingMode : VPC NATIVE networkRef : name : containercluster-dep-vpcnative subnetworkRef : name : containercluster-dep-vpcnative ipAllocationPolicy : servicesSecondaryRangeName : servicesrange clusterSecondaryRangeName : clusterrange clusterAutoscaling : enabled : true autoscalingProfile : BALANCED resourceLimits : - resourceType : cpu maximum : 100 minimum : 10 - resourceType : memory maximum : 1000 minimum : 100 maintenancePolicy : dailyMaintenanceWindow : startTime : 00:00 releaseChannel : channel : STABLE notificationConfig : pubsub : enabled : true topicRef : name : containercluster-dep-vpcnative enableBinaryAuthorization : true enableIntranodeVisibility : true enableShieldedNodes : true addonsConfig : networkPolicyConfig : disabled : false dnsCacheConfig : enabled : true configConnectorConfig : enabled : true networkPolicy : enabled : true podSecurityPolicyConfig : enabled : true verticalPodAutoscaling : enabled : true --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeNetwork metadata : name : containercluster-dep-vpcnative spec : routingMode : REGIONAL autoCreateSubnetworks : false --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeSubnetwork metadata : name : containercluster-dep-vpcnative spec : ipCidrRange : 10.2.0.0/16 region : us-central1 networkRef : name : containercluster-dep-vpcnative secondaryIpRange : - rangeName : servicesrange ipCidrRange : 10.3.0.0/16 - rangeName : clusterrange ipCidrRange : 10.4.0.0/16 --- apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : containercluster-dep-vpcnative Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
- If this is specified for a zonal cluster, omit the cluster's zone. nodeLocations[] Optional string nodePoolAutoConfig Optional object Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. nodePoolAutoConfig.networkTags Optional object Collection of Compute Engine network tags that can be applied to a node's underlying VM instance. nodePoolAutoConfig.networkTags.tags Optional list (string) List of network tags applied to auto-provisioned node pools. nodePoolAutoConfig.networkTags.tags[] Optional string nodePoolDefaults Optional object The default nodel pool settings for the entire cluster. nodePoolDefaults.nodeConfigDefaults Optional object Subset of NodeConfig message that has defaults. nodePoolDefaults.nodeConfigDefaults.gcfsConfig Optional object GCFS configuration for this node. nodePoolDefaults.nodeConfigDefaults.gcfsConfig.enabled Required boolean Whether or not GCFS is enabled. nodePoolDefaults.nodeConfigDefaults.loggingVariant Optional string Type of logging agent that is used as the default value for node pools in the cluster.

### Folder-scoped resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/folder-scoped-resources](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/folder-scoped-resources)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can check the resource reference page to see if a resource supports the spec.folderRef field or cnrm.cloud.google.com/folder-id annotation.
- Here is an example of what a resource's YAML will look like with this annotation in it: apiVersion : foo.cnrm.cloud.google.com/v1beta1 kind : FooBar metadata : annotations : cnrm.cloud.google.com/folder-id : FOLDER ID name : foobarname Annotate namespace configuration You can set a default folder ID for newly-created resources by annotating your Kubernetes namespace.
- Annotate resource configuration If the Config Connector resource is folder-scoped but does not support the folderRef field, you can set the folder ID to the resource configuration using the folder-id annotation: ... metadata : annotations : cnrm.cloud.google.com/folder-id : FOLDER ID ...
- If the Google Cloud folder is also being managed in the same cluster via the Folder CRD, you can specify the folder as a Kubernetes resource reference: ... spec : folderRef : name : FOLDER RESOURCE NAME namespace : FOLDER RESOURCE NAMESPACE ...

### Project-scoped resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/project-scoped-resources](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/project-scoped-resources)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can check the resource reference page to see if a resource supports the spec.projectRef field or cnrm.cloud.google.com/project-id annotation.
- Here is an example of what a FooBar resource's YAML looks like with this annotation in it: apiVersion : foo.cnrm.cloud.google.com/v1beta1 kind : FooBar metadata : annotations : cnrm.cloud.google.com/project-id : PROJECT ID name : foobarname Annotate namespace configuration You can set a default project ID for newly-created resources by annotating your Kubernetes namespace.
- Annotate resource configuration If the Config Connector resource is project-scoped but does not support projectRef field, you can set the project ID to the resource configuration using the project-id annotation: ... metadata : annotations : cnrm.cloud.google.com/project-id : PROJECT ID ...
- If the Google Cloud project is also managed in the same cluster with the the Project CRD, you can specify the project as a Kubernetes resource reference: ... spec : projectRef : name : PROJECT RESOURCE NAME namespace : PROJECT RESOURCE NAMESPACE ...

