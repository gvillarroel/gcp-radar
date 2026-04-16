---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.676Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service API documentation updates"
feature_slug: "storage-transfer-service-api-documentation-updates"
latest_feature_date: "2015-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents"
  - "https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage"
  - "https://docs.cloud.google.com/storage-transfer/docs/libraries"
keywords:
  - "storage"
  - "transfer"
  - "documentation"
  - "updates"
  - "was"
  - "updated"
  - "additional"
  - "content"
---

# Storage Transfer Service API documentation updates

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

The Storage Transfer Service API documentation was updated with additional documentation content.

## Extended Definition

The Storage Transfer Service API documentation was updated with additional documentation content.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents](https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents)
- [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage)
- [https://docs.cloud.google.com/storage-transfer/docs/libraries](https://docs.cloud.google.com/storage-transfer/docs/libraries)

## Supporting Pages

### "Manage transfer agents \_|\_ Storage Transfer Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents](https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Both flags delete all agents on the machine; the --uninstall flag additionally uninstalls the agent Docker image. gcloud transfer agents delete --all gcloud transfer agents delete --uninstall File system transfer details Incremental transfers Storage Transfer Service begins all transfers by computing the data present at the source and destination to determine which source files are new, updated, or deleted since the last transfer.
- Home Documentation Storage Storage Transfer Service Send feedback Manage transfer agents Stay organized with collections Save and categorize content based on your preferences.
- If your transfer is from AWS S3 or S3-compatible storage, pass your access key ID and secret key using environment variables: sudo docker run --ulimit memlock=64000000 -d --rm \ -v HOST DIRECTORY : CONTAINER DIRECTORY \ -v PATH/TO/KEY.JSON :/etc/gcloud/key.json:ro \ -e AWS ACCESS KEY ID= AWS ACCESS KEY ID \ -e AWS SECRET ACCESS KEY= AWS SECRET ACCESS KEY \ gcr.io/cloud-ingest/tsop-agent:latest \ --project-id= PROJECT ID \ --creds-file=/etc/gcloud/key.json \ --hostname=$(hostname) \ --agent-pool= POOL NAME --gcs-api-endpoint=storage.
- If your transfer is from AWS S3 or S3-compatible storage, pass your access key ID and secret key using environment variables: -e AWS ACCESS KEY ID= AWS ACCESS KEY ID \ -e AWS SECRET ACCESS KEY= AWS SECRET ACCESS KEY ``` --env HTTPS PROXY= PROXY specifies a forward proxy on your network.

### "Transfer between Cloud Storage buckets \_|\_ Storage Transfer Service \_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage Storage Transfer Service Send feedback Transfer between Cloud Storage buckets Stay organized with collections Save and categorize content based on your preferences.
- To do so, use gcloud storage buckets add-iam-policy-binding : gcloud storage buckets add-iam-policy-binding gs:// bucket name \ --member=serviceAccount: project-12345678 @storage-transfer-service.iam.gserviceaccount.com \ --role=roles/storage.admin For instructions using the Google Cloud console or API, refer to Use IAM permissions in the Cloud Storage documentation.
- The object's updated time is reset upon transfer, so the object's time spent in its storage class is also reset.
- Request using transferJobs create : POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : "YOUR DESCRIPTION" , "status" : "ENABLED" , "projectId" : "PROJECT ID" , "schedule" : { "scheduleStartDate" : { "day" : 1 , "month" : 1 , "year" : 2025 }, "startTimeOfDay" : { "hours" : 1 , "minutes" : 1 }, "scheduleEndDate" : { "day" : 1 , "month" : 1 , "year" : 2025 } }, "transferSpec" : { "gcsDataSource" : { "bucketName" : "GCS SOURCE NAME" }, "gcsDataSink" : { "bucketName" : "GCS SINK NAME" }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : true } } } Response: 200 OK { "transferJob" : [ { "creationTime" : "2015-01-01T01:01:00.000000000Z" , "description" : "YOUR DESCRIPTION" , "name" : "transferJobs/JOB ID" , "status" : "ENABLED" , "lastModificationTime" : "2015-01-01T01:01:00.000000000Z" , "projectId" : "PROJECT ID" , "schedule" : { "scheduleStartDate" : { "day" : 1 , "month" : 1 , "year" : 2015 }, "startTimeOfDay" : { "hours" : 1 , "minutes" : 1 } }, "transferSpec" : { "gcsDataSource" : { "bucketName" : "GCS SOURCE NAME" , }, "gcsDataSink" : { "bucketName" : "GCS NEARLINE SINK NAME" }, "objectConditions" : { "minTimeElapsedSinceLastModification" : "2592000.000s" }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : true } } } ] } Client libraries In this example, you'll learn how to move files from one Cloud Storage bucket to another.

### Storage Transfer Service client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/libraries](https://docs.cloud.google.com/storage-transfer/docs/libraries)
- Source ID: `site-api-reference`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . def quickstart project id :, gcs source bucket :, gcs sink bucket : Your Google Cloud Project ID project id = "your-project id" The name of the source GCS bucket to transfer objects from gcs source bucket = "your-source-gcs-source-bucket" The name of the GCS bucket to transfer objects to gcs sink bucket = "your-sink-gcs-bucket" require "google/cloud/storage transfer" transfer job = { project id : project id , transfer spec : { gcs data source : { bucket name : gcs source bucket }, gcs data sink : { bucket name : gcs sink bucket } }, status : :ENABLED } client = Google :: Cloud :: StorageTransfer . storage transfer service transfer job response = client . create transfer job transfer job : transfer job run request = { project id : project id , job name : transfer job response . name } client . run transfer job run request puts "Created and ran transfer job between #{ gcs source bucket } and #{ gcs sink bucket } with name #{ transfer job response . name } " end Using the client library with Cloud Shell Editor Java To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Node.js To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Python To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Additional resources C++ API Reference Documentation Source Code GitHub Issue Tracker Stack Overflow C# API Reference Documentation Source Code GitHub Issue Tracker Stack Overflow Go API Reference Documentation Source Code GitHub Issue Tracker Stack Overflow Java API Reference Documentation Source Code GitHub Issue Tracker Stack Overflow Node.js API Reference Documentation Source Code GitHub Issue Tracker Stack Overflow PHP API Reference Documentation Source Code GitHub Issue Tracker Stack Overflow Python API Reference Documentation Source Code GitHub Issue Tracker Stack Overflow Ruby API Reference Documentation Source Code GitHub Issue Tracker Stack Overflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Storage Transfer Service Reference Send feedback Storage Transfer Service client libraries Stay organized with collections Save and categorize content based on your preferences.
- For more information, see the Storage Transfer Service Node.js API reference documentation .
- For more information, see the Storage Transfer Service Python API reference documentation .

