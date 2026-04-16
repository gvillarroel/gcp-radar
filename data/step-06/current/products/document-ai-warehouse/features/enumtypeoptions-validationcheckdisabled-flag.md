---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.515Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "EnumTypeOptions validationCheckDisabled flag"
feature_slug: "enumtypeoptions-validationcheckdisabled-flag"
latest_feature_date: "2022-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document"
  - "https://docs.cloud.google.com/document-warehouse/docs"
  - "https://docs.cloud.google.com/document-warehouse/docs/overview"
keywords:
  - "enumtypeoptions"
  - "validationcheckdisabled"
  - "flag"
  - "includes"
  - "disables"
  - "validation"
  - "enum"
  - "values"
---

# EnumTypeOptions validationCheckDisabled flag

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

EnumTypeOptions includes a flag that disables validation of ENUM values.

## Extended Definition

EnumTypeOptions includes a flag that disables validation of ENUM values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document](https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document)
- [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)

## Supporting Pages

### Document AI Warehouse \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document](https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document)
- Source ID: `site-api-reference`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , // Union field values can be only one of the following: "integerValues" : { object ( IntegerArray ) } , "floatValues" : { object ( FloatArray ) } , "textValues" : { object ( TextArray ) } , "enumValues" : { object ( EnumArray ) } , "propertyValues" : { object ( PropertyArray ) } , "dateTimeValues" : { object ( DateTimeArray ) } , "mapProperty" : { object ( MapProperty ) } , "timestampValues" : { object ( TimestampArray ) } // End of list of possible types for union field values . } Fields name string Required.
- Specific type value(s) obtained from Document AIs Property.mention text field. values can be only one of the following: integerValues object ( IntegerArray ) Integer property values. floatValues object ( FloatArray ) Float property values. textValues object ( TextArray ) String/text property values. enumValues object ( EnumArray ) Enum property values. propertyValues object ( PropertyArray ) Nested structured data property values. dateTimeValues object ( DateTimeArray ) date time property values.
- JSON representation { "values" : [ string ] } Fields values[] string List of enum values.
- This must match defined set of enums in document schema using EnumTypeOptions.

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- Source ID: `site-api-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Currently Metadata includes the following types: Free Text values, Enum, Numeric, Date, Map (a JSON hierarchy of key-value pairs).
- Users can search for documents within a folder hierarchy e.g. search within AllLoans->State UI - the product includes Web-accessible UI with the following features: Doc Explorer: search documents, filter search results, select documents to bulk-update properties or delete Doc Viewer: view documents, view/update its properties,assign ACLs, add to folders Upload: upload documents and run them through a DocAI extractor (either OCR or a supported specialized parser such as Invoice DocAI).
- Documents include structured (e.g. forms, invoices) and unstructured (e.g. contracts, research papers) and their Properties (metadata) includes AI-extracted data from documents and manually or AI-assigned tags (for example, account number, loan ID, document type).
- Search : the product supports rich semantic search, including the following features: Full-text search Filtering search results by Properties (date, numeric, enum, text).

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- Source ID: `site-api-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Currently Metadata includes the following types: Free Text values, Enum, Numeric, Date, Map (a JSON hierarchy of key-value pairs).
- Users can search for documents within a folder hierarchy e.g. search within AllLoans->State UI - the product includes Web-accessible UI with the following features: Doc Explorer: search documents, filter search results, select documents to bulk-update properties or delete Doc Viewer: view documents, view/update its properties,assign ACLs, add to folders Upload: upload documents and run them through a DocAI extractor (either OCR or a supported specialized parser such as Invoice DocAI).
- Documents include structured (e.g. forms, invoices) and unstructured (e.g. contracts, research papers) and their Properties (metadata) includes AI-extracted data from documents and manually or AI-assigned tags (for example, account number, loan ID, document type).
- Search : the product supports rich semantic search, including the following features: Full-text search Filtering search results by Properties (date, numeric, enum, text).

