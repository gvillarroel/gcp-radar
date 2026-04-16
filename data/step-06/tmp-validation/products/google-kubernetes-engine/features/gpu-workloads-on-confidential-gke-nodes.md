---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.160Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GPU workloads on Confidential GKE Nodes"
feature_slug: "gpu-workloads-on-confidential-gke-nodes"
latest_feature_date: "2025-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes"
keywords:
  - "confidential"
  - "workloads"
  - "nodes"
---

# GPU workloads on Confidential GKE Nodes

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Confidential GKE Nodes can run A3 High GPU workloads with NVIDIA H100 GPUs using manual or automatic driver installation; GKE supports running GPU workloads on Confidential GKE Nodes with A3 High machine types and NVIDIA H100 GPUs.

## Extended Definition

Confidential GKE Nodes can run A3 High GPU workloads with NVIDIA H100 GPUs using manual or automatic driver installation; GKE supports running GPU workloads on Confidential GKE Nodes with A3 High machine types and NVIDIA H100 GPUs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes)

## Supporting Pages

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- What's next Learn more about Confidential VM Learn more about Google Cloud encryption at rest Learn more about Google Cloud encryption in transit Learn more about customer-managed encryption keys (CMEK) Learn how to remotely attest that workloads are running on Confidential VM Learn how to run GPUs on Confidential GKE Nodes Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Pricing The following pricing applies, depending on how you configure Confidential GKE Nodes: Confidential GKE Nodes pricing Workload-level In Autopilot workloads, both of the following costs apply: Autopilot node-based billing for the Compute Engine machine series that the Pods run on.
- However, if you enable Confidential GKE Nodes only for specific Standard mode node pools at the node pool level, you should declaratively express that your workloads must run only on node pools with Confidential GKE Nodes.
- Specifying the technology when you create a cluster has the following effects: You can create only node pools or workloads that use Confidential GKE Nodes in that cluster.

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- COS To deploy the installation DaemonSet and install the default GPU driver version, run the following command: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/nvidia-driver-installer/cos/daemonset-preloaded.yaml To install a newer GPU driver version from the driver version table in this section, run the following command: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/nvidia-driver-installer/cos/daemonset-preloaded-latest.yaml To install a GPU driver version that supports running GPU workloads on Confidential GKE Nodes , run the following command: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/refs/heads/master/nvidia-driver-installer/cos/daemonset-confidential.yaml The installation takes several seconds to complete.
- You can also use the JobSet dashboard in the Google Cloud console to visualize and monitor your GPU workloads: Go to Deployments Node health metrics The following node-level metrics apply to all nodes, including those with GPUs: kubernetes.io/node/status condition : This metric requires GKE version 1.32.1-gke.1357001 or later.
- Standard This page shows you how to run and optimize your compute-intensive workloads, such as artificial intelligence (AI) and graphics processing, by attaching and using NVIDIA® graphics processing unit (GPU) hardware accelerators in your Google Kubernetes Engine (GKE) Standard clusters' nodes .
- GKE attaches a unique node selector to GPU nodes to help place GPU workloads on nodes with specific GPU types: Key : cloud.google.com/gke-accelerator Value : The type of GPU accelerator that you use.

### "ConfidentialNodes \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "enabled" : boolean , "confidentialInstanceType" : enum ( ConfidentialInstanceType ) } Fields enabled boolean Whether Confidential Nodes feature is enabled. confidentialInstanceType enum ( ConfidentialInstanceType ) Defines the type of technology used by the confidential node.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Reference Send feedback ConfidentialNodes Stay organized with collections Save and categorize content based on your preferences.
- JSON representation ConfidentialInstanceType ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs.
- ConfidentialInstanceType The type of technology used by the confidential node.

