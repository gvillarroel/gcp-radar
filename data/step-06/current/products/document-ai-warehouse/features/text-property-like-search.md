---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.518Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "Text property LIKE search"
feature_slug: "text-property-like-search"
latest_feature_date: "2022-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-warehouse/docs"
  - "https://docs.cloud.google.com/document-warehouse/docs/overview"
  - "https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document"
keywords:
  - "text"
  - "property"
  - "like"
  - "search"
  - "conditions"
  - "against"
  - "properties"
  - "now"
---

# Text property LIKE search

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Search conditions against text properties now support the LIKE operator.

## Extended Definition

Search conditions against text properties now support the LIKE operator.

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
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Search : the product supports rich semantic search, including the following features: Full-text search Filtering search results by Properties (date, numeric, enum, text).
- Users can search for documents within a folder hierarchy e.g. search within AllLoans->State UI - the product includes Web-accessible UI with the following features: Doc Explorer: search documents, filter search results, select documents to bulk-update properties or delete Doc Viewer: view documents, view/update its properties,assign ACLs, add to folders Upload: upload documents and run them through a DocAI extractor (either OCR or a supported specialized parser such as Invoice DocAI).
- Documents include structured (e.g. forms, invoices) and unstructured (e.g. contracts, research papers) and their Properties (metadata) includes AI-extracted data from documents and manually or AI-assigned tags (for example, account number, loan ID, document type).
- Conceptual Overview Document AI Warehouse is an integrated, cloud-based platform to store, search, organize, govern and analyze documents and their structured metadata (called Properties).

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- Source ID: `site-api-reference`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Search : the product supports rich semantic search, including the following features: Full-text search Filtering search results by Properties (date, numeric, enum, text).
- Users can search for documents within a folder hierarchy e.g. search within AllLoans->State UI - the product includes Web-accessible UI with the following features: Doc Explorer: search documents, filter search results, select documents to bulk-update properties or delete Doc Viewer: view documents, view/update its properties,assign ACLs, add to folders Upload: upload documents and run them through a DocAI extractor (either OCR or a supported specialized parser such as Invoice DocAI).
- Documents include structured (e.g. forms, invoices) and unstructured (e.g. contracts, research papers) and their Properties (metadata) includes AI-extracted data from documents and manually or AI-assigned tags (for example, account number, loan ID, document type).
- Conceptual Overview Document AI Warehouse is an integrated, cloud-based platform to store, search, organize, govern and analyze documents and their structured metadata (called Properties).

### Document AI Warehouse \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document](https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "referenceId" : string , "displayName" : string , "title" : string , "displayUri" : string , "documentSchemaName" : string , "properties" : [ { object ( Property ) } ] , "updateTime" : string , "createTime" : string , "rawDocumentFileType" : enum ( RawDocumentFileType ) , "contentCategory" : enum ( ContentCategory ) , "textExtractionDisabled" : boolean , "textExtractionEnabled" : boolean , "creator" : string , "updater" : string , "dispositionTime" : string , "legalHold" : boolean , // Union field structured content can be only one of the following: "plainText" : string , "cloudAiDocument" : { object ( Document ) } // End of list of possible types for union field structured content . // Union field raw document can be only one of the following: "rawDocumentPath" : string , "inlineRawDocument" : string // End of list of possible types for union field raw document . } Fields name string The resource name of the document.
- JSON representation { "name" : string , // Union field values can be only one of the following: "integerValues" : { object ( IntegerArray ) } , "floatValues" : { object ( FloatArray ) } , "textValues" : { object ( TextArray ) } , "enumValues" : { object ( EnumArray ) } , "propertyValues" : { object ( PropertyArray ) } , "dateTimeValues" : { object ( DateTimeArray ) } , "mapProperty" : { object ( MapProperty ) } , "timestampValues" : { object ( TimestampArray ) } // End of list of possible types for union field values . } Fields name string Required.
- Specific type value(s) obtained from Document AIs Property.mention text field. values can be only one of the following: integerValues object ( IntegerArray ) Integer property values. floatValues object ( FloatArray ) Float property values. textValues object ( TextArray ) String/text property values. enumValues object ( EnumArray ) Enum property values. propertyValues object ( PropertyArray ) Nested structured data property values. dateTimeValues object ( DateTimeArray ) date time property values.
- JSON representation { "textAnchor" : { object ( TextAnchor ) } , "type" : string , "mentionText" : string , "mentionId" : string , "confidence" : number , "pageAnchor" : { object ( PageAnchor ) } , "id" : string , "normalizedValue" : { object ( NormalizedValue ) } , "properties" : [ { object ( Entity ) } ] , "provenance" : { object ( Provenance ) } , "redacted" : boolean } Fields textAnchor object ( TextAnchor ) Optional.

