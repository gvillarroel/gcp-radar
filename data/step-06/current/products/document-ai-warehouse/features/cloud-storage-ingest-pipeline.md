---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.508Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "Cloud Storage ingest pipeline"
feature_slug: "cloud-storage-ingest-pipeline"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-warehouse/docs"
  - "https://docs.cloud.google.com/document-warehouse/docs/overview"
  - "https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document"
keywords:
  - "storage"
  - "ingest"
  - "pipeline"
  - "ingests"
  - "documents"
  - "into"
  - "document"
  - "ai"
---

# Cloud Storage ingest pipeline

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Ingests documents from Cloud Storage into Document AI Warehouse.

## Extended Definition

Ingests documents from Cloud Storage into Document AI Warehouse.

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
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Doc extractors (DocAI and others) Documents may be extracted by an AI pipeline, so that the extractions can be ingested and managed in Document AI Warehouse (as Metadata) along with the Raw Document.
- Note that Document AI Warehouse can work with any extraction pipeline that calls Document AI Warehouse APIs to ingest/update documents.
- Migrate vs Federate flexibility : The product supports a flexible architecture such that your document content can be migrated to Document AI Warehouse or stay-in-place if there are constraints in migrating content (we simply index the content and metadata) Integrated with Document Workflows - this integrates with Google Workflows and other document processing workflows by supporting: Properties - that represent the state of a document in a workflow and APIs that workflows can use to update the state of documents Doc Explorer interface - to track the progress of documents through a workflow pipeline, enabling a human to inspect, manage failures and stalled documents in the workflow pipeline.
- Search within a root-folder hierarchy Operators for search keywords: "" exact match, or, + and, - exclude Organization : Flexible Folder management Documents can be cataloged into one or more folders, based on application (for example, an ID card is placed in a KYC folder, Loan folder, Bank Account folder), without replicating the document.

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- Source ID: `site-api-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Doc extractors (DocAI and others) Documents may be extracted by an AI pipeline, so that the extractions can be ingested and managed in Document AI Warehouse (as Metadata) along with the Raw Document.
- Note that Document AI Warehouse can work with any extraction pipeline that calls Document AI Warehouse APIs to ingest/update documents.
- Migrate vs Federate flexibility : The product supports a flexible architecture such that your document content can be migrated to Document AI Warehouse or stay-in-place if there are constraints in migrating content (we simply index the content and metadata) Integrated with Document Workflows - this integrates with Google Workflows and other document processing workflows by supporting: Properties - that represent the state of a document in a workflow and APIs that workflows can use to update the state of documents Doc Explorer interface - to track the progress of documents through a workflow pipeline, enabling a human to inspect, manage failures and stalled documents in the workflow pipeline.
- Search within a root-folder hierarchy Operators for search keywords: "" exact match, or, + and, - exclude Organization : Flexible Folder management Documents can be cataloged into one or more folders, based on application (for example, an ID card is placed in a KYC folder, Loan folder, Bank Account folder), without replicating the document.

### Document AI Warehouse \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document](https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document)
- Source ID: `site-api-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- This can include one or more parent (when documents are merged.) This field represents the index into the revisions field. parentIds[] string The revisions that this revision is based on.
- It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
- The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents.
- JSON representation { "name" : string , "referenceId" : string , "displayName" : string , "title" : string , "displayUri" : string , "documentSchemaName" : string , "properties" : [ { object ( Property ) } ] , "updateTime" : string , "createTime" : string , "rawDocumentFileType" : enum ( RawDocumentFileType ) , "contentCategory" : enum ( ContentCategory ) , "textExtractionDisabled" : boolean , "textExtractionEnabled" : boolean , "creator" : string , "updater" : string , "dispositionTime" : string , "legalHold" : boolean , // Union field structured content can be only one of the following: "plainText" : string , "cloudAiDocument" : { object ( Document ) } // End of list of possible types for union field structured content . // Union field raw document can be only one of the following: "rawDocumentPath" : string , "inlineRawDocument" : string // End of list of possible types for union field raw document . } Fields name string The resource name of the document.

