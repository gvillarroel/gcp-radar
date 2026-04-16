---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.132Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search Enterprise Search multi-region data store locations"
feature_slug: "vertex-ai-search-enterprise-search-multi-region-data-store-locations"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "enterprise"
  - "multi"
  - "region"
  - "store"
  - "locations"
---

# Vertex AI Search Enterprise Search multi-region data store locations

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Enterprise Search data stores can now be created in global, US multi-region, or EU multi-region locations.

## Extended Definition

Enterprise Search data stores can now be created in global, US multi-region, or EU multi-region locations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc)

## Supporting Pages

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import websites from google.api core.client options import ClientOptions from google.cloud import discoveryengine v1 as discoveryengine # TODO(developer): Uncomment these variables before running the sample. # project id = "YOUR PROJECT ID" # location = "YOUR LOCATION" # Values: "global" # data store id = "YOUR DATA STORE ID" # NOTE: Do not include http or https protocol in the URI pattern # uri pattern = "cloud.google.com/generative-ai-app-builder/docs/ " # For more information, refer to: # https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions(api endpoint=f"{location}-discoveryengine.googleapis.com") if location != "global" else None ) # Create a client client = discoveryengine.SiteSearchEngineServiceClient( client options=client options ) # The full resource name of the data store # e.g. projects/{project}/locations/{location}/dataStores/{data store id} site search engine = client.site search engine path( project=project id, location=location, data store=data store id ) # Target Site to index target site = discoveryengine.TargetSite( provided uri pattern=uri pattern, # Options: INCLUDE, EXCLUDE type =discoveryengine.TargetSite.Type.INCLUDE, exact match=False, ) # Make the request operation = client.create target site( parent=site search engine, target site=target site, ) print(f"Waiting for operation to complete: {operation.operation.name}") response = operation.result() # After the operation is complete, # get information from operation metadata metadata = discoveryengine.CreateTargetSiteMetadata(operation.metadata) # Handle the response print(response) print(metadata) Next steps To attach your website data store to an app, create an app with Enterprise features enabled and select your data store following the steps in Create a search app .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import documents from google.api core.client options import ClientOptions from google.cloud import discoveryengine TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR LOCATION" # Values: "global" data store id = "YOUR DATA STORE ID" Examples: - Unstructured documents - gs://bucket/directory/file.pdf - gs://bucket/directory/ .pdf - Unstructured documents with JSONL Metadata - gs://bucket/directory/file.json - Unstructured documents with CSV Metadata - gs://bucket/directory/file.csv gcs uri = "YOUR GCS PATH" For more information, refer to: https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions ( api endpoint = f " { location } -discoveryengine.googleapis.com" ) if location != "global" else None ) Create a client client = discoveryengine .

### "Create a custom recommendations data store \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import documents from google.api core.client options import ClientOptions from google.cloud import discoveryengine TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR LOCATION" # Values: "global" data store id = "YOUR DATA STORE ID" Examples: - Unstructured documents - gs://bucket/directory/file.pdf - gs://bucket/directory/ .pdf - Unstructured documents with JSONL Metadata - gs://bucket/directory/file.json - Unstructured documents with CSV Metadata - gs://bucket/directory/file.csv gcs uri = "YOUR GCS PATH" For more information, refer to: https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions ( api endpoint = f " { location } -discoveryengine.googleapis.com" ) if location != "global" else None ) Create a client client = discoveryengine .
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import documents from google.api core.client options import ClientOptions from google.cloud import discoveryengine TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR LOCATION" # Values: "global" data store id = "YOUR DATA STORE ID" bigquery dataset = "YOUR BIGQUERY DATASET" bigquery table = "YOUR BIGQUERY TABLE" For more information, refer to: https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions ( api endpoint = f " { location } -discoveryengine.googleapis.com" ) if location != "global" else None ) Create a client client = discoveryengine .

### "Create a healthcare search data store \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import documents from google.api core.client options import ClientOptions from google.cloud import discoveryengine TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR LOCATION" # Values: "us" data store id = "YOUR DATA STORE ID" healthcare project id = "YOUR HEALTHCARE PROJECT ID" healthcare location = "YOUR HEALTHCARE LOCATION" healthcare dataset id = "YOUR HEALTHCARE DATASET ID" healthcare fihr store id = "YOUR HEALTHCARE FHIR STORE ID" For more information, refer to: https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions ( api endpoint = f " { location } -discoveryengine.googleapis.com" ) if location != "global" else None ) Create a client client = discoveryengine .
- Create a data store from google.api core.client options import ClientOptions from google.cloud import discoveryengine TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR LOCATION" # Values: "global" data store id = "YOUR DATA STORE ID" def create data store sample ( project id : str , location : str , data store id : str , ) - > str : For more information, refer to: https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions ( api endpoint = f " { location } -discoveryengine.googleapis.com" ) if location != "global" else None ) Create a client client = discoveryengine .
- If they're in the same project, go back to the previous step. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://us-discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/us/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "reconciliation mode": "FULL", "fhir store source": {"fhir store": "projects/ SOURCE PROJECT ID /locations/ CLOUD HEALTHCARE DATASET LOCATION /datasets/ CLOUD HEALTHCARE DATASET ID /fhirStores/ FHIR STORE ID "} }' Replace the following: PROJECT ID : the ID of the Google Cloud project that contains the Vertex AI Search data store.
- You need this value to verify the status of the import or cancel an ongoing batch import . { "name": "projects/ PROJECT ID /locations/us/collections/default collection/dataStores/ DATA STORE ID /branches/0/operations/ IMPORT OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.discoveryengine.v1.ImportDocumentsMetadata" } } If the source FHIR store and the target Vertex AI Search data store are in different Google Cloud projects, call the following method to perform a one-time batch import.

