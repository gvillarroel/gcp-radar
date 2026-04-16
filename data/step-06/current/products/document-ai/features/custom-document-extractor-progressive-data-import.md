---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.002Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Custom Document Extractor progressive data import"
feature_slug: "custom-document-extractor-progressive-data-import"
latest_feature_date: "2022-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/ce-with-genai"
  - "https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview"
  - "https://docs.cloud.google.com/document-ai/docs/ce-mechanisms"
  - "https://docs.cloud.google.com/document-ai/docs/custom-splitter"
keywords:
  - "custom"
  - "document"
  - "extractor"
  - "progressive"
  - "import"
  - "supports"
  - "for"
  - "training"
---

# Custom Document Extractor progressive data import

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Custom Document Extractor supports progressive data import for training or test datasets.

## Extended Definition

Custom Document Extractor supports progressive data import for training or test datasets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- [https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview](https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview)
- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)

## Supporting Pages

### "Custom extractor with generative AI \_|\_ Document AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-with-genai](https://docs.cloud.google.com/document-ai/docs/ce-with-genai)
- Source ID: `site-docs-root`
- Final score: 247
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the launch stage descriptions . (Public preview) Custom extractor supports signature detection.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process" Select-Object -Expand Content Custom extractor with signature detection Preview This product is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- There are three ways to train a generative AI model: Training method Zero-shot Few-shot Fine-tuning Accuracy Medium Medium-high High Effort Low Low Medium Recommended number of training documents 0 5 to 10 10 to 50+ Note: You can expect reasonably good results with 10 to 50+ training examples, and performance can be further optimized by increasing the number of examples to hundreds or thousands, depending on the complexity and variation of the documents and extraction tasks.
- Auto-labeling with the foundation model The foundation model can accurately extract fields for a variety of document types, but you can also provide additional training data to improve the accuracy of the model for specific document structures.

### Custom extractor overview \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview](https://docs.cloud.google.com/document-ai/docs/custom-extractor-overview)
- Source ID: `site-docs-root`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Overview The goal of the custom extractor is to enable Document AI users to build custom entity extraction solutions for new document types for which no pre-trained processors are available.
- For more information on evaluation concepts and metrics, see Evaluate Performance Previous arrow back Form Parser Next Custom extractor mechanisms arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Training method Document examples Document layout variation Free form text or paragraphs Number of training documents for production-ready quality, depending on variability Fine tune and foundation model (generative AI).
- Home Documentation AI and ML Document AI Guides Send feedback Custom extractor overview Stay organized with collections Save and categorize content based on your preferences.

### Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: N/A

Evidence snippets:
- This is because the default custom extractor model type is a foundation model, which can perform zero-shot prediction, that is, without training.
- In the Create processor menu, enter a name for your processor, such as my-custom-document-extractor .
- Enable the APIs Required roles To get the permissions that you need to create a custom classifier, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- For automated version upgrades, see Previous arrow back Custom extractor overview Next Automated schema extraction arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Custom splitter \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: N/A

Evidence snippets:
- Repeat the previous steps with the following paths and document labels: Bucket path Document label cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/1040 form 1040 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/w2 form w2 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/w9 form w9 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/paystub paystub The console should look like this when complete: Select Import .
- Enable the APIs Required roles To get the permissions that you need to create a custom splitter, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- What's next Previous arrow back Custom classifier Next Document splitters behavior arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Select a pre-trained model version Define and create the processor schema (classes). (Optionally) Import documents. (Optionally if you want to evaluate its performance) Assign documents to the test sets (Optionally) Evaluate the processor.

