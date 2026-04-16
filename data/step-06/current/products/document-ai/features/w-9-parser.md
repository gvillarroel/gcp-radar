---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.077Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "W-9 parser"
feature_slug: "w-9-parser"
latest_feature_date: "2020-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/form-parser"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
  - "https://docs.cloud.google.com/document-ai/docs/languages"
  - "https://docs.cloud.google.com/document-ai/docs/processors-list"
keywords:
  - "parser"
  - "extracts"
  - "from"
  - "tax"
  - "forms"
---

# W-9 parser

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

W-9 parser extracts data from W-9 tax forms.

## Extended Definition

W-9 parser extracts data from W-9 tax forms.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/form-parser](https://docs.cloud.google.com/document-ai/docs/form-parser)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)

## Supporting Pages

### Form Parser \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/form-parser](https://docs.cloud.google.com/document-ai/docs/form-parser)
- Source ID: `site-docs-root-2`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Form Parser can be considered over the other parsers when the use case involves: Dealing with structured forms: It excels at extracting KVPs from well-defined forms that look like conventional forms with labeled blanks to fill in, such as name: .
- Flexible table extraction is needed: Form Parser extracts from simple (no cells that span rows or columns) tables that look like tables.
- Checkboxes: A high-quality selection mark detector, which extracts checkboxes from images and PDF output as KVP, using the text nearest the checkbox, with a valueType indicating whether it is filled or unfilled.
- Form Parser extracts key-value pairs (KVPs), tables, selection marks (like checkboxes), generic fields, and text to augment and automate document processing.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- The invoice Parser extracts both header and line item fields, such as invoice number, supplier name, invoice amount, tax amount, invoice date, due date, and line item amounts.
- Invoice Parser Description Extract text and values from invoices such as invoice number, supplier name, invoice amount, tax amount, invoice date, due date.
- Full list of fields adjusted amount amount due balance transfer amount carrier currency currency exchange rate delivery date deposit credited amount due date freight amount invoice date invoice id late fee amount line item line item/amount line item/description line item/frequency line item/product code line item/purchase order line item/quantity line item/service address line item/service end date line item/service id 1 line item/service id 2 line item/service start date line item/supplier account number line item/tax amount line item/unit number line item/unit of measure line item/unit price line item/usage net amount payment terms prior amount due prior paid amount purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website reclaimed water remit to address remit to name service service/service end date service/service id service/service start date service/unit of measure service/usage service address service end date service id service start date ship from address ship from name ship to address ship to name supplier account number supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website tampering total amount total tax amount usage vat vat/amount vat/category code vat/tax amount vat/tax rate Normalized fields You can find more information in the Enrichment & normalization page.
- Full list of fields amount paid since last invoice carrier currency currency exchange rate delivery date due date freight amount invoice date invoice id line item line item/amount line item/description line item/product code line item/purchase order line item/quantity line item/unit line item/unit price net amount payment terms purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website remit to address remit to name ship from address ship from name ship to address ship to name supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website total amount total tax amount vat vat/amount vat/category code vat/tax amount vat/tax rate Enriched fields You can find more information in the Enrichment & normalization page.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- The invoice Parser extracts both header and line item fields, such as invoice number, supplier name, invoice amount, tax amount, invoice date, due date, and line item amounts.
- Invoice Parser Description Extract text and values from invoices such as invoice number, supplier name, invoice amount, tax amount, invoice date, due date.
- Full list of fields adjusted amount amount due balance transfer amount carrier currency currency exchange rate delivery date deposit credited amount due date freight amount invoice date invoice id late fee amount line item line item/amount line item/description line item/frequency line item/product code line item/purchase order line item/quantity line item/service address line item/service end date line item/service id 1 line item/service id 2 line item/service start date line item/supplier account number line item/tax amount line item/unit number line item/unit of measure line item/unit price line item/usage net amount payment terms prior amount due prior paid amount purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website reclaimed water remit to address remit to name service service/service end date service/service id service/service start date service/unit of measure service/usage service address service end date service id service start date ship from address ship from name ship to address ship to name supplier account number supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website tampering total amount total tax amount usage vat vat/amount vat/category code vat/tax amount vat/tax rate Normalized fields You can find more information in the Enrichment & normalization page.
- Full list of fields amount paid since last invoice carrier currency currency exchange rate delivery date due date freight amount invoice date invoice id line item line item/amount line item/description line item/product code line item/purchase order line item/quantity line item/unit line item/unit price net amount payment terms purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website remit to address remit to name ship from address ship from name ship to address ship to name supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website total amount total tax amount vat vat/amount vat/category code vat/tax amount vat/tax rate Enriched fields You can find more information in the Enrichment & normalization page.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/processors-list](https://docs.cloud.google.com/document-ai/docs/processors-list)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- The invoice Parser extracts both header and line item fields, such as invoice number, supplier name, invoice amount, tax amount, invoice date, due date, and line item amounts.
- Invoice Parser Description Extract text and values from invoices such as invoice number, supplier name, invoice amount, tax amount, invoice date, due date.
- Full list of fields adjusted amount amount due balance transfer amount carrier currency currency exchange rate delivery date deposit credited amount due date freight amount invoice date invoice id late fee amount line item line item/amount line item/description line item/frequency line item/product code line item/purchase order line item/quantity line item/service address line item/service end date line item/service id 1 line item/service id 2 line item/service start date line item/supplier account number line item/tax amount line item/unit number line item/unit of measure line item/unit price line item/usage net amount payment terms prior amount due prior paid amount purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website reclaimed water remit to address remit to name service service/service end date service/service id service/service start date service/unit of measure service/usage service address service end date service id service start date ship from address ship from name ship to address ship to name supplier account number supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website tampering total amount total tax amount usage vat vat/amount vat/category code vat/tax amount vat/tax rate Normalized fields You can find more information in the Enrichment & normalization page.
- Full list of fields amount paid since last invoice carrier currency currency exchange rate delivery date due date freight amount invoice date invoice id line item line item/amount line item/description line item/product code line item/purchase order line item/quantity line item/unit line item/unit price net amount payment terms purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website remit to address remit to name ship from address ship from name ship to address ship to name supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website total amount total tax amount vat vat/amount vat/category code vat/tax amount vat/tax rate Enriched fields You can find more information in the Enrichment & normalization page.

