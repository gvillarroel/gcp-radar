---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.982Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "OCR native PDF parsing"
feature_slug: "ocr-native-pdf-parsing"
latest_feature_date: "2022-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
keywords:
  - "ocr"
  - "native"
  - "pdf"
  - "parsing"
  - "can"
  - "extract"
  - "embedded"
  - "text"
---

# OCR native PDF parsing

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

OCR can extract embedded text from digital PDFs and fall back to optical OCR for non-digital regions.

## Extended Definition

OCR can extract embedded text from digital PDFs and fall back to optical OCR for non-digital regions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)

## Supporting Pages

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- Example: text,entities,pages.pageNumber OCR configurations ENABLE NATIVE PDF PARSING : (Boolean) Extracts embedded text from PDFs, if available.
- Supported layout detection and extraction attributes: Printed text Handwriting Paragraph Block Line Word Symbol-level Page number Default Default Default Default Default Default Configurable Default Configurable Enterprise Document OCR features include the following: Extract embedded or native text from digital PDFs: This feature extracts text and symbols exactly as they appear in the source documents, even for rotated texts, extreme font sizes or styles, and partially hidden text.
- Input Enable by setting ProcessOptions.ocrConfig.enableNativePdfParsing to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "enableNativePdfParsing" : true } } } Character-in-the-box detection By default, Enterprise Document OCR has a detector enabled to improve text-extraction quality of characters that sit within a box.
- Built-in PDF parsing Extract embedded text from digital PDF files.

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- Source ID: `site-docs-root-2`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- Example: text,entities,pages.pageNumber OCR configurations ENABLE NATIVE PDF PARSING : (Boolean) Extracts embedded text from PDFs, if available.
- Supported layout detection and extraction attributes: Printed text Handwriting Paragraph Block Line Word Symbol-level Page number Default Default Default Default Default Default Configurable Default Configurable Enterprise Document OCR features include the following: Extract embedded or native text from digital PDFs: This feature extracts text and symbols exactly as they appear in the source documents, even for rotated texts, extreme font sizes or styles, and partially hidden text.
- Input Enable by setting ProcessOptions.ocrConfig.enableNativePdfParsing to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "enableNativePdfParsing" : true } } } Character-in-the-box detection By default, Enterprise Document OCR has a detector enabled to improve text-extraction quality of characters that sit within a box.
- Built-in PDF parsing Extract embedded text from digital PDF files.

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- OcrConfig ( enable native pdf parsing = True , enable image quality scores = True , enable symbol = True , OCR Add Ons https://cloud.google.com/document-ai/docs/ocr-add-ons premium features = documentai .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' // const processorId = 'YOUR PROCESSOR ID'; // Create processor in Cloud Console // const filePath = '/path/to/local/pdf'; const { DocumentProcessorServiceClient } = require ( ' @google-cloud/documentai ' ). v1beta3 ; // Instantiates a client const client = new DocumentProcessorServiceClient (); async function processDocument () { // The full resource name of the processor, e.g.: // projects/project-id/locations/location/processor/processor-id // You must create new processors in the Cloud Console first const name = projects/ ${ projectId } /locations/ ${ location } /processors/ ${ processorId } ; // Read the file into memory. const fs = require ( 'fs' ). promises ; const imageFile = await fs . readFile ( filePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const request = { name , rawDocument : { content : encodedImage , mimeType : 'application/pdf' , }, }; // Recognizes text entities in the PDF document const [ result ] = await client . processDocument ( request ); console . log ( 'Document processing complete.' ); // Read the text recognition output from the processor // For a full list of Document object attributes, // please reference this page: https://googleapis.dev/nodejs/documentai/latest/index.html const { document } = result ; const { text } = document ; // Read the text recognition output from the processor console . log ( Full document text: ${ JSON . stringify ( text ) } ); console . log ( There are ${ document . pages . length } page(s) in this document. ); for ( const page of document . pages ) { console . log ( Page ${ page . pageNumber } ); printPageDimensions ( page . dimension ); printDetectedLanguages ( page . detectedLanguages ); printParagraphs ( page . paragraphs , text ); printBlocks ( page . blocks , text ); printLines ( page . lines , text ); printTokens ( page . tokens , text ); } } const printPageDimensions = dimension = > { console . log ( Width: ${ dimension . width } ); console . log ( Height: ${ dimension . height } ); }; const printDetectedLanguages = detectedLanguages = > { console . log ( ' Detected languages:' ); for ( const lang of detectedLanguages ) { const code = lang . languageCode ; const confPercent = lang . confidence 100 ; console . log ( ${ code } ( ${ confPercent . toFixed ( 2 ) } % confidence) ); } }; const printParagraphs = ( paragraphs , text ) = > { console . log ( ${ paragraphs . length } paragraphs detected: ); const firstParagraphText = getText ( paragraphs [ 0 ]. layout . textAnchor , text ); console . log ( First paragraph text: ${ JSON . stringify ( firstParagraphText ) } ); const lastParagraphText = getText ( paragraphs [ paragraphs . length - 1 ]. layout . textAnchor , text ); console . log ( Last paragraph text: ${ JSON . stringify ( lastParagraphText ) } ); }; const printBlocks = ( blocks , text ) = > { console . log ( ${ blocks . length } blocks detected: ); const firstBlockText = getText ( blocks [ 0 ]. layout . textAnchor , text ); console . log ( First block text: ${ JSON . stringify ( firstBlockText ) } ); const lastBlockText = getText ( blocks [ blocks . length - 1 ]. layout . textAnchor , text ); console . log ( Last block text: ${ JSON . stringify ( lastBlockText ) } ); }; const printLines = ( lines , text ) = > { console . log ( ${ lines . length } lines detected: ); const firstLineText = getText ( lines [ 0 ]. layout . textAnchor , text ); console . log ( First line text: ${ JSON . stringify ( firstLineText ) } ); const lastLineText = getText ( lines [ lines . length - 1 ]. layout . textAnchor , text ); console . log ( Last line text: ${ JSON . stringify ( lastLineText ) } ); }; const printTokens = ( tokens , text ) = > { console . log ( ${ tokens . length } tokens detected: ); const firstTokenText = getText ( tokens [ 0 ]. layout . textAnchor , text ); console . log ( First token text: ${ JSON . stringify ( firstTokenText ) } ); const firstTokenBreakType = tokens [ 0 ]. detectedBreak . type ; console . log ( First token break type: ${ firstTokenBreakType } ); const lastTokenText = getText ( tokens [ tokens . length - 1 ]. layout . textAnchor , text ); console . log ( Last token text: ${ JSON . stringify ( lastTokenText ) } ); const lastTokenBreakType = tokens [ tokens . length - 1 ]. detectedBreak . type ; console . log ( Last token break type: ${ lastTokenBreakType } ); }; // Extract shards from the text field const getText = ( textAnchor , text ) = > { if ( ! textAnchor . textSegments textAnchor . textSegments . length === 0 ) { return '' ; } // First shard in document doesn't have startIndex property const startIndex = textAnchor . textSegments [ 0 ]. startIndex 0 ; const endIndex = textAnchor . textSegments [ 0 ]. endIndex ; return text . substring ( startIndex , endIndex ); }; Python For more information, see the Document AI Python API reference documentation .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' // const processorId = 'YOUR PROCESSOR ID'; // Create processor in Cloud Console // const filePath = '/path/to/local/pdf'; const { DocumentProcessorServiceClient } = require ( ' @google-cloud/documentai ' ). v1beta3 ; // Instantiates a client const client = new DocumentProcessorServiceClient (); async function processDocument () { // The full resource name of the processor, e.g.: // projects/project-id/locations/location/processor/processor-id // You must create new processors in the Cloud Console first const name = projects/ ${ projectId } /locations/ ${ location } /processors/ ${ processorId } ; // Read the file into memory. const fs = require ( 'fs' ). promises ; const imageFile = await fs . readFile ( filePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const request = { name , rawDocument : { content : encodedImage , mimeType : 'application/pdf' , }, }; // Recognizes text entities in the PDF document const [ result ] = await client . processDocument ( request ); console . log ( 'Document processing complete.' ); // Read fields specificly from the specalized US drivers license processor: // https://cloud.google.com/document-ai/docs/processors-list#processor us-driver-license-parser // retriving data from other specalized processors follow a similar pattern. // For a complete list of processors see: // https://cloud.google.com/document-ai/docs/processors-list // // OCR and other data is also present in the quality processor's response. // Please see the OCR and other samples for how to parse other data in the // response. const { document } = result ; console . log ( Found ${ document . entities . length } subdocuments: ); for ( const entity of document . entities ) { const conf = entity . confidence 100 ; const pagesRange = pageRefsToRange ( entity . pageAnchor . pageRefs ); if ( entity . type !== '' ) { console . log ( ${ conf . toFixed ( 2 ) } % confident that ${ pagesRange } a " ${ entity . type } " subdocument. ); } else { console . log ( ${ conf . toFixed ( 2 ) } % confident that ${ pagesRange } a subdocument. ); } } } // Converts a page ref to a string describing the page or page range. const pageRefsToRange = pageRefs = > { if ( pageRefs . length === 1 ) { const num = parseInt ( pageRefs [ 0 ]. page ) + 1 1 ; return page ${ num } is ; } else { const start = parseInt ( pageRefs [ 0 ]. page ) + 1 1 ; const end = parseInt ( pageRefs [ 1 ]. page ) + 1 ; return pages ${ start } to ${ end } are ; } }; Python For more information, see the Document AI Python API reference documentation .
- Document . from batch process operation ( location = "us" , operation name = batch process operation ) wrapped document = wrapped documents [ 0 ] else : raise ValueError ( "No document source provided." ) For all properties and methods, refer to: https://cloud.google.com/python/docs/reference/documentai-toolbox/latest/google.cloud.documentai toolbox.wrappers.document.Document print ( "Document Successfully Loaded!" ) print ( f " \t Number of Pages: { len ( wrapped document . pages ) } " ) print ( f " \t Number of Entities: { len ( wrapped document . entities ) } " ) for page in wrapped document . pages : print ( f "Page { page . page number } " ) for block in page . blocks : print ( block . text ) for paragraph in page . paragraphs : print ( paragraph . text ) for line in page . lines : print ( line . text ) for token in page . tokens : print ( token . text ) Only supported with Form Parser processor https://cloud.google.com/document-ai/docs/form-parser for form field in page . form fields : print ( f " { form field . field name } : { form field . field value } " ) Only supported with Enterprise Document OCR version pretrained-ocr-v2.0-2023-06-02 https://cloud.google.com/document-ai/docs/process-documents-ocr#enable symbols for symbol in page . symbols : print ( symbol . text ) Only supported with Enterprise Document OCR version pretrained-ocr-v2.0-2023-06-02 https://cloud.google.com/document-ai/docs/process-documents-ocr#math ocr for math formula in page . math formulas : print ( math formula . text ) Only supported with Entity Extraction processors https://cloud.google.com/document-ai/docs/processors-list for entity in wrapped document . entities : print ( f " { entity . type } : { entity . mention text } " ) if entity . normalized text : print ( f " \t Normalized Text: { entity . normalized text } " ) Only supported with Layout Parser for chunk in wrapped document . chunks : print ( f "Chunk { chunk . chunk id } : { chunk . content } " ) for block in wrapped document . document layout blocks : print ( f "Document Layout Block { block . block id } " ) if block . text block : print ( f " { block . text block . type } : { block . text block . text } " ) if block . list block : print ( f " { block . list block . type } : { block . list block . list entries } " ) if block . table block : print ( block . table block . header rows , block . table block . body rows ) Tables from google.cloud.documentai toolbox import document TODO(developer): Uncomment these variables before running the sample.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Same model as v2.0 with native text extraction from digital PDF files enabled.
- Category Extract Functions OCR, Form Parsing, Entity Extraction Release stage General availability Access status Public lock open Type in API FORM PARSER PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Belarusian be Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Korean ko Kore Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-form-parser-v1.0-2020-09-23 Stable GA None Legacy version.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Limited security Type in API UTILITY PROCESSOR Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-utility-v1.1-2021-04-09 Stable GA Note: Will be discontinued starting June 30, 2026. pretrained-utility-v1.2-2022-12-15 Release Candidate Public Preview Note: Will be discontinued starting June 30, 2026.
- Includes access to all OCR add-ons. pretrained-ocr-v2.1-2024-08-07 Stable GA The main areas of improvement for v2.1 are: better printed text recognition, more precise checkbox detection and more accurate reading order. pretrained-ocr-v2.1.1-2025-01-31 Release candidate Public Preview v2.1.1 is similar to V2.1, and is available in all regions except: US , EU , and asia-southeast1 .

