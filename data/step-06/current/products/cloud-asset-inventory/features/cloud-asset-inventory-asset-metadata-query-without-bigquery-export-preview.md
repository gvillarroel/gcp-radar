---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.244Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory asset metadata query without BigQuery export (preview)"
feature_slug: "cloud-asset-inventory-asset-metadata-query-without-bigquery-export-preview"
latest_feature_date: "2022-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/exporting-to-bigquery"
  - "https://docs.cloud.google.com/asset-inventory/docs/export-bigquery"
  - "https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery"
keywords:
  - "without"
  - "query"
  - "preview"
  - "metadata"
  - "export"
---

# Cloud Asset Inventory asset metadata query without BigQuery export (preview)

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory introduced a preview feature allowing asset metadata queries directly via API or Cloud Console without first exporting to BigQuery.

## Extended Definition

Cloud Asset Inventory introduced a preview feature allowing asset metadata queries directly via API or Cloud Console without first exporting to BigQuery.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/exporting-to-bigquery](https://docs.cloud.google.com/asset-inventory/docs/exporting-to-bigquery)
- [https://docs.cloud.google.com/asset-inventory/docs/export-bigquery](https://docs.cloud.google.com/asset-inventory/docs/export-bigquery)
- [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery)

## Supporting Pages

### "Export asset metadata to BigQuery \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/export-bigquery](https://docs.cloud.google.com/asset-inventory/docs/export-bigquery)
- Source ID: `site-docs-reference`
- Final score: 180
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
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Relationship schema [ { "mode" : "NULLABLE" , "name" : "name" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "asset type" , "type" : "STRING" }, { "fields" : [ { "mode" : "NULLABLE" , "name" : "asset" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "asset type" , "type" : "STRING" }, { "mode" : "REPEATED" , "name" : "ancestors" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "relationship type" , "type" : "STRING" } ], "mode" : "NULLABLE" , "name" : "related asset" , "type" : "RECORD" }, { "mode" : "REPEATED" , "name" : "ancestors" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "update time" , "type" : "TIMESTAMP" } ] Export an asset snapshot gcloud gcloud asset export \ -- SCOPE \ --billing-project = BILLING PROJECT ID \ --asset-types = ASSET TYPE 1 , ASSET TYPE 2 ,... \ --content-type = CONTENT TYPE \ --relationship-types = RELATIONSHIP TYPE 1 , RELATIONSHIP TYPE 2 ,... \ --snapshot-time = " SNAPSHOT TIME " \ --bigquery-table = projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID /tables/ TABLE NAME \ --output-bigquery-force Provide the following values: SCOPE : Use one of the following values: project= PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. folder= FOLDER ID , where FOLDER ID is the ID of the folder that has the asset metadata you want to export.
- Example Run the following command to export your resource metadata as it was on January 30, 2024, in the my-project project, to the BigQuery table my-table . gcloud asset export \ --project = projects/ my-project \ --content-type = resource \ --snapshot-time = " 2024-01-30 " \ --bigquery-table = projects/ my-project /datasets/ my-dataset /tables/ my-table \ --partition-key = my-partition-key \ --output-bigquery-force REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :exportAssets Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "assetTypes" : [ " ASSET TYPE 1 " , " ASSET TYPE 2 " , "..." ], "contentType" : " CONTENT TYPE " , "relationshipTypes" : [ " RELATIONSHIP TYPE 1 " , " RELATIONSHIP TYPE 2 " , "..." ], "readTime" : " SNAPSHOT TIME " , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID " , "table" : " TABLE NAME " , "partitionSpec" : { "partitionKey" : " PARTITION KEY " }, "force" : true , } } } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project that has the asset metadata you want to export.
- Example Run the following command to export your resource metadata as it was on January 30, 2024, in the my-project project, to multiple BigQuery tables that have my-table as a prefix. gcloud asset export \ --project = my-project \ --content-type = resource \ --snapshot-time = " 2024-01-30 " \ --bigquery-table = projects/ my-project /datasets/ my-dataset /tables/ my-table \ --per-asset-type \ --output-bigquery-force REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :exportAssets Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "assetTypes" : [ " ASSET TYPE 1 " , " ASSET TYPE 2 " , "..." ], "contentType" : " CONTENT TYPE " , "readTime" : " SNAPSHOT TIME " , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID " , "table" : " TABLE NAME " , "force" : true , "separateTablesPerAssetType" : true } } } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project that has the asset metadata you want to export.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "contentType": "RESOURCE", "readTime": "2024-01-30T00:00:00Z", "outputConfig": { "bigqueryDestination": { "dataset": "projects/ my-project /datasets/ my-dataset ", "table": " my-table ", "force": true } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :exportAssets" Select-Object -Expand Content Example response { "name" : "projects/000000000000/operations/ExportAssets/RESOURCE/00000000000000000000000000000000" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.asset.v1.ExportAssetsRequest" , "parent" : "projects/000000000000" , "readTime" : "2024-01-30T00:00:00Z" , "contentType" : "RESOURCE" , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/my-project/datasets/my-dataset" , "table" : "my-table" , "force" : true } } } } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

### "Write policy analysis to BigQuery \_|\_ Policy Intelligence \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to analyze a policy and export the results to BigQuery: bigquery.datasets.create bigquery.jobs.create bigquery.tables.create bigquery.tables.get bigquery.tables.updateData bigquery.tables.update cloudasset.assets.analyzeIamPolicy cloudasset.assets.searchAllResources cloudasset.assets.searchAllIamPolicies To analyze policies with custom IAM roles: iam.roles.get To use the Google Cloud CLI to analyze policies: serviceusage.services.use You might also be able to get these permissions with custom roles or other predefined roles .
- Required IAM roles To get the permissions that you need to analyze a policy and export the results to BigQuery, ask your administrator to grant you the following IAM roles on the project, folder, or organization that you will scope your query to: BigQuery Data Editor ( roles/bigquery.dataEditor ) Cloud Asset Viewer ( roles/cloudasset.viewer ) To analyze policies with custom IAM roles : Role Viewer ( roles/iam.roleViewer ) To use the Google Cloud CLI to analyze policies: Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- You should receive a JSON response similar to the following: { "name": "projects/my-project/operations/AnalyzeIamPolicyLongrunning/1206385342502762515812063858425027606003", "metadata": { "@type": "type.googleapis.com/google.cloud.asset.v1.AnalyzeIamPolicyLongrunningMetadata", "createTime": "2022-04-12T21:31:10.753173929Z" } } View IAM policy analysis results To view your IAM policy analysis results: Console In the Google Cloud console, go to the BigQuery page.
- Policy Analyzer runs your query and exports the results to the specified table. gcloud The AnalyzeIamPolicyLongrunning method allows you to issue an analysis request and get results in the specified BigQuery destination.

