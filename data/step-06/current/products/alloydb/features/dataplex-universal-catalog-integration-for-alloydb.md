---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.572Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Dataplex Universal Catalog integration for AlloyDB"
feature_slug: "dataplex-universal-catalog-integration-for-alloydb"
latest_feature_date: "2025-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration"
keywords:
  - "Dataplex Universal Catalog"
  - "Universal Catalog integration"
  - "Dataplex catalog"
  - "AlloyDB Dataplex integration"
  - "search AlloyDB tables"
  - "discover AlloyDB clusters"
  - "manage AlloyDB databases"
---

# Dataplex Universal Catalog integration for AlloyDB

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB now integrates with Dataplex Universal Catalog (preview) to discover, search, and manage AlloyDB clusters, databases, and tables.

## Extended Definition

Dataplex Universal Catalog integration for AlloyDB is a cluster-level AlloyDB configuration controlled through the AlloyDB API that enables or disables catalog integration for a cluster via the `dataplexConfig.enabled` field. The integration is set when creating a cluster or updating an existing one with PATCH, and can be checked afterward with a GET request. The documentation states that enabling this integration is required to discover AlloyDB database, schema, table, and view resources.

## Evidence Summary

The cited AlloyDB documentation page provides API-based instructions for enabling, disabling, and verifying Dataplex Universal Catalog integration on clusters, and links that integration to discovery of AlloyDB metadata objects.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)

## Supporting Pages

### "Manage your AlloyDB resources using Dataplex Universal Catalog \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- Source ID: `site-iam-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /clusters?cluster id= CLUSTER ID " Select-Object -Expand Content You receive a JSON response similar to the following: Response { "kind" : "alloydb#operation" , "targetLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/clusters/CLUSTER ID" , "status" : "PENDING" , "user" : "user@example.com" , "insertTime" : "2024-09-25T22:19:33.735Z" , "operationType" : "CREATE" , "name" : "OPERATION ID" , "targetId" : "CLUSTER ID" , "selfLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/operations/OPERATION ID" , "targetProject" : "PROJECT ID" } Enable the Dataplex Universal Catalog integration for your AlloyDB cluster To update specific fields of an existing cluster, use the PATCH method on the projects.locations.clusters resource .
- Save the request body in a file named request.json and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT ID /clusters/ CLUSTER ID " Select-Object -Expand Content You receive a JSON response similar to the following: Response { "kind" : "alloydb#operation" , "targetLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/clusters/CLUSTER ID" , "status" : "PENDING" , "user" : "user@example.com" , "insertTime" : "2024-09-25T22:19:33.735Z" , "operationType" : "UPDATE" , "name" : "OPERATION ID" , "targetId" : "CLUSTER ID" , "selfLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/operations/OPERATION ID" , "targetProject" : "PROJECT ID" } Verify Dataplex Universal Catalog integration on your AlloyDB cluster To verify that the Dataplex Universal Catalog integration is enabled on an existing cluster, use the GET method.
- To create a cluster with Dataplex Universal Catalog integration enabled, save the request body in a file named cluster request.json : { "databaseVersion" : " DATABASE VERSION " , "initialUser" : { "user" : " INITIAL USERNAME " , "password" : " INITIAL USER PASSWORD " }, "labels" : { "test" : "alloydb-cluster-full" } } To disable Dataplex Universal Catalog integration for database, schema, table, and view resources, include "dataplexConfig": { "enabled": false } in the request body: { "databaseVersion" : " DATABASE VERSION " , "initialUser" : { "user" : " INITIAL USERNAME " , "password" : " INITIAL USER PASSWORD " }, "labels" : { "test" : "alloydb-cluster-full" }, "dataplexConfig" : { "enabled" : false } } Make the following replacements: DATABASE VERSION : enum string of the database version—for example, POSTGRES 16 .
- To discover AlloyDB database, schema, table and view resources, you must enable the Dataplex Universal Catalog integration for your AlloyDB cluster using the AlloyDB API when you create a new cluster or when you update an existing cluster.

