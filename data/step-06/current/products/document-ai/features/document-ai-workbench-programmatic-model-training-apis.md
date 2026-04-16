---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.951Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Document AI Workbench programmatic model training APIs"
feature_slug: "document-ai-workbench-programmatic-model-training-apis"
latest_feature_date: "2023-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/ce-with-genai"
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
  - "https://docs.cloud.google.com/document-ai/docs/custom-splitter"
  - "https://docs.cloud.google.com/document-ai/docs/custom-classifier"
keywords:
  - "document"
  - "ai"
  - "workbench"
  - "programmatic"
  - "model"
  - "training"
  - "apis"
  - "adds"
---

# Document AI Workbench programmatic model training APIs

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Document AI Workbench adds public APIs for creating and training models programmatically.

## Extended Definition

Document AI Workbench adds public APIs for creating and training models programmatically.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)
- [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)

## Supporting Pages

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "rawDocument": { "parent": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID ", "processor version": { "name": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ DISPLAY NAME ", "display name": " DISPLAY NAME ", "model type": "MODEL TYPE GENERATIVE", }, "base processor version": "projects/ PROJECT ID /locations/us/processors/ PROCESSOR ID /processorVersions/ PRETRAINED PROCESSOR VERSION ", "foundation model tuning options": { "train steps": TRAIN STEPS , "learning rate multiplier": LEARN RATE MULTIPLIER , } "document schema": DOCUMENT SCHEMA } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- There are three ways to train a generative AI model: Training method Zero-shot Few-shot Fine-tuning Accuracy Medium Medium-high High Effort Low Low Medium Recommended number of training documents 0 5 to 10 10 to 50+ Note: You can expect reasonably good results with 10 to 50+ training examples, and performance can be further optimized by increasing the number of examples to hundreds or thousands, depending on the complexity and variation of the documents and extraction tasks.
- Auto-labeling with the foundation model The foundation model can accurately extract fields for a variety of document types, but you can also provide additional training data to improve the accuracy of the model for specific document structures.
- Generative AI training methods The training method you choose depends on the amount of documents you have available and the amount of effort available to put into training your model.

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Use generative AI to auto-label documents The foundation model can accurately extract fields for a variety of document types, but you can also provide additional training data to improve the accuracy of the model for specific document structures.
- Enable the APIs Required roles To get the permissions that you need to create a custom classifier, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Build processor version using foundation model After labeling a single document, you can create a processor version using the pretrained foundation model to extract entities.
- This is because the default custom extractor model type is a foundation model, which can perform zero-shot prediction, that is, without training.

### Custom splitter \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Enable the APIs Required roles To get the permissions that you need to create a custom splitter, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Because ML models are not perfect and have a certain error rate, and because errors in splitting are typically very problematic (a bad split makes two documents wrong and causes extraction errors), a best practice is to always have a human review step after the splitting prediction but before the actual file split.
- Select a pre-trained model version Define and create the processor schema (classes). (Optionally) Import documents. (Optionally if you want to evaluate its performance) Assign documents to the test sets (Optionally) Evaluate the processor.
- Splitter description and usage You can create custom splitters that are specifically suited to your documents and trained and evaluated with your data, or deploy pretrained models with generative AI.

### "Create, use, and manage a custom document classifier \_|\_ Document AI \_\

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Enable the APIs Required roles To get the permissions that you need to create a custom classifier, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- In the Documents panel, you can find that one document has been assigned to the training set. (Optional) Import prelabeled data to the training and test sets If you're using v1.4, you must upload training and test sets to train the custom processor.
- When complete, you find the documents on the Manage Dataset tab with the label applied. (Optional) Train the processor If you're using v1.4, you must train the custom processor on training and test sets of data.
- Configure dataset To train this new processor, you must create a dataset with training and testing data to help the processor identify the documents that you want to split and classify.

