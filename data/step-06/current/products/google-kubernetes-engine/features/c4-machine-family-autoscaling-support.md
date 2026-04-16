---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.721Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "C4 machine family autoscaling support"
feature_slug: "c4-machine-family-autoscaling-support"
latest_feature_date: "2024-11-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
keywords:
  - "c4"
  - "machine"
  - "family"
  - "autoscaling"
  - "cluster"
  - "autoscaler"
  - "node"
  - "auto"
---

# C4 machine family autoscaling support

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Cluster autoscaler and node auto-provisioning support the C4 machine family in GKE.

## Extended Definition

Cluster autoscaler and node auto-provisioning support the C4 machine family in GKE.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)

## Supporting Pages

### "About node pool auto-creation \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- Source ID: `site-docs-reference-2`
- Final score: 235
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example ComputeClass manifest enables node pool auto-creation for any Pod that uses the ComputeClass: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : example-computeclass spec : priorities : - machineFamily : n4 - machineFamily : c4 whenUnsatisfiable : ScaleUpAnyway nodePoolAutoCreation : enabled : true Cluster-level enablement with node auto-provisioning To enable node pool auto-creation for the entire cluster, you enable the node auto-provisioning feature for the cluster by using the Kubernetes Engine API.
- Cloud TPU node pool autoscaling GKE scales automatically created or manually created Cloud TPU node pools that use the cluster autoscaler in one of the following ways: Single-host TPU slice node pool : GKE adds or removes TPU nodes in the existing node pool.
- If you use both of these methods to enable node pool auto-creation in a cluster, GKE uses the following order of preference to find the value of a configuration setting to use for a node pool: ComputeClass or Pod specification : if you specify a setting (such as a machine type) in a ComputeClass or in a Pod specification, GKE uses that setting.
- GKE scaling preferences The following preferences apply when GKE autoscales your infrastructure: Reduce wasted compute resources : GKE uses the resource capacity of existing auto-created node pools in your cluster to determine the machine type to use for new node pools.

### "About GKE cluster autoscaling \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- Source ID: `site-docs-reference-2`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GKE will try to provision these VMs first. spot : true gpu : type : nvidia-l4 count : 2 If GKE can't satisfy the preceding rule, request on-demand nodes with the same configuration - machineType : g2-standard-24 spot : false gpu : type : nvidia-l4 count : 2 nodePoolAutoCreation : enabled : true Configures active migration behavior for workloads using this ComputeClass. activeMigration : optimizeRulePriority : true Enables Cluster Autoscaler to attempt to migrate workloads to Spot VMs if Spot capacity becomes available and the workload is currently running on an on-demand VM (based on the priority rules in this example).
- Cluster autoscaler increases or decreases the size of the node pool automatically by adding or removing virtual machine (VM) instances in the underlying Compute Engine Managed Instance Group (MIG) for the node pool.
- Autoscaling limits You can set the minimum and maximum number of nodes for the cluster autoscaler to use when scaling a node pool.
- The optimize-utilization autoscaling profile helps the cluster autoscaler to identify and remove underutilized nodes.

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- If you specify this field in a ComputeClass that you deploy to an Autopilot cluster, GKE ignores the field. priorities.podFamily : uses the podFamily priority rule to run Pods on the Autopilot container-optimized compute platform. priorityDefaults.location : defines the zones in which GKE should create nodes for Pods that use the ComputeClass.
- If you specify this field in a ComputeClass that you deploy to an Autopilot cluster, GKE ignores the field. priorities : defines an array of three different N4 machine family configurations. activeMigration : lets GKE migrate Pods to configurations that are higher in the list of priorities when resources become available.
- If the workload uses Autopilot mode, this value is Autopilot-managed . kubectl CLI Check the names of the nodes that run your Pods: kubectl get pods -l = app = hello -o wide The output is similar to the following: NAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE READINESS GATES helloweb-79b9f6f75-5wwc9 1/1 Running 0 152m 10.102.1.135 gk3-cluster-1-nap-10abc8ya1-f66c6cef-wg5g <none> <none> helloweb-79b9f6f75-9skb9 1/1 Running 0 4d3h 10.102.0.140 gk3-cluster-1-nap-10abc8ya1-632bac02-hjl6 <none> <none> helloweb-79b9f6f75-h7bdv 1/1 Running 0 152m 10.102.1.137 gk3-cluster-1-nap-10abc8ya1-f66c6cef-wg5g <none> <none> In this output, the gk3- prefix in the Node column indicates that the node is managed by Autopilot.
- Create a new custom Autopilot ComputeClass Save one of the following example ComputeClass manifests: Select specific machines : apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : n4-class spec : autopilot : enabled : true priorities : - machineFamily : n4 spot : true minCores : 16 - machineFamily : n4 spot : true - machineFamily : n4 spot : false activeMigration : optimizeRulePriority : true This manifest includes the following fields: autopilot : enables Autopilot mode for the ComputeClass.

