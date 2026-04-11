---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.903Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Document Chunking for Search Summaries and Follow-ups"
feature_slug: "document-chunking-for-search-summaries-and-follow-ups"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es"
keywords:
  - "document"
  - "chunking"
  - "for"
  - "search"
  - "summaries"
  - "and"
  - "follow"
  - "ups"
---

# Document Chunking for Search Summaries and Follow-ups

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Adds document chunking support for unstructured data stores so search summaries and search with follow-up queries are available in Public Preview.

## Extended Definition

Adds document chunking support for unstructured data stores so search summaries and search with follow-up queries are available in Public Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-api-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Ultimately, the best database for a particular use case will depend on the specific requirements of the application. \n", "steps": [ { "state": "SUCCEEDED", "description": "Rephrase the query and search.", "actions": [ { "searchAction": { "query": " What is the performance of BigQuery? " }, "observation": { "searchResults": [ { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/9ab3ef91bcfde1fcd091efe9df7c699c", "uri": "https://cloud.google.com/bigquery/docs/best-practices-performance-overview", "title": "Introduction to optimizing query performance BigQuery Google Cloud", "snippetInfo": [ { "snippet": "After a query begins execution, \u003cb\u003eBigQuery\u003c/b\u003e calculates how many slots each query stage uses based on the stage size and complexity and the number of slots ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/4e545c5cb69b06b251265114d9099cb4", "uri": "https://cloud.google.com/bigquery/docs/query-insights", "title": "Get query performance insights BigQuery Google Cloud", "snippetInfo": [ { "snippet": "This document describes how to use the query execution graph to diagnose query \u003cb\u003eperformance\u003c/b\u003e issues, and to see query \u003cb\u003eperformance\u003c/b\u003e insights. \u003cb\u003eBigQuery\u003c/b\u003e offers ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/d34672d877eefe596f9c7d1a3d7076b1", "uri": "https://cloud.google.com/bigquery/docs/best-practices-performance-compute", "title": "Optimize query computation BigQuery Google Cloud", "snippetInfo": [ { "snippet": "After addressing the query \u003cb\u003eperformance\u003c/b\u003e insights, you can further optimize your query by performing the following tasks: Reduce data that is to be processed ...", "snippetStatus": "SUCCESS" } ] }, ... { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/75ce2f05833683e60ddc21a11ce0466f", "uri": "https://cloud.google.com/blog/products/data-analytics/troubleshoot-and-optimize-your-bigquery-analytics-queries-with-query-execution-graph/", "title": "Troubleshoot and optimize your BigQuery analytics queries with query execution graph Google Cloud Blog", "snippetInfo": [ { "snippet": "Since query \u003cb\u003eperformance\u003c/b\u003e is multi-faceted, \u003cb\u003eperformance\u003c/b\u003e insights might only provide a partial picture of the overall query \u003cb\u003eperformance\u003c/b\u003e.
- To add personal information about the user making a query and to generate an answer that takes into account the personal information, do the following: Run the following curl command: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:answer" \ -d '{ "query": { "text": " QUERY "}, "endUserSpec": { "endUserMetadata": [ { "chunkInfo": { "content": " PERSONALIZED INFO ", "documentMetadata": { "title": " INFO DESCRIPTION "} } } ] } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- The features of answer and follow-ups can be divided into three phases of the query, search and answer: Query phase features Search phase features Answer phase features When to use answer and when to use search Vertex AI Search has two methods that are used for querying apps.
- Home Documentation AI and ML Vertex AI Search Send feedback Get answers and follow-ups Stay organized with collections Save and categorize content based on your preferences.

### Get search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Select Search with follow-ups to enable conversation search with generative summaries and follow-up questions.
- Consider document-relevance scores for these use cases: Post-search filtering based on the relevance score to remove irrelevant results Post-search ranking or as input to other applications Debugging: relevance scores can provide insight into why some search results are returned For each search result, a relevance score can be returned: "results": [ { "id": " DOCUMENT ID ", "document": { ... }, "modelScores": { "relevance score": { "values": [ DOCUMENT-RELEVANCE-SCORE ] } } }, ... ] Also see the example command in the procedure below.
- You can iterate over elements, and API calls will be issued to fetch pages as needed. result . each do item Each element is of type ::Google::Cloud::DiscoveryEngine::V1beta::SearchResponse::SearchResult. p item end end Get search results for an app with website data (API key) If you want to authenticate the search method call with an API key instead of using OAuth 2.0 through a service account or a user account, then follow this procedure, which uses the searchLite method.
- AUTO ), Optional: Use fine-tuned model for this request custom fine tuning spec=discoveryengine.CustomFineTuningSpec( enable search adaptor=True ), ) page result = client . search ( request ) Handle the response for response in page result : print ( response ) return page result Ruby For more information, see the Vertex AI Search Ruby API reference documentation .

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- This must conform to the JSON schema that you provided in the previous step—for example: { "title" : "test title" , "categories" : [ "cat 1" , "cat 2" ], "uri" : "test uri" } Update with a JSON document. curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents/ DOCUMENT ID " \ -d '{ "jsonData": " JSON DOCUMENT STRING " }' Update with a JSON object. curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents/ DOCUMENT ID " \ -d '{ "structData": JSON DOCUMENT OBJECT }' Next steps To attach your data store to an app, create an app and select your data store following the steps in Create a search app .
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import websites from google.api core.client options import ClientOptions from google.cloud import discoveryengine v1 as discoveryengine # TODO(developer): Uncomment these variables before running the sample. # project id = "YOUR PROJECT ID" # location = "YOUR LOCATION" # Values: "global" # data store id = "YOUR DATA STORE ID" # NOTE: Do not include http or https protocol in the URI pattern # uri pattern = "cloud.google.com/generative-ai-app-builder/docs/ " # For more information, refer to: # https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions(api endpoint=f"{location}-discoveryengine.googleapis.com") if location != "global" else None ) # Create a client client = discoveryengine.SiteSearchEngineServiceClient( client options=client options ) # The full resource name of the data store # e.g. projects/{project}/locations/{location}/dataStores/{data store id} site search engine = client.site search engine path( project=project id, location=location, data store=data store id ) # Target Site to index target site = discoveryengine.TargetSite( provided uri pattern=uri pattern, # Options: INCLUDE, EXCLUDE type =discoveryengine.TargetSite.Type.INCLUDE, exact match=False, ) # Make the request operation = client.create target site( parent=site search engine, target site=target site, ) print(f"Waiting for operation to complete: {operation.operation.name}") response = operation.result() # After the operation is complete, # get information from operation metadata metadata = discoveryengine.CreateTargetSiteMetadata(operation.metadata) # Handle the response print(response) print(metadata) Next steps To attach your website data store to an app, create an app with Enterprise features enabled and select your data store following the steps in Create a search app .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .

### Create a search app \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Generative responses include search summaries and search with follow-ups .
- If you don't have a data store, create one following the steps in Create a data store and ingest data for Vertex AI Search .
- Activating the Generative Responses option is required to get features such as search summaries or search with follow-ups .
- SEARCH ADD ON LLM ], ), For generic recommendation apps only similar documents config=discoveryengine.Engine.SimilarDocumentsEngineConfig, data store ids = data store ids , ) request = discoveryengine .

