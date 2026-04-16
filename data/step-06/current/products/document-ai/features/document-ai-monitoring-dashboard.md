---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.889Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Document AI Monitoring Dashboard"
feature_slug: "document-ai-monitoring-dashboard"
latest_feature_date: "2025-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/evaluate"
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/custom-based-extraction"
keywords:
  - "document"
  - "ai"
  - "monitoring"
  - "dashboard"
  - "web"
  - "based"
  - "lets"
  - "you"
---

# Document AI Monitoring Dashboard

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

A web-based monitoring dashboard lets you track project- and processor-level metrics over time.

## Extended Definition

A web-based monitoring dashboard lets you track project- and processor-level metrics over time.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/evaluate](https://docs.cloud.google.com/document-ai/docs/evaluate)
- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- [https://docs.cloud.google.com/document-ai/docs/custom-based-extraction](https://docs.cloud.google.com/document-ai/docs/custom-based-extraction)

## Supporting Pages

### Evaluate performance \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/evaluate](https://docs.cloud.google.com/document-ai/docs/evaluate)
- Source ID: `site-docs-root-2`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Monitoring dashboard The monitoring dashboard in the Google Cloud console provides a useful way to create your own monitoring visualizations for different metrics and resources used in Document AI processors.
- Home Documentation AI and ML Document AI Guides Send feedback Evaluate performance Stay organized with collections Save and categorize content based on your preferences.
- DocumentProcessorServiceClient ( client options = opts ) The full resource name of the processor version e.g. projects/{project id}/locations/{location}/processors/{processor id}/processorVersions/{processor version id} parent = client . processor version path ( project id , location , processor id , processor version id ) evaluations = client . list evaluations ( parent = parent ) Print the Evaluation Information Refer to https://cloud.google.com/document-ai/docs/reference/rest/v1beta3/projects.locations.processors.processorVersions.evaluations for more information on the available evaluation data print ( f "Evaluations for Processor Version { parent } " ) for evaluation in evaluations : print ( f "Name: { evaluation . name } " ) print ( f " \t Create Time: { evaluation . create time } \n " ) Evaluation metrics for all labels Metrics for All labels are computed based on the number of true positives, false positives, and false negatives in the dataset across all labels, and thus, are weighted by the number of times each label appears in the dataset.
- For more information, see Set up authentication for a local development environment . from google.api core.client options import ClientOptions from google.cloud import documentai # type: ignore TODO(developer): Uncomment these variables before running the sample. project id = 'YOUR PROJECT ID' location = 'YOUR PROCESSOR LOCATION' # Format is 'us' or 'eu' processor id = 'YOUR PROCESSOR ID' # Create processor before running sample processor version id = 'YOUR PROCESSOR VERSION ID' evaluation id = 'YOUR EVALUATION ID' def get evaluation sample ( project id : str , location : str , processor id : str , processor version id : str , evaluation id : str , ) - > None : You must set the api endpoint if you use a location other than 'us', e.g.: opts = ClientOptions ( api endpoint = f " { location } -documentai.googleapis.com" ) client = documentai .

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Document AI Guides Send feedback Enterprise Document OCR Stay organized with collections Save and categorize content based on your preferences.
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "skipHumanReview": skipHumanReview , "rawDocument": { "mimeType": " MIME TYPE ", "content": " IMAGE CONTENT " }, "fieldMask": " FIELD MASK ", "processOptions": { "ocrConfig": { "enableNativePdfParsing": ENABLE NATIVE PDF PARSING , "enableImageQualityScores": ENABLE IMAGE QUALITY SCORES , "enableSymbol": ENABLE SYMBOL , "disableCharacterBoxesDetection": DISABLE CHARACTER BOXES DETECTION , "hints": { "languageHints": [ " LANGUAGE HINTS " ] }, "advancedOcrOptions": [" ADVANCED OCR OPTIONS "], "premiumFeatures": { "enableSelectionMarkDetection": ENABLE SELECTION MARK DETECTION , "computeStyleInfo": COMPUTE STYLE INFO , "enableMathOcr": ENABLE MATH OCR , } }, "individualPageSelector" { "pages": [ INDIVIDUAL PAGES ] } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- For more information, see Set up authentication for a local development environment . from typing import Optional , Sequence from google.api core.client options import ClientOptions from google.cloud import documentai TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR PROCESSOR LOCATION" # Format is "us" or "eu" processor id = "YOUR PROCESSOR ID" # Create processor before running sample processor version = "rc" # Refer to https://cloud.google.com/document-ai/docs/manage-processor-versions for more information file path = "/path/to/local/pdf" mime type = "application/pdf" # Refer to https://cloud.google.com/document-ai/docs/file-types for supported file types def process document ocr sample ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , ) - > None : Optional: Additional configurations for Document OCR Processor.
- VisualElement ], text : str ) - > None : """ Only supported in version pretrained-ocr-v2.0-2023-06-02 """ checkboxes = [ x for x in visual elements if "checkbox" in x . type ] math symbols = [ x for x in visual elements if x . type == "math formula" ] if checkboxes : print ( f " { len ( checkboxes ) } checkboxes detected:" ) print ( f " First checkbox: { repr ( checkboxes [ 0 ] . type ) } " ) print ( f " Last checkbox: { repr ( checkboxes [ - 1 ] . type ) } " ) if math symbols : print ( f " { len ( math symbols ) } math symbols detected:" ) first math symbol text = layout to text ( math symbols [ 0 ] . layout , text ) print ( f " First math symbol: { repr ( first math symbol text ) } " ) def process document ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , process options : Optional [ documentai .

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- Source ID: `site-docs-root-2`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Document AI Guides Send feedback Enterprise Document OCR Stay organized with collections Save and categorize content based on your preferences.
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "skipHumanReview": skipHumanReview , "rawDocument": { "mimeType": " MIME TYPE ", "content": " IMAGE CONTENT " }, "fieldMask": " FIELD MASK ", "processOptions": { "ocrConfig": { "enableNativePdfParsing": ENABLE NATIVE PDF PARSING , "enableImageQualityScores": ENABLE IMAGE QUALITY SCORES , "enableSymbol": ENABLE SYMBOL , "disableCharacterBoxesDetection": DISABLE CHARACTER BOXES DETECTION , "hints": { "languageHints": [ " LANGUAGE HINTS " ] }, "advancedOcrOptions": [" ADVANCED OCR OPTIONS "], "premiumFeatures": { "enableSelectionMarkDetection": ENABLE SELECTION MARK DETECTION , "computeStyleInfo": COMPUTE STYLE INFO , "enableMathOcr": ENABLE MATH OCR , } }, "individualPageSelector" { "pages": [ INDIVIDUAL PAGES ] } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- For more information, see Set up authentication for a local development environment . from typing import Optional , Sequence from google.api core.client options import ClientOptions from google.cloud import documentai TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR PROCESSOR LOCATION" # Format is "us" or "eu" processor id = "YOUR PROCESSOR ID" # Create processor before running sample processor version = "rc" # Refer to https://cloud.google.com/document-ai/docs/manage-processor-versions for more information file path = "/path/to/local/pdf" mime type = "application/pdf" # Refer to https://cloud.google.com/document-ai/docs/file-types for supported file types def process document ocr sample ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , ) - > None : Optional: Additional configurations for Document OCR Processor.
- VisualElement ], text : str ) - > None : """ Only supported in version pretrained-ocr-v2.0-2023-06-02 """ checkboxes = [ x for x in visual elements if "checkbox" in x . type ] math symbols = [ x for x in visual elements if x . type == "math formula" ] if checkboxes : print ( f " { len ( checkboxes ) } checkboxes detected:" ) print ( f " First checkbox: { repr ( checkboxes [ 0 ] . type ) } " ) print ( f " Last checkbox: { repr ( checkboxes [ - 1 ] . type ) } " ) if math symbols : print ( f " { len ( math symbols ) } math symbols detected:" ) first math symbol text = layout to text ( math symbols [ 0 ] . layout , text ) print ( f " First math symbol: { repr ( first math symbol text ) } " ) def process document ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , process options : Optional [ documentai .

### Custom-based extraction \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-based-extraction](https://docs.cloud.google.com/document-ai/docs/custom-based-extraction)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Document AI Guides Send feedback Custom-based extraction Stay organized with collections Save and categorize content based on your preferences.
- Custom model training and extraction lets you to build your own model designed specifically for your documents without the use of generative AI.
- Auto-labeling with the foundation model The foundation model can accurately extract fields for a variety of document types, but you can also provide additional training data to improve the accuracy of the model for specific document structures.
- Document AI uses the label names you define and previous annotations to label documents at scale with auto-labeling.

