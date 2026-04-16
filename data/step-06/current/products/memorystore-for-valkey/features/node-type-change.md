---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.269Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "Node type change"
feature_slug: "node-type-change"
latest_feature_date: "2025-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/create-instances"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/manage-iam-auth"
keywords:
  - "node"
  - "type"
  - "change"
  - "lets"
  - "you"
  - "the"
  - "of"
  - "an"
---

# Node type change

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

Lets you change the node type of an existing Memorystore for Valkey instance after creation.

## Extended Definition

Lets you change the node type of an existing Memorystore for Valkey instance after creation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification](https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification)
- [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances)
- [https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity](https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity)
- [https://docs.cloud.google.com/memorystore/docs/valkey/manage-iam-auth](https://docs.cloud.google.com/memorystore/docs/valkey/manage-iam-auth)

## Supporting Pages

### "Instance and node specification \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification](https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification)
- Source ID: `site-docs-root`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The standard-small node type lets you provision small instances, and grow your instance by smaller increments at potentially lower costs than other node types. standard-small also offers the advantage of distributing your keyspace across more nodes with a higher total vCPU count.
- Node type specification The node capacity and characteristics depend on which of the four available node types you choose: Keyspace capacity and reserved overhead Node type Default writable keyspace capacity Total node capacity shared-core-nano 1.12 GB 1.4 GB standard-small 5.2 GB 6.5 GB highmem-medium 10.4 GB 13 GB highmem-xlarge 46.4 GB 58 GB Memorystore automatically sets aside a portion of your instance capacity to help prevent Out Of Memory (OOM) errors.
- Scale an instance As part of creating a Memorystore for Valkey instance, you choose a node type for the instance and specify the number of shards for the instance.
- For more information about changing the capacity of your instance by scaling the node type or the shard count, see Scale instance capacity .

### Create instances \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- Click Create instance . gcloud To create a single-zone instance, run the create command: gcloud memorystore instances create INSTANCE \ --location= REGION ID \ --endpoints='[{"connections": [{"pscAutoConnection": {"network": "projects/ PROJECT ID /global/networks/ NETWORK ID ", "projectId": " PROJECT ID "}}]}]' \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --engine-version= ENGINE VERSION \ --shard-count= SHARD COUNT \ --zone-distribution-config-mode= ZONE DISTRIBUTION CONFIG MODE \ --zone-distribution-config= ZONE \ --mode= MODE Replace the following: INSTANCE is the ID of the Memorystore for Valkey instance you're creating.
- Click Create instance . gcloud To create a Memorystore for Valkey instance, run the create command: gcloud memorystore instances create INSTANCE \ --location= REGION ID \ --endpoints='[{"connections": [{"pscAutoConnection": {"network": "projects/ PROJECT ID /global/networks/ NETWORK ID ", "projectId": " PROJECT ID "}}]}]' \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --engine-version= ENGINE VERSION \ --shard-count= SHARD COUNT \ --mode= MODE Replace the following: INSTANCE is the ID of the Memorystore for Valkey instance you're creating.
- In the Node Type section, select one of the following node types : Shared-Core ( shared-core-nano ) Small ( standard-small ) Medium ( highmem-medium ) X-Large ( highmem-xlarge ) In the Cluster Mode section, specify whether you want a Cluster Mode Enabled or Cluster Mode Disabled instance.
- In the Node Type section, select one of the following node types : Shared-Core ( shared-core-nano ) Small ( standard-small ) Medium ( highmem-medium ) X-Large ( highmem-xlarge ) In the Cluster Mode section, specify whether you want a Cluster Mode Enabled or Cluster Mode Disabled instance.

### "About scaling instance capacity \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity](https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity)
- Source ID: `site-iam-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Failure scenarios If you encounter an error during the scaling operation, then it's likely because of one of the following scenarios: You want to update the shard count for your instance, but you don't have enough free memory for the shared-core-nano node type for your instance.
- Important: If you want to scale the node type for your instance down, and you haven't overwritten the default settings for the original node type, then Memorystore for Valkey modifies the default settings to those of the scaled node type.
- Also, the impact of scaling your instance vertically by changing the node type is similar to what happens with a maintenance operation.
- You can change the node type for your instance.

### "Manage IAM authentication \_|\_ Memorystore for Valkey \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/manage-iam-auth](https://docs.cloud.google.com/memorystore/docs/valkey/manage-iam-auth)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create an instance with IAM authentication To create a Memorystore for Valkey instance that uses IAM authentication, run the create command: gcloud memorystore instances create INSTANCE ID --region= REGION ID --network= NETWORK --node-type= NODE TYPE --shard-count= SHARD COUNT --auth-mode=iam-auth Replace the following: INSTANCE ID is the ID of the Memorystore for Valkey instance you're creating.
- Accepted values are: shared-core-nano standard-small highmem-medium highmem-xlarge Caution : We recommend that you use the shared-core-nano node type for development or testing purposes only because this node type has no SLA.
- If you run Memorystore for Valkey in a production environment, then we recommend using the standard-small , highmem-medium , or highmem-xlarge node types.
- Because of the short lifetime of an access token, it's difficult to hardcode the token. (Optional) If you haven't already, create a service account for your application (see Creating and managing a service account ). gcloud iam service-accounts create SA NAME \ --description=" DESCRIPTION " \ --display-name=" DISPLAY NAME " Replace the following: SA NAME is the name of the service account.

