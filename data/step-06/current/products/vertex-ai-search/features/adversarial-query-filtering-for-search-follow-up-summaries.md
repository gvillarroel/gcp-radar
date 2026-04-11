---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.951Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Adversarial query filtering for search follow-up summaries"
feature_slug: "adversarial-query-filtering-for-search-follow-up-summaries"
latest_feature_date: "2023-09-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
keywords:
  - "adversarial"
  - "query"
  - "filtering"
  - "for"
  - "search"
  - "follow"
  - "up"
  - "summaries"
---

# Adversarial query filtering for search follow-up summaries

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Vertex AI Search can ignore adversarial follow-up queries so summary generation is avoided for unsafe or policy-violating inputs.

## Extended Definition

Vertex AI Search can ignore adversarial follow-up queries so summary generation is avoided for unsafe or policy-violating inputs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)

## Supporting Pages

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- SessionSpec JSON representation { "queryId" : string , // Union field search result persistence count can be only one of the // following: "searchResultPersistenceCount" : integer // End of list of possible types for union field // search result persistence count . } Fields queryId string If set, the search result gets stored to the "turn" specified by this query ID.
- For example, [1] means that the sentence is attributed to the first search result. [2, 3] means that the sentence is attributed to both the second and third search results. ignoreAdversarialQuery boolean Specifies whether to filter out adversarial queries.
- If this field is set to true , we skip generating summaries for adversarial queries and return fallback messages instead. ignoreNonSummarySeekingQuery boolean Specifies whether to filter out queries that are not summary-seeking.
- This is only supported for website search. userLabels map (key: string, value: string) The user labels applied to a resource must meet the following requirements: Each resource can have multiple labels, up to a maximum of 64.

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Search phase commands: Search and answer with search result options This section shows how to specify options for the search phase portion of the answer method call, options such as setting the maximum number of documents returned, boosting, and filtering, and how to get an answer when you supply your own search results.
- REST To return a support score for each claim (sentence in the answer) and an aggregated support score for the answer, do the following: Run the following curl command: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:answer" \ -d '{ "query": { "text": " QUERY "}, "groundingSpec": { "includeGroundingSupports": true, } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Search and answer with query classification The following command shows how to call the answer method to inquire whether a query is adversarial, non-answer seeking, or neither.
- REST To return an answer only if it meets a support-score threshold, do the following: Run the following curl command: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:answer" \ -d '{ "query": { "text": " QUERY "}, "groundingSpec": { "filteringLevel": " FILTER LEVEL " } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.

### Get search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR LOCATION'; // Options: 'global', 'us', 'eu' // const collectionId = 'default collection'; // Options: 'default collection' // const dataStoreId = 'YOUR DATA STORE ID' // Create in Cloud Console // const servingConfigId = 'default config'; // Options: 'default config' // const searchQuery = 'Google'; const { SearchServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1beta ; // For more information, refer to: // https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store const apiEndpoint = location === 'global' ? 'discoveryengine.googleapis.com' : ${ location } -discoveryengine.googleapis.com ; // Instantiates a client const client = new SearchServiceClient ({ apiEndpoint : apiEndpoint }); async function search () { // The full resource name of the search engine serving configuration. // Example: projects/{projectId}/locations/{location}/collections/{collectionId}/dataStores/{dataStoreId}/servingConfigs/{servingConfigId} // You must create a search engine in the Cloud Console first. const name = client . projectLocationCollectionDataStoreServingConfigPath ( projectId , location , collectionId , dataStoreId , servingConfigId ); const request = { pageSize : 10 , query : searchQuery , servingConfig : name , }; const IResponseParams = { ISearchResult : 0 , ISearchRequest : 1 , ISearchResponse : 2 , }; // Perform search request const response = await client . search ( request , { // Warning: Should always disable autoPaginate to avoid iterate through all pages. // // By default NodeJS SDK returns an iterable where you can iterate through all // search results instead of only the limited number of results requested on // pageSize, by sending multiple sequential search requests page-by-page while // iterating, until it exhausts all the search results.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR LOCATION'; // Options: 'global', 'us', 'eu' // const collectionId = 'default collection'; // Options: 'default collection' // const dataStoreId = 'YOUR DATA STORE ID' // Create in Cloud Console // const servingConfigId = 'default config'; // Options: 'default config' // const searchQuery = 'Google'; const { SearchServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1beta ; // For more information, refer to: // https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store const apiEndpoint = location === 'global' ? 'discoveryengine.googleapis.com' : ${ location } -discoveryengine.googleapis.com ; // Instantiates a client const client = new SearchServiceClient ({ apiEndpoint : apiEndpoint }); async function search () { // The full resource name of the search engine serving configuration. // Example: projects/{projectId}/locations/{location}/collections/{collectionId}/dataStores/{dataStoreId}/servingConfigs/{servingConfigId} // You must create a search engine in the Cloud Console first. const name = client . projectLocationCollectionDataStoreServingConfigPath ( projectId , location , collectionId , dataStoreId , servingConfigId ); const request = { pageSize : 10 , query : searchQuery , servingConfig : name , }; const IResponseParams = { ISearchResult : 0 , ISearchRequest : 1 , ISearchResponse : 2 , }; // Perform search request const response = await client . search ( request , { // Warning: Should always disable autoPaginate to avoid iterate through all pages. // // By default NodeJS SDK returns an iterable where you can iterate through all // search results instead of only the limited number of results requested on // pageSize, by sending multiple sequential search requests page-by-page while // iterating, until it exhausts all the search results.
- After completing all of your requests, call // the searchServiceClient.close() method on the client to safely // clean up any remaining background resources. try ( SearchServiceClient searchServiceClient = SearchServiceClient . create ( settings )) { SearchRequest request = SearchRequest . newBuilder () . setServingConfig ( ServingConfigName . formatProjectLocationCollectionDataStoreServingConfigName ( projectId , location , collectionId , dataStoreId , servingConfigId )) . setQuery ( searchQuery ) . setPageSize ( 10 ) . build (); SearchResponse response = searchServiceClient . search ( request ). getPage (). getResponse (); for ( SearchResponse .
- After completing all of your requests, call // the searchServiceClient.close() method on the client to safely // clean up any remaining background resources. try ( SearchServiceClient searchServiceClient = SearchServiceClient . create ( settings )) { SearchRequest request = SearchRequest . newBuilder () . setServingConfig ( ServingConfigName . formatProjectLocationCollectionDataStoreServingConfigName ( projectId , location , collectionId , dataStoreId , servingConfigId )) . setQuery ( searchQuery ) . setPageSize ( 10 ) . build (); SearchResponse response = searchServiceClient . search ( request ). getPage (). getResponse (); for ( SearchResponse .

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Answer JSON representation { "name" : string , "state" : enum ( State ) , "answerText" : string , "citations" : [ { object ( Citation ) } ] , "groundingSupports" : [ { object ( GroundingSupport ) } ] , "references" : [ { object ( Reference ) } ] , "blobAttachments" : [ { object ( BlobAttachment ) } ] , "relatedQuestions" : [ string ] , "steps" : [ { object ( Step ) } ] , "queryUnderstandingInfo" : { object ( QueryUnderstandingInfo ) } , "answerSkippedReasons" : [ enum ( AnswerSkippedReason ) ] , "createTime" : string , "completeTime" : string , "safetyRatings" : [ { object ( SafetyRating ) } ] , // Union field grounding score can be only one of the following: "groundingScore" : number // End of list of possible types for union field grounding score . } Fields name string Immutable.
- AnswerGenerationSpec JSON representation { "modelSpec" : { object ( ModelSpec ) } , "promptSpec" : { object ( PromptSpec ) } , "includeCitations" : boolean , "answerLanguageCode" : string , "ignoreAdversarialQuery" : boolean , "ignoreNonAnswerSeekingQuery" : boolean , "ignoreJailBreakingQuery" : boolean , "multimodalSpec" : { object ( MultimodalSpec ) } , // Union field ignore low relevant content can be only one of the following: "ignoreLowRelevantContent" : boolean // End of list of possible types for union field ignore low relevant content . } Fields modelSpec object ( ModelSpec ) Answer generation model specification. promptSpec object ( PromptSpec ) Answer generation prompt specification. includeCitations boolean Specifies whether to include citation metadata in the answer.
- In this case the filter would look like this: filter --> name:'ANY("king kong")' For more information about filtering including syntax and filter operators, see Filter boostSpec object ( BoostSpec ) Boost specification to boost certain documents in search results which may affect the answer query response.
- Server behavior defaults to DISABLED . geoSearchQueryDetectionFieldNames[] string Field names used for location-based filtering, where geolocation filters are detected in natural language search queries.

