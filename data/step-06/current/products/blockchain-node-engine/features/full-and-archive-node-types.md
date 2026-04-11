---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:01:35.366Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "Full and archive node types"
feature_slug: "full-and-archive-node-types"
latest_feature_date: "2023-06-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/get"
keywords:
  - "types"
  - "archive"
  - "blockchain"
  - "supports"
  - "full"
  - "engine"
  - "and"
  - "node"
---

# Full and archive node types

Product: Blockchain Node Engine
Coverage: LOW

## Step 02 Summary

Blockchain Node Engine supports both full and archive Ethereum node types.

## Extended Definition

Blockchain Node Engine supports both full and archive Ethereum node types.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/get](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/get)

## Supporting Pages

### "Package google.cloud.blockchainnodeengine.v1 \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- Source ID: `site-api-reference`
- Final score: 274
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Index BlockchainNodeEngine (interface) BlockchainNode (message) BlockchainNode.BlockchainType (enum) BlockchainNode.ConnectionInfo (message) BlockchainNode.ConnectionInfo.EndpointInfo (message) BlockchainNode.EthereumDetails (message) BlockchainNode.EthereumDetails.ConsensusClient (enum) BlockchainNode.EthereumDetails.EthereumEndpoints (message) BlockchainNode.EthereumDetails.ExecutionClient (enum) BlockchainNode.EthereumDetails.GethDetails (message) BlockchainNode.EthereumDetails.GethDetails.GarbageCollectionMode (enum) BlockchainNode.EthereumDetails.Network (enum) BlockchainNode.EthereumDetails.NodeType (enum) BlockchainNode.EthereumDetails.ValidatorConfig (message) BlockchainNode.State (enum) CreateBlockchainNodeRequest (message) DeleteBlockchainNodeRequest (message) GetBlockchainNodeRequest (message) ListBlockchainNodesRequest (message) ListBlockchainNodesResponse (message) OperationMetadata (message) UpdateBlockchainNodeRequest (message) BlockchainNodeEngine This service is the control plane API for Blockchain Node Engine, and can be used to create, read, and delete blockchain nodes.
- Home Documentation Application hosting Blockchain Node Engine Reference Send feedback Package google.cloud.blockchainnodeengine.v1 Stay organized with collections Save and categorize content based on your preferences.
- ARCHIVE Holds the same data as full node as well as all of the blockchain's history state data dating back to the Genesis Block.
- A service attachment that exposes a node, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service attachment name} EndpointInfo Contains endpoint information through which to interact with a blockchain node.

### "REST Resource: projects.locations.blockchainNodes \_|\_ Blockchain Node\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- Source ID: `site-api-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting Blockchain Node Engine Reference Send feedback REST Resource: projects.locations.blockchainNodes Stay organized with collections Save and categorize content based on your preferences.
- ARCHIVE Holds the same data as full node as well as all of the blockchain's history state data dating back to the Genesis Block.
- Methods create Creates a new blockchain node in a given project and location. delete Deletes a single blockchain node. get Gets details of a single blockchain node. list Lists blockchain nodes in a given project and location. patch Updates the parameters of a single blockchain node.
- A service attachment that exposes a node, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service attachment name} EndpointInfo Contains endpoint information through which to interact with a blockchain node.

### "Method: projects.locations.blockchainNodes.get \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/get](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/get)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting Blockchain Node Engine Reference Send feedback Method: projects.locations.blockchainNodes.get Stay organized with collections Save and categorize content based on your preferences.
- IAM Permissions Requires the following IAM permission on the name resource: blockchainnodeengine.blockchainNodes.get For more information, see the IAM documentation .
- HTTP request GET https://blockchainnodeengine.googleapis.com/v1/{name=projects/ /locations/ /blockchainNodes/ } The URL uses gRPC Transcoding syntax.
- The fully qualified name of the blockchain node to fetch. e.g. projects/my-project/locations/us-central1/blockchainNodes/my-node .

