---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:38.985Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory allowlisted access to firebase.googleapis.com/FirebaseProject"
feature_slug: "cloud-asset-inventory-allowlisted-access-to-firebase-googleapis-com-firebaseproject"
latest_feature_date: "2021-08-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage"
  - "https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes"
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
keywords:
  - "asset"
  - "inventory"
  - "allowlisted"
  - "access"
  - "to"
  - "firebase"
  - "googleapis"
  - "com"
---

# Cloud Asset Inventory allowlisted access to firebase.googleapis.com/FirebaseProject

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Asset Inventory now exposes the Firebase firebase.googleapis.com/FirebaseProject resource type to allowlisted users through ExportAssets, BatchGetAssetsHistory, and the Feed API.

## Extended Definition

Cloud Asset Inventory now exposes the Firebase firebase.googleapis.com/FirebaseProject resource type to allowlisted users through ExportAssets, BatchGetAssetsHistory, and the Feed API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage](https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage)
- [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)
- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)

## Supporting Pages

### "Export asset metadata to Cloud Storage \_|\_ Cloud Asset Inventory \_|\_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage](https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage)
- Source ID: `site-docs-reference`
- Final score: 260
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "contentType": "RESOURCE", "readTime": "2024-01-30T00:00:00Z", "outputConfig": { "gcsDestination": { "uri": "gs:// my-bucket / my-file " } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :exportAssets" Select-Object -Expand Content Example response { "name" : "projects/000000000000/operations/ExportAssets/RESOURCE/00000000000000000000000000000000" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.asset.v1.ExportAssetsRequest" , "parent" : "projects/000000000000" , "readTime" : "2024-01-30T00:00:00Z" , "contentType" : "RESOURCE" , "outputConfig" : { "gcsDestination" : { "uri" : "gs://my-bucket/export.txt" } } } } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://cloudasset.googleapis.com/v1/ OPERATION PATH " Select-Object -Expand Content Example response { "name" : "projects/000000000000/operations/ExportAssets/RESOURCE/00000000000000000000000000000000" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.asset.v1.ExportAssetsRequest" , "parent" : "projects/000000000000" , "readTime" : "2024-01-30T00:00:00Z" , "contentType" : "RESOURCE" , "outputConfig" : { "gcsDestination" : { "uri" : "gs://my-bucket/export.txt" } } } } View an asset snapshot To view your asset snapshot: Go to the Cloud Storage Buckets page in the Google Cloud console.
- You can check the active account by running gcloud auth list . curl -X POST \ -H "X-Goog-User-Project: BILLING PROJECT ID " \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "contentType": "RESOURCE", "readTime": "2024-01-30T00:00:00Z", "outputConfig": { "gcsDestination": { "uri": "gs:// my-bucket / my-file " } } }' \ https://cloudasset.googleapis.com/v1/projects/ my-project :exportAssets PowerShell (Windows) Note : The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- You can check the active account by running gcloud auth list . curl -X GET \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ https://cloudasset.googleapis.com/v1/ OPERATION PATH PowerShell (Windows) Note : The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Monitor asset changes with Pub/Sub \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)
- Source ID: `site-docs-reference`
- Final score: 256
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "feed": { "assetNames": [], "assetTypes": [ "gkemulticloud.googleapis.com/AttachedCluster" ], "feedOutputConfig": { "pubsubDestination": { "topic": "projects/my-project/topics/my-topic" } } }, "update mask": { "paths": ["feed output config.pubsub destination.topic", "asset names", "asset types"] } } "@ Invoke-WebRequest -Method PATCH -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds/ my-feed " Select-Object -Expand Content Example response { "feeds" : [ { "name" : "projects/000000000000/feeds/my-feed" , "assetTypes" : [ "bigquery.googleapis.com/Table" , "gkemulticloud.googleapis.com/AttachedCluster" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } ] } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "feedId": " my-feed ", "feed": { "assetNames": [ "//storage.googleapis.com/ my-bucket " ], "assetTypes": [ "bigquery.googleapis.com/Table" ], "contentType": "RESOURCE", "feedOutputConfig": { "pubsubDestination": { "topic": "projects/ my-project /topics/ my-topic " } } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds" Select-Object -Expand Content Example response { "name" : "projects/000000000000/feeds/my-feed" , "assetNames" : [ "//storage.googleapis.com/my-bucket" ], "assetTypes" : [ "bigquery.googleapis.com/Table" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds" Select-Object -Expand Content Example response { "feeds" : [ { "name" : "projects/000000000000/feeds/my-feed" , "assetNames" : [ "//storage.googleapis.com/my-bucket" ], "assetTypes" : [ "bigquery.googleapis.com/Table" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } ] } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds/ my-feed " Select-Object -Expand Content Example response { "name" : "projects/000000000000/feeds/my-feed" , "assetNames" : [ "//storage.googleapis.com/my-bucket" ], "assetTypes" : [ "bigquery.googleapis.com/Table" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- API reference workflows. googleapis. com/ Workflow Policy types Cloud Asset Inventory uses the following asset types for the ACCESS POLICY , IAM POLICY , and ORG POLICY content types .
- Security Posture API API reference securityposture. googleapis. com/ Posture securityposture. googleapis. com/ PostureDeployment Sensitive Data Protection API reference dlp. googleapis. com/ DeidentifyTemplate dlp. googleapis. com/ DiscoveryConfig dlp.googleapis.com/DlpJob dlp. googleapis. com/ InspectTemplate dlp.googleapis.com/JobTrigger dlp. googleapis. com/ StoredInfoType Serverless VPC Access API reference vpcaccess. googleapis. com/ Connector Service Directory API reference servicedirectory. googleapis. com/ Endpoint servicedirectory. googleapis. com/ Namespace servicedirectory. googleapis. com/ Service Service Management Service Management asset change history might be incomplete.
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS INVENTORY content type .
- Chrome Enterprise Premium API reference beyondcorp. googleapis. com/ AppConnection beyondcorp. googleapis. com/ AppConnector beyondcorp. googleapis. com/ AppGateway beyondcorp. googleapis. com/ ClientConnectorService beyondcorp. googleapis. com/ ClientGateway Cloud Asset Inventory API reference cloudasset.googleapis.com/Feed Effective tags aren't supported.

