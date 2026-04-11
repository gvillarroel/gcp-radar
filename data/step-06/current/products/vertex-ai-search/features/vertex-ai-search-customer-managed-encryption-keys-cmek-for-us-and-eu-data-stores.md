---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.865Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search customer-managed encryption keys (CMEK) for US and EU data stores"
feature_slug: "vertex-ai-search-customer-managed-encryption-keys-cmek-for-us-and-eu-data-stores"
latest_feature_date: "2024-10-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "cmek"
---

# Vertex AI Search customer-managed encryption keys (CMEK) for US and EU data stores

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Vertex AI Search supports CMEK for data stored in US and EU multi-region data stores, allowing customers to use their own keys for encryption at rest.

## Extended Definition

Vertex AI Search supports CMEK for data stored in US and EU multi-region data stores, allowing customers to use their own keys for encryption at rest.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)

## Supporting Pages

### "Customer-managed encryption keys \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek)
- Source ID: `site-api-reference`
- Final score: 280
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Vertex AI Search.
- Home Documentation AI and ML Vertex AI Search Send feedback Customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.
- An example curl call and response looks like this: $ curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://us-discoveryengine.googleapis.com/v1/projects/my-ai-app-project-123/locations/us/cmekConfigs" { "cmek configs": [ { "name": "projects/my-ai-app-project-123/locations/us/cmekConfigs/default cmek config", "kmsKey": "projects/key-project-456/locations/us/keyRings/my-key-ring/cryptoKeys/my-key" "state": "ACTIVE" "isDefault": true } ] } Unregister your Cloud KMS key To unregister your key from Vertex AI Search, follow these steps: Call the DeleteCmekConfig method with the CmekConfig resource name that you want to unregister. curl -X DELETE \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ "https:// LOCATION -discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cmekConfigs/ CMEK CONFIG ID " Replace the following: LOCATION : the multi-region of your data store: us or eu .
- An example response looks like this: { "name": "projects/969795412903/locations/us/collections/default collection/dataStores/my-data-store-1", "displayName": "my-data-store-1", "industryVertical": "GENERIC", "createTime": "2023-09-05T21:20:21.520552Z", "solutionTypes": [ "SOLUTION TYPE SEARCH" ], "defaultSchemaId": "default schema", "cmekConfig": { "name": "projects/969795412903/locations/us/collections/default collection/dataStores/my-data-store-1/cmekConfigs/default cmek config", "kmsKey": "projects/my-ai-app-project-123/locations/us/keyRings/my-key-ring/cryptoKeys/my-key" } } Other data protected by the Cloud KMS key In addition to data in the data stores, your keys can protect other types of app-owned core information held by Vertex AI Search, such as the session data generated during search with follow-ups .

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- Troubleshoot data ingestion If you are having problems with data ingestion, review these tips: If you're using customer-managed encryption keys and data import fails (with error message The caller does not have permission ), then make sure that the CryptoKey Encrypter/Decrypter IAM role ( roles/cloudkms.cryptoKeyEncrypterDecrypter ) on the key has been granted to the Cloud Storage service agent.
- Customer-managed encryption keys (CMEK) Your keys only encrypt data within Google Cloud.
- Customer-managed encryption keys (CMEK) Your keys only encrypt data within Google Cloud.
- Customer-managed encryption keys (CMEK) Your keys only encrypt data within Google Cloud.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema.
- Home Documentation AI and ML Vertex AI Search Reference Send feedback MCP Tools Reference: discoveryengine.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- NumberConstraint JSON representation { "fieldName" : string , "comparison" : enum ( Comparison ) , "value" : number , "querySegment" : string } Fields fieldName string Name of the numerical field as defined in the schema. comparison enum ( Comparison ) The comparison operation performed between the field value and the value specified in the constraint. value number The value specified in the numerical constraint. querySegment string Identifies the keywords within the search query that match a filter.
- Curl Request curl --location 'https://discoveryengine.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "search", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for SearchService.Search method.

### "Vertex AI APIs for building search and RAG experiences \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Search works as an out-of-the-box semantic & keyword search engine for RAG with the ability to process a variety of document types and with connectors to a variety of source systems including BigQuery and many third party systems.
- Retrieval Choose the best retrieval method for your needs: Vertex AI Search: Vertex AI Search is a Google Search-quality information retrieval engine that can be a component of any generative AI application that uses your enterprise data.
- Vertex AI Vector Search is a retrieval engine that can search from billions of semantically similar or semantically related items at scale, with high queries per second (QPS), high recall, low latency, and cost efficiency.
- Home Documentation AI and ML Vertex AI Search Send feedback Vertex AI APIs for building search and RAG experiences Stay organized with collections Save and categorize content based on your preferences.

