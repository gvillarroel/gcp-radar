---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.671Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Concurrent node pool auto-creation"
feature_slug: "concurrent-node-pool-auto-creation"
latest_feature_date: "2025-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
keywords:
  - "concurrent"
  - "node"
  - "pool"
  - "auto"
  - "creation"
  - "gke"
  - "can"
  - "create"
---

# Concurrent node pool auto-creation

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE can auto-create multiple node pools concurrently to make multiple new node pools ready faster.

## Extended Definition

GKE can auto-create multiple node pools concurrently to make multiple new node pools ready faster.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)

## Supporting Pages

### "About node pool auto-creation \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- Source ID: `site-docs-reference-2`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- Workload-level enablement with ComputeClasses You can enable node pool auto-creation for any ComputeClass in your cluster by using one of the following fields in the ComputeClass specification: nodePoolAutoCreation : let GKE auto-create node pools as needed.
- Enablement methods for node pool auto-creation GKE can automatically create node pools for specific ComputeClasses or for any workload that uses a compatible configuration, depending on how you configure your cluster.
- During node pool auto-creation, GKE might create node pools with labels and taints if all of the following conditions are met: The Pod uses a node selector to request a custom node label key and value.
- If you configure node pool auto-creation in a ComputeClass without enabling node auto-provisioning for the cluster, GKE creates new node pools only for workloads that use the ComputeClass.

### "About GKE cluster autoscaling \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- Source ID: `site-docs-reference-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Nodes that are created by the cluster autoscaler are assigned labels specified with --node-labels at the time of node pool creation.
- GKE will try to provision these VMs first. spot : true gpu : type : nvidia-l4 count : 2 If GKE can't satisfy the preceding rule, request on-demand nodes with the same configuration - machineType : g2-standard-24 spot : false gpu : type : nvidia-l4 count : 2 nodePoolAutoCreation : enabled : true Configures active migration behavior for workloads using this ComputeClass. activeMigration : optimizeRulePriority : true Enables Cluster Autoscaler to attempt to migrate workloads to Spot VMs if Spot capacity becomes available and the workload is currently running on an on-demand VM (based on the priority rules in this example).
- Total nodes example The following command, available in GKE version 1.24 or later, creates an autoscaling multi-zonal cluster with six nodes across three zones initially, with a minimum of three nodes and a maximum of twelve nodes in the node pool across all zones: gcloud container clusters create example-cluster \ --num-nodes=2 \ --location=us-central1-a \ --node-locations=us-central1-a,us-central1-b,us-central1-f \ --enable-autoscaling --total-min-nodes=3 --total-max-nodes=12 In this example, the total size of the cluster can be between three and twelve nodes, regardless of spreading between zones.
- With the --enable-autoprovisioning flag on a GKE cluster, GKE creates or deletes single-host or multi-host TPU slice node pools with a TPU version and topology that meets the requirements of pending workloads.

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- This manifest includes the spec.nodePoolAutoCreation field with a value of enabled: true , which lets GKE create new node pools by using node auto-provisioning.
- For more information about the supported fields and values for ComputeClasses, see the ComputeClass CustomResourceDefinition . apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : COMPUTE CLASS spec : nodePoolConfig : confidentialNodeType : CONFIDENTIAL COMPUTE TECHNOLOGY nodePoolAutoCreation : enabled : true activeMigration : optimizeRulePriority : true priorityDefaults : location : zones : [ ' ZONE1 ' , ' ZONE2 ' ] priorities : - machineFamily : MACHINE SERIES - machineType : MACHINE TYPE whenUnsatisfiable : DoNotScaleUp Replace the following: COMPUTE CLASS : a name for your new compute class.
- The supported technologies at the node pool level depend on whether the node pool uses node auto-provisioning, as follows: Manually created node pools : AMD SEV AMD SEV-SNP Intel TDX Auto-provisioned node pools : AMD SEV AMD SEV-SNP Confidential mode for Hyperdisk Balanced You can also enable Confidential mode for Hyperdisk Balanced on your boot disk storage, which encrypts your data on additional hardware-backed enclaves.
- You cannot do the following: Disable Confidential mode for Hyperdisk Balanced setting for an existing node pool in the cluster Enable Confidential mode for Hyperdisk Balanced setting on existing clusters Node pool level Create a new node pool You can configure Confidential mode for Hyperdisk Balanced setting for any new node pools at creation time.

