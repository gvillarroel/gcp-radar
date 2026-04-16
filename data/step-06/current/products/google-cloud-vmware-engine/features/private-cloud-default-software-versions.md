---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.719Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Private cloud default software versions"
feature_slug: "private-cloud-default-software-versions"
latest_feature_date: "2021-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components"
  - "https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud"
keywords:
  - "private"
  - "default"
  - "software"
  - "versions"
  - "clouds"
  - "deploy"
  - "vsphere"
  - "update"
---

# Private cloud default software versions

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

New private clouds deploy with vSphere 7.0 Update 2 and NSX-T 3.1.2, and existing clouds are upgraded over time.

## Extended Definition

New private clouds deploy with vSphere 7.0 Update 2 and NSX-T 3.1.2, and existing clouds are upgraded over time.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components)
- [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)

## Supporting Pages

### "Private cloud VMware components \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud VMware Engine deploys private clouds with the following VMware stack components: VMware ESXi: hypervisor on dedicated nodes VMware vCenter: centralized management of private cloud vSphere environment VMware vSAN: hyper-converged, software-defined storage platform VMware NSX Data Center: network virtualization and security software VMware HCX: application migration and workload rebalancing across data centers and clouds You can retrieve generated sign-in credentials for VMware stack components from the private cloud details page.
- VMware component versions A private cloud VMware stack has the following software versions: Component Version Licensed version ESXi 8.0 Update 3f VMware Cloud Foundation vCenter 8.0 Update 3e VMware Cloud Foundation vSAN 8.0 Update 3 VMware Cloud Foundation NSX Data Center 4.2.2.1 VMware Cloud Foundation HCX 4.10.3 VMware Cloud Foundation Aria 8.16 VMware Cloud Foundation 1 VMware Engine deploys a version of HCX made available to Google Cloud by VMware.
- For example, you won't be able to use vSphere Distributed Resource Scheduler (DRS) or High Availability (HA). vSphere cluster limits The following table describes vSphere cluster limits in standard private clouds that meet SLA requirements: Resource Limit Minimum number of nodes to create a private cloud (first cluster) 3 Minimum number of nodes to create a cluster 3 Maximum number of nodes per cluster 32 Maximum number of nodes per private cloud 96 Maximum number of clusters per private cloud 21 The following table describes vSphere cluster limits in stretched private clouds: Resource Limit Minimum number of nodes to create a stretched private cloud (first cluster) 6 Minimum number of nodes to create a stretched cluster 6 Maximum number of nodes per stretched cluster 30 Maximum number of nodes per stretched private cloud 96 Maximum number of clusters per stretched private cloud 16 Guest operating system support You can install a VM with any guest operating system supported by VMware for the ESXi version in your private cloud.
- The following table shows the default vSAN storage policy parameters: FTT Failure tolerance method Number of nodes in vSphere cluster 1 RAID 1 (mirroring) Creates 2 copies 3 and 4 nodes 2 RAID 1 (mirroring) Creates 3 copies 5 to 32 nodes Supported vSAN storage policies The following table shows the supported vSAN storage policies and the minimum number of nodes required to enable the policy: FTT Failure tolerance method Minimum number of nodes required in vSphere cluster 1 RAID 1 (mirroring) 3 1 RAID 5 (erasure coding) 4 2 RAID 1 (mirroring) 5 2 RAID 6 (erasure coding) 6 3 RAID 1 (mirroring) 7 NSX Data Center NSX Data Center provides network virtualization, micro segmentation, and network security capabilities on your private cloud.

### "Manage private cloud resources and activity \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Save . gcloud To delete a whole cluster using the Google Cloud CLI, use the gcloud vmware private-clouds clusters delete command : gcloud vmware private-clouds clusters delete CLUSTER ID \ --location= ZONE \ --private-cloud= PRIVATE CLOUD ID Replace the following: CLUSTER ID : the cluster ID for the cluster to update in this private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud API To delete a whole cluster using the VMware Engine API, make a DELETE request: curl -L -X DELETE -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters/ CLUSTER ID " Replace the following: PROJECT ID : the project ID for the private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud CLUSTER ID : the cluster ID for the cluster to update in this private cloud Python from google.api core import operation from google.cloud import vmwareengine v1 def delete cluster ( project id : str , zone : str , private cloud name : str , cluster name : str ) - > operation .
- For example, the following updates the cluster to standard-72 node type. curl -L -X PATCH -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters/ CLUSTER ID ?updateMask=node type configs. .node count" \ -d '{ "nodeTypeConfigs": { "standard-72" : { "nodeCount": NODE COUNT } } }' Replace the following: PROJECT ID : the project ID for this request ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud CLUSTER ID : the cluster ID for the cluster to update in this private cloud NODE COUNT : the number of nodes to add Python The cluster update method lets you change the total node count for the cluster.
- API To remove a node from a private cloud using the VMware Engine API, make a PATCH request: curl -L -X PATCH -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters/ CLUSTER ID ?update mask=node type configs. .node count" \ -d '{ "nodeTypeConfigs": { "standard-72" : { "nodeCount": NODE COUNT } } }' Replace the following: CLUSTER ID : the cluster ID for the cluster to update in this private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud NODE COUNT : the new node count.
- List the clusters by entering the gcloud vmware private-clouds clusters list command : gcloud vmware private-clouds clusters list \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE Replace the following: PRIVATE CLOUD ID : the name for the private cloud ZONE : the zone for the private cloud Update the cluster by running the gcloud vmware private-clouds clusters update command : gcloud vmware private-clouds clusters update CLUSTER ID \ --location= ZONE \ --private-cloud= PRIVATE CLOUD ID \ --update-nodes-config=type= NODE TYPE ,count= NODE COUNT Replace the following: CLUSTER ID : the cluster ID to update in this private cloud.

### "About VMware Engine private clouds \_|\_ Google Cloud VMware Engine \_|\_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You must delete and recreate single-node private clouds to obtain the latest software and security updates.
- The following table describes vSphere cluster limits in private clouds that meet SLA requirements: Resource Limit Minimum number of nodes to create a private cloud (first cluster) 3 Minimum number of nodes to create a cluster 3 Maximum number of nodes per cluster 32 Maximum number of nodes per private cloud 96 Maximum number of clusters per private cloud 32 Private cloud and cluster limitations The following limitations apply to private clouds and clusters: You can create private clouds with mixed node types, combining ve1 and ve2 nodes in a single private cloud.
- The following are common use cases for a single-node private cloud: Proof of concept: evaluating VMware Engine and its capabilities Disaster recovery testing: deploying your application from recent backups to periodically validate disaster recovery preparedness Application upgrade testing: test and validate application component upgrades before upgrading your application in production VMware Engine permits single-node private clouds without a time limit.
- Private clouds are also designed to eliminate single points of failure: Clusters of ESXi hosts are configured with vSphere High Availability (HA) and sized to have at least one spare node for resilience. vSphere HA protects against node and network failures. vSAN provides redundant primary storage. vSAN requires at least three nodes in a private cloud to provide protection against a single failure.

