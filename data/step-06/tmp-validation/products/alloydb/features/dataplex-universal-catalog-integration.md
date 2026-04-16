---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.081Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Dataplex Universal Catalog integration"
feature_slug: "dataplex-universal-catalog-integration"
latest_feature_date: "2025-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search"
keywords:
  - "universal"
  - "dataplex"
  - "discover"
  - "catalog"
  - "integration"
  - "search"
  - "lets"
---

# Dataplex Universal Catalog integration

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Dataplex Universal Catalog integration lets you discover, search, and manage AlloyDB metadata across clusters, databases, and tables.

## Extended Definition

Dataplex Universal Catalog integration lets you discover, search, and manage AlloyDB metadata across clusters, databases, and tables.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search](https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search)

## Supporting Pages

### "Manage your AlloyDB resources using Knowledge Catalog \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- Source ID: `site-iam-reference`
- Final score: 193
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Knowledge Catalog integration is enabled by default for all new AlloyDB clusters, allowing you to search for and manage your AlloyDB for PostgreSQL resources using Knowledge Catalog, a platform that lets you store, manage, and access metadata.
- Save the request body in a file named request.json and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /clusters?cluster id= CLUSTER ID " Select-Object -Expand Content You receive a JSON response similar to the following: Response { "kind" : "alloydb#operation" , "targetLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/clusters/CLUSTER ID" , "status" : "PENDING" , "user" : "user@example.com" , "insertTime" : "2024-09-25T22:19:33.735Z" , "operationType" : "CREATE" , "name" : "OPERATION ID" , "targetId" : "CLUSTER ID" , "selfLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/operations/OPERATION ID" , "targetProject" : "PROJECT ID" } Enable the Knowledge Catalog integration for your AlloyDB cluster To enable the Knowledge Catalog integration on an existing cluster, use one of the following procedures: gcloud To enable the Knowledge Catalog integration on an existing cluster, use the gcloud alloydb clusters update command with the --enable-dataplex-integration flag. gcloud alloydb clusters update CLUSTER ID \ --region = REGION \ --enable-dataplex-integration Make the following replacements: CLUSTER ID : the name of the cluster.
- Save the request body in a file named request.json and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /clusters/ CLUSTER ID ?updateMask=dataplexConfig.enabled" Select-Object -Expand Content You receive a JSON response similar to the following: Response { "kind" : "alloydb#operation" , "targetLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/clusters/CLUSTER ID" , "status" : "PENDING" , "user" : "user@example.com" , "insertTime" : "2024-09-25T22:19:33.735Z" , "operationType" : "UPDATE" , "name" : "OPERATION ID" , "targetId" : "CLUSTER ID" , "selfLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/operations/OPERATION ID" , "targetProject" : "PROJECT ID" } Verify Knowledge Catalog integration on your AlloyDB cluster To verify that the Knowledge Catalog integration is enabled on an existing cluster, use one of the following procedures: gcloud To verify that the Knowledge Catalog integration is enabled on an existing cluster, use the gcloud alloydb clusters describe command. gcloud alloydb clusters describe CLUSTER ID --region = REGION Make the following replacements: CLUSTER ID : the cluster ID.
- Save the request body in a file named request.json and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /clusters/ CLUSTER ID " Select-Object -Expand Content You receive a JSON response for the entire Cluster proto, which includes the dataplexConfig message: { "dataplexConfig" : { "enabled" : true } } Deactivate the integration of Knowledge Catalog on your AlloyDB cluster When you disable integration of Knowledge Catalog on your AlloyDB cluster, only the cluster and instance metadata are available. gcloud Use the gcloud alloydb clusters update command with the --no-enable-dataplex-integration flag to deactivate the integration. gcloud alloydb clusters update CLUSTER ID \ --region = REGION \ --no-enable-dataplex-integration Make the following replacements: CLUSTER ID : the ID of the cluster.

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Vaultree and AlloyDB: the world's first Fully Homomorphic and Searchable Cloud Encryption Solution Vaultree launches support for Google's AlloyDB Partner Advantage page Direct link Data integration, optimization, and migration Airbyte Solution Airbyte Cloud Category Data integration and migration Description Airbyte is an open-source data integration engine that helps you consolidate your data in your data warehouses, lakes, and databases.
- Partner references CData Cloud Connectivity for AlloyDB Forging Solutions with CData Software and Google AlloyDB Partner Advantage page Direct link CData ODBC Driver Solution CData ODBC Driver for AlloyDB Category Data integration and migration Description CData AlloyDB ODBC Driver is a powerful tool that lets you connect with live data from AlloyDB, directly from any applications that support ODBC connectivity.
- Partner references Consolidate Your Data on AlloyDB With Integrate.io in Minutes Connect AlloyDB to Your Data Sources using Integrate.io ETL Integrate.io + AlloyDB demo Partner Advantage page Direct link Integrate.io DreamFactory Solution DreamFactory Category Data integration and migration Description Integrate.io ETL platform lets organizations integrate, process, and prepare data for analytics on the cloud.
- Partner references AlloyDB integration with Hightouch Sync data to AlloyDB with Hightouch Sync data from PostgreSQL to AlloyDB Partner Advantage page Direct link Integrate.io Integrate.io ETL Solution Integrate.io ETL Category Data integration and migration Description Integrate.io ETL platform lets organizations integrate, process, and prepare data for analytics on the cloud.

### "Run a hybrid vector similarity search \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search](https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search)
- Source ID: `site-docs-reference-2`
- Final score: 85
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable preview AI functions: SET google ml integration . enable preview ai functions = true ; Run a similarity search with text and vector input To perform a hybrid search in AlloyDB, you create a vector index and a text search index on your table.
- Perform a hybrid search using the hybrid search function The ai.hybrid search() function lets you combine results from multiple search types, such as vector search and full-text search.
- AlloyDB for PostgreSQL lets you perform a hybrid search that combines vector and text search.
- LangChain integration Use the AlloyDBVectorStore class in LangChain to perform hybrid search.

