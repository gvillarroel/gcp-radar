---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.995Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Custom Document Extractor data labeling platform integration"
feature_slug: "custom-document-extractor-data-labeling-platform-integration"
latest_feature_date: "2022-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/ce-with-genai"
  - "https://docs.cloud.google.com/document-ai/docs/big-query-integration"
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
  - "https://docs.cloud.google.com/document-ai/docs/ce-derived-signature"
keywords:
  - "custom"
  - "document"
  - "extractor"
  - "labeling"
  - "platform"
  - "integration"
  - "integrates"
  - "with"
---

# Custom Document Extractor data labeling platform integration

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Custom Document Extractor integrates with the data labeling platform.

## Extended Definition

Custom Document Extractor integrates with the data labeling platform.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- [https://docs.cloud.google.com/document-ai/docs/big-query-integration](https://docs.cloud.google.com/document-ai/docs/big-query-integration)
- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- [https://docs.cloud.google.com/document-ai/docs/ce-derived-signature](https://docs.cloud.google.com/document-ai/docs/ce-derived-signature)

## Supporting Pages

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process" Select-Object -Expand Content Custom extractor with signature detection Preview This product is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor with generative AI Stay organized with collections Save and categorize content based on your preferences.
- Auto-labeling with the foundation model The foundation model can accurately extract fields for a variety of document types, but you can also provide additional training data to improve the accuracy of the model for specific document structures.
- Custom extractor with derived fields Preview This product is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### BigQuery integration \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/big-query-integration](https://docs.cloud.google.com/document-ai/docs/big-query-integration)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Now, with this integration, customers can create remote models in BigQuery for their custom extractors in Document AI, and use them to perform document analytics and generative AI at scale, unlocking a new era of data-driven insights and innovation.
- A unified, governed data to AI experience You can build a custom extractor in the Document AI with three steps: Define the data you need to extract from your documents.
- This is called document schema , stored with each version of the custom extractor, accessible from BigQuery.
- In addition to custom extractors that require manual training, Document AI also provides ready to use extractors for expenses, receipts, invoices, tax forms, government ids, and a multitude of other scenarios, in the processor gallery.

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- Custom extractor uses the label names you define and previous annotations to make it quicker and easier to label documents at scale with auto-labeling .
- Custom extractor mechanisms You can create custom extractors that are specifically suited to your documents, and trained and evaluated with your data.
- This is because the default custom extractor model type is a foundation model, which can perform zero-shot prediction, that is, without training.
- In the Create processor menu, enter a name for your processor, such as my-custom-document-extractor .

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-derived-signature](https://docs.cloud.google.com/document-ai/docs/ce-derived-signature)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor with generative AI Stay organized with collections Save and categorize content based on your preferences.
- Derived fields in the custom extractor Custom extractor supports derived fields in the following models: pretrained-foundation-model-v1.4-2025-02-05 as General Availability (GA) pretrained-foundation-model-v1.5-2025-05-05 as Preview pretrained-foundation-model-v1.5-pro-2025-06-20 as Preview You can enable these features in the console UI when creating or editing labels in your document schema.
- Previous arrow back Custom extractor with generative AI Next Pretrained overview arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Signature detection in custom extractor Document AI's custom extractor supports signature detection in custom extractor models pretrained-foundation-model-v1.4-2025-02-05 and pretrained-foundation-model-v1.5-2025-05-05 .

