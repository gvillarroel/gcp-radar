---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.182Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "JobSet metrics"
feature_slug: "jobset-metrics"
latest_feature_date: "2025-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus"
keywords:
  - "automatically"
  - "jobset"
  - "autopilot"
  - "available"
  - "standard"
  - "metrics"
  - "clusters"
---

# JobSet metrics

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

JobSet metrics are automatically available on supported new GKE Standard and Autopilot clusters and can be enabled on existing clusters.

## Extended Definition

JobSet metrics are automatically available on supported new GKE Standard and Autopilot clusters and can be enabled on existing clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)

## Supporting Pages

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: apiVersion: v1 kind: Pod metadata: name: my-gpu-pod spec: containers: - name: my-gpu-container image: nvidia/cuda:11.0.3-runtime-ubuntu20.04 command: ["/bin/bash", "-c", "--"] args: ["while true; do sleep 600; done;"] resources: limits: nvidia.com/gpu: 2 nodeSelector: cloud.google.com/gke-accelerator: nvidia-tesla-t4 Upgrade node pools using accelerators (GPUs and TPUs) GKE automatically upgrades Standard clusters, including node pools.
- To grant the required scopes, modify the default scopes for node auto-provisioning to add logging.write , monitoring , devstorage.read only , and compute , such as in the following example. gcloud container clusters update CLUSTER NAME --enable-autoprovisioning \ --min-cpu = 1 --max-cpu = 10 --min-memory = 1 --max-memory = 32 \ --autoprovisioning-scopes = https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring,https://www.googleapis.com/auth/devstorage.read only,https://www.googleapis.com/auth/compute For clusters running GKE version 1.32.2-gke.1297000 and later, GKE automatically installs the default NVIDIA driver version for all GPU nodes, including those created with node auto-provisioning.
- Monitor your GPU node workload performance If your GKE cluster has system metrics enabled, then the following metrics are available in Cloud Monitoring to monitor your GPU workload performance: Duty Cycle ( container/accelerator/duty cycle ): Percentage of time over the past sample period (10 seconds) during which the accelerator was actively processing.
- You can also use the JobSet dashboard in the Google Cloud console to visualize and monitor your GPU workloads: Go to Deployments Node health metrics The following node-level metrics apply to all nodes, including those with GPUs: kubernetes.io/node/status condition : This metric requires GKE version 1.32.1-gke.1357001 or later.

### Deploy GPU workloads in Autopilot \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- Source ID: `site-docs-reference-2`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Check GPU driver version In Autopilot clusters, GKE automatically installs NVIDIA device drivers on all GPU nodes.
- Ensure that you have a GKE Autopilot cluster running one of the following versions to use the following GPUs or features: NVIDIA B200 (180 GB) GPUs: 1.32.2-gke.1422000 or later NVIDIA H200 (141GB) GPUs: 1.31.4-gke.1183000 or later NVIDIA H100 Mega (80GB) GPUs: 1.28.9-gke.1250000 or later, and 1.29.4-gke.1542000 or later NVIDIA H100 (80GB) GPUs: 1.28.6-gke.1369000 or later, and 1.29.1-gke.1575000 or later NVIDIA RTX PRO 6000 GPUs: 1.34.1-gke.1829001 or later (except for G4 machine types that have less than one GPU, see the limitations ) Multiple GPU Pods per VM: 1.29.2-gke.1355000 or later Other GPUs: all supported versions Note: For GKE Sandbox GPU clusters, see GPU model support for gVisor compatibility.
- Accelerator compatibility with GKE capabilities The following table shows the compatible GKE capabilities for each method of selecting accelerators in GKE Autopilot: Accelerator compute class selected Compatibility with GKE capabilities Spot Pods Compute flexible committed use discounts (CUDs) for the Autopilot premium Compute Engine CUDs for the node hardware Compute Engine capacity reservations GKE Sandbox Spot Pods Autopilot committed use discounts (CUDs) for regular Pods Caution: Autopilot committed use discounts (CUDs) are no longer available for purchase.
- Monitor your GPU node workload performance If your GKE cluster has system metrics enabled, then the following metrics are available in Cloud Monitoring to monitor your GPU workload performance: Duty Cycle ( container/accelerator/duty cycle ): Percentage of time over the past sample period (10 seconds) during which the accelerator was actively processing.

### "Collect and view kube state metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Starting with version 1.32.1-gke.1357001, the JobSet metrics package is enabled by default on newly created GKE Standard and Autopilot clusters. kube jobset restarts metric is available in 1.32 clusters starting from 1.32.4-gke.1767000 and in 1.33 clusters starting from 1.33.0-gke.1868000.
- Starting with version 1.29.2-gke.2000 for GKE Standard clusters and version 1.27.4-gke.900 for GKE Autopilot clusters, the Kube state metrics package is enabled by default.
- For example, to compare the number of replicas in a READY state to the expected number of replicas in a single JobSet, plot both metrics on a single chart by using the following PromQL queries: kube jobset specified replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} and kube jobset ready replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} To alert on a failed or unavailable JobSet rollout, you can use the following PromQL expression: kube jobset specified replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} kube jobset ready replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} The condition label on the kube jobset status condition metric can also help you detect when JobSets run into various failure modes, for example: The Failed condition indicates that the JobSet failed its execution: kube jobset status condition{jobset name=" JOBSET NAME , condition="Failed"} == 1 The Suspended condition indicates that the JobSet is suspended: kube jobset status condition{jobset name=" JOBSET NAME , condition="Suspended"} == 1 Some of the query and alert expressions in this section were adapted from the kubernetes-apps.yaml file in the Prometheus community Kubernetes Helm Charts repository on GitHub.
- Autopilot Standard This page describes how to configure a Google Kubernetes Engine (GKE) cluster to send a curated set of kube state, including metrics for Pods and Deployments, Cloud Monitoring using Google Cloud Managed Service for Prometheus.

