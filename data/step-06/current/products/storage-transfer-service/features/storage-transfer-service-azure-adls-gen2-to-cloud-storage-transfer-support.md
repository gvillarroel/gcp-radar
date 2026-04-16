---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.653Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service Azure ADLS Gen2 to Cloud Storage transfer support"
feature_slug: "storage-transfer-service-azure-adls-gen2-to-cloud-storage-transfer-support"
latest_feature_date: "2021-12-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions"
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list"
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data"
keywords:
  - "storage"
  - "transfer"
  - "azure"
  - "adls"
  - "gen2"
  - "supports"
  - "transferring"
  - "gen"
---

# Storage Transfer Service Azure ADLS Gen2 to Cloud Storage transfer support

Product: Storage Transfer Service
Coverage: LOW

## Step 02 Summary

Storage Transfer Service supports transferring data from Azure ADLS Gen 2 to Cloud Storage in general availability.

## Extended Definition

Storage Transfer Service supports transferring data from Azure ADLS Gen 2 to Cloud Storage in general availability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data)

## Supporting Pages

### "Class AwsS3Data (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data)
- Source ID: `site-python-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AWS credentials must be stored in Secret Manager in JSON format: { "access key id": "ACCESS KEY ID", "secret access key": "SECRET ACCESS KEY" } GoogleServiceAccount][google.storagetransfer.v1.GoogleServiceAccount] must be granted roles/secretmanager.secretAccessor for the resource.
- If credentials secret is specified, do not specify role arn][google.storagetransfer.v1.AwsS3Data.role arn] or aws access key][google.storagetransfer.v1.AwsS3Data.aws access key] .
- See [Configure access to a source: Amazon S3] (https://cloud.google.com/storage-transfer/docs/source-amazon-s3#secret manager) for more information.
- S3 Bucket name (see Creating a bucket aws access key google.cloud.storage transfer v1.types.AwsAccessKey Input only.

### "Delegate service agent permissions to a user-managed service account \_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : "A transfer using a user-managed service account for bucket permissions" , "status" : "ENABLED" , "projectId" : "PROJECT ID" , "serviceAccount" : "SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com" , "transferSpec" : { ... } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Storage Transfer Service Send feedback Delegate service agent permissions to a user-managed service account Stay organized with collections Save and categorize content based on your preferences.
- This works well when the Storage Transfer Service user is a trusted user for the data in all buckets, and can configure transfer jobs correctly to avoid moving data into or out of the wrong bucket.
- Because the same Storage Transfer Service service agent is used by all transfers within a project, it necessarily has permissions on all of the buckets involved in every transfer.

### "Method: projects.agentPools.list \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list)
- Source ID: `site-api-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authorization requires the following IAM permission on the specified resource projectId : storagetransfer.agentpools.list Query parameters Parameters filter string An optional list of query parameters specified as JSON text in the form of: {"agentPoolNames":["agentpool1","agentpool2",...]} Since agentPoolNames support multiple values, its values must be specified with array notation.
- Home Documentation Storage Storage Transfer Service Reference Send feedback Method: projects.agentPools.list Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://storagetransfer.googleapis.com/v1/projects/{projectId}/agentPools The URL uses gRPC Transcoding syntax.

