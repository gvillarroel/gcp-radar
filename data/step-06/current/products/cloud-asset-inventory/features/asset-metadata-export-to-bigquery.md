---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.794Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Asset metadata export to BigQuery"
feature_slug: "asset-metadata-export-to-bigquery"
latest_feature_date: "2019-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/export-bigquery"
  - "https://docs.cloud.google.com/asset-inventory/docs/exporting-to-bigquery"
  - "https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage"
keywords:
  - "generally"
  - "metadata"
  - "available"
  - "export"
  - "makes"
---

# Asset metadata export to BigQuery

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory makes asset metadata export to BigQuery generally available.

## Extended Definition

Cloud Asset Inventory makes asset metadata export to BigQuery generally available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/export-bigquery](https://docs.cloud.google.com/asset-inventory/docs/export-bigquery)
- [https://docs.cloud.google.com/asset-inventory/docs/exporting-to-bigquery](https://docs.cloud.google.com/asset-inventory/docs/exporting-to-bigquery)
- [https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage](https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage)

## Supporting Pages

### "Export asset metadata to BigQuery \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/export-bigquery](https://docs.cloud.google.com/asset-inventory/docs/export-bigquery)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Relationship schema [ { "mode" : "NULLABLE" , "name" : "name" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "asset type" , "type" : "STRING" }, { "fields" : [ { "mode" : "NULLABLE" , "name" : "asset" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "asset type" , "type" : "STRING" }, { "mode" : "REPEATED" , "name" : "ancestors" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "relationship type" , "type" : "STRING" } ], "mode" : "NULLABLE" , "name" : "related asset" , "type" : "RECORD" }, { "mode" : "REPEATED" , "name" : "ancestors" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "update time" , "type" : "TIMESTAMP" } ] Export an asset snapshot gcloud gcloud asset export \ -- SCOPE \ --billing-project = BILLING PROJECT ID \ --asset-types = ASSET TYPE 1 , ASSET TYPE 2 ,... \ --content-type = CONTENT TYPE \ --relationship-types = RELATIONSHIP TYPE 1 , RELATIONSHIP TYPE 2 ,... \ --snapshot-time = " SNAPSHOT TIME " \ --bigquery-table = projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID /tables/ TABLE NAME \ --output-bigquery-force Provide the following values: SCOPE : Use one of the following values: project= PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. folder= FOLDER ID , where FOLDER ID is the ID of the folder that has the asset metadata you want to export.
- Example Run the following command to export your resource metadata as it was on January 30, 2024, in the my-project project, to the BigQuery table my-table . gcloud asset export \ --project = projects/ my-project \ --content-type = resource \ --snapshot-time = " 2024-01-30 " \ --bigquery-table = projects/ my-project /datasets/ my-dataset /tables/ my-table \ --partition-key = my-partition-key \ --output-bigquery-force REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :exportAssets Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "assetTypes" : [ " ASSET TYPE 1 " , " ASSET TYPE 2 " , "..." ], "contentType" : " CONTENT TYPE " , "relationshipTypes" : [ " RELATIONSHIP TYPE 1 " , " RELATIONSHIP TYPE 2 " , "..." ], "readTime" : " SNAPSHOT TIME " , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID " , "table" : " TABLE NAME " , "partitionSpec" : { "partitionKey" : " PARTITION KEY " }, "force" : true , } } } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project that has the asset metadata you want to export.
- Example Run the following command to export your resource metadata as it was on January 30, 2024, in the my-project project, to multiple BigQuery tables that have my-table as a prefix. gcloud asset export \ --project = my-project \ --content-type = resource \ --snapshot-time = " 2024-01-30 " \ --bigquery-table = projects/ my-project /datasets/ my-dataset /tables/ my-table \ --per-asset-type \ --output-bigquery-force REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :exportAssets Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "assetTypes" : [ " ASSET TYPE 1 " , " ASSET TYPE 2 " , "..." ], "contentType" : " CONTENT TYPE " , "readTime" : " SNAPSHOT TIME " , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID " , "table" : " TABLE NAME " , "force" : true , "separateTablesPerAssetType" : true } } } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project that has the asset metadata you want to export.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "contentType": "RESOURCE", "readTime": "2024-01-30T00:00:00Z", "outputConfig": { "bigqueryDestination": { "dataset": "projects/ my-project /datasets/ my-dataset ", "table": " my-table ", "force": true } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :exportAssets" Select-Object -Expand Content Example response { "name" : "projects/000000000000/operations/ExportAssets/RESOURCE/00000000000000000000000000000000" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.asset.v1.ExportAssetsRequest" , "parent" : "projects/000000000000" , "readTime" : "2024-01-30T00:00:00Z" , "contentType" : "RESOURCE" , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/my-project/datasets/my-dataset" , "table" : "my-table" , "force" : true } } } } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

### "Export asset metadata to BigQuery \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/exporting-to-bigquery](https://docs.cloud.google.com/asset-inventory/docs/exporting-to-bigquery)
- Source ID: `site-docs-reference-2`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Relationship schema [ { "mode" : "NULLABLE" , "name" : "name" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "asset type" , "type" : "STRING" }, { "fields" : [ { "mode" : "NULLABLE" , "name" : "asset" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "asset type" , "type" : "STRING" }, { "mode" : "REPEATED" , "name" : "ancestors" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "relationship type" , "type" : "STRING" } ], "mode" : "NULLABLE" , "name" : "related asset" , "type" : "RECORD" }, { "mode" : "REPEATED" , "name" : "ancestors" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "update time" , "type" : "TIMESTAMP" } ] Export an asset snapshot gcloud gcloud asset export \ -- SCOPE \ --billing-project = BILLING PROJECT ID \ --asset-types = ASSET TYPE 1 , ASSET TYPE 2 ,... \ --content-type = CONTENT TYPE \ --relationship-types = RELATIONSHIP TYPE 1 , RELATIONSHIP TYPE 2 ,... \ --snapshot-time = " SNAPSHOT TIME " \ --bigquery-table = projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID /tables/ TABLE NAME \ --output-bigquery-force Provide the following values: SCOPE : Use one of the following values: project= PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. folder= FOLDER ID , where FOLDER ID is the ID of the folder that has the asset metadata you want to export.
- Example Run the following command to export your resource metadata as it was on January 30, 2024, in the my-project project, to the BigQuery table my-table . gcloud asset export \ --project = projects/ my-project \ --content-type = resource \ --snapshot-time = " 2024-01-30 " \ --bigquery-table = projects/ my-project /datasets/ my-dataset /tables/ my-table \ --partition-key = my-partition-key \ --output-bigquery-force REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :exportAssets Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "assetTypes" : [ " ASSET TYPE 1 " , " ASSET TYPE 2 " , "..." ], "contentType" : " CONTENT TYPE " , "relationshipTypes" : [ " RELATIONSHIP TYPE 1 " , " RELATIONSHIP TYPE 2 " , "..." ], "readTime" : " SNAPSHOT TIME " , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID " , "table" : " TABLE NAME " , "partitionSpec" : { "partitionKey" : " PARTITION KEY " }, "force" : true , } } } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project that has the asset metadata you want to export.
- Example Run the following command to export your resource metadata as it was on January 30, 2024, in the my-project project, to multiple BigQuery tables that have my-table as a prefix. gcloud asset export \ --project = my-project \ --content-type = resource \ --snapshot-time = " 2024-01-30 " \ --bigquery-table = projects/ my-project /datasets/ my-dataset /tables/ my-table \ --per-asset-type \ --output-bigquery-force REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :exportAssets Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "assetTypes" : [ " ASSET TYPE 1 " , " ASSET TYPE 2 " , "..." ], "contentType" : " CONTENT TYPE " , "readTime" : " SNAPSHOT TIME " , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID " , "table" : " TABLE NAME " , "force" : true , "separateTablesPerAssetType" : true } } } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project that has the asset metadata you want to export.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "contentType": "RESOURCE", "readTime": "2024-01-30T00:00:00Z", "outputConfig": { "bigqueryDestination": { "dataset": "projects/ my-project /datasets/ my-dataset ", "table": " my-table ", "force": true } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :exportAssets" Select-Object -Expand Content Example response { "name" : "projects/000000000000/operations/ExportAssets/RESOURCE/00000000000000000000000000000000" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.asset.v1.ExportAssetsRequest" , "parent" : "projects/000000000000" , "readTime" : "2024-01-30T00:00:00Z" , "contentType" : "RESOURCE" , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/my-project/datasets/my-dataset" , "table" : "my-table" , "force" : true } } } } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

### "Export asset metadata to Cloud Storage \_|\_ Cloud Asset Inventory \_|\_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage](https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "contentType": "RESOURCE", "readTime": "2024-01-30T00:00:00Z", "outputConfig": { "gcsDestination": { "uri": "gs:// my-bucket / my-file " } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :exportAssets" Select-Object -Expand Content Example response { "name" : "projects/000000000000/operations/ExportAssets/RESOURCE/00000000000000000000000000000000" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.asset.v1.ExportAssetsRequest" , "parent" : "projects/000000000000" , "readTime" : "2024-01-30T00:00:00Z" , "contentType" : "RESOURCE" , "outputConfig" : { "gcsDestination" : { "uri" : "gs://my-bucket/export.txt" } } } } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://cloudasset.googleapis.com/v1/ OPERATION PATH " Select-Object -Expand Content Example response { "name" : "projects/000000000000/operations/ExportAssets/RESOURCE/00000000000000000000000000000000" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.asset.v1.ExportAssetsRequest" , "parent" : "projects/000000000000" , "readTime" : "2024-01-30T00:00:00Z" , "contentType" : "RESOURCE" , "outputConfig" : { "gcsDestination" : { "uri" : "gs://my-bucket/export.txt" } } } } View an asset snapshot To view your asset snapshot: Go to the Cloud Storage Buckets page in the Google Cloud console.
- REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :exportAssets Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "assetTypes" : [ " ASSET TYPE 1 " , " ASSET TYPE 2 " , "..." ], "contentType" : " CONTENT TYPE " , "relationshipTypes" : [ " RELATIONSHIP TYPE 1 " , " RELATIONSHIP TYPE 2 " , "..." ], "readTime" : " SNAPSHOT TIME " , "outputConfig" : { "gcsDestination" : { OUTPUT TYPE } } } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project that has the asset metadata you want to export.
- Export an asset snapshot to Cloud Storage gcloud gcloud asset export \ -- SCOPE \ --billing-project = BILLING PROJECT ID \ --asset-types = ASSET TYPE 1 , ASSET TYPE 2 ,... \ --content-type = CONTENT TYPE \ --relationship-types = RELATIONSHIP TYPE 1 , RELATIONSHIP TYPE 2 ,... \ --snapshot-time = " SNAPSHOT TIME " \ -- OUTPUT TYPE Provide the following values: SCOPE : Use one of the following values: project= PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. folder= FOLDER ID , where FOLDER ID is the ID of the folder that has the asset metadata you want to export.

