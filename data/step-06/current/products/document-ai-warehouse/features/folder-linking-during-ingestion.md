---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.505Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "Folder linking during ingestion"
feature_slug: "folder-linking-during-ingestion"
latest_feature_date: "2023-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-create-folder-link-document"
  - "https://docs.cloud.google.com/document-warehouse/docs"
  - "https://docs.cloud.google.com/document-warehouse/docs/overview"
keywords:
  - "folder"
  - "linking"
  - "during"
  - "ingestion"
  - "allows"
  - "pipelines"
  - "link"
  - "documents"
---

# Folder linking during ingestion

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Allows pipelines to link documents to a specified folder during data ingestion.

## Extended Definition

Allows pipelines to link documents to a specified folder during data ingestion.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-create-folder-link-document](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-create-folder-link-document)
- [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)

## Supporting Pages

### "Create a folder and link a document \_|\_ Document AI Warehouse \_|\_ Google\

- URL: [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-create-folder-link-document](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-create-folder-link-document)
- Source ID: `site-iam-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a folder and link a document Explore further For detailed documentation that includes this code sample, see the following: Organize documents in folders Code sample Python For more information, see the Document AI Warehouse Python API reference documentation .
- UserInfo ( id = user id ) ), ) Create a Document for the given schema document response = document client . create document ( request = create document request ) Read the output print ( f "Rule Engine Output: { document response . rule engine output } " ) print ( f "Document Created: { document response . document } " ) return document response def create folder link document ( project number : str , location : str , user id : str ) - > None : Function call to create a folder folder = create folder ( project number , location , user id ) Function call to create a Document document = create document ( project number , location , user id ) Create a Link Service client link client = contentwarehouse .
- DocumentSchemaServiceClient () The full resource name of the location, e.g.: projects/{project number}/locations/{location} parent = document schema client . common location path ( project = project number , location = location ) Define Folder Schema Request create folder schema request = contentwarehouse .
- DocumentSchema ( display name = "Test Folder Schema " , document is folder = True , ), ) Create a Folder Schema folder schema = document schema client . create document schema ( request = create folder schema request ) Create a Document(Folder) Service client folder client = contentwarehouse .

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- Source ID: `site-api-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A user needs Edit permission to the Folder and View permission to the Document), in order to add a Document to a Folder Links Links are used to add documents to folders or to link related documents together.
- Users can search for documents within a folder hierarchy e.g. search within AllLoans->State UI - the product includes Web-accessible UI with the following features: Doc Explorer: search documents, filter search results, select documents to bulk-update properties or delete Doc Viewer: view documents, view/update its properties,assign ACLs, add to folders Upload: upload documents and run them through a DocAI extractor (either OCR or a supported specialized parser such as Invoice DocAI).
- Search within a root-folder hierarchy Operators for search keywords: "" exact match, or, + and, - exclude Organization : Flexible Folder management Documents can be cataloged into one or more folders, based on application (for example, an ID card is placed in a KYC folder, Loan folder, Bank Account folder), without replicating the document.
- Governance : integrated with IAM and corporate directories Fine-grained Access Control (permissions) at the document and folder levels can be assigned to users and groups to view, edit, manage (share, delete) documents.

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- Source ID: `site-api-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A user needs Edit permission to the Folder and View permission to the Document), in order to add a Document to a Folder Links Links are used to add documents to folders or to link related documents together.
- Users can search for documents within a folder hierarchy e.g. search within AllLoans->State UI - the product includes Web-accessible UI with the following features: Doc Explorer: search documents, filter search results, select documents to bulk-update properties or delete Doc Viewer: view documents, view/update its properties,assign ACLs, add to folders Upload: upload documents and run them through a DocAI extractor (either OCR or a supported specialized parser such as Invoice DocAI).
- Search within a root-folder hierarchy Operators for search keywords: "" exact match, or, + and, - exclude Organization : Flexible Folder management Documents can be cataloged into one or more folders, based on application (for example, an ID card is placed in a KYC folder, Loan folder, Bank Account folder), without replicating the document.
- Governance : integrated with IAM and corporate directories Fine-grained Access Control (permissions) at the document and folder levels can be assigned to users and groups to view, edit, manage (share, delete) documents.

