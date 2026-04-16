---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.694Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Compute classes node labels"
feature_slug: "compute-classes-node-labels"
latest_feature_date: "2025-07-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
keywords:
  - "compute"
  - "classes"
  - "node"
  - "labels"
  - "can"
  - "apply"
  - "kubernetes"
  - "all"
---

# Compute classes node labels

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Compute classes can apply Kubernetes labels to all nodes created for that compute class; Compute classes can apply Kubernetes labels to all nodes created for that compute class.

## Extended Definition

Compute classes can apply Kubernetes labels to all nodes created for that compute class; Compute classes can apply Kubernetes labels to all nodes created for that compute class.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)

## Supporting Pages

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- When you use ComputeClasses, update your workloads to remove the following labels from node selectors and configure the corresponding field in the ComputeClasses that you create: Node label ComputeClass field cloud.google.com/machine-family priorities.machineFamily cloud.google.com/machine-type priorities.machineType cloud.google.com/gke-spot priorities.spot cloud.google.com/gke-accelerator priorities.gpu.type cloud.google.com/gke-gpu-driver-version priorities.gpu.driverVersion cloud.google.com/reservation-name priorities.reservations.specific.name cloud.google.com/reservation-project priorities.reservations.specific.project cloud.google.com/reservation-affinity priorities.reservations.affinity cloud.google.com/gke-ephemeral-storage-local-ssd priorities.storage.localSSDCount cloud.google.com/gke-boot-disk priorities.storage.bootDiskType cloud.google.com/gke-boot-disk-size priorities.storage.bootDiskSize cloud.google.com/gke-node-pool-group-name nodePoolGroup.name cloud.google.com/gke-workload-type nodePoolConfig.workloadType node.kubernetes.io/instance-type priorities.machineType Limitations The name of your ComputeClass can't begin with gke or autopilot .
- These system labels have one of the following prefixes in the label key: k8s.io cloud.google.com gke.io node.kubernetes.io/instance-type In GKE version 1.32.3-gke.1499000 and later, you can deploy workloads that use a node selector to select system labels and a ComputeClass at the same time.
- The node pools that you specify in the priorities.nodepools field must be associated with that ComputeClass by using node labels and node taints, as described in the Configure manually created node pools for ComputeClasses section.
- Autopilot Standard You can create your own ComputeClasses to control the properties of the nodes that Google Kubernetes Engine (GKE) provisions when autoscaling your cluster.

### "About node pool auto-creation \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- Source ID: `site-docs-reference-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Any resource limits that you set for the cluster when you enable node auto-provisioning also apply to the node pools that GKE creates for ComputeClasses.
- These limits apply to the sum of all of the resource capacity in the cluster, including manually created node pools and ComputeClasses .
- The following example ComputeClass manifest enables node pool auto-creation for any Pod that uses the ComputeClass: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : example-computeclass spec : priorities : - machineFamily : n4 - machineFamily : c4 whenUnsatisfiable : ScaleUpAnyway nodePoolAutoCreation : enabled : true Cluster-level enablement with node auto-provisioning To enable node pool auto-creation for the entire cluster, you enable the node auto-provisioning feature for the cluster by using the Kubernetes Engine API.
- GKE scaling preferences The following preferences apply when GKE autoscales your infrastructure: Reduce wasted compute resources : GKE uses the resource capacity of existing auto-created node pools in your cluster to determine the machine type to use for new node pools.

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Save the following Deployment manifest as a YAML file: apiVersion : apps/v1 kind : Deployment metadata : name : helloweb labels : app : hello spec : selector : matchLabels : app : hello template : metadata : labels : app : hello spec : nodeSelector : Replace with the name of a compute class cloud.google.com/compute-class : COMPUTE CLASS containers : - name : hello-app image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 ports : - containerPort : 8080 resources : requests : cpu : "250m" memory : "1Gi" Create the Deployment: kubectl apply -f PATH TO DEPLOYMENT MANIFEST Replace PATH TO DEPLOYMENT MANIFEST with the path to the Deployment manifest file.
- To find the name of the StorageClasses available in your cluster, run the following command: kubectl get sc Limitations Confidential GKE Nodes has the following limitations: All of the limitations of Compute Engine Confidential VM instances also apply to Confidential GKE Nodes.
- ComputeClasses are Kubernetes custom resources that let you define the attributes of new nodes that GKE creates and let you control fallback behavior if hardware isn't available.
- If you choose to use ComputeClasses with only manually created node pools, you must also manually configure node taints and node labels on those node pools.

