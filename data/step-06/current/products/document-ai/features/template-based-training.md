---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.943Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Template-based training"
feature_slug: "template-based-training"
latest_feature_date: "2023-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/ce-template-based"
  - "https://docs.cloud.google.com/document-ai/docs/ce-with-genai"
  - "https://docs.cloud.google.com/document-ai/docs/custom-based-extraction"
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
keywords:
  - "template"
  - "based"
  - "training"
  - "lets"
  - "custom"
  - "extractor"
  - "learn"
  - "accurate"
---

# Template-based training

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Template-based training lets Custom Extractor learn accurate predictions from documents with consistent layouts.

## Extended Definition

Template-based training lets Custom Extractor learn accurate predictions from documents with consistent layouts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/ce-template-based](https://docs.cloud.google.com/document-ai/docs/ce-template-based)
- [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- [https://docs.cloud.google.com/document-ai/docs/custom-based-extraction](https://docs.cloud.google.com/document-ai/docs/custom-based-extraction)
- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)

## Supporting Pages

### Template-based extraction \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-template-based](https://docs.cloud.google.com/document-ai/docs/ce-template-based)
- Source ID: `site-docs-root`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Previous arrow back Custom-based extraction Next Custom extractor with generative AI arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Adding more documents than the minimum of three needed typically doesn't improve quality for template-based training.
- Build and evaluate a custom extractor with template mode Create a custom extractor.
- Labeling example for template-based training to extract the top section of a 1040.

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor with generative AI Stay organized with collections Save and categorize content based on your preferences.
- What's next Learn about Custom extractor with derived field and signature detection .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process" Select-Object -Expand Content Custom extractor with signature detection Preview This product is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Previous arrow back Template-based extraction Next Derived field and signature detection arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Custom-based extraction \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-based-extraction](https://docs.cloud.google.com/document-ai/docs/custom-based-extraction)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Custom model training and extraction lets you to build your own model designed specifically for your documents without the use of generative AI.
- Previous arrow back Automated schema extraction Next Template-based extraction arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Auto-labeling with the foundation model The foundation model can accurately extract fields for a variety of document types, but you can also provide additional training data to improve the accuracy of the model for specific document structures.
- Home Documentation AI and ML Document AI Guides Send feedback Custom-based extraction Stay organized with collections Save and categorize content based on your preferences.

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- This is because the default custom extractor model type is a foundation model, which can perform zero-shot prediction, that is, without training.
- At least 10 training instances and 10 test instances of each field are required for a custom model based processor.
- Train custom model based processor Training might take several hours.
- For automated version upgrades, see Previous arrow back Custom extractor overview Next Automated schema extraction arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

