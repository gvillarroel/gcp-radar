---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.996Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Custom Document Extractor exportable evaluation metrics"
feature_slug: "custom-document-extractor-exportable-evaluation-metrics"
latest_feature_date: "2022-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview"
  - "https://docs.cloud.google.com/document-ai/docs/ce-with-genai"
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
  - "https://docs.cloud.google.com/document-ai/docs/custom-splitter"
keywords:
  - "custom"
  - "document"
  - "extractor"
  - "exportable"
  - "evaluation"
  - "metrics"
  - "makes"
  - "model"
---

# Custom Document Extractor exportable evaluation metrics

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Custom Document Extractor makes model evaluation metrics exportable and downloadable.

## Extended Definition

Custom Document Extractor makes model evaluation metrics exportable and downloadable.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview](https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview)
- [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)

## Supporting Pages

### Custom extractor overview \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview](https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- For more information on evaluation concepts and metrics, see Evaluate Performance Previous arrow back Form Parser Next Custom extractor mechanisms arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Overview The goal of the custom extractor is to enable Document AI users to build custom entity extraction solutions for new document types for which no pre-trained processors are available.
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor overview Stay organized with collections Save and categorize content based on your preferences.
- Custom extractor includes a combination of layout-aware deep learning models (for generative AI and custom models) and template-based models.

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process" Select-Object -Expand Content Custom extractor with signature detection Preview This product is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor with generative AI Stay organized with collections Save and categorize content based on your preferences.
- Custom extractor with property descriptions With property descriptions, you can train a model by describing what the labeled fields are like.
- Note: Three levels of nesting is only supported if using generative AI ("Foundation") model types within the Custom Extractor.

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- Custom extractor uses the label names you define and previous annotations to make it quicker and easier to label documents at scale with auto-labeling .
- Custom extractor mechanisms You can create custom extractors that are specifically suited to your documents, and trained and evaluated with your data.
- This is because the default custom extractor model type is a foundation model, which can perform zero-shot prediction, that is, without training.
- On this page, you can view evaluation metrics including the F1 score, precision and recall for the full document, and individual labels.

### Custom splitter \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- Because ML models are not perfect and have a certain error rate, and because errors in splitting are typically very problematic (a bad split makes two documents wrong and causes extraction errors), a best practice is to always have a human review step after the splitting prediction but before the actual file split.
- Splitter description and usage You can create custom splitters that are specifically suited to your documents and trained and evaluated with your data, or deploy pretrained models with generative AI.
- On this page, you can view evaluation metrics including the F1 score, precision and recall for the full document, and individual labels.
- Repeat the previous steps with the following paths and document labels: Bucket path Document label cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/1040 form 1040 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/w2 form w2 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/w9 form w9 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/paystub paystub The console should look like this when complete: Select Import .

