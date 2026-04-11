---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:39.216Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset API v1 general availability"
feature_slug: "cloud-asset-api-v1-general-availability"
latest_feature_date: "2019-03-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/Asset"
  - "https://docs.cloud.google.com/asset-inventory/docs/get-asset-history"
keywords:
  - "asset"
  - "api"
  - "v1"
  - "general"
  - "availability"
  - "inventory"
  - "launches"
  - "the"
---

# Cloud Asset API v1 general availability

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Asset Inventory launches the new V1 version of the Cloud Asset API as generally available.

## Extended Definition

Cloud Asset Inventory launches the new V1 version of the Cloud Asset API as generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/Asset](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/Asset)
- [https://docs.cloud.google.com/asset-inventory/docs/get-asset-history](https://docs.cloud.google.com/asset-inventory/docs/get-asset-history)

## Supporting Pages

### "Monitor asset changes with Pub/Sub \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "feed": { "assetNames": [], "assetTypes": [ "gkemulticloud.googleapis.com/AttachedCluster" ], "feedOutputConfig": { "pubsubDestination": { "topic": "projects/my-project/topics/my-topic" } } }, "update mask": { "paths": ["feed output config.pubsub destination.topic", "asset names", "asset types"] } } "@ Invoke-WebRequest -Method PATCH -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds/ my-feed " Select-Object -Expand Content Example response { "feeds" : [ { "name" : "projects/000000000000/feeds/my-feed" , "assetTypes" : [ "bigquery.googleapis.com/Table" , "gkemulticloud.googleapis.com/AttachedCluster" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } ] } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "feedId": " my-feed ", "feed": { "assetNames": [ "//storage.googleapis.com/ my-bucket " ], "assetTypes": [ "bigquery.googleapis.com/Table" ], "contentType": "RESOURCE", "feedOutputConfig": { "pubsubDestination": { "topic": "projects/ my-project /topics/ my-topic " } } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds" Select-Object -Expand Content Example response { "name" : "projects/000000000000/feeds/my-feed" , "assetNames" : [ "//storage.googleapis.com/my-bucket" ], "assetTypes" : [ "bigquery.googleapis.com/Table" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds" Select-Object -Expand Content Example response { "feeds" : [ { "name" : "projects/000000000000/feeds/my-feed" , "assetNames" : [ "//storage.googleapis.com/my-bucket" ], "assetTypes" : [ "bigquery.googleapis.com/Table" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } ] } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds/ my-feed " Select-Object -Expand Content Example response { "name" : "projects/000000000000/feeds/my-feed" , "assetNames" : [ "//storage.googleapis.com/my-bucket" ], "assetTypes" : [ "bigquery.googleapis.com/Table" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

### Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/Asset](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/Asset)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation Resource JSON representation Policy JSON representation ListPolicy JSON representation AllValues BooleanPolicy JSON representation RestoreDefault AccessPolicy JSON representation AccessLevel JSON representation BasicLevel JSON representation Condition JSON representation DevicePolicy JSON representation DeviceEncryptionStatus OsConstraint JSON representation OsType DeviceManagementLevel VpcNetworkSource JSON representation VpcSubNetwork JSON representation ConditionCombiningFunction CustomLevel JSON representation ServicePerimeter JSON representation PerimeterType ServicePerimeterConfig JSON representation VpcAccessibleServices JSON representation IngressPolicy JSON representation IngressFrom JSON representation IngressSource JSON representation IdentityType IngressTo JSON representation ApiOperation JSON representation MethodSelector JSON representation EgressPolicy JSON representation EgressFrom JSON representation EgressSource JSON representation SourceRestriction EgressTo JSON representation Inventory JSON representation OsInfo JSON representation Item JSON representation OriginType Type SoftwarePackage JSON representation VersionedPackage JSON representation ZypperPatch JSON representation WindowsUpdatePackage JSON representation WindowsUpdateCategory JSON representation WindowsQuickFixEngineeringPackage JSON representation WindowsApplication JSON representation Date JSON representation RelatedAssets JSON representation RelationshipAttributes JSON representation RelatedAsset JSON representation An asset in Google Cloud.
- JSON representation { "updateTime" : string , "name" : string , "assetType" : string , "resource" : { object ( Resource ) } , "iamPolicy" : { object ( Policy ) } , "orgPolicy" : [ { object ( Policy ) } ] , "osInventory" : { object ( Inventory ) } , "relatedAssets" : { object ( RelatedAssets ) } , "relatedAsset" : { object ( RelatedAsset ) } , "ancestors" : [ string ] , "assetExceptions" : [ { object ( AssetException ) } ] , // Union field access context policy can be only one of the following: "accessPolicy" : { object ( AccessPolicy ) } , "accessLevel" : { object ( AccessLevel ) } , "servicePerimeter" : { object ( ServicePerimeter ) } // End of list of possible types for union field access context policy . } Fields updateTime string ( Timestamp format) The last update timestamp of an asset. updateTime is updated when create/update/delete operation is performed.
- Example: https://www.googleapis.com/discovery/v1/apis/compute/v1/rest This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. discoveryName string The JSON schema name listed in the discovery document.
- Example: compute.googleapis.com/Disk See Supported asset types for more information. resource object ( Resource ) A representation of the resource. iamPolicy object ( Policy ) A representation of the IAM policy set on a Google Cloud resource.

### Get asset histories \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/get-asset-history](https://docs.cloud.google.com/asset-inventory/docs/get-asset-history)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetNames": ["//compute.googleapis.com/projects/ my-project /zones/ us-central1-a /instances/ my-instance "], "contentType": "RESOURCE", "readTimeWindow": { "startTime": " 2024-01-30T00:00:00Z ", "endTime": " 2024-02-05T00:00:00Z " } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :batchGetAssetsHistory" Select-Object -Expand Content Example response { "assets" : [ { "window" : { "startTime" : "2024-02-03T16:00:28.854779Z" , "endTime" : "2024-02-05T16:00:25.259186Z" }, "asset" : { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance" , "assetType" : "compute.googleapis.com/Instance" , "resource" : { "version" : "v1" , "discoveryDocumentUri" : "https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1" , "discoveryName" : "Instance" , "parent" : "//cloudresourcemanager.googleapis.com/projects/000000000000" , "data" : { LATEST ASSET METADATA }, "location" : "us-central1-a" }, "ancestors" : [ "projects/000000000000" , "folders/000000000000" , "organizations/000000000000" ], "updateTime" : "2024-02-05T16:00:25.259186Z" } }, { "window" : { "startTime" : "2024-01-30T08:00:22.930462Z" , "endTime" : "2024-02-03T16:00:28.854779Z" }, "asset" : { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance" , "assetType" : "compute.googleapis.com/Instance" , "resource" : { "version" : "v1" , "discoveryDocumentUri" : "https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1" , "discoveryName" : "Instance" , "parent" : "//cloudresourcemanager.googleapis.com/projects/000000000000" , "data" : { EARLIEST ASSET METADATA }, "location" : "us-central1-a" }, "ancestors" : [ "projects/000000000000" , "folders/000000000000" , "organizations/000000000000" ], "updateTime" : "2024-02-03T16:00:28.854779Z" } } ] } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- The instance has the following properties: Instance name : my-instance Project : my-project Location : us-central1-a gcloud asset get-history \ --project = my-project \ --asset-names = //compute.googleapis.com/projects/ my-project /zones/ us-central1-a /instances/ my-instance \ --content-type = resource \ --start-time = " 2024-01-30 " \ --end-time = " 2024-02-05 " Example response --- asset: ancestors: - projects/000000000000 - folders/000000000000 - organizations/000000000000 assetType: compute.googleapis.com/Instance name: //compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance resource: data: LATEST ASSET METADATA discoveryDocumentUri: https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1 discoveryName: Instance location: us-central1-a parent: //cloudresourcemanager.googleapis.com/projects/000000000000 version: v1 updateTime: '2024-02-05T16:00:25.259186Z' window: endTime: '2024-02-05T16:00:25.259186Z' startTime: '2024-02-03T16:00:28.854779Z' --- asset: ancestors: - projects/000000000000 - folders/000000000000 - organizations/000000000000 assetType: compute.googleapis.com/Instance name: //compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance resource: data: EARLIEST ASSET METADATA discoveryDocumentUri: https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1 discoveryName: Instance location: us-central1-a parent: //cloudresourcemanager.googleapis.com/projects/000000000000 version: v1 updateTime: '2024-02-03T16:00:28.854779Z' window: endTime: '2024-02-03T16:00:28.854779Z' startTime: '2024-01-30T08:00:22.930462Z' REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :batchGetAssetsHistory Note : You can use a GET method for this request with parameters as a query string.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const assetNames = '//storage.googleapis.com/<BUCKET NAME1>,//storage.googleapis.com/<BUCKET NAME2>'; // const contentType = 'RESOURCE'; const util = require ( 'util' ); const { AssetServiceClient } = require ( ' @google-cloud/asset ' ); const client = new AssetServiceClient (); async function batchGetAssetsHistory () { const projectId = await client . getProjectId (); const projectResource = projects/ ${ projectId } ` ; // TODO(developer): Choose asset names, such as //storage.googleapis.com/[YOUR BUCKET NAME]. // const assetNames = ['ASSET NAME1', 'ASSET NAME2', ...]; const request = { parent : projectResource , assetNames : assetNames . split ( ',' ), contentType : contentType , readTimeWindow : { startTime : { seconds : Math . floor ( new Date (). getTime () / 1000 ), }, }, }; // Handle the operation using the promise pattern. const result = await client . batchGetAssetsHistory ( request ); // Do things with with the response. console . log ( util . inspect ( result , { depth : null })); PHP To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Asset\V1\BatchGetAssetsHistoryRequest; use Google\Cloud\Asset\V1\Client\AssetServiceClient; use Google\Cloud\Asset\V1\ContentType; use Google\Cloud\Asset\V1\TimeWindow; use Google\Protobuf\Timestamp; / @param string $projectId Tthe project Id for list assets. @param string[] $assetNames (Optional) Asset types to list for. / function batch get assets history(string $projectId, array $assetNames): void { $client = new AssetServiceClient(); $formattedParent = $client->projectName($projectId); $contentType = ContentType::RESOURCE; $readTimeWindow = new TimeWindow(['start time' => new Timestamp(['seconds' => time()])]); $request = (new BatchGetAssetsHistoryRequest()) ->setParent($formattedParent) ->setContentType($contentType) ->setReadTimeWindow($readTimeWindow) ->setAssetNames($assetNames); $resp = $client->batchGetAssetsHistory($request); Do things with response. print($resp->serializeToString()); } Python To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

