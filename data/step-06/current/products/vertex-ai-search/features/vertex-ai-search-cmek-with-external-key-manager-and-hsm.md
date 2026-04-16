---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.953Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search CMEK with external key manager and HSM"
feature_slug: "vertex-ai-search-cmek-with-external-key-manager-and-hsm"
latest_feature_date: "2024-10-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "cmek"
  - "external"
  - "key"
  - "manager"
  - "hsm"
---

# Vertex AI Search CMEK with external key manager and HSM

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Vertex AI Search supports using external key manager (EKM) and hardware security module (HSM)-backed keys with CMEK.

## Extended Definition

Vertex AI Search supports using external key manager (EKM) and hardware security module (HSM)-backed keys with CMEK.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication](https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance)

## Supporting Pages

### "Customer-managed encryption keys \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek)
- Source ID: `site-docs-reference`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- An example curl call and response looks like this: $ curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://us-discoveryengine.googleapis.com/v1/projects/my-ai-app-project-123/locations/us/cmekConfigs" { "cmek configs": [ { "name": "projects/my-ai-app-project-123/locations/us/cmekConfigs/default cmek config", "kmsKey": "projects/key-project-456/locations/us/keyRings/my-key-ring/cryptoKeys/my-key" "state": "ACTIVE" "isDefault": true } ] } Unregister your Cloud KMS key To unregister your key from Vertex AI Search, follow these steps: Call the DeleteCmekConfig method with the CmekConfig resource name that you want to unregister. curl -X DELETE \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ "https:// LOCATION -discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cmekConfigs/ CMEK CONFIG ID " Replace the following: LOCATION : the multi-region of your data store: us or eu .
- An example response looks like this: { "name": "projects/969795412903/locations/us/collections/default collection/dataStores/my-data-store-1", "displayName": "my-data-store-1", "industryVertical": "GENERIC", "createTime": "2023-09-05T21:20:21.520552Z", "solutionTypes": [ "SOLUTION TYPE SEARCH" ], "defaultSchemaId": "default schema", "cmekConfig": { "name": "projects/969795412903/locations/us/collections/default collection/dataStores/my-data-store-1/cmekConfigs/default cmek config", "kmsKey": "projects/my-ai-app-project-123/locations/us/keyRings/my-key-ring/cryptoKeys/my-key" } } Other data protected by the Cloud KMS key In addition to data in the data stores, your keys can protect other types of app-owned core information held by Vertex AI Search, such as the session data generated during search with follow-ups .
- Procedure REST To register your own key for Vertex AI Search, follow these steps: Call the UpdateCmekConfig method with the key that you want to register. curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d '{"kmsKey":"projects/ KMS PROJECT ID /locations/ KMS LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME "}' \ "https:// LOCATION -discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cmekConfigs/ CMEK CONFIG ID ?set default= SET DEFAULT " Replace the following: KMS PROJECT ID : the ID of your project that contains the key.
- View Cloud KMS keys To view a registered key for Vertex AI Search, do one of the following: If you have the CmekConfig resource name, call the GetCmekConfig method: curl -X GET \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ "https:// LOCATION -discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cmekConfigs/ CMEK CONFIG ID " Replace the following: LOCATION : the multi-region of your data store: us or eu .

### Authenticate to Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication](https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication)
- Source ID: `site-docs-reference-2`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can access the API in the following ways: Client libraries REST Client libraries The Vertex AI Search client libraries provide high-level language support for authenticating to Vertex AI Search programmatically.
- Home Documentation AI and ML Vertex AI Search Reference Send feedback Authenticate to Vertex AI Search Stay organized with collections Save and categorize content based on your preferences.
- How you authenticate to Vertex AI Search depends on the interface you use to access the API and the environment where your code is running.
- REST You can authenticate to the Vertex AI Search API by using your gcloud CLI credentials or by using Application Default Credentials .

### "Data governance and generative AI \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customer-specific models When applicable, customer-specific models are built automatically and used only in the context of the project that is specific to the customer for the Vertex AI Search service.
- Home Documentation AI and ML Vertex AI Search Send feedback Data governance and generative AI Stay organized with collections Save and categorize content based on your preferences.
- Usage of generative AI Vertex AI Search uses generative AI services for building search, personalized, and conversational experiences.
- As part of the Google Cloud AI/ML Privacy Commitment, customer data used in Vertex AI Search is not used to train foundation models.

