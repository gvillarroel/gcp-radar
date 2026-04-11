---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:38.766Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory Export/Search/Feed support for gkebackup.googleapis.com/RestorePlan"
feature_slug: "cloud-asset-inventory-export-search-feed-support-for-gkebackup-googleapis-com-restoreplan"
latest_feature_date: "2022-07-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/export-bigquery"
  - "https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage"
keywords:
  - "asset"
  - "inventory"
  - "export"
  - "search"
  - "feed"
  - "for"
  - "gkebackup"
  - "googleapis"
---

# Cloud Asset Inventory Export/Search/Feed support for gkebackup.googleapis.com/RestorePlan

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Asset Inventory added gkebackup.googleapis.com/RestorePlan to ExportAssets, BatchGetAssetsHistory, Feed, SearchAllResources, and SearchAllIamPolicies.

## Extended Definition

Cloud Asset Inventory added gkebackup.googleapis.com/RestorePlan to ExportAssets, BatchGetAssetsHistory, Feed, SearchAllResources, and SearchAllIamPolicies.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/export-bigquery](https://docs.cloud.google.com/asset-inventory/docs/export-bigquery)
- [https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage](https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage)

## Supporting Pages

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- You can use these asset types with the following Cloud Asset Inventory operations: Export to BigQuery Export to Cloud Storage List assets Monitor asset changes with Pub/Sub Query assets with SQL Search for resources Search resources for IAM allow policies You might also need to make use of asset names associated with these asset types when working with Cloud Asset Inventory.
- Compute Engine API reference compute.googleapis.com/Address Returns global and regional addresses in the search and analysis APIs, and only regional addresses in the list, export, query, and monitor APIs. compute. googleapis. com/ Autoscaler compute. googleapis. com/ BackendBucket compute. googleapis. com/ BackendService Returns global and regional backend services in the search and analysis APIs, and only regional backend services in the list, export, query, and monitor APIs. compute. googleapis. com/ Commitment compute.googleapis.com/Disk Returns zonal and regional disks in the search and analysis APIs, and only zonal disks in the list, export, query, and monitor APIs. compute. googleapis. com/ ExternalVpnGateway compute. googleapis. com/ Firewall compute. googleapis. com/ FirewallPolicy Not available in the analysis APIs. compute. googleapis. com/ ForwardingRule Returns global and regional forwarding rules in the search and analysis APIs, and only regional forwarding rules in the list, export, query, and monitor APIs. compute. googleapis. com/ GlobalAddress Not available in the analysis and search APIs.
- Use compute.googleapis.com/ForwardingRule instead in the search and analysis APIs. compute. googleapis. com/ HealthCheck compute. googleapis. com/ HttpHealthCheck compute. googleapis. com/ HttpsHealthCheck compute.googleapis.com/Image compute. googleapis. com/ Instance Searchable attributes: deletionProtection externalIPs internalIPs machineType networkInterfaceNetworks networkInterfaceNames The following attributes are from the OS Inventory , which is attached on this Compute Engine Instance to provide information on operating system and packages.
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS INVENTORY content type .

### "Export asset metadata to BigQuery \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/export-bigquery](https://docs.cloud.google.com/asset-inventory/docs/export-bigquery)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "contentType": "RESOURCE", "readTime": "2024-01-30T00:00:00Z", "outputConfig": { "bigqueryDestination": { "dataset": "projects/ my-project /datasets/ my-dataset ", "table": " my-table ", "force": true } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :exportAssets" Select-Object -Expand Content Example response { "name" : "projects/000000000000/operations/ExportAssets/RESOURCE/00000000000000000000000000000000" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.asset.v1.ExportAssetsRequest" , "parent" : "projects/000000000000" , "readTime" : "2024-01-30T00:00:00Z" , "contentType" : "RESOURCE" , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/my-project/datasets/my-dataset" , "table" : "my-table" , "force" : true } } } } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- Example Run the following command to export your resource metadata as it was on January 30, 2024, in the my-project project, to the BigQuery table my-table . gcloud asset export \ --project = projects/ my-project \ --content-type = resource \ --snapshot-time = " 2024-01-30 " \ --bigquery-table = projects/ my-project /datasets/ my-dataset /tables/ my-table \ --partition-key = my-partition-key \ --output-bigquery-force REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :exportAssets Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "assetTypes" : [ " ASSET TYPE 1 " , " ASSET TYPE 2 " , "..." ], "contentType" : " CONTENT TYPE " , "relationshipTypes" : [ " RELATIONSHIP TYPE 1 " , " RELATIONSHIP TYPE 2 " , "..." ], "readTime" : " SNAPSHOT TIME " , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID " , "table" : " TABLE NAME " , "partitionSpec" : { "partitionKey" : " PARTITION KEY " }, "force" : true , } } } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project that has the asset metadata you want to export.
- Example Run the following command to export your resource metadata as it was on January 30, 2024, in the my-project project, to multiple BigQuery tables that have my-table as a prefix. gcloud asset export \ --project = my-project \ --content-type = resource \ --snapshot-time = " 2024-01-30 " \ --bigquery-table = projects/ my-project /datasets/ my-dataset /tables/ my-table \ --per-asset-type \ --output-bigquery-force REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :exportAssets Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "assetTypes" : [ " ASSET TYPE 1 " , " ASSET TYPE 2 " , "..." ], "contentType" : " CONTENT TYPE " , "readTime" : " SNAPSHOT TIME " , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID " , "table" : " TABLE NAME " , "force" : true , "separateTablesPerAssetType" : true } } } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project that has the asset metadata you want to export.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const dataSet = 'projects/project id/datasets/dataset id'; // const table = 'mytable'; const { AssetServiceClient } = require ( ' @google-cloud/asset ' ); const client = new AssetServiceClient (); async function exportAssetsBigquery () { const projectId = await client . getProjectId (); const projectResource = client . projectPath ( projectId ); const dataset = dataSet ; const request = { parent : projectResource , outputConfig : { bigqueryDestination : { dataset : projects/ ${ projectId } / ${ dataset } , table : table , force : true , }, }, }; // Handle the operation using the promise pattern. const [ operation ] = await client . exportAssets ( request ); // Operation#promise starts polling for the completion of the operation. const [ result ] = await operation . promise (); // Do things with with the response. console . log ( result ); } exportAssetsBigquery (); Python To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

### "Export asset metadata to Cloud Storage \_|\_ Cloud Asset Inventory \_|\_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage](https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "contentType": "RESOURCE", "readTime": "2024-01-30T00:00:00Z", "outputConfig": { "gcsDestination": { "uri": "gs:// my-bucket / my-file " } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :exportAssets" Select-Object -Expand Content Example response { "name" : "projects/000000000000/operations/ExportAssets/RESOURCE/00000000000000000000000000000000" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.asset.v1.ExportAssetsRequest" , "parent" : "projects/000000000000" , "readTime" : "2024-01-30T00:00:00Z" , "contentType" : "RESOURCE" , "outputConfig" : { "gcsDestination" : { "uri" : "gs://my-bucket/export.txt" } } } } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const dumpFilePath = 'gs://my-bucket/my-assets.txt'; // const contentType = 'RESOURCE'; const { AssetServiceClient } = require ( ' @google-cloud/asset ' ); const client = new AssetServiceClient (); async function exportAssets () { const projectId = await client . getProjectId (); const projectResource = projects/ ${ projectId } ; // TODO(developer): choose the dump file path // const dumpFilePath = 'Dump file path, e.g.: gs://<my bucket>/<my asset file>' const request = { parent : projectResource , contentType : contentType , outputConfig : { gcsDestination : { uri : dumpFilePath , }, }, }; // Handle the operation using the promise pattern. const [ operation ] = await client . exportAssets ( request ); // Operation#promise starts polling for the completion of the operation. const [ result ] = await operation . promise (); // Do things with with the response. console . log ( result ); } exportAssets (). catch ( err = > { throw err ; }); PHP To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- OutputConfig () output config . gcs destination . uri = dump file path request options = { "parent" : parent , "output config" : output config } if content type is not None : request options [ "content type" ] = content type response = client . export assets ( request = request options ) print ( response . result ()) Ruby To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- Home Documentation Security Cloud Asset Inventory Guides Send feedback Export asset metadata to Cloud Storage Stay organized with collections Save and categorize content based on your preferences.

