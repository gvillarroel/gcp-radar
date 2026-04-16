---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.662Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service source and destination path specification"
feature_slug: "storage-transfer-service-source-and-destination-path-specification"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/iam-cloud"
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs"
  - "https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices"
keywords:
  - "storage"
  - "transfer"
  - "source"
  - "destination"
  - "path"
  - "specification"
  - "supports"
  - "specifying"
---

# Storage Transfer Service source and destination path specification

Product: Storage Transfer Service
Coverage: LOW

## Step 02 Summary

Storage Transfer Service supports specifying source and destination paths when creating a transfer.

## Extended Definition

Storage Transfer Service supports specifying source and destination paths when creating a transfer.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/iam-cloud](https://docs.cloud.google.com/storage-transfer/docs/iam-cloud)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs)
- [https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices](https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices)

## Supporting Pages

### "Agentless transfer permissions \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/iam-cloud](https://docs.cloud.google.com/storage-transfer/docs/iam-cloud)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On the source bucket, grant the following roles at the bucket level to the service agent: Storage Legacy Bucket Reader ( roles/storage.legacyBucketReader ) Storage Object Viewer ( roles/storage.objectViewer ) On the destination bucket, grant the following role at the bucket level to the same service agent: Storage Legacy Bucket Writer ( roles/storage.legacyBucketWriter ) In addition, for transfers configured to overwrite objects in the sink when different, or never: Storage Object Viewer ( roles/storage.objectViewer ) For instructions on granting roles at the bucket level, refer to the following pages: Configure access to a source: Cloud Storage Configure access to a sink: Cloud Storage Cloud Storage Legacy roles cannot be granted at the project level.
- Cross-project Cloud Storage transfers To transfer objects between Cloud Storage buckets in different projects, you must grant permission to a single service agent on both the source bucket and the destination bucket.
- Role / Permission What it does Notes Storage Legacy Bucket Writer ( roles/storage.legacyBucketWriter ) Enables Storage Transfer Service to read bucket metadata, list objects in the bucket, and write objects to the destination bucket.
- Also grant on the Cloud Storage destination bucket if your transfer is configured to overwrite objects in the sink when different, or never.

### "Best practices for file system transfers \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices](https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you intend to fully utilize a 20 Gbps wide-area network (WAN), your agent machine's network interface must support 20 Gbps to read data from your networked file system, and another 20 Gbps to transfer data to Cloud Storage, or 40 Gbps of total bandwidth.
- Home Documentation Storage Storage Transfer Service Send feedback Best practices for file system transfers Stay organized with collections Save and categorize content based on your preferences.
- Storage Transfer Service is a large-scale, throughput-optimized service, so your performance on very small test data sets is not indicative of your performance on large data sets in production.
- If you saturate your outbound bandwidth before you reach your desired limit, you can do any of the following: Control the bandwidth used by Storage Transfer Service .

### "REST Resource: transferJobs \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs)
- Source ID: `site-api-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- See https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions for required permissions. transferSpec object ( TransferSpec ) Transfer specification. replicationSpec object ( ReplicationSpec ) Replication specification. notificationConfig object ( NotificationConfig ) Notification configuration. loggingConfig object ( LoggingConfig ) Logging configuration. schedule object ( Schedule ) Specifies schedule for the transfer job.
- Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account id:queue name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'. eventStreamStartTime string ( Timestamp format) Specifies the date and time that Storage Transfer Service starts listening for events from this stream.
- Home Documentation Storage Storage Transfer Service Reference Send feedback REST Resource: transferJobs Stay organized with collections Save and categorize content based on your preferences.
- Cross-bucket replication copies new or updated objects from a source Cloud Storage bucket to a destination Cloud Storage bucket.

