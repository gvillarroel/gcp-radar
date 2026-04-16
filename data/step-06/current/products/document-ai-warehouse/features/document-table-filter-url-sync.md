---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.511Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "Document table filter URL sync"
feature_slug: "document-table-filter-url-sync"
latest_feature_date: "2023-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
  - "https://docs.cloud.google.com/document-ai/docs/languages"
keywords:
  - "document"
  - "table"
  - "filter"
  - "url"
  - "sync"
  - "synchronizes"
  - "text"
  - "search"
---

# Document table filter URL sync

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Synchronizes document table filter and text search state with the URL for sharing and saving filter settings.

## Extended Definition

Synchronizes document table filter and text search state with the URL for sharing and saving filter settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)

## Supporting Pages

### Search documents \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents)
- Source ID: `site-iam-reference`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. const projectNumber = 'YOUR PROJECT NUMBER'; const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' const userId = 'user:xxx@example.com'; // Format is "user:xxx@example.com" const documentQueryText = 'YOUR DOCUMENT QUERY' / // Import from google cloud const { DocumentServiceClient } = require ( ' @google-cloud/contentwarehouse ' ). v1 ; const apiEndpoint = location === 'us' ? 'contentwarehouse.googleapis.com' : ${ location } -contentwarehouse.googleapis.com ; // Create service client const serviceClient = new DocumentServiceClient ({ apiEndpoint : apiEndpoint }); // Get Document Schema async function searchDocuments () { // Initialize request argument(s) const searchRequest = { // The full resource name of the location, e.g.: // projects/{project number}/locations/{location} parent : projects/ ${ projectNumber } /locations/ ${ location } , // Document Text Query documentQuery : { query : documentQueryText , // File Type Filter fileTypeFilter : { fileType : ' DOCUMENT ' , }, }, // Histogram Query histogramQueries : [ { histogramQuery : 'count("DocumentSchemaId")' , }, ], requestMetadata : { userInfo : { id : userId }}, }; // Make Request const response = serviceClient . searchDocuments ( searchRequest ); // Print out response response . then ( result = > console . log ( Document Found: ${ JSON . stringify ( result ) } ), error = > console . log ( ${ error } ) ); } Python For more information, see the Document AI Warehouse Python API reference documentation .
- Snippet - keywords are highlighted with <b> & </b>. print ( f " { document . display name } - { document . document schema name } \n " f " { document . name } \n " f " { document . create time } \n " f " { matching document . search text snippet } \n " ) Print histogram for histogram query result in response . histogram query results : print ( f "Histogram Query: { histogram query result . histogram query } \n " f " { 'Schema' : < 70 } { 'Count' : < 15 } " ) for key , value in histogram query result . histogram . items (): print ( f " { key : < 70 } { value : < 15 } " ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- DOCUMENT ; // Create a file type filter for documents FileTypeFilter fileTypeFilter = FileTypeFilter . newBuilder () . setFileType ( documentFileType ) . build (); // Create document query to search all documents for text given at input DocumentQuery query = DocumentQuery . newBuilder () . setQuery ( documentQuery ) . setFileTypeFilter ( fileTypeFilter ) . build (); / Create the request to search all documents for specified query.
- Please note the offset in this request is to only return the specified number of results to avoid hitting the API quota. / SearchDocumentsRequest searchDocumentsRequest = SearchDocumentsRequest . newBuilder () . setParent ( parent ) . setRequestMetadata ( requestMetadata ) . setOffset ( 5 ) . setDocumentQuery ( query ) . build (); // Make the call to search documents with document service client and store the response SearchDocumentsPagedResponse searchDocumentsPagedResponse = documentServiceClient . searchDocuments ( searchDocumentsRequest ); // Iterate through response and print search results for documents matching the search query for ( MatchingDocument matchingDocument : searchDocumentsPagedResponse . iterateAll ()) { System . out . println ( "Display Name: " + matchingDocument . getDocument (). getDisplayName () + "Document Name: " + matchingDocument . getDocument (). getName () + "Document Creation Time: " + matchingDocument . getDocument (). getCreateTime (). toString () + "Search Text Snippet: " + matchingDocument . getSearchTextSnippet ()); } } } private static String getProjectNumber ( String projectId ) throws IOException { / Initialize client that will be used to send requests.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Layout Parser extracts document content elements like text, tables, and lists, and creates context-aware chunks that facilitate information retrieval in generative AI and discovery applications.
- More information Custom Extractor Form Parser Description Extract general key-value pairs (entity and checkbox), tables, and generic entities from documents in addition to OCR text.
- More information Form Parser Layout Parser Description Extracts document content elements (text, tables, and lists) and creates context-aware chunks.
- Category Digitize Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Type in API OCR PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Armenian hy Armn Belarusian be Cyrl Bangla bn Beng Bengali bn Beng Bulgarian bg Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Greek el Grek Gujarati gu Gujr Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Kannada kn Knda Khmer km Khmr Korean ko Kore Lao lo Laoo Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Malayalam ml Mlym Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Punjabi pa Guru Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Tamil ta Taml Telugu te Telu Thai th Thai Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Description pretrained-ocr-v1.2-2022-11-10 Stable GA Frozen model version of v1.0: Model files, configurations, and binaries of a version snapshot frozen in a container image for up to 18 months. pretrained-ocr-v2.0-2023-06-02 Stable GA Production-ready model specialized for document use cases.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Layout Parser extracts document content elements like text, tables, and lists, and creates context-aware chunks that facilitate information retrieval in generative AI and discovery applications.
- More information Custom Extractor Form Parser Description Extract general key-value pairs (entity and checkbox), tables, and generic entities from documents in addition to OCR text.
- More information Form Parser Layout Parser Description Extracts document content elements (text, tables, and lists) and creates context-aware chunks.
- Category Digitize Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Type in API OCR PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Armenian hy Armn Belarusian be Cyrl Bangla bn Beng Bengali bn Beng Bulgarian bg Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Greek el Grek Gujarati gu Gujr Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Kannada kn Knda Khmer km Khmr Korean ko Kore Lao lo Laoo Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Malayalam ml Mlym Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Punjabi pa Guru Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Tamil ta Taml Telugu te Telu Thai th Thai Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Description pretrained-ocr-v1.2-2022-11-10 Stable GA Frozen model version of v1.0: Model files, configurations, and binaries of a version snapshot frozen in a container image for up to 18 months. pretrained-ocr-v2.0-2023-06-02 Stable GA Production-ready model specialized for document use cases.

