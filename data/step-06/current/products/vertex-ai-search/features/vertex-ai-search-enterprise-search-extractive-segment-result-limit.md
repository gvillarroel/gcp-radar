---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.131Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search Enterprise Search extractive segment result limit"
feature_slug: "vertex-ai-search-enterprise-search-extractive-segment-result-limit"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "enterprise"
  - "extractive"
  - "segment"
  - "result"
  - "limit"
---

# Vertex AI Search Enterprise Search extractive segment result limit

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Enterprise Search can now return up to 10 extractive segments per search result.

## Extended Definition

Enterprise Search can now return up to 10 extractive segments per search result.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)

## Supporting Pages

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- ExtractiveContentSpec JSON representation { "maxExtractiveAnswerCount" : integer , "maxExtractiveSegmentCount" : integer , "returnExtractiveSegmentScore" : boolean , "numPreviousSegments" : integer , "numNextSegments" : integer } Fields maxExtractiveAnswerCount integer The maximum number of extractive answers returned in each search result.
- Otherwise, return the max extractive segment count . returnExtractiveSegmentScore boolean Specifies whether to return the confidence score from the extractive segments in each search result.
- At most five answers are returned for each SearchResult . maxExtractiveSegmentCount integer The max number of extractive segments returned in each search result.
- ContentSearchSpec JSON representation { "snippetSpec" : { object ( SnippetSpec ) } , "summarySpec" : { object ( SummarySpec ) } , "extractiveContentSpec" : { object ( ExtractiveContentSpec ) } , "searchResultMode" : enum ( SearchResultMode ) , "chunkSpec" : { object ( ChunkSpec ) } } Fields snippetSpec object ( SnippetSpec ) If snippetSpec is not specified, snippets are not included in the search response. summarySpec object ( SummarySpec ) If summarySpec is not specified, summaries are not included in the search response. extractiveContentSpec object ( ExtractiveContentSpec ) If there is no extractive content spec provided, there will be no extractive answer in the search response. searchResultMode enum ( SearchResultMode ) Specifies the search result mode.

### Get search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- Source ID: `site-iam-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR LOCATION'; // Options: 'global', 'us', 'eu' // const collectionId = 'default collection'; // Options: 'default collection' // const dataStoreId = 'YOUR DATA STORE ID' // Create in Cloud Console // const servingConfigId = 'default config'; // Options: 'default config' // const searchQuery = 'Google'; const { SearchServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1beta ; // For more information, refer to: // https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store const apiEndpoint = location === 'global' ? 'discoveryengine.googleapis.com' : ${ location } -discoveryengine.googleapis.com ; // Instantiates a client const client = new SearchServiceClient ({ apiEndpoint : apiEndpoint }); async function search () { // The full resource name of the search engine serving configuration. // Example: projects/{projectId}/locations/{location}/collections/{collectionId}/dataStores/{dataStoreId}/servingConfigs/{servingConfigId} // You must create a search engine in the Cloud Console first. const name = client . projectLocationCollectionDataStoreServingConfigPath ( projectId , location , collectionId , dataStoreId , servingConfigId ); const request = { pageSize : 10 , query : searchQuery , servingConfig : name , }; const IResponseParams = { ISearchResult : 0 , ISearchRequest : 1 , ISearchResponse : 2 , }; // Perform search request const response = await client . search ( request , { // Warning: Should always disable autoPaginate to avoid iterate through all pages. // // By default NodeJS SDK returns an iterable where you can iterate through all // search results instead of only the limited number of results requested on // pageSize, by sending multiple sequential search requests page-by-page while // iterating, until it exhausts all the search results.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR LOCATION'; // Options: 'global', 'us', 'eu' // const collectionId = 'default collection'; // Options: 'default collection' // const dataStoreId = 'YOUR DATA STORE ID' // Create in Cloud Console // const servingConfigId = 'default config'; // Options: 'default config' // const searchQuery = 'Google'; const { SearchServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1beta ; // For more information, refer to: // https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store const apiEndpoint = location === 'global' ? 'discoveryengine.googleapis.com' : ${ location } -discoveryengine.googleapis.com ; // Instantiates a client const client = new SearchServiceClient ({ apiEndpoint : apiEndpoint }); async function search () { // The full resource name of the search engine serving configuration. // Example: projects/{projectId}/locations/{location}/collections/{collectionId}/dataStores/{dataStoreId}/servingConfigs/{servingConfigId} // You must create a search engine in the Cloud Console first. const name = client . projectLocationCollectionDataStoreServingConfigPath ( projectId , location , collectionId , dataStoreId , servingConfigId ); const request = { pageSize : 10 , query : searchQuery , servingConfig : name , }; const IResponseParams = { ISearchResult : 0 , ISearchRequest : 1 , ISearchResponse : 2 , }; // Perform search request const response = await client . search ( request , { // Warning: Should always disable autoPaginate to avoid iterate through all pages. // // By default NodeJS SDK returns an iterable where you can iterate through all // search results instead of only the limited number of results requested on // pageSize, by sending multiple sequential search requests page-by-page while // iterating, until it exhausts all the search results.
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:search" \ -d '{ "servingConfig": "projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search", "query": "When was Verily founded and what is its mission?", "relevanceScoreSpec": { "returnRelevanceScore": true } }' { "results": [ { "id": "f1b0d98bd2a078a6dfb4f809c3028565", "document": { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f1b0d98bd2a078a6dfb4f809c3028565", "id": "f1b0d98bd2a078a6dfb4f809c3028565", "derivedStructData": { "link": "gs://cloud-samples-data/gen-app-builder/search/alphabet-investor-pdfs/2019 alphabet annual report.pdf", "extractive answers": [ { "pageNumber": "70", "content": "VERILY Verily is a life science and healthcare company with a mission to make the world's health data useful so that people enjoy healthier lives.
- Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:search" \ -d '{ "servingConfig": "projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search", "query": " QUERY ", "pageSize": " PAGE SIZE ", "offset": " OFFSET ", "orderBy": " ORDER BY ", "params": {"user country code": " USER COUNTRY CODE ", "searchType": " SEARCH TYPE "}, "filter": " FILTER ", "boostSpec": " BOOST SPEC ", "contentSearchSpec": { "searchResultMode": " RESULT MODE " }, "userPseudoId": " USER PSEUDO ID ", "dataStoreSpecs": [{" DATA STORE SPEC "}] }' Replace the following: PROJECT ID : the ID of your Google Cloud project.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- SearchResult JSON representation { "document" : string , "uri" : string , "title" : string , "snippetInfo" : [ { object ( SnippetInfo ) } ] , "chunkInfo" : [ { object ( ChunkInfo ) } ] , "structData" : { object } } Fields document string Document resource name. uri string URI for the document. title string Title. snippetInfo[] object ( SnippetInfo ) If citation type is DOCUMENT LEVEL CITATION, populate document level snippets. chunkInfo[] object ( ChunkInfo ) If citation type is CHUNK LEVEL CITATION and chunk mode is on, populate chunk info. structData object ( Struct format) Data representation.
- Format: projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/sessions/{session}/assistAnswers/{assist answer} This field must be a UTF-8 encoded string with a length limit of 1024 characters. state enum ( State ) State of the answer generation. replies[] object ( Reply ) Replies of the assistant. assistSkippedReasons[] enum ( AssistSkippedReason ) Reasons for not answering the assist call. customerPolicyEnforcementResult object ( CustomerPolicyEnforcementResult ) Optional.
- SearchParams JSON representation { "maxReturnResults" : integer , "filter" : string , "boostSpec" : { object ( BoostSpec ) } , "orderBy" : string , "searchResultMode" : enum ( SearchResultMode ) , "customFineTuningSpec" : { object ( CustomFineTuningSpec ) } , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] , "naturalLanguageQueryUnderstandingSpec" : { object ( NaturalLanguageQueryUnderstandingSpec ) } } Fields maxReturnResults integer Number of search results to return.
- UnstructuredDocumentInfo JSON representation { "document" : string , "uri" : string , "title" : string , "documentContexts" : [ { object ( DocumentContext ) } ] , "extractiveSegments" : [ { object ( ExtractiveSegment ) } ] , "extractiveAnswers" : [ { object ( ExtractiveAnswer ) } ] } Fields document string Document resource name. uri string URI for the document. title string Title. documentContexts[] object ( DocumentContext ) List of document contexts.

