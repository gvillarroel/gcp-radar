---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.174Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "MonitoringMonitorDashboard logs panel widget"
feature_slug: "monitoringmonitordashboard-logs-panel-widget"
latest_feature_date: "2022-05-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources"
keywords:
  - "monitoringmonitordashboard"
  - "widgets"
  - "widget"
  - "panel"
  - "logs"
  - "across"
  - "resource"
  - "supports"
---

# MonitoringMonitorDashboard logs panel widget

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

The MonitoringMonitorDashboard resource supports logs panel widgets across column, grid, mosaic, and row layouts.

## Extended Definition

The MonitoringMonitorDashboard resource supports logs panel widgets across column, grid, mosaic, and row layouts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources)

## Supporting Pages

### "Managing resources with the resourceID field \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- What's next Review the Resource reference to learn about the resources Config Connector supports.
- Acquiring a folder To acquire a folder using Config Connector with the resourceID field, complete the following steps: Copy the following contents into a file named folder.yaml . apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Folder metadata : annotations : cnrm.cloud.google.com/organization-id : ORG ID Remove the deletion-policy annotation if it is safe to delete the folder when the resource is deleted from your cluster. cnrm.cloud.google.com/deletion-policy : "abandon" name : folder-sample-for-acquisition spec : resourceID : ACQUIRED FOLDER ID displayName : ACQUIRED FOLDER DISPLAY NAME Replace the following: ORG ID with the numeric ID for your organization.
- Copy the following contents into a file named bigquery-dataset.yaml . apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydataset-sample-for-creation spec : resourceID : bigquerydataset sample with resourceid defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample with the ResourceID Field" friendlyName : bigquerydataset-sample-with-resourceid location : US Apply the YAML file to your cluster. kubectl apply --namespace CC NAMESPACE -f bigquery-dataset.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- The name of the Config Connector resource is pubsub-topic-sample and the name of the Pub/Sub topic is pubsub-topic-id . apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : pubsub-topic-sample spec : resourceID : pubsub-topic-id Creating a resource with the resourceID field Note: When you manage a Google Cloud resource with the resourceID field, if the resource has a service-generated resource ID, Config Connector assumes the resource already exists and tries to acquire the resource.

### ContainerCluster \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- If you specify a region (such as us-west1), the cluster will be a regional cluster with multiple masters spread across zones in the region, and with default node locations in those zones as well. loggingConfig Optional object Logging configuration for the cluster. loggingConfig.enableComponents Required list (string) GKE components exposing logs.
- For more details on how to debug and fix an issue which could lead to a permanent diff, please refer to the Config Connector Troubleshooting page Property Value Google Cloud Service Name Kubernetes Engine Google Cloud Service Documentation /kubernetes-engine/docs/ Google Cloud REST Resource Name v1.projects.locations.clusters Google Cloud REST Resource Documentation /kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters Config Connector Resource Short Names gcpcontainercluster gcpcontainerclusters containercluster Config Connector Service Name container.googleapis.com Config Connector Resource Fully Qualified Name containerclusters.container.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Annotations Fields cnrm.cloud.google.com/project-id cnrm.cloud.google.com/remove-default-node-pool Spec Schema addonsConfig : cloudrunConfig : disabled : boolean loadBalancerType : string configConnectorConfig : enabled : boolean dnsCacheConfig : enabled : boolean gcePersistentDiskCsiDriverConfig : enabled : boolean gcpFilestoreCsiDriverConfig : enabled : boolean gcsFuseCsiDriverConfig : enabled : boolean gkeBackupAgentConfig : enabled : boolean horizontalPodAutoscaling : disabled : boolean httpLoadBalancing : disabled : boolean istioConfig : auth : string disabled : boolean kalmConfig : enabled : boolean networkPolicyConfig : disabled : boolean allowNetAdmin : boolean authenticatorGroupsConfig : securityGroup : string binaryAuthorization : enabled : boolean evaluationMode : string clusterAutoscaling : autoProvisioningDefaults : bootDiskKMSKeyRef : external : string name : string namespace : string diskSize : integer imageType : string management : autoRepair : boolean autoUpgrade : boolean upgradeOptions : - autoUpgradeStartTime : string description : string minCpuPlatform : string oauthScopes : - string serviceAccountRef : external : string name : string namespace : string shieldedInstanceConfig : enableIntegrityMonitoring : boolean enableSecureBoot : boolean upgradeSettings : blueGreenSettings : nodePoolSoakDuration : string standardRolloutPolicy : batchNodeCount : integer batchPercentage : float batchSoakDuration : string maxSurge : integer maxUnavailable : integer strategy : string autoscalingProfile : string defaultComputeClassConfig : enabled : boolean enabled : boolean resourceLimits : - maximum : integer minimum : integer resourceType : string clusterIpv4Cidr : string clusterTelemetry : type : string confidentialNodes : enabled : boolean controlPlaneEndpointsConfig : dnsEndpointConfig : allowExternalTraffic : boolean enableK8sTokensViaDns : boolean ipEndpointsConfig : enabled : boolean costManagementConfig : enabled : boolean databaseEncryption : keyName : string state : string datapathProvider : string defaultMaxPodsPerNode : integer defaultSnatStatus : disabled : boolean description : string dnsConfig : clusterDns : string clusterDnsDomain : string clusterDnsScope : string enableAutopilot : boolean enableBinaryAuthorization : boolean enableCiliumClusterwideNetworkPolicy : boolean enableFqdnNetworkPolicy : boolean enableIntranodeVisibility : boolean enableK8sBetaApis : enabledApis : - string enableKubernetesAlpha : boolean enableL4IlbSubsetting : boolean enableLegacyAbac : boolean enableMultiNetworking : boolean enableShieldedNodes : boolean enableTpu : boolean gatewayApiConfig : channel : string identityServiceConfig : enabled : boolean initialNodeCount : integer ipAllocationPolicy : additionalPodRangesConfig : podRangeNames : - string clusterIpv4CidrBlock : string clusterSecondaryRangeName : string podCidrOverprovisionConfig : disabled : boolean servicesIpv4CidrBlock : string servicesSecondaryRangeName : string stackType : string location : string loggingConfig : enableComponents : - string loggingService : string maintenancePolicy : dailyMaintenanceWindow : duration : string startTime : string maintenanceExclusion : - endTime : string exclusionName : string exclusionOptions : scope : string startTime : string recurringWindow : endTime : string recurrence : string startTime : string masterAuth : clientCertificate : string clientCertificateConfig : issueClientCertificate : boolean clientKey : string clusterCaCertificate : string password : value : string valueFrom : secretKeyRef : key : string name : string username : string masterAuthorizedNetworksConfig : cidrBlocks : - cidrBlock : string displayName : string gcpPublicCidrsAccessEnabled : boolean meshCertificates : enableCertificates : boolean minMasterVersion : string monitoringConfig : advancedDatapathObservabilityConfig : - enableMetrics : boolean relayMode : string enableComponents : - string managedPrometheus : enabled : boolean monitoringService : string networkPolicy : enabled : boolean provider : string networkRef : external : string name : string namespace : string networkingMode : string nodeConfig : advancedMachineFeatures : enableNestedVirtualization : boolean threadsPerCore : integer bootDiskKMSCryptoKeyRef : external : string name : string namespace : string confidentialNodes : enabled : boolean diskSizeGb : integer diskType : string ephemeralStorageConfig : localSsdCount : integer ephemeralStorageLocalSsdConfig : localSsdCount : integer fastSocket : enabled : boolean gcfsConfig : enabled : boolean guestAccelerator : - count : integer gpuDriverInstallationConfig : gpuDriverVersion : string gpuPartitionSize : string gpuSharingConfig : gpuSharingStrategy : string maxSharedClientsPerGpu : integer type : string gvnic : enabled : boolean hostMaintenancePolicy : maintenanceInterval : string imageType : string kubeletConfig : cpuCfsQuota : boolean cpuCfsQuotaPeriod : string cpuManagerPolicy : string podPidsLimit : integer labels : string : string linuxNodeConfig : cgroupMode : string sysctls : string : string localNvmeSsdBlockConfig : localSsdCount : integer localSsdCount : integer loggingVariant : string machineType : string metadata : string : string minCpuPlatform : string nodeGroupRef : external : string name : string namespace : string oauthScopes : - string preemptible : boolean reservationAffinity : consumeReservationType : string key : string values : - string resourceLabels : string : string sandboxConfig : sandboxType : string serviceAccountRef : external : string name : string namespace : string shieldedInstanceConfig : enableIntegrityMonitoring : boolean enableSecureBoot : boolean soleTenantConfig : nodeAffinity : - key : string operator : string values : - string spot : boolean tags : - string taint : - effect : string key : string value : string workloadMetadataConfig : mode : string nodeMetadata : string nodeLocations : - string nodePoolAutoConfig : networkTags : tags : - string nodePoolDefaults : nodeConfigDefaults : gcfsConfig : enabled : boolean loggingVariant : string nodeVersion : string notificationConfig : pubsub : enabled : boolean filter : eventType : - string topicRef : external : string name : string namespace : string podSecurityPolicyConfig : enabled : boolean privateClusterConfig : enablePrivateEndpoint : boolean enablePrivateNodes : boolean masterGlobalAccessConfig : enabled : boolean masterIpv4CidrBlock : string peeringName : string privateEndpoint : string privateEndpointSubnetworkRef : external : string name : string namespace : string publicEndpoint : string privateIpv6GoogleAccess : string protectConfig : workloadConfig : auditMode : string workloadVulnerabilityMode : string releaseChannel : channel : string resourceID : string resourceUsageExportConfig : bigqueryDestination : datasetId : string enableNetworkEgressMetering : boolean enableResourceConsumptionMetering : boolean securityPostureConfig : mode : string vulnerabilityMode : string serviceExternalIpsConfig : enabled : boolean subnetworkRef : external : string name : string namespace : string verticalPodAutoscaling : enabled : boolean workloadIdentityConfig : identityNamespace : string workloadPool : string Fields addonsConfig Optional object The configuration for addons supported by GKE. addonsConfig.cloudrunConfig Optional object The status of the CloudRun addon.
- Replace ${PROJECT ID?} below with your project ID. workloadPool : ${PROJECT ID?}.svc.id.goog networkingMode : VPC NATIVE networkRef : name : containercluster-dep-vpcnative subnetworkRef : name : containercluster-dep-vpcnative ipAllocationPolicy : servicesSecondaryRangeName : servicesrange clusterSecondaryRangeName : clusterrange clusterAutoscaling : enabled : true autoscalingProfile : BALANCED resourceLimits : - resourceType : cpu maximum : 100 minimum : 10 - resourceType : memory maximum : 1000 minimum : 100 maintenancePolicy : dailyMaintenanceWindow : startTime : 00:00 releaseChannel : channel : STABLE notificationConfig : pubsub : enabled : true topicRef : name : containercluster-dep-vpcnative enableBinaryAuthorization : true enableIntranodeVisibility : true enableShieldedNodes : true addonsConfig : networkPolicyConfig : disabled : false dnsCacheConfig : enabled : true configConnectorConfig : enabled : true networkPolicy : enabled : true podSecurityPolicyConfig : enabled : true verticalPodAutoscaling : enabled : true --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeNetwork metadata : name : containercluster-dep-vpcnative spec : routingMode : REGIONAL autoCreateSubnetworks : false --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeSubnetwork metadata : name : containercluster-dep-vpcnative spec : ipCidrRange : 10.2.0.0/16 region : us-central1 networkRef : name : containercluster-dep-vpcnative secondaryIpRange : - rangeName : servicesrange ipCidrRange : 10.3.0.0/16 - rangeName : clusterrange ipCidrRange : 10.4.0.0/16 --- apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : containercluster-dep-vpcnative Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
- Field is required when parent field is specified Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string endpoint : string labelFingerprint : string masterVersion : string observedGeneration : integer observedState : controlPlaneEndpointsConfig : dnsEndpointConfig : endpoint : string masterAuth : clientCertificate : string clusterCaCertificate : string privateClusterConfig : privateEndpoint : string publicEndpoint : string operation : string selfLink : string servicesIpv4Cidr : string tpuIpv4CidrBlock : string Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.

### "Organization-scoped resources \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- You can check the resource reference page to see if a resource supports the spec.organizationRef field or cnrm.cloud.google.com/organization-id annotation.
- Here is an example of what a resource's YAML will look like with this annotation in it: apiVersion : foo.cnrm.cloud.google.com/v1beta1 kind : FooBar metadata : annotations : cnrm.cloud.google.com/organization-id : ORGANIZATION ID name : foobarname Annotate namespace configuration You can set a default organization ID for newly-created resources by annotating your Kubernetes namespace.
- Annotate resource configuration If the Config Connector resource is organization-scoped but does not support organizationRef field, you can set the organization ID to the resource configuration using the organization-id annotation: ... metadata : annotations : cnrm.cloud.google.com/organization-id : ORGANIZATION ID ...
- In order for Config Connector to determine where to create your resources, it first checks for a scope-defining field in your resource spec, if not found, then checks for a scope-defining annotation .

