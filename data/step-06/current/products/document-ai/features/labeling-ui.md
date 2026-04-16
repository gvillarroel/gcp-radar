---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.976Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Labeling UI"
feature_slug: "labeling-ui"
latest_feature_date: "2023-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/error-messages"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
  - "https://docs.cloud.google.com/document-ai/docs/languages"
  - "https://docs.cloud.google.com/document-ai/docs/processors-list"
keywords:
  - "labeling"
  - "ui"
  - "the"
  - "has"
  - "been"
  - "upgraded"
---

# Labeling UI

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

The labeling UI has been upgraded.

## Extended Definition

The labeling UI has been upgraded.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/error-messages](https://docs.cloud.google.com/document-ai/docs/error-messages)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)

## Supporting Pages

### Error messages \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/error-messages](https://docs.cloud.google.com/document-ai/docs/error-messages)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Evaluation not found When an evaluation for a processor version cannot be found. message : "Evaluation with ID 'qrs' not found." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "EVALUATION NOT FOUND" domain : "documentai.googleapis.com" metadata { key : "evaluation id" value : "qrs" } metadata { key : "processor id" value : "xyz" } metadata { key : "version id" value : "abc" } } } Document not found When a document needed for an operation cannot be found. message : "Document not found: 'gs://foo'." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DOCUMENT NOT FOUND" domain : "documentai.googleapis.com" metadata { key : "document" value : "gs://foo" } } } Processor not found When a processor needed for an operation cannot be found. message : "Processor with id 'xyz' not found." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "PROCESSOR NOT FOUND" domain : "documentai.googleapis.com" metadata { key : "processor id" value : "xyz" } } } Processor version not found When a processor version needed for an operation cannot be found. message : "ProcessorVersion with id 'abc' not found." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "PROCESSOR VERSION NOT FOUND" domain : "documentai.googleapis.com" metadata { key : "processor id" value : "xyz" } metadata { key : "version id" value : "abc" } } } Data Labeling Job Not Found When a data labeling job cannot be found. message : "Data labeling job with id 'EXAMPLE DATA LABELING JOB' not found in processor EXAMPLE PROCESSOR." Schema version not found When a schema version cannot be found. message : "Schema version with id 'EXAMPLE SCHEMA VERSION' not found." Schema not found When a schema cannot be found. message : "Schema with id 'EXAMPLE SCHEMA' not found." Already exists The resolution requires a few steps to be carried out as outlined in the error message.
- Try again after the operation finishes." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "HAS BLOCKING OPERATION ERROR" domain : "documentai.googleapis.com" } } Page range unsupported error When the page range field isn't supported in some operation, such as in a batch process. message : "Page range is not supported." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "PAGE RANGE UNSUPPORTED" domain : "documentai.googleapis.com" } } Cloud Storage folder contains dataset error When a Cloud Storage folder already contains a dataset. message : "The folder 'folder uri' already has dataset 'dataset-id' under it." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "GCS FOLDER CONTAINS DATASET ERROR" domain : "documentai.googleapis.com" } } Thumbnail Missing Error When a dataset document thumbnail is failed to be fetched. message : "Failed to get dataset document thumbnail, consider running re-sync on the dataset." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "THUMBNAIL MISSING" domain : "documentai.googleapis.com" } } Dataset page limit exceeded When the total page limit of a dataset has been exceeded. message : "Dataset page count exceeds the limit of 5.
- This error message is applicable to legacy processors. message : "Unable to find a document of type: 'foo'" details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DOCUMENT OF TYPE NOT FOUND" domain : "documentai.googleapis.com" } } Document size limit exceeded When the upper limit for the file size of a document has been exceeded while importing dataset or while running prediction. message : "Document size (2) exceeds limit: 1 (bytes)." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DOCUMENT SIZE LIMIT EXCEEDED" domain : "documentai.googleapis.com" metadata { key : "limit" value : "1" } metadata { key : "size" value : "2" } } } Document limit exceeded When the upper limit for the count of documents has been exceeded. message : "Document count exceed the limit: 5 got 6" details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DOCUMENT LIMIT EXCEEDED" domain : "documentai.googleapis.com" metadata { key : "document limit" value : "5" } metadata { key : "documents" value : "6" } } } Unsupported MIME type When an unsupported MIME type was provided.
- Please select an empty folder." details { [ type.googleapis.com / google.rpc.ErrorInfo ] { reason : "DATASET LOCATION NOT EMPTY" domain : "documentai.googleapis.com" } } Has Blocking Operation Error When there are other operations running that are blocking the required operation. message : "The operation cannot be performed due to an ongoing 'EXAMPLE OPERATION TYPE' blocking operation.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Full list of fields adjusted amount amount due balance transfer amount carrier currency currency exchange rate delivery date deposit credited amount due date freight amount invoice date invoice id late fee amount line item line item/amount line item/description line item/frequency line item/product code line item/purchase order line item/quantity line item/service address line item/service end date line item/service id 1 line item/service id 2 line item/service start date line item/supplier account number line item/tax amount line item/unit number line item/unit of measure line item/unit price line item/usage net amount payment terms prior amount due prior paid amount purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website reclaimed water remit to address remit to name service service/service end date service/service id service/service start date service/unit of measure service/usage service address service end date service id service start date ship from address ship from name ship to address ship to name supplier account number supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website tampering total amount total tax amount usage vat vat/amount vat/category code vat/tax amount vat/tax rate Normalized fields You can find more information in the Enrichment & normalization page.
- Full list of fields amount paid since last invoice carrier currency currency exchange rate delivery date due date freight amount invoice date invoice id line item line item/amount line item/description line item/product code line item/purchase order line item/quantity line item/unit line item/unit price net amount payment terms purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website remit to address remit to name ship from address ship from name ship to address ship to name supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website total amount total tax amount vat vat/amount vat/category code vat/tax amount vat/tax rate Enriched fields You can find more information in the Enrichment & normalization page.
- Full list of fields credit card last four digits currency end date net amount payment type purchase time receipt date start date supplier address supplier city supplier name tip amount total amount total tax amount line item line item/amount line item/description line item/product code Enriched fields You can find more information in the Enrichment & normalization page.
- Note: If it's used for non-PDF files, it will have the same behavior as the stable pretrained-layout-parser-v1.0-2024-06-03 . pretrained-layout-parser-v1.5-pro-2025-08-25 Release Candidate Public Preview Preview version powered by Gemini 2.5 Pro LLM for better layout analysis on PDF files. v1.5-pro has higher latency than v1.5.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Full list of fields adjusted amount amount due balance transfer amount carrier currency currency exchange rate delivery date deposit credited amount due date freight amount invoice date invoice id late fee amount line item line item/amount line item/description line item/frequency line item/product code line item/purchase order line item/quantity line item/service address line item/service end date line item/service id 1 line item/service id 2 line item/service start date line item/supplier account number line item/tax amount line item/unit number line item/unit of measure line item/unit price line item/usage net amount payment terms prior amount due prior paid amount purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website reclaimed water remit to address remit to name service service/service end date service/service id service/service start date service/unit of measure service/usage service address service end date service id service start date ship from address ship from name ship to address ship to name supplier account number supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website tampering total amount total tax amount usage vat vat/amount vat/category code vat/tax amount vat/tax rate Normalized fields You can find more information in the Enrichment & normalization page.
- Full list of fields amount paid since last invoice carrier currency currency exchange rate delivery date due date freight amount invoice date invoice id line item line item/amount line item/description line item/product code line item/purchase order line item/quantity line item/unit line item/unit price net amount payment terms purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website remit to address remit to name ship from address ship from name ship to address ship to name supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website total amount total tax amount vat vat/amount vat/category code vat/tax amount vat/tax rate Enriched fields You can find more information in the Enrichment & normalization page.
- Full list of fields credit card last four digits currency end date net amount payment type purchase time receipt date start date supplier address supplier city supplier name tip amount total amount total tax amount line item line item/amount line item/description line item/product code Enriched fields You can find more information in the Enrichment & normalization page.
- Note: If it's used for non-PDF files, it will have the same behavior as the stable pretrained-layout-parser-v1.0-2024-06-03 . pretrained-layout-parser-v1.5-pro-2025-08-25 Release Candidate Public Preview Preview version powered by Gemini 2.5 Pro LLM for better layout analysis on PDF files. v1.5-pro has higher latency than v1.5.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Full list of fields adjusted amount amount due balance transfer amount carrier currency currency exchange rate delivery date deposit credited amount due date freight amount invoice date invoice id late fee amount line item line item/amount line item/description line item/frequency line item/product code line item/purchase order line item/quantity line item/service address line item/service end date line item/service id 1 line item/service id 2 line item/service start date line item/supplier account number line item/tax amount line item/unit number line item/unit of measure line item/unit price line item/usage net amount payment terms prior amount due prior paid amount purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website reclaimed water remit to address remit to name service service/service end date service/service id service/service start date service/unit of measure service/usage service address service end date service id service start date ship from address ship from name ship to address ship to name supplier account number supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website tampering total amount total tax amount usage vat vat/amount vat/category code vat/tax amount vat/tax rate Normalized fields You can find more information in the Enrichment & normalization page.
- Full list of fields amount paid since last invoice carrier currency currency exchange rate delivery date due date freight amount invoice date invoice id line item line item/amount line item/description line item/product code line item/purchase order line item/quantity line item/unit line item/unit price net amount payment terms purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website remit to address remit to name ship from address ship from name ship to address ship to name supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website total amount total tax amount vat vat/amount vat/category code vat/tax amount vat/tax rate Enriched fields You can find more information in the Enrichment & normalization page.
- Full list of fields credit card last four digits currency end date net amount payment type purchase time receipt date start date supplier address supplier city supplier name tip amount total amount total tax amount line item line item/amount line item/description line item/product code Enriched fields You can find more information in the Enrichment & normalization page.
- Note: If it's used for non-PDF files, it will have the same behavior as the stable pretrained-layout-parser-v1.0-2024-06-03 . pretrained-layout-parser-v1.5-pro-2025-08-25 Release Candidate Public Preview Preview version powered by Gemini 2.5 Pro LLM for better layout analysis on PDF files. v1.5-pro has higher latency than v1.5.

