---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.660Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Single-node private cloud retention policy"
feature_slug: "single-node-private-cloud-retention-policy"
latest_feature_date: "2025-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud"
keywords:
  - "single"
  - "node"
  - "private"
  - "retention"
  - "policy"
  - "prevents"
  - "clouds"
  - "created"
---

# Single-node private cloud retention policy

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Prevents single-node private clouds created after June 4, 2025 from automatically deleting after 60 days.

## Extended Definition

Prevents single-node private clouds created after June 4, 2025 from automatically deleting after 60 days.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud)

## Supporting Pages

### "About VMware Engine private clouds \_|\_ Google Cloud VMware Engine \_|\_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For single-node private clouds, the default vSAN storage policy uses a Failures to Tolerate (FTT) value of FTT=0.
- The following table describes vSphere cluster limits in private clouds that meet SLA requirements: Resource Limit Minimum number of nodes to create a private cloud (first cluster) 3 Minimum number of nodes to create a cluster 3 Maximum number of nodes per cluster 32 Maximum number of nodes per private cloud 96 Maximum number of clusters per private cloud 32 Private cloud and cluster limitations The following limitations apply to private clouds and clusters: You can create private clouds with mixed node types, combining ve1 and ve2 nodes in a single private cloud.
- The following are common use cases for a single-node private cloud: Proof of concept: evaluating VMware Engine and its capabilities Disaster recovery testing: deploying your application from recent backups to periodically validate disaster recovery preparedness Application upgrade testing: test and validate application component upgrades before upgrading your application in production VMware Engine permits single-node private clouds without a time limit.
- Private clouds are also designed to eliminate single points of failure: Clusters of ESXi hosts are configured with vSphere High Availability (HA) and sized to have at least one spare node for resilience. vSphere HA protects against node and network failures. vSAN provides redundant primary storage. vSAN requires at least three nodes in a private cloud to provide protection against a single failure.

### "Private cloud VMware components \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Single node private clouds For testing and proofs of concept with VMware Engine, you can create a private cloud that contains only a single node and cluster.
- For example, you won't be able to use vSphere Distributed Resource Scheduler (DRS) or High Availability (HA). vSphere cluster limits The following table describes vSphere cluster limits in standard private clouds that meet SLA requirements: Resource Limit Minimum number of nodes to create a private cloud (first cluster) 3 Minimum number of nodes to create a cluster 3 Maximum number of nodes per cluster 32 Maximum number of nodes per private cloud 96 Maximum number of clusters per private cloud 21 The following table describes vSphere cluster limits in stretched private clouds: Resource Limit Minimum number of nodes to create a stretched private cloud (first cluster) 6 Minimum number of nodes to create a stretched cluster 6 Maximum number of nodes per stretched cluster 30 Maximum number of nodes per stretched private cloud 96 Maximum number of clusters per stretched private cloud 16 Guest operating system support You can install a VM with any guest operating system supported by VMware for the ESXi version in your private cloud.
- The following table shows the default vSAN storage policy parameters: FTT Failure tolerance method Number of nodes in vSphere cluster 1 RAID 1 (mirroring) Creates 2 copies 3 and 4 nodes 2 RAID 1 (mirroring) Creates 3 copies 5 to 32 nodes Supported vSAN storage policies The following table shows the supported vSAN storage policies and the minimum number of nodes required to enable the policy: FTT Failure tolerance method Minimum number of nodes required in vSphere cluster 1 RAID 1 (mirroring) 3 1 RAID 5 (erasure coding) 4 2 RAID 1 (mirroring) 5 2 RAID 6 (erasure coding) 6 3 RAID 1 (mirroring) 7 NSX Data Center NSX Data Center provides network virtualization, micro segmentation, and network security capabilities on your private cloud.
- Google Cloud VMware Engine deploys private clouds with the following VMware stack components: VMware ESXi: hypervisor on dedicated nodes VMware vCenter: centralized management of private cloud vSphere environment VMware vSAN: hyper-converged, software-defined storage platform VMware NSX Data Center: network virtualization and security software VMware HCX: application migration and workload rebalancing across data centers and clouds You can retrieve generated sign-in credentials for VMware stack components from the private cloud details page.

### "VMware Engine stretched private clouds \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud)
- Source ID: `site-docs-reference-required-4`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A stretched private cloud can have multiple stretched clusters, but each must have exactly two Google Cloud zones for data nodes and one zone for the witness node. vSAN data encryption in stretched private clouds vSAN data encryption at rest is enabled by default in all stretched clusters of a stretched private cloud.
- The management VMs are affixed to the primary site of the stretched cluster using affinity rules and are configured with the following storage policy: Site Disaster tolerance=1 (protect against one site failure) FTT=1 (for a six-node stretched ('cluster 0')) FTT=2 (for a node stretched greater than or equal to 10 ('cluster 0')) The default storage policy in a stretched cluster for workload VMs also follows the previous policy.
- VMware Engine stretched private clouds A Google Cloud VMware Engine stretched private cloud is a private cloud that is stretched across two data zones and a witness zone, all within the same Google Cloud region.
- All stretched clusters in a stretched private cloud have half of their capacity in each zone - for example, an eight-node stretched cluster in a stretched private cloud must have four nodes in each zone.

