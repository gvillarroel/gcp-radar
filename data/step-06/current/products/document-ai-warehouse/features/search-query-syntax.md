---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.513Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "Search query syntax"
feature_slug: "search-query-syntax"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents"
  - "https://docs.cloud.google.com/document-warehouse/docs"
  - "https://docs.cloud.google.com/document-warehouse/docs/overview"
keywords:
  - "search"
  - "query"
  - "syntax"
  - "adds"
  - "partial"
  - "aip"
  - "160"
  - "including"
---

# Search query syntax

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Adds partial support for Google AIP-160 search syntax, including literals, logical operators, negation, comparisons, and functions.

## Extended Definition

Adds partial support for Google AIP-160 search syntax, including literals, logical operators, negation, comparisons, and functions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents)
- [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)

## Supporting Pages

### Search documents \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents)
- Source ID: `site-iam-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. const projectNumber = 'YOUR PROJECT NUMBER'; const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' const userId = 'user:xxx@example.com'; // Format is "user:xxx@example.com" const documentQueryText = 'YOUR DOCUMENT QUERY' / // Import from google cloud const { DocumentServiceClient } = require ( ' @google-cloud/contentwarehouse ' ). v1 ; const apiEndpoint = location === 'us' ? 'contentwarehouse.googleapis.com' : ${ location } -contentwarehouse.googleapis.com ; // Create service client const serviceClient = new DocumentServiceClient ({ apiEndpoint : apiEndpoint }); // Get Document Schema async function searchDocuments () { // Initialize request argument(s) const searchRequest = { // The full resource name of the location, e.g.: // projects/{project number}/locations/{location} parent : projects/ ${ projectNumber } /locations/ ${ location } , // Document Text Query documentQuery : { query : documentQueryText , // File Type Filter fileTypeFilter : { fileType : ' DOCUMENT ' , }, }, // Histogram Query histogramQueries : [ { histogramQuery : 'count("DocumentSchemaId")' , }, ], requestMetadata : { userInfo : { id : userId }}, }; // Make Request const response = serviceClient . searchDocuments ( searchRequest ); // Print out response response . then ( result = > console . log ( Document Found: ${ JSON . stringify ( result ) } ), error = > console . log ( ${ error } ) ); } Python For more information, see the Document AI Warehouse Python API reference documentation .
- Please note the offset in this request is to only return the specified number of results to avoid hitting the API quota. / SearchDocumentsRequest searchDocumentsRequest = SearchDocumentsRequest . newBuilder () . setParent ( parent ) . setRequestMetadata ( requestMetadata ) . setOffset ( 5 ) . setDocumentQuery ( query ) . build (); // Make the call to search documents with document service client and store the response SearchDocumentsPagedResponse searchDocumentsPagedResponse = documentServiceClient . searchDocuments ( searchDocumentsRequest ); // Iterate through response and print search results for documents matching the search query for ( MatchingDocument matchingDocument : searchDocumentsPagedResponse . iterateAll ()) { System . out . println ( "Display Name: " + matchingDocument . getDocument (). getDisplayName () + "Document Name: " + matchingDocument . getDocument (). getName () + "Document Creation Time: " + matchingDocument . getDocument (). getCreateTime (). toString () + "Search Text Snippet: " + matchingDocument . getSearchTextSnippet ()); } } } private static String getProjectNumber ( String projectId ) throws IOException { / Initialize client that will be used to send requests.
- String documentQuery = "your-document-query" ; String userId = "your-user-id" ; // Format is user:<user-id> searchDocuments ( projectId , location , documentQuery , userId ); } // Searches all documents for a given Document Query public static void searchDocuments ( String projectId , String location , String documentQuery , String userId ) throws IOException , InterruptedException , ExecutionException , TimeoutException { String projectNumber = getProjectNumber ( projectId ); String endpoint = "contentwarehouse.googleapis.com:443" ; if ( ! "us" . equals ( location )) { endpoint = String . format ( "%s-%s" , location , endpoint ); } DocumentServiceSettings documentServiceSettings = DocumentServiceSettings . newBuilder (). setEndpoint ( endpoint ) . build (); / Create the Document Service Client Initialize client that will be used to send requests.
- Snippet - keywords are highlighted with <b> & </b>. print ( f " { document . display name } - { document . document schema name } \n " f " { document . name } \n " f " { document . create time } \n " f " { matching document . search text snippet } \n " ) Print histogram for histogram query result in response . histogram query results : print ( f "Histogram Query: { histogram query result . histogram query } \n " f " { 'Schema' : < 70 } { 'Count' : < 15 } " ) for key , value in histogram query result . histogram . items (): print ( f " { key : < 70 } { value : < 15 } " ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- Source ID: `site-api-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Facets for a Document type are specified in the Document Schema by Admins (via Admin API) Semantic Search Semantic search supports synonyms or "semantically related" terms in the search query.
- Search : the product supports rich semantic search, including the following features: Full-text search Filtering search results by Properties (date, numeric, enum, text).
- Faceted Search A Facet is a metadata filter used in a search query.
- Users can search for documents within a folder hierarchy e.g. search within AllLoans->State UI - the product includes Web-accessible UI with the following features: Doc Explorer: search documents, filter search results, select documents to bulk-update properties or delete Doc Viewer: view documents, view/update its properties,assign ACLs, add to folders Upload: upload documents and run them through a DocAI extractor (either OCR or a supported specialized parser such as Invoice DocAI).

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- Source ID: `site-api-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Facets for a Document type are specified in the Document Schema by Admins (via Admin API) Semantic Search Semantic search supports synonyms or "semantically related" terms in the search query.
- Search : the product supports rich semantic search, including the following features: Full-text search Filtering search results by Properties (date, numeric, enum, text).
- Faceted Search A Facet is a metadata filter used in a search query.
- Users can search for documents within a folder hierarchy e.g. search within AllLoans->State UI - the product includes Web-accessible UI with the following features: Doc Explorer: search documents, filter search results, select documents to bulk-update properties or delete Doc Viewer: view documents, view/update its properties,assign ACLs, add to folders Upload: upload documents and run them through a DocAI extractor (either OCR or a supported specialized parser such as Invoice DocAI).

