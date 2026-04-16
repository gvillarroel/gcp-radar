---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.642Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service Manifest support"
feature_slug: "storage-transfer-service-manifest-support"
latest_feature_date: "2023-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/manifest"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3"
keywords:
  - "storage"
  - "transfer"
  - "manifest"
  - "now"
  - "supports"
  - "files"
  - "availability"
  - "specified"
---

# Storage Transfer Service Manifest support

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service now supports Manifest files in general availability to transfer a specified list of objects, object versions, and files from cloud and on-premises sources; Storage Transfer Service provides preview support for Manifest-based transfers that allow moving specific lists of objects, object versions, and files from cloud or on-premises sources.

## Extended Definition

Storage Transfer Service now supports Manifest files in general availability to transfer a specified list of objects, object versions, and files from cloud and on-premises sources; Storage Transfer Service provides preview support for Manifest-based transfers that allow moving specific lists of objects, object versions, and files from cloud or on-premises sources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/manifest](https://docs.cloud.google.com/storage-transfer/docs/manifest)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)

## Supporting Pages

### "Transfer specific files or objects using a manifest \_|\_ Storage Transfer\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/manifest](https://docs.cloud.google.com/storage-transfer/docs/manifest)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Storage Transfer Service supports the transfer of specific files or objects, which are specified using a manifest .
- Enter the manifest file location. gcloud To transfer the files or objects that are listed in the manifest, include the --manifest-file= MANIFEST FILE flag with your gcloud transfer jobs create command. gcloud transfer jobs create SOURCE DESTINATION \ --manifest-file = MANIFEST FILE MANIFEST FILE can be any of the following values: The path to the CSV file in a Cloud Storage bucket: --manifest-file=gs://my bucket/sample manifest.csv See Upload the manifest to Cloud Storage for details on required permissions, if the bucket or file is not public.
- The relative path from the file system SOURCE , including any path that was specified: --manifest-file=source://relative path/sample manifest.csv The relative path from the file system DESTINATION , including any path that was specified: --manifest-file=destination://relative path/sample manifest.csv REST + Client libraries REST To transfer the files or objects that are listed in the manifest, make a createTransferJob API call that specifies a transferSpec with the transferManifest field added.
- Defaults to 'projects/{project id}/agentPools/transfer service default' source agent pool name = 'projects/my-project/agentPools/my-agent' The root directory path on the source filesystem root directory = '/directory/to/transfer/source' Google Cloud Storage destination bucket name sink bucket = 'my-gcs-destination-bucket' Transfer manifest location.

### "Transfer from HDFS to Cloud Storage \_|\_ Storage Transfer Service \_|\_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To run the job, update it to add a schedule, or use jobs run to start it manually . --manifest-file specifies the path to a CSV file in Cloud Storage containing a list of files to transfer from your source.
- Transfer options : Specify whether to overwrite destination files ( --overwrite-when=different or always ) and whether to delete certain files during or after the transfer ( --delete-from=destination-if-unique or source-after-transfer ); and optionally set a storage class on transferred objects ( --custom-storage-class ).
- Filter by prefix Delete at source Manifest Cloud Monitoring Files transferred from HDFS do not retain their metadata .
- Storage Transfer Service supports transfers from cloud and on-premises Hadoop Distributed File System (HDFS) sources.

### "Transfer from Amazon S3 to Cloud Storage \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Supported regions Storage Transfer Service supports the following Amazon S3 regions: af-south-1 ap-east-1 ap-northeast-1 ap-northeast-2 ap-northeast-3 ap-south-1 ap-south-2 ap-southeast-1 ap-southeast-2 ap-southeast-3 ap-southeast-4 ca-central-1 ca-west-1 eu-central-1 eu-central-2 eu-north-1 eu-south-1 eu-south-2 eu-west-1 eu-west-2 eu-west-3 il-central-1 me-central-1 me-south-1 sa-east-1 us-east-1 us-east-2 us-west-1 us-west-2 Transfers using the managed private network support the following AWS regions: ap-east-1 ap-northeast-1 ap-northeast-2 ap-northeast-3 ap-south-1 ap-south-2 ap-southeast-1 ca-central-1 ca-west-1 eu-central-1 eu-central-2 eu-north-1 eu-south-1 eu-south-2 eu-west-1 eu-west-2 eu-west-3 us-east-1 us-east-2 us-west-1 us-west-2 Transfer options The following Storage Transfer Service features are available for transfers from S3 to Cloud Storage Transfer specific files using a manifest You can pass a list of files for Storage Transfer Service to act on.
- To run the job, update it to add a schedule, or use jobs run to start it manually . --manifest-file specifies the path to a CSV file in Cloud Storage containing a list of files to transfer from your source.
- Transfer options : Specify whether to overwrite destination files ( --overwrite-when=different or always ) and whether to delete certain files during or after the transfer ( --delete-from=destination-if-unique or source-after-transfer ); specify which metadata values to preserve ( --preserve-metadata ); and optionally set a storage class on transferred objects ( --custom-storage-class ).
- Metadata preservation When transferring files from S3, Storage Transfer Service can optionally preserve certain attributes as custom metadata.

