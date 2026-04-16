---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.972Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Checkbox extraction accuracy"
feature_slug: "checkbox-extraction-accuracy"
latest_feature_date: "2023-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
  - "https://docs.cloud.google.com/document-ai/docs/custom-based-extraction"
  - "https://docs.cloud.google.com/document-ai/docs/ce-template-based"
  - "https://docs.cloud.google.com/document-ai/docs/ce-with-genai"
keywords:
  - "checkbox"
  - "extraction"
  - "accuracy"
  - "custom"
  - "document"
  - "extractor"
  - "improves"
  - "the"
---

# Checkbox extraction accuracy

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Custom Document Extractor improves the accuracy of checkbox extraction.

## Extended Definition

Custom Document Extractor improves the accuracy of checkbox extraction.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- [https://docs.cloud.google.com/document-ai/docs/custom-based-extraction](https://docs.cloud.google.com/document-ai/docs/custom-based-extraction)
- [https://docs.cloud.google.com/document-ai/docs/ce-template-based](https://docs.cloud.google.com/document-ai/docs/ce-template-based)
- [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)

## Supporting Pages

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: N/A

Evidence snippets:
- For automated version upgrades, see Previous arrow back Custom extractor overview Next Automated schema extraction arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Custom extractor uses the label names you define and previous annotations to make it quicker and easier to label documents at scale with auto-labeling .
- In the Create processor menu, enter a name for your processor, such as my-custom-document-extractor .
- The Custom Document Extractor analysis page opens.

### Custom-based extraction \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-based-extraction](https://docs.cloud.google.com/document-ai/docs/custom-based-extraction)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom model training and extraction lets you to build your own model designed specifically for your documents without the use of generative AI.
- Note: Good examples of property descriptions include location information and text patterns of the property values, which help disambiguate potential sources of confusion in the document, guiding the model with rules that ensure more reliable and consistent extractions, regardless of the specific document structure or content variations.
- Auto-labeling with the foundation model The foundation model can accurately extract fields for a variety of document types, but you can also provide additional training data to improve the accuracy of the model for specific document structures.
- Home Documentation AI and ML Document AI Guides Send feedback Custom-based extraction Stay organized with collections Save and categorize content based on your preferences.

### Template-based extraction \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-template-based](https://docs.cloud.google.com/document-ai/docs/ce-template-based)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Previous arrow back Custom-based extraction Next Custom extractor with generative AI arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Auto-labeling with the foundation model The foundation model can accurately extract fields for a variety of document types, but you can also provide additional training data to improve the accuracy of the model for specific document structures.
- Before you begin If not already done, enable: Billing Document AI API Template-mode labeling best practices Proper labeling is one of the most important steps to achieving high accuracy.
- Train dataset To improve the model and its accuracy, train a dataset on your documents.

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process" Select-Object -Expand Content Custom extractor with signature detection Preview This product is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- There are three ways to train a generative AI model: Training method Zero-shot Few-shot Fine-tuning Accuracy Medium Medium-high High Effort Low Low Medium Recommended number of training documents 0 5 to 10 10 to 50+ Note: You can expect reasonably good results with 10 to 50+ training examples, and performance can be further optimized by increasing the number of examples to hundreds or thousands, depending on the complexity and variation of the documents and extraction tasks.
- Auto-labeling with the foundation model The foundation model can accurately extract fields for a variety of document types, but you can also provide additional training data to improve the accuracy of the model for specific document structures.
- Clear and precise property descriptions guide the model with rules that promote more reliable and consistent extractions, regardless of the specific document structure or content variations.

