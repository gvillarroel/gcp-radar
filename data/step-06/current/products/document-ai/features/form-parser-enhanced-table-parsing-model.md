---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.983Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Form Parser enhanced table parsing model"
feature_slug: "form-parser-enhanced-table-parsing-model"
latest_feature_date: "2022-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/form-parser"
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
  - "https://docs.cloud.google.com/document-ai/docs/languages"
keywords:
  - "form"
  - "parser"
  - "enhanced"
  - "table"
  - "parsing"
  - "model"
  - "extraction"
  - "now"
---

# Form Parser enhanced table parsing model

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Form Parser table extraction now uses an enhanced vision-based table parsing model.

## Extended Definition

Form Parser table extraction now uses an enhanced vision-based table parsing model.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/form-parser](https://docs.cloud.google.com/document-ai/docs/form-parser)
- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)

## Supporting Pages

### Form Parser \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/form-parser](https://docs.cloud.google.com/document-ai/docs/form-parser)
- Source ID: `site-docs-root-2`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Flexible table extraction is needed: Form Parser extracts from simple (no cells that span rows or columns) tables that look like tables.
- Data-extraction features Form Parser features encompass: KVP: These are sets of two items within a document—a label or key and its corresponding data (a value).
- Form Parser extracts key-value pairs (KVPs), tables, selection marks (like checkboxes), generic fields, and text to augment and automate document processing.
- Create a Form Parser processor, which can identify and extract text, key-value pairs, tables, and generic entities from many types of documents.

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Document . from batch process operation ( location = "us" , operation name = batch process operation ) wrapped document = wrapped documents [ 0 ] else : raise ValueError ( "No document source provided." ) For all properties and methods, refer to: https://cloud.google.com/python/docs/reference/documentai-toolbox/latest/google.cloud.documentai toolbox.wrappers.document.Document print ( "Document Successfully Loaded!" ) print ( f " \t Number of Pages: { len ( wrapped document . pages ) } " ) print ( f " \t Number of Entities: { len ( wrapped document . entities ) } " ) for page in wrapped document . pages : print ( f "Page { page . page number } " ) for block in page . blocks : print ( block . text ) for paragraph in page . paragraphs : print ( paragraph . text ) for line in page . lines : print ( line . text ) for token in page . tokens : print ( token . text ) Only supported with Form Parser processor https://cloud.google.com/document-ai/docs/form-parser for form field in page . form fields : print ( f " { form field . field name } : { form field . field value } " ) Only supported with Enterprise Document OCR version pretrained-ocr-v2.0-2023-06-02 https://cloud.google.com/document-ai/docs/process-documents-ocr#enable symbols for symbol in page . symbols : print ( symbol . text ) Only supported with Enterprise Document OCR version pretrained-ocr-v2.0-2023-06-02 https://cloud.google.com/document-ai/docs/process-documents-ocr#math ocr for math formula in page . math formulas : print ( math formula . text ) Only supported with Entity Extraction processors https://cloud.google.com/document-ai/docs/processors-list for entity in wrapped document . entities : print ( f " { entity . type } : { entity . mention text } " ) if entity . normalized text : print ( f " \t Normalized Text: { entity . normalized text } " ) Only supported with Layout Parser for chunk in wrapped document . chunks : print ( f "Chunk { chunk . chunk id } : { chunk . content } " ) for block in wrapped document . document layout blocks : print ( f "Document Layout Block { block . block id } " ) if block . text block : print ( f " { block . text block . type } : { block . text block . text } " ) if block . list block : print ( f " { block . list block . type } : { block . list block . list entries } " ) if block . table block : print ( block . table block . header rows , block . table block . body rows ) Tables from google.cloud.documentai toolbox import document TODO(developer): Uncomment these variables before running the sample.
- The keys in KVPs are literally what the key text is on the document. { "pages:" [ { "formFields" : [ { "fieldName" : { ... }, "fieldValue" : { ... } } ] } ] } Document AI can also detect Tables in the page. { "pages:" [ { "tables" : [ { "layout" : { ... }, "headerRows" : [ { "cells" : [ { "layout" : { ... }, "rowSpan" : 1 , "colSpan" : 1 }, { "layout" : { ... }, "rowSpan" : 1 , "colSpan" : 1 } ] } ], "bodyRows" : [ { "cells" : [ { "layout" : { ... }, "rowSpan" : 1 , "colSpan" : 1 }, { "layout" : { ... }, "rowSpan" : 1 , "colSpan" : 1 } ] } ] } ] } ] } The table extraction within Form Parser only recognizes conventional tables, those without cells that span rows or columns.
- For more information on how to parse OCR data please see the OCR sample. text = document . text print ( f "Full document text: { repr ( text ) } \n " ) print ( f "There are { len ( document . pages ) } page(s) in this document." ) Read the form fields and tables output from the processor for page in document . pages : print ( f " \n\n Page { page . page number } " ) print ( f " \n Found { len ( page . tables ) } table(s):" ) for table in page . tables : num columns = len ( table . header rows [ 0 ] . cells ) num rows = len ( table . body rows ) print ( f "Table with { num columns } columns and { num rows } rows:" ) Print header rows print ( "Columns:" ) print table rows ( table . header rows , text ) Print body rows print ( "Table body data:" ) print table rows ( table . body rows , text ) print ( f " \n Found { len ( page . form fields ) } form field(s):" ) for field in page . form fields : name = layout to text ( field . field name , text ) value = layout to text ( field . field value , text ) print ( f " { repr ( name . strip ()) } : { repr ( value . strip ()) } " ) Supported in version pretrained-form-parser-v2.0-2022-11-10 and later.
- This function converts offsets to a string. """ If a text segment spans several lines, it will be stored in different text segments. return "" . join ( text [ int ( segment . start index ) : int ( segment . end index )] for segment in layout . text anchor . text segments ) Forms and tables Here's our sample form: Here's the full document object as returned by the Form Parser : Download JSON Here are some of the important fields: The Form Parser is able to detect FormFields in the page.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Category Extract Functions OCR, Form Parsing, Entity Extraction Release stage General availability Access status Public lock open Type in API FORM PARSER PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Belarusian be Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Korean ko Kore Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-form-parser-v1.0-2020-09-23 Stable GA None Legacy version.
- Launched in April 2021. pretrained-expense-v1.3.2-2024-09-11 Release Candidate Public Preview Show fields credit card last four digits line item/quantity payment type ja : Japanese A fine-tuned upgrade to v1.3 with an enhanced underlying vision model. pretrained-expense-v1.4-2022-11-18 Stable GA Show fields traveler name reservation id line item/transaction date ja : Japanese it : Italian pt : Portuguese (Portugal & Brazil) Performance improvements and support for uptraining.
- Supports generic entities and includes upgraded table, KVP, and checkbox model, as well as more than 200 languages. pretrained-form-parser-v2.1-2023-06-26 Release Candidate Public Preview None Public Preview version.
- Category pretrained Functions Summarize Release stage Preview Access status Public lock open Type in API SUMMARY PROCESSOR Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-foundation-model-v1.0-2023-08-22 Stable GA Google foundation model For more information, see Managing processor versions.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Category Extract Functions OCR, Form Parsing, Entity Extraction Release stage General availability Access status Public lock open Type in API FORM PARSER PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Belarusian be Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Korean ko Kore Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-form-parser-v1.0-2020-09-23 Stable GA None Legacy version.
- Launched in April 2021. pretrained-expense-v1.3.2-2024-09-11 Release Candidate Public Preview Show fields credit card last four digits line item/quantity payment type ja : Japanese A fine-tuned upgrade to v1.3 with an enhanced underlying vision model. pretrained-expense-v1.4-2022-11-18 Stable GA Show fields traveler name reservation id line item/transaction date ja : Japanese it : Italian pt : Portuguese (Portugal & Brazil) Performance improvements and support for uptraining.
- Supports generic entities and includes upgraded table, KVP, and checkbox model, as well as more than 200 languages. pretrained-form-parser-v2.1-2023-06-26 Release Candidate Public Preview None Public Preview version.
- Category pretrained Functions Summarize Release stage Preview Access status Public lock open Type in API SUMMARY PROCESSOR Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Description pretrained-foundation-model-v1.0-2023-08-22 Stable GA Google foundation model For more information, see Managing processor versions.

