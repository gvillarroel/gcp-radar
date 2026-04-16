---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:24:06.275Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "JSON-RPC and WebSocket API endpoint availability"
feature_slug: "json-rpc-and-websocket-api-endpoint-availability"
latest_feature_date: "2023-06-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/list"
keywords:
  - "availability"
  - "websocket"
  - "expose"
  - "both"
  - "endpoint"
  - "json"
  - "nodes"
---

# JSON-RPC and WebSocket API endpoint availability

Product: Blockchain Node Engine
Coverage: MEDIUM

## Step 02 Summary

Nodes expose both JSON-RPC and WebSocket endpoints for API access.

## Extended Definition

Nodes expose both JSON-RPC and WebSocket endpoints for API access.

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
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "jsonRpcApiEndpoint" : string , "websocketsApiEndpoint" : string } Fields jsonRpcApiEndpoint string Output only.
- The assigned URL for the node JSON-RPC API endpoint. websocketsApiEndpoint string Output only.
- JSON representation { // Union field execution client details can be only one of the following: "gethDetails" : { object ( GethDetails ) } // End of list of possible types for union field execution client details . "network" : enum ( Network ) , "nodeType" : enum ( NodeType ) , "executionClient" : enum ( ExecutionClient ) , "consensusClient" : enum ( ConsensusClient ) , "apiEnableAdmin" : boolean , "apiEnableDebug" : boolean , "additionalEndpoints" : { object ( EthereumEndpoints ) } , "validatorConfig" : { object ( ValidatorConfig ) } } Fields Union field execution client details .
- Resource: BlockchainNode JSON representation EthereumDetails JSON representation GethDetails JSON representation GarbageCollectionMode Network NodeType ExecutionClient ConsensusClient EthereumEndpoints JSON representation ValidatorConfig JSON representation BlockchainType ConnectionInfo JSON representation EndpointInfo JSON representation State Methods Resource: BlockchainNode A representation of a blockchain node.

### "Package google.cloud.blockchainnodeengine.v1 \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- Source ID: `site-api-reference`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The assigned URL for the node JSON-RPC API endpoint. websockets api endpoint string Output only.
- Index BlockchainNodeEngine (interface) BlockchainNode (message) BlockchainNode.BlockchainType (enum) BlockchainNode.ConnectionInfo (message) BlockchainNode.ConnectionInfo.EndpointInfo (message) BlockchainNode.EthereumDetails (message) BlockchainNode.EthereumDetails.ConsensusClient (enum) BlockchainNode.EthereumDetails.EthereumEndpoints (message) BlockchainNode.EthereumDetails.ExecutionClient (enum) BlockchainNode.EthereumDetails.GethDetails (message) BlockchainNode.EthereumDetails.GethDetails.GarbageCollectionMode (enum) BlockchainNode.EthereumDetails.Network (enum) BlockchainNode.EthereumDetails.NodeType (enum) BlockchainNode.EthereumDetails.ValidatorConfig (message) BlockchainNode.State (enum) CreateBlockchainNodeRequest (message) DeleteBlockchainNodeRequest (message) GetBlockchainNodeRequest (message) ListBlockchainNodesRequest (message) ListBlockchainNodesResponse (message) OperationMetadata (message) UpdateBlockchainNodeRequest (message) BlockchainNodeEngine This service is the control plane API for Blockchain Node Engine, and can be used to create, read, and delete blockchain nodes.
- A service attachment that exposes a node, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service attachment name} EndpointInfo Contains endpoint information through which to interact with a blockchain node.
- When true, the node is only accessible via Private Service Connect; no public endpoints are exposed.

### "Method: projects.locations.blockchainNodes.list \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/list](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/list)
- Source ID: `site-api-reference`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "blockchainNodes" : [ { object ( BlockchainNode ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields blockchainNodes[] object ( BlockchainNode ) The list of nodes nextPageToken string A token identifying a page of results the server should return. unreachable[] string Locations that could not be reached.
- HTTP request Path parameters Query parameters Request body Response body JSON representation Authorization scopes IAM Permissions Lists blockchain nodes in a given project and location.
- Home Documentation Application hosting Blockchain Node Engine Reference Send feedback Method: projects.locations.blockchainNodes.list Stay organized with collections Save and categorize content based on your preferences.
- IAM Permissions Requires the following IAM permission on the parent resource: blockchainnodeengine.blockchainNodes.list For more information, see the IAM documentation .

