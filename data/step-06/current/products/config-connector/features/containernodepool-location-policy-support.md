---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.145Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "ContainerNodePool location policy support"
feature_slug: "containernodepool-location-policy-support"
latest_feature_date: "2022-10-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool"
  - "https://docs.cloud.google.com/config-connector/docs/resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus"
keywords:
  - "locationpolicy"
  - "containernodepool"
  - "location"
  - "supports"
  - "policy"
  - "field"
---

# ContainerNodePool location policy support

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports the locationPolicy field for ContainerNodePool resources.

## Extended Definition

Config Connector supports the locationPolicy field for ContainerNodePool resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool)
- [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus)

## Supporting Pages

### Monitoring Config Connector with Prometheus \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

### Resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

### ContainerNodePool \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool)
- Source ID: `site-docs-root-2`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- ContainerNodePool Property Value Google Cloud Service Name Kubernetes Engine Google Cloud Service Documentation /kubernetes-engine/docs/ Google Cloud REST Resource Name v1.projects.locations.clusters.nodePools Google Cloud REST Resource Documentation /kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools Config Connector Resource Short Names gcpcontainernodepool gcpcontainernodepools containernodepool Config Connector Service Name container.googleapis.com Config Connector Resource Fully Qualified Name containernodepools.container.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Annotations Fields cnrm.cloud.google.com/project-id Spec Schema autoscaling : locationPolicy : string maxNodeCount : integer minNodeCount : integer totalMaxNodeCount : integer totalMinNodeCount : integer clusterRef : external : string name : string namespace : string initialNodeCount : integer location : string management : autoRepair : boolean autoUpgrade : boolean maxPodsPerNode : integer namePrefix : string networkConfig : additionalNodeNetworkConfigs : - networkRef : external : string name : string namespace : string subnetworkRef : external : string name : string namespace : string additionalPodNetworkConfigs : - maxPodsPerNode : integer secondaryPodRange : string subnetworkRef : external : string name : string namespace : string createPodRange : boolean enablePrivateNodes : boolean podCidrOverprovisionConfig : disabled : boolean podIpv4CidrBlock : string podRange : string nodeConfig : advancedMachineFeatures : threadsPerCore : integer bootDiskKMSCryptoKeyRef : external : string name : string namespace : string confidentialNodes : enabled : boolean diskSizeGb : integer diskType : string ephemeralStorageConfig : localSsdCount : integer ephemeralStorageLocalSsdConfig : localSsdCount : integer fastSocket : enabled : boolean gcfsConfig : enabled : boolean guestAccelerator : - count : integer gpuDriverInstallationConfig : gpuDriverVersion : string gpuPartitionSize : string gpuSharingConfig : gpuSharingStrategy : string maxSharedClientsPerGpu : integer type : string gvnic : enabled : boolean hostMaintenancePolicy : maintenanceInterval : string imageType : string kubeletConfig : cpuCfsQuota : boolean cpuCfsQuotaPeriod : string cpuManagerPolicy : string podPidsLimit : integer labels : string : string linuxNodeConfig : cgroupMode : string sysctls : string : string localNvmeSsdBlockConfig : localSsdCount : integer localSsdCount : integer loggingVariant : string machineType : string metadata : string : string minCpuPlatform : string nodeGroupRef : external : string name : string namespace : string oauthScopes : - string preemptible : boolean reservationAffinity : consumeReservationType : string key : string values : - string resourceLabels : string : string sandboxConfig : sandboxType : string serviceAccountRef : external : string name : string namespace : string shieldedInstanceConfig : enableIntegrityMonitoring : boolean enableSecureBoot : boolean soleTenantConfig : nodeAffinity : - key : string operator : string values : - string spot : boolean tags : - string taint : - effect : string key : string value : string workloadMetadataConfig : mode : string nodeMetadata : string nodeCount : integer nodeLocations : - string placementPolicy : policyNameRef : external : string name : string namespace : string tpuTopology : string type : string resourceID : string upgradeSettings : blueGreenSettings : nodePoolSoakDuration : string standardRolloutPolicy : batchNodeCount : integer batchPercentage : float batchSoakDuration : string maxSurge : integer maxUnavailable : integer strategy : string version : string Fields autoscaling Optional object Configuration required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : container.cnrm.cloud.google.com/v1beta1 kind : ContainerNodePool metadata : name : containernodepool-sample-soletenancy spec : location : us-central1-b autoscaling : minNodeCount : 1 maxNodeCount : 3 nodeConfig : machineType : n1-standard-2 nodeGroupRef : name : containernodepool-dep-soletenancy clusterRef : name : containernodepool-dep-soletenancy --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeNodeGroup metadata : name : containernodepool-dep-soletenancy spec : description : A single sole-tenant node in the us-central1-b zone. size : 1 nodeTemplateRef : name : containernodepool-dep-soletenancy zone : us-central1-b --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeNodeTemplate metadata : name : containernodepool-dep-soletenancy spec : region : us-central1 nodeType : n1-node-96-624 --- apiVersion : container.cnrm.cloud.google.com/v1beta1 kind : ContainerCluster metadata : annotations : cnrm.cloud.google.com/remove-default-node-pool : "true" name : containernodepool-dep-soletenancy spec : description : A cluster using the Compute Engine sole-tenant node. location : us-central1-b initialNodeCount : 1 Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
- See the License for the specific language governing permissions and limitations under the License. apiVersion : container.cnrm.cloud.google.com/v1beta1 kind : ContainerNodePool metadata : labels : label-one : "value-one" name : containernodepool-sample-basic spec : location : us-east1-c autoscaling : minNodeCount : 1 maxNodeCount : 3 nodeConfig : machineType : n1-standard-1 diskSizeGb : 100 diskType : pd-standard tags : - tagone - tagtwo preemptible : false minCpuPlatform : "Intel Haswell" oauthScopes : - "https://www.googleapis.com/auth/logging.write" - "https://www.googleapis.com/auth/monitoring" guestAccelerator : - type : "nvidia-tesla-t4" count : 1 metadata : disable-legacy-endpoints : "true" management : autoRepair : true autoUpgrade : true clusterRef : name : containernodepool-dep-basic --- apiVersion : container.cnrm.cloud.google.com/v1beta1 kind : ContainerCluster metadata : annotations : cnrm.cloud.google.com/remove-default-node-pool : "true" name : containernodepool-dep-basic spec : location : us-east1-c initialNodeCount : 1 Sole Tenant Node Pool Copyright 2020 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- To disable autoscaling, set minNodeCount and maxNodeCount to 0. autoscaling.locationPolicy Optional string Location policy specifies the algorithm used when scaling-up the node pool. "BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs. autoscaling.maxNodeCount Optional integer Maximum number of nodes per zone in the node pool.

