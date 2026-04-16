---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.503Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "Root folder filtering"
feature_slug: "root-folder-filtering"
latest_feature_date: "2023-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-warehouse/docs"
  - "https://docs.cloud.google.com/document-warehouse/docs/overview"
  - "https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-create-folder-link-document"
keywords:
  - "root"
  - "folder"
  - "filtering"
  - "enables"
---

# Root folder filtering

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Enables filtering by root folder.

## Extended Definition

Enables filtering by root folder.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-create-folder-link-document](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-create-folder-link-document)

## Supporting Pages

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- Source ID: `site-api-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Search within a root-folder hierarchy Operators for search keywords: "" exact match, or, + and, - exclude Organization : Flexible Folder management Documents can be cataloged into one or more folders, based on application (for example, an ID card is placed in a KYC folder, Loan folder, Bank Account folder), without replicating the document.
- Users can search for documents within a folder hierarchy e.g. search within AllLoans->State UI - the product includes Web-accessible UI with the following features: Doc Explorer: search documents, filter search results, select documents to bulk-update properties or delete Doc Viewer: view documents, view/update its properties,assign ACLs, add to folders Upload: upload documents and run them through a DocAI extractor (either OCR or a supported specialized parser such as Invoice DocAI).
- Integrated with DocAI : Document AI Warehouse is integrated with Document AI processors at several levels: Document AI processing in UI : Document AI Warehouse UI enables users to upload either scanned PDFs/TIFFs or special document types, both of which are automatically extracted by Document AI OCR or specialized processors respectively before the document is indexed into Document AI Warehouse.
- Governance : integrated with IAM and corporate directories Fine-grained Access Control (permissions) at the document and folder levels can be assigned to users and groups to view, edit, manage (share, delete) documents.

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- Source ID: `site-api-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Search within a root-folder hierarchy Operators for search keywords: "" exact match, or, + and, - exclude Organization : Flexible Folder management Documents can be cataloged into one or more folders, based on application (for example, an ID card is placed in a KYC folder, Loan folder, Bank Account folder), without replicating the document.
- Users can search for documents within a folder hierarchy e.g. search within AllLoans->State UI - the product includes Web-accessible UI with the following features: Doc Explorer: search documents, filter search results, select documents to bulk-update properties or delete Doc Viewer: view documents, view/update its properties,assign ACLs, add to folders Upload: upload documents and run them through a DocAI extractor (either OCR or a supported specialized parser such as Invoice DocAI).
- Integrated with DocAI : Document AI Warehouse is integrated with Document AI processors at several levels: Document AI processing in UI : Document AI Warehouse UI enables users to upload either scanned PDFs/TIFFs or special document types, both of which are automatically extracted by Document AI OCR or specialized processors respectively before the document is indexed into Document AI Warehouse.
- Governance : integrated with IAM and corporate directories Fine-grained Access Control (permissions) at the document and folder levels can be assigned to users and groups to view, edit, manage (share, delete) documents.

### "Create a folder and link a document \_|\_ Document AI Warehouse \_|\_ Google\

- URL: [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-create-folder-link-document](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-create-folder-link-document)
- Source ID: `site-iam-reference`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- UserInfo ( id = user id ) ), ) Create a Document for the given schema document response = document client . create document ( request = create document request ) Read the output print ( f "Rule Engine Output: { document response . rule engine output } " ) print ( f "Document Created: { document response . document } " ) return document response def create folder link document ( project number : str , location : str , user id : str ) - > None : Function call to create a folder folder = create folder ( project number , location , user id ) Function call to create a Document document = create document ( project number , location , user id ) Create a Link Service client link client = contentwarehouse .
- For more information, see Set up authentication for a local development environment . from google.cloud import contentwarehouse TODO(developer): Uncomment these variables before running the sample. project number = "YOUR PROJECT NUMBER" location = "us" # Format is 'us' or 'eu' user id = "user:xxxx@example.com" # Format is "user:xxxx@example.com" def create folder ( project number : str , location : str , user id : str ) - > contentwarehouse .
- UserInfo ( id = user id ) ), ) Create a Folder for the given schema folder response = folder client . create document ( request = create folder request ) Read the output print ( f "Rule Engine Output: { folder response . rule engine output } " ) print ( f "Folder Created: { folder response . document } " ) return folder response def create document ( project number : str , location : str , user id : str ) - > contentwarehouse .
- DocumentSchemaServiceClient () The full resource name of the location, e.g.: projects/{project number}/locations/{location} parent = document schema client . common location path ( project = project number , location = location ) Define Folder Schema Request create folder schema request = contentwarehouse .

