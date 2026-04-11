---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:01:35.377Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "Lighthouse consensus-layer JSON-RPC endpoint exposure"
feature_slug: "lighthouse-consensus-layer-json-rpc-endpoint-exposure"
latest_feature_date: "2023-02-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/release-notes"
keywords:
  - "exposure"
  - "lighthouse"
  - "layer"
  - "consensus"
  - "endpoint"
  - "json"
  - "rpc"
  - "nodes"
---

# Lighthouse consensus-layer JSON-RPC endpoint exposure

Product: Blockchain Node Engine
Coverage: LOW

## Step 02 Summary

Nodes using GETH execution and LIGHTHOUSE consensus clients expose the LIGHTHOUSE consensus JSON-RPC endpoint.

## Extended Definition

Nodes using GETH execution and LIGHTHOUSE consensus clients expose the LIGHTHOUSE consensus JSON-RPC endpoint.

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
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { // Union field execution client details can be only one of the following: "gethDetails" : { object ( GethDetails ) } // End of list of possible types for union field execution client details . "network" : enum ( Network ) , "nodeType" : enum ( NodeType ) , "executionClient" : enum ( ExecutionClient ) , "consensusClient" : enum ( ConsensusClient ) , "apiEnableAdmin" : boolean , "apiEnableDebug" : boolean , "additionalEndpoints" : { object ( EthereumEndpoints ) } , "validatorConfig" : { object ( ValidatorConfig ) } } Fields Union field execution client details .
- Resource: BlockchainNode JSON representation EthereumDetails JSON representation GethDetails JSON representation GarbageCollectionMode Network NodeType ExecutionClient ConsensusClient EthereumEndpoints JSON representation ValidatorConfig JSON representation BlockchainType ConnectionInfo JSON representation EndpointInfo JSON representation State Methods Resource: BlockchainNode A representation of a blockchain node.
- JSON representation { "jsonRpcApiEndpoint" : string , "websocketsApiEndpoint" : string } Fields jsonRpcApiEndpoint string Output only.
- The assigned URL for the node JSON-RPC API endpoint. websocketsApiEndpoint string Output only.

### "Package google.cloud.blockchainnodeengine.v1 \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- Source ID: `site-api-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Index BlockchainNodeEngine (interface) BlockchainNode (message) BlockchainNode.BlockchainType (enum) BlockchainNode.ConnectionInfo (message) BlockchainNode.ConnectionInfo.EndpointInfo (message) BlockchainNode.EthereumDetails (message) BlockchainNode.EthereumDetails.ConsensusClient (enum) BlockchainNode.EthereumDetails.EthereumEndpoints (message) BlockchainNode.EthereumDetails.ExecutionClient (enum) BlockchainNode.EthereumDetails.GethDetails (message) BlockchainNode.EthereumDetails.GethDetails.GarbageCollectionMode (enum) BlockchainNode.EthereumDetails.Network (enum) BlockchainNode.EthereumDetails.NodeType (enum) BlockchainNode.EthereumDetails.ValidatorConfig (message) BlockchainNode.State (enum) CreateBlockchainNodeRequest (message) DeleteBlockchainNodeRequest (message) GetBlockchainNodeRequest (message) ListBlockchainNodesRequest (message) ListBlockchainNodesResponse (message) OperationMetadata (message) UpdateBlockchainNodeRequest (message) BlockchainNodeEngine This service is the control plane API for Blockchain Node Engine, and can be used to create, read, and delete blockchain nodes.
- The assigned URL for the node JSON-RPC API endpoint. websockets api endpoint string Output only.
- Fields json rpc api endpoint string Output only.
- ListBlockchainNodes rpc ListBlockchainNodes( ListBlockchainNodesRequest ) returns ( ListBlockchainNodesResponse ) Lists blockchain nodes in a given project and location.

### Blockchain Node Engine release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/release-notes](https://docs.cloud.google.com/blockchain-node-engine/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Feature Blockchain nodes created with the execution client GETH and consensus client LIGHTHOUSE now expose the JSON-RPC endpoint of the lighthouse client (consensus layer).
- Ethereum support: Execution and consensus clients Full and Archive nodes JSON-RPC and WebSocket endpoints.
- This feature allows you run your own validators by connecting the validator nodes to the consensus layer.
- Feature Features supported in this launch include: Blockchain support: Ethereum (Proof of Stake) Administer "full" nodes via API us-central1 regional support Full RPC API See: Introducing Blockchain Node Engine Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

