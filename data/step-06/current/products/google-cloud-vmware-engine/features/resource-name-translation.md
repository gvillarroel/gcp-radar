---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.705Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Resource name translation"
feature_slug: "resource-name-translation"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/known-issues"
  - "https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient"
keywords:
  - "resource"
  - "name"
  - "translation"
  - "standardizes"
  - "private"
  - "names"
  - "into"
  - "compatible"
---

# Resource name translation

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Resource name translation standardizes private cloud resource names into a Google Cloud-compatible format and is required for gcloud CLI or API access after September 2023.

## Extended Definition

Resource name translation standardizes private cloud resource names into a Google Cloud-compatible format and is required for gcloud CLI or API access after September 2023.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/known-issues](https://docs.cloud.google.com/vmware-engine/docs/known-issues)
- [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)

## Supporting Pages

### Known issues \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vmware-engine/docs/known-issues](https://docs.cloud.google.com/vmware-engine/docs/known-issues)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Private cloud resource name translation error If you are running VMware Engine Horizon (VDI) on Google Cloud VMware Engine, you may encounter errors after changing your private cloud resource naming to meet the standards for Google Cloud CLI and VMware Engine API.
- The following example error occurs when changing private cloud resource names without editing properly provisioning Horizon Desktop Pools: Error during Provisioning Cloning of VM Desktop-UK-005 has failed.
- Once the private cloud resource name change is complete, complete the following steps: Edit each Desktop Pool and reconfigure the following settings on the vCenter Settings tab for both Full Clone and Instant Clone Pools: Resource Pool Datastore Note: Failure to edit these settings for both Full Clone and Instant Clone Pools will result in a provisioning error.
- No datastores available for the pool: {}ic-pool-1 To resolve this issue, complete the following steps before your scheduled name translation date: Access the VMware Horizon dashboard.

### "Manage private cloud resources and activity \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Click Save . gcloud To delete a whole cluster using the Google Cloud CLI, use the gcloud vmware private-clouds clusters delete command : gcloud vmware private-clouds clusters delete CLUSTER ID \ --location= ZONE \ --private-cloud= PRIVATE CLOUD ID Replace the following: CLUSTER ID : the cluster ID for the cluster to update in this private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud API To delete a whole cluster using the VMware Engine API, make a DELETE request: curl -L -X DELETE -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters/ CLUSTER ID " Replace the following: PROJECT ID : the project ID for the private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud CLUSTER ID : the cluster ID for the cluster to update in this private cloud Python from google.api core import operation from google.cloud import vmwareengine v1 def delete cluster ( project id : str , zone : str , private cloud name : str , cluster name : str ) - > operation .
- For example: curl -L -X POST -H "Authorization: Bearer TOKEN " -H "Content-Type: application/json" \ "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /clusters?clusterId= CLUSTER ID " \ -d '{ "nodeTypeConfigs": { "standard-72": { "nodeCount": NODE COUNT } } }' Replace the following: CLUSTER ID : the cluster ID for the cluster that you are adding to the private cloud ZONE : the zone for the private cloud PRIVATE CLOUD ID : the private cloud ID for the private cloud NODE COUNT : the number of nodes to add Python Add the new cluster and give it a name. from google.api core import operation from google.cloud import vmwareengine v1 def create cluster ( project id : str , zone : str , private cloud name : str , cluster name : str , node count : int = 4 , ) - > operation .
- List the clusters by entering the gcloud vmware private-clouds clusters list command : gcloud vmware private-clouds clusters list \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE Replace the following: PRIVATE CLOUD ID : the name for the private cloud ZONE : the zone for the private cloud Update the cluster by running the gcloud vmware private-clouds clusters update command : gcloud vmware private-clouds clusters update CLUSTER ID \ --location= ZONE \ --private-cloud= PRIVATE CLOUD ID \ --update-nodes-config=type= NODE TYPE ,count= NODE COUNT Replace the following: CLUSTER ID : the cluster ID to update in this private cloud.
- All nodes in the cluster are listed in the cluster nodes table. gcloud To list the nodes of one or multiple private clouds using the Google Cloud CLI, do the following: List all nodes that are bound to a particular private cloud's PRIVATE CLOUD ID by running the gcloud vmware private-clouds clusters node list command : gcloud vmware private-clouds clusters node list \ --project= PROJECT ID \ --location= ZONE \ --private-cloud= PRIVATE CLOUD ID \ --cluster= CLUSTER ID Replace the following: PROJECT ID : the project name for this request.

### "Class VmwareEngineAsyncClient (1.11.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- Source ID: `site-python-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- This identifier must be unique among private connection resources within the parent and becomes the final token in the name URI.
- Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource names .
- Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource names .
- Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource names .

