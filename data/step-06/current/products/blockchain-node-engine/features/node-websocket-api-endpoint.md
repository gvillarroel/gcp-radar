---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:24:06.276Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "Node WebSocket API endpoint"
feature_slug: "node-websocket-api-endpoint"
latest_feature_date: "2023-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest"
keywords:
  - "accessed"
  - "websocket"
  - "dedicated"
  - "through"
  - "endpoint"
  - "nodes"
---

# Node WebSocket API endpoint

Product: Blockchain Node Engine
Coverage: MEDIUM

## Step 02 Summary

Nodes can be accessed through a dedicated WebSocket API endpoint, including eth_subscribe and eth_unsubscribe support.

## Extended Definition

Nodes can be accessed through a dedicated WebSocket API endpoint, including eth_subscribe and eth_unsubscribe support.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest)

## Supporting Pages

### "REST Resource: projects.locations.blockchainNodes \_|\_ Blockchain Node\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- Source ID: `site-api-reference`
- Final score: 131
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A service attachment that exposes a node, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service attachment name} EndpointInfo Contains endpoint information through which to interact with a blockchain node.
- JSON representation { "jsonRpcApiEndpoint" : string , "websocketsApiEndpoint" : string } Fields jsonRpcApiEndpoint string Output only.
- The endpoint information through which to interact with a blockchain node. serviceAttachment string Output only.
- The assigned URL for the node JSON-RPC API endpoint. websocketsApiEndpoint string Output only.

### "Package google.cloud.blockchainnodeengine.v1 \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- Source ID: `site-api-reference`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Index BlockchainNodeEngine (interface) BlockchainNode (message) BlockchainNode.BlockchainType (enum) BlockchainNode.ConnectionInfo (message) BlockchainNode.ConnectionInfo.EndpointInfo (message) BlockchainNode.EthereumDetails (message) BlockchainNode.EthereumDetails.ConsensusClient (enum) BlockchainNode.EthereumDetails.EthereumEndpoints (message) BlockchainNode.EthereumDetails.ExecutionClient (enum) BlockchainNode.EthereumDetails.GethDetails (message) BlockchainNode.EthereumDetails.GethDetails.GarbageCollectionMode (enum) BlockchainNode.EthereumDetails.Network (enum) BlockchainNode.EthereumDetails.NodeType (enum) BlockchainNode.EthereumDetails.ValidatorConfig (message) BlockchainNode.State (enum) CreateBlockchainNodeRequest (message) DeleteBlockchainNodeRequest (message) GetBlockchainNodeRequest (message) ListBlockchainNodesRequest (message) ListBlockchainNodesResponse (message) OperationMetadata (message) UpdateBlockchainNodeRequest (message) BlockchainNodeEngine This service is the control plane API for Blockchain Node Engine, and can be used to create, read, and delete blockchain nodes.
- A service attachment that exposes a node, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service attachment name} EndpointInfo Contains endpoint information through which to interact with a blockchain node.
- The endpoint information through which to interact with a blockchain node. service attachment string Output only.
- The assigned URL for the node JSON-RPC API endpoint. websockets api endpoint string Output only.

### Blockchain Node Engine API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 60
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1.projects.locations REST Resource: v1.projects.locations.blockchainNodes REST Resource: v1.projects.locations.operations Service: blockchainnodeengine.googleapis.com Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1.projects.locations.blockchainNodes Methods create POST /v1/{parent=projects/ /locations/ }/blockchainNodes Creates a new blockchain node in a given project and location. delete DELETE /v1/{name=projects/ /locations/ /blockchainNodes/ } Deletes a single blockchain node. get GET /v1/{name=projects/ /locations/ /blockchainNodes/ } Gets details of a single blockchain node. list GET /v1/{parent=projects/ /locations/ }/blockchainNodes Lists blockchain nodes in a given project and location.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://blockchainnodeengine.googleapis.com REST Resource: v1.projects.locations Methods get GET /v1/{name=projects/ /locations/ } Gets information about a location. list GET /v1/{name=projects/ }/locations Lists information about the supported locations for this service.
- One service might have multiple service endpoints.

