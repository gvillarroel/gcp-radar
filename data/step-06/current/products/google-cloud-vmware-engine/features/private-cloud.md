---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.682Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Private cloud"
feature_slug: "private-cloud"
latest_feature_date: "2023-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud"
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns"
keywords:
  - "private"
  - "clouds"
  - "available"
  - "through"
  - "asset"
  - "inventory"
  - "apis"
---

# Private cloud

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Private clouds are available through Cloud Asset Inventory and Cloud Asset APIs.

## Extended Definition

Private clouds are available through Cloud Asset Inventory and Cloud Asset APIs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns)

## Supporting Pages

### "Manage private cloud resources and activity \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Save . gcloud To delete a whole cluster using the Google Cloud CLI, use the gcloud vmware private-clouds clusters delete command : gcloud vmware private-clouds clusters delete CLUSTER ID \ --location= ZONE \ --private-cloud= PRIVATE CLOUD ID Replace the following: CLUSTER ID : the cluster ID for the cluster to update in this private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud API To delete a whole cluster using the VMware Engine API, make a DELETE request: curl -L -X DELETE -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters/ CLUSTER ID " Replace the following: PROJECT ID : the project ID for the private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud CLUSTER ID : the cluster ID for the cluster to update in this private cloud Python from google.api core import operation from google.cloud import vmwareengine v1 def delete cluster ( project id : str , zone : str , private cloud name : str , cluster name : str ) - > operation .
- For example: curl -L -X POST -H "Authorization: Bearer TOKEN " -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters?clusterId= CLUSTER ID " \ -d '{ "nodeTypeConfigs": { "standard-72": { "nodeCount": NODE COUNT } } }' Replace the following: CLUSTER ID : the cluster ID for the cluster that you are adding to the private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud NODE COUNT : the number of nodes to add Python Add the new cluster and give it a name. from google.api core import operation from google.cloud import vmwareengine v1 def create cluster ( project id : str , zone : str , private cloud name : str , cluster name : str , node count : int = 4 , ) - > operation .
- The following example creates a new cluster of standard-72 node type. curl -L -X POST -H "Authorization: Bearer TOKEN " -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters?clusterId= CLUSTER ID " \ -d '{ "nodeTypeConfigs": { "standard-72": { "nodeCount": NODE COUNT , "customCoreCount": CORE COUNT } } }' Replace the following: PROJECT ID : the project ID for the private cloud CLUSTER ID : the cluster ID for the cluster that you are adding to the private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud NODE COUNT : the number of nodes to add CORES COUNT : the number of custom cores to add Python Add the new cluster and specify the core count configuration.
- For example, the following updates the cluster to standard-72 node type. curl -L -X PATCH -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters/ CLUSTER ID ?updateMask=node type configs. .node count" \ -d '{ "nodeTypeConfigs": { "standard-72" : { "nodeCount": NODE COUNT } } }' Replace the following: PROJECT ID : the project ID for this request ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud CLUSTER ID : the cluster ID for the cluster to update in this private cloud NODE COUNT : the number of nodes to add Python The cluster update method lets you change the total node count for the cluster.

### "About VMware Engine private clouds \_|\_ Google Cloud VMware Engine \_|\_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)
- Source ID: `site-docs-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can connect the private cloud to your on-premises environment using the following connections: Cloud VPN Cloud Interconnect Point-to-site VPN Single-node private clouds For pilot testing and proofs of concept with VMware Engine, you can create a private cloud that contains only a single node and cluster in any region where VMware Engine is available.
- Private cloud environment You manage your private clouds through the Google Cloud console.
- Custom core counts aren't available for single-node private clouds.
- The following table describes vSphere cluster limits in private clouds that meet SLA requirements: Resource Limit Minimum number of nodes to create a private cloud (first cluster) 3 Minimum number of nodes to create a cluster 3 Maximum number of nodes per cluster 32 Maximum number of nodes per private cloud 96 Maximum number of clusters per private cloud 32 Private cloud and cluster limitations The following limitations apply to private clouds and clusters: You can create private clouds with mixed node types, combining ve1 and ve2 nodes in a single private cloud.

### "Configure Management DNS for private clouds \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API To bind a VPC using the VMware Engine API, make a POST request: POST "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /managementDnsZoneBindings?management dns zone binding id= DNS ZONE BINDING ID " -d '{ "vpc network": "projects/ VPC PROJECT ID /global/networks/ VPC NETWORK " }' To bind a VMware Engine network using the VMware Engine API, make a POST request: POST "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /managementDnsZoneBindings?management dns zone binding id= DNS ZONE BINDING ID " -d '{ "vmware engine network" : " NETWORK ID " }' Replace the following: PROJECT ID : the project for your private cloud.
- API If you want to edit the description of a management DNS zone binding using the VMware Engine API, make a PATCH request: PATCH "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /managementDnsZoneBindings/ DNS ZONE BINDING ID ?update mask description" -d '{ "description": " DESCRIPTION " }' Replace the following: PROJECT ID : the project for this request.
- API If you want to get the description of a management DNS zone binding using the VMware Engine API, make a GET request: GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /managementDnsZoneBindings/ DNS ZONE BINDING ID " Replace the following: PROJECT ID : the project for this request.
- API If you want to delete a management DNS zone binding using the VMware Engine API, make a DELETE request: DELETE "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /managementDnsZoneBindings/ DNS ZONE BINDING ID " Replace the following: PROJECT ID : the project for this request.

