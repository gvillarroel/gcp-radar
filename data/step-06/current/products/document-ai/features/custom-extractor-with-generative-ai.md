---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.936Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Custom Extractor with generative AI"
feature_slug: "custom-extractor-with-generative-ai"
latest_feature_date: "2024-02-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/ce-with-genai"
  - "https://docs.cloud.google.com/document-ai/docs/ce-derived-signature"
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
  - "https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview"
keywords:
  - "custom"
  - "extractor"
  - "with"
  - "generative"
  - "ai"
  - "is"
  - "available"
  - "in"
---

# Custom Extractor with generative AI

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Custom Extractor with generative AI is available in the asia-southeast1 region; Custom Extractor with generative AI is generally available for production workloads.

## Extended Definition

Custom Extractor with generative AI is available in the asia-southeast1 region; Custom Extractor with generative AI is generally available for production workloads.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- [https://docs.cloud.google.com/document-ai/docs/ce-derived-signature](https://docs.cloud.google.com/document-ai/docs/ce-derived-signature)
- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- [https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview](https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview)

## Supporting Pages

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- Source ID: `site-docs-root`
- Final score: 395
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Three levels of nesting is only supported if using generative AI ("Foundation") model types within the Custom Extractor.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process" Select-Object -Expand Content Custom extractor with signature detection Preview This product is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "rawDocument": { "parent": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID ", "processor version": { "name": "projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ DISPLAY NAME ", "display name": " DISPLAY NAME ", "model type": "MODEL TYPE GENERATIVE", }, "base processor version": "projects/ PROJECT ID /locations/us/processors/ PROCESSOR ID /processorVersions/ PRETRAINED PROCESSOR VERSION ", "foundation model tuning options": { "train steps": TRAIN STEPS , "learning rate multiplier": LEARN RATE MULTIPLIER , } "document schema": DOCUMENT SCHEMA } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor with generative AI Stay organized with collections Save and categorize content based on your preferences.

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-derived-signature](https://docs.cloud.google.com/document-ai/docs/ce-derived-signature)
- Source ID: `site-docs-root`
- Final score: 355
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Previous arrow back Custom extractor with generative AI Next Pretrained overview arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor with generative AI Stay organized with collections Save and categorize content based on your preferences.
- Derived fields in the custom extractor Custom extractor supports derived fields in the following models: pretrained-foundation-model-v1.4-2025-02-05 as General Availability (GA) pretrained-foundation-model-v1.5-2025-05-05 as Preview pretrained-foundation-model-v1.5-pro-2025-06-20 as Preview You can enable these features in the console UI when creating or editing labels in your document schema.
- Signature detection in custom extractor Document AI's custom extractor supports signature detection in custom extractor models pretrained-foundation-model-v1.4-2025-02-05 and pretrained-foundation-model-v1.5-2025-05-05 .

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 291
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom extractor mechanisms You can create custom extractors that are specifically suited to your documents, and trained and evaluated with your data.
- This is because the default custom extractor model type is a foundation model, which can perform zero-shot prediction, that is, without training.
- Enable the APIs Required roles To get the permissions that you need to create a custom classifier, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Custom extractor uses the label names you define and previous annotations to make it quicker and easier to label documents at scale with auto-labeling .

### Custom extractor overview \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview](https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview)
- Source ID: `site-docs-root`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Overview The goal of the custom extractor is to enable Document AI users to build custom entity extraction solutions for new document types for which no pre-trained processors are available.
- Custom extractor includes a combination of layout-aware deep learning models (for generative AI and custom models) and template-based models.
- For example, determining whether the text in an entity is "Hello, world!" or "HeIIo vvorld!" The benefits of this approach allow for spotting individual entities with low confidence, setting thresholds for which predictions are used, selecting the optimal confidence threshold , and development of new strategies for training models with higher accuracy and confidence scores.
- For more information on evaluation concepts and metrics, see Evaluate Performance Previous arrow back Form Parser Next Custom extractor mechanisms arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

