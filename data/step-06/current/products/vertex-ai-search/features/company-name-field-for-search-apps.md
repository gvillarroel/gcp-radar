---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.938Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Company name field for search apps"
feature_slug: "company-name-field-for-search-apps"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results"
keywords:
  - "company"
  - "name"
  - "field"
  - "for"
  - "search"
  - "apps"
  - "adds"
  - "specifying"
---

# Company name field for search apps

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Adds support for specifying a company or organization name when creating a Vertex AI Search app to improve summarization and follow-up response quality.

## Extended Definition

Adds support for specifying a company or organization name when creating a Vertex AI Search app to improve summarization and follow-up response quality.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results)

## Supporting Pages

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- DataStoreServiceClient ; public class SyncCreateDataStore { public static void main ( String [] args ) throws Exception { syncCreateDataStore (); } public static void syncCreateDataStore () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataStoreServiceClient dataStoreServiceClient = DataStoreServiceClient . create ()) { CreateDataStoreRequest request = CreateDataStoreRequest . newBuilder () . setParent ( CollectionName . of ( "[PROJECT]" , "[LOCATION]" , "[COLLECTION]" ). toString ()) . setDataStore ( DataStore . newBuilder (). build ()) . setDataStoreId ( "dataStoreId929489618" ) . setCreateAdvancedSiteSearch ( true ) . setSkipDefaultSchemaCreation ( true ) . build (); DataStore response = dataStoreServiceClient . createDataStoreAsync ( request ). get (); } } } Import documents import com.google.cloud.discoveryengine.v1.
- DataStoreServiceClient ; public class SyncCreateDataStore { public static void main ( String [] args ) throws Exception { syncCreateDataStore (); } public static void syncCreateDataStore () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataStoreServiceClient dataStoreServiceClient = DataStoreServiceClient . create ()) { CreateDataStoreRequest request = CreateDataStoreRequest . newBuilder () . setParent ( CollectionName . of ( "[PROJECT]" , "[LOCATION]" , "[COLLECTION]" ). toString ()) . setDataStore ( DataStore . newBuilder (). build ()) . setDataStoreId ( "dataStoreId929489618" ) . setCreateAdvancedSiteSearch ( true ) . setSkipDefaultSchemaCreation ( true ) . build (); DataStore response = dataStoreServiceClient . createDataStoreAsync ( request ). get (); } } } Import documents import com.google.cloud.discoveryengine.v1.

### Get search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Please see {@see SearchServiceClient::servingConfigName()} for help formatting this field. / function search sample(string $formattedServingConfig): void { // Create a client. $searchServiceClient = new SearchServiceClient(); // Prepare the request message. $request = (new SearchRequest()) ->setServingConfig($formattedServingConfig); // Call the API and handle any network failures. try { / @var PagedListResponse $response / $response = $searchServiceClient->search($request); / @var SearchResult $element / foreach ($response as $element) { printf('Element data: %s' .
- Please see {@see SearchServiceClient::servingConfigName()} for help formatting this field. / function search sample(string $formattedServingConfig): void { // Create a client. $searchServiceClient = new SearchServiceClient(); // Prepare the request message. $request = (new SearchRequest()) ->setServingConfig($formattedServingConfig); // Call the API and handle any network failures. try { / @var PagedListResponse $response / $response = $searchServiceClient->search($request); / @var SearchResult $element / foreach ($response as $element) { printf('Element data: %s' .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client, please see the apiEndpoint client configuration option for more details. / function callSample(): void { $formattedServingConfig = SearchServiceClient::servingConfigName( '[PROJECT]', '[LOCATION]', '[DATA STORE]', '[SERVING CONFIG]' ); search sample($formattedServingConfig); } Python For more information, see the Vertex AI Search Python API reference documentation .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client, please see the apiEndpoint client configuration option for more details. / function callSample(): void { $formattedServingConfig = SearchServiceClient::servingConfigName( '[PROJECT]', '[LOCATION]', '[DATA STORE]', '[SERVING CONFIG]' ); search sample($formattedServingConfig); } Python For more information, see the Vertex AI Search Python API reference documentation .

### "Configure serving controls for search \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Response You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/global/collections/default collection/engines/ APP ID /controls/ PROMOTE CONTROL ID ", "displayName": " PROMOTE CONTROL NAME ", "solutionType": "SOLUTION TYPE SEARCH", "conditions": [ { "queryTerms": [ { "value": " VALUE ", "fullMatch": true } ] } ], "useCases": [ "SEARCH USE CASE SEARCH" ], "promoteAction": { "dataStore": "projects/ PROJECT NUMBER /locations/global/collections/default collection/dataStores/ DATA STORE ID ", "searchLinkPromotion": { "title": " URI TITLE ", "uri": " URI ", "description": " URI DESCRIPTION ", "enabled": ENABLED TRUE FALSE } } } For all search apps except for basic website search, attach the control to the app's serving config using the engines.servingConfigs.patch method.
- Serving control types The following types of serving controls are available: Control Description Available for Boost control Changes the returned order of results Search apps with data stores that support a schema, such as data stores that contain structured data, websites with structured data (advanced website indexing), unstructured data with metadata, or media data Filter control Removes entries from returned results Search apps with data stores that support a schema, such as data stores that contain structured data, websites (advanced website indexing), unstructured data with metadata, or media data Synonyms control Associates queries with each other Search apps with website (advanced website indexing), structured, unstructured, or media data stores Redirect control Redirects to a specified URI All search apps Promote control Promotes a specified link for a query All search apps About conditions When creating a control, you can optionally define a condition that determines when the control is applied.
- DOCUMENT RESOURCE PATH : a field to specify the document resource path of the document to be promoted: For search data stores with structured and unstructured data, you must provide either the document resource path in the DOCUMENT RESOURCE PATH field, the URI in the URI field, or both.
- To successfully create a promote control, one of the following fields is required in the creation request: queryTerms : This condition can't be specified if you're specifying the queryRegex condition, which is applicable to basic website search only.

### Boost search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- You can define the boost specification as follows: { "boostSpec": { "conditionBoostSpecs": { "condition": "star rating >= 3.0", "boostControlSpec": { "attributeType": "NUMERICAL", "interpolationType": "LINEAR", "fieldName": "star rating", "controlPoints": [ { "attributeValue": "3.5", "boostAmount": 0.25 }, { "attributeValue": "4.0", "boostAmount": 0.30 }, { "attributeValue": "4.5", "boostAmount": 0.32 } ] } } } } For this scenario, the search results are boosted as follows: Star rating Boost amount less than or equal to 3.5 0.25 between 3.5 and 4.0 between 0.25 and 0.30, calculated using linear interpolation equal to 4.0 0.30 between 4.0 and 4.5 between 0.30 and 0.32, calculated using linear interpolation greater than or equal to 4.5 0.32 Boost according to freshness You can boost results based on datetime attributes in a piecewise linear manner by specifying control points and their corresponding boost values.
- You can define the boost specification as follows: { "boostSpec": { "conditionBoostSpecs": { "condition": true, "boostControlSpec": { "fieldName": "publication date", "attributeType": "FRESHNESS", "interpolationType": "LINEAR", "controlPoints": [ { "attributeValue": "7D", "boostAmount": 0.40 }, { "attributeValue": "30D", "boostAmount": 0.37 }, { "attributeValue": "60D", "boostAmount": 0.32 }, { "attributeValue": "90D", "boostAmount": 0 } ] } } } } For this scenario, the search results are boosted as follows: Freshness Boost amount less than or equal to 7 days 0.40 between 7 and 30 days between 0.40 and 0.37, calculated using linear interpolation equal to 30 days 0.37 between 30 and 60 days between 0.37 and 0.32, calculated using linear interpolation equal to 60 days 0.32 between 60 and 90 days between 0.32 and 0.0, calculated using linear interpolation greater than or equal to 90 days 0.0 Example use case using a Google-inferred page date When crawling through the web pages in your website data store, Google infers page data using the properties that apply to your content.
- To specify a boost specification using custom numerical attributes, do the following: Specify the boost specification in the boostSpec field when you send a servingConfigs.search request. { "boostSpec": { "conditionBoostSpecs": { "condition": " BOOST CONDITION ", "boostControlSpec": { "attributeType": "NUMERICAL", "interpolationType": "LINEAR", "fieldName": " CUSTOM ATTRIBUTE FIELD NAME ", "controlPoints": [ { "attributeValue": " CUSTOM ATTRIBUTE VALUE 1 ", "boostAmount": BOOST AMOUNT 1 }, { "attributeValue": " CUSTOM ATTRIBUTE VALUE 2 ", "boostAmount": BOOST AMOUNT 2 } ] } } } } The specification contains the following parameters: BOOST CONDITION : a text filter expression to select the documents to which boost is applied.
- To specify a boost specification using custom datetime attributes, do the following: Specify the boost specification in the boostSpec field when you send a servingConfigs.search request. { "boostSpec": { "conditionBoostSpecs": { "condition": " BOOST CONDITION ", "boostControlSpec": { "fieldName": " DATETIME FIELD NAME ", "attributeType": "FRESHNESS", "interpolationType": "LINEAR", "controlPoints": [ { "attributeValue": " DURATION VALUE 1 ", "boostAmount": BOOST AMOUNT 1 }, { "attributeValue": " DURATION VALUE 2 ", "boostAmount": BOOST AMOUNT 2 } ] } } } } The specification contains the following parameters: BOOST CONDITION : a text filter expression to select the documents to which boost is applied.

