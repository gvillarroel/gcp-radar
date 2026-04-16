---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.490Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Data import API"
feature_slug: "data-import-api"
latest_feature_date: "2025-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies"
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
  - "https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration"
keywords:
  - "import"
  - "alloydb"
  - "provides"
  - "into"
  - "clusters"
  - "cancel"
  - "check"
  - "status"
---

# Data import API

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB provides an API to import data into clusters and to cancel or check the status of import operations.

## Extended Definition

AlloyDB provides an API to import data into clusters and to cancel or check the status of import operations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)
- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)

## Supporting Pages

### "AlloyDB database indexing strategies \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- To check parallelism during an index build, issue the following query: SELECT query , leader pid , array agg ( pid ) filter ( WHERE leader pid != pid ) AS members FROM pg stat activity WHERE leader pid IS NOT NULL GROUP BY query , leader pid ; To determine the complete status of an index build, issue the following query: SELECT FROM pg stat progress create index ; Build partitioned indexes in parallel All the same principles of building indexes in parallel also work against partitions.
- The following example demonstrates using a test table and a regular B-tree index: CREATE TABLE public . bloom test ( emp id int , dept id int , id2 int , id3 int , id4 int , id5 int , id6 int , id7 int , details text , location code int ); INSERT INTO public . bloom test SELECT ( random () 1000000 ):: int , ( random () 1000000 ):: int , ( random () 1000000 ):: int ,( random () 1000000 ):: int ,( random () 1000000 ):: int ,( random () 1000000 ):: int , ( random () 1000000 ):: int ,( random () 1000000 ):: int , md5 ( g :: text ), floor ( random () ( 20000 - 9999 + 1 ) + 9999 ) FROM generate series ( 1 , 100 1 e4 ) g ; CREATE INDEX idx btree bloom test ON public . bloom test ( emp id , dept id , id2 , id3 , id4 , id5 , id6 , location code ); SELECT from public . bloom test WHERE id5 = 564804 AND id6 = 797758 ; QUERY PLAN -------------------------------------------------------------------------------------------------------- Index Scan using idx btree bloom test on public . bloom test ( cost = 0 .
- 692 rows = 5 loops = 1 ) Output : id , creationdate , score , title , viewcount , "substring" ( body , 0 , 50 ), ( body embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector ) Order By : ( p . body embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector ) Filter : ( p . title IS NOT NULL ) Rows Removed by Filter : 4 Buffers : shared hit = 2565 Columnar Check : table is not in the columnar store Settings : effective cache size = '9830032kB' , random page cost = '1.1' , work mem = '256MB' Query Identifier : - 6886845657091642615 Planning : Buffers : shared hit = 2 Planning Time : 53 .
- 088 rows = 5 loops = 1 ) Output : id , creationdate , score , title , viewcount , "substring" ( body , 0 , 50 ), ( body embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector ) Order By : ( p . body embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector ) Filter : ( p . title IS NOT NULL ) Rows Removed by Filter : 2 Buffers : shared hit = 889 Columnar Check : table is not in the columnar store Settings : effective cache size = '9830032kB' , random page cost = '1.1' , work mem = '256MB' Query Identifier : - 6886845657091642615 Planning : Buffers : shared hit = 1 Planning Time : 93 .

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flags alloydb.enable pglogical and alloydb.logical decoding to the value on in the AlloyDB instance where you want to use the extension. pgrowlocks Provides row locking information for the specified table. pgRouting Extends PostGIS , enabling geospatial processing through network routing and analysis. pgstattuple Provides various functions to obtain tuple-level statistics. pgtap Provides a unit testing framework for PostgreSQL, written in PL/pgSQL and PL/SQL. pgtt Adds support for global temporary tables to your databases. vector The stock pgvector PostgreSQL extension is customized for AlloyDB, and referred to as vector .
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flag alloydb.enable pg squeeze to the value on in the AlloyDB instance where you want to use the extension. pg stat statements Provides a means for tracking execution statistics of all SQL statements executed. pg trgm Provides functions and operators for determining the similarity of alphanumeric text based on trigram matching, as well as index operator classes that support fast searching for similar strings. pg visibility Provides a way to examine the visibility map (VM) and the page-level visibility information of a table. pg wait sampling Provides the ability to collect sampling statistics of wait events.
- However, you can manually install PostGIS to an existing AlloyDB Omni installation. postgres fdw Provides a foreign-data wrapper that you can use to access data stored in external PostgreSQL servers. postgresql-hll Introduces a new data type, hll , which is a HyperLogLog data structure. prefix Provides prefix-matching, plus index support. rdkit Provides functions for comparing, manipulating, and identifying molecular structures. refint Includes functions to check foreign key restraints, the referencing table, and the referenced table. rum Implements support to create RUM indexes for high-performance full-text search.
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flag google columnar engine.enabled to the value on in the AlloyDB instance where you want to use the extension. google db advisor Provides the index advisor feature of AlloyDB, which recommends indexes to speed up query processing. google ml integration Provides functions you use to register model endpoints and generate embeddings or invoke predictions in SQL. google plan management Provides functions you use to manage your query plans using query plan management for consistent query plan selection.

### "Manage your AlloyDB resources using Knowledge Catalog \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- Source ID: `site-iam-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /clusters?cluster id= CLUSTER ID " Select-Object -Expand Content You receive a JSON response similar to the following: Response { "kind" : "alloydb#operation" , "targetLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/clusters/CLUSTER ID" , "status" : "PENDING" , "user" : "user@example.com" , "insertTime" : "2024-09-25T22:19:33.735Z" , "operationType" : "CREATE" , "name" : "OPERATION ID" , "targetId" : "CLUSTER ID" , "selfLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/operations/OPERATION ID" , "targetProject" : "PROJECT ID" } Enable the Knowledge Catalog integration for your AlloyDB cluster To enable the Knowledge Catalog integration on an existing cluster, use one of the following procedures: gcloud To enable the Knowledge Catalog integration on an existing cluster, use the gcloud alloydb clusters update command with the --enable-dataplex-integration flag. gcloud alloydb clusters update CLUSTER ID \ --region = REGION \ --enable-dataplex-integration Make the following replacements: CLUSTER ID : the name of the cluster.
- Save the request body in a file named request.json and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /clusters/ CLUSTER ID ?updateMask=dataplexConfig.enabled" Select-Object -Expand Content You receive a JSON response similar to the following: Response { "kind" : "alloydb#operation" , "targetLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/clusters/CLUSTER ID" , "status" : "PENDING" , "user" : "user@example.com" , "insertTime" : "2024-09-25T22:19:33.735Z" , "operationType" : "UPDATE" , "name" : "OPERATION ID" , "targetId" : "CLUSTER ID" , "selfLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/operations/OPERATION ID" , "targetProject" : "PROJECT ID" } Verify Knowledge Catalog integration on your AlloyDB cluster To verify that the Knowledge Catalog integration is enabled on an existing cluster, use one of the following procedures: gcloud To verify that the Knowledge Catalog integration is enabled on an existing cluster, use the gcloud alloydb clusters describe command. gcloud alloydb clusters describe CLUSTER ID --region = REGION Make the following replacements: CLUSTER ID : the cluster ID.
- Save the request body in a file named request.json and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /clusters/ CLUSTER ID ?updateMask=dataplexConfig.enabled" Select-Object -Expand Content You receive a JSON response similar to the following: Response { "kind" : "alloydb#operation" , "targetLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/clusters/CLUSTER ID" , "status" : "PENDING" , "user" : "user@example.com" , "insertTime" : "2024-01-16T02:32:12.281Z" , "operationType" : "UPDATE" , "name" : "OPERATION ID" , "targetId" : "CLUSTER ID" , "selfLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/operations/OPERATION ID" , "targetProject" : "PROJECT ID" } Enrich AlloyDB assets with aspects Aspect types are reusable resources that serve as templates for aspects.
- Save the request body in a file named request.json and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /clusters/ CLUSTER ID " Select-Object -Expand Content You receive a JSON response for the entire Cluster proto, which includes the dataplexConfig message: { "dataplexConfig" : { "enabled" : true } } Deactivate the integration of Knowledge Catalog on your AlloyDB cluster When you disable integration of Knowledge Catalog on your AlloyDB cluster, only the cluster and instance metadata are available. gcloud Use the gcloud alloydb clusters update command with the --no-enable-dataplex-integration flag to deactivate the integration. gcloud alloydb clusters update CLUSTER ID \ --region = REGION \ --no-enable-dataplex-integration Make the following replacements: CLUSTER ID : the ID of the cluster.

