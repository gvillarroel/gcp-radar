---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.995Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Custom Document Extractor dataset export with metadata preservation"
feature_slug: "custom-document-extractor-dataset-export-with-metadata-preservation"
latest_feature_date: "2022-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
  - "https://docs.cloud.google.com/document-ai/docs/ce-with-genai"
  - "https://docs.cloud.google.com/document-ai/docs/create-dataset"
  - "https://docs.cloud.google.com/document-ai/docs/label-documents"
keywords:
  - "custom"
  - "document"
  - "extractor"
  - "dataset"
  - "export"
  - "with"
  - "metadata"
  - "preservation"
---

# Custom Document Extractor dataset export with metadata preservation

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Custom Document Extractor can export datasets while preserving metadata.

## Extended Definition

Custom Document Extractor can export datasets while preserving metadata.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- [https://docs.cloud.google.com/document-ai/docs/create-dataset](https://docs.cloud.google.com/document-ai/docs/create-dataset)
- [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)

## Supporting Pages

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . from typing import Optional , Sequence from google.api core.client options import ClientOptions from google.cloud import documentai TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR PROCESSOR LOCATION" # Format is "us" or "eu" processor id = "YOUR PROCESSOR ID" # Create processor before running sample processor version = "rc" # Refer to https://cloud.google.com/document-ai/docs/manage-processor-versions for more information file path = "/path/to/local/pdf" mime type = "application/pdf" # Refer to https://cloud.google.com/document-ai/docs/file-types for supported file types def process document custom extractor sample ( project id : str , location : str , processor id : str , processor version : str , file path : str , mime type : str , ) - > None : Entities to extract from Foundation Model CDE properties = [ documentai .
- RawDocument ( content = image content , mime type = mime type ), Only supported for Document OCR processor process options = process options , ) result = client . process document ( request = request ) For a full list of Document object attributes, reference this page: https://cloud.google.com/document-ai/docs/reference/rest/v1/Document return result . document Custom Document Extractor The Custom Document Extractor processor can extract custom entities from documents which don't have a pretrained processor available.
- The following parsers do follow it: Extract (Custom Extractor) Legacy Bank statement parser Expense parser Invoice Parser PaySlip parser W2 Parser Code samples The following code samples demonstrate how to send a processing request and then read and print the fields from a specialized processor to the terminal: Java For more information, see the Document AI Java API reference documentation .
- The following code sample demonstrates how to configure specific entities for a foundation model Custom Document Extractor on a per-request basis and print the extracted entities: Python For more information, see the Document AI Python API reference documentation .

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process" Select-Object -Expand Content Custom extractor with signature detection Preview This product is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor with generative AI Stay organized with collections Save and categorize content based on your preferences.
- Custom extractor with derived fields Preview This product is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Custom extractor with property descriptions With property descriptions, you can train a model by describing what the labeled fields are like.

### Create dataset \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/create-dataset](https://docs.cloud.google.com/document-ai/docs/create-dataset)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before using any of the request data, make the following replacements: LOCATION : Your processor location PROJECT ID : Your Google Cloud project ID PROCESSOR ID : The ID of your custom processor Get data schema HTTP method GET https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset/datasetSchema CURL curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset/datasetSchema" You should receive a JSON response similar to the following: { "name" : "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset/datasetSchema" , "documentSchema" : { "entityTypes" : [ { "name" : $SCHEMA NAME , "baseTypes" : [ "document" ] , "properties" : [ { "name" : $LABEL NAME , "valueType" : $VALUE TYPE , "occurrenceType" : $OCCURRENCE TYPE , "propertyMetadata" : {} } , ] , "entityTypeMetadata" : {} } ] } } Update document schema This sample shows you how to use the dataset.updateDatasetSchema to update the current schema.
- Before using any of the request data, make the following replacements: LOCATION : Your processor location PROJECT ID : Your Google Cloud project ID PROCESSOR ID The ID of your custom processor GCS URI : Your Cloud Storage URI where dataset documents are stored Provided bucket Follow next steps to create a dataset request with a Cloud Storage bucket you provide.
- Train or test dataset If you want to add documents to either training or test dataset: HTTP method POST https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset/importDocuments Request JSON: { "batch documents import configs" : { "dataset split" : DATASET TYPE "batch input config" : { "gcs prefix" : { "gcs uri prefix" : GCS URI } } } } Train & test dataset If you want to autosplit the documents between the training and test dataset: HTTP method POST https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset/importDocuments Request JSON: { "batch documents import configs" : { "auto split config" : { "training split ratio" : TRAINING SPLIT RATIO } , "batch input config" : { "gcs prefix" : { "gcs uri prefix" : "gs://test sbindal/pdfs-1-page/" } } } } Save the request body in a file named request.json , and execute the following command: CURL curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset/importDocuments" You should receive a JSON response similar to the following: { "name" : "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID " } Tip: You can use ImportDocumentsMetadata to get the status of each document import.
- Before using any of the request data, make the following replacements: LOCATION : Your processor location PROJECT ID : Your Google Cloud project ID PROCESSOR ID : The ID of your custom processor DOCUMENT ID : The document ID blob returned by <code>ImportDocuments</code> request Delete documents HTTP method POST https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset/batchDeleteDocuments Request JSON: { "dataset documents" : { "individual document ids" : { "document ids" : DOCUMENT ID } } } Save the request body in a file named request.json , and execute the following command: CURL curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset/batchDeleteDocuments" You should receive a JSON response similar to the following: { "name" : "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID " } Assign documents to training or test set Under Data split , select documents and assign them to either the training set, test set, or unassigned.

### Label documents \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)
- Source ID: `site-docs-root-2`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Dataset metadata, such as processor schema, document assignments (training/test/unassigned), and document labeling status (labeled, unlabeled, auto-labeled) are not exported.
- Resync dataset Resync keeps your dataset's Cloud Storage folder consistent with Document AI's internal index of metadata.
- Export dataset To export all documents as JSON Document files to a Cloud Storage folder, select Export Dataset .
- Migrate dataset Import and export lets you move all the documents in a dataset from one processor to another.

