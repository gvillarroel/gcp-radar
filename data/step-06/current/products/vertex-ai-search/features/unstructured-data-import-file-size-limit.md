---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.835Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Unstructured data import file size limit"
feature_slug: "unstructured-data-import-file-size-limit"
latest_feature_date: "2025-11-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results"
keywords:
  - "unstructured"
  - "import"
  - "file"
  - "size"
  - "limit"
  - "vertex"
  - "ai"
  - "search"
---

# Unstructured data import file size limit

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Vertex AI Search updated unstructured data import limits to allow files up to 200 MB regardless of parser type.

## Extended Definition

Vertex AI Search updated unstructured data import limits to allow files up to 200 MB regardless of parser type.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)

## Supporting Pages

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- You can put the JSON string of the document in a consistent format directly in each line, and Vertex AI Search automatically generates the IDs for each document imported. content : Upload unstructured documents (PDF, HTML, DOC, TXT, PPTX).
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import documents from google.api core.client options import ClientOptions from google.cloud import discoveryengine TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR LOCATION" # Values: "global" data store id = "YOUR DATA STORE ID" Examples: - Unstructured documents - gs://bucket/directory/file.pdf - gs://bucket/directory/ .pdf - Unstructured documents with JSONL Metadata - gs://bucket/directory/file.json - Unstructured documents with CSV Metadata - gs://bucket/directory/file.csv gcs uri = "YOUR GCS PATH" For more information, refer to: https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions ( api endpoint = f " { location } -discoveryengine.googleapis.com" ) if location != "global" else None ) Create a client client = discoveryengine .

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-api-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- You can import FHIR R4 data into a data store in the following ways: Batch import (a one-time import).\n", "relatedQuestions": [ "Can you provide examples of structured data formats?", "What file types are supported for unstructured data?", "How does website data ingestion work?", "What are the limitations of healthcare data import?", "Is there a size limit for importing data?" ], ... } } In this example, the enabled field in the relatedQuestionsSpec object is set to true and the response contains related questions in the relatedQuestions array.
- Example command and partial result curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "what kinds of data can I import into Vertex AI Search?"}, "session": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/10291252835232308789", "searchSpec":{ "searchParams": {"filter": ""} }, "relatedQuestionsSpec": { "enable": true } }' { "answer": { "state": "SUCCEEDED", "answerText": "You can import various kinds of data into Vertex AI Search, depending on the type of data store you create.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Personalize answers If there is specific information about the user available—for example, data in a profile, you can specify that information in the endUserMetadata object so that the query results can be personalized for the user.
- For example, "what kinds of data can I import into Vertex AI Search?".

### "Create a custom recommendations data store \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- You can put the JSON string of the document in a consistent format directly in each line, and Vertex AI Search automatically generates the IDs for each document imported. content : Upload unstructured documents (PDF, HTML, DOC, TXT, PPTX).
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import documents from google.api core.client options import ClientOptions from google.cloud import discoveryengine TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR LOCATION" # Values: "global" data store id = "YOUR DATA STORE ID" Examples: - Unstructured documents - gs://bucket/directory/file.pdf - gs://bucket/directory/ .pdf - Unstructured documents with JSONL Metadata - gs://bucket/directory/file.json - Unstructured documents with CSV Metadata - gs://bucket/directory/file.csv gcs uri = "YOUR GCS PATH" For more information, refer to: https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions ( api endpoint = f " { location } -discoveryengine.googleapis.com" ) if location != "global" else None ) Create a client client = discoveryengine .

### Get search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- Source ID: `site-iam-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR LOCATION'; // Options: 'global', 'us', 'eu' // const collectionId = 'default collection'; // Options: 'default collection' // const dataStoreId = 'YOUR DATA STORE ID' // Create in Cloud Console // const servingConfigId = 'default config'; // Options: 'default config' // const searchQuery = 'Google'; const { SearchServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1beta ; // For more information, refer to: // https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store const apiEndpoint = location === 'global' ? 'discoveryengine.googleapis.com' : ${ location } -discoveryengine.googleapis.com ; // Instantiates a client const client = new SearchServiceClient ({ apiEndpoint : apiEndpoint }); async function search () { // The full resource name of the search engine serving configuration. // Example: projects/{projectId}/locations/{location}/collections/{collectionId}/dataStores/{dataStoreId}/servingConfigs/{servingConfigId} // You must create a search engine in the Cloud Console first. const name = client . projectLocationCollectionDataStoreServingConfigPath ( projectId , location , collectionId , dataStoreId , servingConfigId ); const request = { pageSize : 10 , query : searchQuery , servingConfig : name , }; const IResponseParams = { ISearchResult : 0 , ISearchRequest : 1 , ISearchResponse : 2 , }; // Perform search request const response = await client . search ( request , { // Warning: Should always disable autoPaginate to avoid iterate through all pages. // // By default NodeJS SDK returns an iterable where you can iterate through all // search results instead of only the limited number of results requested on // pageSize, by sending multiple sequential search requests page-by-page while // iterating, until it exhausts all the search results.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR LOCATION'; // Options: 'global', 'us', 'eu' // const collectionId = 'default collection'; // Options: 'default collection' // const dataStoreId = 'YOUR DATA STORE ID' // Create in Cloud Console // const servingConfigId = 'default config'; // Options: 'default config' // const searchQuery = 'Google'; const { SearchServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1beta ; // For more information, refer to: // https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store const apiEndpoint = location === 'global' ? 'discoveryengine.googleapis.com' : ${ location } -discoveryengine.googleapis.com ; // Instantiates a client const client = new SearchServiceClient ({ apiEndpoint : apiEndpoint }); async function search () { // The full resource name of the search engine serving configuration. // Example: projects/{projectId}/locations/{location}/collections/{collectionId}/dataStores/{dataStoreId}/servingConfigs/{servingConfigId} // You must create a search engine in the Cloud Console first. const name = client . projectLocationCollectionDataStoreServingConfigPath ( projectId , location , collectionId , dataStoreId , servingConfigId ); const request = { pageSize : 10 , query : searchQuery , servingConfig : name , }; const IResponseParams = { ISearchResult : 0 , ISearchRequest : 1 , ISearchResponse : 2 , }; // Perform search request const response = await client . search ( request , { // Warning: Should always disable autoPaginate to avoid iterate through all pages. // // By default NodeJS SDK returns an iterable where you can iterate through all // search results instead of only the limited number of results requested on // pageSize, by sending multiple sequential search requests page-by-page while // iterating, until it exhausts all the search results.
- Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:search" \ -d '{ "servingConfig": "projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search", "query": " QUERY ", "pageSize": " PAGE SIZE ", "offset": " OFFSET ", "orderBy": " ORDER BY ", "params": {"user country code": " USER COUNTRY CODE ", "searchType": " SEARCH TYPE "}, "filter": " FILTER ", "boostSpec": " BOOST SPEC ", "contentSearchSpec": { "searchResultMode": " RESULT MODE " }, "userPseudoId": " USER PSEUDO ID ", "dataStoreSpecs": [{" DATA STORE SPEC "}] }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:search" \ -d '{ "query": " QUERY ", "userPseudoId": " USER PSEUDO ID ", "pageSize": " PAGE SIZE ", "offset": " OFFSET ", "orderBy": " ORDER BY ", "filter": " FILTER ", "boostSpec": " BOOST SPEC ", "facetSpec": " FACET SPEC ", "queryExpansionSpec": " QUERY EXPANSION SPEC ", "spellCorrectionSpec": " SPELL CORRECTION SPEC ", "contentSearchSpec": " CONTENT SEARCH SPEC ", "dataStoreSpecs": [{" DATA STORE SPEC "}], }' Replace the following: PROJECT ID : the ID of your Google Cloud project.

