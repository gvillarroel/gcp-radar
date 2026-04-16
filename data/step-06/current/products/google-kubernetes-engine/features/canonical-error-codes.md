---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.959Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Canonical error codes"
feature_slug: "canonical-error-codes"
latest_feature_date: "2020-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/Shared.Types/Code"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "canonical"
  - "error"
  - "codes"
  - "gke"
  - "operations"
  - "now"
  - "report"
  - "errors"
---

# Canonical error codes

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE operations now report errors using the canonical error model.

## Extended Definition

GKE operations now report errors using the canonical error model.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/Shared.Types/Code](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/Shared.Types/Code)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### Code \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/Shared.Types/Code](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/Shared.Types/Code)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The canonical error codes for gRPC APIs.
- PERMISSION DENIED must not be used for rejections caused by exhausting some resource (use RESOURCE EXHAUSTED instead for those errors).
- For operations that change the state of the system, this error may be returned even if the operation has completed successfully.
- PERMISSION DENIED must not be used if the caller can not be identified (use UNAUTHENTICATED instead for those errors).

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Records errors seen during DatabaseEncryption update operations.
- BestEffortProvisioning JSON representation { "enabled" : boolean , "minProvisionNodes" : integer } Fields enabled boolean When this is enabled, cluster/node pool creations will ignore non-fatal errors like stockout to best provision as many nodes as possible right now and eventually bring up all target number of nodes minProvisionNodes integer Minimum number of nodes to be provisioned to be considered as succeeded, and the rest of nodes will be provisioned gradually and eventually when stockout issue has been resolved.
- DatabaseEncryption JSON representation { "keyName" : string , "state" : enum ( State ) , "decryptionKeys" : [ string ] , "lastOperationErrors" : [ { object ( OperationError ) } ] , // Union field current state can be only one of the following: "currentState" : enum ( CurrentState ) // End of list of possible types for union field current state . } Fields keyName string Name of CloudKMS key to use for the encryption of secrets in etcd.
- Each item is a CloudKMS key resource. lastOperationErrors[] object ( OperationError ) Output only.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Records errors seen during DatabaseEncryption update operations.
- BestEffortProvisioning JSON representation { "enabled" : boolean , "minProvisionNodes" : integer } Fields enabled boolean When this is enabled, cluster/node pool creations will ignore non-fatal errors like stockout to best provision as many nodes as possible right now and eventually bring up all target number of nodes minProvisionNodes integer Minimum number of nodes to be provisioned to be considered as succeeded, and the rest of nodes will be provisioned gradually and eventually when stockout issue has been resolved.
- DatabaseEncryption JSON representation { "keyName" : string , "state" : enum ( State ) , "decryptionKeys" : [ string ] , "lastOperationErrors" : [ { object ( OperationError ) } ] , // Union field current state can be only one of the following: "currentState" : enum ( CurrentState ) // End of list of possible types for union field current state . } Fields keyName string Name of CloudKMS key to use for the encryption of secrets in etcd.
- Each item is a CloudKMS key resource. lastOperationErrors[] object ( OperationError ) Output only.

