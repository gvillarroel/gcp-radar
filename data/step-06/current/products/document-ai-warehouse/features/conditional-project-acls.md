---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.512Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "Conditional project ACLs"
feature_slug: "conditional-project-acls"
latest_feature_date: "2023-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-warehouse/docs"
  - "https://docs.cloud.google.com/document-warehouse/docs/overview"
  - "https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document"
keywords:
  - "conditional"
  - "project"
  - "acls"
  - "allows"
  - "acl"
  - "conditions"
  - "based"
  - "document"
---

# Conditional project ACLs

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Allows project ACL conditions based on document schema ID or property name.

## Extended Definition

Allows project ACL conditions based on document schema ID or property name.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- [https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document](https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document)

## Supporting Pages

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- Source ID: `site-api-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Conditional Notifications - where documents meeting a certain conditions can trigger/notify a workflow via a Pub/Sub topic or a Web API call: for example, Trigger: OnUpdate; Condition: (DocType=Invoice and TotalAmount>$1000) -> send Pub/Sub Notification Policy Management and Compliance Enforcement : conditional notifications and scheduled notifications can be used to trigger workflows that enforce policies (for example, records management, retention and disposition, legal holds) on specific documents in Document AI Warehouse.
- Users can search for documents within a folder hierarchy e.g. search within AllLoans->State UI - the product includes Web-accessible UI with the following features: Doc Explorer: search documents, filter search results, select documents to bulk-update properties or delete Doc Viewer: view documents, view/update its properties,assign ACLs, add to folders Upload: upload documents and run them through a DocAI extractor (either OCR or a supported specialized parser such as Invoice DocAI).
- Search within a root-folder hierarchy Operators for search keywords: "" exact match, or, + and, - exclude Organization : Flexible Folder management Documents can be cataloged into one or more folders, based on application (for example, an ID card is placed in a KYC folder, Loan folder, Bank Account folder), without replicating the document.
- Embeddable UI: the Doc Explorer and the Doc Viewer (for PDFs) components can be integrated in customer's applications Connectors to common on-premise and cloud repositories: We provide a Cloud Storage to Document AI Warehouse connector (as a separate template based on Google Workflows ) that can be customized/extended to other repositories.

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- Source ID: `site-api-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Conditional Notifications - where documents meeting a certain conditions can trigger/notify a workflow via a Pub/Sub topic or a Web API call: for example, Trigger: OnUpdate; Condition: (DocType=Invoice and TotalAmount>$1000) -> send Pub/Sub Notification Policy Management and Compliance Enforcement : conditional notifications and scheduled notifications can be used to trigger workflows that enforce policies (for example, records management, retention and disposition, legal holds) on specific documents in Document AI Warehouse.
- Users can search for documents within a folder hierarchy e.g. search within AllLoans->State UI - the product includes Web-accessible UI with the following features: Doc Explorer: search documents, filter search results, select documents to bulk-update properties or delete Doc Viewer: view documents, view/update its properties,assign ACLs, add to folders Upload: upload documents and run them through a DocAI extractor (either OCR or a supported specialized parser such as Invoice DocAI).
- Search within a root-folder hierarchy Operators for search keywords: "" exact match, or, + and, - exclude Organization : Flexible Folder management Documents can be cataloged into one or more folders, based on application (for example, an ID card is placed in a KYC folder, Loan folder, Bank Account folder), without replicating the document.
- Embeddable UI: the Doc Explorer and the Doc Viewer (for PDFs) components can be integrated in customer's applications Connectors to common on-premise and cloud repositories: We provide a Cloud Storage to Document AI Warehouse connector (as a separate template based on Google Workflows ) that can be customized/extended to other repositories.

### Document AI Warehouse \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document](https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document)
- Source ID: `site-api-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "pageNumber" : integer , "image" : { object ( Image ) } , "transforms" : [ { object ( Matrix ) } ] , "dimension" : { object ( Dimension ) } , "layout" : { object ( Layout ) } , "detectedLanguages" : [ { object ( DetectedLanguage ) } ] , "blocks" : [ { object ( Block ) } ] , "paragraphs" : [ { object ( Paragraph ) } ] , "lines" : [ { object ( Line ) } ] , "tokens" : [ { object ( Token ) } ] , "visualElements" : [ { object ( VisualElement ) } ] , "tables" : [ { object ( Table ) } ] , "formFields" : [ { object ( FormField ) } ] , "symbols" : [ { object ( Symbol ) } ] , "detectedBarcodes" : [ { object ( DetectedBarcode ) } ] , "imageQualityScores" : { object ( ImageQualityScores ) } , "provenance" : { object ( Provenance ) } } Fields pageNumber integer 1-based index for current page in a parent Document .
- JSON representation { "shardIndex" : string , "shardCount" : string , "textOffset" : string } Fields shardIndex string ( int64 format) The 0-based index of this shard. shardCount string ( int64 format) Total number of shards. textOffset string ( int64 format) The index of the first character in Document.text in the overall document global text.
- Format: projects/{projectNumber}/locations/{location}/documentSchemas/{document schema id}. properties[] object ( Property ) List of values that are user supplied metadata. updateTime string ( Timestamp format) Output only.
- This can include one or more parent (when documents are merged.) This field represents the index into the revisions field. parentIds[] string The revisions that this revision is based on.

