---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.714Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "VMware Engine nodes in us-east4-b"
feature_slug: "vmware-engine-nodes-in-us-east4-b"
latest_feature_date: "2022-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-storage-only-nodes"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types"
keywords:
  - "vmware"
  - "engine"
  - "nodes"
  - "us"
  - "east4"
  - "available"
  - "ashburn"
  - "northern"
---

# VMware Engine nodes in us-east4-b

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

VMware Engine nodes are available in the Ashburn, Northern Virginia us-east4-b zone.

## Extended Definition

VMware Engine nodes are available in the Ashburn, Northern Virginia us-east4-b zone.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-storage-only-nodes](https://docs.cloud.google.com/vmware-engine/docs/concepts-storage-only-nodes)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types](https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types)

## Supporting Pages

### "Manage storage-only nodes \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Clicking the Clusters tab displays cluster data in the table. gcloud To create stretched private cloud that contains storage-only nodes using the Google Cloud CLI, do the following: Create a stretched private cloud by entering the gcloud private-clouds create command : gcloud vmware private-clouds create STRETCHED PC STORAGE NODE NAME \ --description= DESCRIPTION \ --location= REGION \ --cluster= STRETCHED CLUSTER NAME \ --node-type-config=type=standard-72,count= n \ --node-type-config=type=storage-only-standard-72,count= m \ --management-range= IP ADDRESS \ --vmware-engine-network= NETWORK NAME --preferred-zone=projects/ PROJECT ID /locations/ PREFERRED ZONE \ --secondary-zone=projects/ PROJECT ID /locations/ SECONDARY ZONE \ --type=STRETCHED Replace the following: STRETCHED PC STORAGE NODE NAME : the name for the stretched private cloud with storage-only node.
- Click Create to begin creating the private cloud. gcloud To create private cloud with storage-only nodes using the Google Cloud CLI, do the following: Create a private cloud PC STORAGE NODE NAME with n standard-72 nodes and m storage-only-standard-72 by entering the gcloud private-clouds create command : gcloud vmware private-clouds create PC STORAGE NODE NAME \ --location= ZONE \ --project= PROJECT ID \ --description= DESCRIPTION \ --management-range= IP ADDRESS \ --cluster= CLUSTER NAME \ --node-type-config=type=standard-72,count= n \ --node-type-config=type=storage-only-standard-72,count= m \ --vmware-engine-network= NETWORK NAME Replace the following: PC STORAGE NODE NAME : the name for the private cloud with storage-only node.
- API To create stretched private cloud that contains storage-only nodes using the VMware Engine API, make a GET request: GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds?alt=json&privateCloudId= PC STORAGE ONLY NODE NAME " -d '{ "description": " DESCRIPTION ", "managementCluster": { "clusterId": " CLUSTER NAME ", "nodeTypeConfigs": { "standard-72": { "nodeCount": n }, "storage-only-standard-72": { "nodeCount": m } } }, "networkConfig": { "managementCidr": " IP ADDRESS ", "vmwareEngineNetwork": "projects/ PROJECT ID /locations/ ZONE /vmwareEngineNetworks/ NETWORK NAME " } }' Replace the following: PROJECT ID : the project ID for the request.
- API To create private cloud with storage-only nodes using the VMware Engine API, make a GET request: GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds?alt=json&privateCloudId= PC STORAGE NODE NAME " -d '{ "description": " DESCRIPTION ", "managementCluster": { "clusterId": " CLUSTER NAME ", "nodeTypeConfigs": { "standard-72": { "nodeCount": n }, "storage-only-standard-72": { "nodeCount": m } } }, "networkConfig": { "managementCidr": " IP ADDRESS ", "vmwareEngineNetwork": "projects/ PROJECT ID /locations/ ZONE /vmwareEngineNetworks/ NETWORK NAME " } }' Replace the following: PROJECT ID : the project ID for the request.

### Storage-only nodes \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-storage-only-nodes](https://docs.cloud.google.com/vmware-engine/docs/concepts-storage-only-nodes)
- Source ID: `site-docs-reference-required-4`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Storage-only nodes are available using the Google Cloud console, Google Cloud CLI and VMware Engine API.
- Storage-only nodes A storage-only node, also known as storage node, is a VMware Engine node type that does not have any customer-usable cores and only has customer-usable storage.
- These nodes can be added to a cluster of VMware Engine hyper converged nodes to increase the storage capacity of the cluster without adding cores to the cluster.
- You can use the Google Cloud CLI and VMware Engine API to query the number of storage-only nodes in a cluster.

### "VMware Engine node types \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types](https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Node type vCPUs/Node § Memory/Node (GiB) Storage/Node (TB) ve1-standard-72 72 768 19.2 ve2-mega-128 † 128 2048 51.2 ve2-mega-112 † 112 2048 51.2 ve2-mega-96 † 96 2048 51.2 ve2-mega-80 † 80 2048 51.2 ve2-mega-64 † 64 2048 51.2 ve2-large-128 † 128 2048 38.4 ve2-large-112 † 112 2048 38.4 ve2-large-96 † 96 2048 38.4 ve2-large-80 † 80 2048 38.4 ve2-large-64 † 64 2048 38.4 ve2-standard-128 † 128 2048 25.5 ve2-standard-112 † 112 2048 25.5 ve2-standard-96 † 96 2048 25.5 ve2-standard-80 † 80 2048 25.5 ve2-standard-64 † 64 2048 25.5 ve2-small-128 † 128 2048 12.8 ve2-small-112 † 112 2048 12.8 ve2-small-96 † 96 2048 12.8 ve2-small-80 † 80 2048 12.8 ve2-small-64 † 64 2048 12.8 Storage-only node types The following table lists storage-only node types that are available when creating a VMware Engine private cloud or cluster.
- Node commitments You can purchase VMware Engine nodes with a one- or three-year committed use discount (CUD) where you make a fixed monthly payment, or you can pay for nodes as you use them.
- VMware Engine node types A Google Cloud VMware Engine private cloud is a collection of vSphere clusters created with a set of dedicated isolated bare metal hardware nodes in a region.
- These nodes provide the compute, memory, and storage required to run VMware ESXi, and are the basic unit of consumption of Google Cloud VMware Engine.

