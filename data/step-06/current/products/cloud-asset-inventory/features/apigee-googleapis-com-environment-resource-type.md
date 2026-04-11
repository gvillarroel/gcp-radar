---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:38.189Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "apigee.googleapis.com/Environment resource type"
feature_slug: "apigee-googleapis-com-environment-resource-type"
latest_feature_date: "2026-02-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/get-asset-history"
  - "https://docs.cloud.google.com/asset-inventory/docs/list-assets"
keywords:
  - "apigee"
  - "googleapis"
  - "com"
  - "environment"
  - "resource"
  - "type"
  - "the"
  - "is"
---

# apigee.googleapis.com/Environment resource type

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

The Apigee Environment resource type is now publicly available through Cloud Asset Inventory asset and search APIs.

## Extended Definition

The Apigee Environment resource type is now publicly available through Cloud Asset Inventory asset and search APIs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/get-asset-history](https://docs.cloud.google.com/asset-inventory/docs/get-asset-history)
- [https://docs.cloud.google.com/asset-inventory/docs/list-assets](https://docs.cloud.google.com/asset-inventory/docs/list-assets)

## Supporting Pages

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- API reference dataflow.googleapis.com/Job Dataform API reference dataform. googleapis. com/ CompilationResult dataform.googleapis.com/Folder Not available in the analysis APIs. dataform. googleapis. com/ ReleaseConfig dataform. googleapis. com/ Repository dataform. googleapis. com/ TeamFolder Not available in the analysis APIs. dataform. googleapis. com/ WorkflowConfig dataform. googleapis. com/ WorkflowInvocation dataform. googleapis. com/ Workspace Dataplex Universal Catalog API reference dataplex. googleapis. com/ AspectType Not available in the analysis APIs. dataplex.googleapis.com/Asset dataplex. googleapis. com/ DataScan dataplex. googleapis. com/ EncryptionConfig Not available in the analysis APIs. dataplex. googleapis. com/ EntryGroup Not available in the analysis APIs. dataplex. googleapis. com/ EntryType Not available in the analysis APIs. dataplex. googleapis. com/ Environment dataplex. googleapis. com/ Glossary Not available in the analysis APIs. dataplex.googleapis.com/Lake dataplex. googleapis. com/ MetadataJob Not available in the analysis APIs. dataplex.googleapis.com/Task dataplex.googleapis.com/Zone Dataproc Metastore API reference metastore. googleapis. com/ Backup Not available in the analysis APIs. metastore. googleapis. com/ Federation Not available in the analysis APIs. metastore. googleapis. com/ MetadataImport Not available in the analysis APIs. metastore. googleapis. com/ Service Not available in the analysis APIs.
- Cloud Controls Partner API API reference cloudcontrolspartner. googleapis. com/ Customer cloudcontrolspartner. googleapis. com/ Partner cloudcontrolspartner. googleapis. com/ Workload Cloud Data Fusion API reference datafusion. googleapis. com/ DnsPeering datafusion. googleapis. com/ Instance Cloud Deploy API reference clouddeploy. googleapis. com/ Automation clouddeploy. googleapis. com/ AutomationRun clouddeploy. googleapis. com/ CustomTargetType clouddeploy. googleapis. com/ DeliveryPipeline clouddeploy. googleapis. com/ DeployPolicy clouddeploy. googleapis. com/ JobRun clouddeploy. googleapis. com/ Release clouddeploy. googleapis. com/ Rollout clouddeploy. googleapis. com/ Target Cloud DNS API reference dns.googleapis.com/ManagedZone Searchable attributes: dnsName peeringConfig. targetNetwork. networkUrl dns.googleapis.com/Policy dns. googleapis. com/ ResourceRecordSet Not available in the analysis APIs. dns. googleapis. com/ ResponsePolicy Not available in the analysis APIs. dns. googleapis. com/ ResponsePolicyRule Not available in the analysis APIs.
- The following IAP resource types: iap.googleapis.com/Tunnel Not available in the analysis and search APIs. iap. googleapis. com/ TunnelInstance Not available in the analysis and search APIs. iap.googleapis.com/TunnelZone Not available in the analysis and search APIs. iap.googleapis.com/Web Not available in the analysis and search APIs. iap.googleapis.com/WebService Not available in the analysis and search APIs. iap. googleapis. com/ WebServiceVersion Not available in the analysis and search APIs. iap.googleapis.com/WebType Not available in the analysis and search APIs.
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS INVENTORY content type .

### Get asset histories \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/get-asset-history](https://docs.cloud.google.com/asset-inventory/docs/get-asset-history)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const assetNames = '//storage.googleapis.com/<BUCKET NAME1>,//storage.googleapis.com/<BUCKET NAME2>'; // const contentType = 'RESOURCE'; const util = require ( 'util' ); const { AssetServiceClient } = require ( ' @google-cloud/asset ' ); const client = new AssetServiceClient (); async function batchGetAssetsHistory () { const projectId = await client . getProjectId (); const projectResource = projects/ ${ projectId } ` ; // TODO(developer): Choose asset names, such as //storage.googleapis.com/[YOUR BUCKET NAME]. // const assetNames = ['ASSET NAME1', 'ASSET NAME2', ...]; const request = { parent : projectResource , assetNames : assetNames . split ( ',' ), contentType : contentType , readTimeWindow : { startTime : { seconds : Math . floor ( new Date (). getTime () / 1000 ), }, }, }; // Handle the operation using the promise pattern. const result = await client . batchGetAssetsHistory ( request ); // Do things with with the response. console . log ( util . inspect ( result , { depth : null })); PHP To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- For more information, see Set up authentication for a local development environment . require "google/cloud/asset" project id = 'YOUR PROJECT ID' asset names, e.g.: //storage.googleapis.com/[YOUR BUCKET NAME] asset names = [ASSET NAMES, COMMMA DELIMTTED] asset service = Google :: Cloud :: Asset . asset service formatted parent = asset service . project path project : project id content type = :RESOURCE read time window = { start time : { seconds : Time . now . getutc . to i } } response = asset service . batch get assets history ( parent : formatted parent , content type : content type , read time window : read time window , asset names : asset names ) Do things with the response puts response . assets Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetNames": ["//compute.googleapis.com/projects/ my-project /zones/ us-central1-a /instances/ my-instance "], "contentType": "RESOURCE", "readTimeWindow": { "startTime": " 2024-01-30T00:00:00Z ", "endTime": " 2024-02-05T00:00:00Z " } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :batchGetAssetsHistory" Select-Object -Expand Content Example response { "assets" : [ { "window" : { "startTime" : "2024-02-03T16:00:28.854779Z" , "endTime" : "2024-02-05T16:00:25.259186Z" }, "asset" : { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance" , "assetType" : "compute.googleapis.com/Instance" , "resource" : { "version" : "v1" , "discoveryDocumentUri" : "https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1" , "discoveryName" : "Instance" , "parent" : "//cloudresourcemanager.googleapis.com/projects/000000000000" , "data" : { LATEST ASSET METADATA }, "location" : "us-central1-a" }, "ancestors" : [ "projects/000000000000" , "folders/000000000000" , "organizations/000000000000" ], "updateTime" : "2024-02-05T16:00:25.259186Z" } }, { "window" : { "startTime" : "2024-01-30T08:00:22.930462Z" , "endTime" : "2024-02-03T16:00:28.854779Z" }, "asset" : { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance" , "assetType" : "compute.googleapis.com/Instance" , "resource" : { "version" : "v1" , "discoveryDocumentUri" : "https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1" , "discoveryName" : "Instance" , "parent" : "//cloudresourcemanager.googleapis.com/projects/000000000000" , "data" : { EARLIEST ASSET METADATA }, "location" : "us-central1-a" }, "ancestors" : [ "projects/000000000000" , "folders/000000000000" , "organizations/000000000000" ], "updateTime" : "2024-02-03T16:00:28.854779Z" } } ] } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- The instance has the following properties: Instance name : my-instance Project : my-project Location : us-central1-a gcloud asset get-history \ --project = my-project \ --asset-names = //compute.googleapis.com/projects/ my-project /zones/ us-central1-a /instances/ my-instance \ --content-type = resource \ --start-time = " 2024-01-30 " \ --end-time = " 2024-02-05 " Example response --- asset: ancestors: - projects/000000000000 - folders/000000000000 - organizations/000000000000 assetType: compute.googleapis.com/Instance name: //compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance resource: data: LATEST ASSET METADATA discoveryDocumentUri: https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1 discoveryName: Instance location: us-central1-a parent: //cloudresourcemanager.googleapis.com/projects/000000000000 version: v1 updateTime: '2024-02-05T16:00:25.259186Z' window: endTime: '2024-02-05T16:00:25.259186Z' startTime: '2024-02-03T16:00:28.854779Z' --- asset: ancestors: - projects/000000000000 - folders/000000000000 - organizations/000000000000 assetType: compute.googleapis.com/Instance name: //compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance resource: data: EARLIEST ASSET METADATA discoveryDocumentUri: https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1 discoveryName: Instance location: us-central1-a parent: //cloudresourcemanager.googleapis.com/projects/000000000000 version: v1 updateTime: '2024-02-03T16:00:28.854779Z' window: endTime: '2024-02-03T16:00:28.854779Z' startTime: '2024-01-30T08:00:22.930462Z' REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :batchGetAssetsHistory Note : You can use a GET method for this request with parameters as a query string.

### List assets \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/list-assets](https://docs.cloud.google.com/asset-inventory/docs/list-assets)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . from google.cloud import asset v1 TODO project id = 'Your Google Cloud Project ID' TODO asset types = 'Your asset type list, e.g., ["storage.googleapis.com/Bucket","bigquery.googleapis.com/Table"]' TODO page size = 'Num of assets in one page, which must be between 1 and 1000 (both inclusively)' TODO content type ="Content type to list" project resource = f "projects/ { project id } " client = asset v1 .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const assetTypes = 'storage.googleapis.com/Bucket,bigquery.googleapis.com/Table'; // const contentType = 'RESOURCE'; const util = require ( 'util' ); const { v1 } = require ( ' @google-cloud/asset ' ); const client = new v1 .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": ["compute.googleapis.com/Instance"], "contentType": "RESOURCE", "readTime": " 2024-01-30T00:00:00Z " } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /assets" Select-Object -Expand Content Example response { "readTime" : "2024-01-30T00:00:00Z" , "assets" : [ { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-name" , "assetType" : "compute.googleapis.com/Instance" , "resource" : { "version" : "v1" , "discoveryDocumentUri" : "https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1" , "discoveryName" : "Instance" , "parent" : "//cloudresourcemanager.googleapis.com/projects/000000000000" , "data" : { ASSET METADATA }, "location" : "us-central1-a" }, "ancestors" : [ "projects/000000000000" , "folders/000000000000" , "organizations/000000000000" ], "updateTime" : "2024-01-30T00:00:00.000000Z" } ] } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- AssetServiceClient (); const projectId = await client . getProjectId (); const projectResource = projects/ ${ projectId } ` ; // TODO(developer): Choose types of assets to list, such as 'storage.googleapis.com/Bucket': // const assetTypes = 'storage.googleapis.com/Bucket,bigquery.googleapis.com/Table'; // Or simply use empty string to list all types of assets: // const assetTypes = ''; const assetTypesList = assetTypes ? assetTypes . split ( ',' ) : []; async function listAssets () { const request = { parent : projectResource , assetTypes : assetTypesList , contentType : contentType , // (Optional) Add readTime parameter to list assets at the given time instead of current time: // readTime: { seconds: 1593988758 }, }; // Call cloud.assets.v1.ListAssets API. const result = await client . listAssets ( request ); // Handle the response. console . log ( util . inspect ( result , { depth : null })); } listAssets (); PHP To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

