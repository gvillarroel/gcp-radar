---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.911Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Cross-page nested entity merging"
feature_slug: "cross-page-nested-entity-merging"
latest_feature_date: "2025-07-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1"
  - "https://docs.cloud.google.com/document-ai/docs/ce-with-genai"
  - "https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema"
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
keywords:
  - "cross"
  - "page"
  - "nested"
  - "entity"
  - "merging"
  - "the"
  - "document"
  - "ai"
---

# Cross-page nested entity merging

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

The Document AI CDE processor can merge child entities of nested entities that span multiple pages; The Document AI CDE processor can merge child entities of nested entities that span multiple pages.

## Extended Definition

The Document AI CDE processor can merge child entities of nested entities that span multiple pages; The Document AI CDE processor can merge child entities of nested entities that span multiple pages.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1)
- [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- [https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema](https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema)
- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)

## Supporting Pages

### "Package com.google.cloud.documentai.v1 (2.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1)
- Source ID: `site-java-reference`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Entity Validation Output The output of the validation given the document and the validation rules. com. google. cloud. documentai. v1.
- Visual Element Detected non-text visual elements e.g. checkbox, signature etc. on the page. com. google. cloud. documentai. v1.
- Builder Detected non-text visual elements e.g. checkbox, signature etc. on the page. com. google. cloud. documentai. v1.
- Page anchors can be cross-page, consist of multiple bounding polygons and optionally com. google. cloud. documentai. v1.

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- Label cross-page nested entities The pretrained-foundation-model-v1.5-2025-05-05 processor supports three-level nesting across pages.
- Pin the parent entity with children you want to label across pages.
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "rawDocument": { "parent": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID ", "processor version": { "name": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ DISPLAY NAME ", "display name": " DISPLAY NAME ", "model type": "MODEL TYPE GENERATIVE", }, "base processor version": "projects/ PROJECT ID /locations/us/processors/ PROCESSOR ID /processorVersions/ PRETRAINED PROCESSOR VERSION ", "foundation model tuning options": { "train steps": TRAIN STEPS , "learning rate multiplier": LEARN RATE MULTIPLIER , } "document schema": DOCUMENT SCHEMA } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process" Select-Object -Expand Content Custom extractor with signature detection Preview This product is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### DocumentSchema \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema](https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema)
- Source ID: `site-api-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Otherwise, it can only be applied to the entire document (classification). documentAllowMultipleLabels boolean If true, on a given page, there can be multiple document annotations covering it. prefixedNamingOnProperties boolean If set, all the nested entities must be prefixed with the parents. skipNamingValidation boolean If set, this will skip the naming format validation in the schema.
- This type is subject to the same conventions as the Entity.base types field. occurrenceType enum ( OccurrenceType ) Occurrence type limits the number of instances an entity type appears in the document. method enum ( Method ) Specifies how the entity's value is obtained. propertyMetadata object ( PropertyMetadata ) Any additional metadata about the property can be added here.
- For now, one and only one should be set. properties[] object ( Property ) Description the nested structure, or composition of an entity. entityTypeMetadata object ( EntityTypeMetadata ) Metadata for the entity type.
- EntityType EntityType is the wrapper of a label of the corresponding model with detailed attributes and limitations for entity-based processors.

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' // const processorId = 'YOUR PROCESSOR ID'; // Create processor in Cloud Console // const filePath = '/path/to/local/pdf'; const { DocumentProcessorServiceClient } = require ( ' @google-cloud/documentai ' ). v1beta3 ; // Instantiates a client const client = new DocumentProcessorServiceClient (); async function processDocument () { // The full resource name of the processor, e.g.: // projects/project-id/locations/location/processor/processor-id // You must create new processors in the Cloud Console first const name = projects/ ${ projectId } /locations/ ${ location } /processors/ ${ processorId } ; // Read the file into memory. const fs = require ( 'fs' ). promises ; const imageFile = await fs . readFile ( filePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const request = { name , rawDocument : { content : encodedImage , mimeType : 'application/pdf' , }, }; // Recognizes text entities in the PDF document const [ result ] = await client . processDocument ( request ); console . log ( 'Document processing complete.' ); // Read fields specificly from the specalized US drivers license processor: // https://cloud.google.com/document-ai/docs/processors-list#processor us-driver-license-parser // retriving data from other specalized processors follow a similar pattern. // For a complete list of processors see: // https://cloud.google.com/document-ai/docs/processors-list // // OCR and other data is also present in the quality processor's response. // Please see the OCR and other samples for how to parse other data in the // response. const { document } = result ; console . log ( Found ${ document . entities . length } subdocuments: ); for ( const entity of document . entities ) { const conf = entity . confidence 100 ; const pagesRange = pageRefsToRange ( entity . pageAnchor . pageRefs ); if ( entity . type !== '' ) { console . log ( ${ conf . toFixed ( 2 ) } % confident that ${ pagesRange } a " ${ entity . type } " subdocument. ); } else { console . log ( ${ conf . toFixed ( 2 ) } % confident that ${ pagesRange } a subdocument. ); } } } // Converts a page ref to a string describing the page or page range. const pageRefsToRange = pageRefs = > { if ( pageRefs . length === 1 ) { const num = parseInt ( pageRefs [ 0 ]. page ) + 1 1 ; return page ${ num } is ; } else { const start = parseInt ( pageRefs [ 0 ]. page ) + 1 1 ; const end = parseInt ( pageRefs [ 1 ]. page ) + 1 ; return pages ${ start } to ${ end } are ; } }; Python For more information, see the Document AI Python API reference documentation .
- Document . from batch process operation ( location = "us" , operation name = batch process operation ) wrapped document = wrapped documents [ 0 ] else : raise ValueError ( "No document source provided." ) For all properties and methods, refer to: https://cloud.google.com/python/docs/reference/documentai-toolbox/latest/google.cloud.documentai toolbox.wrappers.document.Document print ( "Document Successfully Loaded!" ) print ( f " \t Number of Pages: { len ( wrapped document . pages ) } " ) print ( f " \t Number of Entities: { len ( wrapped document . entities ) } " ) for page in wrapped document . pages : print ( f "Page { page . page number } " ) for block in page . blocks : print ( block . text ) for paragraph in page . paragraphs : print ( paragraph . text ) for line in page . lines : print ( line . text ) for token in page . tokens : print ( token . text ) Only supported with Form Parser processor https://cloud.google.com/document-ai/docs/form-parser for form field in page . form fields : print ( f " { form field . field name } : { form field . field value } " ) Only supported with Enterprise Document OCR version pretrained-ocr-v2.0-2023-06-02 https://cloud.google.com/document-ai/docs/process-documents-ocr#enable symbols for symbol in page . symbols : print ( symbol . text ) Only supported with Enterprise Document OCR version pretrained-ocr-v2.0-2023-06-02 https://cloud.google.com/document-ai/docs/process-documents-ocr#math ocr for math formula in page . math formulas : print ( math formula . text ) Only supported with Entity Extraction processors https://cloud.google.com/document-ai/docs/processors-list for entity in wrapped document . entities : print ( f " { entity . type } : { entity . mention text } " ) if entity . normalized text : print ( f " \t Normalized Text: { entity . normalized text } " ) Only supported with Layout Parser for chunk in wrapped document . chunks : print ( f "Chunk { chunk . chunk id } : { chunk . content } " ) for block in wrapped document . document layout blocks : print ( f "Document Layout Block { block . block id } " ) if block . text block : print ( f " { block . text block . type } : { block . text block . text } " ) if block . list block : print ( f " { block . list block . type } : { block . list block . list entries } " ) if block . table block : print ( block . table block . header rows , block . table block . body rows ) Tables from google.cloud.documentai toolbox import document TODO(developer): Uncomment these variables before running the sample.
- RawDocument ( content = image content , mime type = mime type ), Only supported for Document OCR processor process options = process options , ) result = client . process document ( request = request ) For a full list of Document object attributes, reference this page: https://cloud.google.com/document-ai/docs/reference/rest/v1/Document return result . document Splitting and classification Here's a composite 10-page PDF that contains different types of documents and forms: Download PDF Here's the full document object as returned by the lending document splitter and classifier : Download JSON Each document that is detected by the splitter is represented by an entity .
- To identify and extract text, form elements, and entities please see other processors like the OCR, form, and specalized processors. print ( f "Found { len ( document . entities ) } subdocuments:" ) for entity in document . entities : conf percent = f " { entity . confidence : .1% } " pages range = page refs to string ( entity . page anchor . page refs ) Print subdocument type information, if available if entity . type : print ( f " { conf percent } confident that { pages range } a ' { entity . type } ' subdocument." ) else : print ( f " { conf percent } confident that { pages range } a subdocument." ) def page refs to string ( page refs : Sequence [ documentai .

