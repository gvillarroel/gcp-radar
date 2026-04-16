---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.937Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Custom Extractor generative AI demo"
feature_slug: "custom-extractor-generative-ai-demo"
latest_feature_date: "2023-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/ce-with-genai"
  - "https://docs.cloud.google.com/document-ai/docs/ce-derived-signature"
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
  - "https://docs.cloud.google.com/document-ai/docs/big-query-integration"
keywords:
  - "custom"
  - "extractor"
  - "generative"
  - "ai"
  - "demo"
  - "can"
  - "extraction"
  - "results"
---

# Custom Extractor generative AI demo

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Custom Extractor can demo generative AI extraction results alongside output from other Document AI products.

## Extended Definition

Custom Extractor can demo generative AI extraction results alongside output from other Document AI products.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- [https://docs.cloud.google.com/document-ai/docs/ce-derived-signature](https://docs.cloud.google.com/document-ai/docs/ce-derived-signature)
- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- [https://docs.cloud.google.com/document-ai/docs/big-query-integration](https://docs.cloud.google.com/document-ai/docs/big-query-integration)

## Supporting Pages

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- Source ID: `site-docs-root`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There are three ways to train a generative AI model: Training method Zero-shot Few-shot Fine-tuning Accuracy Medium Medium-high High Effort Low Low Medium Recommended number of training documents 0 5 to 10 10 to 50+ Note: You can expect reasonably good results with 10 to 50+ training examples, and performance can be further optimized by increasing the number of examples to hundreds or thousands, depending on the complexity and variation of the documents and extraction tasks.
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor with generative AI Stay organized with collections Save and categorize content based on your preferences.
- Custom extractor with property descriptions With property descriptions, you can train a model by describing what the labeled fields are like.
- Note: Three levels of nesting is only supported if using generative AI ("Foundation") model types within the Custom Extractor.

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-derived-signature](https://docs.cloud.google.com/document-ai/docs/ce-derived-signature)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Derived fields in the custom extractor Custom extractor supports derived fields in the following models: pretrained-foundation-model-v1.4-2025-02-05 as General Availability (GA) pretrained-foundation-model-v1.5-2025-05-05 as Preview pretrained-foundation-model-v1.5-pro-2025-06-20 as Preview You can enable these features in the console UI when creating or editing labels in your document schema.
- Previous arrow back Custom extractor with generative AI Next Pretrained overview arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor with generative AI Stay organized with collections Save and categorize content based on your preferences.
- Derived field and signature detection The public preview derived fields feature enables Document AI customers to configure a field to be populated through intelligent inference or generation based on document context, rather than direct text extraction.

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: N/A

Evidence snippets:
- Custom extractor mechanisms You can create custom extractors that are specifically suited to your documents, and trained and evaluated with your data.
- This is because the default custom extractor model type is a foundation model, which can perform zero-shot prediction, that is, without training.
- For automated version upgrades, see Previous arrow back Custom extractor overview Next Automated schema extraction arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Use generative AI to auto-label documents The foundation model can accurately extract fields for a variety of document types, but you can also provide additional training data to improve the accuracy of the model for specific document structures.

### BigQuery integration \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/big-query-integration](https://docs.cloud.google.com/document-ai/docs/big-query-integration)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Now, with this integration, customers can create remote models in BigQuery for their custom extractors in Document AI, and use them to perform document analytics and generative AI at scale, unlocking a new era of data-driven insights and innovation.
- GENERATE EMBEDDING ( MODEL docai demo . embedding model , TABLE docai demo . demo result parsed ); Implement search and generative AI use cases Once you've extracted structured text from your documents, you can build indexes optimized for needle in the haystack queries, made possible by BigQuery's search and indexing capabilities, unlocking powerful search capability.
- Overview BigQuery customers can now create Document AI custom extractors , powered by Google's cutting-edge foundation models, which they can customize based on their own documents and metadata.
- A unified, governed data to AI experience You can build a custom extractor in the Document AI with three steps: Define the data you need to extract from your documents.

