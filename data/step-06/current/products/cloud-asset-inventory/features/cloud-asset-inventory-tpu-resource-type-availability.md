---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:39.170Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory TPU resource type availability"
feature_slug: "cloud-asset-inventory-tpu-resource-type-availability"
latest_feature_date: "2020-12-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/exportAssets"
keywords:
  - "asset"
  - "inventory"
  - "tpu"
  - "resource"
  - "type"
  - "availability"
  - "googleapis"
  - "com"
---

# Cloud Asset Inventory TPU resource type availability

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

`tpu.googleapis.com/Node` is now publicly available through the Cloud Asset APIs.

## Extended Definition

`tpu.googleapis.com/Node` is now publicly available through the Cloud Asset APIs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/exportAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/exportAssets)

## Supporting Pages

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS INVENTORY content type .
- Service Asset type Access policy (VPC Service Controls policy) API reference Supported policy parent cloudresourcemanager. googleapis. com/ Organization Not available in the analysis APIs.
- API reference workflows. googleapis. com/ Workflow Policy types Cloud Asset Inventory uses the following asset types for the ACCESS POLICY , IAM POLICY , and ORG POLICY content types .
- API reference dataflow.googleapis.com/Job Dataform API reference dataform. googleapis. com/ CompilationResult dataform.googleapis.com/Folder Not available in the analysis APIs. dataform. googleapis. com/ ReleaseConfig dataform. googleapis. com/ Repository dataform. googleapis. com/ TeamFolder Not available in the analysis APIs. dataform. googleapis. com/ WorkflowConfig dataform. googleapis. com/ WorkflowInvocation dataform. googleapis. com/ Workspace Dataplex Universal Catalog API reference dataplex. googleapis. com/ AspectType Not available in the analysis APIs. dataplex.googleapis.com/Asset dataplex. googleapis. com/ DataScan dataplex. googleapis. com/ EncryptionConfig Not available in the analysis APIs. dataplex. googleapis. com/ EntryGroup Not available in the analysis APIs. dataplex. googleapis. com/ EntryType Not available in the analysis APIs. dataplex. googleapis. com/ Environment dataplex. googleapis. com/ Glossary Not available in the analysis APIs. dataplex.googleapis.com/Lake dataplex. googleapis. com/ MetadataJob Not available in the analysis APIs. dataplex.googleapis.com/Task dataplex.googleapis.com/Zone Dataproc Metastore API reference metastore. googleapis. com/ Backup Not available in the analysis APIs. metastore. googleapis. com/ Federation Not available in the analysis APIs. metastore. googleapis. com/ MetadataImport Not available in the analysis APIs. metastore. googleapis. com/ Service Not available in the analysis APIs.

### "Monitor asset changes with Pub/Sub \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const feedId = 'my feed'; // const assetNames = '//storage.googleapis.com/<BUCKET NAME1>,//storage.googleapis.com/<BUCKET NAME2>'; // const topicName = 'projects/<PROJECT ID>/topics/<TOPIC ID>' // const contentType = 'RESOURCE'; const util = require ( 'util' ); const { AssetServiceClient } = require ( ' @google-cloud/asset ' ); const client = new AssetServiceClient (); async function createFeed () { const projectId = await client . getProjectId (); // TODO(developer): Choose asset names, such as //storage.googleapis.com/[YOUR BUCKET NAME]. // const assetNames = ['ASSET NAME1', 'ASSET NAME2', ...]; const request = { parent : projects/ ${ projectId } , feedId : feedId , feed : { assetNames : assetNames . split ( ',' ), contentType : contentType , feedOutputConfig : { pubsubDestination : { topic : topicName , }, }, }, }; // Handle the operation using the promise pattern. const result = await client . createFeed ( request ); // Do things with with the response. console . log ( util . inspect ( result , { depth : null })); Python To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "feed": { "assetNames": [], "assetTypes": [ "gkemulticloud.googleapis.com/AttachedCluster" ], "feedOutputConfig": { "pubsubDestination": { "topic": "projects/my-project/topics/my-topic" } } }, "update mask": { "paths": ["feed output config.pubsub destination.topic", "asset names", "asset types"] } } "@ Invoke-WebRequest -Method PATCH -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds/ my-feed " Select-Object -Expand Content Example response { "feeds" : [ { "name" : "projects/000000000000/feeds/my-feed" , "assetTypes" : [ "bigquery.googleapis.com/Table" , "gkemulticloud.googleapis.com/AttachedCluster" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } ] } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "feedId": " my-feed ", "feed": { "assetNames": [ "//storage.googleapis.com/ my-bucket " ], "assetTypes": [ "bigquery.googleapis.com/Table" ], "contentType": "RESOURCE", "feedOutputConfig": { "pubsubDestination": { "topic": "projects/ my-project /topics/ my-topic " } } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds" Select-Object -Expand Content Example response { "name" : "projects/000000000000/feeds/my-feed" , "assetNames" : [ "//storage.googleapis.com/my-bucket" ], "assetTypes" : [ "bigquery.googleapis.com/Table" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds" Select-Object -Expand Content Example response { "feeds" : [ { "name" : "projects/000000000000/feeds/my-feed" , "assetNames" : [ "//storage.googleapis.com/my-bucket" ], "assetTypes" : [ "bigquery.googleapis.com/Table" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } ] } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

### Method: exportAssets \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/exportAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/exportAssets)
- Source ID: `site-api-reference`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- For example: "compute.googleapis.com. " snapshots resources whose asset type starts with "compute.googleapis.com". ".
- Authorization requires one or more of the following IAM permissions on the specified resource parent : cloudasset.assets.exportResource cloudasset.assets.exportIamPolicy Request body The request body contains data with the following structure: JSON representation { "readTime" : string , "assetTypes" : [ string ] , "contentType" : enum ( ContentType ) , "outputConfig" : { object ( OutputConfig ) } , "relationshipTypes" : [ string ] } Fields readTime string ( Timestamp format) Timestamp to take an asset snapshot.
- When [contentType] in the ExportAssetsRequest is RESOURCE , the schema of each table will include RECORD-type columns mapped to the nested fields in the Asset.resource.data field of that asset type (up to the 15 nested level BigQuery supports ( https://cloud.google.com/bigquery/docs/nested-repeated#limitations)) .
- Field [table] will be concatenated with " " and the asset type names (see https://cloud.google.com/asset-inventory/docs/supported-asset-types for supported asset types) to construct per-asset-type table names, in which all non-alphanumeric characters like "." and "/" will be substituted by " ".

