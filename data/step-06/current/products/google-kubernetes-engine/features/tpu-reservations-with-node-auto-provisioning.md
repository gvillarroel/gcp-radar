---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.768Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "TPU reservations with node auto-provisioning"
feature_slug: "tpu-reservations-with-node-auto-provisioning"
latest_feature_date: "2023-11-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
keywords:
  - "tpu"
  - "reservations"
  - "node"
  - "auto"
  - "provisioning"
  - "workloads"
  - "can"
  - "use"
---

# TPU reservations with node auto-provisioning

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Workloads can use TPU reservations with node auto-provisioning in GKE 1.27.7 and later.

## Extended Definition

Workloads can use TPU reservations with node auto-provisioning in GKE 1.27.7 and later.

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
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- If you configure node pool auto-creation in a ComputeClass without enabling node auto-provisioning for the cluster, GKE creates new node pools only for workloads that use the ComputeClass.
- The following example configuration file enables node auto-repair and auto-upgrade for any new auto-created node pools: management : autoRepair : true autoUpgrade : true The following example configuration file sets the cluster-wide resource limits for node auto-provisioning and configures multiple default settings: resourceLimits : - resourceType : 'cpu' minimum : 4 maximum : 10 - resourceType : 'memory' maximum : 64 - resourceType : 'nvidia-tesla-t4' maximum : 4 management : autoRepair : true autoUpgrade : true shieldedInstanceConfig : enableSecureBoot : true enableIntegrityMonitoring : true diskSizeGb : 100 This configuration file sets the following default values: Enables node auto-repair and auto-upgrade for any new auto-created node pools.
- The following example ComputeClass manifest enables node pool auto-creation for any Pod that uses the ComputeClass: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : example-computeclass spec : priorities : - machineFamily : n4 - machineFamily : c4 whenUnsatisfiable : ScaleUpAnyway nodePoolAutoCreation : enabled : true Cluster-level enablement with node auto-provisioning To enable node pool auto-creation for the entire cluster, you enable the node auto-provisioning feature for the cluster by using the Kubernetes Engine API.
- Cluster-level default : if a setting isn't specified in ComputeClasses, Pod specifications, or as a default value for cluster-level node auto-provisioning, GKE uses the default value that Google Cloud sets for the cluster.

### "About GKE cluster autoscaling \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- Source ID: `site-docs-reference-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- With Autopilot clusters, you don't need to worry about provisioning nodes or managing node pools because node pools are automatically provisioned through node auto-provisioning , and are automatically scaled to meet the requirements of your workloads.
- With the --enable-autoprovisioning flag on a GKE cluster, GKE creates or deletes single-host or multi-host TPU slice node pools with a TPU version and topology that meets the requirements of pending workloads.
- GKE will try to provision these VMs first. spot : true gpu : type : nvidia-l4 count : 2 If GKE can't satisfy the preceding rule, request on-demand nodes with the same configuration - machineType : g2-standard-24 spot : false gpu : type : nvidia-l4 count : 2 nodePoolAutoCreation : enabled : true Configures active migration behavior for workloads using this ComputeClass. activeMigration : optimizeRulePriority : true Enables Cluster Autoscaler to attempt to migrate workloads to Spot VMs if Spot capacity becomes available and the workload is currently running on an on-demand VM (based on the priority rules in this example).
- You can increase the cluster autoscaler performance with Image streaming , which remotely streams required image data from eligible container images while simultaneously caching the image locally to allow workloads on new nodes to start faster.

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- The supported technologies at the node pool level depend on whether the node pool uses node auto-provisioning, as follows: Manually created node pools : AMD SEV AMD SEV-SNP Intel TDX Auto-provisioned node pools : AMD SEV AMD SEV-SNP Confidential mode for Hyperdisk Balanced You can also enable Confidential mode for Hyperdisk Balanced on your boot disk storage, which encrypts your data on additional hardware-backed enclaves.
- Pricing The following pricing applies, depending on how you configure Confidential GKE Nodes: Confidential GKE Nodes pricing Workload-level In Autopilot workloads, both of the following costs apply: Autopilot node-based billing for the Compute Engine machine series that the Pods run on.
- Node auto-provisioning supports the following Confidential Computing technologies: AMD SEV AMD SEV-SNP To use Confidential GKE Nodes with node auto-provisioning, specify the --enable-confidential-nodes gcloud CLI flag when you create a cluster.
- As a result, consider the following use cases before you create your cluster: To use node auto-provisioning in your cluster, you must configure specific options in your cluster creation command.

