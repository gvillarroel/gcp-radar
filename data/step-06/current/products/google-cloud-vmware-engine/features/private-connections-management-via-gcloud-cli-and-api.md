---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.699Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Private Connections management via gcloud CLI and API"
feature_slug: "private-connections-management-via-gcloud-cli-and-api"
latest_feature_date: "2023-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns"
  - "https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud"
  - "https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management"
keywords:
  - "private"
  - "connections"
  - "management"
  - "via"
  - "gcloud"
  - "cli"
  - "lets"
  - "you"
---

# Private Connections management via gcloud CLI and API

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Private Connections management via gcloud CLI and API lets you create, update, and delete private connections programmatically.

## Extended Definition

Private Connections management via gcloud CLI and API lets you create, update, and delete private connections programmatically.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns)
- [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- [https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management](https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management)

## Supporting Pages

### "Configure Management DNS for private clouds \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a new private cloud management DNS zone binding by binding a VPC or a VMware Engine network using the Google Cloud CLI or VMware Engine API, do the following: gcloud To bind a VPC using the Google Cloud CLI, use the gcloud vmware private-clouds management-dns-zone-bindings create command : gcloud vmware private-clouds management-dns-zone-bindings create DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE \ --vpc-network=projects/ VPC PROJECT ID /global/networks/ VPC NETWORK To bind a VMware Engine network, use the gcloud vmware private-clouds management-dns-zone-bindings create command : gcloud vmware private-clouds management-dns-zone-bindings create DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE \ --vmware-engine-network=projects/ PROJECT ID /locations/global/vmwareEngineNetworks/ NETWORK ID Replace the following: DNS ZONE BINDING ID : the DNS zone binding ID.
- Edit management DNS zone binding You can edit a management DNS zone binding description using the Google Cloud CLI or VMware Engine API by doing the following: gcloud If you want to edit the description of a management DNS zone binding using the Google Cloud CLI, use the gcloud vmware private-clouds management-dns-zone-bindings update command : gcloud vmware private-clouds management-dns-zone-bindings update DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE \ --description=" DESCRIPTION " Replace the following: DNS ZONE BINDING ID : the DNS zone binding ID for this request.
- Describe management DNS zone binding You can get the description of a management DNS zone binding to verify updates using the Google Cloud CLI or VMware Engine API by doing the following: gcloud If you want to get the description of a management DNS zone binding using the Google Cloud CLI, use the gcloud vmware private-clouds management-dns-zone-bindings describe command : gcloud vmware private-clouds management-dns-zone-bindings describe DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE Replace the following: DNS ZONE BINDING ID : the DNS zone binding ID for this request.
- To delete a management DNS zone binding using the Google Cloud CLI or VMware Engine API, do the following: gcloud If you want to delete a management DNS zone binding using the Google Cloud CLI, use the gcloud vmware private-clouds management-dns-zone-bindings delete command : gcloud vmware private-clouds management-dns-zone-bindings delete DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE Replace the following: DNS ZONE BINDING ID : the DNS zone binding ID for this request.

### "Manage private cloud resources and activity \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Click Save . gcloud To delete a whole cluster using the Google Cloud CLI, use the gcloud vmware private-clouds clusters delete command : gcloud vmware private-clouds clusters delete CLUSTER ID \ --location= ZONE \ --private-cloud= PRIVATE CLOUD ID Replace the following: CLUSTER ID : the cluster ID for the cluster to update in this private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud API To delete a whole cluster using the VMware Engine API, make a DELETE request: curl -L -X DELETE -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters/ CLUSTER ID " Replace the following: PROJECT ID : the project ID for the private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud CLUSTER ID : the cluster ID for the cluster to update in this private cloud Python from google.api core import operation from google.cloud import vmwareengine v1 def delete cluster ( project id : str , zone : str , private cloud name : str , cluster name : str ) - > operation .
- Click Create . gcloud Add the new cluster and specify the core count configuration by running the gcloud vmware private-clouds clusters create command : The following example creates a new cluster with a standard-72 node type. gcloud vmware private-clouds clusters create CLUSTER ID \ --location= ZONE \ --private-cloud= PRIVATE CLOUD ID \ --node-type-config=type=standard-72,count= NODE COUNT ,custom-core-count= CORE COUNT Replace the following: CLUSTER ID : the cluster ID for the cluster that you are adding to the private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud NODE COUNT : the number of nodes to add CORES COUNT : the number of custom cores to add API Add the new cluster and specify the core count configuration by making a POST request.
- For example, the following updates the cluster to standard-72 node type. curl -L -X PATCH -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters/ CLUSTER ID ?updateMask=node type configs. .node count" \ -d '{ "nodeTypeConfigs": { "standard-72" : { "nodeCount": NODE COUNT } } }' Replace the following: PROJECT ID : the project ID for this request ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud CLUSTER ID : the cluster ID for the cluster to update in this private cloud NODE COUNT : the number of nodes to add Python The cluster update method lets you change the total node count for the cluster.
- List the clusters by entering the gcloud vmware private-clouds clusters list command : gcloud vmware private-clouds clusters list \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE Replace the following: PRIVATE CLOUD ID : the name for the private cloud ZONE : the zone for the private cloud Update the cluster by running the gcloud vmware private-clouds clusters update command : gcloud vmware private-clouds clusters update CLUSTER ID \ --location= ZONE \ --private-cloud= PRIVATE CLOUD ID \ --update-nodes-config=type= NODE TYPE ,count= NODE COUNT Replace the following: CLUSTER ID : the cluster ID to update in this private cloud.

### "Accessing management appliances \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management](https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management)
- Source ID: `site-docs-reference-required-3`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the prompt that appears and contains your access credentials, click Reset Password . gcloud To reset the password to a management appliance using the Google Cloud CLI, do the following: Reset vCenter user credentials by running the gcloud vmware private-clouds vcenter credentials reset command : gcloud vmware private-clouds vcenter credentials reset \ --private-cloud= PRIVATE CLOUD ID \ --project= PROJECT ID \ --location= REGION Reset NSX user credentials by running the gcloud vmware private-clouds nsx credentials reset command : gcloud vmware private-clouds nsx credentials reset \ --private-cloud= PRIVATE CLOUD ID \ --project= PROJECT ID \ --location= REGION Replace the following: PRIVATE CLOUD ID : the private cloud private cloud ID for this request.
- Copy the credentials for vCenter Server or NSX Manager from the prompt that appears. gcloud To get the password to a management appliance using the Google Cloud CLI, do the following: To show vCenter user credentials, run the gcloud vmware private-clouds vcenter credentials describe command : gcloud vmware private-clouds vcenter credentials describe \ --private-cloud= PRIVATE CLOUD ID \ --project= PROJECT ID \ --location= REGION To show NSX user credentials, run the gcloud vmware private-clouds nsx credentials describe command : gcloud vmware private-clouds nsx credentials describe \ --private-cloud= PRIVATE CLOUD ID \ --project= PROJECT ID \ --location= REGION Replace the following: PRIVATE CLOUD ID : the private cloud private cloud ID for this request.
- Click the URL column for vCenter Server or NSX Manager. gcloud To get the connection details to a management appliance using the Google Cloud CLI, do the following: To show management appliance URLs, run the gcloud vmware private-clouds describe command : gcloud vmware private-clouds describe \ --private-cloud= PRIVATE CLOUD ID \ --project= PROJECT ID \ --location= REGION Replace the following: PRIVATE CLOUD ID : the private cloud private cloud ID for this request.
- Reset access credentials If you misplace the credentials to vCenter Server or NSX Manager, you can reset the password to your management appliances for your private cloud using the Google Cloud CLI or Google Cloud VMware Engine by doing the following: Important: If you change the password that VMware Engine generates for either vCenter Server or NSX Manager, those changes won't be reflected in the Google Cloud console.

