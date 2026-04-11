---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.965Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Enterprise Search SafeSearch support for follow-up search"
feature_slug: "enterprise-search-safesearch-support-for-follow-up-search"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
keywords:
  - "enterprise"
  - "search"
  - "safesearch"
  - "for"
  - "follow"
  - "up"
  - "is"
  - "supported"
---

# Enterprise Search SafeSearch support for follow-up search

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

SafeSearch is supported when using Enterprise Search's search with follow-ups capability.

## Extended Definition

SafeSearch is supported when using Enterprise Search's search with follow-ups capability.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-api-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- They can replicate data from Spanner into BigQuery and perform analytics against local data, or they can use federated queries to retrieve data from Spanner on-demand.\n", "steps": [ { "state": "SUCCEEDED", "description": "Rephrase the query and search.", "actions": [ { "searchAction": { "query": "Compare bigquery with spanner database?" }, "observation": { "searchResults": [ { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/ecc0e7547253f4ca3ff3328ce89995af", "uri": "https://cloud.google.com/blog/topics/developers-practitioners/how-spanner-and-bigquery-work-together-handle-transactional-and-analytical-workloads", "title": "How Spanner and BigQuery work together to handle transactional and analytical workloads Google Cloud Blog", "snippetInfo": [ { "snippet": "Using Cloud \u003cb\u003eSpanner\u003c/b\u003e and \u003cb\u003eBigQuery\u003c/b\u003e also allows customers to build their \u003cb\u003edata\u003c/b\u003e clouds using Google Cloud, a unified, open approach to \u003cb\u003edata\u003c/b\u003e-driven transformation ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/d7e238f73608a860e00b752ef80e2941", "uri": "https://cloud.google.com/blog/products/databases/cloud-spanner-gets-stronger-with-bigquery-federated-queries", "title": "Cloud Spanner gets stronger with BigQuery-federated queries Google Cloud Blog", "snippetInfo": [ { "snippet": "As enterprises compete for market share, their need for real-time insights has given rise to increased demand for transactional \u003cb\u003edatabases\u003c/b\u003e to support \u003cb\u003edata\u003c/b\u003e ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/e10a5a3c267dc61579e7c00fefe656eb", "uri": "https://cloud.google.com/blog/topics/developers-practitioners/replicating-cloud-spanner-bigquery-scale", "title": "Replicating from Cloud Spanner to BigQuery at scale Google Cloud Blog", "snippetInfo": [ { "snippet": "... \u003cb\u003eSpanner data\u003c/b\u003e into \u003cb\u003eBigQuery\u003c/b\u003e for analytics.
- Users can leverage federated queries to read data from Spanner and write to a native BigQuery table. \n" , "steps" : [ { "state" : "SUCCEEDED" , "description" : "Rephrase the query and search." , "actions" : [ { "searchAction" : { "query" : "Compare bigquery with spanner database?" } , "observation" : { "searchResults" : [ { "document" : "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/ecc0e7547253f4ca3ff3328ce89995af" , "uri" : "https://cloud.google.com/blog/topics/developers-practitioners/how-spanner-and-bigquery-work-together-handle-transactional-and-analytical-workloads" , "title" : "How Spanner and BigQuery work together to handle transactional and analytical workloads Google Cloud Blog" , "snippetInfo" : [ { "snippet" : "Using Cloud \u003cb\u003eSpanner\u003c/b\u003e and \u003cb\u003eBigQuery\u003c/b\u003e also allows customers to build their \u003cb\u003edata\u003c/b\u003e clouds using Google Cloud, a unified, open approach to \u003cb\u003edata\u003c/b\u003e-driven transformation ..." , "snippetStatus" : "SUCCESS" } ] } , { "document" : "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/d7e238f73608a860e00b752ef80e2941" , "uri" : "https://cloud.google.com/blog/products/databases/cloud-spanner-gets-stronger-with-bigquery-federated-queries" , "title" : "Cloud Spanner gets stronger with BigQuery-federated queries Google Cloud Blog" , "snippetInfo" : [ { "snippet" : "As enterprises compete for market share, their need for real-time insights has given rise to increased demand for transactional \u003cb\u003edatabases\u003c/b\u003e to support \u003cb\u003edata\u003c/b\u003e ..." , "snippetStatus" : "SUCCESS" } ] } , { "document" : "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/e10a5a3c267dc61579e7c00fefe656eb" , "uri" : "https://cloud.google.com/blog/topics/developers-practitioners/replicating-cloud-spanner-bigquery-scale" , "title" : "Replicating from Cloud Spanner to BigQuery at scale Google Cloud Blog" , "snippetInfo" : [ { "snippet" : "... \u003cb\u003eSpanner data\u003c/b\u003e into \u003cb\u003eBigQuery\u003c/b\u003e for analytics.
- REST To return a support score for each claim (sentence in the answer) and an aggregated support score for the answer, do the following: Run the following curl command: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:answer" \ -d '{ "query": { "text": " QUERY "}, "groundingSpec": { "includeGroundingSupports": true, } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Return grounding support scores The following command shows how to return grounding support scores for answers and claims.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- This is only supported for website search. userLabels map (key: string, value: string) The user labels applied to a resource must meet the following requirements: Each resource can have multiple labels, up to a maximum of 64.
- Supported types: application/pdf (PDF, only native PDFs are supported for now) text/html (HTML) text/plain (TXT) application/xml or text/xml (XML) application/json (JSON) application/vnd.openxmlformats-officedocument.wordprocessingml.document (DOCX) application/vnd.openxmlformats-officedocument.presentationml.presentation (PPTX) application/vnd.openxmlformats-officedocument.spreadsheetml.sheet (XLSX) application/vnd.ms-excel.sheet.macroenabled.12 (XLSM) The following types are supported only if layout parser is enabled in the data store: image/bmp (BMP) image/gif (GIF) image/jpeg (JPEG) image/png (PNG) image/tiff (TIFF) See https://www.iana.org/assignments/media-types/media-types.xhtml .
- If ranking expression backend is set to RANK BY FORMULA , the following expression types (and combinations of those chained using + or operators) are supported: double signal log(signal) exp(signal) rr(signal, double > 0) -- reciprocal rank transformation with second argument being a denominator constant. is nan(signal) -- returns 0 if signal is NaN, 1 otherwise. fill nan(signal1, signal2 double) -- if signal1 is NaN, returns signal2 double, else returns signal1.
- This feature is currently supported only for custom and site search. personalizationSpec object ( PersonalizationSpec ) The specification for personalization.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Note: for multi-datastore search, this is not yet supported, and will be ignored.
- Answer JSON representation { "name" : string , "state" : enum ( State ) , "answerText" : string , "citations" : [ { object ( Citation ) } ] , "groundingSupports" : [ { object ( GroundingSupport ) } ] , "references" : [ { object ( Reference ) } ] , "blobAttachments" : [ { object ( BlobAttachment ) } ] , "relatedQuestions" : [ string ] , "steps" : [ { object ( Step ) } ] , "queryUnderstandingInfo" : { object ( QueryUnderstandingInfo ) } , "answerSkippedReasons" : [ enum ( AnswerSkippedReason ) ] , "createTime" : string , "completeTime" : string , "safetyRatings" : [ { object ( SafetyRating ) } ] , // Union field grounding score can be only one of the following: "groundingScore" : number // End of list of possible types for union field grounding score . } Fields name string Immutable.
- GroundingSupport JSON representation { "startIndex" : string , "endIndex" : string , "sources" : [ { object ( CitationSource ) } ] , // Union field grounding score can be only one of the following: "groundingScore" : number // End of list of possible types for union field grounding score . // Union field grounding check required can be only one of the following: "groundingCheckRequired" : boolean // End of list of possible types for union field grounding check required . } Fields startIndex string ( int64 format) Required.
- SearchResult JSON representation { // Union field content can be only one of the following: "unstructuredDocumentInfo" : { object ( UnstructuredDocumentInfo ) } , "chunkInfo" : { object ( ChunkInfo ) } // End of list of possible types for union field content . } Fields Union field content .

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import websites from google.api core.client options import ClientOptions from google.cloud import discoveryengine v1 as discoveryengine # TODO(developer): Uncomment these variables before running the sample. # project id = "YOUR PROJECT ID" # location = "YOUR LOCATION" # Values: "global" # data store id = "YOUR DATA STORE ID" # NOTE: Do not include http or https protocol in the URI pattern # uri pattern = "cloud.google.com/generative-ai-app-builder/docs/ " # For more information, refer to: # https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions(api endpoint=f"{location}-discoveryengine.googleapis.com") if location != "global" else None ) # Create a client client = discoveryengine.SiteSearchEngineServiceClient( client options=client options ) # The full resource name of the data store # e.g. projects/{project}/locations/{location}/dataStores/{data store id} site search engine = client.site search engine path( project=project id, location=location, data store=data store id ) # Target Site to index target site = discoveryengine.TargetSite( provided uri pattern=uri pattern, # Options: INCLUDE, EXCLUDE type =discoveryengine.TargetSite.Type.INCLUDE, exact match=False, ) # Make the request operation = client.create target site( parent=site search engine, target site=target site, ) print(f"Waiting for operation to complete: {operation.operation.name}") response = operation.result() # After the operation is complete, # get information from operation metadata metadata = discoveryengine.CreateTargetSiteMetadata(operation.metadata) # Handle the response print(response) print(metadata) Next steps To attach your website data store to an app, create an app with Enterprise features enabled and select your data store following the steps in Create a search app .
- This must conform to the JSON schema that you provided in the previous step—for example: { "title" : "test title" , "categories" : [ "cat 1" , "cat 2" ], "uri" : "test uri" } Update with a JSON document. curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents/ DOCUMENT ID " \ -d '{ "jsonData": " JSON DOCUMENT STRING " }' Update with a JSON object. curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents/ DOCUMENT ID " \ -d '{ "structData": JSON DOCUMENT OBJECT }' Next steps To attach your data store to an app, create an app and select your data store following the steps in Create a search app .
- Set up AlloyDB for PostgreSQL access from a different project To give Vertex AI Search access to AlloyDB for PostgreSQL data that's in a different project, follow these steps: Replace the following PROJECT NUMBER variable with your Vertex AI Search project number, and then copy the contents of this code block.
- Error code Error message Description Troubleshooting 403 (Permission Denied) Searching using service account credentials isn't supported for Google Workspace data stores.

