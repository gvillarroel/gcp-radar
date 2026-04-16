---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.315Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE node auto-provisioning"
feature_slug: "gke-node-auto-provisioning"
latest_feature_date: "2021-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest"
keywords:
  - "empty"
  - "provisioning"
  - "scale"
  - "clusters"
  - "auto"
  - "node"
---

# GKE node auto-provisioning

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Node auto-provisioning can scale from empty clusters and scale down nodes that run pods requesting local storage in GKE 1.22 and later.

## Extended Definition

Node auto-provisioning can scale from empty clusters and scale down nodes that run pods requesting local storage in GKE 1.22 and later.

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
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- The following example ComputeClass manifest enables node pool auto-creation for any Pod that uses the ComputeClass: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : example-computeclass spec : priorities : - machineFamily : n4 - machineFamily : c4 whenUnsatisfiable : ScaleUpAnyway nodePoolAutoCreation : enabled : true Cluster-level enablement with node auto-provisioning To enable node pool auto-creation for the entire cluster, you enable the node auto-provisioning feature for the cluster by using the Kubernetes Engine API.
- In clusters that use GKE version 1.33.3-gke.1136000 and later, you can use these fields in a ComputeClass without enabling node auto-provisioning at the cluster level.
- In clusters that use GKE version 1.33.3-gke.1136000 and later, you can use node pool auto-creation in ComputeClasses without enabling node auto-provisioning.
- Node pool auto-creation is designed to let GKE automatically scale down and remove empty node pools from your cluster.

### "About GKE cluster autoscaling \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- Source ID: `site-docs-reference-2`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- With Autopilot clusters, you don't need to worry about provisioning nodes or managing node pools because node pools are automatically provisioned through node auto-provisioning , and are automatically scaled to meet the requirements of your workloads.
- Additionally, if the current number of nodes is zero due to manual removal of nodes, cluster autoscaler and node auto-provisioning can scale up from zero node clusters.
- Known issues In GKE control plane version prior to 1.22, GKE cluster autoscaler stops scaling up all node pools on empty (zero node) clusters.
- For this policy to work, autoscaling has to be enabled and the initial number of nodes has to be set to 0, so that the autoscaler is responsible for provisioning all nodes.

### "Run a large-scale workload with flex-start with queued provisioning \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest)
- Source ID: `site-docs-reference-required-4`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable node auto-provisioning to create node pools for flex-start with queued provisioning You can use node auto-provisioning to manage node pools for flex-start with queued provisioning for clusters running version 1.29.2-gke.1553000 or later.
- Create the following provisioning-request.yaml manifest: Standard apiVersion : v1 kind : PodTemplate metadata : name : POD TEMPLATE NAME namespace : NAMESPACE NAME labels : cloud.google.com/apply-warden-policies : "true" template : spec : nodeSelector : cloud.google.com/gke-nodepool : NODEPOOL NAME cloud.google.com/gke-flex-start : "true" tolerations : - key : "nvidia.com/gpu" operator : "Exists" effect : "NoSchedule" containers : - name : pi image : perl command : [ "/bin/sh" ] resources : limits : cpu : "700m" nvidia.com/gpu : 1 requests : cpu : "700m" nvidia.com/gpu : 1 restartPolicy : Never --- apiVersion : autoscaling.x-k8s.io/ API VERSION kind : ProvisioningRequest metadata : name : PROVISIONING REQUEST NAME namespace : NAMESPACE NAME spec : provisioningClassName : queued-provisioning.gke.io parameters : maxRunDurationSeconds : " MAX RUN DURATION SECONDS " podSets : - count : COUNT podTemplateRef : name : POD TEMPLATE NAME Replace the following: API VERSION : The version of the API, either v1 or v1beta1 .
- Node auto-provisioning apiVersion : v1 kind : PodTemplate metadata : name : POD TEMPLATE NAME namespace : NAMESPACE NAME labels : cloud.google.com/apply-warden-policies : "true" template : spec : nodeSelector : cloud.google.com/gke-accelerator : GPU TYPE cloud.google.com/gke-flex-start : "true" tolerations : - key : "nvidia.com/gpu" operator : "Exists" effect : "NoSchedule" containers : - name : pi image : perl command : [ "/bin/sh" ] resources : limits : cpu : "700m" nvidia.com/gpu : 1 requests : cpu : "700m" nvidia.com/gpu : 1 restartPolicy : Never --- apiVersion : autoscaling.x-k8s.io/ API VERSION kind : ProvisioningRequest metadata : name : PROVISIONING REQUEST NAME namespace : NAMESPACE NAME spec : provisioningClassName : queued-provisioning.gke.io parameters : maxRunDurationSeconds : " MAX RUN DURATION SECONDS " podSets : - count : COUNT podTemplateRef : name : POD TEMPLATE NAME Replace the following: API VERSION : The version of the API, either v1 or v1beta1 .
- Create a node pool Create a node pool that has flex-start with queued provisioning enabled by using the gcloud CLI: gcloud container node-pools create NODEPOOL NAME \ --cluster = CLUSTER NAME \ --location = LOCATION \ --enable-queued-provisioning \ --accelerator type = GPU TYPE ,count = AMOUNT ,gpu-driver-version = DRIVER VERSION \ --machine-type = MACHINE TYPE \ --flex-start \ --enable-autoscaling \ --num-nodes = 0 \ --total-max-nodes TOTAL MAX NODES \ --location-policy = ANY \ --reservation-affinity = none \ --no-enable-autorepair Replace the following: NODEPOOL NAME : The name you choose for the node pool.

