---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.663Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Soft delete for private clouds"
feature_slug: "soft-delete-for-private-clouds"
latest_feature_date: "2025-02-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components"
  - "https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud"
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns"
keywords:
  - "soft"
  - "delete"
  - "private"
  - "clouds"
  - "retains"
  - "deleted"
  - "seven"
  - "days"
---

# Soft delete for private clouds

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Retains deleted private clouds for seven days to provide post-delete data protection.

## Extended Definition

Retains deleted private clouds for seven days to provide post-delete data protection.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components)
- [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns)

## Supporting Pages

### "Manage private cloud resources and activity \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Click Save . gcloud To delete a whole cluster using the Google Cloud CLI, use the gcloud vmware private-clouds clusters delete command : gcloud vmware private-clouds clusters delete CLUSTER ID \ --location= ZONE \ --private-cloud= PRIVATE CLOUD ID Replace the following: CLUSTER ID : the cluster ID for the cluster to update in this private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud API To delete a whole cluster using the VMware Engine API, make a DELETE request: curl -L -X DELETE -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters/ CLUSTER ID " Replace the following: PROJECT ID : the project ID for the private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud CLUSTER ID : the cluster ID for the cluster to update in this private cloud Python from google.api core import operation from google.cloud import vmwareengine v1 def delete cluster ( project id : str , zone : str , private cloud name : str , cluster name : str ) - > operation .
- DeleteClusterRequest () request . name = ( f "projects/ { project id } /locations/ { zone } /privateClouds/ { private cloud name } " f "/clusters/ { cluster name } " ) return client . delete cluster ( request ) List nodes To list the nodes of a particular private cloud's cluster and get information about multiple nodes or a specific node using the Google Cloud console, Google Cloud CLI or VMware Engine API, do the following.
- NodeTypeConfig () } request . cluster . node type configs [ "standard-72" ] . node count = node count request . update mask = "nodeTypeConfigs. .nodeCount" return client . update cluster ( request ) Delete a cluster To delete a whole cluster, do the following: Console In the Google Cloud console, go to the Private clouds page.
- For example: curl -L -X POST -H "Authorization: Bearer TOKEN " -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters?clusterId= CLUSTER ID " \ -d '{ "nodeTypeConfigs": { "standard-72": { "nodeCount": NODE COUNT } } }' Replace the following: CLUSTER ID : the cluster ID for the cluster that you are adding to the private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud NODE COUNT : the number of nodes to add Python Add the new cluster and give it a name. from google.api core import operation from google.cloud import vmwareengine v1 def create cluster ( project id : str , zone : str , private cloud name : str , cluster name : str , node count : int = 4 , ) - > operation .

### "Private cloud VMware components \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VMware Engine deletes private clouds that contain only 1 node after 60 days, along with any associated workload VMs and data.
- Google Cloud VMware Engine deploys private clouds with the following VMware stack components: VMware ESXi: hypervisor on dedicated nodes VMware vCenter: centralized management of private cloud vSphere environment VMware vSAN: hyper-converged, software-defined storage platform VMware NSX Data Center: network virtualization and security software VMware HCX: application migration and workload rebalancing across data centers and clouds You can retrieve generated sign-in credentials for VMware stack components from the private cloud details page.
- The first cluster cannot be deleted to shrink the private cloud.
- For example, you won't be able to use vSphere Distributed Resource Scheduler (DRS) or High Availability (HA). vSphere cluster limits The following table describes vSphere cluster limits in standard private clouds that meet SLA requirements: Resource Limit Minimum number of nodes to create a private cloud (first cluster) 3 Minimum number of nodes to create a cluster 3 Maximum number of nodes per cluster 32 Maximum number of nodes per private cloud 96 Maximum number of clusters per private cloud 21 The following table describes vSphere cluster limits in stretched private clouds: Resource Limit Minimum number of nodes to create a stretched private cloud (first cluster) 6 Minimum number of nodes to create a stretched cluster 6 Maximum number of nodes per stretched cluster 30 Maximum number of nodes per stretched private cloud 96 Maximum number of clusters per stretched private cloud 16 Guest operating system support You can install a VM with any guest operating system supported by VMware for the ESXi version in your private cloud.

### "Configure Management DNS for private clouds \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To delete a management DNS zone binding using the Google Cloud CLI or VMware Engine API, do the following: gcloud If you want to delete a management DNS zone binding using the Google Cloud CLI, use the gcloud vmware private-clouds management-dns-zone-bindings delete command : gcloud vmware private-clouds management-dns-zone-bindings delete DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE Replace the following: DNS ZONE BINDING ID : the DNS zone binding ID for this request.
- API If you want to delete a management DNS zone binding using the VMware Engine API, make a DELETE request: DELETE "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /managementDnsZoneBindings/ DNS ZONE BINDING ID " Replace the following: PROJECT ID : the project for this request.
- To create a new private cloud management DNS zone binding by binding a VPC or a VMware Engine network using the Google Cloud CLI or VMware Engine API, do the following: gcloud To bind a VPC using the Google Cloud CLI, use the gcloud vmware private-clouds management-dns-zone-bindings create command : gcloud vmware private-clouds management-dns-zone-bindings create DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE \ --vpc-network=projects/ VPC PROJECT ID /global/networks/ VPC NETWORK To bind a VMware Engine network, use the gcloud vmware private-clouds management-dns-zone-bindings create command : gcloud vmware private-clouds management-dns-zone-bindings create DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE \ --vmware-engine-network=projects/ PROJECT ID /locations/global/vmwareEngineNetworks/ NETWORK ID Replace the following: DNS ZONE BINDING ID : the DNS zone binding ID.
- API To bind a VPC using the VMware Engine API, make a POST request: POST "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /managementDnsZoneBindings?management dns zone binding id= DNS ZONE BINDING ID " -d '{ "vpc network": "projects/ VPC PROJECT ID /global/networks/ VPC NETWORK " }' To bind a VMware Engine network using the VMware Engine API, make a POST request: POST "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /managementDnsZoneBindings?management dns zone binding id= DNS ZONE BINDING ID " -d '{ "vmware engine network" : " NETWORK ID " }' Replace the following: PROJECT ID : the project for your private cloud.

