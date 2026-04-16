---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.769Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Dynamic Workload Scheduler via Provisioning Request API"
feature_slug: "dynamic-workload-scheduler-via-provisioning-request-api"
latest_feature_date: "2023-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler"
keywords:
  - "dynamic"
  - "workload"
  - "scheduler"
  - "via"
  - "provisioning"
  - "request"
  - "gke"
  - "standard"
---

# Dynamic Workload Scheduler via Provisioning Request API

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Standard clusters can use Dynamic Workload Scheduler to obtain large atomic sets of available GPU models.

## Extended Definition

GKE Standard clusters can use Dynamic Workload Scheduler to obtain large atomic sets of available GPU models.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)

## Supporting Pages

### "Run a large-scale workload with flex-start with queued provisioning \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest)
- Source ID: `site-docs-reference-required-4`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Additionally, with the ClusterQueue configuration, incoming Jobs try to use reservation-nodepool , and if there is no capacity then these Jobs use Dynamic Workload Scheduler to get the GPU resources. apiVersion : kueue.x-k8s.io/v1beta1 kind : ResourceFlavor metadata : name : "reservation" spec : nodeLabels : cloud.google.com/gke-nodepool : "reservation-nodepool" # placeholder value --- apiVersion : kueue.x-k8s.io/v1beta1 kind : ResourceFlavor metadata : name : "dws" spec : nodeLabels : cloud.google.com/gke-nodepool : "dws-nodepool" # placeholder value --- apiVersion : kueue.x-k8s.io/v1beta1 kind : ClusterQueue metadata : name : "cluster-queue" spec : namespaceSelector : {} # match all. resourceGroups : - coveredResources : [ "cpu" , "memory" , "nvidia.com/gpu" ] flavors : - name : "reservation" # first we try reservation resources : - name : "cpu" nominalQuota : 9 - name : "memory" nominalQuota : 36Gi - name : "nvidia.com/gpu" nominalQuota : 9 - name : "dws" # if reservation is saturated we try dws resources : - name : "cpu" nominalQuota : 1000000000 # "Infinite" quota - name : "memory" nominalQuota : 1000000000Gi # "Infinite" quota - name : "nvidia.com/gpu" nominalQuota : 1000000000 # "Infinite" quota admissionChecksStrategy : admissionChecks : - name : "dws-prov" onFlavors : [ dws ] --- apiVersion : kueue.x-k8s.io/v1beta1 kind : LocalQueue metadata : namespace : "default" name : "user-queue" spec : clusterQueue : "cluster-queue" --- apiVersion : kueue.x-k8s.io/v1beta1 kind : AdmissionCheck metadata : name : dws-prov spec : controllerName : kueue.x-k8s.io/provisioning-request parameters : apiGroup : kueue.x-k8s.io kind : ProvisioningRequestConfig name : dws-config --- apiVersion : kueue.x-k8s.io/v1beta1 kind : ProvisioningRequestConfig metadata : name : dws-config spec : provisioningClassName : queued-provisioning.gke.io managedResources : - nvidia.com/gpu This cluster's queue has high quota limits and only the flex-start with queued provisioning integration is enabled.
- Flex-start with queued provisioning uses the following tools: Flex-start with queued provisioning is based on Dynamic Workload Scheduler combined with the Provisioning Request custom resource definition (CRD) .
- This page shows you how to optimize GPU obtainability for large-scale batch and AI workloads with GPUs using flex-start with queued provisioning powered by Dynamic Workload Scheduler .
- Create the following provisioning-request.yaml manifest: Standard apiVersion : v1 kind : PodTemplate metadata : name : POD TEMPLATE NAME namespace : NAMESPACE NAME labels : cloud.google.com/apply-warden-policies : "true" template : spec : nodeSelector : cloud.google.com/gke-nodepool : NODEPOOL NAME cloud.google.com/gke-flex-start : "true" tolerations : - key : "nvidia.com/gpu" operator : "Exists" effect : "NoSchedule" containers : - name : pi image : perl command : [ "/bin/sh" ] resources : limits : cpu : "700m" nvidia.com/gpu : 1 requests : cpu : "700m" nvidia.com/gpu : 1 restartPolicy : Never --- apiVersion : autoscaling.x-k8s.io/ API VERSION kind : ProvisioningRequest metadata : name : PROVISIONING REQUEST NAME namespace : NAMESPACE NAME spec : provisioningClassName : queued-provisioning.gke.io parameters : maxRunDurationSeconds : " MAX RUN DURATION SECONDS " podSets : - count : COUNT podTemplateRef : name : POD TEMPLATE NAME Replace the following: API VERSION : The version of the API, either v1 or v1beta1 .

### "About dynamic resource allocation in GKE \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation)
- Source ID: `site-docs-reference-2`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Comparison of ResourceClaims and ResourceClaimTemplates Manually-created ResourceClaims Automatically-created ResourceClaims Managed by you Managed by Kubernetes Provides access to the same devices from multiple Pods Provides access to devices from a single Pod Exists in the cluster independently of Pods Bound to the lifecycle of the corresponding Pod Ideal for multiple workloads that need to share a specific device Ideal for multiple workloads that need independent device access Comparison of DRA with manual device allocation DRA makes allocating attached devices a similar experience to dynamically provisioning PersistentVolumes.
- The following resources might help you to learn CEL: Read the CEL overview Do a CEL tutorial Refer to the CEL language definition Learn about ComputeClasses in GKE : you can use ComputeClasses with DRA to meet business needs like provisioning Spot VMs to run inference workloads that request cost-efficient GPUs.
- The Kubernetes scheduler uses ResourceSlices to decide which devices to allocate to satisfy workload requests.
- Comparison of DRA and manual device allocation DRA Manual allocation Flexible device selection using CEL expressions Specific node selection using selectors and resource requests Scheduling decisions made by Kubernetes Scheduling decisions made by the operator using node selectors Device filtering is separate from workload creation Device filtering has to be done in the workload manifest Centralized device filtering and needs-based classes, managed by platform administrators Isolated device filtering by application operators App operators don't need to know node capacity, node label information, or the attached device models for each node App operators must know which nodes have specific models and quantities of certain devices attached.

### "About GKE cluster autoscaling \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Supported Provisioning Classes There are three supported ProvisioningClasses: queued-provisioning.gke.io : this GKE-specific class integrates with the Dynamic Workload Scheduler, lets you queue requests and have them fulfilled when resources become available.
- See Deploy GPUs for batch and AI workloads with Dynamic Workload Scheduler to learn how to use queued provisioning in GKE.
- GKE will try to provision these VMs first. spot : true gpu : type : nvidia-l4 count : 2 If GKE can't satisfy the preceding rule, request on-demand nodes with the same configuration - machineType : g2-standard-24 spot : false gpu : type : nvidia-l4 count : 2 nodePoolAutoCreation : enabled : true Configures active migration behavior for workloads using this ComputeClass. activeMigration : optimizeRulePriority : true Enables Cluster Autoscaler to attempt to migrate workloads to Spot VMs if Spot capacity becomes available and the workload is currently running on an on-demand VM (based on the priority rules in this example).
- To learn more about ComputeClass parameters, see ComputeClass CRD documentation : apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : prefer-l4-spot spec : Defines a prioritized list of machine types and configurations for node provisioning. priorities : - machineType : g2-standard-24 Specifically requests Spot VMs for this configuration.

