---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.666Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory: INSTANCE_TO_INSTANCEGROUP asset relationship export in public preview"
feature_slug: "cloud-asset-inventory-instance-to-instancegroup-asset-relationship-export-in-public-preview"
latest_feature_date: "2021-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/export-bigquery"
  - "https://docs.cloud.google.com/asset-inventory/docs/exporting-to-bigquery"
  - "https://docs.cloud.google.com/asset-inventory/docs/relationship-types"
keywords:
  - "instancegroup"
  - "relationship"
  - "public"
  - "preview"
  - "instance"
  - "export"
---

# Cloud Asset Inventory: INSTANCE_TO_INSTANCEGROUP asset relationship export in public preview

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Asset relationship export now supports the INSTANCE_TO_INSTANCEGROUP relationship type in public preview via ExportAssets.

## Extended Definition

Asset relationship export now supports the INSTANCE_TO_INSTANCEGROUP relationship type in public preview via ExportAssets.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/export-bigquery](https://docs.cloud.google.com/asset-inventory/docs/export-bigquery)
- [https://docs.cloud.google.com/asset-inventory/docs/exporting-to-bigquery](https://docs.cloud.google.com/asset-inventory/docs/exporting-to-bigquery)
- [https://docs.cloud.google.com/asset-inventory/docs/relationship-types](https://docs.cloud.google.com/asset-inventory/docs/relationship-types)

## Supporting Pages

### "Export asset metadata to BigQuery \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/export-bigquery](https://docs.cloud.google.com/asset-inventory/docs/export-bigquery)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ProjectName ; import java.io.IOException ; import java.util.Arrays ; import java.util.concurrent.ExecutionException ; public class ExportAssetsBigqueryExample { // Use the default project Id. private static final String projectId = ServiceOptions . getDefaultProjectId (); / Export assets to BigQuery for a project. @param bigqueryDataset which dataset the results will be exported to @param bigqueryTable which table the results will be exported to @param contentType determines the schema for the table @param assetTypes a list of asset types to export. if empty, export all. @param isPerType separate BigQuery tables for each resource type / public static void exportBigQuery ( String bigqueryDataset , String bigqueryTable , ContentType contentType , String [] assetTypes , boolean isPerType ) throws IOException , IllegalArgumentException , InterruptedException , ExecutionException { try ( AssetServiceClient client = AssetServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); OutputConfig outputConfig ; // Outputs to per-type BigQuery table. if ( isPerType ) { outputConfig = OutputConfig . newBuilder () . setBigqueryDestination ( BigQueryDestination . newBuilder () . setDataset ( bigqueryDataset ) . setTable ( bigqueryTable ) . setForce ( true ) . setSeparateTablesPerAssetType ( true ) . setPartitionSpec ( PartitionSpec . newBuilder () . setPartitionKey ( PartitionSpec .
- Relationship schema [ { "mode" : "NULLABLE" , "name" : "name" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "asset type" , "type" : "STRING" }, { "fields" : [ { "mode" : "NULLABLE" , "name" : "asset" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "asset type" , "type" : "STRING" }, { "mode" : "REPEATED" , "name" : "ancestors" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "relationship type" , "type" : "STRING" } ], "mode" : "NULLABLE" , "name" : "related asset" , "type" : "RECORD" }, { "mode" : "REPEATED" , "name" : "ancestors" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "update time" , "type" : "TIMESTAMP" } ] Export an asset snapshot gcloud gcloud asset export \ -- SCOPE \ --billing-project = BILLING PROJECT ID \ --asset-types = ASSET TYPE 1 , ASSET TYPE 2 ,... \ --content-type = CONTENT TYPE \ --relationship-types = RELATIONSHIP TYPE 1 , RELATIONSHIP TYPE 2 ,... \ --snapshot-time = " SNAPSHOT TIME " \ --bigquery-table = projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID /tables/ TABLE NAME \ --output-bigquery-force Provide the following values: SCOPE : Use one of the following values: project= PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. folder= FOLDER ID , where FOLDER ID is the ID of the folder that has the asset metadata you want to export.
- Example Run the following command to export your resource metadata as it was on January 30, 2024, in the my-project project, to the BigQuery table my-table . gcloud asset export \ --project = projects/ my-project \ --content-type = resource \ --snapshot-time = " 2024-01-30 " \ --bigquery-table = projects/ my-project /datasets/ my-dataset /tables/ my-table \ --partition-key = my-partition-key \ --output-bigquery-force REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :exportAssets Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "assetTypes" : [ " ASSET TYPE 1 " , " ASSET TYPE 2 " , "..." ], "contentType" : " CONTENT TYPE " , "relationshipTypes" : [ " RELATIONSHIP TYPE 1 " , " RELATIONSHIP TYPE 2 " , "..." ], "readTime" : " SNAPSHOT TIME " , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID " , "table" : " TABLE NAME " , "partitionSpec" : { "partitionKey" : " PARTITION KEY " }, "force" : true , } } } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project that has the asset metadata you want to export.
- REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :exportAssets Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "assetTypes" : [ " ASSET TYPE 1 " , " ASSET TYPE 2 " , "..." ], "contentType" : " CONTENT TYPE " , "relationshipTypes" : [ " RELATIONSHIP TYPE 1 " , " RELATIONSHIP TYPE 2 " , "..." ], "readTime" : " SNAPSHOT TIME " , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID " , "table" : " TABLE NAME " , "force" : true } } } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project that has the asset metadata you want to export.

### "Export asset metadata to BigQuery \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/exporting-to-bigquery](https://docs.cloud.google.com/asset-inventory/docs/exporting-to-bigquery)
- Source ID: `site-docs-reference-2`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ProjectName ; import java.io.IOException ; import java.util.Arrays ; import java.util.concurrent.ExecutionException ; public class ExportAssetsBigqueryExample { // Use the default project Id. private static final String projectId = ServiceOptions . getDefaultProjectId (); / Export assets to BigQuery for a project. @param bigqueryDataset which dataset the results will be exported to @param bigqueryTable which table the results will be exported to @param contentType determines the schema for the table @param assetTypes a list of asset types to export. if empty, export all. @param isPerType separate BigQuery tables for each resource type / public static void exportBigQuery ( String bigqueryDataset , String bigqueryTable , ContentType contentType , String [] assetTypes , boolean isPerType ) throws IOException , IllegalArgumentException , InterruptedException , ExecutionException { try ( AssetServiceClient client = AssetServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); OutputConfig outputConfig ; // Outputs to per-type BigQuery table. if ( isPerType ) { outputConfig = OutputConfig . newBuilder () . setBigqueryDestination ( BigQueryDestination . newBuilder () . setDataset ( bigqueryDataset ) . setTable ( bigqueryTable ) . setForce ( true ) . setSeparateTablesPerAssetType ( true ) . setPartitionSpec ( PartitionSpec . newBuilder () . setPartitionKey ( PartitionSpec .
- Relationship schema [ { "mode" : "NULLABLE" , "name" : "name" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "asset type" , "type" : "STRING" }, { "fields" : [ { "mode" : "NULLABLE" , "name" : "asset" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "asset type" , "type" : "STRING" }, { "mode" : "REPEATED" , "name" : "ancestors" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "relationship type" , "type" : "STRING" } ], "mode" : "NULLABLE" , "name" : "related asset" , "type" : "RECORD" }, { "mode" : "REPEATED" , "name" : "ancestors" , "type" : "STRING" }, { "mode" : "NULLABLE" , "name" : "update time" , "type" : "TIMESTAMP" } ] Export an asset snapshot gcloud gcloud asset export \ -- SCOPE \ --billing-project = BILLING PROJECT ID \ --asset-types = ASSET TYPE 1 , ASSET TYPE 2 ,... \ --content-type = CONTENT TYPE \ --relationship-types = RELATIONSHIP TYPE 1 , RELATIONSHIP TYPE 2 ,... \ --snapshot-time = " SNAPSHOT TIME " \ --bigquery-table = projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID /tables/ TABLE NAME \ --output-bigquery-force Provide the following values: SCOPE : Use one of the following values: project= PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. folder= FOLDER ID , where FOLDER ID is the ID of the folder that has the asset metadata you want to export.
- Example Run the following command to export your resource metadata as it was on January 30, 2024, in the my-project project, to the BigQuery table my-table . gcloud asset export \ --project = projects/ my-project \ --content-type = resource \ --snapshot-time = " 2024-01-30 " \ --bigquery-table = projects/ my-project /datasets/ my-dataset /tables/ my-table \ --partition-key = my-partition-key \ --output-bigquery-force REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :exportAssets Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "assetTypes" : [ " ASSET TYPE 1 " , " ASSET TYPE 2 " , "..." ], "contentType" : " CONTENT TYPE " , "relationshipTypes" : [ " RELATIONSHIP TYPE 1 " , " RELATIONSHIP TYPE 2 " , "..." ], "readTime" : " SNAPSHOT TIME " , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID " , "table" : " TABLE NAME " , "partitionSpec" : { "partitionKey" : " PARTITION KEY " }, "force" : true , } } } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project that has the asset metadata you want to export.
- REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :exportAssets Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "assetTypes" : [ " ASSET TYPE 1 " , " ASSET TYPE 2 " , "..." ], "contentType" : " CONTENT TYPE " , "relationshipTypes" : [ " RELATIONSHIP TYPE 1 " , " RELATIONSHIP TYPE 2 " , "..." ], "readTime" : " SNAPSHOT TIME " , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID " , "table" : " TABLE NAME " , "force" : true } } } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project that has the asset metadata you want to export.

### Relationship types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/relationship-types](https://docs.cloud.google.com/asset-inventory/docs/relationship-types)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- You can use these relationship types with the following Cloud Asset Inventory operations: Export to BigQuery Export to Cloud Storage List assets Get asset histories Monitor asset changes with Pub/Sub Asset type Relationship types anthos. googleapis. com/ ConnectedCluster ANTHOS CONNECTED CLUSTER TO GKEHUB MEMBERSHIPS Returns metadata about GKE Enterprise connected clusters and the GKE Hub that they are members of.
- INSTANCEGROUP TO INSTANCEGROUPMANAGER Returns metadata about Compute Engine instance-groups and the Compute Engine instance group managers that manage them. compute. googleapis. com/ InstanceGroupManager COMPUTE INSTANCE GROUP MANAGER TO INSTANCE Returns metadata about Compute Engine instance group managers and the Compute Engine instances they manage.
- INSTANCE TO INSTANCEGROUPMANAGER Returns metadata about Compute Engine instances and the Compute Engine instance group managers that manage them. compute. googleapis. com/ InstanceGroup COMPUTE INSTANCE GROUP TO BACKEND SERVICE Returns metadata about Compute Engine instance groups and the Compute Engine backend services that they own.
- See Components of an application for an App Engine relationship diagram. bigtableadmin. googleapis. com/ AppProfile BIGTABLE APP PROFILE TO INSTANCE Returns metadata about Bigtable app profiles and their related Bigtable instances .

