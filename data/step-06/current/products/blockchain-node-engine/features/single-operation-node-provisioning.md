---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:24:06.275Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "Single-operation node provisioning"
feature_slug: "single-operation-node-provisioning"
latest_feature_date: "2023-06-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/delete"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/get"
keywords:
  - "provisioning"
  - "provisioned"
  - "specifying"
  - "operation"
  - "single"
---

# Single-operation node provisioning

Product: Blockchain Node Engine
Coverage: MEDIUM

## Step 02 Summary

A node can be provisioned in one operation by specifying configuration and automatically bootstrapping and syncing it.

## Extended Definition

A node can be provisioned in one operation by specifying configuration and automatically bootstrapping and syncing it.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/delete](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/delete)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/get](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/get)

## Supporting Pages

### "Method: projects.locations.operations.cancel \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/cancel)
- Source ID: `site-api-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting Blockchain Node Engine Reference Send feedback Method: projects.locations.operations.cancel Stay organized with collections Save and categorize content based on your preferences.
- On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED .
- IAM Permissions Requires the following IAM permission on the name resource: blockchainnodeengine.operations.cancel For more information, see the IAM documentation .
- Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation.

### "Method: projects.locations.operations.delete \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/delete](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/delete)
- Source ID: `site-api-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting Blockchain Node Engine Reference Send feedback Method: projects.locations.operations.delete Stay organized with collections Save and categorize content based on your preferences.
- IAM Permissions Requires the following IAM permission on the name resource: blockchainnodeengine.operations.delete For more information, see the IAM documentation .
- HTTP request DELETE https://blockchainnodeengine.googleapis.com/v1/{name=projects/ /locations/ /operations/ } The URL uses gRPC Transcoding syntax.
- HTTP request Path parameters Request body Response body Authorization scopes IAM Permissions Deletes a long-running operation.

### "Method: projects.locations.operations.get \_|\_ Blockchain Node Engine \_\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/get](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/get)
- Source ID: `site-api-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting Blockchain Node Engine Reference Send feedback Method: projects.locations.operations.get Stay organized with collections Save and categorize content based on your preferences.
- IAM Permissions Requires the following IAM permission on the name resource: blockchainnodeengine.operations.get For more information, see the IAM documentation .
- HTTP request GET https://blockchainnodeengine.googleapis.com/v1/{name=projects/ /locations/ /operations/ } The URL uses gRPC Transcoding syntax.
- HTTP request Path parameters Request body Response body Authorization scopes IAM Permissions Gets the latest state of a long-running operation.

