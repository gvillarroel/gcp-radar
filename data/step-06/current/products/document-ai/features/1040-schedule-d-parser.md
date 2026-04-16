---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.023Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "1040 Schedule D Parser"
feature_slug: "1040-schedule-d-parser"
latest_feature_date: "2021-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk"
  - "https://docs.cloud.google.com/document-ai/docs/form-parser"
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
  - "https://docs.cloud.google.com/document-ai/docs/overview"
keywords:
  - "1040"
  - "schedule"
  - "parser"
  - "extracts"
  - "structured"
  - "from"
  - "documents"
---

# 1040 Schedule D Parser

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Extracts structured data from 1040 Schedule D documents; Extracts structured data from 1040 Schedule D documents.

## Extended Definition

Extracts structured data from 1040 Schedule D documents; Extracts structured data from 1040 Schedule D documents.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk](https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk)
- [https://docs.cloud.google.com/document-ai/docs/form-parser](https://docs.cloud.google.com/document-ai/docs/form-parser)
- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- [https://docs.cloud.google.com/document-ai/docs/overview](https://docs.cloud.google.com/document-ai/docs/overview)

## Supporting Pages

### "Process documents with Gemini layout parser \_|\_ Document AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk](https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk)
- Source ID: `site-docs-root-2`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Process documents with Gemini layout parser The Document AI layout parser is an advanced text parsing and document understanding service that converts unstructured content from complex files into highly structured, precise and machine-readable information.
- Structured Data Ingestion: It can parse complex documents (like 10-K filings or reports) and index structured content (like parsed tables or image descriptions) into databases, as demonstrated with BigQuery .
- How it Works Gemini layout parser processes documents in a multi-stage pipeline designed to preserve semantic meaning: Parse and Structure: The document is ingested.
- Primary use cases Document OCR: It can parse text and layout elements like heading, header, footer, table structure and figures from PDF documents.

### Form Parser \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/form-parser](https://docs.cloud.google.com/document-ai/docs/form-parser)
- Source ID: `site-docs-root-2`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Form Parser can be considered over the other parsers when the use case involves: Dealing with structured forms: It excels at extracting KVPs from well-defined forms that look like conventional forms with labeled blanks to fill in, such as name: .
- Create a Form Parser processor, which can identify and extract text, key-value pairs, tables, and generic entities from many types of documents.
- Flexible table extraction is needed: Form Parser extracts from simple (no cells that span rows or columns) tables that look like tables.
- Checkboxes: A high-quality selection mark detector, which extracts checkboxes from images and PDF output as KVP, using the text nearest the checkbox, with a valueType indicating whether it is filled or unfilled.

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' // const processorId = 'YOUR PROCESSOR ID'; // Create processor in Cloud Console // const filePath = '/path/to/local/pdf'; const { DocumentProcessorServiceClient } = require ( ' @google-cloud/documentai ' ). v1beta3 ; // Instantiates a client const client = new DocumentProcessorServiceClient (); async function processDocument () { // The full resource name of the processor, e.g.: // projects/project-id/locations/location/processor/processor-id // You must create new processors in the Cloud Console first const name = projects/ ${ projectId } /locations/ ${ location } /processors/ ${ processorId } ; // Read the file into memory. const fs = require ( 'fs' ). promises ; const imageFile = await fs . readFile ( filePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const request = { name , rawDocument : { content : encodedImage , mimeType : 'application/pdf' , }, }; // Recognizes text entities in the PDF document const [ result ] = await client . processDocument ( request ); console . log ( 'Document processing complete.' ); // Read fields specificly from the specalized US drivers license processor: // https://cloud.google.com/document-ai/docs/processors-list#processor us-driver-license-parser // retriving data from other specalized processors follow a similar pattern. // For a complete list of processors see: // https://cloud.google.com/document-ai/docs/processors-list // // OCR and other data is also present in the quality processor's response. // Please see the OCR and other samples for how to parse other data in the // response. const { document } = result ; console . log ( Found ${ document . entities . length } subdocuments: ); for ( const entity of document . entities ) { const conf = entity . confidence 100 ; const pagesRange = pageRefsToRange ( entity . pageAnchor . pageRefs ); if ( entity . type !== '' ) { console . log ( ${ conf . toFixed ( 2 ) } % confident that ${ pagesRange } a " ${ entity . type } " subdocument. ); } else { console . log ( ${ conf . toFixed ( 2 ) } % confident that ${ pagesRange } a subdocument. ); } } } // Converts a page ref to a string describing the page or page range. const pageRefsToRange = pageRefs = > { if ( pageRefs . length === 1 ) { const num = parseInt ( pageRefs [ 0 ]. page ) + 1 1 ; return page ${ num } is ; } else { const start = parseInt ( pageRefs [ 0 ]. page ) + 1 1 ; const end = parseInt ( pageRefs [ 1 ]. page ) + 1 ; return pages ${ start } to ${ end } are ; } }; Python For more information, see the Document AI Python API reference documentation .
- Document . from batch process operation ( location = "us" , operation name = batch process operation ) wrapped document = wrapped documents [ 0 ] else : raise ValueError ( "No document source provided." ) For all properties and methods, refer to: https://cloud.google.com/python/docs/reference/documentai-toolbox/latest/google.cloud.documentai toolbox.wrappers.document.Document print ( "Document Successfully Loaded!" ) print ( f " \t Number of Pages: { len ( wrapped document . pages ) } " ) print ( f " \t Number of Entities: { len ( wrapped document . entities ) } " ) for page in wrapped document . pages : print ( f "Page { page . page number } " ) for block in page . blocks : print ( block . text ) for paragraph in page . paragraphs : print ( paragraph . text ) for line in page . lines : print ( line . text ) for token in page . tokens : print ( token . text ) Only supported with Form Parser processor https://cloud.google.com/document-ai/docs/form-parser for form field in page . form fields : print ( f " { form field . field name } : { form field . field value } " ) Only supported with Enterprise Document OCR version pretrained-ocr-v2.0-2023-06-02 https://cloud.google.com/document-ai/docs/process-documents-ocr#enable symbols for symbol in page . symbols : print ( symbol . text ) Only supported with Enterprise Document OCR version pretrained-ocr-v2.0-2023-06-02 https://cloud.google.com/document-ai/docs/process-documents-ocr#math ocr for math formula in page . math formulas : print ( math formula . text ) Only supported with Entity Extraction processors https://cloud.google.com/document-ai/docs/processors-list for entity in wrapped document . entities : print ( f " { entity . type } : { entity . mention text } " ) if entity . normalized text : print ( f " \t Normalized Text: { entity . normalized text } " ) Only supported with Layout Parser for chunk in wrapped document . chunks : print ( f "Chunk { chunk . chunk id } : { chunk . content } " ) for block in wrapped document . document layout blocks : print ( f "Document Layout Block { block . block id } " ) if block . text block : print ( f " { block . text block . type } : { block . text block . text } " ) if block . list block : print ( f " { block . list block . type } : { block . list block . list entries } " ) if block . table block : print ( block . table block . header rows , block . table block . body rows ) Tables from google.cloud.documentai toolbox import document TODO(developer): Uncomment these variables before running the sample.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' // const processorId = 'YOUR PROCESSOR ID'; // Create processor in Cloud Console // const filePath = '/path/to/local/pdf'; const { DocumentProcessorServiceClient } = require ( ' @google-cloud/documentai ' ). v1beta3 ; // Instantiates a client const client = new DocumentProcessorServiceClient (); async function processDocument () { // The full resource name of the processor, e.g.: // projects/project-id/locations/location/processor/processor-id // You must create new processors in the Cloud Console first const name = projects/ ${ projectId } /locations/ ${ location } /processors/ ${ processorId } ; // Read the file into memory. const fs = require ( 'fs' ). promises ; const imageFile = await fs . readFile ( filePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const request = { name , rawDocument : { content : encodedImage , mimeType : 'application/pdf' , }, }; // Recognizes text entities in the PDF document const [ result ] = await client . processDocument ( request ); console . log ( 'Document processing complete.' ); // Read fields specificly from the specalized US drivers license processor: // https://cloud.google.com/document-ai/docs/processors-list#processor us-driver-license-parser // retriving data from other specalized processors follow a similar pattern. // For a complete list of processors see: // https://cloud.google.com/document-ai/docs/processors-list // // OCR and other data is also present in the quality processor's response. // Please see the OCR and other samples for how to parse other data in the // response. const { document } = result ; for ( const entity of document . entities ) { // Fields detected.
- For more information on how to parse OCR data please see the OCR sample. text = document . text print ( f "Full document text: { repr ( text ) } \n " ) print ( f "There are { len ( document . pages ) } page(s) in this document." ) Read the form fields and tables output from the processor for page in document . pages : print ( f " \n\n Page { page . page number } " ) print ( f " \n Found { len ( page . tables ) } table(s):" ) for table in page . tables : num columns = len ( table . header rows [ 0 ] . cells ) num rows = len ( table . body rows ) print ( f "Table with { num columns } columns and { num rows } rows:" ) Print header rows print ( "Columns:" ) print table rows ( table . header rows , text ) Print body rows print ( "Table body data:" ) print table rows ( table . body rows , text ) print ( f " \n Found { len ( page . form fields ) } form field(s):" ) for field in page . form fields : name = layout to text ( field . field name , text ) value = layout to text ( field . field value , text ) print ( f " { repr ( name . strip ()) } : { repr ( value . strip ()) } " ) Supported in version pretrained-form-parser-v2.0-2022-11-10 and later.

### Document AI overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/overview](https://docs.cloud.google.com/document-ai/docs/overview)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Document AI components Document AI is a document processing and understanding platform that takes unstructured data from documents and transforms it into structured data (specific fields, suitable for a database), making it easier to understand, analyze, and consume.
- Each of these workflows involve getting the raw text from documents, then extracting specific text from that which corresponds to the data needed (the fields or entities).
- Document AI processes the documents and returns one or more Document objects, which contain the extracted, structured information.
- Layout Parser Extract entities from a custom document that meets the custom processor criteria .

