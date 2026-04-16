---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.076Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Lending document splitter"
feature_slug: "lending-document-splitter"
latest_feature_date: "2020-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/custom-splitter"
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
  - "https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema"
  - "https://docs.cloud.google.com/document-ai/docs/label-documents"
keywords:
  - "lending"
  - "document"
  - "splitter"
  - "separates"
  - "documents"
  - "into"
  - "logical"
  - "subdocuments"
---

# Lending document splitter

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Lending document splitter separates lending documents into logical subdocuments.

## Extended Definition

Lending document splitter separates lending documents into logical subdocuments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)
- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- [https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema](https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema)
- [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)

## Supporting Pages

### Custom splitter \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- Custom splitter Custom splitter is designed to be used to split composite documents (documents made up of multiple classes) into a number of single class documents by identifying each logical document.
- You typically would use a custom splitter on files that are composed of different types of logical documents, then use the class identification of each to pass the documents to an appropriate extraction processor to extract the entities.
- Repeat the previous steps with the following paths and document labels: Bucket path Document label cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/1040 form 1040 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/w2 form w2 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/w9 form w9 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/paystub paystub The console should look like this when complete: Select Import .
- Splitter description and usage You can create custom splitters that are specifically suited to your documents and trained and evaluated with your data, or deploy pretrained models with generative AI.

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' // const processorId = 'YOUR PROCESSOR ID'; // Create processor in Cloud Console // const filePath = '/path/to/local/pdf'; const { DocumentProcessorServiceClient } = require ( ' @google-cloud/documentai ' ). v1beta3 ; // Instantiates a client const client = new DocumentProcessorServiceClient (); async function processDocument () { // The full resource name of the processor, e.g.: // projects/project-id/locations/location/processor/processor-id // You must create new processors in the Cloud Console first const name = projects/ ${ projectId } /locations/ ${ location } /processors/ ${ processorId } ; // Read the file into memory. const fs = require ( 'fs' ). promises ; const imageFile = await fs . readFile ( filePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const request = { name , rawDocument : { content : encodedImage , mimeType : 'application/pdf' , }, }; // Recognizes text entities in the PDF document const [ result ] = await client . processDocument ( request ); console . log ( 'Document processing complete.' ); // Read fields specificly from the specalized US drivers license processor: // https://cloud.google.com/document-ai/docs/processors-list#processor us-driver-license-parser // retriving data from other specalized processors follow a similar pattern. // For a complete list of processors see: // https://cloud.google.com/document-ai/docs/processors-list // // OCR and other data is also present in the quality processor's response. // Please see the OCR and other samples for how to parse other data in the // response. const { document } = result ; console . log ( Found ${ document . entities . length } subdocuments: ); for ( const entity of document . entities ) { const conf = entity . confidence 100 ; const pagesRange = pageRefsToRange ( entity . pageAnchor . pageRefs ); if ( entity . type !== '' ) { console . log ( ${ conf . toFixed ( 2 ) } % confident that ${ pagesRange } a " ${ entity . type } " subdocument. ); } else { console . log ( ${ conf . toFixed ( 2 ) } % confident that ${ pagesRange } a subdocument. ); } } } // Converts a page ref to a string describing the page or page range. const pageRefsToRange = pageRefs = > { if ( pageRefs . length === 1 ) { const num = parseInt ( pageRefs [ 0 ]. page ) + 1 1 ; return page ${ num } is ; } else { const start = parseInt ( pageRefs [ 0 ]. page ) + 1 1 ; const end = parseInt ( pageRefs [ 1 ]. page ) + 1 ; return pages ${ start } to ${ end } are ; } }; Python For more information, see the Document AI Python API reference documentation .
- RawDocument ( content = image content , mime type = mime type ), Only supported for Document OCR processor process options = process options , ) result = client . process document ( request = request ) For a full list of Document object attributes, reference this page: https://cloud.google.com/document-ai/docs/reference/rest/v1/Document return result . document Splitting and classification Here's a composite 10-page PDF that contains different types of documents and forms: Download PDF Here's the full document object as returned by the lending document splitter and classifier : Download JSON Each document that is detected by the splitter is represented by an entity .
- For more information, see Set up authentication for a local development environment . from typing import Optional , Sequence from google.api core.client options import ClientOptions from google.cloud import documentai TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR PROCESSOR LOCATION" # Format is "us" or "eu" processor id = "YOUR PROCESSOR ID" # Create processor before running sample processor version = "rc" # Refer to https://cloud.google.com/document-ai/docs/manage-processor-versions for more information file path = "/path/to/local/pdf" mime type = "application/pdf" # Refer to https://cloud.google.com/document-ai/docs/file-types for supported file types def process document splitter sample ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , ) - > None : Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type ) Read the splitter output from a document splitter/classifier processor: e.g. https://cloud.google.com/document-ai/docs/processors-list#processor procurement-document-splitter This processor only provides text for the document and information on how to split the document on logical boundaries.
- To identify and extract text, form elements, and entities please see other processors like the OCR, form, and specalized processors. print ( f "Found { len ( document . entities ) } subdocuments:" ) for entity in document . entities : conf percent = f " { entity . confidence : .1% } " pages range = page refs to string ( entity . page anchor . page refs ) Print subdocument type information, if available if entity . type : print ( f " { conf percent } confident that { pages range } a ' { entity . type } ' subdocument." ) else : print ( f " { conf percent } confident that { pages range } a subdocument." ) def page refs to string ( page refs : Sequence [ documentai .

### DocumentSchema \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema](https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema)
- Source ID: `site-api-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "documentSplitter" : boolean , "documentAllowMultipleLabels" : boolean , "prefixedNamingOnProperties" : boolean , "skipNamingValidation" : boolean } Fields documentSplitter boolean If true, a document entity type can be applied to subdocument (splitting).
- Home Documentation AI and ML Document AI Reference Send feedback DocumentSchema Stay organized with collections Save and categorize content based on your preferences.
- So the string values in DocumentSchema.EntityType.name and DocumentSchema.EntityType.Property.name won't be checked.
- Otherwise, it can only be applied to the entire document (classification). documentAllowMultipleLabels boolean If true, on a given page, there can be multiple document annotations covering it. prefixedNamingOnProperties boolean If set, all the nested entities must be prefixed with the parents. skipNamingValidation boolean If set, this will skip the naming format validation in the schema.

### Label documents \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Your documents are placed into those sub-folders accordingly.
- Labeling options Here are your options for labeling documents: Manual : manually label your documents in the Google Cloud console Auto-labeling : use an existing processor version to generate labels Import pre-labeled documents : save time if you already have labeled documents Manually label in the Google Cloud console In the Train tab, select a document to open the labeling tool.
- Initial reviews : The first few (10 or so) documents labeled for a use case by a new labeler should be reviewed before large numbers of documents are labeled to prevent a large number of mistakes that need to be corrected.
- Home Documentation AI and ML Document AI Guides Send feedback Label documents Stay organized with collections Save and categorize content based on your preferences.

