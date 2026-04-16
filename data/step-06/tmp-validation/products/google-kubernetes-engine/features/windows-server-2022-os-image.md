---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.273Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Windows Server 2022 OS image"
feature_slug: "windows-server-2022-os-image"
latest_feature_date: "2023-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/building-windows-multi-arch-images"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "images"
  - "windows"
  - "generally"
  - "available"
  - "server"
  - "image"
  - "2022"
---

# Windows Server 2022 OS image

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Windows Server 2022 OS images are generally available for GKE Windows node pools.

## Extended Definition

Windows Server 2022 OS images are generally available for GKE Windows node pools.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/building-windows-multi-arch-images](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/building-windows-multi-arch-images)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### "Building Windows Server multi-arch images \_|\_ Kubernetes Engine \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/building-windows-multi-arch-images](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/building-windows-multi-arch-images)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Build the images manually: Create 2 Docker images with different versions or types of Windows Server, for example Long-Term Servicing Channel (LTSC) 2019 and LTSC 2022.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Guides Send feedback Building Windows Server multi-arch images Stay organized with collections Save and categorize content based on your preferences.
- For example: GKE version 1.15 supports Windows Server 1809 GKE version 1.16 supports Windows Server 1909 To upgrade from one GKE version to a later version automatically, you must build multi-arch images for your Windows workloads.
- With multi-arch images, you can upgrade your Google Kubernetes Engine (GKE) Windows Server node pools to your preferred Windows Server version without rebuilding the image and changing the Pod specs.

### Node images \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images)
- Source ID: `site-docs-reference-2`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Node image source projects The available node images for GKE clusters are contained in the following source projects: Container-Optimized OS images: gke-node-images Ubuntu images: ubuntu-os-gke-cloud Windows Server images: gke-windows-node-images In addition to the source projects listed above, GKE also uses the following source projects for exclusive usage by the GKE team : ubuntu-os-gke-cloud-private (reserved for exclusive usage of the GKE team) ubuntu-os-gke-cloud-devel (reserved for exclusive usage of the GKE team) You might need to know the source project names while setting up highly-secure clusters.
- Ubuntu Ubuntu with containerd ( ubuntu containerd ) Windows Server Windows Server LTSC with containerd ( windows ltsc containerd ) (Supports both LTSC2022 and LTSC2019 node images) Container-Optimized OS The Container-Optimized OS from Google node images are based on a recent version of the Linux kernel and are optimized to enhance node security.
- For more information about creating Windows Server 2022 node pools, see Create Windows Node Pools For more information about containerd node images, see Containerd node images .
- Currently, this image type maps to two node images: Windows Server 2022 and Windows Server 2019.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- 1.18.20-gke.6101 1.19.16-gke.8300 1.20.15-gke.2500 1.21.10-gke.400 1.22.7-gke.900 1.23.3-gke.1100 2022-02-25 Update: If you use Ubuntu node images, 1.22.6-gke.1000 does not address CVE-2021-22600.
- Upgrade your clusters to the following GKE on Azure version: 1.21.6-gke.1500 and later (available in February) If you use Ubuntu node images, this version does not address CVE-2021-22600.
- Upgrade your clusters to the following GKE on AWS version: 1.21.6-gke.1500 and later (available in February) If you use Ubuntu node images, this version does not address CVE-2021-22600.
- To update the containers: Rebuild your containers using Microsoft's latest base container images, selecting a servercore or nanoserver tag with a LastUpdated Time of 1/14/2020 or later.

