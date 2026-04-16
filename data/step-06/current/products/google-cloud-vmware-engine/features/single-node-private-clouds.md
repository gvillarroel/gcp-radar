---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.700Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Single-node private clouds"
feature_slug: "single-node-private-clouds"
latest_feature_date: "2023-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types"
keywords:
  - "single"
  - "node"
  - "private"
  - "clouds"
  - "let"
  - "you"
  - "provision"
  - "vmware"
---

# Single-node private clouds

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Single-node private clouds let you provision a VMware Engine private cloud with a single node; Private clouds can be created with a single node for testing and proof-of-concept deployments.

## Extended Definition

Single-node private clouds let you provision a VMware Engine private cloud with a single node; Private clouds can be created with a single node for testing and proof-of-concept deployments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types](https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types)

## Supporting Pages

### "About VMware Engine private clouds \_|\_ Google Cloud VMware Engine \_|\_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)
- Source ID: `site-docs-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following are common use cases for a single-node private cloud: Proof of concept: evaluating VMware Engine and its capabilities Disaster recovery testing: deploying your application from recent backups to periodically validate disaster recovery preparedness Application upgrade testing: test and validate application component upgrades before upgrading your application in production VMware Engine permits single-node private clouds without a time limit.
- You can connect the private cloud to your on-premises environment using the following connections: Cloud VPN Cloud Interconnect Point-to-site VPN Single-node private clouds For pilot testing and proofs of concept with VMware Engine, you can create a private cloud that contains only a single node and cluster in any region where VMware Engine is available.
- Single-node private cloud limitations For single-node private clouds, the following limitations apply to the VMware stack: Features or operations that require more than 1 node won't work.
- The following table describes vSphere cluster limits in private clouds that meet SLA requirements: Resource Limit Minimum number of nodes to create a private cloud (first cluster) 3 Minimum number of nodes to create a cluster 3 Maximum number of nodes per cluster 32 Maximum number of nodes per private cloud 96 Maximum number of clusters per private cloud 32 Private cloud and cluster limitations The following limitations apply to private clouds and clusters: You can create private clouds with mixed node types, combining ve1 and ve2 nodes in a single private cloud.

### "Private cloud VMware components \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Single node private clouds For testing and proofs of concept with VMware Engine, you can create a private cloud that contains only a single node and cluster.
- For example, you won't be able to use vSphere Distributed Resource Scheduler (DRS) or High Availability (HA). vSphere cluster limits The following table describes vSphere cluster limits in standard private clouds that meet SLA requirements: Resource Limit Minimum number of nodes to create a private cloud (first cluster) 3 Minimum number of nodes to create a cluster 3 Maximum number of nodes per cluster 32 Maximum number of nodes per private cloud 96 Maximum number of clusters per private cloud 21 The following table describes vSphere cluster limits in stretched private clouds: Resource Limit Minimum number of nodes to create a stretched private cloud (first cluster) 6 Minimum number of nodes to create a stretched cluster 6 Maximum number of nodes per stretched cluster 30 Maximum number of nodes per stretched private cloud 96 Maximum number of clusters per stretched private cloud 16 Guest operating system support You can install a VM with any guest operating system supported by VMware for the ESXi version in your private cloud.
- Google Cloud VMware Engine deploys private clouds with the following VMware stack components: VMware ESXi: hypervisor on dedicated nodes VMware vCenter: centralized management of private cloud vSphere environment VMware vSAN: hyper-converged, software-defined storage platform VMware NSX Data Center: network virtualization and security software VMware HCX: application migration and workload rebalancing across data centers and clouds You can retrieve generated sign-in credentials for VMware stack components from the private cloud details page.
- VMware Engine deletes private clouds that contain only 1 node after 60 days, along with any associated workload VMs and data.

### "VMware Engine node types \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types](https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Region Zones Private cloud types Node types asia-northeast1 (Tokyo) asia-northeast1-a Standard, Single-Node ve1, ve2 asia-northeast2 (Osaka) asia-northeast2-a Standard, Single-Node ve2 asia-south1 (Mumbai) asia-south1-a , asia-south1-b Standard, Stretched, Single-Node ve1 asia-south2 (Delhi) asia-south2-a Standard, Single-Node ve1 asia-southeast1 (Singapore) asia-southeast1-a , asia-southeast1-b Standard, Single-Node ve1 australia-southeast1 (Sydney) australia-southeast1-a , australia-southeast1-b Standard, Stretched, Single-Node ve1, ve2 ‡ australia-southeast2 (Melbourne) australia-southeast2-a , australia-southeast2-b Standard, Stretched, Single-Node ve1, ve2 europe-west2 (London) europe-west2-a , europe-west2-b Standard, Stretched, Single-Node ve1, ve2 ‡ europe-west3 (Frankfurt) europe-west3-a , europe-west3-b Standard, Stretched, Single-Node ve1, ve2 ‡ europe-west4 (Netherlands) europe-west4-a Standard, Single-Node ve1 europe-west6 (Zurich) europe-west6-a Standard, Single-Node ve1 europe-west8 (Milan) europe-west8-a , europe-west8-b Standard, Stretched, Single-Node ve1, ve2 europe-west9 (Paris) europe-west9-b Standard, Single-Node ve1, v2 europe-west12 (Turin) europe-west12-a Standard, Single-Node ve1 europe-southwest1 (Madrid) europe-southwest1-a Standard, Single-Node ve2 me-central1 (Doha) me-central1-a Standard, Single-Node ve2 me-central2 (Dammam) me-central2-c Standard, Single-Node ve2 me-west1 (Tel Aviv) me-west1-a , me-west1-b Standard, Single-Node ve1 northamerica-northeast1 (Montréal) northamerica-northeast1-a Standard, Single-Node ve1, ve2 ‡ northamerica-northeast2 (Toronto) northamerica-northeast2-a Standard, Single-Node ve1, ve2 southamerica-east1 (São Paulo) southamerica-east1-a , southamerica-east1-c Standard, Stretched, Single-Node ve1, ve2 ‡ southamerica-west1 (Santiago) southamerica-west1-a , southamerica-west1-b Standard, Stretched, Single-Node ve1, ve2 ‡ us-central1 (Iowa) us-central1-a Standard, Single-Node ve1, ve2 ‡ us-east4 (North Virginia) us-east4-a , us-east4-b Standard, Single-Node ve1, ve2 ‡ us-south1 (Dallas) us-south1-b Standard, Single-Node ve1, ve2 ‡ us-west2 (Los Angeles) us-west2-a , us-west2-b Standard, Single-Node ve1, ve2 ‡ Supports private clouds with mixed ve1 and ve2 node types.
- Node types The following sections list node types that are available when creating a VMware Engine private clouds or clusters.
- VMware Engine supports private clouds with mixed node families ( ve1 and ve2 ) in some regions.
- Node type vCPUs/Node § Memory/Node (GiB) Storage/Node (TB) ve1-standard-72 72 768 19.2 ve2-mega-128 † 128 2048 51.2 ve2-mega-112 † 112 2048 51.2 ve2-mega-96 † 96 2048 51.2 ve2-mega-80 † 80 2048 51.2 ve2-mega-64 † 64 2048 51.2 ve2-large-128 † 128 2048 38.4 ve2-large-112 † 112 2048 38.4 ve2-large-96 † 96 2048 38.4 ve2-large-80 † 80 2048 38.4 ve2-large-64 † 64 2048 38.4 ve2-standard-128 † 128 2048 25.5 ve2-standard-112 † 112 2048 25.5 ve2-standard-96 † 96 2048 25.5 ve2-standard-80 † 80 2048 25.5 ve2-standard-64 † 64 2048 25.5 ve2-small-128 † 128 2048 12.8 ve2-small-112 † 112 2048 12.8 ve2-small-96 † 96 2048 12.8 ve2-small-80 † 80 2048 12.8 ve2-small-64 † 64 2048 12.8 Storage-only node types The following table lists storage-only node types that are available when creating a VMware Engine private cloud or cluster.

