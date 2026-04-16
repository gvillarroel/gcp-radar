---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:24:06.281Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "us-central1 regional availability"
feature_slug: "us-central1-regional-availability"
latest_feature_date: "2022-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/delete"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/get"
keywords:
  - "central1"
  - "regional"
  - "availability"
  - "nodes"
---

# us-central1 regional availability

Product: Blockchain Node Engine
Coverage: MEDIUM

## Step 02 Summary

Blockchain Node Engine nodes are supported in the us-central1 region.

## Extended Definition

Blockchain Node Engine identifies each node by a region-qualified resource name in the form `projects/{project}/locations/{location}/blockchainNodes/{node}`, as shown in the REST API method references for create/get/delete operations. The provided examples use `us-central1` in this path (for example, `projects/my-project/locations/us-central1/blockchainNodes/my-node`), which supports us-central1 as an example region in which node resources are addressed, but does not explicitly enumerate all available regions.

## Evidence Summary

These pages define the REST resource structure for blockchain nodes and include `us-central1` in example fully qualified resource names for node operations.

## Source Links

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/delete](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/delete)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/get](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/get)

## Supporting Pages

### "REST Resource: projects.locations.blockchainNodes \_|\_ Blockchain Node\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- Source ID: `site-api-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- The fully qualified name of the blockchain node. e.g. projects/my-project/locations/us-central1/blockchainNodes/my-node . createTime string ( Timestamp format) Output only.
- Methods create Creates a new blockchain node in a given project and location. delete Deletes a single blockchain node. get Gets details of a single blockchain node. list Lists blockchain nodes in a given project and location. patch Updates the parameters of a single blockchain node.
- Home Documentation Application hosting Blockchain Node Engine Reference Send feedback REST Resource: projects.locations.blockchainNodes Stay organized with collections Save and categorize content based on your preferences.
- Note this option is not currently available when creating new blockchain nodes.

### "Method: projects.locations.blockchainNodes.delete \_|\_ Blockchain Node\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/delete](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/delete)
- Source ID: `site-api-reference`
- Final score: 59
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The fully qualified name of the blockchain node to delete. e.g. projects/my-project/locations/us-central1/blockchainNodes/my-node .
- Home Documentation Application hosting Blockchain Node Engine Reference Send feedback Method: projects.locations.blockchainNodes.delete Stay organized with collections Save and categorize content based on your preferences.
- IAM Permissions Requires the following IAM permission on the name resource: blockchainnodeengine.blockchainNodes.delete For more information, see the IAM documentation .
- HTTP request DELETE https://blockchainnodeengine.googleapis.com/v1/{name=projects/ /locations/ /blockchainNodes/ } The URL uses gRPC Transcoding syntax.

### "Method: projects.locations.blockchainNodes.get \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/get](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/get)
- Source ID: `site-api-reference`
- Final score: 59
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The fully qualified name of the blockchain node to fetch. e.g. projects/my-project/locations/us-central1/blockchainNodes/my-node .
- Home Documentation Application hosting Blockchain Node Engine Reference Send feedback Method: projects.locations.blockchainNodes.get Stay organized with collections Save and categorize content based on your preferences.
- IAM Permissions Requires the following IAM permission on the name resource: blockchainnodeengine.blockchainNodes.get For more information, see the IAM documentation .
- HTTP request GET https://blockchainnodeengine.googleapis.com/v1/{name=projects/ /locations/ /blockchainNodes/ } The URL uses gRPC Transcoding syntax.

