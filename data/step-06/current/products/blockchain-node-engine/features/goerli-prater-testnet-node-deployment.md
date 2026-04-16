---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:24:06.279Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "Goerli-Prater testnet node deployment"
feature_slug: "goerli-prater-testnet-node-deployment"
latest_feature_date: "2023-01-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/create"
keywords:
  - "creates"
  - "goerli"
  - "prater"
  - "option"
  - "deployment"
  - "testnet"
  - "nodes"
---

# Goerli-Prater testnet node deployment

Product: Blockchain Node Engine
Coverage: MEDIUM

## Step 02 Summary

The Testnet option creates nodes that connect to the Goerli-Prater Ethereum network.

## Extended Definition

Goerli-Prater in Blockchain Node Engine is an Ethereum testnet network option, described as "The Ethereum Testnet based on Goerli protocol." It appears as a documented node network option in the service API references, but the docs also state that this option is not currently available when creating new blockchain nodes.

## Evidence Summary

The REST and RPC references define the Goerli-Prater testnet option for Ethereum nodes, and the create-method documentation confirms the node creation API while noting current availability constraints for this testnet option.

## Source Links

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/create](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/create)

## Supporting Pages

### "REST Resource: projects.locations.blockchainNodes \_|\_ Blockchain Node\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- Source ID: `site-api-reference`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- TESTNET GOERLI PRATER The Ethereum Testnet based on Goerli protocol.
- Methods create Creates a new blockchain node in a given project and location. delete Deletes a single blockchain node. get Gets details of a single blockchain node. list Lists blockchain nodes in a given project and location. patch Updates the parameters of a single blockchain node.
- Note this option is not currently available when creating new blockchain nodes.
- Home Documentation Application hosting Blockchain Node Engine Reference Send feedback REST Resource: projects.locations.blockchainNodes Stay organized with collections Save and categorize content based on your preferences.

### "Package google.cloud.blockchainnodeengine.v1 \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- Source ID: `site-api-reference`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- TESTNET GOERLI PRATER The Ethereum Testnet based on Goerli protocol.
- The fully qualified name of the blockchain node to delete. e.g. projects/my-project/locations/us-central1/blockchainNodes/my-node . request id string Optional.
- Note this option is not currently available when creating new blockchain nodes.
- Index BlockchainNodeEngine (interface) BlockchainNode (message) BlockchainNode.BlockchainType (enum) BlockchainNode.ConnectionInfo (message) BlockchainNode.ConnectionInfo.EndpointInfo (message) BlockchainNode.EthereumDetails (message) BlockchainNode.EthereumDetails.ConsensusClient (enum) BlockchainNode.EthereumDetails.EthereumEndpoints (message) BlockchainNode.EthereumDetails.ExecutionClient (enum) BlockchainNode.EthereumDetails.GethDetails (message) BlockchainNode.EthereumDetails.GethDetails.GarbageCollectionMode (enum) BlockchainNode.EthereumDetails.Network (enum) BlockchainNode.EthereumDetails.NodeType (enum) BlockchainNode.EthereumDetails.ValidatorConfig (message) BlockchainNode.State (enum) CreateBlockchainNodeRequest (message) DeleteBlockchainNodeRequest (message) GetBlockchainNodeRequest (message) ListBlockchainNodesRequest (message) ListBlockchainNodesResponse (message) OperationMetadata (message) UpdateBlockchainNodeRequest (message) BlockchainNodeEngine This service is the control plane API for Blockchain Node Engine, and can be used to create, read, and delete blockchain nodes.

### "Method: projects.locations.blockchainNodes.create \_|\_ Blockchain Node\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/create](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/create)
- Source ID: `site-api-reference`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting Blockchain Node Engine Reference Send feedback Method: projects.locations.blockchainNodes.create Stay organized with collections Save and categorize content based on your preferences.
- HTTP request Path parameters Query parameters Request body Response body Authorization scopes IAM Permissions Creates a new blockchain node in a given project and location.
- IAM Permissions Requires the following IAM permission on the parent resource: blockchainnodeengine.blockchainNodes.create For more information, see the IAM documentation .
- HTTP request POST https://blockchainnodeengine.googleapis.com/v1/{parent=projects/ /locations/ }/blockchainNodes The URL uses gRPC Transcoding syntax.

