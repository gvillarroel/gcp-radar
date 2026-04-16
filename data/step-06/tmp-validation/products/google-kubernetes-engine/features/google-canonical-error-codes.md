---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.387Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Google canonical error codes"
feature_slug: "google-canonical-error-codes"
latest_feature_date: "2021-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_operations"
keywords:
  - "canonical"
  - "error"
  - "codes"
  - "report"
  - "operations"
---

# Google canonical error codes

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE operations now use Google canonical error codes to report errors.

## Extended Definition

GKE operations now use Google canonical error codes to report errors.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_operations](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_operations)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_operations](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_operations)
- Source ID: `site-api-reference`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Operation JSON representation { "name" : string , "zone" : string , "operationType" : enum ( Type ) , "status" : enum ( Status ) , "detail" : string , "statusMessage" : string , "selfLink" : string , "targetLink" : string , "location" : string , "startTime" : string , "endTime" : string , "progress" : { object ( OperationProgress ) } , "clusterConditions" : [ { object ( StatusCondition ) } ] , "nodepoolConditions" : [ { object ( StatusCondition ) } ] , "error" : { object ( Status ) } } Fields name string Output only.
- Curl Request curl --location 'https://container.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list operations", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema MCPListOperationsRequest lists operations.
- Unset for single-stage operations. metrics[] object ( Metric ) Progress metric bundle, for example: metrics: [{name: "nodes done", int value: 15}, {name: "nodes total", int value: 32}] or metrics: [{name: "progress", double value: 0.56}, {name: "progress scale", double value: 1.0}] stages[] object ( OperationProgress ) Substages of an operation or a stage.
- ListOperationsResponse JSON representation { "operations" : [ { object ( Operation ) } ] , "missingZones" : [ string ] } Fields operations[] object ( Operation ) A list of operations in the project in the specified zone. missingZones[] string If any zones are listed here, the list of operations returned may be missing the operations from those zones.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Records errors seen during DatabaseEncryption update operations.
- BestEffortProvisioning JSON representation { "enabled" : boolean , "minProvisionNodes" : integer } Fields enabled boolean When this is enabled, cluster/node pool creations will ignore non-fatal errors like stockout to best provision as many nodes as possible right now and eventually bring up all target number of nodes minProvisionNodes integer Minimum number of nodes to be provisioned to be considered as succeeded, and the rest of nodes will be provisioned gradually and eventually when stockout issue has been resolved.
- DatabaseEncryption JSON representation { "keyName" : string , "state" : enum ( State ) , "decryptionKeys" : [ string ] , "lastOperationErrors" : [ { object ( OperationError ) } ] , // Union field current state can be only one of the following: "currentState" : enum ( CurrentState ) // End of list of possible types for union field current state . } Fields keyName string Name of CloudKMS key to use for the encryption of secrets in etcd.
- OperationError JSON representation { "keyName" : string , "errorMessage" : string , "timestamp" : string } Fields keyName string CloudKMS key resource that had the error. errorMessage string Description of the error seen during the operation. timestamp string ( Timestamp format) Time when the CloudKMS error was seen.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Records errors seen during DatabaseEncryption update operations.
- BestEffortProvisioning JSON representation { "enabled" : boolean , "minProvisionNodes" : integer } Fields enabled boolean When this is enabled, cluster/node pool creations will ignore non-fatal errors like stockout to best provision as many nodes as possible right now and eventually bring up all target number of nodes minProvisionNodes integer Minimum number of nodes to be provisioned to be considered as succeeded, and the rest of nodes will be provisioned gradually and eventually when stockout issue has been resolved.
- DatabaseEncryption JSON representation { "keyName" : string , "state" : enum ( State ) , "decryptionKeys" : [ string ] , "lastOperationErrors" : [ { object ( OperationError ) } ] , // Union field current state can be only one of the following: "currentState" : enum ( CurrentState ) // End of list of possible types for union field current state . } Fields keyName string Name of CloudKMS key to use for the encryption of secrets in etcd.
- OperationError JSON representation { "keyName" : string , "errorMessage" : string , "timestamp" : string } Fields keyName string CloudKMS key resource that had the error. errorMessage string Description of the error seen during the operation. timestamp string ( Timestamp format) Time when the CloudKMS error was seen.

