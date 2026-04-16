---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.505Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "Resource location validation"
feature_slug: "resource-location-validation"
latest_feature_date: "2023-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document"
  - "https://docs.cloud.google.com/document-ai/docs/reference/rest"
  - "https://docs.cloud.google.com/document-warehouse/docs/reference/rest"
keywords:
  - "resource"
  - "location"
  - "validation"
  - "validates"
  - "locations"
  - "all"
  - "document"
  - "warehouse"
---

# Resource location validation

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Validates resource locations on all Document Warehouse API requests.

## Extended Definition

Validates resource locations on all Document Warehouse API requests.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document](https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document)
- [https://docs.cloud.google.com/document-ai/docs/reference/rest](https://docs.cloud.google.com/document-ai/docs/reference/rest)
- [https://docs.cloud.google.com/document-warehouse/docs/reference/rest](https://docs.cloud.google.com/document-warehouse/docs/reference/rest)

## Supporting Pages

### Document AI Warehouse \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document](https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document)
- Source ID: `site-api-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Format: projects/{projectNumber}/locations/{location}/documentSchemas/{document schema id}. properties[] object ( Property ) List of values that are user supplied metadata. updateTime string ( Timestamp format) Output only.
- Format: projects/{projectNumber}/locations/{location}/documents/{documentId}.
- JSON representation { "name" : string , "referenceId" : string , "displayName" : string , "title" : string , "displayUri" : string , "documentSchemaName" : string , "properties" : [ { object ( Property ) } ] , "updateTime" : string , "createTime" : string , "rawDocumentFileType" : enum ( RawDocumentFileType ) , "contentCategory" : enum ( ContentCategory ) , "textExtractionDisabled" : boolean , "textExtractionEnabled" : boolean , "creator" : string , "updater" : string , "dispositionTime" : string , "legalHold" : boolean , // Union field structured content can be only one of the following: "plainText" : string , "cloudAiDocument" : { object ( Document ) } // End of list of possible types for union field structured content . // Union field raw document can be only one of the following: "rawDocumentPath" : string , "inlineRawDocument" : string // End of list of possible types for union field raw document . } Fields name string The resource name of the document.
- Home Documentation AI and ML Document AI Warehouse Reference Send feedback Document Stay organized with collections Save and categorize content based on your preferences.

### Cloud Document AI API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/reference/rest](https://docs.cloud.google.com/document-ai/docs/reference/rest)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta3.projects.locations.processors.processorVersions Methods batchProcess POST /v1beta3/{name}:batchProcess LRO endpoint to batch process many documents. delete DELETE /v1beta3/{name} Deletes the processor version, all artifacts under the processor version will be deleted. deploy POST /v1beta3/{name}:deploy Deploys the processor version. evaluateProcessorVersion POST /v1beta3/{processorVersion}:evaluateProcessorVersion Evaluates a ProcessorVersion against annotated documents, producing an Evaluation. get GET /v1beta3/{name} Gets a processor version detail. importProcessorVersion POST /v1beta3/{parent}/processorVersions:importProcessorVersion Imports a processor version from source processor version. list GET /v1beta3/{parent}/processorVersions Lists all versions of a processor. process POST /v1beta3/{name}:process Processes a single document. train POST /v1beta3/{parent}/processorVersions:train Trains a new processor version. undeploy POST /v1beta3/{name}:undeploy Undeploys the processor version.
- REST Resource: v1beta3.projects.locations.processors Methods batchProcess POST /v1beta3/{name}:batchProcess LRO endpoint to batch process many documents. create POST /v1beta3/{parent}/processors Creates a processor from the ProcessorType provided. delete DELETE /v1beta3/{name} Deletes the processor, unloads all deployed model artifacts if it was enabled and then deletes all artifacts associated with this processor. disable POST /v1beta3/{name}:disable Disables a processor enable POST /v1beta3/{name}:enable Enables a processor get GET /v1beta3/{name} Gets a processor detail. list GET /v1beta3/{parent}/processors Lists all processors which belong to this project. process POST /v1beta3/{name}:process Processes a single document. setDefaultProcessorVersion POST /v1beta3/{processor}:setDefaultProcessorVersion Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments . updateDataset PATCH /v1beta3/{dataset.name} Updates metadata associated with a dataset.
- REST Resource: v1.projects.locations.processors Methods batchProcess POST /v1/{name}:batchProcess LRO endpoint to batch process many documents. create POST /v1/{parent}/processors Creates a processor from the ProcessorType provided. delete DELETE /v1/{name} Deletes the processor, unloads all deployed model artifacts if it was enabled and then deletes all artifacts associated with this processor. disable POST /v1/{name}:disable Disables a processor enable POST /v1/{name}:enable Enables a processor get GET /v1/{name} Gets a processor detail. list GET /v1/{parent}/processors Lists all processors which belong to this project. process POST /v1/{name}:process Processes a single document. setDefaultProcessorVersion POST /v1/{processor}:setDefaultProcessorVersion Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments .
- This service has the following service endpoints and all URIs below are relative to these service endpoints: https://documentai.googleapis.com https://eu-documentai.googleapis.com https://us-documentai.googleapis.com https://europe-west2-documentai.googleapis.com https://europe-west3-documentai.googleapis.com https://asia-south1-documentai.googleapis.com https://asia-southeast1-documentai.googleapis.com https://australia-southeast1-documentai.googleapis.com https://northamerica-northeast1-documentai.googleapis.com https://us-east7-documentai.googleapis.com REST Resource: v1beta3.projects.locations Methods fetchProcessorTypes GET /v1beta3/{parent}:fetchProcessorTypes Fetches processor types. get GET /v1beta3/{name} Gets information about a location. list GET /v1beta3/{name}/locations Lists information about the supported locations for this service.

### Document AI Warehouse API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/reference/rest](https://docs.cloud.google.com/document-warehouse/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.locations.documents Methods create POST /v1/{parent}/documents Creates a document. delete POST /v1/{name}:delete Deletes a document. fetchAcl POST /v1/{resource}:fetchAcl Gets the access control policy for a resource. get POST /v1/{name}:get Gets a document. linkedSources POST /v1/{parent}/linkedSources Return all source document-links from the document. linkedTargets POST /v1/{parent}/linkedTargets Return all target document-links from the document. lock POST /v1/{name}:lock Lock the document so the document cannot be updated by other users. patch PATCH /v1/{name} Updates a document. search POST /v1/{parent}/documents:search Searches for documents using provided SearchDocumentsRequest . setAcl POST /v1/{resource}:setAcl Sets the access control policy for a resource.
- REST Resource: v1.projects.locations.documentSchemas Methods create POST /v1/{parent}/documentSchemas Creates a document schema. delete DELETE /v1/{name} Deletes a document schema. get GET /v1/{name} Gets a document schema. list GET /v1/{parent}/documentSchemas Lists document schemas. patch PATCH /v1/{name} Updates a Document Schema.
- REST Resource: v1.projects.locations.documents.documentLinks Methods create POST /v1/{parent}/documentLinks Create a link between a source document and a target document. delete POST /v1/{name}:delete Remove the link between the source and target documents.
- REST Resource: v1.projects.locations.documents.referenceId Methods delete POST /v1/{name}:delete Deletes a document. get POST /v1/{name}:get Gets a document. patch PATCH /v1/{name} Updates a document.

