---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:01:35.371Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "Node WebSocket API endpoint"
feature_slug: "node-websocket-api-endpoint"
latest_feature_date: "2023-03-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/release-notes"
keywords:
  - "accessed"
  - "websocket"
  - "endpoint"
  - "can"
  - "be"
  - "api"
  - "nodes"
  - "node"
---

# Node WebSocket API endpoint

Product: Blockchain Node Engine
Coverage: LOW

## Step 02 Summary

Nodes can be accessed through a dedicated WebSocket API endpoint, including eth_subscribe and eth_unsubscribe support.

## Extended Definition

Nodes can be accessed through a dedicated WebSocket API endpoint, including eth_subscribe and eth_unsubscribe support.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/release-notes](https://docs.cloud.google.com/blockchain-node-engine/docs/release-notes)

## Supporting Pages

### "REST Resource: projects.locations.blockchainNodes \_|\_ Blockchain Node\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { // Union field execution client details can be only one of the following: "gethDetails" : { object ( GethDetails ) } // End of list of possible types for union field execution client details . "network" : enum ( Network ) , "nodeType" : enum ( NodeType ) , "executionClient" : enum ( ExecutionClient ) , "consensusClient" : enum ( ConsensusClient ) , "apiEnableAdmin" : boolean , "apiEnableDebug" : boolean , "additionalEndpoints" : { object ( EthereumEndpoints ) } , "validatorConfig" : { object ( ValidatorConfig ) } } Fields Union field execution client details .
- The assigned URL for the node's Beacon API endpoint. beaconPrometheusMetricsApiEndpoint string Output only.
- The assigned URL for the node JSON-RPC API endpoint. websocketsApiEndpoint string Output only.
- The assigned URL for the node WebSockets API endpoint.

### "Package google.cloud.blockchainnodeengine.v1 \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Index BlockchainNodeEngine (interface) BlockchainNode (message) BlockchainNode.BlockchainType (enum) BlockchainNode.ConnectionInfo (message) BlockchainNode.ConnectionInfo.EndpointInfo (message) BlockchainNode.EthereumDetails (message) BlockchainNode.EthereumDetails.ConsensusClient (enum) BlockchainNode.EthereumDetails.EthereumEndpoints (message) BlockchainNode.EthereumDetails.ExecutionClient (enum) BlockchainNode.EthereumDetails.GethDetails (message) BlockchainNode.EthereumDetails.GethDetails.GarbageCollectionMode (enum) BlockchainNode.EthereumDetails.Network (enum) BlockchainNode.EthereumDetails.NodeType (enum) BlockchainNode.EthereumDetails.ValidatorConfig (message) BlockchainNode.State (enum) CreateBlockchainNodeRequest (message) DeleteBlockchainNodeRequest (message) GetBlockchainNodeRequest (message) ListBlockchainNodesRequest (message) ListBlockchainNodesResponse (message) OperationMetadata (message) UpdateBlockchainNodeRequest (message) BlockchainNodeEngine This service is the control plane API for Blockchain Node Engine, and can be used to create, read, and delete blockchain nodes.
- The assigned URL for the node's Beacon API endpoint. beacon prometheus metrics api endpoint string Output only.
- The assigned URL for the node JSON-RPC API endpoint. websockets api endpoint string Output only.
- The assigned URL for the node WebSockets API endpoint.

### Blockchain Node Engine release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/release-notes](https://docs.cloud.google.com/blockchain-node-engine/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The WebSocket API unlocks the eth subscribe and eth unsubscribe methods, giving you powerful new ways to interact with your nodes.
- Feature You can now access a node's WebSocket server through the WebSocket API endpoint.
- Ethereum support: Execution and consensus clients Full and Archive nodes JSON-RPC and WebSocket endpoints.
- Feature Features supported in this launch include: Blockchain support: Ethereum (Proof of Stake) Administer "full" nodes via API us-central1 regional support Full RPC API See: Introducing Blockchain Node Engine Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

