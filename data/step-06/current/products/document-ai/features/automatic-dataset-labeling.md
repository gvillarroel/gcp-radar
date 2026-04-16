---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.972Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Automatic dataset labeling"
feature_slug: "automatic-dataset-labeling"
latest_feature_date: "2023-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
  - "https://docs.cloud.google.com/document-ai/docs/create-dataset"
  - "https://docs.cloud.google.com/document-ai/docs/custom-classifier"
  - "https://docs.cloud.google.com/document-ai/docs/ce-with-genai"
keywords:
  - "automatic"
  - "dataset"
  - "labeling"
  - "custom"
  - "document"
  - "extractor"
  - "can"
  - "automatically"
---

# Automatic dataset labeling

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Custom Document Extractor can automatically label dataset documents by using a deployed processor version.

## Extended Definition

Custom Document Extractor can automatically label dataset documents by using a deployed processor version.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- [https://docs.cloud.google.com/document-ai/docs/create-dataset](https://docs.cloud.google.com/document-ai/docs/create-dataset)
- [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)
- [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)

## Supporting Pages

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom extractor uses the label names you define and previous annotations to make it quicker and easier to label documents at scale with auto-labeling .
- Custom extractor mechanisms You can create custom extractors that are specifically suited to your documents, and trained and evaluated with your data.
- Build processor version using foundation model After labeling a single document, you can create a processor version using the pretrained foundation model to extract entities.
- Optional: View and manage dataset From the Build page, you can access the Manage dataset console to view and edit all documents and labels in the dataset.

### Create dataset \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/create-dataset](https://docs.cloud.google.com/document-ai/docs/create-dataset)
- Source ID: `site-docs-root`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP method PATCH https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset Request JSON: { "name" : "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset" "gcs managed config" { "gcs prefix" { "gcs uri prefix" : " GCS URI " } } "spanner indexing config" {} } Google managed In case you want to create the dataset which is Google managed, update the following information: HTTP method PATCH https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset Request JSON: { "name" : "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /dataset" "unmanaged dataset config" : {} "spanner indexing config" : {} } To send your request, you can use Curl: Note: The following command assumes that you have logged in to the gcloud CLI with your account by running gcloud init or gcloud auth login or by using Cloud Shell, which automatically logs you into the gcloud CLI.
- These can be used for up-training or custom extractors depending on the document type. gs://cloud-samples-data/documentai/Custom/ gs://cloud-samples-data/documentai/Custom/1040/ gs://cloud-samples-data/documentai/Custom/Invoices/ gs://cloud-samples-data/documentai/Custom/Patents/ gs://cloud-samples-data/documentai/Custom/Procurement-Splitter/ gs://cloud-samples-data/documentai/Custom/W2-redacted/ gs://cloud-samples-data/documentai/Custom/W2/ gs://cloud-samples-data/documentai/Custom/W9/ Next Label process arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Dataset storage options You can choose between two options to save your dataset: Google-managed Custom location Cloud Storage Unless you have special requirements (for example to keep documents in a set of CMEK-enabled folders) we recommend the simpler Google-managed storage option.
- Document AI provides an option to store the dataset documents in a Cloud Storage bucket you provide or to have them automatically managed by Google.

### "Create, use, and manage a custom document classifier \_|\_ Document AI \_\

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)
- Source ID: `site-docs-root`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Documents panel, you can find that one document has been assigned to the training set. (Optional) Import prelabeled data to the training and test sets If you're using v1.4, you must upload training and test sets to train the custom processor.
- When complete, you find the documents on the Manage Dataset tab with the label applied. (Optional) Train the processor If you're using v1.4, you must train the custom processor on training and test sets of data.
- Batch label documents at import Optionally, after the schema has been configured, you can label all documents that are in a particular directory at import to save time with labeling.
- Create a custom classifier in the Google Cloud console You can create custom classifiers that are specifically suited to your documents and trained and evaluated with your data.

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "rawDocument": { "parent": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID ", "processor version": { "name": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ DISPLAY NAME ", "display name": " DISPLAY NAME ", "model type": "MODEL TYPE GENERATIVE", }, "base processor version": "projects/ PROJECT ID /locations/us/processors/ PROCESSOR ID /processorVersions/ PRETRAINED PROCESSOR VERSION ", "foundation model tuning options": { "train steps": TRAIN STEPS , "learning rate multiplier": LEARN RATE MULTIPLIER , } "document schema": DOCUMENT SCHEMA } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process" Select-Object -Expand Content Custom extractor with signature detection Preview This product is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Auto-labeling with the foundation model The foundation model can accurately extract fields for a variety of document types, but you can also provide additional training data to improve the accuracy of the model for specific document structures.
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor with generative AI Stay organized with collections Save and categorize content based on your preferences.

