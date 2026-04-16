---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.172Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search: Enterprise Search engine creation from Google Cloud Console"
feature_slug: "vertex-ai-search-enterprise-search-engine-creation-from-google-cloud-console"
latest_feature_date: "2023-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "enterprise"
  - "engine"
  - "creation"
  - "console"
  - "introduced"
---

# Vertex AI Search: Enterprise Search engine creation from Google Cloud Console

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Introduced the ability to create Enterprise Search search engines for unstructured data directly from the Google Cloud console.

## Extended Definition

Introduced the ability to create Enterprise Search search engines for unstructured data directly from the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc)

## Supporting Pages

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- If set to true, the content part of the documents will be refreshed regardless of the update status of the referencing content. / // const forceRefreshContent = true // Imports the Discoveryengine library const { DocumentServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ; // Instantiates a client const discoveryengineClient = new DocumentServiceClient (); async function callImportDocuments () { // Construct request const request = { parent , }; // Run request const [ operation ] = await discoveryengineClient . importDocuments ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callImportDocuments (); Python For more information, see the Vertex AI Search Python API reference documentation .
- If set to true, the content part of the documents will be refreshed regardless of the update status of the referencing content. / // const forceRefreshContent = true // Imports the Discoveryengine library const { DocumentServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ; // Instantiates a client const discoveryengineClient = new DocumentServiceClient (); async function callImportDocuments () { // Construct request const request = { parent , }; // Run request const [ operation ] = await discoveryengineClient . importDocuments ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callImportDocuments (); Python For more information, see the Vertex AI Search Python API reference documentation .
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import websites from google.api core.client options import ClientOptions from google.cloud import discoveryengine v1 as discoveryengine # TODO(developer): Uncomment these variables before running the sample. # project id = "YOUR PROJECT ID" # location = "YOUR LOCATION" # Values: "global" # data store id = "YOUR DATA STORE ID" # NOTE: Do not include http or https protocol in the URI pattern # uri pattern = "cloud.google.com/generative-ai-app-builder/docs/ " # For more information, refer to: # https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions(api endpoint=f"{location}-discoveryengine.googleapis.com") if location != "global" else None ) # Create a client client = discoveryengine.SiteSearchEngineServiceClient( client options=client options ) # The full resource name of the data store # e.g. projects/{project}/locations/{location}/dataStores/{data store id} site search engine = client.site search engine path( project=project id, location=location, data store=data store id ) # Target Site to index target site = discoveryengine.TargetSite( provided uri pattern=uri pattern, # Options: INCLUDE, EXCLUDE type =discoveryengine.TargetSite.Type.INCLUDE, exact match=False, ) # Make the request operation = client.create target site( parent=site search engine, target site=target site, ) print(f"Waiting for operation to complete: {operation.operation.name}") response = operation.result() # After the operation is complete, # get information from operation metadata metadata = discoveryengine.CreateTargetSiteMetadata(operation.metadata) # Handle the response print(response) print(metadata) Next steps To attach your website data store to an app, create an app with Enterprise features enabled and select your data store following the steps in Create a search app .
- DataStoreServiceClient ; public class SyncCreateDataStore { public static void main ( String [] args ) throws Exception { syncCreateDataStore (); } public static void syncCreateDataStore () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataStoreServiceClient dataStoreServiceClient = DataStoreServiceClient . create ()) { CreateDataStoreRequest request = CreateDataStoreRequest . newBuilder () . setParent ( CollectionName . of ( "[PROJECT]" , "[LOCATION]" , "[COLLECTION]" ). toString ()) . setDataStore ( DataStore . newBuilder (). build ()) . setDataStoreId ( "dataStoreId929489618" ) . setCreateAdvancedSiteSearch ( true ) . setSkipDefaultSchemaCreation ( true ) . build (); DataStore response = dataStoreServiceClient . createDataStoreAsync ( request ). get (); } } } Import documents import com.google.cloud.discoveryengine.v1.

### Create a search app \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines?engineId= APP ID " \ -d '{ "displayName": " APP DISPLAY NAME ", "dataStoreIds": [" DATA STORE ID "], "solutionType": "SOLUTION TYPE SEARCH", "industryVertical": "GENERIC", "searchEngineConfig": { "searchTier": " SEARCH TIER ", "searchAddOns": [" SEARCH ADD ON "] } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- SEARCH TIER ENTERPRISE , Options: SEARCH ADD ON LLM, SEARCH ADD ON UNSPECIFIED search add ons = [ discoveryengine .
- SearchEngineConfig ( Options: SEARCH TIER STANDARD, SEARCH TIER ENTERPRISE search tier = discoveryengine .
- SEARCH ADD ON LLM ], ), For generic recommendation apps only similar documents config=discoveryengine.Engine.SimilarDocumentsEngineConfig, data store ids = data store ids , ) request = discoveryengine .

### "Create a healthcare search app \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If it is false , the app creation operation was unsuccessful. { "name": "projects/ PROJECT ID /locations/us/collections/default collection/operations/ APP CREATION OPERATION ID ", "done": true, "response": { "@type": "type.googleapis.com/google.cloud.discoveryengine.v1.Engine", "name": "projects/ PROJECT ID /locations/us/collections/default collection/engines/ APP ID ", "displayName": " APP DISPLAY NAME ", "dataStoreIds": [ " DATA STORE ID " ], "solutionType": "SOLUTION TYPE SEARCH", "searchEngineConfig": { "searchTier": "SEARCH TIER STANDARD", "searchAddOns": [ " SEARCH ADD ON LLM " ] }, "industryVertical": "HEALTHCARE FHIR" } } Verify app creation This task shows you how to verify whether a healthcare search app was created successfully and whether FHIR data was imported into the data store successfully.
- Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST\ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json"\ -H "X-Goog-User-Project: PROJECT ID " \ "https://us-discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/us/collections/default collection/engines?engineId= APP ID " \ -d '{ "displayName": " APP DISPLAY NAME ", "dataStoreIds":" DATA STORE ID ", "industryVertical": "HEALTHCARE FHIR", "solutionType": "SOLUTION TYPE SEARCH", "searchEngineConfig": { "searchTier": "SEARCH TIER STANDARD", "searchAddOns": [" SEARCH ADD ON "] } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- The response contains details of the created app. { "name": "projects/ PROJECT ID /locations/us/collections/default collection/engines/ APP ID ", "displayName": " APP DISPLAY NAME ", "createTime": " APP CREATION TIMESTAMP ", "dataStoreIds": [ " DATA STORE ID " ], "solutionType": "SOLUTION TYPE SEARCH", "searchEngineConfig": { "searchTier": "SEARCH TIER STANDARD", "searchAddOns": [ "SEARCH ADD ON LLM" ] }, "industryVertical": "HEALTHCARE FHIR", "dataStores": [ "projects/ PROJECT ID /locations/us/collections/default collection/dataStores/ APP ID " ] } Verify data store creation and FHIR data import .
- To create a healthcare search app, follow these steps: Permissions required for this task Grant the following Identity and Access Management (IAM) roles to the service- PROJECT NUMBER @gcp-sa-discoveryengine.iam.gserviceaccount.com service account in the project that contains the Vertex AI Search data store: Purpose Roles To perform a one-time batch import of FHIR data from FHIR stores in Cloud Healthcare API.

