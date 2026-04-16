---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.265Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "Immutability documentation in field descriptions"
feature_slug: "immutability-documentation-in-field-descriptions"
latest_feature_date: "2020-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally"
  - "https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster"
keywords:
  - "documentation"
  - "descriptions"
  - "indicate"
  - "whether"
  - "immutability"
  - "fields"
  - "field"
---

# Immutability documentation in field descriptions

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Field descriptions now indicate whether fields are immutable.

## Extended Definition

Field descriptions now indicate whether fields are immutable.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally](https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally)
- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)

## Supporting Pages

### Manage fields externally \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally](https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As an example: if the user applies a resource configuration without setting a value for bar in the spec: spec : foo : "foo" If the value of the bar field is baz in the Google Cloud API, the resource in the api-server is populated to that value: object in the api-server spec : foo : "foo" bar : "baz" # populated by first reconciliation If the Google Cloud resource is modified directly such that bar is now baz-2 , the Google Cloud API is corrected to the value that was initially populated in the resource spec: baz : object in the api-server spec : foo : "foo" bar : "baz" # still the originally populated value, and overrides the Google Cloud value Behavior for list fields in resource spec Due to technical limitation in Config Connector, list fields in your resource configuration cannot be managed externally by default.
- To see if your resource supports the annotation, check the corresponding resource reference page . metadata : annotations : cnrm.cloud.google.com/state-into-spec : absent By setting value of state-into-spec as absent , Config Connector ignores list fields if they are not specified in your resource configuration.
- Behavior without server-side apply If server-side apply is not enabled, unspecified fields in the resource spec are populated with the value read from the Google Cloud API, and Config Connector enforces those initially populated values.
- When Config Connector creates a resource on Google Cloud, fields left unspecified in the spec take on values from the API unless they are not readable (for example, are not available by using a GET HTTP request).

### Ignore unspecified fields \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- To further explain the difference introduced by this annotation, assume there is a spec with the following schema: foo1 : string foo2 : string bars : - bar : br1 : string br2 : string barz : bz1 : string bz2 : string Also assume you have specified the spec in your YAML as: spec : foo1 : "foo1" bars : - br1 : "1 br1" - br1 : "2 br1" barz : bz1 : "bz1" Then by default, the populated spec in the created Kubernetes resource might be: spec : foo1 : "foo1" foo2 : "foo2" bars : - br1 : "1 br1" br2 : "1 br2" - br1 : "2 br1" br2 : "2 br2" barz : bz1 : "bz1" bz2 : "bz2" While if you set cnrm.cloud.google.com/state-into-spec: absent , the final spec in the created Kubernetes resource will be: spec : foo1 : "foo1" bars : - br1 : "1 br1" - br1 : "2 br1" barz : bz1 : "bz1" When to use cnrm.cloud.google.com/state-into-spec: absent In most cases, you'll want to set cnrm.cloud.google.com/state-into-spec: absent to get the Absent populating behavior for spec fields.
- Configure the cluster-level or namespace-level stateIntoSpec override When installing Config Connector, or updating the Config Connector installation, you can configure the cluster-level or namespace-level stateIntoSpec override to be Absent in the ConfigConnector CR or ConfigConnectorContext CR. spec : stateIntoSpec : Absent This makes Absent the default spec fields populating behavior for any new resources created in the cluster or in the namespace when you don't specify the cnrm.cloud.google.com/state-into-spec annotation in the new resource YAMLs.
- As an example, assume the CRD schema let you specify two fields named foo and bar in spec, while your applied YAML file has only foo specified: spec : foo : "foo" You'll notice another field named bar appears in the CR if the YAML is applied successfully and the resource is UpToDate : spec : foo : "foo" bar : "bar" Due to the complexity of interaction between Config Connector and Google Cloud APIs, you might want to change this default behavior and skip populating the Kubernetes resource spec with unspecified fields.
- Config Connector will determine the spec fields populating behavior based on the value of the cnrm.cloud.google.com/state-into-spec annotation, and it follows the logic below to determine the value of the annotation: Use the value of the cnrm.cloud.google.com/state-into-spec annotation directly if it is specified and valid.

### ContainerCluster \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- For more details on how to debug and fix an issue which could lead to a permanent diff, please refer to the Config Connector Troubleshooting page Property Value Google Cloud Service Name Kubernetes Engine Google Cloud Service Documentation /kubernetes-engine/docs/ Google Cloud REST Resource Name v1.projects.locations.clusters Google Cloud REST Resource Documentation /kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters Config Connector Resource Short Names gcpcontainercluster gcpcontainerclusters containercluster Config Connector Service Name container.googleapis.com Config Connector Resource Fully Qualified Name containerclusters.container.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Annotations Fields cnrm.cloud.google.com/project-id cnrm.cloud.google.com/remove-default-node-pool Spec Schema addonsConfig : cloudrunConfig : disabled : boolean loadBalancerType : string configConnectorConfig : enabled : boolean dnsCacheConfig : enabled : boolean gcePersistentDiskCsiDriverConfig : enabled : boolean gcpFilestoreCsiDriverConfig : enabled : boolean gcsFuseCsiDriverConfig : enabled : boolean gkeBackupAgentConfig : enabled : boolean horizontalPodAutoscaling : disabled : boolean httpLoadBalancing : disabled : boolean istioConfig : auth : string disabled : boolean kalmConfig : enabled : boolean networkPolicyConfig : disabled : boolean allowNetAdmin : boolean authenticatorGroupsConfig : securityGroup : string binaryAuthorization : enabled : boolean evaluationMode : string clusterAutoscaling : autoProvisioningDefaults : bootDiskKMSKeyRef : external : string name : string namespace : string diskSize : integer imageType : string management : autoRepair : boolean autoUpgrade : boolean upgradeOptions : - autoUpgradeStartTime : string description : string minCpuPlatform : string oauthScopes : - string serviceAccountRef : external : string name : string namespace : string shieldedInstanceConfig : enableIntegrityMonitoring : boolean enableSecureBoot : boolean upgradeSettings : blueGreenSettings : nodePoolSoakDuration : string standardRolloutPolicy : batchNodeCount : integer batchPercentage : float batchSoakDuration : string maxSurge : integer maxUnavailable : integer strategy : string autoscalingProfile : string defaultComputeClassConfig : enabled : boolean enabled : boolean resourceLimits : - maximum : integer minimum : integer resourceType : string clusterIpv4Cidr : string clusterTelemetry : type : string confidentialNodes : enabled : boolean controlPlaneEndpointsConfig : dnsEndpointConfig : allowExternalTraffic : boolean enableK8sTokensViaDns : boolean ipEndpointsConfig : enabled : boolean costManagementConfig : enabled : boolean databaseEncryption : keyName : string state : string datapathProvider : string defaultMaxPodsPerNode : integer defaultSnatStatus : disabled : boolean description : string dnsConfig : clusterDns : string clusterDnsDomain : string clusterDnsScope : string enableAutopilot : boolean enableBinaryAuthorization : boolean enableCiliumClusterwideNetworkPolicy : boolean enableFqdnNetworkPolicy : boolean enableIntranodeVisibility : boolean enableK8sBetaApis : enabledApis : - string enableKubernetesAlpha : boolean enableL4IlbSubsetting : boolean enableLegacyAbac : boolean enableMultiNetworking : boolean enableShieldedNodes : boolean enableTpu : boolean gatewayApiConfig : channel : string identityServiceConfig : enabled : boolean initialNodeCount : integer ipAllocationPolicy : additionalPodRangesConfig : podRangeNames : - string clusterIpv4CidrBlock : string clusterSecondaryRangeName : string podCidrOverprovisionConfig : disabled : boolean servicesIpv4CidrBlock : string servicesSecondaryRangeName : string stackType : string location : string loggingConfig : enableComponents : - string loggingService : string maintenancePolicy : dailyMaintenanceWindow : duration : string startTime : string maintenanceExclusion : - endTime : string exclusionName : string exclusionOptions : scope : string startTime : string recurringWindow : endTime : string recurrence : string startTime : string masterAuth : clientCertificate : string clientCertificateConfig : issueClientCertificate : boolean clientKey : string clusterCaCertificate : string password : value : string valueFrom : secretKeyRef : key : string name : string username : string masterAuthorizedNetworksConfig : cidrBlocks : - cidrBlock : string displayName : string gcpPublicCidrsAccessEnabled : boolean meshCertificates : enableCertificates : boolean minMasterVersion : string monitoringConfig : advancedDatapathObservabilityConfig : - enableMetrics : boolean relayMode : string enableComponents : - string managedPrometheus : enabled : boolean monitoringService : string networkPolicy : enabled : boolean provider : string networkRef : external : string name : string namespace : string networkingMode : string nodeConfig : advancedMachineFeatures : enableNestedVirtualization : boolean threadsPerCore : integer bootDiskKMSCryptoKeyRef : external : string name : string namespace : string confidentialNodes : enabled : boolean diskSizeGb : integer diskType : string ephemeralStorageConfig : localSsdCount : integer ephemeralStorageLocalSsdConfig : localSsdCount : integer fastSocket : enabled : boolean gcfsConfig : enabled : boolean guestAccelerator : - count : integer gpuDriverInstallationConfig : gpuDriverVersion : string gpuPartitionSize : string gpuSharingConfig : gpuSharingStrategy : string maxSharedClientsPerGpu : integer type : string gvnic : enabled : boolean hostMaintenancePolicy : maintenanceInterval : string imageType : string kubeletConfig : cpuCfsQuota : boolean cpuCfsQuotaPeriod : string cpuManagerPolicy : string podPidsLimit : integer labels : string : string linuxNodeConfig : cgroupMode : string sysctls : string : string localNvmeSsdBlockConfig : localSsdCount : integer localSsdCount : integer loggingVariant : string machineType : string metadata : string : string minCpuPlatform : string nodeGroupRef : external : string name : string namespace : string oauthScopes : - string preemptible : boolean reservationAffinity : consumeReservationType : string key : string values : - string resourceLabels : string : string sandboxConfig : sandboxType : string serviceAccountRef : external : string name : string namespace : string shieldedInstanceConfig : enableIntegrityMonitoring : boolean enableSecureBoot : boolean soleTenantConfig : nodeAffinity : - key : string operator : string values : - string spot : boolean tags : - string taint : - effect : string key : string value : string workloadMetadataConfig : mode : string nodeMetadata : string nodeLocations : - string nodePoolAutoConfig : networkTags : tags : - string nodePoolDefaults : nodeConfigDefaults : gcfsConfig : enabled : boolean loggingVariant : string nodeVersion : string notificationConfig : pubsub : enabled : boolean filter : eventType : - string topicRef : external : string name : string namespace : string podSecurityPolicyConfig : enabled : boolean privateClusterConfig : enablePrivateEndpoint : boolean enablePrivateNodes : boolean masterGlobalAccessConfig : enabled : boolean masterIpv4CidrBlock : string peeringName : string privateEndpoint : string privateEndpointSubnetworkRef : external : string name : string namespace : string publicEndpoint : string privateIpv6GoogleAccess : string protectConfig : workloadConfig : auditMode : string workloadVulnerabilityMode : string releaseChannel : channel : string resourceID : string resourceUsageExportConfig : bigqueryDestination : datasetId : string enableNetworkEgressMetering : boolean enableResourceConsumptionMetering : boolean securityPostureConfig : mode : string vulnerabilityMode : string serviceExternalIpsConfig : enabled : boolean subnetworkRef : external : string name : string namespace : string verticalPodAutoscaling : enabled : boolean workloadIdentityConfig : identityNamespace : string workloadPool : string Fields addonsConfig Optional object The configuration for addons supported by GKE. addonsConfig.cloudrunConfig Optional object The status of the CloudRun addon.
- When false, configuration of masterAuthorizedNetworksConfig, privateClusterConfig.enablePrivateEndpoint, privateClusterConfig.privateEndpointSubnetwork and privateClusterConfig.masterGlobalAccessConfig fields won't be used, and privateClusterConfig.privateEndpoint and privateClusterConfig.publicEndpoint fields won't be populated. costManagementConfig Optional object Cost management configuration for the cluster. costManagementConfig.enabled Required boolean Whether to enable GKE cost allocation.
- Field is required when parent field is specified Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string endpoint : string labelFingerprint : string masterVersion : string observedGeneration : integer observedState : controlPlaneEndpointsConfig : dnsEndpointConfig : endpoint : string masterAuth : clientCertificate : string clusterCaCertificate : string privateClusterConfig : privateEndpoint : string publicEndpoint : string operation : string selfLink : string servicesIpv4Cidr : string tpuIpv4CidrBlock : string Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- Must be specified in CIDR notation. masterAuthorizedNetworksConfig.cidrBlocks[].displayName Optional string Field for users to identify CIDR blocks. masterAuthorizedNetworksConfig.gcpPublicCidrsAccessEnabled Optional boolean Whether master is accessbile via Google Compute Engine Public IP addresses. meshCertificates Optional object If set, and enable certificates=true, the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster. meshCertificates.enableCertificates Required boolean When enabled the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster. minMasterVersion Optional string The minimum version of the master.

