---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.506Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "Skip ingested documents flag"
feature_slug: "skip-ingested-documents-flag"
latest_feature_date: "2023-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-warehouse/docs"
  - "https://docs.cloud.google.com/document-warehouse/docs/overview"
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-client-libraries"
keywords:
  - "skip"
  - "ingested"
  - "documents"
  - "flag"
  - "adds"
  - "storage"
  - "ingest"
  - "pipeline"
---

# Skip ingested documents flag

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Adds a Cloud Storage ingest pipeline flag to skip documents that have already been ingested.

## Extended Definition

Adds a Cloud Storage ingest pipeline flag to skip documents that have already been ingested.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- [https://docs.cloud.google.com/document-ai/docs/process-documents-client-libraries](https://docs.cloud.google.com/document-ai/docs/process-documents-client-libraries)

## Supporting Pages

### "Quickstart: Process documents by using client libraries \_|\_ Document AI\

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-client-libraries](https://docs.cloud.google.com/document-ai/docs/process-documents-client-libraries)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . require "google/cloud/document ai/v1" Document AI quickstart @param project id [String] Your Google Cloud project (e.g. "my-project") @param location id [String] Your Processor Location (e.g. "us") @param processor id [String] Your Processor ID (e.g. "a14dae8f043b60bd") @param file path [String] Path to Local File (e.g. "invoice.pdf") @param mime type [String] Refer to https://cloud.google.com/document-ai/docs/file-types (e.g. "application/pdf") def quickstart project id :, location id :, processor id :, file path :, mime type : Create the Document AI client. client = :: Google :: Cloud :: DocumentAI :: V1 :: DocumentProcessorService :: Client . new do config config . endpoint = " #{ location id } -documentai.googleapis.com" end Build the resource name from the project. name = client . processor path ( project : project id , location : location id , processor : processor id ) Read the bytes into memory content = File . binread file path Create request request = Google :: Cloud :: DocumentAI :: V1 :: ProcessRequest . new ( skip human review : true , name : name , raw document : { content : content , mime type : mime type } ) Process document response = client . process document request Handle response puts response . document . text end Congratulations!
- FullName () + "/processors/" + argv [ 3 ]); req . set skip human review ( true ); auto & doc = req . mutable raw document (); doc . set mime type ( "application/pdf" ); std :: ifstream is ( argv [ 4 ]); doc . set content ( std :: string { std :: istreambuf iterator<char> ( is ), {}}); auto resp = client .
- For more information, see Set up authentication for a local development environment . import ( "context" "flag" "fmt" "os" documentai "cloud.google.com/go/documentai/apiv1" "cloud.google.com/go/documentai/apiv1/documentaipb" "google.golang.org/api/option" ) func main () { projectID := flag .
- Process documents by using client libraries This page shows you how to get started with the Document AI API in your favorite programming language.

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/overview](https://docs.cloud.google.com/document-warehouse/docs/overview)
- Source ID: `site-api-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Doc extractors (DocAI and others) Documents may be extracted by an AI pipeline, so that the extractions can be ingested and managed in Document AI Warehouse (as Metadata) along with the Raw Document.
- Note that Document AI Warehouse can work with any extraction pipeline that calls Document AI Warehouse APIs to ingest/update documents.
- Migrate vs Federate flexibility : The product supports a flexible architecture such that your document content can be migrated to Document AI Warehouse or stay-in-place if there are constraints in migrating content (we simply index the content and metadata) Integrated with Document Workflows - this integrates with Google Workflows and other document processing workflows by supporting: Properties - that represent the state of a document in a workflow and APIs that workflows can use to update the state of documents Doc Explorer interface - to track the progress of documents through a workflow pipeline, enabling a human to inspect, manage failures and stalled documents in the workflow pipeline.
- Document AI Warehouse UI may be used to search and track the document flow through such pipelines, visualize the Document AI output for failures in each step of the pipeline and take action on stalled/failed documents.

### Document AI Warehouse overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs](https://docs.cloud.google.com/document-warehouse/docs)
- Source ID: `site-api-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Doc extractors (DocAI and others) Documents may be extracted by an AI pipeline, so that the extractions can be ingested and managed in Document AI Warehouse (as Metadata) along with the Raw Document.
- Note that Document AI Warehouse can work with any extraction pipeline that calls Document AI Warehouse APIs to ingest/update documents.
- Migrate vs Federate flexibility : The product supports a flexible architecture such that your document content can be migrated to Document AI Warehouse or stay-in-place if there are constraints in migrating content (we simply index the content and metadata) Integrated with Document Workflows - this integrates with Google Workflows and other document processing workflows by supporting: Properties - that represent the state of a document in a workflow and APIs that workflows can use to update the state of documents Doc Explorer interface - to track the progress of documents through a workflow pipeline, enabling a human to inspect, manage failures and stalled documents in the workflow pipeline.
- Document AI Warehouse UI may be used to search and track the document flow through such pipelines, visualize the Document AI output for failures in each step of the pipeline and take action on stalled/failed documents.

