---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.636Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Agentless transfer user-managed service account delegation"
feature_slug: "agentless-transfer-user-managed-service-account-delegation"
latest_feature_date: "2025-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions"
  - "https://docs.cloud.google.com/storage-transfer/docs/iam-cloud"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3"
keywords:
  - "agentless"
  - "transfer"
  - "user"
  - "managed"
  - "account"
  - "delegation"
  - "storage"
  - "now"
---

# Agentless transfer user-managed service account delegation

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service now supports agentless transfers using user-managed service accounts in place of the default Google-managed service agent for finer-grained bucket permission and user usage control.

## Extended Definition

Storage Transfer Service now supports agentless transfers using user-managed service accounts in place of the default Google-managed service agent for finer-grained bucket permission and user usage control.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions)
- [https://docs.cloud.google.com/storage-transfer/docs/iam-cloud](https://docs.cloud.google.com/storage-transfer/docs/iam-cloud)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)

## Supporting Pages

### "Delegate service agent permissions to a user-managed service account \_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : "A transfer using a user-managed service account for bucket permissions" , "status" : "ENABLED" , "projectId" : "PROJECT ID" , "serviceAccount" : "SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com" , "transferSpec" : { ... } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Storage Transfer Service Send feedback Delegate service agent permissions to a user-managed service account Stay organized with collections Save and categorize content based on your preferences.
- To use an existing user-managed service account, you need its email address, which uses the following format: SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com If the service account is in a different project than the transfer job, see Enable service accounts to be attached across projects .
- These user-managed service accounts are granted permissions on specific source and destination buckets, and are also restricted to specific user accounts (the accounts creating or triggering the transfer job).

### "Agentless transfer permissions \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/iam-cloud](https://docs.cloud.google.com/storage-transfer/docs/iam-cloud)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To the user / user-managed service account: roles/owner roles/storagetransfer.admin roles/storagetransfer.transferAgent roles/storage.objectAdmin roles/pubsub.editor To the Google-managed service agent: roles/storage.admin roles/storagetransfer.serviceAgent For instructions on installing the gcloud CLI, see the gcloud quickstart .
- To inspect existing permissions and print out any missing roles, run the following command: gcloud transfer authorize To automatically apply those roles, use the --add-missing flag: gcloud transfer authorize --add-missing To grant permissions to a user-managed service account in place of the user, pass the service account key file: gcloud transfer authorize --add-missing --creds-file = path/to/key.json The command grants the following permissions.
- When transferring data between cloud providers in an agentless transfer, you must grant permissions to two principals: The user account that's creating or managing the transfer.
- The user or user-managed service account only needs permissions on the project that is creating the transfer.

### "Transfer from Amazon S3 to Cloud Storage \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Google-managed service account , also known as the service agent, used by Storage Transfer Service.
- CloudFront distribution If you're transferring from S3 via a CloudFront distribution, specify the distribution domain name as the value of the transferSpec.awsS3DataSource.cloudfrontDomain field: POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : " DESCRIPTION " , "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "awsS3DataSource" : { "bucketName" : " AWS SOURCE NAME " , "cloudfrontDomain" : " https://dy1h2n3l4ob56.cloudfront.net " , "awsAccessKey" : { "accessKeyId" : " AWS ACCESS KEY ID " , "secretAccessKey" : " AWS SECRET ACCESS KEY " } }, "gcsDataSink" : { "bucketName" : " GCS SINK NAME " } } } Managed private network To transfer from S3 using a Google-managed private network, specify the transferSpec.awsS3DataSource.managedPrivateNetwork field: POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : " DESCRIPTION " , "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "awsS3DataSource" : { "bucketName" : " AWS SOURCE NAME " , "managedPrivateNetwork" : TRUE , "awsAccessKey" : { "accessKeyId" : " AWS ACCESS KEY ID " , "secretAccessKey" : " AWS SECRET ACCESS KEY " } }, "gcsDataSink" : { "bucketName" : " GCS SINK NAME " } } } Client libraries The following samples show you how to use Storage Transfer Service programmatically with Go, Java, Node.js, and Python.
- TimeOfDay ; import java.io.IOException ; import java.util.Calendar ; public class TransferFromAws { // Creates a one-off transfer job from Amazon S3 to Google Cloud Storage. public static void transferFromAws ( String projectId , String jobDescription , String awsSourceBucket , String gcsSinkBucket , long startDateTime ) throws IOException { // Your Google Cloud Project ID // String projectId = "your-project-id"; // A short description of this job // String jobDescription = "Sample transfer job from S3 to GCS."; // The name of the source AWS bucket to transfer data from // String awsSourceBucket = "yourAwsSourceBucket"; // The name of the GCS bucket to transfer data to // String gcsSinkBucket = "your-gcs-bucket"; // What day and time in UTC to start the transfer, expressed as an epoch date timestamp. // If this is in the past relative to when the job is created, it will run the next day. // long startDateTime = // new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse("2000-01-01 00:00:00").getTime(); // The ID used to access your AWS account.
- Supported regions Storage Transfer Service supports the following Amazon S3 regions: af-south-1 ap-east-1 ap-northeast-1 ap-northeast-2 ap-northeast-3 ap-south-1 ap-south-2 ap-southeast-1 ap-southeast-2 ap-southeast-3 ap-southeast-4 ca-central-1 ca-west-1 eu-central-1 eu-central-2 eu-north-1 eu-south-1 eu-south-2 eu-west-1 eu-west-2 eu-west-3 il-central-1 me-central-1 me-south-1 sa-east-1 us-east-1 us-east-2 us-west-1 us-west-2 Transfers using the managed private network support the following AWS regions: ap-east-1 ap-northeast-1 ap-northeast-2 ap-northeast-3 ap-south-1 ap-south-2 ap-southeast-1 ca-central-1 ca-west-1 eu-central-1 eu-central-2 eu-north-1 eu-south-1 eu-south-2 eu-west-1 eu-west-2 eu-west-3 us-east-1 us-east-2 us-west-1 us-west-2 Transfer options The following Storage Transfer Service features are available for transfers from S3 to Cloud Storage Transfer specific files using a manifest You can pass a list of files for Storage Transfer Service to act on.

