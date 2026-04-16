---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.668Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Storage-only nodes"
feature_slug: "storage-only-nodes"
latest_feature_date: "2024-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-storage-only-nodes"
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud"
keywords:
  - "storage"
  - "only"
  - "nodes"
  - "provides"
  - "separate"
  - "capacity"
  - "compute"
  - "resources"
---

# Storage-only nodes

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Provides storage-only nodes to separate storage capacity from compute resources.

## Extended Definition

Provides storage-only nodes to separate storage capacity from compute resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-storage-only-nodes](https://docs.cloud.google.com/vmware-engine/docs/concepts-storage-only-nodes)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)

## Supporting Pages

### Storage-only nodes \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-storage-only-nodes](https://docs.cloud.google.com/vmware-engine/docs/concepts-storage-only-nodes)
- Source ID: `site-docs-reference-required-4`
- Final score: 293
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To manually calculate available compute resources from cluster summary metrics, exclude compute capacity proportional to the percentage of storage-only nodes in your vSphere cluster.
- When a cluster contains storage-only nodes, the vCenter cluster summary reports physical CPU and memory for all nodes of the cluster, including compute capacity from storage-only nodes which is unavailable for running VMs.
- Storage-only nodes A storage-only node, also known as storage node, is a VMware Engine node type that does not have any customer-usable cores and only has customer-usable storage.
- These nodes can be added to a cluster of VMware Engine hyper converged nodes to increase the storage capacity of the cluster without adding cores to the cluster.

### "Manage storage-only nodes \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes)
- Source ID: `site-docs-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Storage-only nodes, also known as storage nodes, can be used to scale the storage capacity of a vSAN cluster without adding cores or memory to the cluster.
- Clicking the Clusters tab displays cluster data in the table. gcloud To create stretched private cloud that contains storage-only nodes using the Google Cloud CLI, do the following: Create a stretched private cloud by entering the gcloud private-clouds create command : gcloud vmware private-clouds create STRETCHED PC STORAGE NODE NAME \ --description= DESCRIPTION \ --location= REGION \ --cluster= STRETCHED CLUSTER NAME \ --node-type-config=type=standard-72,count= n \ --node-type-config=type=storage-only-standard-72,count= m \ --management-range= IP ADDRESS \ --vmware-engine-network= NETWORK NAME --preferred-zone=projects/ PROJECT ID /locations/ PREFERRED ZONE \ --secondary-zone=projects/ PROJECT ID /locations/ SECONDARY ZONE \ --type=STRETCHED Replace the following: STRETCHED PC STORAGE NODE NAME : the name for the stretched private cloud with storage-only node.
- Click Create to begin creating the private cloud. gcloud To create private cloud with storage-only nodes using the Google Cloud CLI, do the following: Create a private cloud PC STORAGE NODE NAME with n standard-72 nodes and m storage-only-standard-72 by entering the gcloud private-clouds create command : gcloud vmware private-clouds create PC STORAGE NODE NAME \ --location= ZONE \ --project= PROJECT ID \ --description= DESCRIPTION \ --management-range= IP ADDRESS \ --cluster= CLUSTER NAME \ --node-type-config=type=standard-72,count= n \ --node-type-config=type=storage-only-standard-72,count= m \ --vmware-engine-network= NETWORK NAME Replace the following: PC STORAGE NODE NAME : the name for the private cloud with storage-only node.
- API To create stretched private cloud that contains storage-only nodes using the VMware Engine API, make a GET request: GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds?alt=json&privateCloudId= PC STORAGE ONLY NODE NAME " -d '{ "description": " DESCRIPTION ", "managementCluster": { "clusterId": " CLUSTER NAME ", "nodeTypeConfigs": { "standard-72": { "nodeCount": n }, "storage-only-standard-72": { "nodeCount": m } } }, "networkConfig": { "managementCidr": " IP ADDRESS ", "vmwareEngineNetwork": "projects/ PROJECT ID /locations/ ZONE /vmwareEngineNetworks/ NETWORK NAME " } }' Replace the following: PROJECT ID : the project ID for the request.

### "About VMware Engine private clouds \_|\_ Google Cloud VMware Engine \_|\_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Within a cluster, you can mix storage-only nodes with compute nodes of the same node family (for example, ve2-standard-128 with ve2-standard-so ).
- Private clouds are also designed to eliminate single points of failure: Clusters of ESXi hosts are configured with vSphere High Availability (HA) and sized to have at least one spare node for resilience. vSphere HA protects against node and network failures. vSAN provides redundant primary storage. vSAN requires at least three nodes in a private cloud to provide protection against a single failure.
- The nodes provide the compute, memory, and storage required to run VMware ESXi, and are the basic unit of consumption of VMware Engine.
- For more information, see Storage-only nodes .

