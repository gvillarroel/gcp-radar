---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.140Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Image streaming for Ubuntu with containerd"
feature_slug: "image-streaming-for-ubuntu-with-containerd"
latest_feature_date: "2026-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2"
keywords:
  - "ubuntu"
  - "containerd"
  - "streaming"
  - "generally"
  - "available"
  - "image"
  - "nodes"
---

# Image streaming for Ubuntu with containerd

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Image streaming is generally available for Ubuntu with containerd nodes on GKE.

## Extended Definition

Image streaming is generally available for Ubuntu with containerd nodes on GKE.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)

## Supporting Pages

### Node images \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images)
- Source ID: `site-docs-reference-2`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Node images release notes Container-Optimized OS Google provides comprehensive documentation for Container-Optimized OS: Container-Optimized OS documentation Release Notes Ubuntu Periodically, Google updates the Ubuntu images that are available for use on your cluster's Nodes.
- Node image source projects The available node images for GKE clusters are contained in the following source projects: Container-Optimized OS images: gke-node-images Ubuntu images: ubuntu-os-gke-cloud Windows Server images: gke-windows-node-images In addition to the source projects listed above, GKE also uses the following source projects for exclusive usage by the GKE team : ubuntu-os-gke-cloud-private (reserved for exclusive usage of the GKE team) ubuntu-os-gke-cloud-devel (reserved for exclusive usage of the GKE team) You might need to know the source project names while setting up highly-secure clusters.
- Linux node image comparison The following sections compare the operational aspects of the Container-Optimized OS and Ubuntu node images, including: Software package management System initialization Logs collection File system layout Storage driver support Software package manager The cos and cos containerd node images use a minimal root file system with built-in support for the Docker (containerd) container runtime, which also serves as the software package manager for installing software on the host.
- Ubuntu Ubuntu with containerd ( ubuntu containerd ) Windows Server Windows Server LTSC with containerd ( windows ltsc containerd ) (Supports both LTSC2022 and LTSC2019 node images) Container-Optimized OS The Container-Optimized OS from Google node images are based on a recent version of the Linux kernel and are optimized to enhance node security.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Upgrade your clusters to the following GKE on Azure version: 1.21.6-gke.1500 and later (available in February) If you use Ubuntu node images, this version does not address CVE-2021-22600.
- Upgrade your clusters to the following GKE on AWS version: 1.21.6-gke.1500 and later (available in February) If you use Ubuntu node images, this version does not address CVE-2021-22600.
- GDC software for VMware Nodes: The OpenSSL library included in the GDC software for VMware Node OS images (Container-Optimized OS and Ubuntu) contains the vulnerable code.
- GKE on Azure Nodes: The OpenSSL library included in the GKE on Azure Node OS images (Container-Optimized OS and Ubuntu) contains the vulnerable code.

### "Migrate nodes to containerd 2 \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- Source ID: `site-docs-reference-2`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- The worker nodes use a specific version of containerd, based on the operating system and GKE minor version: Container-Optimized OS and Ubuntu nodes (Linux) : Linux nodes that run GKE 1.32 or earlier, with containerd node images, use containerd 1.7 or earlier versions.
- How GKE is transitioning to containerd 2 Review the following timeline to understand how GKE is transitioning existing clusters to use containerd 2: For Linux nodes with 1.32 and Windows Server nodes with 1.34, GKE uses containerd 1.7. containerd 1.7 deprecated both Docker Schema 1 images and the Container Runtime Interface (CRI) v1alpha2 API.
- For Linux nodes with 1.33 and Windows Server nodes with 1.35, GKE uses containerd 2.0, which removes support for Docker Schema 1 images and the CRI v1alpha2 API.
- Windows Server nodes : Windows Server nodes that run GKE 1.34 or earlier, with containerd node images, use containerd 1.7 or earlier versions.

