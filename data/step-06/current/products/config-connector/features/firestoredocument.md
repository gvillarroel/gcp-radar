---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.018Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "FirestoreDocument"
feature_slug: "firestoredocument"
latest_feature_date: "2025-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/known-issues"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster"
keywords:
  - "firestoredocument"
  - "reconciler"
  - "resource"
  - "alpha"
  - "direct"
  - "added"
---

# FirestoreDocument

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector added an alpha direct reconciler resource for Firestore documents.

## Extended Definition

Config Connector added an alpha direct reconciler resource for Firestore documents.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/known-issues](https://docs.cloud.google.com/config-connector/docs/known-issues)
- [https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds](https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)

## Supporting Pages

### Known issues \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/known-issues](https://docs.cloud.google.com/config-connector/docs/known-issues)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SecretManagerSecret "last-applied-configuration" error If you enable the direct reconciler for a SecretManagerSecret (using the alpha.cnrm.cloud.google.com/reconciler: direct annotation) in versions 1.131.0 through 1.133, reconciliation might fail with an API error: [kubectl.kubernetes.io/last-applied-configuration] must follow pattern [a-z0-9A-Z]+([ \.\-] [a-z0-9A-Z]+) ), be less than 64 characters, and must have a UTF encoding of less than 128 bytes This occurs because Config Connector incorrectly attempts to pass internal Kubernetes annotations as labels to the Secret Manager API.
- Select your Config Connector version: 1.134.1 1.134 1.131 Kubernetes 1.19 Select your problem category: Installation Networking Resources Direct Reconciler Or, filter the known issues: Category Earliest identified version Fixed version Issue and workaround Resources 1.126.0 1.134.1 Fixed: Resource creation blocked by webhook TLS error: "x509: certificate signed by unknown authority" When attempting to create or apply new Config Connector resources, the Kubernetes API server rejects the request and blocks resource creation.
- Direct Reconciler 1.131 1.134 Fixed: Issues with direct reconcilers Config Connector version 1.132.0 introduced issues affecting resources that use the direct reconciler.
- Duplicate controller name error In version 1.132.0, resources such as SpannerInstance and SecretManagerSecret might fail to reconcile with an error indicating that a controller with the same name already exists: error registering controller: error adding direct controller for SpannerInstance to a manager: error creating new controller: controller with name spannerinstance-controller already exists.

### ContainerCluster \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- For more details on how to debug and fix an issue which could lead to a permanent diff, please refer to the Config Connector Troubleshooting page Property Value Google Cloud Service Name Kubernetes Engine Google Cloud Service Documentation /kubernetes-engine/docs/ Google Cloud REST Resource Name v1.projects.locations.clusters Google Cloud REST Resource Documentation /kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters Config Connector Resource Short Names gcpcontainercluster gcpcontainerclusters containercluster Config Connector Service Name container.googleapis.com Config Connector Resource Fully Qualified Name containerclusters.container.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Annotations Fields cnrm.cloud.google.com/project-id cnrm.cloud.google.com/remove-default-node-pool Spec Schema addonsConfig : cloudrunConfig : disabled : boolean loadBalancerType : string configConnectorConfig : enabled : boolean dnsCacheConfig : enabled : boolean gcePersistentDiskCsiDriverConfig : enabled : boolean gcpFilestoreCsiDriverConfig : enabled : boolean gcsFuseCsiDriverConfig : enabled : boolean gkeBackupAgentConfig : enabled : boolean horizontalPodAutoscaling : disabled : boolean httpLoadBalancing : disabled : boolean istioConfig : auth : string disabled : boolean kalmConfig : enabled : boolean networkPolicyConfig : disabled : boolean allowNetAdmin : boolean authenticatorGroupsConfig : securityGroup : string binaryAuthorization : enabled : boolean evaluationMode : string clusterAutoscaling : autoProvisioningDefaults : bootDiskKMSKeyRef : external : string name : string namespace : string diskSize : integer imageType : string management : autoRepair : boolean autoUpgrade : boolean upgradeOptions : - autoUpgradeStartTime : string description : string minCpuPlatform : string oauthScopes : - string serviceAccountRef : external : string name : string namespace : string shieldedInstanceConfig : enableIntegrityMonitoring : boolean enableSecureBoot : boolean upgradeSettings : blueGreenSettings : nodePoolSoakDuration : string standardRolloutPolicy : batchNodeCount : integer batchPercentage : float batchSoakDuration : string maxSurge : integer maxUnavailable : integer strategy : string autoscalingProfile : string defaultComputeClassConfig : enabled : boolean enabled : boolean resourceLimits : - maximum : integer minimum : integer resourceType : string clusterIpv4Cidr : string clusterTelemetry : type : string confidentialNodes : enabled : boolean controlPlaneEndpointsConfig : dnsEndpointConfig : allowExternalTraffic : boolean enableK8sTokensViaDns : boolean ipEndpointsConfig : enabled : boolean costManagementConfig : enabled : boolean databaseEncryption : keyName : string state : string datapathProvider : string defaultMaxPodsPerNode : integer defaultSnatStatus : disabled : boolean description : string dnsConfig : clusterDns : string clusterDnsDomain : string clusterDnsScope : string enableAutopilot : boolean enableBinaryAuthorization : boolean enableCiliumClusterwideNetworkPolicy : boolean enableFqdnNetworkPolicy : boolean enableIntranodeVisibility : boolean enableK8sBetaApis : enabledApis : - string enableKubernetesAlpha : boolean enableL4IlbSubsetting : boolean enableLegacyAbac : boolean enableMultiNetworking : boolean enableShieldedNodes : boolean enableTpu : boolean gatewayApiConfig : channel : string identityServiceConfig : enabled : boolean initialNodeCount : integer ipAllocationPolicy : additionalPodRangesConfig : podRangeNames : - string clusterIpv4CidrBlock : string clusterSecondaryRangeName : string podCidrOverprovisionConfig : disabled : boolean servicesIpv4CidrBlock : string servicesSecondaryRangeName : string stackType : string location : string loggingConfig : enableComponents : - string loggingService : string maintenancePolicy : dailyMaintenanceWindow : duration : string startTime : string maintenanceExclusion : - endTime : string exclusionName : string exclusionOptions : scope : string startTime : string recurringWindow : endTime : string recurrence : string startTime : string masterAuth : clientCertificate : string clientCertificateConfig : issueClientCertificate : boolean clientKey : string clusterCaCertificate : string password : value : string valueFrom : secretKeyRef : key : string name : string username : string masterAuthorizedNetworksConfig : cidrBlocks : - cidrBlock : string displayName : string gcpPublicCidrsAccessEnabled : boolean meshCertificates : enableCertificates : boolean minMasterVersion : string monitoringConfig : advancedDatapathObservabilityConfig : - enableMetrics : boolean relayMode : string enableComponents : - string managedPrometheus : enabled : boolean monitoringService : string networkPolicy : enabled : boolean provider : string networkRef : external : string name : string namespace : string networkingMode : string nodeConfig : advancedMachineFeatures : enableNestedVirtualization : boolean threadsPerCore : integer bootDiskKMSCryptoKeyRef : external : string name : string namespace : string confidentialNodes : enabled : boolean diskSizeGb : integer diskType : string ephemeralStorageConfig : localSsdCount : integer ephemeralStorageLocalSsdConfig : localSsdCount : integer fastSocket : enabled : boolean gcfsConfig : enabled : boolean guestAccelerator : - count : integer gpuDriverInstallationConfig : gpuDriverVersion : string gpuPartitionSize : string gpuSharingConfig : gpuSharingStrategy : string maxSharedClientsPerGpu : integer type : string gvnic : enabled : boolean hostMaintenancePolicy : maintenanceInterval : string imageType : string kubeletConfig : cpuCfsQuota : boolean cpuCfsQuotaPeriod : string cpuManagerPolicy : string podPidsLimit : integer labels : string : string linuxNodeConfig : cgroupMode : string sysctls : string : string localNvmeSsdBlockConfig : localSsdCount : integer localSsdCount : integer loggingVariant : string machineType : string metadata : string : string minCpuPlatform : string nodeGroupRef : external : string name : string namespace : string oauthScopes : - string preemptible : boolean reservationAffinity : consumeReservationType : string key : string values : - string resourceLabels : string : string sandboxConfig : sandboxType : string serviceAccountRef : external : string name : string namespace : string shieldedInstanceConfig : enableIntegrityMonitoring : boolean enableSecureBoot : boolean soleTenantConfig : nodeAffinity : - key : string operator : string values : - string spot : boolean tags : - string taint : - effect : string key : string value : string workloadMetadataConfig : mode : string nodeMetadata : string nodeLocations : - string nodePoolAutoConfig : networkTags : tags : - string nodePoolDefaults : nodeConfigDefaults : gcfsConfig : enabled : boolean loggingVariant : string nodeVersion : string notificationConfig : pubsub : enabled : boolean filter : eventType : - string topicRef : external : string name : string namespace : string podSecurityPolicyConfig : enabled : boolean privateClusterConfig : enablePrivateEndpoint : boolean enablePrivateNodes : boolean masterGlobalAccessConfig : enabled : boolean masterIpv4CidrBlock : string peeringName : string privateEndpoint : string privateEndpointSubnetworkRef : external : string name : string namespace : string publicEndpoint : string privateIpv6GoogleAccess : string protectConfig : workloadConfig : auditMode : string workloadVulnerabilityMode : string releaseChannel : channel : string resourceID : string resourceUsageExportConfig : bigqueryDestination : datasetId : string enableNetworkEgressMetering : boolean enableResourceConsumptionMetering : boolean securityPostureConfig : mode : string vulnerabilityMode : string serviceExternalIpsConfig : enabled : boolean subnetworkRef : external : string name : string namespace : string verticalPodAutoscaling : enabled : boolean workloadIdentityConfig : identityNamespace : string workloadPool : string Fields addonsConfig Optional object The configuration for addons supported by GKE. addonsConfig.cloudrunConfig Optional object The status of the CloudRun addon.
- Replace ${PROJECT ID?} below with your project ID. workloadPool : ${PROJECT ID?}.svc.id.goog networkingMode : VPC NATIVE networkRef : name : containercluster-dep-vpcnative subnetworkRef : name : containercluster-dep-vpcnative ipAllocationPolicy : servicesSecondaryRangeName : servicesrange clusterSecondaryRangeName : clusterrange clusterAutoscaling : enabled : true autoscalingProfile : BALANCED resourceLimits : - resourceType : cpu maximum : 100 minimum : 10 - resourceType : memory maximum : 1000 minimum : 100 maintenancePolicy : dailyMaintenanceWindow : startTime : 00:00 releaseChannel : channel : STABLE notificationConfig : pubsub : enabled : true topicRef : name : containercluster-dep-vpcnative enableBinaryAuthorization : true enableIntranodeVisibility : true enableShieldedNodes : true addonsConfig : networkPolicyConfig : disabled : false dnsCacheConfig : enabled : true configConnectorConfig : enabled : true networkPolicy : enabled : true podSecurityPolicyConfig : enabled : true verticalPodAutoscaling : enabled : true --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeNetwork metadata : name : containercluster-dep-vpcnative spec : routingMode : REGIONAL autoCreateSubnetworks : false --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeSubnetwork metadata : name : containercluster-dep-vpcnative spec : ipCidrRange : 10.2.0.0/16 region : us-central1 networkRef : name : containercluster-dep-vpcnative secondaryIpRange : - rangeName : servicesrange ipCidrRange : 10.3.0.0/16 - rangeName : clusterrange ipCidrRange : 10.4.0.0/16 --- apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : containercluster-dep-vpcnative Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
- Field is required when parent field is specified Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string endpoint : string labelFingerprint : string masterVersion : string observedGeneration : integer observedState : controlPlaneEndpointsConfig : dnsEndpointConfig : endpoint : string masterAuth : clientCertificate : string clusterCaCertificate : string privateClusterConfig : privateEndpoint : string publicEndpoint : string operation : string selfLink : string servicesIpv4Cidr : string tpuIpv4CidrBlock : string Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- If you see an unexpected diff unsetting your client cert, ensure you have the container.clusters.getCredentials permission. observedState.masterAuth.clientCertificate string Base64 encoded public certificate used by clients to authenticate to the cluster endpoint. observedState.masterAuth.clusterCaCertificate string Base64 encoded public certificate that is the root of trust for the cluster. observedState.privateClusterConfig object Configuration for private clusters, clusters with private nodes. observedState.privateClusterConfig.privateEndpoint string The internal IP address of this cluster's master endpoint. observedState.privateClusterConfig.publicEndpoint string The external IP address of this cluster's master endpoint. operation string selfLink string Server-defined URL for the resource. servicesIpv4Cidr string The IP address range of the Kubernetes services in this cluster, in CIDR notation (e.g.

### Installing Config Connector v1alpha1 CRDs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds](https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Installing Config Connector v1alpha1 CRDs This topic explains how to install v1alpha1 Google Cloud resource Custom Resource Definitions (CRDs) in Config Connector.
- Uninstalling the v1alpha1 CRDs Delete the CRs for v1alpha1 CRDs if you no longer need the underlying Google Cloud resources.
- Warning: Config Connector v1alpha1 Google Cloud resource CRDs should not be used in production.
- You can check the Config Connector version by connecting to the cluster where Config Connector is installed and running the following command: kubectl get ns cnrm-system -o jsonpath = '{.metadata.annotations.cnrm\.cloud\.google\.com/version}' Installing the v1alpha1 CRDs Clone the GitHub repository : git clone https://github.com/GoogleCloudPlatform/k8s-config-connector git checkout to your Config Connector version: cd k8s-config-connector echo 'v' $( kubectl get ns cnrm-system -o jsonpath = '{.metadata.annotations.cnrm\.cloud\.google\.com/version}' ) xargs git checkout Install the v1alpha1 CRDs: cd crds If you want to install a specific v1alpha1 CRD, run the following command: kubectl apply -f CRD FILENAME Replace CRD FILENAME with the filename of the v1alpha1 CRD you want to install.

