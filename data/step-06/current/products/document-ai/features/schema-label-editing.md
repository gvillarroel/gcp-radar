---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.978Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Schema label editing"
feature_slug: "schema-label-editing"
latest_feature_date: "2023-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/ce-derived-signature"
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
  - "https://docs.cloud.google.com/document-ai/docs/label-documents"
  - "https://docs.cloud.google.com/document-ai/docs/ce-with-genai"
keywords:
  - "schema"
  - "label"
  - "editing"
  - "custom"
  - "document"
  - "extractor"
  - "lets"
  - "you"
---

# Schema label editing

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Custom Document Extractor lets you edit schema label data types and occurrence settings before training.

## Extended Definition

Custom Document Extractor lets you edit schema label data types and occurrence settings before training.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/ce-derived-signature](https://docs.cloud.google.com/document-ai/docs/ce-derived-signature)
- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)
- [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)

## Supporting Pages

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-derived-signature](https://docs.cloud.google.com/document-ai/docs/ce-derived-signature)
- Source ID: `site-docs-root`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Derived fields in the custom extractor Custom extractor supports derived fields in the following models: pretrained-foundation-model-v1.4-2025-02-05 as General Availability (GA) pretrained-foundation-model-v1.5-2025-05-05 as Preview pretrained-foundation-model-v1.5-pro-2025-06-20 as Preview You can enable these features in the console UI when creating or editing labels in your document schema.
- You can enable this feature in the console UI when creating or editing labels in your document schema.
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor with generative AI Stay organized with collections Save and categorize content based on your preferences.
- Signature detection in custom extractor Document AI's custom extractor supports signature detection in custom extractor models pretrained-foundation-model-v1.4-2025-02-05 and pretrained-foundation-model-v1.5-2025-05-05 .

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: N/A

Evidence snippets:
- Custom extractor uses the label names you define and previous annotations to make it quicker and easier to label documents at scale with auto-labeling .
- Custom extractor mechanisms You can create custom extractors that are specifically suited to your documents, and trained and evaluated with your data.
- In the Create processor menu, enter a name for your processor, such as my-custom-document-extractor .
- Name Data Type Occurrence control number Number Optional multiple employees social security number Number Required multiple employer identification number Number Required multiple employers name address and zip code Address Required multiple federal income tax withheld Money Required multiple social security tax withheld Money Required multiple social security wages Money Required multiple wages tips other compensation Money Required multiple You can also create and use other types of labels in your processor schema, such as checkboxes and tabular entities .

### Label documents \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)
- Source ID: `site-docs-root-2`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add a description prompt When adding labels to the schema in custom extractor and custom classifier, you can add a description for the label.
- This page describes how to apply labels from your processor schema to imported documents in your dataset.
- Labeling options Here are your options for labeling documents: Manual : manually label your documents in the Google Cloud console Auto-labeling : use an existing processor version to generate labels Import pre-labeled documents : save time if you already have labeled documents Manually label in the Google Cloud console In the Train tab, select a document to open the labeling tool.
- From the list of schema labels on the left side of the labeling tool, select the 'Add' symbol to select the Bounding box tool to highlight entities in the document and assign them to a label.

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor with generative AI Stay organized with collections Save and categorize content based on your preferences.
- Custom extractor with property descriptions With property descriptions, you can train a model by describing what the labeled fields are like.
- When your schema is set, you can get predictions from documents with three levels of nesting using auto-labeling.
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "rawDocument": { "parent": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID ", "processor version": { "name": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ DISPLAY NAME ", "display name": " DISPLAY NAME ", "model type": "MODEL TYPE GENERATIVE", }, "base processor version": "projects/ PROJECT ID /locations/us/processors/ PROCESSOR ID /processorVersions/ PRETRAINED PROCESSOR VERSION ", "foundation model tuning options": { "train steps": TRAIN STEPS , "learning rate multiplier": LEARN RATE MULTIPLIER , } "document schema": DOCUMENT SCHEMA } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

