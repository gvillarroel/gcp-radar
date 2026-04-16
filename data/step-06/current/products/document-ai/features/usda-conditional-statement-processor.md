---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.015Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "USDA Conditional Statement Processor"
feature_slug: "usda-conditional-statement-processor"
latest_feature_date: "2022-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/processors-list"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
  - "https://docs.cloud.google.com/document-ai/docs/languages"
  - "https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient"
keywords:
  - "usda"
  - "conditional"
  - "statement"
  - "processor"
  - "extracts"
  - "structured"
  - "from"
  - "statements"
---

# USDA Conditional Statement Processor

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Extracts structured data from USDA conditional statements.

## Extended Definition

Extracts structured data from USDA conditional statements.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient)

## Supporting Pages

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- More information Layout Parser Explore pretrained processors Bank Statement Parser Description Extract from bank statements including name, account, transactions, etc.
- Unlike the default version, this version does not check the input file for bank statements and will not return an error if no bank statements are found. pretrained-bankstatement-v4.0-2023-07-31 Release Candidate Public Preview pretrained-bankstatement-v5.0-2023-12-06 Stable GA For more information, see Managing processor versions.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API PAYSTUB PROCESSOR Notes If the multi-page input document contains more than one valid pay slips, the processor extracts entities from only the first valid pay slip.
- The processor currently returns information from the following signals: fraud signals is identity document detection: Predicts whether an image contains a recognized identity document. fraud signals suspicious words detection: Predicts whether words are present that aren't typical on IDs. fraud signals image manipulation detection: Predicts whether the image was altered or tampered with an image editing tool. fraud signals online duplicate detection: Predicts whether the image can be found online (US only).

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- More information Layout Parser Explore pretrained processors Bank Statement Parser Description Extract from bank statements including name, account, transactions, etc.
- Unlike the default version, this version does not check the input file for bank statements and will not return an error if no bank statements are found. pretrained-bankstatement-v4.0-2023-07-31 Release Candidate Public Preview pretrained-bankstatement-v5.0-2023-12-06 Stable GA For more information, see Managing processor versions.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API PAYSTUB PROCESSOR Notes If the multi-page input document contains more than one valid pay slips, the processor extracts entities from only the first valid pay slip.
- The processor currently returns information from the following signals: fraud signals is identity document detection: Predicts whether an image contains a recognized identity document. fraud signals suspicious words detection: Predicts whether words are present that aren't typical on IDs. fraud signals image manipulation detection: Predicts whether the image was altered or tampered with an image editing tool. fraud signals online duplicate detection: Predicts whether the image can be found online (US only).

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- More information Layout Parser Explore pretrained processors Bank Statement Parser Description Extract from bank statements including name, account, transactions, etc.
- Unlike the default version, this version does not check the input file for bank statements and will not return an error if no bank statements are found. pretrained-bankstatement-v4.0-2023-07-31 Release Candidate Public Preview pretrained-bankstatement-v5.0-2023-12-06 Stable GA For more information, see Managing processor versions.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API PAYSTUB PROCESSOR Notes If the multi-page input document contains more than one valid pay slips, the processor extracts entities from only the first valid pay slip.
- The processor currently returns information from the following signals: fraud signals is identity document detection: Predicts whether an image contains a recognized identity document. fraud signals suspicious words detection: Predicts whether words are present that aren't typical on IDs. fraud signals image manipulation detection: Predicts whether the image was altered or tampered with an image editing tool. fraud signals online duplicate detection: Predicts whether the image can be found online (US only).

### "Class DocumentProcessorServiceAsyncClient (3.14.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Processors are built using state-of-the-art Google AI such as natural language, computer vision, and translation to extract structured information from unstructured or semi-structured documents.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import documentai v1 async def sample set default processor version(): Create a client client = documentai v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import documentai v1 async def sample evaluate processor version(): Create a client client = documentai v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import documentai v1 async def sample undeploy processor version(): Create a client client = documentai v1 .

