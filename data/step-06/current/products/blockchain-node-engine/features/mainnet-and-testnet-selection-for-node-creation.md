---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:24:06.279Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "Mainnet and Testnet selection for node creation"
feature_slug: "mainnet-and-testnet-selection-for-node-creation"
latest_feature_date: "2023-01-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1"
keywords:
  - "selection"
  - "selecting"
  - "allows"
  - "creation"
  - "mainnet"
  - "testnet"
---

# Mainnet and Testnet selection for node creation

Product: Blockchain Node Engine
Coverage: MEDIUM

## Step 02 Summary

Node creation now allows selecting either Ethereum Mainnet or Testnet deployment.

## Extended Definition

In Blockchain Node Engine, the node API/REST resource model includes explicit Ethereum network constants for testnet environments, including TESTNET SEPOLIA, TESTNET GOERLI PRATER, and TESTNET HOLESKY. This indicates that node creation supports selecting a testnet deployment option for those listed networks, while the provided excerpts do not show an explicit mainnet selection value.

## Evidence Summary

The cited RPC and REST documentation pages enumerate supported Ethereum TESTNET values for blockchain node resources, but the snippets do not document a corresponding mainnet option.

## Source Links

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)

## Supporting Pages

### "Package google.cloud.blockchainnodeengine.v1 \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- Source ID: `site-api-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- TESTNET SEPOLIA The Ethereum Testnet based on Sepolia/Bepolia protocol.
- TESTNET GOERLI PRATER The Ethereum Testnet based on Goerli protocol.
- TESTNET HOLESKY The Ethereum Testnet based on Holesky specification.

### "REST Resource: projects.locations.blockchainNodes \_|\_ Blockchain Node\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- Source ID: `site-api-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- TESTNET SEPOLIA The Ethereum Testnet based on Sepolia/Bepolia protocol.
- TESTNET GOERLI PRATER The Ethereum Testnet based on Goerli protocol.
- TESTNET HOLESKY The Ethereum Testnet based on Holesky specification.

### "Resource attributes for IAM Conditions \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)
- Source ID: `site-iam-reference`
- Final score: 36
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

