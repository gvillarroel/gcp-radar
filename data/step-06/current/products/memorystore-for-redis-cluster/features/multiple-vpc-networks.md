---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.726Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "Multiple VPC networks"
feature_slug: "multiple-vpc-networks"
latest_feature_date: "2024-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-multiple-vpc-networking"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/networking"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/create-instances"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster"
keywords:
  - "multiple"
  - "vpc"
  - "networks"
  - "the"
  - "supports"
---

# Multiple VPC networks

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

The service supports multiple VPC networks.

## Extended Definition

The service supports multiple VPC networks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/about-multiple-vpc-networking](https://docs.cloud.google.com/memorystore/docs/cluster/about-multiple-vpc-networking)
- [https://docs.cloud.google.com/memorystore/docs/cluster/networking](https://docs.cloud.google.com/memorystore/docs/cluster/networking)
- [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)
- [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster)

## Supporting Pages

### "About multiple VPC networking \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-multiple-vpc-networking](https://docs.cloud.google.com/memorystore/docs/cluster/about-multiple-vpc-networking)
- Source ID: `site-iam-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations You can have between 1 and 20 VPC networks connected to a single Memorystore instance, and no more than 40 Private Service Connect connections in total To delete a Memorystore instance connected with user-registered Private Service Connect connections, you must delete and deregister the connections first.
- For a tutorial on setting up multiple VPCs for instances provisioned with automatically registered connections, see Configure an existing instance to use multiple VPC networks .
- For a tutorial on setting up multiple VPCs using only user-registered connections, see Provision a new instance to use multiple VPC networks .
- Setting up networking for multiple VPC networks requires Memorystore users to configure and register up Private Service Connect connections.

### Networking \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/networking](https://docs.cloud.google.com/memorystore/docs/cluster/networking)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about deploying Private Service Connect endpoints in Google Cloud projects other than the project that hosts the cluster, see Set up multiple VPC networks using user-registered Private Service Connect connections and Set up multiple VPC networks for instances provisioned with automatically registered Private Service Connect connections .
- To connect to Memorystore for Redis Cluster across multiple VPC networks, do one of the following: If the cluster has automatically registered Private Service Connect connections , then set up connectivity from the VPC networks to the cluster.
- The page also describes the following information about networking: Networking setup guidance Supported networking architectures Frequently asked questions Note: Memorystore for Redis Cluster also supports networking for multiple VPCs.
- If the cluster isn't provisioned with automatically registered Private Service Connect connections, then set up multiple VPC networks by using user-registered VPC connections .

### "Create instances \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- For example: gcloud alpha redis clusters create my-instance \ --region=us-central1 \ --network=projects/my-project-335118/global/networks/default \ --replica-count=2 \ --node-type=redis-highmem-medium \ --shard-count=8 By default, in-transit encryption is disabled, and the authorized network is default .
- It must use the format: projects/NETWORK PROJECT ID/global/networks/NETWORK ID .
- It must use the format: projects/NETWORK PROJECT ID/global/networks/NETWORK ID .
- Enable the Memorystore for Redis API Memorystore for Redis Enable the Network Connectivity API Network Connectivity API Enable the Service Consumer Management API Service Consumer Management API Other prerequisites You must have one of these IAM roles in the Google Cloud project you're using: roles/redis.admin (the Memorystore Admin predefined IAM role) roles/owner (the Owner basic IAM role) roles/editor (the Editor basic IAM role) Set up networking Read the Networking page to determine if you need to set up a service connection policy.

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis Cluster\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster)
- Source ID: `site-api-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- To get the latest status of a PSC connection, follow https://cloud.google.com/vpc/docs/configure-private-service-connect-services#endpoint-details . connectionType enum ( ConnectionType ) Output only.
- The consumer network where the IP address resides, in the form of projects/{project id}/global/networks/{network id}. serviceAttachment string Output only.
- The consumer network where the IP address resides, in the form of projects/{project id}/global/networks/{network id}. serviceAttachment string Required.
- The network where the IP address of the discovery endpoint will be reserved, in the form of projects/{network project}/global/networks/{network id}.

