---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:24:06.273Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "Ethereum execution and consensus client support"
feature_slug: "ethereum-execution-and-consensus-client-support"
latest_feature_date: "2023-06-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes"
  - "https://docs.cloud.google.com/iam/docs/authentication"
keywords:
  - "platform"
  - "client"
  - "execution"
  - "clients"
  - "consensus"
  - "ethereum"
  - "supports"
---

# Ethereum execution and consensus client support

Product: Blockchain Node Engine
Coverage: MEDIUM

## Step 02 Summary

The platform supports Ethereum execution and consensus clients.

## Extended Definition

The platform supports Ethereum execution and consensus clients.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication)

## Supporting Pages

### "Package google.cloud.blockchainnodeengine.v1 \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- Source ID: `site-api-reference`
- Final score: 159
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Index BlockchainNodeEngine (interface) BlockchainNode (message) BlockchainNode.BlockchainType (enum) BlockchainNode.ConnectionInfo (message) BlockchainNode.ConnectionInfo.EndpointInfo (message) BlockchainNode.EthereumDetails (message) BlockchainNode.EthereumDetails.ConsensusClient (enum) BlockchainNode.EthereumDetails.EthereumEndpoints (message) BlockchainNode.EthereumDetails.ExecutionClient (enum) BlockchainNode.EthereumDetails.GethDetails (message) BlockchainNode.EthereumDetails.GethDetails.GarbageCollectionMode (enum) BlockchainNode.EthereumDetails.Network (enum) BlockchainNode.EthereumDetails.NodeType (enum) BlockchainNode.EthereumDetails.ValidatorConfig (message) BlockchainNode.State (enum) CreateBlockchainNodeRequest (message) DeleteBlockchainNodeRequest (message) GetBlockchainNodeRequest (message) ListBlockchainNodesRequest (message) ListBlockchainNodesResponse (message) OperationMetadata (message) UpdateBlockchainNodeRequest (message) BlockchainNodeEngine This service is the control plane API for Blockchain Node Engine, and can be used to create, read, and delete blockchain nodes.
- ConsensusClient The consensus client (also referred to as beacon node or CL client) implements the proof-of-stake consensus algorithm, which enables the network to achieve agreement based on validated data from the execution client.
- ExecutionClient The execution client (i.e., Execution Engine or EL client) listens to new transactions broadcast in the network, executes them in EVM, and holds the latest state and database of all current Ethereum data.
- ERIGON EMBEDDED CONSENSUS LAYER Erigon's embedded consensus client embedded in the execution client.

### "REST Resource: projects.locations.blockchainNodes \_|\_ Blockchain Node\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- Source ID: `site-api-reference`
- Final score: 131
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { // Union field execution client details can be only one of the following: "gethDetails" : { object ( GethDetails ) } // End of list of possible types for union field execution client details . "network" : enum ( Network ) , "nodeType" : enum ( NodeType ) , "executionClient" : enum ( ExecutionClient ) , "consensusClient" : enum ( ConsensusClient ) , "apiEnableAdmin" : boolean , "apiEnableDebug" : boolean , "additionalEndpoints" : { object ( EthereumEndpoints ) } , "validatorConfig" : { object ( ValidatorConfig ) } } Fields Union field execution client details .
- Resource: BlockchainNode JSON representation EthereumDetails JSON representation GethDetails JSON representation GarbageCollectionMode Network NodeType ExecutionClient ConsensusClient EthereumEndpoints JSON representation ValidatorConfig JSON representation BlockchainType ConnectionInfo JSON representation EndpointInfo JSON representation State Methods Resource: BlockchainNode A representation of a blockchain node.
- ConsensusClient The consensus client (also referred to as beacon node or CL client) implements the proof-of-stake consensus algorithm, which enables the network to achieve agreement based on validated data from the execution client.
- ExecutionClient The execution client (i.e., Execution Engine or EL client) listens to new transactions broadcast in the network, executes them in EVM, and holds the latest state and database of all current Ethereum data.

### "Authenticate to IAM \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication)
- Source ID: `site-iam-reference`
- Final score: 39
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For a local development environment You can set up credentials for a local development environment in the following ways: User credentials for client libraries or third-party tools User credentials for REST requests from the command line Service account impersonation Client libraries or third-party tools Set up Application Default Credentials (ADC) in your local environment: Install the Google Cloud CLI.
- You can set up the gcloud CLI to use service account impersonation by using the gcloud config set command : gcloud config set auth/impersonate service account SERVICE ACCT EMAIL For select languages, you can use service account impersonation to create a local ADC file for use by client libraries.
- To authenticate calls to Google Cloud APIs, client libraries support Application Default Credentials (ADC) ; the libraries look for credentials in a set of defined locations and use those credentials to authenticate requests to the API.
- You can access the API in the following ways: Client libraries Google Cloud CLI REST Client libraries The IAM client libraries provide high-level language support for authenticating to IAM programmatically.

