---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.174Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Cloud External Key Manager integration"
feature_slug: "cloud-external-key-manager-integration"
latest_feature_date: "2023-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration"
  - "https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint"
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables"
keywords:
  - "manager"
  - "integration"
  - "external"
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

- [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)

## Supporting Pages

### "Manage your AlloyDB resources using Knowledge Catalog \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- Source ID: `site-iam-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Knowledge Catalog integration is enabled by default for all new AlloyDB clusters, allowing you to search for and manage your AlloyDB for PostgreSQL resources using Knowledge Catalog, a platform that lets you store, manage, and access metadata.
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.
- Save the request body in a file named request.json and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /clusters?cluster id= CLUSTER ID " Select-Object -Expand Content You receive a JSON response similar to the following: Response { "kind" : "alloydb#operation" , "targetLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/clusters/CLUSTER ID" , "status" : "PENDING" , "user" : "user@example.com" , "insertTime" : "2024-09-25T22:19:33.735Z" , "operationType" : "CREATE" , "name" : "OPERATION ID" , "targetId" : "CLUSTER ID" , "selfLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/operations/OPERATION ID" , "targetProject" : "PROJECT ID" } Enable the Knowledge Catalog integration for your AlloyDB cluster To enable the Knowledge Catalog integration on an existing cluster, use one of the following procedures: gcloud To enable the Knowledge Catalog integration on an existing cluster, use the gcloud alloydb clusters update command with the --enable-dataplex-integration flag. gcloud alloydb clusters update CLUSTER ID \ --region = REGION \ --enable-dataplex-integration Make the following replacements: CLUSTER ID : the name of the cluster.

### "Model endpoint management reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- Source ID: `site-api-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- See Transform functions . google ml.alter model() The following shows how to call the google ml.alter model() SQL function used to update model endpoint metadata: CALL google ml . alter model ( model id = > ' MODEL ID ' , model request url = > ' REQUEST URL ' , model provider = > ' PROVIDER ID ' , model type = > ' MODEL TYPE ' , model qualified name = > ' MODEL QUALIFIED NAME ' , model auth type = > ' AUTH TYPE ' , model auth id = > ' AUTH ID ' , generate headers fn = > ' GENERATE HEADER FUNCTION ' , model in transform fn = > ' INPUT TRANSFORM FUNCTION ' , model out transform fn = > ' OUTPUT TRANSFORM FUNCTION ' ); For information about the values that you must set for each parameter, see Create a model . google ml.drop model() function The following shows how to call the google ml.drop model() SQL function used to drop a model endpoint: CALL google ml . drop model ( ' MODEL ID ' ); Parameter Description MODEL ID A unique ID for the model endpoint that you defined. google ml.list model() function The following shows how to call the google ml.list model() SQL function used to list model endpoint information: SELECT google ml . list model ( ' MODEL ID ' ); Parameter Description MODEL ID A unique ID for the model endpoint that you defined. google ml.model info view view The following shows how to call the google ml.model info view view that is used to list model endpoint information for all model endpoints: SELECT FROM google ml . model info view ; Secrets Use this reference to understand parameters for functions that let you manage secrets. google ml.create sm secret() function The following shows how to call the google ml.create sm secret() SQL function used to add the secret created in Secret Manager: CALL google ml . create sm secret ( secret id = > ' SECRET ID ' , secret path = > 'projects/ project-id /secrets/ SECRET MANAGER SECRET ID /versions/ VERSION NUMBER ' ); Parameter Description SECRET ID The secret ID that you set and is subsequently used when registering a model endpoint.
- The following table shows the auth types that you can set: Authentication method Set in function as… Model provider AlloyDB service agent alloydb service agent iam Vertex AI provider Secret Manager secret manager third-party providers, such as Anthropic, Hugging Face, or OpenAI Models Use this reference to understand parameters for functions that let you manage model endpoints. google ml.create model() function The following shows how to call the google ml.create model() SQL function used to register model endpoint metadata: CALL google ml . create model ( model id = > ' MODEL ID ' , model request url = > ' REQUEST URL ' , model provider = > ' PROVIDER ID ' , model type = > ' MODEL TYPE ' , model qualified name = > ' MODEL QUALIFIED NAME ' , model auth type = > ' AUTH TYPE ' , model auth id = > ' AUTH ID ' , generate headers fn = > ' GENERATE HEADER FUNCTION ' , model in transform fn = > ' INPUT TRANSFORM FUNCTION ' , model out transform fn = > ' OUTPUT TRANSFORM FUNCTION ' ); Parameter Required Description MODEL ID required for all model endpoints A unique ID for the model endpoint that you define.
- VERSION NUMBER The version number of the secret ID. google ml.alter sm secret() function The following shows how to call the google ml.alter sm secret() SQL function used to update secret information: CALL google ml . alter sm secret ( secret id = > ' SECRET ID ' , secret path = > 'projects/ project-id /secrets/ SECRET MANAGER SECRET ID /versions/ VERSION NUMBER ' ); For information about the values that you must set for each parameter, see Create a secret . google ml.drop sm secret() function The following shows how to call the google ml.drop sm secret() SQL function used to drop a secret: CALL google ml . drop sm secret ( ' SECRET ID ' ); Parameter Description SECRET ID The secret ID that you set and was subsequently used when registering a model endpoint.
- For example, to call the pre-registered gemini-embedding-001 model directly: SELECT google ml.embedding( model id => 'gemini-embedding-001', content => 'AlloyDB is a managed, cloud-hosted SQL database service'); Models with built-in support Model endpoints with built-in support benefit from automated integration.

### "Generate and manage auto vector embeddings for large tables \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- OpenAI embedding model To generate embeddings using the registered text-embedding-3-small model endpoint provided by OpenAI, run the following statement: CALL ai . initialize embeddings ( model id = > 'text-embedding-3-small' , table name = > 'user reviews' , content column = > 'content' , embedding column = > 'content embeddings' ); Custom embedding models For your own or externally supported models, you must define input and output transform functions and register them with ai.create model .
- CALL ai . initialize embeddings ( model id = > 'text-embedding-005' , table name = > 'user reviews' , content column = > 'content' , embedding column = > 'content embeddings' , batch size = > 50 ); Use a custom embedding model with batch support If you want to use a custom or externally supported model that supports batching, define the batch transform functions and specify them as model batch in transform fn and model batch out transform fn when you create a model.
- Verify the extension version To check the version of the google ml integration extension, run the following command: SELECT extversion FROM pg extension WHERE extname = 'google ml integration' ; If you need to update the extension, run the following command: ALTER EXTENSION google ml integration UPDATE ; Note: If you don't have the necessary permissions, contact your database administrator to perform the update.
- To let a user manage auto embedding generation, grant INSERT , UPDATE , and DELETE permissions on the google ml.embed gen progress and google ml.embed gen settings tables: GRANT INSERT , UPDATE , DELETE ON google ml . embed gen progress TO ' USER NAME ' ; Replace the following: USER NAME : the name of the user for whom the permissions are granted.

