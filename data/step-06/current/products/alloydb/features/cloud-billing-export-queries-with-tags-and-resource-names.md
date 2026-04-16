---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.503Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Cloud Billing export queries with tags and resource names"
feature_slug: "cloud-billing-export-queries-with-tags-and-resource-names"
latest_feature_date: "2024-07-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration"
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
  - "https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference"
keywords:
  - "billing"
  - "export"
  - "queries"
  - "tags"
  - "resource"
  - "names"
  - "alloydb"
  - "supports"
---

# Cloud Billing export queries with tags and resource names

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB supports querying exported Cloud Billing data by using resource-level tags and resource names.

## Extended Definition

AlloyDB supports querying exported Cloud Billing data by using resource-level tags and resource names.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference)

## Supporting Pages

### "Database performance snapshot report reference \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference)
- Source ID: `site-api-reference`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback Database performance snapshot report reference Stay organized with collections Save and categorize content based on your preferences.
- UltraFastCachePWrite I/O Latency of a write to the AlloyDB UltraFast Cache WalBatchWrite I/O Wait time for a minimal batch size to write WAL.
- Wait events in snapshot reports The following table describes wait events that are supported by AlloyDB performance snapshot reports.
- StorageAwaitMayWrite I/O Time spent waiting for AlloyDB storage to process logs and allow more writes.

### "Manage your AlloyDB resources using Knowledge Catalog \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- Source ID: `site-iam-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /clusters/ CLUSTER ID ?updateMask=dataplexConfig.enabled" Select-Object -Expand Content You receive a JSON response similar to the following: Response { "kind" : "alloydb#operation" , "targetLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/clusters/CLUSTER ID" , "status" : "PENDING" , "user" : "user@example.com" , "insertTime" : "2024-01-16T02:32:12.281Z" , "operationType" : "UPDATE" , "name" : "OPERATION ID" , "targetId" : "CLUSTER ID" , "selfLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/operations/OPERATION ID" , "targetProject" : "PROJECT ID" } Enrich AlloyDB assets with aspects Aspect types are reusable resources that serve as templates for aspects.
- Knowledge Catalog automatically retrieves the following metadata from AlloyDB clusters, instances, databases, tables, columns, and views: Name Location (Region) Labels (for clusters and instances) Dataplex Integration Enabled (for clusters) Database Version Machine CPU Count (for instances) Availability Type (for instances) Charset (for databases) Collation (for databases) Owner Description (for table, views, columns, and foreign keys) Type (for clusters, instances, and machines) Columns Data Type Mode Primary Key Foreign Keys Referenced Table Column Mappings Creation Time Last modification Time Note: Knowledge Catalog refers to resources in AlloyDB and in other Google Cloud services as assets .
- To disable Knowledge Catalog integration for database, schema, table, and view resources, include "dataplexConfig": { "enabled": false } in the request body: { "databaseVersion" : " DATABASE VERSION " , "initialUser" : { "user" : " INITIAL USERNAME " , "password" : " INITIAL USER PASSWORD " }, "labels" : { "test" : "alloydb-cluster-full" }, "dataplexConfig" : { "enabled" : false } } Make the following replacements: DATABASE VERSION : enum string of the database version—for example, POSTGRES 16 .
- Knowledge Catalog operation AlloyDB resource Roles or permissions required Search for AlloyDB resources Cluster alloydb.clusters.get Columns alloydb.databases.get Instance alloydb.instances.get Database alloydb.databases.get Tables alloydb.databases.get Views alloydb.databases.get Caution: If you grant the roles/alloydb.viewer role at the project level, principals with this role can view the metadata for all AlloyDB instances in the project.

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Methods create Creates a new Cluster in a given project and location. createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete Deletes a single Cluster. export Exports data from the cluster. get Gets details of a single Cluster. import Imports data to the cluster. list Lists Clusters in a given project and location. patch Updates the parameters of a single Cluster. promote Promotes a SECONDARY cluster. restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade Upgrades a single Cluster.
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback REST Resource: projects.locations.clusters Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "enabled" : boolean } Fields enabled boolean This flag controls the integration of AlloyDB for PostgreSQL resources like databases, schemas, and tables with Dataplex.
- Resource: Cluster A cluster is a collection of regional AlloyDB resources.

