---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.651Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service agent pools"
feature_slug: "storage-transfer-service-agent-pools"
latest_feature_date: "2022-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list"
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListAgentPoolsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListAgentPoolsPager"
keywords:
  - "storage"
  - "transfer"
  - "agent"
  - "pools"
  - "adds"
  - "ga"
  - "allowing"
  - "isolated"
---

# Storage Transfer Service agent pools

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Adds GA support for agent pools, allowing isolated groups of agents to act as source or sink endpoints in transfer jobs for concurrent multi-file-system and multi-data-center transfers; Storage Transfer Service now offers agent pool support, allowing isolated groups of agents to act as source or sink entities for concurrent transfers across multiple data centers and filesystems.

## Extended Definition

Adds GA support for agent pools, allowing isolated groups of agents to act as source or sink endpoints in transfer jobs for concurrent multi-file-system and multi-data-center transfers; Storage Transfer Service now offers agent pool support, allowing isolated groups of agents to act as source or sink entities for concurrent transfers across multiple data centers and filesystems.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListAgentPoolsAsyncPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListAgentPoolsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListAgentPoolsPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListAgentPoolsPager)

## Supporting Pages

### "Method: projects.agentPools.list \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authorization requires the following IAM permission on the specified resource projectId : storagetransfer.agentpools.list Query parameters Parameters filter string An optional list of query parameters specified as JSON text in the form of: {"agentPoolNames":["agentpool1","agentpool2",...]} Since agentPoolNames support multiple values, its values must be specified with array notation.
- Home Documentation Storage Storage Transfer Service Reference Send feedback Method: projects.agentPools.list Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://storagetransfer.googleapis.com/v1/projects/{projectId}/agentPools The URL uses gRPC Transcoding syntax.
- If successful, the response body contains data with the following structure: JSON representation { "agentPools" : [ { object ( AgentPool ) } ] , "nextPageToken" : string } Fields agentPools[] object ( AgentPool ) A list of agent pools. nextPageToken string The list next page token.

### "Class ListAgentPoolsAsyncPager (1.20.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListAgentPoolsAsyncPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListAgentPoolsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.storage transfer v1.types.ListAgentPoolsRequest The initial request object. response google.cloud.storage transfer v1.types.ListAgentPoolsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListAgentPoolsResponse ], ], request : google . cloud . storage transfer v1 . types . transfer .
- ListAgentPoolsResponse ], ], request : google . cloud . storage transfer v1 . types . transfer .
- ListAgentPoolsRequest , response : google . cloud . storage transfer v1 . types . transfer .

### "Class ListAgentPoolsPager (1.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListAgentPoolsPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListAgentPoolsPager)
- Source ID: `site-python-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.storage transfer v1.types.ListAgentPoolsRequest The initial request object. response google.cloud.storage transfer v1.types.ListAgentPoolsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListAgentPoolsResponse ], request : google . cloud . storage transfer v1 . types . transfer .
- ListAgentPoolsResponse ], request : google . cloud . storage transfer v1 . types . transfer .
- ListAgentPoolsRequest , response : google . cloud . storage transfer v1 . types . transfer .

