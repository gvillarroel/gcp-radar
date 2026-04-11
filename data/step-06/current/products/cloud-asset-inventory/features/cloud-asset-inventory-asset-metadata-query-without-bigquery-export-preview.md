---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:38.727Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory asset metadata query without BigQuery export (preview)"
feature_slug: "cloud-asset-inventory-asset-metadata-query-without-bigquery-export-preview"
latest_feature_date: "2022-12-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/export-bigquery"
  - "https://docs.cloud.google.com/asset-inventory/docs/query-assets-with-sql"
  - "https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage"
keywords:
  - "asset"
  - "inventory"
  - "metadata"
  - "query"
  - "without"
  - "export"
  - "preview"
  - "introduced"
---

# Cloud Asset Inventory asset metadata query without BigQuery export (preview)

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Asset Inventory introduced a preview feature allowing asset metadata queries directly via API or Cloud Console without first exporting to BigQuery.

## Extended Definition

Cloud Asset Inventory introduced a preview feature allowing asset metadata queries directly via API or Cloud Console without first exporting to BigQuery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/export-bigquery](https://docs.cloud.google.com/asset-inventory/docs/export-bigquery)
- [https://docs.cloud.google.com/asset-inventory/docs/query-assets-with-sql](https://docs.cloud.google.com/asset-inventory/docs/query-assets-with-sql)
- [https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage](https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage)

## Supporting Pages

### "Export asset metadata to BigQuery \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/export-bigquery](https://docs.cloud.google.com/asset-inventory/docs/export-bigquery)
- Source ID: `site-docs-reference`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "contentType": "RESOURCE", "readTime": "2024-01-30T00:00:00Z", "outputConfig": { "bigqueryDestination": { "dataset": "projects/ my-project /datasets/ my-dataset ", "table": " my-table ", "force": true } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :exportAssets" Select-Object -Expand Content Example response { "name" : "projects/000000000000/operations/ExportAssets/RESOURCE/00000000000000000000000000000000" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.asset.v1.ExportAssetsRequest" , "parent" : "projects/000000000000" , "readTime" : "2024-01-30T00:00:00Z" , "contentType" : "RESOURCE" , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/my-project/datasets/my-dataset" , "table" : "my-table" , "force" : true } } } } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- Home Documentation Security Cloud Asset Inventory Guides Send feedback Export asset metadata to BigQuery Stay organized with collections Save and categorize content based on your preferences.
- Relationship schema [ { "mode" : "NULLABLE" , "name" : "name" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "asset type" , "type" : "STRING" }, { "fields" : [ { "mode" : "NULLABLE" , "name" : "asset" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "asset type" , "type" : "STRING" }, { "mode" : "REPEATED" , "name" : "ancestors" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "relationship type" , "type" : "STRING" } ], "mode" : "NULLABLE" , "name" : "related asset" , "type" : "RECORD" }, { "mode" : "REPEATED" , "name" : "ancestors" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "update time" , "type" : "TIMESTAMP" } ] Export an asset snapshot gcloud gcloud asset export \ -- SCOPE \ --billing-project = BILLING PROJECT ID \ --asset-types = ASSET TYPE 1 , ASSET TYPE 2 ,... \ --content-type = CONTENT TYPE \ --relationship-types = RELATIONSHIP TYPE 1 , RELATIONSHIP TYPE 2 ,... \ --snapshot-time = " SNAPSHOT TIME " \ --bigquery-table = projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID /tables/ TABLE NAME \ --output-bigquery-force Provide the following values: SCOPE : Use one of the following values: project= PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. folder= FOLDER ID , where FOLDER ID is the ID of the folder that has the asset metadata you want to export.
- Example Run the following command to export your resource metadata as it was on January 30, 2024, in the my-project project, to the BigQuery table my-table . gcloud asset export \ --project = projects/ my-project \ --content-type = resource \ --snapshot-time = " 2024-01-30 " \ --bigquery-table = projects/ my-project /datasets/ my-dataset /tables/ my-table \ --partition-key = my-partition-key \ --output-bigquery-force REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :exportAssets Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "assetTypes" : [ " ASSET TYPE 1 " , " ASSET TYPE 2 " , "..." ], "contentType" : " CONTENT TYPE " , "relationshipTypes" : [ " RELATIONSHIP TYPE 1 " , " RELATIONSHIP TYPE 2 " , "..." ], "readTime" : " SNAPSHOT TIME " , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID " , "table" : " TABLE NAME " , "partitionSpec" : { "partitionKey" : " PARTITION KEY " }, "force" : true , } } } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project that has the asset metadata you want to export.

### Query assets with SQL \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/query-assets-with-sql](https://docs.cloud.google.com/asset-inventory/docs/query-assets-with-sql)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Example Run the following command to get the names and asset types of the first two Compute Engine instances in the my-project project, and export the results to the my-table BigQuery table in the my-project project, overwriting the entire table if it already exists. gcloud asset query \ --project = my-project \ --statement = " SELECT name, assetType FROM compute googleapis com Instance LIMIT 2" \ --bigquery-table = projects/ my-project /datasets/ my-dataset /tables/ my-table \ --write-disposition = "write-truncate" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :queryAssets Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "statement" : " SQL SELECT QUERY " , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID " , "table" : " TABLE NAME " , "writeDisposition" : " WRITE METHOD " } }, "pageSize" : " PAGE SIZE " } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export with an SQL query. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project that has the asset metadata you want to export with an SQL query.
- If you don't already have one, you must create a BigQuery dataset before making these requests. gcloud gcloud asset query \ -- SCOPE \ --billing-project = BILLING PROJECT ID \ --statement = " SQL SELECT QUERY " \ --bigquery-table = projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID /tables/ TABLE NAME \ --write-disposition = " WRITE METHOD " Provide the following values: SCOPE : Use one of the following values: project= PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export with an SQL query. folder= FOLDER ID , where FOLDER ID is the ID of the folder that has the asset metadata you want to export with an SQL query.
- If you don't see the project you're looking for, go to the Manage resources page and filter the list using the name of that project. gcloud CLI You can retrieve a Google Cloud project number with the following command: gcloud projects describe PROJECT ID --format = "value(projectNumber)" folders/ FOLDER ID , where FOLDER ID is the ID of the folder that has the asset metadata you want to export with an SQL query.
- To do so, run the following command using a top level folder's ID: gcloud resource-manager folders list --folder = FOLDER ID organizations/ ORGANIZATION ID , where ORGANIZATION ID is the ID of the organization that has the asset metadata you want to export with an SQL query.

### "Export asset metadata to Cloud Storage \_|\_ Cloud Asset Inventory \_|\_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage](https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "contentType": "RESOURCE", "readTime": "2024-01-30T00:00:00Z", "outputConfig": { "gcsDestination": { "uri": "gs:// my-bucket / my-file " } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :exportAssets" Select-Object -Expand Content Example response { "name" : "projects/000000000000/operations/ExportAssets/RESOURCE/00000000000000000000000000000000" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.asset.v1.ExportAssetsRequest" , "parent" : "projects/000000000000" , "readTime" : "2024-01-30T00:00:00Z" , "contentType" : "RESOURCE" , "outputConfig" : { "gcsDestination" : { "uri" : "gs://my-bucket/export.txt" } } } } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- Home Documentation Security Cloud Asset Inventory Guides Send feedback Export asset metadata to Cloud Storage Stay organized with collections Save and categorize content based on your preferences.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const dumpFilePath = 'gs://my-bucket/my-assets.txt'; // const contentType = 'RESOURCE'; const { AssetServiceClient } = require ( ' @google-cloud/asset ' ); const client = new AssetServiceClient (); async function exportAssets () { const projectId = await client . getProjectId (); const projectResource = projects/ ${ projectId } ; // TODO(developer): choose the dump file path // const dumpFilePath = 'Dump file path, e.g.: gs://<my bucket>/<my asset file>' const request = { parent : projectResource , contentType : contentType , outputConfig : { gcsDestination : { uri : dumpFilePath , }, }, }; // Handle the operation using the promise pattern. const [ operation ] = await client . exportAssets ( request ); // Operation#promise starts polling for the completion of the operation. const [ result ] = await operation . promise (); // Do things with with the response. console . log ( result ); } exportAssets (). catch ( err = > { throw err ; }); PHP To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://cloudasset.googleapis.com/v1/ OPERATION PATH " Select-Object -Expand Content Example response { "name" : "projects/000000000000/operations/ExportAssets/RESOURCE/00000000000000000000000000000000" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.asset.v1.ExportAssetsRequest" , "parent" : "projects/000000000000" , "readTime" : "2024-01-30T00:00:00Z" , "contentType" : "RESOURCE" , "outputConfig" : { "gcsDestination" : { "uri" : "gs://my-bucket/export.txt" } } } } View an asset snapshot To view your asset snapshot: Go to the Cloud Storage Buckets page in the Google Cloud console.

