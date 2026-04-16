---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.935Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Custom Extractor nested extraction"
feature_slug: "custom-extractor-nested-extraction"
latest_feature_date: "2024-02-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/ce-with-genai"
  - "https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview"
  - "https://docs.cloud.google.com/document-ai/docs/ce-derived-signature"
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
keywords:
  - "custom"
  - "extractor"
  - "nested"
  - "extraction"
  - "supports"
  - "three"
  - "levels"
  - "of"
---

# Custom Extractor nested extraction

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Custom Extractor supports three levels of nesting for extracting structured data from complex documents and tables.

## Extended Definition

Custom Extractor supports three levels of nesting for extracting structured data from complex documents and tables.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- [https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview](https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview)
- [https://docs.cloud.google.com/document-ai/docs/ce-derived-signature](https://docs.cloud.google.com/document-ai/docs/ce-derived-signature)
- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)

## Supporting Pages

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Note: Three levels of nesting is only supported if using generative AI ("Foundation") model types within the Custom Extractor.
- Three-level nesting Custom Extractor now provides three levels of nesting.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process" Select-Object -Expand Content Custom extractor with signature detection Preview This product is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- There are three ways to train a generative AI model: Training method Zero-shot Few-shot Fine-tuning Accuracy Medium Medium-high High Effort Low Low Medium Recommended number of training documents 0 5 to 10 10 to 50+ Note: You can expect reasonably good results with 10 to 50+ training examples, and performance can be further optimized by increasing the number of examples to hundreds or thousands, depending on the complexity and variation of the documents and extraction tasks.

### Custom extractor overview \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview](https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Custom extractor supports a wide range of use cases with three different modes.
- Overview The goal of the custom extractor is to enable Document AI users to build custom entity extraction solutions for new document types for which no pre-trained processors are available.
- For more information on evaluation concepts and metrics, see Evaluate Performance Previous arrow back Form Parser Next Custom extractor mechanisms arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Custom extractor includes a combination of layout-aware deep learning models (for generative AI and custom models) and template-based models.

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-derived-signature](https://docs.cloud.google.com/document-ai/docs/ce-derived-signature)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Derived fields in the custom extractor Custom extractor supports derived fields in the following models: pretrained-foundation-model-v1.4-2025-02-05 as General Availability (GA) pretrained-foundation-model-v1.5-2025-05-05 as Preview pretrained-foundation-model-v1.5-pro-2025-06-20 as Preview You can enable these features in the console UI when creating or editing labels in your document schema.
- Previous arrow back Custom extractor with generative AI Next Pretrained overview arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Signature detection in custom extractor Document AI's custom extractor supports signature detection in custom extractor models pretrained-foundation-model-v1.4-2025-02-05 and pretrained-foundation-model-v1.5-2025-05-05 .
- Derived field and signature detection The public preview derived fields feature enables Document AI customers to configure a field to be populated through intelligent inference or generation based on document context, rather than direct text extraction.

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- For automated version upgrades, see Previous arrow back Custom extractor overview Next Automated schema extraction arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Note: Good examples of property descriptions include location information and text patterns of the property values, which help disambiguate potential sources of confusion in the document, guiding the model with rules that ensure more reliable and consistent extractions, regardless of the specific document structure or content variations.
- Custom extractor uses the label names you define and previous annotations to make it quicker and easier to label documents at scale with auto-labeling .
- Custom extractor mechanisms You can create custom extractors that are specifically suited to your documents, and trained and evaluated with your data.

