---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:01:35.370Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "Single-operation node provisioning"
feature_slug: "single-operation-node-provisioning"
latest_feature_date: "2023-06-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/audit-logging"
keywords:
  - "provisioning"
  - "provisioned"
  - "operation"
  - "single"
  - "in"
  - "can"
  - "be"
  - "node"
---

# Single-operation node provisioning

Product: Blockchain Node Engine
Coverage: LOW

## Step 02 Summary

A node can be provisioned in one operation by specifying configuration and automatically bootstrapping and syncing it.

## Extended Definition

A node can be provisioned in one operation by specifying configuration and automatically bootstrapping and syncing it.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/audit-logging](https://docs.cloud.google.com/blockchain-node-engine/docs/audit-logging)

## Supporting Pages

### "Package google.cloud.blockchainnodeengine.v1 \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- Source ID: `site-api-reference`
- Final score: 260
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Index BlockchainNodeEngine (interface) BlockchainNode (message) BlockchainNode.BlockchainType (enum) BlockchainNode.ConnectionInfo (message) BlockchainNode.ConnectionInfo.EndpointInfo (message) BlockchainNode.EthereumDetails (message) BlockchainNode.EthereumDetails.ConsensusClient (enum) BlockchainNode.EthereumDetails.EthereumEndpoints (message) BlockchainNode.EthereumDetails.ExecutionClient (enum) BlockchainNode.EthereumDetails.GethDetails (message) BlockchainNode.EthereumDetails.GethDetails.GarbageCollectionMode (enum) BlockchainNode.EthereumDetails.Network (enum) BlockchainNode.EthereumDetails.NodeType (enum) BlockchainNode.EthereumDetails.ValidatorConfig (message) BlockchainNode.State (enum) CreateBlockchainNodeRequest (message) DeleteBlockchainNodeRequest (message) GetBlockchainNodeRequest (message) ListBlockchainNodesRequest (message) ListBlockchainNodesResponse (message) OperationMetadata (message) UpdateBlockchainNodeRequest (message) BlockchainNodeEngine This service is the control plane API for Blockchain Node Engine, and can be used to create, read, and delete blockchain nodes.
- Information that is specific to a particular blockchain type. blockchain type details can be only one of the following: ethereum details EthereumDetails Ethereum-specific blockchain node details. blockchain type BlockchainType Immutable.
- Operations that have been cancelled successfully have [Operation.error][] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1 , corresponding to Code.CANCELLED . api version string Output only.
- UpdateBlockchainNode rpc UpdateBlockchainNode( UpdateBlockchainNodeRequest ) returns ( Operation ) Updates the parameters of a single blockchain node.

### "Method: projects.locations.operations.cancel \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel)
- Source ID: `site-api-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting Blockchain Node Engine Reference Send feedback Method: projects.locations.operations.cancel Stay organized with collections Save and categorize content based on your preferences.
- On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED .
- IAM Permissions Requires the following IAM permission on the name resource: blockchainnodeengine.operations.cancel For more information, see the IAM documentation .
- HTTP request POST https://blockchainnodeengine.googleapis.com/v1/{name=projects/ /locations/ /operations/ }:cancel The URL uses gRPC Transcoding syntax.

### Blockchain Node Engine audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/audit-logging](https://docs.cloud.google.com/blockchain-node-engine/docs/audit-logging)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.GetBlockchainNode google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.ListBlockchainNodes google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.GetBlockchainNode google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.ListBlockchainNodes google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.CreateBlockchainNode (LRO) google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.DeleteBlockchainNode (LRO) google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.UpdateBlockchainNode google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.CreateBlockchainNode (LRO) google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.DeleteBlockchainNode (LRO) google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.UpdateBlockchainNode google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Blockchain Node Engine. google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine The following audit logs are associated with methods belonging to google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine .
- Filter for this method : protoPayload.methodName="google.longrunning.Operations.CancelOperation" DeleteOperation Method : google.longrunning.Operations.DeleteOperation Audit log type : Admin activity Permissions : blockchainnodeengine.operations.delete - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this service: protoPayload . serviceName = "blockchainnodeengine.googleapis.com" Methods by permission type Each IAM permission has a type property, whose value is an enum that can be one of four values: ADMIN READ , ADMIN WRITE , DATA READ , or DATA WRITE .
- Filter for this method : protoPayload.methodName="google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.UpdateBlockchainNode" google.longrunning.Operations The following audit logs are associated with methods belonging to google.longrunning.Operations .

