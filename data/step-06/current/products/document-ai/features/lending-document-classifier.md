---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.075Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Lending document classifier"
feature_slug: "lending-document-classifier"
latest_feature_date: "2020-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema"
  - "https://docs.cloud.google.com/document-ai/docs/custom-classifier"
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/label-documents"
keywords:
  - "lending"
  - "document"
  - "classifier"
  - "categorizes"
  - "documents"
  - "by"
  - "form"
  - "type"
---

# Lending document classifier

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Lending document classifier categorizes lending documents by form type.

## Extended Definition

Lending document classifier categorizes lending documents by form type.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema](https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema)
- [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)
- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)

## Supporting Pages

### DocumentSchema \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema](https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema)
- Source ID: `site-api-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "documentSplitter" : boolean , "documentAllowMultipleLabels" : boolean , "prefixedNamingOnProperties" : boolean , "skipNamingValidation" : boolean } Fields documentSplitter boolean If true, a document entity type can be applied to subdocument (splitting).
- So the string values in DocumentSchema.EntityType.name and DocumentSchema.EntityType.Property.name won't be checked.
- Otherwise, it can only be applied to the entire document (classification). documentAllowMultipleLabels boolean If true, on a given page, there can be multiple document annotations covering it. prefixedNamingOnProperties boolean If set, all the nested entities must be prefixed with the parents. skipNamingValidation boolean If set, this will skip the naming format validation in the schema.
- This type is subject to the same conventions as the Entity.base types field. occurrenceType enum ( OccurrenceType ) Occurrence type limits the number of instances an entity type appears in the document. method enum ( Method ) Specifies how the entity's value is obtained. propertyMetadata object ( PropertyMetadata ) Any additional metadata about the property can be added here.

### "Create, use, and manage a custom document classifier \_|\_ Document AI \_\

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- This bucket contains pre-labeled documents in the Document JSON format. cloud-samples-data/documentai/Custom/Patents/JSON/Classification-InventionType From the Data split list, select Auto-split .
- You typically would use a custom classifier on documents that are different types, then use the identification to pass the documents to an extraction processor to extract the entities.
- Enable the APIs Required roles To get the permissions that you need to create a custom classifier, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create a custom classifier in the Google Cloud console You can create custom classifiers that are specifically suited to your documents and trained and evaluated with your data.

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Input Enable by setting ProcessOptions.ocrConfig.advancedOcrOptions to ["legacy layout"] in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "advancedOcrOptions" : [ "legacy layout" ] } } } Specify a page range By default, OCR extracts text and layout information from all pages in the documents.
- Here is an example of LaTeX representation: Image detected Conversion to LaTeX Input Enable by setting ProcessOptions.ocrConfig.premiumFeatures.enableMathOcr to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "premiumFeatures" : { "enableMathOcr" : true } } } } Output The Math OCR output appears in Document.pages[].visualElements[] with "type": "math formula" . "visualElements" : [ { "layout" : { "textAnchor" : { "textSegments" : [ { "endIndex" : "46" } ] }, "confidence" : 1 , "boundingPoly" : { "normalizedVertices" : [ { "x" : 0.14662756 , "y" : 0.27891156 }, { "x" : 0.9032258 , "y" : 0.27891156 }, { "x" : 0.9032258 , "y" : 0.8027211 }, { "x" : 0.14662756 , "y" : 0.8027211 } ] }, "orientation" : "PAGE UP" }, "type" : "math formula" } ] You can check the full Document JSON output in this link .
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "skipHumanReview": skipHumanReview , "rawDocument": { "mimeType": " MIME TYPE ", "content": " IMAGE CONTENT " }, "fieldMask": " FIELD MASK ", "processOptions": { "ocrConfig": { "enableNativePdfParsing": ENABLE NATIVE PDF PARSING , "enableImageQualityScores": ENABLE IMAGE QUALITY SCORES , "enableSymbol": ENABLE SYMBOL , "disableCharacterBoxesDetection": DISABLE CHARACTER BOXES DETECTION , "hints": { "languageHints": [ " LANGUAGE HINTS " ] }, "advancedOcrOptions": [" ADVANCED OCR OPTIONS "], "premiumFeatures": { "enableSelectionMarkDetection": ENABLE SELECTION MARK DETECTION , "computeStyleInfo": COMPUTE STYLE INFO , "enableMathOcr": ENABLE MATH OCR , } }, "individualPageSelector" { "pages": [ INDIVIDUAL PAGES ] } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Input Enable by setting ProcessOptions.ocrConfig.premiumFeatures.enableSelectionMarkDetection to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "premiumFeatures" : { "enableSelectionMarkDetection" : true } } } } Output The checkbox output appears in Document.pages[].visualElements[] with "type": "unfilled checkbox" or "type": "filled checkbox" . "visualElements" : [ { "layout" : { "confidence" : 0.89363575 , "boundingPoly" : { "vertices" : [ { "x" : 11 , "y" : 24 }, { "x" : 37 , "y" : 24 }, { "x" : 37 , "y" : 56 }, { "x" : 11 , "y" : 56 } ], "normalizedVertices" : [ { "x" : 0.017488075 , "y" : 0.38709676 }, { "x" : 0.05882353 , "y" : 0.38709676 }, { "x" : 0.05882353 , "y" : 0.9032258 }, { "x" : 0.017488075 , "y" : 0.9032258 } ] } }, "type" : "unfilled checkbox" }, { "layout" : { "confidence" : 0.9148201 , "boundingPoly" : ... }, "type" : "filled checkbox" } ], You can check the full Document JSON output in this link .

### Label documents \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Initial reviews : The first few (10 or so) documents labeled for a use case by a new labeler should be reviewed before large numbers of documents are labeled to prevent a large number of mistakes that need to be corrected.
- Use the import toolkit to convert existing labels from another system, for example, CSV format label to JSON documents.
- Each time selective labeling is performed, the most diverse (up to 30) documents from the dataset is selected.
- When the suggested documents are labeled, you should see the following information bar recommending training.

