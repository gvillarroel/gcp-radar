---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.952Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Quick Tables"
feature_slug: "quick-tables"
latest_feature_date: "2023-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/label-documents"
  - "https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview"
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
  - "https://docs.cloud.google.com/document-ai/docs/ce-with-genai"
keywords:
  - "quick"
  - "tables"
  - "helps"
  - "custom"
  - "document"
  - "extractor"
  - "users"
  - "label"
---

# Quick Tables

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Quick Tables helps Custom Document Extractor users label tables in bulk by applying the first-row pattern to the rest of the table.

## Extended Definition

Quick Tables helps Custom Document Extractor users label tables in bulk by applying the first-row pattern to the rest of the table.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)
- [https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview](https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview)
- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)

## Supporting Pages

### Label documents \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)
- Source ID: `site-docs-root-2`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- Add a description prompt When adding labels to the schema in custom extractor and custom classifier, you can add a description for the label.
- Selective labeling user guide Selective labeling helps with recommendations on which documents to label.
- Quick tables When labeling a table, it could be tedious to label each row over and over again.
- Labeling options Here are your options for labeling documents: Manual : manually label your documents in the Google Cloud console Auto-labeling : use an existing processor version to generate labels Import pre-labeled documents : save time if you already have labeled documents Manually label in the Google Cloud console In the Train tab, select a document to open the labeling tool.

### Custom extractor overview \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview](https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Overview The goal of the custom extractor is to enable Document AI users to build custom entity extraction solutions for new document types for which no pre-trained processors are available.
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor overview Stay organized with collections Save and categorize content based on your preferences.
- Custom extractor extracts entities from documents of a particular type.
- For more information on evaluation concepts and metrics, see Evaluate Performance Previous arrow back Form Parser Next Custom extractor mechanisms arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Custom extractor uses the label names you define and previous annotations to make it quicker and easier to label documents at scale with auto-labeling .
- Custom extractor mechanisms You can create custom extractors that are specifically suited to your documents, and trained and evaluated with your data.
- In the Create processor menu, enter a name for your processor, such as my-custom-document-extractor .
- The Custom Document Extractor analysis page opens.

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process" Select-Object -Expand Content Custom extractor with signature detection Preview This product is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor with generative AI Stay organized with collections Save and categorize content based on your preferences.
- Document AI uses the label names you define and previous annotations to make it quicker and easier to label documents at scale with auto-labeling.
- Custom extractor with property descriptions With property descriptions, you can train a model by describing what the labeled fields are like.

