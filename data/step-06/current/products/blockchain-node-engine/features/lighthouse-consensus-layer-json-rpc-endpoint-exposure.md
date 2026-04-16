---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:24:06.277Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "Lighthouse consensus-layer JSON-RPC endpoint exposure"
feature_slug: "lighthouse-consensus-layer-json-rpc-endpoint-exposure"
latest_feature_date: "2023-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/list"
keywords:
  - "exposure"
  - "lighthouse"
  - "layer"
  - "consensus"
  - "endpoint"
  - "json"
  - "nodes"
---

# Lighthouse consensus-layer JSON-RPC endpoint exposure

Product: Blockchain Node Engine
Coverage: MEDIUM

## Step 02 Summary

Nodes using GETH execution and LIGHTHOUSE consensus clients expose the LIGHTHOUSE consensus JSON-RPC endpoint.

## Extended Definition

Nodes using GETH execution and LIGHTHOUSE consensus clients expose the LIGHTHOUSE consensus JSON-RPC endpoint.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/list](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/list)

## Supporting Pages

### "REST Resource: projects.locations.blockchainNodes \_|\_ Blockchain Node\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- Source ID: `site-api-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { // Union field execution client details can be only one of the following: "gethDetails" : { object ( GethDetails ) } // End of list of possible types for union field execution client details . "network" : enum ( Network ) , "nodeType" : enum ( NodeType ) , "executionClient" : enum ( ExecutionClient ) , "consensusClient" : enum ( ConsensusClient ) , "apiEnableAdmin" : boolean , "apiEnableDebug" : boolean , "additionalEndpoints" : { object ( EthereumEndpoints ) } , "validatorConfig" : { object ( ValidatorConfig ) } } Fields Union field execution client details .
- Resource: BlockchainNode JSON representation EthereumDetails JSON representation GethDetails JSON representation GarbageCollectionMode Network NodeType ExecutionClient ConsensusClient EthereumEndpoints JSON representation ValidatorConfig JSON representation BlockchainType ConnectionInfo JSON representation EndpointInfo JSON representation State Methods Resource: BlockchainNode A representation of a blockchain node.
- JSON representation { "beaconApiEndpoint" : string , "beaconPrometheusMetricsApiEndpoint" : string , "executionClientPrometheusMetricsApiEndpoint" : string } Fields beaconApiEndpoint string Output only.
- JSON representation { "endpointInfo" : { object ( EndpointInfo ) } , "serviceAttachment" : string } Fields endpointInfo object ( EndpointInfo ) Output only.

### "Package google.cloud.blockchainnodeengine.v1 \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- Source ID: `site-api-reference`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Index BlockchainNodeEngine (interface) BlockchainNode (message) BlockchainNode.BlockchainType (enum) BlockchainNode.ConnectionInfo (message) BlockchainNode.ConnectionInfo.EndpointInfo (message) BlockchainNode.EthereumDetails (message) BlockchainNode.EthereumDetails.ConsensusClient (enum) BlockchainNode.EthereumDetails.EthereumEndpoints (message) BlockchainNode.EthereumDetails.ExecutionClient (enum) BlockchainNode.EthereumDetails.GethDetails (message) BlockchainNode.EthereumDetails.GethDetails.GarbageCollectionMode (enum) BlockchainNode.EthereumDetails.Network (enum) BlockchainNode.EthereumDetails.NodeType (enum) BlockchainNode.EthereumDetails.ValidatorConfig (message) BlockchainNode.State (enum) CreateBlockchainNodeRequest (message) DeleteBlockchainNodeRequest (message) GetBlockchainNodeRequest (message) ListBlockchainNodesRequest (message) ListBlockchainNodesResponse (message) OperationMetadata (message) UpdateBlockchainNodeRequest (message) BlockchainNodeEngine This service is the control plane API for Blockchain Node Engine, and can be used to create, read, and delete blockchain nodes.
- ERIGON EMBEDDED CONSENSUS LAYER Erigon's embedded consensus client embedded in the execution client.
- The assigned URL for the node JSON-RPC API endpoint. websockets api endpoint string Output only.
- LIGHTHOUSE Consensus client implementation written in Rust, maintained by Sigma Prime.

### "Method: projects.locations.blockchainNodes.list \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/list](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/list)
- Source ID: `site-api-reference`
- Final score: 64
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "blockchainNodes" : [ { object ( BlockchainNode ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields blockchainNodes[] object ( BlockchainNode ) The list of nodes nextPageToken string A token identifying a page of results the server should return. unreachable[] string Locations that could not be reached.
- HTTP request Path parameters Query parameters Request body Response body JSON representation Authorization scopes IAM Permissions Lists blockchain nodes in a given project and location.
- Home Documentation Application hosting Blockchain Node Engine Reference Send feedback Method: projects.locations.blockchainNodes.list Stay organized with collections Save and categorize content based on your preferences.
- IAM Permissions Requires the following IAM permission on the parent resource: blockchainnodeengine.blockchainNodes.list For more information, see the IAM documentation .

