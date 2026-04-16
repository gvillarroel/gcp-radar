---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.075Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Form parser"
feature_slug: "form-parser"
latest_feature_date: "2020-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/form-parser"
  - "https://docs.cloud.google.com/document-ai/docs/overview"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
  - "https://docs.cloud.google.com/document-ai/docs/extracting-overview"
keywords:
  - "form"
  - "parser"
  - "extracts"
  - "structured"
  - "fields"
  - "from"
  - "forms"
---

# Form parser

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Form parser extracts structured fields from forms.

## Extended Definition

Form parser extracts structured fields from forms.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/form-parser](https://docs.cloud.google.com/document-ai/docs/form-parser)
- [https://docs.cloud.google.com/document-ai/docs/overview](https://docs.cloud.google.com/document-ai/docs/overview)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- [https://docs.cloud.google.com/document-ai/docs/extracting-overview](https://docs.cloud.google.com/document-ai/docs/extracting-overview)

## Supporting Pages

### Form Parser \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/form-parser](https://docs.cloud.google.com/document-ai/docs/form-parser)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Form Parser can be considered over the other parsers when the use case involves: Dealing with structured forms: It excels at extracting KVPs from well-defined forms that look like conventional forms with labeled blanks to fill in, such as name: .
- Form Parser extracts key-value pairs (KVPs), tables, selection marks (like checkboxes), generic fields, and text to augment and automate document processing.
- Flexible table extraction is needed: Form Parser extracts from simple (no cells that span rows or columns) tables that look like tables.
- Create a Form Parser processor, which can identify and extract text, key-value pairs, tables, and generic entities from many types of documents.

### Document AI overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/overview](https://docs.cloud.google.com/document-ai/docs/overview)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Document AI components Document AI is a document processing and understanding platform that takes unstructured data from documents and transforms it into structured data (specific fields, suitable for a database), making it easier to understand, analyze, and consume.
- Identify key-value pairs (kvp) in structured forms and regular tables.
- Extract Extract tables or kvp from a structured form in a document.
- Extracting income information from tax forms for approving loans.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Full list of fields adjusted amount amount due balance transfer amount carrier currency currency exchange rate delivery date deposit credited amount due date freight amount invoice date invoice id late fee amount line item line item/amount line item/description line item/frequency line item/product code line item/purchase order line item/quantity line item/service address line item/service end date line item/service id 1 line item/service id 2 line item/service start date line item/supplier account number line item/tax amount line item/unit number line item/unit of measure line item/unit price line item/usage net amount payment terms prior amount due prior paid amount purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website reclaimed water remit to address remit to name service service/service end date service/service id service/service start date service/unit of measure service/usage service address service end date service id service start date ship from address ship from name ship to address ship to name supplier account number supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website tampering total amount total tax amount usage vat vat/amount vat/category code vat/tax amount vat/tax rate Normalized fields You can find more information in the Enrichment & normalization page.
- Category Extract Functions OCR, Form Parsing, Entity Extraction Release stage General availability Access status Public lock open Type in API FORM PARSER PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Belarusian be Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Korean ko Kore Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-form-parser-v1.0-2020-09-23 Stable GA None Legacy version.
- Full list of fields amount paid since last invoice carrier currency currency exchange rate delivery date due date freight amount invoice date invoice id line item line item/amount line item/description line item/product code line item/purchase order line item/quantity line item/unit line item/unit price net amount payment terms purchase order receiver address receiver email receiver name receiver phone receiver tax id receiver website remit to address remit to name ship from address ship from name ship to address ship to name supplier address supplier email supplier iban supplier name supplier payment ref supplier phone supplier registration supplier tax id supplier website total amount total tax amount vat vat/amount vat/category code vat/tax amount vat/tax rate Enriched fields You can find more information in the Enrichment & normalization page.
- For best quality and full feature set, use the Form Parser v2.0. pretrained-form-parser-v2.0-2022-11-10 Stable GA Show fields email phone url date time address person organization quantity price id page number Recommended version.

### Extraction overview \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/extracting-overview](https://docs.cloud.google.com/document-ai/docs/extracting-overview)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Document AI offers multiple products to extract information from documents for different use cases: Form Parser Custom extractor, which offers three different modeling types: Foundation model Custom model based Custom template based Layout Parser Form Parser Form Parser extracts key-value pairs (KVP), tables, selection marks (checkboxes), and generic fields to augment and automate extraction.
- Layout Parser Note: Layout Parser is in Public preview Layout Parser transforms documents in various formats into structured representations, making content like paragraphs, tables, lists, and structural elements like headings, page headers, and footers accessible, and creating context-aware chunks that facilitate information retrieval in a range of generative AI and discovery apps.
- You don't specify the fields (schema), you want to extract with the Form Parser.
- Next Form Parser arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

