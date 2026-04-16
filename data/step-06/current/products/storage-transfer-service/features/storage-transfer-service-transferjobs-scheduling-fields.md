---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.666Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service transferJobs scheduling fields"
feature_slug: "storage-transfer-service-transferjobs-scheduling-fields"
latest_feature_date: "2019-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs"
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceClient"
keywords:
  - "storage"
  - "transfer"
  - "transferjobs"
  - "scheduling"
  - "fields"
  - "clarified"
  - "documentation"
  - "parameters"
---

# Storage Transfer Service transferJobs scheduling fields

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Clarified the API documentation for transferJobs scheduling parameters, specifically scheduleStartDate, scheduleEndDate, and startTimeOfDay.

## Extended Definition

Clarified the API documentation for transferJobs scheduling parameters, specifically scheduleStartDate, scheduleEndDate, and startTimeOfDay.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceClient](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceClient)

## Supporting Pages

### "REST Resource: transferJobs \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs)
- Source ID: `site-api-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage Storage Transfer Service Reference Send feedback REST Resource: transferJobs Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "name" : string , "description" : string , "projectId" : string , "serviceAccount" : string , "transferSpec" : { object ( TransferSpec ) } , "replicationSpec" : { object ( ReplicationSpec ) } , "notificationConfig" : { object ( NotificationConfig ) } , "loggingConfig" : { object ( LoggingConfig ) } , "schedule" : { object ( Schedule ) } , "eventStream" : { object ( EventStream ) } , "status" : enum ( Status ) , "creationTime" : string , "lastModificationTime" : string , "deletionTime" : string , "latestOperationName" : string } Fields name string A unique name (within the transfer project) assigned when the job is created.
- JSON representation { "objectConditions" : { object ( ObjectConditions ) } , "transferOptions" : { object ( TransferOptions ) } , // Union field data source can be only one of the following: "gcsDataSource" : { object ( GcsData ) } // End of list of possible types for union field data source . // Union field data sink can be only one of the following: "gcsDataSink" : { object ( GcsData ) } // End of list of possible types for union field data sink . } Fields objectConditions object ( ObjectConditions ) Object conditions that determine which objects are transferred.
- See https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions for required permissions. transferSpec object ( TransferSpec ) Transfer specification. replicationSpec object ( ReplicationSpec ) Replication specification. notificationConfig object ( NotificationConfig ) Notification configuration. loggingConfig object ( LoggingConfig ) Logging configuration. schedule object ( Schedule ) Specifies schedule for the transfer job.

### "Class StorageTransferServiceAsyncClient (1.20.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListTransferJobsRequest ( filter="filter value", ) Make the request page result = client. list transfer jobs (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.storage transfer v1.types.ListTransferJobsRequest , dict]] The request object. projectId , jobNames , and jobStatuses are query parameters that can be specified when listing transfer jobs. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The following agentPool fields can be updated: - display name][google.storagetransfer.v1.AgentPool.display name] - bandwidth limit][google.storagetransfer.v1.AgentPool.bandwidth limit] This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- RunTransferJobRequest ( job name="job name value", project id="project id value", ) Make the request operation = client. run transfer job (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.storage transfer v1.types.RunTransferJobRequest , dict]] The request object.
- The agent pool to update. agent pool is expected to specify following fields: - name][google.storagetransfer.v1.AgentPool.name] - display name][google.storagetransfer.v1.AgentPool.display name] - bandwidth limit][google.storagetransfer.v1.AgentPool.bandwidth limit] An UpdateAgentPoolRequest with any other fields is rejected with the error INVALID ARGUMENT][google.rpc.Code.INVALID ARGUMENT] .

### "Class StorageTransferServiceClient (1.20.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceClient](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceClient)
- Source ID: `site-python-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListTransferJobsRequest ( filter="filter value", ) Make the request page result = client. list transfer jobs (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.storage transfer v1.types.ListTransferJobsRequest , dict] The request object. projectId , jobNames , and jobStatuses are query parameters that can be specified when listing transfer jobs. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The following agentPool fields can be updated: - display name][google.storagetransfer.v1.AgentPool.display name] - bandwidth limit][google.storagetransfer.v1.AgentPool.bandwidth limit] This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- RunTransferJobRequest ( job name="job name value", project id="project id value", ) Make the request operation = client. run transfer job (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.storage transfer v1.types.RunTransferJobRequest , dict] The request object.
- The agent pool to update. agent pool is expected to specify following fields: - name][google.storagetransfer.v1.AgentPool.name] - display name][google.storagetransfer.v1.AgentPool.display name] - bandwidth limit][google.storagetransfer.v1.AgentPool.bandwidth limit] An UpdateAgentPoolRequest with any other fields is rejected with the error INVALID ARGUMENT][google.rpc.Code.INVALID ARGUMENT] .

