---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.049Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Lending DocAI Document Splitter and Classifier"
feature_slug: "lending-docai-document-splitter-and-classifier"
latest_feature_date: "2021-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
  - "https://docs.cloud.google.com/document-ai/docs/custom-splitter"
  - "https://docs.cloud.google.com/document-ai/docs/custom-classifier"
  - "https://docs.cloud.google.com/document-ai/docs/output"
keywords:
  - "lending"
  - "docai"
  - "document"
  - "splitter"
  - "and"
  - "classifier"
  - "the"
  - "now"
---

# Lending DocAI Document Splitter and Classifier

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

The Lending DocAI Document Splitter and Classifier now supports additional processors.

## Extended Definition

The Lending DocAI Document Splitter and Classifier now supports additional processors.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)
- [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)
- [https://docs.cloud.google.com/document-ai/docs/output](https://docs.cloud.google.com/document-ai/docs/output)

## Supporting Pages

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 237
- Re-rank relevance: N/A

Evidence snippets:
- RawDocument ( content = image content , mime type = mime type ), Only supported for Document OCR processor process options = process options , ) result = client . process document ( request = request ) For a full list of Document object attributes, reference this page: https://cloud.google.com/document-ai/docs/reference/rest/v1/Document return result . document Splitting and classification Here's a composite 10-page PDF that contains different types of documents and forms: Download PDF Here's the full document object as returned by the lending document splitter and classifier : Download JSON Each document that is detected by the splitter is represented by an entity .
- For more information, see Set up authentication for a local development environment . from typing import Optional , Sequence from google.api core.client options import ClientOptions from google.cloud import documentai TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR PROCESSOR LOCATION" # Format is "us" or "eu" processor id = "YOUR PROCESSOR ID" # Create processor before running sample processor version = "rc" # Refer to https://cloud.google.com/document-ai/docs/manage-processor-versions for more information file path = "/path/to/local/pdf" mime type = "application/pdf" # Refer to https://cloud.google.com/document-ai/docs/file-types for supported file types def process document splitter sample ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , ) - > None : Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type ) Read the splitter output from a document splitter/classifier processor: e.g. https://cloud.google.com/document-ai/docs/processors-list#processor procurement-document-splitter This processor only provides text for the document and information on how to split the document on logical boundaries.
- ProcessRequest request = ProcessRequest . newBuilder (). setName ( name ). setRawDocument ( document ). build (); // Recognizes text entities in the PDF document ProcessResponse result = client . processDocument ( request ); Document documentResponse = result . getDocument (); System . out . println ( "Document processing complete." ); // Read the splitter output from the document splitter processor: // https://cloud.google.com/document-ai/docs/processors-list#processor doc-splitter // This processor only provides text for the document and information on how // to split the document on logical boundaries.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' // const processorId = 'YOUR PROCESSOR ID'; // Create processor in Cloud Console // const filePath = '/path/to/local/pdf'; const { DocumentProcessorServiceClient } = require ( ' @google-cloud/documentai ' ). v1beta3 ; // Instantiates a client const client = new DocumentProcessorServiceClient (); async function processDocument () { // The full resource name of the processor, e.g.: // projects/project-id/locations/location/processor/processor-id // You must create new processors in the Cloud Console first const name = projects/ ${ projectId } /locations/ ${ location } /processors/ ${ processorId } ; // Read the file into memory. const fs = require ( 'fs' ). promises ; const imageFile = await fs . readFile ( filePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const request = { name , rawDocument : { content : encodedImage , mimeType : 'application/pdf' , }, }; // Recognizes text entities in the PDF document const [ result ] = await client . processDocument ( request ); console . log ( 'Document processing complete.' ); // Read the text recognition output from the processor // For a full list of Document object attributes, // please reference this page: https://googleapis.dev/nodejs/documentai/latest/index.html const { document } = result ; const { text } = document ; // Read the text recognition output from the processor console . log ( Full document text: ${ JSON . stringify ( text ) } ); console . log ( There are ${ document . pages . length } page(s) in this document. ); for ( const page of document . pages ) { console . log ( Page ${ page . pageNumber } ); printPageDimensions ( page . dimension ); printDetectedLanguages ( page . detectedLanguages ); printParagraphs ( page . paragraphs , text ); printBlocks ( page . blocks , text ); printLines ( page . lines , text ); printTokens ( page . tokens , text ); } } const printPageDimensions = dimension = > { console . log ( Width: ${ dimension . width } ); console . log ( Height: ${ dimension . height } ); }; const printDetectedLanguages = detectedLanguages = > { console . log ( ' Detected languages:' ); for ( const lang of detectedLanguages ) { const code = lang . languageCode ; const confPercent = lang . confidence 100 ; console . log ( ${ code } ( ${ confPercent . toFixed ( 2 ) } % confidence) ); } }; const printParagraphs = ( paragraphs , text ) = > { console . log ( ${ paragraphs . length } paragraphs detected: ); const firstParagraphText = getText ( paragraphs [ 0 ]. layout . textAnchor , text ); console . log ( First paragraph text: ${ JSON . stringify ( firstParagraphText ) } ); const lastParagraphText = getText ( paragraphs [ paragraphs . length - 1 ]. layout . textAnchor , text ); console . log ( Last paragraph text: ${ JSON . stringify ( lastParagraphText ) } ); }; const printBlocks = ( blocks , text ) = > { console . log ( ${ blocks . length } blocks detected: ); const firstBlockText = getText ( blocks [ 0 ]. layout . textAnchor , text ); console . log ( First block text: ${ JSON . stringify ( firstBlockText ) } ); const lastBlockText = getText ( blocks [ blocks . length - 1 ]. layout . textAnchor , text ); console . log ( Last block text: ${ JSON . stringify ( lastBlockText ) } ); }; const printLines = ( lines , text ) = > { console . log ( ${ lines . length } lines detected: ); const firstLineText = getText ( lines [ 0 ]. layout . textAnchor , text ); console . log ( First line text: ${ JSON . stringify ( firstLineText ) } ); const lastLineText = getText ( lines [ lines . length - 1 ]. layout . textAnchor , text ); console . log ( Last line text: ${ JSON . stringify ( lastLineText ) } ); }; const printTokens = ( tokens , text ) = > { console . log ( ${ tokens . length } tokens detected: ); const firstTokenText = getText ( tokens [ 0 ]. layout . textAnchor , text ); console . log ( First token text: ${ JSON . stringify ( firstTokenText ) } ); const firstTokenBreakType = tokens [ 0 ]. detectedBreak . type ; console . log ( First token break type: ${ firstTokenBreakType } ); const lastTokenText = getText ( tokens [ tokens . length - 1 ]. layout . textAnchor , text ); console . log ( Last token text: ${ JSON . stringify ( lastTokenText ) } ); const lastTokenBreakType = tokens [ tokens . length - 1 ]. detectedBreak . type ; console . log ( Last token break type: ${ lastTokenBreakType } ); }; // Extract shards from the text field const getText = ( textAnchor , text ) = > { if ( ! textAnchor . textSegments textAnchor . textSegments . length === 0 ) { return '' ; } // First shard in document doesn't have startIndex property const startIndex = textAnchor . textSegments [ 0 ]. startIndex 0 ; const endIndex = textAnchor . textSegments [ 0 ]. endIndex ; return text . substring ( startIndex , endIndex ); }; Python For more information, see the Document AI Python API reference documentation .

### Custom splitter \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)
- Source ID: `site-docs-root`
- Final score: 233
- Re-rank relevance: N/A

Evidence snippets:
- Repeat the previous steps with the following paths and document labels: Bucket path Document label cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/1040 form 1040 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/w2 form w2 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/w9 form w9 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/paystub paystub The console should look like this when complete: Select Import .
- What's next Previous arrow back Custom classifier Next Document splitters behavior arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Enable the APIs Required roles To get the permissions that you need to create a custom splitter, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- This folder contains PDFs of bank statements. cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/bank-statement Set the Document label as bank statement .

### "Create, use, and manage a custom document classifier \_|\_ Document AI \_\

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Enable the APIs Required roles To get the permissions that you need to create a custom classifier, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create a custom classifier in the Google Cloud console You can create custom classifiers that are specifically suited to your documents and trained and evaluated with your data.
- Label a document The process of selecting text in a document and applying labels is known as annotation.
- In the Documents panel, you can find that one document has been assigned to the training set. (Optional) Import prelabeled data to the training and test sets If you're using v1.4, you must upload training and test sets to train the custom processor.

### Sample processor output \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/output](https://docs.cloud.google.com/document-ai/docs/output)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Digitize text Processors Output samples Enterprise Document OCR (Optical Character Recognition) Category Digitize Solution type General Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-ocr-v1.2-2022-11-10 Output Document JSON pretrained-ocr-v2.0-2023-06-02 Output Document JSON Checkbox Extraction - Document JSON Font Detection - Document JSON Math OCR - Document JSON pretrained-ocr-v2.1-2024-08-07 Output Document JSON Premium Output Document JSON pretrained-ocr-v2.1.1-2025-01-31 Output Document JSON Premium Output Document JSON Extract documents Processors Output samples Custom Extractor Category Extract Solution type Custom Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-foundation-model-v1.5-2025-05-05 Output Document JSON pretrained-foundation-model-v1.5-pro-2025-06-20 Output Document JSON pretrained-foundation-model-v1.5.1-2025-08-07 Output Document JSON pretrained-foundation-model-v1.6-pro-2025-12-01 Output Document JSON pretrained-foundation-model-v1.6-2026-01-13 Output Document JSON Form Parser Category Extract Solution type General Functions OCR, Form Parsing, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-form-parser-v1.0-2020-09-23 Output Document JSON pretrained-form-parser-v2.0-2022-11-10 Output Document JSON pretrained-form-parser-v2.1-2023-06-26 Output Document JSON Layout Parser Category Extract Solution type General Functions Layout Parsing, Document Chunking Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-layout-parser-v1.0-2024-06-03 Output Document JSON Classify documents Processors Output samples Custom Classifier Category Classify Solution type Custom Functions OCR, Classification Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-classifier-v1.5-2025-08-05 Output Document JSON pretrained-classifier-v1.6-2026-03-09 Output Document JSON pretrained-classifier-v1.6-pro-2026-03-09 Output Document JSON Custom Splitter Category Classify Solution type Custom Functions OCR, Classification, Splitting Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-splitter-v1.5-2025-07-14 Output Document JSON pretrained-splitter-v1.6-2026-03-09 Output Document JSON pretrained-splitter-v1.6-pro-2026-03-09 Output Document JSON Explore pretrained processors Processors Output samples Bank Statement Parser Category Pretrained Solution type Lending Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-bankstatement-v1.0-2021-08-08 Output Document JSON pretrained-bankstatement-v1.1-2021-08-13 Output Document JSON pretrained-bankstatement-v2.0-2021-12-10 Output Document JSON pretrained-bankstatement-v3.0-2022-05-16 Output Document JSON pretrained-bankstatement-v4.0-2023-07-31 Output Document JSON pretrained-bankstatement-v5.0-2023-12-06 Output Document JSON W2 Parser Category Pretrained Solution type Lending Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-w2-v1.0-2020-10-01 Output Document JSON pretrained-w2-v1.1-2022-01-27 Output Document JSON pretrained-w2-v1.2-2022-01-28 Output Document JSON pretrained-w2-v2.0-2022-03-30 Output Document JSON pretrained-w2-v2.1-2022-06-08 Output Document JSON US Passport Parser Category Pretrained Solution type Identity Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-us-passport-v1.0-2021-06-14 Output Document JSON Utility Parser Category Pretrained Solution type Procurement Functions OCR, Entity Extraction Release stage General availability Access status Limited security Full processor details Detailed entry picture as pdfs Sample input file pretrained-utility-v1.1-2021-04-09 Output Document JSON pretrained-utility-v1.2-2022-12-15 Output Document JSON Identity Document Proofing Parser Category Pretrained Solution type Identity Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-id-proofing-v1.0-2022-10-03 Output Document JSON pretrained-id-proofing-v1.1-2023-05-18 Output Document JSON pretrained-id-proofing-v1.2-2023-10-04 Output Document JSON US Driver License Parser Category Pretrained Solution type Identity Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-us-driver-license-v1.0-2021-06-14 Output Document JSON Expense Parser Category Pretrained Solution type Procurement Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-expense-v1.1-2021-04-09 Output Document JSON pretrained-expense-v1.3.2-2024-09-11 Output Document JSON pretrained-expense-v1.4-2022-11-18 Output Document JSON pretrained-expense-v1.4.2-2024-09-12 Output Document JSON Invoice Parser Category Pretrained Solution type Procurement Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Full processor details Detailed entry picture as pdfs Sample input file pretrained-invoice-v1.1-2021-04-09 Output Document JSON pretrained-invoice-v1.2-2022-02-18 Output Document JSON pretrained-invoice-v1.3-2022-07-15 Output Document JSON pretrained-invoice-v1.4-2022-10-21 Output Document JSON pretrained-invoice-v1.5-2023-09-15 Output Document JSON pretrained-invoice-v2.0-2023-12-06 Output Document JSON Previous arrow back Client libraries Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The files on this page are sample documents in a variety of structures and the raw outputs from the Document AI API in the Document format.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Home Documentation AI and ML Document AI Guides Send feedback Sample processor output Stay organized with collections Save and categorize content based on your preferences.

