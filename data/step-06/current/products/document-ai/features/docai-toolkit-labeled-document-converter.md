---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.976Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "DocAI Toolkit labeled document converter"
feature_slug: "docai-toolkit-labeled-document-converter"
latest_feature_date: "2023-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/label-documents"
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
keywords:
  - "docai"
  - "toolkit"
  - "labeled"
  - "document"
  - "converter"
  - "the"
  - "new"
  - "includes"
---

# DocAI Toolkit labeled document converter

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

The new DocAI Toolkit includes a labeled document converter.

## Extended Definition

The new DocAI Toolkit includes a labeled document converter.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)
- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)

## Supporting Pages

### Label documents \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)
- Source ID: `site-docs-root-2`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Initial reviews : The first few (10 or so) documents labeled for a use case by a new labeler should be reviewed before large numbers of documents are labeled to prevent a large number of mistakes that need to be corrected.
- Labeling options Here are your options for labeling documents: Manual : manually label your documents in the Google Cloud console Auto-labeling : use an existing processor version to generate labels Import pre-labeled documents : save time if you already have labeled documents Manually label in the Google Cloud console In the Train tab, select a document to open the labeling tool.
- Use the import toolkit to convert existing labels from another system, for example, CSV format label to JSON documents.
- You can't train or up-train on auto-labeled documents, or use them in the test set, without marking them as labeled.

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Convert document objects to Vision AI API format The Document AI Toolbox includes a tool that converts the Document AI API Document format to the Vision AI AnnotateFileResponse format, enabling users to compare the responses between the document OCR processor and Vision AI API.
- Known discrepancies between the Vision AI API response and Document AI API response and converter: The Vision AI API response populates only vertices for image requests, and populates only normalized vertices for PDF requests.
- To make sure the Document AI response and the converter get symbols fields populated, set the enable symbol feature as detailed.
- The Document AI API response and the converter populates detected break in the word and the last symbol of the word.

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Convert document objects to Vision AI API format The Document AI Toolbox includes a tool that converts the Document AI API Document format to the Vision AI AnnotateFileResponse format, enabling users to compare the responses between the document OCR processor and Vision AI API.
- Known discrepancies between the Vision AI API response and Document AI API response and converter: The Vision AI API response populates only vertices for image requests, and populates only normalized vertices for PDF requests.
- To make sure the Document AI response and the converter get symbols fields populated, set the enable symbol feature as detailed.
- The Document AI API response and the converter populates detected break in the word and the last symbol of the word.

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' // const processorId = 'YOUR PROCESSOR ID'; // Create processor in Cloud Console // const filePath = '/path/to/local/pdf'; const { DocumentProcessorServiceClient } = require ( ' @google-cloud/documentai ' ). v1beta3 ; // Instantiates a client const client = new DocumentProcessorServiceClient (); async function processDocument () { // The full resource name of the processor, e.g.: // projects/project-id/locations/location/processor/processor-id // You must create new processors in the Cloud Console first const name = projects/ ${ projectId } /locations/ ${ location } /processors/ ${ processorId } ; // Read the file into memory. const fs = require ( 'fs' ). promises ; const imageFile = await fs . readFile ( filePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const request = { name , rawDocument : { content : encodedImage , mimeType : 'application/pdf' , }, }; // Recognizes text entities in the PDF document const [ result ] = await client . processDocument ( request ); console . log ( 'Document processing complete.' ); // Read the text recognition output from the processor // For a full list of Document object attributes, // please reference this page: https://googleapis.dev/nodejs/documentai/latest/index.html const { document } = result ; const { text } = document ; // Read the text recognition output from the processor console . log ( Full document text: ${ JSON . stringify ( text ) } ); console . log ( There are ${ document . pages . length } page(s) in this document. ); for ( const page of document . pages ) { console . log ( Page ${ page . pageNumber } ); printPageDimensions ( page . dimension ); printDetectedLanguages ( page . detectedLanguages ); printParagraphs ( page . paragraphs , text ); printBlocks ( page . blocks , text ); printLines ( page . lines , text ); printTokens ( page . tokens , text ); } } const printPageDimensions = dimension = > { console . log ( Width: ${ dimension . width } ); console . log ( Height: ${ dimension . height } ); }; const printDetectedLanguages = detectedLanguages = > { console . log ( ' Detected languages:' ); for ( const lang of detectedLanguages ) { const code = lang . languageCode ; const confPercent = lang . confidence 100 ; console . log ( ${ code } ( ${ confPercent . toFixed ( 2 ) } % confidence) ); } }; const printParagraphs = ( paragraphs , text ) = > { console . log ( ${ paragraphs . length } paragraphs detected: ); const firstParagraphText = getText ( paragraphs [ 0 ]. layout . textAnchor , text ); console . log ( First paragraph text: ${ JSON . stringify ( firstParagraphText ) } ); const lastParagraphText = getText ( paragraphs [ paragraphs . length - 1 ]. layout . textAnchor , text ); console . log ( Last paragraph text: ${ JSON . stringify ( lastParagraphText ) } ); }; const printBlocks = ( blocks , text ) = > { console . log ( ${ blocks . length } blocks detected: ); const firstBlockText = getText ( blocks [ 0 ]. layout . textAnchor , text ); console . log ( First block text: ${ JSON . stringify ( firstBlockText ) } ); const lastBlockText = getText ( blocks [ blocks . length - 1 ]. layout . textAnchor , text ); console . log ( Last block text: ${ JSON . stringify ( lastBlockText ) } ); }; const printLines = ( lines , text ) = > { console . log ( ${ lines . length } lines detected: ); const firstLineText = getText ( lines [ 0 ]. layout . textAnchor , text ); console . log ( First line text: ${ JSON . stringify ( firstLineText ) } ); const lastLineText = getText ( lines [ lines . length - 1 ]. layout . textAnchor , text ); console . log ( Last line text: ${ JSON . stringify ( lastLineText ) } ); }; const printTokens = ( tokens , text ) = > { console . log ( ${ tokens . length } tokens detected: ); const firstTokenText = getText ( tokens [ 0 ]. layout . textAnchor , text ); console . log ( First token text: ${ JSON . stringify ( firstTokenText ) } ); const firstTokenBreakType = tokens [ 0 ]. detectedBreak . type ; console . log ( First token break type: ${ firstTokenBreakType } ); const lastTokenText = getText ( tokens [ tokens . length - 1 ]. layout . textAnchor , text ); console . log ( Last token text: ${ JSON . stringify ( lastTokenText ) } ); const lastTokenBreakType = tokens [ tokens . length - 1 ]. detectedBreak . type ; console . log ( Last token break type: ${ lastTokenBreakType } ); }; // Extract shards from the text field const getText = ( textAnchor , text ) = > { if ( ! textAnchor . textSegments textAnchor . textSegments . length === 0 ) { return '' ; } // First shard in document doesn't have startIndex property const startIndex = textAnchor . textSegments [ 0 ]. startIndex 0 ; const endIndex = textAnchor . textSegments [ 0 ]. endIndex ; return text . substring ( startIndex , endIndex ); }; Python For more information, see the Document AI Python API reference documentation .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' // const processorId = 'YOUR PROCESSOR ID'; // Create processor in Cloud Console // const filePath = '/path/to/local/pdf'; const { DocumentProcessorServiceClient } = require ( ' @google-cloud/documentai ' ). v1beta3 ; // Instantiates a client const client = new DocumentProcessorServiceClient (); async function processDocument () { // The full resource name of the processor, e.g.: // projects/project-id/locations/location/processor/processor-id // You must create new processors in the Cloud Console first const name = projects/ ${ projectId } /locations/ ${ location } /processors/ ${ processorId } ; // Read the file into memory. const fs = require ( 'fs' ). promises ; const imageFile = await fs . readFile ( filePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const request = { name , rawDocument : { content : encodedImage , mimeType : 'application/pdf' , }, }; // Recognizes text entities in the PDF document const [ result ] = await client . processDocument ( request ); console . log ( 'Document processing complete.' ); // Read fields specificly from the specalized US drivers license processor: // https://cloud.google.com/document-ai/docs/processors-list#processor us-driver-license-parser // retriving data from other specalized processors follow a similar pattern. // For a complete list of processors see: // https://cloud.google.com/document-ai/docs/processors-list // // OCR and other data is also present in the quality processor's response. // Please see the OCR and other samples for how to parse other data in the // response. const { document } = result ; console . log ( Found ${ document . entities . length } subdocuments: ); for ( const entity of document . entities ) { const conf = entity . confidence 100 ; const pagesRange = pageRefsToRange ( entity . pageAnchor . pageRefs ); if ( entity . type !== '' ) { console . log ( ${ conf . toFixed ( 2 ) } % confident that ${ pagesRange } a " ${ entity . type } " subdocument. ); } else { console . log ( ${ conf . toFixed ( 2 ) } % confident that ${ pagesRange } a subdocument. ); } } } // Converts a page ref to a string describing the page or page range. const pageRefsToRange = pageRefs = > { if ( pageRefs . length === 1 ) { const num = parseInt ( pageRefs [ 0 ]. page ) + 1 1 ; return page ${ num } is ; } else { const start = parseInt ( pageRefs [ 0 ]. page ) + 1 1 ; const end = parseInt ( pageRefs [ 1 ]. page ) + 1 ; return pages ${ start } to ${ end } are ; } }; Python For more information, see the Document AI Python API reference documentation .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' // const processorId = 'YOUR PROCESSOR ID'; // Create processor in Cloud Console // const filePath = '/path/to/local/pdf'; const { DocumentProcessorServiceClient } = require ( ' @google-cloud/documentai ' ). v1beta3 ; // Instantiates a client const client = new DocumentProcessorServiceClient (); async function processDocument () { // The full resource name of the processor, e.g.: // projects/project-id/locations/location/processor/processor-id // You must create new processors in the Cloud Console first const name = projects/ ${ projectId } /locations/ ${ location } /processors/ ${ processorId } ; // Read the file into memory. const fs = require ( 'fs' ). promises ; const imageFile = await fs . readFile ( filePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const request = { name , rawDocument : { content : encodedImage , mimeType : 'application/pdf' , }, }; // Recognizes text entities in the PDF document const [ result ] = await client . processDocument ( request ); console . log ( 'Document processing complete.' ); // Read fields specificly from the specalized US drivers license processor: // https://cloud.google.com/document-ai/docs/processors-list#processor us-driver-license-parser // retriving data from other specalized processors follow a similar pattern. // For a complete list of processors see: // https://cloud.google.com/document-ai/docs/processors-list // // OCR and other data is also present in the quality processor's response. // Please see the OCR and other samples for how to parse other data in the // response. const { document } = result ; for ( const entity of document . entities ) { // Fields detected.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' // const processorId = 'YOUR PROCESSOR ID'; // Create processor in Cloud Console // const filePath = '/path/to/local/pdf'; const { DocumentProcessorServiceClient } = require ( ' @google-cloud/documentai ' ). v1beta3 ; // Instantiates a client const client = new DocumentProcessorServiceClient (); async function processDocument () { // The full resource name of the processor, e.g.: // projects/project-id/locations/location/processor/processor-id // You must create new processors in the Cloud Console first const name = projects/ ${ projectId } /locations/ ${ location } /processors/ ${ processorId } ; // Read the file into memory. const fs = require ( 'fs' ). promises ; const imageFile = await fs . readFile ( filePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const request = { name , rawDocument : { content : encodedImage , mimeType : 'application/pdf' , }, }; // Recognizes text entities in the PDF document const [ result ] = await client . processDocument ( request ); console . log ( 'Document processing complete.' ); // Read the table and form fields output from the processor // The form processor also contains OCR data.

