---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.447Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Windows node pools"
feature_slug: "windows-node-pools"
latest_feature_date: "2020-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
keywords:
  - "include"
  - "windows"
  - "clusters"
  - "pools"
  - "node"
---

# Windows node pools

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE clusters can include node pools that run Microsoft Windows Server; GKE clusters can include node pools that run Microsoft Windows Server.

## Extended Definition

GKE clusters can include node pools that run Microsoft Windows Server; GKE clusters can include node pools that run Microsoft Windows Server.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)

## Supporting Pages

### Node images \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images)
- Source ID: `site-docs-reference-2`
- Final score: 175
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Node image source projects The available node images for GKE clusters are contained in the following source projects: Container-Optimized OS images: gke-node-images Ubuntu images: ubuntu-os-gke-cloud Windows Server images: gke-windows-node-images In addition to the source projects listed above, GKE also uses the following source projects for exclusive usage by the GKE team : ubuntu-os-gke-cloud-private (reserved for exclusive usage of the GKE team) ubuntu-os-gke-cloud-devel (reserved for exclusive usage of the GKE team) You might need to know the source project names while setting up highly-secure clusters.
- For more information about creating Windows Server 2022 node pools, see Create Windows Node Pools For more information about containerd node images, see Containerd node images .
- A single cluster can have multiple Windows Server node pools using different Windows Server versions, but each individual node pool can only use one Windows Server version.
- Windows Server When creating a cluster using Windows Server node pools you can use a Windows Server Long-Term Servicing Channel (LTSC) node image.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- GKE Autopilot clusters and GKE node pools using GKE Sandbox are not affected because they do not support Windows Server nodes.
- GKE clusters are only affected if they include Windows nodes.
- Clusters are only affected if they include Windows nodes.
- We recommend you to upgrade your node pools to one of the following versions or above to take advantage of the latest patches: 1.21.4-gke.301 1.20.10-gke.301 1.19.14-gke.301 1.18.20-gke.4501 The following versions also contain the fix: 1.21.3-gke.2001 1.20.8-gke.2101 1.20.9-gke.701 1.20.9-gke.1001 1.19.12-gke.2101 1.19.13-gke.701 1.18.20-gke.3001 High GKE clusters on Description Severity A security issue was discovered in Kubernetes , CVE-2021-25741, where a user may be able to create a container with subpath volume mounts to access files & directories outside of the volume, including on the host filesystem.

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- For example: apiVersion: v1 kind: Pod metadata: name: my-gpu-pod spec: containers: - name: my-gpu-container image: nvidia/cuda:11.0.3-runtime-ubuntu20.04 command: ["/bin/bash", "-c", "--"] args: ["while true; do sleep 600; done;"] resources: limits: nvidia.com/gpu: 2 nodeSelector: cloud.google.com/gke-accelerator: nvidia-tesla-t4 Upgrade node pools using accelerators (GPUs and TPUs) GKE automatically upgrades Standard clusters, including node pools.
- Ubuntu version compatibility : When you use A4 machine series on Ubuntu node pools, you must use a GKE version that includes the ubuntu-gke-2404-1-32-amd64-v20250730 image or a later version of the node image.
- Note: If you don't use custom IAM service accounts to create your GKE clusters or node pools, ensure that the default Compute Engine service account in your project has the required permissions for GKE.
- Note: If you don't use custom IAM service accounts to create your GKE clusters or node pools, ensure that the default Compute Engine service account in your project has the required permissions for GKE.

