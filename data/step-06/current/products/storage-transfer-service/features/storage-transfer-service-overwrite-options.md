---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.646Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service overwrite options"
feature_slug: "storage-transfer-service-overwrite-options"
latest_feature_date: "2022-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferOptions"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage"
keywords:
  - "storage"
  - "transfer"
  - "overwrite"
  - "options"
  - "now"
  - "supports"
  - "ga"
  - "behavior"
---

# Storage Transfer Service overwrite options

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service now supports GA overwrite behavior controls via the overwriteWhen field, allowing destination files to be overwritten always, never, or only when ETags and checksums indicate a change.

## Extended Definition

Storage Transfer Service now supports GA overwrite behavior controls via the overwriteWhen field, allowing destination files to be overwritten always, never, or only when ETags and checksums indicate a change.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferOptions](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferOptions)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage)

## Supporting Pages

### TransferOptions \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferOptions](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferOptions)
- Source ID: `site-api-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink . metadataOptions object ( MetadataOptions ) Represents the selected metadata options for a transfer job.
- JSON representation { "overwriteObjectsAlreadyExistingInSink" : boolean , "deleteObjectsUniqueInSink" : boolean , "deleteObjectsFromSourceAfterTransfer" : boolean , "overwriteWhen" : enum ( OverwriteWhen ) , "metadataOptions" : { object ( MetadataOptions ) } } Fields overwriteObjectsAlreadyExistingInSink boolean When to overwrite objects that already exist in the sink.
- If unspecified, the default behavior is the same as STORAGE CLASS DESTINATION BUCKET DEFAULT . temporaryHold enum ( TemporaryHold ) Specifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets.
- If unspecified, the default behavior is the same as TEMPORARY HOLD PRESERVE . kmsKey enum ( KmsKey ) Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets.

### "Transfer from HDFS to Cloud Storage \_|\_ Storage Transfer Service \_|\_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Transfer options : Specify whether to overwrite destination files ( --overwrite-when=different or always ) and whether to delete certain files during or after the transfer ( --delete-from=destination-if-unique or source-after-transfer ); and optionally set a storage class on transferred objects ( --custom-storage-class ).
- POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { ... "transferSpec" : { "source agent pool name" : " POOL NAME " , "hdfsDataSource" : { "path" : "/mount" }, "gcsDataSink" : { "bucketName" : " SINK NAME " }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : false } } } Refer to the transferJobs.create reference for details about additional supported fields.
- Additional options include: --do-not-run prevents Storage Transfer Service from running the job upon submission of the command.
- Transfer options The following Storage Transfer Service features are available for transfers from HDFS to Cloud Storage.

### "Transfer from a file system to Cloud Storage \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Transfer options : Specify whether to overwrite destination files ( --overwrite-when=different or always ) and whether to delete certain files during or after the transfer ( --delete-from=destination-if-unique or source-after-transfer ); specify which metadata values to preserve ( --preserve-metadata ); and optionally set a storage class on transferred objects ( --custom-storage-class ).
- Under When to overwrite , select one of the following: Never : Storage Transfer Service skips transferring any files from the source that have the same name as a file present in the destination.
- Logging Storage Transfer Service supports Cloud Logging for Storage Transfer Service (recommended) as well as agent-based transfer logs .
- Transfer options The following Storage Transfer Service features are available for transfers from file systems to Cloud Storage.

