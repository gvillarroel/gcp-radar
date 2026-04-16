---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.003Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Checkbox schema support"
feature_slug: "checkbox-schema-support"
latest_feature_date: "2022-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema"
  - "https://docs.cloud.google.com/document-ai/docs/create-dataset"
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
  - "https://docs.cloud.google.com/document-ai/docs/label-documents"
keywords:
  - "checkbox"
  - "schema"
  - "document"
  - "ai"
  - "workbench"
  - "schemas"
  - "can"
  - "define"
---

# Checkbox schema support

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Document AI Workbench schemas can define checkboxes for labeling, annotation, and review.

## Extended Definition

Document AI Workbench schemas can define checkboxes for labeling, annotation, and review.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema](https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema)
- [https://docs.cloud.google.com/document-ai/docs/create-dataset](https://docs.cloud.google.com/document-ai/docs/create-dataset)
- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)

## Supporting Pages

### DocumentSchema \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema](https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema)
- Source ID: `site-api-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Otherwise, it can only be applied to the entire document (classification). documentAllowMultipleLabels boolean If true, on a given page, there can be multiple document annotations covering it. prefixedNamingOnProperties boolean If set, all the nested entities must be prefixed with the parents. skipNamingValidation boolean If set, this will skip the naming format validation in the schema.
- This type is subject to the same conventions as the Entity.base types field. occurrenceType enum ( OccurrenceType ) Occurrence type limits the number of instances an entity type appears in the document. method enum ( Method ) Specifies how the entity's value is obtained. propertyMetadata object ( PropertyMetadata ) Any additional metadata about the property can be added here.
- Home Documentation AI and ML Document AI Reference Send feedback DocumentSchema Stay organized with collections Save and categorize content based on your preferences.
- The schema defines the output of the processed document by a processor.

### Create dataset \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/create-dataset](https://docs.cloud.google.com/document-ai/docs/create-dataset)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Define processor schema After you create a dataset, you can define a processor schema either before or after you import documents.
- Train or test dataset If you want to add documents to either training or test dataset: HTTP method POST https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset/importDocuments Request JSON: { "batch documents import configs" : { "dataset split" : DATASET TYPE "batch input config" : { "gcs prefix" : { "gcs uri prefix" : GCS URI } } } } Train & test dataset If you want to autosplit the documents between the training and test dataset: HTTP method POST https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset/importDocuments Request JSON: { "batch documents import configs" : { "auto split config" : { "training split ratio" : TRAINING SPLIT RATIO } , "batch input config" : { "gcs prefix" : { "gcs uri prefix" : "gs://test sbindal/pdfs-1-page/" } } } } Save the request body in a file named request.json , and execute the following command: CURL curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset/importDocuments" You should receive a JSON response similar to the following: { "name" : "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID " } Tip: You can use ImportDocumentsMetadata to get the status of each document import.
- Before using any of the request data, make the following replacements: LOCATION : Your processor location PROJECT ID : Your Google Cloud project ID PROCESSOR ID : The ID of your custom processor Get data schema HTTP method GET https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset/datasetSchema CURL curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset/datasetSchema" You should receive a JSON response similar to the following: { "name" : "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset/datasetSchema" , "documentSchema" : { "entityTypes" : [ { "name" : $SCHEMA NAME , "baseTypes" : [ "document" ] , "properties" : [ { "name" : $LABEL NAME , "valueType" : $VALUE TYPE , "occurrenceType" : $OCCURRENCE TYPE , "propertyMetadata" : {} } , ] , "entityTypeMetadata" : {} } ] } } Update document schema This sample shows you how to use the dataset.updateDatasetSchema to update the current schema.
- HTTP method PATCH https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset Request JSON: { "name" : "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset" "gcs managed config" { "gcs prefix" { "gcs uri prefix" : " GCS URI " } } "spanner indexing config" {} } Google managed In case you want to create the dataset which is Google managed, update the following information: HTTP method PATCH https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset Request JSON: { "name" : "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset" "unmanaged dataset config" : {} "spanner indexing config" : {} } To send your request, you can use Curl: Note: The following command assumes that you have logged in to the gcloud CLI with your account by running gcloud init or gcloud auth login or by using Cloud Shell, which automatically logs you into the gcloud CLI.

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: N/A

Evidence snippets:
- Name Data Type Occurrence control number Number Optional multiple employees social security number Number Required multiple employer identification number Number Required multiple employers name address and zip code Address Required multiple federal income tax withheld Money Required multiple social security tax withheld Money Required multiple social security wages Money Required multiple wages tips other compensation Money Required multiple You can also create and use other types of labels in your processor schema, such as checkboxes and tabular entities .
- Use generative AI to auto-label documents The foundation model can accurately extract fields for a variety of document types, but you can also provide additional training data to improve the accuracy of the model for specific document structures.
- Build processor version using foundation model After labeling a single document, you can create a processor version using the pretrained foundation model to extract entities.
- Custom extractor mechanisms You can create custom extractors that are specifically suited to your documents, and trained and evaluated with your data.

### Label documents \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)
- Source ID: `site-docs-root-2`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataset metadata, such as processor schema, document assignments (training/test/unassigned), and document labeling status (labeled, unlabeled, auto-labeled) are not exported.
- You can't train or up-train on auto-labeled documents, or use them in the test set, without marking them as labeled.
- It also assumes you have created a dataset , imported documents, and defined a processor schema.
- Action Shortcut Zoom in Alt + = ( Option + = on macOS) Zoom out Alt + - ( Option + - on macOS) Zoom to fit Alt + 0 ( Option + 0 on macOS) Scroll to zoom Alt + Scroll ( Option + Scroll on macOS) Panning Scroll Reversed panning Shift + Scroll Drag to pan Space + Mouse drag Undo Ctrl + Z ( Control + Z on macOS) Redo Ctrl + Shift + Z ( Control + +Shift + Z on macOS) Auto-label If available, you can use an existing version of your processor to start labeling.

