---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.973Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Enterprise Search support in VPC Service Controls"
feature_slug: "enterprise-search-support-in-vpc-service-controls"
latest_feature_date: "2023-08-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
keywords:
  - "enterprise"
  - "search"
  - "in"
  - "vpc"
  - "controls"
  - "is"
  - "supported"
  - "within"
---

# Enterprise Search support in VPC Service Controls

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Enterprise Search is supported within Google Cloud VPC Service Controls as a preview capability.

## Extended Definition

Enterprise Search is supported within Google Cloud VPC Service Controls as a preview capability.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)

## Supporting Pages

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- SearchResponse JSON representation { "results" : [ { object ( SearchResult ) } ] , "facets" : [ { object ( Facet ) } ] , "guidedSearchResult" : { object ( GuidedSearchResult ) } , "totalSize" : integer , "attributionToken" : string , "redirectUri" : string , "nextPageToken" : string , "correctedQuery" : string , "suggestedQuery" : string , "summary" : { object ( Summary ) } , "appliedControls" : [ string ] , "geoSearchDebugInfo" : [ { object ( GeoSearchDebugInfo ) } ] , "queryExpansionInfo" : { object ( QueryExpansionInfo ) } , "naturalLanguageQueryUnderstandingInfo" : { object ( NaturalLanguageQueryUnderstandingInfo ) } , "sessionInfo" : { object ( SessionInfo ) } , "oneBoxResults" : [ { object ( OneBoxResult ) } ] , "searchLinkPromotions" : [ { object ( SearchLinkPromotion ) } ] , "semanticState" : enum ( SemanticState ) } Fields results[] object ( SearchResult ) A list of matched documents.
- NumberConstraint JSON representation { "fieldName" : string , "comparison" : enum ( Comparison ) , "value" : number , "querySegment" : string } Fields fieldName string Name of the numerical field as defined in the schema. comparison enum ( Comparison ) The comparison operation performed between the field value and the value specified in the constraint. value number The value specified in the numerical constraint. querySegment string Identifies the keywords within the search query that match a filter.
- This field is only returned if SearchRequest.ContentSearchSpec.summary spec is set. appliedControls[] string Controls applied as part of the Control service. geoSearchDebugInfo[] object ( GeoSearchDebugInfo ) queryExpansionInfo object ( QueryExpansionInfo ) Query expansion information for the returned results. naturalLanguageQueryUnderstandingInfo object ( NaturalLanguageQueryUnderstandingInfo ) Output only.
- This is only supported for website search. userLabels map (key: string, value: string) The user labels applied to a resource must meet the following requirements: Each resource can have multiple labels, up to a maximum of 64.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- SearchResult JSON representation { "document" : string , "uri" : string , "title" : string , "snippetInfo" : [ { object ( SnippetInfo ) } ] , "chunkInfo" : [ { object ( ChunkInfo ) } ] , "structData" : { object } } Fields document string Document resource name. uri string URI for the document. title string Title. snippetInfo[] object ( SnippetInfo ) If citation type is DOCUMENT LEVEL CITATION, populate document level snippets. chunkInfo[] object ( ChunkInfo ) If citation type is CHUNK LEVEL CITATION and chunk mode is on, populate chunk info. structData object ( Struct format) Data representation.
- Curl Request curl --location 'https://discoveryengine.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "conversational search", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for ConversationalSearchService.AnswerQuery method.
- Grounding specification. answerGenerationSpec object ( AnswerGenerationSpec ) Answer generation specification. searchSpec object ( SearchSpec ) Search specification. queryUnderstandingSpec object ( QueryUnderstandingSpec ) Query understanding specification. asynchronousMode (deprecated) boolean This item is deprecated!
- In this case the filter would look like this: filter --> name:'ANY("king kong")' For more information about filtering including syntax and filter operators, see Filter boostSpec object ( BoostSpec ) Boost specification to boost certain documents in search results which may affect the answer query response.

### "Configure serving controls for search \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)
- Source ID: `site-api-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Serving control types The following types of serving controls are available: Control Description Available for Boost control Changes the returned order of results Search apps with data stores that support a schema, such as data stores that contain structured data, websites with structured data (advanced website indexing), unstructured data with metadata, or media data Filter control Removes entries from returned results Search apps with data stores that support a schema, such as data stores that contain structured data, websites (advanced website indexing), unstructured data with metadata, or media data Synonyms control Associates queries with each other Search apps with website (advanced website indexing), structured, unstructured, or media data stores Redirect control Redirects to a specified URI All search apps Promote control Promotes a specified link for a query All search apps About conditions When creating a control, you can optionally define a condition that determines when the control is applied.
- REST Run the following curl commands to create your controls. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /controls?controlId= CONTROL ID " \ -d '{ "displayName": " DISPLAY NAME ", "solutionType": "SOLUTION TYPE SEARCH", "useCases": [" USE CASE "], "conditions": { "queryTerms": [ { "value": " VALUE ", "fullMatch": true } ], "activeTimeRange": [ { "startTime": " START TIMESTAMP ", "endTime": " END TIMESTAMP " } ], "queryRegex": " VALUE REGEX " }, "promoteAction": { "dataStore": " DATA STORE RESOURCE PATH ", "searchLinkPromotion": { "document": " DOCUMENT RESOURCE PATH ", "title": " TITLE ", "uri": " URI ", "description": " DESCRIPTION ", "enabled": ENABLED TRUE FALSE , } } }' Replace the following: PROJECT ID : the number or ID of your Google Cloud project.
- Run the following curl commands to create your controls. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /controls?controlId= CONTROL ID " \ -d '{ "displayName": " DISPLAY NAME ", "solutionType": "SOLUTION TYPE SEARCH", "useCases": [ " USE CASE " ], "conditions": { "queryTerms": [ { "value": " VALUE ", "fullMatch": FULL MATCH } ], "activeTimeRange": [ { "startTime": " START TIMESTAMP ", "endTime": " END TIMESTAMP " } ] }, "boostAction": { "boost": BOOST VALUE , "filter": " FILTER ", "dataStore": " DATA STORE RESOURCE PATH " } }' Replace the following: PROJECT ID : the number or ID of your Google Cloud project.
- The response contains the searchLinkPromotions field that contains the promoted link. { "results": [...], "totalSize": 3, "attributionToken": " gHw QoMCMSbhboGELuI1qwCEiQ2NzQwYmYzYi0wMDAwLTJmYTctYTk1OC0yNDA1ODg4MzZmYjgiB0dFTkVSSUMqvAGrxIotzua1L5neqC n7YgtxPzLMIOymiK0kq4wxPi8MPn2sy3LmrQw6d3EMNSynRWc1rctnN3YMOuCsS3ogrEto4CXIsLwnhX89rMtkKS0MJbeqC-jibMtkPeyMMTGsTCZ3dgw5O2ILa7Eii2NpLQw5t3EMN6PmiKOvp0VwfzLMICymiKq-LMt0ea1L634sy3Fy MXtreMLbeSrjDHxrEwzpq0MMH4vDCgibMtn9a3LZSSxTCOkckw24-aIjAB", "guidedSearchResult": {}, "summary": {}, "searchLinkPromotions": [ { "title": "What is AI?", "uri": "https://cloud.google.com/learn/what-is-artificial-intelligence", "description": "Explain what is AI" } ] } Modify serving controls To modify a control's configuration, do the following: In the Google Cloud console, go to the AI Applications page.

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import websites from google.api core.client options import ClientOptions from google.cloud import discoveryengine v1 as discoveryengine # TODO(developer): Uncomment these variables before running the sample. # project id = "YOUR PROJECT ID" # location = "YOUR LOCATION" # Values: "global" # data store id = "YOUR DATA STORE ID" # NOTE: Do not include http or https protocol in the URI pattern # uri pattern = "cloud.google.com/generative-ai-app-builder/docs/ " # For more information, refer to: # https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions(api endpoint=f"{location}-discoveryengine.googleapis.com") if location != "global" else None ) # Create a client client = discoveryengine.SiteSearchEngineServiceClient( client options=client options ) # The full resource name of the data store # e.g. projects/{project}/locations/{location}/dataStores/{data store id} site search engine = client.site search engine path( project=project id, location=location, data store=data store id ) # Target Site to index target site = discoveryengine.TargetSite( provided uri pattern=uri pattern, # Options: INCLUDE, EXCLUDE type =discoveryengine.TargetSite.Type.INCLUDE, exact match=False, ) # Make the request operation = client.create target site( parent=site search engine, target site=target site, ) print(f"Waiting for operation to complete: {operation.operation.name}") response = operation.result() # After the operation is complete, # get information from operation metadata metadata = discoveryengine.CreateTargetSiteMetadata(operation.metadata) # Handle the response print(response) print(metadata) Next steps To attach your website data store to an app, create an app with Enterprise features enabled and select your data store following the steps in Create a search app .
- Limitations If you use security controls, be aware of their limitations related to data in Gmail, as discussed in the following table: Security control Note the following Data Residency (DRZ) Vertex AI Search only guarantees data residency in Google Cloud.
- If you use security controls, be aware of their limitations related to data in Google Calendar, as discussed in the following table: Security control Note the following Data Residency (DRZ) Vertex AI Search only guarantees data residency in Google Cloud.
- If you use security controls, be aware of their limitations related to data in Google Groups, as discussed in the following table: Security control Note the following Data Residency (DRZ) Vertex AI Search only guarantees data residency in Google Cloud.

