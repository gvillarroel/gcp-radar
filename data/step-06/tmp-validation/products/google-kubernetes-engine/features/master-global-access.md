---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.417Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Master global access"
feature_slug: "master-global-access"
latest_feature_date: "2020-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/private-cluster-bastion"
keywords:
  - "master"
  - "reach"
  - "global"
  - "private"
  - "access"
  - "cluster"
  - "lets"
---

# Master global access

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Master global access lets you reach a private cluster's private endpoint from any Google Cloud region or on-premises environment.

## Extended Definition

Master global access lets you reach a private cluster's private endpoint from any Google Cloud region or on-premises environment.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/private-cluster-bastion](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/private-cluster-bastion)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- PrivateClusterConfig JSON representation { "enablePrivateNodes" : boolean , "enablePrivateEndpoint" : boolean , "masterIpv4CidrBlock" : string , "privateEndpoint" : string , "publicEndpoint" : string , "peeringName" : string , "masterGlobalAccessConfig" : { object ( PrivateClusterMasterGlobalAccessConfig ) } , "privateEndpointSubnetwork" : string } Fields enablePrivateNodes (deprecated) boolean This item is deprecated!
- The peering name in the customer VPC used by this cluster. masterGlobalAccessConfig (deprecated) object ( PrivateClusterMasterGlobalAccessConfig ) This item is deprecated!
- PrivateClusterMasterGlobalAccessConfig JSON representation { "enabled" : boolean } Fields enabled boolean Whenever master is accessible globally or not.
- It is invalid to specify both PrivateClusterMasterGlobalAccessConfig.enabled and this field at the same time.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- PrivateClusterConfig JSON representation { "enablePrivateNodes" : boolean , "enablePrivateEndpoint" : boolean , "masterIpv4CidrBlock" : string , "privateEndpoint" : string , "publicEndpoint" : string , "peeringName" : string , "masterGlobalAccessConfig" : { object ( PrivateClusterMasterGlobalAccessConfig ) } , "privateEndpointSubnetwork" : string } Fields enablePrivateNodes (deprecated) boolean This item is deprecated!
- The peering name in the customer VPC used by this cluster. masterGlobalAccessConfig (deprecated) object ( PrivateClusterMasterGlobalAccessConfig ) This item is deprecated!
- PrivateClusterMasterGlobalAccessConfig JSON representation { "enabled" : boolean } Fields enabled boolean Whenever master is accessible globally or not.
- It is invalid to specify both PrivateClusterMasterGlobalAccessConfig.enabled and this field at the same time.

### "Remotely access a private cluster using a bastion host \_|\_ Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/private-cluster-bastion](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/private-cluster-bastion)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can do this using the Google Cloud CLI or the Google Cloud console. gcloud Run the following command: gcloud container clusters create-auto CLUSTER NAME \ --location = CONTROL PLANE LOCATION \ --create-subnetwork = name = SUBNET NAME \ --enable-master-authorized-networks \ --enable-private-nodes \ --enable-private-endpoint Replace the following: CLUSTER NAME : the name of the new cluster.
- To initialize the gcloud CLI, run the following command: gcloud init After initializing the gcloud CLI, update it and install the required components: gcloud components update gcloud components install alpha beta Create a private cluster Create a new private cluster with no client access to the public endpoint.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Guides Send feedback Remotely access a private cluster using a bastion host Stay organized with collections Save and categorize content based on your preferences.
- This tutorial shows you how to access a private cluster in Google Kubernetes Engine (GKE) over the internet by using a bastion host .

