# Document AI Warehouse

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 27
Unique features: 32

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2024-01-16 | Document AI Warehouse | 2025-01-16 | Document AI Warehouse is being retired and will no longer be available after January 16, 2025; deprecated on 2025-01-16. |
| 2023-10-02 | Root folder filtering |  | Enables filtering by root folder. |
| 2023-09-25 | Pipeline API Cloud Function document request fields |  | Adds the doc_ai_document_type and doc_ai_document_path fields to the Pipeline API Cloud Function request. |
| 2023-09-25 | Pipeline API Cloud Function metadata-only response flag |  | Adds the store_document_metadata_only boolean flag to the Pipeline API Cloud Function response. |
| 2023-09-11 | Resource location validation |  | Validates resource locations on all Document Warehouse API requests. |
| 2023-08-11 | Folder linking during ingestion |  | Allows pipelines to link documents to a specified folder during data ingestion. |
| 2023-07-13 | GenAI search |  | Enables private preview GenAI search for documents up to 25K words. |
| 2023-06-16 | Empty integer and float property filtering |  | Allows filtering on empty integer and float properties. |
| 2023-04-19 | Skip ingested documents flag |  | Adds a Cloud Storage ingest pipeline flag to skip documents that have already been ingested. |
| 2023-04-07 | Datetime property filtering |  | Adds datetime property filtering in the Document AI Warehouse UI. |
| 2023-03-29 | TIFF file support |  | Allows users to upload and view TIFF files in the UI. |
| 2023-03-28 | BigQuery Connector |  | Exports document metadata in batch to BigQuery for analysis, reporting, and dashboarding. |
| 2023-03-28 | Cloud Storage ingest pipeline |  | Ingests documents from Cloud Storage into Document AI Warehouse. |
| 2023-03-28 | Export to Workbench pipeline |  | Exports documents from Document AI Warehouse to Workbench. |
| 2023-03-28 | Process with DocAI pipeline |  | Processes documents with Document AI as part of the pipeline. |
| 2023-03-22 | Policy Engine |  | Automatically populates RuleId on RuleSet creation and supports rule updates using an existing RuleId. |
| 2023-02-23 | TIFF document rendering |  | Returns a converted PNG image in the GetDocument response for TIFF files. |
| 2023-01-31 | Document table filter URL sync |  | Synchronizes document table filter and text search state with the URL for sharing and saving filter settings. |
| 2023-01-31 | Raw document TIFF file type field |  | Adds a field that marks a raw document file type as TIFF. |
| 2023-01-09 | Conditional project ACLs |  | Allows project ACL conditions based on document schema ID or property name. |
| 2022-12-08 | AutoProvision operation IDs |  | Returns an operation ID for AutoProvision operations that complete immediately. |
| 2022-12-08 | Operation service |  | Enables the operation service for Document AI Warehouse v1. |
| 2022-12-08 | Search query syntax |  | Adds partial support for Google AIP-160 search syntax, including literals, logical operators, negation, comparisons, and functions. |
| 2022-12-08 | VPC Service Controls |  | Adds public support for VPC Service Controls in Document AI Warehouse. |
| 2022-11-10 | Enum property value validation |  | Validates enum property values against the schema by default. |
| 2022-11-10 | Text extraction |  | Enables text extraction in Document AI Warehouse. |
| 2022-10-17 | EnumTypeOptions validationCheckDisabled flag |  | EnumTypeOptions includes a flag that disables validation of ENUM values. |
| 2022-10-17 | Search query string shuffling |  | Search queries against text properties now support shuffled ordering of query strings. |
| 2022-10-17 | Search word stemming |  | Text property search now supports stemming of search words. |
| 2022-10-17 | Semantic search |  | Text property search now supports semantic search. |
| 2022-10-17 | Text property LIKE search |  | Search conditions against text properties now support the LIKE operator. |
| 2022-10-10 | Document AI Warehouse V1 APIs |  | The first version of the Document AI Warehouse APIs is available. |

Source file slug: `document-ai-warehouse.md`

