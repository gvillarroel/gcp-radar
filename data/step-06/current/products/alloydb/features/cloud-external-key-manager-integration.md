---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.524Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Cloud External Key Manager integration"
feature_slug: "cloud-external-key-manager-integration"
latest_feature_date: "2023-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint"
  - "https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration"
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables"
keywords:
  - "external"
  - "key"
  - "manager"
  - "integration"
  - "alloydb"
  - "can"
  - "use"
  - "manage"
---

# Cloud External Key Manager integration

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB can use and manage data encryption keys stored outside Google Cloud through Cloud External Key Manager.

## Extended Definition

AlloyDB can use and manage data encryption keys stored outside Google Cloud through Cloud External Key Manager.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)

## Supporting Pages

### "Manage your AlloyDB resources using Knowledge Catalog \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- Source ID: `site-iam-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Knowledge Catalog integration is enabled by default for all new AlloyDB clusters, allowing you to search for and manage your AlloyDB for PostgreSQL resources using Knowledge Catalog, a platform that lets you store, manage, and access metadata.
- Save the request body in a file named request.json and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /clusters?cluster id= CLUSTER ID " Select-Object -Expand Content You receive a JSON response similar to the following: Response { "kind" : "alloydb#operation" , "targetLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/clusters/CLUSTER ID" , "status" : "PENDING" , "user" : "user@example.com" , "insertTime" : "2024-09-25T22:19:33.735Z" , "operationType" : "CREATE" , "name" : "OPERATION ID" , "targetId" : "CLUSTER ID" , "selfLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/operations/OPERATION ID" , "targetProject" : "PROJECT ID" } Enable the Knowledge Catalog integration for your AlloyDB cluster To enable the Knowledge Catalog integration on an existing cluster, use one of the following procedures: gcloud To enable the Knowledge Catalog integration on an existing cluster, use the gcloud alloydb clusters update command with the --enable-dataplex-integration flag. gcloud alloydb clusters update CLUSTER ID \ --region = REGION \ --enable-dataplex-integration Make the following replacements: CLUSTER ID : the name of the cluster.
- Save the request body in a file named request.json and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /clusters/ CLUSTER ID ?updateMask=dataplexConfig.enabled" Select-Object -Expand Content You receive a JSON response similar to the following: Response { "kind" : "alloydb#operation" , "targetLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/clusters/CLUSTER ID" , "status" : "PENDING" , "user" : "user@example.com" , "insertTime" : "2024-09-25T22:19:33.735Z" , "operationType" : "UPDATE" , "name" : "OPERATION ID" , "targetId" : "CLUSTER ID" , "selfLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/operations/OPERATION ID" , "targetProject" : "PROJECT ID" } Verify Knowledge Catalog integration on your AlloyDB cluster To verify that the Knowledge Catalog integration is enabled on an existing cluster, use one of the following procedures: gcloud To verify that the Knowledge Catalog integration is enabled on an existing cluster, use the gcloud alloydb clusters describe command. gcloud alloydb clusters describe CLUSTER ID --region = REGION Make the following replacements: CLUSTER ID : the cluster ID.
- Save the request body in a file named request.json and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /clusters/ CLUSTER ID " Select-Object -Expand Content You receive a JSON response for the entire Cluster proto, which includes the dataplexConfig message: { "dataplexConfig" : { "enabled" : true } } Deactivate the integration of Knowledge Catalog on your AlloyDB cluster When you disable integration of Knowledge Catalog on your AlloyDB cluster, only the cluster and instance metadata are available. gcloud Use the gcloud alloydb clusters update command with the --no-enable-dataplex-integration flag to deactivate the integration. gcloud alloydb clusters update CLUSTER ID \ --region = REGION \ --no-enable-dataplex-integration Make the following replacements: CLUSTER ID : the ID of the cluster.

### "Model endpoint management reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- Source ID: `site-api-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- The following table shows the auth types that you can set: Authentication method Set in function as… Model provider AlloyDB service agent alloydb service agent iam Vertex AI provider Secret Manager secret manager third-party providers, such as Anthropic, Hugging Face, or OpenAI Models Use this reference to understand parameters for functions that let you manage model endpoints. google ml.create model() function The following shows how to call the google ml.create model() SQL function used to register model endpoint metadata: CALL google ml . create model ( model id = > ' MODEL ID ' , model request url = > ' REQUEST URL ' , model provider = > ' PROVIDER ID ' , model type = > ' MODEL TYPE ' , model qualified name = > ' MODEL QUALIFIED NAME ' , model auth type = > ' AUTH TYPE ' , model auth id = > ' AUTH ID ' , generate headers fn = > ' GENERATE HEADER FUNCTION ' , model in transform fn = > ' INPUT TRANSFORM FUNCTION ' , model out transform fn = > ' OUTPUT TRANSFORM FUNCTION ' ); Parameter Required Description MODEL ID required for all model endpoints A unique ID for the model endpoint that you define.
- For example, to call the pre-registered gemini-embedding-001 model directly: SELECT google ml.embedding( model id => 'gemini-embedding-001', content => 'AlloyDB is a managed, cloud-hosted SQL database service'); Models with built-in support Model endpoints with built-in support benefit from automated integration.
- The Vertex AI models use the AlloyDB service account to authenticate, while other providers can use the Secret Manager or pass authentication details through headers.
- You can set it to either alloydb service agent iam for Vertex AI models or secret manager for other providers, if they use Secret Manager for authentication.

### "Generate and manage auto vector embeddings for large tables \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Generate and manage auto vector embeddings for large tables Stay organized with collections Save and categorize content based on your preferences.
- Before you can generate and manage vector embeddings for large tables, do the following: Connect to your database using psql or AlloyDB for PostgreSQL Studio as the postgres user.
- Learn how to build a smart shopping assistant with AlloyDB, pgvector, and model endpoint management .
- This solution is particularly useful for facilitating semantic search and Retrieval Augmented Generation (RAG) on text content, including the following: Creating initial vector embedding for a new table Generating embeddings after a large data import Refreshing embeddings after significant data changes Maintaining embeddings incrementally Understand auto vector embeddings Auto vector embeddings in AlloyDB provide a scalable way to automate the generation and maintenance of vector embeddings for your data.

