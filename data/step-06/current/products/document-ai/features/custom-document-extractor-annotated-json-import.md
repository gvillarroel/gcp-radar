---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.994Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Custom Document Extractor annotated JSON import"
feature_slug: "custom-document-extractor-annotated-json-import"
latest_feature_date: "2022-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/ce-with-genai"
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
  - "https://docs.cloud.google.com/document-ai/docs/custom-classifier"
  - "https://docs.cloud.google.com/document-ai/docs/custom-splitter"
keywords:
  - "custom"
  - "document"
  - "extractor"
  - "annotated"
  - "json"
  - "import"
  - "can"
  - "directly"
---

# Custom Document Extractor annotated JSON import

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Custom Document Extractor can directly import annotated JSON files as training or test datasets.

## Extended Definition

Custom Document Extractor can directly import annotated JSON files as training or test datasets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)
- [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)

## Supporting Pages

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process" Select-Object -Expand Content Custom extractor with signature detection Preview This product is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor with generative AI Stay organized with collections Save and categorize content based on your preferences.
- Custom extractor with property descriptions With property descriptions, you can train a model by describing what the labeled fields are like.
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "rawDocument": { "parent": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID ", "processor version": { "name": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ DISPLAY NAME ", "display name": " DISPLAY NAME ", "model type": "MODEL TYPE GENERATIVE", }, "base processor version": "projects/ PROJECT ID /locations/us/processors/ PROCESSOR ID /processorVersions/ PRETRAINED PROCESSOR VERSION ", "foundation model tuning options": { "train steps": TRAIN STEPS , "learning rate multiplier": LEARN RATE MULTIPLIER , } "document schema": DOCUMENT SCHEMA } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 233
- Re-rank relevance: N/A

Evidence snippets:
- Custom extractor mechanisms You can create custom extractors that are specifically suited to your documents, and trained and evaluated with your data.
- This links directly to one document. cloud-samples-data/documentai/Custom/W2/PDF/W2 XL input clean 2950.pdf Select Import .
- Custom extractor uses the label names you define and previous annotations to make it quicker and easier to label documents at scale with auto-labeling .
- This is because the default custom extractor model type is a foundation model, which can perform zero-shot prediction, that is, without training.

### "Create, use, and manage a custom document classifier \_|\_ Document AI \_\

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- In the Documents panel, you can find that one document has been assigned to the training set. (Optional) Import prelabeled data to the training and test sets If you're using v1.4, you must upload training and test sets to train the custom processor.
- This bucket contains pre-labeled documents in the Document JSON format. cloud-samples-data/documentai/Custom/Patents/JSON/Classification-InventionType From the Data split list, select Auto-split .
- Batch label documents at import Optionally, after the schema has been configured, you can label all documents that are in a particular directory at import to save time with labeling.
- Create a custom classifier in the Google Cloud console You can create custom classifiers that are specifically suited to your documents and trained and evaluated with your data.

### Custom splitter \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- In some use cases, the split documents can be routed directly to the appropriate extractor according to the predicted class.
- Repeat the previous steps with the following paths and document labels: Bucket path Document label cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/1040 form 1040 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/w2 form w2 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/w9 form w9 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/paystub paystub The console should look like this when complete: Select Import .
- The console should look like this when complete: You can also re-run the evaluation against a different test set or processor version. (Optional) Import data with auto-labeling After deploying a trained processor version, you can use Auto-labeling to save time on labeling when importing new documents.
- Splitter description and usage You can create custom splitters that are specifically suited to your documents and trained and evaluated with your data, or deploy pretrained models with generative AI.

