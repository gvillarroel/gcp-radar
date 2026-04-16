---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.360Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Containerd on Windows Server node images"
feature_slug: "containerd-on-windows-server-node-images"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/building-windows-multi-arch-images"
keywords:
  - "runtime"
  - "containerd"
  - "images"
  - "container"
  - "windows"
  - "supports"
  - "server"
  - "node"
---

# Containerd on Windows Server node images

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Supports Containerd as the container runtime for Windows Server LTSC and SAC node images in supported GKE versions.

## Extended Definition

Supports Containerd as the container runtime for Windows Server LTSC and SAC node images in supported GKE versions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images)
- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/building-windows-multi-arch-images](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/building-windows-multi-arch-images)

## Supporting Pages

### Node images \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images)
- Source ID: `site-docs-reference-2`
- Final score: 257
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Ubuntu Ubuntu with containerd ( ubuntu containerd ) Windows Server Windows Server LTSC with containerd ( windows ltsc containerd ) (Supports both LTSC2022 and LTSC2019 node images) Container-Optimized OS The Container-Optimized OS from Google node images are based on a recent version of the Linux kernel and are optimized to enhance node security.
- For more information about creating Windows Server 2022 node pools, see Create Windows Node Pools For more information about containerd node images, see Containerd node images .
- Node image source projects The available node images for GKE clusters are contained in the following source projects: Container-Optimized OS images: gke-node-images Ubuntu images: ubuntu-os-gke-cloud Windows Server images: gke-windows-node-images In addition to the source projects listed above, GKE also uses the following source projects for exclusive usage by the GKE team : ubuntu-os-gke-cloud-private (reserved for exclusive usage of the GKE team) ubuntu-os-gke-cloud-devel (reserved for exclusive usage of the GKE team) You might need to know the source project names while setting up highly-secure clusters.
- Linux node image comparison The following sections compare the operational aspects of the Container-Optimized OS and Ubuntu node images, including: Software package management System initialization Logs collection File system layout Storage driver support Software package manager The cos and cos containerd node images use a minimal root file system with built-in support for the Docker (containerd) container runtime, which also serves as the software package manager for installing software on the host.

### "Migrate nodes to containerd 2 \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- Source ID: `site-docs-reference-2`
- Final score: 255
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- How GKE is transitioning to containerd 2 Review the following timeline to understand how GKE is transitioning existing clusters to use containerd 2: For Linux nodes with 1.32 and Windows Server nodes with 1.34, GKE uses containerd 1.7. containerd 1.7 deprecated both Docker Schema 1 images and the Container Runtime Interface (CRI) v1alpha2 API.
- For Linux nodes with 1.33 and Windows Server nodes with 1.35, GKE uses containerd 2.0, which removes support for Docker Schema 1 images and the CRI v1alpha2 API.
- Windows Server nodes : Windows Server nodes that run GKE 1.34 or earlier, with containerd node images, use containerd 1.7 or earlier versions.
- Windows Server nodes that run GKE 1.35 use containerd 2.0.

### "Building Windows Server multi-arch images \_|\_ Kubernetes Engine \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/building-windows-multi-arch-images](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/building-windows-multi-arch-images)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- However, Docker on Windows Server supports multi-arch (or multi-platform) container images that can run across multiple Windows Server versions.
- For example: GKE version 1.15 supports Windows Server 1809 GKE version 1.16 supports Windows Server 1909 To upgrade from one GKE version to a later version automatically, you must build multi-arch images for your Windows workloads.
- With multi-arch images, you can upgrade your Google Kubernetes Engine (GKE) Windows Server node pools to your preferred Windows Server version without rebuilding the image and changing the Pod specs.
- Some flags for common behaviors are described in this section, but this is not an exhaustive list; to see the full list of flags that gke-windows-builder supports, run the following command on a Linux server or in Cloud Shell : docker run -it us-docker.pkg.dev/gke-windows-tools/docker-repo/gke-windows-builder:latest --help To speed up your builds you can use a larger machine type for the Windows instances: - --machineType - 'n1-standard-8' Instead of building the image for all Windows versions that GKE supports, you can choose specific Windows Server versions to build for by using the --versions flag: - --versions - '20H2,ltsc2019' If your workspace has many files, your image build will be more reliable if you configure the builder to copy the workspace via Cloud Storage rather than WinRM.

