---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.771Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Cloud TPU v5e machine types in GKE"
feature_slug: "cloud-tpu-v5e-machine-types-in-gke"
latest_feature_date: "2023-11-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler"
keywords:
  - "tpu"
  - "v5e"
  - "machine"
  - "types"
  - "gke"
  - "adds"
  - "inference"
  - "focused"
---

# Cloud TPU v5e machine types in GKE

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE adds new inference-focused single-host TPU v5e machine types in selected zones; Cloud TPU v5e is generally available in GKE clusters running supported versions.

## Extended Definition

GKE adds new inference-focused single-host TPU v5e machine types in selected zones; Cloud TPU v5e is generally available in GKE clusters running supported versions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)

## Supporting Pages

### "Analyze model serving performance and costs with GKE Inference Quickstart\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- This page is for Machine learning (ML) engineers, Platform admins and operators, and for Data and AI specialists who want to understand how to efficiently manage and optimize GKE for AI/ML inference.
- The following is an example of a command to enable observability features: gcloud container clusters update $CLUSTER NAME \ --project = $PROJECT ID \ --location = $LOCATION \ --enable-managed-prometheus \ --logging = SYSTEM,WORKLOAD \ --monitoring = SYSTEM,DEPLOYMENT,HPA,POD,DCGM \ --auto-monitoring-scope = ALL For more information, see Monitor your inference workloads . (HPA only) Deploy a metrics adapter : A metrics adapter, such as the Custom Metrics Stackdriver Adapter , is necessary if HPA resources were generated in the deployment manifests.
- Prepare to use the command line interface If you use the gcloud CLI to run Inference Quickstart, you also need to run these additional commands: Enable the gkerecommender.googleapis.com API: gcloud services enable gkerecommender.googleapis.com Set the billing quota project that you use for API calls: gcloud config set billing/quota project PROJECT ID Check that your gcloud CLI version is at least 536.0.1.
- For more information about best practices for autoscaling, see these guides: Best practices for autoscaling large language model (LLM) inference workloads with GPUs Best practices for autoscaling large language model (LLM) inference workloads with TPUs For information on storage best practices, see Optimize Cloud Storage FUSE CSI driver for GKE performance .

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- The following compute class sets a prioritized list of zones that includes AI zones: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : accelerator-ai-preferred spec : nodePoolAutoCreation : enabled : true priorities : --- Priority 1: TPU in a specific AI zone (On-Demand) --- - tpu : type : tpu-v5p-slice count : 4 topology : 4x4x4 location : zones : - "us-central1-ai1a" # Specify your target AI zone machineFamily: a3 # Optional --- Priority 2: TPU in any AI zone (On-Demand) --- - tpu : type : tpu-v5p-slice count : 4 topology : 4x4x4 location : zoneTypes : - "AI" # All AI zones in the cluster's region --- Priority 3: GPU in a specific Standard zone (On-Demand) --- - gpu : type : nvidia-tesla-a100 count : 1 location : zones : - "us-central1-a" # Fallback to a standard zone - "us-central1-b" whenUnsatisfiable : DoNotScaleUp This ComputeClass configures GKE to provision nodes with v5p TPUs or A100 GPUs for the workload.
- If the prioritized instance types aren't available, GKE then falls back to any matching reservations in the specification: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : accelerator-reservations spec : nodePoolAutoCreation : enabled : true priorities : - machineType : a3-highgpu-1g storage : localSSDCount : 2 gpu : type : nvidia-h100-80gb count : 1 reservations : specific : - name : a3-shared-reservation project : reservation-project affinity : Specific - machineType : a3-highgpu-1g storage : localSSDCount : 2 gpu : type : nvidia-h100-80gb count : 1 reservations : affinity : AnyBestEffort whenUnsatisfiable : DoNotScaleUp If you deploy a Pod that uses the accelerator-reservations ComputeClass, GKE first attempts to use the a3-shared-reservation reservation when creating new a3-highgpu-1g instances to run the Pod.
- The following example shows a shared specific reservation, which falls back to Spot VMs, and then finally to on-demand VMs: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : shared-specific-reservations spec : nodePoolAutoCreation : enabled : true priorities : - machineFamily : n4 reservations : specific : - name : n4-shared-reservation project : reservation-project affinity : Specific - machineFamily : n4 spot : true - machineFamily : n4 whenUnsatisfiable : DoNotScaleUp You can consume the following types of reservations: Specific single-project reservations : configure the following fields: reservations.specific.name : the reservation name. reservations.affinity : must be Specific .
- For example, the following manifest requests the cost-optimized ComputeClass: apiVersion : apps/v1 kind : Deployment metadata : name : custom-workload spec : replicas : 2 selector : matchLabels : app : custom-workload template : metadata : labels : app : custom-workload spec : nodeSelector : cloud.google.com/compute-class : cost-optimized containers : - name : test image : registry.k8s.io/pause resources : requests : cpu : 1.5 memory : "4Gi" Node selectors for system node labels GKE adds system labels to nodes to identify nodes by criteria like the machine type, attached hardware accelerators, or the boot disk type.

### "About GKE cluster autoscaling \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- To learn more about ComputeClass parameters, see ComputeClass CRD documentation : apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : prefer-l4-spot spec : Defines a prioritized list of machine types and configurations for node provisioning. priorities : - machineType : g2-standard-24 Specifically requests Spot VMs for this configuration.
- For example, the following node affinity rule declares a preference for scheduling Pods on nodes that are backed by Spot VMs (GKE automatically adds the cloud.google.com/gke-spot=true label to these types of nodes): affinity : nodeAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 1 preference : matchExpressions : set to "true".
- GKE will try to provision these VMs first. spot : true gpu : type : nvidia-l4 count : 2 If GKE can't satisfy the preceding rule, request on-demand nodes with the same configuration - machineType : g2-standard-24 spot : false gpu : type : nvidia-l4 count : 2 nodePoolAutoCreation : enabled : true Configures active migration behavior for workloads using this ComputeClass. activeMigration : optimizeRulePriority : true Enables Cluster Autoscaler to attempt to migrate workloads to Spot VMs if Spot capacity becomes available and the workload is currently running on an on-demand VM (based on the priority rules in this example).
- Cluster autoscaler increases or decreases the size of the node pool automatically by adding or removing virtual machine (VM) instances in the underlying Compute Engine Managed Instance Group (MIG) for the node pool.

