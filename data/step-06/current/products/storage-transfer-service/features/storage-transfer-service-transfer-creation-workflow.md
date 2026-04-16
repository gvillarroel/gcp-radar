---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.675Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service transfer creation workflow"
feature_slug: "storage-transfer-service-transfer-creation-workflow"
latest_feature_date: "2015-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation"
  - "https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents"
  - "https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication"
keywords:
  - "storage"
  - "transfer"
  - "creation"
  - "workflow"
  - "was"
  - "updated"
  - "reflect"
  - "changes"
---

# Storage Transfer Service transfer creation workflow

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

The transfer creation workflow in Storage Transfer Service was updated to reflect changes in creating transfer jobs.

## Extended Definition

The transfer creation workflow in Storage Transfer Service was updated to reflect changes in creating transfer jobs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation)
- [https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents](https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents)
- [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication)

## Supporting Pages

### "Metadata preservation \_|\_ Storage Transfer Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Transfers between Cloud Storage buckets can optionally preserve object ACLs, customer-managed encryption keys, storage class, object creation time (as the value of a customTime field), and temporary holds.
- Similarly, updated reflects the time that metadata for an object is modified in Cloud Storage.
- Similarly, updated reflects the time that metadata for an object is modified in Cloud Storage.
- Similarly, updated reflects the time that metadata for an object is modified in Cloud Storage.

### "Manage transfer agents \_|\_ Storage Transfer Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents](https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents)
- Source ID: `site-docs-root`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Source files that were created, updated, or deleted during a transfer may or may not have those changes reflected in the destination data set.
- Both flags delete all agents on the machine; the --uninstall flag additionally uninstalls the agent Docker image. gcloud transfer agents delete --all gcloud transfer agents delete --uninstall File system transfer details Incremental transfers Storage Transfer Service begins all transfers by computing the data present at the source and destination to determine which source files are new, updated, or deleted since the last transfer.
- If your transfer is from AWS S3 or S3-compatible storage, pass your access key ID and secret key using environment variables: sudo docker run --ulimit memlock=64000000 -d --rm \ -v HOST DIRECTORY : CONTAINER DIRECTORY \ -v PATH/TO/KEY.JSON :/etc/gcloud/key.json:ro \ -e AWS ACCESS KEY ID= AWS ACCESS KEY ID \ -e AWS SECRET ACCESS KEY= AWS SECRET ACCESS KEY \ gcr.io/cloud-ingest/tsop-agent:latest \ --project-id= PROJECT ID \ --creds-file=/etc/gcloud/key.json \ --hostname=$(hostname) \ --agent-pool= POOL NAME --gcs-api-endpoint=storage.
- If your transfer is from AWS S3 or S3-compatible storage, pass your access key ID and secret key using environment variables: -e AWS ACCESS KEY ID= AWS ACCESS KEY ID \ -e AWS SECRET ACCESS KEY= AWS SECRET ACCESS KEY ``` --env HTTPS PROXY= PROXY specifies a forward proxy on your network.

### "Use cross-bucket replication \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant required roles Cross-bucket replication uses Storage Transfer Service to replicate objects from your source bucket to your destination bucket, and Pub/Sub to receive notifications of changes to your source bucket.
- Cross-bucket replication uses Storage Transfer Service to replicate objects and Pub/Sub to get alerted of changes to the source and destination buckets.
- The Storage Transfer Service service agent or user service account needs the following permissions to replicate your objects and set up Pub/Sub notifications for your source bucket: Required permissions The following permissions must be granted on the source project: pubsub.topics.create pubsub.subscriptions.create pubsub.subscriptions.consume The following permissions must be granted on the source bucket: storage.buckets.get storage.buckets.update storage.objects.get The following permissions must be granted on the destination bucket: storage.buckets.get storage.objects.create storage.objects.get These permissions can be granted through custom roles or by granting all of the following predefined roles : Pub/Sub Editor ( roles/pubsub.editor ) role on the source project Storage Legacy Bucket Owner ( roles/storage.legacyBucketOwner ) and Storage Object Viewer ( roles/storage.objectViewer ) roles on the source bucket Storage Legacy Bucket Writer ( roles/storage.legacyBucketWriter ) and Storage Object Viewer ( roles/storage.objectViewer ) roles on the destination bucket Grant required roles for Pub/Sub Cloud Storage uses a Google-managed service agent to manage Pub/Sub notifications.
- Use cURL to call the Storage Transfer Service REST API with a transferJobs.list request: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://storagetransfer.googleapis.com/v1/transferJobs" View a replication job Console For Google Cloud console instructions on how to view a replication job, refer to View a replication job using the Google Cloud console .

