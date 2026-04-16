---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.973Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Windows Server node pools"
feature_slug: "windows-server-node-pools"
latest_feature_date: "2020-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "windows"
  - "server"
  - "node"
  - "pools"
  - "gke"
  - "clusters"
  - "can"
  - "created"
---

# Windows Server node pools

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE clusters can be created or updated with node pools that run Windows Server.

## Extended Definition

GKE clusters can be created or updated with node pools that run Windows Server.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### Node images \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images)
- Source ID: `site-docs-reference-2`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Node image source projects The available node images for GKE clusters are contained in the following source projects: Container-Optimized OS images: gke-node-images Ubuntu images: ubuntu-os-gke-cloud Windows Server images: gke-windows-node-images In addition to the source projects listed above, GKE also uses the following source projects for exclusive usage by the GKE team : ubuntu-os-gke-cloud-private (reserved for exclusive usage of the GKE team) ubuntu-os-gke-cloud-devel (reserved for exclusive usage of the GKE team) You might need to know the source project names while setting up highly-secure clusters.
- For more information about creating Windows Server 2022 node pools, see Create Windows Node Pools For more information about containerd node images, see Containerd node images .
- A single cluster can have multiple Windows Server node pools using different Windows Server versions, but each individual node pool can only use one Windows Server version.
- Windows Server When creating a cluster using Windows Server node pools you can use a Windows Server Long-Term Servicing Channel (LTSC) node image.

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GPUs are not supported in Windows Server node pools.
- To grant the required scopes, modify the default scopes for node auto-provisioning to add logging.write , monitoring , devstorage.read only , and compute , such as in the following example. gcloud container clusters update CLUSTER NAME --enable-autoprovisioning \ --min-cpu = 1 --max-cpu = 10 --min-memory = 1 --max-memory = 32 \ --autoprovisioning-scopes = https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring,https://www.googleapis.com/auth/devstorage.read only,https://www.googleapis.com/auth/compute For clusters running GKE version 1.32.2-gke.1297000 and later, GKE automatically installs the default NVIDIA driver version for all GPU nodes, including those created with node auto-provisioning.
- For example: apiVersion: v1 kind: Pod metadata: name: my-gpu-pod spec: containers: - name: my-gpu-container image: nvidia/cuda:11.0.3-runtime-ubuntu20.04 command: ["/bin/bash", "-c", "--"] args: ["while true; do sleep 600; done;"] resources: limits: nvidia.com/gpu: 2 nodeSelector: cloud.google.com/gke-accelerator: nvidia-tesla-t4 Upgrade node pools using accelerators (GPUs and TPUs) GKE automatically upgrades Standard clusters, including node pools.
- GKE supports automatic installation of NVIDIA drivers in the following scenarios: For GKE clusters with control plane version 1.32.2-gke.1297000 and later, GKE automatically installs the default NVIDIA driver version for all GPU nodes, including those created with node auto-provisioning.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GKE Autopilot clusters and GKE node pools using GKE Sandbox are not affected because they do not support Windows Server nodes.
- Even if you have node auto-upgrade enabled, we recommend that you manually upgrade your cluster and Windows Server node pools to one of the following GKE versions or later: 1.24.17-gke.6100 1.25.15-gke.2000 1.26.10-gke.2000 1.27.7-gke.2000 1.28.3-gke.1600 You can apply patch versions from newer release channels if your cluster runs the same minor version in its own release channel.
- Even if you have node auto-upgrade enabled, we recommend that you manually upgrade your cluster and Windows Server node pools to one of the following GKE on VMware versions or later: 1.28.100-gke.131 1.16.5-gke.28 1.15.8-gke.41 What vulnerabilities are addressed by this patch?
- Convert public node pools to private 2024-07-02 Update: For Autopilot clusters originally created as public clusters, you can place your workloads on private nodes by using nodeSelectors .

