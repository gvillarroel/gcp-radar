---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:24:06.274Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "Full and archive node types"
feature_slug: "full-and-archive-node-types"
latest_feature_date: "2023-06-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/quotas"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1"
keywords:
  - "types"
  - "archive"
  - "both"
  - "supports"
  - "full"
---

# Full and archive node types

Product: Blockchain Node Engine
Coverage: LOW

## Step 02 Summary

Blockchain Node Engine supports both full and archive Ethereum node types.

## Extended Definition

Blockchain Node Engine supports both full and archive Ethereum node types.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/quotas](https://docs.cloud.google.com/blockchain-node-engine/docs/quotas)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)

## Supporting Pages

### "Package google.cloud.blockchainnodeengine.v1 \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- Source ID: `site-api-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- ARCHIVE Holds the same data as full node as well as all of the blockchain's history state data dating back to the Genesis Block.
- This value can also be chosen when creating a full node in order to create a partial/recent archive node.
- Only applicable when NodeType is FULL or ARCHIVE .
- Operations that have been cancelled successfully have [Operation.error][] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1 , corresponding to Code.CANCELLED . api version string Output only.

### "REST Resource: projects.locations.blockchainNodes \_|\_ Blockchain Node\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- Source ID: `site-api-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- ARCHIVE Holds the same data as full node as well as all of the blockchain's history state data dating back to the Genesis Block.
- This value can also be chosen when creating a full node in order to create a partial/recent archive node.
- Only applicable when NodeType is FULL or ARCHIVE .
- JSON representation { // Union field execution client details can be only one of the following: "gethDetails" : { object ( GethDetails ) } // End of list of possible types for union field execution client details . "network" : enum ( Network ) , "nodeType" : enum ( NodeType ) , "executionClient" : enum ( ExecutionClient ) , "consensusClient" : enum ( ConsensusClient ) , "apiEnableAdmin" : boolean , "apiEnableDebug" : boolean , "additionalEndpoints" : { object ( EthereumEndpoints ) } , "validatorConfig" : { object ( ValidatorConfig ) } } Fields Union field execution client details .

### Quotas and limits \_|\_ Blockchain Node Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/quotas](https://docs.cloud.google.com/blockchain-node-engine/docs/quotas)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Allocation quotas The following quotas don't reset over time and instead are released when you release the resource: Quotas Value Blockchain nodes per project per location 24 Ethereum archive nodes per project per location 12 Ethereum full nodes per project per location 16 Polygon sentry archive nodes per project per location 12 Polygon sentry full nodes per project per location 16 Rate quotas The following quotas apply to Blockchain Node Engine requests: Quota Value Blockchain node API per minute per project 38,400 Control plane API per minute per project 240 Request a quota increase To adjust most quotas, use the Google Cloud console.
- Quotas apply to a range of resource types, including hardware, software, and network components.

