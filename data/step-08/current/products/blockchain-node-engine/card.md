# Blockchain Node Engine

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-05T20:04:53.741Z`
Product status: `PASS`

## Summary

- Feature cards: 19
- Step 07 failed features: 0
- Step 07 warned features: 0
- Corpus health: healthy
- IAM mapping: 2 explicit, 0 derived, 17 unknown

## Service Card

- Service card ID: `blockchain-node-engine:service`
- Latest feature date: 2023-12-18
- Official source links: 20
- Security capabilities: 25

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| VPC Service Controls integration for Blockchain Node Engine | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services) |
| Default Google Cloud Armor enforcement | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)<br>[source](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions) |
| Ethereum execution and consensus client support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)<br>[source](https://docs.cloud.google.com/iam/docs/authentication) |
| Full and archive node types | LOW | PASS | unknown | [source](https://docs.cloud.google.com/blockchain-node-engine/docs/quotas)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1) |
| Fully managed dedicated blockchain node service | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/blockchain-node-engine/docs)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/overview)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1) |
| JSON-RPC and WebSocket API endpoint availability | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/list)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1) |
| Single-operation node provisioning | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/delete)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/get) |
| Node WebSocket API endpoint | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1) |
| Admin and debug JSON-RPC namespace configuration | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)<br>[source](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval) |
| Erigon mainnet archive nodes | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/blockchain-node-engine/docs/quotas)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1) |
| Lighthouse consensus-layer JSON-RPC endpoint exposure | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/list)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1) |
| Sepolia testnet support | LOW | PASS | unknown | [source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/delete)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/get)<br>[source](https://docs.cloud.google.com/iam/docs/full-resource-names) |
| Validator and staking workflow support via consensus layer | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1) |
| Goerli-Prater testnet node deployment | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/create)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1) |
| Mainnet and Testnet selection for node creation | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1) |
| Ethereum Proof of Stake support | LOW | PASS | unknown | [source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1) |
| Full node management via API | HIGH | PASS | unknown | [source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)<br>[source](https://docs.cloud.google.com/iam/docs/full-resource-names) |
| Full RPC API support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)<br>[source](https://docs.cloud.google.com/iam/docs/full-resource-names) |
| us-central1 regional availability | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/delete)<br>[source](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes/get) |
