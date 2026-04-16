---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:24:06.280Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "Ethereum Proof of Stake support"
feature_slug: "ethereum-proof-of-stake-support"
latest_feature_date: "2022-11-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1"
keywords:
  - "proof"
  - "stake"
  - "running"
  - "ethereum"
  - "supports"
---

# Ethereum Proof of Stake support

Product: Blockchain Node Engine
Coverage: LOW

## Step 02 Summary

Blockchain Node Engine supports Ethereum running on Proof of Stake consensus.

## Extended Definition

Blockchain Node Engine’s Ethereum capability is exposed through `EthereumDetails`, which includes both `consensusClient` and `executionClient` configuration fields. The `consensusClient` (beacon/CL client) is documented as implementing the proof-of-stake consensus algorithm, and the `executionClient` executes Ethereum transactions in the EVM, meaning Ethereum nodes in this service are represented with a PoS + execution client model.

## Evidence Summary

The referenced RPC and REST API pages define Ethereum-specific node schema elements for Blockchain Node Engine and explicitly state that the consensus client component implements proof-of-stake.

## Source Links

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)

## Supporting Pages

### "Package google.cloud.blockchainnodeengine.v1 \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- Source ID: `site-api-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- ConsensusClient The consensus client (also referred to as beacon node or CL client) implements the proof-of-stake consensus algorithm, which enables the network to achieve agreement based on validated data from the execution client.
- Index BlockchainNodeEngine (interface) BlockchainNode (message) BlockchainNode.BlockchainType (enum) BlockchainNode.ConnectionInfo (message) BlockchainNode.ConnectionInfo.EndpointInfo (message) BlockchainNode.EthereumDetails (message) BlockchainNode.EthereumDetails.ConsensusClient (enum) BlockchainNode.EthereumDetails.EthereumEndpoints (message) BlockchainNode.EthereumDetails.ExecutionClient (enum) BlockchainNode.EthereumDetails.GethDetails (message) BlockchainNode.EthereumDetails.GethDetails.GarbageCollectionMode (enum) BlockchainNode.EthereumDetails.Network (enum) BlockchainNode.EthereumDetails.NodeType (enum) BlockchainNode.EthereumDetails.ValidatorConfig (message) BlockchainNode.State (enum) CreateBlockchainNodeRequest (message) DeleteBlockchainNodeRequest (message) GetBlockchainNodeRequest (message) ListBlockchainNodesRequest (message) ListBlockchainNodesResponse (message) OperationMetadata (message) UpdateBlockchainNodeRequest (message) BlockchainNodeEngine This service is the control plane API for Blockchain Node Engine, and can be used to create, read, and delete blockchain nodes.
- Information that is specific to a particular blockchain type. blockchain type details can be only one of the following: ethereum details EthereumDetails Ethereum-specific blockchain node details. blockchain type BlockchainType Immutable.
- ExecutionClient The execution client (i.e., Execution Engine or EL client) listens to new transactions broadcast in the network, executes them in EVM, and holds the latest state and database of all current Ethereum data.

### "REST Resource: projects.locations.blockchainNodes \_|\_ Blockchain Node\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- Source ID: `site-api-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- ConsensusClient The consensus client (also referred to as beacon node or CL client) implements the proof-of-stake consensus algorithm, which enables the network to achieve agreement based on validated data from the execution client.
- JSON representation { // Union field execution client details can be only one of the following: "gethDetails" : { object ( GethDetails ) } // End of list of possible types for union field execution client details . "network" : enum ( Network ) , "nodeType" : enum ( NodeType ) , "executionClient" : enum ( ExecutionClient ) , "consensusClient" : enum ( ConsensusClient ) , "apiEnableAdmin" : boolean , "apiEnableDebug" : boolean , "additionalEndpoints" : { object ( EthereumEndpoints ) } , "validatorConfig" : { object ( ValidatorConfig ) } } Fields Union field execution client details .
- JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "connectionInfo" : { object ( ConnectionInfo ) } , "state" : enum ( State ) , "privateServiceConnectEnabled" : boolean , // Union field blockchain type details can be only one of the following: "ethereumDetails" : { object ( EthereumDetails ) } // End of list of possible types for union field blockchain type details . "blockchainType" : enum ( BlockchainType ) } Fields name string Output only.
- Resource: BlockchainNode JSON representation EthereumDetails JSON representation GethDetails JSON representation GarbageCollectionMode Network NodeType ExecutionClient ConsensusClient EthereumEndpoints JSON representation ValidatorConfig JSON representation BlockchainType ConnectionInfo JSON representation EndpointInfo JSON representation State Methods Resource: BlockchainNode A representation of a blockchain node.

### Blockchain Node Engine documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs](https://docs.cloud.google.com/blockchain-node-engine/docs)
- Source ID: `site-api-reference`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Training Training and tutorials Running a Dedicated Ethereum RPC Node in Google Cloud Create a virtual machine (VM) to deploy an Ethereum RPC node.
- Blockchain Node Engine Web3 Use case Use cases Node hosting on Google Cloud: a pillar of Web3 infrastructure Explore both how organizations can avoid challenges by running their own nodes on Google Cloud, and how in many scenarios, our fully managed offering, Blockchain Node Engine, can make node hosting even easier.
- Get started for free Start your proof of concept with $300 in free credit Develop with our latest Generative AI models and tools.

