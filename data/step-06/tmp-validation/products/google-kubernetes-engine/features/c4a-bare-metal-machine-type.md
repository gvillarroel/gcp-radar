---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.139Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "C4A bare metal machine type"
feature_slug: "c4a-bare-metal-machine-type"
latest_feature_date: "2026-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra"
keywords:
  - "metal"
  - "bare"
  - "standard"
  - "machine"
  - "clusters"
  - "type"
---

# C4A bare metal machine type

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Standard clusters can create bare metal nodes with the c4a-highmem-96-metal machine type from the C4A series.

## Extended Definition

GKE Standard clusters can create bare metal nodes with the c4a-highmem-96-metal machine type from the C4A series.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- For instructions, refer to the following hardening guides: GKE Standard GKE on VMware Google Distributed Cloud Virtual for Bare Metal Update 2022-03-15: GKE on AWS Update 2022-03-15: GKE on Azure Low GCP-2022-008 Published: 2022-02-23 Updated: 2022-04-28 Reference: CVE-2022-23606 , CVE-2022-21655 , CVE-2021-43826 , CVE-2021-43825 , CVE-2021-43824 , CVE-2022-21654 , CVE-2022-21657 , CVE-2022-21656 GKE Description Severity The Envoy project recently discovered a set of vulnerabilities, CVE-2022-23606 , CVE-2022-21655 , CVE-2021-43826 , CVE-2021-43825 , CVE-2021-43824 , CVE-2022-21654 , CVE-2022-21657 , and CVE-2022-21656 which may impact GKE clusters using Anthos Service Mesh , Istio-on-GKE , or custom Istio deployments.
- For instructions, refer to the following hardening guides: GKE Standard GKE on VMware Google Distributed Cloud Virtual for Bare Metal Update 2022-03-15: GKE on AWS Update 2022-03-15: GKE on Azure Addition 2022-03-15: Persistence using mutating webhooks Mutating webhooks were used in the report to establish a privileged foothold in the cluster post-compromise.
- If you have v1.8.0 clusters, download and install the 1.8.1 version of bmctl and upgrade your clusters to the following patched version: 1.8.1 High GCP-2021-011 Published: 2021-06-04 Updated: 2021-10-19 Reference: CVE-2021-30465 2021-10-19 update: Added bulletins for GKE on VMware, GKE on AWS, and GKE on Bare Metal.
- We recommend that you upgrade your clusters to one of the following GDC software for bare metal versions: 1.31.200-gke.59 1.30.600-gke.69 1.29.1100-gke.84 High GCP-2025-008 Published: 2025-02-19 Updated: 2025-04-10 Reference: CVE-2024-53141 2025-04-10 Update: Added patch versions for GDC software for VMware.

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the implications of running an Autopilot workload in your Standard clusters, including differences that you might notice when you deploy those workloads, see About Autopilot mode workloads in GKE Standard .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Guides Send feedback Run workloads in Autopilot mode in Standard clusters Stay organized with collections Save and categorize content based on your preferences.
- Autopilot Standard Cluster administrators and application operators can get the benefits of Google Kubernetes Engine (GKE) Autopilot, like pricing and pre-configured settings, in Standard mode clusters.
- Modify clusters to meet Autopilot requirements You can use the Google Cloud console to check whether your Standard cluster meets all of the requirements to run workloads in Autopilot mode.

### "Allocate network resources by using GKE managed DRANET \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- You must use one of the following accelerator-optimized machine types: Machine series Machine type Accelerator model Networking technology A3 Ultra a3-ultragpu-8g NVIDIA H200 GPU RDMA A4 a4-highgpu-8g NVIDIA B200 GPU RDMA A4X a4x-highgpu-4g NVIDIA GB200 GPU RDMA A4X Max a4x-maxgpu-4g-metal NVIDIA B300 GPU RDMA TPU v7 tpu7x-standard-4t TPU v7 NetDevice TPU v6e ct6e-standard-8t Trillium TPU NetDevice TPU v6e ct6e-standard-4t Trillium TPU NetDevice TPU v6e ct6e-standard-1t Trillium TPU NetDevice Limitations GKE DRANET has the following limitations: You can't use GKE DRANET to allocate the default network interface card (NIC) or virtual NICs (such as veth).
- The number of NICs and their names will vary based on the machine type of the GKE node. eth0 eth1 eth2 lo Enable DRANET with custom ComputeClass To use GKE managed DRANET in Autopilot clusters or with node auto-provisioning in Standard clusters, you must use a custom ComputeClass resource to opt-in to the feature.
- Certain instance types, specifically bare metal nodes like a4x-max , are incompatible with Autoscaling and Autopilot clusters.
- Enable GKE managed DRANET driver on a GPU node pool To enable the GKE DRANET driver on a GPU node pool that supports RDMA, add the cloud.google.com/gke-networking-dra-driver=true label when you create the node pool. gcloud beta container node-pools create NODE POOL NAME \ --region = REGION \ --cluster = CLUSTER NAME \ --node-locations = NODE LOCATIONS \ --accelerator type = ACCELERATOR TYPE ,count = ACCELERATOR COUNT ,gpu-driver-version = DRIVER VERSION \ --machine-type = MACHINE TYPE \ --num-nodes = NUM NODES \ --reservation-affinity = specific \ --reservation = projects/ RESERVATION PROJECT /reservations/ RESERVATION NAME /reservationBlocks/ RESERVATION BLOCK \ --accelerator-network-profile = auto \ --node-labels = cloud.google.com/gke-networking-dra-driver = true Replace the following: NODE POOL NAME : the name of your new node pool.

