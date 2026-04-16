---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.732Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GPU and TPU node disruption handling"
feature_slug: "gpu-and-tpu-node-disruption-handling"
latest_feature_date: "2024-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
keywords:
  - "gpu"
  - "tpu"
  - "node"
  - "disruption"
  - "handling"
  - "gke"
  - "notifies"
  - "workloads"
---

# GPU and TPU node disruption handling

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE notifies workloads before GPU and TPU node shutdowns so they can terminate gracefully.

## Extended Definition

GKE notifies workloads before GPU and TPU node shutdowns so they can terminate gracefully.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)

## Supporting Pages

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Disable Confidential GKE Nodes This change requires recreating the nodes, which can cause disruption to your running workloads.
- Update an existing node pool This change requires recreating the nodes, which can cause disruption to your running workloads.
- Ensure that your workloads running on the nodes are prepared for disruption before you initiate this change.
- Ensure that your workloads running on the nodes are prepared for disruption before you initiate this change.

### "Node upgrade strategies \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- Source ID: `site-docs-reference-2`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Tune surge upgrade settings to balance speed and disruption The following table describes four different upgrade profiles as examples to help you understand different configurations: Description Configuration Typical use case Balanced (Default), slower but least disruptive maxSurge=1 maxUnavailable=0 Most workloads Fast, no surge resources, most disruptive maxSurge=0 maxUnavailable=20 Large node pools after jobs have to run to completion Fast, most surge resources and less disruptive maxSurge=20 maxUnavailable=0 Large node pools Slowest, disruptive, no surge resources maxSurge=0 maxUnavailable=1 Resource-constrained node pool with reservation Balanced (Default) The simplest way to take advantage of surge upgrades is to use the default configuration, maxSurge=1;maxUnavailable=0.
- Surge upgrades are optimal for the following scenarios: if you want to optimize for the speed of upgrades. if workloads are more tolerant of disruptions, where graceful termination up to 60 minutes is acceptable. if you want to control costs by minimizing the creation of new nodes.
- Surge upgrade behavior is determined by the maxSurge and maxUnavailable settings, which determine how many nodes are upgraded at the same time in a rolling window with the described steps. maxSurge : GKE creates a new surge node before removing an existing one Set maxSurge to choose the maximum number of additional, surge nodes that can be added to the node pool during an upgrade, per zone, increasing the likelihood that workloads running on the existing node can migrate to a new node immediately.
- Blue-green upgrades are optimal for the following scenarios: if you want a gradual rollout where risk mitigation is most important, where graceful termination greater than 60 minutes is needed. if your workloads are less tolerant of disruptions. if a temporary cost increase due to higher resource usage is acceptable.

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- To configure GKE to terminate your workloads gracefully within this notification timeframe, follow the steps in Manage GKE node disruption for GPUs and TPUs .
- You can also use GPUs with Spot VMs if your workloads can tolerate frequent node disruptions.
- COS To deploy the installation DaemonSet and install the default GPU driver version, run the following command: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/nvidia-driver-installer/cos/daemonset-preloaded.yaml To install a newer GPU driver version from the driver version table in this section, run the following command: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/nvidia-driver-installer/cos/daemonset-preloaded-latest.yaml To install a GPU driver version that supports running GPU workloads on Confidential GKE Nodes , run the following command: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/refs/heads/master/nvidia-driver-installer/cos/daemonset-confidential.yaml The installation takes several seconds to complete.
- You can also use the JobSet dashboard in the Google Cloud console to visualize and monitor your GPU workloads: Go to Deployments Node health metrics The following node-level metrics apply to all nodes, including those with GPUs: kubernetes.io/node/status condition : This metric requires GKE version 1.32.1-gke.1357001 or later.

