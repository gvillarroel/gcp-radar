---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.160Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Confidential GKE Nodes with ComputeClasses"
feature_slug: "confidential-gke-nodes-with-computeclasses"
latest_feature_date: "2025-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
keywords:
  - "computing"
  - "computeclasses"
  - "confidential"
  - "provision"
  - "type"
  - "nodes"
---

# Confidential GKE Nodes with ComputeClasses

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

ComputeClasses can provision Confidential GKE Nodes with any supported Confidential Computing type.

## Extended Definition

ComputeClasses can provision Confidential GKE Nodes with any supported Confidential Computing type.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)

## Supporting Pages

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 217
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This field supports the following values, which you must specify in uppercase: SEV : AMD SEV SEV SNP : AMD SEV-SNP TDX : Intel TDX To let a workload run on any confidential nodes, regardless of the Confidential Computing technology, use a node affinity rule , like in the following example: apiVersion : v1 kind : Pod spec : containers : - name : confidential-app image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 affinity : nodeAffinity : requiredDuringSchedulingIgnoredDuringExecution : nodeSelectorTerms : - matchExpressions : - key : cloud.google.com/gke-confidential-nodes-instance-type operator : Exists To let a workload run on nodes that use only a subset of the available Confidential Computing technologies, use a node affinity rule that's similar to the following example: apiVersion : v1 kind : Pod spec : containers : - name : confidential-app image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 affinity : nodeAffinity : requiredDuringSchedulingIgnoredDuringExecution : nodeSelectorTerms : - matchExpressions : - key : cloud.google.com/gke-confidential-nodes-instance-type operator : In values : - SEV - SEV SNP - TDX In the values field, specify only the Confidential Computing technologies that you want to run the workload on.
- To require that a workload runs on a specific Confidential Computing technology, use a node selector with the cloud.google.com/gke-confidential-nodes-instance-type label, like in the following example: apiVersion : v1 kind : Pod spec : For readability, lines are omitted from this example manifest nodeSelector : cloud.google.com/gke-confidential-nodes-instance-type : " CONFIDENTIAL COMPUTE SELECTOR " Replace CONFIDENTIAL COMPUTE SELECTOR with the name of the technology that the node pool uses.
- The following values are supported: sev : AMD SEV sev snp : AMD SEV-SNP tdx : Intel TDX Console You can update an existing node pool to use Confidential GKE Nodes only if the machine type of the node pool is supported by your chosen Confidential Computing technology.
- Node auto-provisioning supports the following Confidential Computing technologies: AMD SEV AMD SEV-SNP To use Confidential GKE Nodes with node auto-provisioning, specify the --enable-confidential-nodes gcloud CLI flag when you create a cluster.

### "ConfidentialNodes \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes)
- Source ID: `site-api-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "enabled" : boolean , "confidentialInstanceType" : enum ( ConfidentialInstanceType ) } Fields enabled boolean Whether Confidential Nodes feature is enabled. confidentialInstanceType enum ( ConfidentialInstanceType ) Defines the type of technology used by the confidential node.
- JSON representation ConfidentialInstanceType ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Reference Send feedback ConfidentialNodes Stay organized with collections Save and categorize content based on your preferences.
- ConfidentialInstanceType The type of technology used by the confidential node.

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- The following compute class sets a prioritized list of zones that includes AI zones: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : accelerator-ai-preferred spec : nodePoolAutoCreation : enabled : true priorities : --- Priority 1: TPU in a specific AI zone (On-Demand) --- - tpu : type : tpu-v5p-slice count : 4 topology : 4x4x4 location : zones : - "us-central1-ai1a" # Specify your target AI zone machineFamily: a3 # Optional --- Priority 2: TPU in any AI zone (On-Demand) --- - tpu : type : tpu-v5p-slice count : 4 topology : 4x4x4 location : zoneTypes : - "AI" # All AI zones in the cluster's region --- Priority 3: GPU in a specific Standard zone (On-Demand) --- - gpu : type : nvidia-tesla-a100 count : 1 location : zones : - "us-central1-a" # Fallback to a standard zone - "us-central1-b" whenUnsatisfiable : DoNotScaleUp This ComputeClass configures GKE to provision nodes with v5p TPUs or A100 GPUs for the workload.
- The following example defines a ComputeClass for a multi-host TPU collection optimized for high-availability inference workloads. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : multi-host-inference spec : nodePoolGroup : name : my-inference-collection nodePoolConfig : workloadType : HIGH AVAILABILITY nodePoolAutoCreation : enabled : true priorities : - tpu : type : tpu-v6e-slice topology : 2x4 For more information, see the following pages: About TPUs in GKE Plan TPUs in GKE Request ComputeClasses in workloads To use a custom ComputeClass, your Pod must explicitly request that ComputeClass by using a nodeSelector in the Pod specification.
- There are two types of priority rules: Declarative rule types : Use node characteristics to describe the nodes you want to provision Node pool rule type : In GKE Standard clusters, provides a list of manually created node pools that are associated with the ComputeClass in which GKE should provision nodes.
- Declarative priority rules With declarative priority rules, you can specify machine properties—like machine family or type, Spot VMs, accelerator options, storage options , reservations , and minimum resource requirements—for GKE to use when provisioning nodes.

