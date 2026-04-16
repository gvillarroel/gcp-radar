---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.733Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Multi-region private cloud connectivity"
feature_slug: "multi-region-private-cloud-connectivity"
latest_feature_date: "2020-10-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud"
  - "https://docs.cloud.google.com/vmware-engine/docs/best-practices-compute"
keywords:
  - "multi"
  - "region"
  - "private"
  - "connectivity"
  - "clouds"
  - "different"
  - "regions"
  - "can"
---

# Multi-region private cloud connectivity

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Private clouds in different regions can automatically route traffic between each other without additional connectivity.

## Extended Definition

Private clouds in different regions can automatically route traffic between each other without additional connectivity.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-compute](https://docs.cloud.google.com/vmware-engine/docs/best-practices-compute)

## Supporting Pages

### "Manage private cloud resources and activity \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All nodes in the cluster are listed in the cluster nodes table. gcloud To list the nodes of one or multiple private clouds using the Google Cloud CLI, do the following: List all nodes that are bound to a particular private cloud's PRIVATE CLOUD ID by running the gcloud vmware private-clouds clusters node list command : gcloud vmware private-clouds clusters node list \ --project= PROJECT ID \ --location= ZONE \ --private-cloud= PRIVATE CLOUD ID \ --cluster= CLUSTER ID Replace the following: PROJECT ID : the project name for this request.
- Select the private cloud you want to manage from the list of private clouds. gcloud and API requirements To use the gcloud command line tool or the API to manage your VMware Engine resources, we recommend configuring the tools as described below. gcloud Set your default project ID: gcloud config set project PROJECT ID Set a default region and zone: gcloud config set compute/region REGION gcloud config set compute/zone ZONE For more information on the gcloud vmware tool, see the Cloud SDK reference docs .
- DeleteClusterRequest () request . name = ( f "projects/ { project id } /locations/ { zone } /privateClouds/ { private cloud name } " f "/clusters/ { cluster name } " ) return client . delete cluster ( request ) List nodes To list the nodes of a particular private cloud's cluster and get information about multiple nodes or a specific node using the Google Cloud console, Google Cloud CLI or VMware Engine API, do the following.
- API To list the nodes of one or multiple private clouds using the VMware Engine API, do the following: List all nodes that are bound to a particular private cloud's PRIVATE CLOUD ID by making a GET request: GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters/ CLUSTER ID /nodes" Replace the following: PROJECT ID : the project name for this request.

### "About VMware Engine private clouds \_|\_ Google Cloud VMware Engine \_|\_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can connect the private cloud to your on-premises environment using the following connections: Cloud VPN Cloud Interconnect Point-to-site VPN Single-node private clouds For pilot testing and proofs of concept with VMware Engine, you can create a private cloud that contains only a single node and cluster in any region where VMware Engine is available.
- The following table describes vSphere cluster limits in private clouds that meet SLA requirements: Resource Limit Minimum number of nodes to create a private cloud (first cluster) 3 Minimum number of nodes to create a cluster 3 Maximum number of nodes per cluster 32 Maximum number of nodes per private cloud 96 Maximum number of clusters per private cloud 32 Private cloud and cluster limitations The following limitations apply to private clouds and clusters: You can create private clouds with mixed node types, combining ve1 and ve2 nodes in a single private cloud.
- The following are common use cases for a single-node private cloud: Proof of concept: evaluating VMware Engine and its capabilities Disaster recovery testing: deploying your application from recent backups to periodically validate disaster recovery preparedness Application upgrade testing: test and validate application component upgrades before upgrading your application in production VMware Engine permits single-node private clouds without a time limit.
- Private clouds are also designed to eliminate single points of failure: Clusters of ESXi hosts are configured with vSphere High Availability (HA) and sized to have at least one spare node for resilience. vSphere HA protects against node and network failures. vSAN provides redundant primary storage. vSAN requires at least three nodes in a private cloud to provide protection against a single failure.

### "Compute best practices \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-compute](https://docs.cloud.google.com/vmware-engine/docs/best-practices-compute)
- Source ID: `site-docs-reference-required-4`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Decide when to choose a multi-region design In the following situations, you might want to deploy to multiple VMware Engine private clouds across regions for the same workload or project scope: Disaster recovery implementations that use Site Recovery Manager (SRM) or Zerto .
- In these regions, for increased fault tolerance, you can also deploy private clouds as a stretched cluster .
- For example, use a dedicated vCenter Server in the following cases: For a specific workload type, such as Virtual Desktop Infrastructure (VDI) When the limits of a private cloud are inadequate For licensing and software management For cost transparency and simplicity For monitoring For compliance with regulatory requirements For multi-tenancy at all layers, including management components and infrastructure To avoid the unnecessary proliferation of management endpoints, use only the required number of private clouds.
- For multicloud deployments, consider the proximity to the regions of other cloud vendors.

