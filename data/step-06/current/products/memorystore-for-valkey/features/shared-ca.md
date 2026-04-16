---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.258Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "shared CA"
feature_slug: "shared-ca"
latest_feature_date: "2026-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/create-instances"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity"
keywords:
  - "shared"
  - "ca"
  - "managed"
  - "regional"
  - "mode"
  - "that"
  - "provides"
  - "one"
---

# shared CA

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

A managed regional CA mode that provides one CA certificate bundle per region for instances configured to use shared CA.

## Extended Definition

A managed regional CA mode that provides one CA certificate bundle per region for instances configured to use shared CA.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances)
- [https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification](https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification)
- [https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption)
- [https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity](https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity)

## Supporting Pages

### Create instances \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- If the mode that you select is Cluster Mode Disabled, then you can specify only one shard for your instance.
- Click Create instance . gcloud To create a single-zone instance, run the create command: gcloud memorystore instances create INSTANCE \ --location= REGION ID \ --endpoints='[{"connections": [{"pscAutoConnection": {"network": "projects/ PROJECT ID /global/networks/ NETWORK ID ", "projectId": " PROJECT ID "}}]}]' \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --engine-version= ENGINE VERSION \ --shard-count= SHARD COUNT \ --zone-distribution-config-mode= ZONE DISTRIBUTION CONFIG MODE \ --zone-distribution-config= ZONE \ --mode= MODE Replace the following: INSTANCE is the ID of the Memorystore for Valkey instance you're creating.
- In the Node Type section, select one of the following node types : Shared-Core ( shared-core-nano ) Small ( standard-small ) Medium ( highmem-medium ) X-Large ( highmem-xlarge ) In the Cluster Mode section, specify whether you want a Cluster Mode Enabled or Cluster Mode Disabled instance.
- In the Node Type section, select one of the following node types : Shared-Core ( shared-core-nano ) Small ( standard-small ) Medium ( highmem-medium ) X-Large ( highmem-xlarge ) In the Cluster Mode section, specify whether you want a Cluster Mode Enabled or Cluster Mode Disabled instance.

### "Instance and node specification \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification](https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Node type and size Maximum capacity, given an instance shape of 250 primary nodes and 0 replicas per node Maximum capacity, given an instance shape of 125 primary nodes and 1 replica per node Maximum capacity, given an instance shape of 83 primary nodes and 2 replicas per node Maximum capacity, given an instance shape of 62 primary nodes and 3 replicas per node Maximum capacity, given an instance shape of 50 primary nodes and 4 replicas per node Maximum capacity, given an instance shape of 41 primary nodes and 5 replicas per node shared-core-nano - 1.4 GB 350 GB 175 GB 116.2 GB 86.8 GB 70 GB 57.4 GB standard-small - 6.5 GB 1,625 GB 812.5 GB 539.5 GB 403 GB 325 GB 266.5 GB highmem-medium - 13 GB 3,250 GB 1,625 GB 1,079 GB 806 GB 650 GB 533 GB highmem-xlarge - 58 GB 14,500 GB 7,250 GB 4,814 GB 3,596 GB 2,900 GB 2,378 GB Cluster Mode Disabled instances The following table lists the maximum writable capacity for Cluster Mode Disabled instances.
- Cluster Mode Enabled instances The following table lists the maximum writable capacity for Cluster Mode Enabled instances that have 0-5 replicas per node.
- Caution : We recommend that you use the shared-core-nano node type for development or testing purposes only because this node type has no SLA.
- Node type specification The node capacity and characteristics depend on which of the four available node types you choose: Keyspace capacity and reserved overhead Node type Default writable keyspace capacity Total node capacity shared-core-nano 1.12 GB 1.4 GB standard-small 5.2 GB 6.5 GB highmem-medium 10.4 GB 13 GB highmem-xlarge 46.4 GB 58 GB Memorystore automatically sets aside a portion of your instance capacity to help prevent Out Of Memory (OOM) errors.

### "About in-transit encryption \_|\_ Memorystore for Valkey \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Server certificate rotation Every week, Memorystore for Valkey conducts server-side certificate rotation for instances that use the per-instance CA, shared CA, and customer-managed CA modes.
- Shared CA : a managed, regionalized CA infrastructure.
- In addition to Memorystore for Valkey conducting a weekly server-side certificate rotation, for the customer-managed CA mode, you can rotate the certificates on-demand.
- You can see an example of how to connect to a Cluster Mode Enabled or Cluster Mode Disabled instance in Memorystore for Valkey that has in-transit encryption enabled.

### "About scaling instance capacity \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity](https://docs.cloud.google.com/memorystore/docs/valkey/about-scaling-instance-capacity)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Failure scenarios If you encounter an error during the scaling operation, then it's likely because of one of the following scenarios: You want to update the shard count for your instance, but you don't have enough free memory for the shared-core-nano node type for your instance.
- Caution : We recommend that you use the shared-core-nano node type for development or testing purposes only because this node type has no SLA.
- You can scale an instance horizontally in one of the following ways: Scale out : increase the capacity of your instance, which gives the instance more memory and processing power to handle a larger volume of data or traffic.
- You scaled to a smaller shard count that doesn't have the capacity to hold all of the keys that Memorystore for Valkey stores in the original instance.

