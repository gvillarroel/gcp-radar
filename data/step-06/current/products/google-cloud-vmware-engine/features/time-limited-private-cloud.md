---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.679Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Time-limited private cloud"
feature_slug: "time-limited-private-cloud"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient"
keywords:
  - "time"
  - "limited"
  - "private"
  - "single"
  - "node"
  - "clouds"
  - "can"
  - "managed"
---

# Time-limited private cloud

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Time-limited single-node private clouds can be managed with Terraform resources.

## Extended Definition

Time-limited single-node private clouds can be managed with Terraform resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)

## Supporting Pages

### "Manage private cloud resources and activity \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: curl -L -X POST -H "Authorization: Bearer TOKEN " -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters?clusterId= CLUSTER ID " \ -d '{ "nodeTypeConfigs": { "standard-72": { "nodeCount": NODE COUNT } } }' Replace the following: CLUSTER ID : the cluster ID for the cluster that you are adding to the private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud NODE COUNT : the number of nodes to add Python Add the new cluster and give it a name. from google.api core import operation from google.cloud import vmwareengine v1 def create cluster ( project id : str , zone : str , private cloud name : str , cluster name : str , node count : int = 4 , ) - > operation .
- The following example creates a new cluster of standard-72 node type. curl -L -X POST -H "Authorization: Bearer TOKEN " -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters?clusterId= CLUSTER ID " \ -d '{ "nodeTypeConfigs": { "standard-72": { "nodeCount": NODE COUNT , "customCoreCount": CORE COUNT } } }' Replace the following: PROJECT ID : the project ID for the private cloud CLUSTER ID : the cluster ID for the cluster that you are adding to the private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud NODE COUNT : the number of nodes to add CORES COUNT : the number of custom cores to add Python Add the new cluster and specify the core count configuration.
- Click Create . gcloud Add the new cluster and specify the core count configuration by running the gcloud vmware private-clouds clusters create command : The following example creates a new cluster with a standard-72 node type. gcloud vmware private-clouds clusters create CLUSTER ID \ --location= ZONE \ --private-cloud= PRIVATE CLOUD ID \ --node-type-config=type=standard-72,count= NODE COUNT ,custom-core-count= CORE COUNT Replace the following: CLUSTER ID : the cluster ID for the cluster that you are adding to the private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud NODE COUNT : the number of nodes to add CORES COUNT : the number of custom cores to add API Add the new cluster and specify the core count configuration by making a POST request.
- For example, the following updates the cluster to standard-72 node type. curl -L -X PATCH -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters/ CLUSTER ID ?updateMask=node type configs. .node count" \ -d '{ "nodeTypeConfigs": { "standard-72" : { "nodeCount": NODE COUNT } } }' Replace the following: PROJECT ID : the project ID for this request ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud CLUSTER ID : the cluster ID for the cluster to update in this private cloud NODE COUNT : the number of nodes to add Python The cluster update method lets you change the total node count for the cluster.

### "About VMware Engine private clouds \_|\_ Google Cloud VMware Engine \_|\_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/concepts-private-cloud)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following are common use cases for a single-node private cloud: Proof of concept: evaluating VMware Engine and its capabilities Disaster recovery testing: deploying your application from recent backups to periodically validate disaster recovery preparedness Application upgrade testing: test and validate application component upgrades before upgrading your application in production VMware Engine permits single-node private clouds without a time limit.
- The following table describes vSphere cluster limits in private clouds that meet SLA requirements: Resource Limit Minimum number of nodes to create a private cloud (first cluster) 3 Minimum number of nodes to create a cluster 3 Maximum number of nodes per cluster 32 Maximum number of nodes per private cloud 96 Maximum number of clusters per private cloud 32 Private cloud and cluster limitations The following limitations apply to private clouds and clusters: You can create private clouds with mixed node types, combining ve1 and ve2 nodes in a single private cloud.
- Private clouds are also designed to eliminate single points of failure: Clusters of ESXi hosts are configured with vSphere High Availability (HA) and sized to have at least one spare node for resilience. vSphere HA protects against node and network failures. vSAN provides redundant primary storage. vSAN requires at least three nodes in a private cloud to provide protection against a single failure.
- You can connect the private cloud to your on-premises environment using the following connections: Cloud VPN Cloud Interconnect Point-to-site VPN Single-node private clouds For pilot testing and proofs of concept with VMware Engine, you can create a private cloud that contains only a single node and cluster in any region where VMware Engine is available.

### "Class VmwareEngineAsyncClient (1.11.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- Source ID: `site-python-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: projects/{project}/locations/{location}/privateClouds/{private cloud}/clusters/{cluster}/nodes/{node} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Private clouds of type STANDARD and TIME LIMITED are zonal resources, STRETCHED private clouds are regional. revoke dns bind permission revoke dns bind permission ( request : typing .
- Private clouds of type STANDARD and TIME LIMITED are zonal resources, STRETCHED private clouds are regional. create private connection create private connection ( request : typing .
- Private clouds of type STANDARD and TIME LIMITED are zonal resources, STRETCHED private clouds are regional. delete private connection delete private connection ( request : typing .

