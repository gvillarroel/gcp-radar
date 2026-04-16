---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.509Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "Export to Workbench pipeline"
feature_slug: "export-to-workbench-pipeline"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs"
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-client-libraries"
  - "https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents"
keywords:
  - "export"
  - "workbench"
  - "pipeline"
  - "exports"
  - "documents"
  - "document"
  - "ai"
  - "warehouse"
---

# Export to Workbench pipeline

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Exports documents from Document AI Warehouse to Workbench.

## Extended Definition

Exports documents from Document AI Warehouse to Workbench.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs](https://docs.cloud.google.com/document-ai/docs)
- [https://docs.cloud.google.com/document-ai/docs/process-documents-client-libraries](https://docs.cloud.google.com/document-ai/docs/process-documents-client-libraries)
- [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents)

## Supporting Pages

### Document AI documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs](https://docs.cloud.google.com/document-ai/docs)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Document AI Workbench Custom Training Training and tutorials Document AI Warehouse In this lab, you will learn how to ingest, process, and search documents using the Document AI Warehouse user interface.
- Get started with Google Cloud Tutorial Set up the Document AI API Tutorial Process documents using document OCR Tutorial Process documents by using client libraries Tutorial All How-to Guides Related Document AI Warehouse find in page Reference Full processor and detail list Fields detected Supported languages Limits, file types, and versions supported Technical Client Libraries Technical APIs: REST or RPC Technical Workflows Connector Technical Sample processor output info Resources Document AI SLA Pricing Error messages Release notes Quotas and limits Support Related products Stack Overflow - Document AI Google Developer Program forums - Document AI Related resources Training and tutorials Use cases Code samples Explore self-paced training, use cases, reference architectures, and code samples with examples of how to use and connect Google Cloud services.
- Document AI AutoML Vision AutoML Natural Language Training Training and tutorials Automate Data Capture at Scale with Document AI Earn a skill badge by completing the Automate Data Capture at Scale with Document AI quest, where you learn how to create a document processing pipeline that will automatically process documents.
- Document AI Training Training and tutorials Building a document understanding pipeline with Google Cloud Document understanding is the practice of using AI and machine learning to extract data and insights from text and paper sources such as emails, PDFs, scanned documents, and more.

### "Quickstart: Process documents by using client libraries \_|\_ Document AI\

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-client-libraries](https://docs.cloud.google.com/document-ai/docs/process-documents-client-libraries)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Process documents by using client libraries This page shows you how to get started with the Document AI API in your favorite programming language.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' // const processorId = 'YOUR PROCESSOR ID'; // Create processor in Cloud Console // const filePath = '/path/to/local/pdf'; const { DocumentProcessorServiceClient } = require ( ' @google-cloud/documentai ' ). v1 ; // Instantiates a client // apiEndpoint regions available: eu-documentai.googleapis.com, us-documentai.googleapis.com (Required if using eu based processor) // const client = new DocumentProcessorServiceClient({apiEndpoint: 'eu-documentai.googleapis.com'}); const client = new DocumentProcessorServiceClient (); async function quickstart () { // The full resource name of the processor, e.g.: // projects/project-id/locations/location/processor/processor-id // You must create new processors in the Cloud Console first const name = projects/ ${ projectId } /locations/ ${ location } /processors/ ${ processorId } ; // Read the file into memory. const fs = require ( 'fs' ). promises ; const imageFile = await fs . readFile ( filePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const request = { name , rawDocument : { content : encodedImage , mimeType : 'application/pdf' , }, }; // Recognizes text entities in the PDF document const [ result ] = await client . processDocument ( request ); const { document } = result ; // Get all of the document text as one big string const { text } = document ; // Extract shards from the text field const getText = textAnchor = > { if ( ! textAnchor . textSegments textAnchor . textSegments . length === 0 ) { return '' ; } // First shard in document doesn't have startIndex property const startIndex = textAnchor . textSegments [ 0 ]. startIndex 0 ; const endIndex = textAnchor . textSegments [ 0 ]. endIndex ; return text . substring ( startIndex , endIndex ); }; // Read the text recognition output from the processor console . log ( 'The document contains the following paragraphs:' ); const [ page1 ] = document . pages ; const { paragraphs } = page1 ; for ( const paragraph of paragraphs ) { const paragraphText = getText ( paragraph . layout . textAnchor ); console . log ( Paragraph text:\n ${ paragraphText } ); } } PHP For more information, see the Document AI PHP API reference documentation .
- For more information, see Set up authentication for a local development environment . require "google/cloud/document ai/v1" Document AI quickstart @param project id [String] Your Google Cloud project (e.g. "my-project") @param location id [String] Your Processor Location (e.g. "us") @param processor id [String] Your Processor ID (e.g. "a14dae8f043b60bd") @param file path [String] Path to Local File (e.g. "invoice.pdf") @param mime type [String] Refer to https://cloud.google.com/document-ai/docs/file-types (e.g. "application/pdf") def quickstart project id :, location id :, processor id :, file path :, mime type : Create the Document AI client. client = :: Google :: Cloud :: DocumentAI :: V1 :: DocumentProcessorService :: Client . new do config config . endpoint = " #{ location id } -documentai.googleapis.com" end Build the resource name from the project. name = client . processor path ( project : project id , location : location id , processor : processor id ) Read the bytes into memory content = File . binread file path Create request request = Google :: Cloud :: DocumentAI :: V1 :: ProcessRequest . new ( skip human review : true , name : name , raw document : { content : content , mime type : mime type } ) Process document response = client . process document request Handle response puts response . document . text end Congratulations!
- For more information about BOMs, see The Google Cloud Platform Libraries BOM . <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.79.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-document-ai</artifactId> </dependency> </dependencies> If you are using Gradle , add the following to your dependencies: implementation 'com.google.cloud:google-cloud-document-ai:2.92.0' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-document-ai" % "2.92.0" If you're using Visual Studio Code or IntelliJ, you can add client libraries to your project using the following IDE plugins: Cloud Code for VS Code Cloud Code for IntelliJ The plugins provide additional functionality, such as key management for service accounts.

### Search documents \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents)
- Source ID: `site-iam-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. const projectNumber = 'YOUR PROJECT NUMBER'; const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' const userId = 'user:xxx@example.com'; // Format is "user:xxx@example.com" const documentQueryText = 'YOUR DOCUMENT QUERY' / // Import from google cloud const { DocumentServiceClient } = require ( ' @google-cloud/contentwarehouse ' ). v1 ; const apiEndpoint = location === 'us' ? 'contentwarehouse.googleapis.com' : ${ location } -contentwarehouse.googleapis.com ; // Create service client const serviceClient = new DocumentServiceClient ({ apiEndpoint : apiEndpoint }); // Get Document Schema async function searchDocuments () { // Initialize request argument(s) const searchRequest = { // The full resource name of the location, e.g.: // projects/{project number}/locations/{location} parent : projects/ ${ projectNumber } /locations/ ${ location } , // Document Text Query documentQuery : { query : documentQueryText , // File Type Filter fileTypeFilter : { fileType : ' DOCUMENT ' , }, }, // Histogram Query histogramQueries : [ { histogramQuery : 'count("DocumentSchemaId")' , }, ], requestMetadata : { userInfo : { id : userId }}, }; // Make Request const response = serviceClient . searchDocuments ( searchRequest ); // Print out response response . then ( result = > console . log ( Document Found: ${ JSON . stringify ( result ) } ), error = > console . log ( ${ error } ) ); } Python For more information, see the Document AI Warehouse Python API reference documentation .
- String documentQuery = "your-document-query" ; String userId = "your-user-id" ; // Format is user:<user-id> searchDocuments ( projectId , location , documentQuery , userId ); } // Searches all documents for a given Document Query public static void searchDocuments ( String projectId , String location , String documentQuery , String userId ) throws IOException , InterruptedException , ExecutionException , TimeoutException { String projectNumber = getProjectNumber ( projectId ); String endpoint = "contentwarehouse.googleapis.com:443" ; if ( ! "us" . equals ( location )) { endpoint = String . format ( "%s-%s" , location , endpoint ); } DocumentServiceSettings documentServiceSettings = DocumentServiceSettings . newBuilder (). setEndpoint ( endpoint ) . build (); / Create the Document Service Client Initialize client that will be used to send requests.
- For more information, see Set up authentication for a local development environment . from google.cloud import contentwarehouse TODO(developer): Uncomment these variables before running the sample. project number = 'YOUR PROJECT NUMBER' location = 'YOUR PROJECT LOCATION' # Format is 'us' or 'eu' document query text = 'YOUR DOCUMENT QUERY' user id = 'user:YOUR SERVICE ACCOUNT ID' # Format is "user:xxxx@example.com" def search documents sample ( project number : str , location : str , document query text : str , user id : str ) - > None : Create a client client = contentwarehouse .
- DocumentServiceClient () The full resource name of the location, e.g.: projects/{project number}/locations/{location} parent = client . common location path ( project = project number , location = location ) File Type Filter Options: DOCUMENT, FOLDER file type filter = contentwarehouse .

