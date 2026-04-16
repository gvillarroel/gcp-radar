---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.172Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Matching Engine"
feature_slug: "vertex-ai-matching-engine"
latest_feature_date: "2021-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens"
keywords:
  - "vertex"
  - "ai"
  - "matching"
  - "engine"
  - "now"
  - "generally"
  - "available"
---

# Vertex AI Matching Engine

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Matching Engine is now generally available as a matching service in Vertex AI.

## Extended Definition

Vertex AI Matching Engine is now generally available as a matching service in Vertex AI.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens)

## Supporting Pages

### Vector Search quickstart \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- The APIs are available under the aiplatform package of the SDK. init the aiplatform package from google.cloud import aiplatform aiplatform . init ( project = PROJECT ID , location = LOCATION ) Create a MatchingEngineIndex with its create tree ah index function (Matching Engine is the previous name of Vector Search). create Index my index = aiplatform .
- Enable APIs Run the following command to enable APIs for Compute Engine, Vertex AI, and Cloud Storage with this Google Cloud project. ! gcloud services enable compute.googleapis.com aiplatform.googleapis.com storage.googleapis.com --project { PROJECT ID } Prepare the sample data In this tutorial, we use the TheLook dataset that has a products table with about 5,000 rows of synthetic product data for a fictitious ecommerce clothing site.
- The pricing of the Google Cloud services used in this tutorial are available in the following pages: Vertex AI Vector Search Cloud Storage Vertex AI Workbench You can also use the pricing calculator to generate a cost estimate based on your projected usage.
- MatchingEngineIndex . create tree ah index ( display name = f "vs-quickstart-index- { UID } " , contents delta uri = BUCKET URI , dimensions = 768 , approximate neighbors count = 100 , ) The MatchingEngineIndex.create tree ah index() method builds an index.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- This also cannot represent large Int64 values, since JSON format generally does not support them in its number type. stringValue string Represents a JSON string. boolValue boolean Represents a JSON boolean ( true or false literal in JSON). structValue object ( Struct format) Represents a JSON object. listValue array ( ListValue format) Represents a JSON array.
- This also cannot represent large Int64 values, since JSON format generally does not support them in its number type. stringValue string Represents a JSON string. boolValue boolean Represents a JSON boolean ( true or false literal in JSON). structValue object ( Struct format) Represents a JSON object. listValue array ( ListValue format) Represents a JSON array.
- See https://cloud.google.com/compute/docs/access/service-accounts#default service account Users starting the pipeline must have the iam.serviceAccounts.actAs permission on this service account. network string The full name of the Compute Engine network to which the Pipeline Job's workload should be peered.
- See https://cloud.google.com/compute/docs/access/service-accounts#default service account Users starting the pipeline must have the iam.serviceAccounts.actAs permission on this service account. network string The full name of the Compute Engine network to which the Pipeline Job's workload should be peered.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens)
- Source ID: `site-api-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- VertexAISearch JSON representation { "datastore" : string , "engine" : string , "maxResults" : integer , "filter" : string , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] } Fields datastore string Optional.
- Fully-qualified Vertex AI Search engine resource ID.
- For more information on filtering, see Filtering VertexRagStore JSON representation { "ragCorpora" : [ string ] , "ragResources" : [ { object ( RagResource ) } ] , "ragRetrievalConfig" : { object ( RagRetrievalConfig ) } , "storeContext" : boolean , // Union field similarity top k can be only one of the following: "similarityTopK" : integer // End of list of possible types for union field similarity top k . // Union field vector distance threshold can be only one of the following: "vectorDistanceThreshold" : number // End of list of possible types for union field vector distance threshold . } Fields ragCorpora[] (deprecated) string This item is deprecated!
- PropertiesEntry JSON representation { "key" : string , "value" : { object ( Schema ) } } Fields key string value object ( Schema ) DefsEntry JSON representation { "key" : string , "value" : { object ( Schema ) } } Fields key string value object ( Schema ) Retrieval JSON representation { "disableAttribution" : boolean , // Union field source can be only one of the following: "vertexAiSearch" : { object ( VertexAISearch ) } , "vertexRagStore" : { object ( VertexRagStore ) } // End of list of possible types for union field source . } Fields disableAttribution (deprecated) boolean This item is deprecated!

