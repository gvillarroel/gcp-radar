---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.506Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "GenAI search"
feature_slug: "genai-search"
latest_feature_date: "2023-07-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents"
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
  - "https://docs.cloud.google.com/document-warehouse/docs/libraries"
keywords:
  - "genai"
  - "search"
  - "enables"
  - "private"
  - "preview"
  - "documents"
  - "up"
  - "25k"
---

# GenAI search

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Enables private preview GenAI search for documents up to 25K words.

## Extended Definition

Enables private preview GenAI search for documents up to 25K words.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents)
- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- [https://docs.cloud.google.com/document-warehouse/docs/libraries](https://docs.cloud.google.com/document-warehouse/docs/libraries)

## Supporting Pages

### Search documents \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents)
- Source ID: `site-iam-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Please note the offset in this request is to only return the specified number of results to avoid hitting the API quota. / SearchDocumentsRequest searchDocumentsRequest = SearchDocumentsRequest . newBuilder () . setParent ( parent ) . setRequestMetadata ( requestMetadata ) . setOffset ( 5 ) . setDocumentQuery ( query ) . build (); // Make the call to search documents with document service client and store the response SearchDocumentsPagedResponse searchDocumentsPagedResponse = documentServiceClient . searchDocuments ( searchDocumentsRequest ); // Iterate through response and print search results for documents matching the search query for ( MatchingDocument matchingDocument : searchDocumentsPagedResponse . iterateAll ()) { System . out . println ( "Display Name: " + matchingDocument . getDocument (). getDisplayName () + "Document Name: " + matchingDocument . getDocument (). getName () + "Document Creation Time: " + matchingDocument . getDocument (). getCreateTime (). toString () + "Search Text Snippet: " + matchingDocument . getSearchTextSnippet ()); } } } private static String getProjectNumber ( String projectId ) throws IOException { / Initialize client that will be used to send requests.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. const projectNumber = 'YOUR PROJECT NUMBER'; const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' const userId = 'user:xxx@example.com'; // Format is "user:xxx@example.com" const documentQueryText = 'YOUR DOCUMENT QUERY' / // Import from google cloud const { DocumentServiceClient } = require ( ' @google-cloud/contentwarehouse ' ). v1 ; const apiEndpoint = location === 'us' ? 'contentwarehouse.googleapis.com' : ${ location } -contentwarehouse.googleapis.com ; // Create service client const serviceClient = new DocumentServiceClient ({ apiEndpoint : apiEndpoint }); // Get Document Schema async function searchDocuments () { // Initialize request argument(s) const searchRequest = { // The full resource name of the location, e.g.: // projects/{project number}/locations/{location} parent : projects/ ${ projectNumber } /locations/ ${ location } , // Document Text Query documentQuery : { query : documentQueryText , // File Type Filter fileTypeFilter : { fileType : ' DOCUMENT ' , }, }, // Histogram Query histogramQueries : [ { histogramQuery : 'count("DocumentSchemaId")' , }, ], requestMetadata : { userInfo : { id : userId }}, }; // Make Request const response = serviceClient . searchDocuments ( searchRequest ); // Print out response response . then ( result = > console . log ( Document Found: ${ JSON . stringify ( result ) } ), error = > console . log ( ${ error } ) ); } Python For more information, see the Document AI Warehouse Python API reference documentation .
- String documentQuery = "your-document-query" ; String userId = "your-user-id" ; // Format is user:<user-id> searchDocuments ( projectId , location , documentQuery , userId ); } // Searches all documents for a given Document Query public static void searchDocuments ( String projectId , String location , String documentQuery , String userId ) throws IOException , InterruptedException , ExecutionException , TimeoutException { String projectNumber = getProjectNumber ( projectId ); String endpoint = "contentwarehouse.googleapis.com:443" ; if ( ! "us" . equals ( location )) { endpoint = String . format ( "%s-%s" , location , endpoint ); } DocumentServiceSettings documentServiceSettings = DocumentServiceSettings . newBuilder (). setEndpoint ( endpoint ) . build (); / Create the Document Service Client Initialize client that will be used to send requests.
- For more information, see Set up authentication for a local development environment . from google.cloud import contentwarehouse TODO(developer): Uncomment these variables before running the sample. project number = 'YOUR PROJECT NUMBER' location = 'YOUR PROJECT LOCATION' # Format is 'us' or 'eu' document query text = 'YOUR DOCUMENT QUERY' user id = 'user:YOUR SERVICE ACCOUNT ID' # Format is "user:xxxx@example.com" def search documents sample ( project number : str , location : str , document query text : str , user id : str ) - > None : Create a client client = contentwarehouse .

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also use Enterprise Document OCR to handle tasks like the following: Digitizing text: Extract text and layout data from documents for search, rules-based, document-processing pipelines, or custom-model creation.
- DocX support is in private preview.
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "skipHumanReview": skipHumanReview , "rawDocument": { "mimeType": " MIME TYPE ", "content": " IMAGE CONTENT " }, "fieldMask": " FIELD MASK ", "processOptions": { "ocrConfig": { "enableNativePdfParsing": ENABLE NATIVE PDF PARSING , "enableImageQualityScores": ENABLE IMAGE QUALITY SCORES , "enableSymbol": ENABLE SYMBOL , "disableCharacterBoxesDetection": DISABLE CHARACTER BOXES DETECTION , "hints": { "languageHints": [ " LANGUAGE HINTS " ] }, "advancedOcrOptions": [" ADVANCED OCR OPTIONS "], "premiumFeatures": { "enableSelectionMarkDetection": ENABLE SELECTION MARK DETECTION , "computeStyleInfo": COMPUTE STYLE INFO , "enableMathOcr": ENABLE MATH OCR , } }, "individualPageSelector" { "pages": [ INDIVIDUAL PAGES ] } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Input Enable by setting ProcessOptions.ocrConfig.premiumFeatures.enableSelectionMarkDetection to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "premiumFeatures" : { "enableSelectionMarkDetection" : true } } } } Output The checkbox output appears in Document.pages[].visualElements[] with "type": "unfilled checkbox" or "type": "filled checkbox" . "visualElements" : [ { "layout" : { "confidence" : 0.89363575 , "boundingPoly" : { "vertices" : [ { "x" : 11 , "y" : 24 }, { "x" : 37 , "y" : 24 }, { "x" : 37 , "y" : 56 }, { "x" : 11 , "y" : 56 } ], "normalizedVertices" : [ { "x" : 0.017488075 , "y" : 0.38709676 }, { "x" : 0.05882353 , "y" : 0.38709676 }, { "x" : 0.05882353 , "y" : 0.9032258 }, { "x" : 0.017488075 , "y" : 0.9032258 } ] } }, "type" : "unfilled checkbox" }, { "layout" : { "confidence" : 0.9148201 , "boundingPoly" : ... }, "type" : "filled checkbox" } ], You can check the full Document JSON output in this link .

### Document AI Warehouse client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/libraries](https://docs.cloud.google.com/document-warehouse/docs/libraries)
- Source ID: `site-api-reference`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- String userId = "your-user-id" ; // Format is user:<user-id> quickStart ( projectId , location , userId ); } public static void quickStart ( String projectId , String location , String userId ) throws IOException , InterruptedException , ExecutionException , TimeoutException { String projectNumber = getProjectNumber ( projectId ); String endpoint = "contentwarehouse.googleapis.com:443" ; if ( ! "us" . equals ( location )) { endpoint = String . format ( "%s-%s" , location , endpoint ); } DocumentSchemaServiceSettings documentSchemaServiceSettings = DocumentSchemaServiceSettings . newBuilder (). setEndpoint ( endpoint ). build (); // Create a Schema Service client try ( DocumentSchemaServiceClient documentSchemaServiceClient = DocumentSchemaServiceClient . create ( documentSchemaServiceSettings )) { / The full resource name of the location, e.g.: projects/{project number}/locations/{location} / String parent = LocationName . format ( projectNumber , location ); / Create Document Schema with Text Type Property Definition More detail on managing Document Schemas: https://cloud.google.com/document-warehouse/docs/manage-document-schemas / DocumentSchema documentSchema = DocumentSchema . newBuilder () . setDisplayName ( "My Test Schema" ) . setDescription ( "My Test Schema's Description" ) . addPropertyDefinitions ( PropertyDefinition . newBuilder () . setName ( "test symbol" ) . setDisplayName ( "Searchable text" ) . setIsSearchable ( true ) . setTextTypeOptions ( TextTypeOptions . newBuilder (). build ()) . build ()). build (); // Define Document Schema request CreateDocumentSchemaRequest createDocumentSchemaRequest = CreateDocumentSchemaRequest . newBuilder () . setParent ( parent ) . setDocumentSchema ( documentSchema ). build (); // Create Document Schema DocumentSchema documentSchemaResponse = documentSchemaServiceClient . createDocumentSchema ( createDocumentSchemaRequest ); // Create Document Service Client Settings DocumentServiceSettings documentServiceSettings = DocumentServiceSettings . newBuilder (). setEndpoint ( endpoint ). build (); // Create Document Service Client and Document with relevant properties try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ( documentServiceSettings )) { TextArray textArray = TextArray . newBuilder (). addValues ( "Test" ). build (); Document document = Document . newBuilder () . setDisplayName ( "My Test Document" ) . setDocumentSchemaName ( documentSchemaResponse . getName ()) . setPlainText ( "This is a sample of a document's text." ) . addProperties ( Property . newBuilder () . setName ( documentSchema . getPropertyDefinitions ( 0 ). getName ()) . setTextValues ( textArray )). build (); // Define Request Metadata for enforcing access control RequestMetadata requestMetadata = RequestMetadata . newBuilder () . setUserInfo ( UserInfo . newBuilder () . setId ( userId ). build ()). build (); // Define Create Document Request CreateDocumentRequest createDocumentRequest = CreateDocumentRequest . newBuilder () . setParent ( parent ) . setDocument ( document ) . setRequestMetadata ( requestMetadata ) . build (); // Create Document CreateDocumentResponse createDocumentResponse = documentServiceClient . createDocument ( createDocumentRequest ); System . out . println ( createDocumentResponse . getDocument (). getName ()); System . out . println ( documentSchemaResponse . getName ()); } } } private static String getProjectNumber ( String projectId ) throws IOException { try ( ProjectsClient projectsClient = ProjectsClient . create ()) { ProjectName projectName = ProjectName . of ( projectId ); Project project = projectsClient . getProject ( projectName ); String projectNumber = project . getName (); // Format returned is projects/xxxxxx return projectNumber . substring ( projectNumber . lastIndexOf ( "/" ) + 1 ); } } } Node.js / This snippet has been automatically generated and should be regarded as a code template only.
- C++ #include "google/cloud/contentwarehouse/v1/document client.h" #include "google/cloud/location.h" #include <iostream> int main ( int argc , char argv []) try { if ( argc != 3 ) { std :: cerr << "Usage: " << argv [ 0 ] << " project-number location-id \n " ; return 1 ; } auto const location = google :: cloud :: Location ( argv [ 1 ], argv [ 2 ]); namespace contentwarehouse = :: google :: cloud :: contentwarehouse v1 ; auto client = contentwarehouse :: DocumentServiceClient ( contentwarehouse :: MakeDocumentServiceConnection ()); for ( auto md : client .
- DocumentSchema ( display name = "My Test Schema" , property definitions = [ property definition ], ), ) Create a Document schema document schema = document schema client . create document schema ( request = create document schema request ) Create a Document Service client document client = contentwarehouse .
- DocumentSchemaServiceClient () The full resource name of the location, e.g.: projects/{project number}/locations/{location} parent = document schema client . common location path ( project = project number , location = location ) Define Schema Property of Text Type property definition = contentwarehouse .

