---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.078Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Invoice processing"
feature_slug: "invoice-processing"
latest_feature_date: "2020-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
  - "https://docs.cloud.google.com/document-ai/docs/pretrained-overview"
  - "https://docs.cloud.google.com/document-ai/docs/label-documents"
  - "https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient"
keywords:
  - "invoice"
  - "processing"
  - "lets"
  - "document"
  - "ai"
  - "parse"
  - "invoices"
  - "as"
---

# Invoice processing

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Invoice processing lets Document AI parse invoices as a restricted feature.

## Extended Definition

Invoice processing lets Document AI parse invoices as a restricted feature.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- [https://docs.cloud.google.com/document-ai/docs/pretrained-overview](https://docs.cloud.google.com/document-ai/docs/pretrained-overview)
- [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)
- [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient)

## Supporting Pages

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' // const processorId = 'YOUR PROCESSOR ID'; // Create processor in Cloud Console // const filePath = '/path/to/local/pdf'; const { DocumentProcessorServiceClient } = require ( ' @google-cloud/documentai ' ). v1beta3 ; // Instantiates a client const client = new DocumentProcessorServiceClient (); async function processDocument () { // The full resource name of the processor, e.g.: // projects/project-id/locations/location/processor/processor-id // You must create new processors in the Cloud Console first const name = projects/ ${ projectId } /locations/ ${ location } /processors/ ${ processorId } ; // Read the file into memory. const fs = require ( 'fs' ). promises ; const imageFile = await fs . readFile ( filePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const request = { name , rawDocument : { content : encodedImage , mimeType : 'application/pdf' , }, }; // Recognizes text entities in the PDF document const [ result ] = await client . processDocument ( request ); console . log ( 'Document processing complete.' ); // Read fields specificly from the specalized US drivers license processor: // https://cloud.google.com/document-ai/docs/processors-list#processor us-driver-license-parser // retriving data from other specalized processors follow a similar pattern. // For a complete list of processors see: // https://cloud.google.com/document-ai/docs/processors-list // // OCR and other data is also present in the quality processor's response. // Please see the OCR and other samples for how to parse other data in the // response. const { document } = result ; console . log ( Found ${ document . entities . length } subdocuments: ); for ( const entity of document . entities ) { const conf = entity . confidence 100 ; const pagesRange = pageRefsToRange ( entity . pageAnchor . pageRefs ); if ( entity . type !== '' ) { console . log ( ${ conf . toFixed ( 2 ) } % confident that ${ pagesRange } a " ${ entity . type } " subdocument. ); } else { console . log ( ${ conf . toFixed ( 2 ) } % confident that ${ pagesRange } a subdocument. ); } } } // Converts a page ref to a string describing the page or page range. const pageRefsToRange = pageRefs = > { if ( pageRefs . length === 1 ) { const num = parseInt ( pageRefs [ 0 ]. page ) + 1 1 ; return page ${ num } is ; } else { const start = parseInt ( pageRefs [ 0 ]. page ) + 1 1 ; const end = parseInt ( pageRefs [ 1 ]. page ) + 1 ; return pages ${ start } to ${ end } are ; } }; Python For more information, see the Document AI Python API reference documentation .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' // const processorId = 'YOUR PROCESSOR ID'; // Create processor in Cloud Console // const filePath = '/path/to/local/pdf'; const { DocumentProcessorServiceClient } = require ( ' @google-cloud/documentai ' ). v1beta3 ; // Instantiates a client const client = new DocumentProcessorServiceClient (); async function processDocument () { // The full resource name of the processor, e.g.: // projects/project-id/locations/location/processor/processor-id // You must create new processors in the Cloud Console first const name = projects/ ${ projectId } /locations/ ${ location } /processors/ ${ processorId } ; // Read the file into memory. const fs = require ( 'fs' ). promises ; const imageFile = await fs . readFile ( filePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const request = { name , rawDocument : { content : encodedImage , mimeType : 'application/pdf' , }, }; // Recognizes text entities in the PDF document const [ result ] = await client . processDocument ( request ); console . log ( 'Document processing complete.' ); // Read fields specificly from the specalized US drivers license processor: // https://cloud.google.com/document-ai/docs/processors-list#processor us-driver-license-parser // retriving data from other specalized processors follow a similar pattern. // For a complete list of processors see: // https://cloud.google.com/document-ai/docs/processors-list // // OCR and other data is also present in the quality processor's response. // Please see the OCR and other samples for how to parse other data in the // response. const { document } = result ; for ( const entity of document . entities ) { // Fields detected.
- ProcessRequest request = ProcessRequest . newBuilder (). setName ( name ). setRawDocument ( document ). build (); // Recognizes text entities in the PDF document ProcessResponse result = client . processDocument ( request ); Document documentResponse = result . getDocument (); System . out . println ( "Document processing complete." ); // Read fields specificly from the specalized US drivers license processor: // https://cloud.google.com/document-ai/docs/processors-list#processor us-driver-license-parser // retriving data from other specalized processors follow a similar pattern. // For a complete list of processors see: // https://cloud.google.com/document-ai/docs/processors-list // // OCR and other data is also present in the quality processor's response. // Please see the OCR and other samples for how to parse other data in the // response. for ( Document .
- Here's a sample invoice: Here's the full document object as returned by the Invoice parser : Download JSON Here are some of the important parts of the document object: Detected fields : Entities contains the fields that the processor was able to detect, for example, the invoice date : { "entities" : [ { "textAnchor" : { "textSegments" : [ { "startIndex" : "14" , "endIndex" : "24" } ], "content" : "2020/01/01" }, "type" : "invoice date" , "confidence" : 0.9938466 , "pageAnchor" : { ... }, "id" : "2" , "normalizedValue" : { "text" : "2020-01-01" , "dateValue" : { "year" : 2020 , "month" : 1 , "day" : 1 } } } ] } For certain fields, the processor also normalizes the value.

### Pretrained overview \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/pretrained-overview](https://docs.cloud.google.com/document-ai/docs/pretrained-overview)
- Source ID: `site-docs-root-2`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Identity document proofing parser Identity document proofing parser predicts the validity of ID documents using multiple signals. fraud signals is identity document detection: Predicts whether an image contains a recognized identity document. fraud signals suspicious words detection: Predicts whether words are present that aren't typical on IDs. fraud signals image manipulation detection: Predicts whether the image was altered or tampered with an image editing tool. fraud signals online duplicate detection: Predicts whether the image can be found online (US only).
- Home Documentation AI and ML Document AI Guides Send feedback Pretrained overview Stay organized with collections Save and categorize content based on your preferences.
- Document AI offers multiple products to process documents for information for different use cases.
- Summarizer also lets you specify the output length of the summary as comprehensive, medium, or brief.

### Label documents \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)
- Source ID: `site-docs-root-2`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here are some sample labeling instructions: Bank Statement Parser Utility Parser Pay Slip Parser Expense Parser Invoice Parser Train annotators : make sure that annotators understand and can follow the guidelines without any systematic errors.
- Dataset metadata, such as processor schema, document assignments (training/test/unassigned), and document labeling status (labeled, unlabeled, auto-labeled) are not exported.
- Home Documentation AI and ML Document AI Guides Send feedback Label documents Stay organized with collections Save and categorize content based on your preferences.
- Resync dataset Resync keeps your dataset's Cloud Storage folder consistent with Document AI's internal index of metadata.

### "Class DocumentProcessorServiceAsyncClient (3.14.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import documentai v1 async def sample set default processor version(): Create a client client = documentai v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import documentai v1 async def sample evaluate processor version(): Create a client client = documentai v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import documentai v1 async def sample undeploy processor version(): Create a client client = documentai v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import documentai v1 async def sample delete processor version(): Create a client client = documentai v1 .

