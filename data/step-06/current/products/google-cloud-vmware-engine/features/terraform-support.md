---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.698Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Terraform support"
feature_slug: "terraform-support"
latest_feature_date: "2023-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud"
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud"
keywords:
  - "terraform"
  - "lets"
  - "you"
  - "manage"
  - "vmware"
  - "engine"
  - "private"
  - "clouds"
---

# Terraform support

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Terraform support lets you manage VMware Engine private clouds, clusters, and networks with create, update, and delete operations.

## Extended Definition

Terraform support lets you manage VMware Engine private clouds, clusters, and networks with create, update, and delete operations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud)

## Supporting Pages

### "Manage private cloud resources and activity \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following updates the cluster to standard-72 node type. curl -L -X PATCH -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters/ CLUSTER ID ?updateMask=node type configs. .node count" \ -d '{ "nodeTypeConfigs": { "standard-72" : { "nodeCount": NODE COUNT } } }' Replace the following: PROJECT ID : the project ID for this request ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud CLUSTER ID : the cluster ID for the cluster to update in this private cloud NODE COUNT : the number of nodes to add Python The cluster update method lets you change the total node count for the cluster.
- Select the private cloud you want to manage from the list of private clouds. gcloud and API requirements To use the gcloud command line tool or the API to manage your VMware Engine resources, we recommend configuring the tools as described below. gcloud Set your default project ID: gcloud config set project PROJECT ID Set a default region and zone: gcloud config set compute/region REGION gcloud config set compute/zone ZONE For more information on the gcloud vmware tool, see the Cloud SDK reference docs .
- Click Save . gcloud To delete a whole cluster using the Google Cloud CLI, use the gcloud vmware private-clouds clusters delete command : gcloud vmware private-clouds clusters delete CLUSTER ID \ --location= ZONE \ --private-cloud= PRIVATE CLOUD ID Replace the following: CLUSTER ID : the cluster ID for the cluster to update in this private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud API To delete a whole cluster using the VMware Engine API, make a DELETE request: curl -L -X DELETE -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters/ CLUSTER ID " Replace the following: PROJECT ID : the project ID for the private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud CLUSTER ID : the cluster ID for the cluster to update in this private cloud Python from google.api core import operation from google.cloud import vmwareengine v1 def delete cluster ( project id : str , zone : str , private cloud name : str , cluster name : str ) - > operation .
- For example: curl -L -X POST -H "Authorization: Bearer TOKEN " -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters?clusterId= CLUSTER ID " \ -d '{ "nodeTypeConfigs": { "standard-72": { "nodeCount": NODE COUNT } } }' Replace the following: CLUSTER ID : the cluster ID for the cluster that you are adding to the private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud NODE COUNT : the number of nodes to add Python Add the new cluster and give it a name. from google.api core import operation from google.cloud import vmwareengine v1 def create cluster ( project id : str , zone : str , private cloud name : str , cluster name : str , node count : int = 4 , ) - > operation .

### "Configure Management DNS for private clouds \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a new private cloud management DNS zone binding by binding a VPC or a VMware Engine network using the Google Cloud CLI or VMware Engine API, do the following: gcloud To bind a VPC using the Google Cloud CLI, use the gcloud vmware private-clouds management-dns-zone-bindings create command : gcloud vmware private-clouds management-dns-zone-bindings create DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE \ --vpc-network=projects/ VPC PROJECT ID /global/networks/ VPC NETWORK To bind a VMware Engine network, use the gcloud vmware private-clouds management-dns-zone-bindings create command : gcloud vmware private-clouds management-dns-zone-bindings create DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE \ --vmware-engine-network=projects/ PROJECT ID /locations/global/vmwareEngineNetworks/ NETWORK ID Replace the following: DNS ZONE BINDING ID : the DNS zone binding ID.
- API To bind a VPC using the VMware Engine API, make a POST request: POST "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /managementDnsZoneBindings?management dns zone binding id= DNS ZONE BINDING ID " -d '{ "vpc network": "projects/ VPC PROJECT ID /global/networks/ VPC NETWORK " }' To bind a VMware Engine network using the VMware Engine API, make a POST request: POST "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /managementDnsZoneBindings?management dns zone binding id= DNS ZONE BINDING ID " -d '{ "vmware engine network" : " NETWORK ID " }' Replace the following: PROJECT ID : the project for your private cloud.
- Edit management DNS zone binding You can edit a management DNS zone binding description using the Google Cloud CLI or VMware Engine API by doing the following: gcloud If you want to edit the description of a management DNS zone binding using the Google Cloud CLI, use the gcloud vmware private-clouds management-dns-zone-bindings update command : gcloud vmware private-clouds management-dns-zone-bindings update DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE \ --description=" DESCRIPTION " Replace the following: DNS ZONE BINDING ID : the DNS zone binding ID for this request.
- Describe management DNS zone binding You can get the description of a management DNS zone binding to verify updates using the Google Cloud CLI or VMware Engine API by doing the following: gcloud If you want to get the description of a management DNS zone binding using the Google Cloud CLI, use the gcloud vmware private-clouds management-dns-zone-bindings describe command : gcloud vmware private-clouds management-dns-zone-bindings describe DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE Replace the following: DNS ZONE BINDING ID : the DNS zone binding ID for this request.

### "VMware Engine stretched private clouds \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-stretched-private-cloud)
- Source ID: `site-docs-reference-required-4`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VMware Engine stretched private clouds A Google Cloud VMware Engine stretched private cloud is a private cloud that is stretched across two data zones and a witness zone, all within the same Google Cloud region.
- Configurations such as 4+3, therefore, are not allowed in Google Cloud VMware Engine stretched private clouds.
- Storage policies in stretched private clouds The management VMs of a stretched private cloud run on the first stretched cluster (for example, 'cluster 0').
- All clusters of a stretched private cloud are considered VMware Engine stretched clusters, including the primary cluster.

