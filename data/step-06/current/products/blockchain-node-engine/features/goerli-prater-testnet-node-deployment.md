---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:01:35.384Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "Goerli-Prater testnet node deployment"
feature_slug: "goerli-prater-testnet-node-deployment"
latest_feature_date: "2023-01-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/release-notes"
keywords:
  - "creates"
  - "goerli"
  - "prater"
  - "option"
  - "deployment"
  - "testnet"
  - "the"
  - "node"
---

# Goerli-Prater testnet node deployment

Product: Blockchain Node Engine
Coverage: LOW

## Step 02 Summary

The Testnet option creates nodes that connect to the Goerli-Prater Ethereum network.

## Extended Definition

The Testnet option creates nodes that connect to the Goerli-Prater Ethereum network.

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
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- TESTNET GOERLI PRATER The Ethereum Testnet based on Goerli protocol.
- Methods create Creates a new blockchain node in a given project and location. delete Deletes a single blockchain node. get Gets details of a single blockchain node. list Lists blockchain nodes in a given project and location. patch Updates the parameters of a single blockchain node.
- A status representing the state of the node. privateServiceConnectEnabled boolean Optional.
- JSON representation { // Union field execution client details can be only one of the following: "gethDetails" : { object ( GethDetails ) } // End of list of possible types for union field execution client details . "network" : enum ( Network ) , "nodeType" : enum ( NodeType ) , "executionClient" : enum ( ExecutionClient ) , "consensusClient" : enum ( ConsensusClient ) , "apiEnableAdmin" : boolean , "apiEnableDebug" : boolean , "additionalEndpoints" : { object ( EthereumEndpoints ) } , "validatorConfig" : { object ( ValidatorConfig ) } } Fields Union field execution client details .

### "Package google.cloud.blockchainnodeengine.v1 \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- Source ID: `site-api-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- TESTNET GOERLI PRATER The Ethereum Testnet based on Goerli protocol.
- The fully qualified name of the blockchain node to delete. e.g. projects/my-project/locations/us-central1/blockchainNodes/my-node . request id string Optional.
- A status representing the state of the node. private service connect enabled bool Optional.
- Index BlockchainNodeEngine (interface) BlockchainNode (message) BlockchainNode.BlockchainType (enum) BlockchainNode.ConnectionInfo (message) BlockchainNode.ConnectionInfo.EndpointInfo (message) BlockchainNode.EthereumDetails (message) BlockchainNode.EthereumDetails.ConsensusClient (enum) BlockchainNode.EthereumDetails.EthereumEndpoints (message) BlockchainNode.EthereumDetails.ExecutionClient (enum) BlockchainNode.EthereumDetails.GethDetails (message) BlockchainNode.EthereumDetails.GethDetails.GarbageCollectionMode (enum) BlockchainNode.EthereumDetails.Network (enum) BlockchainNode.EthereumDetails.NodeType (enum) BlockchainNode.EthereumDetails.ValidatorConfig (message) BlockchainNode.State (enum) CreateBlockchainNodeRequest (message) DeleteBlockchainNodeRequest (message) GetBlockchainNodeRequest (message) ListBlockchainNodesRequest (message) ListBlockchainNodesResponse (message) OperationMetadata (message) UpdateBlockchainNodeRequest (message) BlockchainNodeEngine This service is the control plane API for Blockchain Node Engine, and can be used to create, read, and delete blockchain nodes.

### Blockchain Node Engine release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/release-notes](https://docs.cloud.google.com/blockchain-node-engine/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- With the Testnet option, Blockchain Node Engine creates a different type of node that connects the Goerli-Prater Ethereum network.
- Feature You can now select either Ethereum Mainnet or Testnet as options when creating blockchain nodes.
- Feature The following features are now available: Sepolia Testnet (supported for Geth/Lighthouse Full nodes) Archive nodes (supported for Erigon nodes on Mainnet) Sepolia Testnet is one of the preferred testnets for dApp developers.
- This optionally enables access to a broad array of useful functions related to retrieving debug information from the node, and accessing administrative actions.

