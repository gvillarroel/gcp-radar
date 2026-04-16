---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.010Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Form 1040-NR Processor"
feature_slug: "form-1040-nr-processor"
latest_feature_date: "2022-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient"
  - "https://docs.cloud.google.com/document-ai/docs/processors-list"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
keywords:
  - "form"
  - "1040"
  - "nr"
  - "processor"
  - "extracts"
  - "structured"
  - "from"
  - "documents"
---

# Form 1040-NR Processor

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Extracts structured data from Form 1040-NR documents.

## Extended Definition

Extracts structured data from Form 1040-NR documents.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient)
- [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)

## Supporting Pages

### "Class DocumentProcessorServiceAsyncClient (3.14.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Processors are built using state-of-the-art Google AI such as natural language, computer vision, and translation to extract structured information from unstructured or semi-structured documents.
- Each processor defines how to extract structural information from a document. get processor type get processor type ( request : typing .
- Each processor defines how to extract structural information from a document. delete processor delete processor ( request : typing .
- Format: projects/{project}/locations/{location}/processors/{processor} , or projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class DocumentProcessorServiceClient (3.14.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient](https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.services.document_processor_service.DocumentProcessorServiceClient)
- Source ID: `site-python-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Processors are built using state-of-the-art Google AI such as natural language, computer vision, and translation to extract structured information from unstructured or semi-structured documents.
- Each processor defines how to extract structural information from a document. get processor type get processor type ( request : typing .
- Each processor defines how to extract structural information from a document. delete processor delete processor ( request : typing .
- Format: projects/{project}/locations/{location}/processors/{processor} , or projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Full list of fields adjusted amount amount due balance transfer amount carrier currency currency exchange rate delivery date deposit credited amount due date freight amount invoice date invoice id late fee amount line item line item/amount line item/description line item/frequency line item/product code line item/purchase order line item/quantity line item/service address line item/service end date line item/service id 1 line item/service id 2 line item/service start date line item/supplier account number line item/tax amount line item/unit number line item/unit of measure line item/unit price line item/usage net amount payment terms prior amount due prior paid amount purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website reclaimed water remit to address remit to name service service/service end date service/service id service/service start date service/unit of measure service/usage service address service end date service id service start date ship from address ship from name ship to address ship to name supplier account number supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website tampering total amount total tax amount usage vat vat/amount vat/category code vat/tax amount vat/tax rate Normalized fields You can find more information in the Enrichment & normalization page.
- Full list of fields amount paid since last invoice carrier currency currency exchange rate delivery date due date freight amount invoice date invoice id line item line item/amount line item/description line item/product code line item/purchase order line item/quantity line item/unit line item/unit price net amount payment terms purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website remit to address remit to name ship from address ship from name ship to address ship to name supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website total amount total tax amount vat vat/amount vat/category code vat/tax amount vat/tax rate Enriched fields You can find more information in the Enrichment & normalization page.
- The processor currently returns information from the following signals: fraud signals is identity document detection: Predicts whether an image contains a recognized identity document. fraud signals suspicious words detection: Predicts whether words are present that aren't typical on IDs. fraud signals image manipulation detection: Predicts whether the image was altered or tampered with an image editing tool. fraud signals online duplicate detection: Predicts whether the image can be found online (US only).
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API PAYSTUB PROCESSOR Notes If the multi-page input document contains more than one valid pay slips, the processor extracts entities from only the first valid pay slip.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Full list of fields adjusted amount amount due balance transfer amount carrier currency currency exchange rate delivery date deposit credited amount due date freight amount invoice date invoice id late fee amount line item line item/amount line item/description line item/frequency line item/product code line item/purchase order line item/quantity line item/service address line item/service end date line item/service id 1 line item/service id 2 line item/service start date line item/supplier account number line item/tax amount line item/unit number line item/unit of measure line item/unit price line item/usage net amount payment terms prior amount due prior paid amount purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website reclaimed water remit to address remit to name service service/service end date service/service id service/service start date service/unit of measure service/usage service address service end date service id service start date ship from address ship from name ship to address ship to name supplier account number supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website tampering total amount total tax amount usage vat vat/amount vat/category code vat/tax amount vat/tax rate Normalized fields You can find more information in the Enrichment & normalization page.
- Full list of fields amount paid since last invoice carrier currency currency exchange rate delivery date due date freight amount invoice date invoice id line item line item/amount line item/description line item/product code line item/purchase order line item/quantity line item/unit line item/unit price net amount payment terms purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website remit to address remit to name ship from address ship from name ship to address ship to name supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website total amount total tax amount vat vat/amount vat/category code vat/tax amount vat/tax rate Enriched fields You can find more information in the Enrichment & normalization page.
- The processor currently returns information from the following signals: fraud signals is identity document detection: Predicts whether an image contains a recognized identity document. fraud signals suspicious words detection: Predicts whether words are present that aren't typical on IDs. fraud signals image manipulation detection: Predicts whether the image was altered or tampered with an image editing tool. fraud signals online duplicate detection: Predicts whether the image can be found online (US only).
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API PAYSTUB PROCESSOR Notes If the multi-page input document contains more than one valid pay slips, the processor extracts entities from only the first valid pay slip.

