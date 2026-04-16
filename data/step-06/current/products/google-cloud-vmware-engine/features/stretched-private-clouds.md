---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.707Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Stretched private clouds"
feature_slug: "stretched-private-clouds"
latest_feature_date: "2022-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud"
keywords:
  - "stretched"
  - "private"
  - "clouds"
  - "let"
  - "vsphere"
  - "vsan"
  - "clusters"
  - "span"
---

# Stretched private clouds

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Stretched private clouds let vSphere and vSAN clusters span zones to improve availability and protect against zone-level failures.

## Extended Definition

Stretched private clouds let vSphere and vSAN clusters span zones to improve availability and protect against zone-level failures.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)

## Supporting Pages

### "VMware Engine stretched private clouds \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud)
- Source ID: `site-docs-reference-required-4`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Stretched private clouds use vSphere and vSAN stretched clusters to provide compute and storage high availability against zone-level failures.
- A stretched private cloud can have multiple stretched clusters, but each must have exactly two Google Cloud zones for data nodes and one zone for the witness node. vSAN data encryption in stretched private clouds vSAN data encryption at rest is enabled by default in all stretched clusters of a stretched private cloud.
- VMware Engine stretched private clouds A Google Cloud VMware Engine stretched private cloud is a private cloud that is stretched across two data zones and a witness zone, all within the same Google Cloud region.
- All stretched clusters in a stretched private cloud have half of their capacity in each zone - for example, an eight-node stretched cluster in a stretched private cloud must have four nodes in each zone.

### "Private cloud VMware components \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components)
- Source ID: `site-docs-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you won't be able to use vSphere Distributed Resource Scheduler (DRS) or High Availability (HA). vSphere cluster limits The following table describes vSphere cluster limits in standard private clouds that meet SLA requirements: Resource Limit Minimum number of nodes to create a private cloud (first cluster) 3 Minimum number of nodes to create a cluster 3 Maximum number of nodes per cluster 32 Maximum number of nodes per private cloud 96 Maximum number of clusters per private cloud 21 The following table describes vSphere cluster limits in stretched private clouds: Resource Limit Minimum number of nodes to create a stretched private cloud (first cluster) 6 Minimum number of nodes to create a stretched cluster 6 Maximum number of nodes per stretched cluster 30 Maximum number of nodes per stretched private cloud 96 Maximum number of clusters per stretched private cloud 16 Guest operating system support You can install a VM with any guest operating system supported by VMware for the ESXi version in your private cloud.
- Google Cloud VMware Engine deploys private clouds with the following VMware stack components: VMware ESXi: hypervisor on dedicated nodes VMware vCenter: centralized management of private cloud vSphere environment VMware vSAN: hyper-converged, software-defined storage platform VMware NSX Data Center: network virtualization and security software VMware HCX: application migration and workload rebalancing across data centers and clouds You can retrieve generated sign-in credentials for VMware stack components from the private cloud details page.
- Clusters in private clouds have fully configured all-flash vSAN storage.
- The following table shows the default vSAN storage policy parameters: FTT Failure tolerance method Number of nodes in vSphere cluster 1 RAID 1 (mirroring) Creates 2 copies 3 and 4 nodes 2 RAID 1 (mirroring) Creates 3 copies 5 to 32 nodes Supported vSAN storage policies The following table shows the supported vSAN storage policies and the minimum number of nodes required to enable the policy: FTT Failure tolerance method Minimum number of nodes required in vSphere cluster 1 RAID 1 (mirroring) 3 1 RAID 5 (erasure coding) 4 2 RAID 1 (mirroring) 5 2 RAID 6 (erasure coding) 6 3 RAID 1 (mirroring) 7 NSX Data Center NSX Data Center provides network virtualization, micro segmentation, and network security capabilities on your private cloud.

### "About VMware Engine private clouds \_|\_ Google Cloud VMware Engine \_|\_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Private clouds are also designed to eliminate single points of failure: Clusters of ESXi hosts are configured with vSphere High Availability (HA) and sized to have at least one spare node for resilience. vSphere HA protects against node and network failures. vSAN provides redundant primary storage. vSAN requires at least three nodes in a private cloud to provide protection against a single failure.
- The following table describes vSphere cluster limits in private clouds that meet SLA requirements: Resource Limit Minimum number of nodes to create a private cloud (first cluster) 3 Minimum number of nodes to create a cluster 3 Maximum number of nodes per cluster 32 Maximum number of nodes per private cloud 96 Maximum number of clusters per private cloud 32 Private cloud and cluster limitations The following limitations apply to private clouds and clusters: You can create private clouds with mixed node types, combining ve1 and ve2 nodes in a single private cloud.
- About VMware Engine private clouds A Google Cloud VMware Engine private cloud is an isolated VMware stack that consists of the following VMware components: ESXi hosts vCenter Server vSAN NSX HCX Private clouds help you address a variety of common needs for network infrastructure: Growth.
- The default vSAN storage policy changes to use FTT=1 for 3–4 node private clouds and to use FTT=2 for private clouds with at least 5 nodes.

