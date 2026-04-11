---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:01:35.378Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "Sepolia testnet support"
feature_slug: "sepolia-testnet-support"
latest_feature_date: "2023-02-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/get"
keywords:
  - "sepolia"
  - "testnet"
  - "blockchain"
  - "supports"
  - "engine"
  - "the"
  - "for"
  - "node"
---

# Sepolia testnet support

Product: Blockchain Node Engine
Coverage: LOW

## Step 02 Summary

Blockchain Node Engine supports the Sepolia testnet for Geth/Lighthouse full nodes.

## Extended Definition

Blockchain Node Engine supports the Sepolia testnet for Geth/Lighthouse full nodes.

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
- Final score: 282
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Index BlockchainNodeEngine (interface) BlockchainNode (message) BlockchainNode.BlockchainType (enum) BlockchainNode.ConnectionInfo (message) BlockchainNode.ConnectionInfo.EndpointInfo (message) BlockchainNode.EthereumDetails (message) BlockchainNode.EthereumDetails.ConsensusClient (enum) BlockchainNode.EthereumDetails.EthereumEndpoints (message) BlockchainNode.EthereumDetails.ExecutionClient (enum) BlockchainNode.EthereumDetails.GethDetails (message) BlockchainNode.EthereumDetails.GethDetails.GarbageCollectionMode (enum) BlockchainNode.EthereumDetails.Network (enum) BlockchainNode.EthereumDetails.NodeType (enum) BlockchainNode.EthereumDetails.ValidatorConfig (message) BlockchainNode.State (enum) CreateBlockchainNodeRequest (message) DeleteBlockchainNodeRequest (message) GetBlockchainNodeRequest (message) ListBlockchainNodesRequest (message) ListBlockchainNodesResponse (message) OperationMetadata (message) UpdateBlockchainNodeRequest (message) BlockchainNodeEngine This service is the control plane API for Blockchain Node Engine, and can be used to create, read, and delete blockchain nodes.
- IAM Permissions Requires the following IAM permission on the parent resource: blockchainnodeengine.blockchainNodes.create For more information, see the IAM documentation .
- IAM Permissions Requires the following IAM permission on the name resource: blockchainnodeengine.blockchainNodes.delete For more information, see the IAM documentation .
- IAM Permissions Requires the following IAM permission on the parent resource: blockchainnodeengine.blockchainNodes.list For more information, see the IAM documentation .

### "REST Resource: projects.locations.blockchainNodes \_|\_ Blockchain Node\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- Source ID: `site-api-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Information that is specific to a particular blockchain type. blockchain type details can be only one of the following: ethereumDetails object ( EthereumDetails ) Ethereum-specific blockchain node details. blockchainType enum ( BlockchainType ) Immutable.
- A service attachment that exposes a node, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service attachment name} EndpointInfo Contains endpoint information through which to interact with a blockchain node.
- The fully qualified name of the blockchain node. e.g. projects/my-project/locations/us-central1/blockchainNodes/my-node . createTime string ( Timestamp format) Output only.
- The endpoint information through which to interact with a blockchain node. serviceAttachment string Output only.

### "Method: projects.locations.blockchainNodes.get \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/get](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/get)
- Source ID: `site-api-reference`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- IAM Permissions Requires the following IAM permission on the name resource: blockchainnodeengine.blockchainNodes.get For more information, see the IAM documentation .
- HTTP request GET https://blockchainnodeengine.googleapis.com/v1/{name=projects/ /locations/ /blockchainNodes/ } The URL uses gRPC Transcoding syntax.
- Home Documentation Application hosting Blockchain Node Engine Reference Send feedback Method: projects.locations.blockchainNodes.get Stay organized with collections Save and categorize content based on your preferences.
- The fully qualified name of the blockchain node to fetch. e.g. projects/my-project/locations/us-central1/blockchainNodes/my-node .

