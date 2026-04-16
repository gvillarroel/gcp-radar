---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.511Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "Raw document TIFF file type field"
feature_slug: "raw-document-tiff-file-type-field"
latest_feature_date: "2023-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/file-types"
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
  - "https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document"
keywords:
  - "raw"
  - "document"
  - "tiff"
  - "file"
  - "type"
  - "field"
  - "adds"
  - "marks"
---

# Raw document TIFF file type field

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Adds a field that marks a raw document file type as TIFF.

## Extended Definition

Adds a field that marks a raw document file type as TIFF.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/file-types](https://docs.cloud.google.com/document-ai/docs/file-types)
- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- [https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document](https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document)

## Supporting Pages

### Supported Files \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/file-types](https://docs.cloud.google.com/document-ai/docs/file-types)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Name File Extension(s) MIME Type Portable Document Format (PDF) .pdf application/pdf Graphics Interchange Format (GIF) .gif image/gif Tag Image File Format (TIFF) .tiff , .tif image/tiff Joint Photographic Experts Group (JPEG) .jpg , .jpeg image/jpeg Portable Network Graphics (PNG) .png image/png Bitmap (BMP) .bmp image/bmp WebP .webp image/webp HyperText Markup Language (HTML) .html text/html Microsoft Word Office Open XML (OOXML) .docx application/vnd.openxmlformats-officedocument.wordprocessingml.document Microsoft PowerPoint OOXML .pptx application/vnd.openxmlformats-officedocument.presentationml.presentation Microsoft Excel OOXML .xlsx application/vnd.openxmlformats-officedocument.spreadsheetml.sheet Note that some of these image formats are "lossy" (for example, JPEG).
- Note: Document AI includes some supported file types in Preview .
- Custom splitter only supports PDF, TIFF, TIF, and GIF file types.
- File Types Document AI supports the following image types.

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "skipHumanReview": skipHumanReview , "rawDocument": { "mimeType": " MIME TYPE ", "content": " IMAGE CONTENT " }, "fieldMask": " FIELD MASK ", "processOptions": { "ocrConfig": { "enableNativePdfParsing": ENABLE NATIVE PDF PARSING , "enableImageQualityScores": ENABLE IMAGE QUALITY SCORES , "enableSymbol": ENABLE SYMBOL , "disableCharacterBoxesDetection": DISABLE CHARACTER BOXES DETECTION , "hints": { "languageHints": [ " LANGUAGE HINTS " ] }, "advancedOcrOptions": [" ADVANCED OCR OPTIONS "], "premiumFeatures": { "enableSelectionMarkDetection": ENABLE SELECTION MARK DETECTION , "computeStyleInfo": COMPUTE STYLE INFO , "enableMathOcr": ENABLE MATH OCR , } }, "individualPageSelector" { "pages": [ INDIVIDUAL PAGES ] } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- PremiumFeatures ( compute style info = True , enable math ocr = False , # Enable to use Math OCR Model enable selection mark detection = True , ), ) ) Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type , process options = process options , ) text = document . text print ( f "Full document text: { text } \n " ) print ( f "There are { len ( document . pages ) } page(s) in this document. \n " ) for page in document . pages : print ( f "Page { page . page number } :" ) print page dimensions ( page . dimension ) print detected languages ( page . detected languages ) print blocks ( page . blocks , text ) print paragraphs ( page . paragraphs , text ) print lines ( page . lines , text ) print tokens ( page . tokens , text ) if page . symbols : print symbols ( page . symbols , text ) if page . image quality scores : print image quality scores ( page . image quality scores ) if page . visual elements : print visual elements ( page . visual elements , text ) def print page dimensions ( dimension : documentai .
- For more information, see Set up authentication for a local development environment . from typing import Optional , Sequence from google.api core.client options import ClientOptions from google.cloud import documentai TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR PROCESSOR LOCATION" # Format is "us" or "eu" processor id = "YOUR PROCESSOR ID" # Create processor before running sample processor version = "rc" # Refer to https://cloud.google.com/document-ai/docs/manage-processor-versions for more information file path = "/path/to/local/pdf" mime type = "application/pdf" # Refer to https://cloud.google.com/document-ai/docs/file-types for supported file types def process document ocr sample ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , ) - > None : Optional: Additional configurations for Document OCR Processor.
- VisualElement ], text : str ) - > None : """ Only supported in version pretrained-ocr-v2.0-2023-06-02 """ checkboxes = [ x for x in visual elements if "checkbox" in x . type ] math symbols = [ x for x in visual elements if x . type == "math formula" ] if checkboxes : print ( f " { len ( checkboxes ) } checkboxes detected:" ) print ( f " First checkbox: { repr ( checkboxes [ 0 ] . type ) } " ) print ( f " Last checkbox: { repr ( checkboxes [ - 1 ] . type ) } " ) if math symbols : print ( f " { len ( math symbols ) } math symbols detected:" ) first math symbol text = layout to text ( math symbols [ 0 ] . layout , text ) print ( f " First math symbol: { repr ( first math symbol text ) } " ) def process document ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , process options : Optional [ documentai .

### Document AI Warehouse \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document](https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document)
- Source ID: `site-api-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "referenceId" : string , "displayName" : string , "title" : string , "displayUri" : string , "documentSchemaName" : string , "properties" : [ { object ( Property ) } ] , "updateTime" : string , "createTime" : string , "rawDocumentFileType" : enum ( RawDocumentFileType ) , "contentCategory" : enum ( ContentCategory ) , "textExtractionDisabled" : boolean , "textExtractionEnabled" : boolean , "creator" : string , "updater" : string , "dispositionTime" : string , "legalHold" : boolean , // Union field structured content can be only one of the following: "plainText" : string , "cloudAiDocument" : { object ( Document ) } // End of list of possible types for union field structured content . // Union field raw document can be only one of the following: "rawDocumentPath" : string , "inlineRawDocument" : string // End of list of possible types for union field raw document . } Fields name string The resource name of the document.
- RawDocumentFileType When a raw document is supplied, this indicates the file format Enums RAW DOCUMENT FILE TYPE UNSPECIFIED No raw document specified or it is non-parsable RAW DOCUMENT FILE TYPE PDF Adobe PDF format RAW DOCUMENT FILE TYPE DOCX Microsoft word format RAW DOCUMENT FILE TYPE XLSX Microsoft Excel format RAW DOCUMENT FILE TYPE PPTX Microsoft Powerpoint format RAW DOCUMENT FILE TYPE TEXT UTF-8 encoded text format RAW DOCUMENT FILE TYPE TIFF TIFF or TIF image file format ContentCategory When a raw document or structured content is supplied, this stores the content category.
- Specific type value(s) obtained from Document AIs Property.mention text field. values can be only one of the following: integerValues object ( IntegerArray ) Integer property values. floatValues object ( FloatArray ) Float property values. textValues object ( TextArray ) String/text property values. enumValues object ( EnumArray ) Enum property values. propertyValues object ( PropertyArray ) Nested structured data property values. dateTimeValues object ( DateTimeArray ) date time property values.
- For example, if inlineRawDocument is the byte representation of a PDF file, then this should be set to: RAW DOCUMENT FILE TYPE PDF. contentCategory enum ( ContentCategory ) Indicates the category (image, audio, video etc.) of the original content. textExtractionDisabled (deprecated) boolean This item is deprecated!

