---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.517Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "Semantic search"
feature_slug: "semantic-search"
latest_feature_date: "2022-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-warehouse/docs"
  - "https://docs.cloud.google.com/document-warehouse/docs/overview"
  - "https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents"
keywords:
  - "semantic"
  - "search"
  - "text"
  - "property"
  - "now"
  - "supports"
---

# Semantic search

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Text property search now supports semantic search.

## Extended Definition

Text property search now supports semantic search.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents)

## Supporting Pages

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- Source ID: `site-api-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Search : the product supports rich semantic search, including the following features: Full-text search Filtering search results by Properties (date, numeric, enum, text).
- Facets for a Document type are specified in the Document Schema by Admins (via Admin API) Semantic Search Semantic search supports synonyms or "semantically related" terms in the search query.
- Filters can be combined with AND and OR operators Semantic search - support common synonyms and misspellings, stemmings.
- Migrate vs Federate flexibility : The product supports a flexible architecture such that your document content can be migrated to Document AI Warehouse or stay-in-place if there are constraints in migrating content (we simply index the content and metadata) Integrated with Document Workflows - this integrates with Google Workflows and other document processing workflows by supporting: Properties - that represent the state of a document in a workflow and APIs that workflows can use to update the state of documents Doc Explorer interface - to track the progress of documents through a workflow pipeline, enabling a human to inspect, manage failures and stalled documents in the workflow pipeline.

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- Source ID: `site-api-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Search : the product supports rich semantic search, including the following features: Full-text search Filtering search results by Properties (date, numeric, enum, text).
- Facets for a Document type are specified in the Document Schema by Admins (via Admin API) Semantic Search Semantic search supports synonyms or "semantically related" terms in the search query.
- Filters can be combined with AND and OR operators Semantic search - support common synonyms and misspellings, stemmings.
- Migrate vs Federate flexibility : The product supports a flexible architecture such that your document content can be migrated to Document AI Warehouse or stay-in-place if there are constraints in migrating content (we simply index the content and metadata) Integrated with Document Workflows - this integrates with Google Workflows and other document processing workflows by supporting: Properties - that represent the state of a document in a workflow and APIs that workflows can use to update the state of documents Doc Explorer interface - to track the progress of documents through a workflow pipeline, enabling a human to inspect, manage failures and stalled documents in the workflow pipeline.

### Search documents \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents)
- Source ID: `site-iam-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. const projectNumber = 'YOUR PROJECT NUMBER'; const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' const userId = 'user:xxx@example.com'; // Format is "user:xxx@example.com" const documentQueryText = 'YOUR DOCUMENT QUERY' / // Import from google cloud const { DocumentServiceClient } = require ( ' @google-cloud/contentwarehouse ' ). v1 ; const apiEndpoint = location === 'us' ? 'contentwarehouse.googleapis.com' : ${ location } -contentwarehouse.googleapis.com ; // Create service client const serviceClient = new DocumentServiceClient ({ apiEndpoint : apiEndpoint }); // Get Document Schema async function searchDocuments () { // Initialize request argument(s) const searchRequest = { // The full resource name of the location, e.g.: // projects/{project number}/locations/{location} parent : projects/ ${ projectNumber } /locations/ ${ location } , // Document Text Query documentQuery : { query : documentQueryText , // File Type Filter fileTypeFilter : { fileType : ' DOCUMENT ' , }, }, // Histogram Query histogramQueries : [ { histogramQuery : 'count("DocumentSchemaId")' , }, ], requestMetadata : { userInfo : { id : userId }}, }; // Make Request const response = serviceClient . searchDocuments ( searchRequest ); // Print out response response . then ( result = > console . log ( Document Found: ${ JSON . stringify ( result ) } ), error = > console . log ( ${ error } ) ); } Python For more information, see the Document AI Warehouse Python API reference documentation .
- Please note the offset in this request is to only return the specified number of results to avoid hitting the API quota. / SearchDocumentsRequest searchDocumentsRequest = SearchDocumentsRequest . newBuilder () . setParent ( parent ) . setRequestMetadata ( requestMetadata ) . setOffset ( 5 ) . setDocumentQuery ( query ) . build (); // Make the call to search documents with document service client and store the response SearchDocumentsPagedResponse searchDocumentsPagedResponse = documentServiceClient . searchDocuments ( searchDocumentsRequest ); // Iterate through response and print search results for documents matching the search query for ( MatchingDocument matchingDocument : searchDocumentsPagedResponse . iterateAll ()) { System . out . println ( "Display Name: " + matchingDocument . getDocument (). getDisplayName () + "Document Name: " + matchingDocument . getDocument (). getName () + "Document Creation Time: " + matchingDocument . getDocument (). getCreateTime (). toString () + "Search Text Snippet: " + matchingDocument . getSearchTextSnippet ()); } } } private static String getProjectNumber ( String projectId ) throws IOException { / Initialize client that will be used to send requests.
- Snippet - keywords are highlighted with <b> & </b>. print ( f " { document . display name } - { document . document schema name } \n " f " { document . name } \n " f " { document . create time } \n " f " { matching document . search text snippet } \n " ) Print histogram for histogram query result in response . histogram query results : print ( f "Histogram Query: { histogram query result . histogram query } \n " f " { 'Schema' : < 70 } { 'Count' : < 15 } " ) for key , value in histogram query result . histogram . items (): print ( f " { key : < 70 } { value : < 15 } " ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- For more information, see Set up authentication for a local development environment . from google.cloud import contentwarehouse TODO(developer): Uncomment these variables before running the sample. project number = 'YOUR PROJECT NUMBER' location = 'YOUR PROJECT LOCATION' # Format is 'us' or 'eu' document query text = 'YOUR DOCUMENT QUERY' user id = 'user:YOUR SERVICE ACCOUNT ID' # Format is "user:xxxx@example.com" def search documents sample ( project number : str , location : str , document query text : str , user id : str ) - > None : Create a client client = contentwarehouse .

