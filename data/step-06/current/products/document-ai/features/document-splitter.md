---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.071Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Document splitter"
feature_slug: "document-splitter"
latest_feature_date: "2020-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/custom-splitter"
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr"
keywords:
  - "document"
  - "splitter"
  - "separates"
  - "into"
  - "logical"
  - "subdocuments"
---

# Document splitter

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Document splitter separates a document into logical subdocuments.

## Extended Definition

Document splitter separates a document into logical subdocuments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)
- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)

## Supporting Pages

### Custom splitter \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Custom splitter Custom splitter is designed to be used to split composite documents (documents made up of multiple classes) into a number of single class documents by identifying each logical document.
- You typically would use a custom splitter on files that are composed of different types of logical documents, then use the class identification of each to pass the documents to an appropriate extraction processor to extract the entities.
- Repeat the previous steps with the following paths and document labels: Bucket path Document label cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/1040 form 1040 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/w2 form w2 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/w9 form w9 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/paystub paystub The console should look like this when complete: Select Import .
- Enable the APIs Required roles To get the permissions that you need to create a custom splitter, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' // const processorId = 'YOUR PROCESSOR ID'; // Create processor in Cloud Console // const filePath = '/path/to/local/pdf'; const { DocumentProcessorServiceClient } = require ( ' @google-cloud/documentai ' ). v1beta3 ; // Instantiates a client const client = new DocumentProcessorServiceClient (); async function processDocument () { // The full resource name of the processor, e.g.: // projects/project-id/locations/location/processor/processor-id // You must create new processors in the Cloud Console first const name = projects/ ${ projectId } /locations/ ${ location } /processors/ ${ processorId } ; // Read the file into memory. const fs = require ( 'fs' ). promises ; const imageFile = await fs . readFile ( filePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const request = { name , rawDocument : { content : encodedImage , mimeType : 'application/pdf' , }, }; // Recognizes text entities in the PDF document const [ result ] = await client . processDocument ( request ); console . log ( 'Document processing complete.' ); // Read fields specificly from the specalized US drivers license processor: // https://cloud.google.com/document-ai/docs/processors-list#processor us-driver-license-parser // retriving data from other specalized processors follow a similar pattern. // For a complete list of processors see: // https://cloud.google.com/document-ai/docs/processors-list // // OCR and other data is also present in the quality processor's response. // Please see the OCR and other samples for how to parse other data in the // response. const { document } = result ; console . log ( Found ${ document . entities . length } subdocuments: ); for ( const entity of document . entities ) { const conf = entity . confidence 100 ; const pagesRange = pageRefsToRange ( entity . pageAnchor . pageRefs ); if ( entity . type !== '' ) { console . log ( ${ conf . toFixed ( 2 ) } % confident that ${ pagesRange } a " ${ entity . type } " subdocument. ); } else { console . log ( ${ conf . toFixed ( 2 ) } % confident that ${ pagesRange } a subdocument. ); } } } // Converts a page ref to a string describing the page or page range. const pageRefsToRange = pageRefs = > { if ( pageRefs . length === 1 ) { const num = parseInt ( pageRefs [ 0 ]. page ) + 1 1 ; return page ${ num } is ; } else { const start = parseInt ( pageRefs [ 0 ]. page ) + 1 1 ; const end = parseInt ( pageRefs [ 1 ]. page ) + 1 ; return pages ${ start } to ${ end } are ; } }; Python For more information, see the Document AI Python API reference documentation .
- For more information, see Set up authentication for a local development environment . from typing import Optional , Sequence from google.api core.client options import ClientOptions from google.cloud import documentai TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR PROCESSOR LOCATION" # Format is "us" or "eu" processor id = "YOUR PROCESSOR ID" # Create processor before running sample processor version = "rc" # Refer to https://cloud.google.com/document-ai/docs/manage-processor-versions for more information file path = "/path/to/local/pdf" mime type = "application/pdf" # Refer to https://cloud.google.com/document-ai/docs/file-types for supported file types def process document splitter sample ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , ) - > None : Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type ) Read the splitter output from a document splitter/classifier processor: e.g. https://cloud.google.com/document-ai/docs/processors-list#processor procurement-document-splitter This processor only provides text for the document and information on how to split the document on logical boundaries.
- ProcessRequest request = ProcessRequest . newBuilder (). setName ( name ). setRawDocument ( document ). build (); // Recognizes text entities in the PDF document ProcessResponse result = client . processDocument ( request ); Document documentResponse = result . getDocument (); System . out . println ( "Document processing complete." ); // Read the splitter output from the document splitter processor: // https://cloud.google.com/document-ai/docs/processors-list#processor doc-splitter // This processor only provides text for the document and information on how // to split the document on logical boundaries.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' // const processorId = 'YOUR PROCESSOR ID'; // Create processor in Cloud Console // const filePath = '/path/to/local/pdf'; const { DocumentProcessorServiceClient } = require ( ' @google-cloud/documentai ' ). v1beta3 ; // Instantiates a client const client = new DocumentProcessorServiceClient (); async function processDocument () { // The full resource name of the processor, e.g.: // projects/project-id/locations/location/processor/processor-id // You must create new processors in the Cloud Console first const name = projects/ ${ projectId } /locations/ ${ location } /processors/ ${ processorId } ; // Read the file into memory. const fs = require ( 'fs' ). promises ; const imageFile = await fs . readFile ( filePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const request = { name , rawDocument : { content : encodedImage , mimeType : 'application/pdf' , }, }; // Recognizes text entities in the PDF document const [ result ] = await client . processDocument ( request ); console . log ( 'Document processing complete.' ); // Read the text recognition output from the processor // For a full list of Document object attributes, // please reference this page: https://googleapis.dev/nodejs/documentai/latest/index.html const { document } = result ; const { text } = document ; // Read the text recognition output from the processor console . log ( Full document text: ${ JSON . stringify ( text ) } ); console . log ( There are ${ document . pages . length } page(s) in this document. ); for ( const page of document . pages ) { console . log ( Page ${ page . pageNumber } ); printPageDimensions ( page . dimension ); printDetectedLanguages ( page . detectedLanguages ); printParagraphs ( page . paragraphs , text ); printBlocks ( page . blocks , text ); printLines ( page . lines , text ); printTokens ( page . tokens , text ); } } const printPageDimensions = dimension = > { console . log ( Width: ${ dimension . width } ); console . log ( Height: ${ dimension . height } ); }; const printDetectedLanguages = detectedLanguages = > { console . log ( ' Detected languages:' ); for ( const lang of detectedLanguages ) { const code = lang . languageCode ; const confPercent = lang . confidence 100 ; console . log ( ${ code } ( ${ confPercent . toFixed ( 2 ) } % confidence) ); } }; const printParagraphs = ( paragraphs , text ) = > { console . log ( ${ paragraphs . length } paragraphs detected: ); const firstParagraphText = getText ( paragraphs [ 0 ]. layout . textAnchor , text ); console . log ( First paragraph text: ${ JSON . stringify ( firstParagraphText ) } ); const lastParagraphText = getText ( paragraphs [ paragraphs . length - 1 ]. layout . textAnchor , text ); console . log ( Last paragraph text: ${ JSON . stringify ( lastParagraphText ) } ); }; const printBlocks = ( blocks , text ) = > { console . log ( ${ blocks . length } blocks detected: ); const firstBlockText = getText ( blocks [ 0 ]. layout . textAnchor , text ); console . log ( First block text: ${ JSON . stringify ( firstBlockText ) } ); const lastBlockText = getText ( blocks [ blocks . length - 1 ]. layout . textAnchor , text ); console . log ( Last block text: ${ JSON . stringify ( lastBlockText ) } ); }; const printLines = ( lines , text ) = > { console . log ( ${ lines . length } lines detected: ); const firstLineText = getText ( lines [ 0 ]. layout . textAnchor , text ); console . log ( First line text: ${ JSON . stringify ( firstLineText ) } ); const lastLineText = getText ( lines [ lines . length - 1 ]. layout . textAnchor , text ); console . log ( Last line text: ${ JSON . stringify ( lastLineText ) } ); }; const printTokens = ( tokens , text ) = > { console . log ( ${ tokens . length } tokens detected: ); const firstTokenText = getText ( tokens [ 0 ]. layout . textAnchor , text ); console . log ( First token text: ${ JSON . stringify ( firstTokenText ) } ); const firstTokenBreakType = tokens [ 0 ]. detectedBreak . type ; console . log ( First token break type: ${ firstTokenBreakType } ); const lastTokenText = getText ( tokens [ tokens . length - 1 ]. layout . textAnchor , text ); console . log ( Last token text: ${ JSON . stringify ( lastTokenText ) } ); const lastTokenBreakType = tokens [ tokens . length - 1 ]. detectedBreak . type ; console . log ( Last token break type: ${ lastTokenBreakType } ); }; // Extract shards from the text field const getText = ( textAnchor , text ) = > { if ( ! textAnchor . textSegments textAnchor . textSegments . length === 0 ) { return '' ; } // First shard in document doesn't have startIndex property const startIndex = textAnchor . textSegments [ 0 ]. startIndex 0 ; const endIndex = textAnchor . textSegments [ 0 ]. endIndex ; return text . substring ( startIndex , endIndex ); }; Python For more information, see the Document AI Python API reference documentation .

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "skipHumanReview": skipHumanReview , "rawDocument": { "mimeType": " MIME TYPE ", "content": " IMAGE CONTENT " }, "fieldMask": " FIELD MASK ", "processOptions": { "ocrConfig": { "enableNativePdfParsing": ENABLE NATIVE PDF PARSING , "enableImageQualityScores": ENABLE IMAGE QUALITY SCORES , "enableSymbol": ENABLE SYMBOL , "disableCharacterBoxesDetection": DISABLE CHARACTER BOXES DETECTION , "hints": { "languageHints": [ " LANGUAGE HINTS " ] }, "advancedOcrOptions": [" ADVANCED OCR OPTIONS "], "premiumFeatures": { "enableSelectionMarkDetection": ENABLE SELECTION MARK DETECTION , "computeStyleInfo": COMPUTE STYLE INFO , "enableMathOcr": ENABLE MATH OCR , } }, "individualPageSelector" { "pages": [ INDIVIDUAL PAGES ] } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- DocumentProcessorServiceClient ( client options = ClientOptions ( api endpoint = f " { location } -documentai.googleapis.com" ) ) The full resource name of the processor version, e.g.: projects/{project id}/locations/{location}/processors/{processor id}/processorVersions/{processor version id} You must create a processor before running this sample. name = client . processor version path ( project id , location , processor id , processor version ) Read the file into memory with open ( file path , "rb" ) as image : image content = image . read () Configure the process request request = documentai .
- Archiving: Digitize paper documents into machine-readable text to improve document accessibility.
- Separate documents into readable chunks with Layout Parser .

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- Source ID: `site-docs-root-2`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "skipHumanReview": skipHumanReview , "rawDocument": { "mimeType": " MIME TYPE ", "content": " IMAGE CONTENT " }, "fieldMask": " FIELD MASK ", "processOptions": { "ocrConfig": { "enableNativePdfParsing": ENABLE NATIVE PDF PARSING , "enableImageQualityScores": ENABLE IMAGE QUALITY SCORES , "enableSymbol": ENABLE SYMBOL , "disableCharacterBoxesDetection": DISABLE CHARACTER BOXES DETECTION , "hints": { "languageHints": [ " LANGUAGE HINTS " ] }, "advancedOcrOptions": [" ADVANCED OCR OPTIONS "], "premiumFeatures": { "enableSelectionMarkDetection": ENABLE SELECTION MARK DETECTION , "computeStyleInfo": COMPUTE STYLE INFO , "enableMathOcr": ENABLE MATH OCR , } }, "individualPageSelector" { "pages": [ INDIVIDUAL PAGES ] } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- DocumentProcessorServiceClient ( client options = ClientOptions ( api endpoint = f " { location } -documentai.googleapis.com" ) ) The full resource name of the processor version, e.g.: projects/{project id}/locations/{location}/processors/{processor id}/processorVersions/{processor version id} You must create a processor before running this sample. name = client . processor version path ( project id , location , processor id , processor version ) Read the file into memory with open ( file path , "rb" ) as image : image content = image . read () Configure the process request request = documentai .
- Archiving: Digitize paper documents into machine-readable text to improve document accessibility.
- Separate documents into readable chunks with Layout Parser .

