---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.510Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "Policy Engine"
feature_slug: "policy-engine"
latest_feature_date: "2023-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-warehouse/docs"
  - "https://docs.cloud.google.com/document-warehouse/docs/overview"
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
keywords:
  - "policy"
  - "engine"
  - "automatically"
  - "populates"
  - "ruleid"
  - "ruleset"
  - "creation"
  - "supports"
---

# Policy Engine

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Automatically populates RuleId on RuleSet creation and supports rule updates using an existing RuleId.

## Extended Definition

Automatically populates RuleId on RuleSet creation and supports rule updates using an existing RuleId.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)

## Supporting Pages

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Language hints The OCR processor supports language hints that you define to improve OCR engine performance.
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "skipHumanReview": skipHumanReview , "rawDocument": { "mimeType": " MIME TYPE ", "content": " IMAGE CONTENT " }, "fieldMask": " FIELD MASK ", "processOptions": { "ocrConfig": { "enableNativePdfParsing": ENABLE NATIVE PDF PARSING , "enableImageQualityScores": ENABLE IMAGE QUALITY SCORES , "enableSymbol": ENABLE SYMBOL , "disableCharacterBoxesDetection": DISABLE CHARACTER BOXES DETECTION , "hints": { "languageHints": [ " LANGUAGE HINTS " ] }, "advancedOcrOptions": [" ADVANCED OCR OPTIONS "], "premiumFeatures": { "enableSelectionMarkDetection": ENABLE SELECTION MARK DETECTION , "computeStyleInfo": COMPUTE STYLE INFO , "enableMathOcr": ENABLE MATH OCR , } }, "individualPageSelector" { "pages": [ INDIVIDUAL PAGES ] } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Known discrepancies between the Vision AI API response and Document AI API response and converter: The Vision AI API response populates only vertices for image requests, and populates only normalized vertices for PDF requests.
- You can also use Enterprise Document OCR to handle tasks like the following: Digitizing text: Extract text and layout data from documents for search, rules-based, document-processing pipelines, or custom-model creation.

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- Source ID: `site-api-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Policy Engine, Policy APIs Engine: The server that evaluates policies and takes actions API: Admin API used to create/update/read/delete policies.
- Migrate vs Federate flexibility : The product supports a flexible architecture such that your document content can be migrated to Document AI Warehouse or stay-in-place if there are constraints in migrating content (we simply index the content and metadata) Integrated with Document Workflows - this integrates with Google Workflows and other document processing workflows by supporting: Properties - that represent the state of a document in a workflow and APIs that workflows can use to update the state of documents Doc Explorer interface - to track the progress of documents through a workflow pipeline, enabling a human to inspect, manage failures and stalled documents in the workflow pipeline.
- Conditional Notifications - where documents meeting a certain conditions can trigger/notify a workflow via a Pub/Sub topic or a Web API call: for example, Trigger: OnUpdate; Condition: (DocType=Invoice and TotalAmount>$1000) -> send Pub/Sub Notification Policy Management and Compliance Enforcement : conditional notifications and scheduled notifications can be used to trigger workflows that enforce policies (for example, records management, retention and disposition, legal holds) on specific documents in Document AI Warehouse.
- Integrated with DocAI : Document AI Warehouse is integrated with Document AI processors at several levels: Document AI processing in UI : Document AI Warehouse UI enables users to upload either scanned PDFs/TIFFs or special document types, both of which are automatically extracted by Document AI OCR or specialized processors respectively before the document is indexed into Document AI Warehouse.

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- Source ID: `site-api-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Policy Engine, Policy APIs Engine: The server that evaluates policies and takes actions API: Admin API used to create/update/read/delete policies.
- Migrate vs Federate flexibility : The product supports a flexible architecture such that your document content can be migrated to Document AI Warehouse or stay-in-place if there are constraints in migrating content (we simply index the content and metadata) Integrated with Document Workflows - this integrates with Google Workflows and other document processing workflows by supporting: Properties - that represent the state of a document in a workflow and APIs that workflows can use to update the state of documents Doc Explorer interface - to track the progress of documents through a workflow pipeline, enabling a human to inspect, manage failures and stalled documents in the workflow pipeline.
- Conditional Notifications - where documents meeting a certain conditions can trigger/notify a workflow via a Pub/Sub topic or a Web API call: for example, Trigger: OnUpdate; Condition: (DocType=Invoice and TotalAmount>$1000) -> send Pub/Sub Notification Policy Management and Compliance Enforcement : conditional notifications and scheduled notifications can be used to trigger workflows that enforce policies (for example, records management, retention and disposition, legal holds) on specific documents in Document AI Warehouse.
- Integrated with DocAI : Document AI Warehouse is integrated with Document AI processors at several levels: Document AI processing in UI : Document AI Warehouse UI enables users to upload either scanned PDFs/TIFFs or special document types, both of which are automatically extracted by Document AI OCR or specialized processors respectively before the document is indexed into Document AI Warehouse.

