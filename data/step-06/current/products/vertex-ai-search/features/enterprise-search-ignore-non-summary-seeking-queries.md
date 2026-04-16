---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.145Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Enterprise Search ignore non-summary seeking queries"
feature_slug: "enterprise-search-ignore-non-summary-seeking-queries"
latest_feature_date: "2023-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
keywords:
  - "enterprise"
  - "search"
  - "ignore"
  - "non"
  - "summary"
  - "seeking"
  - "queries"
  - "adds"
---

# Enterprise Search ignore non-summary seeking queries

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Enterprise Search adds a preview capability to omit summaries in responses when requests are non-summary seeking.

## Extended Definition

Enterprise Search adds a preview capability to omit summaries in responses when requests are non-summary seeking.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- REST To skip answering queries that are adversarial or non-answer-seeking, do the following: Run the following curl command: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:answer" \ -d '{ "query": { "text": " QUERY "}, "answerGenerationSpec": { "ignoreAdversarialQuery": true, "ignoreNonAnswerSeekingQuery": true } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "Hello"}, "answerGenerationSpec": { "ignoreAdversarialQuery": true , "ignoreNonAnswerSeekingQuery": true } }' { "answer": { "state": "SUCCEEDED", "answerText": " A summary could not be generated for your search query.
- For more information about adversarial and non-answer seeking queries, see Ignore adversarial queries and Ignore non-summary seeking queries .
- For more information about adversarial and non-answer seeking queries, see Ignore adversarial queries and Ignore non-summary seeking queries .

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- If this field is set to true , we skip generating summaries for adversarial queries and return fallback messages instead. ignoreNonSummarySeekingQuery boolean Specifies whether to filter out queries that are not summary-seeking.
- If this field is set to true , we skip generating summaries for non-summary seeking queries and return fallback messages instead. ignoreLowRelevantContent boolean Specifies whether to filter out queries that have low relevance.
- Google employs search-query classification to detect summary-seeking queries.
- SummarySpec JSON representation { "summaryResultCount" : integer , "includeCitations" : boolean , "ignoreAdversarialQuery" : boolean , "ignoreNonSummarySeekingQuery" : boolean , "ignoreLowRelevantContent" : boolean , "ignoreJailBreakingQuery" : boolean , "multimodalSpec" : { object ( MultiModalSpec ) } , "modelPromptSpec" : { object ( ModelPromptSpec ) } , "languageCode" : string , "modelSpec" : { object ( ModelSpec ) } , "useSemanticChunks" : boolean } Fields summaryResultCount integer The number of top results to generate the summary from.

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import websites from google.api core.client options import ClientOptions from google.cloud import discoveryengine v1 as discoveryengine # TODO(developer): Uncomment these variables before running the sample. # project id = "YOUR PROJECT ID" # location = "YOUR LOCATION" # Values: "global" # data store id = "YOUR DATA STORE ID" # NOTE: Do not include http or https protocol in the URI pattern # uri pattern = "cloud.google.com/generative-ai-app-builder/docs/ " # For more information, refer to: # https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions(api endpoint=f"{location}-discoveryengine.googleapis.com") if location != "global" else None ) # Create a client client = discoveryengine.SiteSearchEngineServiceClient( client options=client options ) # The full resource name of the data store # e.g. projects/{project}/locations/{location}/dataStores/{data store id} site search engine = client.site search engine path( project=project id, location=location, data store=data store id ) # Target Site to index target site = discoveryengine.TargetSite( provided uri pattern=uri pattern, # Options: INCLUDE, EXCLUDE type =discoveryengine.TargetSite.Type.INCLUDE, exact match=False, ) # Make the request operation = client.create target site( parent=site search engine, target site=target site, ) print(f"Waiting for operation to complete: {operation.operation.name}") response = operation.result() # After the operation is complete, # get information from operation metadata metadata = discoveryengine.CreateTargetSiteMetadata(operation.metadata) # Handle the response print(response) print(metadata) Next steps To attach your website data store to an app, create an app with Enterprise features enabled and select your data store following the steps in Create a search app .
- If the data store is not configured as site search (GENERIC vertical and PUBLIC WEBSITE content config), this flag will be ignored. / // const createAdvancedSiteSearch = true / A boolean flag indicating whether to skip the default schema creation for the data store.
- If the data store is not configured as site search (GENERIC vertical and PUBLIC WEBSITE content config), this flag will be ignored. / // const createAdvancedSiteSearch = true / A boolean flag indicating whether to skip the default schema creation for the data store.
- Semantic search queries are supported.

