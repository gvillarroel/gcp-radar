---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.942Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Document AI Workbench Summarizer"
feature_slug: "document-ai-workbench-summarizer"
latest_feature_date: "2023-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/custom-summarizer"
  - "https://docs.cloud.google.com/document-ai/docs/pretrained-overview"
  - "https://docs.cloud.google.com/document-ai/docs/custom-org-policies"
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
keywords:
  - "document"
  - "ai"
  - "workbench"
  - "summarizer"
  - "generates"
  - "customizable"
  - "summaries"
  - "for"
---

# Document AI Workbench Summarizer

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Document AI Workbench Summarizer generates customizable summaries for documents up to 250 pages.

## Extended Definition

Document AI Workbench Summarizer generates customizable summaries for documents up to 250 pages.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/custom-summarizer](https://docs.cloud.google.com/document-ai/docs/custom-summarizer)
- [https://docs.cloud.google.com/document-ai/docs/pretrained-overview](https://docs.cloud.google.com/document-ai/docs/pretrained-overview)
- [https://docs.cloud.google.com/document-ai/docs/custom-org-policies](https://docs.cloud.google.com/document-ai/docs/custom-org-policies)
- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)

## Supporting Pages

### "Build a document summarizer in the Google Cloud console \_|\_ Document AI\

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-summarizer](https://docs.cloud.google.com/document-ai/docs/custom-summarizer)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Scientists are working on ways to make them more affordable." } } Procedure In this quickstart, you create a document summarizer processor, upload a sample document for processing, and create a custom processor version to adjust the summary structure.
- Enable the APIs Required roles To get the permissions that you need to build a document summarizer, ask your administrator to grant you the Document AI Administrator ( roles/documentai.admin ) IAM role on your project.
- Build a document summarizer in the Google Cloud console You can create a summarizer processor using Document AI to summarize the content of documents.
- Download a sample document It is a PDF file containing the Wikipedia page for Superconductivity .

### Pretrained overview \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/pretrained-overview](https://docs.cloud.google.com/document-ai/docs/pretrained-overview)
- Source ID: `site-docs-root-2`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Summarizer Summarizer gives abstract and bullet point summaries for short and long documents.
- Document AI offers multiple products to process documents for information for different use cases.
- Identity document proofing parser Identity document proofing parser predicts the validity of ID documents using multiple signals. fraud signals is identity document detection: Predicts whether an image contains a recognized identity document. fraud signals suspicious words detection: Predicts whether words are present that aren't typical on IDs. fraud signals image manipulation detection: Predicts whether the image was altered or tampered with an image editing tool. fraud signals online duplicate detection: Predicts whether the image can be found online (US only).
- Home Documentation AI and ML Document AI Guides Send feedback Pretrained overview Stay organized with collections Save and categorize content based on your preferences.

### Create custom constraints for Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-org-policies](https://docs.cloud.google.com/document-ai/docs/custom-org-policies)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Description Constraint syntax Only custom extraction processor is allowed. name : organizations/ ORGANIZATION ID /customConstraints/custom.enforceCustomExtractor resourceTypes : - documentai.googleapis.com/Processor methodTypes : - CREATE condition : "resource.type == 'CUSTOM EXTRACTION PROCESSOR'" actionType : ALLOW displayName : Enforce custom extraction processor type description : Allow creation of custom extraction processors Ensure that processors are encrypted with a KMS key. name : organizations/ ORGANIZATION ID /customConstraints/custom.encrypted resourceTypes : - documentai.googleapis.com/Processor methodTypes : - CREATE condition : "resource.kmsKeyName.size() > 0" actionType : ALLOW displayName : Processor must be encrypted with a KMS key. description : Processor must be encrypted with a KMS key.
- Before you begin, prepare the following: Your organization ID Your project ID Create the constraint Save the following file as CONSTRAINT FILE NAME .yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.enforceCustomExtractor resourceTypes : - documentai.googleapis.com/Processor methodTypes : - CREATE condition : "resource.type == 'CUSTOM EXTRACTION PROCESSOR'" actionType : ALLOW displayName : Enforce custom extraction processor type description : Allow creation of custom extraction processors Replace ORGANIZATION ID with your organization ID.
- Apply the constraint by using the gcloud org-policies set-custom-constraint command: gcloud org-policies set-custom-constraint CONSTRAINT FILE NAME .yaml Verify that the constraint exists using the gcloud org-policies list-custom-constraints command: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.enforceCustomExtractor ALLOW CREATE documentai.googleapis.com/Processor Enforce custom extraction processor type ...
- Home Documentation AI and ML Document AI Guides Send feedback Create custom constraints for Document AI Stay organized with collections Save and categorize content based on your preferences.

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . from typing import Optional from google.api core.client options import ClientOptions from google.cloud import documentai v1beta3 as documentai TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR PROCESSOR LOCATION" # Format is "us" or "eu" processor id = "YOUR PROCESSOR ID" # Create processor before running sample processor version = "rc" # Refer to https://cloud.google.com/document-ai/docs/manage-processor-versions for more information file path = "/path/to/local/pdf" mime type = "application/pdf" # Refer to https://cloud.google.com/document-ai/docs/file-types for supported file types def process document summarizer sample ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , ) - > None : For supported options, refer to: https://cloud.google.com/document-ai/docs/reference/rest/v1beta3/projects.locations.processors.processorVersions#summaryoptions summary options = documentai .
- RawDocument ( content = image content , mime type = mime type ), Only supported for Document OCR processor process options = process options , ) result = client . process document ( request = request ) For a full list of Document object attributes, reference this page: https://cloud.google.com/document-ai/docs/reference/rest/v1/Document return result . document Summarization The Summarizer processor uses Generative AI Foundation Models to summarize the extracted text from a document.
- This sample will convert external annotations to the Document.json format used by Document AI Workbench for training.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' // const processorId = 'YOUR PROCESSOR ID'; // Create processor in Cloud Console // const filePath = '/path/to/local/pdf'; const { DocumentProcessorServiceClient } = require ( ' @google-cloud/documentai ' ). v1beta3 ; // Instantiates a client const client = new DocumentProcessorServiceClient (); async function processDocument () { // The full resource name of the processor, e.g.: // projects/project-id/locations/location/processor/processor-id // You must create new processors in the Cloud Console first const name = projects/ ${ projectId } /locations/ ${ location } /processors/ ${ processorId } ; // Read the file into memory. const fs = require ( 'fs' ). promises ; const imageFile = await fs . readFile ( filePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const request = { name , rawDocument : { content : encodedImage , mimeType : 'application/pdf' , }, }; // Recognizes text entities in the PDF document const [ result ] = await client . processDocument ( request ); console . log ( 'Document processing complete.' ); // Read the text recognition output from the processor // For a full list of Document object attributes, // please reference this page: https://googleapis.dev/nodejs/documentai/latest/index.html const { document } = result ; const { text } = document ; // Read the text recognition output from the processor console . log ( Full document text: ${ JSON . stringify ( text ) } ); console . log ( There are ${ document . pages . length } page(s) in this document. ); for ( const page of document . pages ) { console . log ( Page ${ page . pageNumber } ); printPageDimensions ( page . dimension ); printDetectedLanguages ( page . detectedLanguages ); printParagraphs ( page . paragraphs , text ); printBlocks ( page . blocks , text ); printLines ( page . lines , text ); printTokens ( page . tokens , text ); } } const printPageDimensions = dimension = > { console . log ( Width: ${ dimension . width } ); console . log ( Height: ${ dimension . height } ); }; const printDetectedLanguages = detectedLanguages = > { console . log ( ' Detected languages:' ); for ( const lang of detectedLanguages ) { const code = lang . languageCode ; const confPercent = lang . confidence 100 ; console . log ( ${ code } ( ${ confPercent . toFixed ( 2 ) } % confidence) ); } }; const printParagraphs = ( paragraphs , text ) = > { console . log ( ${ paragraphs . length } paragraphs detected: ); const firstParagraphText = getText ( paragraphs [ 0 ]. layout . textAnchor , text ); console . log ( First paragraph text: ${ JSON . stringify ( firstParagraphText ) } ); const lastParagraphText = getText ( paragraphs [ paragraphs . length - 1 ]. layout . textAnchor , text ); console . log ( Last paragraph text: ${ JSON . stringify ( lastParagraphText ) } ); }; const printBlocks = ( blocks , text ) = > { console . log ( ${ blocks . length } blocks detected: ); const firstBlockText = getText ( blocks [ 0 ]. layout . textAnchor , text ); console . log ( First block text: ${ JSON . stringify ( firstBlockText ) } ); const lastBlockText = getText ( blocks [ blocks . length - 1 ]. layout . textAnchor , text ); console . log ( Last block text: ${ JSON . stringify ( lastBlockText ) } ); }; const printLines = ( lines , text ) = > { console . log ( ${ lines . length } lines detected: ); const firstLineText = getText ( lines [ 0 ]. layout . textAnchor , text ); console . log ( First line text: ${ JSON . stringify ( firstLineText ) } ); const lastLineText = getText ( lines [ lines . length - 1 ]. layout . textAnchor , text ); console . log ( Last line text: ${ JSON . stringify ( lastLineText ) } ); }; const printTokens = ( tokens , text ) = > { console . log ( ${ tokens . length } tokens detected: ); const firstTokenText = getText ( tokens [ 0 ]. layout . textAnchor , text ); console . log ( First token text: ${ JSON . stringify ( firstTokenText ) } ); const firstTokenBreakType = tokens [ 0 ]. detectedBreak . type ; console . log ( First token break type: ${ firstTokenBreakType } ); const lastTokenText = getText ( tokens [ tokens . length - 1 ]. layout . textAnchor , text ); console . log ( Last token text: ${ JSON . stringify ( lastTokenText ) } ); const lastTokenBreakType = tokens [ tokens . length - 1 ]. detectedBreak . type ; console . log ( Last token break type: ${ lastTokenBreakType } ); }; // Extract shards from the text field const getText = ( textAnchor , text ) = > { if ( ! textAnchor . textSegments textAnchor . textSegments . length === 0 ) { return '' ; } // First shard in document doesn't have startIndex property const startIndex = textAnchor . textSegments [ 0 ]. startIndex 0 ; const endIndex = textAnchor . textSegments [ 0 ]. endIndex ; return text . substring ( startIndex , endIndex ); }; Python For more information, see the Document AI Python API reference documentation .

