---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.664Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service Azure Blob Storage transfer source support"
feature_slug: "storage-transfer-service-azure-blob-storage-transfer-source-support"
latest_feature_date: "2020-07-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData"
  - "https://docs.cloud.google.com/storage-transfer/docs/iam-cloud"
  - "https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers"
keywords:
  - "storage"
  - "transfer"
  - "azure"
  - "blob"
  - "source"
  - "supports"
  - "transfers"
  - "microsoft"
---

# Storage Transfer Service Azure Blob Storage transfer source support

Product: Storage Transfer Service
Coverage: LOW

## Step 02 Summary

Storage Transfer Service supports transfers from Microsoft Azure Blob Storage.

## Extended Definition

Storage Transfer Service supports transfers from Microsoft Azure Blob Storage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData)
- [https://docs.cloud.google.com/storage-transfer/docs/iam-cloud](https://docs.cloud.google.com/storage-transfer/docs/iam-cloud)
- [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers)

## Supporting Pages

### "Class AzureBlobStorageData (1.20.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData)
- Source ID: `site-python-reference`
- Final score: 45
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See [Configure access to a source: Microsoft Azure Blob Storage] (https://cloud.google.com/storage-transfer/docs/source-microsoft-azure#secret manager) for more information.
- In an AzureBlobStorageData resource, a blobs's name is the Azure Blob Storage blob's key name <https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names> .
- To configure federated identity, see Configure access to Microsoft Azure Storage <https://cloud.google.com/storage-transfer/docs/source-microsoft-azure#option 3 authenticate using federated identity> .
- 1.20.0 (latest) 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.5 1.10.0 1.9.2 1.8.1 1.7.1 1.6.0 1.5.2 1.4.1 1.3.1 1.2.1 1.1.1 1.0.2 0.1.0 AzureBlobStorageData ( mapping = None , , ignore unknown fields = False , kwargs ) An AzureBlobStorageData resource can be a data source, but not a data sink.

### "Agentless transfer permissions \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/iam-cloud](https://docs.cloud.google.com/storage-transfer/docs/iam-cloud)
- Source ID: `site-docs-root`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Agentless transfers include transfers within Cloud Storage, or from Amazon S3, Azure Blob Storage or Data Lake Storage Gen2, or URL lists of public objects.
- On the source bucket, grant the following roles at the bucket level to the service agent: Storage Legacy Bucket Reader ( roles/storage.legacyBucketReader ) Storage Object Viewer ( roles/storage.objectViewer ) On the destination bucket, grant the following role at the bucket level to the same service agent: Storage Legacy Bucket Writer ( roles/storage.legacyBucketWriter ) In addition, for transfers configured to overwrite objects in the sink when different, or never: Storage Object Viewer ( roles/storage.objectViewer ) For instructions on granting roles at the bucket level, refer to the following pages: Configure access to a source: Cloud Storage Configure access to a sink: Cloud Storage Cloud Storage Legacy roles cannot be granted at the project level.
- Cross-project Cloud Storage transfers To transfer objects between Cloud Storage buckets in different projects, you must grant permission to a single service agent on both the source bucket and the destination bucket.
- AWS and Microsoft permissions You must also configure access to your source files if they're in AWS S3 or Microsoft Azure Storage.

### "Event-driven transfers \_|\_ Storage Transfer Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers)
- Source ID: `site-docs-root`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn how Set up event-driven transfers from Cloud Storage Set up event-driven transfers from AWS S3 Set up event-driven transfers from Azure Blob Storage or Data Lake Storage Gen2 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Storage Transfer Service can listen to event notifications in AWS, Azure, or Google Cloud to automatically transfer data that has been added or updated in the source location.
- Event-driven transfers are supported from AWS S3, Azure, or Cloud Storage, and always use a Cloud Storage bucket as the destination.
- Home Documentation Storage Storage Transfer Service Send feedback Event-driven transfers Stay organized with collections Save and categorize content based on your preferences.

