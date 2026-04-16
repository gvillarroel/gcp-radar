---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:24:06.277Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "Erigon mainnet archive nodes"
feature_slug: "erigon-mainnet-archive-nodes"
latest_feature_date: "2023-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/quotas"
keywords:
  - "available"
  - "erigon"
  - "mainnet"
  - "archive"
  - "ethereum"
  - "nodes"
---

# Erigon mainnet archive nodes

Product: Blockchain Node Engine
Coverage: MEDIUM

## Step 02 Summary

Archive node support is available on Ethereum Mainnet for Erigon nodes.

## Extended Definition

Archive node support is available on Ethereum Mainnet for Erigon nodes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/quotas](https://docs.cloud.google.com/blockchain-node-engine/docs/quotas)

## Supporting Pages

### "REST Resource: projects.locations.blockchainNodes \_|\_ Blockchain Node\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- Source ID: `site-api-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ERIGON An implementation of Ethereum (execution client), on the efficiency frontier, written in Go.
- Note this option is not currently available when creating new blockchain nodes.
- EthereumEndpoints Contains endpoint information specific to Ethereum nodes.
- JSON representation { // Union field execution client details can be only one of the following: "gethDetails" : { object ( GethDetails ) } // End of list of possible types for union field execution client details . "network" : enum ( Network ) , "nodeType" : enum ( NodeType ) , "executionClient" : enum ( ExecutionClient ) , "consensusClient" : enum ( ConsensusClient ) , "apiEnableAdmin" : boolean , "apiEnableDebug" : boolean , "additionalEndpoints" : { object ( EthereumEndpoints ) } , "validatorConfig" : { object ( ValidatorConfig ) } } Fields Union field execution client details .

### "Package google.cloud.blockchainnodeengine.v1 \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Index BlockchainNodeEngine (interface) BlockchainNode (message) BlockchainNode.BlockchainType (enum) BlockchainNode.ConnectionInfo (message) BlockchainNode.ConnectionInfo.EndpointInfo (message) BlockchainNode.EthereumDetails (message) BlockchainNode.EthereumDetails.ConsensusClient (enum) BlockchainNode.EthereumDetails.EthereumEndpoints (message) BlockchainNode.EthereumDetails.ExecutionClient (enum) BlockchainNode.EthereumDetails.GethDetails (message) BlockchainNode.EthereumDetails.GethDetails.GarbageCollectionMode (enum) BlockchainNode.EthereumDetails.Network (enum) BlockchainNode.EthereumDetails.NodeType (enum) BlockchainNode.EthereumDetails.ValidatorConfig (message) BlockchainNode.State (enum) CreateBlockchainNodeRequest (message) DeleteBlockchainNodeRequest (message) GetBlockchainNodeRequest (message) ListBlockchainNodesRequest (message) ListBlockchainNodesResponse (message) OperationMetadata (message) UpdateBlockchainNodeRequest (message) BlockchainNodeEngine This service is the control plane API for Blockchain Node Engine, and can be used to create, read, and delete blockchain nodes.
- ERIGON An implementation of Ethereum (execution client), on the efficiency frontier, written in Go.
- Note this option is not currently available when creating new blockchain nodes.
- EthereumEndpoints Contains endpoint information specific to Ethereum nodes.

### Quotas and limits \_|\_ Blockchain Node Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/quotas](https://docs.cloud.google.com/blockchain-node-engine/docs/quotas)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Allocation quotas The following quotas don't reset over time and instead are released when you release the resource: Quotas Value Blockchain nodes per project per location 24 Ethereum archive nodes per project per location 12 Ethereum full nodes per project per location 16 Polygon sentry archive nodes per project per location 12 Polygon sentry full nodes per project per location 16 Rate quotas The following quotas apply to Blockchain Node Engine requests: Quota Value Blockchain node API per minute per project 38,400 Control plane API per minute per project 240 Request a quota increase To adjust most quotas, use the Google Cloud console.
- Your use of a resource in one project doesn't affect your available quota in another project.

