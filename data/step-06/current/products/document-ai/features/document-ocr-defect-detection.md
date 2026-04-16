---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.992Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Document OCR defect detection"
feature_slug: "document-ocr-defect-detection"
latest_feature_date: "2022-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1"
keywords:
  - "document"
  - "ocr"
  - "defect"
  - "detection"
  - "can"
  - "detect"
  - "defects"
  - "and"
---

# Document OCR defect detection

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

OCR can detect document defects and return image quality scores for eight defect types.

## Extended Definition

OCR can detect document defects and return image quality scores for eight defect types.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1)

## Supporting Pages

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 312
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- At the token (word) level, the following attributes are detected: Handwriting detection Font style Font size Font type Font color Font weight Letter spacing Bold Italic Underlined Text color ( RGBa ) Background color ( RGBa ) Input Enable by setting ProcessOptions.ocrConfig.premiumFeatures.computeStyleInfo to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "premiumFeatures" : { "computeStyleInfo" : true } } } } Output The font-style output appears in Document.pages[].tokens[].styleInfo with type StyleInfo . "tokens" : [ { "styleInfo" : { "fontSize" : 3 , "pixelFontSize" : 13 , "fontType" : "SANS SERIF" , "bold" : true , "fontWeight" : 564 , "textColor" : { "red" : 0.16862746 , "green" : 0.16862746 , "blue" : 0.16862746 }, "backgroundColor" : { "red" : 0.98039216 , "green" : 0.9882353 , "blue" : 0.99215686 } } }, ... ] You can check the full Document JSON output in this link .
- This additional feature adds latency comparable to OCR processing to the process call. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "enableImageQualityScores" : true } } } Output The defect detection results appear in Document.pages[].imageQualityScores[] . { "pages" : [ { "imageQualityScores" : { "qualityScore" : 0.7811847 , "detectedDefects" : [ { "type" : "quality/defect document cutoff" , "confidence" : 1.0 }, { "type" : "quality/defect glare" , "confidence" : 0.97849524 }, { "type" : "quality/defect text cutoff" , "confidence" : 0.5 } ] } } ] } Refer to Sample processor output for full output examples.
- If the document is considered to be defective, the API returns the following eight document defect types: quality/defect blurry quality/defect noisy quality/defect dark quality/defect faint quality/defect text too small quality/defect document cutoff quality/defect text cutoff quality/defect glare There are some limitations with the current document-quality analysis: It can return false positive detections with digital documents with no defects.
- Detection and extraction Enterprise Document OCR can detect blocks, paragraphs, lines, words, and symbols from PDFs and images, as well as deskew documents for better accuracy.

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- Source ID: `site-docs-root-2`
- Final score: 312
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- At the token (word) level, the following attributes are detected: Handwriting detection Font style Font size Font type Font color Font weight Letter spacing Bold Italic Underlined Text color ( RGBa ) Background color ( RGBa ) Input Enable by setting ProcessOptions.ocrConfig.premiumFeatures.computeStyleInfo to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "premiumFeatures" : { "computeStyleInfo" : true } } } } Output The font-style output appears in Document.pages[].tokens[].styleInfo with type StyleInfo . "tokens" : [ { "styleInfo" : { "fontSize" : 3 , "pixelFontSize" : 13 , "fontType" : "SANS SERIF" , "bold" : true , "fontWeight" : 564 , "textColor" : { "red" : 0.16862746 , "green" : 0.16862746 , "blue" : 0.16862746 }, "backgroundColor" : { "red" : 0.98039216 , "green" : 0.9882353 , "blue" : 0.99215686 } } }, ... ] You can check the full Document JSON output in this link .
- This additional feature adds latency comparable to OCR processing to the process call. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "enableImageQualityScores" : true } } } Output The defect detection results appear in Document.pages[].imageQualityScores[] . { "pages" : [ { "imageQualityScores" : { "qualityScore" : 0.7811847 , "detectedDefects" : [ { "type" : "quality/defect document cutoff" , "confidence" : 1.0 }, { "type" : "quality/defect glare" , "confidence" : 0.97849524 }, { "type" : "quality/defect text cutoff" , "confidence" : 0.5 } ] } } ] } Refer to Sample processor output for full output examples.
- If the document is considered to be defective, the API returns the following eight document defect types: quality/defect blurry quality/defect noisy quality/defect dark quality/defect faint quality/defect text too small quality/defect document cutoff quality/defect text cutoff quality/defect glare There are some limitations with the current document-quality analysis: It can return false positive detections with digital documents with no defects.
- Detection and extraction Enterprise Document OCR can detect blocks, paragraphs, lines, words, and symbols from PDFs and images, as well as deskew documents for better accuracy.

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here's a PDF that is too dark and blurry to comfortably read: Download PDF Here's the document quality information as returned by the Enterprise Document OCR processor: { "pages" : [ { "imageQualityScores" : { "qualityScore" : 0.7811847 , "detectedDefects" : [ { "type" : "quality/defect document cutoff" , "confidence" : 1.0 }, { "type" : "quality/defect glare" , "confidence" : 0.97849524 }, { "type" : "quality/defect text cutoff" , "confidence" : 0.5 } ] } } ] } Code samples The following code samples demonstrate how to send a processing request and then read and print the fields to the terminal: Java For more information, see the Document AI Java API reference documentation .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' // const processorId = 'YOUR PROCESSOR ID'; // Create processor in Cloud Console // const filePath = '/path/to/local/pdf'; const { DocumentProcessorServiceClient } = require ( ' @google-cloud/documentai ' ). v1beta3 ; // Instantiates a client const client = new DocumentProcessorServiceClient (); async function processDocument () { // The full resource name of the processor, e.g.: // projects/project-id/locations/location/processor/processor-id // You must create new processors in the Cloud Console first const name = projects/ ${ projectId } /locations/ ${ location } /processors/ ${ processorId } ; // Read the file into memory. const fs = require ( 'fs' ). promises ; const imageFile = await fs . readFile ( filePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const request = { name , rawDocument : { content : encodedImage , mimeType : 'application/pdf' , }, }; // Recognizes text entities in the PDF document const [ result ] = await client . processDocument ( request ); console . log ( 'Document processing complete.' ); // Read fields specificly from the specalized US drivers license processor: // https://cloud.google.com/document-ai/docs/processors-list#processor us-driver-license-parser // retriving data from other specalized processors follow a similar pattern. // For a complete list of processors see: // https://cloud.google.com/document-ai/docs/processors-list // // OCR and other data is also present in the quality processor's response. // Please see the OCR and other samples for how to parse other data in the // response. const { document } = result ; for ( const entity of document . entities ) { // Fields detected.
- PremiumFeatures ( compute style info = True , enable math ocr = False , # Enable to use Math OCR Model enable selection mark detection = True , ), ) ) Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type , process options = process options , ) text = document . text print ( f "Full document text: { text } \n " ) print ( f "There are { len ( document . pages ) } page(s) in this document. \n " ) for page in document . pages : print ( f "Page { page . page number } :" ) print page dimensions ( page . dimension ) print detected languages ( page . detected languages ) print blocks ( page . blocks , text ) print paragraphs ( page . paragraphs , text ) print lines ( page . lines , text ) print tokens ( page . tokens , text ) if page . symbols : print symbols ( page . symbols , text ) if page . image quality scores : print image quality scores ( page . image quality scores ) if page . visual elements : print visual elements ( page . visual elements , text ) def print page dimensions ( dimension : documentai .
- RawDocument ( content = image content , mime type = mime type ), Only supported for Document OCR processor process options = process options , ) result = client . process document ( request = request ) For a full list of Document object attributes, reference this page: https://cloud.google.com/document-ai/docs/reference/rest/v1/Document return result . document Splitting and classification Here's a composite 10-page PDF that contains different types of documents and forms: Download PDF Here's the full document object as returned by the lending document splitter and classifier : Download JSON Each document that is detected by the splitter is represented by an entity .

### "Package com.google.cloud.documentai.v1 (2.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1)
- Source ID: `site-java-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Detected Defect Image Quality Defects com. google. cloud. documentai. v1.
- Page anchors can be cross-page, consist of multiple bounding polygons and optionally com. google. cloud. documentai. v1.
- Page anchors can be cross-page, consist of multiple bounding polygons and optionally com. google. cloud. documentai. v1.
- Builder Image Quality Defects com. google. cloud. documentai. v1.

