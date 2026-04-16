---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.396Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Node auto-provisioning ephemeral storage support"
feature_slug: "node-auto-provisioning-ephemeral-storage-support"
latest_feature_date: "2021-02-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest"
keywords:
  - "provisioning"
  - "ephemeral"
  - "storage"
  - "scale"
  - "auto"
  - "node"
---

# Node auto-provisioning ephemeral storage support

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Node auto-provisioning can scale up for Pods that explicitly require ephemeral storage.

## Extended Definition

Node auto-provisioning can scale up for Pods that explicitly require ephemeral storage.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest)

## Supporting Pages

### "About node pool auto-creation \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- Source ID: `site-docs-reference-2`
- Final score: 225
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example ComputeClass manifest enables node pool auto-creation for any Pod that uses the ComputeClass: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : example-computeclass spec : priorities : - machineFamily : n4 - machineFamily : c4 whenUnsatisfiable : ScaleUpAnyway nodePoolAutoCreation : enabled : true Cluster-level enablement with node auto-provisioning To enable node pool auto-creation for the entire cluster, you enable the node auto-provisioning feature for the cluster by using the Kubernetes Engine API.
- The following example configuration file enables node auto-repair and auto-upgrade for any new auto-created node pools: management : autoRepair : true autoUpgrade : true The following example configuration file sets the cluster-wide resource limits for node auto-provisioning and configures multiple default settings: resourceLimits : - resourceType : 'cpu' minimum : 4 maximum : 10 - resourceType : 'memory' maximum : 64 - resourceType : 'nvidia-tesla-t4' maximum : 4 management : autoRepair : true autoUpgrade : true shieldedInstanceConfig : enableSecureBoot : true enableIntegrityMonitoring : true diskSizeGb : 100 This configuration file sets the following default values: Enables node auto-repair and auto-upgrade for any new auto-created node pools.
- GKE scaling preferences The following preferences apply when GKE autoscales your infrastructure: Reduce wasted compute resources : GKE uses the resource capacity of existing auto-created node pools in your cluster to determine the machine type to use for new node pools.
- Cloud TPU node pool autoscaling GKE scales automatically created or manually created Cloud TPU node pools that use the cluster autoscaler in one of the following ways: Single-host TPU slice node pool : GKE adds or removes TPU nodes in the existing node pool.

### "About GKE cluster autoscaling \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- Source ID: `site-docs-reference-2`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- In GKE control plane version earlier than 1.24.5-gke.600, when Pods request ephemeral storage, the cluster autoscaler does not support scaling up a node pool with zero nodes that uses Local SSDs as ephemeral storage .
- With Autopilot clusters, you don't need to worry about provisioning nodes or managing node pools because node pools are automatically provisioned through node auto-provisioning , and are automatically scaled to meet the requirements of your workloads.
- For this policy to work, autoscaling has to be enabled and the initial number of nodes has to be set to 0, so that the autoscaler is responsible for provisioning all nodes.
- Additionally, if the current number of nodes is zero due to manual removal of nodes, cluster autoscaler and node auto-provisioning can scale up from zero node clusters.

### "Run a large-scale workload with flex-start with queued provisioning \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest)
- Source ID: `site-docs-reference-required-4`
- Final score: 179
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Jobs that refer to dws-cluster-queue queue in this namespace use flex-start with queued provisioning to get the GPU resources. apiVersion : kueue.x-k8s.io/v1beta1 kind : ResourceFlavor metadata : name : "default-flavor" --- apiVersion : kueue.x-k8s.io/v1beta1 kind : AdmissionCheck metadata : name : dws-prov spec : controllerName : kueue.x-k8s.io/provisioning-request parameters : apiGroup : kueue.x-k8s.io kind : ProvisioningRequestConfig name : dws-config --- apiVersion : kueue.x-k8s.io/v1beta1 kind : ProvisioningRequestConfig metadata : name : dws-config spec : provisioningClassName : queued-provisioning.gke.io managedResources : - nvidia.com/gpu --- apiVersion : kueue.x-k8s.io/v1beta1 kind : ClusterQueue metadata : name : "dws-cluster-queue" spec : namespaceSelector : {} resourceGroups : - coveredResources : [ "cpu" , "memory" , "nvidia.com/gpu" , "ephemeral-storage" ] flavors : - name : "default-flavor" resources : - name : "cpu" nominalQuota : 1000000000 # "Infinite" quota - name : "memory" nominalQuota : 1000000000Gi # "Infinite" quota - name : "nvidia.com/gpu" nominalQuota : 1000000000 # "Infinite" quota - name : "ephemeral-storage" nominalQuota : 1000000000Ti # "Infinite" quota admissionChecks : - dws-prov --- apiVersion : kueue.x-k8s.io/v1beta1 kind : LocalQueue metadata : namespace : "default" name : "dws-local-queue" spec : clusterQueue : "dws-cluster-queue" --- apiVersion : monitoring.googleapis.com/v1 kind : PodMonitoring metadata : labels : control-plane : controller-manager name : controller-manager-metrics-monitor namespace : kueue-system spec : endpoints : - path : /metrics port : 8080 scheme : http interval : 30s selector : matchLabels : control-plane : controller-manager --- This cluster's queue has high quota limits and only the flex-start with queued provisioning integration is enabled.
- Create the following provisioning-request.yaml manifest: Standard apiVersion : v1 kind : PodTemplate metadata : name : POD TEMPLATE NAME namespace : NAMESPACE NAME labels : cloud.google.com/apply-warden-policies : "true" template : spec : nodeSelector : cloud.google.com/gke-nodepool : NODEPOOL NAME cloud.google.com/gke-flex-start : "true" tolerations : - key : "nvidia.com/gpu" operator : "Exists" effect : "NoSchedule" containers : - name : pi image : perl command : [ "/bin/sh" ] resources : limits : cpu : "700m" nvidia.com/gpu : 1 requests : cpu : "700m" nvidia.com/gpu : 1 restartPolicy : Never --- apiVersion : autoscaling.x-k8s.io/ API VERSION kind : ProvisioningRequest metadata : name : PROVISIONING REQUEST NAME namespace : NAMESPACE NAME spec : provisioningClassName : queued-provisioning.gke.io parameters : maxRunDurationSeconds : " MAX RUN DURATION SECONDS " podSets : - count : COUNT podTemplateRef : name : POD TEMPLATE NAME Replace the following: API VERSION : The version of the API, either v1 or v1beta1 .
- Node auto-provisioning apiVersion : v1 kind : PodTemplate metadata : name : POD TEMPLATE NAME namespace : NAMESPACE NAME labels : cloud.google.com/apply-warden-policies : "true" template : spec : nodeSelector : cloud.google.com/gke-accelerator : GPU TYPE cloud.google.com/gke-flex-start : "true" tolerations : - key : "nvidia.com/gpu" operator : "Exists" effect : "NoSchedule" containers : - name : pi image : perl command : [ "/bin/sh" ] resources : limits : cpu : "700m" nvidia.com/gpu : 1 requests : cpu : "700m" nvidia.com/gpu : 1 restartPolicy : Never --- apiVersion : autoscaling.x-k8s.io/ API VERSION kind : ProvisioningRequest metadata : name : PROVISIONING REQUEST NAME namespace : NAMESPACE NAME spec : provisioningClassName : queued-provisioning.gke.io parameters : maxRunDurationSeconds : " MAX RUN DURATION SECONDS " podSets : - count : COUNT podTemplateRef : name : POD TEMPLATE NAME Replace the following: API VERSION : The version of the API, either v1 or v1beta1 .
- Create a node pool Create a node pool that has flex-start with queued provisioning enabled by using the gcloud CLI: gcloud container node-pools create NODEPOOL NAME \ --cluster = CLUSTER NAME \ --location = LOCATION \ --enable-queued-provisioning \ --accelerator type = GPU TYPE ,count = AMOUNT ,gpu-driver-version = DRIVER VERSION \ --machine-type = MACHINE TYPE \ --flex-start \ --enable-autoscaling \ --num-nodes = 0 \ --total-max-nodes TOTAL MAX NODES \ --location-policy = ANY \ --reservation-affinity = none \ --no-enable-autorepair Replace the following: NODEPOOL NAME : The name you choose for the node pool.

